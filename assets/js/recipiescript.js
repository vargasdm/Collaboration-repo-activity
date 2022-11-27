var whatCuisine =  JSON.parse(localStorage.getItem("cuisine-name")); //"american";
var tester = document.querySelector("#tester");
var newRecipie = document.getElementById('recipieList')
//localStorage.getItem("choice");

function getRecipie() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e5a9a1f7a1msh68206fd4776cc64p1ae6c8jsnbf0c311b27bc",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };

  fetch(
    `https://edamam-recipe-search.p.rapidapi.com/search?q=${whatCuisine}`, options)
    .then((response) => response.json())
    .then((response) => {
    recipeInfo = response
    console.log(recipeInfo);
      console.log(response);
 var foodName = recipeInfo.hits[0].recipe.label;
 var foodLink = recipeInfo.hits[0].recipe.shareAs;
 var  foodImg = recipeInfo.hits[0].recipe.image;
 console.log(foodName);
 console.log(foodLink);
 console.log(foodImg);
 } )}
    ;
    
    function populate(){
      for (var i = 0; i < 5; i++) {
        var listInfo = document.createElement("li");
        newRecipie.classList.add("m-3", "is-size-4", "has-text-weight-medium")
        newRecipie.style.display = "center";
        newRecipie.textContent = foodName[i];
        listInfo.appendChild(newRecipie)
      // var recipeName = document.getElementById('#recipe-1')
      // var foodImage = document.getElementById('#recipe-1')
      // var foodInfo = document.getElementById('#recipe-1')
      
      recipeName.innerHTML = foodName;
      foodImage.replace(img) = foodImg;
    }};
    //tester.addEventListener('click', getRecipie);
    //getRecipie();
    //mexican, italian,  chinese, american
    //${chinese}
    // for loop (in html make ul)
    //create li element & li.textContent = data.hits.recipe.ingredientLines[i]
    //append li to ul.
    //for(i=0;i<4;i++){}

    