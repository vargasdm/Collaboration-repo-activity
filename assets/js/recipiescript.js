var whatCuisine = JSON.parse(localStorage.getItem("cuisine-name")); //"american";
var tester = document.querySelector("#tester");
var placeInfo = document.querySelector("#recipieList");
var foodName;
var foodLink;
var foodImg;
//get info from Edamam Api
function getRecipie() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e5a9a1f7a1msh68206fd4776cc64p1ae6c8jsnbf0c311b27bc",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };

  fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${whatCuisine}`, options)
    //assign info to varaible
    .then((response) => response.json())
    .then((response) => {
      recipeInfo = response;
      console.log(recipeInfo);
      //console.log(response);
      foodName = recipeInfo.hits[0].recipe.label;
      foodLink = recipeInfo.hits[0].recipe.shareAs;
      foodImg = recipeInfo.hits[0].recipe.image;
      console.log(foodName);
      console.log(foodLink);
      console.log(foodImg);
    });
}
getRecipie()
// loop through 3-5 recipies
function populate() {
  for (var i = 0; i < 5; i++) {

    var listInfo = document.createElement("li");
    listInfo.classList.add("m-3", "is-size-4", "has-text-weight-medium");
    listInfo.style.display = "center";
    listInfo.textContent = foodName[i];
    placeInfo.appendChild(listInfo)

    var imgInfo = document.createElement("img");
    imgInfo.setAttribute("src", foodImg[i])
    imgInfo.style.display = "block";
    listInfo.appendChild(imgInfo);

    var recipeLink = document.createElement("p");
    recipeLink.classList.add("is-size-5");
    recipeLink.textContent = foodLink[i];
    imgInfo.appendChild(recipeLink);
  }  
}
populate();
//tester.addEventListener('click', getRecipie);
//getRecipie();
// for loop (in html make ul)
//for(i=0;i<4;i++){}
