"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8753],{"./dist/esm/ic-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_link:()=>Link});__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.string.link.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./dist/esm/helpers-8880254a.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./dist/esm/types-dd515332.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Link=function(){function Link(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Link),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__.r)(this,hostRef),this.inheritedAttributes={},this.download=!1,this.href=null,this.hreflang=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0,this.showIcon=void 0,this.appearance="default"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Link,[{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.updateTheme(theme.mode)}},{key:"updateTheme",value:function updateTheme(){var newTheme=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,theme=(0,_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_19__.b)(this.el,newTheme||null);switch(theme){case _types_dd515332_js__WEBPACK_IMPORTED_MODULE_20__.I.Light:this.appearance=_types_dd515332_js__WEBPACK_IMPORTED_MODULE_20__.I.Light;break;case _types_dd515332_js__WEBPACK_IMPORTED_MODULE_20__.I.Dark:this.appearance=_types_dd515332_js__WEBPACK_IMPORTED_MODULE_20__.I.Dark}}},{key:"componentWillLoad",value:function componentWillLoad(){this.inheritedAttributes=(0,_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_19__.m)(this.el,[].concat(_toConsumableArray(_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_19__.n),["aria-expanded"])),this.updateTheme()}},{key:"hasRouterSlot",value:function hasRouterSlot(){return this.routerSlot=this.el.querySelector('[slot="router-item"]'),this.routerSlot&&(this.routerSlot.ariaLabel=this.routerSlot.textContent),!!this.routerSlot}},{key:"render",value:function render(){var _class,_class2,download=this.download,href=this.href,hreflang=this.hreflang,referrerpolicy=this.referrerpolicy,rel=this.rel,target=this.target,showIcon=this.showIcon,appearance=this.appearance;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__.H,{class:(_class={},_class.link=!0,_class[""+appearance]=!0,_class)},this.hasRouterSlot()?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__.h)("slot",{name:"router-item"}):(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__.h)("a",Object.assign({class:(_class2={},_class2["ic-link"]=null!==href,_class2[""+appearance]=null!==href,_class2),download:!1!==download?download:null,href,hrefLang:hreflang,referrerPolicy:referrerpolicy,rel,target,tabindex:null!==href?"0":"-1"},this.inheritedAttributes),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__.h)("slot",null),showIcon&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__.h)("span",{class:"ic-link-open-in-new-icon",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>'})))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_18__.g)(this)}}]),Link}();Link.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.link) .ic-link,:host(.link) ::slotted(a){color:var(--ic-hyperlink);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}:host(.link.dark) .ic-link.dark,:host(.link.dark) ::slotted(a){color:var(--ic-color-primary-text)}:host(.link.light) .ic-link.light,:host(.link.light) ::slotted(a){color:var(--ic-color-white-text)}:host(.link) .ic-link:visited,:host(.link) ::slotted(a:visited){color:var(--ic-hyperlink-visited)}:host(.link) .ic-link:hover,:host(.link) .ic-link:focus,:host(.link) ::slotted(a:hover),:host(.link) ::slotted(a:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%}:host(.link) .ic-link:hover,:host(.link) ::slotted(a:hover){outline:none}:host(.link) .ic-link:focus,:host(.link) ::slotted(a:focus){outline:var(--ic-hc-focus-outline)}:host(.link) .ic-link:active,:host(.link) .ic-link:focus:active,:host(.link) .ic-link:visited:active,:host(.link) ::slotted(a:active),:host(.link) ::slotted(a:focus:active),:host(.link) ::slotted(a:visited:active){text-decoration:none}.ic-link-open-in-new-icon{vertical-align:middle;margin-left:var(--ic-space-xxs)}.ic-link>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink)}.ic-link.dark>.ic-link-open-in-new-icon{fill:var(--ic-color-primary-text)}.ic-link.light>.ic-link-open-in-new-icon{fill:var(--ic-color-white-text)}.ic-link-open-in-new-icon>svg{width:var(--ic-space-md);height:var(--ic-space-md);fill:currentcolor}.ic-link:visited>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink-visited)}.ic-link.light:visited>.ic-link-open-in-new-icon{fill:var(--ic-hyperlink-contrast-visited)}:host(.breadcrumb-link) .ic-link{display:var(--breadcrumb-link-display);align-items:var(--breadcrumb-link-align-items);gap:var(--breadcrumb-link-gap)}:host(.breadcrumb-link) .ic-link ::slotted(.back-icon){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.breadcrumb-link.current-page) a,:host(.breadcrumb-link.current-page) ::slotted(a){font-weight:normal;color:inherit;text-decoration:none;display:flex;align-items:center}:host(.breadcrumb-link.current-page) .ic-link,:host(.breadcrumb-link.current-page) ::slotted(a:focus){outline:var(--ic-hc-focus-outline);text-decoration:none}:host(.breadcrumb-link.current-page) .ic-link:visited{color:var(--ic-color-primary-text)}'},"./node_modules/core-js/modules/es.string.link.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("link")},{link:function link(url){return createHTML(this,"a","href",url)}})}}]);