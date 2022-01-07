/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ee4fc729e17808280bb0635af6704ce1\n\nasync function getWeather() {\n    try {\n        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=ee4fc729e17808280bb0635af6704ce1', {mode: 'cors'});\n        const weatherData = await response.json();\n        console.log(weatherData);\n    } catch(error) {\n        console.log('oops');\n    }\n};\n\ngetWeather();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;