const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8ea11db3b0mshb23323ee6a541d8p1a48e7jsn0023fdc79d36',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  const getWeather = async (city) => {
    cityName.innerHTML = city
    try {
      const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + encodeURIComponent(city);
  
      const response = await fetch(url, options);
      const result = await response.json();
  
      console.log(result);
  
      // cloud_pct.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      temp2.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      Humidity.innerHTML = result.humidity;
      Humidity2.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_speed2.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  };
  
  const submit = document.getElementById("submit");
  const city = document.getElementById("city");
  const cityName = document.getElementById("cityName");
  // const cloud_pct = document.getElementById("cloud_pct");
  const temp = document.getElementById("temp");
  const feels_like = document.getElementById("feels_like");
  const Humidity = document.getElementById("Humidity");
  const min_temp = document.getElementById("min_temp");
  const max_temp = document.getElementById("max_temp");
  const wind_speed = document.getElementById("wind_speed");
  const wind_degrees = document.getElementById("wind_degrees");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityValue = city.value;
    getWeather(cityValue);
  });
  
  getWeather("Delhi");