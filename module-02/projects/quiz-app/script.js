const correctAnswers = ['c', 'b', 'a', 'a'];


const quizForm = document.querySelector(".quiz-form");
const result = document.querySelector(".result");


quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value];

    const totalQuestions = correctAnswers.length;
    const scorePerQuestion = 100 / totalQuestions;

    console.log(scorePerQuestion)


    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            console.log(userAnswer)
            score += scorePerQuestion
        }
    })

    scrollTo(0, 0);
    result.classList.remove("d-none");

    let output = 0;

    const timer = setInterval(() => {

        result.querySelector("span").textContent = `${output}%`;
        if (score === output) {
            clearInterval(timer)
        } else {
            output++;
        }
    }, 10);


})


// let i = 0;

// const timer = setInterval(() => {
//     i++;
//     console.log(i);
//     if (i === 5) {
//         clearInterval(timer)
//     }
// }, 1000)


// setTimeout(() => {
//     console.log("Time Out!");
// }, 3000)


// setInterval(() => {
//     console.log("run")
// }, 1000)