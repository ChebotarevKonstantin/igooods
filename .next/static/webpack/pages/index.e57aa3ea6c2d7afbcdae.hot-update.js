webpackHotUpdate_N_E("pages/index",{

/***/ "./componens/Form/Form.js":
/*!********************************!*\
  !*** ./componens/Form/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ \"./componens/Button/Button.js\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.module.css */ \"./componens/Form/Form.module.css\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/konstantin/1/igooods/componens/Form/Form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Form(_ref) {\n  _s();\n\n  var obj = _ref.obj;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var handleAdd = function handleAdd() {\n    setState(function (prev) {\n      return prev + 1;\n    });\n  };\n\n  var handleRemove = function handleRemove() {\n    setState(function (prev) {\n      return prev - 1;\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.div2,\n      children: [obj.name, \", \", obj.shop]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), !state ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: \"В корзину\",\n        onClick: function onClick() {\n          return handleAdd();\n        },\n        className: \"btnAdd\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 22\n      }, this), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cart,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"button\",\n        onClick: function onClick() {\n          return handleRemove();\n        },\n        children: \"  -  \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: [\" \", state, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"button\",\n        onClick: function onClick() {\n          return handleAdd();\n        },\n        children: \" + \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Form, \"dSBJZmkDt6dWLATuv9YPGwgkF9A=\");\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW5zL0Zvcm0vRm9ybS5qcz9hZWQxIl0sIm5hbWVzIjpbIkZvcm0iLCJvYmoiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVBZGQiLCJwcmV2IiwiaGFuZGxlUmVtb3ZlIiwic3R5bGUiLCJkaXYiLCJkaXYyIiwibmFtZSIsInNob3AiLCJjYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBdUI7QUFBQTs7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsQ0FBRCxDQUZiO0FBQUEsTUFFZEMsS0FGYztBQUFBLE1BRVBDLFFBRk87O0FBR3JCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJELFlBQVEsQ0FBQyxVQUFDRSxJQUFEO0FBQUEsYUFBVUEsSUFBSSxHQUFHLENBQWpCO0FBQUEsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCSCxZQUFRLENBQUMsVUFBQ0UsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLHVEQUFLLENBQUNDLEdBQXRCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELHVEQUFLLENBQUNFLElBQXRCO0FBQUEsaUJBQTZCVCxHQUFHLENBQUNVLElBQWpDLFFBQXlDVixHQUFHLENBQUNXLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUcsQ0FBQ1QsS0FBRCxnQkFBUztBQUFBLDhCQUFLLHFFQUFDLHNEQUFEO0FBQVEsZ0JBQVEsRUFBRSxXQUFsQjtBQUErQixlQUFPLEVBQUU7QUFBQSxpQkFBTUUsU0FBUyxFQUFmO0FBQUEsU0FBeEM7QUFBMkQsaUJBQVMsRUFBRTtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVQsZ0JBQ0M7QUFBSyxlQUFTLEVBQUVHLHVEQUFLLENBQUNLLElBQXRCO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxpQkFBUyxFQUFFLFFBRGI7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTU4sWUFBWSxFQUFsQjtBQUFBLFNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUEsd0JBQUtKLEtBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRSxxRUFBQyxzREFBRDtBQUNFLGlCQUFTLEVBQUUsUUFEYjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxTQUFTLEVBQWY7QUFBQSxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBM0JRTCxJOztLQUFBQSxJO0FBNkJNQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVucy9Gb3JtL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vRm9ybS5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBGb3JtKHsgb2JqIH0pIHtcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IGhhbmRsZUFkZCA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gcHJldiArIDEpXG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZSgocHJldikgPT4gcHJldiAtIDEpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGl2fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kaXYyfT57b2JqLm5hbWV9LCB7b2JqLnNob3B9XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgeyFzdGF0ZSA/IDxkaXY+PEJ1dHRvbiBjaGlsZHJlbj17XCLQkiDQutC+0YDQt9C40L3Rg1wifSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGQoKX0gY2xhc3NOYW1lPXtcImJ0bkFkZFwifSAvPiA8L2Rpdj4gOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FydH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ1dHRvblwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKCl9PiAgLSAgPC9CdXR0b24+XG4gICAgICAgICAgPGI+IHtzdGF0ZX0gPC9iPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidXR0b25cIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZCgpfT4gKyA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./componens/Form/Form.js\n");

/***/ })

})