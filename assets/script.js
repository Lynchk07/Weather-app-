//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//$.ajax({
   // url: 'https://randomuser.me/api/',
//dataType: 'json',
//success: function(data) {
//console.log(data);
//}
//});

fetch(requestUrl)
.then(function(response){
    return response.json();
})