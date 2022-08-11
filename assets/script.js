//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//$.ajax({
   // url: 'https://randomuser.me/api/',
//dataType: 'json',
//success: function(data) {
//console.log(data);
//}
//});

var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

var weatherData = document.getElementById ("#weather-icons")

fetch(requestUrl)
.then(function(response){
    //converts to JSON object
    return response.json();
})

.then(function(data) {
    //display data in HTML
    var weatherArray = data.response.doc;
    for (let i = 0; i < array.length; i++) {
        var listForecastFive = document.createElement("li");
        listForecastFive.textContent = weatherArray[i].description;
        weatherData.appendChild(listForecastFive);
        
    }
});
