import { getCity, getCurrentConditions } from "./forecast.js";
// Q: Why can't use import these forecast functions?
// NOTE They're already available when we add the forecast <script>
// before/above the <script> for this file.
// A: SOLVED! I need to use type="module" for app.js <script>!
// This means that I do not need to add <script> for forecast.js
// inside the index.html

// DOM Elements
const cityInput = document.querySelector("input[name='city']");
const weatherCard = document.querySelector(".card");
const detailsCard = document.querySelector(".details");
const timeImage = document.querySelector("img.time");
const iconImage = document.querySelector("img.icon");

// Functions
async function updateCity(city) {
  const cityDetails = await getCity(city);
  console.log(cityDetails);
  const weather = await getCurrentConditions(cityDetails.Key);
  console.log(weather);

  // Return both objects so have full access to all information
  return { cityDetails, weather };
}

function updateUI(data) {
  const { cityDetails, weather } = data;

  // Update Details and Icon
  detailsCard.innerHTML = `
    <h2 class="city card-title text-4xl">${cityDetails.EnglishName}</h2>
    <p class="conditions">${weather.WeatherText}</p>
    <img src="./images/icons/${weather.WeatherIcon}.svg" alt="${weather.WeatherText}" class="icon" />
    <div class="temperature text-4xl">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;: C</span>
    </div>
  `;

  // Update time image
  if (weather.IsDayTime) {
    timeImage.src = "../images/day.svg";
  } else {
    timeImage.src = "../images/night.svg";
  }

  // Remove 'hidden' class from weatherCard
  if (weatherCard.classList.contains("hidden")) {
    weatherCard.classList.remove("hidden");
  }
}

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.value) {
    const city = e.target.value.trim();

    // Fetch data and update DOM
    // Q: Can't 'await' all of this instead???
    updateCity(city)
      .then((data) => updateUI(data))
      .catch((error) => console.log(error));

    e.target.value = "";
    /*
     * {
          "LocalObservationDateTime": "2022-02-22T00:05:00-06:00",
          "EpochTime": 1645509900,
          "WeatherText": "Mostly cloudy",
          "WeatherIcon": 38,
          "HasPrecipitation": false,
          "PrecipitationType": null,
          "IsDayTime": false,
          "Temperature": {
              "Metric": {
                  "Value": 21,
                  "Unit": "C",
                  "UnitType": 17
              },
              "Imperial": {
                  "Value": 70,
                  "Unit": "F",
                  "UnitType": 18
              }
          },
          "MobileLink": "http://www.accuweather.com/en/us/austin-tx/78701/current-weather/351193?lang=en-us",
          "Link": "http://www.accuweather.com/en/us/austin-tx/78701/current-weather/351193?lang=en-us"
       }
     */
  }
});
