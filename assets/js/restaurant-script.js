var zomatoApiKey = "173297606dd309e858d947e8c0e0562c";
var openWeatherApiKey = "40a12dd5d21fb2676b3f9bbaa7760c97";
var geocodeBaseUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
var cityName = JSON.parse(localStorage.getItem("city-name"));
var geoLat;
var geoLon;
var cityData;
var localRestaurants = [];
var myHeaders = new Headers();
var searchedCuisine = JSON.parse(localStorage.getItem("cuisine-name"));
var restaurantBlocks = document.getElementById("restaurant-1-name");
var restaurantList = document.getElementById("restaurant-list");

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
    var geoLat = geoData[0].lat;
    geoLat.toString();
    var geoLon = geoData[0].lon;

    // fetches the city data based on lat and lon
    fetch("https://developers.zomato.com/api/v2.1/geocode?lat=" + geoLat + "&lon=" + geoLon, requestOptions)
      .then(response => response.json())
      .then(result => {
        cityData = result
        cityData = cityData.nearby_restaurants
        localRestaurants = cityData.filter(localCuisine);
        function localCuisine(cityData) {
          return cityData.restaurant.cuisines.includes(searchedCuisine);
        }

        function renderRestaurants() {
          if (localRestaurants.length !== 0 || null || undefined) {
            for (var i = 0; i < localRestaurants.length; i++) {

              var newRestaurantEl = document.createElement("li")
              newRestaurantEl.classList.add("m-3", "is-size-4", "has-text-weight-medium");
              newRestaurantEl.textContent = localRestaurants[i].restaurant.name
              restaurantList.appendChild(newRestaurantEl)

              var newRestaurantImgEl = document.createElement("img")
              newRestaurantImgEl.setAttribute("src", localRestaurants[i].restaurant.featured_image);
              newRestaurantImgEl.classList.add("image", "is-inline-block");
              console.log(newRestaurantImgEl);
              restaurantList.appendChild(newRestaurantImgEl);

              var newRestaurantAddressEl = document.createElement("p")
              newRestaurantAddressEl.classList.add("is-size-5");
              newRestaurantAddressEl.textContent = "Address: " + localRestaurants[i].restaurant.location.address;
              newRestaurantEl.appendChild(newRestaurantAddressEl);

              var newRestaurantReviewEl = document.createElement("p")
              newRestaurantReviewEl.classList.add("is-size-5");
              newRestaurantReviewEl.textContent = "Review: " + localRestaurants[i].restaurant.user_rating.aggregate_rating;
              newRestaurantEl.appendChild(newRestaurantReviewEl);

            }
          } else {
            const modal = document.querySelector(".modal");
            const openModalBtn = document.querySelector(".btn-open");
            const closeModalBtn = document.querySelector(".btn-close");

            modal.classList.remove("hidden");
            // close modal function
            const closeModal = function () {
              modal.classList.add("hidden");
            };
            // close the modal when the close button and overlay is clicked
            closeModalBtn.addEventListener("click", closeModal);

            // close modal when the Esc key is pressed
            document.addEventListener("keydown", function (e) {
              if (e.key === "Escape" && !modal.classList.contains("hidden")) {
                closeModal();
              }
            });
          }
        }


        renderRestaurants();
      })
      .catch(error => console.log('error', error))



  });


