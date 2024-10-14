/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/skewers.jpg */ \"./src/images/skewers.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/food.jpg */ \"./src/images/food.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/contact-us.jpg */ \"./src/images/contact-us.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\n    --white: #FFFFFF;\n    --beige: #F5F5DC;\n    --gray: #808080;\n    --black: #000000;\n    --teal: #008080;\n    --turquoise: #40E0D0;\n    --burnt-orange: #CC5500;\n    --dark-brown: #654321;\n    --blood-red: #8B0000;\n    --dark-grey: #2f4f4f;\n    --see-through: rgba(0, 0, 0, 0.5);\n}\n\n*{\n    box-sizing: border-box;\n}\n\nhtml{\n    background-color: var(--blood-red);\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n/* Header styling */\nheader {\n    background-color: var(--blood-red);\n    color: var(--beige);\n    text-align: center;\n    padding: 20px;\n}\n\n/* Main content styling */\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n}\n\n\n.header{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    text-transform: uppercase;\n}\n\n.nav-bar{\n    display: flex;\n    gap: 3vw;\n    align-items: center;\n    justify-content: flex-end;\n}\n\nbutton{\n cursor: pointer;\n font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\nnav > button{\n    border: none;\n    background-color: var(--beige);\n    color: var(--dark-brown);\n    text-transform: uppercase;\n    border-radius: 0.3rem;\n    width: 5rem;\n    height: 2rem;\n}\n\nmain{\n    color: var(--beige);\n    text-align: center;\n    font-weight: bold;\n    font-size: large;\n}\n\ndiv > button{\n    background-color: var(--teal);\n    color: var(--beige);\n    width: 5rem;\n    height: 2rem;\n    text-transform: uppercase;\n    border: none;\n    border-radius: 0.3rem;\n}\n\n.content{\n    width:  100vw;\n    height: 80vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.tab-content {\n    padding: 20px;\n    background-color: var(--see-through);\n    border-radius: 1rem;\n}\n\n.menu-section{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: calc(20vw + 2rem);\n    height: auto;\n}\n\n.menu-item{\n    width: calc(20vw + 2rem);\n    height: 50vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--beige);\n}\n\n/*Contact*/\n.contact-section {\n    margin-bottom: 20px;\n    width: 95vw;\n}\n\n.contact-section h3 {\n    color: --blood-red;\n    margin-bottom: 10px;\n}\n\n.contact-section p {\n    margin: 5px 0;\n}\n\n/* About page styling */\n.about {\n    width: 100%;\n    height: 100vh;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    color: white;\n}\n\n/* About Us Description */\n#about-us-description {\n    width: 40%;\n    margin: 2rem;\n    color: white; /* Text contrast with background */\n    background-color: var(--see-through); /* Optional: Background overlay for readability */\n    padding: 1rem;\n    border-radius: 10px;\n    font-size: 1.1rem;\n    line-height: 1.6;\n}\n\n.about-section {\n    margin-bottom: 20px;\n}\n\n.about-section h3 {\n    color: var(--beige);\n    margin-bottom: 10px;\n}\n\n.about-section p {\n    margin: 5px 0;\n}\n\n/* Main button styling */\n#main-btn {\n    width: 6rem;\n    height: 2rem;\n    text-align: center;\n    background-color: chocolate;\n    border: none;\n    color: #fff;\n    font-family: 'Trebuchet MS', sans-serif;\n    cursor: pointer;\n    border-radius: 5px; /* Soft button edges */\n    transition: background-color 0.3s ease; /* Smooth hover effect */\n}\n\n#main-btn:hover {\n    background-color: #8f440f; /* Darker shade for hover effect */\n}\n\nfooter{\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-right: 2rem;\n}\n\n/* Contact Us page Styling */\n.contact {\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode','Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100vw;\n    min-height: 100vh;\n}\n\n/* Contact details section */\n.contact-details {\n    font-size: 1.1rem;\n    background-color: var(--see-through);\n    color: var(--beige);\n    margin-right: 1rem;\n    margin-left: 1rem;\n    border-radius: 0.5rem;\n}\n\n/* Contact form styling */\n#contact-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 30rem;\n    max-width: 50rem;\n    background-color: var(--see-through);\n    padding: 2rem;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n#contact-form label {\n    align-self: flex-start;\n    margin: 10px 0 5px;\n}\n\n#contact-form input, #contact-form textarea {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 1rem;\n}\n\n#contact-form input:focus, #contact-form textarea:focus {\n    border-color: var(--blood-red);\n    outline: none;\n}\n\n/* Submit button styling */\n#submit-btn {\n    width: 100%;\n    padding: 10px;\n    background-color: chocolate;\n    color: white;\n    border: none;\n    cursor: pointer;\n    font-size: 1rem;\n    border-radius: 5px;\n    transition: background-color 0.3s ease;\n}\n\n#submit-btn:hover {\n    background-color: #d2691e;\n}\n\n/* Footer styling */\nfooter {\n    width: 100%;\n    background-color: #333;\n    color: white;\n    text-align: center;\n    padding: 10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\n    const parentEl = document.getElementById('content');\n    //check if parentEl contains class .content for rendering background img etc\n    if(!parentEl.classList.contains('content')){\n        parentEl.classList.add('content');\n    }\n\n    const content = document.createElement('div');\n    content.classList.add('tab-content');\n\n    // About Title\n    const aboutTitle = document.createElement('h2');\n    aboutTitle.textContent = \"About Lomi Restaurant\";\n    content.appendChild(aboutTitle);\n\n    // About Description\n    const aboutDescription = document.createElement('p');\n    aboutDescription.textContent = `\n        Welcome to Lomi Restaurant, where we blend the best of local and international cuisines \n        to offer a unique dining experience. Our menu celebrates diverse flavors, from traditional \n        dishes that evoke the heart of our culture to global favorites crafted with a local twist.\n        Whether you're in the mood for a comforting meal or looking to explore new culinary horizons, \n        Lomi Restaurant is the perfect place to satisfy your cravings. Join us for an unforgettable \n        dining experience where every bite tells a story of flavor and passion!\n    `;\n    content.appendChild(aboutDescription);\n\n    // Mission Section\n    const missionSection = document.createElement('section');\n    missionSection.classList.add('about-section');\n\n    const missionTitle = document.createElement('h3');\n    missionTitle.textContent = \"Our Mission\";\n    missionSection.appendChild(missionTitle);\n\n    const missionDetails = document.createElement('p');\n    missionDetails.textContent = `\n        At Lomi Restaurant, our mission is to create an exceptional dining experience that blends \n        local tradition with international innovation, bringing joy to our customers through every dish.\n    `;\n    missionSection.appendChild(missionDetails);\n\n    content.appendChild(missionSection);\n\n    // Vision Section\n    const visionSection = document.createElement('section');\n    visionSection.classList.add('about-section');\n\n    const visionTitle = document.createElement('h3');\n    visionTitle.textContent = \"Our Vision\";\n    visionSection.appendChild(visionTitle);\n\n    const visionDetails = document.createElement('p');\n    visionDetails.textContent = `\n        We envision Lomi Restaurant as a place where culture meets cuisine, a gathering spot for \n        people who appreciate good food and unforgettable dining experiences, both locally and globally.\n    `;\n    visionSection.appendChild(visionDetails);\n\n    content.appendChild(visionSection);\n\n    return content;\n}\n\n//# sourceURL=webpack://restaurant_page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    //Remove the class .content so you can render the contact-us image\n    const parentEl = document.getElementById('content');\n    parentEl.classList.remove('content');\n\n    const contactDetails = document.createElement('div');\n    const content = document.createElement('div');\n    content.classList.add('contact');\n\n    // Contact Title\n    const contactTitle = document.createElement('h2');\n    contactTitle.textContent = \"Contact Us\";\n    contactDetails.classList.add('contact-details');\n    contactDetails.appendChild(contactTitle);\n\n    // Address Section\n    const addressSection = document.createElement('section');\n    addressSection.classList.add('contact-section');\n\n    const addressTitle = document.createElement('h3');\n    addressTitle.textContent = \"Our Address\";\n    addressSection.appendChild(addressTitle);\n\n    const addressDetails = document.createElement('p');\n    addressDetails.textContent = \"123 Lomi St, Food City, Country\";\n    addressSection.appendChild(addressDetails);\n\n    contactDetails.appendChild(addressSection);\n\n    // Phone Section\n    const phoneSection = document.createElement('section');\n    phoneSection.classList.add('contact-section');\n\n    const phoneTitle = document.createElement('h3');\n    phoneTitle.textContent = \"Phone\";\n    phoneSection.appendChild(phoneTitle);\n\n    const phoneDetails = document.createElement('p');\n    phoneDetails.textContent = \"+123 456 7890\";\n    phoneSection.appendChild(phoneDetails);\n\n    contactDetails.appendChild(phoneSection);\n\n    // Email Section\n    const emailSection = document.createElement('section');\n    emailSection.classList.add('contact-section');\n\n    const emailTitle = document.createElement('h3');\n    emailTitle.textContent = \"Email\";\n    emailSection.appendChild(emailTitle);\n\n    const emailDetails = document.createElement('p');\n    emailDetails.textContent = \"contact@lomirestaurant.com\";\n    emailSection.appendChild(emailDetails);\n\n    contactDetails.appendChild(emailSection);\n\n    // Operating Hours Section\n    const hoursSection = document.createElement('section');\n    hoursSection.classList.add('contact-section');\n\n    const hoursTitle = document.createElement('h3');\n    hoursTitle.textContent = \"Operating Hours\";\n    hoursSection.appendChild(hoursTitle);\n\n    const hoursDetails = document.createElement('p');\n    hoursDetails.innerHTML = `\n        Monday - Friday: 8 AM - 10 PM<br>\n        Saturday - Sunday: 10 AM - 11 PM\n    `;\n    hoursSection.appendChild(hoursDetails);\n\n    contactDetails.appendChild(hoursSection);\n    content.appendChild(contactDetails);\n    return content;\n}\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/contents.js":
/*!*************************!*\
  !*** ./src/contents.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   button1: () => (/* binding */ button1),\n/* harmony export */   button2: () => (/* binding */ button2),\n/* harmony export */   contentItem1: () => (/* binding */ contentItem1),\n/* harmony export */   contentItem2: () => (/* binding */ contentItem2),\n/* harmony export */   paragraph1: () => (/* binding */ paragraph1),\n/* harmony export */   paragraph2: () => (/* binding */ paragraph2)\n/* harmony export */ });\nconst contentItem1 = document.createElement('div');\nconst contentItem2 = document.createElement('div');\nconst paragraph1 = document.createElement('p');\nconst paragraph2 = document.createElement('p');\nconst button1 = document.createElement('button');\nconst button2 = document.createElement('button');\n\ncontentItem1.classList.add('content-item');\ncontentItem2.classList.add('content-item');\n\n//# sourceURL=webpack://restaurant_page/./src/contents.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _contents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contents.js */ \"./src/contents.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* eslint-disable no-undef */\n\n\n\n\n\n\n// Function to load the default content\nfunction loadDefaultPage() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\"; // Clear existing content\n\n  // Add default content\n  _contents_js__WEBPACK_IMPORTED_MODULE_1__.paragraph1.innerHTML = \"Make a <span>reservation</span> now.\";\n  _contents_js__WEBPACK_IMPORTED_MODULE_1__.paragraph2.innerHTML = \"Look through our menu.\";\n  _contents_js__WEBPACK_IMPORTED_MODULE_1__.button1.innerHTML = \"Reserve\";\n  _contents_js__WEBPACK_IMPORTED_MODULE_1__.button2.innerHTML = \"Menu\";\n\n  _contents_js__WEBPACK_IMPORTED_MODULE_1__.contentItem1.appendChild(_contents_js__WEBPACK_IMPORTED_MODULE_1__.paragraph1);\n  _contents_js__WEBPACK_IMPORTED_MODULE_1__.contentItem1.appendChild(_contents_js__WEBPACK_IMPORTED_MODULE_1__.button1);\n  _contents_js__WEBPACK_IMPORTED_MODULE_1__.contentItem2.appendChild(_contents_js__WEBPACK_IMPORTED_MODULE_1__.paragraph2);\n  _contents_js__WEBPACK_IMPORTED_MODULE_1__.contentItem2.appendChild(_contents_js__WEBPACK_IMPORTED_MODULE_1__.button2);\n\n  // Append content items to content div\n  content.appendChild(_contents_js__WEBPACK_IMPORTED_MODULE_1__.contentItem1);\n  content.appendChild(_contents_js__WEBPACK_IMPORTED_MODULE_1__.contentItem2);\n}\n\nfunction clearContent() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n}\n\nfunction setActiveTab(tab) {\n  clearContent();\n  const content = document.getElementById(\"content\");\n  var currentTab;\n  if(tab == \"about\"){\n    currentTab = (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    content.appendChild(currentTab);\n  }else if(tab == \"contact\"){\n    currentTab = (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    content.appendChild(currentTab);\n  }else if(tab == \"menu\"){\n    currentTab = (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    content.appendChild(currentTab);\n  }else{\n    currentTab = loadDefaultPage();\n    content.appendChild(currentTab);\n  }\n}\n\n// Event listeners for tab switching\ndocument.querySelectorAll(\".nav-item\").forEach((button) => {\n  button.addEventListener(\"click\", () => {\n    const tab = button.value;\n    //setActiveTab(tab);\n    setActiveTab(tab);\n  });\n});\n\n// Load default tab on page load\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  setActiveTab(\"about\");\n});\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu(){\n    const content = document.createElement('div');\n    content.classList.add('tab-content');\n    content.classList.add('menu-section');\n\n    const menuTitle = document.createElement('h2');\n    menuTitle.textContent = \"Our Menu\";\n    content.appendChild(menuTitle);\n\n    // Dessert Section\n    const dessertSection = document.createElement('section');\n    dessertSection.classList.add('menu-section');\n\n    const dessertTitle = document.createElement('h3');\n    dessertTitle.textContent = \"DESSERTS\";\n    dessertSection.appendChild(dessertTitle);\n\n    const dessertItems = [\n        \"Ice Cream\",\n        \"Apple Pie\",\n        \"Chocolate Cake\"\n    ];\n\n    dessertItems.forEach((item) => {\n        const dessertItem = document.createElement('div');\n        dessertItem.classList.add('menu-item');\n        dessertItem.textContent = item;\n        dessertSection.appendChild(dessertItem);\n     });\n\n    content.appendChild(dessertSection);\n\n    // Beverage Section\n    const beverageSection = document.createElement('section');\n    beverageSection.classList.add('menu-section');\n\n    const beverageTitle = document.createElement('h3');\n    beverageTitle.textContent = 'BEVERAGES';\n    beverageSection.appendChild(beverageTitle);\n\n    const beverageItems = [\n        \"Coffee\",\n        \"Cocktails\",\n        \"Soda\"\n    ];\n\n    beverageItems.forEach((item) => {\n        const beverageItem = document.createElement('div');\n        beverageItem.classList.add('menu-item');\n        beverageItem.textContent = item;\n        beverageSection.appendChild(beverageItem);\n    });\n\n    content.appendChild(beverageSection);\n\n    // Main Courses Section\n    const  mainCoursesSection = document.createElement('div');\n    mainCoursesSection.classList.add('menu-section');\n\n    const mainCoursesTitle = document.createElement('h3');\n    mainCoursesTitle.textContent = 'MAIN COURSES';\n    mainCoursesSection.appendChild(mainCoursesTitle);\n\n    const mainCourseItems = [\n        \"Beef Steak\",\n        \"Grilled Chicken\",\n        \"Mutton Ribs\"\n    ];\n\n    mainCourseItems.forEach((item) => {\n        const mainCourseItem = document.createElement('div');\n        mainCourseItem.classList.add('menu-item');\n        mainCourseItem.textContent = item;\n        mainCoursesSection.appendChild(mainCourseItem);\n    });\n\n    content.appendChild(mainCoursesSection);\n\n    return content;\n}\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/images/contact-us.jpg":
/*!***********************************!*\
  !*** ./src/images/contact-us.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f37827ada9f2acc4a8f.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/contact-us.jpg?");

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"228e2421f3455022a7e3.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/food.jpg?");

/***/ }),

/***/ "./src/images/skewers.jpg":
/*!********************************!*\
  !*** ./src/images/skewers.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a64dc9193eafca148c1d.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/skewers.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;