

//var weatherData = document.getElementById ("#weather-icons")

var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityname},${statecode},${countrycode}&limit=${limit}&lat=${lat}&lon=${lon}&exclude=${part}&appid=62645b864f757d8e71f84817791c80ba`

fetch(requestUrl)
.then(function(response){
    //converts to JSON object
    return response.json();

})

.then(function(data) {
    console.log(data);
    requestUrl = data.cityname;
    console.log("cityname[0]")
});

then(function(cityname){
    console.log(city);
  
});
    //display data in HTMl
    //weatherArray = data.response.doc;
    //for (let i = 0; i < array.//length; i++) {
       //var listForecastFive = //document.createElement("li");
        //listForecastFive.textContent = weatherArray[i].description;
        //weatherData.appendChild(listForecastFive);
        
   // }
//});
