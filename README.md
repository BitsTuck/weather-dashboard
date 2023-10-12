# weather-dashboard


Version 1
Deployed 12 October 2023

<img width="1479" alt="Screenshot 2023-10-12 at 09 46 42" src="https://github.com/BitsTuck/weather-dashboard/assets/144712161/d2b73d4c-bf54-4335-9011-dacaa0fc1aef">

Deployed page: https://bitstuck.github.io/weather-dashboard/

## Description

Challenge #6 tasked us with creating a weather dashboard. The idea was to integrate a third party API-- in this case OpenWeather-- into a user interface that would show the weather of a given city. The weather to be displayed was current conditions, as well as the five-day forecast. Additionally, we were to store city searches, with an aim toward organizing trip. Stored cities were to be accessed via buttons on the side, so that you could recall cities that had been searched and easily see their weather conditions.

## Installation

N/A

## Challenges

This project was challenging on a variety of fronts. The key was to read the documentation on the OpenWeather API site, to make sure that the proper API was being used (the one that involved the city search, as opposed to requiring latitude and longitude) and to integrate two different APIs-- the current conditions, and the five-day forecast. 

The five-day forecast API needed to be iterated through to pull out the appropriate data. And then the city name entered had to be captured and stored in local storage for retrieval for future use. I was able to implement these functions successfully. However, I was not able to implement the icons for each forecasted day, nor was I able to add buttons for each city in the storage array. As of right now the buttons overwrite upon each new city entry.


## Credits
The Weather Dashboard was built with <a href="https://getbootstrap.com/">Bootstrap</a> and with the <a href="https://openweathermap.org/api">OpenWeather API</a>.

Addtional guidance was provided by tutor Dru Sanchez.


## License

Please refer to the license in the repo.

---