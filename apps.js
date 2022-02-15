const apiKey = "1c48de15d049f60dbbc033e761b78b89"

const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault();
    city = document.getElementById('input').value;
    form.reset();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => printWeather(data));
});

function printWeather(weather){
    let currentTemp= document.getElementById('temp');
    let currentHigh = document.getElementById('high');
    let currentLow = document.getElementById('low');
    let currentWeather = document.getElementById('current');
    let currentCity = document.getElementById('city');
    
    currentCity.innerText = weather.name;
    currentTemp.innerText = `Current Temp: ${weather.main.temp}`;
    currentHigh.innerText = `Today's High: ${weather.main.temp_max}`;
    currentLow.innerText = `Today's Low: ${weather.main.temp_min}`;
    currentWeather.innerText = `Weather Condition: ${weather.weather[0].main}`;
}