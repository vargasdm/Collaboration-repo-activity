var selectElement = document.querySelector('#cuisine-select')
var selectedCuisine;
// Create function to check if user entered city and selected a cuisine type
//      alert with a modal if user has not 

// Get the input from the dropdown box and city name input

// Store user input into local storage
document.getElementById("outBtn").addEventListener("click", saveToLocalStorage);
function saveToLocalStorage() {
    // only will append local storage if input is not empty
    if (cityName !== "") {
        // sets variable to be the what the user puts in the text area
        let searchText = document.getElementById("cityName").value;
        console.log(searchText);
        localStorage.setItem('city-name', JSON.stringify(searchText));

        // stores user cuisine choice
        selectedCuisine = selectElement.value;
        console.log(selectedCuisine)
        localStorage.setItem('cuisine-name', JSON.stringify(selectedCuisine));
        
    }

}
// Match the dropdown box input to the apis parameters (if needed)

// Fetch data from apis

// Append recipie data to populate the apis data into the html