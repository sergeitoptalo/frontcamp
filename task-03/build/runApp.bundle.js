webpackJsonp([0],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_list__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_newsChannel__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_menuToggle__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_app_on_scss__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_app_on_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_app_on_scss__);
let config = __webpack_require__ (334);





let configArray = [];
Object.keys(config).forEach(key => {
    configArray.push({ 'title': key, 'source': config[key]})
});

/* harmony default export */ __webpack_exports__["default"] = (() => {
    let channelsListContainer = document.querySelector('#channels-list-container');
    let channelsList = Object(__WEBPACK_IMPORTED_MODULE_0__containers_list__["a" /* renderChannelList */])(channelsListContainer);

    configArray.forEach(newsChannel => new __WEBPACK_IMPORTED_MODULE_1__components_newsChannel__["a" /* default */](newsChannel).render(channelsList));

    let chooseChannelButton = document.querySelector('#choose-channel-button');
    let toggles = document.querySelectorAll('[data-toggle-target]');

    [...toggles].forEach(toggle => new __WEBPACK_IMPORTED_MODULE_2__utilities_menuToggle__["a" /* default */](toggle).createToggle());
    console.log('News app is running');
});


/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = {

    "BBC News": "bbc-news",

    "Daily Mail": "daily-mail",

    "Google News": "google-news",

    "National Geographic": "national-geographic",

}


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderChannelList;
function renderChannelList(container) {
    let listElement = document.createElement('ul');
    let list = container.appendChild(listElement);

    return list;
}


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_newsContainer__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_listItem__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_article_template__ = __webpack_require__(340);




class NewsChannel extends __WEBPACK_IMPORTED_MODULE_0__containers_newsContainer__["a" /* default */] {
    constructor({ title, source } = channelConfig) {
        super();
        this.title = title;
        this.source = source;
        this.newsSection = null;
    }

    getArticles() {
        super.getArticles(this.source, this);
    }

    renderChannelButton(container) {
        let buttonElement = document.createElement('button');
        let button = container.appendChild(buttonElement);
        let buttonText = document.createTextNode(this.title);
        button.appendChild(buttonText);
        button.addEventListener('click', () => { this.getArticles() });
    }

    renderNews(data, container) {
        let pageMarkup = ``;
        data.forEach(article => {
            pageMarkup += Object(__WEBPACK_IMPORTED_MODULE_2__templates_article_template__["a" /* renderArticle */])(article);
        });
        container.innerHTML = pageMarkup;
    }

    render(container) {
        let listItem = Object(__WEBPACK_IMPORTED_MODULE_1__containers_listItem__["a" /* renderListItem */])(container);
        this.renderChannelButton(listItem);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NewsChannel;



/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_articlesApi__ = __webpack_require__(338);


class newsContainer {
    constructor() {
        this.apiKey = '1de7e5223cf14337a6dd0e1330b80c7f';
    }
    
    getArticles(source, section) {
        let articles = Object(__WEBPACK_IMPORTED_MODULE_0__api_articlesApi__["a" /* articlesApi */])(source, this.apiKey)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let container = this.getArticlesContainer();
            let { articles } = data;
            section.renderNews(articles, container);
        })
    }

    getArticlesContainer() {
        return document.querySelector('#news-container');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = newsContainer;



/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = articlesApi;
function articlesApi(source, apiKey) {
    return fetch(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
        { method: 'GET' }
    );
}


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderListItem;
function renderListItem(list) {
    let listItemElement = document.createElement('li');
    let listItem = list.appendChild(listItemElement);

    return listItem;
}


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderArticle;
function renderArticle(articleConfig) {
    let {
        urlToImage,
        url,
        title,
        publishedAt,
        author,
        description
    } = articleConfig;

    return `
        <div class="article">
            <div class="article-image-container">
                <img src=${urlToImage} />
            </div>
            <div class="article-text">
                <h3>
                    <a href="${url}" target="_blank">${title}</a>
                </h3>
                <div class="article-date">
                    ${new Date(publishedAt).getDate()}-${new Date(publishedAt).getMonth() + 1}-${new Date(publishedAt).getFullYear()}
                </div>
                ${author ? `
                    <div class="article-author">
                        ${author}
                    </div>` : ` 
                    <div></div>
                `
        }
                <p class="article-description">
                    ${description}
                </p>
            </div>
        </div>
    `
}


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_elem_dataset__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_elem_dataset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_elem_dataset__);


class MenuToggle {
    constructor(toggle) {
        this.toggle = toggle;
        this.toggledElement = document.getElementById(__WEBPACK_IMPORTED_MODULE_0_elem_dataset___default()(this.toggle).toggleTarget);
        this.expandedClassName = 'expanded';
        this.collapsedClassName = 'collapsed';
        this.expanded = false;
        this.collapsed = true;
    }

    changeToggleState() {
        if (this.expanded) {
            this.toggledElement.classList.add(this.collapsedClassName);
            this.toggledElement.classList.remove(this.expandedClassName);
            
        } else {
            this.toggledElement.classList.add(this.expandedClassName);
            this.toggledElement.classList.remove(this.collapsedClassName);
        }
        this.expanded = !this.expanded;
        this.collapsed = !this.collapsed;
    }

    createToggle() {
        this.toggle.addEventListener('click', () => { this.changeToggleState() })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuToggle;



/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// <3 Modernizr
// https://raw.githubusercontent.com/Modernizr/Modernizr/master/feature-detects/dom/dataset.js

function useNative() {
	var elem = document.createElement('div');
	elem.setAttribute('data-a-b', 'c');

	return Boolean(elem.dataset && elem.dataset.aB === 'c');
}

function nativeDataset(element) {
	return element.dataset;
}

module.exports = useNative() ? nativeDataset : function (element) {
	var map = {};
	var attributes = element.attributes;

	function getter() {
		return this.value;
	}

	function setter(name, value) {
		if (typeof value === 'undefined') {
			this.removeAttribute(name);
		} else {
			this.setAttribute(name, value);
		}
	}

	for (var i = 0, j = attributes.length; i < j; i++) {
		var attribute = attributes[i];

		if (attribute) {
			var name = attribute.name;

			if (name.indexOf('data-') === 0) {
				var prop = name.slice(5).replace(/-./g, function (u) {
					return u.charAt(1).toUpperCase();
				});

				var value = attribute.value;

				Object.defineProperty(map, prop, {
					enumerable: true,
					get: getter.bind({ value: value || '' }),
					set: setter.bind(element, name)
				});
			}
		}
	}

	return map;
};



/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(332)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--0-2!../node_modules/sass-loader/lib/loader.js??ref--0-3!./app-on.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--0-2!../node_modules/sass-loader/lib/loader.js??ref--0-3!./app-on.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(331)(true);
// imports


// module
exports.push([module.i, "*{box-sizing:border-box}body,html{height:100%}body{font-family:Roboto,sans-serif;padding:0}body,p{margin:0}.article{background:#fff;margin-bottom:20px;overflow:hidden;padding:10px;width:100%}.article-image-container{display:table-cell;font-size:0;padding-right:10px;vertical-align:top}.article-image-container>img{width:200px}.article-text{display:table-cell;width:100%}.article h3{font-size:17px;margin:0 0 5px}.article h3 a{color:#f80;text-decoration:none}.article h3 a:hover{text-decoration:underline}.article-description{font-size:14px;margin:5px 0}.article-author,.article-date{color:#8a8a8a;font-size:12px}@media screen and (max-width:600px){.article-image-container>img{width:100px}}@media screen and (max-width:480px){.article-image-container{display:none}}.channels-list-container{float:left}.channels-list-container ul{margin:0;padding:10px}.channels-list-container ul li{display:block;list-style:none}.channels-list-container ul li button{background:none;border:0;cursor:pointer;display:block;font-family:Roboto,sans-serif;padding:8px;text-align:left;width:100%}.channels-list-container ul li button:hover{background:#d1d1d1}.channels-list-container .collapsed,.channels-list-container .expanded{display:block}@media screen and (max-width:1000px){.channels-list-container{background:#ffdda3;display:none}.channels-list-container.expanded{display:block;float:none}.choose-channel-button{box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);display:block;width:100%;-webkit-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);-moz-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75)}.channels-list-container .collapsed{display:none}.news-container{padding:10px 20px;width:100%}}.page-wrapper{height:100%}.root{min-height:100%;padding-bottom:40px}.page-footer,.root{box-sizing:border-box}.page-footer{background:#ccc;font-size:12px;height:40px;margin-top:-40px;padding:12px}.app-header{background-color:#ffa100;box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75);padding:20px;-webkit-box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75);-moz-box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75)}.header-logo{color:#fff;font-size:30px;text-transform:uppercase}.run-app-button{display:none}.choose-channel-button{border:0;border-radius:0;background-color:#ffa100;color:#fff;display:none;font-family:Roboto,sans-serif;font-size:12px;padding:8px;text-transform:uppercase}@media screen and (max-width:1000px){.choose-channel-button{box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);display:block;width:100%;-webkit-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);-moz-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75)}}.news-container{margin:10px auto;width:800px}@media screen and (max-width:1300px){.news-container{width:650px}}@media screen and (max-width:1000px){.news-container{padding:10px 20px;width:100%}}", "", {"version":3,"sources":["E:/FrontCamp/frontcamp/task-03/styles/styles/base/common.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/base/typography.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/components/article.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/tools/colors.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/components/channels-list.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/components/footer.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/components/header.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/tools/shadows.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/components/mobile-menu.scss","E:/FrontCamp/frontcamp/task-03/styles/styles/components/news-container.scss"],"names":[],"mappings":"AAAA,EACI,qBAAsB,CACzB,AAMD,UAHI,WAAY,CAQf,AALD,KACI,8BCTiC,ADYjC,SAAU,CACb,AAED,OAJI,QAAS,CAMZ,AEjBD,SACI,gBAAgB,AAChB,mBAAmB,AACnB,gBAAgB,AAChB,aAAa,AACb,UAAW,CACd,AAED,yBACI,mBAAmB,AACnB,YAAY,AACZ,mBAAmB,AACnB,kBAAmB,CACtB,AAED,6BACI,WAAY,CACf,AAED,cACI,mBAAmB,AACnB,UAAW,CACd,AAED,YACI,eAAe,AACf,cAAiB,CACpB,AAED,cACI,WC5BY,AD6BZ,oBAAqB,CACxB,AAED,oBACI,yBAA0B,CAC7B,AAED,qBACI,eAAe,AACf,YAAa,CAChB,AAED,8BAEI,cCvC2B,ADwC3B,cAAe,CAClB,AAGD,oCACI,6BACI,WAAY,CACf,CAAA,AAGL,oCACI,yBACI,YAAa,CAChB,CAAA,AE3DL,yBACI,UAAW,CACd,AAED,4BACI,SAAS,AACT,YAAa,CAChB,AAED,+BACI,cAAc,AACd,eAAgB,CACnB,AAED,sCACI,gBAAgB,AAChB,SAAS,AACT,eAAe,AACf,cAAc,AACd,8BAAiC,AACjC,YAAY,AACZ,gBAAgB,AAChB,UACJ,CAAE,AAEF,4CACI,kBDtBgC,CCuBnC,AAMD,uEACI,aAAc,CACjB,AAID,qCACI,yBACI,mBAAmB,AACnB,YAAa,CAChB,AAED,kCACI,cAAc,AACd,UAAW,CACd,AAMD,uBACI,2CAA8C,AAC9C,cAAc,AACd,WAAW,AACX,mDAAsD,AACtD,+CAAmD,CACtD,AAED,oCACI,YAAa,CAChB,AAED,gBACI,kBAAkB,AAClB,UAAW,CACd,CAAA,ACrEL,cACI,WAAY,CACf,AAED,MAEI,gBAAgB,AAChB,mBAAoB,CACvB,AAED,mBALI,qBAAsB,CAYzB,AAPD,aACI,gBFXoB,AEapB,eAAe,AACf,YAAY,AACZ,iBAAiB,AACjB,YAAa,CAChB,ACjBD,YACI,yBAAyB,AACzB,6CCF8C,ADG9C,aAAa,AACb,qDCJ8C,ADK9C,iDCL8C,CDMjD,AAED,aACI,WHRQ,AGSR,eAAe,AACf,wBAAyB,CAC5B,AAED,gBACI,YAAa,CAChB,AEhBD,uBACI,SAAS,AACT,gBAAgB,AAChB,yBAAyB,AACzB,WAAW,AACX,aAAa,AACb,8BAAiC,AACjC,eAAe,AACf,YAAY,AACZ,wBAAyB,CAC5B,AAED,qCACI,uBACI,2CAA8C,AAC9C,cAAc,AACd,WAAW,AACX,mDAAsD,AACtD,+CAAmD,CACtD,CAAA,ACnBL,gBACI,iBAAiB,AACjB,WAAY,CACf,AAGD,qCACI,gBACI,WAAY,CACf,CAAA,AAGL,qCACI,gBACI,kBAAkB,AAClB,UAAW,CACd,CAAA","file":"app-on.scss","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n/*safeasf*/\r\nbody {\r\n    font-family: $main-text-font;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n","$main-text-font: 'Roboto', sans-serif;\r\n",".article {\r\n    background: #fff;\r\n    margin-bottom: 20px;\r\n    overflow: hidden;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.article-image-container {\r\n    display: table-cell;\r\n    font-size: 0;\r\n    padding-right: 10px;\r\n    vertical-align: top;\r\n}\r\n\r\n.article-image-container > img {\r\n    width: 200px;\r\n}\r\n\r\n.article-text {\r\n    display: table-cell;\r\n    width: 100%;\r\n}\r\n\r\n.article h3 {\r\n    font-size: 17px;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.article h3 a {\r\n    color: $orange;\r\n    text-decoration: none;\r\n}\r\n\r\n.article h3 a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.article-description {\r\n    font-size: 14px;\r\n    margin: 5px 0;\r\n}\r\n\r\n.article-author,\r\n.article-date {\r\n    color: $additional-text-color;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    .article-image-container > img {\r\n        width: 100px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .article-image-container {\r\n        display: none;\r\n    }\r\n}\r\n","$footer-background: #ccc;\r\n$white: #fff;\r\n$orange: #ff8800;\r\n\r\n$channels-list-button-hover: #d1d1d1;\r\n\r\n$additional-text-color: #8a8a8a;\r\n",".channels-list-container {\r\n    float: left;\r\n}\r\n\r\n.channels-list-container ul {\r\n    margin: 0;\r\n    padding: 10px;\r\n}\r\n\r\n.channels-list-container ul li {\r\n    display: block;\r\n    list-style: none;\r\n}\r\n\r\n.channels-list-container ul li button {\r\n    background: none;\r\n    border: 0;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 8px;\r\n    text-align: left;\r\n    width: 100%\r\n}\r\n\r\n.channels-list-container ul li button:hover {\r\n    background: $channels-list-button-hover;\r\n}\r\n\r\n.channels-list-container .expanded {\r\n    display: block;\r\n}\r\n\r\n.channels-list-container .collapsed {\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .channels-list-container {\r\n        background: #ffdda3;\r\n        display: none;\r\n    }\r\n\r\n    .channels-list-container.expanded {\r\n        display: block;\r\n        float: none;\r\n    }\r\n\r\n    .channels-list-container .collapsed {\r\n        display: none;\r\n    }\r\n\r\n    .choose-channel-button {\r\n        box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        display: block;\r\n        width: 100%;\r\n        -webkit-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        -moz-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n    }\r\n\r\n    .channels-list-container .collapsed {\r\n        display: none;\r\n    }\r\n\r\n    .news-container {\r\n        padding: 10px 20px;\r\n        width: 100%;\r\n    }\r\n}\r\n",".page-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.root {\r\n    box-sizing: border-box;\r\n    min-height: 100%;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.page-footer {\r\n    background: $footer-background;\r\n    box-sizing: border-box;\r\n    font-size: 12px;\r\n    height: 40px;\r\n    margin-top: -40px;\r\n    padding: 12px;\r\n}\r\n",".app-header {\r\n    background-color: #ffa100;\r\n    box-shadow: $header-shadow;\r\n    padding: 20px;\r\n    -webkit-box-shadow: $header-shadow;\r\n    -moz-box-shadow: $header-shadow;\r\n}\r\n\r\n.header-logo {\r\n    color: $white;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.run-app-button {\r\n    display: none;\r\n}\r\n","$header-shadow: -1px 5px 2px -5px rgba(0,0,0,0.75);\r\n",".choose-channel-button {\r\n    border: 0;\r\n    border-radius: 0;\r\n    background-color: #ffa100;\r\n    color: #fff;\r\n    display: none;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 12px;\r\n    padding: 8px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .choose-channel-button {\r\n        box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        display: block;\r\n        width: 100%;\r\n        -webkit-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        -moz-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n    }\r\n}\r\n",".news-container {\r\n    margin: 10px auto;\r\n    width: 800px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1300px) {\r\n    .news-container {\r\n        width: 650px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .news-container {\r\n        padding: 10px 20px;\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ })

});