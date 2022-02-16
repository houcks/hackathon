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
    console.log(weather);
    currentCity.innerText = weather.name;
    currentTemp.innerText = `Current Temp: ${Math.round(weather.main.temp)}${String.fromCharCode(176)}C`;
    currentHigh.innerText = `Today's High: ${Math.round(weather.main.temp_max)}${String.fromCharCode(176)}C`;
    currentLow.innerText = `Today's Low: ${Math.round(weather.main.temp_min)}${String.fromCharCode(176)}C`;
    console.log()
    currentWeather.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
}