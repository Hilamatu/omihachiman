const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=35.128339&lon=136.097907&exclude=minutely,hourly&appid=157bce0f1cc1f8b2908d79e381909cc3"

fetch(apiURL)
    .then((response) => response.json())