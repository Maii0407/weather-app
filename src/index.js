//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ee4fc729e17808280bb0635af6704ce1

async function getWeather() {
    try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=ee4fc729e17808280bb0635af6704ce1', {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
    } catch(error) {
        console.log('oops');
    }
};

getWeather();