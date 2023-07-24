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
            _winners_view__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().drawTableBody();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sZ0ZBQWdGLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FB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LENBQUMsRUFBQztJQUN0SCxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsRUFBQztJQUN0Z0IsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBQztJQUNyTixFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFR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QSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNkO0FBRXJCLE1BQU0sR0FBRyxHQUFRLElBQUksdURBQUcsRUFBRSxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2FwcC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci12aWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9tYWluL2Nhci12aWV3L2Nhci1idXR0b25zLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9tYWluL2Nhci12aWV3L2Nhci1saW5lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9tYWluL2Nhci12aWV3L2ltYWdlLWl0ZW1zLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9tYWluL2dhcmFnZS12aWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9tYWluL21haW4tdmlldy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi93aW5uZXJzLXZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2FwaS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY2FyLWxpc3QudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWx7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiRXhvIDJcIiwgTGF0bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZ2FyYWdlLWJ1dHRvbixcbi53aW5uZXJzLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDlweCAjOTk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmdhcmFnZS1idXR0b246aG92ZXIsXG4ud2lubmVycy1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xufVxuXG4uZ2FyYWdlLWJ1dHRvbi5hY3RpdmUsXG4ud2lubmVycy1idXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG5cbi5idXR0b24tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG5cbi5idXR0b25DcmVhdGUsXG4uYnV0dG9uVXBkYXRlLFxuLnJhY2UtYnV0dG9uLFxuLnJlc2V0LWJ1dHRvbixcbi5nZW5lcmF0ZS1idXR0b24sXG4uYnV0dG9uUHJldixcbi5idXR0b25OZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzYWE1MjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuNnJlbTsgIFxuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbkNyZWF0ZTpob3Zlcixcbi5idXR0b25VcGRhdGU6aG92ZXIsXG4ucmFjZS1idXR0b246aG92ZXIsXG4ucmVzZXQtYnV0dG9uOmhvdmVyLFxuLmdlbmVyYXRlLWJ1dHRvbjpob3Zlcixcbi5idXR0b246aG92ZXIsXG4uYnV0dG9uUHJldjpob3Zlcixcbi5idXR0b25OZXh0OmhvdmVyIHtcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZmZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07ICBcbiAgcGFkZGluZzogMC4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBtYXJnaW46IDVweDtcbiAgb3BhY2l0eTogLjc7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3RhcnQsXG4uc3RvcCB7XG4gIGNvbG9yOiAjMDBmZjAwO1xuICBib3JkZXItY29sb3I6ICMwMGZmMDA7XG59XG5cbi5idXR0b24uZGlzYWJsZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG59XG5cbi5idXR0b24uZGlzYWJsZTpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MHJlbTtcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MHJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5jcmVhdGUtbGluZSxcbi51cGRhdGUtbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY29tbW9uLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnRhYmxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbnRoZWFkIHtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5jYXJzLW51bWJlcixcbi5wYWdlcy1udW1iZXIsXG4ud2lubmVycy1xdWFudGl0eSxcbi5wYWdlcy1xdWFudGl0eSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWdlcy1udW1iZXIsXG4ucGFnZXMtcXVhbnRpdHkge1xuICBjb2xvcjogYnVybHl3b29kO1xufVxuXG4ubGluZSB7XG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAjZmZmO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLmNhci1pbWFnZSBzdmcgeyAgXG4gIHdpZHRoOiBjYWxjKDE4cmVtIC0gOHZ3KTtcbiAgaGVpZ2h0OiBhdXRvO1xuXG59XG5cbi5jYXItdGl0dGxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiBidXJseXdvb2Q7XG59XG5cbi5jYXItc2Vjb25kLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogY2FsYygxOC41cmVtIC0gOHZ3KTtcbn1cblxuLnN0YXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMxYTBmMGY7XG59XG5cbi5wYWdlLWNvbnRyb2xzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnByZXYsXG4ubmV4dCB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTVyZW0gLSA4dncpO1xufVxuXG4ucHJldi5kaXNhYmxlZCxcbi5uZXh0LmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzU0NTQ1NDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAyMnZ3O1xuICB0b3A6IDQ1dmg7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogI0ZDMCAxcHggMCAxMHB4O1xuICBhbmltYXRpb24tbmFtZTogYWN0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBhY3Rpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi50Ym9keSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGQtY2FyIHN2ZyB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xufVxuXG50aCxcbnRkIHtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG59XG50aCB7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLndpbm5lcnMtY29udHJvbHMtcGFnZSB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4uYnV0dG9uLXdpbnMsXG4uYnV0dG9uLXRpbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix3REFBd0Q7QUFDMUQ7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUVBOzs7Ozs7O0VBT0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7QUFRQSwyQkFBMkI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWx7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBmb250LWZhbWlseTogXFxcIkV4byAyXFxcIiwgTGF0bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdhcmFnZS1idXR0b24sXFxuLndpbm5lcnMtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDRweCAyNXB4O1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDAgOXB4ICM5OTk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmdhcmFnZS1idXR0b246aG92ZXIsXFxuLndpbm5lcnMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XFxufVxcblxcbi5nYXJhZ2UtYnV0dG9uLmFjdGl2ZSxcXG4ud2lubmVycy1idXR0b24uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XFxuICBib3gtc2hhZG93OiAwIDVweCAjNjY2O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi5idXR0b24tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XFxuICBib3gtc2hhZG93OiAwIDVweCAjNjY2O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi5idXR0b25DcmVhdGUsXFxuLmJ1dHRvblVwZGF0ZSxcXG4ucmFjZS1idXR0b24sXFxuLnJlc2V0LWJ1dHRvbixcXG4uZ2VuZXJhdGUtYnV0dG9uLFxcbi5idXR0b25QcmV2LFxcbi5idXR0b25OZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxM2FhNTI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNnJlbTsgIFxcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uQ3JlYXRlOmhvdmVyLFxcbi5idXR0b25VcGRhdGU6aG92ZXIsXFxuLnJhY2UtYnV0dG9uOmhvdmVyLFxcbi5yZXNldC1idXR0b246aG92ZXIsXFxuLmdlbmVyYXRlLWJ1dHRvbjpob3ZlcixcXG4uYnV0dG9uOmhvdmVyLFxcbi5idXR0b25QcmV2OmhvdmVyLFxcbi5idXR0b25OZXh0OmhvdmVyIHtcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcblxcbi5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZmZmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07ICBcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBvcGFjaXR5OiAuNztcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3RhcnQsXFxuLnN0b3Age1xcbiAgY29sb3I6ICMwMGZmMDA7XFxuICBib3JkZXItY29sb3I6ICMwMGZmMDA7XFxufVxcblxcbi5idXR0b24uZGlzYWJsZSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQ6ICM2NjY7XFxufVxcblxcbi5idXR0b24uZGlzYWJsZTpob3ZlciB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmNyZWF0ZS1saW5lLFxcbi51cGRhdGUtbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jb21tb24tbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YWJsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbnRoZWFkIHtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmNhcnMtbnVtYmVyLFxcbi5wYWdlcy1udW1iZXIsXFxuLndpbm5lcnMtcXVhbnRpdHksXFxuLnBhZ2VzLXF1YW50aXR5IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBhZ2VzLW51bWJlcixcXG4ucGFnZXMtcXVhbnRpdHkge1xcbiAgY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLmxpbmUge1xcbiAgYm9yZGVyLWJvdHRvbTogZGFzaGVkICNmZmY7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNhci1pbWFnZSBzdmcgeyAgXFxuICB3aWR0aDogY2FsYygxOHJlbSAtIDh2dyk7XFxuICBoZWlnaHQ6IGF1dG87XFxuXFxufVxcblxcbi5jYXItdGl0dGxlIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6IGJ1cmx5d29vZDtcXG59XFxuXFxuLmNhci1zZWNvbmQtbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZsYWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IGNhbGMoMTguNXJlbSAtIDh2dyk7XFxufVxcblxcbi5zdGFydC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMWEwZjBmO1xcbn1cXG5cXG4ucGFnZS1jb250cm9scyB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ucHJldixcXG4ubmV4dCB7XFxuICB3aWR0aDogMTByZW07XFxuICBtYXJnaW4tbGVmdDogY2FsYygxNXJlbSAtIDh2dyk7XFxufVxcblxcbi5wcmV2LmRpc2FibGVkLFxcbi5uZXh0LmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6ICM1NDU0NTQ7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMjJ2dztcXG4gIHRvcDogNDV2aDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAjRkMwIDFweCAwIDEwcHg7XFxuICBhbmltYXRpb24tbmFtZTogYWN0aW9uO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFjdGlvbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuLnRib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGQtY2FyIHN2ZyB7XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbnRoLFxcbnRkIHtcXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xcbn1cXG50aCB7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi53aW5uZXJzLWNvbnRyb2xzLXBhZ2Uge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5idXR0b24td2lucyxcXG4uYnV0dG9uLXRpbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXItdmlldyc7XG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi9tYWluL21haW4tdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWFkZXIgPSBuZXcgSGVhZGVyKCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtYWluID0gbmV3IE1haW5WaWV3KCk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlVmlldygpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVZpZXcoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuaGVhZGVyLmNyZWF0ZSh0aGlzLm1haW4pLCB0aGlzLm1haW4uY3JlYXRlKCkpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7fVxufVxuIiwiaW1wb3J0IEdhcmFnZVZpZXcgZnJvbSAnLi4vbWFpbi9nYXJhZ2Utdmlldyc7XG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi4vbWFpbi9tYWluLXZpZXcnO1xuaW1wb3J0IFdpbm5lcnNWaWV3IGZyb20gJy4uL21haW4vd2lubmVycy12aWV3JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gICAgcHJpdmF0ZSBOYW1lQnV0dG9ucyA9IHtcbiAgICAgICAgR0FSQUdFOiAnVG8gR2FyYWdlJyxcbiAgICAgICAgV0lOTkVSUzogJ1RvIFdpbm5lcnMnLFxuICAgIH07XG4gICAgcHJpdmF0ZSBjbGFzc0J1dHRvbiA9IHtcbiAgICAgICAgR0FSQUdFOiAnZ2FyYWdlLWJ1dHRvbicsXG4gICAgICAgIFdJTk5FUlM6ICd3aW5uZXJzLWJ1dHRvbicsXG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2FyYWdlQnV0dG9uOiBIVE1MRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbdGhpcy5jbGFzc0J1dHRvbi5HQVJBR0VdLCB0aGlzLk5hbWVCdXR0b25zLkdBUkFHRSk7XG4gICAgcHJpdmF0ZSB3aW5uZXJzQnV0dG9uOiBIVE1MRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbdGhpcy5jbGFzc0J1dHRvbi5XSU5ORVJTXSwgdGhpcy5OYW1lQnV0dG9ucy5XSU5ORVJTKTtcbiAgICBwcml2YXRlIGhlYWRlcjogSFRNTEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdoZWFkZXInLCBbJ2hlYWRlciddKTtcblxuICAgIHB1YmxpYyBjcmVhdGUobWFpbkNvbXBvbmVudDogTWFpblZpZXcpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHRoaXMuZ2FyYWdlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmhlYWRlci5hcHBlbmQodGhpcy5nYXJhZ2VCdXR0b24sIHRoaXMud2lubmVyc0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZ2FyYWdlVmlldyA9IG5ldyBHYXJhZ2VWaWV3KCkuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FyYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aW5uZXJzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5nYXJhZ2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmdhcmFnZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIG1haW5Db21wb25lbnQuc2V0Q29udGVudChnYXJhZ2VWaWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1haW5Db21wb25lbnQuc2V0Q29udGVudChnYXJhZ2VWaWV3KTtcblxuICAgICAgICBjb25zdCB3aW5uZXJzVmlldyA9IFdpbm5lcnNWaWV3LmdldEluc3RhbmNlKCkuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMud2lubmVyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy53aW5uZXJzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy53aW5uZXJzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgbWFpbkNvbXBvbmVudC5zZXRDb250ZW50KHdpbm5lcnNWaWV3KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhclR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9iYXNlJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZpbmRDbG9zZXN0LCBmaW5kU2VsZWN0b3IsIGZpbmRTZWxlY3RvcklucHV0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Q2FyQXBpLCBnZXRDYXJzT25QYWdlQXBpLCBnZXROdW1iZXJDYXJzQXBpLCByZW1vdmVDYXJBcGksIHJlbW92ZUNhckZyb21XaW5uZXJzQXBpIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcbmltcG9ydCBDYXJMaW5lIGZyb20gJy4vY2FyLWxpbmUnO1xuaW1wb3J0IFdpbm5lcnNWaWV3IGZyb20gJy4uL3dpbm5lcnMtdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhckJ1dHRvbnMge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgRklSU1RfUEFHRTogbnVtYmVyID0gMTtcbiAgICBwdWJsaWMgY3JlYXRlKCkge31cblxuICAgIHB1YmxpYyBnZXRTZWxlY3RCdXR0b24oaWQ6IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYScsIFsnc2VsZWN0JywgJ2J1dHRvbicsIGAke2lkfWBdLCAnU2VsZWN0Jyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRleHQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBmaW5kU2VsZWN0b3JJbnB1dCgnLnVwZGF0ZVRleHQnKTtcbiAgICAgICAgICAgIHVwZGF0ZVRleHQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVCdXR0b246IEhUTUxJbnB1dEVsZW1lbnQgPSBmaW5kU2VsZWN0b3JJbnB1dCgnLmJ1dHRvblVwZGF0ZScpO1xuICAgICAgICAgICAgdXBkYXRlQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5lJykuZm9yRWFjaCgobGluZSkgPT4gbGluZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgIGZpbmRDbG9zZXN0KGJ1dHRvbiwgJy5saW5lJykuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXJBcGkoaWQpO1xuICAgICAgICAgICAgdXBkYXRlVGV4dC52YWx1ZSA9IGRhdGEubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUNvbG9yOiBIVE1MSW5wdXRFbGVtZW50ID0gZmluZFNlbGVjdG9ySW5wdXQoJy51cGRhdGVDb2xvcicpO1xuICAgICAgICAgICAgdXBkYXRlQ29sb3IudmFsdWUgPSBkYXRhLmNvbG9yO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG4gICAgcHVibGljIGdldFJlbW92ZUJ1dHRvbihpZDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdhJywgWydyZW1vdmUnLCAnYnV0dG9uJywgYCR7aWR9YF0sICdSZW1vdmUnKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlQ2FyQXBpKGlkKTtcbiAgICAgICAgICAgIHJlbW92ZUNhckZyb21XaW5uZXJzQXBpKGlkKTtcbiAgICAgICAgICAgIGZpbmRDbG9zZXN0KGJ1dHRvbiwgJy5saW5lJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdhcmFnZVF1YW50aXR5KCk7XG4gICAgICAgICAgICBjb25zdCBjYXJzT25QYWdlQWZ0ZXJSZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluZScpLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjYXJzT25QYWdlQWZ0ZXJSZW1vdmUgPCA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VRdWFudGl0eSgpO1xuICAgICAgICAgICAgV2lubmVyc1ZpZXcuZ2V0SW5zdGFuY2UoKS5zZXRXaW5uZXJzRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIFdpbm5lcnNWaWV3LmdldEluc3RhbmNlKCkudXBkYXRlQ29udHJvbEJ1dHRvbnMoKTtcbiAgICAgICAgICAgIFdpbm5lcnNWaWV3LmdldEluc3RhbmNlKCkuZHJhd1RhYmxlQm9keSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3RhcnRCdXR0b24oaWQ6IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b246IEhUTUxFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnYScsIFsnc3RhcnQnLCAnYnV0dG9uJ10sICdBJyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0QnV0dG9uO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0U3RvcEJ1dHRvbihpZDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBzdG9wQnV0dG9uOiBIVE1MRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ3N0b3AnLCAnYnV0dG9uJywgJ2Rpc2FibGUnXSwgJ0InKTtcbiAgICAgICAgc3RvcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiBzdG9wQnV0dG9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlR2FyYWdlUXVhbnRpdHkoKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gYXdhaXQgZ2V0TnVtYmVyQ2Fyc0FwaSgpO1xuICAgICAgICBjb25zdCBjYXJzTnVtYmVyID0gZmluZFNlbGVjdG9yKCcuY2Fycy1udW1iZXInKTtcbiAgICAgICAgY2Fyc051bWJlci5pbm5lckhUTUwgPSBgR2FyYWdlKCR7cXVhbnRpdHl9KWA7XG4gICAgICAgIGNhcnNOdW1iZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3F1YW50aXR5fWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlQWN0aXZlUGFnZSgpIHtcbiAgICAgICAgY29uc3QgTEFTVF9DQVJfT05fUEFHRSA9IDY7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVBhZ2UgPSBOdW1iZXIoZmluZFNlbGVjdG9yKCcucGFnZXMtbnVtYmVyJykuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENhcnNPblBhZ2VBcGkoYWN0aXZlUGFnZSk7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IExBU1RfQ0FSX09OX1BBR0UpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkYXRhW0xBU1RfQ0FSX09OX1BBR0VdLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGRhdGFbTEFTVF9DQVJfT05fUEFHRV0uY29sb3I7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGRhdGFbTEFTVF9DQVJfT05fUEFHRV0uaWQ7XG4gICAgICAgICAgICBjb25zdCBsYXN0TGluZSA9IG5ldyBDYXJMaW5lKGlkKS5jcmVhdGUobmFtZSwgY29sb3IsIGlkKTtcbiAgICAgICAgICAgIGZpbmRTZWxlY3RvcignLmdhcmFnZScpLmFwcGVuZChsYXN0TGluZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVQYWdlUXVhbnRpdHkoKSB7XG4gICAgICAgIGNvbnN0IENBUlNfT05fUEFHRSA9IDc7XG4gICAgICAgIGNvbnN0IGNhcnNRdWFudGl0eSA9IGF3YWl0IGdldE51bWJlckNhcnNBcGkoKTtcbiAgICAgICAgY29uc3QgcGFnZXNOdW1iZXJFbGVtZW50ID0gZmluZFNlbGVjdG9yKCcucGFnZXMtbnVtYmVyJyk7XG4gICAgICAgIGxldCBhY3RpdmVQYWdlID0gTnVtYmVyKHBhZ2VzTnVtYmVyRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICBjb25zdCBjYXJzT25QYWdlQWZ0ZXJSZW1vdmUgPSBhd2FpdCBnZXRDYXJzT25QYWdlQXBpKGFjdGl2ZVBhZ2UpO1xuICAgICAgICBpZiAoY2Fyc09uUGFnZUFmdGVyUmVtb3ZlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVBhZ2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSAtPSAxO1xuICAgICAgICAgICAgICAgIHBhZ2VzTnVtYmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYWN0aXZlUGFnZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2Fyc09uUGFnZUFwaShhY3RpdmVQYWdlKTtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IENhclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyTGluZSA9IG5ldyBDYXJMaW5lKGVsZW1lbnQuaWQpLmNyZWF0ZShlbGVtZW50Lm5hbWUsIGVsZW1lbnQuY29sb3IsIGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmaW5kU2VsZWN0b3IoJy5nYXJhZ2UnKS5hcHBlbmQoY2FyTGluZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVhbnRpdHlQYWdlcyA9IE1hdGguY2VpbChOdW1iZXIoY2Fyc1F1YW50aXR5KSAvIENBUlNfT05fUEFHRSk7XG4gICAgICAgIHBhZ2VzTnVtYmVyRWxlbWVudC5pbm5lckhUTUwgPSBgUGFnZXMgJHthY3RpdmVQYWdlfS8ke3F1YW50aXR5UGFnZXN9YDtcbiAgICAgICAgaWYgKGFjdGl2ZVBhZ2UgPT09IHF1YW50aXR5UGFnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbk5leHQgPSBmaW5kU2VsZWN0b3IoJy5idXR0b25OZXh0Jyk7XG4gICAgICAgICAgICBidXR0b25OZXh0LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZVBhZ2UgPT09IHRoaXMuRklSU1RfUEFHRSkge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUHJldiA9IGZpbmRTZWxlY3RvcignLmJ1dHRvblByZXYnKTtcbiAgICAgICAgICAgIGJ1dHRvblByZXYuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHN0YXJ0RW5naW5lQXBpLCBzdG9wRW5naW5lLCBzd2l0Y2hFbmdpbmVUb0RyaXZlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZpbmRTZWxlY3RvciwgZ2V0RGlzdGFuY2UgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgQ2FyQnV0dG9ucyBmcm9tICcuL2Nhci1idXR0b25zJztcbmltcG9ydCBJbWFnZUl0ZW1zIGZyb20gJy4vaW1hZ2UtaXRlbXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJMaW5lIHtcbiAgICBwcml2YXRlIHJlcXVlc3RJRDogbnVtYmVyO1xuICAgIHByaXZhdGUgYnV0dG9uczogQ2FyQnV0dG9ucztcbiAgICBwcml2YXRlIHN0YXJ0QnV0dG9uOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHN0b3BCdXR0b246IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5idXR0b25zID0gbmV3IENhckJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbiA9IHRoaXMuYnV0dG9ucy5nZXRTdGFydEJ1dHRvbihpZCk7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbiA9IHRoaXMuYnV0dG9ucy5nZXRTdG9wQnV0dG9uKGlkKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SUQgPSAwO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZywgaWQ6IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgY2FyRmlyc3RMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydjYXItZmlyc3QtbGluZSddKTtcbiAgICAgICAgY2FyRmlyc3RMaW5lLmFwcGVuZCh0aGlzLmJ1dHRvbnMuZ2V0U2VsZWN0QnV0dG9uKGlkKSwgdGhpcy5idXR0b25zLmdldFJlbW92ZUJ1dHRvbihpZCkpO1xuICAgICAgICBjYXJGaXJzdExpbmUuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBbJ2Nhci10aXR0bGUnLCBgdGl0dGxlLWlkLSR7aWR9YF0sIG5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FyU2Vjb25kTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY2FyLXNlY29uZC1saW5lJ10pO1xuICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydzdGFydC1jb250YWluZXInXSk7XG4gICAgICAgIGNvbnN0IGltYWdlQ2FyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgW2BjYXItaW1hZ2VgLCBgaW1hZ2UtaWQtJHtpZH1gXSk7XG4gICAgICAgIGltYWdlQ2FyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpZH1gKTtcbiAgICAgICAgaW1hZ2VDYXIuaW5uZXJIVE1MID0gSW1hZ2VJdGVtcy5nZXRDYXIoY29sb3IpO1xuICAgICAgICBzdGFydFBvc2l0aW9uLmFwcGVuZCh0aGlzLnN0YXJ0QnV0dG9uLCB0aGlzLnN0b3BCdXR0b24sIGltYWdlQ2FyKTtcbiAgICAgICAgY2FyU2Vjb25kTGluZS5hcHBlbmQoc3RhcnRQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGltYWdlRmxhZyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZmxhZyddKTtcbiAgICAgICAgaW1hZ2VGbGFnLmlubmVySFRNTCA9IEltYWdlSXRlbXMuZ2V0RmxhZygpO1xuICAgICAgICBjYXJTZWNvbmRMaW5lLmFwcGVuZChpbWFnZUZsYWcpO1xuICAgICAgICBjb25zdCBjYXJMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydsaW5lJywgaWQudG9TdHJpbmcoKV0pO1xuICAgICAgICBjYXJMaW5lLmFwcGVuZChjYXJGaXJzdExpbmUsIGNhclNlY29uZExpbmUpO1xuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXJTdGFydGVkKGlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FyU3RvcHBlZChpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2FyTGluZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhc3luYyBjYXJTdGFydGVkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgICAgIGNvbnN0IGRhdGFTdGFydGVkID0gYXdhaXQgc3RhcnRFbmdpbmVBcGkoaWQpO1xuICAgICAgICBjb25zdCB0aW1lRm9yQW5pbWF0aW9uID0gZGF0YVN0YXJ0ZWQuZGlzdGFuY2UgLyBkYXRhU3RhcnRlZC52ZWxvY2l0eTtcbiAgICAgICAgY29uc3QgY2FyRm9yQW5pbWF0aW9uID0gZmluZFNlbGVjdG9yKGAuaW1hZ2UtaWQtJHtpZH1gKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBnZXREaXN0YW5jZSgpO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgZ3Jvd0luU2VjOiBudW1iZXIgPSAoZGlzdGFuY2UgKiAxMDAwKSAvIHRpbWVGb3JBbmltYXRpb247XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBzdGVwOiBudW1iZXIgPSAoKGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDApICogZ3Jvd0luU2VjO1xuICAgICAgICAgICAgaWYgKHN0ZXAgPCBkaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNhckZvckFuaW1hdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3N0ZXB9cHgpYDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdElEO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlcXVlc3RJRCA9IGFuaW1hdGlvbigpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YURyaXZlID0gYXdhaXQgc3dpdGNoRW5naW5lVG9Ecml2ZShpZCk7XG4gICAgICAgICAgICBpZiAoZGF0YURyaXZlLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBjYXJTdG9wcGVkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XG4gICAgICAgIGNvbnN0IGNhckZvckFuaW1hdGlvbiA9IGZpbmRTZWxlY3RvcihgLmltYWdlLWlkLSR7aWR9YCk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElEKTtcbiAgICAgICAgY2FyRm9yQW5pbWF0aW9uLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgO1xuICAgICAgICBhd2FpdCBzdG9wRW5naW5lKGlkKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUl0ZW1zIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q2FyKGNvbG9yID0gJyNmZmZmZmYnKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGA8IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAyMDAxMDkwNC8vRU5cIlxuICAgICBcImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkXCI+XG4gICAgPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgIHdpZHRoPVwiMTI4MC4wMDAwMDBwdFwiIGhlaWdodD1cIjY0MC4wMDAwMDBwdFwiIHZpZXdCb3g9XCIwIDAgMTI4MC4wMDAwMDAgNjQwLjAwMDAwMFwiXG4gICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgPG1ldGFkYXRhPlxuICAgIENyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxN1xuICAgIDwvbWV0YWRhdGE+XG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDY0MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIlxuICAgIGZpbGw9JHtjb2xvcn0gc3Ryb2tlPVwibm9uZVwiPlxuICAgIDxwYXRoIGQ9XCJNMzU2NSA1MzM2IGMtMTA2IC0zMCAtMTAxIC0yNiAtMTA4IC0xMTEgLTQgLTQyIC05IC04MCAtMTIgLTg1IC02XG4gICAgLTEwIC0yNDYgLTEwNSAtNTkwIC0yMzQgLTQ0OCAtMTY3IC0xMDUyIC00MTUgLTExNzMgLTQ4MyAtNzggLTQzIC0xOTMgLTkxXG4gICAgLTI1MCAtMTA0IC0yMyAtNSAtOTggLTE0IC0xNjUgLTE5IC02NyAtNiAtMTY3IC0xOSAtMjIyIC0zMCAtMTU0IC0zMSAtMzQwXG4gICAgLTQ5IC01NjMgLTU3IGwtMjAzIC02IC00MyAtNjYgYy01OSAtOTEgLTYwIC05NSAtMjYgLTEzMCAzNyAtMzcgMzggLTY1IDNcbiAgICAtMTUwIC0yNSAtNjIgLTI3IC03OCAtMzEgLTI1NiBsLTQgLTE5MCAtMzggLTMyIGMtOTEgLTc4IC0xMzMgLTIwOSAtMTM0IC00MThcbiAgICAwIC0xOTQgMTEgLTM5NiAyNiAtNDgyIDEzIC03MSAxNCAtNzQgNzIgLTEyMiA2OSAtNTggMTMwIC0xMjkgMTU4IC0xODQgNjRcbiAgICAtMTI2IDUzNCAtMjExIDEzODQgLTI1MCBsOTIgLTQgLTYgMTE5IGMtNiAxNDIgOCAyNTYgNDkgMzgzIDExMiAzNTIgMzk0IDYyMlxuICAgIDc1NiA3MjIgOTAgMjYgMTEyIDI4IDI3OCAyOCAxNjUgMCAxODggLTIgMjc4IC0yNyAyMDEgLTU2IDM2MSAtMTUyIDUwNCAtMzAyXG4gICAgMTQwIC0xNDUgMjIyIC0yOTMgMjc0IC00OTIgMjEgLTc5IDI0IC0xMDkgMjMgLTI3OSAtMSAtMTI3IC02IC0yMTQgLTE2IC0yNjNcbiAgICBsLTE1IC03MyAzMDA2IDcgYzE2NTMgNCAzMDA3IDggMzAwOSA5IDEgMSAtOCAzNyAtMjAgODEgLTE5IDY3IC0yMiAxMDUgLTIyXG4gICAgMjU5IC0xIDE2NiAxIDE4NyAyNyAyNzkgMTE3IDQyMSA0NjcgNzM2IDg4NSA3OTcgMTE5IDE3IDMyNSA3IDQzMiAtMjEgMjM5XG4gICAgLTYzIDQ1MyAtMjA1IDYwMSAtMzk5IDcwIC05MiAxNTQgLTI2NyAxODUgLTM4NiAyNCAtODggMjcgLTExOSAyNyAtMjYwIDFcbiAgICAtMTE2IC00IC0xODEgLTE2IC0yMzQgLTEwIC00MSAtMTYgLTc1IC0xNSAtNzYgMiAtMSA2MiAyIDEzMyA2IDI2NiAxNiA0NTggNDVcbiAgICA1MjUgNzkgNDggMjQgOTcgODEgMTI3IDE0NiBsMjQgNTIgLTE2IDE1NyBjLTE1IDE1MiAtMTUgMTYzIDQgMjg0IDYzIDM4OCA1MFxuICAgIDY4MCAtMzUgODAyIC0xMzQgMTkzIC01MjYgMzM2IC0xNDI5IDUxOSAtNzM3IDE0OSAtMTMyMiAyMDkgLTIwMzMgMjEwIC0yMjggMFxuICAgIC0yMjYgMCAtMzQ3IDg1IC0xODcgMTMxIC0xMDQ1IDYwNyAtMTQ3MSA4MTUgLTM4MyAxODcgLTc4OCAyODEgLTE0MzkgMzMyXG4gICAgLTIwOCAxNyAtMTEwNiAxNiAtMTQwMCAwIC0xMjEgLTcgLTMxNCAtMTkgLTQzMCAtMjcgLTMwMiAtMjIgLTI4NiAtMjIgLTM0MVxuICAgIDEwIC0xNDAgODEgLTE4NyA5NCAtMjY5IDcxeiBtMTg4NSAtMzMzIGM2IC0zNyAzOCAtMjM4IDcxIC00NDYgMzIgLTIwOSA2NlxuICAgIC00MjIgNzUgLTQ3NCA5IC01MiAxNSAtOTYgMTMgLTk3IC0xMSAtOSAtMTY5OSAyOSAtMTk1MSA0NCAtMjA2IDEzIC00MTcgMzZcbiAgICAtNDg1IDU0IC05OCAyNiAtMTk4IDExOSAtMjQ5IDIzMSAtMzUgNzUgLTM2IDE3MiAtNSAyNTUgMTcgNDUgMzAgNjEgNjggODYgODNcbiAgICA1NCAxMzUgODAgMjUzIDEyNyAzNDEgMTM2IDg1OCAyMzAgMTQ2MCAyNjcgMjY5IDE2IDI3MCAxNiA1MTEgMTggbDIyNyAyIDEyXG4gICAgLTY3eiBtNjMwIDQ3IGMyNjQgLTE4IDc3NyAtMTEwIDEwMjkgLTE4NiAxODYgLTU2IDQ0NSAtMTg4IDc1NiAtMzg3IDIxMSAtMTM0XG4gICAgMjc0IC0xODEgMjUwIC0xODUgLTc1IC0xMiAtMTMzIC01MCAtMTYyIC0xMDYgLTE5IC0zNSAtMjEgLTEzNiAtNCAtMTc5IGwxMVxuICAgIC0yNyAtOTA3IDIgLTkwNiAzIC01OSAxNjAgYy0xMTAgMzAyIC0yOTggODc4IC0yOTggOTE2IDAgNiA5NSAyIDI5MCAtMTF6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjYzMyAzMTI1IGMtMjIzIC00MCAtNDEwIC0xNDEgLTU2OCAtMzA2IC0xMzIgLTEzOCAtMjEzIC0yODMgLTI2MlxuICAgIC00NjcgLTIyIC04MyAtMjYgLTExOSAtMjYgLTI0NyAtMSAtMTY5IDEwIC0yMzYgNjUgLTM4MiA4NyAtMjMwIDI3MSAtNDM2IDQ5M1xuICAgIC01NTEgODUgLTQ0IDE3OCAtNzggMjcxIC05OCAxMDcgLTIzIDMxMiAtMjMgNDE5IDEgMzkyIDg0IDY5OSAzNzUgODAyIDc2MSAyM1xuICAgIDg2IDI2IDEyMCAyNyAyNTQgMSAxNTggLTUgMTk5IC00NiAzMzAgLTk4IDMxMCAtMzU1IDU2NyAtNjY4IDY2OSAtMTUwIDUwXG4gICAgLTM1NCA2NCAtNTA3IDM2eiBtMzUwIC0zMDEgYzI0OSAtNTYgNDU3IC0yNDcgNTQzIC00OTkgMjUgLTcyIDI4IC05NSAyOCAtMjIwXG4gICAgMSAtMTUzIC0xNSAtMjI4IC03NCAtMzQ1IC05NCAtMTg2IC0yODMgLTMzNyAtNDg1IC0zODYgLTk2IC0yNCAtMjY4IC0yNCAtMzYwXG4gICAgMCAtMzIwIDg0IC01NDQgMzU1IC01NjIgNjgxIC0yMCAzNTkgMjA5IDY3MyA1NTggNzY1IDk0IDI0IDI1MyAyNiAzNTIgNHpcIi8+XG4gICAgPHBhdGggZD1cIk0yNjAwIDI2OTcgYy0zNiAtMTMgLTg1IC0zNiAtMTA5IC01MSBsLTQ0IC0yOCAxMTYgLTExNSBjODEgLTgyIDEyMFxuICAgIC0xMTQgMTMxIC0xMTAgMTQgNiAxNiAyOSAxNiAxNjcgMCAxODYgNiAxNzggLTExMCAxMzd6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjkyMCAyNTYxIGMwIC0xMzkgMiAtMTYyIDE2IC0xNjggMTEgLTQgNTAgMjggMTMwIDEwOCBsMTE1IDExNCAtMjhcbiAgICAyMiBjLTM0IDI4IC0xMzggNzAgLTE5MyA3OSBsLTQwIDcgMCAtMTYyelwiLz5cbiAgICA8cGF0aCBkPVwiTTIyODIgMjQ0OCBjLTI4IC0zNiAtOTIgLTE5MSAtOTIgLTIyNSAwIC0xMCAzNCAtMTMgMTY1IC0xMyAxNTEgMFxuICAgIDE2NSAxIDE2NSAxOCAwIDE1IC0yMDYgMjMyIC0yMjEgMjMyIC00IDAgLTExIC02IC0xNyAtMTJ6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMzIyMiAyMzUxIGMtNjIgLTU5IC0xMTIgLTExNSAtMTEyIC0xMjQgMCAtMTUgMTcgLTE3IDE2NSAtMTcgMTMxIDBcbiAgICAxNjUgMyAxNjUgMTMgMCA0MCAtNjkgMjA1IC05NSAyMjcgLTcgNiAtNDggLTI3IC0xMjMgLTk5elwiLz5cbiAgICA8cGF0aCBkPVwiTTI3ODEgMjMzMiBjLTEyIC0yMiAxMSAtNjIgMzQgLTYyIDggMCAyMSAxMCAyOSAyMiAyMCAyOCA0IDU4IC0yOVxuICAgIDU4IC0xMyAwIC0yOSAtOCAtMzQgLTE4elwiLz5cbiAgICA8cGF0aCBkPVwiTTI3NDkgMjE2MSBjLTMyIC0zMyAtMzcgLTY3IC0xNCAtMTEwIDI5IC01NyAxMDQgLTY0IDE1MSAtMTQgNTMgNTdcbiAgICA5IDE1MyAtNzEgMTUzIC0yNyAwIC00NCAtOCAtNjYgLTI5elwiLz5cbiAgICA8cGF0aCBkPVwiTTI1NzAgMjEyNSBjLTI2IC0zMiAxMyAtODEgNDggLTU5IDI0IDE2IDI3IDQ1IDYgNjEgLTIzIDE3IC0zOSAxNlxuICAgIC01NCAtMnpcIi8+XG4gICAgPHBhdGggZD1cIk0zMDA2IDIxMjQgYy0yMCAtMTkgLTIwIC0zOCAtMiAtNTQgMjMgLTE5IDYxIC04IDY0IDE4IDcgNDQgLTMyIDY3XG4gICAgLTYyIDM2elwiLz5cbiAgICA8cGF0aCBkPVwiTTIxOTAgMTk3NSBjMCAtMjkgNDEgLTE0MCA3MiAtMTk0IGwzMSAtNTMgMTE3IDExNyBjNzEgNzEgMTE2IDEyM1xuICAgIDExMyAxMzEgLTQgMTEgLTQwIDE0IC0xNjkgMTQgLTE0MSAwIC0xNjQgLTIgLTE2NCAtMTV6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMzExMCAxOTcyIGMwIC05IDUxIC02OCAxMTQgLTEzMSBsMTE0IC0xMTQgMzEgNTQgYzMwIDUxIDcxIDE2NSA3MVxuICAgIDE5NSAwIDExIC0zMSAxNCAtMTY1IDE0IC0xNTEgMCAtMTY1IC0xIC0xNjUgLTE4elwiLz5cbiAgICA8cGF0aCBkPVwiTTI3ODAgMTkwMSBjLTcgLTE1IC01IC0yNCA4IC00MSAzMiAtNDAgODUgLTQgNjIgNDEgLTE0IDI1IC01NiAyNVxuICAgIC03MCAwelwiLz5cbiAgICA8cGF0aCBkPVwiTTI1NjIgMTY5NyBjLTYxIC02MiAtMTEyIC0xMTUgLTExMiAtMTE5IDAgLTE4IDIwOCAtMTA4IDI0OSAtMTA4IDdcbiAgICAwIDExIDU0IDExIDE2NCAwIDE0MCAtMiAxNjUgLTE2IDE3MCAtOSAzIC0xNiA2IC0xNyA2IC0xIDAgLTUzIC01MSAtMTE1IC0xMTN6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMjkzMyAxODAzIGMtMTUgLTYgLTE5IC0zMzMgLTQgLTMzMyA0NiAwIDI1MSA4OCAyNTEgMTA4IDAgOSAtMjIzXG4gICAgMjMyIC0yMzAgMjMxIC0zIDAgLTExIC0zIC0xNyAtNnpcIi8+XG4gICAgPHBhdGggZD1cIk0xMDcwMCAzMTE5IGMtMzkwIC04NCAtNjk2IC0zNzYgLTc5NyAtNzU5IC0zMSAtMTE3IC00MSAtMjkyIC0yNFxuICAgIC00MTEgMzMgLTIyNyAxNTAgLTQ1MyAzMTggLTYwOSAyNjcgLTI1MCA2NDMgLTM0NCA5OTMgLTI0OSAxMTcgMzIgMjgzIDExOFxuICAgIDM4MCAxOTYgNDg3IDM5NiA1MTggMTEyOCA2NyAxNTYwIC05NyA5MyAtMTY2IDE0MCAtMjkwIDE5OCAtMTM3IDY0IC0yMzUgODZcbiAgICAtNDA3IDkxIC0xMjAgMyAtMTYyIDAgLTI0MCAtMTd6IG00NDUgLTMxMyBjMjM4IC04MSA0MDkgLTI1OCA0ODYgLTUwNiAzMCAtOTZcbiAgICAzMyAtMjg5IDUgLTM4OCAtMTEwIC00MDAgLTUxMyAtNjM3IC05MTEgLTUzNiAtMTQ5IDM4IC0zMTMgMTQ3IC00MDIgMjY3IC0xNzZcbiAgICAyMzggLTIwMyA1MzMgLTcxIDc5NyAzNCA2OSA2MCAxMDMgMTM4IDE4MCA3NyA3OCAxMTEgMTA0IDE4MSAxMzkgMTI5IDY1IDIwN1xuICAgIDgxIDM2NCA3NyAxMDkgLTMgMTQzIC03IDIxMCAtMzB6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTA3MDMgMjcwMCBjLTU0IC0xOSAtMTUzIC03MSAtMTUzIC04MCAwIC0zIDUxIC01NyAxMTQgLTExOSA4MCAtODBcbiAgICAxMTkgLTExMiAxMzAgLTEwOCAxNCA1IDE2IDI5IDE2IDE2NyBsMCAxNjAgLTI3IC0xIGMtMTYgMCAtNTIgLTkgLTgwIC0xOXpcIi8+XG4gICAgPHBhdGggZD1cIk0xMTAyMCAyNTYxIGMwIC0xMzkgMiAtMTYyIDE2IC0xNjggMjIgLTggMjQ3IDIxNiAyMzQgMjMyIC0xNyAyMFxuICAgIC0xNjMgODQgLTIwNyA5MSBsLTQzIDcgMCAtMTYyelwiLz5cbiAgICA8cGF0aCBkPVwiTTEwMzY2IDI0MjQgYy0yOSAtNDQgLTc2IC0xNjUgLTc2IC0xOTQgMCAtMTkgNyAtMjAgMTY1IC0yMCAxMjYgMFxuICAgIDE2NSAzIDE2NSAxMyAwIDcgLTUxIDYzIC0xMTQgMTI2IGwtMTE0IDExNCAtMjYgLTM5elwiLz5cbiAgICA8cGF0aCBkPVwiTTExMzEzIDIzNDggYy02MSAtNjIgLTEwOSAtMTE5IC0xMDYgLTEyNSA2IC0xNSAzMzMgLTE5IDMzMyAtNCAwIDQ1XG4gICAgLTg4IDI0MSAtMTA4IDI0MSAtNCAwIC01NyAtNTEgLTExOSAtMTEyelwiLz5cbiAgICA8cGF0aCBkPVwiTTEwODgyIDIzMzggYy0xNyAtMTcgLTE1IC0zMiA3IC01MiAxNiAtMTQgMjMgLTE1IDQxIC02IDMxIDE3IDI0IDY0XG4gICAgLTEwIDY4IC0xNCAyIC0zMSAtMyAtMzggLTEwelwiLz5cbiAgICA8cGF0aCBkPVwiTTEwODQ2IDIxNTkgYy02OCAtODEgMTcgLTE5NCAxMTAgLTE0NCA4OSA0OCA1NiAxNzUgLTQ2IDE3NSAtMzAgMFxuICAgIC00NCAtNiAtNjQgLTMxelwiLz5cbiAgICA8cGF0aCBkPVwiTTEwNjcwIDIxMjYgYy0xOSAtMjMgLTggLTYxIDE4IC02NCA0NCAtNyA2NyAzMiAzNiA2MiAtMTkgMjAgLTM4IDIwXG4gICAgLTU0IDJ6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTExMDYgMjEyNyBjLTIxIC0xNiAtMTggLTQ1IDcgLTYxIDM3IC0yMyA3NyAzNSA0MSA2MSAtMTAgNyAtMjEgMTNcbiAgICAtMjQgMTMgLTMgMCAtMTQgLTYgLTI0IC0xM3pcIi8+XG4gICAgPHBhdGggZD1cIk0xMDI5MCAxOTcwIGMwIC0yOSA0MyAtMTQxIDc0IC0xOTUgbDI4IC00OCAxMTYgMTE2IGM4MSA4MSAxMTMgMTIwXG4gICAgMTA5IDEzMSAtNiAxNCAtMjkgMTYgLTE2NyAxNiAtMTUyIDAgLTE2MCAtMSAtMTYwIC0yMHpcIi8+XG4gICAgPHBhdGggZD1cIk0xMTIwNyAxOTc4IGMtMyAtNyA0NyAtNjYgMTExIC0xMzAgbDExNiAtMTE4IDI3IDQzIGMyNyA0NCA3OSAxNzdcbiAgICA3OSAyMDMgMCAxMiAtMjggMTQgLTE2NCAxNCAtMTIyIDAgLTE2NiAtMyAtMTY5IC0xMnpcIi8+XG4gICAgPHBhdGggZD1cIk0xMDg4MSAxOTAxIGMtMTQgLTI1IC01IC00OCAyMCAtNTYgMjcgLTkgNTEgMTMgNDcgNDQgLTQgMzQgLTUxIDQzXG4gICAgLTY3IDEyelwiLz5cbiAgICA8cGF0aCBkPVwiTTEwNjYyIDE2OTcgYy02MSAtNjIgLTExMiAtMTE1IC0xMTIgLTExOSAwIC0yMCAyMDEgLTEwOCAyNDcgLTEwOFxuICAgIDEwIDAgMTMgMzQgMTMgMTY0IDAgMTQwIC0yIDE2NSAtMTYgMTcwIC05IDMgLTE2IDYgLTE3IDYgLTEgMCAtNTMgLTUxIC0xMTVcbiAgICAtMTEzelwiLz5cbiAgICA8cGF0aCBkPVwiTTExMDMzIDE4MDMgYy0xMCAtMyAtMTMgLTQ3IC0xMyAtMTY5IDAgLTkwIDQgLTE2NCA4IC0xNjQgMzYgMCAxODZcbiAgICA2MSAyMzkgOTggMTYgMTAgLTIxNiAyNDIgLTIzNCAyMzV6XCIvPlxuICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RmxhZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDxzdmcgZmlsbD0ncmVkJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiM2VtXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIEZyZWUgNi40LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNNjQgMzJDNjQgMTQuMyA0OS43IDAgMzIgMFMwIDE0LjMgMCAzMlY2NCAzNjggNDgwYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJWMzUybDY0LjMtMTYuMWM0MS4xLTEwLjMgODQuNi01LjUgMTIyLjUgMTMuNGM0NC4yIDIyLjEgOTUuNSAyNC44IDE0MS43IDcuNGwzNC43LTEzYzEyLjUtNC43IDIwLjgtMTYuNiAyMC44LTMwVjY2LjFjMC0yMy0yNC4yLTM4LTQ0LjgtMjcuN2wtOS42IDQuOGMtNDYuMyAyMy4yLTEwMC44IDIzLjItMTQ3LjEgMGMtMzUuMS0xNy42LTc1LjQtMjItMTEzLjUtMTIuNUw2NCA0OFYzMnpcIi8+PC9zdmc+YDtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlSW5wdXRFbGVtZW50LFxuICAgIGNyZWF0ZU1vZGFsVGV4dCxcbiAgICBmaW5kU2VsZWN0b3IsXG4gICAgZ2V0QXR0cmlidXRlLFxuICAgIGdldERpc3RhbmNlLFxuICAgIGdldFJhbmRvbUNvbG9yLFxuICAgIGdldFJhbmRvbU51bWJlcixcbiAgICByZW1vdmVNb2RhbFRleHQsXG59IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IENhclR5cGUgfSBmcm9tICcuLi91dGlscy9iYXNlJztcbmltcG9ydCBDYXJMaW5lIGZyb20gJy4vY2FyLXZpZXcvY2FyLWxpbmUnO1xuaW1wb3J0IHtcbiAgICBjcmVhdGVDYXJBcGksXG4gICAgY3JlYXRlV2lubmVyQXBpLFxuICAgIGdldENhckFwaSxcbiAgICBnZXRDYXJzT25QYWdlQXBpLFxuICAgIGdldE51bWJlckNhcnNBcGksXG4gICAgZ2V0V2lubmVyQXBpLFxuICAgIHN0YXJ0RW5naW5lQXBpLFxuICAgIHN0b3BFbmdpbmUsXG4gICAgc3dpdGNoRW5naW5lVG9Ecml2ZSxcbiAgICB1cGRhdGVDYXJBcGksXG4gICAgdXBkYXRlV2lubmVyQXBpLFxufSBmcm9tICcuLi91dGlscy9hcGknO1xuaW1wb3J0IEltYWdlSXRlbXMgZnJvbSAnLi9jYXItdmlldy9pbWFnZS1pdGVtcyc7XG5pbXBvcnQgQ2FyTGlzdCBmcm9tICcuLi91dGlscy9jYXItbGlzdCc7XG5pbXBvcnQgV2lubmVyc1ZpZXcgZnJvbSAnLi93aW5uZXJzLXZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXJhZ2VWaWV3IHtcbiAgICBwcml2YXRlIHVwZGF0ZUJ1dHRvbjogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGlucHV0VGV4dENyZWF0ZTogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGlucHV0VGV4dFVwZGF0ZTogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGdhcmFnZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBudW1iZXJDYXJzSW5HYXJhZ2U6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgbnVtYmVyUGFnZXNJbkdhcmFnZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpbnB1dENvbG9yQ3JlYXRlOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgaW5wdXRDb2xvclVwZGF0ZTogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJ1dHRvblByZXY6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBidXR0b25OZXh0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgRklSU1RfUEFHRSA9IDE7XG4gICAgcHJpdmF0ZSByZWFkb25seSBDQVJTX09OX1BBR0UgPSA3O1xuICAgIHByaXZhdGUgYWN0aXZlUGFnZSA9IDE7XG4gICAgcHJpdmF0ZSBxdWFudGl0eVBhZ2VzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBldmVudDogRXZlbnQ7XG4gICAgcHJpdmF0ZSBudW1iZXJGb3JGaXJzdFdpbm5lcjogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgTlVNQkVSX0ZPUl9SRVNFVDogbnVtYmVyID0gMTA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBGSVJTVF9XSU46IG51bWJlciA9IDE7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9uID0gY3JlYXRlSW5wdXRFbGVtZW50KFsnYnV0dG9uVXBkYXRlJ10sICdidXR0b24nLCAnVXBkYXRlJyk7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0Q3JlYXRlID0gY3JlYXRlSW5wdXRFbGVtZW50KFsnY3JlYXRlVGV4dCddLCAndGV4dCcpO1xuICAgICAgICB0aGlzLmlucHV0VGV4dFVwZGF0ZSA9IGNyZWF0ZUlucHV0RWxlbWVudChbJ3VwZGF0ZVRleHQnXSwgJ3RleHQnKTtcbiAgICAgICAgdGhpcy5nYXJhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2dhcmFnZSddKTtcbiAgICAgICAgdGhpcy5udW1iZXJDYXJzSW5HYXJhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2NhcnMtbnVtYmVyJ10pO1xuICAgICAgICB0aGlzLm51bWJlclBhZ2VzSW5HYXJhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3BhZ2VzLW51bWJlciddKTtcbiAgICAgICAgdGhpcy5pbnB1dENvbG9yQ3JlYXRlID0gY3JlYXRlSW5wdXRFbGVtZW50KFsnY3JlYXRlQ29sb3InXSwgJ2NvbG9yJywgJyNmZmZmZmYnKTtcbiAgICAgICAgdGhpcy5pbnB1dENvbG9yVXBkYXRlID0gY3JlYXRlSW5wdXRFbGVtZW50KFsndXBkYXRlQ29sb3InXSwgJ2NvbG9yJywgJyNmZmZmZmYnKTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2ID0gY3JlYXRlSW5wdXRFbGVtZW50KFsncHJldicsICdidXR0b25QcmV2JywgJ2Rpc2FibGVkJ10sICdidXR0b24nLCAnUHJldicpO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQgPSBjcmVhdGVJbnB1dEVsZW1lbnQoWyduZXh0JywgJ2J1dHRvbk5leHQnLCAnZGlzYWJsZWQnXSwgJ2J1dHRvbicsICdOZXh0Jyk7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgIHRoaXMucXVhbnRpdHlQYWdlcyA9IDE7XG4gICAgICAgIHRoaXMubnVtYmVyRm9yRmlyc3RXaW5uZXIgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2dhcmFnZS1jb250YWluZXInXSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5jcmVhdGVDb250cm9scygpLCB0aGlzLmNyZWF0ZUdhcmFnZSgpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVDb250cm9scygpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb250cm9scyddKTtcbiAgICAgICAgY29uc3QgY3JlYXRlTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY3JlYXRlLWxpbmUnXSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBbJ2J1dHRvbkNyZWF0ZSddLCAnQ3JlYXRlJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY3JlYXRlTmV3Q2FyKCkpO1xuICAgICAgICBjcmVhdGVMaW5lLmFwcGVuZCh0aGlzLmlucHV0VGV4dENyZWF0ZSwgdGhpcy5pbnB1dENvbG9yQ3JlYXRlLCBjcmVhdGVCdXR0b24pO1xuICAgICAgICB0aGlzLmlucHV0VGV4dFVwZGF0ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgY29uc3QgdXBkYXRlTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsndXBkYXRlLWxpbmUnXSk7XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnVwZGF0ZUNhcigpKTtcbiAgICAgICAgdXBkYXRlTGluZS5hcHBlbmQodGhpcy5pbnB1dFRleHRVcGRhdGUsIHRoaXMuaW5wdXRDb2xvclVwZGF0ZSwgdGhpcy51cGRhdGVCdXR0b24pO1xuICAgICAgICBjb25zdCBjb21tb25MaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb21tb24tbGluZSddKTtcbiAgICAgICAgY29uc3QgcmFjZUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdhJywgWydyYWNlLWJ1dHRvbiddLCAnUmFjZScpO1xuICAgICAgICByYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yYWNlKCkpO1xuICAgICAgICBjb25zdCByZXNldEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdhJywgWydyZXNldC1idXR0b24nXSwgJ1Jlc2V0Jyk7XG4gICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZXNldCgpKTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdhJywgWydnZW5lcmF0ZS1idXR0b24nXSwgJ0dlbmVyYXRlIENhcnMnKTtcbiAgICAgICAgZ2VuZXJhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmdlbmVyYXRlKCkpO1xuICAgICAgICBjb21tb25MaW5lLmFwcGVuZChyYWNlQnV0dG9uLCByZXNldEJ1dHRvbiwgZ2VuZXJhdGVCdXR0b24pO1xuICAgICAgICBjb250cm9scy5hcHBlbmQoY3JlYXRlTGluZSwgdXBkYXRlTGluZSwgY29tbW9uTGluZSk7XG4gICAgICAgIHJldHVybiBjb250cm9scztcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZUdhcmFnZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGdhcmFnZURlc2NyaXB0aW9uOiBIVE1MRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZ2FyYWdlLWRlc2NyaXB0aW9uJ10pO1xuICAgICAgICB0aGlzLm51bWJlclBhZ2VzSW5HYXJhZ2UuaWQgPSB0aGlzLmFjdGl2ZVBhZ2UudG9TdHJpbmcoKTtcbiAgICAgICAgZ2FyYWdlRGVzY3JpcHRpb24uYXBwZW5kKFxuICAgICAgICAgICAgdGhpcy5udW1iZXJDYXJzSW5HYXJhZ2UsXG4gICAgICAgICAgICB0aGlzLm51bWJlclBhZ2VzSW5HYXJhZ2UsXG4gICAgICAgICAgICB0aGlzLmdhcmFnZSxcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZXNDb250cm9scygpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0UXVhbnRpdHlDYXJzKCk7XG4gICAgICAgIHRoaXMuY2Fyc1ZpZXdJbkdhcmFnZU9uUGFnZSh0aGlzLkZJUlNUX1BBR0UpO1xuICAgICAgICByZXR1cm4gZ2FyYWdlRGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQYWdlc0NvbnRyb2xzKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsncGFnZS1jb250cm9scyddKTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuUHJldlBhZ2UoKSk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub3Blbk5leHRQYWdlKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuYnV0dG9uUHJldiwgdGhpcy5idXR0b25OZXh0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZU5ld0NhcigpIHtcbiAgICAgICAgdGhpcy5hZGRDcmVhdGVkQ2FyKCk7XG4gICAgICAgIHRoaXMuc2V0UXVhbnRpdHlDYXJzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVDYXIoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0VXBkYXRlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluZScpLmZvckVhY2goKGxpbmUpID0+IGxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyLnBhcnNlSW50KGdldEF0dHJpYnV0ZSh0aGlzLnVwZGF0ZUJ1dHRvbiwgJ2lkJykpO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5pbnB1dFRleHRVcGRhdGUudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5pbnB1dENvbG9yVXBkYXRlLnZhbHVlO1xuICAgICAgICBjb25zdCBwYXJhbSA9IHsgbmFtZSwgY29sb3IsIGlkIH07XG4gICAgICAgIGF3YWl0IHVwZGF0ZUNhckFwaShwYXJhbSk7XG4gICAgICAgIGNvbnN0IGltYWdlVXBkYXRlQ2FyID0gZmluZFNlbGVjdG9yKGAuaW1hZ2UtaWQtJHtpZH1gKTtcbiAgICAgICAgaW1hZ2VVcGRhdGVDYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGltYWdlVXBkYXRlQ2FyLmlubmVySFRNTCA9IEltYWdlSXRlbXMuZ2V0Q2FyKGNvbG9yKTtcbiAgICAgICAgZmluZFNlbGVjdG9yKGAudGl0dGxlLWlkLSR7aWR9YCkuaW5uZXJIVE1MID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbnB1dFRleHRVcGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmFjZSgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLm51bWJlckZvckZpcnN0V2lubmVyID0gMDtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBnZXREaXN0YW5jZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1pbWFnZScpLmZvckVhY2goYXN5bmMgKGNhcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGNhci5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFTdGFydGVkID0gYXdhaXQgc3RhcnRFbmdpbmVBcGkoaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVGb3JBbmltYXRpb24gPSBkYXRhU3RhcnRlZC5kaXN0YW5jZSAvIGRhdGFTdGFydGVkLnZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3dJblNlYzogbnVtYmVyID0gKGRpc3RhbmNlICogMTAwMCkgLyB0aW1lRm9yQW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0SUQgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcDogbnVtYmVyID0gKChjdXJyZW50VGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwKSAqIGdyb3dJblNlYztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHN0ZXAgPCBkaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7c3RlcH1weClgO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXIuc2V0QXR0cmlidXRlKCdyZXF1ZXN0SUQnLCByZXF1ZXN0SUQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFEcml2ZSA9IGF3YWl0IHN3aXRjaEVuZ2luZVRvRHJpdmUoaWQpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhRHJpdmUuc3RhdHVzID09PSA1MDApIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFEcml2ZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlckZvckZpcnN0V2lubmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bWJlckZvckZpcnN0V2lubmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhV2lubmVyID0gYXdhaXQgZ2V0V2lubmVyQXBpKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBOdW1iZXIoKHRpbWVGb3JBbmltYXRpb24gLyAxMDAwKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcldpbm5lciA9IGF3YWl0IGdldENhckFwaShpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVNb2RhbFRleHQoYFdpbm5lcjogJHtjYXJXaW5uZXIubmFtZX0sIHRpbWU6ICR7dGltZX1zZWNgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFXaW5uZXIud2lucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlV2lubmVyKGlkLCB0aW1lLCBkYXRhV2lubmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBhd2FpdCBjcmVhdGVXaW5uZXJBcGkoeyBpZCwgd2luczogdGhpcy5GSVJTVF9XSU4sIHRpbWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVdpbm5lcnNWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubnVtYmVyRm9yRmlyc3RXaW5uZXIgPSB0aGlzLk5VTUJFUl9GT1JfUkVTRVQ7XG4gICAgICAgIGNyZWF0ZU1vZGFsVGV4dCgpO1xuICAgICAgICByZW1vdmVNb2RhbFRleHQoKTtcbiAgICAgICAgY29uc3QgY2Fyc0ZvckFuaW1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItaW1hZ2UnKTtcbiAgICAgICAgY2Fyc0ZvckFuaW1hdGlvbi5mb3JFYWNoKGFzeW5jIChjYXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGNhci5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdElEID0gTnVtYmVyKGNhci5nZXRBdHRyaWJ1dGUoJ3JlcXVlc3RJRCcpKTtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG4gICAgICAgICAgICBhd2FpdCBzdG9wRW5naW5lKGlkKTtcbiAgICAgICAgICAgIGlmIChjYXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZW5lcmF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgTUFYX1FVQU5USVRZX0NBUlNfT05fUEFHRSA9IDc7XG4gICAgICAgIHRoaXMuYWRkQ2Fyc1RvQmFzZSh0aGlzLmdlbmVyYXRlTGlzdENhcnMoKSk7XG4gICAgICAgIHRoaXMuc2V0UXVhbnRpdHlDYXJzKCk7XG4gICAgICAgIGNvbnN0IGNhcnNPblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluZScpLmxlbmd0aDtcbiAgICAgICAgaWYgKGNhcnNPblBhZ2UgPCBNQVhfUVVBTlRJVFlfQ0FSU19PTl9QQUdFKSB0aGlzLmFkZENhcnNPblBhZ2UoY2Fyc09uUGFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZXRRdWFudGl0eUNhcnMoKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gYXdhaXQgZ2V0TnVtYmVyQ2Fyc0FwaSgpO1xuICAgICAgICB0aGlzLm51bWJlckNhcnNJbkdhcmFnZS5pbm5lckhUTUwgPSBgR2FyYWdlKCR7cXVhbnRpdHl9KWA7XG4gICAgICAgIHRoaXMubnVtYmVyQ2Fyc0luR2FyYWdlLmlkID0gYCR7cXVhbnRpdHl9YDtcbiAgICAgICAgdGhpcy5xdWFudGl0eVBhZ2VzID0gTWF0aC5jZWlsKE51bWJlcihxdWFudGl0eSkgLyB0aGlzLkNBUlNfT05fUEFHRSk7XG4gICAgICAgIHRoaXMubnVtYmVyUGFnZXNJbkdhcmFnZS5pbm5lckhUTUwgPSBgUGFnZSAke3RoaXMuYWN0aXZlUGFnZX0vJHt0aGlzLnF1YW50aXR5UGFnZXN9YDtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlQnV0dG9ucyh0aGlzLmFjdGl2ZVBhZ2UsIHRoaXMucXVhbnRpdHlQYWdlcyk7XG4gICAgfVxuICAgIHByaXZhdGUgYXN5bmMgY2Fyc1ZpZXdJbkdhcmFnZU9uUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5nYXJhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXJzT25QYWdlQXBpKHBhZ2UpO1xuICAgICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IENhclR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhckxpbmUgPSBuZXcgQ2FyTGluZShlbGVtZW50LmlkKS5jcmVhdGUoZWxlbWVudC5uYW1lLCBlbGVtZW50LmNvbG9yLCBlbGVtZW50LmlkKTtcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlLmFwcGVuZChjYXJMaW5lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBhZGRDcmVhdGVkQ2FyKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY3JlYXRlQ2FyQXBpKHsgbmFtZTogdGhpcy5pbnB1dFRleHRDcmVhdGUudmFsdWUsIGNvbG9yOiB0aGlzLmlucHV0Q29sb3JDcmVhdGUudmFsdWUgfSk7XG4gICAgICAgIGNvbnN0IGNhcnNPblBhZ2VCZWZvcmVBZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluZScpLmxlbmd0aDtcbiAgICAgICAgaWYgKGNhcnNPblBhZ2VCZWZvcmVBZGRpbmcgPCA3KSB7XG4gICAgICAgICAgICBjb25zdCBjYXJMaW5lID0gbmV3IENhckxpbmUoZGF0YS5pZCkuY3JlYXRlKGRhdGEubmFtZSwgZGF0YS5jb2xvciwgZGF0YS5pZCk7XG4gICAgICAgICAgICB0aGlzLmdhcmFnZS5hcHBlbmQoY2FyTGluZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEFjdGl2ZVBhZ2VCdXR0b25zKHBhZ2VBY3RpdmU6IG51bWJlciwgcGFnZXNRdWFudGl0eTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwYWdlQWN0aXZlID4gMSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25QcmV2LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByZXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFnZXNRdWFudGl0eSA+IHBhZ2VBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uTmV4dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25OZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9wZW5OZXh0UGFnZSgpIHtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSB0aGlzLm51bWJlckNhcnNJbkdhcmFnZS5pZDtcbiAgICAgICAgdGhpcy5xdWFudGl0eVBhZ2VzID0gTWF0aC5jZWlsKE51bWJlcihxdWFudGl0eSkgLyB0aGlzLkNBUlNfT05fUEFHRSk7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2UgPCB0aGlzLnF1YW50aXR5UGFnZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGFnZSArPSAxO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJQYWdlc0luR2FyYWdlLmlubmVySFRNTCA9IGBQYWdlICR7dGhpcy5hY3RpdmVQYWdlfS8ke3RoaXMucXVhbnRpdHlQYWdlc31gO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJQYWdlc0luR2FyYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmFjdGl2ZVBhZ2UudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLmNhcnNWaWV3SW5HYXJhZ2VPblBhZ2UodGhpcy5hY3RpdmVQYWdlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvblByZXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB0aGlzLmJ1dHRvblByZXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2UgPT09IHRoaXMucXVhbnRpdHlQYWdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uTmV4dC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvcGVuUHJldlBhZ2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGFnZSA9IE51bWJlcih0aGlzLm51bWJlclBhZ2VzSW5HYXJhZ2UuaWQpO1xuICAgICAgICB0aGlzLnF1YW50aXR5UGFnZXMgPSBNYXRoLmNlaWwoTnVtYmVyKHRoaXMubnVtYmVyQ2Fyc0luR2FyYWdlLmlkKSAvIHRoaXMuQ0FSU19PTl9QQUdFKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGFnZSA+IHRoaXMuRklSU1RfUEFHRSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlIC09IDE7XG4gICAgICAgICAgICB0aGlzLm51bWJlclBhZ2VzSW5HYXJhZ2UuaW5uZXJIVE1MID0gYFBhZ2UgJHt0aGlzLmFjdGl2ZVBhZ2V9LyR7dGhpcy5xdWFudGl0eVBhZ2VzfWA7XG4gICAgICAgICAgICB0aGlzLm51bWJlclBhZ2VzSW5HYXJhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuYWN0aXZlUGFnZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMuY2Fyc1ZpZXdJbkdhcmFnZU9uUGFnZSh0aGlzLmFjdGl2ZVBhZ2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGFnZSA9PT0gdGhpcy5GSVJTVF9QQUdFKSB0aGlzLmJ1dHRvblByZXYuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvbk5leHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB0aGlzLmJ1dHRvbk5leHQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdlbmVyYXRlTGlzdENhcnMoKTogeyBuYW1lOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfVtdIHtcbiAgICAgICAgY29uc3QgTlVNQkVSX0NBUlNfRk9SX0dFTkVSQVRFID0gMTAwO1xuICAgICAgICBjb25zdCBOVU1CRVJfQlJBTkRTID0gQ2FyTGlzdC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBBcnJheShOVU1CRVJfQ0FSU19GT1JfR0VORVJBVEUpXG4gICAgICAgICAgICAuZmlsbChudWxsKVxuICAgICAgICAgICAgLm1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tQnJhbmROdW1iZXIgPSBnZXRSYW5kb21OdW1iZXIoTlVNQkVSX0JSQU5EUyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tTW9kZWxOdW1iZXIgPSBnZXRSYW5kb21OdW1iZXIoQ2FyTGlzdFtyYW5kb21CcmFuZE51bWJlcl0ubW9kZWxzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYCR7Q2FyTGlzdFtyYW5kb21CcmFuZE51bWJlcl0uYnJhbmR9ICR7Q2FyTGlzdFtyYW5kb21CcmFuZE51bWJlcl0ubW9kZWxzW3JhbmRvbU1vZGVsTnVtYmVyXX1gLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkQ2Fyc1RvQmFzZShwYXJhbXM6IHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH1bXSkge1xuICAgICAgICBwYXJhbXMuZm9yRWFjaCgoaXRlbSkgPT4gY3JlYXRlQ2FyQXBpKGl0ZW0pKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhc3luYyBhZGRDYXJzT25QYWdlKHN0YXJ0SW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2Fyc09uUGFnZUFwaSh0aGlzLmFjdGl2ZVBhZ2UpO1xuICAgICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IENhclR5cGUsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBzdGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyTGluZSA9IG5ldyBDYXJMaW5lKGVsZW1lbnQuaWQpLmNyZWF0ZShlbGVtZW50Lm5hbWUsIGVsZW1lbnQuY29sb3IsIGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FyYWdlLmFwcGVuZChjYXJMaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlV2lubmVyKGlkOiBudW1iZXIsIHRpbWU6IG51bWJlciwgZGF0YUZvclVwZGF0ZTogeyB3aW5zOiBudW1iZXI7IHRpbWU6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IHdpbnMgPSBkYXRhRm9yVXBkYXRlLndpbnMgKyAxO1xuICAgICAgICB0aW1lID0gTWF0aC5taW4odGltZSwgZGF0YUZvclVwZGF0ZS50aW1lKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlV2lubmVyQXBpKHsgaWQsIHdpbnMsIHRpbWUgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlV2lubmVyc1ZpZXcoKSB7XG4gICAgICAgIFdpbm5lcnNWaWV3LmdldEluc3RhbmNlKCkuZHJhd1RhYmxlQm9keSgpO1xuICAgICAgICBXaW5uZXJzVmlldy5nZXRJbnN0YW5jZSgpLnNldFdpbm5lcnNEZXNjcmlwdGlvbigpO1xuICAgICAgICBXaW5uZXJzVmlldy5nZXRJbnN0YW5jZSgpLnVwZGF0ZUNvbnRyb2xCdXR0b25zKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcge1xuICAgIHByaXZhdGUgbWFpbjogSFRNTEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdtYWluJywgWydtYWluJ10pO1xuICAgIHB1YmxpYyBjcmVhdGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb250ZW50KGNvbnRlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gdGhpcy5tYWluO1xuICAgICAgICB3aGlsZSAoaHRtbEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmQoY29udGVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Q2FyQXBpLCBnZXROdW1iZXJXaW5uZXJzQXBpLCBzb3J0VGFibGUgfSBmcm9tICcuLi91dGlscy9hcGknO1xuaW1wb3J0IHsgTGluZVdpbm5lcnNUeXBlLCBTb3J0VGFibGVUeXBlLCBXaW5uZXJUeXBlIH0gZnJvbSAnLi4vdXRpbHMvYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVJbnB1dEVsZW1lbnQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgSW1hZ2VJdGVtcyBmcm9tICcuL2Nhci12aWV3L2ltYWdlLWl0ZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lubmVyc1ZpZXcge1xuICAgIHB1YmxpYyB0YWJsZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBGSVJTVF9QQUdFID0gMTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFdJTk5FUlNfT05fUEFHRSA9IDEwO1xuICAgIHByaXZhdGUgYnV0dG9uUHJldjogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGJ1dHRvbk5leHQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB3aW5uZXJzUXVhbnRpdHk6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgYWN0aXZlUGFnZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBudW1iZXJPZkFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVCb2R5OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogV2lubmVyc1ZpZXc7XG4gICAgcHJpdmF0ZSBidXR0b25XaW5zOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGJ1dHRvbkJlc3RUaW1lOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIG51bWJlckNsaWNrc1dpbnMgPSAwO1xuICAgIHByaXZhdGUgbnVtYmVyQ2xpY2tzVGltZSA9IDA7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYmxlID0gY3JlYXRlRWxlbWVudCgndGFibGUnLCBbJ3RhYmxlJ10pO1xuICAgICAgICB0aGlzLndpbm5lcnNRdWFudGl0eSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnd2lubmVycy1xdWFudGl0eSddKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydwYWdlcy1xdWFudGl0eSddKTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2ID0gY3JlYXRlSW5wdXRFbGVtZW50KFsncHJldicsICdidXR0b25QcmV2J10sICdidXR0b24nLCAnUHJldicpO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQgPSBjcmVhdGVJbnB1dEVsZW1lbnQoWyduZXh0JywgJ2J1dHRvbk5leHQnXSwgJ2J1dHRvbicsICdOZXh0Jyk7XG4gICAgICAgIHRoaXMudGFibGVCb2R5ID0gY3JlYXRlRWxlbWVudCgndGJvZHknLCBbJ3Rib2R5J10pO1xuICAgICAgICB0aGlzLm51bWJlck9mQWN0aXZlUGFnZSA9IHRoaXMuRklSU1RfUEFHRTtcbiAgICAgICAgdGhpcy5idXR0b25XaW5zID0gY3JlYXRlRWxlbWVudCgndGgnLCBbJ2J1dHRvbi13aW5zJ10sICdXaW5zICcpO1xuICAgICAgICB0aGlzLmJ1dHRvbkJlc3RUaW1lID0gY3JlYXRlRWxlbWVudCgndGgnLCBbJ2J1dHRvbi10aW1lJ10sICdCZXN0IHRpbWUgKHNlYykgJyk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghV2lubmVyc1ZpZXcuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFdpbm5lcnNWaWV3Lmluc3RhbmNlID0gbmV3IFdpbm5lcnNWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFdpbm5lcnNWaWV3Lmluc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICB0aGlzLnNldFdpbm5lcnNEZXNjcmlwdGlvbigpO1xuICAgICAgICB0aGlzLnRhYmxlLnNldEF0dHJpYnV0ZSgnc29ydCcsICdpZCcpO1xuICAgICAgICB0aGlzLnRhYmxlLnNldEF0dHJpYnV0ZSgnb3JkZXInLCAnQVNDJyk7XG4gICAgICAgIHRoaXMudGFibGUuYXBwZW5kKHRoaXMuY3JlYXRlRGVzY3JpcHRpb24oKSwgdGhpcy5jcmVhdGVUYWJsZSgpLCB0aGlzLmNyZWF0ZVBhZ2VzQ29udHJvbHMoKSk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udHJvbEJ1dHRvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGU7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlRGVzY3JpcHRpb24oKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2Rlc2NyaXB0aW9uLXdpbm5lcnMnXSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy53aW5uZXJzUXVhbnRpdHksIHRoaXMuYWN0aXZlUGFnZSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVGFibGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3dpbm5lcnMtdGFibGUnXSk7XG4gICAgICAgIGNvbnN0IGhlYWRBcnJheSA9IFsnTnVtYmVyJywgJ0NhcicsICdOYW1lJ107XG4gICAgICAgIGNvbnN0IGhlYWRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGhlYWRBcnJheS5mb3JFYWNoKCh0YWJsZUhlYWRDZWlsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIGNlaWwuaW5uZXJIVE1MID0gdGFibGVIZWFkQ2VpbDtcbiAgICAgICAgICAgIGhlYWRJbm5lci5hcHBlbmQoY2VpbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbldpbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNvcnRCeVdpbnMoKSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQmVzdFRpbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNvcnRCeVRpbWUoKSk7XG4gICAgICAgIGhlYWRJbm5lci5hcHBlbmQodGhpcy5idXR0b25XaW5zLCB0aGlzLmJ1dHRvbkJlc3RUaW1lKTtcbiAgICAgICAgY29uc3QgdGFibGVIZWFkID0gY3JlYXRlRWxlbWVudCgndGhlYWQnLCBbJ3RoZWFkJ10pO1xuICAgICAgICB0YWJsZUhlYWQuYXBwZW5kKGhlYWRJbm5lcik7XG4gICAgICAgIHRoaXMuZHJhd1RhYmxlQm9keSgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhYmxlSGVhZCwgdGhpcy50YWJsZUJvZHkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXRXaW5uZXJzRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gYXdhaXQgZ2V0TnVtYmVyV2lubmVyc0FwaSgpO1xuICAgICAgICB0aGlzLndpbm5lcnNRdWFudGl0eS5pbm5lckhUTUwgPSBgV2lubmVycygke3F1YW50aXR5fSlgO1xuICAgICAgICBjb25zdCBxdWFudGl0eU9mUGFnZXMgPSBNYXRoLmNlaWwoTnVtYmVyKHF1YW50aXR5KSAvIHRoaXMuV0lOTkVSU19PTl9QQUdFKTtcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyT2ZBY3RpdmVQYWdlID4gcXVhbnRpdHlPZlBhZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlck9mQWN0aXZlUGFnZSAtPSAxO1xuICAgICAgICAgICAgdGhpcy5kcmF3VGFibGVCb2R5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlLmlubmVySFRNTCA9IGBQYWdlICR7dGhpcy5udW1iZXJPZkFjdGl2ZVBhZ2V9LyR7cXVhbnRpdHlPZlBhZ2VzfWA7XG4gICAgfVxuICAgIHByaXZhdGUgb3BlblByZXZQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkFjdGl2ZVBhZ2UgIT0gdGhpcy5GSVJTVF9QQUdFKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlck9mQWN0aXZlUGFnZSAtPSAxO1xuICAgICAgICAgICAgdGhpcy5zZXRXaW5uZXJzRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RhYmxlQm9keSgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDb250cm9sQnV0dG9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgYXN5bmMgb3Blbk5leHRQYWdlKCkge1xuICAgICAgICBjb25zdCBxdWFudGl0eSA9IGF3YWl0IGdldE51bWJlcldpbm5lcnNBcGkoKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlPZlBhZ2VzID0gTWF0aC5jZWlsKE51bWJlcihxdWFudGl0eSkgLyB0aGlzLldJTk5FUlNfT05fUEFHRSk7XG4gICAgICAgIGlmICh0aGlzLm51bWJlck9mQWN0aXZlUGFnZSAhPSBxdWFudGl0eU9mUGFnZXMpIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZBY3RpdmVQYWdlICs9IDE7XG4gICAgICAgICAgICB0aGlzLnNldFdpbm5lcnNEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3VGFibGVCb2R5KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2xCdXR0b25zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVQYWdlc0NvbnRyb2xzKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWyd3aW5uZXJzLWNvbnRyb2xzLXBhZ2UnXSk7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub3BlblByZXZQYWdlKCkpO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5OZXh0UGFnZSgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLmJ1dHRvblByZXYsIHRoaXMuYnV0dG9uTmV4dCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBkcmF3VGFibGVCb2R5KCkge1xuICAgICAgICB0aGlzLnRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3Qgc29ydCA9IHRoaXMudGFibGUuZ2V0QXR0cmlidXRlKCdzb3J0Jyk7XG4gICAgICAgIGNvbnN0IG9yZGVyID0gdGhpcy50YWJsZS5nZXRBdHRyaWJ1dGUoJ29yZGVyJyk7XG4gICAgICAgIGlmIChzb3J0ICYmIG9yZGVyKSB0aGlzLmRyYXdUYWJsZVdpdGhTb3J0KHNvcnQsIG9yZGVyKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkcmF3V2lubmVyTGluZShwYXJhbTogTGluZVdpbm5lcnNUeXBlKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gY3JlYXRlRWxlbWVudCgndGQnLCBbJ3RkLW51bWJlciddLCBgJHtwYXJhbS5pbmRleCArIDF9YCk7XG4gICAgICAgIGNvbnN0IGltYWdlSFRNTCA9IEltYWdlSXRlbXMuZ2V0Q2FyKHBhcmFtLmNvbG9yKTtcbiAgICAgICAgY29uc3QgaW1hZ2VDYXIgPSBjcmVhdGVFbGVtZW50KCd0ZCcsIFsndGQtY2FyJ10pO1xuICAgICAgICBpbWFnZUNhci5pbm5lckhUTUwgPSBpbWFnZUhUTUw7XG4gICAgICAgIGNvbnN0IG5hbWVDZWlsID0gY3JlYXRlRWxlbWVudCgndGQnLCBbJ3RkLW5hbWUnXSwgYCR7cGFyYW0ubmFtZX1gKTtcbiAgICAgICAgY29uc3Qgd2luc0NlaWwgPSBjcmVhdGVFbGVtZW50KCd0ZCcsIFsndGQtd2lucyddLCBgJHtwYXJhbS53aW5zfWApO1xuICAgICAgICBjb25zdCB0aW1lQ2VpbCA9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgWyd0ZC10aW1lJ10sIGAke3BhcmFtLnRpbWV9YCk7XG4gICAgICAgIGxpbmUuYXBwZW5kKG51bWJlciwgaW1hZ2VDYXIsIG5hbWVDZWlsLCB3aW5zQ2VpbCwgdGltZUNlaWwpO1xuICAgICAgICByZXR1cm4gbGluZTtcbiAgICB9XG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZUNvbnRyb2xCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBxdWFudGl0eSA9IGF3YWl0IGdldE51bWJlcldpbm5lcnNBcGkoKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlPZlBhZ2VzID0gTWF0aC5jZWlsKE51bWJlcihxdWFudGl0eSkgLyB0aGlzLldJTk5FUlNfT05fUEFHRSk7XG4gICAgICAgIGlmICh0aGlzLm51bWJlck9mQWN0aXZlUGFnZSA9PT0gdGhpcy5GSVJTVF9QQUdFKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByZXYuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkFjdGl2ZVBhZ2UgPT09IHF1YW50aXR5T2ZQYWdlcykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25OZXh0LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubnVtYmVyT2ZBY3RpdmVQYWdlID4gdGhpcy5GSVJTVF9QQUdFKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByZXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkFjdGl2ZVBhZ2UgPCBxdWFudGl0eU9mUGFnZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uTmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc29ydEJ5V2lucygpIHtcbiAgICAgICAgdGhpcy5udW1iZXJDbGlja3NXaW5zICs9IDE7XG4gICAgICAgIHRoaXMuYnV0dG9uQmVzdFRpbWUuaW5uZXJIVE1MID0gYEJlc3QgdGltZSAoc2VjKWA7XG4gICAgICAgIGlmICh0aGlzLm51bWJlckNsaWNrc1dpbnMgJSAyID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbldpbnMuaW5uZXJIVE1MID0gYFdpbnMgJiM5NjYwO2A7XG4gICAgICAgICAgICB0aGlzLmRyYXdUYWJsZVdpdGhTb3J0KCd3aW5zJywgJ0RFU0MnKTtcbiAgICAgICAgICAgIHRoaXMudGFibGUuc2V0QXR0cmlidXRlKCdzb3J0JywgJ3dpbnMnKTtcbiAgICAgICAgICAgIHRoaXMudGFibGUuc2V0QXR0cmlidXRlKCdvcmRlcicsICdERVNDJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbldpbnMuaW5uZXJIVE1MID0gYFdpbnMgJiM5NjUwO2A7XG4gICAgICAgICAgICB0aGlzLmRyYXdUYWJsZVdpdGhTb3J0KCd3aW5zJywgJ0FTQycpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBdHRyaWJ1dGUoJ3NvcnQnLCAnd2lucycpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBdHRyaWJ1dGUoJ29yZGVyJywgJ0FTQycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc29ydEJ5VGltZSgpIHtcbiAgICAgICAgdGhpcy5udW1iZXJDbGlja3NUaW1lICs9IDE7XG4gICAgICAgIHRoaXMuYnV0dG9uV2lucy5pbm5lckhUTUwgPSBgV2luc2A7XG4gICAgICAgIGlmICh0aGlzLm51bWJlckNsaWNrc1RpbWUgJSAyID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkJlc3RUaW1lLmlubmVySFRNTCA9IGBCZXN0IHRpbWUgKHNlYykgJiM5NjYwO2A7XG4gICAgICAgICAgICB0aGlzLmRyYXdUYWJsZVdpdGhTb3J0KCd0aW1lJywgJ0RFU0MnKTtcbiAgICAgICAgICAgIHRoaXMudGFibGUuc2V0QXR0cmlidXRlKCdzb3J0JywgJ3RpbWUnKTtcbiAgICAgICAgICAgIHRoaXMudGFibGUuc2V0QXR0cmlidXRlKCdvcmRlcicsICdERVNDJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkJlc3RUaW1lLmlubmVySFRNTCA9IGBCZXN0IHRpbWUgKHNlYykgJiM5NjUwO2A7XG4gICAgICAgICAgICB0aGlzLmRyYXdUYWJsZVdpdGhTb3J0KCd0aW1lJywgJ0FTQycpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBdHRyaWJ1dGUoJ3NvcnQnLCAndGltZScpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRBdHRyaWJ1dGUoJ29yZGVyJywgJ0FTQycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgYXN5bmMgZHJhd1RhYmxlV2l0aFNvcnQoc29ydCA9ICdpZCcsIG9yZGVyID0gJ0FTQycpIHtcbiAgICAgICAgY29uc3QgcGFyYW1Gb3JTb3J0OiBTb3J0VGFibGVUeXBlID0ge1xuICAgICAgICAgICAgcGFnZTogdGhpcy5udW1iZXJPZkFjdGl2ZVBhZ2UsXG4gICAgICAgICAgICBsaW1pdDogdGhpcy5XSU5ORVJTX09OX1BBR0UsXG4gICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgb3JkZXIsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzb3J0VGFibGUocGFyYW1Gb3JTb3J0KTtcbiAgICAgICAgdGhpcy50YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGRhdGEuZm9yRWFjaChhc3luYyAoZWxlbWVudDogV2lubmVyVHlwZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICAgICAgY29uc3QgY2FyRnJvbUdhcmFnZSA9IGF3YWl0IGdldENhckFwaShpZCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBjb2xvcjogY2FyRnJvbUdhcmFnZS5jb2xvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBjYXJGcm9tR2FyYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgd2luczogZWxlbWVudC53aW5zLFxuICAgICAgICAgICAgICAgIHRpbWU6IGVsZW1lbnQudGltZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5kcmF3V2lubmVyTGluZShwYXJhbSk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlQm9keS5hcHBlbmQobGluZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhclR5cGUsIFNvcnRUYWJsZVR5cGUgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcbmNvbnN0IHBhdGggPSAnL2dhcmFnZSc7XG5lbnVtIFBhdGgge1xuICAgIEdBUkFHRSA9ICcvZ2FyYWdlJyxcbiAgICBFTkdJTkUgPSAnL2VuZ2luZScsXG4gICAgV0lOTkVSUyA9ICcvd2lubmVycycsXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJzT25QYWdlQXBpKHBhZ2U6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7cGF0aH0/X3BhZ2U9JHtwYWdlfSZfbGltaXQ9N2ApO1xuICAgIGNvbnN0IGNhcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGNhcnM7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyQXBpKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0ke3BhdGh9LyR7aWR9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE51bWJlckNhcnNBcGkoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtwYXRofT9fbGltaXQ9N2ApO1xuICAgIGNvbnN0IG51bWJlck9mQ2FycyA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgcmV0dXJuIG51bWJlck9mQ2Fycztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhckFwaShib2R5OiB7IG5hbWU6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtwYXRofWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIH0pO1xuICAgIGNvbnN0IGNhckNyZWF0ZWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGNhckNyZWF0ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVDYXJBcGkoaWQ6IG51bWJlcikge1xuICAgIGF3YWl0IGZldGNoKGAke3VybH0ke3BhdGh9LyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FyQXBpKHBhcmFtOiBDYXJUeXBlKSB7XG4gICAgYXdhaXQgZmV0Y2goYCR7dXJsfSR7cGF0aH0vJHtwYXJhbS5pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWU6IHBhcmFtLm5hbWUsXG4gICAgICAgICAgICBjb2xvcjogcGFyYW0uY29sb3IsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRFbmdpbmVBcGkoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7UGF0aC5FTkdJTkV9P2lkPSR7aWR9JnN0YXR1cz1zdGFydGVkYCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzd2l0Y2hFbmdpbmVUb0RyaXZlKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0ke1BhdGguRU5HSU5FfT9pZD0ke2lkfSZzdGF0dXM9ZHJpdmVgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvcEVuZ2luZShpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtQYXRoLkVOR0lORX0/aWQ9JHtpZH0mc3RhdHVzPXN0b3BwZWRgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE51bWJlcldpbm5lcnNBcGkoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtQYXRoLldJTk5FUlN9P19saW1pdD0xMGApO1xuICAgIGNvbnN0IG51bWJlck9mV2lubmVycyA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgcmV0dXJuIG51bWJlck9mV2lubmVycztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbm5lckFwaShib2R5OiB7IGlkOiBudW1iZXI7IHdpbnM6IG51bWJlcjsgdGltZTogbnVtYmVyIH0pIHtcbiAgICBhd2FpdCBmZXRjaChgJHt1cmx9JHtQYXRoLldJTk5FUlN9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2lubmVyQXBpKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0ke1BhdGguV0lOTkVSU30vJHtpZH1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbm5lckFwaShwYXJhbTogeyBpZDogbnVtYmVyOyB3aW5zOiBudW1iZXI7IHRpbWU6IG51bWJlciB9KSB7XG4gICAgYXdhaXQgZmV0Y2goYCR7dXJsfSR7UGF0aC5XSU5ORVJTfS8ke3BhcmFtLmlkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgd2luczogcGFyYW0ud2lucyxcbiAgICAgICAgICAgIHRpbWU6IHBhcmFtLnRpbWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNhckZyb21XaW5uZXJzQXBpKGlkOiBudW1iZXIpIHtcbiAgICBhd2FpdCBmZXRjaChgJHt1cmx9JHtQYXRoLldJTk5FUlN9LyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNvcnRUYWJsZSh7IHBhZ2UsIGxpbWl0LCBzb3J0LCBvcmRlciB9OiBTb3J0VGFibGVUeXBlKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9JHtQYXRoLldJTk5FUlN9P19wYWdlPSR7cGFnZX0mX2xpbWl0PSR7bGltaXR9Jl9zb3J0PSR7c29ydH0mX29yZGVyPSR7b3JkZXJ9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAgeyBcImJyYW5kXCI6IFwiU2VhdFwiLCBcIm1vZGVsc1wiOiBbXCJBbGhhbWJyYVwiLCBcIkFsdGVhXCIsIFwiQWx0ZWEgWExcIiwgXCJBcm9zYVwiLCBcIkNvcmRvYmFcIiwgXCJDb3Jkb2JhIFZhcmlvXCIsIFwiRXhlb1wiLCBcIkliaXphXCIsIFwiSWJpemEgU1RcIiwgXCJFeGVvIFNUXCIsIFwiTGVvblwiLCBcIkxlb24gU1RcIiwgXCJJbmNhXCIsIFwiTWlpXCIsIFwiVG9sZWRvXCJdIH0sXG4gIHtcImJyYW5kXCI6IFwiUmVuYXVsdFwiLCBcIm1vZGVsc1wiOiBbXCJDYXB0dXJcIiwgXCJDbGlvXCIsIFwiQ2xpbyBHcmFuZHRvdXJcIiwgXCJFc3BhY2VcIiwgXCJFeHByZXNzXCIsIFwiRmx1ZW5jZVwiLCBcIkdyYW5kIEVzcGFjZVwiLCBcIkdyYW5kIE1vZHVzXCIsIFwiR3JhbmQgU2NlbmljXCIsIFwiS2FkamFyXCIsIFwiS2FuZ29vXCIsIFwiS2FuZ29vIEV4cHJlc3NcIiwgXCJLb2xlb3NcIiwgXCJMYWd1bmFcIiwgXCJMYWd1bmEgR3JhbmR0b3VyXCIsIFwiTGF0aXR1ZGVcIiwgXCJNYXNjb3R0XCIsIFwiTcOpZ2FuZVwiLCBcIk3DqWdhbmUgQ0NcIiwgXCJNw6lnYW5lIENvbWJpXCIsIFwiTcOpZ2FuZSBHcmFuZHRvdXJcIiwgXCJNw6lnYW5lIENvdXDDqVwiLCBcIk3DqWdhbmUgU2PDqW5pY1wiLCBcIlNjw6luaWNcIiwgXCJUYWxpc21hblwiLCBcIlRhbGlzbWFuIEdyYW5kdG91clwiLCBcIlRoYWxpYVwiLCBcIlR3aW5nb1wiLCBcIldpbmRcIiwgXCJab8OpXCJdfSxcbiAge1wiYnJhbmRcIjogXCJQZXVnZW90XCIsIFwibW9kZWxzXCI6IFtcIjEwMDdcIiwgXCIxMDdcIiwgXCIxMDZcIiwgXCIxMDhcIiwgXCIyMDA4XCIsIFwiMjA1XCIsIFwiMjA1IENhYnJpb1wiLCBcIjIwNlwiLCBcIjIwNiBDQ1wiLCBcIjIwNiBTV1wiLCBcIjIwN1wiLCBcIjIwNyBDQ1wiLCBcIjIwNyBTV1wiLCBcIjMwNlwiLCBcIjMwN1wiLCBcIjMwNyBDQ1wiLCBcIjMwNyBTV1wiLCBcIjMwOFwiLCBcIjMwOCBDQ1wiLCBcIjMwOCBTV1wiLCBcIjMwOVwiLCBcIjQwMDdcIiwgXCI0MDA4XCIsIFwiNDA1XCIsIFwiNDA2XCIsIFwiNDA3XCIsIFwiNDA3IFNXXCIsIFwiNTAwOFwiLCBcIjUwOFwiLCBcIjUwOCBTV1wiLCBcIjYwNVwiLCBcIjgwNlwiLCBcIjYwN1wiLCBcIjgwN1wiLCBcIkJpcHBlclwiLCBcIlJDWlwiXX0sXG4gIHtcImJyYW5kXCI6IFwiRGFjaWFcIiwgXCJtb2RlbHNcIjogW1wiRG9ra2VyXCIsIFwiRHVzdGVyXCIsIFwiTG9kZ3lcIiwgXCJMb2dhblwiLCBcIkxvZ2FuIE1DVlwiLCBcIkxvZ2FuIFZhblwiLCBcIlNhbmRlcm9cIiwgXCJTb2xlbnphXCJdfSxcbiAge1wiYnJhbmRcIjogXCJDaXRyb8OrblwiLCBcIm1vZGVsc1wiOiBbXCJCZXJsaW5nb1wiLCBcIkMtQ3Jvc3NlclwiLCBcIkMtRWxpc3PDqWVcIiwgXCJDLVplcm9cIiwgXCJDMVwiLCBcIkMyXCIsIFwiQzNcIiwgXCJDMyBQaWNhc3NvXCIsIFwiQzRcIiwgXCJDNCBBaXJjcm9zc1wiLCBcIkM0IENhY3R1c1wiLCBcIkM0IENvdXDDqVwiLCBcIkM0IEdyYW5kIFBpY2Fzc29cIiwgXCJDNCBTZWRhblwiLCBcIkM1XCIsIFwiQzUgQnJlYWtcIiwgXCJDNSBUb3VyZXJcIiwgXCJDNlwiLCBcIkM4XCIsIFwiRFMzXCIsIFwiRFM0XCIsIFwiRFM1XCIsIFwiRXZhc2lvblwiLCBcIkp1bXBlclwiLCBcIkp1bXB5XCIsIFwiU2F4b1wiLCBcIk5lbW9cIiwgXCJYYW50aWFcIiwgXCJYc2FyYVwiXX0sXG4gIHtcImJyYW5kXCI6IFwiT3BlbFwiLCBcIm1vZGVsc1wiOiBbXCJBZ2lsYVwiLCBcIkFtcGVyYVwiLCBcIkFudGFyYVwiLCBcIkFzdHJhXCIsIFwiQXN0cmEgY2FicmlvXCIsIFwiQXN0cmEgY2FyYXZhblwiLCBcIkFzdHJhIGNvdXDDqVwiLCBcIkNhbGlicmFcIiwgXCJDYW1wb1wiLCBcIkNhc2NhZGFcIiwgXCJDb3JzYVwiLCBcIkZyb250ZXJhXCIsIFwiSW5zaWduaWFcIiwgXCJJbnNpZ25pYSBrb21iaVwiLCBcIkthZGV0dFwiLCBcIk1lcml2YVwiLCBcIk1va2thXCIsIFwiTW92YW5vXCIsIFwiT21lZ2FcIiwgXCJTaWdudW1cIiwgXCJWZWN0cmFcIiwgXCJWZWN0cmEgQ2FyYXZhblwiLCBcIlZpdmFyb1wiLCBcIlZpdmFybyBLb21iaVwiLCBcIlphZmlyYVwiXX0sXG4gIHtcImJyYW5kXCI6IFwiQWxmYSBSb21lb1wiLCBcIm1vZGVsc1wiOiBbXCIxNDVcIiwgXCIxNDZcIiwgXCIxNDdcIiwgXCIxNTVcIiwgXCIxNTZcIiwgXCIxNTYgU3BvcnR3YWdvblwiLCBcIjE1OVwiLCBcIjE1OSBTcG9ydHdhZ29uXCIsIFwiMTY0XCIsIFwiMTY2XCIsIFwiNENcIiwgXCJCcmVyYVwiLCBcIkdUVlwiLCBcIk1pVG9cIiwgXCJDcm9zc3dhZ29uXCIsIFwiU3BpZGVyXCIsIFwiR1RcIiwgXCJHaXVsaWV0dGFcIiwgXCJHaXVsaWFcIl19LFxuICB7XCJicmFuZFwiOiBcIsWga29kYVwiLCBcIm1vZGVsc1wiOiBbXCJGYXZvcml0XCIsIFwiRmVsaWNpYVwiLCBcIkNpdGlnb1wiLCBcIkZhYmlhXCIsIFwiRmFiaWEgQ29tYmlcIiwgXCJGYWJpYSBTZWRhblwiLCBcIkZlbGljaWEgQ29tYmlcIiwgXCJPY3RhdmlhXCIsIFwiT2N0YXZpYSBDb21iaVwiLCBcIlJvb21zdGVyXCIsIFwiWWV0aVwiLCBcIlJhcGlkXCIsIFwiUmFwaWQgU3BhY2ViYWNrXCIsIFwiU3VwZXJiXCIsIFwiU3VwZXJiIENvbWJpXCJdfSxcbiAge1wiYnJhbmRcIjogXCJDaGV2cm9sZXRcIiwgXCJtb2RlbHNcIjogW1wiQWxlcm9cIiwgXCJBdmVvXCIsIFwiQ2FtYXJvXCIsIFwiQ2FwdGl2YVwiLCBcIkNvcnZldHRlXCIsIFwiQ3J1emVcIiwgXCJDcnV6ZSBTV1wiLCBcIkVwaWNhXCIsIFwiRXF1aW5veFwiLCBcIkV2YW5kYVwiLCBcIkhIUlwiLCBcIkthbG9zXCIsIFwiTGFjZXR0aVwiLCBcIkxhY2V0dGkgU1dcIiwgXCJMdW1pbmFcIiwgXCJNYWxpYnVcIiwgXCJNYXRpelwiLCBcIk1vbnRlIENhcmxvXCIsIFwiTnViaXJhXCIsIFwiT3JsYW5kb1wiLCBcIlNwYXJrXCIsIFwiU3VidXJiYW5cIiwgXCJUYWN1bWFcIiwgXCJUYWhvZVwiLCBcIlRyYXhcIl19LFxuICB7XCJicmFuZFwiOiBcIlBvcnNjaGVcIiwgXCJtb2RlbHNcIjogW1wiOTExIENhcnJlcmFcIiwgXCI5MTEgQ2FycmVyYSBDYWJyaW9cIiwgXCI5MTEgVGFyZ2FcIiwgXCI5MTEgVHVyYm9cIiwgXCI5MjRcIiwgXCI5NDRcIiwgXCI5OTdcIiwgXCJCb3hzdGVyXCIsIFwiQ2F5ZW5uZVwiLCBcIkNheW1hblwiLCBcIk1hY2FuXCIsIFwiUGFuYW1lcmFcIl19LFxuICB7XCJicmFuZFwiOiBcIkhvbmRhXCIsIFwibW9kZWxzXCI6IFtcIkFjY29yZFwiLCBcIkFjY29yZCBDb3Vww6lcIiwgXCJBY2NvcmQgVG91cmVyXCIsIFwiQ2l0eVwiLCBcIkNpdmljXCIsIFwiQ2l2aWMgQWVyb2RlY2tcIiwgXCJDaXZpYyBDb3Vww6lcIiwgXCJDaXZpYyBUb3VyZXJcIiwgXCJDaXZpYyBUeXBlIFJcIiwgXCJDUi1WXCIsIFwiQ1ItWFwiLCBcIkNSLVpcIiwgXCJGUi1WXCIsIFwiSFItVlwiLCBcIkluc2lnaHRcIiwgXCJJbnRlZ3JhXCIsIFwiSmF6elwiLCBcIkxlZ2VuZFwiLCBcIlByZWx1ZGVcIl19LFxuICB7XCJicmFuZFwiOiBcIlN1YmFydVwiLCBcIm1vZGVsc1wiOiBbXCJCUlpcIiwgXCJGb3Jlc3RlclwiLCBcIkltcHJlemFcIiwgXCJJbXByZXphIFdhZ29uXCIsIFwiSnVzdHlcIiwgXCJMZWdhY3lcIiwgXCJMZWdhY3kgV2Fnb25cIiwgXCJMZWdhY3kgT3V0YmFja1wiLCBcIkxldm9yZ1wiLCBcIk91dGJhY2tcIiwgXCJTVlhcIiwgXCJUcmliZWNhXCIsIFwiVHJpYmVjYSBCOVwiLCBcIlhWXCJdfSxcbiAge1wiYnJhbmRcIjogXCJNYXpkYVwiLCBcIm1vZGVsc1wiOiBbXCIxMjFcIiwgXCIyXCIsIFwiM1wiLCBcIjMyM1wiLCBcIjMyMyBDb21iaVwiLCBcIjMyMyBDb3Vww6lcIiwgXCIzMjMgRlwiLCBcIjVcIiwgXCI2XCIsIFwiNiBDb21iaVwiLCBcIjYyNlwiLCBcIjYyNiBDb21iaVwiLCBcIkItRmlnaHRlclwiLCBcIkIyNTAwXCIsIFwiQlRcIiwgXCJDWC0zXCIsIFwiQ1gtNVwiLCBcIkNYLTdcIiwgXCJDWC05XCIsIFwiRGVtaW9cIiwgXCJNUFZcIiwgXCJNWC0zXCIsIFwiTVgtNVwiLCBcIk1YLTZcIiwgXCJQcmVtYWN5XCIsIFwiUlgtN1wiLCBcIlJYLThcIiwgXCJYZWRveCA2XCJdfSxcbiAge1wiYnJhbmRcIjogXCJNaXRzdWJpc2hpXCIsIFwibW9kZWxzXCI6IFtcIjMwMDAgR1RcIiwgXCJBU1hcIiwgXCJDYXJpc21hXCIsIFwiQ29sdFwiLCBcIkNvbHQgQ0NcIiwgXCJFY2xpcHNlXCIsIFwiRnVzbyBjYW50ZXJcIiwgXCJHYWxhbnRcIiwgXCJHYWxhbnQgQ29tYmlcIiwgXCJHcmFuZGlzXCIsIFwiTDIwMFwiLCBcIkwyMDAgUGljayB1cFwiLCBcIkwyMDAgUGljayB1cCBBbGxyYWRcIiwgXCJMMzAwXCIsIFwiTGFuY2VyXCIsIFwiTGFuY2VyIENvbWJpXCIsIFwiTGFuY2VyIEV2b1wiLCBcIkxhbmNlciBTcG9ydGJhY2tcIiwgXCJPdXRsYW5kZXJcIiwgXCJQYWplcm9cIiwgXCJQYWpldG8gUGluaW5cIiwgXCJQYWplcm8gUGluaW4gV2Fnb25cIiwgXCJQYWplcm8gU3BvcnRcIiwgXCJQYWplcm8gV2Fnb25cIiwgXCJTcGFjZSBTdGFyXCJdfSxcbiAge1wiYnJhbmRcIjogXCJMZXh1c1wiLCBcIm1vZGVsc1wiOiBbXCJDVFwiLCBcIkdTXCIsIFwiR1MgMzAwXCIsIFwiR1hcIiwgXCJJU1wiLCBcIklTIDIwMFwiLCBcIklTIDI1MCBDXCIsIFwiSVMtRlwiLCBcIkxTXCIsIFwiTFhcIiwgXCJOWFwiLCBcIlJDIEZcIiwgXCJSWFwiLCBcIlJYIDMwMFwiLCBcIlJYIDQwMGhcIiwgXCJSWCA0NTBoXCIsIFwiU0MgNDMwXCJdfSxcbiAge1wiYnJhbmRcIjogXCJUb3lvdGFcIiwgXCJtb2RlbHNcIjogW1wiNC1SdW5uZXJcIiwgXCJBdXJpc1wiLCBcIkF2ZW5zaXNcIiwgXCJBdmVuc2lzIENvbWJpXCIsIFwiQXZlbnNpcyBWYW4gVmVyc29cIiwgXCJBeWdvXCIsIFwiQ2FtcnlcIiwgXCJDYXJpbmFcIiwgXCJDZWxpY2FcIiwgXCJDb3JvbGxhXCIsIFwiQ29yb2xsYSBDb21iaVwiLCBcIkNvcm9sbGEgc2VkYW5cIiwgXCJDb3JvbGxhIFZlcnNvXCIsIFwiRkogQ3J1aXNlclwiLCBcIkdUODZcIiwgXCJIaWFjZVwiLCBcIkhpYWNlIFZhblwiLCBcIkhpZ2hsYW5kZXJcIiwgXCJIaWx1eFwiLCBcIkxhbmQgQ3J1aXNlclwiLCBcIk1SMlwiLCBcIlBhc2VvXCIsIFwiUGljbmljXCIsIFwiUHJpdXNcIiwgXCJSQVY0XCIsIFwiU2VxdW9pYVwiLCBcIlN0YXJsZXRcIiwgXCJTdXByYVwiLCBcIlR1bmRyYVwiLCBcIlVyYmFuIENydWlzZXJcIiwgXCJWZXJzb1wiLCBcIllhcmlzXCIsIFwiWWFyaXMgVmVyc29cIl19LFxuICB7XCJicmFuZFwiOiBcIkJNV1wiLCBcIm1vZGVsc1wiOiBbXCJpM1wiLCBcImk4XCIsIFwiTTNcIiwgXCJNNFwiLCBcIk01XCIsIFwiTTZcIiwgXCJSYWQgMVwiLCBcIlJhZCAxIENhYnJpb1wiLCBcIlJhZCAxIENvdXDDqVwiLCBcIlJhZCAyXCIsIFwiUmFkIDIgQWN0aXZlIFRvdXJlclwiLCBcIlJhZCAyIENvdXDDqVwiLCBcIlJhZCAyIEdyYW4gVG91cmVyXCIsIFwiUmFkIDNcIiwgXCJSYWQgMyBDYWJyaW9cIiwgXCJSYWQgMyBDb21wYWN0XCIsIFwiUmFkIDMgQ291cMOpXCIsIFwiUmFkIDMgR1RcIiwgXCJSYWQgMyBUb3VyaW5nXCIsIFwiUmFkIDRcIiwgXCJSYWQgNCBDYWJyaW9cIiwgXCJSYWQgNCBHcmFuIENvdXDDqVwiLCBcIlJhZCA1XCIsIFwiUmFkIDUgR1RcIiwgXCJSYWQgNSBUb3VyaW5nXCIsIFwiUmFkIDZcIiwgXCJSYWQgNiBDYWJyaW9cIiwgXCJSYWQgNiBDb3Vww6lcIiwgXCJSYWQgNiBHcmFuIENvdXDDqVwiLCBcIlJhZCA3XCIsIFwiUmFkIDggQ291cMOpXCIsIFwiWDFcIiwgXCJYM1wiLCBcIlg0XCIsIFwiWDVcIiwgXCJYNlwiLCBcIlozXCIsIFwiWjMgQ291cMOpXCIsIFwiWjMgUm9hZHN0ZXJcIiwgXCJaNFwiLCBcIlo0IFJvYWRzdGVyXCJdfSxcbiAge1wiYnJhbmRcIjogXCJWb2xrc3dhZ2VuXCIsIFwibW9kZWxzXCI6IFtcIkFtYXJva1wiLCBcIkJlZXRsZVwiLCBcIkJvcmFcIiwgXCJCb3JhIFZhcmlhbnRcIiwgXCJDYWRkeVwiLCBcIkNhZGR5IFZhblwiLCBcIkxpZmVcIiwgXCJDYWxpZm9ybmlhXCIsIFwiQ2FyYXZlbGxlXCIsIFwiQ0NcIiwgXCJDcmFmdGVyXCIsIFwiQ3JhZnRlciBWYW5cIiwgXCJDcmFmdGVyIEtvbWJpXCIsIFwiQ3Jvc3NUb3VyYW5cIiwgXCJFb3NcIiwgXCJGb3hcIiwgXCJHb2xmXCIsIFwiR29sZiBDYWJyaW9cIiwgXCJHb2xmIFBsdXNcIiwgXCJHb2xmIFNwb3J0dmFuXCIsIFwiR29sZiBWYXJpYW50XCIsIFwiSmV0dGFcIiwgXCJMVFwiLCBcIkx1cG9cIiwgXCJNdWx0aXZhblwiLCBcIk5ldyBCZWV0bGVcIiwgXCJOZXcgQmVldGxlIENhYnJpb1wiLCBcIlBhc3NhdFwiLCBcIlBhc3NhdCBBbGx0cmFja1wiLCBcIlBhc3NhdCBDQ1wiLCBcIlBhc3NhdCBWYXJpYW50XCIsIFwiUGFzc2F0IFZhcmlhbnQgVmFuXCIsIFwiUGhhZXRvblwiLCBcIlBvbG9cIiwgXCJQb2xvIFZhblwiLCBcIlBvbG8gVmFyaWFudFwiLCBcIlNjaXJvY2NvXCIsIFwiU2hhcmFuXCIsIFwiVDRcIiwgXCJUNCBDYXJhdmVsbGVcIiwgXCJUNCBNdWx0aXZhblwiLCBcIlQ1XCIsIFwiVDUgQ2FyYXZlbGxlXCIsIFwiVDUgTXVsdGl2YW5cIiwgXCJUNSBUcmFuc3BvcnRlciBTaHV0dGxlXCIsIFwiVGlndWFuXCIsIFwiVG91YXJlZ1wiLCBcIlRvdXJhblwiXX0sXG4gIHtcImJyYW5kXCI6IFwiU3V6dWtpXCIsIFwibW9kZWxzXCI6IFtcIkFsdG9cIiwgXCJCYWxlbm9cIiwgXCJCYWxlbm8ga29tYmlcIiwgXCJHcmFuZCBWaXRhcmFcIiwgXCJHcmFuZCBWaXRhcmEgWEwtN1wiLCBcIklnbmlzXCIsIFwiSmltbnlcIiwgXCJLaXphc2hpXCIsIFwiTGlhbmFcIiwgXCJTYW11cmFpXCIsIFwiU3BsYXNoXCIsIFwiU3dpZnRcIiwgXCJTWDRcIiwgXCJTWDQgU2VkYW5cIiwgXCJWaXRhcmFcIiwgXCJXYWdvbiBSK1wiXX0sXG4gIHtcImJyYW5kXCI6IFwiTWVyY2VkZXMtQmVuelwiLCBcIm1vZGVsc1wiOiBbXCIxMDAgRFwiLCBcIjExNVwiLCBcIjEyNFwiLCBcIjEyNlwiLCBcIjE5MFwiLCBcIjE5MCBEXCIsIFwiMTkwIEVcIiwgXCIyMDAgLSAzMDBcIiwgXCIyMDAgRFwiLCBcIjIwMCBFXCIsIFwiMjEwIFZhblwiLCBcIjIxMCBrb21iaVwiLCBcIjMxMCBWYW5cIiwgXCIzMTAga29tYmlcIiwgXCIyMzAgLSAzMDAgQ0UgQ291cMOpXCIsIFwiMjYwIC0gNTYwIFNFXCIsIFwiMjYwIC0gNTYwIFNFTFwiLCBcIjUwMCAtIDYwMCBTRUMgQ291cMOpXCIsIFwiVHJpZWRhIEFcIiwgXCJBXCIsIFwiQSBMXCIsIFwiQU1HIEdUXCIsIFwiVHJpZWRhIEJcIiwgXCJUcmllZGEgQ1wiLCBcIkNcIiwgXCJDIFNwb3J0Y291cMOpXCIsIFwiQyBUXCIsIFwiQ2l0YW5cIiwgXCJDTFwiLCBcIkNMXCIsIFwiQ0xBXCIsIFwiQ0xDXCIsIFwiQ0xLIENhYnJpb1wiLCBcIkNMSyBDb3Vww6lcIiwgXCJDTFNcIiwgXCJUcmllZGEgRVwiLCBcIkVcIiwgXCJFIENhYnJpb1wiLCBcIkUgQ291cMOpXCIsIFwiRSBUXCIsIFwiVHJpZWRhIEdcIiwgXCJHIENhYnJpb1wiLCBcIkdMXCIsIFwiR0xBXCIsIFwiR0xDXCIsIFwiR0xFXCIsIFwiR0xLXCIsIFwiVHJpZWRhIE1cIiwgXCJNQiAxMDBcIiwgXCJUcmllZGEgUlwiLCBcIlRyaWVkYSBTXCIsIFwiU1wiLCBcIlMgQ291cMOpXCIsIFwiU0xcIiwgXCJTTENcIiwgXCJTTEtcIiwgXCJTTFJcIiwgXCJTcHJpbnRlclwiXX0sXG4gIHtcImJyYW5kXCI6IFwiU2FhYlwiLCBcIm1vZGVsc1wiOiBbXCI5LTNcIiwgXCI5LTMgQ2FicmlvbGV0XCIsIFwiOS0zIENvdXDDqVwiLCBcIjktMyBTcG9ydENvbWJpXCIsIFwiOS01XCIsIFwiOS01IFNwb3J0Q29tYmlcIiwgXCI5MDBcIiwgXCI5MDAgQ1wiLCBcIjkwMCBDIFR1cmJvXCIsIFwiOTAwMFwiXX0sXG4gIHtcImJyYW5kXCI6IFwiQXVkaVwiLCBcIm1vZGVsc1wiOiBbXCIxMDBcIiwgXCIxMDAgQXZhbnRcIiwgXCI4MFwiLCBcIjgwIEF2YW50XCIsIFwiODAgQ2FicmlvXCIsIFwiOTBcIiwgXCJBMVwiLCBcIkEyXCIsIFwiQTNcIiwgXCJBMyBDYWJyaW9sZXRcIiwgXCJBMyBMaW11emluYVwiLCBcIkEzIFNwb3J0YmFja1wiLCBcIkE0XCIsIFwiQTQgQWxscm9hZFwiLCBcIkE0IEF2YW50XCIsIFwiQTQgQ2FicmlvbGV0XCIsIFwiQTVcIiwgXCJBNSBDYWJyaW9sZXRcIiwgXCJBNSBTcG9ydGJhY2tcIiwgXCJBNlwiLCBcIkE2IEFsbHJvYWRcIiwgXCJBNiBBdmFudFwiLCBcIkE3XCIsIFwiQThcIiwgXCJBOCBMb25nXCIsIFwiUTNcIiwgXCJRNVwiLCBcIlE3XCIsIFwiUjhcIiwgXCJSUzQgQ2FicmlvbGV0XCIsIFwiUlM0L1JTNCBBdmFudFwiLCBcIlJTNVwiLCBcIlJTNiBBdmFudFwiLCBcIlJTN1wiLCBcIlMzL1MzIFNwb3J0YmFja1wiLCBcIlM0IENhYnJpb2xldFwiLCBcIlM0L1M0IEF2YW50XCIsIFwiUzUvUzUgQ2FicmlvbGV0XCIsIFwiUzYvUlM2XCIsIFwiUzdcIiwgXCJTOFwiLCBcIlNRNVwiLCBcIlRUIENvdXDDqVwiLCBcIlRUIFJvYWRzdGVyXCIsIFwiVFRTXCJdfSxcbiAge1wiYnJhbmRcIjogXCJLaWFcIiwgXCJtb2RlbHNcIjogW1wiQXZlbGxhXCIsIFwiQmVzdGFcIiwgXCJDYXJlbnNcIiwgXCJDYXJuaXZhbFwiLCBcIkNlZWBkXCIsIFwiQ2VlYGQgU1dcIiwgXCJDZXJhdG9cIiwgXCJLIDI1MDBcIiwgXCJNYWdlbnRpc1wiLCBcIk9waXJ1c1wiLCBcIk9wdGltYVwiLCBcIlBpY2FudG9cIiwgXCJQcmVnaW9cIiwgXCJQcmlkZVwiLCBcIlBybyBDZWVgZFwiLCBcIlJpb1wiLCBcIlJpbyBDb21iaVwiLCBcIlJpbyBzZWRhblwiLCBcIlNlcGhpYVwiLCBcIlNodW1hXCIsIFwiU29yZW50b1wiLCBcIlNvdWxcIiwgXCJTcG9ydGFnZVwiLCBcIlZlbmdhXCJdfSxcbiAge1wiYnJhbmRcIjogXCJMYW5kIFJvdmVyXCIsIFwibW9kZWxzXCI6IFtcIjEwOVwiLCBcIkRlZmVuZGVyXCIsIFwiRGlzY292ZXJ5XCIsIFwiRGlzY292ZXJ5IFNwb3J0XCIsIFwiRnJlZWxhbmRlclwiLCBcIlJhbmdlIFJvdmVyXCIsIFwiUmFuZ2UgUm92ZXIgRXZvcXVlXCIsIFwiUmFuZ2UgUm92ZXIgU3BvcnRcIl19LFxuICB7XCJicmFuZFwiOiBcIkRvZGdlXCIsIFwibW9kZWxzXCI6IFtcIkF2ZW5nZXJcIiwgXCJDYWxpYmVyXCIsIFwiQ2hhbGxlbmdlclwiLCBcIkNoYXJnZXJcIiwgXCJHcmFuZCBDYXJhdmFuXCIsIFwiSm91cm5leVwiLCBcIk1hZ251bVwiLCBcIk5pdHJvXCIsIFwiUkFNXCIsIFwiU3RlYWx0aFwiLCBcIlZpcGVyXCJdfSxcbiAge1wiYnJhbmRcIjogXCJDaHJ5c2xlclwiLCBcIm1vZGVsc1wiOiBbXCIzMDAgQ1wiLCBcIjMwMCBDIFRvdXJpbmdcIiwgXCIzMDAgTVwiLCBcIkNyb3NzZmlyZVwiLCBcIkdyYW5kIFZveWFnZXJcIiwgXCJMSFNcIiwgXCJOZW9uXCIsIFwiUGFjaWZpY2FcIiwgXCJQbHltb3V0aFwiLCBcIlBUIENydWlzZXJcIiwgXCJTZWJyaW5nXCIsIFwiU2VicmluZyBDb252ZXJ0aWJsZVwiLCBcIlN0cmF0dXNcIiwgXCJTdHJhdHVzIENhYnJpb1wiLCBcIlRvd24gJiBDb3VudHJ5XCIsIFwiVm95YWdlclwiXX0sXG4gIHtcImJyYW5kXCI6IFwiRm9yZFwiLCBcIm1vZGVsc1wiOiBbXCJBZXJvc3RhclwiLCBcIkItTWF4XCIsIFwiQy1NYXhcIiwgXCJDb3J0aW5hXCIsIFwiQ291Z2FyXCIsIFwiRWRnZVwiLCBcIkVzY29ydFwiLCBcIkVzY29ydCBDYWJyaW9cIiwgXCJFc2NvcnQga29tYmlcIiwgXCJFeHBsb3JlclwiLCBcIkYtMTUwXCIsIFwiRi0yNTBcIiwgXCJGaWVzdGFcIiwgXCJGb2N1c1wiLCBcIkZvY3VzIEMtTWF4XCIsIFwiRm9jdXMgQ0NcIiwgXCJGb2N1cyBrb21iaVwiLCBcIkZ1c2lvblwiLCBcIkdhbGF4eVwiLCBcIkdyYW5kIEMtTWF4XCIsIFwiS2FcIiwgXCJLdWdhXCIsIFwiTWF2ZXJpY2tcIiwgXCJNb25kZW9cIiwgXCJNb25kZW8gQ29tYmlcIiwgXCJNdXN0YW5nXCIsIFwiT3Jpb25cIiwgXCJQdW1hXCIsIFwiUmFuZ2VyXCIsIFwiUy1NYXhcIiwgXCJTaWVycmFcIiwgXCJTdHJlZXQgS2FcIiwgXCJUb3VybmVvIENvbm5lY3RcIiwgXCJUb3VybmVvIEN1c3RvbVwiLCBcIlRyYW5zaXRcIiwgXCJUcmFuc2l0XCIsIFwiVHJhbnNpdCBCdXNcIiwgXCJUcmFuc2l0IENvbm5lY3QgTFdCXCIsIFwiVHJhbnNpdCBDb3VyaWVyXCIsIFwiVHJhbnNpdCBDdXN0b21cIiwgXCJUcmFuc2l0IGtvbWJpXCIsIFwiVHJhbnNpdCBUb3VybmVvXCIsIFwiVHJhbnNpdCBWYWxuaWtcIiwgXCJUcmFuc2l0IFZhblwiLCBcIlRyYW5zaXQgVmFuIDM1MFwiLCBcIldpbmRzdGFyXCJdfSxcbiAge1wiYnJhbmRcIjogXCJIdW1tZXJcIiwgXCJtb2RlbHNcIjogW1wiSDJcIiwgXCJIM1wiXX0sXG4gIHtcImJyYW5kXCI6IFwiSHl1bmRhaVwiLCBcIm1vZGVsc1wiOiBbXCJBY2NlbnRcIiwgXCJBdG9zXCIsIFwiQXRvcyBQcmltZVwiLCBcIkNvdXDDqVwiLCBcIkVsYW50cmFcIiwgXCJHYWxsb3BlclwiLCBcIkdlbmVzaXNcIiwgXCJHZXR6XCIsIFwiR3JhbmRldXJcIiwgXCJIIDM1MFwiLCBcIkgxXCIsIFwiSDEgQnVzXCIsIFwiSDEgVmFuXCIsIFwiSDIwMFwiLCBcImkxMFwiLCBcImkyMFwiLCBcImkzMFwiLCBcImkzMCBDV1wiLCBcImk0MFwiLCBcImk0MCBDV1wiLCBcIml4MjBcIiwgXCJpeDM1XCIsIFwiaXg1NVwiLCBcIkxhbnRyYVwiLCBcIk1hdHJpeFwiLCBcIlNhbnRhIEZlXCIsIFwiU29uYXRhXCIsIFwiVGVycmFjYW5cIiwgXCJUcmFqZXRcIiwgXCJUdWNzb25cIiwgXCJWZWxvc3RlclwiXX0sXG4gIHtcImJyYW5kXCI6IFwiSW5maW5pdGlcIiwgXCJtb2RlbHNcIjogW1wiRVhcIiwgXCJGWFwiLCBcIkdcIiwgXCJHIENvdXDDqVwiLCBcIk1cIiwgXCJRXCIsIFwiUVhcIl19LFxuICB7XCJicmFuZFwiOiBcIkphZ3VhclwiLCBcIm1vZGVsc1wiOiBbXCJEYWltbGVyXCIsIFwiRi1QYWNlXCIsIFwiRi1UeXBlXCIsIFwiUy1UeXBlXCIsIFwiU292ZXJlaWduXCIsIFwiWC1UeXBlXCIsIFwiWC10eXBlIEVzdGF0ZVwiLCBcIlhFXCIsIFwiWEZcIiwgXCJYSlwiLCBcIlhKMTJcIiwgXCJYSjZcIiwgXCJYSjhcIiwgXCJYSjhcIiwgXCJYSlJcIiwgXCJYS1wiLCBcIlhLOCBDb252ZXJ0aWJsZVwiLCBcIlhLUlwiLCBcIlhLUiBDb252ZXJ0aWJsZVwiXX0sXG4gIHtcImJyYW5kXCI6IFwiSmVlcFwiLCBcIm1vZGVsc1wiOiBbXCJDaGVyb2tlZVwiLCBcIkNvbW1hbmRlclwiLCBcIkNvbXBhc3NcIiwgXCJHcmFuZCBDaGVyb2tlZVwiLCBcIlBhdHJpb3RcIiwgXCJSZW5lZ2FkZVwiLCBcIldyYW5nbGVyXCJdfSxcbiAge1wiYnJhbmRcIjogXCJOaXNzYW5cIiwgXCJtb2RlbHNcIjogW1wiMTAwIE5YXCIsIFwiMjAwIFNYXCIsIFwiMzUwIFpcIiwgXCIzNTAgWiBSb2Fkc3RlclwiLCBcIjM3MCBaXCIsIFwiQWxtZXJhXCIsIFwiQWxtZXJhIFRpbm9cIiwgXCJDYWJzdGFyIEUgLSBUXCIsIFwiQ2Fic3RhciBUTDIgVmFsbmlrXCIsIFwiZS1OVjIwMFwiLCBcIkdULVJcIiwgXCJJbnN0ZXJzdGFyXCIsIFwiSnVrZVwiLCBcIktpbmcgQ2FiXCIsIFwiTGVhZlwiLCBcIk1heGltYVwiLCBcIk1heGltYSBRWFwiLCBcIk1pY3JhXCIsIFwiTXVyYW5vXCIsIFwiTmF2YXJhXCIsIFwiTm90ZVwiLCBcIk5QMzAwIFBpY2t1cFwiLCBcIk5WMjAwXCIsIFwiTlY0MDBcIiwgXCJQYXRoZmluZGVyXCIsIFwiUGF0cm9sXCIsIFwiUGF0cm9sIEdSXCIsIFwiUGlja3VwXCIsIFwiUGl4b1wiLCBcIlByaW1hc3RhclwiLCBcIlByaW1hc3RhciBDb21iaVwiLCBcIlByaW1lcmFcIiwgXCJQcmltZXJhIENvbWJpXCIsIFwiUHVsc2FyXCIsIFwiUWFzaHFhaVwiLCBcIlNlcmVuYVwiLCBcIlN1bm55XCIsIFwiVGVycmFub1wiLCBcIlRpaWRhXCIsIFwiVHJhZGVcIiwgXCJWYW5ldHRlIENhcmdvXCIsIFwiWC1UcmFpbFwiXX0sXG4gIHtcImJyYW5kXCI6IFwiVm9sdm9cIiwgXCJtb2RlbHNcIjogW1wiMjQwXCIsIFwiMzQwXCIsIFwiMzYwXCIsIFwiNDYwXCIsIFwiODUwXCIsIFwiODUwIGtvbWJpXCIsIFwiQzMwXCIsIFwiQzcwXCIsIFwiQzcwIENhYnJpb1wiLCBcIkM3MCBDb3Vww6lcIiwgXCJTNDBcIiwgXCJTNjBcIiwgXCJTNzBcIiwgXCJTODBcIiwgXCJTOTBcIiwgXCJWNDBcIiwgXCJWNTBcIiwgXCJWNjBcIiwgXCJWNzBcIiwgXCJWOTBcIiwgXCJYQzYwXCIsIFwiWEM3MFwiLCBcIlhDOTBcIl19LFxuICB7XCJicmFuZFwiOiBcIkRhZXdvb1wiLCBcIm1vZGVsc1wiOiBbXCJFc3Blcm9cIiwgXCJLYWxvc1wiLCBcIkxhY2V0dGlcIiwgXCJMYW5vc1wiLCBcIkxlZ2FuemFcIiwgXCJMdWJsaW5cIiwgXCJNYXRpelwiLCBcIk5leGlhXCIsIFwiTnViaXJhXCIsIFwiTnViaXJhIGtvbWJpXCIsIFwiUmFjZXJcIiwgXCJUYWN1bWFcIiwgXCJUaWNvXCJdfSxcbiAge1wiYnJhbmRcIjogXCJGaWF0XCIsIFwibW9kZWxzXCI6IFtcIjExMDBcIiwgXCIxMjZcIiwgXCI1MDBcIiwgXCI1MDBMXCIsIFwiNTAwWFwiLCBcIjg1MFwiLCBcIkJhcmNoZXR0YVwiLCBcIkJyYXZhXCIsIFwiQ2lucXVlY2VudG9cIiwgXCJDb3Vww6lcIiwgXCJDcm9tYVwiLCBcIkRvYmxvXCIsIFwiRG9ibG8gQ2FyZ29cIiwgXCJEb2JsbyBDYXJnbyBDb21iaVwiLCBcIkR1Y2F0b1wiLCBcIkR1Y2F0byBWYW5cIiwgXCJEdWNhdG8gS29tYmlcIiwgXCJEdWNhdG8gUG9kdm96b2tcIiwgXCJGbG9yaW5vXCIsIFwiRmxvcmlubyBDb21iaVwiLCBcIkZyZWVtb250XCIsIFwiR3JhbmRlIFB1bnRvXCIsIFwiSWRlYVwiLCBcIkxpbmVhXCIsIFwiTWFyZWFcIiwgXCJNYXJlYSBXZWVrZW5kXCIsIFwiTXVsdGlwbGFcIiwgXCJQYWxpbyBXZWVrZW5kXCIsIFwiUGFuZGFcIiwgXCJQYW5kYSBWYW5cIiwgXCJQdW50b1wiLCBcIlB1bnRvIENhYnJpb2xldFwiLCBcIlB1bnRvIEV2b1wiLCBcIlB1bnRvIFZhblwiLCBcIlF1Ym9cIiwgXCJTY3Vkb1wiLCBcIlNjdWRvIFZhblwiLCBcIlNjdWRvIEtvbWJpXCIsIFwiU2VkaWNpXCIsIFwiU2VpY2VudG9cIiwgXCJTdGlsb1wiLCBcIlN0aWxvIE11bHRpd2Fnb25cIiwgXCJTdHJhZGFcIiwgXCJUYWxlbnRvXCIsIFwiVGlwb1wiLCBcIlVseXNzZVwiLCBcIlVub1wiLCBcIlgxLzlcIl19LFxuICB7XCJicmFuZFwiOiBcIk1JTklcIiwgXCJtb2RlbHNcIjogW1wiQ29vcGVyXCIsIFwiQ29vcGVyIENhYnJpb1wiLCBcIkNvb3BlciBDbHVibWFuXCIsIFwiQ29vcGVyIERcIiwgXCJDb29wZXIgRCBDbHVibWFuXCIsIFwiQ29vcGVyIFNcIiwgXCJDb29wZXIgUyBDYWJyaW9cIiwgXCJDb29wZXIgUyBDbHVibWFuXCIsIFwiQ291bnRyeW1hblwiLCBcIk1pbmkgT25lXCIsIFwiT25lIERcIl19LFxuICB7XCJicmFuZFwiOiBcIlJvdmVyXCIsIFwibW9kZWxzXCI6IFtcIjIwMFwiLCBcIjIxNFwiLCBcIjIxOFwiLCBcIjI1XCIsIFwiNDAwXCIsIFwiNDE0XCIsIFwiNDE2XCIsIFwiNjIwXCIsIFwiNzVcIl19LFxuICB7XCJicmFuZFwiOiBcIlNtYXJ0XCIsIFwibW9kZWxzXCI6IFtcIkNhYnJpb1wiLCBcIkNpdHktQ291cMOpXCIsIFwiQ29tcGFjdCBQdWxzZVwiLCBcIkZvcmZvdXJcIiwgXCJGb3J0d28gY2FicmlvXCIsIFwiRm9ydHdvIGNvdXDDqVwiLCBcIlJvYWRzdGVyXCJdfV0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWc6IHN0cmluZywgY2xhc3NBcnJheTogc3RyaW5nW10sIGNvbnRlbnQgPSAnJyk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBjbGFzc0FycmF5LmZvckVhY2goKGNsYXNzSXRlbSkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzSXRlbSkpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtZW50KGNsYXNzQXJyYXk6IHN0cmluZ1tdLCBpbnB1dFR5cGU6IHN0cmluZywgdmFsdWUgPSAnJyk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsZW1lbnQudHlwZSA9IGlucHV0VHlwZTtcbiAgICBjbGFzc0FycmF5LmZvckVhY2goKGNsYXNzSXRlbSkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzSXRlbSkpO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBleGlzdHMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTZWxlY3RvcklucHV0KHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBleGlzdHMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0KGl0ZW06IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGl0ZW0uY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcignbm90IGV4aXN0cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGl0ZW06IEhUTUxFbGVtZW50LCBhdHRyaWJ1dGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyB8IG51bGwgPSBpdGVtLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcignbm90IGV4aXN0cycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG51bWJlckVsZW1lbnRzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1iZXJFbGVtZW50cyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xuICAgIGxldCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW2dldFJhbmRvbU51bWJlcihsZXR0ZXJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3I7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWxUZXh0KHRleHQgPSAnJyk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydtb2RhbCddLCB0ZXh0KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTW9kYWxUZXh0KCk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpO1xuICAgIG1vZGFscy5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgY29uc3QgZG9jdW1lbnRDbGllbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBjYXJDb250YWluZXJXaWR0aCA9IGZpbmRTZWxlY3RvcihgLnN0YXJ0LWNvbnRhaW5lcmApLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gZG9jdW1lbnRDbGllbnRXaWR0aCAtIGNhckNvbnRhaW5lcldpZHRoO1xuICAgIHJldHVybiBkaXN0YW5jZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYXBwOiBBcHAgPSBuZXcgQXBwKCk7XG5hcHAuc3RhcnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=