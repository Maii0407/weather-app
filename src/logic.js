
const logic = (function() {
    async function getWeather() {
        const userSearch = document.querySelector('.search-box');
        const link = `http://api.openweathermap.org/data/2.5/weather?q=${userSearch.value}&units=metric&APPID=ee4fc729e17808280bb0635af6704ce1`;

        try {
            const response = await fetch( link, {mode: 'cors'} );
            const weatherData = await response.json();
            document.querySelector('.weather-section').innerText = weatherData.weather[0].description.toUpperCase();
            document.querySelector('.location-section').innerText = `${weatherData.name}, ${weatherData.sys.country}`;
            document.querySelector('.temp-section').innerText = `${weatherData.main.temp} °C`;
            document.querySelector('.feels-section').innerText = `FEELS LIKE: ${weatherData.main.feels_like} °C`;
            document.querySelector('.wind-section').innerText = `WIND SPEED: ${weatherData.wind.speed} meter/second`;
            document.querySelector('.humid-section').innerText = `HUMIDITY: ${weatherData.main.humidity}%`;
            console.log(weatherData);
        } catch(error) {
            alert('Something went wrong maybe enter a real place next time.');
        }
    };

    function clearText() {
        document.querySelector('.weather-section').innerText = '';
        document.querySelector('.location-section').innerText = '';
        document.querySelector('.temp-section').innerText = '';
        document.querySelector('.feels-section').innerText = '';
        document.querySelector('.wind-section').innerText = '';
        document.querySelector('.humid-section').innerText = '';
    };

    return {
        getWeather,
        clearText,
    }
})();

export { logic };