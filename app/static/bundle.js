/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! exports provided: getSynonymList, getSynonymTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSynonymList\", function() { return getSynonymList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSynonymTree\", function() { return getSynonymTree; });\n\nfunction get(url, callback) {\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.onreadystatechange = function () {\n        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)\n            callback(xmlHttp.response);\n    }\n    xmlHttp.open(\"GET\", `api/${url}`, true);\n    xmlHttp.responseType = 'json';\n    xmlHttp.send();\n}\n\nconst getSynonymList = (word, cb) => {\n    return get(`synonym_list?word=${word}`, cb);\n};\n\nconst getSynonymTree = (word, cb) => {\n    return get(`synonym_tree?word=${word}`, cb);\n};\n\n//# sourceURL=webpack:///./frontend/api_util.js?");

/***/ }),

/***/ "./frontend/index.js":
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree_tree_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree/tree_app.js */ \"./frontend/tree/tree_app.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const root = document.getElementById('root');\n    Object(_tree_tree_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n});\n\n//# sourceURL=webpack:///./frontend/index.js?");

/***/ }),

/***/ "./frontend/tree/tree.js":
/*!*******************************!*\
  !*** ./frontend/tree/tree.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// data = {\n//     var levels = [\n//       [{id: 'Chaos'}],\n//       [\n//         {id: 'Gaea', parents: ['Chaos']},\n//         {id: 'Uranus'}\n//       ],\n//       [\n//         {id: 'Oceanus', parents: ['Gaea', 'Uranus']},\n//         {id: 'Thethys', parents: ['Gaea', 'Uranus']},\n//         {id: 'Pontus'},\n//         {id: 'Rhea', parents: ['Gaea', 'Uranus']},\n//         {id: 'Cronus', parents: ['Gaea', 'Uranus']},\n//         {id: 'Coeus', parents: ['Gaea', 'Uranus']},\n//         {id: 'Phoebe', parents: ['Gaea', 'Uranus']},\n//         {id: 'Crius', parents: ['Gaea', 'Uranus']},\n//         {id: 'Hyperion', parents: ['Gaea', 'Uranus']},\n//         {id: 'Iapetus', parents: ['Gaea', 'Uranus']},\n//         {id: 'Thea', parents: ['Gaea', 'Uranus']},\n//         {id: 'Themis', parents: ['Gaea', 'Uranus']},\n//         {id: 'Mnemosyne', parents: ['Gaea', 'Uranus']}\n//       ],\n//       [\n//         {id: 'Doris', parents: ['Oceanus', 'Thethys']},\n//         {id: 'Neures', parents: ['Pontus', 'Gaea']},\n//         {id: 'Dionne'},\n//         {id: 'Demeter', parents: ['Rhea', 'Cronus']},\n//         {id: 'Hades', parents: ['Rhea', 'Cronus']},\n//         {id: 'Hera', parents: ['Rhea', 'Cronus']},\n//         {id: 'Alcmene'},\n//         {id: 'Zeus', parents: ['Rhea', 'Cronus']},\n//         {id: 'Eris'},\n//         {id: 'Leto', parents: ['Coeus', 'Phoebe']},\n//         {id: 'Amphitrite'},\n//         {id: 'Medusa'},\n//         {id: 'Poseidon', parents: ['Rhea', 'Cronus']},\n//         {id: 'Hestia', parents: ['Rhea', 'Cronus']}\n//       ],\n//       [\n//         {id: 'Thetis', parents: ['Doris', 'Neures']},\n//         {id: 'Peleus'},\n//         {id: 'Anchises'},\n//         {id: 'Adonis'},\n//         {id: 'Aphrodite', parents: ['Zeus', 'Dionne']},\n//         {id: 'Persephone', parents: ['Zeus', 'Demeter']},\n//         {id: 'Ares', parents: ['Zeus', 'Hera']},\n//         {id: 'Hephaestus', parents: ['Zeus', 'Hera']},\n//         {id: 'Hebe', parents: ['Zeus', 'Hera']},\n//         {id: 'Hercules', parents: ['Zeus', 'Alcmene']},\n//         {id: 'Megara'},\n//         {id: 'Deianira'},\n//         {id: 'Eileithya', parents: ['Zeus', 'Hera']},\n//         {id: 'Ate', parents: ['Zeus', 'Eris']},\n//         {id: 'Leda'},\n//         {id: 'Athena', parents: ['Zeus']},\n//         {id: 'Apollo', parents: ['Zeus', 'Leto']},\n//         {id: 'Artemis', parents: ['Zeus', 'Leto']},\n//         {id: 'Triton', parents: ['Poseidon', 'Amphitrite']},\n//         {id: 'Pegasus', parents: ['Poseidon', 'Medusa']},\n//         {id: 'Orion', parents: ['Poseidon']},\n//         {id: 'Polyphemus', parents: ['Poseidon']}\n//       ],\n//       [\n//         {id: 'Deidamia'},\n//         {id: 'Achilles', parents: ['Peleus', 'Thetis']},\n//         {id: 'Creusa'},\n//         {id: 'Aeneas', parents: ['Anchises', 'Aphrodite']},\n//         {id: 'Lavinia'},\n//         {id: 'Eros', parents: ['Hephaestus', 'Aphrodite']},\n//         {id: 'Helen', parents: ['Leda', 'Zeus']},\n//         {id: 'Menelaus'},\n//         {id: 'Polydueces', parents: ['Leda', 'Zeus']}\n//       ],\n//       [\n//         {id: 'Andromache'},\n//         {id: 'Neoptolemus', parents: ['Deidamia', 'Achilles']},\n//         {id: 'Aeneas(2)', parents: ['Creusa', 'Aeneas']},\n//         {id: 'Pompilius', parents: ['Creusa', 'Aeneas']},\n//         {id: 'Iulus', parents: ['Lavinia', 'Aeneas']},\n//         {id: 'Hermione', parents: ['Helen', 'Menelaus']}\n//       ]\n//     ]\n    \n//     // precompute level depth\n//     levels.forEach((l,i) => l.forEach(n => n.level = i))\n    \n//     var nodes = levels.reduce( ((a,x) => a.concat(x)), [] )\n//     var nodes_index = {}\n//     nodes.forEach(d => nodes_index[d.id] = d)\n    \n//     // objectification\n//     nodes.forEach(d => {\n//       d.parents = (d.parents === undefined ? [] : d.parents).map(p => nodes_index[p])\n//     })\n    \n//     // precompute bundles\n//     levels.forEach((l, i) => {\n//       var index = {}\n//       l.forEach(n => {\n//         if(n.parents.length == 0) {\n//           return\n//         }\n        \n//         var id = n.parents.map(d => d.id).sort().join('--')\n//         if (id in index) {\n//           index[id].parents = index[id].parents.concat(n.parents)\n//         }\n//         else {\n//           index[id] = {id: id, parents: n.parents.slice(), level: i}\n//         }\n//         n.bundle = index[id]\n//       })\n//       l.bundles = Object.keys(index).map(k => index[k])\n//       l.bundles.forEach((b, i) => b.i = i)\n//     })\n    \n//     var links = []\n//     nodes.forEach(d => {\n//       d.parents.forEach(p => links.push({source: d, bundle: d.bundle, target: p}))\n//     })\n    \n//     var bundles = levels.reduce( ((a,x) => a.concat(x.bundles)), [] )\n    \n//     // layout\n//     const node_height = 16\n//     const node_width = 80\n//     const bundle_width = 16\n//     const level_y_padding = 16\n    \n//     var x_offset = 0\n//     var y_offset = 0\n//     levels.forEach(l => {\n//       x_offset += l.bundles.length*bundle_width\n//       y_offset += level_y_padding\n//       l.forEach((n, i) => {\n//         n.x = n.level*node_width + x_offset + node_height/2\n//         n.y = i*node_height + y_offset\n//       })\n//       y_offset += l.length*node_height\n//     })\n    \n//     var i = 0\n//     levels.forEach(l => {\n//       l.bundles.forEach(b => {\n//         b.x = b.parents[0].x + node_width + (l.bundles.length-1-b.i)*bundle_width\n//         b.y = i*node_height\n//       })\n//       i += l.length\n//     })\n      \n//     links.forEach(l => {\n//       l.xt = l.target.x\n//       l.yt = l.target.y\n//       l.xb = l.bundle.x\n//       l.yb = l.bundle.y\n//       l.xs = l.source.x\n//       l.ys = l.source.y\n//     })\n    \n//     var layout = {\n//       height: nodes.length * node_height + levels.length * level_y_padding,\n//       node_height,\n//       node_width,\n//       bundle_width\n//     }\n    \n//     return {levels, nodes, nodes_index, links, bundles, layout}\n//   }\n\n// color = d3.scaleOrdinal(d3.schemeDark2);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(root) {\n    d3.select(\"svg\").remove();\n\n    var margin = {top: 20, right: 120, bottom: 20, left: 120},\n        width = 960 - margin.right - margin.left,\n        height = 500 - margin.top - margin.bottom;\n        \n    var i = 0,\n        duration = 750,\n        root;\n\n    var tree = d3.layout.tree()\n        .size([height, width]);\n\n    var diagonal = d3.svg.diagonal()\n        .projection(function(d) { return [d.y, d.x]; });\n\n    var svg = d3.select(\"body\").append(\"svg\")\n        .attr(\"width\", width + margin.right + margin.left)\n        .attr(\"height\", height + margin.top + margin.bottom)\n    .append(\"g\")\n        .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");\n\n    root.x0 = height / 2;\n    root.y0 = 0;\n\n    update(root);\n\n    d3.select(self.frameElement).style(\"height\", \"500px\");\n\n    function update(source) {\n\n    // Compute the new tree layout.\n    var nodes = tree.nodes(root).reverse(),\n        links = tree.links(nodes);\n\n    // Normalize for fixed-depth.\n    nodes.forEach(function(d) { d.y = d.depth * 180; });\n\n    // Update the nodes…\n    var node = svg.selectAll(\"g.node\")\n        .data(nodes, function(d) { return d.id || (d.id = ++i); });\n\n    // Enter any new nodes at the parent's previous position.\n    var nodeEnter = node.enter().append(\"g\")\n        .attr(\"class\", \"node\")\n        .attr(\"transform\", function(d) { return \"translate(\" + source.y0 + \",\" + source.x0 + \")\"; })\n        .on(\"click\", click);\n\n    nodeEnter.append(\"circle\")\n        .attr(\"r\", 1e-6)\n        .style(\"fill\", function(d) { return d._children ? \"lightsteelblue\" : \"#fff\"; });\n\n    nodeEnter.append(\"text\")\n        .attr(\"x\", function(d) { return d.children || d._children ? -13 : 13; })\n        .attr(\"dy\", \".35em\")\n        .attr(\"text-anchor\", function(d) { return d.children || d._children ? \"end\" : \"start\"; })\n        .text(function(d) { return d.name; })\n        .style(\"fill-opacity\", 1e-6);\n\n    // Transition nodes to their new position.\n    var nodeUpdate = node.transition()\n        .duration(duration)\n        .attr(\"transform\", function(d) { return \"translate(\" + d.y + \",\" + d.x + \")\"; });\n\n    nodeUpdate.select(\"circle\")\n        .attr(\"r\", 10)\n        .style(\"fill\", function(d) { return d._children ? \"lightsteelblue\" : \"#fff\"; });\n\n    nodeUpdate.select(\"text\")\n        .style(\"fill-opacity\", 1);\n\n    // Transition exiting nodes to the parent's new position.\n    var nodeExit = node.exit().transition()\n        .duration(duration)\n        .attr(\"transform\", function(d) { return \"translate(\" + source.y + \",\" + source.x + \")\"; })\n        .remove();\n\n    nodeExit.select(\"circle\")\n        .attr(\"r\", 1e-6);\n\n    nodeExit.select(\"text\")\n        .style(\"fill-opacity\", 1e-6);\n\n    // Update the links…\n    var link = svg.selectAll(\"path.link\")\n        .data(links, function(d) { return d.target.id; });\n\n    // Enter any new links at the parent's previous position.\n    link.enter().insert(\"path\", \"g\")\n        .attr(\"class\", \"link\")\n        .attr(\"d\", function(d) {\n            var o = {x: source.x0, y: source.y0};\n            return diagonal({source: o, target: o});\n        });\n\n    // Transition links to their new position.\n    link.transition()\n        .duration(duration)\n        .attr(\"d\", diagonal);\n\n    // Transition exiting nodes to the parent's new position.\n    link.exit().transition()\n        .duration(duration)\n        .attr(\"d\", function(d) {\n            var o = {x: source.x, y: source.y};\n            return diagonal({source: o, target: o});\n        })\n        .remove();\n\n    // Stash the old positions for transition.\n    nodes.forEach(function(d) {\n        d.x0 = d.x;\n        d.y0 = d.y;\n    });\n    }\n\n    // Toggle children on click.\n    function click(d) {\n    if (d.children) {\n        d._children = d.children;\n        d.children = null;\n    } else {\n        d.children = d._children;\n        d._children = null;\n    }\n    update(d);\n    }\n});\n\n//# sourceURL=webpack:///./frontend/tree/tree.js?");

/***/ }),

/***/ "./frontend/tree/tree_app.js":
/*!***********************************!*\
  !*** ./frontend/tree/tree_app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api_util.js */ \"./frontend/api_util.js\");\n/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree.js */ \"./frontend/tree/tree.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(root) {\n    const input = document.getElementById('word-input');\n\n    const getListButton = document.getElementById('list');\n    getListButton.addEventListener('click', () => {\n        Object(_api_util_js__WEBPACK_IMPORTED_MODULE_0__[\"getSynonymList\"])(input.value, res => console.log(res)); \n    });\n\n    const getTreeButton = document.getElementById('tree');\n    getTreeButton.addEventListener('click', () => {\n        Object(_api_util_js__WEBPACK_IMPORTED_MODULE_0__[\"getSynonymTree\"])(input.value, res => Object(_tree_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res));\n    });\n});\n\n//# sourceURL=webpack:///./frontend/tree/tree_app.js?");

/***/ })

/******/ });