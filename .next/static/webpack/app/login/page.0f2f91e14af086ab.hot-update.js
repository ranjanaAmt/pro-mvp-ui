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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction LoginPage() {\n    _s();\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        email: \"\",\n        password: \"\"\n    });\n    const onLogin = async ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center\",\n        style: {\n            backgroundImage: \"url('/login.png')\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white bg-opacity-75 p-10 rounded\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"email\",\n                            type: \"text\",\n                            value: user.email,\n                            placeholder: \"Email\",\n                            className: \"min-w-20\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"password\",\n                            type: \"password\",\n                            value: user.password,\n                            placeholder: \"Password\",\n                            className: \"min-w-20\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: true,\n                    onClick: onLogin,\n                    className: \"mt-2\",\n                    children: \"LOGIN\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\NextJs\\\\login-page\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginPage, \"sqxPRUNiJDdj18p6SNj8khUilcM=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBCO0FBTVgsU0FBU0M7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCxxREFBYyxDQUFDO1FBQ25DSyxPQUFPO1FBQ1BDLFVBQVc7SUFDZjtJQUVBLE1BQU1DLFVBQVUsV0FFaEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFpRkMsT0FBTztZQUFDQyxpQkFBaUI7UUFBbUI7a0JBQ3pJLDRFQUFDSDtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ0c7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNLOzRCQUFNQyxTQUFRO3NDQUFROzs7Ozs7c0NBQ3ZCLDhEQUFDQzs0QkFBTUMsSUFBRzs0QkFBUUMsTUFBSzs0QkFBT0MsT0FBT2pCLEtBQUtHLEtBQUs7NEJBQUVlLGFBQVk7NEJBQVFYLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFFbkYsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0s7NEJBQU1DLFNBQVE7c0NBQVc7Ozs7OztzQ0FDMUIsOERBQUNDOzRCQUFNQyxJQUFHOzRCQUFXQyxNQUFLOzRCQUFXQyxPQUFPakIsS0FBS0ksUUFBUTs0QkFBRWMsYUFBWTs0QkFBV1gsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUVoRyw4REFBQ1k7b0JBQU9aLFNBQVM7b0JBQUNhLFNBQVNmO29CQUFTRSxXQUFVOzhCQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRTtHQTNCd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHtheGlvc30gZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZCA6IFwiXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25Mb2dpbiA9IGFzeW5jKCkgPT57XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBweS0yIGJnLWNvdmVyIGJnLWNlbnRlclwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgnL2xvZ2luLnBuZycpXCJ9fT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJnLW9wYWNpdHktNzUgcC0xMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyLmVtYWlsfSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgY2xhc3NOYW1lPVwibWluLXctMjBcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17dXNlci5wYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGNsYXNzTmFtZT1cIm1pbi13LTIwXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lIG9uQ2xpY2s9e29uTG9naW59IGNsYXNzTmFtZT1cIm10LTJcIj5MT0dJTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxvZ2luUGFnZSIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwib25Mb2dpbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDEiLCJociIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});