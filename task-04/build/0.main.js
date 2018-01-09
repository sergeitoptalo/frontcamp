webpackJsonp([0],{

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
               * When source maps are enabled, `style-loader` uses a link element with a data-uri to
               * embed the css on the page. This breaks all relative urls because now they are relative to a
               * bundle instead of the current page.
               *
               * One solution is to only use full urls, but that may be impossible.
               *
               * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
               *
               * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
               *
               */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */


	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.
		trim().
		replace(/^"(.*)"$/, function (o, $1) {return $1;}).
		replace(/^'(.*)'$/, function (o, $1) {return $1;});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(350);
var _actions = __webpack_require__(125);var config = __webpack_require__(352);exports.default =

function (store) {
    var configArray = [];
    Object.keys(config).forEach(function (key) {
        configArray.push({ 'title': key, 'source': config[key] });
    });
    store.dispatch((0, _actions.setChannelsConfiguration)(configArray));

    var chooseChannelButton = document.querySelector('#choose-channel-button');
    var toggles = document.querySelectorAll('[data-toggle-target]');
};

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /*
              	MIT License http://www.opensource.org/licenses/mit-license.php
              	Author Tobias Koppers @sokra
              */
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string")
		modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number")
			alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(344);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(349)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-2!../node_modules/sass-loader/lib/loader.js??ref--1-3!./app-on.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-2!../node_modules/sass-loader/lib/loader.js??ref--1-3!./app-on.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(348)(true);
// imports


// module
exports.push([module.i, "*{box-sizing:border-box}body,html{height:100%}body{background:#000;font-family:Roboto,sans-serif;padding:0}body,p{margin:0}.article{background:#282828;color:#fff;margin-bottom:20px;overflow:hidden;padding:10px;width:100%}.article-image-container{display:table-cell;font-size:0;padding-right:10px;vertical-align:top}.article-image-container>img{height:150px;object-fit:cover;width:200px}.article-text{display:table-cell;width:100%}.article h3{font-size:17px;margin:0 0 5px}.article h3 a{color:#fff;text-decoration:none}.article h3 a:hover{text-decoration:underline}.article-description{font-size:13px;margin:5px 0}.article-author,.article-date{color:#8a8a8a;font-size:12px}@media screen and (max-width:600px){.article-image-container>img{width:100px}}@media screen and (max-width:480px){.article-image-container{display:none}}.channels-list-container{float:left}.channels-list-container ul{margin:0;padding:0}.channels-list-container ul li{display:block;list-style:none}.channels-list-container ul li button{background:none;border:0;border-bottom:1px solid #fff;color:#fff;cursor:pointer;display:block;font-family:Roboto,sans-serif;padding:8px;text-align:left;width:100%}.channels-list-container ul li:first-child button{border-top:1px solid #fff}.channels-list-container ul li button:hover{background:#ef4040}.channels-list-container.collapsed,.channels-list-container.expanded{display:block}@media screen and (max-width:1000px){.channels-list-container{background:#fff;display:none}.channels-list-container.expanded{display:block;float:none}.channels-list-container.collapsed{display:none}.channels-list-container ul{padding:0}.channels-list-container ul li button{border-color:#ccc;color:#000}.choose-channel-button{box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);display:block;width:100%;-webkit-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);-moz-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75)}.channels-list-container .collapsed{display:none}.news-container{padding:10px 20px;width:100%}}.page-wrapper{height:100%}.root{min-height:100%;padding-bottom:40px}.page-footer,.root{box-sizing:border-box}.page-footer{background:#ccc;font-size:12px;height:40px;margin-top:-40px;padding:12px}body .app-header{background-color:#282828;box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75);padding:20px;-webkit-box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75);-moz-box-shadow:-1px 5px 2px -5px rgba(0,0,0,.75)}.header-logo{color:#fff;font-size:30px;text-transform:uppercase}.run-app-button{display:none}.choose-channel-button{border:0;border-radius:0;background-color:#ef4040;color:#fff;cursor:pointer;display:none;font-family:Roboto,sans-serif;font-size:12px;padding:8px;text-transform:uppercase}@media screen and (max-width:1000px){.choose-channel-button{box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);display:block;width:100%;-webkit-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75);-moz-box-shadow:0 -4px 5px -4px rgba(0,0,0,.75)}}.news-container{margin:10px auto;width:800px}@media screen and (max-width:1300px){.news-container{width:650px}}@media screen and (max-width:1000px){.news-container{padding:10px 20px;width:100%}}", "", {"version":3,"sources":["E:/FrontCamp/frontcamp/task-04/styles/styles/base/common.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/base/typography.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/article.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/tools/colors.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/channels-list.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/footer.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/header.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/tools/shadows.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/mobile-menu.scss","E:/FrontCamp/frontcamp/task-04/styles/styles/components/news-container.scss"],"names":[],"mappings":"AAAA,EACI,qBAAsB,CACzB,AAMD,UAHI,WAAY,CASf,AAND,KACI,gBAAgB,AAChB,8BCViC,ADajC,SAAU,CACb,AAED,OAJI,QAAS,CAMZ,AElBD,SACI,mBAAmB,AACnB,WAAW,AACX,mBAAmB,AACnB,gBAAgB,AAChB,aAAa,AACb,UAAW,CACd,AAED,yBACI,mBAAmB,AACnB,YAAY,AACZ,mBAAmB,AACnB,kBAAmB,CACtB,AAED,6BACI,aAAa,AACb,iBAAiB,AACjB,WAAY,CACf,AAED,cACI,mBAAmB,AACnB,UAAW,CACd,AAED,YACI,eAAe,AACf,cAAiB,CACpB,AAED,cACI,WAAW,AACX,oBAAqB,CACxB,AAED,oBACI,yBAA0B,CAC7B,AAED,qBACI,eAAe,AACf,YAAa,CAChB,AAED,8BAEI,cCzC2B,AD0C3B,cAAe,CAClB,AAGD,oCACI,6BACI,WAAY,CACf,CAAA,AAGL,oCACI,yBACI,YAAa,CAChB,CAAA,AE9DL,yBACI,UAAW,CACd,AAED,4BACI,SAAS,AACT,SAAU,CACb,AAED,+BACI,cAAc,AACd,eAAgB,CACnB,AAED,sCACI,gBAAgB,AAChB,SAAS,AACT,6BAA6B,AAC7B,WAAW,AACX,eAAe,AACf,cAAc,AACd,8BAAiC,AACjC,YAAY,AACZ,gBAAgB,AAChB,UACJ,CAAE,AAEF,kDACI,yBAA0B,CAC7B,AAED,4CACI,kBD3BgC,CC4BnC,AAMD,qEACI,aAAc,CACjB,AAGD,qCACI,yBACI,gBAAgB,AAChB,YAAa,CAChB,AAED,kCACI,cAAc,AACd,UAAW,CACd,AAED,mCACI,YAAa,CAChB,AAED,4BACI,SAAU,CACb,AAED,sCACI,kBAAkB,AAClB,UAAW,CACd,AAED,uBACI,2CAA8C,AAC9C,cAAc,AACd,WAAW,AACX,mDAAsD,AACtD,+CAAmD,CACtD,AAED,oCACI,YAAa,CAChB,AAED,gBACI,kBAAkB,AAClB,UAAW,CACd,CAAA,ACnFL,cACI,WAAY,CACf,AAED,MAEI,gBAAgB,AAChB,mBAAoB,CACvB,AAED,mBALI,qBAAsB,CAYzB,AAPD,aACI,gBFXoB,AEapB,eAAe,AACf,YAAY,AACZ,iBAAiB,AACjB,YAAa,CAChB,ACjBD,iBACI,yBAAyB,AACzB,6CCF8C,ADG9C,aAAa,AACb,qDCJ8C,ADK9C,iDCL8C,CDMjD,AAED,aACI,WHRQ,AGSR,eAAe,AACf,wBAAyB,CAC5B,AAED,gBACI,YAAa,CAChB,AEhBD,uBACI,SAAS,AACT,gBAAgB,AAChB,yBAAyB,AACzB,WAAW,AACX,eAAe,AACf,aAAa,AACb,8BAAiC,AACjC,eAAe,AACf,YAAY,AACZ,wBAAyB,CAC5B,AAED,qCACI,uBACI,2CAA8C,AAC9C,cAAc,AACd,WAAW,AACX,mDAAsD,AACtD,+CAAmD,CACtD,CAAA,ACpBL,gBACI,iBAAiB,AACjB,WAAY,CACf,AAGD,qCACI,gBACI,WAAY,CACf,CAAA,AAGL,qCACI,gBACI,kBAAkB,AAClB,UAAW,CACd,CAAA","file":"app-on.scss","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n/*safeasf*/\r\nbody {\r\n    background: #000;\r\n    font-family: $main-text-font;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n","$main-text-font: 'Roboto', sans-serif;\r\n",".article {\r\n    background: #282828;\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n    overflow: hidden;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.article-image-container {\r\n    display: table-cell;\r\n    font-size: 0;\r\n    padding-right: 10px;\r\n    vertical-align: top;\r\n}\r\n\r\n.article-image-container > img {\r\n    height: 150px;\r\n    object-fit: cover;\r\n    width: 200px;\r\n}\r\n\r\n.article-text {\r\n    display: table-cell;\r\n    width: 100%;\r\n}\r\n\r\n.article h3 {\r\n    font-size: 17px;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.article h3 a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.article h3 a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.article-description {\r\n    font-size: 13px;\r\n    margin: 5px 0;\r\n}\r\n\r\n.article-author,\r\n.article-date {\r\n    color: $additional-text-color;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    .article-image-container > img {\r\n        width: 100px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .article-image-container {\r\n        display: none;\r\n    }\r\n}\r\n","$footer-background: #ccc;\r\n$white: #fff;\r\n$orange: #ff8800;\r\n$red: #ef4040;\r\n\r\n$channels-list-button-hover: #ef4040;\r\n\r\n$additional-text-color: #8a8a8a;\r\n",".channels-list-container {\r\n    float: left;\r\n}\r\n\r\n.channels-list-container ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.channels-list-container ul li {\r\n    display: block;\r\n    list-style: none;\r\n}\r\n\r\n.channels-list-container ul li button {\r\n    background: none;\r\n    border: 0;\r\n    border-bottom: 1px solid #fff;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 8px;\r\n    text-align: left;\r\n    width: 100%\r\n}\r\n\r\n.channels-list-container ul li:first-child button {\r\n    border-top: 1px solid #fff;\r\n}\r\n\r\n.channels-list-container ul li button:hover {\r\n    background: $channels-list-button-hover;\r\n}\r\n\r\n.channels-list-container.expanded {\r\n    display: block;\r\n}\r\n\r\n.channels-list-container.collapsed {\r\n    display: block;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .channels-list-container {\r\n        background: #fff;\r\n        display: none;\r\n    }\r\n\r\n    .channels-list-container.expanded {\r\n        display: block;\r\n        float: none;\r\n    }\r\n\r\n    .channels-list-container.collapsed {\r\n        display: none;\r\n    }\r\n\r\n    .channels-list-container ul {\r\n        padding: 0;\r\n    }\r\n\r\n    .channels-list-container ul li button {\r\n        border-color: #ccc;\r\n        color: #000;\r\n    }\r\n\r\n    .choose-channel-button {\r\n        box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        display: block;\r\n        width: 100%;\r\n        -webkit-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        -moz-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n    }\r\n\r\n    .channels-list-container .collapsed {\r\n        display: none;\r\n    }\r\n\r\n    .news-container {\r\n        padding: 10px 20px;\r\n        width: 100%;\r\n    }\r\n}\r\n",".page-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.root {\r\n    box-sizing: border-box;\r\n    min-height: 100%;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.page-footer {\r\n    background: $footer-background;\r\n    box-sizing: border-box;\r\n    font-size: 12px;\r\n    height: 40px;\r\n    margin-top: -40px;\r\n    padding: 12px;\r\n}\r\n","body .app-header {\r\n    background-color: #282828;\r\n    box-shadow: $header-shadow;\r\n    padding: 20px;\r\n    -webkit-box-shadow: $header-shadow;\r\n    -moz-box-shadow: $header-shadow;\r\n}\r\n\r\n.header-logo {\r\n    color: $white;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.run-app-button {\r\n    display: none;\r\n}\r\n","$header-shadow: -1px 5px 2px -5px rgba(0,0,0,0.75);\r\n",".choose-channel-button {\r\n    border: 0;\r\n    border-radius: 0;\r\n    background-color: #ef4040;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: none;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 12px;\r\n    padding: 8px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .choose-channel-button {\r\n        box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        display: block;\r\n        width: 100%;\r\n        -webkit-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n        -moz-box-shadow: 0px -4px 5px -4px rgba(0,0,0,0.75);\r\n    }\r\n}\r\n",".news-container {\r\n    margin: 10px auto;\r\n    width: 800px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1300px) {\r\n    .news-container {\r\n        width: 650px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .news-container {\r\n        padding: 10px 20px;\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = {

    "BBC News": "bbc-news",

    "Daily Mail": "daily-mail",

    "Google News": "google-news",

    "National Geographic": "national-geographic",

}


/***/ })

});
//# sourceMappingURL=0.main.js.map