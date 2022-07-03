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
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./src/components/GoogleAnalytics/GoogleAnalytics.tsx":
/*!************************************************************!*\
  !*** ./src/components/GoogleAnalytics/GoogleAnalytics.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction GoogleAnalytics({ measurementId  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                strategy: \"afterInteractive\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\components\\\\GoogleAnalytics\\\\GoogleAnalytics.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"google-analytics\",\n                strategy: \"afterInteractive\",\n                children: `\n                    window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '${measurementId}');\n                `\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\components\\\\GoogleAnalytics\\\\GoogleAnalytics.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleAnalytics);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Hb29nbGVBbmFseXRpY3MvR29vZ2xlQW5hbHl0aWNzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWlDO0FBTWpDLFNBQVNDLGVBQWUsQ0FBQyxFQUFFQyxhQUFhLEdBQXdCLEVBQWU7SUFDN0UscUJBQ0U7OzBCQUNFLDhEQUFDRixvREFBTTtnQkFDTEcsUUFBUSxFQUFDLGtCQUFrQjtnQkFDM0JDLEdBQUcsRUFBRSxDQUFDLDRDQUE0QyxFQUFFRixhQUFhLENBQUMsQ0FBQzs7Ozs7b0JBQ25FOzBCQUVGLDhEQUFDRixvREFBTTtnQkFDTEssRUFBRSxFQUFDLGtCQUFrQjtnQkFDckJGLFFBQVEsRUFBQyxrQkFBa0I7MEJBRTFCLENBQUM7Ozs7b0NBSTBCLEVBQUVELGFBQWEsQ0FBQztnQkFDcEMsQ0FBQzs7Ozs7b0JBQ0Y7O29CQUNSLENBQ0g7Q0FDSDtBQUVELGlFQUFlRCxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYXZhcy1jeC1pc3RhbmJ1bC1uZXh0anMtc3RhcnRlci1raXQvLi9zcmMvY29tcG9uZW50cy9Hb29nbGVBbmFseXRpY3MvR29vZ2xlQW5hbHl0aWNzLnRzeD9hNjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZUFuYWx5dGljc1Byb3BzIHtcbiAgbWVhc3VyZW1lbnRJZDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBHb29nbGVBbmFseXRpY3MoeyBtZWFzdXJlbWVudElkIH06IEdvb2dsZUFuYWx5dGljc1Byb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2NyaXB0XG4gICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXG4gICAgICAgIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHttZWFzdXJlbWVudElkfWB9XG4gICAgICAvPlxuXG4gICAgICA8U2NyaXB0XG4gICAgICAgIGlkPVwiZ29vZ2xlLWFuYWx5dGljc1wiXG4gICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXG4gICAgICA+XG4gICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke21lYXN1cmVtZW50SWR9Jyk7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgIDwvU2NyaXB0PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBbmFseXRpY3M7XG4iXSwibmFtZXMiOlsiU2NyaXB0IiwiR29vZ2xlQW5hbHl0aWNzIiwibWVhc3VyZW1lbnRJZCIsInN0cmF0ZWd5Iiwic3JjIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GoogleAnalytics/GoogleAnalytics.tsx\n");

/***/ }),

/***/ "./src/components/GoogleAnalytics/index.ts":
/*!*************************************************!*\
  !*** ./src/components/GoogleAnalytics/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GoogleAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleAnalytics */ \"./src/components/GoogleAnalytics/GoogleAnalytics.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Hb29nbGVBbmFseXRpY3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0Q7QUFFaEQsaUVBQWVBLHdEQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYXZhcy1jeC1pc3RhbmJ1bC1uZXh0anMtc3RhcnRlci1raXQvLi9zcmMvY29tcG9uZW50cy9Hb29nbGVBbmFseXRpY3MvaW5kZXgudHM/MDZmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlQW5hbHl0aWNzIGZyb20gJy4vR29vZ2xlQW5hbHl0aWNzJztcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQW5hbHl0aWNzO1xuIl0sIm5hbWVzIjpbIkdvb2dsZUFuYWx5dGljcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GoogleAnalytics/index.ts\n");

/***/ }),

/***/ "./src/components/HelloWorld/helloWorld.tsx":
/*!**************************************************!*\
  !*** ./src/components/HelloWorld/helloWorld.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HelloWorld({ text  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(\"w-32 bg-blue-500 p-2 text-white\"),\n        children: text\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\components\\\\HelloWorld\\\\helloWorld.tsx\",\n        lineNumber: 9,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloWorld);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkL2hlbGxvV29ybGQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNGO0FBTXhCLFNBQVNFLFVBQVUsQ0FBQyxFQUFFQyxJQUFJLEdBQW1CLEVBQWU7SUFDMUQscUJBQU8sOERBQUNDLEdBQUM7UUFBQ0MsU0FBUyxFQUFFSiwyQ0FBSSxDQUFDLGlDQUFpQyxDQUFDO2tCQUFHRSxJQUFJOzs7OztZQUFLLENBQUM7Q0FDMUU7QUFFRCxpRUFBZUQsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF2YXMtY3gtaXN0YW5idWwtbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC9oZWxsb1dvcmxkLnRzeD9hM2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcblxuZXhwb3J0IGludGVyZmFjZSBIZWxsb1dvcmxkUHJvcHMge1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIEhlbGxvV29ybGQoeyB0ZXh0IH06IEhlbGxvV29ybGRQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIDxwIGNsYXNzTmFtZT17Y2xzeCgndy0zMiBiZy1ibHVlLTUwMCBwLTIgdGV4dC13aGl0ZScpfT57dGV4dH08L3A+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxsb1dvcmxkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2xzeCIsIkhlbGxvV29ybGQiLCJ0ZXh0IiwicCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/HelloWorld/helloWorld.tsx\n");

/***/ }),

/***/ "./src/components/HelloWorld/index.ts":
/*!********************************************!*\
  !*** ./src/components/HelloWorld/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helloWorld */ \"./src/components/HelloWorld/helloWorld.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_helloWorld__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWxsb1dvcmxkL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNDO0FBRXRDLGlFQUFlQSxtREFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF2YXMtY3gtaXN0YW5idWwtbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC9pbmRleC50cz9jODFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vaGVsbG9Xb3JsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvV29ybGQ7XG4iXSwibmFtZXMiOlsiSGVsbG9Xb3JsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/HelloWorld/index.ts\n");

/***/ }),

/***/ "./src/layouts/MainLayout/index.ts":
/*!*****************************************!*\
  !*** ./src/layouts/MainLayout/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./src/layouts/MainLayout/layout.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCO0FBRTlCLGlFQUFlQSwrQ0FBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF2YXMtY3gtaXN0YW5idWwtbmV4dGpzLXN0YXJ0ZXIta2l0Ly4vc3JjL2xheW91dHMvTWFpbkxheW91dC9pbmRleC50cz8yOTU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/MainLayout/index.ts\n");

/***/ }),

/***/ "./src/layouts/MainLayout/layout.tsx":
/*!*******************************************!*\
  !*** ./src/layouts/MainLayout/layout.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ \"next-translate/useTranslation\");\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Layout({ children , title , description , canonical  }) {\n    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"ui-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, \"charset\", false, {\n                        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, \"viewport\", false, {\n                        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: t(\"common:title\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {\n                title: title,\n                description: description,\n                canonical: canonical,\n                openGraph: {\n                    title,\n                    description,\n                    url: canonical,\n                    locale: t(\"common:locale\"),\n                    site_name: t(\"common:site_name\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-extrabold mt-10 text-center text-gray-500\",\n                        children: \"Havas CX Istanbul Next.js Google Analyticks and Git Api\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ui-container m-10 flex justify-center\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\layouts\\\\MainLayout\\\\layout.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0L2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNTO0FBQ3dCO0FBQzlCO0FBUzdCLFNBQVNJLE1BQU0sQ0FBQyxFQUNkQyxRQUFRLEdBQ1JDLEtBQUssR0FDTEMsV0FBVyxHQUNYQyxTQUFTLEdBQ0csRUFBZTtJQUMzQixNQUFNLEVBQUVDLENBQUMsR0FBRSxHQUFHUCxvRUFBYyxFQUFFO0lBRTlCLHFCQUNFLDhEQUFDUSxNQUFJO1FBQUNDLFNBQVMsRUFBQyxTQUFTOzswQkFDdkIsOERBQUNSLGtEQUFJOztrQ0FDSCw4REFBQ1MsTUFBSTt3QkFDSEMsT0FBTyxFQUFDLE9BQU87dUJBQ1gsU0FBUzs7Ozs0QkFDYjtrQ0FDRiw4REFBQ0QsTUFBSTt3QkFDSEUsSUFBSSxFQUFDLFVBQVU7d0JBQ2ZDLE9BQU8sRUFBQyxxQ0FBcUM7dUJBQ3pDLFVBQVU7Ozs7NEJBQ2Q7a0NBQ0YsOERBQUNULE9BQUs7a0NBQUVHLENBQUMsQ0FBQyxjQUFjLENBQUM7Ozs7OzRCQUFTOzs7Ozs7b0JBQzdCOzBCQUNQLDhEQUFDUiw2Q0FBTztnQkFDTkssS0FBSyxFQUFFQSxLQUFLO2dCQUNaQyxXQUFXLEVBQUVBLFdBQVc7Z0JBQ3hCQyxTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCUSxTQUFTLEVBQUU7b0JBQ1RWLEtBQUs7b0JBQ0xDLFdBQVc7b0JBQ1hVLEdBQUcsRUFBRVQsU0FBUztvQkFDZFUsTUFBTSxFQUFFVCxDQUFDLENBQUMsZUFBZSxDQUFDO29CQUMxQlUsU0FBUyxFQUFFVixDQUFDLENBQUMsa0JBQWtCLENBQUM7aUJBQ2pDOzs7OztvQkFDRDswQkFDRiw4REFBQ1csS0FBRzs7a0NBQ0YsOERBQUNDLElBQUU7d0JBQUNWLFNBQVMsRUFBQyxnREFBZ0Q7a0NBQUMseURBRS9EOzs7Ozs0QkFBSztrQ0FDTCw4REFBQ1MsS0FBRzt3QkFBQ1QsU0FBUyxFQUFDLHVDQUF1QztrQ0FBRU4sUUFBUTs7Ozs7NEJBQU87Ozs7OztvQkFDbkU7Ozs7OztZQUNELENBQ1A7Q0FDSDtBQUVELGlFQUFlRCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYXZhcy1jeC1pc3RhbmJ1bC1uZXh0anMtc3RhcnRlci1raXQvLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0L2xheW91dC50c3g/MDE4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50IHwgQXJyYXk8SlNYLkVsZW1lbnQ+O1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYW5vbmljYWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIExheW91dCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNhbm9uaWNhbCxcbn06IExheW91dFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJ1aS1tYWluXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBjaGFyU2V0PVwiVVRGLThcIlxuICAgICAgICAgIGtleT1cImNoYXJzZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXG4gICAgICAgIC8+XG4gICAgICAgIDx0aXRsZT57dCgnY29tbW9uOnRpdGxlJyl9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICBjYW5vbmljYWw9e2Nhbm9uaWNhbH1cbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgdXJsOiBjYW5vbmljYWwsXG4gICAgICAgICAgbG9jYWxlOiB0KCdjb21tb246bG9jYWxlJyksXG4gICAgICAgICAgc2l0ZV9uYW1lOiB0KCdjb21tb246c2l0ZV9uYW1lJyksXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZXh0cmFib2xkIG10LTEwIHRleHQtY2VudGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICBIYXZhcyBDWCBJc3RhbmJ1bCBOZXh0LmpzIEdvb2dsZSBBbmFseXRpY2tzIGFuZCBHaXQgQXBpXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktY29udGFpbmVyIG0tMTAgZmxleCBqdXN0aWZ5LWNlbnRlclwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmV4dFNlbyIsInVzZVRyYW5zbGF0aW9uIiwiSGVhZCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbCIsInQiLCJtYWluIiwiY2xhc3NOYW1lIiwibWV0YSIsImNoYXJTZXQiLCJuYW1lIiwiY29udGVudCIsIm9wZW5HcmFwaCIsInVybCIsImxvY2FsZSIsInNpdGVfbmFtZSIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/MainLayout/layout.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.json\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/loadNamespaces */ \"next-translate/loadNamespaces\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/layouts/MainLayout */ \"./src/layouts/MainLayout/index.ts\");\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/useTranslation */ \"next-translate/useTranslation\");\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_components_HelloWorld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/HelloWorld */ \"./src/components/HelloWorld/index.ts\");\n/* harmony import */ var _components_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/GoogleAnalytics */ \"./src/components/GoogleAnalytics/index.ts\");\n\n// @ts-ignore\n\n// @ts-ignore\n\n// @ts-ignore\n\n\n\n\n\nfunction Index() {\n    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()();\n    const title = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>t(\"home:title\")\n    , [\n        t\n    ]);\n    const description = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>t(\"home:description\")\n    , [\n        t\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: title,\n        description: description,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                measurementId: \"G-RHXKN40YH1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_HelloWorld__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                text: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mahmu\\\\havascx-nextjs-starter-kit\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n// @ts-ignore\nasync function getStaticProps(ctx) {\n    // @ts-ignore\n    // @ts-ignore\n    // @ts-ignore\n    return {\n        // @ts-ignore\n        // @ts-ignore\n        // @ts-ignore\n        props: {\n            // @ts-ignore\n            // @ts-ignore\n            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({\n                // @ts-ignore\n                ...ctx,\n                // @ts-ignore\n                pathname: \"/index\",\n                // @ts-ignore\n                loaderName: \"getStaticProps\",\n                // @ts-ignore\n                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,\n                // @ts-ignore\n                loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default\n                    )\n            })\n        }\n    };\n// @ts-ignore\n} // @ts-ignore\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUk7QUFESixhQUFhO0FBQzJDO0FBQ3hELGFBQWE7QUFDbUQ7QUFDaEUsYUFBYTtBQUUwQjtBQUNNO0FBQ2M7QUFDUDtBQUNRO0FBRTVELFNBQVNRLEtBQUssR0FBZ0I7SUFDNUIsTUFBTSxFQUFFQyxDQUFDLEdBQUUsR0FBR0osb0VBQWMsRUFBRTtJQUM5QixNQUFNSyxLQUFLLEdBQUdQLDhDQUFPLENBQUMsSUFBTU0sQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUFBLEVBQUU7UUFBQ0EsQ0FBQztLQUFDLENBQUM7SUFDakQsTUFBTUUsV0FBVyxHQUFHUiw4Q0FBTyxDQUFDLElBQU1NLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUFBLEVBQUU7UUFBQ0EsQ0FBQztLQUFDLENBQUM7SUFFN0QscUJBQ0UsOERBQUNMLCtEQUFNO1FBQ0xNLEtBQUssRUFBRUEsS0FBSztRQUNaQyxXQUFXLEVBQUVBLFdBQVc7OzBCQUV4Qiw4REFBQ0osbUVBQWU7Z0JBQUNLLGFBQWEsRUFBQyxjQUFjOzs7OztvQkFBRzswQkFDaEQsOERBQUNOLGtFQUFVO2dCQUFDTyxJQUFJLEVBQUVGLFdBQVc7Ozs7O29CQUFJOzs7Ozs7WUFDMUIsQ0FDVDtDQUNIO0FBRUQsaUVBQWVILEtBQUssRUFBQztBQUdyQixhQUFhO0FBQ0YsZUFBZU0sY0FBYyxDQUFDQyxHQUFHLEVBQUU7SUFDOUMsYUFBYTtJQUViLGFBQWE7SUFFYixhQUFhO0lBQ0wsT0FBTztRQUNmLGFBQWE7UUFFYixhQUFhO1FBRWIsYUFBYTtRQUNIQyxLQUFLLEVBQUU7WUFDakIsYUFBYTtZQUViLGFBQWE7WUFDRCxHQUFJLE1BQU1mLG9FQUFnQixDQUFDO2dCQUN2QyxhQUFhO2dCQUNDLEdBQUdjLEdBQUc7Z0JBQ3BCLGFBQWE7Z0JBQ0NFLFFBQVEsRUFBRSxRQUFRO2dCQUNoQyxhQUFhO2dCQUNDQyxVQUFVLEVBQUUsZ0JBQWdCO2dCQUMxQyxhQUFhO2dCQUNDLEdBQUdsQixzREFBWTtnQkFDN0IsYUFBYTtnQkFDQ21CLGNBQWMsRUFBRSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsR0FBSyxnRUFBTyxHQUE4QixFQUFFRCxDQUFDLENBQUMsQ0FBQyxFQUFFQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsQ0FBQUEsQ0FBQyxHQUFJQSxDQUFDLENBQUNDLE9BQU87b0JBQUEsQ0FBQzthQUVoRyxDQUFDO1NBRUg7S0FFRjtBQUNULGFBQWE7Q0FDUixDQUNMLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYXZhcy1jeC1pc3RhbmJ1bC1uZXh0anMtc3RhcnRlci1raXQvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBAdHMtaWdub3JlXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuLy8gQHRzLWlnbm9yZVxuICAgIFxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0BhcHAvbGF5b3V0cy9NYWluTGF5b3V0JztcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICdAYXBwL2NvbXBvbmVudHMvSGVsbG9Xb3JsZCc7XG5pbXBvcnQgR29vZ2xlQW5hbHl0aWNzIGZyb20gJy4uL2NvbXBvbmVudHMvR29vZ2xlQW5hbHl0aWNzJztcblxuZnVuY3Rpb24gSW5kZXgoKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHRpdGxlID0gdXNlTWVtbygoKSA9PiB0KCdob21lOnRpdGxlJyksIFt0XSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdXNlTWVtbygoKSA9PiB0KCdob21lOmRlc2NyaXB0aW9uJyksIFt0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgPlxuICAgICAgPEdvb2dsZUFuYWx5dGljcyBtZWFzdXJlbWVudElkPVwiRy1SSFhLTjQwWUgxXCIgLz5cbiAgICAgIDxIZWxsb1dvcmxkIHRleHQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG4vLyBAdHMtaWdub3JlXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgcHJvcHM6IHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAuLi5jdHgsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2luZGV4Jyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFN0YXRpY1Byb3BzJyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLi4uX19pMThuQ29uZmlnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIH0pKVxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgfVxuLy8gQHRzLWlnbm9yZVxuICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgIl0sIm5hbWVzIjpbIl9faTE4bkNvbmZpZyIsIl9fbG9hZE5hbWVzcGFjZXMiLCJSZWFjdCIsInVzZU1lbW8iLCJMYXlvdXQiLCJ1c2VUcmFuc2xhdGlvbiIsIkhlbGxvV29ybGQiLCJHb29nbGVBbmFseXRpY3MiLCJJbmRleCIsInQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWVhc3VyZW1lbnRJZCIsInRleHQiLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsInByb3BzIiwicGF0aG5hbWUiLCJsb2FkZXJOYW1lIiwibG9hZExvY2FsZUZyb20iLCJsIiwibiIsInRoZW4iLCJtIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ "next-translate/useTranslation":
/*!************************************************!*\
  !*** external "next-translate/useTranslation" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();