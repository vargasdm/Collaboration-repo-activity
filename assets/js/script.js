//Access point
//https://api.edamam.com/api/recipes/v2
//Chicken search
//https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=92ab2308&app_key=%20706c2dd3a836b5b928bb38b5670b9ab2%09
//appID: 92ab2308
//appKey: 706c2dd3a836b5b928bb38b5670b9ab2

//{{'https://api.edamam.com/api/recipes/v2'}}search?q=chicken&app_id={{92ab2308}}&app_key={{706c2dd3a836b5b928bb38b5670b9ab2}}
var whatCuisine = 
function getRecipie() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e5a9a1f7a1msh68206fd4776cc64p1ae6c8jsnbf0c311b27bc",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };

  fetch(
    `https://edamam-recipe-search.p.rapidapi.com/search?q=${whatCuisine}`,options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
getRecipie();
// console.log(response);

// var key = "e5a9a1f7a1msh68206fd4776cc64p1ae6c8jsnbf0c311b27bc";

// var url =
//   "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=92ab2308&app_key=%20706c2dd3a836b5b928bb38b5670b9ab2%09";

// var chickenCall = function (url) {
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       console.log(response);
//     });
// };
// chickenCall();
// console.log("testhere");
//mexican, chinese, italian