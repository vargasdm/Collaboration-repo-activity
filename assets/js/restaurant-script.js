var zomatoApiKey = "173297606dd309e858d947e8c0e0562c";
var openWeatherApiKey = "40a12dd5d21fb2676b3f9bbaa7760c97";
var geocodeBaseUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
var cityName = "Raleigh";
// var cityName = JSON.parse(localStorage.getItem("city-name"));
var geoLat;
var geoLon;
var cityData;
var localRestaurants = [];
var myHeaders = new Headers();
var searchedCuisine = JSON.parse(localStorage.getItem("cuisine-name"));
var restaurantBlocks = document.getElementById("restaurant-1-name");

myHeaders.append("user-key", zomatoApiKey);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var queryGeoUrl = geocodeBaseUrl + cityName + "&appid=" + openWeatherApiKey;
fetch(queryGeoUrl, {})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var geoData = data;
    console.log(geoData)
    var geoLat = geoData[0].lat;
    console.log(geoLat)
    geoLat.toString();
    var geoLon = geoData[0].lon;
    console.log(geoLon)
    console.log(geoLon);

    // fetches the city data based on lat and lon
    fetch("https://developers.zomato.com/api/v2.1/geocode?lat=" + geoLat + "&lon=" + geoLon, requestOptions)
      .then(response => response.json())
      .then(result => {
        cityData = result
        console.log(cityData)
        cityData = cityData.nearby_restaurants
        console.log(cityData)
        localRestaurants = cityData.filter(localCuisine);
        function localCuisine(result) {
          // have to check if this works
          // if (result.restaurant.cuisines === searchedCuisine) {
          //   return;
          // }
          return result.restaurant.cuisines === "Mexican";
        }
        console.log(localRestaurants)

        function renderRestaurants() {
          // restaurantBlocks.innerHTML = "";
          var restaurantOneTitle = localRestaurants[0].restaurant.name
          restaurantBlocks.appendChild(restaurantOneTitle)
          // console.log(restaurantBlocks.textcontent);
        }

        renderRestaurants();
      })
      .catch(error => console.log('error', error))



  });


