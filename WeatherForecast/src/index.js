import "./style/style.css";
import "./script/component/weatherforecast";

window.addEventListener('load', ()=> {
	let long;
	let lat;
	let temperatureDesc = document.querySelector('.temperature-desc');
	let temperatureDeg = document.querySelector('.temperature-deg');
	let locationTimezone = document.querySelector('.location-timezone');
	let airHumidity = document.querySelector('.air-humidity');
	let feelsLike = document.querySelector('.feels-like');
	let weatherIcon = document.querySelector('.weather-icon');


	// Navigator	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			
			// API URL
			const proxy = 'https://cors-anywhere.herokuapp.com/';
			const api = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=becc1c63ebc1348fd8ac1b544f3b3331`;

			
			// Mengambil data API
			fetch(api)
			.then(response =>{
				return response.json();

			})						
			
			.then(data =>{
				console.log(data);
				const {temp, humidity, feels_like,} = data.current;	
				weatherIcon = data.current.weather[0].icon;		
																														
				// Manipulasi DOM dari API				
				temperatureDesc.textContent = data.current.weather[0].description;				
				temperatureDeg.textContent = Math.floor(temp);
				locationTimezone.textContent = data.timezone;
				airHumidity.textContent = humidity;	
				feelsLike.textContent = Math.floor (feels_like);
				weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}@2xx.png"/>`;
							
			});				
									
		
		});	
		
	}

	


});




