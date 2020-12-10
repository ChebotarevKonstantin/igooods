webpackHotUpdate_N_E("pages/index",{

/***/ "./componens/Input/Input.js":
/*!**********************************!*\
  !*** ./componens/Input/Input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Categories_Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Categories/Categories */ \"./componens/Categories/Categories.js\");\n/* harmony import */ var _List_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../List/List */ \"./componens/List/List.js\");\n/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input.module.css */ \"./componens/Input/Input.module.css\");\n/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Input/Input.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Input(_ref) {\n  _s();\n\n  var data = _ref.data,\n      state = _ref.state,\n      setState = _ref.setState;\n  var inp = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    inp.current.focus();\n  }, []); // const [state, setState] = useState('')\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      res = _useState[0],\n      setRes = _useState[1];\n\n  var clickHandler = function clickHandler() {\n    setState(function () {\n      return \"\";\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setRes(function () {\n      return data.data.filter(function (obj) {\n        var res = false;\n        var keysArr = Object.keys(obj);\n        keysArr.forEach(function (key) {\n          if (typeof obj[key] !== 'object' && typeof obj[key] !== 'number') {// if (obj[key].toLowerCase().includes(state.toLowerCase())) {\n            //   res = true\n            // }\n          }\n        });\n        return res;\n      });\n    });\n  }, [state]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      className: _Input_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,\n      ref: inp,\n      onChange: function onChange(e) {\n        setState(e.target.value);\n      },\n      value: state,\n      placeholder: \"\\u041D\\u0430\\u0439\\u0442\\u0438\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), state ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _Input_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,\n      onClick: clickHandler,\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 16\n    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Categories_Categories__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      state: state,\n      res: res\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_List_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      state: state,\n      res: res\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Input, \"XFvpAhleUJcON/Xl//AMV24xR48=\");\n\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW5zL0lucHV0L0lucHV0LmpzPzcwNmIiXSwibmFtZXMiOlsiSW5wdXQiLCJkYXRhIiwic3RhdGUiLCJzZXRTdGF0ZSIsImlucCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsInVzZVN0YXRlIiwicmVzIiwic2V0UmVzIiwiY2xpY2tIYW5kbGVyIiwiZmlsdGVyIiwib2JqIiwia2V5c0FyciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic3R5bGUiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF6QkMsSUFBeUIsUUFBekJBLElBQXlCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN2QyxNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUFFRixPQUFHLENBQUNHLE9BQUosQ0FBWUMsS0FBWjtBQUFxQixHQUE5QixFQUFnQyxFQUFoQyxDQUFULENBRnVDLENBR3ZDOztBQUh1QyxrQkFJakJDLHNEQUFRLENBQUMsSUFBRCxDQUpTO0FBQUEsTUFJaENDLEdBSmdDO0FBQUEsTUFJM0JDLE1BSjJCOztBQUt2QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCVCxZQUFRLENBQUM7QUFBQSxhQUFNLEVBQU47QUFBQSxLQUFELENBQVI7QUFDRCxHQUZEOztBQUdBRyx5REFBUyxDQUFDLFlBQU07QUFDZEssVUFBTSxDQUFDO0FBQUEsYUFBTVYsSUFBSSxDQUFDQSxJQUFMLENBQVVZLE1BQVYsQ0FBaUIsVUFBQUMsR0FBRyxFQUFJO0FBRW5DLFlBQUlKLEdBQUcsR0FBRyxLQUFWO0FBQ0EsWUFBSUssT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsR0FBWixDQUFkO0FBQ0FDLGVBQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFBQyxHQUFHLEVBQUk7QUFDckIsY0FBSSxPQUFPTCxHQUFHLENBQUNLLEdBQUQsQ0FBVixLQUFvQixRQUFwQixJQUFnQyxPQUFPTCxHQUFHLENBQUNLLEdBQUQsQ0FBVixLQUFvQixRQUF4RCxFQUFrRSxDQUNoRTtBQUNBO0FBQ0E7QUFDRDtBQUNGLFNBTkQ7QUFPQSxlQUFPVCxHQUFQO0FBQ0QsT0FaWSxDQUFOO0FBQUEsS0FBRCxDQUFOO0FBYUQsR0FkUSxFQWNOLENBQUNSLEtBQUQsQ0FkTSxDQUFUO0FBZ0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyxlQUFTLEVBQUVrQix3REFBSyxDQUFDQyxLQUF4QjtBQUErQixTQUFHLEVBQUVqQixHQUFwQztBQUF5QyxjQUFRLEVBQUUsa0JBQUNrQixDQUFELEVBQU87QUFDeERuQixnQkFBUSxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELE9BRkQ7QUFFRyxXQUFLLEVBQUV0QixLQUZWO0FBRWlCLGlCQUFXLEVBQUM7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUdBLEtBQUssZ0JBQUc7QUFBUSxlQUFTLEVBQUVrQix3REFBSyxDQUFDSyxNQUF6QjtBQUFpQyxhQUFPLEVBQUViLFlBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsR0FBeUUsSUFKakYsZUFLRSxxRUFBQyw4REFBRDtBQUFZLFdBQUssRUFBRVYsS0FBbkI7QUFBMEIsU0FBRyxFQUFFUTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRSxxRUFBQyxrREFBRDtBQUFNLFdBQUssRUFBRVIsS0FBYjtBQUFvQixTQUFHLEVBQUVRO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztHQWxDUVYsSzs7S0FBQUEsSztBQW9DTUEsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnMvSW5wdXQvSW5wdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuLi9DYXRlZ29yaWVzL0NhdGVnb3JpZXMnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vTGlzdC9MaXN0J1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vSW5wdXQubW9kdWxlLmNzcydcblxuXG5mdW5jdGlvbiBJbnB1dCh7ZGF0YSwgc3RhdGUsIHNldFN0YXRlfSApIHtcbiAgY29uc3QgaW5wID0gdXNlUmVmKClcbiAgdXNlRWZmZWN0KCgpID0+IHsgaW5wLmN1cnJlbnQuZm9jdXMoKSB9LCBbXSlcbiAgLy8gY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Jlcywgc2V0UmVzXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZSgoKSA9PiBcIlwiKVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UmVzKCgpID0+IGRhdGEuZGF0YS5maWx0ZXIob2JqID0+IHtcblxuICAgICAgbGV0IHJlcyA9IGZhbHNlO1xuICAgICAgbGV0IGtleXNBcnIgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAga2V5c0Fyci5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmpba2V5XSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAvLyBpZiAob2JqW2tleV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzdGF0ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIC8vICAgcmVzID0gdHJ1ZVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXNcbiAgICB9KSlcbiAgfSwgW3N0YXRlXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH0gcmVmPXtpbnB9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZShlLnRhcmdldC52YWx1ZSlcbiAgICAgIH19IHZhbHVlPXtzdGF0ZX0gcGxhY2Vob2xkZXI9J9Cd0LDQudGC0LgnIC8+XG4gICAgICB7c3RhdGUgPyA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9ID5YPC9idXR0b24+IDogbnVsbH1cbiAgICAgIDxDYXRlZ29yaWVzIHN0YXRlPXtzdGF0ZX0gcmVzPXtyZXN9IC8+XG4gICAgICA8TGlzdCBzdGF0ZT17c3RhdGV9IHJlcz17cmVzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componens/Input/Input.js\n");

/***/ })

})