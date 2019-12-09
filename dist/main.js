/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ \"./src/renderPage.js\");\n\n\n// Create Menu\nObject(_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"addContentToDiv\"])('content'\n    , ['label', 'About', {class: 'tab', for: 'tab-top', id: 'about-btn'}]\n    , ['label', 'Home', {class: 'tab', for: 'tab-front', id: 'home-btn'}]\n    , ['label', 'Menu', {class: 'tab', for: 'tab-bottom', id: 'menu-btn'}]\n    , ['label', 'Contact', {class: 'tab', for: 'tab-back', id: 'contact-btn'}]\n    , ['input', ' ', {type: 'radio', name: 'tabs', id: 'tab-top'}]\n    , ['input', ' ', {type: 'radio', name: 'tabs', id: 'tab-front'}]\n    , ['input', ' ', {type: 'radio', name: 'tabs', id: 'tab-bottom'}]\n    , ['input', ' ', {type: 'radio', name: 'tabs', id: 'tab-back'}]\n);\n\n// Create main container\nObject(_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"createChildDiv\"])('content', 'cube');\n\n// Create About Us page\nObject(_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"createContent\"])('.cube', 'tab-content', '', ['h1', '', 'About Us']\n    , ['p', '', 'Whether you\\'re looking for a meal to die for, or just a place to have a quick drink, our experienced virtual staff are here to cater to you. Our virtual bar offers a variety of liquor, and beer, from both, around the world, or your favorite local brew masters. Be sure to pair your favorite dish, with something from our extensive wine list as well!']\n    , ['img', '', {src: 'img/about.jpg', alt: 'About Our Restaurant', width: '450px', id: 'about-img'}]);\n\n// Create Home page\nObject(_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"createContent\"])('.cube', 'tab-content', '', ['h1', '', 'Le Gourmet Virtuel French Cuisine']\n    , ['p', '', 'Bienvenue! Le Gourmet Virtuel, voted The Odin Projects’s best virtual restaurant year after year, welcomes you for breakfast, lunch, or dinner at our casual, ocean view restaurant at the city of your choice. Part restaurant, part wine boutique, part French Bakery, Le Gourmet Virtuel combines the elegance of an old world café with the casual ambiance of a neighborhood eatery. It’s sunlit space is perfect for an early morning espresso with a croissant or a leisurely lunch of shared dishes.']\n    , ['img', '', {src: 'img/home.jpg', alt: 'French Menu Item #0', width: '450px', id: 'home-img'}]\n);\ndocument.getElementById('home-btn').classList.add('selectedTab');\n\n// Create Menu page\nObject(_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"createContent\"])('.cube', 'tab-content', 'menu', ['h1', {id: 'le-menu'}, 'Le Menu']);\nObject(_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"createContent\"])('.tab-content', 'menu-images', ''\n    , ['img', '', {\n        src: \"img/menu1.jpg\",\n        alt: \"French Menu Item #1\",\n        width: \"200px\",\n        height: \"200px\",\n        class: \"menu-img\"\n    }]\n    , ['img', '', {\n        src: \"img/menu2.jpg\",\n        alt: \"French Menu Item #2\",\n        width: \"200px\",\n        height: \"200px\",\n        class: \"menu-img\"\n    }]\n    , ['img', '', {\n        src: \"img/menu3.jpg\",\n        alt: \"French Menu Item #3\",\n        width: \"200px\",\n        height: \"200px\",\n        class: \"menu-img\"\n    }]\n    , ['img', '', {\n        src: \"img/menu4.jpg\", alt: \"French Menu Item #4\", width: \"200px\", height: \"200px\", class: \"menu-img\"\n    }]\n);\n\n// Create Contact Us page\nObject(_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"createContent\"])('.cube', 'tab-content', 'contact-page', ['h1', '', 'Contact Page']\n    , ['p', '', 'Don\\'t call us, we\\'ll call You']);\nObject(_renderPage__WEBPACK_IMPORTED_MODULE_0__[\"createContent\"])('.tab-content', 'map-container', ''\n    , ['img', '', {src: 'img/map.jpg', alt: 'Restaurant Map', width: '400px', class: 'map-img'}]\n);\n\n// Add effects to tab changes\nconst tabEvents = (() => {\n    const tabs = document.querySelectorAll('.tab');\n    const highLightTab = (tabID) => {\n        tabs.forEach(tab => tab.classList.remove('selected-tab'));\n        document.getElementById(tabID).classList.add('selected-tab');\n    };\n    tabs.forEach(element => element\n        .addEventListener('click', event => {\n            tabEventHandler(event.target.id)\n        }));\n    const tabEventHandler = (tabID) => {\n        switch (tabID) {\n            case 'about-btn':\n                highLightTab(tabID);\n                break;\n            case 'home-btn':\n                highLightTab(tabID);\n                break;\n            case 'menu-btn':\n                highLightTab(tabID);\n                break;\n            case 'contact-btn':\n                highLightTab(tabID);\n                break;\n        }\n    }\n})();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/*! exports provided: createChildDiv, createContent, addContentToDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChildDiv\", function() { return createChildDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContent\", function() { return createContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addContentToDiv\", function() { return addContentToDiv; });\nconst createChildDiv = (parentID, newClass, newID) => {\n    const newChild = document.createElement('div');\n    if (newClass) newChild.className = newClass;\n    if (newID) newChild.id = newID;\n    document.getElementById(parentID).appendChild(newChild);\n};\n\nconst setAttributes = (element, attributes) => {\n    // Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));\n    Object.entries(attributes).forEach(args => element.setAttribute(...args));\n};\n\nconst addContentToDiv = (divClass, ...content) => {\n    content.forEach(element => {\n        const newElement = document.createElement(element[0]);\n        const divNode = document.getElementsByClassName(divClass);\n        if (!element[1] && (typeof element[2] === 'string')) {\n            newElement.innerHTML += element[2];\n            divNode[divNode.length - 1].appendChild(newElement);\n        } else if (element[1] && (typeof element[2] === 'string')) {\n            setAttributes(newElement, element[1]);\n            newElement.innerHTML += element[2];\n            divNode[divNode.length - 1].appendChild(newElement);\n        } else if (!element[1] && (typeof element[2] === 'object')) {\n            setAttributes(newElement, element[2]);\n            divNode[divNode.length - 1].appendChild(newElement);\n        } else if (element[1] && (typeof element[2] === 'object')) {\n            setAttributes(newElement, element[2]);\n            newElement.innerHTML += element[1];\n            document.getElementById('content').appendChild(newElement);\n        }\n    });\n};\n\nconst createContent = (parent, newClass, newID, ...content) => {\n    const newDiv = document.createElement('div');\n    newDiv.className = newClass;\n    if (newID) newDiv.id = newID;\n    const parentDiv = document.querySelectorAll(parent);\n    parentDiv[parentDiv.length - 1].appendChild(newDiv);\n    addContentToDiv(newClass, ...content);\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/renderPage.js?");

/***/ })

/******/ });