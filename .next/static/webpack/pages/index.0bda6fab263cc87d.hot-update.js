"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Home = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), username = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setLoading(true);\n        router.push(\"/form/\".concat(username));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-semibold mb-4\",\n                    children: \"Welcome to the Homepage\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\usersData\\\\usersForm\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: username,\n                            onChange: function(e) {\n                                return setUsername(e.target.value);\n                            },\n                            placeholder: \"Enter your username\",\n                            className: \"w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\usersData\\\\usersForm\\\\pages\\\\index.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-blue-500 text-lg font-bold text-white px-4 py-2 rounded hover:bg-blue-600\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\usersData\\\\usersForm\\\\pages\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\usersData\\\\usersForm\\\\pages\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\usersData\\\\usersForm\\\\pages\\\\index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\usersData\\\\usersForm\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"vjMSaln17+XanlIl4Zuz18M109s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBQXdDO0FBQ1A7QUFDQztBQUVsQyxJQUFNRSxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBQzFCLElBQWdDQyxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDRyxRQUFRLEdBQWlCSCxHQUFZLEdBQTdCLEVBQUVJLFdBQVcsR0FBSUosR0FBWSxHQUFoQjtJQUM1QixJQUFnQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q0ssU0FBUyxHQUFnQkwsSUFBZSxHQUEvQixFQUFFTSxVQUFVLEdBQUlOLElBQWUsR0FBbkI7SUFFNUIsSUFBTU8sWUFBWSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQkgsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCSixNQUFNLENBQUNRLElBQUksQ0FBQyxRQUFPLENBQVcsT0FBVFAsUUFBUSxDQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJDQUEyQztrQkFDeEQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG1DQUFtQzs7OEJBQ2hELDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsNkJBQTZCOzhCQUFDLHlCQUF1Qjs7Ozs7eUJBQUs7OEJBQ3hFLDhEQUFDRSxNQUFJO29CQUFDQyxRQUFRLEVBQUVSLFlBQVk7b0JBQUVLLFNBQVMsRUFBQyxlQUFlOztzQ0FDckQsOERBQUNJLE9BQUs7NEJBQ0pDLElBQUksRUFBQyxNQUFNOzRCQUNYQyxLQUFLLEVBQUVmLFFBQVE7NEJBQ2ZnQixRQUFRLEVBQUUsU0FBQ1gsQ0FBQzt1Q0FBS0osV0FBVyxDQUFDSSxDQUFDLENBQUNZLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDOzZCQUFBOzRCQUM1Q0csV0FBVyxFQUFDLHFCQUFxQjs0QkFDakNULFNBQVMsRUFBQywrRkFBK0Y7Ozs7O2lDQUN6RztzQ0FDRiw4REFBQ1UsUUFBTTs0QkFDTEwsSUFBSSxFQUFDLFFBQVE7NEJBQ2JMLFNBQVMsRUFBQyw4RUFBOEU7c0NBQ3pGLFFBRUQ7Ozs7O2lDQUFTOzs7Ozs7eUJBQ0o7Ozs7OztpQkFDSDs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQWxDS1gsSUFBSTs7UUFDT0Ysa0RBQVM7OztBQURwQkUsS0FBQUEsSUFBSTtBQW9DViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICByb3V0ZXIucHVzaChgL2Zvcm0vJHt1c2VybmFtZX1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5XZWxjb21lIHRvIHRoZSBIb21lcGFnZTwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiBtYi00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});