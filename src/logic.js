
const logic = (function() {
    async function getWeather() {
        const userSearch = document.querySelector('.search-box');
        const link = `http://api.openweathermap.org/data/2.5/weather?q=${userSearch.value}&units=metric&APPID=ee4fc729e17808280bb0635af6704ce1`;

        try {
            const response = await fetch( link, {mode: 'cors'} );
            const weatherData = await response.json();
            console.log(weatherData);
        } catch(error) {
            console.log('oops');
        }
    };

    function clearText() {
        document.querySelector('.weather-section').innerText = '';
        document.querySelector('.location-section').innerText = '';
        document.querySelector('.temp-section-section').innerText = '';
        document.querySelector('.feels-section-section').innerText = '';
        document.querySelector('.wind-section').innerText = '';
        document.querySelector('.humid-section').innerText = '';
    };

    return {
        getWeather,
        clearText,
    }
})();

export { logic };