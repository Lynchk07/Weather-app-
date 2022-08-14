var 

//var weatherData = document.getElementById ("#weather-icons")

const apiKey = "62645b864f757d8e71f84817791c80ba";
const inputVal=input.value;

var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname},${statecode},${countrycode}&$limit=${limit}&appid=${apiKey}&units=metric`;



fetch(requestUrl)
.then(function(response){
    //converts to JSON object
    return response.json();
    
});

.then(function(data,) {
    console.log(data);
    requestUrl = data.cityname;
    console.log("#cityname")
});


    //display data in HTMl
    //weatherArray = data.response.doc;
    //for (let i = 0; i < array.//length; i++) {
       //var listForecastFive = //document.createElement("li");
        //listForecastFive.textContent = weatherArray[i].description;
        //weatherData.appendChild(listForecastFive);
        
   // }
//});
