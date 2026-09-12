/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./content/services/freezer-repair.ts":
/*!********************************************!*\
  !*** ./content/services/freezer-repair.ts ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./lib/services.ts":
/*!*************************!*\
  !*** ./lib/services.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getServiceBySlug: function() { return /* binding */ getServiceBySlug; },\n/* harmony export */   services: function() { return /* binding */ services; }\n/* harmony export */ });\n/* harmony import */ var _content_services_air_conditioner_repair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/content/services/air-conditioner-repair */ \"(app-pages-browser)/./content/services/air-conditioner-repair.ts\");\n/* harmony import */ var _content_services_coffee_machine_repair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/content/services/coffee-machine-repair */ \"(app-pages-browser)/./content/services/coffee-machine-repair.ts\");\n/* harmony import */ var _content_services_cooking_range_repair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/content/services/cooking-range-repair */ \"(app-pages-browser)/./content/services/cooking-range-repair.ts\");\n/* harmony import */ var _content_services_dishwasher_repair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/content/services/dishwasher-repair */ \"(app-pages-browser)/./content/services/dishwasher-repair.ts\");\n/* harmony import */ var _content_services_kitchen_hood_repair__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/content/services/kitchen-hood-repair */ \"(app-pages-browser)/./content/services/kitchen-hood-repair.ts\");\n/* harmony import */ var _content_services_oven_repair__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/content/services/oven-repair */ \"(app-pages-browser)/./content/services/oven-repair.ts\");\n/* harmony import */ var _content_services_refrigerator_repair__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/content/services/refrigerator-repair */ \"(app-pages-browser)/./content/services/refrigerator-repair.ts\");\n/* harmony import */ var _content_services_washer_dryer_repair__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/content/services/washer-dryer-repair */ \"(app-pages-browser)/./content/services/washer-dryer-repair.ts\");\n/* harmony import */ var _content_services_washing_machine_repair__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/content/services/washing-machine-repair */ \"(app-pages-browser)/./content/services/washing-machine-repair.ts\");\n/* harmony import */ var _content_services_microwave_repair__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/content/services/microwave-repair */ \"(app-pages-browser)/./content/services/microwave-repair.ts\");\n/* harmony import */ var _content_services_garbage_disposal_repair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/content/services/garbage-disposal-repair */ \"(app-pages-browser)/./content/services/garbage-disposal-repair.ts\");\n/* harmony import */ var _content_services_ice_maker_repair__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/content/services/ice-maker-repair */ \"(app-pages-browser)/./content/services/ice-maker-repair.ts\");\n/* harmony import */ var _content_services_freezer_repair__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/content/services/freezer-repair */ \"(app-pages-browser)/./content/services/freezer-repair.ts\");\n/* harmony import */ var _content_services_freezer_repair__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_content_services_freezer_repair__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst services = [\n    _content_services_air_conditioner_repair__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    _content_services_coffee_machine_repair__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    _content_services_cooking_range_repair__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    _content_services_dishwasher_repair__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    _content_services_kitchen_hood_repair__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    _content_services_oven_repair__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    _content_services_refrigerator_repair__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    _content_services_washer_dryer_repair__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    _content_services_washing_machine_repair__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    _content_services_microwave_repair__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    _content_services_garbage_disposal_repair__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    _content_services_ice_maker_repair__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    (_content_services_freezer_repair__WEBPACK_IMPORTED_MODULE_12___default())\n];\nfunction getServiceBySlug(slug) {\n    return services.find((s)=>s.slug === slug);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9zZXJ2aWNlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytFO0FBQ0Y7QUFDRjtBQUNOO0FBQ0k7QUFDaEI7QUFDZ0I7QUFDQTtBQUNNO0FBQ1o7QUFDYztBQUNkO0FBQ0o7QUFJeEQsTUFBTWEsV0FBc0I7SUFDakNiLGdGQUFzQkE7SUFDdEJDLCtFQUFxQkE7SUFDckJDLDhFQUFvQkE7SUFDcEJDLDJFQUFpQkE7SUFDakJDLDZFQUFtQkE7SUFDbkJDLHFFQUFXQTtJQUNYQyw2RUFBbUJBO0lBQ25CQyw2RUFBbUJBO0lBQ25CQyxnRkFBc0JBO0lBQ3RCQywwRUFBZ0JBO0lBQ2hCQyxrRkFBdUJBO0lBQ3ZCQywyRUFBZ0JBO0lBQ2hCQywwRUFBY0E7Q0FDZixDQUFDO0FBRUssU0FBU0UsaUJBQWlCQyxJQUFZO0lBQzNDLE9BQU9GLFNBQVNHLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFRixJQUFJLEtBQUtBO0FBQ3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9zZXJ2aWNlcy50cz83ZjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2VydmljZSB9IGZyb20gXCJAL2NvbnRlbnQvc2VydmljZXMvdHlwZXNcIjtcbmltcG9ydCBhaXJfY29uZGl0aW9uZXJfcmVwYWlyIGZyb20gXCJAL2NvbnRlbnQvc2VydmljZXMvYWlyLWNvbmRpdGlvbmVyLXJlcGFpclwiO1xuaW1wb3J0IGNvZmZlZV9tYWNoaW5lX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL2NvZmZlZS1tYWNoaW5lLXJlcGFpclwiO1xuaW1wb3J0IGNvb2tpbmdfcmFuZ2VfcmVwYWlyIGZyb20gXCJAL2NvbnRlbnQvc2VydmljZXMvY29va2luZy1yYW5nZS1yZXBhaXJcIjtcbmltcG9ydCBkaXNod2FzaGVyX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL2Rpc2h3YXNoZXItcmVwYWlyXCI7XG5pbXBvcnQga2l0Y2hlbl9ob29kX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL2tpdGNoZW4taG9vZC1yZXBhaXJcIjtcbmltcG9ydCBvdmVuX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL292ZW4tcmVwYWlyXCI7XG5pbXBvcnQgcmVmcmlnZXJhdG9yX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL3JlZnJpZ2VyYXRvci1yZXBhaXJcIjtcbmltcG9ydCB3YXNoZXJfZHJ5ZXJfcmVwYWlyIGZyb20gXCJAL2NvbnRlbnQvc2VydmljZXMvd2FzaGVyLWRyeWVyLXJlcGFpclwiO1xuaW1wb3J0IHdhc2hpbmdfbWFjaGluZV9yZXBhaXIgZnJvbSBcIkAvY29udGVudC9zZXJ2aWNlcy93YXNoaW5nLW1hY2hpbmUtcmVwYWlyXCI7XG5pbXBvcnQgbWljcm93YXZlX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL21pY3Jvd2F2ZS1yZXBhaXJcIjtcbmltcG9ydCBnYXJiYWdlX2Rpc3Bvc2FsX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL2dhcmJhZ2UtZGlzcG9zYWwtcmVwYWlyXCI7XG5pbXBvcnQgaWNlX21ha2VyX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL2ljZS1tYWtlci1yZXBhaXJcIjtcbmltcG9ydCBmcmVlemVyX3JlcGFpciBmcm9tIFwiQC9jb250ZW50L3NlcnZpY2VzL2ZyZWV6ZXItcmVwYWlyXCI7XG5cbmV4cG9ydCB0eXBlIHsgU2VydmljZSB9IGZyb20gXCJAL2NvbnRlbnQvc2VydmljZXMvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzOiBTZXJ2aWNlW10gPSBbXG4gIGFpcl9jb25kaXRpb25lcl9yZXBhaXIsXG4gIGNvZmZlZV9tYWNoaW5lX3JlcGFpcixcbiAgY29va2luZ19yYW5nZV9yZXBhaXIsXG4gIGRpc2h3YXNoZXJfcmVwYWlyLFxuICBraXRjaGVuX2hvb2RfcmVwYWlyLFxuICBvdmVuX3JlcGFpcixcbiAgcmVmcmlnZXJhdG9yX3JlcGFpcixcbiAgd2FzaGVyX2RyeWVyX3JlcGFpcixcbiAgd2FzaGluZ19tYWNoaW5lX3JlcGFpcixcbiAgbWljcm93YXZlX3JlcGFpcixcbiAgZ2FyYmFnZV9kaXNwb3NhbF9yZXBhaXIsXG4gIGljZV9tYWtlcl9yZXBhaXIsXG4gIGZyZWV6ZXJfcmVwYWlyLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZpY2VCeVNsdWcoc2x1Zzogc3RyaW5nKTogU2VydmljZSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBzZXJ2aWNlcy5maW5kKChzKSA9PiBzLnNsdWcgPT09IHNsdWcpO1xufVxuIl0sIm5hbWVzIjpbImFpcl9jb25kaXRpb25lcl9yZXBhaXIiLCJjb2ZmZWVfbWFjaGluZV9yZXBhaXIiLCJjb29raW5nX3JhbmdlX3JlcGFpciIsImRpc2h3YXNoZXJfcmVwYWlyIiwia2l0Y2hlbl9ob29kX3JlcGFpciIsIm92ZW5fcmVwYWlyIiwicmVmcmlnZXJhdG9yX3JlcGFpciIsIndhc2hlcl9kcnllcl9yZXBhaXIiLCJ3YXNoaW5nX21hY2hpbmVfcmVwYWlyIiwibWljcm93YXZlX3JlcGFpciIsImdhcmJhZ2VfZGlzcG9zYWxfcmVwYWlyIiwiaWNlX21ha2VyX3JlcGFpciIsImZyZWV6ZXJfcmVwYWlyIiwic2VydmljZXMiLCJnZXRTZXJ2aWNlQnlTbHVnIiwic2x1ZyIsImZpbmQiLCJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/services.ts\n"));

/***/ })

});