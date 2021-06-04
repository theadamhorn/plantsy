const getWeather =async (search)=>{
    console.log("Hi I'm search: "+search);
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ search +"&mode=json&units=imperial&appid=2616b5aba9cde5c3435e1b66d6740d72").then(function(response){
       if(response.ok){
           response.json().then(function(apiData){
               console.log(apiData);
               return <><image src={"http://openweathermap.org/img/wn/" + apiData.weather[0].icon + "@2x.png"}/> <p>{search} {apiData.main.temp}deg F {apiData.main.humidity}% humidity {apiData.wind.speed}MPH wind</p>  </>;
                })
            }
        })
    
        
  
}

      
    export default getWeather;


