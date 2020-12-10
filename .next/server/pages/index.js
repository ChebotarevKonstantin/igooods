module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componens/Button/Button.js":
/*!************************************!*\
  !*** ./componens/Button/Button.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.css */ \"./componens/Button/Button.module.css\");\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Button/Button.js\";\n\n\n\nfunction Button({\n  onClick,\n  children,\n  className\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[className],\n      onClick: onClick,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvQnV0dG9uL0J1dHRvbi5qcz9mZjQwIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsU0FBRjtBQUFXQyxVQUFYO0FBQXFCQztBQUFyQixDQUFoQixFQUFrRDtBQUNoRCxzQkFDRTtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxFQUFFQyx5REFBSyxDQUFDRCxTQUFELENBRGxCO0FBRUUsYUFBTyxFQUFFRixPQUZYO0FBQUEsZ0JBSUdDO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztBQUVjRixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVucy9CdXR0b24vQnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xuZnVuY3Rpb24gQnV0dG9uKHsgb25DbGljaywgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVtjbGFzc05hbWVdfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componens/Button/Button.js\n");

/***/ }),

/***/ "./componens/Button/Button.module.css":
/*!********************************************!*\
  !*** ./componens/Button/Button.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"Button_button__37UiZ\",\n\t\"btnAdd\": \"Button_btnAdd__28UEy\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzP2JmZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVucy9CdXR0b24vQnV0dG9uLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJCdXR0b25fYnV0dG9uX18zN1VpWlwiLFxuXHRcImJ0bkFkZFwiOiBcIkJ1dHRvbl9idG5BZGRfXzI4VUV5XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componens/Button/Button.module.css\n");

/***/ }),

/***/ "./componens/Categories/Categories.js":
/*!********************************************!*\
  !*** ./componens/Categories/Categories.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Category_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category/Category */ \"./componens/Categories/Category/Category.js\");\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Categories/Categories.js\";\n\n\n\nfunction Categories({\n  state,\n  res\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [state ? res && res.map(obj => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Category_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      obj: obj\n    }, obj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 40\n    }, this)) : null, state ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 16\n    }, this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLmpzPzg1M2MiXSwibmFtZXMiOlsiQ2F0ZWdvcmllcyIsInN0YXRlIiwicmVzIiwibWFwIiwib2JqIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFwQixFQUFvQztBQUNsQyxzQkFDRTtBQUFBLGVBQ0dELEtBQUssR0FBR0MsR0FBRyxJQUFJQSxHQUFHLENBQUNDLEdBQUosQ0FBU0MsR0FBRCxpQkFBUyxxRUFBQywwREFBRDtBQUF1QixTQUFHLEVBQUVBO0FBQTVCLE9BQWVBLEdBQUcsQ0FBQ0MsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFqQixDQUFWLEdBQWtFLElBRDFFLEVBRUdKLEtBQUssZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILEdBQWMsSUFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7QUFFY0QseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnMvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL0NhdGVnb3J5L0NhdGVnb3J5JztcblxuZnVuY3Rpb24gQ2F0ZWdvcmllcyh7IHN0YXRlLCByZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c3RhdGUgPyByZXMgJiYgcmVzLm1hcCgob2JqKSA9PiA8Q2F0ZWdvcnkga2V5PXtvYmouaWR9IG9iaj17b2JqfSAvPikgOiBudWxsfVxuICAgICAge3N0YXRlID8gPGhyPjwvaHI+OiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componens/Categories/Categories.js\n");

/***/ }),

/***/ "./componens/Categories/Category/Category.js":
/*!***************************************************!*\
  !*** ./componens/Categories/Category/Category.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Category_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category.module.css */ \"./componens/Categories/Category/Category.module.css\");\n/* harmony import */ var _Category_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Category_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Categories/Category/Category.js\";\n\n\n\nfunction Category({\n  obj\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _Category_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.span,\n      children: obj.category\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvQ2F0ZWdvcmllcy9DYXRlZ29yeS9DYXRlZ29yeS5qcz84ZWRiIl0sIm5hbWVzIjpbIkNhdGVnb3J5Iiwib2JqIiwic3R5bGUiLCJzcGFuIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0I7QUFBRUM7QUFBRixDQUFsQixFQUEyQjtBQUN6QixzQkFDRTtBQUFBLDJCQUNFO0FBQU0sZUFBUyxFQUFFQywyREFBSyxDQUFDQyxJQUF2QjtBQUFBLGdCQUE4QkYsR0FBRyxDQUFDRztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRDs7QUFFY0osdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnMvQ2F0ZWdvcmllcy9DYXRlZ29yeS9DYXRlZ29yeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9DYXRlZ29yeS5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBDYXRlZ29yeSh7IG9iaiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuc3Bhbn0+e29iai5jYXRlZ29yeX08L3NwYW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componens/Categories/Category/Category.js\n");

/***/ }),

/***/ "./componens/Categories/Category/Category.module.css":
/*!***********************************************************!*\
  !*** ./componens/Categories/Category/Category.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"span\": \"Category_span__PYEH0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvQ2F0ZWdvcmllcy9DYXRlZ29yeS9DYXRlZ29yeS5tb2R1bGUuY3NzPzUzYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnMvQ2F0ZWdvcmllcy9DYXRlZ29yeS9DYXRlZ29yeS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3BhblwiOiBcIkNhdGVnb3J5X3NwYW5fX1BZRUgwXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componens/Categories/Category/Category.module.css\n");

/***/ }),

/***/ "./componens/Form/Form.js":
/*!********************************!*\
  !*** ./componens/Form/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ \"./componens/Button/Button.js\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.module.css */ \"./componens/Form/Form.module.css\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Form/Form.js\";\n\n\n\n\nfunction Form({\n  obj\n}) {\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: stateTotPrice,\n    1: setStateTotPrice\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n\n  const handleAdd = () => {\n    setState(prev => prev + 1);\n    setStateTotPrice(prev => prev + obj.price);\n  };\n\n  const handleRemove = () => {\n    setState(prev => prev - 1);\n    setStateTotPrice(prev => prev - obj.price);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div2,\n      children: [obj.name, \", \", obj.shop]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cart,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.price,\n        children: [obj.price + ` p `, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, this), !state ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: \"В корзину\",\n          onClick: () => handleAdd(),\n          className: \"btnAdd\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 44\n        }, this), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"button\",\n            onClick: () => handleRemove(),\n            children: \"  -  \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: [\" \", ` ` + state + ` шт.`, \"  \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"button\",\n            onClick: () => handleAdd(),\n            children: \" + \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 8\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n          children: [\" \", `Итого: ` + stateTotPrice + ` p `]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 8\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 1\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvRm9ybS9Gb3JtLmpzP2FlZDEiXSwibmFtZXMiOlsiRm9ybSIsIm9iaiIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInN0YXRlVG90UHJpY2UiLCJzZXRTdGF0ZVRvdFByaWNlIiwiaGFuZGxlQWRkIiwicHJldiIsInByaWNlIiwiaGFuZGxlUmVtb3ZlIiwic3R5bGUiLCJkaXYiLCJkaXYyIiwibmFtZSIsInNob3AiLCJjYXJ0IiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBdUI7QUFFckIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLENBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0Ysc0RBQVEsQ0FBQyxDQUFELENBQWxEOztBQUVBLFFBQU1HLFNBQVMsR0FBRyxNQUFNO0FBQ3RCSixZQUFRLENBQUVLLElBQUQsSUFBVUEsSUFBSSxHQUFHLENBQWxCLENBQVI7QUFDQUYsb0JBQWdCLENBQUVFLElBQUQsSUFBVUEsSUFBSSxHQUFHUCxHQUFHLENBQUNRLEtBQXRCLENBQWhCO0FBQ0QsR0FIRDs7QUFJQSxRQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QlAsWUFBUSxDQUFFSyxJQUFELElBQVVBLElBQUksR0FBRyxDQUFsQixDQUFSO0FBQ0FGLG9CQUFnQixDQUFFRSxJQUFELElBQVVBLElBQUksR0FBR1AsR0FBRyxDQUFDUSxLQUF0QixDQUFoQjtBQUVELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLHVEQUFLLENBQUNDLEdBQXRCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELHVEQUFLLENBQUNFLElBQXRCO0FBQUEsaUJBQTZCWixHQUFHLENBQUNhLElBQWpDLFFBQXlDYixHQUFHLENBQUNjLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUo7QUFBSyxlQUFTLEVBQUVKLHVEQUFLLENBQUNLLElBQXRCO0FBQUEsOEJBQ007QUFBSyxpQkFBUyxFQUFFTCx1REFBSyxDQUFDRixLQUF0QjtBQUFBLG1CQUE4QlIsR0FBRyxDQUFDUSxLQUFKLEdBQWEsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE4sRUFFTyxDQUFDUCxLQUFELGdCQUFTO0FBQUssaUJBQVMsRUFBRVMsdURBQUssQ0FBQ00sR0FBdEI7QUFBQSxnQ0FBMkIscUVBQUMsc0RBQUQ7QUFBUyxrQkFBUSxFQUFFLFdBQW5CO0FBQWdDLGlCQUFPLEVBQUUsTUFBTVYsU0FBUyxFQUF4RDtBQUE0RCxtQkFBUyxFQUFFO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFULGdCQUVBO0FBQUEsZ0NBRUE7QUFBSyxtQkFBUyxFQUFFSSx1REFBSyxDQUFDTSxHQUF0QjtBQUFBLGtDQUNHLHFFQUFDLHNEQUFEO0FBQ0UscUJBQVMsRUFBRSxRQURiO0FBRUUsbUJBQU8sRUFBRSxNQUFNUCxZQUFZLEVBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURILGVBSUc7QUFBQSw0QkFBTSxHQUFELEdBQU1SLEtBQU4sR0FBZSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkgsZUFLRyxxRUFBQyxzREFBRDtBQUNFLHFCQUFTLEVBQUUsUUFEYjtBQUVFLG1CQUFPLEVBQUUsTUFBTUssU0FBUyxFQUYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFXQztBQUFLLG1CQUFTLEVBQUVJLHVEQUFLLENBQUNNLEdBQXRCO0FBQUEsMEJBQThCLFNBQUQsR0FBWVosYUFBWixHQUE2QixLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7O0FBRWNMLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW5zL0Zvcm0vRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9Gb3JtLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIEZvcm0oeyBvYmogfSkge1xuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3N0YXRlVG90UHJpY2UsIHNldFN0YXRlVG90UHJpY2VdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBoYW5kbGVBZGQgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+IHByZXYgKyAxKVxuICAgIHNldFN0YXRlVG90UHJpY2UoKHByZXYpID0+IHByZXYgKyBvYmoucHJpY2UpXG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gcHJldiAtIDEpXG4gICAgc2V0U3RhdGVUb3RQcmljZSgocHJldikgPT4gcHJldiAtIG9iai5wcmljZSlcblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRpdn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGl2Mn0+e29iai5uYW1lfSwge29iai5zaG9wfVxuICAgICAgPC9kaXY+XG5cbjxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJ0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcmljZX0+e29iai5wcmljZSArIGAgcCBgfSA8L2Rpdj5cbiAgICAgIHshc3RhdGUgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnRufT48QnV0dG9uICBjaGlsZHJlbj17XCLQkiDQutC+0YDQt9C40L3Rg1wifSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGQoKX0gY2xhc3NOYW1lPXtcImJ0bkFkZFwifSAvPiA8L2Rpdj4gOlxuICAgICAgIFxuICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+XG4gICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidXR0b25cIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZSgpfT4gIC0gIDwvQnV0dG9uPlxuICAgICAgICAgIDxiPiB7YCBgICsgc3RhdGUgKyBgINGI0YIuYH0gIDwvYj5cbiAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ1dHRvblwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkKCl9PiArIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+IHtg0JjRgtC+0LPQvjogYCArIHN0YXRlVG90UHJpY2UgKyBgIHAgYH08L2Rpdj5cbiAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componens/Form/Form.js\n");

/***/ }),

/***/ "./componens/Form/Form.module.css":
/*!****************************************!*\
  !*** ./componens/Form/Form.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"div\": \"Form_div__n37Fp\",\n\t\"div2\": \"Form_div2__3NrAc\",\n\t\"price\": \"Form_price__3T1X8\",\n\t\"btn\": \"Form_btn__3jFL0\",\n\t\"cart\": \"Form_cart__yx38s\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvRm9ybS9Gb3JtLm1vZHVsZS5jc3M/ZmUxNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW5zL0Zvcm0vRm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGl2XCI6IFwiRm9ybV9kaXZfX24zN0ZwXCIsXG5cdFwiZGl2MlwiOiBcIkZvcm1fZGl2Ml9fM05yQWNcIixcblx0XCJwcmljZVwiOiBcIkZvcm1fcHJpY2VfXzNUMVg4XCIsXG5cdFwiYnRuXCI6IFwiRm9ybV9idG5fXzNqRkwwXCIsXG5cdFwiY2FydFwiOiBcIkZvcm1fY2FydF9feXgzOHNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componens/Form/Form.module.css\n");

/***/ }),

/***/ "./componens/Input/Input.js":
/*!**********************************!*\
  !*** ./componens/Input/Input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Categories_Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Categories/Categories */ \"./componens/Categories/Categories.js\");\n/* harmony import */ var _List_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../List/List */ \"./componens/List/List.js\");\n/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input.module.css */ \"./componens/Input/Input.module.css\");\n/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Input/Input.js\";\n\n\n\n\n\n\nfunction Input({\n  data,\n  state,\n  setState\n}) {\n  const inp = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    inp.current.focus();\n  }, []);\n  const {\n    0: res,\n    1: setRes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n\n  const clickHandler = () => {\n    setState(() => \"\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setRes(() => data.data.filter(obj => {\n      let res = false;\n      let keysArr = Object.keys(obj);\n      keysArr.forEach(key => {\n        if (typeof obj[key] !== 'object' && typeof obj[key] !== 'number') {\n          if (obj[key].toLowerCase().includes(state.toLowerCase())) {\n            res = true;\n          }\n        }\n      });\n      return res;\n    }));\n  }, [state]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: _Input_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,\n      ref: inp,\n      onChange: e => {\n        setState(e.target.value);\n      },\n      value: state,\n      placeholder: \"\\u041D\\u0430\\u0439\\u0442\\u0438\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), state ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _Input_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,\n      onClick: clickHandler,\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 16\n    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Categories_Categories__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      state: state,\n      res: res\n    }, Math.random() * Math.random(), false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_List_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      state: state,\n      res: res\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvSW5wdXQvSW5wdXQuanM/NzA2YiJdLCJuYW1lcyI6WyJJbnB1dCIsImRhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwiaW5wIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwicmVzIiwic2V0UmVzIiwidXNlU3RhdGUiLCJjbGlja0hhbmRsZXIiLCJmaWx0ZXIiLCJvYmoiLCJrZXlzQXJyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3R5bGUiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxLQUFULENBQWU7QUFBQ0MsTUFBRDtBQUFPQyxPQUFQO0FBQWNDO0FBQWQsQ0FBZixFQUF5QztBQUN2QyxRQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUFFRixPQUFHLENBQUNHLE9BQUosQ0FBWUMsS0FBWjtBQUFxQixHQUE5QixFQUFnQyxFQUFoQyxDQUFUO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCQyxzREFBUSxDQUFDLElBQUQsQ0FBOUI7O0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekJULFlBQVEsQ0FBQyxNQUFNLEVBQVAsQ0FBUjtBQUNELEdBRkQ7O0FBR0FHLHlEQUFTLENBQUMsTUFBTTtBQUNkSSxVQUFNLENBQUMsTUFBTVQsSUFBSSxDQUFDQSxJQUFMLENBQVVZLE1BQVYsQ0FBaUJDLEdBQUcsSUFBSTtBQUVuQyxVQUFJTCxHQUFHLEdBQUcsS0FBVjtBQUNBLFVBQUlNLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILEdBQVosQ0FBZDtBQUNBQyxhQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLEdBQUcsSUFBSTtBQUNyQixZQUFJLE9BQU9MLEdBQUcsQ0FBQ0ssR0FBRCxDQUFWLEtBQW9CLFFBQXBCLElBQWdDLE9BQU9MLEdBQUcsQ0FBQ0ssR0FBRCxDQUFWLEtBQW9CLFFBQXhELEVBQWtFO0FBQ2hFLGNBQUlMLEdBQUcsQ0FBQ0ssR0FBRCxDQUFILENBQVNDLFdBQVQsR0FBdUJDLFFBQXZCLENBQWdDbkIsS0FBSyxDQUFDa0IsV0FBTixFQUFoQyxDQUFKLEVBQTBEO0FBQ3hEWCxlQUFHLEdBQUcsSUFBTjtBQUNEO0FBQ0Y7QUFDRixPQU5EO0FBT0EsYUFBT0EsR0FBUDtBQUNELEtBWlksQ0FBUCxDQUFOO0FBYUQsR0FkUSxFQWNOLENBQUNQLEtBQUQsQ0FkTSxDQUFUO0FBZ0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyxlQUFTLEVBQUVvQix3REFBSyxDQUFDQyxLQUF4QjtBQUErQixTQUFHLEVBQUVuQixHQUFwQztBQUF5QyxjQUFRLEVBQUdvQixDQUFELElBQU87QUFDeERyQixnQkFBUSxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELE9BRkQ7QUFFRyxXQUFLLEVBQUV4QixLQUZWO0FBRWlCLGlCQUFXLEVBQUM7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUdBLEtBQUssZ0JBQUc7QUFBUSxlQUFTLEVBQUVvQix3REFBSyxDQUFDSyxNQUF6QjtBQUFpQyxhQUFPLEVBQUVmLFlBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsR0FBeUUsSUFKakYsZUFLRSxxRUFBQyw4REFBRDtBQUE4QyxXQUFLLEVBQUVWLEtBQXJEO0FBQTRELFNBQUcsRUFBRU87QUFBakUsT0FBaUJtQixJQUFJLENBQUNDLE1BQUwsS0FBY0QsSUFBSSxDQUFDQyxNQUFMLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLHFFQUFDLGtEQUFEO0FBQU0sV0FBSyxFQUFFM0IsS0FBYjtBQUFvQixTQUFHLEVBQUVPO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztBQUVjVCxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVucy9JbnB1dC9JbnB1dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4uL0NhdGVnb3JpZXMvQ2F0ZWdvcmllcyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9MaXN0L0xpc3QnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9JbnB1dC5tb2R1bGUuY3NzJ1xuXG5cbmZ1bmN0aW9uIElucHV0KHtkYXRhLCBzdGF0ZSwgc2V0U3RhdGV9ICkge1xuICBjb25zdCBpbnAgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4geyBpbnAuY3VycmVudC5mb2N1cygpIH0sIFtdKVxuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFN0YXRlKCgpID0+IFwiXCIpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRSZXMoKCkgPT4gZGF0YS5kYXRhLmZpbHRlcihvYmogPT4ge1xuXG4gICAgICBsZXQgcmVzID0gZmFsc2U7XG4gICAgICBsZXQga2V5c0FyciA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICBrZXlzQXJyLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9ialtrZXldICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIGlmIChvYmpba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHN0YXRlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICByZXMgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH0pKVxuICB9LCBbc3RhdGVdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlLmlucHV0fSByZWY9e2lucH0gb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgfX0gdmFsdWU9e3N0YXRlfSBwbGFjZWhvbGRlcj0n0J3QsNC50YLQuCcgLz5cbiAgICAgIHtzdGF0ZSA/IDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0gPlg8L2J1dHRvbj4gOiBudWxsfVxuICAgICAgPENhdGVnb3JpZXMga2V5PXtNYXRoLnJhbmRvbSgpKk1hdGgucmFuZG9tKCl9IHN0YXRlPXtzdGF0ZX0gcmVzPXtyZXN9IC8+XG4gICAgICA8TGlzdCBzdGF0ZT17c3RhdGV9IHJlcz17cmVzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componens/Input/Input.js\n");

/***/ }),

/***/ "./componens/Input/Input.module.css":
/*!******************************************!*\
  !*** ./componens/Input/Input.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"input\": \"Input_input__f30zi\",\n\t\"button\": \"Input_button__AvwxC\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvSW5wdXQvSW5wdXQubW9kdWxlLmNzcz80ZGNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnMvSW5wdXQvSW5wdXQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImlucHV0XCI6IFwiSW5wdXRfaW5wdXRfX2YzMHppXCIsXG5cdFwiYnV0dG9uXCI6IFwiSW5wdXRfYnV0dG9uX19Bdnd4Q1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componens/Input/Input.module.css\n");

/***/ }),

/***/ "./componens/List/List.js":
/*!********************************!*\
  !*** ./componens/List/List.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Form/Form */ \"./componens/Form/Form.js\");\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/List/List.js\";\n\n\n\nfunction List({\n  state,\n  res\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: state ? res && res.map(obj => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Form_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      obj: obj\n    }, Math.random(), false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 40\n    }, this)) : null\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvTGlzdC9MaXN0LmpzPzcwMmYiXSwibmFtZXMiOlsiTGlzdCIsInN0YXRlIiwicmVzIiwibWFwIiwib2JqIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsQ0FBYztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBZCxFQUErQjtBQUM3QixzQkFDRTtBQUFBLGNBQ0dELEtBQUssR0FBR0MsR0FBRyxJQUFJQSxHQUFHLENBQUNDLEdBQUosQ0FBU0MsR0FBRCxpQkFBUyxxRUFBQyxrREFBRDtBQUEwQixTQUFHLEVBQUVBO0FBQS9CLE9BQVdDLElBQUksQ0FBQ0MsTUFBTCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBakIsQ0FBVixHQUFxRTtBQUQ3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY04sbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnMvTGlzdC9MaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL0Zvcm0vRm9ybSdcbmZ1bmN0aW9uIExpc3QoeyBzdGF0ZSwgcmVzLCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtzdGF0ZSA/IHJlcyAmJiByZXMubWFwKChvYmopID0+IDxGb3JtIGtleT17TWF0aC5yYW5kb20oKX0gb2JqPXtvYmp9IC8+KSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componens/List/List.js\n");

/***/ }),

/***/ "./componens/Modal/Modal.js":
/*!**********************************!*\
  !*** ./componens/Modal/Modal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/Input */ \"./componens/Input/Input.js\");\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Modal/Modal.js\";\n\n\nfunction Modal({\n  state,\n  setState,\n  data,\n  active,\n  setActive,\n  children\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: active ? \"modal active\" : \"modal\",\n    onClick: () => setActive(false),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: active ? \"modal__content active\" : \"modal__content\",\n      onClick: e => e.stopPropagation(),\n      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        state: state,\n        setState: setState,\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvTW9kYWwvTW9kYWwuanM/N2Q2NCJdLCJuYW1lcyI6WyJNb2RhbCIsInN0YXRlIiwic2V0U3RhdGUiLCJkYXRhIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY2hpbGRyZW4iLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUNDLE9BQUQ7QUFBUUMsVUFBUjtBQUFrQkMsTUFBbEI7QUFBd0JDLFFBQXhCO0FBQWdDQyxXQUFoQztBQUEyQ0M7QUFBM0MsQ0FBZixFQUFzRTtBQUVuRixzQkFDRTtBQUFNLGFBQVMsRUFBRUYsTUFBTSxHQUFHLGNBQUgsR0FBb0IsT0FBM0M7QUFBb0QsV0FBTyxFQUFFLE1BQUtDLFNBQVMsQ0FBQyxLQUFELENBQTNFO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUVELE1BQU0sR0FBRyx1QkFBSCxHQUE2QixnQkFBbkQ7QUFBcUUsYUFBTyxFQUFFRyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsZUFBRixFQUFuRjtBQUFBLGlCQUNBRixRQURBLGVBRUkscUVBQUMsb0RBQUQ7QUFBTyxhQUFLLEVBQUVMLEtBQWQ7QUFBcUIsZ0JBQVEsRUFBRUMsUUFBL0I7QUFBeUMsWUFBSSxFQUFFQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QiLCJmaWxlIjoiLi9jb21wb25lbnMvTW9kYWwvTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0L0lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoe3N0YXRlLCBzZXRTdGF0ZSwgZGF0YSwgYWN0aXZlLCBzZXRBY3RpdmUsIGNoaWxkcmVuIH0pIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIGNsYXNzTmFtZT17YWN0aXZlID8gXCJtb2RhbCBhY3RpdmVcIiA6IFwibW9kYWxcIn0gb25DbGljaz17KCk9PiBzZXRBY3RpdmUoZmFsc2UpfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YWN0aXZlID8gXCJtb2RhbF9fY29udGVudCBhY3RpdmVcIiA6IFwibW9kYWxfX2NvbnRlbnRcIn0gb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgIHtjaGlsZHJlbn1cbiAgICAgICAgPElucHV0IHN0YXRlPXtzdGF0ZX0gc2V0U3RhdGU9e3NldFN0YXRlfSBkYXRhPXtkYXRhfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componens/Modal/Modal.js\n");

/***/ }),

/***/ "./componens/Start/Start.js":
/*!**********************************!*\
  !*** ./componens/Start/Start.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal/Modal */ \"./componens/Modal/Modal.js\");\n/* harmony import */ var _Start_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Start.module.css */ \"./componens/Start/Start.module.css\");\n/* harmony import */ var _Start_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Start_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Start/Start.js\";\n\n\n\n\nfunction Start({\n  data\n}) {\n  const {\n    0: modalActive,\n    1: setModalActive\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: _Start_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.divStart,\n      onClick: () => setModalActive(true),\n      placeholder: state || 'Найти'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      active: modalActive,\n      setActive: setModalActive,\n      data: data,\n      state: state,\n      setState: setState\n    }, Math.random(), false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Start);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvU3RhcnQvU3RhcnQuanM/YTU3OCJdLCJuYW1lcyI6WyJTdGFydCIsImRhdGEiLCJtb2RhbEFjdGl2ZSIsInNldE1vZGFsQWN0aXZlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwic3R5bGUiLCJkaXZTdGFydCIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxDQUFlO0FBQUVDO0FBQUYsQ0FBZixFQUF5QjtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLGVBQVMsRUFBRUcsd0RBQUssQ0FBQ0MsUUFBeEI7QUFBa0MsYUFBTyxFQUFFLE1BQU1MLGNBQWMsQ0FBQyxJQUFELENBQS9EO0FBQXVFLGlCQUFXLEVBQUVFLEtBQUssSUFBRztBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxvREFBRDtBQUEyQixZQUFNLEVBQUVILFdBQW5DO0FBQWdELGVBQVMsRUFBRUMsY0FBM0Q7QUFBMkUsVUFBSSxFQUFFRixJQUFqRjtBQUF1RixXQUFLLEVBQUVJLEtBQTlGO0FBQXFHLGNBQVEsRUFBRUM7QUFBL0csT0FBWUcsSUFBSSxDQUFDQyxNQUFMLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRWNWLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW5zL1N0YXJ0L1N0YXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL01vZGFsJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL1N0YXJ0Lm1vZHVsZS5jc3MnXG5mdW5jdGlvbiBTdGFydCh7IGRhdGEgfSkge1xuICBjb25zdCBbbW9kYWxBY3RpdmUsIHNldE1vZGFsQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGUuZGl2U3RhcnR9IG9uQ2xpY2s9eygpID0+IHNldE1vZGFsQWN0aXZlKHRydWUpfSBwbGFjZWhvbGRlcj17c3RhdGV8fCAn0J3QsNC50YLQuCd9IC8+XG4gICAgICA8TW9kYWwga2V5PXtNYXRoLnJhbmRvbSgpfSBhY3RpdmU9e21vZGFsQWN0aXZlfSBzZXRBY3RpdmU9e3NldE1vZGFsQWN0aXZlfSBkYXRhPXtkYXRhfSBzdGF0ZT17c3RhdGV9IHNldFN0YXRlPXtzZXRTdGF0ZX0+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componens/Start/Start.js\n");

/***/ }),

/***/ "./componens/Start/Start.module.css":
/*!******************************************!*\
  !*** ./componens/Start/Start.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"divStart\": \"Start_divStart__3w0I4\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnMvU3RhcnQvU3RhcnQubW9kdWxlLmNzcz82YjA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW5zL1N0YXJ0L1N0YXJ0Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkaXZTdGFydFwiOiBcIlN0YXJ0X2RpdlN0YXJ0X18zdzBJNFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componens/Start/Start.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _componens_Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componens/Input/Input */ \"./componens/Input/Input.js\");\n/* harmony import */ var _componens_Start_Start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componens/Start/Start */ \"./componens/Start/Start.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/pages/index.js\";\n\n\n\nfunction Home(data) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_componens_Start_Start__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\nasync function getServerSideProps(context) {\n  // const res = await fetch(`https://jsonplaceholder.typicode.com/users`)\n  const res = await fetch(`https://my-json-server.typicode.com/ChebotarevKonstantin/TEST_API/catalog`);\n  const data = await res.json();\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJkYXRhIiwic3R5bGVzIiwiZGl2IiwiY29udGFpbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwianNvbiIsIm5vdEZvdW5kIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBR2UsU0FBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2pDLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxHQUF2QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxTQUF2QjtBQUFBLDZCQUNFLHFFQUFDLDhEQUFEO0FBQVEsWUFBSSxFQUFFSDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7QUFHTSxlQUFlSSxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQ7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLDJFQUFGLENBQXZCO0FBRUEsUUFBTVAsSUFBSSxHQUFHLE1BQU1NLEdBQUcsQ0FBQ0UsSUFBSixFQUFuQjs7QUFFQSxNQUFJLENBQUNSLElBQUwsRUFBVztBQUNULFdBQU87QUFDTFMsY0FBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUVELFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQUVWO0FBQUY7QUFERixHQUFQO0FBR0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVucy9JbnB1dC9JbnB1dCdcbmltcG9ydCBTdGFydCBmcm9tICcuLi9jb21wb25lbnMvU3RhcnQvU3RhcnQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKGRhdGEpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxTdGFydCAgZGF0YT17ZGF0YX0vPlxuICAgICAgICB7LyogPElucHV0IGRhdGE9e2RhdGF9IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc2ApXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9DaGVib3RhcmV2S29uc3RhbnRpbi9URVNUX0FQSS9jYXRhbG9nYClcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"div\": \"Home_div__1-Ral\",\n\t\"container\": \"Home_container__1EcsU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkaXZcIjogXCJIb21lX2Rpdl9fMS1SYWxcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });