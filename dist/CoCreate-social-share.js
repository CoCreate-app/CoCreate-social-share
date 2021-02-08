(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["socialShare"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["socialShare"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-social-share/src/CoCreate-social-share.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-social-share/src/CoCreate-social-share.js":
/*!*********************************************************************************!*\
  !*** ../CoCreate-components/CoCreate-social-share/src/CoCreate-social-share.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CoCreateSocialShare = {\n  //document_URL:'https://server.cocreate.app',\n  init: function init(selector) {\n    var _this = this;\n\n    console.log(this.document_URL);\n    selector = selector || 'a.share';\n    var elements = document.querySelectorAll(selector);\n    elements.forEach(function (el) {\n      return _this.initElement(el);\n    });\n  },\n  initElement: function initElement(el) {\n    var that = this;\n    el.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      var container = el.closest('.social_share');\n      var url = container.dataset['url'] || '';\n      if (url == '') url = el.dataset['url'] || '';\n      var document_URL = encodeURIComponent(url == '' ? document.URL : url);\n      var text = container.dataset['text'] || '';\n      if (text == '') text = el.dataset['text'] || '';\n      var text_URL = encodeURIComponent(text);\n      var title = container.dataset['title'] || '';\n      if (title == '') title = el.dataset['title'] || '';\n      var title_URL = encodeURIComponent(title == '' ? document.title : title);\n      var height = container.dataset['height'] || '';\n      if (height == '') height = el.dataset['height'] || '';\n      height = parseInt(height == '' ? 600 : height);\n      var width = container.dataset['width'] || '';\n      if (width == '') width = el.dataset['width'] || '';\n      width = parseInt(width == '' ? 500 : width);\n      var media = container.dataset['media'] || '';\n      if (media == '') media = el.dataset['media'] || '';\n      media = encodeURIComponent(media == '' ? '' : media);\n      var source = encodeURIComponent(document.URL);\n      var network = {};\n\n      switch (el.dataset['network']) {\n        case 'facebook':\n          network['url'] = 'https://www.facebook.com/sharer/sharer.php?display=popup&u=' + document_URL + '&title=' + title_URL;\n          break;\n\n        case 'twitter':\n          network['url'] = 'https://twitter.com/intent/tweet?text=' + text_URL + '&url=' + document_URL;\n          break;\n\n        case 'google':\n          network['url'] = 'https://plus.google.com/share?url=' + document_URL;\n          break;\n\n        case 'linkedin':\n          network['url'] = 'https://www.linkedin.com/shareArticle?mini=true&url=' + document_URL + '&title=' + title_URL + '&source=' + source;\n          break;\n\n        case 'pintrest':\n          network['url'] = 'https://www.pinterest.com/pin/create/button/?description=' + title_URL + '&url=' + document_URL + '&media=' + media + '&is_video=false';\n          break;\n      }\n\n      network['height'] = height;\n      network['width'] = width;\n      that.popup(network);\n    });\n  },\n  popup: function popup(network) {\n    var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';\n    window.open(network[\"url\"], '', options + 'height=' + network[\"height\"] + ',width=' + network[\"width\"]);\n  }\n};\nCoCreateSocialShare.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateSocialShare);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5zb2NpYWxTaGFyZS8uLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLXNvY2lhbC1zaGFyZS9zcmMvQ29DcmVhdGUtc29jaWFsLXNoYXJlLmpzPzllMDUiXSwibmFtZXMiOlsiQ29DcmVhdGVTb2NpYWxTaGFyZSIsImluaXQiLCJzZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudF9VUkwiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImluaXRFbGVtZW50IiwidGhhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiY2xvc2VzdCIsInVybCIsImRhdGFzZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJVUkwiLCJ0ZXh0IiwidGV4dF9VUkwiLCJ0aXRsZSIsInRpdGxlX1VSTCIsImhlaWdodCIsInBhcnNlSW50Iiwid2lkdGgiLCJtZWRpYSIsInNvdXJjZSIsIm5ldHdvcmsiLCJwb3B1cCIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLG1CQUFtQixHQUFHO0FBRXhCO0FBRUhDLE1BQUksRUFBRyxjQUFTQyxRQUFULEVBQWtCO0FBQUE7O0FBQ3JCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxZQUFqQjtBQUNBSCxZQUFRLEdBQUdBLFFBQVEsSUFBSSxTQUF2QjtBQUNBLFFBQUlJLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQk4sUUFBMUIsQ0FBZjtBQUNBSSxZQUFRLENBQUNHLE9BQVQsQ0FBaUIsVUFBQUMsRUFBRTtBQUFBLGFBQUUsS0FBSSxDQUFDQyxXQUFMLENBQWlCRCxFQUFqQixDQUFGO0FBQUEsS0FBbkI7QUFDSCxHQVQwQjtBQVczQkMsYUFBVyxFQUFHLHFCQUFVRCxFQUFWLEVBQWM7QUFDeEIsUUFBSUUsSUFB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LENBQUMsS0FBRCxDQUFQLEdBQWlCLHVDQUFxQzFCLFlBQXREO0FBQ0o7O0FBQ0EsYUFBSyxVQUFMO0FBQ0kwQixpQkFBTyxDQUFDLEtBQUQsQ0FBUCxHQUFpQix5REFBdUQxQixZQUF2RCxHQUFvRSxTQUFwRSxHQUE4RW9CLFNBQTlFLEdBQXdGLFVBQXhGLEdBQW1HSyxNQUFwSDtBQUNKOztBQUNBLGFBQUssVUFBTDtBQUNJQyxpQkFBTyxDQUFDLEtBQUQsQ0FBUCxHQUFpQiw4REFBOEROLFNBQTlELEdBQTBFLE9BQTFFLEdBQW9GcEIsWUFBcEYsR0FBaUcsU0FBakcsR0FBMkd3QixLQUEzRyxHQUFpSCxpQkFBbEk7QUFDTDtBQWZIOztBQWlCQUUsYUFBTyxDQUFDLFFBQUQsQ0FBUCxHQUFvQkwsTUFBcEI7QUFDQUssYUFBTyxDQUFDLE9BQUQsQ0FBUCxHQUFtQkgsS0FBbkI7QUFDQWhCLFVBQUksQ0FBQ29CLEtBQUwsQ0FBV0QsT0FBWDtBQUNILEtBekREO0FBMERILEdBdkUwQjtBQXlFM0JDLE9BQUssRUFBRyxlQUFTRCxPQUFULEVBQWlCO0FBQ3JCLFFBQUlFLE9BQU8sR0FBRyxxREFBZDtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWUosT0FBTyxDQUFDLEtBQUQsQ0FBbkIsRUFBNEIsRUFBNUIsRUFBZ0NFLE9BQU8sR0FBQyxTQUFSLEdBQWtCRixPQUFPLENBQUMsUUFBRCxDQUF6QixHQUFvQyxTQUFwQyxHQUE4Q0EsT0FBTyxDQUFDLE9BQUQsQ0FBckY7QUFDSDtBQTVFMEIsQ0FBNUI7QUFnRkEvQixtQkFBbUIsQ0FBQ0MsSUFBcEI7QUFDZUQsa0ZBQWYiLCJmaWxlIjoiLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS1zb2NpYWwtc2hhcmUvc3JjL0NvQ3JlYXRlLXNvY2lhbC1zaGFyZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvQ3JlYXRlU29jaWFsU2hhcmUgPSB7XG4gICAgXG4gICAgLy9kb2N1bWVudF9VUkw6J2h0dHBzOi8vc2VydmVyLmNvY3JlYXRlLmFwcCcsXG4gICAgXG5cdGluaXQgOiBmdW5jdGlvbihzZWxlY3Rvcil7XG5cdCAgICBjb25zb2xlLmxvZyh0aGlzLmRvY3VtZW50X1VSTClcblx0ICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJ2Euc2hhcmUnXG5cdCAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0ICAgIGVsZW1lbnRzLmZvckVhY2goZWw9PnRoaXMuaW5pdEVsZW1lbnQoZWwpKVxuXHR9LFxuXHRcblx0aW5pdEVsZW1lbnQgOiBmdW5jdGlvbiAoZWwpIHtcblx0ICAgIHZhciB0aGF0ID0gdGhpcztcblx0ICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7IFxuXHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgbGV0IGNvbnRhaW5lciA9IGVsLmNsb3Nlc3QoJy5zb2NpYWxfc2hhcmUnKTtcblx0XHRcdFxuXHQgICAgICAgIGxldCB1cmwgPSBjb250YWluZXIuZGF0YXNldFsndXJsJ10gfHwgJydcblx0ICAgICAgICBpZih1cmwgPT0gJycpXG5cdCAgICAgICAgXHR1cmwgPSBlbC5kYXRhc2V0Wyd1cmwnXSB8fCAnJ1xuXHQgICAgICAgIHZhciBkb2N1bWVudF9VUkwgICAgPSBlbmNvZGVVUklDb21wb25lbnQoKHVybD09JycpID8gZG9jdW1lbnQuVVJMIDogdXJsKTtcblx0ICAgICAgICBcblx0ICAgICAgICBsZXQgdGV4dCA9IGNvbnRhaW5lci5kYXRhc2V0Wyd0ZXh0J10gfHwgJydcblx0ICAgICAgICBpZih0ZXh0ID09ICcnKVxuXHQgICAgICAgIFx0dGV4dCA9IGVsLmRhdGFzZXRbJ3RleHQnXSB8fCAnJ1xuXHQgICAgICAgIHZhciB0ZXh0X1VSTCA9IGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KVxuXHQgICAgICAgIFxuXHQgICAgICAgIGxldCB0aXRsZSA9IGNvbnRhaW5lci5kYXRhc2V0Wyd0aXRsZSddIHx8ICcnXG5cdCAgICAgICAgaWYodGl0bGUgPT0gJycpXG5cdCAgICAgICAgXHR0aXRsZSA9IGVsLmRhdGFzZXRbJ3RpdGxlJ10gfHwgJydcblx0ICAgICAgICB2YXIgdGl0bGVfVVJMICAgID0gZW5jb2RlVVJJQ29tcG9uZW50KCh0aXRsZT09JycpID8gZG9jdW1lbnQudGl0bGUgOiB0aXRsZSk7XG5cblx0ICAgICAgICBsZXQgaGVpZ2h0ID0gY29udGFpbmVyLmRhdGFzZXRbJ2hlaWdodCddIHx8ICcnXG5cdCAgICAgICAgaWYoaGVpZ2h0ID09ICcnKVxuXHQgICAgICAgIFx0aGVpZ2h0ID0gZWwuZGF0YXNldFsnaGVpZ2h0J10gfHwgJydcblx0ICAgICAgICBoZWlnaHQgICAgPSBwYXJzZUludCgoaGVpZ2h0PT0nJykgPyA2MDAgOiBoZWlnaHQpO1xuXHQgICAgICAgIFxuXHQgICAgICAgIGxldCB3aWR0aCA9IGNvbnRhaW5lci5kYXRhc2V0Wyd3aWR0aCddIHx8ICcnXG5cdCAgICAgICAgaWYod2lkdGggPT0gJycpXG5cdCAgICAgICAgXHR3aWR0aCA9IGVsLmRhdGFzZXRbJ3dpZHRoJ10gfHwgJydcblx0ICAgICAgICB3aWR0aCAgICA9IHBhcnNlSW50KCh3aWR0aD09JycpID8gNTAwIDogd2lkdGgpO1xuXHQgICAgICAgIFxuXHQgICAgICAgIGxldCBtZWRpYSA9IGNvbnRhaW5lci5kYXRhc2V0WydtZWRpYSddIHx8ICcnXG5cdCAgICAgICAgaWYobWVkaWEgPT0gJycpXG5cdCAgICAgICAgXHRtZWRpYSA9IGVsLmRhdGFzZXRbJ21lZGlhJ10gfHwgJydcblx0ICAgICAgICBtZWRpYSAgICA9IGVuY29kZVVSSUNvbXBvbmVudCgobWVkaWE9PScnKSA/ICcnIDogbWVkaWEpO1xuXG5cdFx0XHRsZXQgc291cmNlID0gZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LlVSTCk7XG5cdFx0XHRcbiAgICBcdCAgICB2YXIgbmV0d29yayA9IHt9O1xuICAgIFx0ICAgIHN3aXRjaCAoZWwuZGF0YXNldFsnbmV0d29yayddKSB7XG4gICAgXHQgICAgICAgIGNhc2UgJ2ZhY2Vib29rJzpcbiAgICBcdCAgICAgICAgICAgIG5ldHdvcmtbJ3VybCddID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD9kaXNwbGF5PXBvcHVwJnU9Jytkb2N1bWVudF9VUkwrJyZ0aXRsZT0nK3RpdGxlX1VSTFxuICAgIFx0ICAgICAgICBicmVhaztcbiAgICBcdCAgICAgICAgY2FzZSAndHdpdHRlcic6XG4gICAgXHQgICAgICAgICAgICBuZXR3b3JrWyd1cmwnXSA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PScrdGV4dF9VUkwrJyZ1cmw9Jytkb2N1bWVudF9VUkxcbiAgICBcdCAgICAgICAgYnJlYWs7XG4gICAgXHQgICAgICAgIGNhc2UgJ2dvb2dsZSc6XG4gICAgXHQgICAgICAgICAgICBuZXR3b3JrWyd1cmwnXSA9ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9Jytkb2N1bWVudF9VUkxcbiAgICBcdCAgICAgICAgYnJlYWs7XG4gICAgXHQgICAgICAgIGNhc2UgJ2xpbmtlZGluJzpcbiAgICBcdCAgICAgICAgICAgIG5ldHdvcmtbJ3VybCddID0gJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD0nK2RvY3VtZW50X1VSTCsnJnRpdGxlPScrdGl0bGVfVVJMKycmc291cmNlPScrc291cmNlO1xuICAgIFx0ICAgICAgICBicmVhaztcbiAgICBcdCAgICAgICAgY2FzZSAncGludHJlc3QnOlxuICAgIFx0ICAgICAgICAgICAgbmV0d29ya1sndXJsJ10gPSAnaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/ZGVzY3JpcHRpb249JyArIHRpdGxlX1VSTCArICcmdXJsPScgKyBkb2N1bWVudF9VUkwrJyZtZWRpYT0nK21lZGlhKycmaXNfdmlkZW89ZmFsc2UnXG4gICAgXHQgICAgICAgYnJlYWs7XG4gICAgXHQgICAgfVxuICAgIFx0ICAgIG5ldHdvcmtbJ2hlaWdodCddID0gaGVpZ2h0O1xuICAgIFx0ICAgIG5ldHdvcmtbJ3dpZHRoJ10gPSB3aWR0aDtcbiAgICBcdCAgICB0aGF0LnBvcHVwKG5ldHdvcmspXG5cdCAgICB9KTsgICBcblx0fSxcblx0XG5cdHBvcHVwIDogZnVuY3Rpb24obmV0d29yayl7XG5cdCAgICB2YXIgb3B0aW9ucyA9ICdtZW51YmFyPW5vLHRvb2xiYXI9bm8scmVzaXphYmxlPXllcyxzY3JvbGxiYXJzPXllcywnO1xuXHQgICAgd2luZG93Lm9wZW4obmV0d29ya1tcInVybFwiXSwgJycsIG9wdGlvbnMrJ2hlaWdodD0nK25ldHdvcmtbXCJoZWlnaHRcIl0rJyx3aWR0aD0nK25ldHdvcmtbXCJ3aWR0aFwiXSk7XG5cdH1cblxufVxuXG5Db0NyZWF0ZVNvY2lhbFNoYXJlLmluaXQoKTtcbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlU29jaWFsU2hhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-social-share/src/CoCreate-social-share.js\n");

/***/ })

/******/ })["default"];
});