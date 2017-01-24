/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//require('materialize-css');
	
	__webpack_require__(2);
	
	__webpack_require__(6);
	
	/*var angular         = require('angular'),
	    router          = require('angular-ui-router');
	    ngAnimate       = require('angular-animate'),
	    textRandy       = require('textAngular-rangy.min.js'),
	    angularSanitize = require('textAngular-sanitize.js'), 
	    textAngular     = require('textangular/dist/textAngular-sanitize.min');*/
	
	//var app = angular.module("myApp", [router, require('angular-sanitize'), require('textAngular'), 'ngMockE2E']);
	__webpack_require__(7);
	
	var app = angular.module("myApp", ['ui.router', 'textAngular', 'ngMockE2E', 'ngAnimate', 'toastr']);
	
	app.config(['$urlRouterProvider', function ($urlRouterProvider) {
	  $urlRouterProvider.otherwise("/dashboard");
	}]);
	
	// services
	app.factory('Configuration', __webpack_require__(8));
	app.factory('profileFactory', __webpack_require__(9));
	app.factory('CategoriesFactory', ['$http', '$q', __webpack_require__(10)]);
	
	// common
	__webpack_require__(11)(app);
	__webpack_require__(16)(app);
	__webpack_require__(22)(app);
	__webpack_require__(27)(app);
	__webpack_require__(33)(app);
	
	// modules
	__webpack_require__(35)(app);
	__webpack_require__(40)(app);
	__webpack_require__(45)(app);
	__webpack_require__(65)(app);
	__webpack_require__(87)(app);
	__webpack_require__(106)(app);
	__webpack_require__(117)(app);
	__webpack_require__(123)(app);
	
	app.run(['$http', '$httpBackend', function ($http, $httpBackend) {
	
	  var categories = '\n        [\n          {\n            "_id": "58137d49c4ca6f501400002f",\n            "name": "Computer",\n            "parent": null,\n            "ancestors": [],\n            "semanticUrl": "computers",\n            "logotype": "computers.jpg"\n          },\n          {\n            "_id": "58138a27c4ca6f5814000029",\n            "name": "Apple",\n            "parent": "58137d49c4ca6f501400002f",\n            "ancestors": [\n              "58137d49c4ca6f501400002f"\n            ],\n            "semanticUrl": "apples ",\n            "logotype": "1477675559daYTvwjKfs.jpg"\n          },\n          {\n            "_id": "58138a40c4ca6f581400002a",\n            "name": "Acer",\n            "parent": "58137d49c4ca6f501400002f",\n            "ancestors": [\n              "58137d49c4ca6f501400002f"\n            ],\n            "semanticUrl": "acers ",\n            "logotype": "1477675584DziI0wI2hIM.jpg"\n          },\n          {\n            "_id": "58139f27c4ca6f581400002b",\n            "name": "TV LG",\n            "parent": "58138a40c4ca6f581400002a",\n            "ancestors": [\n              "58137d49c4ca6f501400002f",\n              "58138a40c4ca6f581400002a"\n            ],\n            "semanticUrl": "tv-lg",\n            "table_id": "580cee19c4ca6f140f000029",\n            "logotype": "14776809358 a6d9bad25950646b9d2f25dc1ec46dddd8bd4825600712c1353b05169153cf3.jpg"\n          }\n        ]\n    ';
	  var typeProducts = '\n        [\n          {\n            "_id": "580cee19c4ca6f140f000029",\n            "name": "TV",\n            "semanticUrl": "televizory",\n            "fields": [\n              {\n                "name": "Memory",\n                "type": {\n                  "name": "string"\n                }\n              },\n              {\n                "name": "Size Scrine",\n                "type": {\n                  "name": "string"\n                }\n              }\n            ]\n          },\n          {\n            "_id": "58442ccac4ca6f7014000029",\n            "name": "Фотокамера",\n            "semanticUrl": "fotokameri",\n            "fields": [\n              {\n                "name": "Size1",\n                "type": {\n                  "name": "string"\n                }\n              },\n              {\n                "name": "Size2",\n                "type": {\n                  "name": "string"\n                }\n              },\n              {\n                "name": "Size3",\n                "type": {\n                  "name": "string"\n                }\n              }\n            ]\n          }\n        ]\n    ';
	  var productsTV = '[{"id":1,"name":"iPhone","manufacturer_id":1,"description":"dsadas","price":15000,"type_product_id":"580cee19c4ca6f140f000029","created_at":null,"updated_at":null,"fields":["4 Gb","800x400"]},{"id":5,"name":"iPhone22","manufacturer_id":0,"description":"dgdg425wffsfs","price":22000,"type_product_id":"580cee19c4ca6f140f000029","created_at":"2016-10-23 19:28:12","updated_at":"2016-10-23 19:28:12","fields":["420","521x400"]},{"id":7,"name":"iPhone3","manufacturer_id":0,"description":"НазваниеНазваниеНазваниеНазвание","price":12000,"type_product_id":"580cee19c4ca6f140f000029","created_at":"2016-12-03 20:03:03","updated_at":"2016-12-03 20:03:03","fields":["20Gb","800x1800"]}]';
	  var productsFotocameri = '[]';
	  var units = '[\n                  {\n                    "id": 1,\n                    "name": "Mb",\n                    "created_at": null,\n                    "updated_at": null\n                  },\n                  {\n                    "id": 2,\n                    "name": "px",\n                    "created_at": null,\n                    "updated_at": null\n                  },\n                  {\n                    "id": 3,\n                    "name": "zoom",\n                    "created_at": null,\n                    "updated_at": null\n                  }\n                ]';
	  var newCategory = '{"status":200,"message":"Created new category"}';
	  var editCategory = '{"status":200,"message":"Edited category"}';
	
	  $httpBackend.whenGET('admin/categories').respond(function () {
	    return [200, categories];
	  });
	  $httpBackend.whenGET('admin/type-products').respond(function () {
	    return [200, typeProducts];
	  });
	  $httpBackend.whenGET('admin/type-products/televizory').respond(function () {
	    return [200, productsTV];
	  });
	  $httpBackend.whenGET('admin/type-products/fotokameri').respond(function () {
	    return [200, productsFotocameri];
	  });
	  $httpBackend.whenGET('admin/units').respond(function () {
	    return [200, units];
	  });
	  $httpBackend.whenPOST('admin/categories').respond(function () {
	    return [200, newCategory];
	  });
	  $httpBackend.whenPOST('admin/categories/edit/58137d49c4ca6f501400002f').respond(function () {
	    return [200, editCategory];
	  });
	}]);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*@import url('~font-awesome/css/font-awesome.min.css');*/

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// BigScreen v2.0.5 - 2015-05-02 - MIT License
	!function(a,b,c){"use strict";function d(a){var b=null;if("VIDEO"===a.tagName)b=a;else{var c=a.getElementsByTagName("video");c[0]&&(b=c[0])}return b}function e(a){var b=d(a);if(b&&b.webkitEnterFullscreen){try{b.readyState<b.HAVE_METADATA?(b.addEventListener("loadedmetadata",function e(){b.removeEventListener("loadedmetadata",e,!1),b.webkitEnterFullscreen(),l=!!b.getAttribute("controls")},!1),b.load()):(b.webkitEnterFullscreen(),l=!!b.getAttribute("controls")),k=b}catch(c){return r("not_supported",a)}return!0}return r(void 0===j.request?"not_supported":"not_enabled",a)}function f(){s.element||(q(),h())}function g(){c&&"webkitfullscreenchange"===j.change&&window.addEventListener("resize",f,!1)}function h(){c&&"webkitfullscreenchange"===j.change&&window.removeEventListener("resize",f,!1)}var i=/i(Pad|Phone|Pod)/.test(navigator.userAgent)&&parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/,"$1.$2"),10)>=7,j=function(){var a=b.createElement("video"),c={request:["requestFullscreen","webkitRequestFullscreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"],exit:["exitFullscreen","webkitCancelFullScreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],enabled:["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],element:["fullscreenElement","webkitFullscreenElement","webkitCurrentFullScreenElement","mozFullScreenElement","msFullscreenElement"],change:["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],error:["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"]},d={};for(var e in c)for(var f=0,g=c[e].length;g>f;f++)if(c[e][f]in a||c[e][f]in b||"on"+c[e][f].toLowerCase()in b){d[e]=c[e][f];break}return d}(),k=null,l=null,m=function(){},n=[],o=!1;navigator.userAgent.indexOf("Android")>-1&&navigator.userAgent.indexOf("Chrome")>-1&&(o=parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/,"$1"),10)||!0);var p=function(a){var b=n[n.length-1];b&&(a!==b.element&&a!==k||!b.hasEntered)&&("VIDEO"===a.tagName&&(k=a),1===n.length&&s.onenter(s.element),b.enter.call(b.element,a||b.element),b.hasEntered=!0)},q=function(){!k||l||i||(k.setAttribute("controls","controls"),k.removeAttribute("controls")),k=null,l=null;var a=n.pop();a&&(a.exit.call(a.element),s.element||(n.forEach(function(a){a.exit.call(a.element)}),n=[],s.onexit()))},r=function(a,b){if(n.length>0){var c=n.pop();b=b||c.element,c.error.call(b,a),s.onerror(b,a)}},s={request:function(a,d,f,g){if(a=a||b.body,n.push({element:a,enter:d||m,exit:f||m,error:g||m}),void 0===j.request)return void e(a);if(c&&b[j.enabled]===!1)return void e(a);if(o!==!1&&32>o)return void e(a);if(c&&void 0===j.enabled)return j.enabled="webkitFullscreenEnabled",a[j.request](),void setTimeout(function(){b[j.element]?b[j.enabled]=!0:(b[j.enabled]=!1,e(a))},250);try{a[j.request](),setTimeout(function(){b[j.element]||r(c?"not_enabled":"not_allowed",a)},100)}catch(h){r("not_enabled",a)}},exit:function(){h(),b[j.exit]()},toggle:function(a,b,c,d){s.element?s.exit():s.request(a,b,c,d)},videoEnabled:function(a){if(s.enabled)return!0;a=a||b.body;var c=d(a);return c&&void 0!==c.webkitSupportsFullscreen?c.readyState<c.HAVE_METADATA?"maybe":c.webkitSupportsFullscreen:!1},onenter:m,onexit:m,onchange:m,onerror:m};try{Object.defineProperties(s,{element:{enumerable:!0,get:function(){return k&&k.webkitDisplayingFullscreen?k:b[j.element]||null}},enabled:{enumerable:!0,get:function(){return"webkitCancelFullScreen"!==j.exit||c?o!==!1&&32>o?!1:b[j.enabled]||!1:!0}}}),j.change&&b.addEventListener(j.change,function(a){if(s.onchange(s.element),s.element){var b=n[n.length-2];b&&b.element===s.element?q():(p(s.element),g())}else q()},!1),b.addEventListener("webkitbeginfullscreen",function(a){var b=!0;if(n.length>0)for(var c=0,e=n.length;e>c;c++){var f=d(n[c].element);if(f===a.srcElement){b=!1;break}}b&&n.push({element:a.srcElement,enter:m,exit:m,error:m}),s.onchange(a.srcElement),p(a.srcElement)},!0),b.addEventListener("webkitendfullscreen",function(a){s.onchange(a.srcElement),q(a.srcElement)},!0),j.error&&b.addEventListener(j.error,function(a){r("not_allowed")},!1)}catch(t){s.element=null,s.enabled=!1} true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return s}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=s:a.BigScreen=s}(this,document,self!==top);


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function Configuration($location) {
	
	        return {
	
	                getUrl: function getUrl() {
	
	                        return $location.path();
	                }
	
	        };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function profileFactory() {
	
									function getProfile() {
	
																	return {
																									firstName: 'Alexei',
																									lastName: 'Minigulov',
																									role: 'Administraror',
																									photo: 'dist/images/nobody_profile.jpg'
																	};
									}
	
									return {
	
																	getProfile: getProfile
	
									};
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function CategoriesFactory($http, $q) {
	
	        var modelHeightCreate;
	
	        var categories = null;
	
	        function get() {
	
	                var deferred = $q.defer();
	
	                /*setTimeout(function() {
	                if (categories) {
	                deferred.resolve(categories);
	                } else {
	                deferred.reject('Greeting is not allowed.');
	                }
	                }, 2000);
	                 	return deferred.promise;*/
	
	                if (categories) {
	
	                        deferred.resolve(categories);
	                        return deferred.promise;
	                }
	
	                $http.get('admin/categories').then(function successCallback(response) {
	
	                        if (categories === null) categories = response.data;
	
	                        deferred.resolve(response.data);
	                }, function errorCallback(response) {
	
	                        deferred.reject('Greeting is not allowed.');
	                });
	                return deferred.promise;
	        }
	
	        function getById(id) {
	
	                function setCategoryById() {
	
	                        function catchCategoryById(val) {
	                                return id === val._id;
	                        }
	
	                        category = categories.find(catchCategoryById);
	                        if (category !== null) {
	                                deferred.resolve(category);
	                        } else {
	                                deferred.reject('Category not found.');
	                        }
	                }
	
	                var deferred = $q.defer(),
	                    category = null;
	
	                if (categories === null) {
	
	                        get().then(function success(response) {
	
	                                setCategoryById();
	                        }, function error(response) {});
	
	                        return deferred.promise;
	                }
	
	                setCategoryById();
	
	                return deferred.promise;
	        }
	
	        function setModelHeightCreate(val) {
	
	                modelHeightCreate = val;
	        }
	
	        function getModelHeightCreate() {
	
	                return modelHeightCreate;
	        }
	
	        function submitAdd(newCategory) {
	
	                var deferred = $q.defer();
	
	                $http({
	                        method: 'POST',
	                        url: 'admin/categories',
	                        data: newCategory
	                }).then(function successCallback(response) {
	
	                        deferred.resolve(response.data);
	                }, function errorCallback(response) {
	
	                        deferred.reject('Error create new category.');
	                });
	                return deferred.promise;
	        }
	
	        return {
	                get: get,
	                getById: getById,
	                setModelHeightCreate: setModelHeightCreate,
	                getModelHeightCreate: getModelHeightCreate,
	                submitAdd: submitAdd
	        };
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	  __webpack_require__(12);
	
	  app.directive('msToolbar', __webpack_require__(14));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".top-nav.fixed {\r\n  position: fixed;\r\n  height: 65px;\r\n  z-index: 2;\r\n}\r\n.top-nav.fixed > .container {\r\n  display: inline-block;\r\n  position: absolute;\r\n  z-index: 1;\r\n  max-width: 70%;\r\n  margin: 0 auto;\r\n  left: 250px;\r\n  right: 0;\r\n  top: 0px;\r\n  padding: 0 40px;\r\n}\r\n.top-nav.fixed > .container > .nav-wrapper > * {\r\n    float: left;\r\n}\r\n.top-nav.fixed > .container > .nav-wrapper > *:first-child {\r\n  display: none;\r\n  margin-right: 40px;\r\n}\r\n@media only screen and (max-width : 992px) {\r\n  .top-nav.fixed > .container {\r\n    left: 0;\r\n    max-width: 90%;\r\n    padding: 0 0px;\r\n  }\r\n  .top-nav.fixed > .container > .nav-wrapper > i {\r\n    display: inline-block !important;\r\n    margin-top: 12px;\r\n    height: 40px !important;\r\n    width: 40px;\r\n    font-size: 25px;\r\n    line-height: 40px !important;\r\n    border-radius: 100%;\r\n    text-align: center;\r\n  }\r\n}\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\r\n   /* стили только для IE10 */\r\n  .top-nav.fixed > .container > .nav-wrapper .fa.fa-bars {\r\n    position: static;\r\n  }\r\n  .top-nav.fixed > .container > .nav-wrapper .fa.fa-bars::after {\r\n    content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGOyBzdHJva2U6I0ZGRkZGRn08L3N0eWxlPjxnPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zODEsMTkwLjlIMTMxYy0xMSwwLTIwLTktMjAtMjBzOS0yMCwyMC0yMGgyNTBjMTEsMCwyMCw5LDIwLDIwUzM5MiwxOTAuOSwzODEsMTkwLjl6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zODEsMzYxLjFIMTMxYy0xMSwwLTIwLTktMjAtMjBzOS0yMCwyMC0yMGgyNTBjMTEsMCwyMCw5LDIwLDIwUzM5MiwzNjEuMSwzODEsMzYxLjF6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zODEsMjc2SDEzMWMtMTEsMC0yMC05LTIwLTIwczktMjAsMjAtMjBoMjUwYzExLDAsMjAsOSwyMCwyMFMzOTIsMjc2LDM4MSwyNzZ6Ii8+PC9nPjwvZz48L3N2Zz4=);\r\n    display: block;\r\n    position: absolute;\r\n    font-family: sans-serif;\r\n    font-size: 25px;\r\n    top: 15px;\r\n    left: 8px;\r\n    width: 40px;\r\n    height: 40px;\r\n    color: #fff;\r\n  }\r\n}", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function () {
	
	    return {
	        restrict: 'E',
	        template: __webpack_require__(15),
	        link: function link(scope) {}
	    };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<nav class=\"top-nav fixed\"> <div class=\"container\"> <div class=\"nav-wrapper\"> <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n<a href=\"#\" data-activates=\"slide-out\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a> </div> </div> </nav>";
	ngModule.run(["$templateCache",function(c){c.put("_common/ms-toolbar/template.html",v1)}]);
	module.exports=v1;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	    __webpack_require__(17);
	
	    app.directive('msSidenav', __webpack_require__(19));
	
	    app.controller('profileCtrl', ['$timeout', 'profileFactory', __webpack_require__(21)]);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".side-nav.fixed a {\r\n  padding: 0 30px\r\n}\r\n.side-nav.fixed .profile {\r\n  padding: 0;\r\n}\r\n.side-nav.fixed .profile ul {\r\n  position: relative;\r\n  height: 180px;\r\n  background-color: #ee6e73;\r\n}\r\n.side-nav.fixed .profile ul li {\r\n  position: absolute;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n.side-nav.fixed .profile ul li.name {\r\n  font-size: 16px;\r\n  top: 87px;\r\n  left: 103px;\r\n}\r\n.side-nav.fixed .profile ul li.name .waves-effect {\r\n  padding: 0 10px;\r\n  color: white;\r\n}\r\n.side-nav.fixed .profile ul li.name .waves-effect i {\r\n  padding-left: 10px;\r\n  margin: 0;\r\n  color: white;\r\n}\r\n.side-nav.fixed .profile ul li.role {\r\n  display: block;\r\n  top: 0;\r\n  bottom: 0;\r\n  left:0;\r\n  right:0;\r\n  width: 200px;\r\n  height: 65px;\r\n  line-height: 65px;\r\n  font-size: 30px;\r\n  margin: 0 auto;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n.side-nav.fixed .profile ul li.photo {\r\n  position: absolute;\r\n  padding: 0;\r\n  width: 90px;\r\n  height: 90px;\r\n  bottom: 22px;\r\n  left: 14px;\r\n  border: 4px solid #f44336;\r\n  border-radius: 100%;\r\n}\r\n.side-nav.fixed .profile ul li img{\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 100%;\r\n  box-sizing: border-box;\r\n}\r\n.side-nav.fixed .profile ul ul.profile-content {\r\n  height: 205px;\r\n  background-color: white;\r\n}\r\n.side-nav.fixed .profile ul ul.profile-content > li {\r\n  display: block;\r\n  position: static;\r\n  text-align: center;\r\n}\r\n.side-nav.fixed .profile ul ul.profile-content > li > a {\r\n  line-height: 53px\r\n}\r\n.side-nav li.no-padding:hover {\r\n  background-color: white;\r\n}", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function () {
	
	   //require('jquery');
	
	   return {
	      restrict: 'E',
	      template: __webpack_require__(20),
	      link: function link(scope, profileFactory, element, attrs) {
	
	         $('.collapsible').collapsible();
	
	         $(".button-collapse").sideNav();
	      },
	      controller: 'profileCtrl as vm'
	   };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<ul id=\"slide-out\" class=\"side-nav fixed\"> <li class=\"profile\"> <ul> <li class=\"photo\"><img ng-src=\"{{::vm.profile.photo}}\"></li> <li class=\"name\"> <ul id=\"show-profile\" class=\"dropdown-content profile-content\"> <li><a href=\"#\">Профиль</a></li> <li><a href=\"#\">Настройки</a></li> <li><a href=\"#\">Помощь</a></li> <li><a href=\"#\">Выход</a></li> </ul> <a href=\"#!\" class=\"waves-effect waves-light dropdown-button\" data-activates=\"show-profile\"> <i class=\"fa fa-caret-down right\" aria-hidden=\"true\"></i>\n{{::vm.profile.firstName}} {{::vm.profile.lastName}} </a> </li> <li class=\"role\">{{::vm.profile.role}}</li> </ul> </li> <li><a ui-sref=\"dashboard\" class=\"waves-effect waves-teal logo\">Dashboard</a></li> <li><a ui-sref=\"categories({ subcategory: null })\" class=\"waves-effect waves-teal\">Категории</a></li> <li class=\"no-padding\"> <ul class=\"collapsible collapsible-accordion\"> <li class=\"bold\"> <a class=\"collapsible-header waves-effect waves-teal\">Товары</a> <div class=\"collapsible-body\"> <ul> <li><a class=\"waves-effect\" ui-sref=\"type-products\">Виды товаров</a></li> <li><a class=\"waves-effect\" ui-sref=\"lists-values\">Списки</a></li> <li><a class=\"waves-effect\" ui-sref=\"units\">Ед. измерения</a></li> </ul> </div> </li> <li class=\"bold\"> <a class=\"collapsible-header waves-effect waves-teal\">Пользователи</a> <div class=\"collapsible-body\"> <ul> <li><a class=\"waves-effect\" href=\"#\">Список</a></li> <li><a class=\"waves-effect\" href=\"#\">Создать</a></li> <li><a class=\"waves-effect\" href=\"#\">Удалить</a></li> </ul> </div> </li> </ul> </li> <li><a class=\"waves-effect waves-teal logo\" ui-sref=\"news\">Новости</a></li> <li><a class=\"waves-effect waves-teal logo\">Акции</a></li> <li><a class=\"waves-effect waves-teal logo\">Статьи</a></li> <li><a class=\"waves-effect waves-teal logo\">Отделы сайта</a></li> </ul>";
	ngModule.run(["$templateCache",function(c){c.put("_common/ms-sidenav/template.html",v1)}]);
	module.exports=v1;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($timeout, profileFactory) {
	
		var vm = this;
	
		vm.profile = profileFactory.getProfile();
	
		$timeout(function () {
			$('.dropdown-button').dropdown({
				inDuration: 300,
				outDuration: 225,
				belowOrigin: true,
				alignment: 'right'
			});
		});
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	  __webpack_require__(23);
	
	  app.directive('msLayout', __webpack_require__(25));
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function () {
	
	    return {
	        restrict: 'E',
	        scope: {},
	        template: __webpack_require__(26)
	    };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<header> <ms-toolbar></ms-toolbar> <ms-sidenav></ms-sidenav> </header> <main> <div class=\"container\"> <ms-bread-crumbs></ms-bread-crumbs> <ui-view></ui-view> </div> </main>";
	ngModule.run(["$templateCache",function(c){c.put("_common/ms-layout/template.html",v1)}]);
	module.exports=v1;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	    __webpack_require__(28);
	
	    app.directive('msBreadCrumbs', ['$state', '$timeout', '$rootScope', 'CategoriesFactory', __webpack_require__(30)]);
	
	    app.controller('breadCrumbsCtrl', ['$state', '$timeout', '$rootScope', '$scope', __webpack_require__(32)]);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-width : 480px) {\r\n  ms-bread-crumbs > ul {\r\n    margin: 0;\r\n    margin-top: 5px;\r\n  }\r\n}\r\nms-bread-crumbs > ul {\r\n  \r\n}\r\nms-bread-crumbs li {\r\n  display: inline-block;\r\n  font-size: 18px;\r\n}\r\nms-bread-crumbs li::after {\r\n  content: '/';\r\n  display: inline-block;\r\n  margin: 0 10px;\r\n  color: #999;\r\n}\r\nms-bread-crumbs li:last-child::after {\r\n  display: none;\r\n}\r\nms-bread-crumbs li:last-child a{\r\n  color: #999;\r\n  cursor: default;\r\n}", ""]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function ($state, $timeout, $rootScope, CategoriesFactory) {
	
							return {
													restrict: 'E',
													template: __webpack_require__(31),
	
													compile: function compile(element, attributes) {
	
																			return {
																									post: function post(scope) {
	
																															scope.states = []; //	[{name,state},{name, state}]
	
																															/*
	                               * @name    _findBreadCrumb
	                              * @param   {Object|Array} list states.
	                              * @param   {String} state name.
	                              * @returns {Object} `obj` {name: breadcrumb, state}.
	                              */
																															function _findBreadCrumb(arrayState, stateName) {
	
																																					var state = { name: 'absent bread-crumb', state: null };
																																					for (var i = arrayState.length - 1; i >= 0; i--) {
	
																																											if (!arrayState[i].hasOwnProperty("data")) continue;
																																											if (!arrayState[i].data.hasOwnProperty("label") || !arrayState[i].hasOwnProperty("name")) continue; // isEmpty propertys
																																											if (typeof arrayState[i].data.label !== "string" || typeof arrayState[i].name !== "string") continue; // isString Propertys
																																											if (arrayState[i].name !== stateName) continue;
																																											state.name = arrayState[i].data.label;
																																											state.state = arrayState[i].name;
																																											if (arrayState[i].data.hasOwnProperty("parent")) state.parent = arrayState[i].data.parent;
																																											break;
																																					}
																																					return state; // @return: {name, state} @param: stata
																															}
	
																															/*
	                               * @name    getBreadCrumbs
	                              * @param   {Object} object get with _findBreadCrumb()
	                              * @returns {Object|Array} array breadCrumbs
	                              */
																															function getBreadCrumbs(result) {
																																					//debugger;
																																					//console.log($state.params);
																																					//console.log(result);
																																					var children = [];
	
																																					if (result.state === null) return;
	
																																					if (result.hasOwnProperty("parent")) {
																																											var parent = getBreadCrumbs(_findBreadCrumb($state.get(), result.parent));
																																											children = children.concat(parent);
																																					}
																																					children.push(result);
																																					return children;
																															}
	
																															/*
	                                      	 * @name    isEmpty
	                               * @param   {Object} obj.
	                               * @returns {Boolean}
	                               */
																															function isEmpty(obj) {
	
																																					// null and undefined are "empty"
																																					if (obj == null) return true;
	
																																					// Assume if it has a length property with a non-zero value
																																					// that that property is correct.
																																					if (obj.length > 0) return false;
																																					if (obj.length === 0) return true;
	
																																					// If it isn't an object at this point
																																					// it is empty, but it can't be anything *but* empty
																																					// Is it empty?  Depends on your application.
																																					if (typeof obj !== "object") return true;
	
																																					// Otherwise, does it have any properties of its own?
																																					// Note that this doesn't handle
																																					// toString and valueOf enumeration bugs in IE < 9
																																					for (var key in obj) {
																																											if (hasOwnProperty.call(obj, key)) return false;
																																					}
	
																																					return true;
																															}
	
																															/*
	                                      	 * @name   ancestorsCategories
	                               * @param  {String} Category.parentId.
	                               * @push   add scope.states array ancestorsCategories
	                               */
																															function ancestorsCategories(parentId, categories) {
	
																																					var category = categories.filter(function (val) {
	
																																											return val._id === parentId;
																																					});
																																					if (!Array.isArray(category)) throw new SyntaxError("Не массив");
																																					category = category[0];
																																					if (typeof category !== "object") throw new SyntaxError("Не обьект");
	
																																					var ancestorsId = [];
																																					ancestorsId.push(parentId);
																																					ancestorsId = ancestorsId.concat(category.ancestors);
	
																																					var ancestors = categories.filter(function (val) {
	
																																											return ancestorsId.some(function (k) {
																																																	return k === val._id;
																																											});
																																					});
	
																																					ancestors.forEach(function (val) {
	
																																											var ancestor = {};
																																											ancestor.name = val.name;
																																											ancestor.state = 'categories({subcategory: "' + val._id + '"})';
																																											scope.states.push(ancestor);
																																					});
																																					//console.log(ancestors);
																															}
	
																															/*
	                                      	 * @name    setupBreadCrumbs
	                               * @change  scope.states
	                               */
																															function setupBreadCrumbs() {
	
																																					var result = _findBreadCrumb($state.get(), scope.stateName);
	
																																					result = getBreadCrumbs(result);
																																					if (Array.isArray(result)) {
																																											scope.states = result;
	
																																											// if there are params
																																											if (!isEmpty($state.params)) {
	
																																																	var params = '';
																																																	for (var key in $state.params) {
																																																							params += key + ': null,';
																																																	}
																																																	params = params.substring(0, params.lastIndexOf(','));
																																																	scope.states[scope.states.length - 1].state += '({' + params + '})';
	
																																																	if ($state.params.hasOwnProperty("subcategory") && $state.params.subcategory !== undefined) {
	
																																																							CategoriesFactory.get().then(function (data) {
	
																																																													scope.states.concat(ancestorsCategories($state.params.subcategory, data));
																																																							}, function (date) {
	
																																																													alert("Categories error data");
																																																							});
																																																	}
																																											}
																																					}
																															}
	
																															$rootScope.$on('$viewContentLoading', function (event, viewConfig) {
	
																																					$rootScope.$$listeners.$viewContentLoading = [];
																																					scope.stateName = $state.current.name;
																																					setupBreadCrumbs();
																															});
	
																															$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
	
																																					//$rootScope.$$listeners.$stateChangeSuccess = [];
																																					scope.stateName = $state.current.name;
																																					setupBreadCrumbs();
																															});
																									}
																			};
													},
													controller: 'breadCrumbsCtrl as model'
							};
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<ul> <li ng-repeat=\"state in states\"><a ui-sref=\"{{state.state}}\">{{state.name}}</a></li> </ul>";
	ngModule.run(["$templateCache",function(c){c.put("_common/ms-bread-crumbs/template.html",v1)}]);
	module.exports=v1;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($state, $timeout, $rootScope, $scope) {
	
	    var vm = this;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	    app.directive('fileModel', ['$parse', __webpack_require__(34)]);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($parse) {
	
		return {
	
			restrict: 'A',
	
			link: function link(scope, element, attr) {
	
				var module = $parse(attr.fileModel);
				var modelSetter = module.assign;
	
				element.bind('change', function () {
	
					scope.$apply(function () {
	
						modelSetter(scope, element[0].files[0]);
					});
				});
			}
	
		};
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	    app.controller('dashboardCtrl', __webpack_require__(36));
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('dashboard', {
	            url: '/dashboard',
	            template: __webpack_require__(39),
	            data: {
	                label: "Home"
	            },
	            controller: 'dashboardCtrl as vm'
	        });
	    }]);
	
	    //app.directive('dashboard', require('./dashboard'));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(37);
	
	module.exports = function dashboardCtrl() {
	
	    // if(NODE_ENV == 'development')
	    //     console.log('Dashboard link');
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "h1 {\r\n    color: red;\r\n    transform: rotateY(30deg);\r\n}", ""]);
	
	// exports


/***/ },
/* 39 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<h1>Dashboard</h1> <p> Сохранение отображения в полноэкранном режиме API полноэкранного режима могут иногда быть довольно причудливыми. Разработчики браузеров не хотят, чтобы пользователь застрял на странице в полноэкранном режиме, потому придумали механизмы отключения полноэкранного режима при любой возможности. Это значит, что невозможно создать веб-сайт, у которого несколько страниц подряд отображались бы в полноэкранном режиме, потому что: программное изменение URL-адреса посредством window.location = \"http://example.com\" ведёт к отключению полноэкранного режима Если пользователь кликнет по внешней ссылке внутри страницы, полноэкранный режим отключится Изменение URL-адреса с помощью navigator.pushState API также приведёт к отключению полноэкранного режима Если вы хотите зафиксировать отображение в полноэкранном режиме, у вас есть два варианта: использовать механизмы установленного веб-приложения для перехода в полноэкранный режим Управляйте состоянием интерфейса и приложения используя фрагмент #. Используя #синтаксис для обновления url (window.location = \"#somestate\") и установив обработчик для события window.onhashchange можно использовать стек истории браузера для управления изменениями состояния приложения, позволить пользователю использовать кнопку «назад» на устройстве или предложить простую программную кнопку «назад» используя History API: window.history.go(-1) Дайте пользователю возможность выбирать когда переходить в полноэкранный режим Пользователя ничто так не раздражает как самовольные действия браузера. Когда пользователь заходит на ваш сайт, не пытайтесь вынудить его перейти в полноэкранный режим. Не перехватывайте первое событие касания для запуска requestFullScreen. Это раздражает. В определённый момент в будущем браузер может выдать пользователю запрос на разрешение перехода в полноэкранный режим. Сохранение отображения в полноэкранном режиме API полноэкранного режима могут иногда быть довольно причудливыми. Разработчики браузеров не хотят, чтобы пользователь застрял на странице в полноэкранном режиме, потому придумали механизмы отключения полноэкранного режима при любой возможности. Это значит, что невозможно создать веб-сайт, у которого несколько страниц подряд отображались бы в полноэкранном режиме, потому что: программное изменение URL-адреса посредством window.location = \"http://example.com\" ведёт к отключению полноэкранного режима Если пользователь кликнет по внешней ссылке внутри страницы, полноэкранный режим отключится Изменение URL-адреса с помощью navigator.pushState API также приведёт к отключению полноэкранного режима Если вы хотите зафиксировать отображение в полноэкранном режиме, у вас есть два варианта: использовать механизмы установленного веб-приложения для перехода в полноэкранный режим Управляйте состоянием интерфейса и приложения используя фрагмент #. Используя #синтаксис для обновления url (window.location = \"#somestate\") и установив обработчик для события window.onhashchange можно использовать стек истории браузера для управления изменениями состояния приложения, позволить пользователю использовать кнопку «назад» на устройстве или предложить простую программную кнопку «назад» используя History API: window.history.go(-1) Дайте пользователю возможность выбирать когда переходить в полноэкранный режим Пользователя ничто так не раздражает как самовольные действия браузера. Когда пользователь заходит на ваш сайт, не пытайтесь вынудить его перейти в полноэкранный режим. Не перехватывайте первое событие касания для запуска requestFullScreen. Это раздражает. В определённый момент в будущем браузер может выдать пользователю запрос на разрешение перехода в полноэкранный режим. Сохранение отображения в полноэкранном режиме API полноэкранного режима могут иногда быть довольно причудливыми. Разработчики браузеров не хотят, чтобы пользователь застрял на странице в полноэкранном режиме, потому придумали механизмы отключения полноэкранного режима при любой возможности. Это значит, что невозможно создать веб-сайт, у которого несколько страниц подряд отображались бы в полноэкранном режиме, потому что: программное изменение URL-адреса посредством window.location = \"http://example.com\" ведёт к отключению полноэкранного режима Если пользователь кликнет по внешней ссылке внутри страницы, полноэкранный режим отключится Изменение URL-адреса с помощью navigator.pushState API также приведёт к отключению полноэкранного режима Если вы хотите зафиксировать отображение в полноэкранном режиме, у вас есть два варианта: использовать механизмы установленного веб-приложения для перехода в полноэкранный режим Управляйте состоянием интерфейса и приложения используя фрагмент #. Используя #синтаксис для обновления url (window.location = \"#somestate\") и установив обработчик для события window.onhashchange можно использовать стек истории браузера для управления изменениями состояния приложения, позволить пользователю использовать кнопку «назад» на устройстве или предложить простую программную кнопку «назад» используя History API: </p><p> window.history.go(-1) Дайте пользователю возможность выбирать когда переходить в полноэкранный режим Пользователя ничто так не раздражает как самовольные действия браузера. Когда пользователь заходит на ваш сайт, не пытайтесь вынудить его перейти в полноэкранный режим. </p> <p> Не перехватывайте первое событие касания для запуска requestFullScreen. </p> <p> Это раздражает. В определённый момент в будущем браузер может выдать пользователю запрос на разрешение перехода в полноэкранный режим. </p>";
	ngModule.run(["$templateCache",function(c){c.put("src/dashboard/dashboard.html",v1)}]);
	module.exports=v1;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (app) {
	
	    __webpack_require__(41);
	
	    app.controller('usersCtrl', __webpack_require__(43));
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('users', {
	            url: '/users',
	            template: __webpack_require__(44),
	            data: {
	                label: "Clients",
	                parent: "dashboard"
	            },
	            controller: 'usersCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "p {\r\n\tcolor: green;\r\n}", ""]);
	
	// exports


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<p>BlaBla</p>";
	ngModule.run(["$templateCache",function(c){c.put("src/users/users.html",v1)}]);
	module.exports=v1;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (app) {
	
	    __webpack_require__(46);
	    __webpack_require__(48)(app);
	    __webpack_require__(54)(app);
	    __webpack_require__(60)(app);
	
	    app.controller('categoriesCtrl', ['$scope', '$timeout', '$state', '$stateParams', '$rootScope', 'CategoriesFactory', __webpack_require__(63)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('categories', {
	            url: '/categories?subcategory',
	            template: __webpack_require__(64),
	            data: {
	                label: "Категории",
	                parent: "dashboard"
	            },
	            controller: 'categoriesCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".category-paranga {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: -130px;\r\n\tleft: -370px;\r\n\tright: 0;\r\n\tbottom: -300px;\r\n\twidth: 173%;\r\n\tmargin: auto;\r\n\tmargin-top: -300px;\r\n\tmargin-right: -300px;\r\n\tmargin-bottom: -500px;\r\n\topacity: .3;\r\n\tz-index: 1;\r\n\tbackground-color: #000;\r\n}\r\n@media only screen and (max-width : 1300px) {\r\n\t.category-paranga {\r\n\t\tright: 150px;\r\n\t}\r\n}\r\n\r\n.collection.categories {\r\n\tdisplay: block;\r\n\tpadding: 0;\r\n}\r\n.collection.categories > .collection-item.avatar {\r\n\ttext-align: justify;\r\n\theight: 100px;\r\n}\r\n.collection.categories > .collection-item.avatar > .group-info-category {\r\n\tdisplay: inline-block;\r\n\tvertical-align: 20px;\r\n}\r\n.collection.categories > .collection-item.avatar > .group-info-category > * {\r\n\t\r\n}\r\n.collection.categories > .collection-item.avatar::after {\r\n\tcontent: '';\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 0;\r\n}\r\n.group-buttons {\r\n\tdisplay: inline-block;\r\n}\r\n.group-buttons a {\r\n\tdisplay: block;\r\n}\r\n.group-buttons a:first-child {\r\n\tmargin-bottom: 5px;\r\n}\r\n@media only screen and (max-width : 480px) {\r\n\t.collection.categories > .collection-item.avatar > .group-info-category {\r\n\t\twidth: 75%;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.collection.categories .group-buttons {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.group-buttons {\r\n\t\tmargin-top: -8px;\r\n\t}\r\n\t.group-buttons a {\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t\twidth: 45px;\r\n\t\theight: 45px;\r\n\t\tborder-radius: 50%;\r\n\t}\r\n\t.group-buttons a span{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.group-buttons a i {\r\n\t\tmargin: 0;\r\n\t\tmargin-top: 5px;\r\n\t\twidth: 100%;\r\n\t}\r\n\tms-bread-crumbs ul > li {\r\n\t\tdisplay: none;\r\n\t}\r\n\tms-bread-crumbs li:last-child {\r\n\t\tdisplay: inline-block;\r\n\t\tcursor: pointer;\r\n\t\tvertical-align: 8px;\r\n\t}\r\n\tms-bread-crumbs li:nth-last-child(2) {\r\n\t\tdisplay: inline-block;\r\n\t\tmargin-right: 20px;\r\n\t}\r\n\tms-bread-crumbs li:nth-last-child(2)::after {\r\n\t\tdisplay: none;\r\n\t}\r\n\tms-bread-crumbs li:nth-last-child(2) a:last-child {\r\n\t\tcontent: url( data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ0NC44MjIgNDQ0LjgyMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0LjgyMiA0NDQuODIyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQyMy4yNjUsMTc4LjI5OGMtNi4xOS03LjEzOS0xNC4yMjktMTAuNzA3LTI0LjEyNi0xMC43MDdIMTk4LjE0OEwyODEuOCw4My45MzdjNy4yMzQtNy4yMjksMTAuODQ4LTE1Ljg5MSwxMC44NDgtMjUuOTgxICAgYzAtMTAuMDg1LTMuNjEzLTE4Ljc0Ny0xMC44NDgtMjUuOTc5bC0yMS40MTMtMjEuMTI5QzI1My4xNTYsMy42MTksMjQ0LjU5LDAsMjM0LjY5MywwYy0xMC4wODksMC0xOC43NTIsMy42MTUtMjUuOTgxLDEwLjg0OCAgIEwyMi44NDgsMTk2LjQyOGMtNy4wNDMsNy40MjMtMTAuNTY0LDE2LjA4NC0xMC41NjQsMjUuOTgxYzAsMTAuMDg5LDMuNTIxLDE4LjY1NCwxMC41NjQsMjUuNjkzbDE4NS44NjQsMTg2LjE1MiAgIGM3LjQyMiw3LjA0MywxNi4wODMsMTAuNTY3LDI1Ljk4MSwxMC41NjdjMTAuMDg1LDAsMTguNjUtMy41MjQsMjUuNjkzLTEwLjU2N2wyMS40MTMtMjEuNjkzICAgYzcuMjM0LTYuODUxLDEwLjg0OC0xNS40MiwxMC44NDgtMjUuNjkzYzAtMTAuMjg0LTMuNjEzLTE4Ljg1My0xMC44NDgtMjUuN2wtODMuNjUyLTgzLjkzOWgyMDAuOTkxICAgYzkuODk2LDAsMTcuOTM2LTMuNTY5LDI0LjEyNi0xMC43MDdjNi4xODQtNy4xMzksOS4yNzQtMTUuNzQ5LDkuMjc0LTI1LjgzOHYtMzYuNTQ1ICAgQzQzMi41NDIsMTk0LjA1LDQyOS40NDgsMTg1LjQzNyw0MjMuMjY1LDE3OC4yOTh6IiBmaWxsPSIjMDM5YmU1Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg== );\r\n\t\tposition: relative;\r\n\t\tleft: 5px;\r\n\t\ttransform: scale(1.3);\r\n\t\tpadding: 6px;\r\n\t}\r\n}\r\n@media only screen and (max-width : 725px) and (min-width : 480px) {\r\n\t.collection.categories > .collection-item.avatar > .group-info-category {\r\n\t\twidth: 50%;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.group-buttons {\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t}\r\n\t.group-buttons a {\r\n\t\tmargin: 0;\r\n\t\tpadding: 0 5px;\r\n\t}\r\n\t.group-buttons a i {\r\n\t\tmargin-right: 5px;\r\n\t}\r\n}", ""]);
	
	// exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function createCategory(app) {
	
	    __webpack_require__(49);
	
	    app.factory('validatorCreate', ['$q', '$injector', __webpack_require__(51)]);
	
	    app.controller('createCtrl', ['$scope', '$rootScope', '$timeout', '$state', 'CategoriesFactory', '$stateParams', 'TypeProductsFactory', 'toastr', __webpack_require__(52)]);
	
	    app.config(['$httpProvider', '$stateProvider', function ($httpProvider, $stateProvider) {
	
	        $httpProvider.interceptors.push('validatorCreate');
	
	        $stateProvider.state('categories.create', {
	            url: '/create',
	            template: __webpack_require__(53),
	            controller: 'createCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal.bottom-sheet {     /* Модальное окно для создание ноаой категории */\r\n\r\n}\r\n.modal.bottom-sheet .modal-content > .row > .col.s4.offset-s2 {\r\n\tfloat: none;\r\n\tmargin: 0 auto;\r\n}\r\n.help-block {\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\ttop: -18px;\r\n\theight: 25px;\r\n}\r\n\r\n@media only screen and (max-width : 320px) {\r\n\t.modal.bottom-sheet {\r\n\t\tmax-height: 80% !important;\r\n\t}\r\n\t.modal.bottom-sheet .modal-content > .row > .col.s4.offset-s2 {\r\n\t\twidth: 97%;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width : 480px) and (min-width : 320px) {\r\n\t.modal.bottom-sheet {\r\n\t\tmax-height: 80% !important;\r\n\t}\r\n\t.modal.bottom-sheet .modal-content > .row > .col.s4.offset-s2 {\r\n\t\twidth: 80%;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width : 680px) and (min-width : 480px) {\r\n\t.modal.bottom-sheet {\r\n\t\tmax-height: 80% !important;\r\n\t}\r\n\t.modal.bottom-sheet .modal-content > .row > .col.s4.offset-s2 {\r\n\t\twidth: 70%;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width : 992px) and (min-width : 480px) {\r\n\t.modal.bottom-sheet .modal-content > .row > .col.s4.offset-s2 {\r\n\t\twidth: 55%;\r\n\t}\r\n}\r\n\r\n@media only screen and (min-width : 992px) {\r\n\t.modal.bottom-sheet .modal-content > .row > .col.s4.offset-s2{\r\n\t\twidth: 40%;\r\n\t}\r\n}\r\n\r\n/* Desktops and laptops ----------- */\r\n@media only screen  and (min-width : 1224px) {\r\n\t.modal.bottom-sheet {\r\n\t  max-height: 455px;\r\n\t}\r\n}", ""]);
	
	// exports


/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function validatorCreate($q, $injector) {
	
	    return {
	
	        'request': function request(config) {
	
	            var newCategory = config.data;
	
	            if (config.method !== "POST" || config.url !== "admin/categories") return config;
	
	            if (typeof newCategory === "object" && newCategory.hasOwnProperty("name") && newCategory.hasOwnProperty("semanticUrl") && newCategory.hasOwnProperty("logotype")) {
	                return config;
	            } else {
	                console.log("Поля не заполнены");
	                return;
	            }
	        }
	
	    };
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($scope, $rootScope, $timeout, $state, CategoriesFactory, $stateParams, TypeProductsFactory, toastr) {
	
		var vm = this;
		var modelHeightCreate;
	
		vm.regex = {};
		vm.regex.semanticUrl = '[a-z]+';
	
		vm.newCategory = {};
		vm.listProducts = [];
		TypeProductsFactory.getAll().then(function success(data) {
	
			vm.listProducts = data;
		}, function error() {});
	
		vm.closeModalCategory = closeModalCategory;
		vm.newCategorySubmit = newCategorySubmit;
	
		loadModal();
	
		document.querySelector('.paranga').onclick = function (e) {
			closeModal('categories');
		};
	
		/*window.addEventListener("orientationchange", function() {
	     setHeightParanga();
	 });*/
		window.addEventListener("resize", resizeCreateCategory);
	
		function resizeCreateCategory() {
			setHeightParanga();
		}
	
		function newCategorySubmit(e) {
			e.preventDefault();
	
			CategoriesFactory.submitAdd(vm.newCategory).then(function success(data) {
	
				//console.log(data);
				toastr.success('Категория успешно создана!');
				$scope.$emit('newCategoryRenderView', vm.newCategory);
				$state.go('^');
			}, function error() {});
		}
	
		/*
	  *@run setting css style height parange
	  */
		function setHeightParanga() {
	
			try {
				modelHeightCreate = document.querySelector('#modal-new-category').offsetHeight;
			} catch (e) {
				modelHeightCreate = CategoriesFactory.getModelHeightCreate();
			}
			if (modelHeightCreate) {
				CategoriesFactory.setModelHeightCreate(modelHeightCreate);
			}
			$('.paranga').css('bottom', modelHeightCreate + 'px');
			$('.lean-overlay').css('display', 'none');
		}
	
		/*
	  *@run modal window "Create Category"
	  */
		function loadModal() {
	
			$('select').select2();
			$('.input-field.select2 span.select2').css("width", "");
	
			$('#modal-new-category').openModal();
			$('#slide-out').css('z-index', '1');
			$('nav.top-nav.fixed').css('z-index', '1');
	
			// For set paranga
			$timeout(function () {
				$('.paranga').css('display', 'block');
			}, 300);
			//  Second query no found property offsetHeight
			setHeightParanga();
		}
	
		/*
	  *@close modal window "Create Category"
	  */
		function closeModal(state) {
	
			$('#modal-new-category').closeModal();
			$('#slide-out').css('z-index', '');
			$('nav.top-nav.fixed').css('z-index', '');
	
			// For set paranga
			$('.paranga').css('display', '');
			$('.paranga').css('bottom', '');
	
			window.removeEventListener("resize", resizeCreateCategory);
	
			$timeout(function () {
				$state.go(state);
			}, 200);
		}
	
		function closeModalCategory($event) {
	
			if ($event) $event.preventDefault();
			closeModal("categories");
		}
	
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
			if (toState.name === "categories.create") {
				loadModal();
			} else {
				closeModal(toState.name);
			}
		});
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
			//console.dir("success: "+toState.name);
		});
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1=" <div id=\"modal-new-category\" class=\"modal bottom-sheet\"> <div class=\"modal-content\"> <div class=\"row\"> <div class=\"col s4 offset-s2\"> <h4>Создать новую категорию</h4> <form action=\"#\" name=\"newCategoryForm\" ng-submit=\"vm.newCategorySubmit($event)\" novalidate> <div class=\"input-field\" ng-class=\"{ 'has-error' : newCategoryForm.name.$invalid && !newCategoryForm.name.$pristine }\"> <input id=\"name\" type=\"text\" class=\"validate\" name=\"name\" ng-model=\"vm.newCategory.name\" required>  <label for=\"name\">Название</label> <p ng-show=\"newCategoryForm.name.$invalid && !newCategoryForm.name.$pristine\" class=\"help-block\">Поле обязательно к заполнению</p> </div> <div class=\"input-field select2\"> <label>Materialize Select</label> <select ng-model=\"vm.newCategory.tableId\"> <option value=\"\" selected=\"selected\">Без привязки к таблице</option> <option ng-repeat=\"product in vm.listProducts\" value=\"{{product._id}}\">{{product.name}}</option> </select> </div> <div class=\"input-field\" ng-class=\"{ 'has-error' : newCategoryForm.semanticUrl.$invalid && !newCategoryForm.semanticUrl.$pristine }\"> <input id=\"semantic-url\" type=\"text\" name=\"semanticUrl\" ng-pattern=\"vm.regex.semanticUrl\" class=\"validate\" ng-model=\"vm.newCategory.semanticUrl\" required>  <label for=\"semantic-url\">ЧПУ URL</label> <p ng-show=\"newCategoryForm.semanticUrl.$invalid && !newCategoryForm.semanticUrl.$pristine\" class=\"help-block\">Обязательное поле. Только латинские буквы</p> </div> <div class=\"file-field input-field\"> <div class=\"btn\"> <span>Картинка</span> \n<input type=\"file\" file-model=\"vm.newCategory.logotype\" ng-model=\"vm.newCategory.logotype\" name=\"logotype\" required> </div> <div class=\"file-path-wrapper\"> <input class=\"file-path validate\" type=\"text\" placeholder=\"Загрузить изображение\"> </div> </div> <div class=\"input-field\"> <button type=\"submit\" class=\"waves-effect waves-light btn\" ng-disabled=\"newCategoryForm.$invalid\">Создать категорию</button> </div> </form> </div> </div> </div> <div class=\"modal-footer\"> <a ui-sref=\"#\" ng-click=\"vm.closeModalCategory($event)\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Back</a> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("categories/create/create.html",v1)}]);
	module.exports=v1;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function editeCategory(app) {
	
	    __webpack_require__(55);
	
	    app.factory('EditCategoryFactory', ['$http', '$q', __webpack_require__(57)]);
	    app.controller('editCategoryCtrl', ['$state', '$scope', '$rootScope', '$timeout', 'EditCategoryFactory', 'TypeProductsFactory', 'CategoriesFactory', 'toastr', __webpack_require__(58)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('categories.edit', {
	            url: '/edit/:id',
	            template: __webpack_require__(59),
	            params: {
	                category: null
	            },
	            controller: 'editCategoryCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function CategoriesFactory($http, $q) {
	
		function getListProducts() {
	
			return $http.post('admin' + '/type-products');
		}
	
		function submit(data) {
	
			var deferred = $q.defer(),
			    fd = new FormData();
	
			for (var key in data) {
				fd.append(key, data[key]);
			}
	
			$http({
				method: 'POST',
				url: 'admin/categories/edit/' + data._id,
				headers: { 'Content-Type': undefined },
				transformRequest: angular.identity,
				data: fd
			}).then(function success(response) {
	
				deferred.resolve(response.data);
			}, function error(response) {
	
				deferred.reject('Error edit category.');
			});
			return deferred.promise;
		}
	
		return {
			getListProducts: getListProducts,
			submit: submit
		};
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function editCategoryCtrl($state, $scope, $rootScope, $timeout, EditCategoryFactory, TypeProductsFactory, CategoriesFactory, toastr) {
	
		var vm = this,
		    modelHeightCreate;
	
		vm.category = {}; //$state.params.category;	// Обьект под новую категорию
		CategoriesFactory.getById($state.params.id).then(function success(data) {
	
			vm.category = data;
		}, function error(data) {
	
			console.log("Error get category by id");
		});
	
		vm.closeModalCategory = closeModalCategory;
	
		vm.editCategorySubmit = editCategorySubmit;
	
		vm.listProducts = [];
		TypeProductsFactory.getAll().then(function success(data) {
	
			vm.listProducts = data;
		}, function error() {});
	
		vm.regex = {};
		vm.regex.semanticUrl = '[a-z]+';
	
		loadModal();
		/*
	  *@run modal window "Create Category"
	  */
		function loadModal() {
	
			$('select').select2();
			$('.input-field.select2 span.select2').css("width", "");
	
			$('#modal-new-category').openModal();
			$('#slide-out').css('z-index', '1');
			$('nav.top-nav.fixed').css('z-index', '1');
	
			// For set paranga
			$timeout(function () {
				$('.paranga').css('display', 'block');
			}, 300);
			//  Second query no found property offsetHeight
			setHeightParanga();
		}
		/*
	  *@run setting css style height parange
	  */
		function setHeightParanga() {
	
			try {
				modelHeightCreate = document.querySelector('#modal-new-category').offsetHeight;
			} catch (e) {
				modelHeightCreate = CategoriesFactory.getModelHeightCreate();
			}
			if (modelHeightCreate) {
				CategoriesFactory.setModelHeightCreate(modelHeightCreate);
			}
			$('.paranga').css('bottom', modelHeightCreate + 'px');
		}
	
		document.querySelector('.paranga').onclick = function (e) {
			closeModal('categories');
		};
	
		/*
	  *@close modal window "Create Category"
	  */
		function closeModal(state) {
	
			$('#modal-new-category').closeModal();
			$('#slide-out').css('z-index', '');
			$('nav.top-nav.fixed').css('z-index', '');
	
			// For set paranga
			$('.paranga').css('display', '');
			$('.paranga').css('bottom', '');
	
			window.removeEventListener("resize", resizeEditCategory);
	
			$timeout(function () {
				$state.go(state);
			}, 200);
		}
	
		window.addEventListener("resize", resizeEditCategory);
	
		function resizeEditCategory() {
			setHeightParanga();
		}
	
		function closeModalCategory($event) {
	
			if ($event) $event.preventDefault();
			closeModal("categories");
		}
	
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
			if (toState.name === "categories.edit") {
				loadModal();
			} else {
				closeModal(toState.name);
			}
		});
	
		function editCategorySubmit(e) {
			e.preventDefault();
	
			EditCategoryFactory.submit(vm.category).then(function success(data) {
	
				toastr.success('Изменения применены!');
				$state.go('^');
			}, function error(data) {
	
				console.log(data);
			});
		};
	
		// Фильтруем semanticUrl исользование латинских букв и знака "-"
		/*$('input#semantic-url').keypress(function(event) {
	 	if(event.originalEvent.key === '-' || event.originalEvent.key === '_') { return; }
	 	else if(!(event.which >= 97 && event.which <= 122)) {
	 		event.preventDefault();
	 	}
	 });*/
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div id=\"modal-new-category\" class=\"modal bottom-sheet\"> <div class=\"modal-content\"> <div class=\"row\"> <div class=\"col s4 offset-s2\"> <h4>Редактировать категорию</h4> <form action=\"#\" name=\"editCategoryForm\" ng-submit=\"vm.editCategorySubmit($event)\" novalidate> <div class=\"input-field\" ng-class=\"{ 'has-error' : editCategoryForm.name.$invalid && !editCategoryForm.name.$pristine }\"> <input id=\"name\" type=\"text\" class=\"validate\" ng-model=\"vm.category.name\" name=\"name\" required>  <label class=\"active\" for=\"name\">Название</label> <p ng-show=\"editCategoryForm.name.$invalid && !editCategoryForm.name.$pristine\" class=\"help-block\">Поле обязательно к заполнению</p> </div> <div class=\"input-field select2\"> <label>Materialize Select</label> <select ng-model=\"vm.category.table_id\"> <option value=\"\" ng-selected=\"!vm.category.hasOwnProperty(table_id)\">Без привязки к таблице</option> <option ng-repeat=\"product in vm.listProducts\" ng-selected=\"{{product._id == vm.category.table_id}}\" value=\"{{product._id}}\"> {{product.name}} </option> </select> </div> <div class=\"input-field\" ng-class=\"{ 'has-error' : editCategoryForm.semanticUrl.$invalid && !editCategoryForm.semanticUrl.$pristine }\"> <input id=\"semantic-url\" type=\"text\" name=\"semanticUrl\" required class=\"validate\" ng-model=\"vm.category.semanticUrl\" ng-pattern=\"vm.regex.semanticUrl\">  <label class=\"active\" for=\"semantic-url\">ЧПУ URL</label> <p ng-show=\"editCategoryForm.semanticUrl.$invalid && !editCategoryForm.semanticUrl.$pristine\" class=\"help-block\">Обязательное поле. Только латинские буквы</p> </div> <div class=\"file-field input-field\"> <div class=\"btn\"> <span>Картинка</span> \n<input type=\"file\" file-model=\"vm.category.logotype\"> </div> <div class=\"file-path-wrapper\"> <input class=\"file-path validate\" type=\"text\" placeholder=\"Загрузить изображение\"> </div> </div> <div class=\"input-field\"> <button type=\"submit\" ng-disabled=\"editCategoryForm.$invalid\" class=\"waves-effect waves-light btn\">Сохранить изменения</button> </div> </form> </div> </div> </div> <div class=\"modal-footer\"> <a ui-sref=\"#\" ng-click=\"vm.closeModalCategory($event)\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Back</a> </div> </div> <div class=\"modal-overlay\"></div>";
	ngModule.run(["$templateCache",function(c){c.put("categories/editCategory/edit.html",v1)}]);
	module.exports=v1;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function editeCategory(app) {
	
	    app.controller('delCategoryCtrl', ['$rootScope', '$state', '$stateParams', 'CategoriesFactory', __webpack_require__(61)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('categories.delete', {
	            url: '/delete/:id',
	            template: __webpack_require__(62),
	            /*params: {
	                category: null
	            },*/
	            controller: 'delCategoryCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function delCategoryCtrl($rootScope, $state, $stateParams, CategoriesFactory) {
	
		var vm = this,
		    modalDelete = document.getElementById('modal-delete-category'),
		    header = document.getElementsByTagName('header'),
		    parentModalDelete = modalDelete.parentNode,
		    categoryId = $stateParams.id,
		    paranga = document.createElement('div');
	
		vm.category = CategoriesFactory.getById(categoryId);
	
		loadModal();
	
		function loadModal() {
	
			$(modalDelete).openModal();
			$(modalDelete).css('z-index', '1003');
	
			paranga.style.cssText = "position: fixed; \
				z-index: 1003; \
				opacity: 0.5; \
				left: 0; \
				top: 0; \
				right: 0; \
				bottom: 0; \
				background-color: #000; \
			  	";
			parentModalDelete.insertBefore(paranga, modalDelete);
	
			$(header).css('z-index', '0');
		}
	
		function closeModal(state) {
	
			// Clear arrays StateChange...
			$rootScope.$$listeners.$stateChangeStart = [];
			$rootScope.$$listeners.$stateChangeSuccess = [];
	
			$(modalDelete).closeModal();
			parentModalDelete.removeChild(paranga);
			$(header).css('z-index', '');
		}
	
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
			if (toState.name === "categories.delete") {
				//loadModal();
			} else {
					closeModal();
				}
		});
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div id=\"modal-delete-category\" class=\"modal\"> <div class=\"modal-content\"> <h4>Мусорка</h4> <p>Вы действительно хотите удалить категорию \"{{ vm.category.name }}\" со всеми вложенными под категориями?</p> </div> <div class=\"modal-footer\"> <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Удалить</a>\n<a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Отмена</a> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("categories/deleteCategory/delete.html",v1)}]);
	module.exports=v1;

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($scope, $timeout, $state, $stateParams, $rootScope, CategoriesFactory) {
	
		var categories; //= CategoriesFactory.get();
		CategoriesFactory.get().then(function (data) {
	
			categories = data;
			setCategories();
		}, function (data) {
	
			alert(data);
		});
	
		var vm = this,
		    screenIsPhone = false;
	
		vm.editCategory = editCategory;
	
		vm.deleteCategory = deleteCategory;
	
		vm.selectCategory = selectCategory();
		vm.selectedCategory = {};
	
		vm.createCategory = createCategory;
	
		var subcategory = $stateParams.subcategory;
	
		init();
	
		function init() {
	
			setHeightCategories();
			window.addEventListener("resize", setHeightCategories);
		}
	
		function close() {
	
			window.removeEventListener("resize", setHeightCategories);
		}
	
		function setHeightCategories() {
			//if phone
			if (document.documentElement.clientWidth > 480) {
				screenIsPhone = false;return;
			}
	
			screenIsPhone = true;
			// !!! Bad Code
			$timeout(function () {
	
				var collection = document.querySelector('.collection.categories'),
				    heightWindow = document.documentElement.clientHeight,
				    heightFooter = document.querySelector('.footer').offsetHeight,
				    topCollection = collection.getBoundingClientRect().top,
				    colletMargBot = parseInt(getComputedStyle(collection).marginBottom),
				    heightCollection;
	
				//console.dir( heightWindow + '	::   ' + topCollection + '   :   ' + heightFooter + '   :   ' + colletMargBot);
				heightCollection = heightWindow - topCollection - heightFooter - colletMargBot;
				collection.style.height = heightCollection + 'px';
				//console.log("Resize");
			});
		}
	
		function selectCategory() {
			var groupButtons = document.querySelector('.footer > .group-buttons'),
			    oldCategoryId = null;
	
			return function (category, option) {
				option = option || 'select';
	
				if (typeof category === 'object') vm.selectedCategory = category;
	
				if (!screenIsPhone) {
	
					if (category.hasOwnProperty("table_id")) return;
					$state.go("categories", { subcategory: category._id });
					console.log("Desctop");
					return;
				}
	
				if (option === 'select') if (oldCategoryId === category._id || oldCategoryId === null) {
					Array.prototype.forEach.call(groupButtons.children, function (val) {
	
						val.classList.toggle('disabled');
						if (!val.classList.contains('disabled')) oldCategoryId = category._id;else oldCategoryId = null;
					});
				} else {
					oldCategoryId = category._id;
				}
	
				if (option === 'open') {
					if (vm.selectedCategory.hasOwnProperty("table_id")) return;
					$state.go("categories", { subcategory: vm.selectedCategory._id });
				}
	
				if (option === 'edit') {
					$state.go('categories.edit', {
						id: vm.selectedCategory._id,
						category: vm.selectedCategory
					});
				}
	
				if (option === 'delete') {
					$state.go('categories.delete', {
						id: vm.selectedCategory._id
					});
				}
			};
		}
	
		function editCategory($event, category) {
	
			$event.stopPropagation();
			$event.preventDefault();
			$state.go('categories.edit', {
				id: category._id,
				category: category
			});
		}
	
		function deleteCategory($event, category) {
	
			$event.stopPropagation();
			$event.preventDefault();
			$state.go('categories.delete', {
				id: category._id
			});
		}
	
		function createCategory($event) {
	
			$event.preventDefault();
			$state.go('categories.create');
		}
	
		function setCategories() {
	
			if (!subcategory) {
	
				vm.categories = categories.filter(function (value) {
					return value.parent === null;
				});
			} else {
	
				vm.categories = categories.filter(function (value) {
					return value.parent === subcategory;
				});
			}
		}
	
		$scope.$on('newCategoryRenderView', function (event, newCategory) {
	
			//console.log("Bingoo!!");
			//console.log(newCategory);
			vm.categories.push(newCategory);
		});
	
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {});
	
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
			if (toState.name !== "categories") {
				close();
			}
		});
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"header\"> <h1>Categories</h1> <div class=\"fixed-action-btn create-new-category\"> <a ui-sref=\"#\" ng-click=\"vm.createCategory($event)\" class=\"btn-floating btn-large waves-effect waves-light red\"> <i class=\"material-icons\">add</i> </a> </div> </div> <ul class=\"collection categories\"> <li class=\"waves-effect collection-item avatar\" ng-repeat=\"category in vm.categories track by category._id\" ng-click=\"vm.selectCategory(category)\"> <div class=\"group-info-category\"> <img ng-src=\"/dist/images/{{ category.logotype }}\" alt=\"\" class=\"circle\">\n<span class=\"title\">{{ category.name }}</span> <p>Id: {{ category._id }}</p> </div> <div class=\"group-buttons\"> <a class=\"waves-effect waves-light btn\" ng-click=\"vm.editCategory($event, category)\"> <i class=\"material-icons left\">mode_edit</i><span>Редактировать</span> </a>\n<a class=\"waves-effect waves-light btn\" ng-click=\"vm.deleteCategory($event, category)\"> <i class=\"material-icons left\">delete</i><span>Удалить</span> </a> </div> </li> </ul> <ui-view></ui-view> <div class=\"footer\"> <div class=\"group-buttons\"> <a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectCategory(category, 'edit')\"> <i class=\"material-icons left\">mode_edit</i><span>Редактировать</span> </a>\n<a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectCategory(category, 'open')\"> <i class=\"material-icons left\">open_in_new</i><span>Открыть</span> </a>\n<a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectCategory(category, 'delete')\"> <i class=\"material-icons left\">delete</i><span>Удалить</span> </a> </div> </div> <div class=\"category-paranga\"></div>";
	ngModule.run(["$templateCache",function(c){c.put("src/categories/categories.html",v1)}]);
	module.exports=v1;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (app) {
	
	    __webpack_require__(66);
	    __webpack_require__(68)(app);
	    __webpack_require__(73)(app);
	    __webpack_require__(79)(app);
	
	    app.factory('TypeProductsFactory', ['$http', '$q', __webpack_require__(84)]);
	
	    app.controller('typeProductsCtrl', ['$rootScope', '$timeout', '$scope', '$state', 'TypeProductsFactory', __webpack_require__(85)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('type-products', {
	            url: '/type-products',
	            template: __webpack_require__(86),
	            data: {
	                label: "Виды товаров",
	                parent: "dashboard"
	            },
	            controller: 'typeProductsCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".footer {\r\n\tdisplay: none;\r\n\theight: 60px;\r\n\twidth: 100px;\r\n}\r\n.collection.type-products {\r\n\tdisplay: block;\r\n\tpadding: 0;\r\n}\r\n.collection.type-products > .collection-item.avatar {\r\n\ttext-align: justify;\r\n\theight: 100px;\r\n}\r\n.collection.type-products > .collection-item.avatar > .group-info-type-products {\r\n\tdisplay: inline-block;\r\n\tvertical-align: 20px;\r\n}\r\n.collection.type-products > .collection-item.avatar > .group-info-type-products > * {\r\n\t\r\n}\r\n.collection.type-products > .collection-item.avatar::after {\r\n\tcontent: '';\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 0;\r\n}\r\n.group-buttons {\r\n\tdisplay: inline-block;\r\n}\r\n.group-buttons a {\r\n\tdisplay: block;\r\n\tposition: static;\r\n}\r\n.group-buttons a:first-child {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n@media only screen and (max-width : 480px) {\r\n\t.collection.type-products {\r\n\t\theight: 420px;\r\n\t\toverflow-y: auto;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\t.collection.type-products .group-buttons {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.footer {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.footer > .group-buttons {\r\n\t\ttext-align: justify;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.footer > .group-buttons:after {\r\n\t\tcontent: '';\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 100%;\r\n\t\theight: 0;\r\n\t}\r\n\t.footer > .group-buttons > a {\r\n\t\tposition: relative;\r\n\t\ttop: 10px;\r\n\t\tdisplay: inline-block;\r\n\t\tvertical-align: middle;\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t}\r\n}\r\n@media only screen and (max-width : 510px) and (min-width : 480px) {\r\n\t.collection.type-products .group-info-type-products {\r\n\t\twidth: 50%;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.collection.type-products .group-info-type-products p {\r\n\t\twhite-space: nowrap;\r\n\t}\r\n}", ""]);
	
	// exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function createTypeProduct(app) {
	
	    __webpack_require__(69);
	
	    app.controller('createTypeProductCtrl', ['$scope', '$timeout', '$state', __webpack_require__(71)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('type-products.create', {
	            url: '/create',
	            template: __webpack_require__(72),
	            controller: 'createTypeProductCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".side-nav-right > .container {\r\n  left: 0;\r\n  margin: 0;\r\n  width: 96%;\r\n  max-width: 96%;\r\n}\r\n.side-nav-right .new-field label.browser-default {\r\n  display: none;\r\n}\r\n\r\n\r\n@keyframes widthResize {\r\n    from { left: 100%; right: -100%; }\r\n    to { left: 0; right: 0; }\r\n}\r\n.side-nav-right {         /*   Всплывающая форма для создание/редактирование таблицы товара   */\r\n  position: absolute;\r\n  top: 55px;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin-left: 0;\r\n  z-index: 900;\r\n  overflow-y: auto;\r\n  padding-bottom: 15px;\r\n  background-color: #fff;\r\n\r\n  /*animation: widthResize .3s linear 1;*/\r\n  animation-name: widthResize;\r\n  animation-duration: .3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\r\n  animation-fill-mode: forwards;\r\n}\r\n@keyframes widthResizeClose {\r\n    from { left: 0; right: 0; }\r\n    to { left: 100%; right: -100%; }\r\n}\r\n.side-nav-right.close-side-nav-right {\r\n  animation-name: widthResizeClose;\r\n  animation-duration: .3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\r\n  animation-fill-mode: forwards;\r\n}\r\n@media only screen and (max-width : 992px) {\r\n      .side-nav-right {\r\n        margin-left: 0;\r\n      }\r\n    }\r\n@keyframes rotateButtonAdd {\r\n    from { transform: rotate(0deg); }\r\n    to { transform: rotate(45deg); }\r\n}\r\n.side-nav-right > .fixed-action-btn {   /*  Кнопка закрыть для формы создание/редактирование таблицы товара  */\r\n  animation-name: rotateButtonAdd;\r\n  animation-duration: .3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\r\n  animation-fill-mode: forwards;\r\n\r\n  padding: 0;\r\n}\r\n@keyframes rotateButtonAddClose {\r\n    from { transform: rotate(45deg); }\r\n    to { transform: rotate(0deg); }\r\n}\r\n.side-nav-right > .fixed-action-btn.close {\r\n  animation-name: rotateButtonAddClose;\r\n  animation-duration: .28s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n\r\n.header.type-product {\r\n  \r\n}\r\n.header.type-product > h1 {\r\n  font-size: 35px;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  top: -13px;\r\n  left: 13px;\r\n}\r\n.header.type-product > .fixed-action-btn {\r\n  \r\n}\r\n@media only screen and (max-width : 480px) {\r\n  .side-nav-right {\r\n    top: 29px;\r\n  }\r\n  .header.type-product {\r\n    text-align: justify;\r\n    height: 80px;\r\n  }\r\n  .header.type-product:after {\r\n    display: inline-block;\r\n    content: '';\r\n    height: 0;\r\n    width: 100%;\r\n  }\r\n  .header.type-product > h1 {\r\n    display: inline-block;\r\n    position: static;\r\n    margin: 0;\r\n    margin-left: 10px;\r\n    font-size: 25px;\r\n  }\r\n  .header.type-product > .fixed-action-btn {\r\n    position: static;\r\n    display: inline-block;\r\n    top: 40px;\r\n    bottom: 0;\r\n  }\r\n  .header.type-product > .fixed-action-btn a {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n  .header.type-product > .fixed-action-btn a i {\r\n    line-height: 50px;\r\n  }\r\n}", ""]);
	
	// exports


/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function createCtrl($scope, $timeout, $state) {
	
		var vm = this;
	
		vm.newTypeProduct = {};
		vm.newTypeProduct.fields = [];
		vm.field = {};
	
		vm.units = []; //  Ед. измерение для числовых значений
	
		vm.listsValue = []; //  Список подгатовленых значений для выборки
	
		vm.closeSideNavRight = closeSideNavRight;
	
		vm.createField = createField;
	
		vm.removeField = removeField;
	
		vm.submitNewTypeProduct = submitNewTypeProduct;
	
		/*msCreateTypeProductsFactory.getUnits()
	 	.then(function successCallback(response) {
	 
	 			vm.units = response.data.units;
	 			vm.listsValue = response.data.listsValue;
	 
	 		}, function errorCallback(response) {
	 
	 	});*/
	
		function submitNewTypeProduct($event) {
	
			$event.preventDefault();
	
			/*msCreateTypeProductsFactory.submitNewTypeProduct( vm.newTypeProduct )
	  	.then(function successCallback(response) {
	  					if(response.data.status === true) {
	  						closeSideNavRight(null);
	  				$scope.$emit('newTypeProduct', vm.newTypeProduct);
	  			}
	  				}, function errorCallback(response) {
	  			});*/
		}
	
		function removeField($event, $index) {
	
			$event.stopPropagation();
			$event.preventDefault();
	
			vm.newTypeProduct.fields.splice($index, 1);
		}
	
		function closeSideNavRight($event) {
	
			if ($event) $event.preventDefault();
	
			document.querySelector('.side-nav-right').classList.add('close-side-nav-right');
			document.querySelector('.side-nav-right .header > .fixed-action-btn').classList.add('close');
	
			$timeout(function () {
				$state.go('type-products');
			}, 300);
		}
	
		function createField() {
	
			if (!vm.field.name || !vm.field.type) return;
	
			if (vm.field.type === 'integer' && (!vm.field.unit || !vm.field.min || !vm.field.max)) return;
	
			if (vm.field.type === 'list' && !vm.field.listValue) return;
	
			vm.newTypeProduct.fields.push(vm.field);
	
			vm.field = {};
		}
	
		$(document).ready(function () {
	
			$('select').material_select();
	
			$('.collapsible').collapsible({ accordion: false });
		});
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"side-nav-right\">\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"header type-product\">\r\n\t\t\t\t<h1>Создать таблицу</h1>\r\n\t\t\t\t<div class=\"fixed-action-btn\">\r\n\t\t\t\t\t<a ui-sref=\"#\"\r\n\t\t\t\t\tng-click=\"vm.closeSideNavRight($event)\"\r\n\t\t\t\t\tclass=\"btn-floating btn-large waves-effect waves-light red\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">add</i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<form class=\"col s12 m12\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"input-field col s10 m6  block\">\r\n\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"validate\"\r\n\t\t\t\t\t\tng-model=\"vm.newTypeProduct.name\">\r\n\t\t\t\t\t\t<label for=\"name\">Название таблицы</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input-field col s10 m6  block\">\r\n\t\t\t\t\t\t<input id=\"semanticUrl\" type=\"text\" class=\"validate\"\r\n\t\t\t\t\t\tng-model=\"vm.newTypeProduct.semanticUrl\">\r\n\t\t\t\t\t\t<label for=\"semanticUrl\">ЧПУ URL</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"fields\">\r\n\t\t\t\t\t\t<p class=\"block\">Поля:</p>\r\n\t\t\t\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t\t\t\t<ul class=\"collapsible\" data-collapsible=\"accordion\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-header\">Название</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-body\"><p>Задано по умолчанию.</p></div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-header\">Описание</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-body\"><p>Задано по умолчанию.</p></div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-header\">Цена</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-body\"><p>Задано по умолчанию.</p></div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t<li ng-repeat=\"field in vm.newTypeProduct.fields track by $index\"\r\n\t\t\t\t\t\t\t\tclass=\"created-field\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-header\">\r\n\t\t\t\t\t\t\t\t\t\t{{field.name}}<a ng-click=\"vm.removeField($event, $index)\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"waves-effect waves-light btn\">Удалить</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field col s12 m12  block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"validate\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tng-model=\"field.name\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"active\">Название поля:</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field col s12 m12  block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"browser-default\">Тип поля:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<select ng-model=\"field.type.name\" class=\"browser-default  select-type\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>Выбирете тип поля</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"string\">Строка</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"integer\">Число</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"list\">Список</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"type-integer\" ng-show=\"field.type.name==='integer'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-field col s12 m12 block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"browser-default\">Единицы измерения:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select ng-model=\"field.type.unit\" class=\"browser-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>Выбирете ед. измерения</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option ng-repeat=\"unit in vm.units track by $index\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{unit.id}}\">{{unit.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-field col s10 m6  block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"validate\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tng-model=\"field.type.min\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"active\">Минимум</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-field col s10 m6  block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"validate\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tng-model=\"field.type.max\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"active\">Максимум</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"type-list\" ng-show=\"field.type.name==='list'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-field col s12 m12  block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"browser-default\">Список:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select ng-model=\"field.type.listValue\" class=\"browser-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>Выбирете список</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option ng-repeat=\"list in vm.listsValue track by $index\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{list.id}}\">{{list.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t<div class=\"new-field  z-depth-5\"\">\r\n\t\t\t\t\t\t\t\t<p>Создать новое поле</p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-field col s12 m12  block\">\r\n\t\t\t\t\t\t\t\t\t<input id=\"name-field\" type=\"text\" class=\"validate\"\r\n\t\t\t\t\t\t\t\t\tng-model=\"vm.field.name\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"name\">Название поля</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input-field col s12 m12  block\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"browser-default\">Тип поля:</label>\r\n\t\t\t\t\t\t\t\t\t<select ng-model=\"vm.field.type.name\" class=\"browser-default  select-type\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>Выбирете тип поля</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"string\">Строка</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"integer\">Число</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"list\">Список</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"type-integer\" ng-show=\"vm.field.type.name==='integer'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input-field col s12 m12  block\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"browser-default\">Единицы измерения:</label>\r\n\t\t\t\t\t\t\t\t\t\t<select ng-model=\"vm.field.type.unit\" class=\"browser-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>Выбирете ед. измерения</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option ng-repeat=\"unit in vm.units track by $index\"\r\n\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{unit.id}}\">{{unit.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input-field col s10 m6  block\">\r\n\t\t\t\t\t\t\t\t\t\t<input id=\"min\" type=\"number\" class=\"validate\"\r\n\t\t\t\t\t\t\t\t\t\tng-model=\"vm.field.type.min\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"min\">Минимум</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input-field col s10 m6  block\">\r\n\t\t\t\t\t\t\t\t\t\t<input id=\"max\" type=\"number\" class=\"validate\"\r\n\t\t\t\t\t\t\t\t\t\tng-model=\"vm.field.type.max\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"max\">Максимум</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"type-list\" ng-show=\"vm.field.type.name==='list'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input-field col s12 m12  block\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"browser-default\">Список:</label>\r\n\t\t\t\t\t\t\t\t\t\t<select ng-model=\"vm.field.type.listValue\" class=\"browser-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>Выбирете список</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option ng-repeat=\"list in vm.listsValue track by $index\"\r\n\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{list.id}}\">{{list.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a ng-click=\"vm.createField($event)\"\r\n\t\t\t\t\t\t\t\tclass=\"waves-effect waves-light btn\">Создать поле</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<a ng-click=\"vm.submitNewTypeProduct($event)\"\r\n\t\t\t\t\t\t\t\tclass=\"waves-effect waves-light btn\">Создать новую таблицу</a>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>";
	ngModule.run(["$templateCache",function(c){c.put("type_products/createTypeProduct/createTypeProduct.html",v1)}]);
	module.exports=v1;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function editTypeProduct(app) {
	
	    __webpack_require__(74);
	
	    app.factory('EditTypeProductsFactory', ['$http', '$rootScope', __webpack_require__(76)]);
	
	    app.controller('editTypeProductCtrl', ['$scope', '$timeout', '$state', 'EditTypeProductsFactory', __webpack_require__(77)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('type-products.edit', {
	            url: '/edit/:id',
	            params: {
	                typeProduct: null,
	                $index: null
	            },
	            template: __webpack_require__(78),
	            controller: 'editTypeProductCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function TypeProductsFactory($http, $rootScope) {
	
		function getTypeProduct(id) {
	
			return $http.get($rootScope.rootUrl + $rootScope.productsList + '/' + id);
		}
	
		function submitEditTypeProduct(data) {
	
			var fd = JSON.stringify(data);
	
			return $http.post($rootScope.rootUrl + $rootScope.productsList + '/edit', fd);
		}
	
		return {
			getTypeProduct: getTypeProduct,
			submitEditTypeProduct: submitEditTypeProduct
		};
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function editCtrl($scope, $timeout, $state, EditTypeProductsFactory) {
	
		var vm = this;
	
		vm.id = $state.params.id;
	
		vm.$index = $state.params.$index;
	
		vm.typeProduct = $state.params.typeProduct;
	
		vm.closeSideNavRight = closeSideNavRight;
	
		vm.submitEditTypeProduct = submitEditTypeProduct;
	
		if (!vm.typeProduct) {
			// Если информация о таблице не подгрузилось то возьмем с сервера
	
			EditTypeProductsFactory.getTypeProduct(vm.id).then(function successCallback(response) {
	
				vm.typeProduct = response.data.typeProduct;
			}, function errorCallback(response) {});
		}
	
		function closeSideNavRight($event) {
	
			if ($event) $event.preventDefault();
	
			document.querySelector('.side-nav-right').classList.add('close-side-nav-right');
			document.querySelector('.side-nav-right .header > .fixed-action-btn').classList.add('close');
	
			$timeout(function () {
				$state.go('type-products');
			}, 300);
		}
	
		function submitEditTypeProduct($event) {
	
			$event.preventDefault();
	
			EditTypeProductsFactory.submitEditTypeProduct(vm.typeProduct).then(function successCallback(response) {
	
				if (response.data.status === true) {
	
					closeSideNavRight(null);
					$scope.$emit('editTypeProduct', vm.typeProduct, vm.$index);
				}
			}, function errorCallback(response) {});
		}
	
		$(document).ready(function () {
	
			$('select').material_select();
	
			$('.collapsible').collapsible({ accordion: false });
		});
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"side-nav-right\"> <div class=\"container\"> <div class=\"row\"> <div class=\"header type-product\"> <h1>Редактировать</h1> <div class=\"fixed-action-btn\"> <a ui-sref=\"#\" ng-click=\"vm.closeSideNavRight($event)\" class=\"btn-floating btn-large waves-effect waves-light red\"> <i class=\"material-icons\">add</i> </a> </div> </div> <form class=\"col s12 m12\"> <div class=\"row\"> <div class=\"input-field col s10 m6 block\"> <input id=\"name\" type=\"text\" class=\"validate\" ng-model=\"vm.typeProduct.name\"> <label class=\"active\" for=\"name\">Название таблицы</label> </div> <div class=\"input-field col s10 m6 block\"> <input id=\"semanticUrl\" type=\"text\" class=\"validate\" ng-model=\"vm.typeProduct.semanticUrl\"> <label class=\"active\" for=\"semanticUrl\">ЧПУ URL</label> </div> <div class=\"fields\"> <p class=\"block\">Поля:</p> <div class=\"col s12 m8\"> <ul class=\"collapsible\" data-collapsible=\"accordion\"> <li> <div class=\"collapsible-header\">Название</div> <div class=\"collapsible-body\"><p>Задано по умолчанию.</p></div> </li> <li> <div class=\"collapsible-header\">Описание</div> <div class=\"collapsible-body\"><p>Задано по умолчанию.</p></div> </li> <li> <div class=\"collapsible-header\">Цена</div> <div class=\"collapsible-body\"><p>Задано по умолчанию.</p></div> </li> <li ng-repeat=\"field in vm.typeProduct.fields track by $index\" class=\"created-field\"> <div class=\"collapsible-header\">{{field.name}}</div> <div class=\"collapsible-body\"> <div class=\"input-field col s12 block\"> <input type=\"text\" class=\"validate\" ng-model=\"field.name\"> <label class=\"active\">Название поля:</label> </div> </div> </li> </ul> </div> </div> </div> <a ng-click=\"vm.submitEditTypeProduct($event)\" class=\"waves-effect waves-light btn\">Редактировать таблицу </a> </form> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("type_products/editTypeProduct/editTypeProduct.html",v1)}]);
	module.exports=v1;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function editTypeProduct(app) {
	
	    __webpack_require__(80);
	
	    app.controller('delTypeProductCtrl', ['$rootScope', '$state', '$stateParams', 'TypeProductsFactory', __webpack_require__(82)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('type-products.delete', {
	            url: '/delete/:id',
	            template: __webpack_require__(83),
	            controller: 'delTypeProductCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function delTypeProductCtrl($rootScope, $state, $stateParams, TypeProductsFactory) {
	
		var vm = this,
		    modalDelete = document.getElementById('modal-delete-type-product'),
		    header = document.getElementsByTagName('header'),
		    parentModalDelete = modalDelete.parentNode,
		    typeProductId = $stateParams.id,
		    paranga = document.createElement('div');
	
		vm.typeProduct = TypeProductsFactory.getById(typeProductId);
	
		loadModal();
	
		function loadModal() {
	
			$(modalDelete).openModal();
			$(modalDelete).css('z-index', '1003');
	
			paranga.style.cssText = "position: fixed; \
				z-index: 1003; \
				opacity: 0.5; \
				left: 0; \
				top: 0; \
				right: 0; \
				bottom: 0; \
				background-color: #000; \
			  	";
			parentModalDelete.insertBefore(paranga, modalDelete);
	
			$(header).css('z-index', '0');
		}
	
		function closeModal(state) {
	
			// Clear arrays StateChange...
			$rootScope.$$listeners.$stateChangeStart = [];
			$rootScope.$$listeners.$stateChangeSuccess = [];
	
			$(modalDelete).closeModal();
			parentModalDelete.removeChild(paranga);
			$(header).css('z-index', '');
		}
	
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
			if (toState.name !== "type-products.delete") {
				closeModal();
			}
		});
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div id=\"modal-delete-type-product\" class=\"modal\"> <div class=\"modal-content\"> <h4>Мусорка</h4> <p>Вы действительно хотите удалить данную таблицу \"{{ vm.typeProduct.name }}\" со всеми ее товарами</p> </div> <div class=\"modal-footer\"> <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Удалить</a>\n<a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Отмена</a> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("type_products/delTypeProduct/delTypeProduct.html",v1)}]);
	module.exports=v1;

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function TypeProductsFactory($http, $q) {
	
		var typeProducts = null;
		var typeProduct = null;
	
		function getAll() {
			var deferred = $q.defer();
	
			if (typeProducts) {
	
				deferred.resolve(typeProducts);
				return deferred.promise;
			}
	
			$http.get('admin/type-products').then(function success(response) {
	
				if (typeProducts === null) typeProducts = response.data;
				deferred.resolve(response.data);
			}, function error(response) {
	
				deferred.reject('Greeting is not allowed.');
			});
	
			return deferred.promise;
		}
	
		function getOneTypeProduct(nameField, valueField) {
	
			function getTypeProduct() {
	
				typeProduct = typeProducts.find(function (val) {
					return val[nameField] === valueField;
				});
	
				if (typeProduct !== null) {
					deferred.resolve(typeProduct);
				} else {
					deferred.reject('typeProduct not found.');
				}
			}
	
			var deferred = $q.defer();
	
			if (typeProduct !== null && typeof typeProduct === "object" && typeProduct.hasOwnProperty(nameField) && typeProduct[nameField] === valueField) {
	
				deferred.resolve(typeProduct);
			} else if (typeProducts) {
	
				getTypeProduct();
			} else {
	
				getAll().then(function (data) {
	
					getTypeProduct();
				}, function (data) {
	
					alert("Error " + data);
				});
			}
			return deferred.promise;
		}
	
		function getById(id) {
	
			function catchTypeProductById(val) {
				return val._id === id;
			}
	
			return typeProducts.find(catchTypeProductById);
		}
	
		return {
			getAll: getAll,
	
			getOneTypeProduct: getOneTypeProduct,
	
			getById: getById
		};
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function typeProductsCtrl($rootScope, $timeout, $scope, $state, TypeProductsFactory) {
	
		var vm = this,
		    screenIsPhone = false;
	
		vm.typeProducts = [];
	
		vm.editTypeProduct = editTypeProduct;
	
		vm.delTypeProduct = delTypeProduct;
	
		vm.selectCategory = selectCategory();
		vm.selectedProduct = {};
	
		TypeProductsFactory.getAll().then(function (data) {
	
			vm.typeProducts = data;
		}, function (data) {
	
			alert("Error " + data);
		});
	
		init();
	
		function init() {
	
			setHeightTypeProducts();
			window.addEventListener("resize", setHeightTypeProducts);
		}
	
		function setHeightTypeProducts() {
			//if phone
			if (document.documentElement.clientWidth > 480) {
				screenIsPhone = false;return;
			}
	
			screenIsPhone = true;
			// !!! Bad Code
			$timeout(function () {
	
				var collection = document.querySelector('.collection.type-products'),
				    heightWindow = document.documentElement.clientHeight,
				    heightFooter = document.querySelector('.footer').offsetHeight,
				    topCollection = collection.getBoundingClientRect().top,
				    colletMargBot = parseInt(getComputedStyle(collection).marginBottom),
				    heightCollection;
	
				//console.dir( heightWindow + '	::   ' + topCollection + '   :   ' + heightFooter + '   :   ' + colletMargBot);
				heightCollection = heightWindow - topCollection - heightFooter - colletMargBot;
				collection.style.height = heightCollection + 'px';
				//console.log("Resize");
			});
		}
	
		function close() {
	
			window.removeEventListener("resize", setHeightTypeProducts);
		}
	
		function editTypeProduct($event, typeProduct, $index) {
	
			$event.stopPropagation();
			$event.preventDefault();
	
			$state.go('type-products.edit', {
				id: typeProduct._id,
				typeProduct: typeProduct,
				$index: $index
			});
		}
	
		function delTypeProduct(e, typeProduct) {
	
			e.stopPropagation();
			e.preventDefault();
	
			$state.go('type-products.delete', {
				id: typeProduct._id
			});
		}
	
		function selectCategory() {
			var groupButtons = document.querySelector('.footer > .group-buttons'),
			    oldCategoryId = null;
			return function (category, option) {
				//option('select','edit','open')
				option = option || 'select';
				if (typeof category === 'object') vm.selectedProduct = category;
	
				if (!screenIsPhone) {
	
					$state.go("products", { semanticUrl: category.semanticUrl });
					//console.log("Desctop");
					return;
				}
	
				if (option === 'select') if (oldCategoryId === category._id || oldCategoryId === null) {
					Array.prototype.forEach.call(groupButtons.children, function (val) {
						//console.dir(val);
						val.classList.toggle('disabled');
						if (!val.classList.contains('disabled')) oldCategoryId = category._id;else oldCategoryId = null;
					});
				} else {
					oldCategoryId = category._id;
				}
	
				if (option === 'open') {
	
					$state.go("products", { semanticUrl: vm.selectedProduct.semanticUrl });
				}
	
				if (option === 'edit') {
					$state.go('type-products.edit', {
						id: vm.selectedProduct._id,
						typeProduct: vm.selectedProduct,
						$index: vm.selectedProduct._id
					});
				}
	
				if (option === 'delete') {
					$state.go('type-products.delete', {
						id: vm.selectedProduct._id
					});
				}
			};
		}
	
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
			if (toState.name !== "type-products") {
				close();
			}
		});
	
		/*$scope.$on('newTypeProduct', function (event, data) {
	 
	 	vm.typeProducts.push(data);
	 });*/
	
		/*$scope.$on('editTypeProduct', function (event, data, $index) {
	 
	 	// Если значение не изменяется из за перезагрузки
	 	if( !$index ) {
	 
	 		for(var i = 0, length = vm.typeProducts.length; i < length; i++) {
	 
	 			if( vm.typeProducts[i]._id === data._id ) {
	 
	 				return vm.typeProducts[i] = data;
	 			}
	 		}
	 	}
	 
	 });*/
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"header\"> <h1>Виды товаров</h1> <div class=\"fixed-action-btn create-new-category\"> <a ui-sref=\"type-products.create\" class=\"btn-floating btn-large waves-effect waves-light red\"> <i class=\"material-icons\">add</i> </a> </div> </div> <ul class=\"collection type-products\"> <li class=\"waves-effect collection-item avatar\" ng-repeat=\"typeProduct in vm.typeProducts track by typeProduct._id\" ng-click=\"vm.selectCategory(typeProduct)\"> <div class=\"group-info-type-products\"> <img ng-src=\"/images/{{ typeProduct.logotype }}\" alt=\"\" class=\"circle\">\n<span class=\"title\">{{ typeProduct.name }}</span> <p>Id: {{ typeProduct._id }}</p> </div> <div class=\"group-buttons\"> <a class=\"waves-effect waves-light btn\" ng-click=\"vm.editTypeProduct($event, typeProduct, typeProduct._id)\"> <i class=\"material-icons left\">mode_edit</i><span>Редактировать</span> </a>\n<a class=\"waves-effect waves-light btn\" ng-click=\"vm.delTypeProduct($event, typeProduct)\"> <i class=\"material-icons left\">delete</i><span>Удалить</span> </a> </div> </li> </ul> <ui-view></ui-view> <div class=\"footer\"> <div class=\"group-buttons\"> <a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectCategory(typeProduct, 'edit')\"> <i class=\"material-icons left\">mode_edit</i><span>Редактировать</span> </a>\n<a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectCategory(typeProduct, 'open')\"> <i class=\"material-icons left\">open_in_new</i><span>Показать таблицу</span> </a>\n<a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectCategory(typeProduct, 'delete')\"> <i class=\"material-icons left\">delete</i><span>Удалить</span> </a> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("src/type_products/typeProducts.html",v1)}]);
	module.exports=v1;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (app) {
	
	    __webpack_require__(88);
	    __webpack_require__(90)(app);
	    __webpack_require__(97)(app);
	    __webpack_require__(100)(app);
	
	    app.factory('ProductsFactory', ['$http', '$q', __webpack_require__(103)]);
	
	    app.controller('productsCtrl', ['$timeout', '$rootScope', '$scope', '$state', '$stateParams', 'ProductsFactory', 'TypeProductsFactory', 'UnitsFactory', __webpack_require__(104)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('products', {
	            url: '/products/:semanticUrl',
	            template: __webpack_require__(105),
	            data: {
	                label: "Товары",
	                parent: "dashboard"
	            },
	            controller: 'productsCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".products.header {\r\n\t\r\n}\r\n.products.header > h1 {\r\n\tfont-size: 35px;\r\n\tvertical-align: middle;\r\n}\r\n.products.footer {\r\n\tdisplay: none;\r\n\theight: 60px;\r\n\twidth: 100px;\r\n}\r\n.products > .pagination {\r\n\tdisplay: none;\r\n}\r\n.group-buttons {\r\n\tdisplay: inline-block;\r\n}\r\n.group-buttons a {\r\n\tdisplay: block;\r\n\tposition: static;\r\n}\r\n.group-buttons a:first-child {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n@media only screen and (max-width : 580px) and (min-width: 480px) {\r\n\t.products.footer > .group-buttons {\r\n\t\tmargin-top: -8px;\r\n\t}\r\n\t.products.footer > .group-buttons a {\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t\twidth: 45px;\r\n\t\theight: 45px;\r\n\t\tborder-radius: 50%;\r\n\t}\r\n\t.products.footer > .group-buttons a span{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.products.footer > .group-buttons a i {\r\n\t\tmargin: 0;\r\n\t\tmargin-top: 5px;\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n@media only screen and (max-width : 992px) and (min-width: 580px) {\r\n\t.products.footer > .group-buttons > a {\r\n\t\tpadding: 0 10px !important;\r\n\t}\r\n}\r\n@media only screen and (max-width : 992px) {\r\n\ttable.table th.group-buttons, table.table td.group-buttons {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.table.products {\r\n\t\theight: 420px;\r\n\t\toverflow-y: auto;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\t.products.header {\r\n\t\ttext-align: justify;\r\n\t\theight: 40px;\r\n\t}\r\n\t.products.header:after {\r\n\t\tdisplay: inline-block;\r\n\t\tcontent: '';\r\n\t\theight: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.products.header > h1 {\r\n\t\tdisplay: inline-block;\r\n\t\tmargin: 0;\r\n\t\tfont-size: 28px;\r\n\t}\r\n\t.products.header > .pagination {\r\n\t\tposition: relative;\r\n\t\tdisplay: inline-block;\r\n\t\tright: -24px;\r\n\t\tmargin: 0;\r\n\t\twidth: auto;\r\n\t}\r\n\t.products.footer {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.products.footer > .group-buttons {\r\n\t\ttext-align: justify;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.products.footer > .group-buttons:after {\r\n\t\tcontent: '';\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 100%;\r\n\t\theight: 0;\r\n\t}\r\n\t.products.footer > .group-buttons > a {\r\n\t\tposition: relative;\r\n\t\ttop: 10px;\r\n\t\tdisplay: inline-block;\r\n\t\tvertical-align: middle;\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t}\r\n}\r\n@media only screen and (min-width: 992px) {\r\n\t.products.header > .pagination {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.products > .pagination {\r\n\t\tdisplay: block;\r\n\t}\r\n}", ""]);
	
	// exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (app) {
	
	    __webpack_require__(91);
	
	    app.directive('editProductElement', ['$timeout', '$rootScope', __webpack_require__(93)]);
	
	    app.factory('editProductFactory', ['$http', __webpack_require__(95)]);
	
	    app.controller('editProductCtrl', ['$scope', '$timeout', '$state', 'TypeProductsFactory', 'ProductsFactory', __webpack_require__(96)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('products.edit', {
	            url: '/edit/:id',
	            template: '<edit-product-element></edit-product-element>',
	            controller: 'editProductCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function editProductElement($timeout, $rootScope) {
	
			return {
					restrict: 'E',
	
					template: __webpack_require__(94),
	
					compile: function compile(element, attributes) {
							return {
									post: function post(scope) {
	
											var editModal = document.querySelector('.side-nav-right'),
											    tableProducts = document.querySelector('table.products'),
											    headerProduct = document.querySelector('.products.header'),
											    heightEditModal = editModal.scrollHeight;
	
											function close() {
	
													setEditModalHeight();
											}
	
											function setEditModalHeight(h) {
													h = h || "";
													setStyles();
	
													function setStyles() {
															h = h !== "" ? h + "px" : "";
															$(editModal).css({ height: h });
															$(tableProducts).css({ height: h });
															headerProduct.style.display = headerProduct.style.display === 'none' ? '' : 'none';
													}
											}
	
											$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
													if (toState.name !== "products.edit") {
															close();
													}
											});
	
											$(document).ready(function () {
	
													function checkHeightModal() {
															var height = editModal.scrollHeight;
	
															if (heightEditModal === height) {
	
																	setEditModalHeight(heightEditModal);
																	return;
															}
	
															$timeout(function () {
	
																	heightEditModal = editModal.scrollHeight;
																	setEditModalHeight(heightEditModal);
															}, 200);
													}
	
													checkHeightModal();
											});
									}
							};
					}
			};
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"side-nav-right\"> <div class=\"container\"> <div class=\"row\"> <div class=\"header type-product\"> <h1>Редактировать</h1> <div class=\"fixed-action-btn\"> <a ui-sref=\"#\" ng-click=\"vm.close($event)\" class=\"btn-floating btn-large waves-effect waves-light red\"> <i class=\"material-icons\">add</i> </a> </div> </div> <form class=\"col s12 m12\"> <div class=\"row\"> <div class=\"input-field col s10 m6 block\"> <input id=\"name\" type=\"text\" class=\"validate\" ng-model=\"vm.product.name\"> <label class=\"active\" for=\"name\">Название</label> </div> <div class=\"input-field col s10 m6 block\"> <input id=\"description\" type=\"text\" class=\"validate\" ng-model=\"vm.product.description\"> <label class=\"active\" for=\"description\">Описание</label> </div> <div class=\"input-field col s10 m6 block\"> <input id=\"price\" type=\"text\" class=\"validate\" ng-model=\"vm.product.price\"> <label class=\"active\" for=\"price\">Цена</label> </div> <div class=\"input-field col s10 m6 block\" ng-repeat=\"field in vm.typeProduct.fields track by $index\"> <input id=\"{{$index}}\" type=\"text\" class=\"validate\" ng-model=\"vm.product.fields[$index]\"> <label class=\"active\" for=\"{{$index}}\">{{ field.name }}</label> </div> </div> <a ng-click=\"vm.submit($event)\" class=\"waves-effect waves-light btn\">Обновить </a> </form> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("products/editProduct/editProduct.html",v1)}]);
	module.exports=v1;

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function editProductFactory($http) {
	
		return {};
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function editProductCtrl($scope, $timeout, $state, TypeProductsFactory, ProductsFactory) {
	
		var vm = this,
		    productId = $state.params.id;
	
		// Событийные методы
		vm.close = close;
		vm.submit = submit;
	
		vm.product = ProductsFactory.getById(parseInt(productId)); //  [name, ..., price, fields: []]
		vm.typeProduct = TypeProductsFactory.getById(vm.product.type_product_id); //  {_id, name, semanticUrl, fields: [{name,type}, {name,type}]}
	
		init();
	
		function init() {}
	
		function close($event) {
	
			if ($event) $event.preventDefault();
	
			document.querySelector('.side-nav-right').classList.add('close-side-nav-right');
			document.querySelector('.side-nav-right .header > .fixed-action-btn').classList.add('close');
	
			$timeout(function () {
				$state.go('type-products');
			}, 300);
		}
	
		function submit($event) {
	
			$event.preventDefault();
	
			EditTypeProductsFactory.submitEditTypeProduct(vm.typeProduct).then(function successCallback(response) {
	
				if (response.data.status === true) {
	
					closeSideNavRight(null);
					$scope.$emit('editTypeProduct', vm.typeProduct, vm.$index);
				}
			}, function errorCallback(response) {});
		}
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function delProducts(app) {
	
	    app.controller('delProductCtrl', ['$rootScope', '$state', '$stateParams', 'ProductsFactory', __webpack_require__(98)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('products.delete', {
	            url: '/delete/:id',
	            template: __webpack_require__(99),
	            controller: 'delProductCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function delProductCtrl($rootScope, $state, $stateParams, ProductsFactory) {
	
		var vm = this,
		    modalDelete = document.getElementById('modal-delete-product'),
		    header = document.getElementsByTagName('header'),
		    parentModalDelete = modalDelete.parentNode,
		    categoryId = parseInt($stateParams.id),
		    paranga = document.createElement('div');
	
		vm.category = ProductsFactory.getById(categoryId);
	
		loadModal();
	
		function loadModal() {
	
			$(modalDelete).openModal();
			$(modalDelete).css('z-index', '1003');
	
			paranga.style.cssText = "position: fixed; \
				z-index: 1003; \
				opacity: 0.5; \
				left: 0; \
				top: 0; \
				right: 0; \
				bottom: 0; \
				background-color: #000; \
			  	";
			parentModalDelete.insertBefore(paranga, modalDelete);
	
			$(header).css('z-index', '0');
		}
	
		function closeModal(state) {
	
			// Clear arrays StateChange...
			$rootScope.$$listeners.$stateChangeStart = [];
			$rootScope.$$listeners.$stateChangeSuccess = [];
	
			$(modalDelete).closeModal();
			parentModalDelete.removeChild(paranga);
			$(header).css('z-index', '');
		}
	
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
			if (toState.name !== "products.delete") {
				closeModal();
			}
		});
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div id=\"modal-delete-product\" class=\"modal\"> <div class=\"modal-content\"> <h4>Мусорка</h4> <p>Вы действительно хотите удалить \"{{ vm.category.name }}\" товар?</p> </div> <div class=\"modal-footer\"> <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Удалить</a>\n<a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Отмена</a> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("products/deleteProduct/delete.html",v1)}]);
	module.exports=v1;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (app) {
	
	    app.controller('showProductCtrl', ['$scope', '$timeout', '$state', 'TypeProductsFactory', 'ProductsFactory', __webpack_require__(101)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('products.show', {
	            url: '/show/:id',
	            template: __webpack_require__(102),
	            controller: 'showProductCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function editProductCtrl($scope, $timeout, $state, TypeProductsFactory, ProductsFactory) {
	
		var vm = this,
		    productId = $state.params.id;
	
		// Событийные методы
		vm.close = close;
		vm.submit = submit;
	
		vm.product = ProductsFactory.getById(parseInt(productId)); //  [name, ..., price, fields: []]
		vm.typeProduct = TypeProductsFactory.getById(vm.product.type_product_id); //  {_id, name, semanticUrl, fields: [{name,type}, {name,type}]}
	
		function close($event) {
	
			/*if($event) $event.preventDefault();
	  		document.querySelector('.side-nav-right').classList.add('close-side-nav-right');
	  document.querySelector('.side-nav-right .header > .fixed-action-btn').classList.add('close');
	  		$timeout( function(){ $state.go('type-products'); }, 300 );*/
		}
	
		function submit($event) {
	
			/*$event.preventDefault();
	  		EditTypeProductsFactory.submitEditTypeProduct( vm.typeProduct )
	  	.then(function successCallback(response) {
	  					if(response.data.status === true) {
	  						closeSideNavRight(null);
	  				$scope.$emit('editTypeProduct', vm.typeProduct, vm.$index);
	  			}
	  				}, function errorCallback(response) {
	  			});*/
		}
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"side-nav-right\"> <div class=\"container\"> <div class=\"row\"> <div class=\"header type-product\"> <h1>Описание</h1> <div class=\"fixed-action-btn\"> <a ui-sref=\"#\" ng-click=\"vm.close($event)\" class=\"btn-floating btn-large waves-effect waves-light red\"> <i class=\"material-icons\">add</i> </a> </div> </div> <div class=\"col s12 m12\"> <div class=\"row\"> <div class=\"input-field col s10 m6 block\"> <span class=\"field\">Название</span>\n<span class=\"field-value\">{{ vm.product.name }}</span> </div> <div class=\"input-field col s10 m6 block\"> <span class=\"field\">Описание</span>\n<span class=\"field-value\">{{ vm.product.description }}</span> </div> <div class=\"input-field col s10 m6 block\"> <span class=\"field\">Цена</span>\n<span class=\"field-value\">{{ vm.product.price }}</span> </div> <div class=\"input-field col s10 m6 block\" ng-repeat=\"field in vm.typeProduct.fields track by $index\"> <span class=\"field\">{{ field.name }}</span>\n<span class=\"field-value\">{{ vm.product.fields[$index] }}</span> </div> </div> </div> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("products/showProduct/showProduct.html",v1)}]);
	module.exports=v1;

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ProductsFactory($http, $q) {
	
		var products = null;
	
		function get(productSemanticUrl) {
	
			var deferred = $q.defer();
	
			$http.get('admin/type-products/' + productSemanticUrl).then(function success(response) {
	
				products = response.data;
				deferred.resolve(response.data);
			}, function error(response) {
	
				deferred.reject('Not loaded products ' + productSemanticUrl);
			});
	
			return deferred.promise;
		}
	
		function getById(id) {
	
			function catchProductById(val) {
				return val.id === id;
			}
	
			return products.find(catchProductById);
		}
	
		return {
			get: get,
			getById: getById
		};
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function productsCtrl($timeout, $rootScope, $scope, $state, $stateParams, ProductsFactory, TypeProductsFactory, UnitsFactory) {
	
		var vm = this,
		    screenIsPhone = false;
	
		vm.typeProductSemanticUrl = $stateParams.semanticUrl;
	
		vm.typeProduct = {};
		TypeProductsFactory.getOneTypeProduct('semanticUrl', vm.typeProductSemanticUrl).then(function (data) {
	
			vm.typeProduct = data;
		}, function (data) {
	
			alert("Error " + data);
		});
	
		vm.products = [];
		ProductsFactory.get(vm.typeProductSemanticUrl).then(function successCallback(data) {
	
			vm.products = data;
		}, function errorCallback(data) {
	
			alert("Error: " + data);
		});
	
		vm.units = [];
		UnitsFactory.get().then(function succes(data) {
	
			vm.units = data;
		}, function error(data) {
	
			alert("Error " + data);
		});
	
		// Events Methods
		vm.add = add;
	
		vm.selectProduct = selectProduct();
		vm.selectedProduct = {};
	
		init();
	
		function init() {
	
			setHeightProducts();
			window.addEventListener("resize", setHeightProducts);
		}
	
		function close() {
	
			window.removeEventListener("resize", setHeightProducts);
		}
	
		function setHeightProducts() {
			//if phone
			if (document.documentElement.clientWidth > 480) {
				screenIsPhone = false;return;
			}
	
			screenIsPhone = true;
			// !!! Bad Code
			$timeout(function () {
	
				var collection = document.querySelector('.table.products'),
				    heightWindow = document.documentElement.clientHeight,
				    heightFooter = document.querySelector('.footer').offsetHeight,
				    topCollection = collection.getBoundingClientRect().top,
				    colletMargBot = parseInt(getComputedStyle(collection).marginBottom),
				    heightCollection;
	
				//console.dir( heightWindow + '	::   ' + topCollection + '   :   ' + heightFooter + '   :   ' + colletMargBot);
				heightCollection = heightWindow - topCollection - heightFooter - colletMargBot;
				collection.style.height = heightCollection + 'px';
				//console.log("Resize");
			});
		}
	
		function selectProduct() {
			var groupButtons = document.querySelector('.products.footer > .group-buttons'),
			    oldCategoryId = null;
			return function (product, option) {
				option = option || 'select';
				if (typeof product === 'object') vm.selectedProduct = product;
	
				if (option === 'select') if (oldCategoryId === product.id || oldCategoryId === null) {
					Array.prototype.forEach.call(groupButtons.children, function (val) {
	
						val.classList.toggle('disabled');
						if (!val.classList.contains('disabled')) oldCategoryId = product.id;else oldCategoryId = null;
					});
				} else {
					oldCategoryId = product.id;
				}
	
				if (option === 'edit') {
	
					$state.go("products.edit", { id: vm.selectedProduct.id });
				}
	
				if (option === 'delete') {
					$state.go("products.delete", { id: vm.selectedProduct.id });
				}
			};
		}
	
		function add($event) {
	
			$event.preventDefault();
	
			/*$state.go('type-products-products.create', {
	  	typeProduct : vm.typeProduct
	  });*/
		}
	
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	
			if (toState.name !== "products") {
				close();
			}
		});
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"products header\"> <h1>{{vm.typeProduct.name}}</h1> <ul class=\"pagination\"> <li class=\"disabled\"><a href=\"#!\"><i class=\"material-icons\">chevron_left</i></a></li> <li class=\"active\"><a href=\"#!\">1</a></li> <li class=\"waves-effect\"><a href=\"#!\"><i class=\"material-icons\">chevron_right</i></a></li> </ul> </div> <table class=\"highlight centered table products responsive-table\"> <thead> <tr> <th data-field=\"id\">Id</th> <th data-field=\"name\">Name</th> <th data-field=\"price\">Price</th> <th ng-repeat=\"field in vm.typeProduct.fields track by $index\" data-field=\"id\">{{ field.name + ((field.type.name === 'integer') ? ((field.type.unit) ? ' ('+vm.units[field.type.unit-1].name+')' : '') : '') }}</th> <th class=\"group-buttons\">Действие</th> </tr> </thead> <tbody> <tr ng-repeat=\"product in vm.products track by product.id\" ng-click=\"vm.selectProduct(product)\"> <td>{{ product.id }}</td> <td>{{ product.name }}</td> <td>{{ product.price }}</td> <td ng-repeat=\"field in product.fields track by $index\">{{ field }}</td> <td class=\"group-buttons\"> <div class=\"fixed-action-btn horizontal\"> <a class=\"btn-floating waves-effect waves-light btn-large red\"> <i class=\"large material-icons fa fa-outdent\"></i> </a> <ul> <li><a class=\"btn-floating deep-orange\" ui-sref=\"products.edit({ id : product.id })\"> <i class=\"material-icons\">mode_edit</i></a> </li> <li><a class=\"btn-floating deep-orange\" ui-sref=\"products.show({ id : product.id })\"> <i class=\"material-icons\">note_add</i></a> </li> <li><a class=\"btn-floating deep-orange\" ui-sref=\"products.delete({ id : product.id })\"> <i class=\"fa fa-trash material-icons\" aria-hidden=\"true\"></i></a> </li> </ul> </div> </td> </tr> </tbody> </table> <ui-view></ui-view> <div class=\"products footer\"> <div class=\"group-buttons\"> <a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectProduct(product, 'edit')\"> <i class=\"material-icons left\">mode_edit</i><span>Редактировать</span> </a>\n<a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectCategory(typeProduct, 'open')\"> <i class=\"material-icons left\">open_in_new</i><span>Показать подробнее</span> </a>\n<a class=\"waves-effect waves-light btn disabled\" ng-click=\"vm.selectProduct(product, 'delete')\"> <i class=\"material-icons left\">delete</i><span>Удалить</span> </a> </div> </div> <div class=\"products\"> <ul class=\"pagination\"> <li class=\"disabled\"><a href=\"#!\"><i class=\"material-icons\">chevron_left</i></a></li> <li class=\"active\"><a href=\"#!\">1</a></li> <li class=\"waves-effect\"><a href=\"#!\"><i class=\"material-icons\">chevron_right</i></a></li> </ul> </div>";
	ngModule.run(["$templateCache",function(c){c.put("src/products/products.html",v1)}]);
	module.exports=v1;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	    __webpack_require__(107)(app);
	
	    __webpack_require__(112);
	
	    app.controller('lists_valuesCtrl', ['ListsValuesFactory', __webpack_require__(114)]);
	    app.factory('ListsValuesFactory', ['$http', __webpack_require__(115)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('lists-values', {
	            url: '/lists-values',
	            template: __webpack_require__(116),
	            data: {
	                label: "Списки",
	                parent: "dashboard"
	            },
	            controller: 'lists_valuesCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	    __webpack_require__(108);
	
	    app.controller('list_valuesCtrl', ['$stateParams', 'ListsValuesFactory', __webpack_require__(110)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('list-values', {
	            url: '/lists-values/:id',
	            template: __webpack_require__(111),
	            data: {
	                label: "Список",
	                parent: "lists-values"
	            },
	            controller: 'list_valuesCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(109);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function list_valuesCtrl($stateParams, ListsValuesFactory) {
	
		var vm = this,
		    idList = parseInt($stateParams.id);
	
		vm.newValue = {};
	
		vm.list_values = ListsValuesFactory.getList(idList);
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"row\"> <div class=\"col s7\"> <div class=\"input-field col s12 block units\"> <input id=\"name\" type=\"text\" class=\"validate\" ng-model=\"vm.newValue.name\"> <label for=\"name\">Новое значение</label> </div> </div> <div class=\"col s5 add-new-units\"> <a class=\"waves-effect waves-light btn\">Добавить</a> </div> </div> <ul class=\"collection\"> <li class=\"collection-item units\" ng-repeat=\"value in vm.list_values track by value.id\"> <div class=\"unit\">{{ value.name }}</div> <div class=\"delete-unit\"> <a class=\"btn-floating waves-effect waves-light\"><i class=\"material-icons\">delete</i></a> </div> </li> </ul>";
	ngModule.run(["$templateCache",function(c){c.put("lists_values/list_values/list_values.html",v1)}]);
	module.exports=v1;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function lists_valuesCtrl(ListsValuesFactory) {
	
		var vm = this;
	
		vm.newList = {};
	
		vm.lists_values = ListsValuesFactory.get();
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ListsValuesFactory($http) {
	
		var lists_values = JSON.parse('[\n\t\t\t{\n\t\t\t\t"id":1,\n\t\t\t\t"name":"HDD",\n\t\t\t\t"created_at":null,\n\t\t\t\t"updated_at":null\n\t\t\t}\n\t\t]'),
		    values = JSON.parse('\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\t"id":1,\n\t\t\t\t\t"list_value_id":1,\n\t\t\t\t\t"name":"128 GB",\n\t\t\t\t\t"created_at":null,\n\t\t\t\t\t"updated_at":null\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"id":2,\n\t\t\t\t\t"list_value_id":1,\n\t\t\t\t\t"name":"256 GB",\n\t\t\t\t\t"created_at":null,\n\t\t\t\t\t"updated_at":null\n\t\t\t\t}\n\t\t\t]\n\t\t');
	
		function get() {
	
			return lists_values;
		}
	
		function getList(id) {
	
			function catchValuesById(val) {
				return val.list_value_id === id;
			}
	
			return values.filter(catchValuesById);
		}
	
		return {
	
			get: get,
			getList: getList
	
		};
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"row\"> <div class=\"col s7\"> <div class=\"input-field col s12 block units\"> <input id=\"name\" type=\"text\" class=\"validate\" ng-model=\"vm.newList.name\"> <label for=\"name\">Новый список</label> </div> </div> <div class=\"col s5 add-new-units\"> <a class=\"waves-effect waves-light btn\">Создать</a> </div> </div> <ul class=\"collection\"> <li class=\"collection-item units\" ng-repeat=\"list_values in vm.lists_values track by list_values.id\" ui-sref=\"list-values({ id: list_values.id })\"> <div class=\"unit\">{{ list_values.name }}</div> <div class=\"delete-unit\"> <a class=\"btn-floating waves-effect waves-light\"><i class=\"material-icons\">delete</i></a> </div> </li> </ul>";
	ngModule.run(["$templateCache",function(c){c.put("src/lists_values/lists_values.html",v1)}]);
	module.exports=v1;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	    __webpack_require__(118);
	
	    app.controller('unitsCtrl', ['UnitsFactory', __webpack_require__(120)]);
	    app.factory('UnitsFactory', ['$http', '$q', __webpack_require__(121)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('units', {
	            url: '/units',
	            template: __webpack_require__(122),
	            data: {
	                label: "Units",
	                parent: "dashboard"
	            },
	            controller: 'unitsCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(119);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-width : 480px) {\r\n\t.input-field.col.units {\r\n\t\tpadding: 0;\r\n\t}\r\n\t/*.col.add-new-units {\r\n\t\tpadding: 0;\r\n\t}*/\r\n}\r\n\r\n.add-new-units > a {\r\n\tposition: relative;\r\n\ttop: 20px;\r\n}\r\n\r\n.units {\r\n\tpadding: 0;\r\n}\r\n.units:after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tclear: both;\r\n\tvisibility: hidden;\r\n\tline-height: 0;\r\n\theight: 0;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.unit {\r\n\tfloat: left;\r\n\tline-height: 2.5;\r\n}\r\n.delete-unit {\r\n\tfloat: right;\r\n}", ""]);
	
	// exports


/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function unitsCtrl(UnitsFactory) {
	
		var vm = this;
	
		vm.units = UnitsFactory.get();
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function UnitsFactory($http, $q) {
	
		var units = null;
	
		function get() {
	
			var deferred = $q.defer();
	
			if (units) {
	
				deferred.resolve(units);
				return deferred.promise;
			}
	
			$http.get('admin/units').then(function success(response) {
	
				if (units === null) units = response.data;
				deferred.resolve(response.data);
			}, function error(response) {
	
				deferred.reject('Not loaded units');
			});
	
			return deferred.promise;
		}
	
		return {
	
			get: get
	
		};
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"row\"> <div class=\"col s7\"> <div class=\"input-field col s12 block units\"> <input id=\"name\" type=\"text\" class=\"validate\" ng-model=\"vm.typeProduct.name\"> <label for=\"name\">Новая ед. измерения</label> </div> </div> <div class=\"col s5 add-new-units\"> <a class=\"waves-effect waves-light btn\">Add</a> </div> </div> <ul class=\"collection\"> <li class=\"collection-item units\" ng-repeat=\"unit in vm.units track by unit.id\"> <div class=\"unit\">{{ unit.name }}</div> <div class=\"delete-unit\"> <a class=\"btn-floating waves-effect waves-light\"><i class=\"material-icons\">delete</i></a> </div> </li> </ul>";
	ngModule.run(["$templateCache",function(c){c.put("src/units/units.html",v1)}]);
	module.exports=v1;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (app) {
	
	    __webpack_require__(124);
	
	    app.controller('newsCtrl', ['textAngularManager', 'NewsFactory', __webpack_require__(126)]);
	    app.factory('NewsFactory', ['$http', __webpack_require__(129)]);
	
	    app.config(['$stateProvider', function ($stateProvider) {
	
	        $stateProvider.state('news', {
	            url: '/news',
	            template: __webpack_require__(130),
	            data: {
	                label: "Новости",
	                parent: "dashboard"
	            },
	            controller: 'newsCtrl as vm'
	        });
	    }]);
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function newsCtrl(textAngularManager, NewsFactory) {
	
	    var vm = this;
	
	    vm.news = NewsFactory.get();
	    vm.bootstrap = __webpack_require__(127);
	
	    //	Seting textEditor
	    vm.version = textAngularManager.getVersion();
	    vm.versionNumber = vm.version.substring(1);
	    vm.orightml = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><img class="ta-insert-video" ta-insert-video="http://www.youtube.com/embed/2maA1-mvicY" src="" allowfullscreen="true" width="300" frameborder="0" height="250"/></p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li><li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE9+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p><h4>Supports non-latin Characters</h4><p>昮朐 魡 燚璒瘭 譾躒鑅, 皾籈譧 紵脭脧 逯郹酟 煃 瑐瑍, 踆跾踄 趡趛踠 顣飁 廞 熥獘 豥 蔰蝯蝺 廦廥彋 蕍蕧螛 溹溦 幨懅憴 妎岓岕 緁, 滍 蘹蠮 蟷蠉蟼 鱐鱍鱕, 阰刲 鞮鞢騉 烳牼翐 魡 骱 銇韎餀 媓幁惁 嵉愊惵 蛶觢, 犝獫 嶵嶯幯 縓罃蔾 魵 踄 罃蔾 獿譿躐 峷敊浭, 媓幁 黐曮禷 椵楘溍 輗 漀 摲摓 墐墆墏 捃挸栚 蛣袹跜, 岓岕 溿 斶檎檦 匢奾灱 逜郰傃</p>';
	    vm.htmlcontent = vm.orightml;
	    vm.disabled = false;
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./bootstrap.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./bootstrap.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Bootstrap v3.1.0 (http://getbootstrap.com)\r\n * Copyright 2011-2014 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */\r\n\r\n/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\r\n\r\ndiv[name=\"htmlcontent\"] > a {\r\n  background: transparent;\r\n}\r\ndiv[name=\"htmlcontent\"] > a:active,\r\ndiv[name=\"htmlcontent\"] > a:hover {\r\n  outline: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > abbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\ndiv[name=\"htmlcontent\"] > b,\r\ndiv[name=\"htmlcontent\"] > strong {\r\n  font-weight: bold;\r\n}\r\ndiv[name=\"htmlcontent\"] > dfn {\r\n  font-style: italic;\r\n}\r\ndiv[name=\"htmlcontent\"] > h1 {\r\n  margin: .67em 0;\r\n  font-size: 2em;\r\n}\r\ndiv[name=\"htmlcontent\"] > mark {\r\n  color: #000;\r\n  background: #ff0;\r\n}\r\ndiv[name=\"htmlcontent\"] > small {\r\n  font-size: 80%;\r\n}\r\ndiv[name=\"htmlcontent\"] > sub,\r\ndiv[name=\"htmlcontent\"] > sup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\r\ndiv[name=\"htmlcontent\"] > sup {\r\n  top: -.5em;\r\n}\r\ndiv[name=\"htmlcontent\"] > sub {\r\n  bottom: -.25em;\r\n}\r\ndiv[name=\"htmlcontent\"] > img {\r\n  border: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > svg:not(:root) {\r\n  overflow: hidden;\r\n}\r\ndiv[name=\"htmlcontent\"] > figure {\r\n  margin: 1em 40px;\r\n}\r\ndiv[name=\"htmlcontent\"] > hr {\r\n  height: 0;\r\n  box-sizing: content-box;\r\n}\r\ndiv[name=\"htmlcontent\"] > pre {\r\n  overflow: auto;\r\n}\r\ndiv[name=\"htmlcontent\"] > code,\r\ndiv[name=\"htmlcontent\"] > kbd,\r\ndiv[name=\"htmlcontent\"] > pre,\r\ndiv[name=\"htmlcontent\"] > samp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\ndiv[name=\"htmlcontent\"] > button,\r\ndiv[name=\"htmlcontent\"] > input,\r\ndiv[name=\"htmlcontent\"] > optgroup,\r\ndiv[name=\"htmlcontent\"] > select,\r\ndiv[name=\"htmlcontent\"] > textarea {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\ndiv[name=\"htmlcontent\"] > button {\r\n  overflow: visible;\r\n}\r\ndiv[name=\"htmlcontent\"] > button,\r\ndiv[name=\"htmlcontent\"] > select {\r\n  text-transform: none;\r\n}\r\ndiv[name=\"htmlcontent\"] > button,\r\ndiv[name=\"htmlcontent\"] > html input[type=\"button\"],\r\ndiv[name=\"htmlcontent\"] > input[type=\"reset\"],\r\ndiv[name=\"htmlcontent\"] > input[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n  cursor: pointer;\r\n}\r\ndiv[name=\"htmlcontent\"] > button[disabled],\r\ndiv[name=\"htmlcontent\"] > html input[disabled] {\r\n  cursor: default;\r\n}\r\ndiv[name=\"htmlcontent\"] > button::-moz-focus-inner,\r\ndiv[name=\"htmlcontent\"] > input::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > input {\r\n  line-height: normal;\r\n}\r\ndiv[name=\"htmlcontent\"] > input[type=\"checkbox\"],\r\ndiv[name=\"htmlcontent\"] > input[type=\"radio\"] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > input[type=\"number\"]::-webkit-inner-spin-button,\r\ndiv[name=\"htmlcontent\"] > input[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\ndiv[name=\"htmlcontent\"] > input[type=\"search\"] {\r\n  box-sizing: content-box;\r\n  -webkit-appearance: textfield;\r\n}\r\ndiv[name=\"htmlcontent\"] > input[type=\"search\"]::-webkit-search-cancel-button,\r\ndiv[name=\"htmlcontent\"] > input[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\ndiv[name=\"htmlcontent\"] > fieldset {\r\n  padding: .35em .625em .75em;\r\n  margin: 0 2px;\r\n  border: 1px solid #c0c0c0;\r\n}\r\ndiv[name=\"htmlcontent\"] > legend {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > textarea {\r\n  overflow: auto;\r\n}\r\ndiv[name=\"htmlcontent\"] > optgroup {\r\n  font-weight: bold;\r\n}\r\ndiv[name=\"htmlcontent\"] > table {\r\n  border-spacing: 0;\r\n  border-collapse: collapse;\r\n}\r\ndiv[name=\"htmlcontent\"] > td,\r\ndiv[name=\"htmlcontent\"] > th {\r\n  padding: 0;\r\n}\r\n@media print {\r\n  div[name=\"htmlcontent\"] > * {\r\n    color: #000 !important;\r\n    text-shadow: none !important;\r\n    background: transparent !important;\r\n    box-shadow: none !important;\r\n  }\r\n  div[name=\"htmlcontent\"] > a,\r\n  div[name=\"htmlcontent\"] > a:visited {\r\n    text-decoration: underline;\r\n  }\r\n  div[name=\"htmlcontent\"] > a[href]:after {\r\n    content: \" (\" attr(href) \")\";\r\n  }\r\n  div[name=\"htmlcontent\"] > abbr[title]:after {\r\n    content: \" (\" attr(title) \")\";\r\n  }\r\n  div[name=\"htmlcontent\"] > a[href^=\"javascript:\"]:after,\r\n  div[name=\"htmlcontent\"] > a[href^=\"#\"]:after {\r\n    content: \"\";\r\n  }\r\n  div[name=\"htmlcontent\"] > pre,\r\n  div[name=\"htmlcontent\"] > blockquote {\r\n    border: 1px solid #999;\r\n\r\n    page-break-inside: avoid;\r\n  }\r\n  div[name=\"htmlcontent\"] > thead {\r\n    display: table-header-group;\r\n  }\r\n  div[name=\"htmlcontent\"] > tr,\r\n  div[name=\"htmlcontent\"] > img {\r\n    page-break-inside: avoid;\r\n  }\r\n  div[name=\"htmlcontent\"] > img {\r\n    max-width: 100% !important;\r\n  }\r\n  div[name=\"htmlcontent\"] > p,\r\n  div[name=\"htmlcontent\"] > h2,\r\n  div[name=\"htmlcontent\"] > h3 {\r\n    orphans: 3;\r\n    widows: 3;\r\n  }\r\n  div[name=\"htmlcontent\"] > h2,\r\n  div[name=\"htmlcontent\"] > h3 {\r\n    page-break-after: avoid;\r\n  }\r\n  div[name=\"htmlcontent\"] > select {\r\n    background: #fff !important;\r\n  }\r\n  div[name=\"htmlcontent\"] > .navbar {\r\n    display: none;\r\n  }\r\n  div[name=\"htmlcontent\"] > .table td,\r\n  div[name=\"htmlcontent\"] > .table th {\r\n    background-color: #fff !important;\r\n  }\r\n  div[name=\"htmlcontent\"] > .btn > .caret,\r\n  div[name=\"htmlcontent\"] > .dropup > .btn > .caret {\r\n    border-top-color: #000 !important;\r\n  }\r\n  div[name=\"htmlcontent\"] > .label {\r\n    border: 1px solid #000;\r\n  }\r\n  div[name=\"htmlcontent\"] > .table {\r\n    border-collapse: collapse !important;\r\n  }\r\n  div[name=\"htmlcontent\"] > .table-bordered th,\r\n  div[name=\"htmlcontent\"] > .table-bordered td {\r\n    border: 1px solid #ddd !important;\r\n  }\r\n}\r\ndiv[name=\"htmlcontent\"] > * {\r\n  box-sizing: border-box;\r\n}\r\ndiv[name=\"htmlcontent\"] > *:before,\r\ndiv[name=\"htmlcontent\"] > *:after {\r\n  box-sizing: border-box;\r\n}\r\ndiv[name=\"htmlcontent\"] > html {\r\n  font-size: 62.5%;\r\n\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\ndiv[name=\"htmlcontent\"] > body {\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 1.428571429;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\ndiv[name=\"htmlcontent\"] > input,\r\ndiv[name=\"htmlcontent\"] > button,\r\ndiv[name=\"htmlcontent\"] > select,\r\ndiv[name=\"htmlcontent\"] > textarea {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\ndiv[name=\"htmlcontent\"] > a {\r\n  color: #428bca;\r\n  text-decoration: none;\r\n}\r\ndiv[name=\"htmlcontent\"] > a:hover,\r\ndiv[name=\"htmlcontent\"] > a:focus {\r\n  color: #2a6496;\r\n  text-decoration: underline;\r\n}\r\ndiv[name=\"htmlcontent\"] > a:focus {\r\n  outline: thin dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\ndiv[name=\"htmlcontent\"] > figure {\r\n  margin: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > img {\r\n  vertical-align: middle;\r\n}\r\ndiv[name=\"htmlcontent\"] > .img-responsive {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\ndiv[name=\"htmlcontent\"] > .img-rounded {\r\n  border-radius: 6px;\r\n}\r\ndiv[name=\"htmlcontent\"] > .img-thumbnail {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  height: auto;\r\n  padding: 4px;\r\n  line-height: 1.428571429;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  transition: all .2s ease-in-out;\r\n}\r\ndiv[name=\"htmlcontent\"] > .img-circle {\r\n  border-radius: 50%;\r\n}\r\ndiv[name=\"htmlcontent\"] > hr {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  border: 0;\r\n  border-top: 1px solid #eee;\r\n}\r\ndiv[name=\"htmlcontent\"] > .sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > h1,\r\ndiv[name=\"htmlcontent\"] > h2,\r\ndiv[name=\"htmlcontent\"] > h3,\r\ndiv[name=\"htmlcontent\"] > h4,\r\ndiv[name=\"htmlcontent\"] > h5,\r\ndiv[name=\"htmlcontent\"] > h6,\r\ndiv[name=\"htmlcontent\"] > .h1,\r\ndiv[name=\"htmlcontent\"] > .h2,\r\ndiv[name=\"htmlcontent\"] > .h3,\r\ndiv[name=\"htmlcontent\"] > .h4,\r\ndiv[name=\"htmlcontent\"] > .h5,\r\ndiv[name=\"htmlcontent\"] > .h6 {\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  line-height: 1.1;\r\n  color: inherit;\r\n}\r\ndiv[name=\"htmlcontent\"] > h1 small,\r\ndiv[name=\"htmlcontent\"] > h2 small,\r\ndiv[name=\"htmlcontent\"] > h3 small,\r\ndiv[name=\"htmlcontent\"] > h4 small,\r\ndiv[name=\"htmlcontent\"] > h5 small,\r\ndiv[name=\"htmlcontent\"] > h6 small,\r\ndiv[name=\"htmlcontent\"] > .h1 small,\r\ndiv[name=\"htmlcontent\"] > .h2 small,\r\ndiv[name=\"htmlcontent\"] > .h3 small,\r\ndiv[name=\"htmlcontent\"] > .h4 small,\r\ndiv[name=\"htmlcontent\"] > .h5 small,\r\ndiv[name=\"htmlcontent\"] > .h6 small,\r\ndiv[name=\"htmlcontent\"] > h1 .small,\r\ndiv[name=\"htmlcontent\"] > h2 .small,\r\ndiv[name=\"htmlcontent\"] > h3 .small,\r\ndiv[name=\"htmlcontent\"] > h4 .small,\r\ndiv[name=\"htmlcontent\"] > h5 .small,\r\ndiv[name=\"htmlcontent\"] > h6 .small,\r\ndiv[name=\"htmlcontent\"] > .h1 .small,\r\ndiv[name=\"htmlcontent\"] > .h2 .small,\r\ndiv[name=\"htmlcontent\"] > .h3 .small,\r\ndiv[name=\"htmlcontent\"] > .h4 .small,\r\ndiv[name=\"htmlcontent\"] > .h5 .small,\r\ndiv[name=\"htmlcontent\"] > .h6 .small {\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  color: #999;\r\n}\r\ndiv[name=\"htmlcontent\"] > h1,\r\ndiv[name=\"htmlcontent\"] > .h1,\r\ndiv[name=\"htmlcontent\"] > h2,\r\ndiv[name=\"htmlcontent\"] > .h2,\r\ndiv[name=\"htmlcontent\"] > h3,\r\ndiv[name=\"htmlcontent\"] > .h3 {\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\ndiv[name=\"htmlcontent\"] > h1 small,\r\ndiv[name=\"htmlcontent\"] > .h1 small,\r\ndiv[name=\"htmlcontent\"] > h2 small,\r\ndiv[name=\"htmlcontent\"] > .h2 small,\r\ndiv[name=\"htmlcontent\"] > h3 small,\r\ndiv[name=\"htmlcontent\"] > .h3 small,\r\ndiv[name=\"htmlcontent\"] > h1 .small,\r\ndiv[name=\"htmlcontent\"] > .h1 .small,\r\ndiv[name=\"htmlcontent\"] > h2 .small,\r\ndiv[name=\"htmlcontent\"] > .h2 .small,\r\ndiv[name=\"htmlcontent\"] > h3 .small,\r\ndiv[name=\"htmlcontent\"] > .h3 .small {\r\n  font-size: 65%;\r\n}\r\ndiv[name=\"htmlcontent\"] > h4,\r\ndiv[name=\"htmlcontent\"] > .h4,\r\ndiv[name=\"htmlcontent\"] > h5,\r\ndiv[name=\"htmlcontent\"] > .h5,\r\ndiv[name=\"htmlcontent\"] > h6,\r\ndiv[name=\"htmlcontent\"] > .h6 {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\ndiv[name=\"htmlcontent\"] > h4 small,\r\ndiv[name=\"htmlcontent\"] > .h4 small,\r\ndiv[name=\"htmlcontent\"] > h5 small,\r\ndiv[name=\"htmlcontent\"] > .h5 small,\r\ndiv[name=\"htmlcontent\"] > h6 small,\r\ndiv[name=\"htmlcontent\"] > .h6 small,\r\ndiv[name=\"htmlcontent\"] > h4 .small,\r\ndiv[name=\"htmlcontent\"] > .h4 .small,\r\ndiv[name=\"htmlcontent\"] > h5 .small,\r\ndiv[name=\"htmlcontent\"] > .h5 .small,\r\ndiv[name=\"htmlcontent\"] > h6 .small,\r\ndiv[name=\"htmlcontent\"] > .h6 .small {\r\n  font-size: 75%;\r\n}\r\ndiv[name=\"htmlcontent\"] > h1,\r\ndiv[name=\"htmlcontent\"] > .h1 {\r\n  font-size: 36px;\r\n}\r\ndiv[name=\"htmlcontent\"] > h2,\r\ndiv[name=\"htmlcontent\"] > .h2 {\r\n  font-size: 30px;\r\n}\r\ndiv[name=\"htmlcontent\"] > h3,\r\ndiv[name=\"htmlcontent\"] > .h3 {\r\n  font-size: 24px;\r\n}\r\ndiv[name=\"htmlcontent\"] > h4,\r\ndiv[name=\"htmlcontent\"] > .h4 {\r\n  font-size: 18px;\r\n}\r\ndiv[name=\"htmlcontent\"] > h5,\r\ndiv[name=\"htmlcontent\"] > .h5 {\r\n  font-size: 14px;\r\n}\r\ndiv[name=\"htmlcontent\"] > h6,\r\ndiv[name=\"htmlcontent\"] > .h6 {\r\n  font-size: 12px;\r\n}\r\ndiv[name=\"htmlcontent\"] > p {\r\n  margin: 0 0 10px;\r\n}\r\ndiv[name=\"htmlcontent\"] > .lead {\r\n  margin-bottom: 20px;\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n  line-height: 1.4;\r\n}\r\n@media (min-width: 768px) {\r\n  div[name=\"htmlcontent\"] > .lead {\r\n    font-size: 21px;\r\n  }\r\n}\r\ndiv[name=\"htmlcontent\"] > small,\r\ndiv[name=\"htmlcontent\"] > .small {\r\n  font-size: 85%;\r\n}\r\ndiv[name=\"htmlcontent\"] > cite {\r\n  font-style: normal;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-left {\r\n  text-align: left;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-right {\r\n  text-align: right;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-center {\r\n  text-align: center;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-justify {\r\n  text-align: justify;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-muted {\r\n  color: #999;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-primary {\r\n  color: #428bca;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.text-primary:hover {\r\n  color: #3071a9;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-success {\r\n  color: #3c763d;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.text-success:hover {\r\n  color: #2b542c;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-info {\r\n  color: #31708f;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.text-info:hover {\r\n  color: #245269;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-warning {\r\n  color: #8a6d3b;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.text-warning:hover {\r\n  color: #66512c;\r\n}\r\ndiv[name=\"htmlcontent\"] > .text-danger {\r\n  color: #a94442;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.text-danger:hover {\r\n  color: #843534;\r\n}\r\ndiv[name=\"htmlcontent\"] > .bg-primary {\r\n  color: #fff;\r\n  background-color: #428bca;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.bg-primary:hover {\r\n  background-color: #3071a9;\r\n}\r\ndiv[name=\"htmlcontent\"] > .bg-success {\r\n  background-color: #dff0d8;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.bg-success:hover {\r\n  background-color: #c1e2b3;\r\n}\r\ndiv[name=\"htmlcontent\"] > .bg-info {\r\n  background-color: #d9edf7;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.bg-info:hover {\r\n  background-color: #afd9ee;\r\n}\r\ndiv[name=\"htmlcontent\"] > .bg-warning {\r\n  background-color: #fcf8e3;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.bg-warning:hover {\r\n  background-color: #f7ecb5;\r\n}\r\ndiv[name=\"htmlcontent\"] > .bg-danger {\r\n  background-color: #f2dede;\r\n}\r\ndiv[name=\"htmlcontent\"] > a.bg-danger:hover {\r\n  background-color: #e4b9b9;\r\n}\r\ndiv[name=\"htmlcontent\"] > .page-header {\r\n  padding-bottom: 9px;\r\n  margin: 40px 0 20px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\ndiv[name=\"htmlcontent\"] > ul,\r\ndiv[name=\"htmlcontent\"] > ol {\r\n  margin-top: 0;\r\n  margin-bottom: 10px;\r\n}\r\ndiv[name=\"htmlcontent\"] > ul ul,\r\ndiv[name=\"htmlcontent\"] > ol ul,\r\ndiv[name=\"htmlcontent\"] > ul ol,\r\ndiv[name=\"htmlcontent\"] > ol ol {\r\n  margin-bottom: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > .list-unstyled {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\ndiv[name=\"htmlcontent\"] > .list-inline {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\ndiv[name=\"htmlcontent\"] > .list-inline > li {\r\n  display: inline-block;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n}\r\ndiv[name=\"htmlcontent\"] > .list-inline > li:first-child {\r\n  padding-left: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > dl {\r\n  margin-top: 0;\r\n  margin-bottom: 20px;\r\n}\r\ndiv[name=\"htmlcontent\"] > dt,\r\ndiv[name=\"htmlcontent\"] > dd {\r\n  line-height: 1.428571429;\r\n}\r\ndiv[name=\"htmlcontent\"] > dt {\r\n  font-weight: bold;\r\n}\r\ndiv[name=\"htmlcontent\"] > dd {\r\n  margin-left: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  div[name=\"htmlcontent\"] > .dl-horizontal dt {\r\n    float: left;\r\n    width: 160px;\r\n    overflow: hidden;\r\n    clear: left;\r\n    text-align: right;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n  }\r\n  div[name=\"htmlcontent\"] > .dl-horizontal dd {\r\n    margin-left: 180px;\r\n  }\r\n}\r\ndiv[name=\"htmlcontent\"] > abbr[title],\r\ndiv[name=\"htmlcontent\"] > abbr[data-original-title] {\r\n  cursor: help;\r\n  border-bottom: 1px dotted #999;\r\n}\r\ndiv[name=\"htmlcontent\"] > .initialism {\r\n  font-size: 90%;\r\n  text-transform: uppercase;\r\n}\r\ndiv[name=\"htmlcontent\"] > blockquote {\r\n  padding: 10px 20px;\r\n  margin: 0 0 20px;\r\n  font-size: 17.5px;\r\n  border-left: 5px solid #eee;\r\n}\r\ndiv[name=\"htmlcontent\"] > blockquote p:last-child,\r\ndiv[name=\"htmlcontent\"] > blockquote ul:last-child,\r\ndiv[name=\"htmlcontent\"] > blockquote ol:last-child {\r\n  margin-bottom: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > blockquote footer,\r\ndiv[name=\"htmlcontent\"] > blockquote small,\r\ndiv[name=\"htmlcontent\"] > blockquote .small {\r\n  display: block;\r\n  font-size: 80%;\r\n  line-height: 1.428571429;\r\n  color: #999;\r\n}\r\ndiv[name=\"htmlcontent\"] > blockquote footer:before,\r\ndiv[name=\"htmlcontent\"] > blockquote small:before,\r\ndiv[name=\"htmlcontent\"] > blockquote .small:before {\r\n  content: '\\2014   \\A0';\r\n}\r\ndiv[name=\"htmlcontent\"] > .blockquote-reverse,\r\ndiv[name=\"htmlcontent\"] > blockquote.pull-right {\r\n  padding-right: 15px;\r\n  padding-left: 0;\r\n  text-align: right;\r\n  border-right: 5px solid #eee;\r\n  border-left: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > .blockquote-reverse footer:before,\r\ndiv[name=\"htmlcontent\"] > blockquote.pull-right footer:before,\r\ndiv[name=\"htmlcontent\"] > .blockquote-reverse small:before,\r\ndiv[name=\"htmlcontent\"] > blockquote.pull-right small:before,\r\ndiv[name=\"htmlcontent\"] > .blockquote-reverse .small:before,\r\ndiv[name=\"htmlcontent\"] > blockquote.pull-right .small:before {\r\n  content: '';\r\n}\r\ndiv[name=\"htmlcontent\"] > .blockquote-reverse footer:after,\r\ndiv[name=\"htmlcontent\"] > blockquote.pull-right footer:after,\r\ndiv[name=\"htmlcontent\"] > .blockquote-reverse small:after,\r\ndiv[name=\"htmlcontent\"] > blockquote.pull-right small:after,\r\ndiv[name=\"htmlcontent\"] > .blockquote-reverse .small:after,\r\ndiv[name=\"htmlcontent\"] > blockquote.pull-right .small:after {\r\n  content: '\\A0   \\2014';\r\n}\r\ndiv[name=\"htmlcontent\"] > blockquote:before,\r\ndiv[name=\"htmlcontent\"] > blockquote:after {\r\n  content: \"\";\r\n}\r\ndiv[name=\"htmlcontent\"] > address {\r\n  margin-bottom: 20px;\r\n  font-style: normal;\r\n  line-height: 1.428571429;\r\n}\r\ndiv[name=\"htmlcontent\"] > code,\r\ndiv[name=\"htmlcontent\"] > kbd,\r\ndiv[name=\"htmlcontent\"] > pre,\r\ndiv[name=\"htmlcontent\"] > samp {\r\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\r\n}\r\ndiv[name=\"htmlcontent\"] > code {\r\n  padding: 2px 4px;\r\n  font-size: 90%;\r\n  color: #c7254e;\r\n  white-space: nowrap;\r\n  background-color: #f9f2f4;\r\n  border-radius: 4px;\r\n}\r\ndiv[name=\"htmlcontent\"] > kbd {\r\n  padding: 2px 4px;\r\n  font-size: 90%;\r\n  color: #fff;\r\n  background-color: #333;\r\n  border-radius: 3px;\r\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\r\n}\r\ndiv[name=\"htmlcontent\"] > pre {\r\n  display: block;\r\n  padding: 9.5px;\r\n  margin: 0 0 10px;\r\n  font-size: 13px;\r\n  line-height: 1.428571429;\r\n  color: #333;\r\n  word-break: break-all;\r\n  word-wrap: break-word;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\ndiv[name=\"htmlcontent\"] > pre code {\r\n  padding: 0;\r\n  font-size: inherit;\r\n  color: inherit;\r\n  white-space: pre-wrap;\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n}\r\ndiv[name=\"htmlcontent\"] > .pre-scrollable {\r\n  max-height: 340px;\r\n  overflow-y: scroll;\r\n}\r\ndiv[name=\"htmlcontent\"] > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .container {\r\n    width: 750px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .container {\r\n    width: 970px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .container {\r\n    width: 1170px;\r\n  }\r\n}\r\n.container-fluid {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.row {\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\r\n  position: relative;\r\n  min-height: 1px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\r\n  float: left;\r\n}\r\n.col-xs-12 {\r\n  width: 100%;\r\n}\r\n.col-xs-11 {\r\n  width: 91.66666666666666%;\r\n}\r\n.col-xs-10 {\r\n  width: 83.33333333333334%;\r\n}\r\n.col-xs-9 {\r\n  width: 75%;\r\n}\r\n.col-xs-8 {\r\n  width: 66.66666666666666%;\r\n}\r\n.col-xs-7 {\r\n  width: 58.333333333333336%;\r\n}\r\n.col-xs-6 {\r\n  width: 50%;\r\n}\r\n.col-xs-5 {\r\n  width: 41.66666666666667%;\r\n}\r\n.col-xs-4 {\r\n  width: 33.33333333333333%;\r\n}\r\n.col-xs-3 {\r\n  width: 25%;\r\n}\r\n.col-xs-2 {\r\n  width: 16.666666666666664%;\r\n}\r\n.col-xs-1 {\r\n  width: 8.333333333333332%;\r\n}\r\n.col-xs-pull-12 {\r\n  right: 100%;\r\n}\r\n.col-xs-pull-11 {\r\n  right: 91.66666666666666%;\r\n}\r\n.col-xs-pull-10 {\r\n  right: 83.33333333333334%;\r\n}\r\n.col-xs-pull-9 {\r\n  right: 75%;\r\n}\r\n.col-xs-pull-8 {\r\n  right: 66.66666666666666%;\r\n}\r\n.col-xs-pull-7 {\r\n  right: 58.333333333333336%;\r\n}\r\n.col-xs-pull-6 {\r\n  right: 50%;\r\n}\r\n.col-xs-pull-5 {\r\n  right: 41.66666666666667%;\r\n}\r\n.col-xs-pull-4 {\r\n  right: 33.33333333333333%;\r\n}\r\n.col-xs-pull-3 {\r\n  right: 25%;\r\n}\r\n.col-xs-pull-2 {\r\n  right: 16.666666666666664%;\r\n}\r\n.col-xs-pull-1 {\r\n  right: 8.333333333333332%;\r\n}\r\n.col-xs-pull-0 {\r\n  right: 0;\r\n}\r\n.col-xs-push-12 {\r\n  left: 100%;\r\n}\r\n.col-xs-push-11 {\r\n  left: 91.66666666666666%;\r\n}\r\n.col-xs-push-10 {\r\n  left: 83.33333333333334%;\r\n}\r\n.col-xs-push-9 {\r\n  left: 75%;\r\n}\r\n.col-xs-push-8 {\r\n  left: 66.66666666666666%;\r\n}\r\n.col-xs-push-7 {\r\n  left: 58.333333333333336%;\r\n}\r\n.col-xs-push-6 {\r\n  left: 50%;\r\n}\r\n.col-xs-push-5 {\r\n  left: 41.66666666666667%;\r\n}\r\n.col-xs-push-4 {\r\n  left: 33.33333333333333%;\r\n}\r\n.col-xs-push-3 {\r\n  left: 25%;\r\n}\r\n.col-xs-push-2 {\r\n  left: 16.666666666666664%;\r\n}\r\n.col-xs-push-1 {\r\n  left: 8.333333333333332%;\r\n}\r\n.col-xs-push-0 {\r\n  left: 0;\r\n}\r\n.col-xs-offset-12 {\r\n  margin-left: 100%;\r\n}\r\n.col-xs-offset-11 {\r\n  margin-left: 91.66666666666666%;\r\n}\r\n.col-xs-offset-10 {\r\n  margin-left: 83.33333333333334%;\r\n}\r\n.col-xs-offset-9 {\r\n  margin-left: 75%;\r\n}\r\n.col-xs-offset-8 {\r\n  margin-left: 66.66666666666666%;\r\n}\r\n.col-xs-offset-7 {\r\n  margin-left: 58.333333333333336%;\r\n}\r\n.col-xs-offset-6 {\r\n  margin-left: 50%;\r\n}\r\n.col-xs-offset-5 {\r\n  margin-left: 41.66666666666667%;\r\n}\r\n.col-xs-offset-4 {\r\n  margin-left: 33.33333333333333%;\r\n}\r\n.col-xs-offset-3 {\r\n  margin-left: 25%;\r\n}\r\n.col-xs-offset-2 {\r\n  margin-left: 16.666666666666664%;\r\n}\r\n.col-xs-offset-1 {\r\n  margin-left: 8.333333333333332%;\r\n}\r\n.col-xs-offset-0 {\r\n  margin-left: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\r\n    float: left;\r\n  }\r\n  .col-sm-12 {\r\n    width: 100%;\r\n  }\r\n  .col-sm-11 {\r\n    width: 91.66666666666666%;\r\n  }\r\n  .col-sm-10 {\r\n    width: 83.33333333333334%;\r\n  }\r\n  .col-sm-9 {\r\n    width: 75%;\r\n  }\r\n  .col-sm-8 {\r\n    width: 66.66666666666666%;\r\n  }\r\n  .col-sm-7 {\r\n    width: 58.333333333333336%;\r\n  }\r\n  .col-sm-6 {\r\n    width: 50%;\r\n  }\r\n  .col-sm-5 {\r\n    width: 41.66666666666667%;\r\n  }\r\n  .col-sm-4 {\r\n    width: 33.33333333333333%;\r\n  }\r\n  .col-sm-3 {\r\n    width: 25%;\r\n  }\r\n  .col-sm-2 {\r\n    width: 16.666666666666664%;\r\n  }\r\n  .col-sm-1 {\r\n    width: 8.333333333333332%;\r\n  }\r\n  .col-sm-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .col-sm-pull-11 {\r\n    right: 91.66666666666666%;\r\n  }\r\n  .col-sm-pull-10 {\r\n    right: 83.33333333333334%;\r\n  }\r\n  .col-sm-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .col-sm-pull-8 {\r\n    right: 66.66666666666666%;\r\n  }\r\n  .col-sm-pull-7 {\r\n    right: 58.333333333333336%;\r\n  }\r\n  .col-sm-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .col-sm-pull-5 {\r\n    right: 41.66666666666667%;\r\n  }\r\n  .col-sm-pull-4 {\r\n    right: 33.33333333333333%;\r\n  }\r\n  .col-sm-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .col-sm-pull-2 {\r\n    right: 16.666666666666664%;\r\n  }\r\n  .col-sm-pull-1 {\r\n    right: 8.333333333333332%;\r\n  }\r\n  .col-sm-pull-0 {\r\n    right: 0;\r\n  }\r\n  .col-sm-push-12 {\r\n    left: 100%;\r\n  }\r\n  .col-sm-push-11 {\r\n    left: 91.66666666666666%;\r\n  }\r\n  .col-sm-push-10 {\r\n    left: 83.33333333333334%;\r\n  }\r\n  .col-sm-push-9 {\r\n    left: 75%;\r\n  }\r\n  .col-sm-push-8 {\r\n    left: 66.66666666666666%;\r\n  }\r\n  .col-sm-push-7 {\r\n    left: 58.333333333333336%;\r\n  }\r\n  .col-sm-push-6 {\r\n    left: 50%;\r\n  }\r\n  .col-sm-push-5 {\r\n    left: 41.66666666666667%;\r\n  }\r\n  .col-sm-push-4 {\r\n    left: 33.33333333333333%;\r\n  }\r\n  .col-sm-push-3 {\r\n    left: 25%;\r\n  }\r\n  .col-sm-push-2 {\r\n    left: 16.666666666666664%;\r\n  }\r\n  .col-sm-push-1 {\r\n    left: 8.333333333333332%;\r\n  }\r\n  .col-sm-push-0 {\r\n    left: 0;\r\n  }\r\n  .col-sm-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .col-sm-offset-11 {\r\n    margin-left: 91.66666666666666%;\r\n  }\r\n  .col-sm-offset-10 {\r\n    margin-left: 83.33333333333334%;\r\n  }\r\n  .col-sm-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .col-sm-offset-8 {\r\n    margin-left: 66.66666666666666%;\r\n  }\r\n  .col-sm-offset-7 {\r\n    margin-left: 58.333333333333336%;\r\n  }\r\n  .col-sm-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .col-sm-offset-5 {\r\n    margin-left: 41.66666666666667%;\r\n  }\r\n  .col-sm-offset-4 {\r\n    margin-left: 33.33333333333333%;\r\n  }\r\n  .col-sm-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .col-sm-offset-2 {\r\n    margin-left: 16.666666666666664%;\r\n  }\r\n  .col-sm-offset-1 {\r\n    margin-left: 8.333333333333332%;\r\n  }\r\n  .col-sm-offset-0 {\r\n    margin-left: 0;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\r\n    float: left;\r\n  }\r\n  .col-md-12 {\r\n    width: 100%;\r\n  }\r\n  .col-md-11 {\r\n    width: 91.66666666666666%;\r\n  }\r\n  .col-md-10 {\r\n    width: 83.33333333333334%;\r\n  }\r\n  .col-md-9 {\r\n    width: 75%;\r\n  }\r\n  .col-md-8 {\r\n    width: 66.66666666666666%;\r\n  }\r\n  .col-md-7 {\r\n    width: 58.333333333333336%;\r\n  }\r\n  .col-md-6 {\r\n    width: 50%;\r\n  }\r\n  .col-md-5 {\r\n    width: 41.66666666666667%;\r\n  }\r\n  .col-md-4 {\r\n    width: 33.33333333333333%;\r\n  }\r\n  .col-md-3 {\r\n    width: 25%;\r\n  }\r\n  .col-md-2 {\r\n    width: 16.666666666666664%;\r\n  }\r\n  .col-md-1 {\r\n    width: 8.333333333333332%;\r\n  }\r\n  .col-md-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .col-md-pull-11 {\r\n    right: 91.66666666666666%;\r\n  }\r\n  .col-md-pull-10 {\r\n    right: 83.33333333333334%;\r\n  }\r\n  .col-md-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .col-md-pull-8 {\r\n    right: 66.66666666666666%;\r\n  }\r\n  .col-md-pull-7 {\r\n    right: 58.333333333333336%;\r\n  }\r\n  .col-md-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .col-md-pull-5 {\r\n    right: 41.66666666666667%;\r\n  }\r\n  .col-md-pull-4 {\r\n    right: 33.33333333333333%;\r\n  }\r\n  .col-md-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .col-md-pull-2 {\r\n    right: 16.666666666666664%;\r\n  }\r\n  .col-md-pull-1 {\r\n    right: 8.333333333333332%;\r\n  }\r\n  .col-md-pull-0 {\r\n    right: 0;\r\n  }\r\n  .col-md-push-12 {\r\n    left: 100%;\r\n  }\r\n  .col-md-push-11 {\r\n    left: 91.66666666666666%;\r\n  }\r\n  .col-md-push-10 {\r\n    left: 83.33333333333334%;\r\n  }\r\n  .col-md-push-9 {\r\n    left: 75%;\r\n  }\r\n  .col-md-push-8 {\r\n    left: 66.66666666666666%;\r\n  }\r\n  .col-md-push-7 {\r\n    left: 58.333333333333336%;\r\n  }\r\n  .col-md-push-6 {\r\n    left: 50%;\r\n  }\r\n  .col-md-push-5 {\r\n    left: 41.66666666666667%;\r\n  }\r\n  .col-md-push-4 {\r\n    left: 33.33333333333333%;\r\n  }\r\n  .col-md-push-3 {\r\n    left: 25%;\r\n  }\r\n  .col-md-push-2 {\r\n    left: 16.666666666666664%;\r\n  }\r\n  .col-md-push-1 {\r\n    left: 8.333333333333332%;\r\n  }\r\n  .col-md-push-0 {\r\n    left: 0;\r\n  }\r\n  .col-md-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .col-md-offset-11 {\r\n    margin-left: 91.66666666666666%;\r\n  }\r\n  .col-md-offset-10 {\r\n    margin-left: 83.33333333333334%;\r\n  }\r\n  .col-md-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .col-md-offset-8 {\r\n    margin-left: 66.66666666666666%;\r\n  }\r\n  .col-md-offset-7 {\r\n    margin-left: 58.333333333333336%;\r\n  }\r\n  .col-md-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .col-md-offset-5 {\r\n    margin-left: 41.66666666666667%;\r\n  }\r\n  .col-md-offset-4 {\r\n    margin-left: 33.33333333333333%;\r\n  }\r\n  .col-md-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .col-md-offset-2 {\r\n    margin-left: 16.666666666666664%;\r\n  }\r\n  .col-md-offset-1 {\r\n    margin-left: 8.333333333333332%;\r\n  }\r\n  .col-md-offset-0 {\r\n    margin-left: 0;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\r\n    float: left;\r\n  }\r\n  .col-lg-12 {\r\n    width: 100%;\r\n  }\r\n  .col-lg-11 {\r\n    width: 91.66666666666666%;\r\n  }\r\n  .col-lg-10 {\r\n    width: 83.33333333333334%;\r\n  }\r\n  .col-lg-9 {\r\n    width: 75%;\r\n  }\r\n  .col-lg-8 {\r\n    width: 66.66666666666666%;\r\n  }\r\n  .col-lg-7 {\r\n    width: 58.333333333333336%;\r\n  }\r\n  .col-lg-6 {\r\n    width: 50%;\r\n  }\r\n  .col-lg-5 {\r\n    width: 41.66666666666667%;\r\n  }\r\n  .col-lg-4 {\r\n    width: 33.33333333333333%;\r\n  }\r\n  .col-lg-3 {\r\n    width: 25%;\r\n  }\r\n  .col-lg-2 {\r\n    width: 16.666666666666664%;\r\n  }\r\n  .col-lg-1 {\r\n    width: 8.333333333333332%;\r\n  }\r\n  .col-lg-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .col-lg-pull-11 {\r\n    right: 91.66666666666666%;\r\n  }\r\n  .col-lg-pull-10 {\r\n    right: 83.33333333333334%;\r\n  }\r\n  .col-lg-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .col-lg-pull-8 {\r\n    right: 66.66666666666666%;\r\n  }\r\n  .col-lg-pull-7 {\r\n    right: 58.333333333333336%;\r\n  }\r\n  .col-lg-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .col-lg-pull-5 {\r\n    right: 41.66666666666667%;\r\n  }\r\n  .col-lg-pull-4 {\r\n    right: 33.33333333333333%;\r\n  }\r\n  .col-lg-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .col-lg-pull-2 {\r\n    right: 16.666666666666664%;\r\n  }\r\n  .col-lg-pull-1 {\r\n    right: 8.333333333333332%;\r\n  }\r\n  .col-lg-pull-0 {\r\n    right: 0;\r\n  }\r\n  .col-lg-push-12 {\r\n    left: 100%;\r\n  }\r\n  .col-lg-push-11 {\r\n    left: 91.66666666666666%;\r\n  }\r\n  .col-lg-push-10 {\r\n    left: 83.33333333333334%;\r\n  }\r\n  .col-lg-push-9 {\r\n    left: 75%;\r\n  }\r\n  .col-lg-push-8 {\r\n    left: 66.66666666666666%;\r\n  }\r\n  .col-lg-push-7 {\r\n    left: 58.333333333333336%;\r\n  }\r\n  .col-lg-push-6 {\r\n    left: 50%;\r\n  }\r\n  .col-lg-push-5 {\r\n    left: 41.66666666666667%;\r\n  }\r\n  .col-lg-push-4 {\r\n    left: 33.33333333333333%;\r\n  }\r\n  .col-lg-push-3 {\r\n    left: 25%;\r\n  }\r\n  .col-lg-push-2 {\r\n    left: 16.666666666666664%;\r\n  }\r\n  .col-lg-push-1 {\r\n    left: 8.333333333333332%;\r\n  }\r\n  .col-lg-push-0 {\r\n    left: 0;\r\n  }\r\n  .col-lg-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .col-lg-offset-11 {\r\n    margin-left: 91.66666666666666%;\r\n  }\r\n  .col-lg-offset-10 {\r\n    margin-left: 83.33333333333334%;\r\n  }\r\n  .col-lg-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .col-lg-offset-8 {\r\n    margin-left: 66.66666666666666%;\r\n  }\r\n  .col-lg-offset-7 {\r\n    margin-left: 58.333333333333336%;\r\n  }\r\n  .col-lg-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .col-lg-offset-5 {\r\n    margin-left: 41.66666666666667%;\r\n  }\r\n  .col-lg-offset-4 {\r\n    margin-left: 33.33333333333333%;\r\n  }\r\n  .col-lg-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .col-lg-offset-2 {\r\n    margin-left: 16.666666666666664%;\r\n  }\r\n  .col-lg-offset-1 {\r\n    margin-left: 8.333333333333332%;\r\n  }\r\n  .col-lg-offset-0 {\r\n    margin-left: 0;\r\n  }\r\n}\r\ntable {\r\n  max-width: 100%;\r\n  background-color: transparent;\r\n}\r\nth {\r\n  text-align: left;\r\n}\r\n.table {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n.table > thead > tr > th,\r\n.table > tbody > tr > th,\r\n.table > tfoot > tr > th,\r\n.table > thead > tr > td,\r\n.table > tbody > tr > td,\r\n.table > tfoot > tr > td {\r\n  padding: 8px;\r\n  line-height: 1.428571429;\r\n  vertical-align: top;\r\n  border-top: 1px solid #ddd;\r\n}\r\n.table > thead > tr > th {\r\n  vertical-align: bottom;\r\n  border-bottom: 2px solid #ddd;\r\n}\r\n.table > caption + thead > tr:first-child > th,\r\n.table > colgroup + thead > tr:first-child > th,\r\n.table > thead:first-child > tr:first-child > th,\r\n.table > caption + thead > tr:first-child > td,\r\n.table > colgroup + thead > tr:first-child > td,\r\n.table > thead:first-child > tr:first-child > td {\r\n  border-top: 0;\r\n}\r\n.table > tbody + tbody {\r\n  border-top: 2px solid #ddd;\r\n}\r\n.table .table {\r\n  background-color: #fff;\r\n}\r\n.table-condensed > thead > tr > th,\r\n.table-condensed > tbody > tr > th,\r\n.table-condensed > tfoot > tr > th,\r\n.table-condensed > thead > tr > td,\r\n.table-condensed > tbody > tr > td,\r\n.table-condensed > tfoot > tr > td {\r\n  padding: 5px;\r\n}\r\n.table-bordered {\r\n  border: 1px solid #ddd;\r\n}\r\n.table-bordered > thead > tr > th,\r\n.table-bordered > tbody > tr > th,\r\n.table-bordered > tfoot > tr > th,\r\n.table-bordered > thead > tr > td,\r\n.table-bordered > tbody > tr > td,\r\n.table-bordered > tfoot > tr > td {\r\n  border: 1px solid #ddd;\r\n}\r\n.table-bordered > thead > tr > th,\r\n.table-bordered > thead > tr > td {\r\n  border-bottom-width: 2px;\r\n}\r\n.table-striped > tbody > tr:nth-child(odd) > td,\r\n.table-striped > tbody > tr:nth-child(odd) > th {\r\n  background-color: #f9f9f9;\r\n}\r\n.table-hover > tbody > tr:hover > td,\r\n.table-hover > tbody > tr:hover > th {\r\n  background-color: #f5f5f5;\r\n}\r\ntable col[class*=\"col-\"] {\r\n  position: static;\r\n  display: table-column;\r\n  float: none;\r\n}\r\ntable td[class*=\"col-\"],\r\ntable th[class*=\"col-\"] {\r\n  position: static;\r\n  display: table-cell;\r\n  float: none;\r\n}\r\n.table > thead > tr > td.active,\r\n.table > tbody > tr > td.active,\r\n.table > tfoot > tr > td.active,\r\n.table > thead > tr > th.active,\r\n.table > tbody > tr > th.active,\r\n.table > tfoot > tr > th.active,\r\n.table > thead > tr.active > td,\r\n.table > tbody > tr.active > td,\r\n.table > tfoot > tr.active > td,\r\n.table > thead > tr.active > th,\r\n.table > tbody > tr.active > th,\r\n.table > tfoot > tr.active > th {\r\n  background-color: #f5f5f5;\r\n}\r\n.table-hover > tbody > tr > td.active:hover,\r\n.table-hover > tbody > tr > th.active:hover,\r\n.table-hover > tbody > tr.active:hover > td,\r\n.table-hover > tbody > tr.active:hover > th {\r\n  background-color: #e8e8e8;\r\n}\r\n.table > thead > tr > td.success,\r\n.table > tbody > tr > td.success,\r\n.table > tfoot > tr > td.success,\r\n.table > thead > tr > th.success,\r\n.table > tbody > tr > th.success,\r\n.table > tfoot > tr > th.success,\r\n.table > thead > tr.success > td,\r\n.table > tbody > tr.success > td,\r\n.table > tfoot > tr.success > td,\r\n.table > thead > tr.success > th,\r\n.table > tbody > tr.success > th,\r\n.table > tfoot > tr.success > th {\r\n  background-color: #dff0d8;\r\n}\r\n.table-hover > tbody > tr > td.success:hover,\r\n.table-hover > tbody > tr > th.success:hover,\r\n.table-hover > tbody > tr.success:hover > td,\r\n.table-hover > tbody > tr.success:hover > th {\r\n  background-color: #d0e9c6;\r\n}\r\n.table > thead > tr > td.info,\r\n.table > tbody > tr > td.info,\r\n.table > tfoot > tr > td.info,\r\n.table > thead > tr > th.info,\r\n.table > tbody > tr > th.info,\r\n.table > tfoot > tr > th.info,\r\n.table > thead > tr.info > td,\r\n.table > tbody > tr.info > td,\r\n.table > tfoot > tr.info > td,\r\n.table > thead > tr.info > th,\r\n.table > tbody > tr.info > th,\r\n.table > tfoot > tr.info > th {\r\n  background-color: #d9edf7;\r\n}\r\n.table-hover > tbody > tr > td.info:hover,\r\n.table-hover > tbody > tr > th.info:hover,\r\n.table-hover > tbody > tr.info:hover > td,\r\n.table-hover > tbody > tr.info:hover > th {\r\n  background-color: #c4e3f3;\r\n}\r\n.table > thead > tr > td.warning,\r\n.table > tbody > tr > td.warning,\r\n.table > tfoot > tr > td.warning,\r\n.table > thead > tr > th.warning,\r\n.table > tbody > tr > th.warning,\r\n.table > tfoot > tr > th.warning,\r\n.table > thead > tr.warning > td,\r\n.table > tbody > tr.warning > td,\r\n.table > tfoot > tr.warning > td,\r\n.table > thead > tr.warning > th,\r\n.table > tbody > tr.warning > th,\r\n.table > tfoot > tr.warning > th {\r\n  background-color: #fcf8e3;\r\n}\r\n.table-hover > tbody > tr > td.warning:hover,\r\n.table-hover > tbody > tr > th.warning:hover,\r\n.table-hover > tbody > tr.warning:hover > td,\r\n.table-hover > tbody > tr.warning:hover > th {\r\n  background-color: #faf2cc;\r\n}\r\n.table > thead > tr > td.danger,\r\n.table > tbody > tr > td.danger,\r\n.table > tfoot > tr > td.danger,\r\n.table > thead > tr > th.danger,\r\n.table > tbody > tr > th.danger,\r\n.table > tfoot > tr > th.danger,\r\n.table > thead > tr.danger > td,\r\n.table > tbody > tr.danger > td,\r\n.table > tfoot > tr.danger > td,\r\n.table > thead > tr.danger > th,\r\n.table > tbody > tr.danger > th,\r\n.table > tfoot > tr.danger > th {\r\n  background-color: #f2dede;\r\n}\r\n.table-hover > tbody > tr > td.danger:hover,\r\n.table-hover > tbody > tr > th.danger:hover,\r\n.table-hover > tbody > tr.danger:hover > td,\r\n.table-hover > tbody > tr.danger:hover > th {\r\n  background-color: #ebcccc;\r\n}\r\n@media (max-width: 767px) {\r\n  .table-responsive {\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    border: 1px solid #ddd;\r\n  }\r\n  .table-responsive > .table {\r\n    margin-bottom: 0;\r\n  }\r\n  .table-responsive > .table > thead > tr > th,\r\n  .table-responsive > .table > tbody > tr > th,\r\n  .table-responsive > .table > tfoot > tr > th,\r\n  .table-responsive > .table > thead > tr > td,\r\n  .table-responsive > .table > tbody > tr > td,\r\n  .table-responsive > .table > tfoot > tr > td {\r\n    white-space: nowrap;\r\n  }\r\n  .table-responsive > .table-bordered {\r\n    border: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n    border-left: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n    border-right: 0;\r\n  }\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\r\n    border-bottom: 0;\r\n  }\r\n}\r\nfieldset {\r\n  min-width: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\nlegend {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin-bottom: 20px;\r\n  font-size: 21px;\r\n  line-height: inherit;\r\n  color: #333;\r\n  border: 0;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\nlabel {\r\n  display: inline-block;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n}\r\ninput[type=\"search\"] {\r\n  box-sizing: border-box;\r\n}\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n  margin: 4px 0 0;\r\n  margin-top: 1px \\9;\r\n  /* IE8-9 */\r\n  line-height: normal;\r\n}\r\ninput[type=\"file\"] {\r\n  display: block;\r\n}\r\ninput[type=\"range\"] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\nselect[multiple],\r\nselect[size] {\r\n  height: auto;\r\n}\r\ninput[type=\"file\"]:focus,\r\ninput[type=\"radio\"]:focus,\r\ninput[type=\"checkbox\"]:focus {\r\n  outline: thin dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\noutput {\r\n  display: block;\r\n  padding-top: 7px;\r\n  font-size: 14px;\r\n  line-height: 1.428571429;\r\n  color: #555;\r\n}\r\n.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  height: 34px;\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  line-height: 1.428571429;\r\n  color: #555;\r\n  background-color: #fff;\r\n  background-image: none;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\r\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n.form-control:focus {\r\n  border-color: #66afe9;\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\r\n}\r\n.form-control:-moz-placeholder {\r\n  color: #999;\r\n}\r\n.form-control::-moz-placeholder {\r\n  color: #999;\r\n  opacity: 1;\r\n}\r\n.form-control:-ms-input-placeholder {\r\n  color: #999;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n  color: #999;\r\n}\r\n.form-control[disabled],\r\n.form-control[readonly],\r\nfieldset[disabled] .form-control {\r\n  cursor: not-allowed;\r\n  background-color: #eee;\r\n  opacity: 1;\r\n}\r\ntextarea.form-control {\r\n  height: auto;\r\n}\r\ninput[type=\"date\"] {\r\n  line-height: 34px;\r\n}\r\n.form-group {\r\n  margin-bottom: 15px;\r\n}\r\n.radio,\r\n.checkbox {\r\n  display: block;\r\n  min-height: 20px;\r\n  padding-left: 20px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.radio label,\r\n.checkbox label {\r\n  display: inline;\r\n  font-weight: normal;\r\n  cursor: pointer;\r\n}\r\n.radio input[type=\"radio\"],\r\n.radio-inline input[type=\"radio\"],\r\n.checkbox input[type=\"checkbox\"],\r\n.checkbox-inline input[type=\"checkbox\"] {\r\n  float: left;\r\n  margin-left: -20px;\r\n}\r\n.radio + .radio,\r\n.checkbox + .checkbox {\r\n  margin-top: -5px;\r\n}\r\n.radio-inline,\r\n.checkbox-inline {\r\n  display: inline-block;\r\n  padding-left: 20px;\r\n  margin-bottom: 0;\r\n  font-weight: normal;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n.radio-inline + .radio-inline,\r\n.checkbox-inline + .checkbox-inline {\r\n  margin-top: 0;\r\n  margin-left: 10px;\r\n}\r\ninput[type=\"radio\"][disabled],\r\ninput[type=\"checkbox\"][disabled],\r\n.radio[disabled],\r\n.radio-inline[disabled],\r\n.checkbox[disabled],\r\n.checkbox-inline[disabled],\r\nfieldset[disabled] input[type=\"radio\"],\r\nfieldset[disabled] input[type=\"checkbox\"],\r\nfieldset[disabled] .radio,\r\nfieldset[disabled] .radio-inline,\r\nfieldset[disabled] .checkbox,\r\nfieldset[disabled] .checkbox-inline {\r\n  cursor: not-allowed;\r\n}\r\n.input-sm {\r\n  height: 30px;\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\nselect.input-sm {\r\n  height: 30px;\r\n  line-height: 30px;\r\n}\r\ntextarea.input-sm,\r\nselect[multiple].input-sm {\r\n  height: auto;\r\n}\r\n.input-lg {\r\n  height: 46px;\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.33;\r\n  border-radius: 6px;\r\n}\r\nselect.input-lg {\r\n  height: 46px;\r\n  line-height: 46px;\r\n}\r\ntextarea.input-lg,\r\nselect[multiple].input-lg {\r\n  height: auto;\r\n}\r\n.has-feedback {\r\n  position: relative;\r\n}\r\n.has-feedback .form-control {\r\n  padding-right: 42.5px;\r\n}\r\n.has-feedback .form-control-feedback {\r\n  position: absolute;\r\n  top: 25px;\r\n  right: 0;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-success .help-block,\r\n.has-success .control-label,\r\n.has-success .radio,\r\n.has-success .checkbox,\r\n.has-success .radio-inline,\r\n.has-success .checkbox-inline {\r\n  color: #3c763d;\r\n}\r\n.has-success .form-control {\r\n  border-color: #3c763d;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\r\n}\r\n.has-success .form-control:focus {\r\n  border-color: #2b542c;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\r\n}\r\n.has-success .input-group-addon {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n  border-color: #3c763d;\r\n}\r\n.has-success .form-control-feedback {\r\n  color: #3c763d;\r\n}\r\n.has-warning .help-block,\r\n.has-warning .control-label,\r\n.has-warning .radio,\r\n.has-warning .checkbox,\r\n.has-warning .radio-inline,\r\n.has-warning .checkbox-inline {\r\n  color: #8a6d3b;\r\n}\r\n.has-warning .form-control {\r\n  border-color: #8a6d3b;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\r\n}\r\n.has-warning .form-control:focus {\r\n  border-color: #66512c;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\r\n}\r\n.has-warning .input-group-addon {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n  border-color: #8a6d3b;\r\n}\r\n.has-warning .form-control-feedback {\r\n  color: #8a6d3b;\r\n}\r\n.has-error .help-block,\r\n.has-error .control-label,\r\n.has-error .radio,\r\n.has-error .checkbox,\r\n.has-error .radio-inline,\r\n.has-error .checkbox-inline {\r\n  color: #a94442;\r\n}\r\n.has-error .form-control {\r\n  border-color: #a94442;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\r\n}\r\n.has-error .form-control:focus {\r\n  border-color: #843534;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\r\n}\r\n.has-error .input-group-addon {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n  border-color: #a94442;\r\n}\r\n.has-error .form-control-feedback {\r\n  color: #a94442;\r\n}\r\n.form-control-static {\r\n  margin-bottom: 0;\r\n}\r\n.help-block {\r\n  display: block;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  color: #737373;\r\n}\r\n@media (min-width: 768px) {\r\n  .form-inline .form-group {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .form-control {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .control-label {\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .radio,\r\n  .form-inline .checkbox {\r\n    display: inline-block;\r\n    padding-left: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .radio input[type=\"radio\"],\r\n  .form-inline .checkbox input[type=\"checkbox\"] {\r\n    float: none;\r\n    margin-left: 0;\r\n  }\r\n  .form-inline .has-feedback .form-control-feedback {\r\n    top: 0;\r\n  }\r\n}\r\n.form-horizontal .control-label,\r\n.form-horizontal .radio,\r\n.form-horizontal .checkbox,\r\n.form-horizontal .radio-inline,\r\n.form-horizontal .checkbox-inline {\r\n  padding-top: 7px;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.form-horizontal .radio,\r\n.form-horizontal .checkbox {\r\n  min-height: 27px;\r\n}\r\n.form-horizontal .form-group {\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n.form-horizontal .form-control-static {\r\n  padding-top: 7px;\r\n}\r\n@media (min-width: 768px) {\r\n  .form-horizontal .control-label {\r\n    text-align: right;\r\n  }\r\n}\r\n.form-horizontal .has-feedback .form-control-feedback {\r\n  top: 0;\r\n  right: 15px;\r\n}\r\n.btn {\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 1.428571429;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n       -o-user-select: none;\r\n          user-select: none;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.btn:focus {\r\n  outline: thin dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.btn:hover,\r\n.btn:focus {\r\n  color: #333;\r\n  text-decoration: none;\r\n}\r\n.btn:active,\r\n.btn.active {\r\n  background-image: none;\r\n  outline: 0;\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\r\n}\r\n.btn.disabled,\r\n.btn[disabled],\r\nfieldset[disabled] .btn {\r\n  pointer-events: none;\r\n  cursor: not-allowed;\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\n.btn-default {\r\n  color: #333;\r\n  background-color: #fff;\r\n  border-color: #ccc;\r\n}\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default:active,\r\n.btn-default.active,\r\n.open .dropdown-toggle.btn-default {\r\n  color: #333;\r\n  background-color: #ebebeb;\r\n  border-color: #adadad;\r\n}\r\n.btn-default:active,\r\n.btn-default.active,\r\n.open .dropdown-toggle.btn-default {\r\n  background-image: none;\r\n}\r\n.btn-default.disabled,\r\n.btn-default[disabled],\r\nfieldset[disabled] .btn-default,\r\n.btn-default.disabled:hover,\r\n.btn-default[disabled]:hover,\r\nfieldset[disabled] .btn-default:hover,\r\n.btn-default.disabled:focus,\r\n.btn-default[disabled]:focus,\r\nfieldset[disabled] .btn-default:focus,\r\n.btn-default.disabled:active,\r\n.btn-default[disabled]:active,\r\nfieldset[disabled] .btn-default:active,\r\n.btn-default.disabled.active,\r\n.btn-default[disabled].active,\r\nfieldset[disabled] .btn-default.active {\r\n  background-color: #fff;\r\n  border-color: #ccc;\r\n}\r\n.btn-default .badge {\r\n  color: #fff;\r\n  background-color: #333;\r\n}\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open .dropdown-toggle.btn-primary {\r\n  color: #fff;\r\n  background-color: #3276b1;\r\n  border-color: #285e8e;\r\n}\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open .dropdown-toggle.btn-primary {\r\n  background-image: none;\r\n}\r\n.btn-primary.disabled,\r\n.btn-primary[disabled],\r\nfieldset[disabled] .btn-primary,\r\n.btn-primary.disabled:hover,\r\n.btn-primary[disabled]:hover,\r\nfieldset[disabled] .btn-primary:hover,\r\n.btn-primary.disabled:focus,\r\n.btn-primary[disabled]:focus,\r\nfieldset[disabled] .btn-primary:focus,\r\n.btn-primary.disabled:active,\r\n.btn-primary[disabled]:active,\r\nfieldset[disabled] .btn-primary:active,\r\n.btn-primary.disabled.active,\r\n.btn-primary[disabled].active,\r\nfieldset[disabled] .btn-primary.active {\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n.btn-primary .badge {\r\n  color: #428bca;\r\n  background-color: #fff;\r\n}\r\n.btn-success {\r\n  color: #fff;\r\n  background-color: #5cb85c;\r\n  border-color: #4cae4c;\r\n}\r\n.btn-success:hover,\r\n.btn-success:focus,\r\n.btn-success:active,\r\n.btn-success.active,\r\n.open .dropdown-toggle.btn-success {\r\n  color: #fff;\r\n  background-color: #47a447;\r\n  border-color: #398439;\r\n}\r\n.btn-success:active,\r\n.btn-success.active,\r\n.open .dropdown-toggle.btn-success {\r\n  background-image: none;\r\n}\r\n.btn-success.disabled,\r\n.btn-success[disabled],\r\nfieldset[disabled] .btn-success,\r\n.btn-success.disabled:hover,\r\n.btn-success[disabled]:hover,\r\nfieldset[disabled] .btn-success:hover,\r\n.btn-success.disabled:focus,\r\n.btn-success[disabled]:focus,\r\nfieldset[disabled] .btn-success:focus,\r\n.btn-success.disabled:active,\r\n.btn-success[disabled]:active,\r\nfieldset[disabled] .btn-success:active,\r\n.btn-success.disabled.active,\r\n.btn-success[disabled].active,\r\nfieldset[disabled] .btn-success.active {\r\n  background-color: #5cb85c;\r\n  border-color: #4cae4c;\r\n}\r\n.btn-success .badge {\r\n  color: #5cb85c;\r\n  background-color: #fff;\r\n}\r\n.btn-info {\r\n  color: #fff;\r\n  background-color: #5bc0de;\r\n  border-color: #46b8da;\r\n}\r\n.btn-info:hover,\r\n.btn-info:focus,\r\n.btn-info:active,\r\n.btn-info.active,\r\n.open .dropdown-toggle.btn-info {\r\n  color: #fff;\r\n  background-color: #39b3d7;\r\n  border-color: #269abc;\r\n}\r\n.btn-info:active,\r\n.btn-info.active,\r\n.open .dropdown-toggle.btn-info {\r\n  background-image: none;\r\n}\r\n.btn-info.disabled,\r\n.btn-info[disabled],\r\nfieldset[disabled] .btn-info,\r\n.btn-info.disabled:hover,\r\n.btn-info[disabled]:hover,\r\nfieldset[disabled] .btn-info:hover,\r\n.btn-info.disabled:focus,\r\n.btn-info[disabled]:focus,\r\nfieldset[disabled] .btn-info:focus,\r\n.btn-info.disabled:active,\r\n.btn-info[disabled]:active,\r\nfieldset[disabled] .btn-info:active,\r\n.btn-info.disabled.active,\r\n.btn-info[disabled].active,\r\nfieldset[disabled] .btn-info.active {\r\n  background-color: #5bc0de;\r\n  border-color: #46b8da;\r\n}\r\n.btn-info .badge {\r\n  color: #5bc0de;\r\n  background-color: #fff;\r\n}\r\n.btn-warning {\r\n  color: #fff;\r\n  background-color: #f0ad4e;\r\n  border-color: #eea236;\r\n}\r\n.btn-warning:hover,\r\n.btn-warning:focus,\r\n.btn-warning:active,\r\n.btn-warning.active,\r\n.open .dropdown-toggle.btn-warning {\r\n  color: #fff;\r\n  background-color: #ed9c28;\r\n  border-color: #d58512;\r\n}\r\n.btn-warning:active,\r\n.btn-warning.active,\r\n.open .dropdown-toggle.btn-warning {\r\n  background-image: none;\r\n}\r\n.btn-warning.disabled,\r\n.btn-warning[disabled],\r\nfieldset[disabled] .btn-warning,\r\n.btn-warning.disabled:hover,\r\n.btn-warning[disabled]:hover,\r\nfieldset[disabled] .btn-warning:hover,\r\n.btn-warning.disabled:focus,\r\n.btn-warning[disabled]:focus,\r\nfieldset[disabled] .btn-warning:focus,\r\n.btn-warning.disabled:active,\r\n.btn-warning[disabled]:active,\r\nfieldset[disabled] .btn-warning:active,\r\n.btn-warning.disabled.active,\r\n.btn-warning[disabled].active,\r\nfieldset[disabled] .btn-warning.active {\r\n  background-color: #f0ad4e;\r\n  border-color: #eea236;\r\n}\r\n.btn-warning .badge {\r\n  color: #f0ad4e;\r\n  background-color: #fff;\r\n}\r\n.btn-danger {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d43f3a;\r\n}\r\n.btn-danger:hover,\r\n.btn-danger:focus,\r\n.btn-danger:active,\r\n.btn-danger.active,\r\n.open .dropdown-toggle.btn-danger {\r\n  color: #fff;\r\n  background-color: #d2322d;\r\n  border-color: #ac2925;\r\n}\r\n.btn-danger:active,\r\n.btn-danger.active,\r\n.open .dropdown-toggle.btn-danger {\r\n  background-image: none;\r\n}\r\n.btn-danger.disabled,\r\n.btn-danger[disabled],\r\nfieldset[disabled] .btn-danger,\r\n.btn-danger.disabled:hover,\r\n.btn-danger[disabled]:hover,\r\nfieldset[disabled] .btn-danger:hover,\r\n.btn-danger.disabled:focus,\r\n.btn-danger[disabled]:focus,\r\nfieldset[disabled] .btn-danger:focus,\r\n.btn-danger.disabled:active,\r\n.btn-danger[disabled]:active,\r\nfieldset[disabled] .btn-danger:active,\r\n.btn-danger.disabled.active,\r\n.btn-danger[disabled].active,\r\nfieldset[disabled] .btn-danger.active {\r\n  background-color: #d9534f;\r\n  border-color: #d43f3a;\r\n}\r\n.btn-danger .badge {\r\n  color: #d9534f;\r\n  background-color: #fff;\r\n}\r\n.btn-link {\r\n  font-weight: normal;\r\n  color: #428bca;\r\n  cursor: pointer;\r\n  border-radius: 0;\r\n}\r\n.btn-link,\r\n.btn-link:active,\r\n.btn-link[disabled],\r\nfieldset[disabled] .btn-link {\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n}\r\n.btn-link,\r\n.btn-link:hover,\r\n.btn-link:focus,\r\n.btn-link:active {\r\n  border-color: transparent;\r\n}\r\n.btn-link:hover,\r\n.btn-link:focus {\r\n  color: #2a6496;\r\n  text-decoration: underline;\r\n  background-color: transparent;\r\n}\r\n.btn-link[disabled]:hover,\r\nfieldset[disabled] .btn-link:hover,\r\n.btn-link[disabled]:focus,\r\nfieldset[disabled] .btn-link:focus {\r\n  color: #999;\r\n  text-decoration: none;\r\n}\r\n.btn-lg {\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.33;\r\n  border-radius: 6px;\r\n}\r\n.btn-sm {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.btn-xs {\r\n  padding: 1px 5px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.btn-block {\r\n  display: block;\r\n  width: 100%;\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n.btn-block + .btn-block {\r\n  margin-top: 5px;\r\n}\r\ninput[type=\"submit\"].btn-block,\r\ninput[type=\"reset\"].btn-block,\r\ninput[type=\"button\"].btn-block {\r\n  width: 100%;\r\n}\r\n.fade {\r\n  opacity: 0;\r\n  transition: opacity .15s linear;\r\n}\r\n.fade.in {\r\n  opacity: 1;\r\n}\r\n.collapse {\r\n  display: none;\r\n}\r\n.collapse.in {\r\n  display: block;\r\n}\r\n.collapsing {\r\n  position: relative;\r\n  height: 0;\r\n  overflow: hidden;\r\n  transition: height .35s ease;\r\n}\r\n\r\n.caret {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 2px;\r\n  vertical-align: middle;\r\n  border-top: 4px solid;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n.dropdown {\r\n  position: relative;\r\n}\r\n.dropdown-toggle:focus {\r\n  outline: 0;\r\n}\r\n.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  float: left;\r\n  min-width: 160px;\r\n  padding: 5px 0;\r\n  margin: 2px 0 0;\r\n  font-size: 14px;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, .15);\r\n  border-radius: 4px;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n}\r\n.dropdown-menu.pull-right {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.dropdown-menu .divider {\r\n  height: 1px;\r\n  margin: 9px 0;\r\n  overflow: hidden;\r\n  background-color: #e5e5e5;\r\n}\r\n.dropdown-menu > li > a {\r\n  display: block;\r\n  padding: 3px 20px;\r\n  clear: both;\r\n  font-weight: normal;\r\n  line-height: 1.428571429;\r\n  color: #333;\r\n  white-space: nowrap;\r\n}\r\n.dropdown-menu > li > a:hover,\r\n.dropdown-menu > li > a:focus {\r\n  color: #262626;\r\n  text-decoration: none;\r\n  background-color: #f5f5f5;\r\n}\r\n.dropdown-menu > .active > a,\r\n.dropdown-menu > .active > a:hover,\r\n.dropdown-menu > .active > a:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #428bca;\r\n  outline: 0;\r\n}\r\n.dropdown-menu > .disabled > a,\r\n.dropdown-menu > .disabled > a:hover,\r\n.dropdown-menu > .disabled > a:focus {\r\n  color: #999;\r\n}\r\n.dropdown-menu > .disabled > a:hover,\r\n.dropdown-menu > .disabled > a:focus {\r\n  text-decoration: none;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n}\r\n.open > .dropdown-menu {\r\n  display: block;\r\n}\r\n.open > a {\r\n  outline: 0;\r\n}\r\n.dropdown-menu-right {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.dropdown-menu-left {\r\n  right: auto;\r\n  left: 0;\r\n}\r\n.dropdown-header {\r\n  display: block;\r\n  padding: 3px 20px;\r\n  font-size: 12px;\r\n  line-height: 1.428571429;\r\n  color: #999;\r\n}\r\n.dropdown-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 990;\r\n}\r\n.pull-right > .dropdown-menu {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.dropup .caret,\r\n.navbar-fixed-bottom .dropdown .caret {\r\n  content: \"\";\r\n  border-top: 0;\r\n  border-bottom: 4px solid;\r\n}\r\n.dropup .dropdown-menu,\r\n.navbar-fixed-bottom .dropdown .dropdown-menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n  margin-bottom: 1px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-right .dropdown-menu {\r\n    right: 0;\r\n    left: auto;\r\n  }\r\n  .navbar-right .dropdown-menu-left {\r\n    right: auto;\r\n    left: 0;\r\n  }\r\n}\r\n.btn-group,\r\n.btn-group-vertical {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.btn-group > .btn,\r\n.btn-group-vertical > .btn {\r\n  position: relative;\r\n  float: left;\r\n}\r\n.btn-group > .btn:hover,\r\n.btn-group-vertical > .btn:hover,\r\n.btn-group > .btn:focus,\r\n.btn-group-vertical > .btn:focus,\r\n.btn-group > .btn:active,\r\n.btn-group-vertical > .btn:active,\r\n.btn-group > .btn.active,\r\n.btn-group-vertical > .btn.active {\r\n  z-index: 2;\r\n}\r\n.btn-group > .btn:focus,\r\n.btn-group-vertical > .btn:focus {\r\n  outline: none;\r\n}\r\n.btn-group .btn + .btn,\r\n.btn-group .btn + .btn-group,\r\n.btn-group .btn-group + .btn,\r\n.btn-group .btn-group + .btn-group {\r\n  margin-left: -1px;\r\n}\r\n.btn-toolbar {\r\n  margin-left: -5px;\r\n}\r\n.btn-toolbar .btn-group,\r\n.btn-toolbar .input-group {\r\n  float: left;\r\n}\r\n.btn-toolbar > .btn,\r\n.btn-toolbar > .btn-group,\r\n.btn-toolbar > .input-group {\r\n  margin-left: 5px;\r\n}\r\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n  border-radius: 0;\r\n}\r\n.btn-group > .btn:first-child {\r\n  margin-left: 0;\r\n}\r\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.btn-group > .btn:last-child:not(:first-child),\r\n.btn-group > .dropdown-toggle:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.btn-group > .btn-group {\r\n  float: left;\r\n}\r\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n  border-radius: 0;\r\n}\r\n.btn-group > .btn-group:first-child > .btn:last-child,\r\n.btn-group > .btn-group:first-child > .dropdown-toggle {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.btn-group > .btn-group:last-child > .btn:first-child {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.btn-group .dropdown-toggle:active,\r\n.btn-group.open .dropdown-toggle {\r\n  outline: 0;\r\n}\r\n.btn-group-xs > .btn {\r\n  padding: 1px 5px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.btn-group-sm > .btn {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.btn-group-lg > .btn {\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.33;\r\n  border-radius: 6px;\r\n}\r\n.btn-group > .btn + .dropdown-toggle {\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n}\r\n.btn-group > .btn-lg + .dropdown-toggle {\r\n  padding-right: 12px;\r\n  padding-left: 12px;\r\n}\r\n.btn-group.open .dropdown-toggle {\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\r\n}\r\n.btn-group.open .dropdown-toggle.btn-link {\r\n  box-shadow: none;\r\n}\r\n.btn .caret {\r\n  margin-left: 0;\r\n}\r\n.btn-lg .caret {\r\n  border-width: 5px 5px 0;\r\n  border-bottom-width: 0;\r\n}\r\n.dropup .btn-lg .caret {\r\n  border-width: 0 5px 5px;\r\n}\r\n.btn-group-vertical > .btn,\r\n.btn-group-vertical > .btn-group,\r\n.btn-group-vertical > .btn-group > .btn {\r\n  display: block;\r\n  float: none;\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n.btn-group-vertical > .btn-group > .btn {\r\n  float: none;\r\n}\r\n.btn-group-vertical > .btn + .btn,\r\n.btn-group-vertical > .btn + .btn-group,\r\n.btn-group-vertical > .btn-group + .btn,\r\n.btn-group-vertical > .btn-group + .btn-group {\r\n  margin-top: -1px;\r\n  margin-left: 0;\r\n}\r\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n.btn-group-vertical > .btn:first-child:not(:last-child) {\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.btn-group-vertical > .btn:last-child:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n  border-radius: 0;\r\n}\r\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.btn-group-justified {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  border-collapse: separate;\r\n}\r\n.btn-group-justified > .btn,\r\n.btn-group-justified > .btn-group {\r\n  display: table-cell;\r\n  float: none;\r\n  width: 1%;\r\n}\r\n.btn-group-justified > .btn-group .btn {\r\n  width: 100%;\r\n}\r\n[data-toggle=\"buttons\"] > .btn > input[type=\"radio\"],\r\n[data-toggle=\"buttons\"] > .btn > input[type=\"checkbox\"] {\r\n  display: none;\r\n}\r\n.input-group {\r\n  position: relative;\r\n  display: table;\r\n  border-collapse: separate;\r\n}\r\n.input-group[class*=\"col-\"] {\r\n  float: none;\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n.input-group .form-control {\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n.input-group-lg > .form-control,\r\n.input-group-lg > .input-group-addon,\r\n.input-group-lg > .input-group-btn > .btn {\r\n  height: 46px;\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  line-height: 1.33;\r\n  border-radius: 6px;\r\n}\r\nselect.input-group-lg > .form-control,\r\nselect.input-group-lg > .input-group-addon,\r\nselect.input-group-lg > .input-group-btn > .btn {\r\n  height: 46px;\r\n  line-height: 46px;\r\n}\r\ntextarea.input-group-lg > .form-control,\r\ntextarea.input-group-lg > .input-group-addon,\r\ntextarea.input-group-lg > .input-group-btn > .btn,\r\nselect[multiple].input-group-lg > .form-control,\r\nselect[multiple].input-group-lg > .input-group-addon,\r\nselect[multiple].input-group-lg > .input-group-btn > .btn {\r\n  height: auto;\r\n}\r\n.input-group-sm > .form-control,\r\n.input-group-sm > .input-group-addon,\r\n.input-group-sm > .input-group-btn > .btn {\r\n  height: 30px;\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\nselect.input-group-sm > .form-control,\r\nselect.input-group-sm > .input-group-addon,\r\nselect.input-group-sm > .input-group-btn > .btn {\r\n  height: 30px;\r\n  line-height: 30px;\r\n}\r\ntextarea.input-group-sm > .form-control,\r\ntextarea.input-group-sm > .input-group-addon,\r\ntextarea.input-group-sm > .input-group-btn > .btn,\r\nselect[multiple].input-group-sm > .form-control,\r\nselect[multiple].input-group-sm > .input-group-addon,\r\nselect[multiple].input-group-sm > .input-group-btn > .btn {\r\n  height: auto;\r\n}\r\n.input-group-addon,\r\n.input-group-btn,\r\n.input-group .form-control {\r\n  display: table-cell;\r\n}\r\n.input-group-addon:not(:first-child):not(:last-child),\r\n.input-group-btn:not(:first-child):not(:last-child),\r\n.input-group .form-control:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n.input-group-addon,\r\n.input-group-btn {\r\n  width: 1%;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n}\r\n.input-group-addon {\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  color: #555;\r\n  text-align: center;\r\n  background-color: #eee;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n.input-group-addon.input-sm {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  border-radius: 3px;\r\n}\r\n.input-group-addon.input-lg {\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n  border-radius: 6px;\r\n}\r\n.input-group-addon input[type=\"radio\"],\r\n.input-group-addon input[type=\"checkbox\"] {\r\n  margin-top: 0;\r\n}\r\n.input-group .form-control:first-child,\r\n.input-group-addon:first-child,\r\n.input-group-btn:first-child > .btn,\r\n.input-group-btn:first-child > .btn-group > .btn,\r\n.input-group-btn:first-child > .dropdown-toggle,\r\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\r\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.input-group-addon:first-child {\r\n  border-right: 0;\r\n}\r\n.input-group .form-control:last-child,\r\n.input-group-addon:last-child,\r\n.input-group-btn:last-child > .btn,\r\n.input-group-btn:last-child > .btn-group > .btn,\r\n.input-group-btn:last-child > .dropdown-toggle,\r\n.input-group-btn:first-child > .btn:not(:first-child),\r\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.input-group-addon:last-child {\r\n  border-left: 0;\r\n}\r\n.input-group-btn {\r\n  position: relative;\r\n  font-size: 0;\r\n  white-space: nowrap;\r\n}\r\n.input-group-btn > .btn {\r\n  position: relative;\r\n}\r\n.input-group-btn > .btn + .btn {\r\n  margin-left: -1px;\r\n}\r\n.input-group-btn > .btn:hover,\r\n.input-group-btn > .btn:focus,\r\n.input-group-btn > .btn:active {\r\n  z-index: 2;\r\n}\r\n.input-group-btn:first-child > .btn,\r\n.input-group-btn:first-child > .btn-group {\r\n  margin-right: -1px;\r\n}\r\n.input-group-btn:last-child > .btn,\r\n.input-group-btn:last-child > .btn-group {\r\n  margin-left: -1px;\r\n}\r\n.nav {\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n.nav > li {\r\n  position: relative;\r\n  display: block;\r\n}\r\n.nav > li > a {\r\n  position: relative;\r\n  display: block;\r\n  padding: 10px 15px;\r\n}\r\n.nav > li > a:hover,\r\n.nav > li > a:focus {\r\n  text-decoration: none;\r\n  background-color: #eee;\r\n}\r\n.nav > li.disabled > a {\r\n  color: #999;\r\n}\r\n.nav > li.disabled > a:hover,\r\n.nav > li.disabled > a:focus {\r\n  color: #999;\r\n  text-decoration: none;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n.nav .open > a,\r\n.nav .open > a:hover,\r\n.nav .open > a:focus {\r\n  background-color: #eee;\r\n  border-color: #428bca;\r\n}\r\n.nav .nav-divider {\r\n  height: 1px;\r\n  margin: 9px 0;\r\n  overflow: hidden;\r\n  background-color: #e5e5e5;\r\n}\r\n.nav > li > a > img {\r\n  max-width: none;\r\n}\r\n.nav-tabs {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.nav-tabs > li {\r\n  float: left;\r\n  margin-bottom: -1px;\r\n}\r\n.nav-tabs > li > a {\r\n  margin-right: 2px;\r\n  line-height: 1.428571429;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n.nav-tabs > li > a:hover {\r\n  border-color: #eee #eee #ddd;\r\n}\r\n.nav-tabs > li.active > a,\r\n.nav-tabs > li.active > a:hover,\r\n.nav-tabs > li.active > a:focus {\r\n  color: #555;\r\n  cursor: default;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-bottom-color: transparent;\r\n}\r\n.nav-tabs.nav-justified {\r\n  width: 100%;\r\n  border-bottom: 0;\r\n}\r\n.nav-tabs.nav-justified > li {\r\n  float: none;\r\n}\r\n.nav-tabs.nav-justified > li > a {\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\r\n  top: auto;\r\n  left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .nav-tabs.nav-justified > li {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .nav-tabs.nav-justified > li > a {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n.nav-tabs.nav-justified > li > a {\r\n  margin-right: 0;\r\n  border-radius: 4px;\r\n}\r\n.nav-tabs.nav-justified > .active > a,\r\n.nav-tabs.nav-justified > .active > a:hover,\r\n.nav-tabs.nav-justified > .active > a:focus {\r\n  border: 1px solid #ddd;\r\n}\r\n@media (min-width: 768px) {\r\n  .nav-tabs.nav-justified > li > a {\r\n    border-bottom: 1px solid #ddd;\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n  .nav-tabs.nav-justified > .active > a,\r\n  .nav-tabs.nav-justified > .active > a:hover,\r\n  .nav-tabs.nav-justified > .active > a:focus {\r\n    border-bottom-color: #fff;\r\n  }\r\n}\r\n.nav-pills > li {\r\n  float: left;\r\n}\r\n.nav-pills > li > a {\r\n  border-radius: 4px;\r\n}\r\n.nav-pills > li + li {\r\n  margin-left: 2px;\r\n}\r\n.nav-pills > li.active > a,\r\n.nav-pills > li.active > a:hover,\r\n.nav-pills > li.active > a:focus {\r\n  color: #fff;\r\n  background-color: #428bca;\r\n}\r\n.nav-stacked > li {\r\n  float: none;\r\n}\r\n.nav-stacked > li + li {\r\n  margin-top: 2px;\r\n  margin-left: 0;\r\n}\r\n.nav-justified {\r\n  width: 100%;\r\n}\r\n.nav-justified > li {\r\n  float: none;\r\n}\r\n.nav-justified > li > a {\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n.nav-justified > .dropdown .dropdown-menu {\r\n  top: auto;\r\n  left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .nav-justified > li {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .nav-justified > li > a {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n.nav-tabs-justified {\r\n  border-bottom: 0;\r\n}\r\n.nav-tabs-justified > li > a {\r\n  margin-right: 0;\r\n  border-radius: 4px;\r\n}\r\n.nav-tabs-justified > .active > a,\r\n.nav-tabs-justified > .active > a:hover,\r\n.nav-tabs-justified > .active > a:focus {\r\n  border: 1px solid #ddd;\r\n}\r\n@media (min-width: 768px) {\r\n  .nav-tabs-justified > li > a {\r\n    border-bottom: 1px solid #ddd;\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n  .nav-tabs-justified > .active > a,\r\n  .nav-tabs-justified > .active > a:hover,\r\n  .nav-tabs-justified > .active > a:focus {\r\n    border-bottom-color: #fff;\r\n  }\r\n}\r\n.tab-content > .tab-pane {\r\n  display: none;\r\n}\r\n.tab-content > .active {\r\n  display: block;\r\n}\r\n.nav-tabs .dropdown-menu {\r\n  margin-top: -1px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.navbar {\r\n  position: relative;\r\n  min-height: 50px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid transparent;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar {\r\n    border-radius: 4px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-header {\r\n    float: left;\r\n  }\r\n}\r\n.navbar-collapse {\r\n  max-height: 340px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  overflow-x: visible;\r\n  -webkit-overflow-scrolling: touch;\r\n  border-top: 1px solid transparent;\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\r\n}\r\n.navbar-collapse.in {\r\n  overflow-y: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-collapse {\r\n    width: auto;\r\n    border-top: 0;\r\n    box-shadow: none;\r\n  }\r\n  .navbar-collapse.collapse {\r\n    display: block !important;\r\n    height: auto !important;\r\n    padding-bottom: 0;\r\n    overflow: visible !important;\r\n  }\r\n  .navbar-collapse.in {\r\n    overflow-y: visible;\r\n  }\r\n  .navbar-fixed-top .navbar-collapse,\r\n  .navbar-static-top .navbar-collapse,\r\n  .navbar-fixed-bottom .navbar-collapse {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n.container > .navbar-header,\r\n.container-fluid > .navbar-header,\r\n.container > .navbar-collapse,\r\n.container-fluid > .navbar-collapse {\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .container > .navbar-header,\r\n  .container-fluid > .navbar-header,\r\n  .container > .navbar-collapse,\r\n  .container-fluid > .navbar-collapse {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n}\r\n.navbar-static-top {\r\n  z-index: 1000;\r\n  border-width: 0 0 1px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-static-top {\r\n    border-radius: 0;\r\n  }\r\n}\r\n.navbar-fixed-top,\r\n.navbar-fixed-bottom {\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-fixed-top,\r\n  .navbar-fixed-bottom {\r\n    border-radius: 0;\r\n  }\r\n}\r\n.navbar-fixed-top {\r\n  top: 0;\r\n  border-width: 0 0 1px;\r\n}\r\n.navbar-fixed-bottom {\r\n  bottom: 0;\r\n  margin-bottom: 0;\r\n  border-width: 1px 0 0;\r\n}\r\n.navbar-brand {\r\n  float: left;\r\n  height: 20px;\r\n  padding: 15px 15px;\r\n  font-size: 18px;\r\n  line-height: 20px;\r\n}\r\n.navbar-brand:hover,\r\n.navbar-brand:focus {\r\n  text-decoration: none;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar > .container .navbar-brand,\r\n  .navbar > .container-fluid .navbar-brand {\r\n    margin-left: -15px;\r\n  }\r\n}\r\n.navbar-toggle {\r\n  position: relative;\r\n  float: right;\r\n  padding: 9px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 15px;\r\n  margin-bottom: 8px;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.navbar-toggle:focus {\r\n  outline: none;\r\n}\r\n.navbar-toggle .icon-bar {\r\n  display: block;\r\n  width: 22px;\r\n  height: 2px;\r\n  border-radius: 1px;\r\n}\r\n.navbar-toggle .icon-bar + .icon-bar {\r\n  margin-top: 4px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-toggle {\r\n    display: none;\r\n  }\r\n}\r\n.navbar-nav {\r\n  margin: 7.5px -15px;\r\n}\r\n.navbar-nav > li > a {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  line-height: 20px;\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-nav .open .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n    width: auto;\r\n    margin-top: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n    box-shadow: none;\r\n  }\r\n  .navbar-nav .open .dropdown-menu > li > a,\r\n  .navbar-nav .open .dropdown-menu .dropdown-header {\r\n    padding: 5px 15px 5px 25px;\r\n  }\r\n  .navbar-nav .open .dropdown-menu > li > a {\r\n    line-height: 20px;\r\n  }\r\n  .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    background-image: none;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-nav {\r\n    float: left;\r\n    margin: 0;\r\n  }\r\n  .navbar-nav > li {\r\n    float: left;\r\n  }\r\n  .navbar-nav > li > a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n  }\r\n  .navbar-nav.navbar-right:last-child {\r\n    margin-right: -15px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-left {\r\n    float: left !important;\r\n  }\r\n  .navbar-right {\r\n    float: right !important;\r\n  }\r\n}\r\n.navbar-form {\r\n  padding: 10px 15px;\r\n  margin-top: 8px;\r\n  margin-right: -15px;\r\n  margin-bottom: 8px;\r\n  margin-left: -15px;\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-form .form-group {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .form-control {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .control-label {\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .radio,\r\n  .navbar-form .checkbox {\r\n    display: inline-block;\r\n    padding-left: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .radio input[type=\"radio\"],\r\n  .navbar-form .checkbox input[type=\"checkbox\"] {\r\n    float: none;\r\n    margin-left: 0;\r\n  }\r\n  .navbar-form .has-feedback .form-control-feedback {\r\n    top: 0;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-form .form-group {\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-form {\r\n    width: auto;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    border: 0;\r\n    box-shadow: none;\r\n  }\r\n  .navbar-form.navbar-right:last-child {\r\n    margin-right: -15px;\r\n  }\r\n}\r\n.navbar-nav > li > .dropdown-menu {\r\n  margin-top: 0;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.navbar-btn {\r\n  margin-top: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n.navbar-btn.btn-sm {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.navbar-btn.btn-xs {\r\n  margin-top: 14px;\r\n  margin-bottom: 14px;\r\n}\r\n.navbar-text {\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-text {\r\n    float: left;\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n  }\r\n  .navbar-text.navbar-right:last-child {\r\n    margin-right: 0;\r\n  }\r\n}\r\n.navbar-default {\r\n  background-color: #f8f8f8;\r\n  border-color: #e7e7e7;\r\n}\r\n.navbar-default .navbar-brand {\r\n  color: #777;\r\n}\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  color: #5e5e5e;\r\n  background-color: transparent;\r\n}\r\n.navbar-default .navbar-text {\r\n  color: #777;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #777;\r\n}\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n  color: #333;\r\n  background-color: transparent;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #555;\r\n  background-color: #e7e7e7;\r\n}\r\n.navbar-default .navbar-nav > .disabled > a,\r\n.navbar-default .navbar-nav > .disabled > a:hover,\r\n.navbar-default .navbar-nav > .disabled > a:focus {\r\n  color: #ccc;\r\n  background-color: transparent;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: #ddd;\r\n}\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: #ddd;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #888;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border-color: #e7e7e7;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #555;\r\n  background-color: #e7e7e7;\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #777;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #333;\r\n    background-color: transparent;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #555;\r\n    background-color: #e7e7e7;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\r\n    color: #ccc;\r\n    background-color: transparent;\r\n  }\r\n}\r\n.navbar-default .navbar-link {\r\n  color: #777;\r\n}\r\n.navbar-default .navbar-link:hover {\r\n  color: #333;\r\n}\r\n.navbar-inverse {\r\n  background-color: #222;\r\n  border-color: #080808;\r\n}\r\n.navbar-inverse .navbar-brand {\r\n  color: #999;\r\n}\r\n.navbar-inverse .navbar-brand:hover,\r\n.navbar-inverse .navbar-brand:focus {\r\n  color: #fff;\r\n  background-color: transparent;\r\n}\r\n.navbar-inverse .navbar-text {\r\n  color: #999;\r\n}\r\n.navbar-inverse .navbar-nav > li > a {\r\n  color: #999;\r\n}\r\n.navbar-inverse .navbar-nav > li > a:hover,\r\n.navbar-inverse .navbar-nav > li > a:focus {\r\n  color: #fff;\r\n  background-color: transparent;\r\n}\r\n.navbar-inverse .navbar-nav > .active > a,\r\n.navbar-inverse .navbar-nav > .active > a:hover,\r\n.navbar-inverse .navbar-nav > .active > a:focus {\r\n  color: #fff;\r\n  background-color: #080808;\r\n}\r\n.navbar-inverse .navbar-nav > .disabled > a,\r\n.navbar-inverse .navbar-nav > .disabled > a:hover,\r\n.navbar-inverse .navbar-nav > .disabled > a:focus {\r\n  color: #444;\r\n  background-color: transparent;\r\n}\r\n.navbar-inverse .navbar-toggle {\r\n  border-color: #333;\r\n}\r\n.navbar-inverse .navbar-toggle:hover,\r\n.navbar-inverse .navbar-toggle:focus {\r\n  background-color: #333;\r\n}\r\n.navbar-inverse .navbar-toggle .icon-bar {\r\n  background-color: #fff;\r\n}\r\n.navbar-inverse .navbar-collapse,\r\n.navbar-inverse .navbar-form {\r\n  border-color: #101010;\r\n}\r\n.navbar-inverse .navbar-nav > .open > a,\r\n.navbar-inverse .navbar-nav > .open > a:hover,\r\n.navbar-inverse .navbar-nav > .open > a:focus {\r\n  color: #fff;\r\n  background-color: #080808;\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\r\n    border-color: #080808;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\r\n    background-color: #080808;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #999;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #fff;\r\n    background-color: transparent;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #fff;\r\n    background-color: #080808;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\r\n    color: #444;\r\n    background-color: transparent;\r\n  }\r\n}\r\n.navbar-inverse .navbar-link {\r\n  color: #999;\r\n}\r\n.navbar-inverse .navbar-link:hover {\r\n  color: #fff;\r\n}\r\n.breadcrumb {\r\n  padding: 8px 15px;\r\n  margin-bottom: 20px;\r\n  list-style: none;\r\n  background-color: #f5f5f5;\r\n  border-radius: 4px;\r\n}\r\n.breadcrumb > li {\r\n  display: inline-block;\r\n}\r\n.breadcrumb > li + li:before {\r\n  padding: 0 5px;\r\n  color: #ccc;\r\n  content: \"/\\A0\";\r\n}\r\n.breadcrumb > .active {\r\n  color: #999;\r\n}\r\n.pagination {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n  margin: 20px 0;\r\n  border-radius: 4px;\r\n}\r\n.pagination > li {\r\n  display: inline;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n  position: relative;\r\n  float: left;\r\n  padding: 6px 12px;\r\n  margin-left: -1px;\r\n  line-height: 1.428571429;\r\n  color: #428bca;\r\n  text-decoration: none;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n}\r\n.pagination > li:first-child > a,\r\n.pagination > li:first-child > span {\r\n  margin-left: 0;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.pagination > li:last-child > a,\r\n.pagination > li:last-child > span {\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n.pagination > li > a:hover,\r\n.pagination > li > span:hover,\r\n.pagination > li > a:focus,\r\n.pagination > li > span:focus {\r\n  color: #2a6496;\r\n  background-color: #eee;\r\n  border-color: #ddd;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > span,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span:hover,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > span:focus {\r\n  z-index: 2;\r\n  color: #fff;\r\n  cursor: default;\r\n  background-color: #428bca;\r\n  border-color: #428bca;\r\n}\r\n.pagination > .disabled > span,\r\n.pagination > .disabled > span:hover,\r\n.pagination > .disabled > span:focus,\r\n.pagination > .disabled > a,\r\n.pagination > .disabled > a:hover,\r\n.pagination > .disabled > a:focus {\r\n  color: #999;\r\n  cursor: not-allowed;\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n.pagination-lg > li > a,\r\n.pagination-lg > li > span {\r\n  padding: 10px 16px;\r\n  font-size: 18px;\r\n}\r\n.pagination-lg > li:first-child > a,\r\n.pagination-lg > li:first-child > span {\r\n  border-top-left-radius: 6px;\r\n  border-bottom-left-radius: 6px;\r\n}\r\n.pagination-lg > li:last-child > a,\r\n.pagination-lg > li:last-child > span {\r\n  border-top-right-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n}\r\n.pagination-sm > li > a,\r\n.pagination-sm > li > span {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n}\r\n.pagination-sm > li:first-child > a,\r\n.pagination-sm > li:first-child > span {\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.pagination-sm > li:last-child > a,\r\n.pagination-sm > li:last-child > span {\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.pager {\r\n  padding-left: 0;\r\n  margin: 20px 0;\r\n  text-align: center;\r\n  list-style: none;\r\n}\r\n.pager li {\r\n  display: inline;\r\n}\r\n.pager li > a,\r\n.pager li > span {\r\n  display: inline-block;\r\n  padding: 5px 14px;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 15px;\r\n}\r\n.pager li > a:hover,\r\n.pager li > a:focus {\r\n  text-decoration: none;\r\n  background-color: #eee;\r\n}\r\n.pager .next > a,\r\n.pager .next > span {\r\n  float: right;\r\n}\r\n.pager .previous > a,\r\n.pager .previous > span {\r\n  float: left;\r\n}\r\n.pager .disabled > a,\r\n.pager .disabled > a:hover,\r\n.pager .disabled > a:focus,\r\n.pager .disabled > span {\r\n  color: #999;\r\n  cursor: not-allowed;\r\n  background-color: #fff;\r\n}\r\n.label {\r\n  display: inline;\r\n  padding: .2em .6em .3em;\r\n  font-size: 75%;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: .25em;\r\n}\r\n.label[href]:hover,\r\n.label[href]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.label:empty {\r\n  display: none;\r\n}\r\n.btn .label {\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n.label-default {\r\n  background-color: #999;\r\n}\r\n.label-default[href]:hover,\r\n.label-default[href]:focus {\r\n  background-color: #808080;\r\n}\r\n.label-primary {\r\n  background-color: #428bca;\r\n}\r\n.label-primary[href]:hover,\r\n.label-primary[href]:focus {\r\n  background-color: #3071a9;\r\n}\r\n.label-success {\r\n  background-color: #5cb85c;\r\n}\r\n.label-success[href]:hover,\r\n.label-success[href]:focus {\r\n  background-color: #449d44;\r\n}\r\n.label-info {\r\n  background-color: #5bc0de;\r\n}\r\n.label-info[href]:hover,\r\n.label-info[href]:focus {\r\n  background-color: #31b0d5;\r\n}\r\n.label-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.label-warning[href]:hover,\r\n.label-warning[href]:focus {\r\n  background-color: #ec971f;\r\n}\r\n.label-danger {\r\n  background-color: #d9534f;\r\n}\r\n.label-danger[href]:hover,\r\n.label-danger[href]:focus {\r\n  background-color: #c9302c;\r\n}\r\n.badge {\r\n  display: inline-block;\r\n  min-width: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  background-color: #999;\r\n  border-radius: 10px;\r\n}\r\n.badge:empty {\r\n  display: none;\r\n}\r\n.btn .badge {\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n.btn-xs .badge {\r\n  top: 0;\r\n  padding: 1px 5px;\r\n}\r\na.badge:hover,\r\na.badge:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\na.list-group-item.active > .badge,\r\n.nav-pills > .active > a > .badge {\r\n  color: #428bca;\r\n  background-color: #fff;\r\n}\r\n.nav-pills > li > a > .badge {\r\n  margin-left: 3px;\r\n}\r\n.jumbotron {\r\n  padding: 30px;\r\n  margin-bottom: 30px;\r\n  color: inherit;\r\n  background-color: #eee;\r\n}\r\n.jumbotron h1,\r\n.jumbotron .h1 {\r\n  color: inherit;\r\n}\r\n.jumbotron p {\r\n  margin-bottom: 15px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n}\r\n.container .jumbotron {\r\n  border-radius: 6px;\r\n}\r\n.jumbotron .container {\r\n  max-width: 100%;\r\n}\r\n@media screen and (min-width: 768px) {\r\n  .jumbotron {\r\n    padding-top: 48px;\r\n    padding-bottom: 48px;\r\n  }\r\n  .container .jumbotron {\r\n    padding-right: 60px;\r\n    padding-left: 60px;\r\n  }\r\n  .jumbotron h1,\r\n  .jumbotron .h1 {\r\n    font-size: 63px;\r\n  }\r\n}\r\n.thumbnail {\r\n  display: block;\r\n  padding: 4px;\r\n  margin-bottom: 20px;\r\n  line-height: 1.428571429;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  transition: all .2s ease-in-out;\r\n}\r\n.thumbnail > img,\r\n.thumbnail a > img {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\na.thumbnail:hover,\r\na.thumbnail:focus,\r\na.thumbnail.active {\r\n  border-color: #428bca;\r\n}\r\n.thumbnail .caption {\r\n  padding: 9px;\r\n  color: #333;\r\n}\r\n.alert {\r\n  padding: 15px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.alert h4 {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n.alert .alert-link {\r\n  font-weight: bold;\r\n}\r\n.alert > p,\r\n.alert > ul {\r\n  margin-bottom: 0;\r\n}\r\n.alert > p + p {\r\n  margin-top: 5px;\r\n}\r\n.alert-dismissable {\r\n  padding-right: 35px;\r\n}\r\n.alert-dismissable .close {\r\n  position: relative;\r\n  top: -2px;\r\n  right: -21px;\r\n  color: inherit;\r\n}\r\n.alert-success {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n  border-color: #d6e9c6;\r\n}\r\n.alert-success hr {\r\n  border-top-color: #c9e2b3;\r\n}\r\n.alert-success .alert-link {\r\n  color: #2b542c;\r\n}\r\n.alert-info {\r\n  color: #31708f;\r\n  background-color: #d9edf7;\r\n  border-color: #bce8f1;\r\n}\r\n.alert-info hr {\r\n  border-top-color: #a6e1ec;\r\n}\r\n.alert-info .alert-link {\r\n  color: #245269;\r\n}\r\n.alert-warning {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n  border-color: #faebcc;\r\n}\r\n.alert-warning hr {\r\n  border-top-color: #f7e1b5;\r\n}\r\n.alert-warning .alert-link {\r\n  color: #66512c;\r\n}\r\n.alert-danger {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n  border-color: #ebccd1;\r\n}\r\n.alert-danger hr {\r\n  border-top-color: #e4b9c0;\r\n}\r\n.alert-danger .alert-link {\r\n  color: #843534;\r\n}\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 40px 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n.progress {\r\n  height: 20px;\r\n  margin-bottom: 20px;\r\n  overflow: hidden;\r\n  background-color: #f5f5f5;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\r\n}\r\n.progress-bar {\r\n  float: left;\r\n  width: 0;\r\n  height: 100%;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #428bca;\r\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\r\n  transition: width .6s ease;\r\n}\r\n.progress-striped .progress-bar {\r\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n  background-size: 40px 40px;\r\n}\r\n.progress.active .progress-bar {\r\n  animation: progress-bar-stripes 2s linear infinite;\r\n}\r\n.progress-bar-success {\r\n  background-color: #5cb85c;\r\n}\r\n.progress-striped .progress-bar-success {\r\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n.progress-bar-info {\r\n  background-color: #5bc0de;\r\n}\r\n.progress-striped .progress-bar-info {\r\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n.progress-bar-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.progress-striped .progress-bar-warning {\r\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n.progress-bar-danger {\r\n  background-color: #d9534f;\r\n}\r\n.progress-striped .progress-bar-danger {\r\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n.media,\r\n.media-body {\r\n  overflow: hidden;\r\n  zoom: 1;\r\n}\r\n.media,\r\n.media .media {\r\n  margin-top: 15px;\r\n}\r\n.media:first-child {\r\n  margin-top: 0;\r\n}\r\n.media-object {\r\n  display: block;\r\n}\r\n.media-heading {\r\n  margin: 0 0 5px;\r\n}\r\n.media > .pull-left {\r\n  margin-right: 10px;\r\n}\r\n.media > .pull-right {\r\n  margin-left: 10px;\r\n}\r\n.media-list {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.list-group {\r\n  padding-left: 0;\r\n  margin-bottom: 20px;\r\n}\r\n.list-group-item {\r\n  position: relative;\r\n  display: block;\r\n  padding: 10px 15px;\r\n  margin-bottom: -1px;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n}\r\n.list-group-item:first-child {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n}\r\n.list-group-item:last-child {\r\n  margin-bottom: 0;\r\n  border-bottom-right-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.list-group-item > .badge {\r\n  float: right;\r\n}\r\n.list-group-item > .badge + .badge {\r\n  margin-right: 5px;\r\n}\r\na.list-group-item {\r\n  color: #555;\r\n}\r\na.list-group-item .list-group-item-heading {\r\n  color: #333;\r\n}\r\na.list-group-item:hover,\r\na.list-group-item:focus {\r\n  text-decoration: none;\r\n  background-color: #f5f5f5;\r\n}\r\na.list-group-item.active,\r\na.list-group-item.active:hover,\r\na.list-group-item.active:focus {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: #428bca;\r\n  border-color: #428bca;\r\n}\r\na.list-group-item.active .list-group-item-heading,\r\na.list-group-item.active:hover .list-group-item-heading,\r\na.list-group-item.active:focus .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item.active .list-group-item-text,\r\na.list-group-item.active:hover .list-group-item-text,\r\na.list-group-item.active:focus .list-group-item-text {\r\n  color: #e1edf7;\r\n}\r\n.list-group-item-success {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n}\r\na.list-group-item-success {\r\n  color: #3c763d;\r\n}\r\na.list-group-item-success .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item-success:hover,\r\na.list-group-item-success:focus {\r\n  color: #3c763d;\r\n  background-color: #d0e9c6;\r\n}\r\na.list-group-item-success.active,\r\na.list-group-item-success.active:hover,\r\na.list-group-item-success.active:focus {\r\n  color: #fff;\r\n  background-color: #3c763d;\r\n  border-color: #3c763d;\r\n}\r\n.list-group-item-info {\r\n  color: #31708f;\r\n  background-color: #d9edf7;\r\n}\r\na.list-group-item-info {\r\n  color: #31708f;\r\n}\r\na.list-group-item-info .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item-info:hover,\r\na.list-group-item-info:focus {\r\n  color: #31708f;\r\n  background-color: #c4e3f3;\r\n}\r\na.list-group-item-info.active,\r\na.list-group-item-info.active:hover,\r\na.list-group-item-info.active:focus {\r\n  color: #fff;\r\n  background-color: #31708f;\r\n  border-color: #31708f;\r\n}\r\n.list-group-item-warning {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n}\r\na.list-group-item-warning {\r\n  color: #8a6d3b;\r\n}\r\na.list-group-item-warning .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item-warning:hover,\r\na.list-group-item-warning:focus {\r\n  color: #8a6d3b;\r\n  background-color: #faf2cc;\r\n}\r\na.list-group-item-warning.active,\r\na.list-group-item-warning.active:hover,\r\na.list-group-item-warning.active:focus {\r\n  color: #fff;\r\n  background-color: #8a6d3b;\r\n  border-color: #8a6d3b;\r\n}\r\n.list-group-item-danger {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n}\r\na.list-group-item-danger {\r\n  color: #a94442;\r\n}\r\na.list-group-item-danger .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item-danger:hover,\r\na.list-group-item-danger:focus {\r\n  color: #a94442;\r\n  background-color: #ebcccc;\r\n}\r\na.list-group-item-danger.active,\r\na.list-group-item-danger.active:hover,\r\na.list-group-item-danger.active:focus {\r\n  color: #fff;\r\n  background-color: #a94442;\r\n  border-color: #a94442;\r\n}\r\n.list-group-item-heading {\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.list-group-item-text {\r\n  margin-bottom: 0;\r\n  line-height: 1.3;\r\n}\r\n.panel {\r\n  margin-bottom: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\r\n}\r\n.panel-body {\r\n  padding: 15px;\r\n}\r\n.panel > .list-group {\r\n  margin-bottom: 0;\r\n}\r\n.panel > .list-group .list-group-item {\r\n  border-width: 1px 0;\r\n  border-radius: 0;\r\n}\r\n.panel > .list-group .list-group-item:first-child {\r\n  border-top: 0;\r\n}\r\n.panel > .list-group .list-group-item:last-child {\r\n  border-bottom: 0;\r\n}\r\n.panel > .list-group:first-child .list-group-item:first-child {\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n.panel > .list-group:last-child .list-group-item:last-child {\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.panel-heading + .list-group .list-group-item:first-child {\r\n  border-top-width: 0;\r\n}\r\n.panel > .table,\r\n.panel > .table-responsive > .table {\r\n  margin-bottom: 0;\r\n}\r\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\r\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\r\n  border-top-left-radius: 3px;\r\n}\r\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\r\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\r\n  border-top-right-radius: 3px;\r\n}\r\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\r\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\r\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.panel > .panel-body + .table,\r\n.panel > .panel-body + .table-responsive {\r\n  border-top: 1px solid #ddd;\r\n}\r\n.panel > .table > tbody:first-child > tr:first-child th,\r\n.panel > .table > tbody:first-child > tr:first-child td {\r\n  border-top: 0;\r\n}\r\n.panel > .table-bordered,\r\n.panel > .table-responsive > .table-bordered {\r\n  border: 0;\r\n}\r\n.panel > .table-bordered > thead > tr > th:first-child,\r\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n.panel > .table-bordered > tbody > tr > th:first-child,\r\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n.panel > .table-bordered > tfoot > tr > th:first-child,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n.panel > .table-bordered > thead > tr > td:first-child,\r\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n.panel > .table-bordered > tbody > tr > td:first-child,\r\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n.panel > .table-bordered > tfoot > tr > td:first-child,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n  border-left: 0;\r\n}\r\n.panel > .table-bordered > thead > tr > th:last-child,\r\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n.panel > .table-bordered > tbody > tr > th:last-child,\r\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n.panel > .table-bordered > tfoot > tr > th:last-child,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n.panel > .table-bordered > thead > tr > td:last-child,\r\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n.panel > .table-bordered > tbody > tr > td:last-child,\r\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n.panel > .table-bordered > tfoot > tr > td:last-child,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n  border-right: 0;\r\n}\r\n.panel > .table-bordered > thead > tr:first-child > th,\r\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\r\n.panel > .table-bordered > tbody > tr:first-child > th,\r\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th,\r\n.panel > .table-bordered > tfoot > tr:first-child > th,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr:first-child > th,\r\n.panel > .table-bordered > thead > tr:first-child > td,\r\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\r\n.panel > .table-bordered > tbody > tr:first-child > td,\r\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\r\n.panel > .table-bordered > tfoot > tr:first-child > td,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr:first-child > td {\r\n  border-top: 0;\r\n}\r\n.panel > .table-bordered > thead > tr:last-child > th,\r\n.panel > .table-responsive > .table-bordered > thead > tr:last-child > th,\r\n.panel > .table-bordered > tbody > tr:last-child > th,\r\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n.panel > .table-bordered > tfoot > tr:last-child > th,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th,\r\n.panel > .table-bordered > thead > tr:last-child > td,\r\n.panel > .table-responsive > .table-bordered > thead > tr:last-child > td,\r\n.panel > .table-bordered > tbody > tr:last-child > td,\r\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n.panel > .table-bordered > tfoot > tr:last-child > td,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td {\r\n  border-bottom: 0;\r\n}\r\n.panel > .table-responsive {\r\n  margin-bottom: 0;\r\n  border: 0;\r\n}\r\n.panel-heading {\r\n  padding: 10px 15px;\r\n  border-bottom: 1px solid transparent;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n.panel-heading > .dropdown .dropdown-toggle {\r\n  color: inherit;\r\n}\r\n.panel-title {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  color: inherit;\r\n}\r\n.panel-title > a {\r\n  color: inherit;\r\n}\r\n.panel-footer {\r\n  padding: 10px 15px;\r\n  background-color: #f5f5f5;\r\n  border-top: 1px solid #ddd;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.panel-group {\r\n  margin-bottom: 20px;\r\n}\r\n.panel-group .panel {\r\n  margin-bottom: 0;\r\n  overflow: hidden;\r\n  border-radius: 4px;\r\n}\r\n.panel-group .panel + .panel {\r\n  margin-top: 5px;\r\n}\r\n.panel-group .panel-heading {\r\n  border-bottom: 0;\r\n}\r\n.panel-group .panel-heading + .panel-collapse .panel-body {\r\n  border-top: 1px solid #ddd;\r\n}\r\n.panel-group .panel-footer {\r\n  border-top: 0;\r\n}\r\n.panel-group .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.panel-default {\r\n  border-color: #ddd;\r\n}\r\n.panel-default > .panel-heading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n.panel-default > .panel-heading + .panel-collapse .panel-body {\r\n  border-top-color: #ddd;\r\n}\r\n.panel-default > .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom-color: #ddd;\r\n}\r\n.panel-primary {\r\n  border-color: #428bca;\r\n}\r\n.panel-primary > .panel-heading {\r\n  color: #fff;\r\n  background-color: #428bca;\r\n  border-color: #428bca;\r\n}\r\n.panel-primary > .panel-heading + .panel-collapse .panel-body {\r\n  border-top-color: #428bca;\r\n}\r\n.panel-primary > .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom-color: #428bca;\r\n}\r\n.panel-success {\r\n  border-color: #d6e9c6;\r\n}\r\n.panel-success > .panel-heading {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n  border-color: #d6e9c6;\r\n}\r\n.panel-success > .panel-heading + .panel-collapse .panel-body {\r\n  border-top-color: #d6e9c6;\r\n}\r\n.panel-success > .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom-color: #d6e9c6;\r\n}\r\n.panel-info {\r\n  border-color: #bce8f1;\r\n}\r\n.panel-info > .panel-heading {\r\n  color: #31708f;\r\n  background-color: #d9edf7;\r\n  border-color: #bce8f1;\r\n}\r\n.panel-info > .panel-heading + .panel-collapse .panel-body {\r\n  border-top-color: #bce8f1;\r\n}\r\n.panel-info > .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom-color: #bce8f1;\r\n}\r\n.panel-warning {\r\n  border-color: #faebcc;\r\n}\r\n.panel-warning > .panel-heading {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n  border-color: #faebcc;\r\n}\r\n.panel-warning > .panel-heading + .panel-collapse .panel-body {\r\n  border-top-color: #faebcc;\r\n}\r\n.panel-warning > .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom-color: #faebcc;\r\n}\r\n.panel-danger {\r\n  border-color: #ebccd1;\r\n}\r\n.panel-danger > .panel-heading {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n  border-color: #ebccd1;\r\n}\r\n.panel-danger > .panel-heading + .panel-collapse .panel-body {\r\n  border-top-color: #ebccd1;\r\n}\r\n.panel-danger > .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom-color: #ebccd1;\r\n}\r\n.well {\r\n  min-height: 20px;\r\n  padding: 19px;\r\n  margin-bottom: 20px;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\r\n}\r\n.well blockquote {\r\n  border-color: #ddd;\r\n  border-color: rgba(0, 0, 0, .15);\r\n}\r\n.well-lg {\r\n  padding: 24px;\r\n  border-radius: 6px;\r\n}\r\n.well-sm {\r\n  padding: 9px;\r\n  border-radius: 3px;\r\n}\r\n.close {\r\n  float: right;\r\n  font-size: 21px;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #000;\r\n  text-shadow: 0 1px 0 #fff;\r\n  filter: alpha(opacity=20);\r\n  opacity: .2;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  filter: alpha(opacity=50);\r\n  opacity: .5;\r\n}\r\nbutton.close {\r\n  -webkit-appearance: none;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n}\r\n.modal-open {\r\n  overflow: hidden;\r\n}\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  -webkit-overflow-scrolling: touch;\r\n  outline: 0;\r\n}\r\n.modal.fade .modal-dialog {\r\n  transition:         transform .3s ease-out;\r\n  transform: translate(0, -25%);\r\n}\r\n.modal.in .modal-dialog {\r\n  transform: translate(0, 0);\r\n}\r\n.modal-dialog {\r\n  position: relative;\r\n  width: auto;\r\n  margin: 10px;\r\n}\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #999;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  border-radius: 6px;\r\n  outline: none;\r\n  box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\r\n}\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  background-color: #000;\r\n}\r\n.modal-backdrop.fade {\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n.modal-backdrop.in {\r\n  filter: alpha(opacity=50);\r\n  opacity: .5;\r\n}\r\n.modal-header {\r\n  min-height: 16.428571429px;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n.modal-header .close {\r\n  margin-top: -2px;\r\n}\r\n.modal-title {\r\n  margin: 0;\r\n  line-height: 1.428571429;\r\n}\r\n.modal-body {\r\n  position: relative;\r\n  padding: 20px;\r\n}\r\n.modal-footer {\r\n  padding: 19px 20px 20px;\r\n  margin-top: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n.modal-footer .btn + .btn {\r\n  margin-bottom: 0;\r\n  margin-left: 5px;\r\n}\r\n.modal-footer .btn-group .btn + .btn {\r\n  margin-left: -1px;\r\n}\r\n.modal-footer .btn-block + .btn-block {\r\n  margin-left: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .modal-dialog {\r\n    width: 600px;\r\n    margin: 30px auto;\r\n  }\r\n  .modal-content {\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\r\n  }\r\n  .modal-sm {\r\n    width: 300px;\r\n  }\r\n  .modal-lg {\r\n    width: 900px;\r\n  }\r\n}\r\n.tooltip {\r\n  position: absolute;\r\n  z-index: 1030;\r\n  display: block;\r\n  font-size: 12px;\r\n  line-height: 1.4;\r\n  visibility: visible;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n.tooltip.in {\r\n  filter: alpha(opacity=90);\r\n  opacity: .9;\r\n}\r\n.tooltip.top {\r\n  padding: 5px 0;\r\n  margin-top: -3px;\r\n}\r\n.tooltip.right {\r\n  padding: 0 5px;\r\n  margin-left: 3px;\r\n}\r\n.tooltip.bottom {\r\n  padding: 5px 0;\r\n  margin-top: 3px;\r\n}\r\n.tooltip.left {\r\n  padding: 0 5px;\r\n  margin-left: -3px;\r\n}\r\n.tooltip-inner {\r\n  max-width: 200px;\r\n  padding: 3px 8px;\r\n  color: #fff;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  background-color: #000;\r\n  border-radius: 4px;\r\n}\r\n.tooltip-arrow {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n.tooltip.top .tooltip-arrow {\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000;\r\n}\r\n.tooltip.top-left .tooltip-arrow {\r\n  bottom: 0;\r\n  left: 5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000;\r\n}\r\n.tooltip.top-right .tooltip-arrow {\r\n  right: 5px;\r\n  bottom: 0;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000;\r\n}\r\n.tooltip.right .tooltip-arrow {\r\n  top: 50%;\r\n  left: 0;\r\n  margin-top: -5px;\r\n  border-width: 5px 5px 5px 0;\r\n  border-right-color: #000;\r\n}\r\n.tooltip.left .tooltip-arrow {\r\n  top: 50%;\r\n  right: 0;\r\n  margin-top: -5px;\r\n  border-width: 5px 0 5px 5px;\r\n  border-left-color: #000;\r\n}\r\n.tooltip.bottom .tooltip-arrow {\r\n  top: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000;\r\n}\r\n.tooltip.bottom-left .tooltip-arrow {\r\n  top: 0;\r\n  left: 5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000;\r\n}\r\n.tooltip.bottom-right .tooltip-arrow {\r\n  top: 0;\r\n  right: 5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000;\r\n}\r\n.popover {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1010;\r\n  display: none;\r\n  max-width: 276px;\r\n  padding: 1px;\r\n  text-align: left;\r\n  white-space: normal;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  border-radius: 6px;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\r\n}\r\n.popover.top {\r\n  margin-top: -10px;\r\n}\r\n.popover.right {\r\n  margin-left: 10px;\r\n}\r\n.popover.bottom {\r\n  margin-top: 10px;\r\n}\r\n.popover.left {\r\n  margin-left: -10px;\r\n}\r\n.popover-title {\r\n  padding: 8px 14px;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 18px;\r\n  background-color: #f7f7f7;\r\n  border-bottom: 1px solid #ebebeb;\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n.popover-content {\r\n  padding: 9px 14px;\r\n}\r\n.popover .arrow,\r\n.popover .arrow:after {\r\n  position: absolute;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n.popover .arrow {\r\n  border-width: 11px;\r\n}\r\n.popover .arrow:after {\r\n  content: \"\";\r\n  border-width: 10px;\r\n}\r\n.popover.top .arrow {\r\n  bottom: -11px;\r\n  left: 50%;\r\n  margin-left: -11px;\r\n  border-top-color: #999;\r\n  border-top-color: rgba(0, 0, 0, .25);\r\n  border-bottom-width: 0;\r\n}\r\n.popover.top .arrow:after {\r\n  bottom: 1px;\r\n  margin-left: -10px;\r\n  content: \" \";\r\n  border-top-color: #fff;\r\n  border-bottom-width: 0;\r\n}\r\n.popover.right .arrow {\r\n  top: 50%;\r\n  left: -11px;\r\n  margin-top: -11px;\r\n  border-right-color: #999;\r\n  border-right-color: rgba(0, 0, 0, .25);\r\n  border-left-width: 0;\r\n}\r\n.popover.right .arrow:after {\r\n  bottom: -10px;\r\n  left: 1px;\r\n  content: \" \";\r\n  border-right-color: #fff;\r\n  border-left-width: 0;\r\n}\r\n.popover.bottom .arrow {\r\n  top: -11px;\r\n  left: 50%;\r\n  margin-left: -11px;\r\n  border-top-width: 0;\r\n  border-bottom-color: #999;\r\n  border-bottom-color: rgba(0, 0, 0, .25);\r\n}\r\n.popover.bottom .arrow:after {\r\n  top: 1px;\r\n  margin-left: -10px;\r\n  content: \" \";\r\n  border-top-width: 0;\r\n  border-bottom-color: #fff;\r\n}\r\n.popover.left .arrow {\r\n  top: 50%;\r\n  right: -11px;\r\n  margin-top: -11px;\r\n  border-right-width: 0;\r\n  border-left-color: #999;\r\n  border-left-color: rgba(0, 0, 0, .25);\r\n}\r\n.popover.left .arrow:after {\r\n  right: 1px;\r\n  bottom: -10px;\r\n  content: \" \";\r\n  border-right-width: 0;\r\n  border-left-color: #fff;\r\n}\r\n.carousel {\r\n  position: relative;\r\n}\r\n.carousel-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.carousel-inner > .item {\r\n  position: relative;\r\n  display: none;\r\n  transition: .6s ease-in-out left;\r\n}\r\n.carousel-inner > .item > img,\r\n.carousel-inner > .item > a > img {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n  line-height: 1;\r\n}\r\n.carousel-inner > .active,\r\n.carousel-inner > .next,\r\n.carousel-inner > .prev {\r\n  display: block;\r\n}\r\n.carousel-inner > .active {\r\n  left: 0;\r\n}\r\n.carousel-inner > .next,\r\n.carousel-inner > .prev {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n.carousel-inner > .next {\r\n  left: 100%;\r\n}\r\n.carousel-inner > .prev {\r\n  left: -100%;\r\n}\r\n.carousel-inner > .next.left,\r\n.carousel-inner > .prev.right {\r\n  left: 0;\r\n}\r\n.carousel-inner > .active.left {\r\n  left: -100%;\r\n}\r\n.carousel-inner > .active.right {\r\n  left: 100%;\r\n}\r\n.carousel-control {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 15%;\r\n  font-size: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\r\n  filter: alpha(opacity=50);\r\n  opacity: .5;\r\n}\r\n.carousel-control.left {\r\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\r\n  background-repeat: repeat-x;\r\n}\r\n.carousel-control.right {\r\n  right: 0;\r\n  left: auto;\r\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\r\n  background-repeat: repeat-x;\r\n}\r\n.carousel-control:hover,\r\n.carousel-control:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  filter: alpha(opacity=90);\r\n  outline: none;\r\n  opacity: .9;\r\n}\r\n.carousel-control .icon-prev,\r\n.carousel-control .icon-next,\r\n.carousel-control .glyphicon-chevron-left,\r\n.carousel-control .glyphicon-chevron-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  z-index: 5;\r\n  display: inline-block;\r\n}\r\n.carousel-control .icon-prev,\r\n.carousel-control .glyphicon-chevron-left {\r\n  left: 50%;\r\n}\r\n.carousel-control .icon-next,\r\n.carousel-control .glyphicon-chevron-right {\r\n  right: 50%;\r\n}\r\n.carousel-control .icon-prev,\r\n.carousel-control .icon-next {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-top: -10px;\r\n  margin-left: -10px;\r\n  font-family: serif;\r\n}\r\n.carousel-control .icon-prev:before {\r\n  content: '\\2039';\r\n}\r\n.carousel-control .icon-next:before {\r\n  content: '\\203A';\r\n}\r\n.carousel-indicators {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n  z-index: 15;\r\n  width: 60%;\r\n  padding-left: 0;\r\n  margin-left: -30%;\r\n  text-align: center;\r\n  list-style: none;\r\n}\r\n.carousel-indicators li {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 1px;\r\n  text-indent: -999px;\r\n  cursor: pointer;\r\n  background-color: #000 \\9;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border: 1px solid #fff;\r\n  border-radius: 10px;\r\n}\r\n.carousel-indicators .active {\r\n  width: 12px;\r\n  height: 12px;\r\n  margin: 0;\r\n  background-color: #fff;\r\n}\r\n.carousel-caption {\r\n  position: absolute;\r\n  right: 15%;\r\n  bottom: 20px;\r\n  left: 15%;\r\n  z-index: 10;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\r\n}\r\n.carousel-caption .btn {\r\n  text-shadow: none;\r\n}\r\n@media screen and (min-width: 768px) {\r\n  .carousel-control .glyphicons-chevron-left,\r\n  .carousel-control .glyphicons-chevron-right,\r\n  .carousel-control .icon-prev,\r\n  .carousel-control .icon-next {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-top: -15px;\r\n    margin-left: -15px;\r\n    font-size: 30px;\r\n  }\r\n  .carousel-caption {\r\n    right: 20%;\r\n    left: 20%;\r\n    padding-bottom: 30px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: 20px;\r\n  }\r\n}\r\n.clearfix:before,\r\n.clearfix:after,\r\n.container:before,\r\n.container:after,\r\n.container-fluid:before,\r\n.container-fluid:after,\r\n.row:before,\r\n.row:after,\r\n.form-horizontal .form-group:before,\r\n.form-horizontal .form-group:after,\r\n.btn-toolbar:before,\r\n.btn-toolbar:after,\r\n.btn-group-vertical > .btn-group:before,\r\n.btn-group-vertical > .btn-group:after,\r\n.nav:before,\r\n.nav:after,\r\n.navbar:before,\r\n.navbar:after,\r\n.navbar-header:before,\r\n.navbar-header:after,\r\n.navbar-collapse:before,\r\n.navbar-collapse:after,\r\n.pager:before,\r\n.pager:after,\r\n.panel-body:before,\r\n.panel-body:after,\r\n.modal-footer:before,\r\n.modal-footer:after {\r\n  display: table;\r\n  content: \" \";\r\n}\r\n.clearfix:after,\r\n.container:after,\r\n.container-fluid:after,\r\n.row:after,\r\n.form-horizontal .form-group:after,\r\n.btn-toolbar:after,\r\n.btn-group-vertical > .btn-group:after,\r\n.nav:after,\r\n.navbar:after,\r\n.navbar-header:after,\r\n.navbar-collapse:after,\r\n.pager:after,\r\n.panel-body:after,\r\n.modal-footer:after {\r\n  clear: both;\r\n}\r\n.center-block {\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.pull-right {\r\n  float: right !important;\r\n}\r\n.pull-left {\r\n  float: left !important;\r\n}\r\n.hide {\r\n  display: none !important;\r\n}\r\n.show {\r\n  display: block !important;\r\n}\r\n.invisible {\r\n  visibility: hidden;\r\n}\r\n.text-hide {\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.hidden {\r\n  display: none !important;\r\n  visibility: hidden !important;\r\n}\r\n.affix {\r\n  position: fixed;\r\n}\r\n@-ms-viewport {\r\n  width: device-width;\r\n}\r\n.visible-xs,\r\ntr.visible-xs,\r\nth.visible-xs,\r\ntd.visible-xs {\r\n  display: none !important;\r\n}\r\n@media (max-width: 767px) {\r\n  .visible-xs {\r\n    display: block !important;\r\n  }\r\n  table.visible-xs {\r\n    display: table;\r\n  }\r\n  tr.visible-xs {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-xs,\r\n  td.visible-xs {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n.visible-sm,\r\ntr.visible-sm,\r\nth.visible-sm,\r\ntd.visible-sm {\r\n  display: none !important;\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .visible-sm {\r\n    display: block !important;\r\n  }\r\n  table.visible-sm {\r\n    display: table;\r\n  }\r\n  tr.visible-sm {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-sm,\r\n  td.visible-sm {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n.visible-md,\r\ntr.visible-md,\r\nth.visible-md,\r\ntd.visible-md {\r\n  display: none !important;\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .visible-md {\r\n    display: block !important;\r\n  }\r\n  table.visible-md {\r\n    display: table;\r\n  }\r\n  tr.visible-md {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-md,\r\n  td.visible-md {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n.visible-lg,\r\ntr.visible-lg,\r\nth.visible-lg,\r\ntd.visible-lg {\r\n  display: none !important;\r\n}\r\n@media (min-width: 1200px) {\r\n  .visible-lg {\r\n    display: block !important;\r\n  }\r\n  table.visible-lg {\r\n    display: table;\r\n  }\r\n  tr.visible-lg {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-lg,\r\n  td.visible-lg {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .hidden-xs,\r\n  tr.hidden-xs,\r\n  th.hidden-xs,\r\n  td.hidden-xs {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .hidden-sm,\r\n  tr.hidden-sm,\r\n  th.hidden-sm,\r\n  td.hidden-sm {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .hidden-md,\r\n  tr.hidden-md,\r\n  th.hidden-md,\r\n  td.hidden-md {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .hidden-lg,\r\n  tr.hidden-lg,\r\n  th.hidden-lg,\r\n  td.hidden-lg {\r\n    display: none !important;\r\n  }\r\n}\r\n.visible-print,\r\ntr.visible-print,\r\nth.visible-print,\r\ntd.visible-print {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .visible-print {\r\n    display: block !important;\r\n  }\r\n  table.visible-print {\r\n    display: table;\r\n  }\r\n  tr.visible-print {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-print,\r\n  td.visible-print {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media print {\r\n  .hidden-print,\r\n  tr.hidden-print,\r\n  th.hidden-print,\r\n  td.hidden-print {\r\n    display: none !important;\r\n  }\r\n}", ""]);
	
	// exports


/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function NewsFactory($http) {
	
		var news = JSON.parse('[\n\t\t\t{\n\t\t\t\t"id": 1,\n\t\t\t\t"name": "Mb",\n\t\t\t\t"created_at": null,\n\t\t\t\t"updated_at": null\n\t\t\t},\n\t\t\t{\n\t\t\t\t"id": 2,\n\t\t\t\t"name": "px",\n\t\t\t\t"created_at": null,\n\t\t\t\t"updated_at": null\n\t\t\t},\n\t\t\t{\n\t\t\t\t"id": 3,\n\t\t\t\t"name": "zoom",\n\t\t\t\t"created_at": null,\n\t\t\t\t"updated_at": null\n\t\t\t}\n\t\t]');
	
		function get() {
	
			return news;
		}
	
		return {
	
			get: get
	
		};
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<h1>Новости</h1> <button ng-click=\"vm.disabled = !vm.disabled\" unselectable>Disable text-angular Toggle</button> <div text-angular=\"text-angular\" name=\"htmlcontent\" ng-model=\"vm.htmlcontent\" ta-disabled=\"vm.disabled\" ng-style=\"vm.bootstrap\"></div> <h1>Raw HTML in a text area</h1> <textarea ng-model=\"vm.htmlcontent\" style=\"width: 100%\"></textarea>";
	ngModule.run(["$templateCache",function(c){c.put("src/news/news.html",v1)}]);
	module.exports=v1;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map