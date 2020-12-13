function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector(".todays-temp").innerHTML = Math.round(response.data.main.temp);

  document.querySelector("#forecast").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "78d3b65d4ded0780d61de8138d56d21c"; 
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation() {
  let apiKey = "78d3b65d4ded0780d61de8138d56d21c"; 
  let lat = position.coords.latitude
  let lon = position.coords.longitude
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function changeCTemp(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector(".celsius");
  let temperature = document.querySelector(".todays-temp");
  temperature.innerHTML = " 16 ";
}

function changeFTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = document.querySelector(".fahrenheit");
  let temperature = document.querySelector(".todays-temp");
  temperature.innerHTML = "";
}

let cityInput = document.querySelector("h1");
let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", handleSubmit);

let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let day = days[now.getDay()];
let weekday = document.querySelector(".todays-date");
let weekNumber = document.querySelector(".todays-numerical");
weekday.innerHTML = `${day}`;
weekNumber.innerHTML = `${month} ${now.getDate()}`;

let celsiusTemp = document.querySelector(".celsius");
let fahrenheitTemp = document.querySelector(".fahrenheit");
let temperature = document.querySelector(".todays-temp");
celsiusTemp.addEventListener("click", changeCTemp);
fahrenheitTemp.addEventListener("click", changeFTemp);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("San Francisco");




