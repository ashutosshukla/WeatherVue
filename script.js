const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36ab4dfccfmsh9064d7f5009e852p126178jsna87bef886654',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		temp2.innerHTML = response.temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Jaipur")


//for new york
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		cloud_pctNYC.innerHTML = response.cloud_pct
		tempNYC.innerHTML = response.temp
		feels_likeNYC.innerHTML = response.feels_like
		humidityNYC.innerHTML = response.humidity
		min_tempNYC.innerHTML = response.min_temp
		max_tempNYC.innerHTML = response.max_temp
		wind_speedNYC.innerHTML = response.wind_speed
		wind_degreesNYC.innerHTML = response.wind_degrees
		sunriseNYC.innerHTML = response.sunrise
		sunsetNYC.innerHTML = response.sunset

	})


	//for london

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		cloud_pctLON.innerHTML = response.cloud_pct
		tempLON.innerHTML = response.temp
		feels_likeLON.innerHTML = response.feels_like
		humidityLON.innerHTML = response.humidity
		min_tempLON.innerHTML = response.min_temp
		max_tempLON.innerHTML = response.max_temp
		wind_speedLON.innerHTML = response.wind_speed
		wind_degreesLON.innerHTML = response.wind_degrees
		sunriseLON.innerHTML = response.sunrise
		sunsetLON.innerHTML = response.sunset

	})

	//for mumbai

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		cloud_pctMUM.innerHTML = response.cloud_pct
		tempMUM.innerHTML = response.temp
		feels_likeMUM.innerHTML = response.feels_like
		humidityMUM.innerHTML = response.humidity
		min_tempMUM.innerHTML = response.min_temp
		max_tempMUM.innerHTML = response.max_temp
		wind_speedMUM.innerHTML = response.wind_speed
		wind_degreesMUM.innerHTML = response.wind_degrees
		sunriseMUM.innerHTML = response.sunrise
		sunsetMUM.innerHTML = response.sunset

	})


	//for lucknow
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		cloud_pctLUC.innerHTML = response.cloud_pct
		tempLUC.innerHTML = response.temp
		feels_likeLUC.innerHTML = response.feels_like
		humidityLUC.innerHTML = response.humidity
		min_tempLUC.innerHTML = response.min_temp
		max_tempLUC.innerHTML = response.max_temp
		wind_speedLUC.innerHTML = response.wind_speed
		wind_degreesLUC.innerHTML = response.wind_degrees
		sunriseLUC.innerHTML = response.sunrise
		sunsetLUC.innerHTML = response.sunset

	})

	//for canada

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Canada', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		cloud_pctCAN.innerHTML = response.cloud_pct
		tempCAN.innerHTML = response.temp
		feels_likeCAN.innerHTML = response.feels_like
		humidityCAN.innerHTML = response.humidity
		min_tempCAN.innerHTML = response.min_temp
		max_tempCAN.innerHTML = response.max_temp
		wind_speedCAN.innerHTML = response.wind_speed
		wind_degreesCAN.innerHTML = response.wind_degrees
		sunriseCAN.innerHTML = response.sunrise
		sunsetCAN.innerHTML = response.sunset

	})


	//for gurgaon

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gurgaon', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		cloud_pctGUR.innerHTML = response.cloud_pct
		tempGUR.innerHTML = response.temp
		feels_likeGUR.innerHTML = response.feels_like
		humidityGUR.innerHTML = response.humidity
		min_tempGUR.innerHTML = response.min_temp
		max_tempGUR.innerHTML = response.max_temp
		wind_speedGUR.innerHTML = response.wind_speed
		wind_degreesGUR.innerHTML = response.wind_degrees
		sunriseGUR.innerHTML = response.sunrise
		sunsetGUR.innerHTML = response.sunset

	})