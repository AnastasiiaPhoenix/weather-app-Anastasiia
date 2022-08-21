function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayOftheWeek = date.getDay();
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayOftheWeek];
    return `${day} ${hours}:${minutes}`;
  }
  
  let currentDate = document.querySelector("#date");
  let currentTime = new Date();
  currentDate.innerHTML = formatDate(currentTime);
  
  //
  function showWeather(response) {
    console.log(response.data);
    document.querySelector("#user-city").innerHTML = response.data.name;
    document.querySelector("#main-temp").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#wind").innerHTML = responce.data.wind.speed;
  document.querySelector("#humidity").innerHTML = responce.data.main.humidity;
  document.querySelector("#current-description").innerHTML =
    responce.data.weather[0].description;
  let currentIcon = document.querySelector("#current-icon");
  currentIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`
  );
  }
  function searchCity(city) {
    let apiKey = "f5f2cd381e5593f6659618e002cc4ae6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  
  function search(event) {
    event.preventDefault();
    let city = document.querySelector("#input-city").value;
    searchCity(city);
  }
  let form = document.querySelector(".citysearch");
  form.addEventListener("submit", search);
  
  //
  function localWeather(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "f5f2cd381e5593f6659618e002cc4ae6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(localWeather);
  }
  searchCity("Zaporizhzhia");
  