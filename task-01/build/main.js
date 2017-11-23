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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _newsSection = __webpack_require__(2);

var _newsSection2 = _interopRequireDefault(_newsSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var root = document.querySelector('#root');
    _config.config.forEach(function (newsSection) {
        return new _newsSection2.default(newsSection).render(root);
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = exports.config = [{
    'title': 'BBC News',
    'key': 1
}, {
    'title': 'News 2',
    'key': 2
}, {
    'title': 'News 3',
    'key': 3
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _newsContainer = __webpack_require__(3);

var _newsContainer2 = _interopRequireDefault(_newsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsSection = function (_NewsContainer) {
    _inherits(NewsSection, _NewsContainer);

    function NewsSection(channelConfig) {
        _classCallCheck(this, NewsSection);

        var _this = _possibleConstructorReturn(this, (NewsSection.__proto__ || Object.getPrototypeOf(NewsSection)).call(this));

        _this.title = channelConfig.title;
        _this.key = channelConfig.key;
        _this.newsSection = null;
        return _this;
    }

    _createClass(NewsSection, [{
        key: 'getVideos',
        value: function getVideos() {
            _get(NewsSection.prototype.__proto__ || Object.getPrototypeOf(NewsSection.prototype), 'getVideos', this).call(this, this.key, this);
        }
    }, {
        key: 'addButton',
        value: function addButton(container) {
            var _this2 = this;

            var buttonElement = document.createElement('button');
            var button = container.appendChild(buttonElement);
            var buttonText = document.createTextNode(this.title);
            button.appendChild(buttonText);
            button.addEventListener('click', function () {
                _this2.getVideos();
            });
        }
    }, {
        key: 'render',
        value: function render(container) {
            var newsSectionElement = document.createElement('section');
            var newsSection = container.appendChild(newsSectionElement);
            this.newsSection = newsSection;

            this.addButton(newsSection);
        }
    }, {
        key: 'renderNews',
        value: function renderNews(data) {
            alert(this.title);
        }
    }]);

    return NewsSection;
}(_newsContainer2.default);

exports.default = NewsSection;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _videosApi = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newsContainer = function () {
    function newsContainer() {
        _classCallCheck(this, newsContainer);
    }

    _createClass(newsContainer, [{
        key: 'getVideos',
        value: function getVideos(key, section) {
            var videos = (0, _videosApi.videosApi)(key).then(function (response) {
                return response.json();
            }).then(function (data) {
                section.renderNews(data);
                // return data;
            });
        }
    }]);

    return newsContainer;
}();

exports.default = newsContainer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.videosApi = videosApi;
function videosApi(key) {
    return fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1de7e5223cf14337a6dd0e1330b80c7f', { method: 'GET' });
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map