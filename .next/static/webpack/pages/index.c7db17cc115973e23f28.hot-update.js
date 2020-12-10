webpackHotUpdate_N_E("pages/index",{

/***/ "./componens/Form/Form.js":
/*!********************************!*\
  !*** ./componens/Form/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ \"./componens/Button/Button.js\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.module.css */ \"./componens/Form/Form.module.css\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Form/Form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Form(_ref) {\n  _s();\n\n  var obj = _ref.obj;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      statePrice = _useState2[0],\n      setStatePrice = _useState2[1];\n\n  var handleAdd = function handleAdd() {\n    setState(function (prev) {\n      return prev + 1;\n    });\n    setStatePrice(function (prev) {\n      return prev + obj.price;\n    });\n  };\n\n  var handleRemove = function handleRemove() {\n    setState(function (prev) {\n      return prev - 1;\n    });\n    setStatePrice(function (prev) {\n      return prev - obj.price;\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div2,\n      children: [obj.name, \", \", obj.shop]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cart,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.price,\n        children: [statePrice + \" p \", \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, this), !state ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: \"В корзину\",\n          onClick: function onClick() {\n            return handleAdd();\n          },\n          className: \"btnAdd\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 44\n        }, this), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n        children: [statePrice + \" p \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          className: \"button\",\n          onClick: function onClick() {\n            return handleRemove();\n          },\n          children: \"  -  \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: [\" \", \" \" + state + \" \\u0448\\u0442.\", \"  \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          className: \"button\",\n          onClick: function onClick() {\n            return handleAdd();\n          },\n          children: \" + \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 1\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Form, \"36RSkrAdLVlvBdMkmO5h+zADXt4=\");\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW5zL0Zvcm0vRm9ybS5qcz9hZWQxIl0sIm5hbWVzIjpbIkZvcm0iLCJvYmoiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJzdGF0ZVByaWNlIiwic2V0U3RhdGVQcmljZSIsImhhbmRsZUFkZCIsInByZXYiLCJwcmljZSIsImhhbmRsZVJlbW92ZSIsInN0eWxlIiwiZGl2IiwiZGl2MiIsIm5hbWUiLCJzaG9wIiwiY2FydCIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULE9BQXVCO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUFBLGtCQUVLQyxzREFBUSxDQUFDLENBQUQsQ0FGYjtBQUFBLE1BRWRDLEtBRmM7QUFBQSxNQUVQQyxRQUZPOztBQUFBLG1CQUdlRixzREFBUSxDQUFDLENBQUQsQ0FIdkI7QUFBQSxNQUdkRyxVQUhjO0FBQUEsTUFHRkMsYUFIRTs7QUFLckIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkgsWUFBUSxDQUFDLFVBQUNJLElBQUQ7QUFBQSxhQUFVQSxJQUFJLEdBQUcsQ0FBakI7QUFBQSxLQUFELENBQVI7QUFDQUYsaUJBQWEsQ0FBQyxVQUFDRSxJQUFEO0FBQUEsYUFBVUEsSUFBSSxHQUFHUCxHQUFHLENBQUNRLEtBQXJCO0FBQUEsS0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCTixZQUFRLENBQUMsVUFBQ0ksSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBUjtBQUNBRixpQkFBYSxDQUFDLFVBQUNFLElBQUQ7QUFBQSxhQUFVQSxJQUFJLEdBQUdQLEdBQUcsQ0FBQ1EsS0FBckI7QUFBQSxLQUFELENBQWI7QUFFRCxHQUpEOztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFRSx1REFBSyxDQUFDQyxHQUF0QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCx1REFBSyxDQUFDRSxJQUF0QjtBQUFBLGlCQUE2QlosR0FBRyxDQUFDYSxJQUFqQyxRQUF5Q2IsR0FBRyxDQUFDYyxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlKO0FBQUssZUFBUyxFQUFFSix1REFBSyxDQUFDSyxJQUF0QjtBQUFBLDhCQUNNO0FBQUssaUJBQVMsRUFBRUwsdURBQUssQ0FBQ0YsS0FBdEI7QUFBQSxtQkFBOEJKLFVBQVUsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE4sRUFFTyxDQUFDRixLQUFELGdCQUFTO0FBQUssaUJBQVMsRUFBRVEsdURBQUssQ0FBQ00sR0FBdEI7QUFBQSxnQ0FBMkIscUVBQUMsc0RBQUQ7QUFBUSxrQkFBUSxFQUFFLFdBQWxCO0FBQStCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVYsU0FBUyxFQUFmO0FBQUEsV0FBeEM7QUFBMkQsbUJBQVMsRUFBRTtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBVCxnQkFDQztBQUFLLGlCQUFTLEVBQUVJLHVEQUFLLENBQUNNLEdBQXRCO0FBQUEsbUJBQ0RaLFVBQVUsUUFEVCxlQUdFLHFFQUFDLHNEQUFEO0FBQ0UsbUJBQVMsRUFBRSxRQURiO0FBRUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNSyxZQUFZLEVBQWxCO0FBQUEsV0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQU1FO0FBQUEsMEJBQUssTUFBTVAsS0FBTixtQkFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFPRSxxRUFBQyxzREFBRDtBQUNFLG1CQUFTLEVBQUUsUUFEYjtBQUVFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUksU0FBUyxFQUFmO0FBQUEsV0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7R0F0Q1FQLEk7O0tBQUFBLEk7QUF3Q01BLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW5zL0Zvcm0vRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9Gb3JtLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIEZvcm0oeyBvYmogfSkge1xuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3N0YXRlUHJpY2UsIHNldFN0YXRlUHJpY2VdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBoYW5kbGVBZGQgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+IHByZXYgKyAxKVxuICAgIHNldFN0YXRlUHJpY2UoKHByZXYpID0+IHByZXYgKyBvYmoucHJpY2UpXG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gcHJldiAtIDEpXG4gICAgc2V0U3RhdGVQcmljZSgocHJldikgPT4gcHJldiAtIG9iai5wcmljZSlcblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRpdn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGl2Mn0+e29iai5uYW1lfSwge29iai5zaG9wfVxuICAgICAgPC9kaXY+XG5cbjxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJ0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcmljZX0+e3N0YXRlUHJpY2UgKyBgIHAgYH0gPC9kaXY+XG4gICAgICB7IXN0YXRlID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+PEJ1dHRvbiBjaGlsZHJlbj17XCLQkiDQutC+0YDQt9C40L3Rg1wifSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGQoKX0gY2xhc3NOYW1lPXtcImJ0bkFkZFwifSAvPiA8L2Rpdj4gOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnRufT5cbiAgICAgIHtzdGF0ZVByaWNlICsgYCBwIGB9XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiYnV0dG9uXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUoKX0+ICAtICA8L0J1dHRvbj5cbiAgICAgICAgICA8Yj4ge2AgYCArIHN0YXRlICsgYCDRiNGCLmB9ICA8L2I+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ1dHRvblwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkKCl9PiArIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componens/Form/Form.js\n");

/***/ })

})