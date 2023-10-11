var searchFormEl = $('.search-form');
var todayWeatherEl = $('.today')
var oneDayEl = $('.day')
var weatherHistory = localStorage.getItem(weatherHistory)
console.log(oneDayEl)


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
      } 
      // weatherDisplay(data)
    })
    
   var searchCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1961d955221a31999d250c53fe92af36&units=imperial`

    fetch(searchCurrent)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      console.log(todayWeatherEl)
      todayWeatherEl[i].innerHTML= `<h2>Today's Weather</h2>`
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

} 

searchFormEl.on('submit', handleSearchFormSubmit);


function weatherDisplay (data) {
  console.log(data)
  let fiveDayWeather = document.querySelector('.this-week')
  fiveDayWeather.innerHTML = data.list;
}








// function printResults(resultObj) {
//   console.log(resultObj);

//   // set up `<div>` to hold result content
//   var resultCard = document.createElement('div');
//   resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

//   var resultBody = document.createElement('div');
//   resultBody.classList.add('card-body');
//   resultCard.append(resultBody);

//   var titleEl = document.createElement('h3');
//   titleEl.textContent = resultObj.title;

//   var bodyContentEl = document.createElement('p');
//   bodyContentEl.innerHTML =
//     '<strong>Date:</strong> ' + resultObj.date + '<br/>';

//   if (resultObj.subject) {
//     bodyContentEl.innerHTML +=
//       '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
//   } else {
//     bodyContentEl.innerHTML +=
//       '<strong>Subjects:</strong> No subject for this entry.';
//   }

//   if (resultObj.description) {
//     bodyContentEl.innerHTML +=
//       '<strong>Description:</strong> ' + resultObj.description[0];
//   } else {
//     bodyContentEl.innerHTML +=
//       '<strong>Description:</strong>  No description for this entry.';
//   }

//   var linkButtonEl = document.createElement('a');
//   linkButtonEl.textContent = 'Read More';
//   linkButtonEl.setAttribute('href', resultObj.url);
//   linkButtonEl.classList.add('btn', 'btn-dark');

//   resultBody.append(titleEl, bodyContentEl, linkButtonEl);

//   resultContentEl.append(resultCard);
// }

// function searchApi(query, format) {
//   var locQueryUrl = 'https://www.loc.gov/search/?fo=json';

//   if (format) {
//     locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
//   }

//   locQueryUrl = locQueryUrl + '&q=' + query;
//   console.log(locQueryUrl);

//   fetch(locQueryUrl)
//     .then(function (response) {

//       if (!response.ok) {
//         throw response.json();
//       }

//       return response.json();
//     })
//     .then(function (locRes) {
//       // write query to page so user knows what they are viewing
//       resultTextEl.textContent = locRes.search.query;

//       console.log(locRes);

//       if (!locRes.results.length) {
//         console.log('No results found!');
//         resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//       } else {
//         resultContentEl.textContent = '';
//         for (var i = 0; i < locRes.results.length; i++) {
//           printResults(locRes.results[i]);
//         }
//       }
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }