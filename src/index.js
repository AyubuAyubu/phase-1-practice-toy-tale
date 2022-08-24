let addToy = false;
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const addToyForm = document.querySelector(".add-toy-form")

document.addEventListener("DOMContentLoaded", () => {
  fetchToys();
  addBtn.addEventListener("click", toggleForm);
  addToyForm.addEventListener("submit", submitNewToy);
});

// hide & see the form
let toggleForm = () => {
  addToy = !addToy;
  if (addToy) {
     toyFormContainer.style.display = "block";
  } else {
     toyFormContainer.style.display = "none";
  }
}
// Fetches the toys details / info using the url provided.
let fetchToys = () => {
  fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(toys => { renderToyDetails(toys) })
  .catch(error => { alert("Error as occur!") });
}

// Renders toy details for each retrieved toy from the response
let renderToyDetails = toys => {
  toys.forEach(toy => { createCardElement(toy) })
}
/*
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
*/

