const quizData = [
  { question: "What is the capital of France?", options: ["London", "Berlin", "Paris"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter"], answer: "Mars" },
  { question: "What is the capital of Pakistan?", options: ["Islamabad", "Karachi", "Lahore"], answer: "Islamabad" },
  { question: "What is the national language of Pakistan?", options: ["Urdu", "English", "Punjabi"], answer: "Urdu" },
  { question: "Which ocean is the largest in the world?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
  { question: "How many continents are there on Earth?", options: ["Five", "Seven", "Nine"], answer: "Seven" },
  { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Go"], answer: "Au" },
  { question: "Which animal is known as the largest mammal?", options: ["African elephant", "Blue whale", "Giraffe"], answer: "Blue whale" },
  { question: "Who wrote the play Romeo and Juliet?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen"], answer: "William Shakespeare" },
  { question: "What is 9 × 8?", options: ["63", "72", "81"], answer: "72" }
];

const storageKey = "brightQuizAnswers";
const quizForm = document.querySelector(".quiz-form");
const quizShell = document.querySelector(".quiz-shell");
const results = document.querySelector(".results");
const questionTitle = document.querySelector("#question-title");
const answersContainer = document.querySelector(".answers");
const questionCount = document.querySelector(".question-count");
const answeredCount = document.querySelector(".answered-count");
const progressTrack = document.querySelector(".progress-track");
const progressValue = document.querySelector(".progress-value");
const formMessage = document.querySelector(".form-message");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const themeToggle = document.querySelector(".theme-toggle");
let currentQuestion = 0;
let answers = loadAnswers();

function loadAnswers() {
  try {
    const savedAnswers = JSON.parse(sessionStorage.getItem(storageKey));
    return Array.isArray(savedAnswers) && savedAnswers.length === quizData.length ? savedAnswers : Array(quizData.length).fill(null);
  } catch {
    return Array(quizData.length).fill(null);
  }
}

function saveAnswers() { sessionStorage.setItem(storageKey, JSON.stringify(answers)); }

function renderQuestion() {
  const item = quizData[currentQuestion];
  const answeredTotal = answers.filter(Boolean).length;
  const isFinalQuestion = currentQuestion === quizData.length - 1;
  questionTitle.textContent = item.question;
  questionCount.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  answeredCount.textContent = `${answeredTotal} of ${quizData.length} answered`;
  progressTrack.setAttribute("aria-valuenow", currentQuestion + 1);
  progressValue.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
  previousButton.disabled = currentQuestion === 0;
  nextButton.innerHTML = isFinalQuestion ? "See results <span aria-hidden=\"true\">→</span>" : "Next question <span aria-hidden=\"true\">→</span>";
  formMessage.textContent = "";
  answersContainer.replaceChildren();
  item.options.forEach((option, index) => {
    const id = `answer-${currentQuestion}-${index}`;
    const label = document.createElement("label");
    label.className = "answer-option";
    label.htmlFor = id;
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${currentQuestion}`;
    input.id = id;
    input.value = option;
    input.checked = answers[currentQuestion] === option;
    input.addEventListener("change", () => {
      answers[currentQuestion] = option;
      saveAnswers();
      renderQuestion();
    });
    const marker = document.createElement("span");
    marker.className = "radio-marker";
    const text = document.createElement("span");
    text.textContent = option;
    label.append(input, marker, text);
    answersContainer.append(label);
  });
}

function moveQuestion(direction) {
  currentQuestion = Math.min(Math.max(currentQuestion + direction, 0), quizData.length - 1);
  renderQuestion();
  questionTitle.focus();
}

function showResults() {
  const unanswered = answers.map((answer, index) => answer ? null : index + 1).filter(Boolean);
  if (unanswered.length) {
    formMessage.textContent = `Please answer question${unanswered.length > 1 ? "s" : ""} ${unanswered.join(", ")} before seeing your results.`;
    return;
  }
  const correctTotal = quizData.filter((item, index) => item.answer === answers[index]).length;
  const percentage = quizData.length ? Math.round((correctTotal / quizData.length) * 100) : 0;
  quizShell.hidden = true;
  results.hidden = false;
  document.querySelector(".score-number").textContent = `${percentage}%`;
  document.querySelector(".score-summary").textContent = `${correctTotal} of ${quizData.length} answers correct`;
  renderReview();
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderReview() {
  const reviewList = document.querySelector(".review-list");
  reviewList.replaceChildren();
  quizData.forEach((item, index) => {
    const isCorrect = answers[index] === item.answer;
    const article = document.createElement("article");
    article.className = `review-item ${isCorrect ? "is-correct" : "is-incorrect"}`;
    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${item.question}`;
    const response = document.createElement("p");
    response.textContent = isCorrect ? `Correct — ${item.answer}` : `Your answer: ${answers[index] || "Not answered"}. Correct answer: ${item.answer}.`;
    article.append(heading, response);
    reviewList.append(article);
  });
}

function resetQuiz() {
  answers = Array(quizData.length).fill(null);
  currentQuestion = 0;
  sessionStorage.removeItem(storageKey);
  results.hidden = true;
  quizShell.hidden = false;
  renderQuestion();
  quizShell.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  localStorage.setItem("brightQuizTheme", theme);
}

previousButton.addEventListener("click", () => moveQuestion(-1));
nextButton.addEventListener("click", () => currentQuestion === quizData.length - 1 ? showResults() : moveQuestion(1));
quizForm.addEventListener("submit", (event) => { event.preventDefault(); showResults(); });
document.querySelector(".retry-button").addEventListener("click", resetQuiz);
document.querySelector(".home-button").addEventListener("click", () => { results.hidden = true; quizShell.hidden = false; renderQuestion(); quizShell.scrollIntoView({ behavior: "smooth", block: "start" }); });
themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
setTheme(localStorage.getItem("brightQuizTheme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
renderQuestion();
