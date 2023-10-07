var searchFormEl = $('.search-form');

function getApi() {
    var search = 'http://api.openweathermap.org/geo/1.0/direct?q=london,GB&limit=5&appid=1961d955221a31999d250c53fe92af36';
  
    fetch(search)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)

      }
      )}
getApi()

// function getParams() {
//     // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//     var searchParamsArr = document.location.search.split('&');
  
//     // Get the query and format values
//     var query = searchParamsArr[0].split('=').pop();
//     var format = searchParamsArr[1].split('=').pop();
  
//     searchApi(query, format);
//   }

//search will need to break down for the address 'q=' + '&limit
//will need to take out spaces in string (clinton, ct won't work)
//have to put search back together for actual search
//will need a "try again" for search in incorrect format





function handleSearchFormSubmit(event) {
    // event.preventDefault();
  
    var searchInputVal = $('#location').value;
    
    if (!searchInputVal) {
      console.error('Please enter a city name');
      return;
    }

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
}

handleSearchFormSubmit()