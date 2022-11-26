var zomatoApiKey = "173297606dd309e858d947e8c0e0562c";
var openWeatherApiKey = "40a12dd5d21fb2676b3f9bbaa7760c97";
var geocodeBaseUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
var cityName = "Raleigh";
var geoLat;
var geoLon;
// beforeSend: function (request) {
//     request.setRequestHeader("user-key", "173297606dd309e858d947e8c0e0562c");
// }

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
            // fetches the city id based on lat and lon
            
        fetch("https://developers.zomato.com/api/v2.1/geocode?lat=" + geoLat + "&lon=" + geoLon, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
            var cityData = result;
            console.log(cityData);
        });



var myHeaders = new Headers();
myHeaders.append("user-key", zomatoApiKey);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
// fetches catagories for api
fetch("https://developers.zomato.com/api/v2.1/categories", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

;
// fetches the establishment based on lon lat and city id
fetch("https://developers.zomato.com/api/v2.1/establishments?lat=" + geoLat + "&lon=" + geoLon + "&city_id=1", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));