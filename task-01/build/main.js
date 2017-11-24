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

var _list = __webpack_require__(2);

var _newsChannel = __webpack_require__(3);

var _newsChannel2 = _interopRequireDefault(_newsChannel);

var _toggleMenu = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var channelsListContainer = document.querySelector('#channels-list-container');
    var list = (0, _list.renderChannelList)(channelsListContainer);
    _config.config.forEach(function (newsChannel) {
        return new _newsChannel2.default(newsChannel).render(list);
    });
    var chooseChannelButton = document.querySelector('#choose-channel-button');
    (0, _toggleMenu.addToggle)();
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
    'source': 'bbc-news'
}, {
    'title': 'Daily Mail',
    'source': 'daily-mail'
}, {
    'title': 'News 3',
    'source': 'axios'
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderChannelList = renderChannelList;
function renderChannelList(container) {
    var listElement = document.createElement('ul');
    var list = container.appendChild(listElement);

    return list;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _listItem = __webpack_require__(4);

var _article = __webpack_require__(5);

var _newsContainer = __webpack_require__(6);

var _newsContainer2 = _interopRequireDefault(_newsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { articleTemplate } from '../templates/article.template';

var NewsChannel = function (_NewsContainer) {
    _inherits(NewsChannel, _NewsContainer);

    function NewsChannel(channelConfig) {
        _classCallCheck(this, NewsChannel);

        var _this = _possibleConstructorReturn(this, (NewsChannel.__proto__ || Object.getPrototypeOf(NewsChannel)).call(this));

        _this.title = channelConfig.title;
        _this.source = channelConfig.source;
        _this.newsSection = null;
        return _this;
    }

    _createClass(NewsChannel, [{
        key: 'getArticles',
        value: function getArticles() {
            _get(NewsChannel.prototype.__proto__ || Object.getPrototypeOf(NewsChannel.prototype), 'getArticles', this).call(this, this.source, this);
        }
    }, {
        key: 'renderChannelButton',
        value: function renderChannelButton(container) {
            var _this2 = this;

            var buttonElement = document.createElement('button');
            var button = container.appendChild(buttonElement);
            var buttonText = document.createTextNode(this.title);
            button.appendChild(buttonText);
            button.addEventListener('click', function () {
                _this2.getArticles();
            });
        }
    }, {
        key: 'render',
        value: function render(container) {
            var listItem = (0, _listItem.renderListItem)(container);
            this.renderChannelButton(listItem);
        }
    }, {
        key: 'renderNews',
        value: function renderNews(data, container) {
            //container.innerHTML = ``;
            var pageMarkup = '';
            data.forEach(function (article) {
                pageMarkup += (0, _article.renderArticle)(article);
            });
            container.innerHTML = pageMarkup;
        }
    }]);

    return NewsChannel;
}(_newsContainer2.default);

exports.default = NewsChannel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderListItem = renderListItem;
function renderListItem(list) {
    var listItemElement = document.createElement('li');
    var listItem = list.appendChild(listItemElement);

    return listItem;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderArticle = renderArticle;
function renderArticle(articleConfig) {
    return "\n        <div class=\"article\">\n            <div class=\"article-image-container\">\n                <img src=" + articleConfig.urlToImage + " />\n            </div>\n            <div class=\"article-text\">\n                <h3>\n                    <a href=\"" + articleConfig.url + "\" target=\"_blank\">" + articleConfig.title + "</a>\n                </h3>\n                <p class=\"article-description\">\n                    " + articleConfig.description + "\n                </p>\n                <div class=\"article-author\">\n                    " + articleConfig.author + "\n                </div>\n                <div class=\"article-date\">\n                    " + new Date(articleConfig.publishedAt).getDate() + "-" + (new Date(articleConfig.publishedAt).getMonth() + 1) + "-" + new Date(articleConfig.publishedAt).getFullYear() + "\n                </div>\n            </div>\n        </div>\n    ";
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _articlesApi = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newsContainer = function () {
    function newsContainer() {
        _classCallCheck(this, newsContainer);
    }

    _createClass(newsContainer, [{
        key: 'getArticles',
        value: function getArticles(key, section) {
            var _this = this;

            var articles = (0, _articlesApi.articlesApi)(key).then(function (response) {
                return response.json();
            }).then(function (data) {
                var container = _this.getArticlesContainer();
                section.renderNews(data.articles, container);
            });
        }
    }, {
        key: 'getArticlesContainer',
        value: function getArticlesContainer() {
            return document.querySelector('#news-container');
        }
    }]);

    return newsContainer;
}();

exports.default = newsContainer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.articlesApi = articlesApi;
function articlesApi(source) {
    return fetch('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=1de7e5223cf14337a6dd0e1330b80c7f', { method: 'GET' });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addToggle = addToggle;
function addToggle() {
    var toggles = document.querySelectorAll('[data-toggle-target]');
    Array.from(toggles).forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            var toggledElement = document.getElementById(toggle.dataset.toggleTarget);
            if (toggledElement.dataset.toggle === 'expanded') {
                toggledElement.classList.add('collapsed');
                toggledElement.classList.remove('expanded');
                toggledElement.dataset.toggle = 'collapsed';
            } else {
                toggledElement.classList.add('expanded');
                toggledElement.classList.remove('collapsed');
                toggledElement.dataset.toggle = 'expanded';
            }
        });
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map