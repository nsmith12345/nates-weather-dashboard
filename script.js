//***********************API Connection made Successfully******** */
var requestUrl ="https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=877e9b68857572ca2ce6ce879c6aa00e"

fetch(requestUrl)
.then(function(response){ // Convert to JSON object
    if(response.status !== 200){
      document.location.replace('./404.html') // If fails to connect, this will be displayed 
    } else {
      return response.json(); // If it works, JSON data will be displayed
    }    
})

.then(function(data) {
    console.log(date);
    // Disply in HTML here
    var docArray = data.response.docs;
    for(var i = 0; i < docArray.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = docArray[i].description ;
        listEl.appendChild(listItem);
    }
})
.catch(function(error) {
    // In case there is an error
    console.log(error);
});

//***********************Variables*******************************/
var citiesList = document.querySelector(".citiesList"); // Will 
var currentDate = document.querySelector(".currentDate");
var nameOfCity = document.querySelector(".nameOfCity"); 
var temperature = document.querySelector(".temperature");
var highTemperature = document.querySelector(".highTemperature"); // Will 
var lowTemperature = document.querySelector(".lowTemperature");
var humidity = document.querySelector(".humidity");
var uvIndex = document.querySelector(".uvIndex"); 
var todayWeather = document.querySelector(".todayWeather"); 
var currentHour = moment().hour(); //Stores the current hour for comparison of each row.
