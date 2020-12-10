webpackHotUpdate_N_E("pages/index",{

/***/ "./componens/Form/Form.js":
/*!********************************!*\
  !*** ./componens/Form/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ \"./componens/Button/Button.js\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.module.css */ \"./componens/Form/Form.module.css\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Form/Form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Form(_ref) {\n  _s();\n\n  var obj = _ref.obj;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      statePrice = _useState2[0],\n      setStatePrice = _useState2[1];\n\n  var handleAdd = function handleAdd() {\n    setState(function (prev) {\n      return prev + 1;\n    });\n    setStatePrice(function (prev) {\n      return prev + obj.price;\n    });\n  };\n\n  var handleRemove = function handleRemove() {\n    setState(function (prev) {\n      return prev - 1;\n    });\n    setStatePrice(function (prev) {\n      return prev - obj.price;\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div2,\n      children: [obj.name, \", \", obj.shop]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cart,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.price,\n        children: [obj.price + \" p \", \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, this), !state ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: \"В корзину\",\n          onClick: function onClick() {\n            return handleAdd();\n          },\n          className: \"btnAdd\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 44\n        }, this), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          className: \"button\",\n          onClick: function onClick() {\n            return handleRemove();\n          },\n          children: \"  -  \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: [\" \", \" \" + state + \" \\u0448\\u0442.\", \"  \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          className: \"button\",\n          onClick: function onClick() {\n            return handleAdd();\n          },\n          children: \" + \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 1\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Form, \"36RSkrAdLVlvBdMkmO5h+zADXt4=\");\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW5zL0Zvcm0vRm9ybS5qcz9hZWQxIl0sIm5hbWVzIjpbIkZvcm0iLCJvYmoiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJzdGF0ZVByaWNlIiwic2V0U3RhdGVQcmljZSIsImhhbmRsZUFkZCIsInByZXYiLCJwcmljZSIsImhhbmRsZVJlbW92ZSIsInN0eWxlIiwiZGl2IiwiZGl2MiIsIm5hbWUiLCJzaG9wIiwiY2FydCIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULE9BQXVCO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUFBLGtCQUVLQyxzREFBUSxDQUFDLENBQUQsQ0FGYjtBQUFBLE1BRWRDLEtBRmM7QUFBQSxNQUVQQyxRQUZPOztBQUFBLG1CQUdlRixzREFBUSxDQUFDLENBQUQsQ0FIdkI7QUFBQSxNQUdkRyxVQUhjO0FBQUEsTUFHRkMsYUFIRTs7QUFLckIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkgsWUFBUSxDQUFDLFVBQUNJLElBQUQ7QUFBQSxhQUFVQSxJQUFJLEdBQUcsQ0FBakI7QUFBQSxLQUFELENBQVI7QUFDQUYsaUJBQWEsQ0FBQyxVQUFDRSxJQUFEO0FBQUEsYUFBVUEsSUFBSSxHQUFHUCxHQUFHLENBQUNRLEtBQXJCO0FBQUEsS0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCTixZQUFRLENBQUMsVUFBQ0ksSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBUjtBQUNBRixpQkFBYSxDQUFDLFVBQUNFLElBQUQ7QUFBQSxhQUFVQSxJQUFJLEdBQUdQLEdBQUcsQ0FBQ1EsS0FBckI7QUFBQSxLQUFELENBQWI7QUFFRCxHQUpEOztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFRSx1REFBSyxDQUFDQyxHQUF0QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCx1REFBSyxDQUFDRSxJQUF0QjtBQUFBLGlCQUE2QlosR0FBRyxDQUFDYSxJQUFqQyxRQUF5Q2IsR0FBRyxDQUFDYyxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlKO0FBQUssZUFBUyxFQUFFSix1REFBSyxDQUFDSyxJQUF0QjtBQUFBLDhCQUNNO0FBQUssaUJBQVMsRUFBRUwsdURBQUssQ0FBQ0YsS0FBdEI7QUFBQSxtQkFBOEJSLEdBQUcsQ0FBQ1EsS0FBSixRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETixFQUVPLENBQUNOLEtBQUQsZ0JBQVM7QUFBSyxpQkFBUyxFQUFFUSx1REFBSyxDQUFDTSxHQUF0QjtBQUFBLGdDQUEyQixxRUFBQyxzREFBRDtBQUFRLGtCQUFRLEVBQUUsV0FBbEI7QUFBK0IsaUJBQU8sRUFBRTtBQUFBLG1CQUFNVixTQUFTLEVBQWY7QUFBQSxXQUF4QztBQUEyRCxtQkFBUyxFQUFFO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFULGdCQUNDO0FBQUssaUJBQVMsRUFBRUksdURBQUssQ0FBQ00sR0FBdEI7QUFBQSxnQ0FFRSxxRUFBQyxzREFBRDtBQUNFLG1CQUFTLEVBQUUsUUFEYjtBQUVFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVAsWUFBWSxFQUFsQjtBQUFBLFdBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFLRTtBQUFBLDBCQUFLLE1BQU1QLEtBQU4sbUJBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBTUUscUVBQUMsc0RBQUQ7QUFDRSxtQkFBUyxFQUFFLFFBRGI7QUFFRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1JLFNBQVMsRUFBZjtBQUFBLFdBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBckNRUCxJOztLQUFBQSxJO0FBdUNNQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVucy9Gb3JtL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vRm9ybS5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBGb3JtKHsgb2JqIH0pIHtcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzdGF0ZVByaWNlLCBzZXRTdGF0ZVByaWNlXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xuICAgIHNldFN0YXRlKChwcmV2KSA9PiBwcmV2ICsgMSlcbiAgICBzZXRTdGF0ZVByaWNlKChwcmV2KSA9PiBwcmV2ICsgb2JqLnByaWNlKVxuICB9O1xuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+IHByZXYgLSAxKVxuICAgIHNldFN0YXRlUHJpY2UoKHByZXYpID0+IHByZXYgLSBvYmoucHJpY2UpXG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kaXZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRpdjJ9PntvYmoubmFtZX0sIHtvYmouc2hvcH1cbiAgICAgIDwvZGl2PlxuXG48ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FydH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJpY2V9PntvYmoucHJpY2UgKyBgIHAgYH0gPC9kaXY+XG4gICAgICB7IXN0YXRlID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+PEJ1dHRvbiBjaGlsZHJlbj17XCLQkiDQutC+0YDQt9C40L3Rg1wifSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGQoKX0gY2xhc3NOYW1lPXtcImJ0bkFkZFwifSAvPiA8L2Rpdj4gOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnRufT5cbiAgICAgIFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidXR0b25cIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZSgpfT4gIC0gIDwvQnV0dG9uPlxuICAgICAgICAgIDxiPiB7YCBgICsgc3RhdGUgKyBgINGI0YIuYH0gIDwvYj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiYnV0dG9uXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGQoKX0+ICsgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componens/Form/Form.js\n");

/***/ })

})