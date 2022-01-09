
const display = (function() {
//function below makes the header of the app
    function makeHeader() {
        const header = document.createElement('div');
        header.classList.add('header-container');
        header.innerHTML = `
            <h1>Weather App</h1>`;
        document.body.appendChild(header);

        return header;
    };

    function makeContentContainer() {
        const content = document.createElement('div');
        content.classList.add('content-container');
        document.body.appendChild(content);

        return content;
    };

//function below are functions that generate the form section of the app
    function makeForm() {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        formContainer.innerHTML = 
            `<form class="form">
              <input type="text" class="search-box" placeholder="Enter Location">
              <button type="button" class="search-btn">Search Location</button>
             </form>`;
        document.querySelector('.content-container').appendChild(formContainer);

        return formContainer;
    };

//function below generates a card containing the weather data user requested
    function makeCardContainer() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        document.querySelector('.content-container').appendChild(cardContainer);

        return cardContainer;
    };
    
    function makeDataCard() {
        const dataCard = document.createElement('div');
        dataCard.classList.add('data-card');
        dataCard.innerHTML = `
            <div class="upper-card">
              <div class="weather-section">SANDSTORM</div>
              <div class="location-section">DESSERT RESORT, UNOVA</div>
            </div>
            <div class="lower-card">
              <div class="temp-section">50.01 °C</div>
              <div class="misc-section">
                <div class="feels-section">FEELS LIKE: 50 °C</div>
                <div class="wind-section">WIND: 10 meter/second</div>
                <div class="humid-section">HUMIDITY: 20%</div>
              </div>
            </div>`;
        document.querySelector('.card-container').appendChild(dataCard);

        return dataCard;
    };

    function makeDefault() {
        makeHeader();
        makeContentContainer();
        makeForm();
        makeCardContainer();
        makeDataCard();
    };

    return {
        makeDefault,
    };
})();

export { display };