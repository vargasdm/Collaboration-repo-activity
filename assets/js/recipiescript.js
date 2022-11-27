var whatCuisine = "american";
var tester = document.querySelector("#tester");
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
    .then((response) => console.log(response))
    .then (function (data) {
    temp="";
    for(i=0;i<4;i++){
      foodName = data.hits[0].recipe.label;
      foodLink = data.hits=[0].recipe.shareAs;
      //foodIng = data.hits=[0].recipe.ingredientLines;
      foodImg = data.hits=[0].recipe.image;
    }
      populate()
    })
    };
    function populate(){
      var recipeName = document.getElementById('#recipe-1')
      var foodImage = document.getElementById('#recipe-1')
      var recipeInfo = document.getElementById('#recipe-1')
      
      recipeName.innerHTML = foodName;
      foodImage.replace(img) = foodImg;
    };
    tester.addEventListener('click', getRecipie);
    //getRecipie();
    //mexican, italian,  chinese, american
    //${chinese}
    // for loop (in html make ul)
    //create li element & li.textContent = data.hits.recipe.ingredientLines[i]
    //append li to ul.

    