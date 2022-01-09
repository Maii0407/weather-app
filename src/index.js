import { display } from './display.js';
import { logic } from './logic.js';

const weatherApp = (function() {
    display.makeDefault();
    
    document.querySelector('.search-btn').addEventListener('click', function() {
        logic.clearText();
        logic.getWeather();
        document.querySelector('.search-box').value = '';
    });
})();


