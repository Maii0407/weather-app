import { display } from './display.js';
import { logic } from './logic.js';

const weatherApp = (function() {
    display.makeFormSection();
    
    document.querySelector('.search-btn').addEventListener('click', function() {
        logic.getWeather();
        document.querySelector('.search-box').value = '';
    });
})();


