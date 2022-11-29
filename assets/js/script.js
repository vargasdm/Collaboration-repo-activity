var selectElement = document.querySelector("#cuisine-select");
var selectedCuisine;
var cityName = document.querySelector(".cityName");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var closeModalBtn = document.querySelector(".btn-close");

// Create function to check if user entered city and selected a cuisine type
//alert with a modal if user has not
function checkInput(btnLabel) {
  if (selectedCuisine == "Select Cuisine" || cityName == "") {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log(selectedCuisine);
  } else if (btnLabel === "dine-in") {
    location.href = "recipes.html";
  } else {
    location.href = "restaurant.html";
  }
}

// Close modal if its open on the page
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Store user input into local storage
var buttons = document.querySelectorAll(".button");
for (var button of buttons) {
  button.addEventListener("click", saveToLocalStorage);
}
function saveToLocalStorage(event) {
  var btnLabel = event.target.getAttribute("data-label");
  console.log(btnLabel);
  // only will append local storage if input is not empty
  if (cityName !== "") {
    // sets variable to be the what the user puts in the text area
    let searchText = document.getElementById("cityName").value;
    console.log(searchText);
    localStorage.setItem("city-name", JSON.stringify(searchText));

    // stores user cuisine choice
    selectedCuisine = selectElement.value;
    console.log(selectedCuisine);
    localStorage.setItem("cuisine-name", JSON.stringify(selectedCuisine));
    checkInput(btnLabel);
  }
}


