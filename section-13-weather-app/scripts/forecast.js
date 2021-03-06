// WITH CLASS
class Forecast {
  constructor() {
    this.apiKey = "jDgYhNB6hrPb2qAurqGNJojQDCZFSH8I";
    this.currentConditionsURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }

  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    // console.log(cityDetails);
    const weather = await this.getCurrentConditions(cityDetails.Key);
    // console.log(weather);

    // Return both objects so have full access to all information
    return { cityDetails, weather };
  }

  async getCity(city) {
    const query = `?apikey=${this.apiKey}&q=${city}`;
    const url = this.cityURI + query;

    const response = await fetch(url);
    const data = await response.json();

    // NOTE Return the first/closest city match
    // NOTE We want to get the data[0].key value eg "229260"
    return data[0];
  }

  async getCurrentConditions(locationKey) {
    const query = `${locationKey}?apikey=${this.apiKey}`;
    const url = this.currentConditionsURI + query;

    const response = await fetch(url);
    const data = await response.json();

    // NOTE Returns Array with single Object, so just getting Object
    // Key props: EpochTime, HasPrecipitation, IsDayTime,
    // Temperature.Imperial.Value, Temperature.Metric.Unit, etc.
    return data[0];
  }
}

export { Forecast };
// // WITHOUT CLASS
// const apiKey = "jDgYhNB6hrPb2qAurqGNJojQDCZFSH8I";

// async function getCity(city) {
//   const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//   // const base =
//   //   "//cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?apikey=${apiKey}&q=${city}`;
//   const url = base + query;

//   const response = await fetch(url);
//   // console.log("response:", response);
//   const data = await response.json();
//   // console.log("data:", data);

//   // NOTE Return the first/closest city match
//   // NOTE We want to get the data[0].key value eg "229260"
//   return data[0];
// }

// async function getCurrentConditions(locationKey) {
//   const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//   // const base =
//   //   "//cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${locationKey}?apikey=${apiKey}`;
//   const url = base + query;

//   const response = await fetch(url);
//   const data = await response.json();

//   // NOTE Returns Array with single Object, so just getting Object
//   // Key props: EpochTime, HasPrecipitation, IsDayTime,
//   // Temperature.Imperial.Value, Temperature.Metric.Unit, etc.
//   return data[0];
// }

// // getCity("London")
// //   .then((data) => {
// //     return getCurrentConditions(data.Key);
// //   })
// //   .then((data) => {
// //     console.log(data); // Weather details obj
// //   })
// //   .catch((error) => console.log(error));

// // Q: Why can't I export this and use it in app.js?
// // NOTE Don't have to since our <script> for forecasts.js comes BEFORE
// // A: SOLVED! I need to use type="module" for app.js <script>!
// // This means that I do not need to add <script> for forecast.js
// // inside the index.html

// // our <script> for app.js!
// export { getCity, getCurrentConditions };
