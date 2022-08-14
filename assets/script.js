$(document).ready(function(){
    $("#form-search").submit(function(event){
        searchCity(event);
    });
});


function searchCity (event){
    event.preventDefault();
    
}

var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=62645b864f757d8e71f84817791c80ba`,

fetch (requestUrl){
.then(function(response){
    //converts to JSON object
   return response.json();
    
})
.then(function(data){
    console.log(data);
    requestUrl = data.city;
    console.log(city);
})
.then(function(){
    console.log(city);
    getAttribute("#time",city);
    $('body').setAttribute(a,b)
 
})
}


//var weatherData = document.getElementById ("#weather-icons")

    //display data in HTMl
    //weatherArray = data.response.doc;
    //for (let i = 0; i < array.//length; i++) {
       //var listForecastFive = //document.createElement("li");
        //listForecastFive.textContent = weatherArray[i].description;
        //weatherData.appendChild(listForecastFive);
        
   // }
//});
