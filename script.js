const refresh = document.querySelector(`#button`);
refresh.addEventListener(`click`, function(event){
    weatherFetch()
});

function weatherFetch(){
    const wheather = fetch("https://api.openweathermap.org/data/2.5/weather?lat=46.46801246434176&lon=30.731013573152193&appid=cb4066a43a555a0fa61393593053de77")
    let data;
    
    wheather.then(response => response.json())
    .then(data => {
    getInfo(data);
})

}

function getDate(){
    const datePlace = document.querySelector(`#date`) 
    const date = new Date();

    const dateMonth = date.toLocaleString('en', { month: 'short' });
    const dateMonthDay = date.getDate() 
    const dateYear = date.getFullYear();
    const dateDayWeek = date.toLocaleString('en', { weekday: 'short' });
    const dateNow = (`${dateMonth} ${dateMonthDay}, ${dateYear} - ${dateDayWeek}`); 
    datePlace.textContent = dateNow;

    getTime()
    

    function getTime(){
        const timePlace = document.querySelector(`#time`) 
        const thatPlace = document.querySelector(`#dateAndTime`) 
        const Hours = (date.getHours());
        const Minutes = (date.getMinutes());

        const timeNow = (`${Hours}:${String(Minutes).padStart(2, '0')}`); 
        timePlace.textContent = timeNow;
        thatPlace.textContent = `${dateMonth} ${dateMonthDay}, ${Hours}:${String(Minutes).padStart(2, '0')}`;
    }
}

function getInfo(data){
    const humidity = document.querySelector(`#Humidity`);
    const pressure = document.querySelector(`#Pressure`);
    const wind = document.querySelector(`#Wind`);
    const temperature = document.querySelector(`#temperature`);
    const temperatureFeel = document.querySelector(`#temperatureFeel`);
    const weather = document.querySelector(`#weather`);

    humidity.textContent = `Humidity: ${data.main.humidity}%`
    pressure.textContent = `Pressure: ${data.main.pressure} hPa`
    wind.textContent = `Wind: ${Math.round(data.wind.speed * 3.6)} km/h`
    temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`
    temperatureFeel.textContent = `Feels like: ${Math.round(data.main.feels_like - 273.15)}°C`
    const description = data.weather[0].description;
    weather.textContent = `${description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()}`

    console.log(data)
}
getDate();
weatherFetch();

