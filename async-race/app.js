/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html{
  font-size: 10px;
}

body {
  margin: 0;
  height: 100vh;
  background: #000;
  font-family: "Exo 2", Lato, "Helvetica Neue", sans-serif;
}

.garage-button,
.winners-button {
  display: inline-block;
  padding: 4px 25px;
  font-size: 2.4rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  transition: all 0.3s;
}

.garage-button:hover,
.winners-button:hover {
  background-color: #3e8e41;
}

.garage-button.active,
.winners-button.active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.button-active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.buttonCreate,
.buttonUpdate,
.race-button,
.reset-button,
.generate-button,
.buttonPrev,
.buttonNext {
  background-color: #13aa52;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1.6rem;  
  padding: 0.5rem;
  text-align: center;
}

.buttonCreate:hover,
.buttonUpdate:hover,
.race-button:hover,
.reset-button:hover,
.generate-button:hover,
.button:hover,
.buttonPrev:hover,
.buttonNext:hover {
transform: translateY(-2px);
}

.button {
  border-radius: 4px;
  border: solid 1px #ffffff;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;  
  padding: 0.2rem;
  text-align: center;
  transition: all 0.5s;
  margin: 5px;
  opacity: .7;
}

.button:hover {
  opacity: 1;
}

.start,
.stop {
  color: #00ff00;
  border-color: #00ff00;
}

.button.disable {
  color: #000;
  border-color: #000;
  background: #666;
}

.button.disable:hover {
  cursor: not-allowed;
}

.controls {
  display: flex;
  width: 40rem;
  margin-top: 1.2rem;
  height: 10rem;
  flex-direction: column;
  justify-content: space-evenly;
}

.header {
  display: flex;
  width: 40rem;
  padding-top: 0.5rem;
  justify-content: space-around;
}

.create-line,
.update-line {
  display: flex;
  justify-content: space-evenly;
}

.common-line {
  display: flex;
  justify-content: space-around;
}

.table {
  color: #fff;
  margin-top: 2rem;
}

thead {
  background: blue;
  font-size: 1.6rem;
}

.cars-number,
.pages-number,
.winners-quantity,
.pages-quantity {
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
}

.pages-number,
.pages-quantity {
  color: burlywood;
}

.line {
  border-bottom: dashed #fff;
  padding-top: 1rem;
}

.car-image svg {  
  width: calc(18rem - 8vw);
  height: auto;

}

.car-tittle {
  font-size: 1.6rem;
  color: burlywood;
}

.car-second-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flag {
  position: absolute;
  right: calc(18.5rem - 8vw);
}

.start-container {
  display: flex;
  align-items: center;
}

.selected {
  background: #1a0f0f;
}

.page-controls {
  margin-top: 1rem;
}

.prev,
.next {
  width: 10rem;
  margin-left: calc(15rem - 8vw);
}

.prev.disabled,
.next.disabled {
  background: #545454;
  cursor: not-allowed;
}

.modal {
  position: fixed;
  left: 22vw;
  top: 45vh;
  font-size: 4rem;
  color: white;
  text-shadow: #FC0 1px 0 10px;
  animation-name: action;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes action {
  from {
    transform: scale(1);
  }

  25% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
.tbody {
  font-size: 1.5rem;
  text-align: center;
}
.td-car svg {
  width: 10rem;
  height: 4rem;
}

th,
td {
  border-style: groove;
}
th {
  padding: 3px;
}

.winners-controls-page {
  padding-top: 1rem;
}

.button-wins,
.button-time {
  cursor: pointer;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,gBAAgB;EAChB,wDAAwD;AAC1D;;AAEA;;EAEE,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;EACzB,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;;;;;;;EAOE,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;;;;;;;;AAQA,2BAA2B;AAC3B;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;;EAEE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;;EAEE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;;;EAIE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,YAAY;;AAEd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;;EAEE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,SAAS;EACT,eAAe;EACf,YAAY;EACZ,4BAA4B;EAC5B,sBAAsB;EACtB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,mBAAmB;EACrB;AACF;AACA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,oBAAoB;AACtB;AACA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,eAAe;AACjB","sourcesContent":["html{\n  font-size: 10px;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  background: #000;\n  font-family: \"Exo 2\", Lato, \"Helvetica Neue\", sans-serif;\n}\n\n.garage-button,\n.winners-button {\n  display: inline-block;\n  padding: 4px 25px;\n  font-size: 2.4rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n  transition: all 0.3s;\n}\n\n.garage-button:hover,\n.winners-button:hover {\n  background-color: #3e8e41;\n}\n\n.garage-button.active,\n.winners-button.active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n\n.button-active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n\n.buttonCreate,\n.buttonUpdate,\n.race-button,\n.reset-button,\n.generate-button,\n.buttonPrev,\n.buttonNext {\n  background-color: #13aa52;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.6rem;  \n  padding: 0.5rem;\n  text-align: center;\n}\n\n.buttonCreate:hover,\n.buttonUpdate:hover,\n.race-button:hover,\n.reset-button:hover,\n.generate-button:hover,\n.button:hover,\n.buttonPrev:hover,\n.buttonNext:hover {\ntransform: translateY(-2px);\n}\n\n.button {\n  border-radius: 4px;\n  border: solid 1px #ffffff;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.2rem;  \n  padding: 0.2rem;\n  text-align: center;\n  transition: all 0.5s;\n  margin: 5px;\n  opacity: .7;\n}\n\n.button:hover {\n  opacity: 1;\n}\n\n.start,\n.stop {\n  color: #00ff00;\n  border-color: #00ff00;\n}\n\n.button.disable {\n  color: #000;\n  border-color: #000;\n  background: #666;\n}\n\n.button.disable:hover {\n  cursor: not-allowed;\n}\n\n.controls {\n  display: flex;\n  width: 40rem;\n  margin-top: 1.2rem;\n  height: 10rem;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.header {\n  display: flex;\n  width: 40rem;\n  padding-top: 0.5rem;\n  justify-content: space-around;\n}\n\n.create-line,\n.update-line {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.common-line {\n  display: flex;\n  justify-content: space-around;\n}\n\n.table {\n  color: #fff;\n  margin-top: 2rem;\n}\n\nthead {\n  background: blue;\n  font-size: 1.6rem;\n}\n\n.cars-number,\n.pages-number,\n.winners-quantity,\n.pages-quantity {\n  color: #fff;\n  font-size: 1.6rem;\n  font-weight: bold;\n}\n\n.pages-number,\n.pages-quantity {\n  color: burlywood;\n}\n\n.line {\n  border-bottom: dashed #fff;\n  padding-top: 1rem;\n}\n\n.car-image svg {  \n  width: calc(18rem - 8vw);\n  height: auto;\n\n}\n\n.car-tittle {\n  font-size: 1.6rem;\n  color: burlywood;\n}\n\n.car-second-line {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.flag {\n  position: absolute;\n  right: calc(18.5rem - 8vw);\n}\n\n.start-container {\n  display: flex;\n  align-items: center;\n}\n\n.selected {\n  background: #1a0f0f;\n}\n\n.page-controls {\n  margin-top: 1rem;\n}\n\n.prev,\n.next {\n  width: 10rem;\n  margin-left: calc(15rem - 8vw);\n}\n\n.prev.disabled,\n.next.disabled {\n  background: #545454;\n  cursor: not-allowed;\n}\n\n.modal {\n  position: fixed;\n  left: 22vw;\n  top: 45vh;\n  font-size: 4rem;\n  color: white;\n  text-shadow: #FC0 1px 0 10px;\n  animation-name: action;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes action {\n  from {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(1.1);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n\n  75% {\n    transform: scale(1.1);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n.tbody {\n  font-size: 1.5rem;\n  text-align: center;\n}\n.td-car svg {\n  width: 10rem;\n  height: 4rem;\n}\n\nth,\ntd {\n  border-style: groove;\n}\nth {\n  padding: 3px;\n}\n\n.winners-controls-page {\n  padding-top: 1rem;\n}\n\n.button-wins,\n.button-time {\n  cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/app.ts":
/*!*******************************!*\
  !*** ./src/components/app.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _header_header_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header-view */ "./src/components/header/header-view.ts");
/* harmony import */ var _main_main_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main-view */ "./src/components/main/main-view.ts");


class App {
    header = new _header_header_view__WEBPACK_IMPORTED_MODULE_0__["default"]();
    main = new _main_main_view__WEBPACK_IMPORTED_MODULE_1__["default"]();
    constructor() {
        this.createView();
    }
    createView() {
        document.body.append(this.header.create(this.main), this.main.create());
    }
    start() { }
}


/***/ }),

/***/ "./src/components/header/header-view.ts":
/*!**********************************************!*\
  !*** ./src/components/header/header-view.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _main_garage_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/garage-view */ "./src/components/main/garage-view.ts");
/* harmony import */ var _main_winners_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/winners-view */ "./src/components/main/winners-view.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/components/utils/utils.ts");



class Header {
    NameButtons = {
        GARAGE: 'To Garage',
        WINNERS: 'To Winners',
    };
    classButton = {
        GARAGE: 'garage-button',
        WINNERS: 'winners-button',
    };
    garageButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('a', [this.classButton.GARAGE], this.NameButtons.GARAGE);
    winnersButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('a', [this.classButton.WINNERS], this.NameButtons.WINNERS);
    header = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('header', ['header']);
    create(mainComponent) {
        this.garageButton.classList.add('active');
        this.header.append(this.garageButton, this.winnersButton);
        const garageView = new _main_garage_view__WEBPACK_IMPORTED_MODULE_0__["default"]().create();
        this.garageButton.addEventListener('click', () => {
            this.winnersButton.classList.remove('active');
            this.garageButton.classList.remove('active');
            this.garageButton.classList.add('active');
            mainComponent.setContent(garageView);
        });
        mainComponent.setContent(garageView);
        const winnersView = _main_winners_view__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().create();
        this.winnersButton.addEventListener('click', () => {
            this.garageButton.classList.remove('active');
            this.winnersButton.classList.remove('active');
            this.winnersButton.classList.add('active');
            mainComponent.setContent(winnersView);
        });
        return this.header;
    }
}


/***/ }),

/***/ "./src/components/main/car-view/car-buttons.ts":
/*!*****************************************************!*\
  !*** ./src/components/main/car-view/car-buttons.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarButtons)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/components/utils/utils.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./src/components/utils/api.ts");
/* harmony import */ var _car_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-line */ "./src/components/main/car-view/car-line.ts");
/* harmony import */ var _winners_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../winners-view */ "./src/components/main/winners-view.ts");




class CarButtons {
    FIRST_PAGE = 1;
    create() { }
    getSelectButton(id) {
        const button = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['select', 'button', `${id}`], 'Select');
        button.addEventListener('click', async () => {
            const updateText = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelectorInput)('.updateText');
            updateText.removeAttribute('disabled');
            const updateButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelectorInput)('.buttonUpdate');
            updateButton.removeAttribute('disabled');
            updateButton.setAttribute('id', id.toString());
            document.querySelectorAll('.line').forEach((line) => line.classList.remove('selected'));
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findClosest)(button, '.line').classList.add('selected');
            const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getCarApi)(id);
            updateText.value = data.name;
            const updateColor = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelectorInput)('.updateColor');
            updateColor.value = data.color;
        });
        return button;
    }
    getRemoveButton(id) {
        const button = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['remove', 'button', `${id}`], 'Remove');
        button.addEventListener('click', () => {
            (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.removeCarApi)(id);
            (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.removeCarFromWinnersApi)(id);
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findClosest)(button, '.line').remove();
            this.updateGarageQuantity();
            const carsOnPageAfterRemove = document.querySelectorAll('.line').length;
            if (carsOnPageAfterRemove < 7) {
                this.updateActivePage();
            }
            this.updatePageQuantity();
            _winners_view__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().setWinnersDescription();
            _winners_view__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().updateControlButtons();
        });
        return button;
    }
    getStartButton(id) {
        const startButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['start', 'button'], 'A');
        startButton.setAttribute('id', id.toString());
        return startButton;
    }
    getStopButton(id) {
        const stopButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['stop', 'button', 'disable'], 'B');
        stopButton.setAttribute('id', id.toString());
        return stopButton;
    }
    async updateGarageQuantity() {
        const quantity = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getNumberCarsApi)();
        const carsNumber = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)('.cars-number');
        carsNumber.innerHTML = `Garage(${quantity})`;
        carsNumber.setAttribute('id', `${quantity}`);
    }
    async updateActivePage() {
        const LAST_CAR_ON_PAGE = 6;
        const activePage = Number((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)('.pages-number').getAttribute('id'));
        const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getCarsOnPageApi)(activePage);
        if (data.length > LAST_CAR_ON_PAGE) {
            const name = data[LAST_CAR_ON_PAGE].name;
            const color = data[LAST_CAR_ON_PAGE].color;
            const id = data[LAST_CAR_ON_PAGE].id;
            const lastLine = new _car_line__WEBPACK_IMPORTED_MODULE_2__["default"](id).create(name, color, id);
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)('.garage').append(lastLine);
        }
    }
    async updatePageQuantity() {
        const CARS_ON_PAGE = 7;
        const carsQuantity = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getNumberCarsApi)();
        const pagesNumberElement = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)('.pages-number');
        let activePage = Number(pagesNumberElement.getAttribute('id'));
        const carsOnPageAfterRemove = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getCarsOnPageApi)(activePage);
        if (carsOnPageAfterRemove.length === 0) {
            if (activePage > 1) {
                activePage -= 1;
                pagesNumberElement.setAttribute('id', activePage.toString());
                const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getCarsOnPageApi)(activePage);
                data.forEach((element) => {
                    const carLine = new _car_line__WEBPACK_IMPORTED_MODULE_2__["default"](element.id).create(element.name, element.color, element.id);
                    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)('.garage').append(carLine);
                });
            }
        }
        const quantityPages = Math.ceil(Number(carsQuantity) / CARS_ON_PAGE);
        pagesNumberElement.innerHTML = `Pages ${activePage}/${quantityPages}`;
        if (activePage === quantityPages) {
            const buttonNext = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)('.buttonNext');
            buttonNext.classList.add('disabled');
        }
        if (activePage === this.FIRST_PAGE) {
            const buttonPrev = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)('.buttonPrev');
            buttonPrev.classList.add('disabled');
        }
    }
}


/***/ }),

/***/ "./src/components/main/car-view/car-line.ts":
/*!**************************************************!*\
  !*** ./src/components/main/car-view/car-line.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarLine)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/api */ "./src/components/utils/api.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/components/utils/utils.ts");
/* harmony import */ var _car_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-buttons */ "./src/components/main/car-view/car-buttons.ts");
/* harmony import */ var _image_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-items */ "./src/components/main/car-view/image-items.ts");




class CarLine {
    requestID;
    buttons;
    startButton;
    stopButton;
    constructor(id) {
        this.buttons = new _car_buttons__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.startButton = this.buttons.getStartButton(id);
        this.stopButton = this.buttons.getStopButton(id);
        this.requestID = 0;
    }
    create(name, color, id) {
        const carFirstLine = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['car-first-line']);
        carFirstLine.append(this.buttons.getSelectButton(id), this.buttons.getRemoveButton(id));
        carFirstLine.append((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', ['car-tittle', `tittle-id-${id}`], name));
        const carSecondLine = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['car-second-line']);
        const startPosition = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['start-container']);
        const imageCar = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', [`car-image`, `image-id-${id}`]);
        imageCar.setAttribute('id', `${id}`);
        imageCar.innerHTML = _image_items__WEBPACK_IMPORTED_MODULE_3__["default"].getCar(color);
        startPosition.append(this.startButton, this.stopButton, imageCar);
        carSecondLine.append(startPosition);
        const imageFlag = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['flag']);
        imageFlag.innerHTML = _image_items__WEBPACK_IMPORTED_MODULE_3__["default"].getFlag();
        carSecondLine.append(imageFlag);
        const carLine = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['line', id.toString()]);
        carLine.append(carFirstLine, carSecondLine);
        this.startButton.addEventListener('click', () => {
            this.carStarted(id);
        });
        this.stopButton.addEventListener('click', () => {
            this.carStopped(id);
        });
        return carLine;
    }
    async carStarted(id) {
        this.startButton.classList.add('disable');
        this.stopButton.classList.remove('disable');
        const dataStarted = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.startEngineApi)(id);
        const timeForAnimation = dataStarted.distance / dataStarted.velocity;
        const carForAnimation = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.findSelector)(`.image-id-${id}`);
        const distance = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getDistance)();
        const startTime = new Date().getTime();
        const growInSec = (distance * 1000) / timeForAnimation;
        const animation = () => {
            const currentTime = new Date().getTime();
            const step = ((currentTime - startTime) / 1000) * growInSec;
            if (step < distance) {
                carForAnimation.style.transform = `translateX(${step}px)`;
                this.requestID = requestAnimationFrame(animation);
            }
            return this.requestID;
        };
        this.requestID = animation();
        try {
            const dataDrive = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.switchEngineToDrive)(id);
            if (dataDrive.status === 500) {
                cancelAnimationFrame(this.requestID);
            }
        }
        catch { }
    }
    async carStopped(id) {
        this.startButton.classList.remove('disable');
        this.stopButton.classList.add('disable');
        const carForAnimation = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.findSelector)(`.image-id-${id}`);
        cancelAnimationFrame(this.requestID);
        carForAnimation.style.transform = `translateX(0px)`;
        await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.stopEngine)(id);
    }
}


/***/ }),

/***/ "./src/components/main/car-view/image-items.ts":
/*!*****************************************************!*\
  !*** ./src/components/main/car-view/image-items.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageItems)
/* harmony export */ });
class ImageItems {
    static getCar(color = '#ffffff') {
        return `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
     "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="1280.000000pt" height="640.000000pt" viewBox="0 0 1280.000000 640.000000"
     preserveAspectRatio="xMidYMid meet">
    <metadata>
    Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>
    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
    fill=${color} stroke="none">
    <path d="M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6
    -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78 -43 -193 -91
    -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340
    -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3
    -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418
    0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64
    -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622
    756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302
    140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263
    l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22
    259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239
    -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1
    -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45
    525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50
    680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0
    -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332
    -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341
    10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66
    -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36
    -485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83
    54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12
    -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134
    274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11
    -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z"/>
    <path d="M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262
    -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493
    -551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23
    86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50
    -354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220
    1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360
    0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z"/>
    <path d="M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120
    -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z"/>
    <path d="M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28
    22 c-34 28 -138 70 -193 79 l-40 7 0 -162z"/>
    <path d="M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0
    165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z"/>
    <path d="M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0
    165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z"/>
    <path d="M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29
    58 -13 0 -29 -8 -34 -18z"/>
    <path d="M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57
    9 153 -71 153 -27 0 -44 -8 -66 -29z"/>
    <path d="M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16
    -54 -2z"/>
    <path d="M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67
    -62 36z"/>
    <path d="M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123
    113 131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z"/>
    <path d="M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71
    195 0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z"/>
    <path d="M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25
    -70 0z"/>
    <path d="M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7
    0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"/>
    <path d="M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223
    232 -230 231 -3 0 -11 -3 -17 -6z"/>
    <path d="M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24
    -411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118
    380 196 487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86
    -407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96
    33 -289 5 -388 -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176
    238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207
    81 364 77 109 -3 143 -7 210 -30z"/>
    <path d="M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80
    119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z"/>
    <path d="M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20
    -163 84 -207 91 l-43 7 0 -162z"/>
    <path d="M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0
    165 3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z"/>
    <path d="M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45
    -88 241 -108 241 -4 0 -57 -51 -119 -112z"/>
    <path d="M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64
    -10 68 -14 2 -31 -3 -38 -10z"/>
    <path d="M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0
    -44 -6 -64 -31z"/>
    <path d="M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
    -54 2z"/>
    <path d="M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13
    -24 13 -3 0 -14 -6 -24 -13z"/>
    <path d="M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120
    109 131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z"/>
    <path d="M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177
    79 203 0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z"/>
    <path d="M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43
    -67 12z"/>
    <path d="M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108
    10 0 13 34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115
    -113z"/>
    <path d="M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186
    61 239 98 16 10 -216 242 -234 235z"/>
    </g>
    </svg>
    `;
    }
    static getFlag() {
        return `<svg fill='red' xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"/></svg>`;
    }
}


/***/ }),

/***/ "./src/components/main/garage-view.ts":
/*!********************************************!*\
  !*** ./src/components/main/garage-view.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GarageView)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/components/utils/utils.ts");
/* harmony import */ var _car_view_car_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-view/car-line */ "./src/components/main/car-view/car-line.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ "./src/components/utils/api.ts");
/* harmony import */ var _car_view_image_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-view/image-items */ "./src/components/main/car-view/image-items.ts");
/* harmony import */ var _utils_car_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/car-list */ "./src/components/utils/car-list.ts");
/* harmony import */ var _winners_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./winners-view */ "./src/components/main/winners-view.ts");






class GarageView {
    updateButton;
    inputTextCreate;
    inputTextUpdate;
    garage;
    numberCarsInGarage;
    numberPagesInGarage;
    inputColorCreate;
    inputColorUpdate;
    buttonPrev;
    buttonNext;
    FIRST_PAGE = 1;
    CARS_ON_PAGE = 7;
    activePage = 1;
    quantityPages;
    event;
    numberForFirstWinner;
    NUMBER_FOR_RESET = 10;
    FIRST_WIN = 1;
    constructor() {
        this.updateButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createInputElement)(['buttonUpdate'], 'button', 'Update');
        this.inputTextCreate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createInputElement)(['createText'], 'text');
        this.inputTextUpdate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createInputElement)(['updateText'], 'text');
        this.garage = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['garage']);
        this.numberCarsInGarage = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['cars-number']);
        this.numberPagesInGarage = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['pages-number']);
        this.inputColorCreate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createInputElement)(['createColor'], 'color', '#ffffff');
        this.inputColorUpdate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createInputElement)(['updateColor'], 'color', '#ffffff');
        this.buttonPrev = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createInputElement)(['prev', 'buttonPrev', 'disabled'], 'button', 'Prev');
        this.buttonNext = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createInputElement)(['next', 'buttonNext', 'disabled'], 'button', 'Next');
        this.event = new Event('click');
        this.quantityPages = 1;
        this.numberForFirstWinner = 0;
    }
    create() {
        const container = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['garage-container']);
        container.append(this.createControls(), this.createGarage());
        return container;
    }
    createControls() {
        const controls = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['controls']);
        const createLine = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['create-line']);
        const createButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['buttonCreate'], 'Create');
        createButton.addEventListener('click', () => this.createNewCar());
        createLine.append(this.inputTextCreate, this.inputColorCreate, createButton);
        this.inputTextUpdate.setAttribute('disabled', 'true');
        const updateLine = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['update-line']);
        this.updateButton.disabled = true;
        this.updateButton.addEventListener('click', () => this.updateCar());
        updateLine.append(this.inputTextUpdate, this.inputColorUpdate, this.updateButton);
        const commonLine = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['common-line']);
        const raceButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['race-button'], 'Race');
        raceButton.addEventListener('click', () => this.race());
        const resetButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['reset-button'], 'Reset');
        resetButton.addEventListener('click', () => this.reset());
        const generateButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', ['generate-button'], 'Generate Cars');
        generateButton.addEventListener('click', () => this.generate());
        commonLine.append(raceButton, resetButton, generateButton);
        controls.append(createLine, updateLine, commonLine);
        return controls;
    }
    createGarage() {
        const garageDescription = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['garage-description']);
        this.numberPagesInGarage.id = this.activePage.toString();
        garageDescription.append(this.numberCarsInGarage, this.numberPagesInGarage, this.garage, this.createPagesControls());
        this.setQuantityCars();
        this.carsViewInGarageOnPage(this.FIRST_PAGE);
        return garageDescription;
    }
    createPagesControls() {
        const container = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['page-controls']);
        this.buttonPrev.addEventListener('click', () => this.openPrevPage());
        this.buttonNext.addEventListener('click', () => this.openNextPage());
        container.append(this.buttonPrev, this.buttonNext);
        return container;
    }
    async createNewCar() {
        this.addCreatedCar();
        this.setQuantityCars();
    }
    async updateCar() {
        this.inputTextUpdate.setAttribute('disabled', 'true');
        document.querySelectorAll('.line').forEach((line) => line.classList.remove('selected'));
        const id = Number.parseInt((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getAttribute)(this.updateButton, 'id'));
        const name = this.inputTextUpdate.value;
        const color = this.inputColorUpdate.value;
        const param = { name, color, id };
        await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.updateCarApi)(param);
        const imageUpdateCar = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)(`.image-id-${id}`);
        imageUpdateCar.innerHTML = '';
        imageUpdateCar.innerHTML = _car_view_image_items__WEBPACK_IMPORTED_MODULE_3__["default"].getCar(color);
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.findSelector)(`.tittle-id-${id}`).innerHTML = name;
        this.inputTextUpdate.value = '';
        this.updateButton.disabled = true;
    }
    race() {
        this.reset();
        this.numberForFirstWinner = 0;
        const distance = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getDistance)();
        try {
            document.querySelectorAll('.car-image').forEach(async (car) => {
                const id = Number(car.getAttribute('id'));
                const dataStarted = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.startEngineApi)(id);
                const startTime = new Date().getTime();
                const timeForAnimation = dataStarted.distance / dataStarted.velocity;
                const growInSec = (distance * 1000) / timeForAnimation;
                let requestID = 0;
                const animation = () => {
                    const currentTime = new Date().getTime();
                    const step = ((currentTime - startTime) / 1000) * growInSec;
                    if (car instanceof HTMLElement && step < distance) {
                        car.style.transform = `translateX(${step}px)`;
                        requestID = requestAnimationFrame(animation);
                        car.setAttribute('requestID', requestID.toString());
                    }
                };
                animation();
                const dataDrive = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.switchEngineToDrive)(id);
                if (dataDrive.status === 500)
                    cancelAnimationFrame(requestID);
                if (dataDrive.status === 200) {
                    this.numberForFirstWinner += 1;
                    if (this.numberForFirstWinner === 1) {
                        const dataWinner = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getWinnerApi)(id);
                        const time = Number((timeForAnimation / 1000).toFixed(2));
                        const carWinner = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getCarApi)(id);
                        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createModalText)(`Winner: ${carWinner.name}, time: ${time}sec`);
                        if (!!dataWinner.wins) {
                            this.updateWinner(id, time, dataWinner);
                        }
                        else
                            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.createWinnerApi)({ id, wins: this.FIRST_WIN, time });
                        this.updateWinnersView();
                    }
                }
            });
        }
        catch { }
    }
    reset() {
        this.numberForFirstWinner = this.NUMBER_FOR_RESET;
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createModalText)();
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.removeModalText)();
        const carsForAnimation = document.querySelectorAll('.car-image');
        carsForAnimation.forEach(async (car) => {
            const id = Number(car.getAttribute('id'));
            const requestID = Number(car.getAttribute('requestID'));
            cancelAnimationFrame(requestID);
            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.stopEngine)(id);
            if (car instanceof HTMLElement)
                car.style.transform = `translateX(0px)`;
        });
    }
    generate() {
        const MAX_QUANTITY_CARS_ON_PAGE = 7;
        this.addCarsToBase(this.generateListCars());
        this.setQuantityCars();
        const carsOnPage = document.querySelectorAll('.line').length;
        if (carsOnPage < MAX_QUANTITY_CARS_ON_PAGE)
            this.addCarsOnPage(carsOnPage);
    }
    async setQuantityCars() {
        const quantity = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getNumberCarsApi)();
        this.numberCarsInGarage.innerHTML = `Garage(${quantity})`;
        this.numberCarsInGarage.id = `${quantity}`;
        this.quantityPages = Math.ceil(Number(quantity) / this.CARS_ON_PAGE);
        this.numberPagesInGarage.innerHTML = `Page ${this.activePage}/${this.quantityPages}`;
        this.setActivePageButtons(this.activePage, this.quantityPages);
    }
    async carsViewInGarageOnPage(page) {
        this.garage.innerHTML = '';
        const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getCarsOnPageApi)(page);
        data.forEach((element) => {
            const carLine = new _car_view_car_line__WEBPACK_IMPORTED_MODULE_1__["default"](element.id).create(element.name, element.color, element.id);
            this.garage.append(carLine);
        });
    }
    async addCreatedCar() {
        const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.createCarApi)({ name: this.inputTextCreate.value, color: this.inputColorCreate.value });
        const carsOnPageBeforeAdding = document.querySelectorAll('.line').length;
        if (carsOnPageBeforeAdding < 7) {
            const carLine = new _car_view_car_line__WEBPACK_IMPORTED_MODULE_1__["default"](data.id).create(data.name, data.color, data.id);
            this.garage.append(carLine);
        }
    }
    setActivePageButtons(pageActive, pagesQuantity) {
        if (pageActive > 1) {
            this.buttonPrev.disabled = false;
            this.buttonPrev.classList.remove('disabled');
        }
        if (pagesQuantity > pageActive) {
            this.buttonNext.disabled = false;
            this.buttonNext.classList.remove('disabled');
        }
    }
    async openNextPage() {
        const quantity = this.numberCarsInGarage.id;
        this.quantityPages = Math.ceil(Number(quantity) / this.CARS_ON_PAGE);
        if (this.activePage < this.quantityPages) {
            this.activePage += 1;
            this.numberPagesInGarage.innerHTML = `Page ${this.activePage}/${this.quantityPages}`;
            this.numberPagesInGarage.setAttribute('id', this.activePage.toString());
            this.carsViewInGarageOnPage(this.activePage);
            if (this.buttonPrev.classList.contains('disabled'))
                this.buttonPrev.classList.remove('disabled');
            if (this.activePage === this.quantityPages) {
                this.buttonNext.classList.add('disabled');
            }
        }
    }
    async openPrevPage() {
        this.activePage = Number(this.numberPagesInGarage.id);
        this.quantityPages = Math.ceil(Number(this.numberCarsInGarage.id) / this.CARS_ON_PAGE);
        if (this.activePage > this.FIRST_PAGE) {
            this.activePage -= 1;
            this.numberPagesInGarage.innerHTML = `Page ${this.activePage}/${this.quantityPages}`;
            this.numberPagesInGarage.setAttribute('id', this.activePage.toString());
            this.carsViewInGarageOnPage(this.activePage);
            if (this.activePage === this.FIRST_PAGE)
                this.buttonPrev.classList.add('disabled');
            if (this.buttonNext.classList.contains('disabled'))
                this.buttonNext.classList.remove('disabled');
        }
    }
    generateListCars() {
        const NUMBER_CARS_FOR_GENERATE = 100;
        const NUMBER_BRANDS = _utils_car_list__WEBPACK_IMPORTED_MODULE_4__["default"].length;
        return Array(NUMBER_CARS_FOR_GENERATE)
            .fill(null)
            .map(() => {
            const randomBrandNumber = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(NUMBER_BRANDS);
            const randomModelNumber = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(_utils_car_list__WEBPACK_IMPORTED_MODULE_4__["default"][randomBrandNumber].models.length);
            return {
                name: `${_utils_car_list__WEBPACK_IMPORTED_MODULE_4__["default"][randomBrandNumber].brand} ${_utils_car_list__WEBPACK_IMPORTED_MODULE_4__["default"][randomBrandNumber].models[randomModelNumber]}`,
                color: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomColor)(),
            };
        });
    }
    addCarsToBase(params) {
        params.forEach((item) => (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.createCarApi)(item));
    }
    async addCarsOnPage(startIndex) {
        const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getCarsOnPageApi)(this.activePage);
        data.forEach((element, index) => {
            if (index >= startIndex) {
                const carLine = new _car_view_car_line__WEBPACK_IMPORTED_MODULE_1__["default"](element.id).create(element.name, element.color, element.id);
                this.garage.append(carLine);
            }
        });
    }
    async updateWinner(id, time, dataForUpdate) {
        const wins = dataForUpdate.wins + 1;
        time = Math.min(time, dataForUpdate.time);
        await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.updateWinnerApi)({ id, wins, time });
    }
    updateWinnersView() {
        _winners_view__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().drawTableBody();
        _winners_view__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().setWinnersDescription();
        _winners_view__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().updateControlButtons();
    }
}


/***/ }),

/***/ "./src/components/main/main-view.ts":
/*!******************************************!*\
  !*** ./src/components/main/main-view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/components/utils/utils.ts");

class MainView {
    main = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', ['main']);
    create() {
        return this.main;
    }
    setContent(content) {
        const htmlElement = this.main;
        while (htmlElement.firstElementChild) {
            htmlElement.firstElementChild.remove();
        }
        this.main.append(content);
    }
}


/***/ }),

/***/ "./src/components/main/winners-view.ts":
/*!*********************************************!*\
  !*** ./src/components/main/winners-view.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinnersView)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ "./src/components/utils/api.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/components/utils/utils.ts");
/* harmony import */ var _car_view_image_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-view/image-items */ "./src/components/main/car-view/image-items.ts");



class WinnersView {
    table;
    FIRST_PAGE = 1;
    WINNERS_ON_PAGE = 10;
    buttonPrev;
    buttonNext;
    winnersQuantity;
    activePage;
    numberOfActivePage;
    tableBody;
    static instance;
    buttonWins;
    buttonBestTime;
    numberClicksWins = 0;
    numberClicksTime = 0;
    constructor() {
        this.table = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('table', ['table']);
        this.winnersQuantity = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['winners-quantity']);
        this.activePage = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['pages-quantity']);
        this.buttonPrev = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createInputElement)(['prev', 'buttonPrev'], 'button', 'Prev');
        this.buttonNext = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createInputElement)(['next', 'buttonNext'], 'button', 'Next');
        this.tableBody = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('tbody', ['tbody']);
        this.numberOfActivePage = this.FIRST_PAGE;
        this.buttonWins = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('th', ['button-wins'], 'Wins ');
        this.buttonBestTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('th', ['button-time'], 'Best time (sec) ');
    }
    static getInstance() {
        if (!WinnersView.instance) {
            WinnersView.instance = new WinnersView();
        }
        return WinnersView.instance;
    }
    create() {
        this.setWinnersDescription();
        this.table.setAttribute('sort', 'id');
        this.table.setAttribute('order', 'ASC');
        this.table.append(this.createDescription(), this.createTable(), this.createPagesControls());
        this.updateControlButtons();
        return this.table;
    }
    createDescription() {
        const container = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['description-winners']);
        container.append(this.winnersQuantity, this.activePage);
        return container;
    }
    createTable() {
        const container = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['winners-table']);
        const headArray = ['Number', 'Car', 'Name'];
        const headInner = document.createElement('tr');
        headArray.forEach((tableHeadCeil) => {
            const ceil = document.createElement('th');
            ceil.innerHTML = tableHeadCeil;
            headInner.append(ceil);
        });
        this.buttonWins.addEventListener('click', () => this.sortByWins());
        this.buttonBestTime.addEventListener('click', () => this.sortByTime());
        headInner.append(this.buttonWins, this.buttonBestTime);
        const tableHead = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('thead', ['thead']);
        tableHead.append(headInner);
        this.drawTableBody();
        container.append(tableHead, this.tableBody);
        return container;
    }
    async setWinnersDescription() {
        const quantity = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getNumberWinnersApi)();
        this.winnersQuantity.innerHTML = `Winners(${quantity})`;
        const quantityOfPages = Math.ceil(Number(quantity) / this.WINNERS_ON_PAGE);
        if (this.numberOfActivePage > quantityOfPages) {
            this.numberOfActivePage -= 1;
            this.drawTableBody();
        }
        this.activePage.innerHTML = `Page ${this.numberOfActivePage}/${quantityOfPages}`;
    }
    openPrevPage() {
        if (this.numberOfActivePage != this.FIRST_PAGE) {
            this.numberOfActivePage -= 1;
            this.setWinnersDescription();
            this.drawTableBody();
            this.updateControlButtons();
        }
    }
    async openNextPage() {
        const quantity = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getNumberWinnersApi)();
        const quantityOfPages = Math.ceil(Number(quantity) / this.WINNERS_ON_PAGE);
        if (this.numberOfActivePage != quantityOfPages) {
            this.numberOfActivePage += 1;
            this.setWinnersDescription();
            this.drawTableBody();
            this.updateControlButtons();
        }
    }
    createPagesControls() {
        const container = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['winners-controls-page']);
        this.buttonPrev.addEventListener('click', () => this.openPrevPage());
        this.buttonNext.addEventListener('click', () => this.openNextPage());
        container.append(this.buttonPrev, this.buttonNext);
        return container;
    }
    async drawTableBody() {
        this.tableBody.innerHTML = '';
        const sort = this.table.getAttribute('sort');
        const order = this.table.getAttribute('order');
        if (sort && order)
            this.drawTableWithSort(sort, order);
    }
    drawWinnerLine(param) {
        const line = document.createElement('tr');
        const number = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('td', ['td-number'], `${param.index + 1}`);
        const imageHTML = _car_view_image_items__WEBPACK_IMPORTED_MODULE_2__["default"].getCar(param.color);
        const imageCar = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('td', ['td-car']);
        imageCar.innerHTML = imageHTML;
        const nameCeil = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('td', ['td-name'], `${param.name}`);
        const winsCeil = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('td', ['td-wins'], `${param.wins}`);
        const timeCeil = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('td', ['td-time'], `${param.time}`);
        line.append(number, imageCar, nameCeil, winsCeil, timeCeil);
        return line;
    }
    async updateControlButtons() {
        const quantity = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getNumberWinnersApi)();
        const quantityOfPages = Math.ceil(Number(quantity) / this.WINNERS_ON_PAGE);
        if (this.numberOfActivePage === this.FIRST_PAGE) {
            this.buttonPrev.classList.add('disabled');
        }
        if (this.numberOfActivePage === quantityOfPages) {
            this.buttonNext.classList.add('disabled');
        }
        if (this.numberOfActivePage > this.FIRST_PAGE) {
            this.buttonPrev.classList.remove('disabled');
        }
        if (this.numberOfActivePage < quantityOfPages) {
            this.buttonNext.classList.remove('disabled');
        }
    }
    sortByWins() {
        this.numberClicksWins += 1;
        this.buttonBestTime.innerHTML = `Best time (sec)`;
        if (this.numberClicksWins % 2 === 1) {
            this.buttonWins.innerHTML = `Wins &#9660;`;
            this.drawTableWithSort('wins', 'DESC');
            this.table.setAttribute('sort', 'wins');
            this.table.setAttribute('order', 'DESC');
        }
        else {
            this.buttonWins.innerHTML = `Wins &#9650;`;
            this.drawTableWithSort('wins', 'ASC');
            this.table.setAttribute('sort', 'wins');
            this.table.setAttribute('order', 'ASC');
        }
    }
    sortByTime() {
        this.numberClicksTime += 1;
        this.buttonWins.innerHTML = `Wins`;
        if (this.numberClicksTime % 2 === 1) {
            this.buttonBestTime.innerHTML = `Best time (sec) &#9660;`;
            this.drawTableWithSort('time', 'DESC');
            this.table.setAttribute('sort', 'time');
            this.table.setAttribute('order', 'DESC');
        }
        else {
            this.buttonBestTime.innerHTML = `Best time (sec) &#9650;`;
            this.drawTableWithSort('time', 'ASC');
            this.table.setAttribute('sort', 'time');
            this.table.setAttribute('order', 'ASC');
        }
    }
    async drawTableWithSort(sort = 'id', order = 'ASC') {
        const paramForSort = {
            page: this.numberOfActivePage,
            limit: this.WINNERS_ON_PAGE,
            sort,
            order,
        };
        const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.sortTable)(paramForSort);
        this.tableBody.innerHTML = '';
        data.forEach(async (element, index) => {
            const id = element.id;
            const carFromGarage = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getCarApi)(id);
            const param = {
                index,
                color: carFromGarage.color,
                name: carFromGarage.name,
                wins: element.wins,
                time: element.time,
            };
            const line = this.drawWinnerLine(param);
            this.tableBody.append(line);
        });
    }
}


/***/ }),

/***/ "./src/components/utils/api.ts":
/*!*************************************!*\
  !*** ./src/components/utils/api.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCarApi: () => (/* binding */ createCarApi),
/* harmony export */   createWinnerApi: () => (/* binding */ createWinnerApi),
/* harmony export */   getCarApi: () => (/* binding */ getCarApi),
/* harmony export */   getCarsOnPageApi: () => (/* binding */ getCarsOnPageApi),
/* harmony export */   getNumberCarsApi: () => (/* binding */ getNumberCarsApi),
/* harmony export */   getNumberWinnersApi: () => (/* binding */ getNumberWinnersApi),
/* harmony export */   getWinnerApi: () => (/* binding */ getWinnerApi),
/* harmony export */   removeCarApi: () => (/* binding */ removeCarApi),
/* harmony export */   removeCarFromWinnersApi: () => (/* binding */ removeCarFromWinnersApi),
/* harmony export */   sortTable: () => (/* binding */ sortTable),
/* harmony export */   startEngineApi: () => (/* binding */ startEngineApi),
/* harmony export */   stopEngine: () => (/* binding */ stopEngine),
/* harmony export */   switchEngineToDrive: () => (/* binding */ switchEngineToDrive),
/* harmony export */   updateCarApi: () => (/* binding */ updateCarApi),
/* harmony export */   updateWinnerApi: () => (/* binding */ updateWinnerApi)
/* harmony export */ });
const url = 'http://127.0.0.1:3000';
const path = '/garage';
var Path;
(function (Path) {
    Path["GARAGE"] = "/garage";
    Path["ENGINE"] = "/engine";
    Path["WINNERS"] = "/winners";
})(Path || (Path = {}));
async function getCarsOnPageApi(page) {
    const response = await fetch(`${url}${path}?_page=${page}&_limit=7`);
    const cars = await response.json();
    return cars;
}
async function getCarApi(id) {
    const response = await fetch(`${url}${path}/${id}`);
    const data = await response.json();
    return data;
}
async function getNumberCarsApi() {
    const response = await fetch(`${url}${path}?_limit=7`);
    const numberOfCars = response.headers.get('X-Total-Count');
    return numberOfCars;
}
async function createCarApi(body) {
    const response = await fetch(`${url}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const carCreated = await response.json();
    return carCreated;
}
async function removeCarApi(id) {
    await fetch(`${url}${path}/${id}`, {
        method: 'DELETE',
    });
}
async function updateCarApi(param) {
    await fetch(`${url}${path}/${param.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: param.name,
            color: param.color,
        }),
    });
}
async function startEngineApi(id) {
    const response = await fetch(`${url}${Path.ENGINE}?id=${id}&status=started`, {
        method: 'PATCH',
    });
    return response.json();
}
async function switchEngineToDrive(id) {
    const response = await fetch(`${url}${Path.ENGINE}?id=${id}&status=drive`, {
        method: 'PATCH',
    });
    return response;
}
async function stopEngine(id) {
    const response = await fetch(`${url}${Path.ENGINE}?id=${id}&status=stopped`, {
        method: 'PATCH',
    });
    return response.json();
}
async function getNumberWinnersApi() {
    const response = await fetch(`${url}${Path.WINNERS}?_limit=10`);
    const numberOfWinners = response.headers.get('X-Total-Count');
    return numberOfWinners;
}
async function createWinnerApi(body) {
    await fetch(`${url}${Path.WINNERS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
}
async function getWinnerApi(id) {
    const response = await fetch(`${url}${Path.WINNERS}/${id}`);
    const data = await response.json();
    return data;
}
async function updateWinnerApi(param) {
    await fetch(`${url}${Path.WINNERS}/${param.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            wins: param.wins,
            time: param.time,
        }),
    });
}
async function removeCarFromWinnersApi(id) {
    await fetch(`${url}${Path.WINNERS}/${id}`, {
        method: 'DELETE',
    });
}
async function sortTable({ page, limit, sort, order }) {
    const response = await fetch(`${url}${Path.WINNERS}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    return response.json();
}


/***/ }),

/***/ "./src/components/utils/car-list.ts":
/*!******************************************!*\
  !*** ./src/components/utils/car-list.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    { "brand": "Seat", "models": ["Alhambra", "Altea", "Altea XL", "Arosa", "Cordoba", "Cordoba Vario", "Exeo", "Ibiza", "Ibiza ST", "Exeo ST", "Leon", "Leon ST", "Inca", "Mii", "Toledo"] },
    { "brand": "Renault", "models": ["Captur", "Clio", "Clio Grandtour", "Espace", "Express", "Fluence", "Grand Espace", "Grand Modus", "Grand Scenic", "Kadjar", "Kangoo", "Kangoo Express", "Koleos", "Laguna", "Laguna Grandtour", "Latitude", "Mascott", "Mégane", "Mégane CC", "Mégane Combi", "Mégane Grandtour", "Mégane Coupé", "Mégane Scénic", "Scénic", "Talisman", "Talisman Grandtour", "Thalia", "Twingo", "Wind", "Zoé"] },
    { "brand": "Peugeot", "models": ["1007", "107", "106", "108", "2008", "205", "205 Cabrio", "206", "206 CC", "206 SW", "207", "207 CC", "207 SW", "306", "307", "307 CC", "307 SW", "308", "308 CC", "308 SW", "309", "4007", "4008", "405", "406", "407", "407 SW", "5008", "508", "508 SW", "605", "806", "607", "807", "Bipper", "RCZ"] },
    { "brand": "Dacia", "models": ["Dokker", "Duster", "Lodgy", "Logan", "Logan MCV", "Logan Van", "Sandero", "Solenza"] },
    { "brand": "Citroën", "models": ["Berlingo", "C-Crosser", "C-Elissée", "C-Zero", "C1", "C2", "C3", "C3 Picasso", "C4", "C4 Aircross", "C4 Cactus", "C4 Coupé", "C4 Grand Picasso", "C4 Sedan", "C5", "C5 Break", "C5 Tourer", "C6", "C8", "DS3", "DS4", "DS5", "Evasion", "Jumper", "Jumpy", "Saxo", "Nemo", "Xantia", "Xsara"] },
    { "brand": "Opel", "models": ["Agila", "Ampera", "Antara", "Astra", "Astra cabrio", "Astra caravan", "Astra coupé", "Calibra", "Campo", "Cascada", "Corsa", "Frontera", "Insignia", "Insignia kombi", "Kadett", "Meriva", "Mokka", "Movano", "Omega", "Signum", "Vectra", "Vectra Caravan", "Vivaro", "Vivaro Kombi", "Zafira"] },
    { "brand": "Alfa Romeo", "models": ["145", "146", "147", "155", "156", "156 Sportwagon", "159", "159 Sportwagon", "164", "166", "4C", "Brera", "GTV", "MiTo", "Crosswagon", "Spider", "GT", "Giulietta", "Giulia"] },
    { "brand": "Škoda", "models": ["Favorit", "Felicia", "Citigo", "Fabia", "Fabia Combi", "Fabia Sedan", "Felicia Combi", "Octavia", "Octavia Combi", "Roomster", "Yeti", "Rapid", "Rapid Spaceback", "Superb", "Superb Combi"] },
    { "brand": "Chevrolet", "models": ["Alero", "Aveo", "Camaro", "Captiva", "Corvette", "Cruze", "Cruze SW", "Epica", "Equinox", "Evanda", "HHR", "Kalos", "Lacetti", "Lacetti SW", "Lumina", "Malibu", "Matiz", "Monte Carlo", "Nubira", "Orlando", "Spark", "Suburban", "Tacuma", "Tahoe", "Trax"] },
    { "brand": "Porsche", "models": ["911 Carrera", "911 Carrera Cabrio", "911 Targa", "911 Turbo", "924", "944", "997", "Boxster", "Cayenne", "Cayman", "Macan", "Panamera"] },
    { "brand": "Honda", "models": ["Accord", "Accord Coupé", "Accord Tourer", "City", "Civic", "Civic Aerodeck", "Civic Coupé", "Civic Tourer", "Civic Type R", "CR-V", "CR-X", "CR-Z", "FR-V", "HR-V", "Insight", "Integra", "Jazz", "Legend", "Prelude"] },
    { "brand": "Subaru", "models": ["BRZ", "Forester", "Impreza", "Impreza Wagon", "Justy", "Legacy", "Legacy Wagon", "Legacy Outback", "Levorg", "Outback", "SVX", "Tribeca", "Tribeca B9", "XV"] },
    { "brand": "Mazda", "models": ["121", "2", "3", "323", "323 Combi", "323 Coupé", "323 F", "5", "6", "6 Combi", "626", "626 Combi", "B-Fighter", "B2500", "BT", "CX-3", "CX-5", "CX-7", "CX-9", "Demio", "MPV", "MX-3", "MX-5", "MX-6", "Premacy", "RX-7", "RX-8", "Xedox 6"] },
    { "brand": "Mitsubishi", "models": ["3000 GT", "ASX", "Carisma", "Colt", "Colt CC", "Eclipse", "Fuso canter", "Galant", "Galant Combi", "Grandis", "L200", "L200 Pick up", "L200 Pick up Allrad", "L300", "Lancer", "Lancer Combi", "Lancer Evo", "Lancer Sportback", "Outlander", "Pajero", "Pajeto Pinin", "Pajero Pinin Wagon", "Pajero Sport", "Pajero Wagon", "Space Star"] },
    { "brand": "Lexus", "models": ["CT", "GS", "GS 300", "GX", "IS", "IS 200", "IS 250 C", "IS-F", "LS", "LX", "NX", "RC F", "RX", "RX 300", "RX 400h", "RX 450h", "SC 430"] },
    { "brand": "Toyota", "models": ["4-Runner", "Auris", "Avensis", "Avensis Combi", "Avensis Van Verso", "Aygo", "Camry", "Carina", "Celica", "Corolla", "Corolla Combi", "Corolla sedan", "Corolla Verso", "FJ Cruiser", "GT86", "Hiace", "Hiace Van", "Highlander", "Hilux", "Land Cruiser", "MR2", "Paseo", "Picnic", "Prius", "RAV4", "Sequoia", "Starlet", "Supra", "Tundra", "Urban Cruiser", "Verso", "Yaris", "Yaris Verso"] },
    { "brand": "BMW", "models": ["i3", "i8", "M3", "M4", "M5", "M6", "Rad 1", "Rad 1 Cabrio", "Rad 1 Coupé", "Rad 2", "Rad 2 Active Tourer", "Rad 2 Coupé", "Rad 2 Gran Tourer", "Rad 3", "Rad 3 Cabrio", "Rad 3 Compact", "Rad 3 Coupé", "Rad 3 GT", "Rad 3 Touring", "Rad 4", "Rad 4 Cabrio", "Rad 4 Gran Coupé", "Rad 5", "Rad 5 GT", "Rad 5 Touring", "Rad 6", "Rad 6 Cabrio", "Rad 6 Coupé", "Rad 6 Gran Coupé", "Rad 7", "Rad 8 Coupé", "X1", "X3", "X4", "X5", "X6", "Z3", "Z3 Coupé", "Z3 Roadster", "Z4", "Z4 Roadster"] },
    { "brand": "Volkswagen", "models": ["Amarok", "Beetle", "Bora", "Bora Variant", "Caddy", "Caddy Van", "Life", "California", "Caravelle", "CC", "Crafter", "Crafter Van", "Crafter Kombi", "CrossTouran", "Eos", "Fox", "Golf", "Golf Cabrio", "Golf Plus", "Golf Sportvan", "Golf Variant", "Jetta", "LT", "Lupo", "Multivan", "New Beetle", "New Beetle Cabrio", "Passat", "Passat Alltrack", "Passat CC", "Passat Variant", "Passat Variant Van", "Phaeton", "Polo", "Polo Van", "Polo Variant", "Scirocco", "Sharan", "T4", "T4 Caravelle", "T4 Multivan", "T5", "T5 Caravelle", "T5 Multivan", "T5 Transporter Shuttle", "Tiguan", "Touareg", "Touran"] },
    { "brand": "Suzuki", "models": ["Alto", "Baleno", "Baleno kombi", "Grand Vitara", "Grand Vitara XL-7", "Ignis", "Jimny", "Kizashi", "Liana", "Samurai", "Splash", "Swift", "SX4", "SX4 Sedan", "Vitara", "Wagon R+"] },
    { "brand": "Mercedes-Benz", "models": ["100 D", "115", "124", "126", "190", "190 D", "190 E", "200 - 300", "200 D", "200 E", "210 Van", "210 kombi", "310 Van", "310 kombi", "230 - 300 CE Coupé", "260 - 560 SE", "260 - 560 SEL", "500 - 600 SEC Coupé", "Trieda A", "A", "A L", "AMG GT", "Trieda B", "Trieda C", "C", "C Sportcoupé", "C T", "Citan", "CL", "CL", "CLA", "CLC", "CLK Cabrio", "CLK Coupé", "CLS", "Trieda E", "E", "E Cabrio", "E Coupé", "E T", "Trieda G", "G Cabrio", "GL", "GLA", "GLC", "GLE", "GLK", "Trieda M", "MB 100", "Trieda R", "Trieda S", "S", "S Coupé", "SL", "SLC", "SLK", "SLR", "Sprinter"] },
    { "brand": "Saab", "models": ["9-3", "9-3 Cabriolet", "9-3 Coupé", "9-3 SportCombi", "9-5", "9-5 SportCombi", "900", "900 C", "900 C Turbo", "9000"] },
    { "brand": "Audi", "models": ["100", "100 Avant", "80", "80 Avant", "80 Cabrio", "90", "A1", "A2", "A3", "A3 Cabriolet", "A3 Limuzina", "A3 Sportback", "A4", "A4 Allroad", "A4 Avant", "A4 Cabriolet", "A5", "A5 Cabriolet", "A5 Sportback", "A6", "A6 Allroad", "A6 Avant", "A7", "A8", "A8 Long", "Q3", "Q5", "Q7", "R8", "RS4 Cabriolet", "RS4/RS4 Avant", "RS5", "RS6 Avant", "RS7", "S3/S3 Sportback", "S4 Cabriolet", "S4/S4 Avant", "S5/S5 Cabriolet", "S6/RS6", "S7", "S8", "SQ5", "TT Coupé", "TT Roadster", "TTS"] },
    { "brand": "Kia", "models": ["Avella", "Besta", "Carens", "Carnival", "Cee`d", "Cee`d SW", "Cerato", "K 2500", "Magentis", "Opirus", "Optima", "Picanto", "Pregio", "Pride", "Pro Cee`d", "Rio", "Rio Combi", "Rio sedan", "Sephia", "Shuma", "Sorento", "Soul", "Sportage", "Venga"] },
    { "brand": "Land Rover", "models": ["109", "Defender", "Discovery", "Discovery Sport", "Freelander", "Range Rover", "Range Rover Evoque", "Range Rover Sport"] },
    { "brand": "Dodge", "models": ["Avenger", "Caliber", "Challenger", "Charger", "Grand Caravan", "Journey", "Magnum", "Nitro", "RAM", "Stealth", "Viper"] },
    { "brand": "Chrysler", "models": ["300 C", "300 C Touring", "300 M", "Crossfire", "Grand Voyager", "LHS", "Neon", "Pacifica", "Plymouth", "PT Cruiser", "Sebring", "Sebring Convertible", "Stratus", "Stratus Cabrio", "Town & Country", "Voyager"] },
    { "brand": "Ford", "models": ["Aerostar", "B-Max", "C-Max", "Cortina", "Cougar", "Edge", "Escort", "Escort Cabrio", "Escort kombi", "Explorer", "F-150", "F-250", "Fiesta", "Focus", "Focus C-Max", "Focus CC", "Focus kombi", "Fusion", "Galaxy", "Grand C-Max", "Ka", "Kuga", "Maverick", "Mondeo", "Mondeo Combi", "Mustang", "Orion", "Puma", "Ranger", "S-Max", "Sierra", "Street Ka", "Tourneo Connect", "Tourneo Custom", "Transit", "Transit", "Transit Bus", "Transit Connect LWB", "Transit Courier", "Transit Custom", "Transit kombi", "Transit Tourneo", "Transit Valnik", "Transit Van", "Transit Van 350", "Windstar"] },
    { "brand": "Hummer", "models": ["H2", "H3"] },
    { "brand": "Hyundai", "models": ["Accent", "Atos", "Atos Prime", "Coupé", "Elantra", "Galloper", "Genesis", "Getz", "Grandeur", "H 350", "H1", "H1 Bus", "H1 Van", "H200", "i10", "i20", "i30", "i30 CW", "i40", "i40 CW", "ix20", "ix35", "ix55", "Lantra", "Matrix", "Santa Fe", "Sonata", "Terracan", "Trajet", "Tucson", "Veloster"] },
    { "brand": "Infiniti", "models": ["EX", "FX", "G", "G Coupé", "M", "Q", "QX"] },
    { "brand": "Jaguar", "models": ["Daimler", "F-Pace", "F-Type", "S-Type", "Sovereign", "X-Type", "X-type Estate", "XE", "XF", "XJ", "XJ12", "XJ6", "XJ8", "XJ8", "XJR", "XK", "XK8 Convertible", "XKR", "XKR Convertible"] },
    { "brand": "Jeep", "models": ["Cherokee", "Commander", "Compass", "Grand Cherokee", "Patriot", "Renegade", "Wrangler"] },
    { "brand": "Nissan", "models": ["100 NX", "200 SX", "350 Z", "350 Z Roadster", "370 Z", "Almera", "Almera Tino", "Cabstar E - T", "Cabstar TL2 Valnik", "e-NV200", "GT-R", "Insterstar", "Juke", "King Cab", "Leaf", "Maxima", "Maxima QX", "Micra", "Murano", "Navara", "Note", "NP300 Pickup", "NV200", "NV400", "Pathfinder", "Patrol", "Patrol GR", "Pickup", "Pixo", "Primastar", "Primastar Combi", "Primera", "Primera Combi", "Pulsar", "Qashqai", "Serena", "Sunny", "Terrano", "Tiida", "Trade", "Vanette Cargo", "X-Trail"] },
    { "brand": "Volvo", "models": ["240", "340", "360", "460", "850", "850 kombi", "C30", "C70", "C70 Cabrio", "C70 Coupé", "S40", "S60", "S70", "S80", "S90", "V40", "V50", "V60", "V70", "V90", "XC60", "XC70", "XC90"] },
    { "brand": "Daewoo", "models": ["Espero", "Kalos", "Lacetti", "Lanos", "Leganza", "Lublin", "Matiz", "Nexia", "Nubira", "Nubira kombi", "Racer", "Tacuma", "Tico"] },
    { "brand": "Fiat", "models": ["1100", "126", "500", "500L", "500X", "850", "Barchetta", "Brava", "Cinquecento", "Coupé", "Croma", "Doblo", "Doblo Cargo", "Doblo Cargo Combi", "Ducato", "Ducato Van", "Ducato Kombi", "Ducato Podvozok", "Florino", "Florino Combi", "Freemont", "Grande Punto", "Idea", "Linea", "Marea", "Marea Weekend", "Multipla", "Palio Weekend", "Panda", "Panda Van", "Punto", "Punto Cabriolet", "Punto Evo", "Punto Van", "Qubo", "Scudo", "Scudo Van", "Scudo Kombi", "Sedici", "Seicento", "Stilo", "Stilo Multiwagon", "Strada", "Talento", "Tipo", "Ulysse", "Uno", "X1/9"] },
    { "brand": "MINI", "models": ["Cooper", "Cooper Cabrio", "Cooper Clubman", "Cooper D", "Cooper D Clubman", "Cooper S", "Cooper S Cabrio", "Cooper S Clubman", "Countryman", "Mini One", "One D"] },
    { "brand": "Rover", "models": ["200", "214", "218", "25", "400", "414", "416", "620", "75"] },
    { "brand": "Smart", "models": ["Cabrio", "City-Coupé", "Compact Pulse", "Forfour", "Fortwo cabrio", "Fortwo coupé", "Roadster"] }
]);


/***/ }),

/***/ "./src/components/utils/utils.ts":
/*!***************************************!*\
  !*** ./src/components/utils/utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createInputElement: () => (/* binding */ createInputElement),
/* harmony export */   createModalText: () => (/* binding */ createModalText),
/* harmony export */   findClosest: () => (/* binding */ findClosest),
/* harmony export */   findSelector: () => (/* binding */ findSelector),
/* harmony export */   findSelectorInput: () => (/* binding */ findSelectorInput),
/* harmony export */   getAttribute: () => (/* binding */ getAttribute),
/* harmony export */   getDistance: () => (/* binding */ getDistance),
/* harmony export */   getRandomColor: () => (/* binding */ getRandomColor),
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber),
/* harmony export */   removeModalText: () => (/* binding */ removeModalText)
/* harmony export */ });
function createElement(tag, classArray, content = '') {
    const element = document.createElement(tag);
    classArray.forEach((classItem) => element.classList.add(classItem));
    element.textContent = content;
    return element;
}
function createInputElement(classArray, inputType, value = '') {
    const element = document.createElement('input');
    element.type = inputType;
    classArray.forEach((classItem) => element.classList.add(classItem));
    element.value = value;
    return element;
}
function findSelector(selector) {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    }
    else
        throw new Error('not exists');
}
function findSelectorInput(selector) {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    }
    else
        throw new Error('not exists');
}
function findClosest(item, selector) {
    const element = item.closest(selector);
    if (element) {
        return element;
    }
    else
        throw new Error('not exists');
}
function getAttribute(item, attribute) {
    const value = item.getAttribute(attribute);
    if (value) {
        return value;
    }
    else
        throw new Error('not exists');
}
function getRandomNumber(numberElements) {
    return Math.floor(Math.random() * numberElements);
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[getRandomNumber(letters.length)];
    }
    return color;
}
function createModalText(text = '') {
    const modal = createElement('div', ['modal'], text);
    document.body.append(modal);
}
function removeModalText() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => modal.remove());
}
function getDistance() {
    const documentClientWidth = document.documentElement.clientWidth;
    const carContainerWidth = findSelector(`.start-container`).clientWidth;
    const distance = documentClientWidth - carContainerWidth;
    return distance;
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app */ "./src/components/app.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const app = new _components_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sZ0ZBQWdGLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FB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QUFDZDtBQUVyQixNQUFNLEdBQUcsR0FBUSxJQUFJLHVEQUFHLEVBQUUsQ0FBQztBQUMzQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9hcHAudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXItdmlldy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9jYXItdmlldy9jYXItYnV0dG9ucy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9jYXItdmlldy9jYXItbGluZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9jYXItdmlldy9pbWFnZS1pdGVtcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9nYXJhZ2Utdmlldy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9tYWluLXZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL21haW4vd2lubmVycy12aWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy91dGlscy9hcGkudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2Nhci1saXN0LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1se1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIkV4byAyXCIsIExhdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmdhcmFnZS1idXR0b24sXG4ud2lubmVycy1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAyNXB4O1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCA5cHggIzk5OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5nYXJhZ2UtYnV0dG9uOmhvdmVyLFxuLndpbm5lcnMtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbn1cblxuLmdhcmFnZS1idXR0b24uYWN0aXZlLFxuLndpbm5lcnMtYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4uYnV0dG9uLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4uYnV0dG9uQ3JlYXRlLFxuLmJ1dHRvblVwZGF0ZSxcbi5yYWNlLWJ1dHRvbixcbi5yZXNldC1idXR0b24sXG4uZ2VuZXJhdGUtYnV0dG9uLFxuLmJ1dHRvblByZXYsXG4uYnV0dG9uTmV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxM2FhNTI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjZyZW07ICBcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b25DcmVhdGU6aG92ZXIsXG4uYnV0dG9uVXBkYXRlOmhvdmVyLFxuLnJhY2UtYnV0dG9uOmhvdmVyLFxuLnJlc2V0LWJ1dHRvbjpob3Zlcixcbi5nZW5lcmF0ZS1idXR0b246aG92ZXIsXG4uYnV0dG9uOmhvdmVyLFxuLmJ1dHRvblByZXY6aG92ZXIsXG4uYnV0dG9uTmV4dDpob3ZlciB7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtOyAgXG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgbWFyZ2luOiA1cHg7XG4gIG9wYWNpdHk6IC43O1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnN0YXJ0LFxuLnN0b3Age1xuICBjb2xvcjogIzAwZmYwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBmZjAwO1xufVxuXG4uYnV0dG9uLmRpc2FibGUge1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjNjY2O1xufVxuXG4uYnV0dG9uLmRpc2FibGU6aG92ZXIge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDByZW07XG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDByZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY3JlYXRlLWxpbmUsXG4udXBkYXRlLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmNvbW1vbi1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi50YWJsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG50aGVhZCB7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY2Fycy1udW1iZXIsXG4ucGFnZXMtbnVtYmVyLFxuLndpbm5lcnMtcXVhbnRpdHksXG4ucGFnZXMtcXVhbnRpdHkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGFnZXMtbnVtYmVyLFxuLnBhZ2VzLXF1YW50aXR5IHtcbiAgY29sb3I6IGJ1cmx5d29vZDtcbn1cblxuLmxpbmUge1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgI2ZmZjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5jYXItaW1hZ2Ugc3ZnIHsgIFxuICB3aWR0aDogY2FsYygxOHJlbSAtIDh2dyk7XG4gIGhlaWdodDogYXV0bztcblxufVxuXG4uY2FyLXRpdHRsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogYnVybHl3b29kO1xufVxuXG4uY2FyLXNlY29uZC1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IGNhbGMoMTguNXJlbSAtIDh2dyk7XG59XG5cbi5zdGFydC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMWEwZjBmO1xufVxuXG4ucGFnZS1jb250cm9scyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5wcmV2LFxuLm5leHQge1xuICB3aWR0aDogMTByZW07XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDE1cmVtIC0gOHZ3KTtcbn1cblxuLnByZXYuZGlzYWJsZWQsXG4ubmV4dC5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM1NDU0NTQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMjJ2dztcbiAgdG9wOiA0NXZoO1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6ICNGQzAgMXB4IDAgMTBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IGFjdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYWN0aW9uIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4udGJvZHkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRkLWNhciBzdmcge1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogNHJlbTtcbn1cblxudGgsXG50ZCB7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xufVxudGgge1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi53aW5uZXJzLWNvbnRyb2xzLXBhZ2Uge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLmJ1dHRvbi13aW5zLFxuLmJ1dHRvbi10aW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Ny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LFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1se1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFeG8gMlxcXCIsIExhdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYXJhZ2UtYnV0dG9uLFxcbi53aW5uZXJzLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA0cHggMjVweDtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAwIDlweCAjOTk5O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5nYXJhZ2UtYnV0dG9uOmhvdmVyLFxcbi53aW5uZXJzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xcbn1cXG5cXG4uZ2FyYWdlLWJ1dHRvbi5hY3RpdmUsXFxuLndpbm5lcnMtYnV0dG9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4uYnV0dG9uLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4uYnV0dG9uQ3JlYXRlLFxcbi5idXR0b25VcGRhdGUsXFxuLnJhY2UtYnV0dG9uLFxcbi5yZXNldC1idXR0b24sXFxuLmdlbmVyYXRlLWJ1dHRvbixcXG4uYnV0dG9uUHJldixcXG4uYnV0dG9uTmV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNhYTUyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjZyZW07ICBcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbkNyZWF0ZTpob3ZlcixcXG4uYnV0dG9uVXBkYXRlOmhvdmVyLFxcbi5yYWNlLWJ1dHRvbjpob3ZlcixcXG4ucmVzZXQtYnV0dG9uOmhvdmVyLFxcbi5nZW5lcmF0ZS1idXR0b246aG92ZXIsXFxuLmJ1dHRvbjpob3ZlcixcXG4uYnV0dG9uUHJldjpob3ZlcixcXG4uYnV0dG9uTmV4dDpob3ZlciB7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmZmZmY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyAgXFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIG1hcmdpbjogNXB4O1xcbiAgb3BhY2l0eTogLjc7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN0YXJ0LFxcbi5zdG9wIHtcXG4gIGNvbG9yOiAjMDBmZjAwO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBmZjAwO1xcbn1cXG5cXG4uYnV0dG9uLmRpc2FibGUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kOiAjNjY2O1xcbn1cXG5cXG4uYnV0dG9uLmRpc2FibGU6aG92ZXIge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDByZW07XFxuICBtYXJnaW4tdG9wOiAxLjJyZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDByZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5jcmVhdGUtbGluZSxcXG4udXBkYXRlLWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29tbW9uLWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udGFibGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG50aGVhZCB7XFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5jYXJzLW51bWJlcixcXG4ucGFnZXMtbnVtYmVyLFxcbi53aW5uZXJzLXF1YW50aXR5LFxcbi5wYWdlcy1xdWFudGl0eSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wYWdlcy1udW1iZXIsXFxuLnBhZ2VzLXF1YW50aXR5IHtcXG4gIGNvbG9yOiBidXJseXdvb2Q7XFxufVxcblxcbi5saW5lIHtcXG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAjZmZmO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5jYXItaW1hZ2Ugc3ZnIHsgIFxcbiAgd2lkdGg6IGNhbGMoMThyZW0gLSA4dncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcblxcbn1cXG5cXG4uY2FyLXRpdHRsZSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiBidXJseXdvb2Q7XFxufVxcblxcbi5jYXItc2Vjb25kLWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mbGFnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiBjYWxjKDE4LjVyZW0gLSA4dncpO1xcbn1cXG5cXG4uc3RhcnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogIzFhMGYwZjtcXG59XFxuXFxuLnBhZ2UtY29udHJvbHMge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnByZXYsXFxuLm5leHQge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTVyZW0gLSA4dncpO1xcbn1cXG5cXG4ucHJldi5kaXNhYmxlZCxcXG4ubmV4dC5kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiAjNTQ1NDU0O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDIydnc7XFxuICB0b3A6IDQ1dmg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogI0ZDMCAxcHggMCAxMHB4O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFjdGlvbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhY3Rpb24ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbi50Ym9keSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRkLWNhciBzdmcge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICBib3JkZXItc3R5bGU6IGdyb292ZTtcXG59XFxudGgge1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4ud2lubmVycy1jb250cm9scy1wYWdlIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLXdpbnMsXFxuLmJ1dHRvbi10aW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyLXZpZXcnO1xuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4vbWFpbi9tYWluLXZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaGVhZGVyID0gbmV3IEhlYWRlcigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWFpbiA9IG5ldyBNYWluVmlldygpO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVWaWV3KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmhlYWRlci5jcmVhdGUodGhpcy5tYWluKSwgdGhpcy5tYWluLmNyZWF0ZSgpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge31cbn1cbiIsImltcG9ydCBHYXJhZ2VWaWV3IGZyb20gJy4uL21haW4vZ2FyYWdlLXZpZXcnO1xuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4uL21haW4vbWFpbi12aWV3JztcbmltcG9ydCBXaW5uZXJzVmlldyBmcm9tICcuLi9tYWluL3dpbm5lcnMtdmlldyc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICAgIHByaXZhdGUgTmFtZUJ1dHRvbnMgPSB7XG4gICAgICAgIEdBUkFHRTogJ1RvIEdhcmFnZScsXG4gICAgICAgIFdJTk5FUlM6ICdUbyBXaW5uZXJzJyxcbiAgICB9O1xuICAgIHByaXZhdGUgY2xhc3NCdXR0b24gPSB7XG4gICAgICAgIEdBUkFHRTogJ2dhcmFnZS1idXR0b24nLFxuICAgICAgICBXSU5ORVJTOiAnd2lubmVycy1idXR0b24nLFxuICAgIH07XG5cbiAgICBwcml2YXRlIGdhcmFnZUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdhJywgW3RoaXMuY2xhc3NCdXR0b24uR0FSQUdFXSwgdGhpcy5OYW1lQnV0dG9ucy5HQVJBR0UpO1xuICAgIHByaXZhdGUgd2lubmVyc0J1dHRvbjogSFRNTEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdhJywgW3RoaXMuY2xhc3NCdXR0b24uV0lOTkVSU10sIHRoaXMuTmFtZUJ1dHRvbnMuV0lOTkVSUyk7XG4gICAgcHJpdmF0ZSBoZWFkZXI6IEhUTUxFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJywgWydoZWFkZXInXSk7XG5cbiAgICBwdWJsaWMgY3JlYXRlKG1haW5Db21wb25lbnQ6IE1haW5WaWV3KTogSFRNTEVsZW1lbnQge1xuICAgICAgICB0aGlzLmdhcmFnZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuYXBwZW5kKHRoaXMuZ2FyYWdlQnV0dG9uLCB0aGlzLndpbm5lcnNCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGdhcmFnZVZpZXcgPSBuZXcgR2FyYWdlVmlldygpLmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLmdhcmFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2lubmVyc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5nYXJhZ2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBtYWluQ29tcG9uZW50LnNldENvbnRlbnQoZ2FyYWdlVmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYWluQ29tcG9uZW50LnNldENvbnRlbnQoZ2FyYWdlVmlldyk7XG5cbiAgICAgICAgY29uc3Qgd2lubmVyc1ZpZXcgPSBXaW5uZXJzVmlldy5nZXRJbnN0YW5jZSgpLmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLndpbm5lcnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhcmFnZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMud2lubmVyc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMud2lubmVyc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIG1haW5Db21wb25lbnQuc2V0Q29udGVudCh3aW5uZXJzVmlldyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDYXJUeXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBmaW5kQ2xvc2VzdCwgZmluZFNlbGVjdG9yLCBmaW5kU2VsZWN0b3JJbnB1dCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IGdldENhckFwaSwgZ2V0Q2Fyc09uUGFnZUFwaSwgZ2V0TnVtYmVyQ2Fyc0FwaSwgcmVtb3ZlQ2FyQXBpLCByZW1vdmVDYXJGcm9tV2lubmVyc0FwaSB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgQ2FyTGluZSBmcm9tICcuL2Nhci1saW5lJztcbmltcG9ydCBXaW5uZXJzVmlldyBmcm9tICcuLi93aW5uZXJzLXZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJCdXR0b25zIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IEZJUlNUX1BBR0U6IG51bWJlciA9IDE7XG4gICAgcHVibGljIGNyZWF0ZSgpIHt9XG5cbiAgICBwdWJsaWMgZ2V0U2VsZWN0QnV0dG9uKGlkOiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ3NlbGVjdCcsICdidXR0b24nLCBgJHtpZH1gXSwgJ1NlbGVjdCcpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVUZXh0OiBIVE1MSW5wdXRFbGVtZW50ID0gZmluZFNlbGVjdG9ySW5wdXQoJy51cGRhdGVUZXh0Jyk7XG4gICAgICAgICAgICB1cGRhdGVUZXh0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50ID0gZmluZFNlbGVjdG9ySW5wdXQoJy5idXR0b25VcGRhdGUnKTtcbiAgICAgICAgICAgIHVwZGF0ZUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB1cGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGlkLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluZScpLmZvckVhY2goKGxpbmUpID0+IGxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICBmaW5kQ2xvc2VzdChidXR0b24sICcubGluZScpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2FyQXBpKGlkKTtcbiAgICAgICAgICAgIHVwZGF0ZVRleHQudmFsdWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVDb2xvcjogSFRNTElucHV0RWxlbWVudCA9IGZpbmRTZWxlY3RvcklucHV0KCcudXBkYXRlQ29sb3InKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbG9yLnZhbHVlID0gZGF0YS5jb2xvcjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIHB1YmxpYyBnZXRSZW1vdmVCdXR0b24oaWQ6IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYScsIFsncmVtb3ZlJywgJ2J1dHRvbicsIGAke2lkfWBdLCAnUmVtb3ZlJyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUNhckFwaShpZCk7XG4gICAgICAgICAgICByZW1vdmVDYXJGcm9tV2lubmVyc0FwaShpZCk7XG4gICAgICAgICAgICBmaW5kQ2xvc2VzdChidXR0b24sICcubGluZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVHYXJhZ2VRdWFudGl0eSgpO1xuICAgICAgICAgICAgY29uc3QgY2Fyc09uUGFnZUFmdGVyUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmUnKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY2Fyc09uUGFnZUFmdGVyUmVtb3ZlIDwgNykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlUGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlUXVhbnRpdHkoKTtcbiAgICAgICAgICAgIFdpbm5lcnNWaWV3LmdldEluc3RhbmNlKCkuc2V0V2lubmVyc0Rlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICBXaW5uZXJzVmlldy5nZXRJbnN0YW5jZSgpLnVwZGF0ZUNvbnRyb2xCdXR0b25zKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTdGFydEJ1dHRvbihpZDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdhJywgWydzdGFydCcsICdidXR0b24nXSwgJ0EnKTtcbiAgICAgICAgc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gc3RhcnRCdXR0b247XG4gICAgfVxuICAgIHB1YmxpYyBnZXRTdG9wQnV0dG9uKGlkOiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHN0b3BCdXR0b246IEhUTUxFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnYScsIFsnc3RvcCcsICdidXR0b24nLCAnZGlzYWJsZSddLCAnQicpO1xuICAgICAgICBzdG9wQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHN0b3BCdXR0b247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVHYXJhZ2VRdWFudGl0eSgpIHtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBhd2FpdCBnZXROdW1iZXJDYXJzQXBpKCk7XG4gICAgICAgIGNvbnN0IGNhcnNOdW1iZXIgPSBmaW5kU2VsZWN0b3IoJy5jYXJzLW51bWJlcicpO1xuICAgICAgICBjYXJzTnVtYmVyLmlubmVySFRNTCA9IGBHYXJhZ2UoJHtxdWFudGl0eX0pYDtcbiAgICAgICAgY2Fyc051bWJlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cXVhbnRpdHl9YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVBY3RpdmVQYWdlKCkge1xuICAgICAgICBjb25zdCBMQVNUX0NBUl9PTl9QQUdFID0gNjtcbiAgICAgICAgY29uc3QgYWN0aXZlUGFnZSA9IE51bWJlcihmaW5kU2VsZWN0b3IoJy5wYWdlcy1udW1iZXInKS5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2Fyc09uUGFnZUFwaShhY3RpdmVQYWdlKTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gTEFTVF9DQVJfT05fUEFHRSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRhdGFbTEFTVF9DQVJfT05fUEFHRV0ubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZGF0YVtMQVNUX0NBUl9PTl9QQUdFXS5jb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZGF0YVtMQVNUX0NBUl9PTl9QQUdFXS5pZDtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RMaW5lID0gbmV3IENhckxpbmUoaWQpLmNyZWF0ZShuYW1lLCBjb2xvciwgaWQpO1xuICAgICAgICAgICAgZmluZFNlbGVjdG9yKCcuZ2FyYWdlJykuYXBwZW5kKGxhc3RMaW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZVBhZ2VRdWFudGl0eSgpIHtcbiAgICAgICAgY29uc3QgQ0FSU19PTl9QQUdFID0gNztcbiAgICAgICAgY29uc3QgY2Fyc1F1YW50aXR5ID0gYXdhaXQgZ2V0TnVtYmVyQ2Fyc0FwaSgpO1xuICAgICAgICBjb25zdCBwYWdlc051bWJlckVsZW1lbnQgPSBmaW5kU2VsZWN0b3IoJy5wYWdlcy1udW1iZXInKTtcbiAgICAgICAgbGV0IGFjdGl2ZVBhZ2UgPSBOdW1iZXIocGFnZXNOdW1iZXJFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICAgIGNvbnN0IGNhcnNPblBhZ2VBZnRlclJlbW92ZSA9IGF3YWl0IGdldENhcnNPblBhZ2VBcGkoYWN0aXZlUGFnZSk7XG4gICAgICAgIGlmIChjYXJzT25QYWdlQWZ0ZXJSZW1vdmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlUGFnZSA+IDEpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlIC09IDE7XG4gICAgICAgICAgICAgICAgcGFnZXNOdW1iZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBhY3RpdmVQYWdlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXJzT25QYWdlQXBpKGFjdGl2ZVBhZ2UpO1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudDogQ2FyVHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJMaW5lID0gbmV3IENhckxpbmUoZWxlbWVudC5pZCkuY3JlYXRlKGVsZW1lbnQubmFtZSwgZWxlbWVudC5jb2xvciwgZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbmRTZWxlY3RvcignLmdhcmFnZScpLmFwcGVuZChjYXJMaW5lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxdWFudGl0eVBhZ2VzID0gTWF0aC5jZWlsKE51bWJlcihjYXJzUXVhbnRpdHkpIC8gQ0FSU19PTl9QQUdFKTtcbiAgICAgICAgcGFnZXNOdW1iZXJFbGVtZW50LmlubmVySFRNTCA9IGBQYWdlcyAke2FjdGl2ZVBhZ2V9LyR7cXVhbnRpdHlQYWdlc31gO1xuICAgICAgICBpZiAoYWN0aXZlUGFnZSA9PT0gcXVhbnRpdHlQYWdlcykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uTmV4dCA9IGZpbmRTZWxlY3RvcignLmJ1dHRvbk5leHQnKTtcbiAgICAgICAgICAgIGJ1dHRvbk5leHQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlUGFnZSA9PT0gdGhpcy5GSVJTVF9QQUdFKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25QcmV2ID0gZmluZFNlbGVjdG9yKCcuYnV0dG9uUHJldicpO1xuICAgICAgICAgICAgYnV0dG9uUHJldi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc3RhcnRFbmdpbmVBcGksIHN0b3BFbmdpbmUsIHN3aXRjaEVuZ2luZVRvRHJpdmUgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZmluZFNlbGVjdG9yLCBnZXREaXN0YW5jZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBDYXJCdXR0b25zIGZyb20gJy4vY2FyLWJ1dHRvbnMnO1xuaW1wb3J0IEltYWdlSXRlbXMgZnJvbSAnLi9pbWFnZS1pdGVtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhckxpbmUge1xuICAgIHByaXZhdGUgcmVxdWVzdElEOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBidXR0b25zOiBDYXJCdXR0b25zO1xuICAgIHByaXZhdGUgc3RhcnRCdXR0b246IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc3RvcEJ1dHRvbjogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBuZXcgQ2FyQnV0dG9ucygpO1xuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uID0gdGhpcy5idXR0b25zLmdldFN0YXJ0QnV0dG9uKGlkKTtcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uID0gdGhpcy5idXR0b25zLmdldFN0b3BCdXR0b24oaWQpO1xuICAgICAgICB0aGlzLnJlcXVlc3RJRCA9IDA7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGUobmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBpZDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBjYXJGaXJzdExpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2Nhci1maXJzdC1saW5lJ10pO1xuICAgICAgICBjYXJGaXJzdExpbmUuYXBwZW5kKHRoaXMuYnV0dG9ucy5nZXRTZWxlY3RCdXR0b24oaWQpLCB0aGlzLmJ1dHRvbnMuZ2V0UmVtb3ZlQnV0dG9uKGlkKSk7XG4gICAgICAgIGNhckZpcnN0TGluZS5hcHBlbmQoY3JlYXRlRWxlbWVudCgnc3BhbicsIFsnY2FyLXRpdHRsZScsIGB0aXR0bGUtaWQtJHtpZH1gXSwgbmFtZSkpO1xuICAgICAgICBjb25zdCBjYXJTZWNvbmRMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydjYXItc2Vjb25kLWxpbmUnXSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3N0YXJ0LWNvbnRhaW5lciddKTtcbiAgICAgICAgY29uc3QgaW1hZ2VDYXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbYGNhci1pbWFnZWAsIGBpbWFnZS1pZC0ke2lkfWBdKTtcbiAgICAgICAgaW1hZ2VDYXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfWApO1xuICAgICAgICBpbWFnZUNhci5pbm5lckhUTUwgPSBJbWFnZUl0ZW1zLmdldENhcihjb2xvcik7XG4gICAgICAgIHN0YXJ0UG9zaXRpb24uYXBwZW5kKHRoaXMuc3RhcnRCdXR0b24sIHRoaXMuc3RvcEJ1dHRvbiwgaW1hZ2VDYXIpO1xuICAgICAgICBjYXJTZWNvbmRMaW5lLmFwcGVuZChzdGFydFBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgaW1hZ2VGbGFnID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydmbGFnJ10pO1xuICAgICAgICBpbWFnZUZsYWcuaW5uZXJIVE1MID0gSW1hZ2VJdGVtcy5nZXRGbGFnKCk7XG4gICAgICAgIGNhclNlY29uZExpbmUuYXBwZW5kKGltYWdlRmxhZyk7XG4gICAgICAgIGNvbnN0IGNhckxpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2xpbmUnLCBpZC50b1N0cmluZygpXSk7XG4gICAgICAgIGNhckxpbmUuYXBwZW5kKGNhckZpcnN0TGluZSwgY2FyU2Vjb25kTGluZSk7XG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhclN0YXJ0ZWQoaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXJTdG9wcGVkKGlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjYXJMaW5lO1xuICAgIH1cbiAgICBwcml2YXRlIGFzeW5jIGNhclN0YXJ0ZWQoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKTtcbiAgICAgICAgY29uc3QgZGF0YVN0YXJ0ZWQgPSBhd2FpdCBzdGFydEVuZ2luZUFwaShpZCk7XG4gICAgICAgIGNvbnN0IHRpbWVGb3JBbmltYXRpb24gPSBkYXRhU3RhcnRlZC5kaXN0YW5jZSAvIGRhdGFTdGFydGVkLnZlbG9jaXR5O1xuICAgICAgICBjb25zdCBjYXJGb3JBbmltYXRpb24gPSBmaW5kU2VsZWN0b3IoYC5pbWFnZS1pZC0ke2lkfWApO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGdldERpc3RhbmNlKCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCBncm93SW5TZWM6IG51bWJlciA9IChkaXN0YW5jZSAqIDEwMDApIC8gdGltZUZvckFuaW1hdGlvbjtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXA6IG51bWJlciA9ICgoY3VycmVudFRpbWUgLSBzdGFydFRpbWUpIC8gMTAwMCkgKiBncm93SW5TZWM7XG4gICAgICAgICAgICBpZiAoc3RlcCA8IGRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgY2FyRm9yQW5pbWF0aW9uLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7c3RlcH1weClgO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SUQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVxdWVzdElEID0gYW5pbWF0aW9uKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhRHJpdmUgPSBhd2FpdCBzd2l0Y2hFbmdpbmVUb0RyaXZlKGlkKTtcbiAgICAgICAgICAgIGlmIChkYXRhRHJpdmUuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge31cbiAgICB9XG4gICAgcHVibGljIGFzeW5jIGNhclN0b3BwZWQoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKTtcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcbiAgICAgICAgY29uc3QgY2FyRm9yQW5pbWF0aW9uID0gZmluZFNlbGVjdG9yKGAuaW1hZ2UtaWQtJHtpZH1gKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SUQpO1xuICAgICAgICBjYXJGb3JBbmltYXRpb24uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMHB4KWA7XG4gICAgICAgIGF3YWl0IHN0b3BFbmdpbmUoaWQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlSXRlbXMge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG4gICAgcHVibGljIHN0YXRpYyBnZXRDYXIoY29sb3IgPSAnI2ZmZmZmZicpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTlwiXG4gICAgIFwiaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGRcIj5cbiAgICA8c3ZnIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgd2lkdGg9XCIxMjgwLjAwMDAwMHB0XCIgaGVpZ2h0PVwiNjQwLjAwMDAwMHB0XCIgdmlld0JveD1cIjAgMCAxMjgwLjAwMDAwMCA2NDAuMDAwMDAwXCJcbiAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICA8bWV0YWRhdGE+XG4gICAgQ3JlYXRlZCBieSBwb3RyYWNlIDEuMTUsIHdyaXR0ZW4gYnkgUGV0ZXIgU2VsaW5nZXIgMjAwMS0yMDE3XG4gICAgPC9tZXRhZGF0YT5cbiAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNjQwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiXG4gICAgZmlsbD0ke2NvbG9yfSBzdHJva2U9XCJub25lXCI+XG4gICAgPHBhdGggZD1cIk0zNTY1IDUzMzYgYy0xMDYgLTMwIC0xMDEgLTI2IC0xMDggLTExMSAtNCAtNDIgLTkgLTgwIC0xMiAtODUgLTZcbiAgICAtMTAgLTI0NiAtMTA1IC01OTAgLTIzNCAtNDQ4IC0xNjcgLTEwNTIgLTQxNSAtMTE3MyAtNDgzIC03OCAtNDMgLTE5MyAtOTFcbiAgICAtMjUwIC0xMDQgLTIzIC01IC05OCAtMTQgLTE2NSAtMTkgLTY3IC02IC0xNjcgLTE5IC0yMjIgLTMwIC0xNTQgLTMxIC0zNDBcbiAgICAtNDkgLTU2MyAtNTcgbC0yMDMgLTYgLTQzIC02NiBjLTU5IC05MSAtNjAgLTk1IC0yNiAtMTMwIDM3IC0zNyAzOCAtNjUgM1xuICAgIC0xNTAgLTI1IC02MiAtMjcgLTc4IC0zMSAtMjU2IGwtNCAtMTkwIC0zOCAtMzIgYy05MSAtNzggLTEzMyAtMjA5IC0xMzQgLTQxOFxuICAgIDAgLTE5NCAxMSAtMzk2IDI2IC00ODIgMTMgLTcxIDE0IC03NCA3MiAtMTIyIDY5IC01OCAxMzAgLTEyOSAxNTggLTE4NCA2NFxuICAgIC0xMjYgNTM0IC0yMTEgMTM4NCAtMjUwIGw5MiAtNCAtNiAxMTkgYy02IDE0MiA4IDI1NiA0OSAzODMgMTEyIDM1MiAzOTQgNjIyXG4gICAgNzU2IDcyMiA5MCAyNiAxMTIgMjggMjc4IDI4IDE2NSAwIDE4OCAtMiAyNzggLTI3IDIwMSAtNTYgMzYxIC0xNTIgNTA0IC0zMDJcbiAgICAxNDAgLTE0NSAyMjIgLTI5MyAyNzQgLTQ5MiAyMSAtNzkgMjQgLTEwOSAyMyAtMjc5IC0xIC0xMjcgLTYgLTIxNCAtMTYgLTI2M1xuICAgIGwtMTUgLTczIDMwMDYgNyBjMTY1MyA0IDMwMDcgOCAzMDA5IDkgMSAxIC04IDM3IC0yMCA4MSAtMTkgNjcgLTIyIDEwNSAtMjJcbiAgICAyNTkgLTEgMTY2IDEgMTg3IDI3IDI3OSAxMTcgNDIxIDQ2NyA3MzYgODg1IDc5NyAxMTkgMTcgMzI1IDcgNDMyIC0yMSAyMzlcbiAgICAtNjMgNDUzIC0yMDUgNjAxIC0zOTkgNzAgLTkyIDE1NCAtMjY3IDE4NSAtMzg2IDI0IC04OCAyNyAtMTE5IDI3IC0yNjAgMVxuICAgIC0xMTYgLTQgLTE4MSAtMTYgLTIzNCAtMTAgLTQxIC0xNiAtNzUgLTE1IC03NiAyIC0xIDYyIDIgMTMzIDYgMjY2IDE2IDQ1OCA0NVxuICAgIDUyNSA3OSA0OCAyNCA5NyA4MSAxMjcgMTQ2IGwyNCA1MiAtMTYgMTU3IGMtMTUgMTUyIC0xNSAxNjMgNCAyODQgNjMgMzg4IDUwXG4gICAgNjgwIC0zNSA4MDIgLTEzNCAxOTMgLTUyNiAzMzYgLTE0MjkgNTE5IC03MzcgMTQ5IC0xMzIyIDIwOSAtMjAzMyAyMTAgLTIyOCAwXG4gICAgLTIyNiAwIC0zNDcgODUgLTE4NyAxMzEgLTEwNDUgNjA3IC0xNDcxIDgxNSAtMzgzIDE4NyAtNzg4IDI4MSAtMTQzOSAzMzJcbiAgICAtMjA4IDE3IC0xMTA2IDE2IC0xNDAwIDAgLTEyMSAtNyAtMzE0IC0xOSAtNDMwIC0yNyAtMzAyIC0yMiAtMjg2IC0yMiAtMzQxXG4gICAgMTAgLTE0MCA4MSAtMTg3IDk0IC0yNjkgNzF6IG0xODg1IC0zMzMgYzYgLTM3IDM4IC0yMzggNzEgLTQ0NiAzMiAtMjA5IDY2XG4gICAgLTQyMiA3NSAtNDc0IDkgLTUyIDE1IC05NiAxMyAtOTcgLTExIC05IC0xNjk5IDI5IC0xOTUxIDQ0IC0yMDYgMTMgLTQxNyAzNlxuICAgIC00ODUgNTQgLTk4IDI2IC0xOTggMTE5IC0yNDkgMjMxIC0zNSA3NSAtMzYgMTcyIC01IDI1NSAxNyA0NSAzMCA2MSA2OCA4NiA4M1xuICAgIDU0IDEzNSA4MCAyNTMgMTI3IDM0MSAxMzYgODU4IDIzMCAxNDYwIDI2NyAyNjkgMTYgMjcwIDE2IDUxMSAxOCBsMjI3IDIgMTJcbiAgICAtNjd6IG02MzAgNDcgYzI2NCAtMTggNzc3IC0xMTAgMTAyOSAtMTg2IDE4NiAtNTYgNDQ1IC0xODggNzU2IC0zODcgMjExIC0xMzRcbiAgICAyNzQgLTE4MSAyNTAgLTE4NSAtNzUgLTEyIC0xMzMgLTUwIC0xNjIgLTEwNiAtMTkgLTM1IC0yMSAtMTM2IC00IC0xNzkgbDExXG4gICAgLTI3IC05MDcgMiAtOTA2IDMgLTU5IDE2MCBjLTExMCAzMDIgLTI5OCA4NzggLTI5OCA5MTYgMCA2IDk1IDIgMjkwIC0xMXpcIi8+XG4gICAgPHBhdGggZD1cIk0yNjMzIDMxMjUgYy0yMjMgLTQwIC00MTAgLTE0MSAtNTY4IC0zMDYgLTEzMiAtMTM4IC0yMTMgLTI4MyAtMjYyXG4gICAgLTQ2NyAtMjIgLTgzIC0yNiAtMTE5IC0yNiAtMjQ3IC0xIC0xNjkgMTAgLTIzNiA2NSAtMzgyIDg3IC0yMzAgMjcxIC00MzYgNDkzXG4gICAgLTU1MSA4NSAtNDQgMTc4IC03OCAyNzEgLTk4IDEwNyAtMjMgMzEyIC0yMyA0MTkgMSAzOTIgODQgNjk5IDM3NSA4MDIgNzYxIDIzXG4gICAgODYgMjYgMTIwIDI3IDI1NCAxIDE1OCAtNSAxOTkgLTQ2IDMzMCAtOTggMzEwIC0zNTUgNTY3IC02NjggNjY5IC0xNTAgNTBcbiAgICAtMzU0IDY0IC01MDcgMzZ6IG0zNTAgLTMwMSBjMjQ5IC01NiA0NTcgLTI0NyA1NDMgLTQ5OSAyNSAtNzIgMjggLTk1IDI4IC0yMjBcbiAgICAxIC0xNTMgLTE1IC0yMjggLTc0IC0zNDUgLTk0IC0xODYgLTI4MyAtMzM3IC00ODUgLTM4NiAtOTYgLTI0IC0yNjggLTI0IC0zNjBcbiAgICAwIC0zMjAgODQgLTU0NCAzNTUgLTU2MiA2ODEgLTIwIDM1OSAyMDkgNjczIDU1OCA3NjUgOTQgMjQgMjUzIDI2IDM1MiA0elwiLz5cbiAgICA8cGF0aCBkPVwiTTI2MDAgMjY5NyBjLTM2IC0xMyAtODUgLTM2IC0xMDkgLTUxIGwtNDQgLTI4IDExNiAtMTE1IGM4MSAtODIgMTIwXG4gICAgLTExNCAxMzEgLTExMCAxNCA2IDE2IDI5IDE2IDE2NyAwIDE4NiA2IDE3OCAtMTEwIDEzN3pcIi8+XG4gICAgPHBhdGggZD1cIk0yOTIwIDI1NjEgYzAgLTEzOSAyIC0xNjIgMTYgLTE2OCAxMSAtNCA1MCAyOCAxMzAgMTA4IGwxMTUgMTE0IC0yOFxuICAgIDIyIGMtMzQgMjggLTEzOCA3MCAtMTkzIDc5IGwtNDAgNyAwIC0xNjJ6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjI4MiAyNDQ4IGMtMjggLTM2IC05MiAtMTkxIC05MiAtMjI1IDAgLTEwIDM0IC0xMyAxNjUgLTEzIDE1MSAwXG4gICAgMTY1IDEgMTY1IDE4IDAgMTUgLTIwNiAyMzIgLTIyMSAyMzIgLTQgMCAtMTEgLTYgLTE3IC0xMnpcIi8+XG4gICAgPHBhdGggZD1cIk0zMjIyIDIzNTEgYy02MiAtNTkgLTExMiAtMTE1IC0xMTIgLTEyNCAwIC0xNSAxNyAtMTcgMTY1IC0xNyAxMzEgMFxuICAgIDE2NSAzIDE2NSAxMyAwIDQwIC02OSAyMDUgLTk1IDIyNyAtNyA2IC00OCAtMjcgLTEyMyAtOTl6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjc4MSAyMzMyIGMtMTIgLTIyIDExIC02MiAzNCAtNjIgOCAwIDIxIDEwIDI5IDIyIDIwIDI4IDQgNTggLTI5XG4gICAgNTggLTEzIDAgLTI5IC04IC0zNCAtMTh6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjc0OSAyMTYxIGMtMzIgLTMzIC0zNyAtNjcgLTE0IC0xMTAgMjkgLTU3IDEwNCAtNjQgMTUxIC0xNCA1MyA1N1xuICAgIDkgMTUzIC03MSAxNTMgLTI3IDAgLTQ0IC04IC02NiAtMjl6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjU3MCAyMTI1IGMtMjYgLTMyIDEzIC04MSA0OCAtNTkgMjQgMTYgMjcgNDUgNiA2MSAtMjMgMTcgLTM5IDE2XG4gICAgLTU0IC0yelwiLz5cbiAgICA8cGF0aCBkPVwiTTMwMDYgMjEyNCBjLTIwIC0xOSAtMjAgLTM4IC0yIC01NCAyMyAtMTkgNjEgLTggNjQgMTggNyA0NCAtMzIgNjdcbiAgICAtNjIgMzZ6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjE5MCAxOTc1IGMwIC0yOSA0MSAtMTQwIDcyIC0xOTQgbDMxIC01MyAxMTcgMTE3IGM3MSA3MSAxMTYgMTIzXG4gICAgMTEzIDEzMSAtNCAxMSAtNDAgMTQgLTE2OSAxNCAtMTQxIDAgLTE2NCAtMiAtMTY0IC0xNXpcIi8+XG4gICAgPHBhdGggZD1cIk0zMTEwIDE5NzIgYzAgLTkgNTEgLTY4IDExNCAtMTMxIGwxMTQgLTExNCAzMSA1NCBjMzAgNTEgNzEgMTY1IDcxXG4gICAgMTk1IDAgMTEgLTMxIDE0IC0xNjUgMTQgLTE1MSAwIC0xNjUgLTEgLTE2NSAtMTh6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjc4MCAxOTAxIGMtNyAtMTUgLTUgLTI0IDggLTQxIDMyIC00MCA4NSAtNCA2MiA0MSAtMTQgMjUgLTU2IDI1XG4gICAgLTcwIDB6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjU2MiAxNjk3IGMtNjEgLTYyIC0xMTIgLTExNSAtMTEyIC0xMTkgMCAtMTggMjA4IC0xMDggMjQ5IC0xMDggN1xuICAgIDAgMTEgNTQgMTEgMTY0IDAgMTQwIC0yIDE2NSAtMTYgMTcwIC05IDMgLTE2IDYgLTE3IDYgLTEgMCAtNTMgLTUxIC0xMTUgLTExM3pcIi8+XG4gICAgPHBhdGggZD1cIk0yOTMzIDE4MDMgYy0xNSAtNiAtMTkgLTMzMyAtNCAtMzMzIDQ2IDAgMjUxIDg4IDI1MSAxMDggMCA5IC0yMjNcbiAgICAyMzIgLTIzMCAyMzEgLTMgMCAtMTEgLTMgLTE3IC02elwiLz5cbiAgICA8cGF0aCBkPVwiTTEwNzAwIDMxMTkgYy0zOTAgLTg0IC02OTYgLTM3NiAtNzk3IC03NTkgLTMxIC0xMTcgLTQxIC0yOTIgLTI0XG4gICAgLTQxMSAzMyAtMjI3IDE1MCAtNDUzIDMxOCAtNjA5IDI2NyAtMjUwIDY0MyAtMzQ0IDk5MyAtMjQ5IDExNyAzMiAyODMgMTE4XG4gICAgMzgwIDE5NiA0ODcgMzk2IDUxOCAxMTI4IDY3IDE1NjAgLTk3IDkzIC0xNjYgMTQwIC0yOTAgMTk4IC0xMzcgNjQgLTIzNSA4NlxuICAgIC00MDcgOTEgLTEyMCAzIC0xNjIgMCAtMjQwIC0xN3ogbTQ0NSAtMzEzIGMyMzggLTgxIDQwOSAtMjU4IDQ4NiAtNTA2IDMwIC05NlxuICAgIDMzIC0yODkgNSAtMzg4IC0xMTAgLTQwMCAtNTEzIC02MzcgLTkxMSAtNTM2IC0xNDkgMzggLTMxMyAxNDcgLTQwMiAyNjcgLTE3NlxuICAgIDIzOCAtMjAzIDUzMyAtNzEgNzk3IDM0IDY5IDYwIDEwMyAxMzggMTgwIDc3IDc4IDExMSAxMDQgMTgxIDEzOSAxMjkgNjUgMjA3XG4gICAgODEgMzY0IDc3IDEwOSAtMyAxNDMgLTcgMjEwIC0zMHpcIi8+XG4gICAgPHBhdGggZD1cIk0xMDcwMyAyNzAwIGMtNTQgLTE5IC0xNTMgLTcxIC0xNTMgLTgwIDAgLTMgNTEgLTU3IDExNCAtMTE5IDgwIC04MFxuICAgIDExOSAtMTEyIDEzMCAtMTA4IDE0IDUgMTYgMjkgMTYgMTY3IGwwIDE2MCAtMjcgLTEgYy0xNiAwIC01MiAtOSAtODAgLTE5elwiLz5cbiAgICA8cGF0aCBkPVwiTTExMDIwIDI1NjEgYzAgLTEzOSAyIC0xNjIgMTYgLTE2OCAyMiAtOCAyNDcgMjE2IDIzNCAyMzIgLTE3IDIwXG4gICAgLTE2MyA4NCAtMjA3IDkxIGwtNDMgNyAwIC0xNjJ6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTAzNjYgMjQyNCBjLTI5IC00NCAtNzYgLTE2NSAtNzYgLTE5NCAwIC0xOSA3IC0yMCAxNjUgLTIwIDEyNiAwXG4gICAgMTY1IDMgMTY1IDEzIDAgNyAtNTEgNjMgLTExNCAxMjYgbC0xMTQgMTE0IC0yNiAtMzl6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTEzMTMgMjM0OCBjLTYxIC02MiAtMTA5IC0xMTkgLTEwNiAtMTI1IDYgLTE1IDMzMyAtMTkgMzMzIC00IDAgNDVcbiAgICAtODggMjQxIC0xMDggMjQxIC00IDAgLTU3IC01MSAtMTE5IC0xMTJ6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTA4ODIgMjMzOCBjLTE3IC0xNyAtMTUgLTMyIDcgLTUyIDE2IC0xNCAyMyAtMTUgNDEgLTYgMzEgMTcgMjQgNjRcbiAgICAtMTAgNjggLTE0IDIgLTMxIC0zIC0zOCAtMTB6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTA4NDYgMjE1OSBjLTY4IC04MSAxNyAtMTk0IDExMCAtMTQ0IDg5IDQ4IDU2IDE3NSAtNDYgMTc1IC0zMCAwXG4gICAgLTQ0IC02IC02NCAtMzF6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTA2NzAgMjEyNiBjLTE5IC0yMyAtOCAtNjEgMTggLTY0IDQ0IC03IDY3IDMyIDM2IDYyIC0xOSAyMCAtMzggMjBcbiAgICAtNTQgMnpcIi8+XG4gICAgPHBhdGggZD1cIk0xMTEwNiAyMTI3IGMtMjEgLTE2IC0xOCAtNDUgNyAtNjEgMzcgLTIzIDc3IDM1IDQxIDYxIC0xMCA3IC0yMSAxM1xuICAgIC0yNCAxMyAtMyAwIC0xNCAtNiAtMjQgLTEzelwiLz5cbiAgICA8cGF0aCBkPVwiTTEwMjkwIDE5NzAgYzAgLTI5IDQzIC0xNDEgNzQgLTE5NSBsMjggLTQ4IDExNiAxMTYgYzgxIDgxIDExMyAxMjBcbiAgICAxMDkgMTMxIC02IDE0IC0yOSAxNiAtMTY3IDE2IC0xNTIgMCAtMTYwIC0xIC0xNjAgLTIwelwiLz5cbiAgICA8cGF0aCBkPVwiTTExMjA3IDE5NzggYy0zIC03IDQ3IC02NiAxMTEgLTEzMCBsMTE2IC0xMTggMjcgNDMgYzI3IDQ0IDc5IDE3N1xuICAgIDc5IDIwMyAwIDEyIC0yOCAxNCAtMTY0IDE0IC0xMjIgMCAtMTY2IC0zIC0xNjkgLTEyelwiLz5cbiAgICA8cGF0aCBkPVwiTTEwODgxIDE5MDEgYy0xNCAtMjUgLTUgLTQ4IDIwIC01NiAyNyAtOSA1MSAxMyA0NyA0NCAtNCAzNCAtNTEgNDNcbiAgICAtNjcgMTJ6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTA2NjIgMTY5NyBjLTYxIC02MiAtMTEyIC0xMTUgLTExMiAtMTE5IDAgLTIwIDIwMSAtMTA4IDI0NyAtMTA4XG4gICAgMTAgMCAxMyAzNCAxMyAxNjQgMCAxNDAgLTIgMTY1IC0xNiAxNzAgLTkgMyAtMTYgNiAtMTcgNiAtMSAwIC01MyAtNTEgLTExNVxuICAgIC0xMTN6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTEwMzMgMTgwMyBjLTEwIC0zIC0xMyAtNDcgLTEzIC0xNjkgMCAtOTAgNCAtMTY0IDggLTE2NCAzNiAwIDE4NlxuICAgIDYxIDIzOSA5OCAxNiAxMCAtMjE2IDI0MiAtMjM0IDIzNXpcIi8+XG4gICAgPC9nPlxuICAgIDwvc3ZnPlxuICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRGbGFnKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgPHN2ZyBmaWxsPSdyZWQnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIzZW1cIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk02NCAzMkM2NCAxNC4zIDQ5LjcgMCAzMiAwUzAgMTQuMyAwIDMyVjY0IDM2OCA0ODBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMlYzNTJsNjQuMy0xNi4xYzQxLjEtMTAuMyA4NC42LTUuNSAxMjIuNSAxMy40YzQ0LjIgMjIuMSA5NS41IDI0LjggMTQxLjcgNy40bDM0LjctMTNjMTIuNS00LjcgMjAuOC0xNi42IDIwLjgtMzBWNjYuMWMwLTIzLTI0LjItMzgtNDQuOC0yNy43bC05LjYgNC44Yy00Ni4zIDIzLjItMTAwLjggMjMuMi0xNDcuMSAwYy0zNS4xLTE3LjYtNzUuNC0yMi0xMTMuNS0xMi41TDY0IDQ4VjMyelwiLz48L3N2Zz5gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVJbnB1dEVsZW1lbnQsXG4gICAgY3JlYXRlTW9kYWxUZXh0LFxuICAgIGZpbmRTZWxlY3RvcixcbiAgICBnZXRBdHRyaWJ1dGUsXG4gICAgZ2V0RGlzdGFuY2UsXG4gICAgZ2V0UmFuZG9tQ29sb3IsXG4gICAgZ2V0UmFuZG9tTnVtYmVyLFxuICAgIHJlbW92ZU1vZGFsVGV4dCxcbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgQ2FyVHlwZSB9IGZyb20gJy4uL3V0aWxzL2Jhc2UnO1xuaW1wb3J0IENhckxpbmUgZnJvbSAnLi9jYXItdmlldy9jYXItbGluZSc7XG5pbXBvcnQge1xuICAgIGNyZWF0ZUNhckFwaSxcbiAgICBjcmVhdGVXaW5uZXJBcGksXG4gICAgZ2V0Q2FyQXBpLFxuICAgIGdldENhcnNPblBhZ2VBcGksXG4gICAgZ2V0TnVtYmVyQ2Fyc0FwaSxcbiAgICBnZXRXaW5uZXJBcGksXG4gICAgc3RhcnRFbmdpbmVBcGksXG4gICAgc3RvcEVuZ2luZSxcbiAgICBzd2l0Y2hFbmdpbmVUb0RyaXZlLFxuICAgIHVwZGF0ZUNhckFwaSxcbiAgICB1cGRhdGVXaW5uZXJBcGksXG59IGZyb20gJy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgSW1hZ2VJdGVtcyBmcm9tICcuL2Nhci12aWV3L2ltYWdlLWl0ZW1zJztcbmltcG9ydCBDYXJMaXN0IGZyb20gJy4uL3V0aWxzL2Nhci1saXN0JztcbmltcG9ydCBXaW5uZXJzVmlldyBmcm9tICcuL3dpbm5lcnMtdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhcmFnZVZpZXcge1xuICAgIHByaXZhdGUgdXBkYXRlQnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaW5wdXRUZXh0Q3JlYXRlOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaW5wdXRUZXh0VXBkYXRlOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgZ2FyYWdlOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIG51bWJlckNhcnNJbkdhcmFnZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBudW1iZXJQYWdlc0luR2FyYWdlOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGlucHV0Q29sb3JDcmVhdGU6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpbnB1dENvbG9yVXBkYXRlOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYnV0dG9uUHJldjogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJ1dHRvbk5leHQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBGSVJTVF9QQUdFID0gMTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IENBUlNfT05fUEFHRSA9IDc7XG4gICAgcHJpdmF0ZSBhY3RpdmVQYWdlID0gMTtcbiAgICBwcml2YXRlIHF1YW50aXR5UGFnZXM6IG51bWJlcjtcbiAgICBwcml2YXRlIGV2ZW50OiBFdmVudDtcbiAgICBwcml2YXRlIG51bWJlckZvckZpcnN0V2lubmVyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBOVU1CRVJfRk9SX1JFU0VUOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IEZJUlNUX1dJTjogbnVtYmVyID0gMTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b24gPSBjcmVhdGVJbnB1dEVsZW1lbnQoWydidXR0b25VcGRhdGUnXSwgJ2J1dHRvbicsICdVcGRhdGUnKTtcbiAgICAgICAgdGhpcy5pbnB1dFRleHRDcmVhdGUgPSBjcmVhdGVJbnB1dEVsZW1lbnQoWydjcmVhdGVUZXh0J10sICd0ZXh0Jyk7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0VXBkYXRlID0gY3JlYXRlSW5wdXRFbGVtZW50KFsndXBkYXRlVGV4dCddLCAndGV4dCcpO1xuICAgICAgICB0aGlzLmdhcmFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZ2FyYWdlJ10pO1xuICAgICAgICB0aGlzLm51bWJlckNhcnNJbkdhcmFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY2Fycy1udW1iZXInXSk7XG4gICAgICAgIHRoaXMubnVtYmVyUGFnZXNJbkdhcmFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsncGFnZXMtbnVtYmVyJ10pO1xuICAgICAgICB0aGlzLmlucHV0Q29sb3JDcmVhdGUgPSBjcmVhdGVJbnB1dEVsZW1lbnQoWydjcmVhdGVDb2xvciddLCAnY29sb3InLCAnI2ZmZmZmZicpO1xuICAgICAgICB0aGlzLmlucHV0Q29sb3JVcGRhdGUgPSBjcmVhdGVJbnB1dEVsZW1lbnQoWyd1cGRhdGVDb2xvciddLCAnY29sb3InLCAnI2ZmZmZmZicpO1xuICAgICAgICB0aGlzLmJ1dHRvblByZXYgPSBjcmVhdGVJbnB1dEVsZW1lbnQoWydwcmV2JywgJ2J1dHRvblByZXYnLCAnZGlzYWJsZWQnXSwgJ2J1dHRvbicsICdQcmV2Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dCA9IGNyZWF0ZUlucHV0RWxlbWVudChbJ25leHQnLCAnYnV0dG9uTmV4dCcsICdkaXNhYmxlZCddLCAnYnV0dG9uJywgJ05leHQnKTtcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBFdmVudCgnY2xpY2snKTtcbiAgICAgICAgdGhpcy5xdWFudGl0eVBhZ2VzID0gMTtcbiAgICAgICAgdGhpcy5udW1iZXJGb3JGaXJzdFdpbm5lciA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZ2FyYWdlLWNvbnRhaW5lciddKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLmNyZWF0ZUNvbnRyb2xzKCksIHRoaXMuY3JlYXRlR2FyYWdlKCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUNvbnRyb2xzKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2NvbnRyb2xzJ10pO1xuICAgICAgICBjb25zdCBjcmVhdGVMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydjcmVhdGUtbGluZSddKTtcbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYScsIFsnYnV0dG9uQ3JlYXRlJ10sICdDcmVhdGUnKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jcmVhdGVOZXdDYXIoKSk7XG4gICAgICAgIGNyZWF0ZUxpbmUuYXBwZW5kKHRoaXMuaW5wdXRUZXh0Q3JlYXRlLCB0aGlzLmlucHV0Q29sb3JDcmVhdGUsIGNyZWF0ZUJ1dHRvbik7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0VXBkYXRlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICBjb25zdCB1cGRhdGVMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWyd1cGRhdGUtbGluZSddKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudXBkYXRlQ2FyKCkpO1xuICAgICAgICB1cGRhdGVMaW5lLmFwcGVuZCh0aGlzLmlucHV0VGV4dFVwZGF0ZSwgdGhpcy5pbnB1dENvbG9yVXBkYXRlLCB0aGlzLnVwZGF0ZUJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGNvbW1vbkxpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2NvbW1vbi1saW5lJ10pO1xuICAgICAgICBjb25zdCByYWNlQnV0dG9uOiBIVE1MRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ3JhY2UtYnV0dG9uJ10sICdSYWNlJyk7XG4gICAgICAgIHJhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJhY2UoKSk7XG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uOiBIVE1MRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ3Jlc2V0LWJ1dHRvbiddLCAnUmVzZXQnKTtcbiAgICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlc2V0KCkpO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ2dlbmVyYXRlLWJ1dHRvbiddLCAnR2VuZXJhdGUgQ2FycycpO1xuICAgICAgICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ2VuZXJhdGUoKSk7XG4gICAgICAgIGNvbW1vbkxpbmUuYXBwZW5kKHJhY2VCdXR0b24sIHJlc2V0QnV0dG9uLCBnZW5lcmF0ZUJ1dHRvbik7XG4gICAgICAgIGNvbnRyb2xzLmFwcGVuZChjcmVhdGVMaW5lLCB1cGRhdGVMaW5lLCBjb21tb25MaW5lKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlR2FyYWdlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgZ2FyYWdlRGVzY3JpcHRpb246IEhUTUxFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydnYXJhZ2UtZGVzY3JpcHRpb24nXSk7XG4gICAgICAgIHRoaXMubnVtYmVyUGFnZXNJbkdhcmFnZS5pZCA9IHRoaXMuYWN0aXZlUGFnZS50b1N0cmluZygpO1xuICAgICAgICBnYXJhZ2VEZXNjcmlwdGlvbi5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLm51bWJlckNhcnNJbkdhcmFnZSxcbiAgICAgICAgICAgIHRoaXMubnVtYmVyUGFnZXNJbkdhcmFnZSxcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlc0NvbnRyb2xzKClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRRdWFudGl0eUNhcnMoKTtcbiAgICAgICAgdGhpcy5jYXJzVmlld0luR2FyYWdlT25QYWdlKHRoaXMuRklSU1RfUEFHRSk7XG4gICAgICAgIHJldHVybiBnYXJhZ2VEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVBhZ2VzQ29udHJvbHMoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydwYWdlLWNvbnRyb2xzJ10pO1xuICAgICAgICB0aGlzLmJ1dHRvblByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5QcmV2UGFnZSgpKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuTmV4dFBhZ2UoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5idXR0b25QcmV2LCB0aGlzLmJ1dHRvbk5leHQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlTmV3Q2FyKCkge1xuICAgICAgICB0aGlzLmFkZENyZWF0ZWRDYXIoKTtcbiAgICAgICAgdGhpcy5zZXRRdWFudGl0eUNhcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZUNhcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHRVcGRhdGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5lJykuZm9yRWFjaCgobGluZSkgPT4gbGluZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIucGFyc2VJbnQoZ2V0QXR0cmlidXRlKHRoaXMudXBkYXRlQnV0dG9uLCAnaWQnKSk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmlucHV0VGV4dFVwZGF0ZS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmlucHV0Q29sb3JVcGRhdGUudmFsdWU7XG4gICAgICAgIGNvbnN0IHBhcmFtID0geyBuYW1lLCBjb2xvciwgaWQgfTtcbiAgICAgICAgYXdhaXQgdXBkYXRlQ2FyQXBpKHBhcmFtKTtcbiAgICAgICAgY29uc3QgaW1hZ2VVcGRhdGVDYXIgPSBmaW5kU2VsZWN0b3IoYC5pbWFnZS1pZC0ke2lkfWApO1xuICAgICAgICBpbWFnZVVwZGF0ZUNhci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaW1hZ2VVcGRhdGVDYXIuaW5uZXJIVE1MID0gSW1hZ2VJdGVtcy5nZXRDYXIoY29sb3IpO1xuICAgICAgICBmaW5kU2VsZWN0b3IoYC50aXR0bGUtaWQtJHtpZH1gKS5pbm5lckhUTUwgPSBuYW1lO1xuICAgICAgICB0aGlzLmlucHV0VGV4dFVwZGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYWNlKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMubnVtYmVyRm9yRmlyc3RXaW5uZXIgPSAwO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGdldERpc3RhbmNlKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLWltYWdlJykuZm9yRWFjaChhc3luYyAoY2FyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoY2FyLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVN0YXJ0ZWQgPSBhd2FpdCBzdGFydEVuZ2luZUFwaShpZCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZUZvckFuaW1hdGlvbiA9IGRhdGFTdGFydGVkLmRpc3RhbmNlIC8gZGF0YVN0YXJ0ZWQudmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3Jvd0luU2VjOiBudW1iZXIgPSAoZGlzdGFuY2UgKiAxMDAwKSAvIHRpbWVGb3JBbmltYXRpb247XG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3RJRCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwOiBudW1iZXIgPSAoKGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDApICogZ3Jvd0luU2VjO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgc3RlcCA8IGRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtzdGVwfXB4KWA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhci5zZXRBdHRyaWJ1dGUoJ3JlcXVlc3RJRCcsIHJlcXVlc3RJRC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YURyaXZlID0gYXdhaXQgc3dpdGNoRW5naW5lVG9Ecml2ZShpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFEcml2ZS5zdGF0dXMgPT09IDUwMCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YURyaXZlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyRm9yRmlyc3RXaW5uZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubnVtYmVyRm9yRmlyc3RXaW5uZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFXaW5uZXIgPSBhd2FpdCBnZXRXaW5uZXJBcGkoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IE51bWJlcigodGltZUZvckFuaW1hdGlvbiAvIDEwMDApLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyV2lubmVyID0gYXdhaXQgZ2V0Q2FyQXBpKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU1vZGFsVGV4dChgV2lubmVyOiAke2Nhcldpbm5lci5uYW1lfSwgdGltZTogJHt0aW1lfXNlY2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhZGF0YVdpbm5lci53aW5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVXaW5uZXIoaWQsIHRpbWUsIGRhdGFXaW5uZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGF3YWl0IGNyZWF0ZVdpbm5lckFwaSh7IGlkLCB3aW5zOiB0aGlzLkZJUlNUX1dJTiwgdGltZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlV2lubmVyc1ZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIHt9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5udW1iZXJGb3JGaXJzdFdpbm5lciA9IHRoaXMuTlVNQkVSX0ZPUl9SRVNFVDtcbiAgICAgICAgY3JlYXRlTW9kYWxUZXh0KCk7XG4gICAgICAgIHJlbW92ZU1vZGFsVGV4dCgpO1xuICAgICAgICBjb25zdCBjYXJzRm9yQW5pbWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1pbWFnZScpO1xuICAgICAgICBjYXJzRm9yQW5pbWF0aW9uLmZvckVhY2goYXN5bmMgKGNhcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoY2FyLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SUQgPSBOdW1iZXIoY2FyLmdldEF0dHJpYnV0ZSgncmVxdWVzdElEJykpO1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcbiAgICAgICAgICAgIGF3YWl0IHN0b3BFbmdpbmUoaWQpO1xuICAgICAgICAgICAgaWYgKGNhciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSBjYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMHB4KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIGdlbmVyYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBNQVhfUVVBTlRJVFlfQ0FSU19PTl9QQUdFID0gNztcbiAgICAgICAgdGhpcy5hZGRDYXJzVG9CYXNlKHRoaXMuZ2VuZXJhdGVMaXN0Q2FycygpKTtcbiAgICAgICAgdGhpcy5zZXRRdWFudGl0eUNhcnMoKTtcbiAgICAgICAgY29uc3QgY2Fyc09uUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5lJykubGVuZ3RoO1xuICAgICAgICBpZiAoY2Fyc09uUGFnZSA8IE1BWF9RVUFOVElUWV9DQVJTX09OX1BBR0UpIHRoaXMuYWRkQ2Fyc09uUGFnZShjYXJzT25QYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNldFF1YW50aXR5Q2FycygpIHtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBhd2FpdCBnZXROdW1iZXJDYXJzQXBpKCk7XG4gICAgICAgIHRoaXMubnVtYmVyQ2Fyc0luR2FyYWdlLmlubmVySFRNTCA9IGBHYXJhZ2UoJHtxdWFudGl0eX0pYDtcbiAgICAgICAgdGhpcy5udW1iZXJDYXJzSW5HYXJhZ2UuaWQgPSBgJHtxdWFudGl0eX1gO1xuICAgICAgICB0aGlzLnF1YW50aXR5UGFnZXMgPSBNYXRoLmNlaWwoTnVtYmVyKHF1YW50aXR5KSAvIHRoaXMuQ0FSU19PTl9QQUdFKTtcbiAgICAgICAgdGhpcy5udW1iZXJQYWdlc0luR2FyYWdlLmlubmVySFRNTCA9IGBQYWdlICR7dGhpcy5hY3RpdmVQYWdlfS8ke3RoaXMucXVhbnRpdHlQYWdlc31gO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2VCdXR0b25zKHRoaXMuYWN0aXZlUGFnZSwgdGhpcy5xdWFudGl0eVBhZ2VzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhc3luYyBjYXJzVmlld0luR2FyYWdlT25QYWdlKHBhZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLmdhcmFnZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENhcnNPblBhZ2VBcGkocGFnZSk7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudDogQ2FyVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyTGluZSA9IG5ldyBDYXJMaW5lKGVsZW1lbnQuaWQpLmNyZWF0ZShlbGVtZW50Lm5hbWUsIGVsZW1lbnQuY29sb3IsIGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgdGhpcy5nYXJhZ2UuYXBwZW5kKGNhckxpbmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGFkZENyZWF0ZWRDYXIoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjcmVhdGVDYXJBcGkoeyBuYW1lOiB0aGlzLmlucHV0VGV4dENyZWF0ZS52YWx1ZSwgY29sb3I6IHRoaXMuaW5wdXRDb2xvckNyZWF0ZS52YWx1ZSB9KTtcbiAgICAgICAgY29uc3QgY2Fyc09uUGFnZUJlZm9yZUFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5lJykubGVuZ3RoO1xuICAgICAgICBpZiAoY2Fyc09uUGFnZUJlZm9yZUFkZGluZyA8IDcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhckxpbmUgPSBuZXcgQ2FyTGluZShkYXRhLmlkKS5jcmVhdGUoZGF0YS5uYW1lLCBkYXRhLmNvbG9yLCBkYXRhLmlkKTtcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlLmFwcGVuZChjYXJMaW5lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0QWN0aXZlUGFnZUJ1dHRvbnMocGFnZUFjdGl2ZTogbnVtYmVyLCBwYWdlc1F1YW50aXR5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2VBY3RpdmUgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByZXYuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWdlc1F1YW50aXR5ID4gcGFnZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25OZXh0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbk5leHQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb3Blbk5leHRQYWdlKCkge1xuICAgICAgICBjb25zdCBxdWFudGl0eSA9IHRoaXMubnVtYmVyQ2Fyc0luR2FyYWdlLmlkO1xuICAgICAgICB0aGlzLnF1YW50aXR5UGFnZXMgPSBNYXRoLmNlaWwoTnVtYmVyKHF1YW50aXR5KSAvIHRoaXMuQ0FSU19PTl9QQUdFKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGFnZSA8IHRoaXMucXVhbnRpdHlQYWdlcykge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlICs9IDE7XG4gICAgICAgICAgICB0aGlzLm51bWJlclBhZ2VzSW5HYXJhZ2UuaW5uZXJIVE1MID0gYFBhZ2UgJHt0aGlzLmFjdGl2ZVBhZ2V9LyR7dGhpcy5xdWFudGl0eVBhZ2VzfWA7XG4gICAgICAgICAgICB0aGlzLm51bWJlclBhZ2VzSW5HYXJhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuYWN0aXZlUGFnZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMuY2Fyc1ZpZXdJbkdhcmFnZU9uUGFnZSh0aGlzLmFjdGl2ZVBhZ2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uUHJldi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHRoaXMuYnV0dG9uUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGFnZSA9PT0gdGhpcy5xdWFudGl0eVBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25OZXh0LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9wZW5QcmV2UGFnZSgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gTnVtYmVyKHRoaXMubnVtYmVyUGFnZXNJbkdhcmFnZS5pZCk7XG4gICAgICAgIHRoaXMucXVhbnRpdHlQYWdlcyA9IE1hdGguY2VpbChOdW1iZXIodGhpcy5udW1iZXJDYXJzSW5HYXJhZ2UuaWQpIC8gdGhpcy5DQVJTX09OX1BBR0UpO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVQYWdlID4gdGhpcy5GSVJTVF9QQUdFKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBhZ2UgLT0gMTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyUGFnZXNJbkdhcmFnZS5pbm5lckhUTUwgPSBgUGFnZSAke3RoaXMuYWN0aXZlUGFnZX0vJHt0aGlzLnF1YW50aXR5UGFnZXN9YDtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyUGFnZXNJbkdhcmFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5hY3RpdmVQYWdlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5jYXJzVmlld0luR2FyYWdlT25QYWdlKHRoaXMuYWN0aXZlUGFnZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQYWdlID09PSB0aGlzLkZJUlNUX1BBR0UpIHRoaXMuYnV0dG9uUHJldi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uTmV4dC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHRoaXMuYnV0dG9uTmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2VuZXJhdGVMaXN0Q2FycygpOiB7IG5hbWU6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W10ge1xuICAgICAgICBjb25zdCBOVU1CRVJfQ0FSU19GT1JfR0VORVJBVEUgPSAxMDA7XG4gICAgICAgIGNvbnN0IE5VTUJFUl9CUkFORFMgPSBDYXJMaXN0Lmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIEFycmF5KE5VTUJFUl9DQVJTX0ZPUl9HRU5FUkFURSlcbiAgICAgICAgICAgIC5maWxsKG51bGwpXG4gICAgICAgICAgICAubWFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21CcmFuZE51bWJlciA9IGdldFJhbmRvbU51bWJlcihOVU1CRVJfQlJBTkRTKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Nb2RlbE51bWJlciA9IGdldFJhbmRvbU51bWJlcihDYXJMaXN0W3JhbmRvbUJyYW5kTnVtYmVyXS5tb2RlbHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgJHtDYXJMaXN0W3JhbmRvbUJyYW5kTnVtYmVyXS5icmFuZH0gJHtDYXJMaXN0W3JhbmRvbUJyYW5kTnVtYmVyXS5tb2RlbHNbcmFuZG9tTW9kZWxOdW1iZXJdfWAsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBnZXRSYW5kb21Db2xvcigpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRDYXJzVG9CYXNlKHBhcmFtczogeyBuYW1lOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfVtdKSB7XG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKChpdGVtKSA9PiBjcmVhdGVDYXJBcGkoaXRlbSkpO1xuICAgIH1cbiAgICBwcml2YXRlIGFzeW5jIGFkZENhcnNPblBhZ2Uoc3RhcnRJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXJzT25QYWdlQXBpKHRoaXMuYWN0aXZlUGFnZSk7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudDogQ2FyVHlwZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJMaW5lID0gbmV3IENhckxpbmUoZWxlbWVudC5pZCkuY3JlYXRlKGVsZW1lbnQubmFtZSwgZWxlbWVudC5jb2xvciwgZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYXJhZ2UuYXBwZW5kKGNhckxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVXaW5uZXIoaWQ6IG51bWJlciwgdGltZTogbnVtYmVyLCBkYXRhRm9yVXBkYXRlOiB7IHdpbnM6IG51bWJlcjsgdGltZTogbnVtYmVyIH0pIHtcbiAgICAgICAgY29uc3Qgd2lucyA9IGRhdGFGb3JVcGRhdGUud2lucyArIDE7XG4gICAgICAgIHRpbWUgPSBNYXRoLm1pbih0aW1lLCBkYXRhRm9yVXBkYXRlLnRpbWUpO1xuICAgICAgICBhd2FpdCB1cGRhdGVXaW5uZXJBcGkoeyBpZCwgd2lucywgdGltZSB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVXaW5uZXJzVmlldygpIHtcbiAgICAgICAgV2lubmVyc1ZpZXcuZ2V0SW5zdGFuY2UoKS5kcmF3VGFibGVCb2R5KCk7XG4gICAgICAgIFdpbm5lcnNWaWV3LmdldEluc3RhbmNlKCkuc2V0V2lubmVyc0Rlc2NyaXB0aW9uKCk7XG4gICAgICAgIFdpbm5lcnNWaWV3LmdldEluc3RhbmNlKCkudXBkYXRlQ29udHJvbEJ1dHRvbnMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyB7XG4gICAgcHJpdmF0ZSBtYWluOiBIVE1MRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSk7XG4gICAgcHVibGljIGNyZWF0ZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm1haW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbnRlbnQoY29udGVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSB0aGlzLm1haW47XG4gICAgICAgIHdoaWxlIChodG1sRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgaHRtbEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBnZXRDYXJBcGksIGdldE51bWJlcldpbm5lcnNBcGksIHNvcnRUYWJsZSB9IGZyb20gJy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyBMaW5lV2lubmVyc1R5cGUsIFNvcnRUYWJsZVR5cGUsIFdpbm5lclR5cGUgfSBmcm9tICcuLi91dGlscy9iYXNlJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUlucHV0RWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBJbWFnZUl0ZW1zIGZyb20gJy4vY2FyLXZpZXcvaW1hZ2UtaXRlbXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5uZXJzVmlldyB7XG4gICAgcHVibGljIHRhYmxlOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IEZJUlNUX1BBR0UgPSAxO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgV0lOTkVSU19PTl9QQUdFID0gMTA7XG4gICAgcHJpdmF0ZSBidXR0b25QcmV2OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgYnV0dG9uTmV4dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHdpbm5lcnNRdWFudGl0eTogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhY3RpdmVQYWdlOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIG51bWJlck9mQWN0aXZlUGFnZTogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZUJvZHk6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBXaW5uZXJzVmlldztcbiAgICBwcml2YXRlIGJ1dHRvbldpbnM6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgYnV0dG9uQmVzdFRpbWU6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgbnVtYmVyQ2xpY2tzV2lucyA9IDA7XG4gICAgcHJpdmF0ZSBudW1iZXJDbGlja3NUaW1lID0gMDtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFibGUgPSBjcmVhdGVFbGVtZW50KCd0YWJsZScsIFsndGFibGUnXSk7XG4gICAgICAgIHRoaXMud2lubmVyc1F1YW50aXR5ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWyd3aW5uZXJzLXF1YW50aXR5J10pO1xuICAgICAgICB0aGlzLmFjdGl2ZVBhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3BhZ2VzLXF1YW50aXR5J10pO1xuICAgICAgICB0aGlzLmJ1dHRvblByZXYgPSBjcmVhdGVJbnB1dEVsZW1lbnQoWydwcmV2JywgJ2J1dHRvblByZXYnXSwgJ2J1dHRvbicsICdQcmV2Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dCA9IGNyZWF0ZUlucHV0RWxlbWVudChbJ25leHQnLCAnYnV0dG9uTmV4dCddLCAnYnV0dG9uJywgJ05leHQnKTtcbiAgICAgICAgdGhpcy50YWJsZUJvZHkgPSBjcmVhdGVFbGVtZW50KCd0Ym9keScsIFsndGJvZHknXSk7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZBY3RpdmVQYWdlID0gdGhpcy5GSVJTVF9QQUdFO1xuICAgICAgICB0aGlzLmJ1dHRvbldpbnMgPSBjcmVhdGVFbGVtZW50KCd0aCcsIFsnYnV0dG9uLXdpbnMnXSwgJ1dpbnMgJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQmVzdFRpbWUgPSBjcmVhdGVFbGVtZW50KCd0aCcsIFsnYnV0dG9uLXRpbWUnXSwgJ0Jlc3QgdGltZSAoc2VjKSAnKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFXaW5uZXJzVmlldy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgV2lubmVyc1ZpZXcuaW5zdGFuY2UgPSBuZXcgV2lubmVyc1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gV2lubmVyc1ZpZXcuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHRoaXMuc2V0V2lubmVyc0Rlc2NyaXB0aW9uKCk7XG4gICAgICAgIHRoaXMudGFibGUuc2V0QXR0cmlidXRlKCdzb3J0JywgJ2lkJyk7XG4gICAgICAgIHRoaXMudGFibGUuc2V0QXR0cmlidXRlKCdvcmRlcicsICdBU0MnKTtcbiAgICAgICAgdGhpcy50YWJsZS5hcHBlbmQodGhpcy5jcmVhdGVEZXNjcmlwdGlvbigpLCB0aGlzLmNyZWF0ZVRhYmxlKCksIHRoaXMuY3JlYXRlUGFnZXNDb250cm9scygpKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250cm9sQnV0dG9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVEZXNjcmlwdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZGVzY3JpcHRpb24td2lubmVycyddKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLndpbm5lcnNRdWFudGl0eSwgdGhpcy5hY3RpdmVQYWdlKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVUYWJsZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnd2lubmVycy10YWJsZSddKTtcbiAgICAgICAgY29uc3QgaGVhZEFycmF5ID0gWydOdW1iZXInLCAnQ2FyJywgJ05hbWUnXTtcbiAgICAgICAgY29uc3QgaGVhZElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgaGVhZEFycmF5LmZvckVhY2goKHRhYmxlSGVhZENlaWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgY2VpbC5pbm5lckhUTUwgPSB0YWJsZUhlYWRDZWlsO1xuICAgICAgICAgICAgaGVhZElubmVyLmFwcGVuZChjZWlsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uV2lucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc29ydEJ5V2lucygpKTtcbiAgICAgICAgdGhpcy5idXR0b25CZXN0VGltZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc29ydEJ5VGltZSgpKTtcbiAgICAgICAgaGVhZElubmVyLmFwcGVuZCh0aGlzLmJ1dHRvbldpbnMsIHRoaXMuYnV0dG9uQmVzdFRpbWUpO1xuICAgICAgICBjb25zdCB0YWJsZUhlYWQgPSBjcmVhdGVFbGVtZW50KCd0aGVhZCcsIFsndGhlYWQnXSk7XG4gICAgICAgIHRhYmxlSGVhZC5hcHBlbmQoaGVhZElubmVyKTtcbiAgICAgICAgdGhpcy5kcmF3VGFibGVCb2R5KCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGFibGVIZWFkLCB0aGlzLnRhYmxlQm9keSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNldFdpbm5lcnNEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBhd2FpdCBnZXROdW1iZXJXaW5uZXJzQXBpKCk7XG4gICAgICAgIHRoaXMud2lubmVyc1F1YW50aXR5LmlubmVySFRNTCA9IGBXaW5uZXJzKCR7cXVhbnRpdHl9KWA7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5T2ZQYWdlcyA9IE1hdGguY2VpbChOdW1iZXIocXVhbnRpdHkpIC8gdGhpcy5XSU5ORVJTX09OX1BBR0UpO1xuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkFjdGl2ZVBhZ2UgPiBxdWFudGl0eU9mUGFnZXMpIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZBY3RpdmVQYWdlIC09IDE7XG4gICAgICAgICAgICB0aGlzLmRyYXdUYWJsZUJvZHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZVBhZ2UuaW5uZXJIVE1MID0gYFBhZ2UgJHt0aGlzLm51bWJlck9mQWN0aXZlUGFnZX0vJHtxdWFudGl0eU9mUGFnZXN9YDtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcGVuUHJldlBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm51bWJlck9mQWN0aXZlUGFnZSAhPSB0aGlzLkZJUlNUX1BBR0UpIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZBY3RpdmVQYWdlIC09IDE7XG4gICAgICAgICAgICB0aGlzLnNldFdpbm5lcnNEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3VGFibGVCb2R5KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2xCdXR0b25zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhc3luYyBvcGVuTmV4dFBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gYXdhaXQgZ2V0TnVtYmVyV2lubmVyc0FwaSgpO1xuICAgICAgICBjb25zdCBxdWFudGl0eU9mUGFnZXMgPSBNYXRoLmNlaWwoTnVtYmVyKHF1YW50aXR5KSAvIHRoaXMuV0lOTkVSU19PTl9QQUdFKTtcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyT2ZBY3RpdmVQYWdlICE9IHF1YW50aXR5T2ZQYWdlcykge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJPZkFjdGl2ZVBhZ2UgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuc2V0V2lubmVyc0Rlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdUYWJsZUJvZHkoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29udHJvbEJ1dHRvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVBhZ2VzQ29udHJvbHMoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3dpbm5lcnMtY29udHJvbHMtcGFnZSddKTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuUHJldlBhZ2UoKSk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub3Blbk5leHRQYWdlKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuYnV0dG9uUHJldiwgdGhpcy5idXR0b25OZXh0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcHVibGljIGFzeW5jIGRyYXdUYWJsZUJvZHkoKSB7XG4gICAgICAgIHRoaXMudGFibGVCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBzb3J0ID0gdGhpcy50YWJsZS5nZXRBdHRyaWJ1dGUoJ3NvcnQnKTtcbiAgICAgICAgY29uc3Qgb3JkZXIgPSB0aGlzLnRhYmxlLmdldEF0dHJpYnV0ZSgnb3JkZXInKTtcbiAgICAgICAgaWYgKHNvcnQgJiYgb3JkZXIpIHRoaXMuZHJhd1RhYmxlV2l0aFNvcnQoc29ydCwgb3JkZXIpO1xuICAgIH1cbiAgICBwcml2YXRlIGRyYXdXaW5uZXJMaW5lKHBhcmFtOiBMaW5lV2lubmVyc1R5cGUpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb25zdCBudW1iZXIgPSBjcmVhdGVFbGVtZW50KCd0ZCcsIFsndGQtbnVtYmVyJ10sIGAke3BhcmFtLmluZGV4ICsgMX1gKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIVE1MID0gSW1hZ2VJdGVtcy5nZXRDYXIocGFyYW0uY29sb3IpO1xuICAgICAgICBjb25zdCBpbWFnZUNhciA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgWyd0ZC1jYXInXSk7XG4gICAgICAgIGltYWdlQ2FyLmlubmVySFRNTCA9IGltYWdlSFRNTDtcbiAgICAgICAgY29uc3QgbmFtZUNlaWwgPSBjcmVhdGVFbGVtZW50KCd0ZCcsIFsndGQtbmFtZSddLCBgJHtwYXJhbS5uYW1lfWApO1xuICAgICAgICBjb25zdCB3aW5zQ2VpbCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgWyd0ZC13aW5zJ10sIGAke3BhcmFtLndpbnN9YCk7XG4gICAgICAgIGNvbnN0IHRpbWVDZWlsID0gY3JlYXRlRWxlbWVudCgndGQnLCBbJ3RkLXRpbWUnXSwgYCR7cGFyYW0udGltZX1gKTtcbiAgICAgICAgbGluZS5hcHBlbmQobnVtYmVyLCBpbWFnZUNhciwgbmFtZUNlaWwsIHdpbnNDZWlsLCB0aW1lQ2VpbCk7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cbiAgICBwdWJsaWMgYXN5bmMgdXBkYXRlQ29udHJvbEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gYXdhaXQgZ2V0TnVtYmVyV2lubmVyc0FwaSgpO1xuICAgICAgICBjb25zdCBxdWFudGl0eU9mUGFnZXMgPSBNYXRoLmNlaWwoTnVtYmVyKHF1YW50aXR5KSAvIHRoaXMuV0lOTkVSU19PTl9QQUdFKTtcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyT2ZBY3RpdmVQYWdlID09PSB0aGlzLkZJUlNUX1BBR0UpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJldi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm51bWJlck9mQWN0aXZlUGFnZSA9PT0gcXVhbnRpdHlPZlBhZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbk5leHQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkFjdGl2ZVBhZ2UgPiB0aGlzLkZJUlNUX1BBR0UpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm51bWJlck9mQWN0aXZlUGFnZSA8IHF1YW50aXR5T2ZQYWdlcykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25OZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzb3J0QnlXaW5zKCkge1xuICAgICAgICB0aGlzLm51bWJlckNsaWNrc1dpbnMgKz0gMTtcbiAgICAgICAgdGhpcy5idXR0b25CZXN0VGltZS5pbm5lckhUTUwgPSBgQmVzdCB0aW1lIChzZWMpYDtcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyQ2xpY2tzV2lucyAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uV2lucy5pbm5lckhUTUwgPSBgV2lucyAmIzk2NjA7YDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RhYmxlV2l0aFNvcnQoJ3dpbnMnLCAnREVTQycpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBdHRyaWJ1dGUoJ3NvcnQnLCAnd2lucycpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBdHRyaWJ1dGUoJ29yZGVyJywgJ0RFU0MnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uV2lucy5pbm5lckhUTUwgPSBgV2lucyAmIzk2NTA7YDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RhYmxlV2l0aFNvcnQoJ3dpbnMnLCAnQVNDJyk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLnNldEF0dHJpYnV0ZSgnc29ydCcsICd3aW5zJyk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLnNldEF0dHJpYnV0ZSgnb3JkZXInLCAnQVNDJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzb3J0QnlUaW1lKCkge1xuICAgICAgICB0aGlzLm51bWJlckNsaWNrc1RpbWUgKz0gMTtcbiAgICAgICAgdGhpcy5idXR0b25XaW5zLmlubmVySFRNTCA9IGBXaW5zYDtcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyQ2xpY2tzVGltZSAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmVzdFRpbWUuaW5uZXJIVE1MID0gYEJlc3QgdGltZSAoc2VjKSAmIzk2NjA7YDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RhYmxlV2l0aFNvcnQoJ3RpbWUnLCAnREVTQycpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBdHRyaWJ1dGUoJ3NvcnQnLCAndGltZScpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBdHRyaWJ1dGUoJ29yZGVyJywgJ0RFU0MnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmVzdFRpbWUuaW5uZXJIVE1MID0gYEJlc3QgdGltZSAoc2VjKSAmIzk2NTA7YDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RhYmxlV2l0aFNvcnQoJ3RpbWUnLCAnQVNDJyk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLnNldEF0dHJpYnV0ZSgnc29ydCcsICd0aW1lJyk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLnNldEF0dHJpYnV0ZSgnb3JkZXInLCAnQVNDJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhc3luYyBkcmF3VGFibGVXaXRoU29ydChzb3J0ID0gJ2lkJywgb3JkZXIgPSAnQVNDJykge1xuICAgICAgICBjb25zdCBwYXJhbUZvclNvcnQ6IFNvcnRUYWJsZVR5cGUgPSB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLm51bWJlck9mQWN0aXZlUGFnZSxcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLldJTk5FUlNfT05fUEFHRSxcbiAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICBvcmRlcixcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNvcnRUYWJsZShwYXJhbUZvclNvcnQpO1xuICAgICAgICB0aGlzLnRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZGF0YS5mb3JFYWNoKGFzeW5jIChlbGVtZW50OiBXaW5uZXJUeXBlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgICAgICBjb25zdCBjYXJGcm9tR2FyYWdlID0gYXdhaXQgZ2V0Q2FyQXBpKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYXJGcm9tR2FyYWdlLmNvbG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IGNhckZyb21HYXJhZ2UubmFtZSxcbiAgICAgICAgICAgICAgICB3aW5zOiBlbGVtZW50LndpbnMsXG4gICAgICAgICAgICAgICAgdGltZTogZWxlbWVudC50aW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmRyYXdXaW5uZXJMaW5lKHBhcmFtKTtcbiAgICAgICAgICAgIHRoaXMudGFibGVCb2R5LmFwcGVuZChsaW5lKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2FyVHlwZSwgU29ydFRhYmxlVHlwZSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuY29uc3QgcGF0aCA9ICcvZ2FyYWdlJztcbmVudW0gUGF0aCB7XG4gICAgR0FSQUdFID0gJy9nYXJhZ2UnLFxuICAgIEVOR0lORSA9ICcvZW5naW5lJyxcbiAgICBXSU5ORVJTID0gJy93aW5uZXJzJyxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcnNPblBhZ2VBcGkocGFnZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtwYXRofT9fcGFnZT0ke3BhZ2V9Jl9saW1pdD03YCk7XG4gICAgY29uc3QgY2FycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gY2Fycztcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJBcGkoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7cGF0aH0vJHtpZH1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TnVtYmVyQ2Fyc0FwaSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0ke3BhdGh9P19saW1pdD03YCk7XG4gICAgY29uc3QgbnVtYmVyT2ZDYXJzID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICByZXR1cm4gbnVtYmVyT2ZDYXJzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2FyQXBpKGJvZHk6IHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0ke3BhdGh9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgfSk7XG4gICAgY29uc3QgY2FyQ3JlYXRlZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gY2FyQ3JlYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNhckFwaShpZDogbnVtYmVyKSB7XG4gICAgYXdhaXQgZmV0Y2goYCR7dXJsfSR7cGF0aH0vJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXJBcGkocGFyYW06IENhclR5cGUpIHtcbiAgICBhd2FpdCBmZXRjaChgJHt1cmx9JHtwYXRofS8ke3BhcmFtLmlkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbmFtZTogcGFyYW0ubmFtZSxcbiAgICAgICAgICAgIGNvbG9yOiBwYXJhbS5jb2xvcixcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEVuZ2luZUFwaShpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtQYXRoLkVOR0lORX0/aWQ9JHtpZH0mc3RhdHVzPXN0YXJ0ZWRgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN3aXRjaEVuZ2luZVRvRHJpdmUoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7UGF0aC5FTkdJTkV9P2lkPSR7aWR9JnN0YXR1cz1kcml2ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9wRW5naW5lKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0ke1BhdGguRU5HSU5FfT9pZD0ke2lkfSZzdGF0dXM9c3RvcHBlZGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TnVtYmVyV2lubmVyc0FwaSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0ke1BhdGguV0lOTkVSU30/X2xpbWl0PTEwYCk7XG4gICAgY29uc3QgbnVtYmVyT2ZXaW5uZXJzID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICByZXR1cm4gbnVtYmVyT2ZXaW5uZXJzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2lubmVyQXBpKGJvZHk6IHsgaWQ6IG51bWJlcjsgd2luczogbnVtYmVyOyB0aW1lOiBudW1iZXIgfSkge1xuICAgIGF3YWl0IGZldGNoKGAke3VybH0ke1BhdGguV0lOTkVSU31gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5uZXJBcGkoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7UGF0aC5XSU5ORVJTfS8ke2lkfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2lubmVyQXBpKHBhcmFtOiB7IGlkOiBudW1iZXI7IHdpbnM6IG51bWJlcjsgdGltZTogbnVtYmVyIH0pIHtcbiAgICBhd2FpdCBmZXRjaChgJHt1cmx9JHtQYXRoLldJTk5FUlN9LyR7cGFyYW0uaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB3aW5zOiBwYXJhbS53aW5zLFxuICAgICAgICAgICAgdGltZTogcGFyYW0udGltZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ2FyRnJvbVdpbm5lcnNBcGkoaWQ6IG51bWJlcikge1xuICAgIGF3YWl0IGZldGNoKGAke3VybH0ke1BhdGguV0lOTkVSU30vJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc29ydFRhYmxlKHsgcGFnZSwgbGltaXQsIHNvcnQsIG9yZGVyIH06IFNvcnRUYWJsZVR5cGUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0ke1BhdGguV0lOTkVSU30/X3BhZ2U9JHtwYWdlfSZfbGltaXQ9JHtsaW1pdH0mX3NvcnQ9JHtzb3J0fSZfb3JkZXI9JHtvcmRlcn1gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7IFwiYnJhbmRcIjogXCJTZWF0XCIsIFwibW9kZWxzXCI6IFtcIkFsaGFtYnJhXCIsIFwiQWx0ZWFcIiwgXCJBbHRlYSBYTFwiLCBcIkFyb3NhXCIsIFwiQ29yZG9iYVwiLCBcIkNvcmRvYmEgVmFyaW9cIiwgXCJFeGVvXCIsIFwiSWJpemFcIiwgXCJJYml6YSBTVFwiLCBcIkV4ZW8gU1RcIiwgXCJMZW9uXCIsIFwiTGVvbiBTVFwiLCBcIkluY2FcIiwgXCJNaWlcIiwgXCJUb2xlZG9cIl0gfSxcbiAge1wiYnJhbmRcIjogXCJSZW5hdWx0XCIsIFwibW9kZWxzXCI6IFtcIkNhcHR1clwiLCBcIkNsaW9cIiwgXCJDbGlvIEdyYW5kdG91clwiLCBcIkVzcGFjZVwiLCBcIkV4cHJlc3NcIiwgXCJGbHVlbmNlXCIsIFwiR3JhbmQgRXNwYWNlXCIsIFwiR3JhbmQgTW9kdXNcIiwgXCJHcmFuZCBTY2VuaWNcIiwgXCJLYWRqYXJcIiwgXCJLYW5nb29cIiwgXCJLYW5nb28gRXhwcmVzc1wiLCBcIktvbGVvc1wiLCBcIkxhZ3VuYVwiLCBcIkxhZ3VuYSBHcmFuZHRvdXJcIiwgXCJMYXRpdHVkZVwiLCBcIk1hc2NvdHRcIiwgXCJNw6lnYW5lXCIsIFwiTcOpZ2FuZSBDQ1wiLCBcIk3DqWdhbmUgQ29tYmlcIiwgXCJNw6lnYW5lIEdyYW5kdG91clwiLCBcIk3DqWdhbmUgQ291cMOpXCIsIFwiTcOpZ2FuZSBTY8OpbmljXCIsIFwiU2PDqW5pY1wiLCBcIlRhbGlzbWFuXCIsIFwiVGFsaXNtYW4gR3JhbmR0b3VyXCIsIFwiVGhhbGlhXCIsIFwiVHdpbmdvXCIsIFwiV2luZFwiLCBcIlpvw6lcIl19LFxuICB7XCJicmFuZFwiOiBcIlBldWdlb3RcIiwgXCJtb2RlbHNcIjogW1wiMTAwN1wiLCBcIjEwN1wiLCBcIjEwNlwiLCBcIjEwOFwiLCBcIjIwMDhcIiwgXCIyMDVcIiwgXCIyMDUgQ2FicmlvXCIsIFwiMjA2XCIsIFwiMjA2IENDXCIsIFwiMjA2IFNXXCIsIFwiMjA3XCIsIFwiMjA3IENDXCIsIFwiMjA3IFNXXCIsIFwiMzA2XCIsIFwiMzA3XCIsIFwiMzA3IENDXCIsIFwiMzA3IFNXXCIsIFwiMzA4XCIsIFwiMzA4IENDXCIsIFwiMzA4IFNXXCIsIFwiMzA5XCIsIFwiNDAwN1wiLCBcIjQwMDhcIiwgXCI0MDVcIiwgXCI0MDZcIiwgXCI0MDdcIiwgXCI0MDcgU1dcIiwgXCI1MDA4XCIsIFwiNTA4XCIsIFwiNTA4IFNXXCIsIFwiNjA1XCIsIFwiODA2XCIsIFwiNjA3XCIsIFwiODA3XCIsIFwiQmlwcGVyXCIsIFwiUkNaXCJdfSxcbiAge1wiYnJhbmRcIjogXCJEYWNpYVwiLCBcIm1vZGVsc1wiOiBbXCJEb2trZXJcIiwgXCJEdXN0ZXJcIiwgXCJMb2RneVwiLCBcIkxvZ2FuXCIsIFwiTG9nYW4gTUNWXCIsIFwiTG9nYW4gVmFuXCIsIFwiU2FuZGVyb1wiLCBcIlNvbGVuemFcIl19LFxuICB7XCJicmFuZFwiOiBcIkNpdHJvw6tuXCIsIFwibW9kZWxzXCI6IFtcIkJlcmxpbmdvXCIsIFwiQy1Dcm9zc2VyXCIsIFwiQy1FbGlzc8OpZVwiLCBcIkMtWmVyb1wiLCBcIkMxXCIsIFwiQzJcIiwgXCJDM1wiLCBcIkMzIFBpY2Fzc29cIiwgXCJDNFwiLCBcIkM0IEFpcmNyb3NzXCIsIFwiQzQgQ2FjdHVzXCIsIFwiQzQgQ291cMOpXCIsIFwiQzQgR3JhbmQgUGljYXNzb1wiLCBcIkM0IFNlZGFuXCIsIFwiQzVcIiwgXCJDNSBCcmVha1wiLCBcIkM1IFRvdXJlclwiLCBcIkM2XCIsIFwiQzhcIiwgXCJEUzNcIiwgXCJEUzRcIiwgXCJEUzVcIiwgXCJFdmFzaW9uXCIsIFwiSnVtcGVyXCIsIFwiSnVtcHlcIiwgXCJTYXhvXCIsIFwiTmVtb1wiLCBcIlhhbnRpYVwiLCBcIlhzYXJhXCJdfSxcbiAge1wiYnJhbmRcIjogXCJPcGVsXCIsIFwibW9kZWxzXCI6IFtcIkFnaWxhXCIsIFwiQW1wZXJhXCIsIFwiQW50YXJhXCIsIFwiQXN0cmFcIiwgXCJBc3RyYSBjYWJyaW9cIiwgXCJBc3RyYSBjYXJhdmFuXCIsIFwiQXN0cmEgY291cMOpXCIsIFwiQ2FsaWJyYVwiLCBcIkNhbXBvXCIsIFwiQ2FzY2FkYVwiLCBcIkNvcnNhXCIsIFwiRnJvbnRlcmFcIiwgXCJJbnNpZ25pYVwiLCBcIkluc2lnbmlhIGtvbWJpXCIsIFwiS2FkZXR0XCIsIFwiTWVyaXZhXCIsIFwiTW9ra2FcIiwgXCJNb3Zhbm9cIiwgXCJPbWVnYVwiLCBcIlNpZ251bVwiLCBcIlZlY3RyYVwiLCBcIlZlY3RyYSBDYXJhdmFuXCIsIFwiVml2YXJvXCIsIFwiVml2YXJvIEtvbWJpXCIsIFwiWmFmaXJhXCJdfSxcbiAge1wiYnJhbmRcIjogXCJBbGZhIFJvbWVvXCIsIFwibW9kZWxzXCI6IFtcIjE0NVwiLCBcIjE0NlwiLCBcIjE0N1wiLCBcIjE1NVwiLCBcIjE1NlwiLCBcIjE1NiBTcG9ydHdhZ29uXCIsIFwiMTU5XCIsIFwiMTU5IFNwb3J0d2Fnb25cIiwgXCIxNjRcIiwgXCIxNjZcIiwgXCI0Q1wiLCBcIkJyZXJhXCIsIFwiR1RWXCIsIFwiTWlUb1wiLCBcIkNyb3Nzd2Fnb25cIiwgXCJTcGlkZXJcIiwgXCJHVFwiLCBcIkdpdWxpZXR0YVwiLCBcIkdpdWxpYVwiXX0sXG4gIHtcImJyYW5kXCI6IFwixaBrb2RhXCIsIFwibW9kZWxzXCI6IFtcIkZhdm9yaXRcIiwgXCJGZWxpY2lhXCIsIFwiQ2l0aWdvXCIsIFwiRmFiaWFcIiwgXCJGYWJpYSBDb21iaVwiLCBcIkZhYmlhIFNlZGFuXCIsIFwiRmVsaWNpYSBDb21iaVwiLCBcIk9jdGF2aWFcIiwgXCJPY3RhdmlhIENvbWJpXCIsIFwiUm9vbXN0ZXJcIiwgXCJZZXRpXCIsIFwiUmFwaWRcIiwgXCJSYXBpZCBTcGFjZWJhY2tcIiwgXCJTdXBlcmJcIiwgXCJTdXBlcmIgQ29tYmlcIl19LFxuICB7XCJicmFuZFwiOiBcIkNoZXZyb2xldFwiLCBcIm1vZGVsc1wiOiBbXCJBbGVyb1wiLCBcIkF2ZW9cIiwgXCJDYW1hcm9cIiwgXCJDYXB0aXZhXCIsIFwiQ29ydmV0dGVcIiwgXCJDcnV6ZVwiLCBcIkNydXplIFNXXCIsIFwiRXBpY2FcIiwgXCJFcXVpbm94XCIsIFwiRXZhbmRhXCIsIFwiSEhSXCIsIFwiS2Fsb3NcIiwgXCJMYWNldHRpXCIsIFwiTGFjZXR0aSBTV1wiLCBcIkx1bWluYVwiLCBcIk1hbGlidVwiLCBcIk1hdGl6XCIsIFwiTW9udGUgQ2FybG9cIiwgXCJOdWJpcmFcIiwgXCJPcmxhbmRvXCIsIFwiU3BhcmtcIiwgXCJTdWJ1cmJhblwiLCBcIlRhY3VtYVwiLCBcIlRhaG9lXCIsIFwiVHJheFwiXX0sXG4gIHtcImJyYW5kXCI6IFwiUG9yc2NoZVwiLCBcIm1vZGVsc1wiOiBbXCI5MTEgQ2FycmVyYVwiLCBcIjkxMSBDYXJyZXJhIENhYnJpb1wiLCBcIjkxMSBUYXJnYVwiLCBcIjkxMSBUdXJib1wiLCBcIjkyNFwiLCBcIjk0NFwiLCBcIjk5N1wiLCBcIkJveHN0ZXJcIiwgXCJDYXllbm5lXCIsIFwiQ2F5bWFuXCIsIFwiTWFjYW5cIiwgXCJQYW5hbWVyYVwiXX0sXG4gIHtcImJyYW5kXCI6IFwiSG9uZGFcIiwgXCJtb2RlbHNcIjogW1wiQWNjb3JkXCIsIFwiQWNjb3JkIENvdXDDqVwiLCBcIkFjY29yZCBUb3VyZXJcIiwgXCJDaXR5XCIsIFwiQ2l2aWNcIiwgXCJDaXZpYyBBZXJvZGVja1wiLCBcIkNpdmljIENvdXDDqVwiLCBcIkNpdmljIFRvdXJlclwiLCBcIkNpdmljIFR5cGUgUlwiLCBcIkNSLVZcIiwgXCJDUi1YXCIsIFwiQ1ItWlwiLCBcIkZSLVZcIiwgXCJIUi1WXCIsIFwiSW5zaWdodFwiLCBcIkludGVncmFcIiwgXCJKYXp6XCIsIFwiTGVnZW5kXCIsIFwiUHJlbHVkZVwiXX0sXG4gIHtcImJyYW5kXCI6IFwiU3ViYXJ1XCIsIFwibW9kZWxzXCI6IFtcIkJSWlwiLCBcIkZvcmVzdGVyXCIsIFwiSW1wcmV6YVwiLCBcIkltcHJlemEgV2Fnb25cIiwgXCJKdXN0eVwiLCBcIkxlZ2FjeVwiLCBcIkxlZ2FjeSBXYWdvblwiLCBcIkxlZ2FjeSBPdXRiYWNrXCIsIFwiTGV2b3JnXCIsIFwiT3V0YmFja1wiLCBcIlNWWFwiLCBcIlRyaWJlY2FcIiwgXCJUcmliZWNhIEI5XCIsIFwiWFZcIl19LFxuICB7XCJicmFuZFwiOiBcIk1hemRhXCIsIFwibW9kZWxzXCI6IFtcIjEyMVwiLCBcIjJcIiwgXCIzXCIsIFwiMzIzXCIsIFwiMzIzIENvbWJpXCIsIFwiMzIzIENvdXDDqVwiLCBcIjMyMyBGXCIsIFwiNVwiLCBcIjZcIiwgXCI2IENvbWJpXCIsIFwiNjI2XCIsIFwiNjI2IENvbWJpXCIsIFwiQi1GaWdodGVyXCIsIFwiQjI1MDBcIiwgXCJCVFwiLCBcIkNYLTNcIiwgXCJDWC01XCIsIFwiQ1gtN1wiLCBcIkNYLTlcIiwgXCJEZW1pb1wiLCBcIk1QVlwiLCBcIk1YLTNcIiwgXCJNWC01XCIsIFwiTVgtNlwiLCBcIlByZW1hY3lcIiwgXCJSWC03XCIsIFwiUlgtOFwiLCBcIlhlZG94IDZcIl19LFxuICB7XCJicmFuZFwiOiBcIk1pdHN1YmlzaGlcIiwgXCJtb2RlbHNcIjogW1wiMzAwMCBHVFwiLCBcIkFTWFwiLCBcIkNhcmlzbWFcIiwgXCJDb2x0XCIsIFwiQ29sdCBDQ1wiLCBcIkVjbGlwc2VcIiwgXCJGdXNvIGNhbnRlclwiLCBcIkdhbGFudFwiLCBcIkdhbGFudCBDb21iaVwiLCBcIkdyYW5kaXNcIiwgXCJMMjAwXCIsIFwiTDIwMCBQaWNrIHVwXCIsIFwiTDIwMCBQaWNrIHVwIEFsbHJhZFwiLCBcIkwzMDBcIiwgXCJMYW5jZXJcIiwgXCJMYW5jZXIgQ29tYmlcIiwgXCJMYW5jZXIgRXZvXCIsIFwiTGFuY2VyIFNwb3J0YmFja1wiLCBcIk91dGxhbmRlclwiLCBcIlBhamVyb1wiLCBcIlBhamV0byBQaW5pblwiLCBcIlBhamVybyBQaW5pbiBXYWdvblwiLCBcIlBhamVybyBTcG9ydFwiLCBcIlBhamVybyBXYWdvblwiLCBcIlNwYWNlIFN0YXJcIl19LFxuICB7XCJicmFuZFwiOiBcIkxleHVzXCIsIFwibW9kZWxzXCI6IFtcIkNUXCIsIFwiR1NcIiwgXCJHUyAzMDBcIiwgXCJHWFwiLCBcIklTXCIsIFwiSVMgMjAwXCIsIFwiSVMgMjUwIENcIiwgXCJJUy1GXCIsIFwiTFNcIiwgXCJMWFwiLCBcIk5YXCIsIFwiUkMgRlwiLCBcIlJYXCIsIFwiUlggMzAwXCIsIFwiUlggNDAwaFwiLCBcIlJYIDQ1MGhcIiwgXCJTQyA0MzBcIl19LFxuICB7XCJicmFuZFwiOiBcIlRveW90YVwiLCBcIm1vZGVsc1wiOiBbXCI0LVJ1bm5lclwiLCBcIkF1cmlzXCIsIFwiQXZlbnNpc1wiLCBcIkF2ZW5zaXMgQ29tYmlcIiwgXCJBdmVuc2lzIFZhbiBWZXJzb1wiLCBcIkF5Z29cIiwgXCJDYW1yeVwiLCBcIkNhcmluYVwiLCBcIkNlbGljYVwiLCBcIkNvcm9sbGFcIiwgXCJDb3JvbGxhIENvbWJpXCIsIFwiQ29yb2xsYSBzZWRhblwiLCBcIkNvcm9sbGEgVmVyc29cIiwgXCJGSiBDcnVpc2VyXCIsIFwiR1Q4NlwiLCBcIkhpYWNlXCIsIFwiSGlhY2UgVmFuXCIsIFwiSGlnaGxhbmRlclwiLCBcIkhpbHV4XCIsIFwiTGFuZCBDcnVpc2VyXCIsIFwiTVIyXCIsIFwiUGFzZW9cIiwgXCJQaWNuaWNcIiwgXCJQcml1c1wiLCBcIlJBVjRcIiwgXCJTZXF1b2lhXCIsIFwiU3RhcmxldFwiLCBcIlN1cHJhXCIsIFwiVHVuZHJhXCIsIFwiVXJiYW4gQ3J1aXNlclwiLCBcIlZlcnNvXCIsIFwiWWFyaXNcIiwgXCJZYXJpcyBWZXJzb1wiXX0sXG4gIHtcImJyYW5kXCI6IFwiQk1XXCIsIFwibW9kZWxzXCI6IFtcImkzXCIsIFwiaThcIiwgXCJNM1wiLCBcIk00XCIsIFwiTTVcIiwgXCJNNlwiLCBcIlJhZCAxXCIsIFwiUmFkIDEgQ2FicmlvXCIsIFwiUmFkIDEgQ291cMOpXCIsIFwiUmFkIDJcIiwgXCJSYWQgMiBBY3RpdmUgVG91cmVyXCIsIFwiUmFkIDIgQ291cMOpXCIsIFwiUmFkIDIgR3JhbiBUb3VyZXJcIiwgXCJSYWQgM1wiLCBcIlJhZCAzIENhYnJpb1wiLCBcIlJhZCAzIENvbXBhY3RcIiwgXCJSYWQgMyBDb3Vww6lcIiwgXCJSYWQgMyBHVFwiLCBcIlJhZCAzIFRvdXJpbmdcIiwgXCJSYWQgNFwiLCBcIlJhZCA0IENhYnJpb1wiLCBcIlJhZCA0IEdyYW4gQ291cMOpXCIsIFwiUmFkIDVcIiwgXCJSYWQgNSBHVFwiLCBcIlJhZCA1IFRvdXJpbmdcIiwgXCJSYWQgNlwiLCBcIlJhZCA2IENhYnJpb1wiLCBcIlJhZCA2IENvdXDDqVwiLCBcIlJhZCA2IEdyYW4gQ291cMOpXCIsIFwiUmFkIDdcIiwgXCJSYWQgOCBDb3Vww6lcIiwgXCJYMVwiLCBcIlgzXCIsIFwiWDRcIiwgXCJYNVwiLCBcIlg2XCIsIFwiWjNcIiwgXCJaMyBDb3Vww6lcIiwgXCJaMyBSb2Fkc3RlclwiLCBcIlo0XCIsIFwiWjQgUm9hZHN0ZXJcIl19LFxuICB7XCJicmFuZFwiOiBcIlZvbGtzd2FnZW5cIiwgXCJtb2RlbHNcIjogW1wiQW1hcm9rXCIsIFwiQmVldGxlXCIsIFwiQm9yYVwiLCBcIkJvcmEgVmFyaWFudFwiLCBcIkNhZGR5XCIsIFwiQ2FkZHkgVmFuXCIsIFwiTGlmZVwiLCBcIkNhbGlmb3JuaWFcIiwgXCJDYXJhdmVsbGVcIiwgXCJDQ1wiLCBcIkNyYWZ0ZXJcIiwgXCJDcmFmdGVyIFZhblwiLCBcIkNyYWZ0ZXIgS29tYmlcIiwgXCJDcm9zc1RvdXJhblwiLCBcIkVvc1wiLCBcIkZveFwiLCBcIkdvbGZcIiwgXCJHb2xmIENhYnJpb1wiLCBcIkdvbGYgUGx1c1wiLCBcIkdvbGYgU3BvcnR2YW5cIiwgXCJHb2xmIFZhcmlhbnRcIiwgXCJKZXR0YVwiLCBcIkxUXCIsIFwiTHVwb1wiLCBcIk11bHRpdmFuXCIsIFwiTmV3IEJlZXRsZVwiLCBcIk5ldyBCZWV0bGUgQ2FicmlvXCIsIFwiUGFzc2F0XCIsIFwiUGFzc2F0IEFsbHRyYWNrXCIsIFwiUGFzc2F0IENDXCIsIFwiUGFzc2F0IFZhcmlhbnRcIiwgXCJQYXNzYXQgVmFyaWFudCBWYW5cIiwgXCJQaGFldG9uXCIsIFwiUG9sb1wiLCBcIlBvbG8gVmFuXCIsIFwiUG9sbyBWYXJpYW50XCIsIFwiU2Npcm9jY29cIiwgXCJTaGFyYW5cIiwgXCJUNFwiLCBcIlQ0IENhcmF2ZWxsZVwiLCBcIlQ0IE11bHRpdmFuXCIsIFwiVDVcIiwgXCJUNSBDYXJhdmVsbGVcIiwgXCJUNSBNdWx0aXZhblwiLCBcIlQ1IFRyYW5zcG9ydGVyIFNodXR0bGVcIiwgXCJUaWd1YW5cIiwgXCJUb3VhcmVnXCIsIFwiVG91cmFuXCJdfSxcbiAge1wiYnJhbmRcIjogXCJTdXp1a2lcIiwgXCJtb2RlbHNcIjogW1wiQWx0b1wiLCBcIkJhbGVub1wiLCBcIkJhbGVubyBrb21iaVwiLCBcIkdyYW5kIFZpdGFyYVwiLCBcIkdyYW5kIFZpdGFyYSBYTC03XCIsIFwiSWduaXNcIiwgXCJKaW1ueVwiLCBcIktpemFzaGlcIiwgXCJMaWFuYVwiLCBcIlNhbXVyYWlcIiwgXCJTcGxhc2hcIiwgXCJTd2lmdFwiLCBcIlNYNFwiLCBcIlNYNCBTZWRhblwiLCBcIlZpdGFyYVwiLCBcIldhZ29uIFIrXCJdfSxcbiAge1wiYnJhbmRcIjogXCJNZXJjZWRlcy1CZW56XCIsIFwibW9kZWxzXCI6IFtcIjEwMCBEXCIsIFwiMTE1XCIsIFwiMTI0XCIsIFwiMTI2XCIsIFwiMTkwXCIsIFwiMTkwIERcIiwgXCIxOTAgRVwiLCBcIjIwMCAtIDMwMFwiLCBcIjIwMCBEXCIsIFwiMjAwIEVcIiwgXCIyMTAgVmFuXCIsIFwiMjEwIGtvbWJpXCIsIFwiMzEwIFZhblwiLCBcIjMxMCBrb21iaVwiLCBcIjIzMCAtIDMwMCBDRSBDb3Vww6lcIiwgXCIyNjAgLSA1NjAgU0VcIiwgXCIyNjAgLSA1NjAgU0VMXCIsIFwiNTAwIC0gNjAwIFNFQyBDb3Vww6lcIiwgXCJUcmllZGEgQVwiLCBcIkFcIiwgXCJBIExcIiwgXCJBTUcgR1RcIiwgXCJUcmllZGEgQlwiLCBcIlRyaWVkYSBDXCIsIFwiQ1wiLCBcIkMgU3BvcnRjb3Vww6lcIiwgXCJDIFRcIiwgXCJDaXRhblwiLCBcIkNMXCIsIFwiQ0xcIiwgXCJDTEFcIiwgXCJDTENcIiwgXCJDTEsgQ2FicmlvXCIsIFwiQ0xLIENvdXDDqVwiLCBcIkNMU1wiLCBcIlRyaWVkYSBFXCIsIFwiRVwiLCBcIkUgQ2FicmlvXCIsIFwiRSBDb3Vww6lcIiwgXCJFIFRcIiwgXCJUcmllZGEgR1wiLCBcIkcgQ2FicmlvXCIsIFwiR0xcIiwgXCJHTEFcIiwgXCJHTENcIiwgXCJHTEVcIiwgXCJHTEtcIiwgXCJUcmllZGEgTVwiLCBcIk1CIDEwMFwiLCBcIlRyaWVkYSBSXCIsIFwiVHJpZWRhIFNcIiwgXCJTXCIsIFwiUyBDb3Vww6lcIiwgXCJTTFwiLCBcIlNMQ1wiLCBcIlNMS1wiLCBcIlNMUlwiLCBcIlNwcmludGVyXCJdfSxcbiAge1wiYnJhbmRcIjogXCJTYWFiXCIsIFwibW9kZWxzXCI6IFtcIjktM1wiLCBcIjktMyBDYWJyaW9sZXRcIiwgXCI5LTMgQ291cMOpXCIsIFwiOS0zIFNwb3J0Q29tYmlcIiwgXCI5LTVcIiwgXCI5LTUgU3BvcnRDb21iaVwiLCBcIjkwMFwiLCBcIjkwMCBDXCIsIFwiOTAwIEMgVHVyYm9cIiwgXCI5MDAwXCJdfSxcbiAge1wiYnJhbmRcIjogXCJBdWRpXCIsIFwibW9kZWxzXCI6IFtcIjEwMFwiLCBcIjEwMCBBdmFudFwiLCBcIjgwXCIsIFwiODAgQXZhbnRcIiwgXCI4MCBDYWJyaW9cIiwgXCI5MFwiLCBcIkExXCIsIFwiQTJcIiwgXCJBM1wiLCBcIkEzIENhYnJpb2xldFwiLCBcIkEzIExpbXV6aW5hXCIsIFwiQTMgU3BvcnRiYWNrXCIsIFwiQTRcIiwgXCJBNCBBbGxyb2FkXCIsIFwiQTQgQXZhbnRcIiwgXCJBNCBDYWJyaW9sZXRcIiwgXCJBNVwiLCBcIkE1IENhYnJpb2xldFwiLCBcIkE1IFNwb3J0YmFja1wiLCBcIkE2XCIsIFwiQTYgQWxscm9hZFwiLCBcIkE2IEF2YW50XCIsIFwiQTdcIiwgXCJBOFwiLCBcIkE4IExvbmdcIiwgXCJRM1wiLCBcIlE1XCIsIFwiUTdcIiwgXCJSOFwiLCBcIlJTNCBDYWJyaW9sZXRcIiwgXCJSUzQvUlM0IEF2YW50XCIsIFwiUlM1XCIsIFwiUlM2IEF2YW50XCIsIFwiUlM3XCIsIFwiUzMvUzMgU3BvcnRiYWNrXCIsIFwiUzQgQ2FicmlvbGV0XCIsIFwiUzQvUzQgQXZhbnRcIiwgXCJTNS9TNSBDYWJyaW9sZXRcIiwgXCJTNi9SUzZcIiwgXCJTN1wiLCBcIlM4XCIsIFwiU1E1XCIsIFwiVFQgQ291cMOpXCIsIFwiVFQgUm9hZHN0ZXJcIiwgXCJUVFNcIl19LFxuICB7XCJicmFuZFwiOiBcIktpYVwiLCBcIm1vZGVsc1wiOiBbXCJBdmVsbGFcIiwgXCJCZXN0YVwiLCBcIkNhcmVuc1wiLCBcIkNhcm5pdmFsXCIsIFwiQ2VlYGRcIiwgXCJDZWVgZCBTV1wiLCBcIkNlcmF0b1wiLCBcIksgMjUwMFwiLCBcIk1hZ2VudGlzXCIsIFwiT3BpcnVzXCIsIFwiT3B0aW1hXCIsIFwiUGljYW50b1wiLCBcIlByZWdpb1wiLCBcIlByaWRlXCIsIFwiUHJvIENlZWBkXCIsIFwiUmlvXCIsIFwiUmlvIENvbWJpXCIsIFwiUmlvIHNlZGFuXCIsIFwiU2VwaGlhXCIsIFwiU2h1bWFcIiwgXCJTb3JlbnRvXCIsIFwiU291bFwiLCBcIlNwb3J0YWdlXCIsIFwiVmVuZ2FcIl19LFxuICB7XCJicmFuZFwiOiBcIkxhbmQgUm92ZXJcIiwgXCJtb2RlbHNcIjogW1wiMTA5XCIsIFwiRGVmZW5kZXJcIiwgXCJEaXNjb3ZlcnlcIiwgXCJEaXNjb3ZlcnkgU3BvcnRcIiwgXCJGcmVlbGFuZGVyXCIsIFwiUmFuZ2UgUm92ZXJcIiwgXCJSYW5nZSBSb3ZlciBFdm9xdWVcIiwgXCJSYW5nZSBSb3ZlciBTcG9ydFwiXX0sXG4gIHtcImJyYW5kXCI6IFwiRG9kZ2VcIiwgXCJtb2RlbHNcIjogW1wiQXZlbmdlclwiLCBcIkNhbGliZXJcIiwgXCJDaGFsbGVuZ2VyXCIsIFwiQ2hhcmdlclwiLCBcIkdyYW5kIENhcmF2YW5cIiwgXCJKb3VybmV5XCIsIFwiTWFnbnVtXCIsIFwiTml0cm9cIiwgXCJSQU1cIiwgXCJTdGVhbHRoXCIsIFwiVmlwZXJcIl19LFxuICB7XCJicmFuZFwiOiBcIkNocnlzbGVyXCIsIFwibW9kZWxzXCI6IFtcIjMwMCBDXCIsIFwiMzAwIEMgVG91cmluZ1wiLCBcIjMwMCBNXCIsIFwiQ3Jvc3NmaXJlXCIsIFwiR3JhbmQgVm95YWdlclwiLCBcIkxIU1wiLCBcIk5lb25cIiwgXCJQYWNpZmljYVwiLCBcIlBseW1vdXRoXCIsIFwiUFQgQ3J1aXNlclwiLCBcIlNlYnJpbmdcIiwgXCJTZWJyaW5nIENvbnZlcnRpYmxlXCIsIFwiU3RyYXR1c1wiLCBcIlN0cmF0dXMgQ2FicmlvXCIsIFwiVG93biAmIENvdW50cnlcIiwgXCJWb3lhZ2VyXCJdfSxcbiAge1wiYnJhbmRcIjogXCJGb3JkXCIsIFwibW9kZWxzXCI6IFtcIkFlcm9zdGFyXCIsIFwiQi1NYXhcIiwgXCJDLU1heFwiLCBcIkNvcnRpbmFcIiwgXCJDb3VnYXJcIiwgXCJFZGdlXCIsIFwiRXNjb3J0XCIsIFwiRXNjb3J0IENhYnJpb1wiLCBcIkVzY29ydCBrb21iaVwiLCBcIkV4cGxvcmVyXCIsIFwiRi0xNTBcIiwgXCJGLTI1MFwiLCBcIkZpZXN0YVwiLCBcIkZvY3VzXCIsIFwiRm9jdXMgQy1NYXhcIiwgXCJGb2N1cyBDQ1wiLCBcIkZvY3VzIGtvbWJpXCIsIFwiRnVzaW9uXCIsIFwiR2FsYXh5XCIsIFwiR3JhbmQgQy1NYXhcIiwgXCJLYVwiLCBcIkt1Z2FcIiwgXCJNYXZlcmlja1wiLCBcIk1vbmRlb1wiLCBcIk1vbmRlbyBDb21iaVwiLCBcIk11c3RhbmdcIiwgXCJPcmlvblwiLCBcIlB1bWFcIiwgXCJSYW5nZXJcIiwgXCJTLU1heFwiLCBcIlNpZXJyYVwiLCBcIlN0cmVldCBLYVwiLCBcIlRvdXJuZW8gQ29ubmVjdFwiLCBcIlRvdXJuZW8gQ3VzdG9tXCIsIFwiVHJhbnNpdFwiLCBcIlRyYW5zaXRcIiwgXCJUcmFuc2l0IEJ1c1wiLCBcIlRyYW5zaXQgQ29ubmVjdCBMV0JcIiwgXCJUcmFuc2l0IENvdXJpZXJcIiwgXCJUcmFuc2l0IEN1c3RvbVwiLCBcIlRyYW5zaXQga29tYmlcIiwgXCJUcmFuc2l0IFRvdXJuZW9cIiwgXCJUcmFuc2l0IFZhbG5pa1wiLCBcIlRyYW5zaXQgVmFuXCIsIFwiVHJhbnNpdCBWYW4gMzUwXCIsIFwiV2luZHN0YXJcIl19LFxuICB7XCJicmFuZFwiOiBcIkh1bW1lclwiLCBcIm1vZGVsc1wiOiBbXCJIMlwiLCBcIkgzXCJdfSxcbiAge1wiYnJhbmRcIjogXCJIeXVuZGFpXCIsIFwibW9kZWxzXCI6IFtcIkFjY2VudFwiLCBcIkF0b3NcIiwgXCJBdG9zIFByaW1lXCIsIFwiQ291cMOpXCIsIFwiRWxhbnRyYVwiLCBcIkdhbGxvcGVyXCIsIFwiR2VuZXNpc1wiLCBcIkdldHpcIiwgXCJHcmFuZGV1clwiLCBcIkggMzUwXCIsIFwiSDFcIiwgXCJIMSBCdXNcIiwgXCJIMSBWYW5cIiwgXCJIMjAwXCIsIFwiaTEwXCIsIFwiaTIwXCIsIFwiaTMwXCIsIFwiaTMwIENXXCIsIFwiaTQwXCIsIFwiaTQwIENXXCIsIFwiaXgyMFwiLCBcIml4MzVcIiwgXCJpeDU1XCIsIFwiTGFudHJhXCIsIFwiTWF0cml4XCIsIFwiU2FudGEgRmVcIiwgXCJTb25hdGFcIiwgXCJUZXJyYWNhblwiLCBcIlRyYWpldFwiLCBcIlR1Y3NvblwiLCBcIlZlbG9zdGVyXCJdfSxcbiAge1wiYnJhbmRcIjogXCJJbmZpbml0aVwiLCBcIm1vZGVsc1wiOiBbXCJFWFwiLCBcIkZYXCIsIFwiR1wiLCBcIkcgQ291cMOpXCIsIFwiTVwiLCBcIlFcIiwgXCJRWFwiXX0sXG4gIHtcImJyYW5kXCI6IFwiSmFndWFyXCIsIFwibW9kZWxzXCI6IFtcIkRhaW1sZXJcIiwgXCJGLVBhY2VcIiwgXCJGLVR5cGVcIiwgXCJTLVR5cGVcIiwgXCJTb3ZlcmVpZ25cIiwgXCJYLVR5cGVcIiwgXCJYLXR5cGUgRXN0YXRlXCIsIFwiWEVcIiwgXCJYRlwiLCBcIlhKXCIsIFwiWEoxMlwiLCBcIlhKNlwiLCBcIlhKOFwiLCBcIlhKOFwiLCBcIlhKUlwiLCBcIlhLXCIsIFwiWEs4IENvbnZlcnRpYmxlXCIsIFwiWEtSXCIsIFwiWEtSIENvbnZlcnRpYmxlXCJdfSxcbiAge1wiYnJhbmRcIjogXCJKZWVwXCIsIFwibW9kZWxzXCI6IFtcIkNoZXJva2VlXCIsIFwiQ29tbWFuZGVyXCIsIFwiQ29tcGFzc1wiLCBcIkdyYW5kIENoZXJva2VlXCIsIFwiUGF0cmlvdFwiLCBcIlJlbmVnYWRlXCIsIFwiV3JhbmdsZXJcIl19LFxuICB7XCJicmFuZFwiOiBcIk5pc3NhblwiLCBcIm1vZGVsc1wiOiBbXCIxMDAgTlhcIiwgXCIyMDAgU1hcIiwgXCIzNTAgWlwiLCBcIjM1MCBaIFJvYWRzdGVyXCIsIFwiMzcwIFpcIiwgXCJBbG1lcmFcIiwgXCJBbG1lcmEgVGlub1wiLCBcIkNhYnN0YXIgRSAtIFRcIiwgXCJDYWJzdGFyIFRMMiBWYWxuaWtcIiwgXCJlLU5WMjAwXCIsIFwiR1QtUlwiLCBcIkluc3RlcnN0YXJcIiwgXCJKdWtlXCIsIFwiS2luZyBDYWJcIiwgXCJMZWFmXCIsIFwiTWF4aW1hXCIsIFwiTWF4aW1hIFFYXCIsIFwiTWljcmFcIiwgXCJNdXJhbm9cIiwgXCJOYXZhcmFcIiwgXCJOb3RlXCIsIFwiTlAzMDAgUGlja3VwXCIsIFwiTlYyMDBcIiwgXCJOVjQwMFwiLCBcIlBhdGhmaW5kZXJcIiwgXCJQYXRyb2xcIiwgXCJQYXRyb2wgR1JcIiwgXCJQaWNrdXBcIiwgXCJQaXhvXCIsIFwiUHJpbWFzdGFyXCIsIFwiUHJpbWFzdGFyIENvbWJpXCIsIFwiUHJpbWVyYVwiLCBcIlByaW1lcmEgQ29tYmlcIiwgXCJQdWxzYXJcIiwgXCJRYXNocWFpXCIsIFwiU2VyZW5hXCIsIFwiU3VubnlcIiwgXCJUZXJyYW5vXCIsIFwiVGlpZGFcIiwgXCJUcmFkZVwiLCBcIlZhbmV0dGUgQ2FyZ29cIiwgXCJYLVRyYWlsXCJdfSxcbiAge1wiYnJhbmRcIjogXCJWb2x2b1wiLCBcIm1vZGVsc1wiOiBbXCIyNDBcIiwgXCIzNDBcIiwgXCIzNjBcIiwgXCI0NjBcIiwgXCI4NTBcIiwgXCI4NTAga29tYmlcIiwgXCJDMzBcIiwgXCJDNzBcIiwgXCJDNzAgQ2FicmlvXCIsIFwiQzcwIENvdXDDqVwiLCBcIlM0MFwiLCBcIlM2MFwiLCBcIlM3MFwiLCBcIlM4MFwiLCBcIlM5MFwiLCBcIlY0MFwiLCBcIlY1MFwiLCBcIlY2MFwiLCBcIlY3MFwiLCBcIlY5MFwiLCBcIlhDNjBcIiwgXCJYQzcwXCIsIFwiWEM5MFwiXX0sXG4gIHtcImJyYW5kXCI6IFwiRGFld29vXCIsIFwibW9kZWxzXCI6IFtcIkVzcGVyb1wiLCBcIkthbG9zXCIsIFwiTGFjZXR0aVwiLCBcIkxhbm9zXCIsIFwiTGVnYW56YVwiLCBcIkx1YmxpblwiLCBcIk1hdGl6XCIsIFwiTmV4aWFcIiwgXCJOdWJpcmFcIiwgXCJOdWJpcmEga29tYmlcIiwgXCJSYWNlclwiLCBcIlRhY3VtYVwiLCBcIlRpY29cIl19LFxuICB7XCJicmFuZFwiOiBcIkZpYXRcIiwgXCJtb2RlbHNcIjogW1wiMTEwMFwiLCBcIjEyNlwiLCBcIjUwMFwiLCBcIjUwMExcIiwgXCI1MDBYXCIsIFwiODUwXCIsIFwiQmFyY2hldHRhXCIsIFwiQnJhdmFcIiwgXCJDaW5xdWVjZW50b1wiLCBcIkNvdXDDqVwiLCBcIkNyb21hXCIsIFwiRG9ibG9cIiwgXCJEb2JsbyBDYXJnb1wiLCBcIkRvYmxvIENhcmdvIENvbWJpXCIsIFwiRHVjYXRvXCIsIFwiRHVjYXRvIFZhblwiLCBcIkR1Y2F0byBLb21iaVwiLCBcIkR1Y2F0byBQb2R2b3pva1wiLCBcIkZsb3Jpbm9cIiwgXCJGbG9yaW5vIENvbWJpXCIsIFwiRnJlZW1vbnRcIiwgXCJHcmFuZGUgUHVudG9cIiwgXCJJZGVhXCIsIFwiTGluZWFcIiwgXCJNYXJlYVwiLCBcIk1hcmVhIFdlZWtlbmRcIiwgXCJNdWx0aXBsYVwiLCBcIlBhbGlvIFdlZWtlbmRcIiwgXCJQYW5kYVwiLCBcIlBhbmRhIFZhblwiLCBcIlB1bnRvXCIsIFwiUHVudG8gQ2FicmlvbGV0XCIsIFwiUHVudG8gRXZvXCIsIFwiUHVudG8gVmFuXCIsIFwiUXVib1wiLCBcIlNjdWRvXCIsIFwiU2N1ZG8gVmFuXCIsIFwiU2N1ZG8gS29tYmlcIiwgXCJTZWRpY2lcIiwgXCJTZWljZW50b1wiLCBcIlN0aWxvXCIsIFwiU3RpbG8gTXVsdGl3YWdvblwiLCBcIlN0cmFkYVwiLCBcIlRhbGVudG9cIiwgXCJUaXBvXCIsIFwiVWx5c3NlXCIsIFwiVW5vXCIsIFwiWDEvOVwiXX0sXG4gIHtcImJyYW5kXCI6IFwiTUlOSVwiLCBcIm1vZGVsc1wiOiBbXCJDb29wZXJcIiwgXCJDb29wZXIgQ2FicmlvXCIsIFwiQ29vcGVyIENsdWJtYW5cIiwgXCJDb29wZXIgRFwiLCBcIkNvb3BlciBEIENsdWJtYW5cIiwgXCJDb29wZXIgU1wiLCBcIkNvb3BlciBTIENhYnJpb1wiLCBcIkNvb3BlciBTIENsdWJtYW5cIiwgXCJDb3VudHJ5bWFuXCIsIFwiTWluaSBPbmVcIiwgXCJPbmUgRFwiXX0sXG4gIHtcImJyYW5kXCI6IFwiUm92ZXJcIiwgXCJtb2RlbHNcIjogW1wiMjAwXCIsIFwiMjE0XCIsIFwiMjE4XCIsIFwiMjVcIiwgXCI0MDBcIiwgXCI0MTRcIiwgXCI0MTZcIiwgXCI2MjBcIiwgXCI3NVwiXX0sXG4gIHtcImJyYW5kXCI6IFwiU21hcnRcIiwgXCJtb2RlbHNcIjogW1wiQ2FicmlvXCIsIFwiQ2l0eS1Db3Vww6lcIiwgXCJDb21wYWN0IFB1bHNlXCIsIFwiRm9yZm91clwiLCBcIkZvcnR3byBjYWJyaW9cIiwgXCJGb3J0d28gY291cMOpXCIsIFwiUm9hZHN0ZXJcIl19XSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZzogc3RyaW5nLCBjbGFzc0FycmF5OiBzdHJpbmdbXSwgY29udGVudCA9ICcnKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGNsYXNzQXJyYXkuZm9yRWFjaCgoY2xhc3NJdGVtKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dEVsZW1lbnQoY2xhc3NBcnJheTogc3RyaW5nW10sIGlucHV0VHlwZTogc3RyaW5nLCB2YWx1ZSA9ICcnKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWxlbWVudC50eXBlID0gaW5wdXRUeXBlO1xuICAgIGNsYXNzQXJyYXkuZm9yRWFjaCgoY2xhc3NJdGVtKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKSk7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFNlbGVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcignbm90IGV4aXN0cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFNlbGVjdG9ySW5wdXQoc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcignbm90IGV4aXN0cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3QoaXRlbTogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gaXRlbS5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKCdub3QgZXhpc3RzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoaXRlbTogSFRNTEVsZW1lbnQsIGF0dHJpYnV0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IGl0ZW0uZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKCdub3QgZXhpc3RzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobnVtYmVyRWxlbWVudHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlckVsZW1lbnRzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4gICAgbGV0IGNvbG9yID0gJyMnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbZ2V0UmFuZG9tTnVtYmVyKGxldHRlcnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBjb2xvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RhbFRleHQodGV4dCA9ICcnKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ21vZGFsJ10sIHRleHQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1vZGFsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNb2RhbFRleHQoKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJyk7XG4gICAgbW9kYWxzLmZvckVhY2goKG1vZGFsKSA9PiBtb2RhbC5yZW1vdmUoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICBjb25zdCBkb2N1bWVudENsaWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGNhckNvbnRhaW5lcldpZHRoID0gZmluZFNlbGVjdG9yKGAuc3RhcnQtY29udGFpbmVyYCkuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBkb2N1bWVudENsaWVudFdpZHRoIC0gY2FyQ29udGFpbmVyV2lkdGg7XG4gICAgcmV0dXJuIGRpc3RhbmNlO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBhcHA6IEFwcCA9IG5ldyBBcHAoKTtcbmFwcC5zdGFydCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==