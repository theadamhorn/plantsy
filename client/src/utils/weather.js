const getWeather =async (event)=>{
    event.preventDefault();
    var city;


    if(!navigator.geolocation) {
        return;
      } else {
        // Step 1: Get user coordinates

	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {
		var crd = pos.coords;
		var lat = crd.latitude.toString();
		var lng = crd.longitude.toString();
		var coordinates = [lat, lng];
		console.log(`Latitude: ${lat}, Longitude: ${lng}`);
		getCity(coordinates);
		return;

	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);


// Step 2: Get city name
function getCity(coordinates) {
	var xhr = new XMLHttpRequest();
	var lat = coordinates[0];
	var lng = coordinates[1];

	// Paste your LocationIQ token below.
	xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.304fd9b6fdc7669a8bdf8ab046506e5a&lat=" +
	lat + "&lon=" + lng + "&format=json", true);
	xhr.send();
	xhr.onreadystatechange = processRequest;
	xhr.addEventListener("readystatechange", processRequest, false);

	function processRequest(e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = JSON.parse(xhr.responseText);
			 city = response.address.city;
			console.log(city);
			return;
		}
	}
}
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&mode=json&units=imperial&appid=2616b5aba9cde5c3435e1b66d6740d72").then(function(response){
       if(response.ok){
           response.json().then(function(apiData){
               console.log(apiData);
               return <><image src={"http://openweathermap.org/img/wn/" + apiData.weather[0].icon + "@2x.png"}/> <p>{city} {apiData.main.temp}deg F {apiData.main.humidity}% humidity {apiData.wind.speed}MPH wind</p>  </>;
                })
            }
        })
    
        
  
}

      }
    export default getWeather;


