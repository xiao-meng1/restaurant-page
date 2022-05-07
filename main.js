/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage)
/* harmony export */ });
function createPage() {
    const content = document.querySelector("#content");
    const tabContainer = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const heading = document.createElement("h1");

    heading.textContent = "Contact";
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    content.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);
    content.appendChild(heading);
    content.appendChild(subHeading);
    content.appendChild(restaurantPhoto);
}



/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage)
/* harmony export */ });
function createPage() {
    const content = document.querySelector("#content");
    const tabContainer = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const heading = document.createElement("h1");
    const subHeading = document.createElement("h2");
    const restaurantPhoto = document.createElement("img");

    heading.textContent = "Your Favorite Restaurant";
    subHeading.textContent = "The best food innovation since sliced bread!";
    restaurantPhoto.src = "https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg";
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    content.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);
    content.appendChild(heading);
    content.appendChild(subHeading);
    content.appendChild(restaurantPhoto);
}



/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage)
/* harmony export */ });
function createPage() {
    const content = document.querySelector("#content");
    const tabContainer = document.createElement("div");
    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const heading = document.createElement("h1");

    heading.textContent = "Menu";
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    content.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);
    content.appendChild(heading);
    content.appendChild(subHeading);
    content.appendChild(restaurantPhoto);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.js */ "./src/home-page.js");
/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page.js */ "./src/menu-page.js");
/* harmony import */ var _contact_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page.js */ "./src/contact-page.js");




let currentPage = _home_page_js__WEBPACK_IMPORTED_MODULE_0__;
_home_page_js__WEBPACK_IMPORTED_MODULE_0__.createPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNBO0FBQ007O0FBRWpELGtCQUFrQiwwQ0FBUTtBQUMxQixxREFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBob21lVGFiLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKTtcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyZXN0YXVyYW50UGhvdG8pO1xufVxuXG5leHBvcnQge2NyZWF0ZVBhZ2V9OyIsImZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3Qgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCByZXN0YXVyYW50UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiWW91ciBGYXZvcml0ZSBSZXN0YXVyYW50XCI7XG4gICAgc3ViSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIGJlc3QgZm9vZCBpbm5vdmF0aW9uIHNpbmNlIHNsaWNlZCBicmVhZCFcIjtcbiAgICByZXN0YXVyYW50UGhvdG8uc3JjID0gXCJodHRwczovL21lZGlhLWNkbi50cmlwYWR2aXNvci5jb20vbWVkaWEvcGhvdG8tcy8xYS9iOC80Ni82ZC9sb25kb24tc3RvY2suanBnXCI7XG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIG1lbnVUYWIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFBob3RvKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVQYWdlfTsiLCJmdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBtZW51VGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzdWJIZWFkaW5nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRQaG90byk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlUGFnZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBob21lUGFnZSBmcm9tICcuL2hvbWUtcGFnZS5qcyc7XG5pbXBvcnQgKiBhcyBtZW51UGFnZSBmcm9tICcuL21lbnUtcGFnZS5qcyc7XG5pbXBvcnQgKiBhcyBjb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QtcGFnZS5qcyc7XG5cbmxldCBjdXJyZW50UGFnZSA9IGhvbWVQYWdlO1xuaG9tZVBhZ2UuY3JlYXRlUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9