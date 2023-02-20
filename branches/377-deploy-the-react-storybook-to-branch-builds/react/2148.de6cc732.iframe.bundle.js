/*! For license information please see 2148.de6cc732.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2148],{"../web-components/dist/esm/chevron-icon-5b38c60a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>chevronIcon});var chevronIcon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-navigation-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_item:()=>NavigationItem});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../web-components/dist/esm/index-1500de1f.js"),_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("../web-components/dist/esm/helpers-8880254a.js"),_chevron_icon_5b38c60a_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../web-components/dist/esm/chevron-icon-5b38c60a.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var NavigationItem=function(){function NavigationItem(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,NavigationItem),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.r)(this,hostRef),this.childBlur=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.c)(this,"childBlur",7),this.navItemClicked=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.c)(this,"navItemClicked",7),this.topNavResizedHandler=function(ev){var newSize=ev.detail.size;newSize!==_this.deviceSize&&(_this.deviceSize=newSize,_this.inTopNavSideMenu=newSize<=_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_26__.D.L)},this.sideNavExpandHandler=function(ev){var _ev$detail=ev.detail,sideNavExpanded=_ev$detail.sideNavExpanded,sideNavMobile=_ev$detail.sideNavMobile;_this.sideNavExpanded=sideNavExpanded,_this.isSideNavMobile=sideNavMobile},this.handleBlur=function(ev){if(null!==ev.relatedTarget&&"IC-NAVIGATION-ITEM"===ev.relatedTarget.tagName)return;_this.childBlur.emit()},this.handleClick=function(){_this.navItemClicked.emit()},this.isInitialRender=!0,this.displayDefaultNavigationItem=function(href,label){var variant=_this.isTopNavChild||_this.inTopNavSideMenu?"body":"label",ChevronIconComponent=_this.expandable&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:{svg:!0},innerHTML:_chevron_icon_5b38c60a_js__WEBPACK_IMPORTED_MODULE_28__.c}),IconComponent=_this.el.querySelector('[slot="icon"]')&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"icon"}," ",(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"icon"})," ");return""!==href?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("a",{href,class:"link",ref:function ref(el){return _this.itemEl=el},part:"link","aria-labelledby":"ic-tooltip-navigation-item"},IconComponent,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-typography",{variant},label),ChevronIconComponent):(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{tabindex:"0",class:"link",ref:function ref(el){return _this.itemEl=el},"aria-labelledby":"ic-tooltip-navigation-item"},IconComponent,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-typography",{variant},label),ChevronIconComponent)},this.label=void 0,this.href="",this.selected=!1,this.expandable=!1,this.displayNavigationTooltip=!1,this.collapsedIconLabel=!1,this.isTopNavChild=!1,this.inTopNavSideMenu=!1,this.deviceSize=_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_26__.D.XL,this.focusStyle=(0,_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_26__.k)(),this.navigationType=void 0,this.parentEl=void 0,this.sideNavExpanded=!1,this.isSideNavMobile=!1}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(NavigationItem,[{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.focusStyle=theme.mode}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.itemEl&&this.itemEl.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"componentWillLoad",value:function componentWillLoad(){var navParentDetails=(0,_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_26__.p)(this.el);this.navigationType=navParentDetails.navType,this.parentEl=navParentDetails.parent,"side"===this.navigationType?this.parentEl.addEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.addEventListener("topNavResized",this.topNavResizedHandler),"IC-NAVIGATION-GROUP"===(0,_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_26__.q)(this.el)&&"top"===this.navigationType&&(this.isTopNavChild=!0),this.deviceSize=(0,_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_26__.g)(),this.deviceSize<=_helpers_8880254a_js__WEBPACK_IMPORTED_MODULE_26__.D.L&&"top"===this.navigationType&&(this.inTopNavSideMenu=!0),this.navigationSlot=this.el.querySelector('[slot="navigation-item"]'),this.navigationSlot&&(this.navigationSlot.ariaLabel=this.navigationSlot.textContent.trim())}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.isInitialRender=!1}},{key:"disconnectedCallback",value:function disconnectedCallback(){"side"===this.navigationType?this.parentEl.removeEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.removeEventListener("topNavResized",this.topNavResizedHandler)}},{key:"render",value:function render(){var _class,_class2,href=this.href,label=this.label,inTopNavSideMenu=this.inTopNavSideMenu,isTopNavChild=this.isTopNavChild,selected=this.selected,navigationSlot=this.navigationSlot;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.H,{class:(_class={},_class["navigation-item"]=!0,_class["navigation-item-top-nav"]=!inTopNavSideMenu&&"top"===this.navigationType,_class["navigation-item-top-nav-child-selected"]=isTopNavChild&&!inTopNavSideMenu&&selected,_class[this.focusStyle]=!inTopNavSideMenu&&!isTopNavChild||"side"===this.navigationType&&isTopNavChild,_class["navigation-item-selected"]=!isTopNavChild&&selected,_class["navigation-item-side-menu"]=inTopNavSideMenu,_class["navigation-item-side-menu-selected"]=inTopNavSideMenu&&selected,_class["navigation-item-top-nav-child"]=isTopNavChild&&!inTopNavSideMenu,_class["navigation-item-page-header"]="page-header"===this.navigationType,_class["with-transition"]=!this.isInitialRender,_class["navigation-item-side-nav"]="side"===this.navigationType,_class["navigation-item-side-nav-collapsed"]=(!this.sideNavExpanded||this.displayNavigationTooltip)&&"side"===this.navigationType,_class["navigation-item-side-nav-collapsed-with-label"]=!this.sideNavExpanded&&"side"===this.navigationType&&this.collapsedIconLabel&&!this.isSideNavMobile,_class),onBlur:isTopNavChild&&!inTopNavSideMenu?this.handleBlur:null,onClick:this.handleClick,"aria-current":selected?"page":null,role:"listitem"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-tooltip",{label:label||navigationSlot.textContent,target:"navigation-item",placement:"right",class:(_class2={},_class2["tooltip-navigation-item"]=!0,_class2["tooltip-navigation-item-side-nav-collapsed"]=(!this.sideNavExpanded||this.displayNavigationTooltip)&&"side"===this.navigationType,_class2["tooltip-long-label-navigation-item-side-nav-expanded"]=this.el.hasAttribute("[display-navigation-tooltip = 'true']"),_class2)},navigationSlot?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"navigation-item"}):this.displayDefaultNavigationItem(href,label)))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.g)(this)}}]),NavigationItem}();NavigationItem.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(:focus-within){z-index:1}svg{width:var(--ic-space-xl);fill:var(--ic-theme-text)}ic-typography{flex:1}:host([expandable].navigation-item) .link,:host([expandable].navigation-item) ::slotted(a){padding-right:0}:host(.navigation-item) .link,:host(.navigation-item) ::slotted(a){height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-theme-text);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md);text-decoration:none;transition:var(--ic-easing-transition-fast);position:relative}:host(.navigation-item) ::slotted(a){font:var(--ic-font-label) !important;letter-spacing:var(--ic-font-letter-spacing-0pt025) !important;padding:0 var(--ic-space-md) !important}:host(.navigation-item-selected) .link::after,:host(.navigation-item-selected) ::slotted(a.active)::after,:host(.navigation-item-top-nav) ::slotted(a.active)::after{content:"";height:4px;width:100%;position:absolute;bottom:0;background-color:var(--ic-theme-text)}:host(.navigation-item-selected.navigation-item-page-header) ::slotted(a.active)::after,:host(.navigation-item-selected.navigation-item-page-header) .link::after,:host(.navigation-item.navigation-item-page-header) ::slotted(a.active)::after,:host(.navigation-item-top-nav-child) ::slotted(a.active)::after{content:none}:host(.navigation-item-side-menu-selected) .link,:host(.navigation-item-side-menu) ::slotted(a.active),:host(.navigation-item-top-nav-child) ::slotted(a.active){box-shadow:none}:host(.navigation-item) .link:hover:not(:focus){background-color:var(--ic-theme-hover);cursor:pointer}:host(.navigation-item:not(.navigation-item-page-header,.navigation-item-side-menu)) ::slotted(a:hover:not(:focus)){background-color:var(--ic-theme-hover) !important}:host(.navigation-item:not(.navigation-item-top-nav-child,.navigation-item-side-menu,.navigation-item-top-nav-child-selected .navigation-item-side-menu-selected)) .focus-indicator:focus-within{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius)}:host(.navigation-item) .link:focus,:host(.navigation-item) ::slotted(a:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item-selected) .link:focus,:host(.navigation-item) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item-selected.dark) .link:focus,:host(.navigation-item.dark) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline)}:host(.navigation-item) .link:active:not(:focus),:host(.navigation-item) ::slotted(a:active:not(:focus)){background-color:var(--ic-theme-active)}:host(.navigation-item-side-menu) .link,:host(.navigation-item-side-menu) ::slotted(a){height:40px;width:100%;color:var(--ic-color-primary-text);display:flex;align-items:center;justify-content:flex-start;text-decoration:none;transition:var(--ic-transition-duration-fast)}:host(.navigation-item-side-menu) ::slotted(a){font:var(--ic-font-body) !important;letter-spacing:var(--ic-font-letter-spacing-0pt005) !important;transition:box-shadow var(--ic-easing-transition-fast),\n    background-color var(--ic-easing-transition-fast)}:host(.navigation-item-side-menu) .link:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover)}:host(.navigation-item-side-menu) ::slotted(a:hover:not(:focus)){background-color:var(--ic-action-dark-bg-hover) !important}:host(.navigation-item-side-menu) .focus-indicator:focus-within{box-shadow:none}:host(.navigation-item-side-menu) .link:focus,:host(.navigation-item-side-menu) ::slotted(a:focus){box-shadow:var(--ic-border-focus-inset) !important;padding-right:var(--ic-space-lg);width:auto;border-radius:var(--ic-border-radius-inset) !important}:host(.navigation-item-side-menu-selected) .link,:host(.navigation-item-side-menu-selected) ::slotted(a){transition:box-shadow var(--ic-easing-transition-slow),\n    background-color var(--ic-easing-transition-slow)}:host(.navigation-item-side-menu-selected) .link:focus,:host(.navigation-item-side-menu) ::slotted(a.active:focus),:host(.navigation-item-top-nav-child) ::slotted(a.active:focus){margin-left:var(--ic-space-xs) !important;padding-left:var(--ic-space-xs) !important}:host(.navigation-item-top-nav-child) .link,:host(.navigation-item-top-nav-child) ::slotted(a){height:40px;width:-moz-fit-content;width:fit-content;min-width:145px;color:var(--ic-color-primary-text);display:flex;align-items:center;justify-content:flex-start;padding:0 var(--ic-space-md) !important;text-decoration:none;position:relative;transition:box-shadow var(--ic-transition-duration-fast),\n    border-radius var(--ic-transition-duration-slow)}:host(.navigation-item-top-nav-child) ::slotted(a){font:var(--ic-font-body) !important;letter-spacing:var(--ic-font-letter-spacing-0pt005) !important}:host(.navigation-item-top-nav-child) .link:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover) !important}:host(.navigation-item-top-nav-child) ::slotted(a:hover):not(:focus){background-color:var(--ic-action-dark-bg-hover) !important}:host(.navigation-item-top-nav-child) .link:focus,:host(.navigation-item-top-nav-child) ::slotted(a:focus){z-index:1;outline:var(--ic-hc-focus-outline);border-radius:var(--ic-border-radius-inset);box-shadow:var(--ic-border-focus-inset);transition:border-radius 0s, box-shadow var(--ic-transition-duration-fast)}:host(.navigation-item-top-nav-child) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset)}:host(.navigation-item-side-menu) .link:active:not(:focus){background-color:var(--ic-action-dark-bg-active)}:host(.navigation-item-top-nav-child) .link:active:not(:focus),:host(.navigation-item-top-nav-child) ::slotted(a:active):not(:focus){outline:var(--ic-hc-focus-outline);background-color:var(--ic-action-dark-bg-active)}:host(.navigation-item-top-nav-child) ::slotted(a:active):not(:focus),:host(.navigation-item-side-menu) ::slotted(a:active):not(:focus){background-color:var(--ic-action-dark-bg-active) !important}:host(.navigation-item-side-menu-selected) *,:host(.navigation-item-top-nav-child-selected) *,:host(.navigation-item-side-menu) ::slotted(a.active),:host(.navigation-item-top-nav-child) ::slotted(a.active){font-weight:700 !important}:host(.navigation-item-top-nav-child) ::slotted(a.active)::before,:host(.navigation-item-top-nav-child-selected) .link::before,:host(.navigation-item-side-menu-selected) .link::before,:host(.navigation-item-side-menu) ::slotted(a.active)::before,:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before{content:"";position:absolute;left:0;width:var(--ic-space-xs);height:40px;margin-right:5px;background-color:var(--ic-action-default);transition:left 0s}:host(.navigation-item-top-nav-child-selected) .link:focus{margin-left:var(--ic-space-xs);margin-right:calc(-1 * var(--ic-space-xs));padding-left:var(--ic-space-xs) !important}:host(.navigation-item-top-nav-child-selected) .link:focus::before{left:calc(-1 * var(--ic-space-xs));z-index:1}:host(.navigation-item-side-menu-selected) .link::before,:host(.navigation-item-side-menu) ::slotted(a.active)::before,:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before{z-index:1}:host(.navigation-item-side-menu-selected) .link:focus::before,:host(.navigation-item-side-menu) ::slotted(a.active:focus)::before,:host(.navigation-item-top-nav-child) ::slotted(a.active:focus)::before{left:calc(-1 * var(--ic-space-xs))}:host(.navigation-item-side-menu-selected) .link::after{display:none}:host(.navigation-item-side-nav-collapsed) .link{height:100%}:host(.navigation-item-side-nav-collapsed) ::slotted(svg),:host(.navigation-item-side-nav-collapsed-with-label) ::slotted(svg){margin:auto;pointer-events:none}:host(.navigation-item-side-nav-collapsed) .icon,:host(.navigation-item-side-nav-collapsed-with-label) .icon,:host(.navigation-item-side-nav-collapsed-with-label) ic-typography{align-items:center;padding:0;margin:auto 0;width:-moz-fit-content;width:fit-content;pointer-events:none}:host(.navigation-item-side-nav-collapsed-with-label) ic-typography{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;text-align:center}:host(.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:flex;flex-direction:column;height:-moz-fit-content;height:fit-content;padding:var(--ic-space-xs) !important;gap:var(--ic-space-xxs)}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) ::slotted(a){height:auto !important;gap:0}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:block;text-align:center}:host(.navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link ic-typography{opacity:1}:host(.navigation-item-side-nav-collapsed) svg,:host(.navigation-item-side-nav-collapsed-with-label) svg{display:none}::slotted(svg){fill:var(--ic-theme-text);width:var(--ic-space-lg);margin-left:var(--ic-space-md)}.icon{width:var(--ic-space-xxl);margin-left:calc(-1 * var(--ic-space-md));flex:0 1 0%}.icon>::slotted(*){margin-left:var(--ic-space-md) !important}:host(.navigation-item-side-nav-collapsed) .icon>::slotted(*){margin:auto !important}:host(.navigation-item-side-nav) .link,:host(.navigation-item-side-nav) ::slotted(a){height:var(--navigation-item-height);width:var(--navigation-item-width);justify-content:var(--navigation-item-justify-content);display:flex;gap:var(--ic-space-xs);box-sizing:border-box;color:var(--navigation-item-child-color) !important;text-decoration:none !important;white-space:nowrap}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a){height:var(--navigation-item-child-height);width:var(--navigation-group-width);color:var(--navigation-item-child-color) !important;display:flex;gap:10px;box-sizing:border-box;min-width:0;transition:box-shadow var(--ic-easing-transition-fast);text-decoration:none !important;white-space:nowrap}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link:focus,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a:focus){box-shadow:var(--ic-border-focus-dark)}:host(.navigation-item-side-nav.navigation-item-side-menu) .link:active{background-color:var(--navigation-item-child-active)}:host(.navigation-item-side-nav.navigation-item-top-nav-child) .link:active,:host(.navigation-item-side-nav.navigation-item-top-nav-child) ::slotted(a:active){background-color:var(--navigation-item-child-active)}:host(.navigation-item-side-nav) a.link ic-typography,:host(.navigation-item-side-nav.navigation-item-top-nav-child) a.link ic-typography,.navigation-item-side-nav-slotted-text{opacity:var(--navigation-item-label-opacity);transition:opacity var(--ic-easing-transition-slow);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}:host(.navigation-item-side-nav.navigation-item-selected) .link,:host(.navigation-item-side-nav.navigation-item) ::slotted(a.active){box-shadow:inset 5px 0 0 var(--ic-theme-text)}:host(.navigation-item-side-nav.navigation-item-selected) .link::before,:host(.navigation-item-side-nav) ::slotted(a.active)::before{content:"";display:block;position:absolute;top:0;right:0;left:5px;border-radius:11px !important;bottom:0;transition:var(--ic-easing-transition-slow)}:host(.navigation-item-side-nav.navigation-item-selected) .link:focus::before,:host(.navigation-item-side-nav) ::slotted(a.active:focus)::before{box-shadow:var(--ic-border-focus-inset)}:host(:not(.navigation-item-side-nav-collapsed).navigation-item-side-nav.navigation-item-side-nav-collapsed-with-label) .link{opacity:var(--navigation-item-label-opacity);height:auto}:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) .link,:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) ::slotted(a){min-width:var(--navigation-group-item-min-width);padding:var(--ic-space-xs) !important;height:auto;gap:0}:host(.navigation-item-top-nav-child.navigation-item-side-nav-collapsed-with-label) ::slotted(a){display:block}:host(.navigation-item-side-nav.navigation-item-selected) .link::after,:host(.navigation-item-side-nav) ::slotted(a.active)::after{display:none}:host(.navigation-item-side-nav.navigation-item) .link:focus,:host(.navigation-item-side-nav.navigation-item) ::slotted(a:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background-color:transparent}:host(.navigation-item-side-nav.navigation-item-selected) .link:focus,:host(.navigation-item-side-nav) ::slotted(a.active:focus){margin:0 auto;box-shadow:inset 5px 0 0 var(--ic-theme-text);border-radius:0}:host(.navigation-item-side-nav.navigation-item) .link:hover:not(:focus){background-color:var(--ic-theme-hover) !important}:host(.navigation-item-page-header).link,:host(.navigation-item-page-header) a,:host(.navigation-item-page-header) ::slotted(a){height:44px !important;color:var(--ic-color-primary-text) !important;transition:all var(--ic-easing-transition-fast) !important;box-shadow:rgba(23 89 188 / 0%) !important}:host(.navigation-item-page-header.navigation-item-selected) .link,:host(.navigation-item-page-header) ::slotted(a.active){box-shadow:inset 0 calc(-1 * var(--ic-space-xxs)) 0 var(--ic-action-default)}:host(.navigation-item-page-header) .link:hover,:host(.navigation-item-page-header) ::slotted(.link:hover),:host(.navigation-item-page-header) ::slotted(a:hover),:host(.navigation-item-page-header) .link:hover:not(:focus){background-color:var(--ic-action-default-bg-hover) !important;cursor:pointer}:host(.navigation-item-page-header) .link:focus,:host(.navigation-item-page-header) ::slotted(a:focus){box-shadow:var(--ic-border-focus)}:host(.navigation-item-page-header) .link:active,:host(.navigation-item-page-header) ::slotted(a:active){background-color:var(--ic-action-default-bg-active) !important}:host(.navigation-item-page-header.navigation-item-selected) .link:focus,:host(.navigation-item-page-header) ::slotted(a.active:focus){box-shadow:var(--ic-border-focus),\n    inset 0 calc(-1 * var(--ic-space-xxs)) 0 var(--ic-action-default)}:host(.navigation-item-page-header.navigation-item-selected.with-transition) .link,:host(.navigation-item-page-header.navigation-item-selected.with-transition) ::slotted(a.active){transition:all var(--ic-easing-transition-fast),\n    border-color var(--ic-transition-duration-fast)}:host(.navigation-item-page-header) ::slotted(a.active)::before,:host(.navigation-item-page-header) ::slotted(a.active:focus)::before,:host(.navigation-item-page-header.navigation-item-selected) .link:focus::before{display:none}'}}]);