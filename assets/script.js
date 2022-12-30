


$(document).ready(function () {
    $("#form-search").submit(function (event) {
        searchCity(event);

    });
});


function searchCity(event) {
    event.preventDefault();
    console.log(document.getElementById("cityname").value)
    var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${document.getElementById("cityname").value}&appid=62645b864f757d8e71f84817791c80ba`
    
    fetch(requestUrl)
        .then(function (response) {
            //converts to JSON object
            console.log(response)
            return response.json();
    
        })
        .then(function (data) {
            console.log(data);
            // console.log(city);
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&appid=62645b864f757d8e71f84817791c80ba`)
                .then(function (catfish) {
                    //converts to JSON object
                    console.log(catfish)
                    return catfish.json();
    
                })
                .then(function (info) {
                    console.log(info);
                    document.querySelector(".temp").innerHTML = info.current.temp;
                    document.querySelector(".humidity").innerHTML = info.current.humidity;
                    document.querySelector(".wind").innerHTML = info.current.wind_speed;
                    document.querySelector(".UV-index").innerHTML = info.current.uvi;
                    // console.log(city);
                })
                //section to bring in current time and day
        //         let timeDisplayEl = $("#time-display")
        //         var rightNow = moment().format('MMM DD, YYYY [at] HH:mm a');
        //             timeDisplayEl.text(rightNow);
        })

}



document.addEventListener("click", specificCity)
var specificCity = document.getElementById("nav-item-chi", "nav-item-new", "nav-item-sea", "nav-item-atl", "nav-item-den", "nav-item-orl", "nav-item-san", "nav-item-aus")
    document.getElementById("maincontainer").innerHTML = city();
  




