
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

    return {
        getWeather,
    }
})();

export { logic };