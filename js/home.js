const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=35.128339&lon=136.097907&exclude=minutely,hourly&units=imperial&appid=157bce0f1cc1f8b2908d79e381909cc3"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        
        document.getElementById("current").textContent = jsObject.current.weather[0].description
        document.getElementById("temp").textContent = jsObject.current.temp
        document.getElementById("humidity").textContent = jsObject.current.humidity

        document.getElementById("weekday1").textContent = jsObject.daily[0].dt
    })