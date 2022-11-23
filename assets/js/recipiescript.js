var whatCuisine = "american";
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
    .then (function (hits) {
     // var foodImg = hits[0].recipe.image;
      var foodLink = hits[1].recipe.shareAs;
      var foodIng = hits[0].recipe.ingredientLines;
      console.log(foodImg, foodLink, foodIng);
    })
    .catch((err) => console.error(err))
}
getRecipie();

//mexican, italian,  chinese, american
//${chinese}
// for loop (in html make ul)
//create li element & li.textContent = data.hits.recipe.ingredientLines[i]
//append li to ul.