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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n\nconst display = (function() {\n//section below are functions that generate the form section of the app\n    function makeFormContainer() {\n        const formContainer = document.createElement('div');\n        formContainer.classList.add('form-container');\n        document.body.appendChild(formContainer);\n\n        return formContainer;\n    };\n\n    function makeForm() {\n        const form = document.createElement('form');\n        form.classList.add('form');\n        document.querySelector('.form-container').appendChild(form);\n\n        return form;\n    };\n\n    function makeSearchBox() {\n        const searchBox = document.createElement('input');\n        searchBox.setAttribute('type', 'text');\n        searchBox.placeholder = 'Enter Location';\n        searchBox.classList.add('search-box');\n        document.querySelector('.form').appendChild(searchBox);\n\n        return searchBox;\n    };\n\n    function makeSearchBtn() {\n        const searchBtn = document.createElement('button');\n        searchBtn.setAttribute('type', 'button');\n        searchBtn.classList.add('search-btn');\n        searchBtn.innerText = 'Search Location';\n        document.querySelector('.form').appendChild(searchBtn);\n\n        return searchBtn;\n    };\n\n//function below generates the form section of the app\n    function makeFormSection() {\n        makeFormContainer();\n        makeForm();\n        makeSearchBox();\n        makeSearchBtn();\n    };\n\n    return {\n        makeFormSection,\n    };\n})();\n\n\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

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