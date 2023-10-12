var searchFormEl = $('.search-form');
var todayWeatherEl = $('.today')
var oneDayEl = $('.day')
var searchCol = $('.history')


function getApi(city) {
  //calls five-day weather API and appends data to the page
  var searchFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1961d955221a31999d250c53fe92af36&units=imperial`


  fetch(searchFiveDay)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (let i = 0; i < 5; i++) {
        console.log(oneDayEl[i])
        console.log(i*8)
        oneDayEl[i].innerHTML= `<h3>${data.list[i*8].dt_txt}</h3>
        <p class="temp">Temperature: ${data.list[i*8].main.temp}&deg F</p>
        <p class="wind">Wind Speed: ${data.list[i*8].wind.speed} MPH</p>
        <p class="humidity">Humidity: ${data.list[i*8].main.humidity}%</p>`
        //below was the attempt to add the icons to the five-day data. As of now it returns "undefined"
        // <span>${data.list[i*8].weather.icon}</span>

      } 
    })

   //calls current day weather function and appends data to the page 
   var searchCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1961d955221a31999d250c53fe92af36&units=imperial`

    fetch(searchCurrent)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      console.log(todayWeatherEl)
      let todayHeader= document.createElement('h1');
      todayHeader.textContent = `${data.name} Weather Today`
      todayWeatherEl.append(todayHeader)
      let todayInfo= document.createElement('p');
      todayInfo.textContent = `Temperature: ${data.main.temp} Wind Speed: ${data.wind.speed} Humidity: ${data.main.humidity}`
      todayWeatherEl.append(todayInfo)
      //below was the attempt to add the icons to current day data
      // let todayIcon= document.createElement('span');
      // todayIcon.setAttribute(`${data.weather[i].icon}`)
      // todayWeatherEl.append(todayIcon)

  })

}


function handleSearchFormSubmit(event) {
  event.preventDefault();
//search button captures city name and runs getAPI function
  var searchInputVal = $('#location').val();

  if (!searchInputVal) {
    console.error('Please enter a city name');
    return;
  }

  getApi(searchInputVal)
  //stores data locally in an array
  var cities = JSON.parse(localStorage.getItem('city'))
  console.log(cities)
  if (!cities) {
    cities = []
  };

  cities.push(searchInputVal)
//retrieves data from storage and appends to a button on the page. Right now it overwrites the current button, as opposed to adding buttons for subsequent searches.
  localStorage.setItem('city', JSON.stringify(cities))
  console.log(localStorage)

  for (var i = 0; i < cities.length; i++) {
    var cityName = cities[i];
    var btn = $('.recall');
    btn.text(cityName);

   searchFormEl.append(btn);

}
}


searchFormEl.on('submit', handleSearchFormSubmit);