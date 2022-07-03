/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!*****************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/common": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./en/common.json": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./en/home": [
		"./locales/en/home.json",
		"locales_en_home_json"
	],
	"./en/home.json": [
		"./locales/en/home.json",
		"locales_en_home_json"
	],
	"./en/sign-in": [
		"./locales/en/sign-in.json",
		"locales_en_sign-in_json"
	],
	"./en/sign-in.json": [
		"./locales/en/sign-in.json",
		"locales_en_sign-in_json"
	],
	"./fr/common": [
		"./locales/fr/common.json",
		"locales_fr_common_json"
	],
	"./fr/common.json": [
		"./locales/fr/common.json",
		"locales_fr_common_json"
	],
	"./fr/home": [
		"./locales/fr/home.json",
		"locales_fr_home_json"
	],
	"./fr/home.json": [
		"./locales/fr/home.json",
		"locales_fr_home_json"
	],
	"./fr/sign-in": [
		"./locales/fr/sign-in.json",
		"locales_fr_sign-in_json"
	],
	"./fr/sign-in.json": [
		"./locales/fr/sign-in.json",
		"locales_fr_sign-in_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.json\");\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ \"next-translate/appWithI18n\");\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_shared_utils_query_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/utils/query-client */ \"./src/shared/utils/query-client.ts\");\n/* harmony import */ var _app_shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/styles/globals.css */ \"./src/shared/styles/globals.css\");\n/* harmony import */ var _app_shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n\n// @ts-ignore\n\n// @ts-ignore\n\n// @ts-ignore\n\n\n\n\n\nfunction Application({ Component , pageProps  }) {\n    const { 0: stateQueryClient  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>_app_shared_utils_query_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {\n        client: stateQueryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__.ReactQueryDevtools, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\nconst __Page_Next_Translate__ = Application;\n// @ts-ignore\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(__Page_Next_Translate__, {\n    // @ts-ignore\n    ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,\n    // @ts-ignore\n    isLoader: true,\n    // @ts-ignore\n    skipInitialProps: true,\n    // @ts-ignore\n    loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default\n        )\n})); // @ts-ignore\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUk7QUFESixhQUFhO0FBQzJDO0FBQ3hELGFBQWE7QUFDNkM7QUFDMUQsYUFBYTtBQUUyQjtBQUVVO0FBQ1E7QUFDRDtBQUVqQjtBQUV4QyxTQUFTTyxXQUFXLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBZTtJQUNwRSxNQUFNLEVBaEJSLEdBZ0JTQyxnQkFBZ0IsTUFBSVAsK0NBQVEsQ0FBQyxJQUFNRyxzRUFBVztJQUFBLENBQUM7SUFFdEQscUJBQ0UsOERBQUNGLDREQUFtQjtRQUFDTyxNQUFNLEVBQUVELGdCQUFnQjs7MEJBQzNDLDhEQUFDRixTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzBCQUM1Qiw4REFBQ0osb0VBQWtCOzs7O29CQUFHOzs7Ozs7WUFDRixDQUN0QjtDQUNIO0FBRUQsTUFBTU8sdUJBQXVCLEdBQUdMLFdBQVc7QUFHM0MsYUFBYTtBQUNULGlFQUFlTixpRUFBYSxDQUFDVyx1QkFBdUIsRUFBRTtJQUMxRCxhQUFhO0lBQ1AsR0FBR1osc0RBQVk7SUFDckIsYUFBYTtJQUNQYSxRQUFRLEVBQUUsSUFBSTtJQUNwQixhQUFhO0lBQ1BDLGdCQUFnQixFQUFFLElBQUk7SUFDNUIsYUFBYTtJQUNQQyxjQUFjLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUssZ0VBQU8sR0FBOEIsRUFBRUQsQ0FBQyxDQUFDLENBQUMsRUFBRUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxPQUFPO1FBQUEsQ0FBQztDQUVoRyxDQUFDLEVBQUMsQ0FDUCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF2YXMtY3gtaXN0YW5idWwtbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBAdHMtaWdub3JlXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2FwcFdpdGhJMThuIGZyb20gJ25leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuJ1xuLy8gQHRzLWlnbm9yZVxuICAgIFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAncmVhY3QtcXVlcnkvZGV2dG9vbHMnO1xuaW1wb3J0IHF1ZXJ5Q2xpZW50IGZyb20gJ0BhcHAvc2hhcmVkL3V0aWxzL3F1ZXJ5LWNsaWVudCc7XG5cbmltcG9ydCAnQGFwcC9zaGFyZWQvc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gQXBwbGljYXRpb24oeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgW3N0YXRlUXVlcnlDbGllbnRdID0gdXNlU3RhdGUoKCkgPT4gcXVlcnlDbGllbnQpO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtzdGF0ZVF1ZXJ5Q2xpZW50fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgLz5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IF9fUGFnZV9OZXh0X1RyYW5zbGF0ZV9fID0gQXBwbGljYXRpb247XG5cblxuLy8gQHRzLWlnbm9yZVxuICAgIGV4cG9ydCBkZWZhdWx0IF9fYXBwV2l0aEkxOG4oX19QYWdlX05leHRfVHJhbnNsYXRlX18sIHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgIC4uLl9faTE4bkNvbmZpZyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgIGlzTG9hZGVyOiB0cnVlLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgc2tpcEluaXRpYWxQcm9wczogdHJ1ZSxcbi8vIEB0cy1pZ25vcmVcbiAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuLy8gQHRzLWlnbm9yZVxuICAgIH0pO1xuLy8gQHRzLWlnbm9yZVxuICAiXSwibmFtZXMiOlsiX19pMThuQ29uZmlnIiwiX19hcHBXaXRoSTE4biIsIlJlYWN0IiwidXNlU3RhdGUiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwicXVlcnlDbGllbnQiLCJBcHBsaWNhdGlvbiIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0YXRlUXVlcnlDbGllbnQiLCJjbGllbnQiLCJfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyIsImlzTG9hZGVyIiwic2tpcEluaXRpYWxQcm9wcyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJ0aGVuIiwibSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/shared/utils/query-client.ts":
/*!******************************************!*\
  !*** ./src/shared/utils/query-client.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({\n    defaultOptions: {\n        queries: {\n            refetchOnWindowFocus: true,\n            cacheTime: 1000 * 60 * 60 * 24\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmVkL3V0aWxzL3F1ZXJ5LWNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFFMUMsTUFBTUMsV0FBVyxHQUFHLElBQUlELG9EQUFXLENBQUM7SUFDbENFLGNBQWMsRUFBRTtRQUNkQyxPQUFPLEVBQUU7WUFDUEMsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQkMsU0FBUyxFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7U0FDL0I7S0FDRjtDQUNGLENBQUM7QUFFRixpRUFBZUosV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF2YXMtY3gtaXN0YW5idWwtbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL3NoYXJlZC91dGlscy9xdWVyeS1jbGllbnQudHM/ZjI3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuICBkZWZhdWx0T3B0aW9uczoge1xuICAgIHF1ZXJpZXM6IHtcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiB0cnVlLFxuICAgICAgY2FjaGVUaW1lOiAxMDAwICogNjAgKiA2MCAqIDI0LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlDbGllbnQ7XG4iXSwibmFtZXMiOlsiUXVlcnlDbGllbnQiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiY2FjaGVUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/shared/utils/query-client.ts\n");

/***/ }),

/***/ "./src/shared/styles/globals.css":
/*!***************************************!*\
  !*** ./src/shared/styles/globals.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "next-translate/appWithI18n":
/*!*********************************************!*\
  !*** external "next-translate/appWithI18n" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["en","fr"],"defaultLocale":"en","pages":{"*":["common"],"/":["home"],"/auth/signin":["sign-in"]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();