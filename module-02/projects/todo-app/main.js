const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");
const addButton = document.querySelector(".btn");

let editIndex = null;

addForm.addEventListener("submit", function (e) {
  e.preventDefault();


  if (editIndex === null) {
    list.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
       <span>${addForm.add.value}</span>
       <div>
         <i class="fas fa-edit edit"></i>
         <i class="far fa-trash-alt delete"></i>
       </div>
     </li>

 `;
  } else {
    list.children[editIndex].querySelector("span").textContent = addForm.add.value;
    editIndex = null
    addButton.textContent = "Add Todo";
  }

  addForm.reset();
});

list.addEventListener("click", function (e) {

  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }


  if (e.target.classList.contains("edit")) {
    const items = list.children;
    const targetItem = e.target.parentElement.parentElement;
    addButton.textContent = "Update Todo";


    for (let i = 0; i < items.length; i++) {
      if (items[i] === targetItem) {
        editIndex = i
      }
    }

    addForm.add.value = targetItem.querySelector("span").textContent
  }
});



search.addEventListener("keyup", function (e) {
  console.log()
  const searchText = e.target.value.toLowerCase().trim();
  const items = list.children;

  for (let i = 0; i < list.children.length; i++) {
    if (!items[i].textContent.toLowerCase().includes(searchText)) {
      items[i].classList.add("filtered")
    } else {
      items[i].classList.remove("filtered")
    }
  }

});


// localStorage.setItem('theme', JSON.stringify([{ id: 101 }]))

// console.log(JSON.parse(localStorage.getItem('theme')))