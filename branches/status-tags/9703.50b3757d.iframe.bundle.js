"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9703],{"./dist/esm/ic-status-tag.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_status_tag:()=>StatusTag});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_3d41833c_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/helpers-3d41833c.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var StatusTag=function(){function StatusTag(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,StatusTag),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.label=void 0,this.status="neutral",this.appearance="filled",this.small=!1,this.announced=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(StatusTag,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_3d41833c_js__WEBPACK_IMPORTED_MODULE_9__.a)([{prop:this.label,propName:"label"}],"Status Tag")}},{key:"render",value:function render(){var _class,label=this.label,status=this.status,appearance=this.appearance,small=this.small,announced=this.announced;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.H,{role:announced?"status":null,"aria-label":"Status"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("strong",{class:(_class={},_class.tag=!0,_class[appearance+"-"+status]=!0,_class.small=small,_class)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"label-uppercase","apply-vertical-margins":!1},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",null,label))))}}]),StatusTag}();StatusTag.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}.tag{padding:var(--ic-space-xs) var(--ic-space-sm);font-size:14px;border-radius:80px;display:inline-block;min-width:40px;text-align:center}.small{padding:var(--ic-space-xxs) var(--ic-space-sm)}.filled-neutral{background-color:var(--ic-architectural-600);color:var(--ic-architectural-white)}.filled-success{background-color:var(--ic-status-success);color:var(--ic-architectural-white)}.filled-warning{background-color:var(--ic-status-warning);color:var(--ic-color-primary-text)}.filled-danger{background-color:var(--ic-status-error);color:var(--ic-architectural-white)}.outlined-neutral{background-color:var(--ic-architectural-200);color:var(--ic-color-secondary-text);border:1px solid var(--ic-architectural-400)}.outlined-success{background-color:var(--ic-status-success-background);color:var(--ic-status-success);border:1px solid var(--ic-status-success)}.outlined-warning{background-color:var(--ic-status-warning-background);color:var(--ic-status-warning-dark);border:1px solid var(--ic-status-warning-dark)}.outlined-danger{background-color:var(--ic-status-error-background);color:var(--ic-status-error);border:1px solid var(--ic-status-error)}@media (forced-colors: active){.tag{border:var(--ic-hc-border);-ms-high-contrast-adjust:none;forced-color-adjust:none}}'}}]);