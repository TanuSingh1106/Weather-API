function getInfo() {
   let api_key = "55c60cb826484b4c95c31152241006"; 
   let url = "http://api.weatherapi.com/v1/current.json?"; 
   let city_name = document.querySelector("input");
   let city = city_name.value

   if (city === "") {
       alert("Please enter a city name.");
       return;
   }

   let URL = `${url}key=${api_key}&q=${city}`;

   let country = document.querySelector(".con");
   let temperature = document.querySelector(".temp");
   let wind = document.querySelector(".win");
   let humidity = document.querySelector(".hum");

   fetch(URL)
       .then((response) => {
           return response.json(); 
       })
       .then((res) => {
           console.log(res); 
          
           country.innerHTML = res.location.country;
           temperature.innerHTML = res.current.temp_c + "°C";
           humidity.innerHTML = res.current.humidity + "%";
           wind.innerHTML = res.current.wind_kph + " km/h";
       })
       .catch((error) => {
           
           console.error("Error fetching weather data:", error);
           alert("Failed to fetch weather data. Please try again.");
       });

   city_name.value = ""; 
}
