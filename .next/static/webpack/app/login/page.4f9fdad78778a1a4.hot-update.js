"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction LoginPage() {\n    _s();\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        email: \"\",\n        password: \"\"\n    });\n    const onLogin = async ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center\",\n        style: {\n            backgroundImage: \"url('/login.png')\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white bg-opacity-75 p-10 rounded\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2 justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"email\",\n                            type: \"text\",\n                            value: user.email,\n                            placeholder: \"Email\",\n                            className: \"min-w-20\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"password\",\n                            type: \"password\",\n                            value: user.password,\n                            placeholder: \"Password\",\n                            className: \"min-w-20\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onLogin,\n                    className: \"mt-2 justify-center\",\n                    children: \"LOGIN\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginPage, \"sqxPRUNiJDdj18p6SNj8khUilcM=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBCO0FBTVgsU0FBU0M7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCxxREFBYyxDQUFDO1FBQ25DSyxPQUFPO1FBQ1BDLFVBQVc7SUFDZjtJQUVBLE1BQU1DLFVBQVUsV0FFaEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFpRkMsT0FBTztZQUFDQyxpQkFBaUI7UUFBbUI7a0JBQ3pJLDRFQUFDSDtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2YsNEVBQUNHO2tDQUFHOzs7Ozs7Ozs7Ozs4QkFHSiw4REFBQ0o7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDSTs0QkFBTUMsU0FBUTtzQ0FBUTs7Ozs7O3NDQUN2Qiw4REFBQ0M7NEJBQU1DLElBQUc7NEJBQVFDLE1BQUs7NEJBQU9DLE9BQU9oQixLQUFLRyxLQUFLOzRCQUFFYyxhQUFZOzRCQUFRVixXQUFVOzs7Ozs7Ozs7Ozs7OEJBRW5GLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNJOzRCQUFNQyxTQUFRO3NDQUFXOzs7Ozs7c0NBQzFCLDhEQUFDQzs0QkFBTUMsSUFBRzs0QkFBV0MsTUFBSzs0QkFBV0MsT0FBT2hCLEtBQUtJLFFBQVE7NEJBQUVhLGFBQVk7NEJBQVdWLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFFaEcsOERBQUNXO29CQUFPQyxTQUFTZDtvQkFBU0UsV0FBVTs4QkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRFO0dBN0J3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeD9mYzYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQge2F4aW9zfSBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkIDogXCJcIlxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvbkxvZ2luID0gYXN5bmMoKSA9PntcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTIgYmctY292ZXIgYmctY2VudGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvbG9naW4ucG5nJylcIn19PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS03NSBwLTEwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyLmVtYWlsfSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgY2xhc3NOYW1lPVwibWluLXctMjBcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17dXNlci5wYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGNsYXNzTmFtZT1cIm1pbi13LTIwXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Mb2dpbn0gY2xhc3NOYW1lPVwibXQtMiBqdXN0aWZ5LWNlbnRlclwiPkxPR0lOPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTG9naW5QYWdlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJvbkxvZ2luIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoMSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});