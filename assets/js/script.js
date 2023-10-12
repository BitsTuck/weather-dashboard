var searchFormEl = $('.search-form');
var todayWeatherEl = $('.today')
var oneDayEl = $('.day')
var searchCol = $('.history')
var weatherHistory = localStorage.getItem(weatherHistory)

console.log(weatherHistory)


function getApi(city) {
  
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
        // <span>${data.list[i*8].weather.icon}</span>

      } 
    })

    
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
      // let todayIcon= document.createElement('span');
      // todayIcon.setAttribute(`${data.weather[i].icon}`)
      // todayWeatherEl.append(todayIcon)

  })




}


function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = $('#location').val();

  if (!searchInputVal) {
    console.error('Please enter a city name');
    return;
  }

  getApi(searchInputVal)

  // var cities = JSON.parse(localStorage.getItem('city'))
  // console.log(cities)
  // if (!cities) {
  //   cities = []
  // };

  // cities.push(searchInputVal)

  // localStorage.setItem('city', JSON.stringify(city))
  // console.log(localStorage)

}

searchFormEl.on('submit', handleSearchFormSubmit);

// var brewery = JSON.parse(localStorage.getItem('Brewery'));

// console.log(brewery);

// for (var i = 0; i < brewery.length; i++) {
//     var breweryName = brewery[i];
//     var li = $('<li></li>');
//     li.text(breweryName);

//     $('.brewList').append(li);
// };

// $('.brewStorage').on('submit', function(event) {
//   event.preventDefault();
//   console.log($('.brewery').val());
//   var favInput = $('.brewery').val();
//   var brewery = JSON.parse(localStorage.getItem('Brewery'));
//   if (!brewery) {
//       brewery = [];
//   };
//   brewery.push(favInput);
//   localStorage.setItem("Brewery", JSON.stringify(brewery));
// })