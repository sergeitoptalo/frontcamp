webpackJsonp([0],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_app_on_scss__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_app_on_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_app_on_scss__);
let config = __webpack_require__(348);


/* harmony default export */ __webpack_exports__["default"] = ((store) => {
    let configArray = [];
    Object.keys(config).forEach(key => {
        configArray.push({ 'title': key, 'source': config[key] })
    });
    store.dispatch({ type: 'SET_CONFIGURATION', configuration: configArray });
    
    let chooseChannelButton = document.querySelector('#choose-channel-button');
    let toggles = document.querySelectorAll('[data-toggle-target]');

    //[...toggles].forEach(toggle => new MenuToggle(toggle).createToggle());
});


/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = {

    "BBC News": "bbc-news",

    "Daily Mail": "daily-mail",

    "Google News": "google-news",

    "National Geographic": "national-geographic",

}


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(347)(content, options);
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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(346)(true);
// imports


// module
exports.push( [module.i, "*{box-sizing:border-box}body,html{height:100%}body{background:#000;font-family:Roboto,sans-serif;padding:0}body,p{margin:0}.article{background:#282828;color:#fff;margin-bottom:20px;overflow:hidden;padding:10px;width:100%}.article-image-container{display:table-cell;font-size:0;padding-right:10px;vertical-align:top}.article-image-container>img{height:150px;object-fit:cover;width:200px}.article-text{display:table-cell;width:100%}.article h3{font-size:17px;margin:0 0 5px}.article h3 a{color:#fff;text-decoration:none}.article h3 a:hover{text-decoration:underline}.article-description{font-size:13px;margin:5px 0}.article-author,.article-date{color:#8a8a8a;font-size:12px}@media screen and (max-width:600px){.article-image-container>img{width:100px}}@media screen and (max-width:480px){.article-image-container{display:none}}.channels-list-container{float:left}.channels-list-container ul{margin:0;padding:0}.channels-list-container ul li{display:block;list-style:none}.channels-list-container ul li button{background:none;border:0;border-bottom:1px solid #fff;color:#fff;cursor:pointer;display:block;font-family:Roboto,sans-serif;padding:8px;text-align:left;width:100%}.channels-list-container ul li:first-child button{border-top:1px solid #fff}.channels-list-container ul li button:hover{background:#ef4040}.channels-list-container.collapsed,.channels-list-container.expanded{display:block}@media screen and (max-width:1000px){.channels-list-container{background:#fff;display:none}.channels-list-container.expanded{display:block;float:none}.channels-list-container.collapsed{display:none}.channels-list-container ul{padding:0}.channels-list-container ul li button{border-color:#ccc;color:#000}.choose-channel-button{box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);display:block;width:100%;-webkit-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);-moz-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75)}.channels-list-container .collapsed{display:none}.news-container{padding:10px 20px;width:100%}}.page-wrapper{height:100%}.root{min-height:100%;padding-bottom:40px}.page-footer,.root{box-sizing:border-box}.page-footer{background:#ccc;font-size:12px;height:40px;margin-top:-40px;padding:12px}body .app-header{background-color:#282828;box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75);padding:20px;-webkit-box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75);-moz-box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75)}.header-logo{color:#fff;font-size:30px;text-transform:uppercase}.run-app-button{display:none}.choose-channel-button{border:0;border-radius:0;background-color:#ef4040;color:#fff;cursor:pointer;display:none;font-family:Roboto,sans-serif;font-size:12px;padding:8px;text-transform:uppercase}@media screen and (max-width:1000px){.choose-channel-button{box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);display:block;width:100%;-webkit-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);-moz-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75)}}.news-container{margin:10px auto;width:800px}@media screen and (max-width:1300px){.news-container{width:650px}}@media screen and (max-width:1000px){.news-container{padding:10px 20px;width:100%}}", "", {"version":3,"sources":["E:/FrontCamp/frontcamp/task-04/styles/styles/base/common.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/base/typography.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/article.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/tools/colors.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/channels-list.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/footer.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/header.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/tools/shadows.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/mobile-menu.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/news-container.scss"],"names":[],"mappings":"AAAA,EACI,qBAAsB,CACzB,AAMD,UAHI,WAAY,CASf,AAND,KACI,gBAAgB,AAChB,8BCViC,ADajC,SAAU,CACb,AAED,OAJI,QAAS,CAMZ,AElBD,SACI,mBAAmB,AACnB,WAAW,AACX,mBAAmB,AACnB,gBAAgB,AAChB,aAAa,AACb,UAAW,CACd,AAED,yBACI,mBAAmB,AACnB,YAAY,AACZ,mBAAmB,AACnB,kBAAmB,CACtB,AAED,6BACI,aAAa,AACb,iBAAiB,AACjB,WAAY,CACf,AAED,cACI,mBAAmB,AACnB,UAAW,CACd,AAED,YACI,eAAe,AACf,cAAiB,CACpB,AAED,cACI,WAAW,AACX,oBAAqB,CACxB,AAED,oBACI,yBAA0B,CAC7B,AAED,qBACI,eAAe,AACf,YAAa,CAChB,AAED,8BAEI,cC1C2B,AD2C3B,cAAe,CAClB,AAGD,oCACI,6BACI,WAAY,CACf,CAAA,AAGL,oCACI,yBACI,YAAa,CAChB,CAAA,AE9DL,yBACI,UAAW,CACd,AAED,4BACI,SAAS,AACT,SAAU,CACb,AAED,+BACI,cAAc,AACd,eAAgB,CACnB,AAED,sCACI,gBAAgB,AAChB,SAAS,AACT,6BAA6B,AAC7B,WAAW,AACX,eAAe,AACf,cAAc,AACd,8BAAiC,AACjC,YAAY,AACZ,gBAAgB,AAChB,UACJ,CAAE,AAEF,kDACI,yBAA0B,CAC7B,AAED,4CACI,kBD5BgC,CC6BnC,AAMD,qEACI,aAAc,CACjB,AAGD,qCACI,yBACI,gBAAgB,AAChB,YAAa,CAChB,AAED,kCACI,cAAc,AACd,UAAW,CACd,AAED,mCACI,YAAa,CAChB,AAED,4BACI,SAAU,CACb,AAED,sCACI,kBAAkB,AAClB,UAAW,CACd,AAED,uBACI,2CAA8C,AAC9C,cAAc,AACd,WAAW,AACX,mDAAsD,AACtD,+CAAmD,CACtD,AAED,oCACI,YAAa,CAChB,AAED,gBACI,kBAAkB,AAClB,UAAW,CACd,CAAA,ACnFL,cACI,WAAY,CACf,AAED,MAEI,gBAAgB,AAChB,mBAAoB,CACvB,AAED,mBALI,qBAAsB,CAYzB,AAPD,aACI,gBFXoB,AEapB,eAAe,AACf,YAAY,AACZ,iBAAiB,AACjB,YAAa,CAChB,ACjBD,iBACI,yBAAyB,AACzB,6CCF8C,ADG9C,aAAa,AACb,qDCJ8C,ADK9C,iDCL8C,CDMjD,AAED,aACI,WHRQ,AGSR,eAAe,AACf,wBAAyB,CAC5B,AAED,gBACI,YAAa,CAChB,AEhBD,uBACI,SAAS,AACT,gBAAgB,AAChB,yBAAyB,AACzB,WAAW,AACX,eAAe,AACf,aAAa,AACb,8BAAiC,AACjC,eAAe,AACf,YAAY,AACZ,wBAAyB,CAC5B,AAED,qCACI,uBACI,2CAA8C,AAC9C,cAAc,AACd,WAAW,AACX,mDAAsD,AACtD,+CAAmD,CACtD,CAAA,ACpBL,gBACI,iBAAiB,AACjB,WAAY,CACf,AAGD,qCACI,gBACI,WAAY,CACf,CAAA,AAGL,qCACI,gBACI,kBAAkB,AAClB,UAAW,CACd,CAAA","file":"app-on.scss","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n/*safeasf*/\r\nbody {\r\n    background: #000;\r\n    font-family: $main-text-font;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n","$main-text-font: 'Roboto', sans-serif;\r\n",".article {\r\n    background: #282828;\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n    overflow: hidden;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.article-image-container {\r\n    display: table-cell;\r\n    font-size: 0;\r\n    padding-right: 10px;\r\n    vertical-align: top;\r\n}\r\n\r\n.article-image-container > img {\r\n    height: 150px;\r\n    object-fit: cover;\r\n    width: 200px;\r\n}\r\n\r\n.article-text {\r\n    display: table-cell;\r\n    width: 100%;\r\n}\r\n\r\n.article h3 {\r\n    font-size: 17px;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.article h3 a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.article h3 a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.article-description {\r\n    font-size: 13px;\r\n    margin: 5px 0;\r\n}\r\n\r\n.article-author,\r\n.article-date {\r\n    color: $additional-text-color;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    .article-image-container > img {\r\n        width: 100px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .article-image-container {\r\n        display: none;\r\n    }\r\n}\r\n","$footer-background: #ccc;\r\n$white: #fff;\r\n$orange: #ff8800;\r\n\r\n$channels-list-button-hover: #ef4040;\r\n\r\n$additional-text-color: #8a8a8a;\r\n",".channels-list-container {\r\n    float: left;\r\n}\r\n\r\n.channels-list-container ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.channels-list-container ul li {\r\n    display: block;\r\n    list-style: none;\r\n}\r\n\r\n.channels-list-container ul li button {\r\n    background: none;\r\n    border: 0;\r\n    border-bottom: 1px solid #fff;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 8px;\r\n    text-align: left;\r\n    width: 100%\r\n}\r\n\r\n.channels-list-container ul li:first-child button {\r\n    border-top: 1px solid #fff;\r\n}\r\n\r\n.channels-list-container ul li button:hover {\r\n    background: $channels-list-button-hover;\r\n}\r\n\r\n.channels-list-container.expanded {\r\n    display: block;\r\n}\r\n\r\n.channels-list-container.collapsed {\r\n    display: block;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .channels-list-container {\r\n        background: #fff;\r\n        display: none;\r\n    }\r\n\r\n    .channels-list-container.expanded {\r\n        display: block;\r\n        float: none;\r\n    }\r\n\r\n    .channels-list-container.collapsed {\r\n        display: none;\r\n    }\r\n\r\n    .channels-list-container ul {\r\n        padding: 0;\r\n    }\r\n\r\n    .channels-list-container ul li button {\r\n        border-color: #ccc;\r\n        color: #000;\r\n    }\r\n\r\n    .choose-channel-button {\r\n        box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        display: block;\r\n        width: 100%;\r\n        -webkit-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        -moz-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n    }\r\n\r\n    .channels-list-container .collapsed {\r\n        display: none;\r\n    }\r\n\r\n    .news-container {\r\n        padding: 10px 20px;\r\n        width: 100%;\r\n    }\r\n}\r\n",".page-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.root {\r\n    box-sizing: border-box;\r\n    min-height: 100%;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.page-footer {\r\n    background: $footer-background;\r\n    box-sizing: border-box;\r\n    font-size: 12px;\r\n    height: 40px;\r\n    margin-top: -40px;\r\n    padding: 12px;\r\n}\r\n","body .app-header {\r\n    background-color: #282828;\r\n    box-shadow: $header-shadow;\r\n    padding: 20px;\r\n    -webkit-box-shadow: $header-shadow;\r\n    -moz-box-shadow: $header-shadow;\r\n}\r\n\r\n.header-logo {\r\n    color: $white;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.run-app-button {\r\n    display: none;\r\n}\r\n","$header-shadow: -1px 5px 2px -5px rgba(0,0,0,0.75);\r\n",".choose-channel-button {\r\n    border: 0;\r\n    border-radius: 0;\r\n    background-color: #ef4040;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: none;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 12px;\r\n    padding: 8px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .choose-channel-button {\r\n        box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        display: block;\r\n        width: 100%;\r\n        -webkit-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        -moz-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n    }\r\n}\r\n",".news-container {\r\n    margin: 10px auto;\r\n    width: 800px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1300px) {\r\n    .news-container {\r\n        width: 650px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .news-container {\r\n        padding: 10px 20px;\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ })

});
