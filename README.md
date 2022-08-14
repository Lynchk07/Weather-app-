# Weather-app-
Weather application with user inputs 
//GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

.main-container {
    display:flex;
    background-color: bisque;
    justify-content: center;
    align-content: flex-start;
}

.weather-threeday {
    display:flex;
    height:900px
    justify-content:center;
    align-items:center;
    flex-direction:column; (vertical axis)
}


API call

http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

Parameters
q	required	City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
limit	optional	Number of the locations in the API response (up to 5 results can be returned in the API response)

//time display//
<h1>Current Time &amp; Date: <br /> <span id="time-display">00:00:00</span></h1>
