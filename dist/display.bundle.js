/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n\nconst display = (function() {\n//function below makes the header of the app\n    function makeHeader() {\n        const header = document.createElement('div');\n        header.classList.add('header-container');\n        header.innerHTML = `\n            <h1>Weather App</h1>`;\n        document.body.appendChild(header);\n\n        return header;\n    };\n\n    function makeContentContainer() {\n        const content = document.createElement('div');\n        content.classList.add('content-container');\n        document.body.appendChild(content);\n\n        return content;\n    };\n\n//function below are functions that generate the form section of the app\n    function makeForm() {\n        const formContainer = document.createElement('div');\n        formContainer.classList.add('form-container');\n        formContainer.innerHTML = \n            `<form class=\"form\">\n              <input type=\"text\" class=\"search-box\" placeholder=\"Enter Location\">\n              <button type=\"button\" class=\"search-btn\">Search Location</button>\n             </form>`;\n        document.querySelector('.content-container').appendChild(formContainer);\n\n        return formContainer;\n    };\n\n//function below generates a card containing the weather data user requested\n    function makeCardContainer() {\n        const cardContainer = document.createElement('div');\n        cardContainer.classList.add('card-container');\n        document.querySelector('.content-container').appendChild(cardContainer);\n\n        return cardContainer;\n    };\n    \n    function makeDataCard() {\n        const dataCard = document.createElement('div');\n        dataCard.classList.add('data-card');\n        dataCard.innerHTML = `\n            <div class=\"upper-card\">\n              <div class=\"weather-section\">SANDSTORM</div>\n              <div class=\"location-section\">DESSERT RESORT, UNOVA</div>\n            </div>\n            <div class=\"lower-card\">\n              <div class=\"temp-section\">50.01 °C</div>\n              <div class=\"misc-section\">\n                <div class=\"feels-section\">FEELS LIKE: 50 °C</div>\n                <div class=\"wind-section\">WIND SPEED: 10 meter/second</div>\n                <div class=\"humid-section\">HUMIDITY: 20%</div>\n              </div>\n            </div>`;\n        document.querySelector('.card-container').appendChild(dataCard);\n\n        return dataCard;\n    };\n\n    function makeDefault() {\n        makeHeader();\n        makeContentContainer();\n        makeForm();\n        makeCardContainer();\n        makeDataCard();\n    };\n\n    return {\n        makeDefault,\n    };\n})();\n\n\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/display.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;