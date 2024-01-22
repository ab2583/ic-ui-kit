"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[7048],{"./dist/esm/ic-input-component-container_4.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_input_component_container:()=>InputComponentContainer,ic_input_container:()=>InputContainer,ic_input_label:()=>InputLabel,ic_input_validation:()=>InputValidation});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _icon,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-93509377.js"),_types_f21b86a9_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-f21b86a9.js"),_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/helpers-66ade63f.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var InputComponentContainer=function(){function InputComponentContainer(hostRef){_classCallCheck(this,InputComponentContainer),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.appearance="default",this.dark=!1,this.disabled=!1,this.fullWidth=!1,this.multiLine=!1,this.readonly=!1,this.size="default",this.small=!1,this.validationInline=!1,this.validationStatus=""}return _createClass(InputComponentContainer,[{key:"render",value:function render(){var _class,_class2,_class3,small=this.small,size=this.size,validationStatus=this.validationStatus,disabled=this.disabled,readonly=this.readonly,multiLine=this.multiLine,fullWidth=this.fullWidth,dark=this.dark,appearance=this.appearance,validationInline=this.validationInline,hasValidationStatus=""!==this.validationStatus&&!this.disabled&&!this.readonly;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class={},_class.small=small||"small"===size,_class.large="large"===size,_class[validationStatus]=hasValidationStatus,_class.disabled=disabled,_class.readonly=readonly,_class.multiline=multiLine,_class.fullwidth=fullWidth,_class.dark=dark||"dark"===appearance,_class)},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:{"focus-indicator":!0,dark:dark||"dark"===appearance}},(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.i)(this.el,"left-icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(_class2={},_class2["icon-container"]=!0,_class2)},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"left-icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null),validationInline&&validationStatus===_types_f21b86a9_js__WEBPACK_IMPORTED_MODULE_9__.e.Success&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:(_class3={},_class3["inline-success"]=!0,_class3),innerHTML:_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.Q})))}},{key:"el",get:function get(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),InputComponentContainer}();InputComponentContainer.style="ic-input-component-container{display:flex;border:var(--ic-border-width) solid\n    var(--border-color, var(--ic-architectural-400));border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-slow);height:2.5rem;width:var(--input-width, 20rem);padding:var(--ic-space-1px);background-color:var(--ic-architectural-white);box-sizing:border-box;fill:var(--ic-architectural-400);outline:none}ic-input-component-container.fullwidth{width:100%}ic-input-component-container.disabled,ic-input-component-container.disabled:hover{border:var(--ic-border-width) dashed var(--ic-architectural-200)}ic-input-component-container.readonly,ic-input-component-container.readonly:hover{border:none;padding:0}ic-input-component-container.error{border:var(--ic-error-border-default);padding:0}ic-input-component-container.error:hover{border:var(--ic-error-border-hover)}ic-input-component-container.error:focus-within{border:var(--ic-error-border-pressed)}ic-input-component-container.warning{border:var(--ic-warning-border-default);padding:0}ic-input-component-container.warning:hover{border:var(--ic-warning-border-hover)}ic-input-component-container.warning:focus-within{border:var(--ic-warning-border-pressed)}ic-input-component-container.success{border:var(--ic-success-border-default);padding:0}ic-input-component-container.success:hover{border:var(--ic-success-border-hover)}ic-input-component-container.success:focus-within{border:var(--ic-success-border-pressed)}ic-input-component-container.small{height:var(--ic-space-xl)}ic-input-component-container.large{height:var(--ic-space-xxl)}ic-input-component-container.multiline{height:auto}ic-input-component-container .icon-container{margin-top:var(--ic-space-xxs);margin-left:0.438rem;display:flex;align-items:center}ic-input-component-container.multiline .icon-container,ic-input-component-container.multiline.small .icon-container{margin-top:0.375rem;display:block}ic-input-component-container.readonly .icon-container{margin-left:-0.313rem}ic-input-component-container.disabled ::-moz-placeholder{display:none}ic-input-component-container.disabled ::placeholder{display:none}ic-input-component-container .inline-success{margin:var(--ic-space-xs) 0.375rem;display:flex;align-items:center}ic-input-component-container.dark:hover{--border-color:var(--ic-architectural-400)}ic-input-component-container .inline-success>svg{fill:var(--ic-status-success);height:1.25rem;width:1.25rem}ic-input-component-container:hover{border:var(--ic-border-hover);color:var(--ic-action-dark-hover)}ic-input-component-container:focus{border:var(--ic-border-pressed)}.focus-indicator{display:flex;width:100%;margin:-0.125rem;padding:0.125rem;border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast)}.focus-indicator:focus-within,.focus-indicator-enabled{box-shadow:var(--ic-border-focus)}.focus-indicator.dark:focus-within{box-shadow:var(--ic-border-focus)}@media (forced-colors: active){ic-input-component-container,.focus-indicator{transition:none}ic-input-component-container:focus-within{border:var(--ic-border-width) solid Highlight;outline:0.125rem solid Highlight}ic-input-component-container.disabled,ic-input-component-container.disabled:hover{border:var(--ic-border-width) dashed GrayText}}";var InputContainer=function(){function InputContainer(hostRef){_classCallCheck(this,InputContainer),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.disabled=!1,this.readonly=!1}return _createClass(InputContainer,[{key:"render",value:function render(){var _class4;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.H,null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(_class4={},_class4["component-container"]=!0,_class4.disabled=this.disabled,_class4.readonly=this.readonly,_class4)},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null)))}}]),InputContainer}();InputContainer.style="ic-input-container .component-container{display:flex;flex-direction:column}";var InputLabel=function(){function InputLabel(hostRef){_classCallCheck(this,InputLabel),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.appearance="default",this.dark=!1,this.disabled=!1,this.error=!1,this.for=void 0,this.helperText="",this.label=void 0,this.readonly=!1,this.required=!1}return _createClass(InputLabel,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.a)([{prop:this.label,propName:"label"}],"Input Label")}},{key:"render",value:function render(){var _class5,_class6,_class7,disabled=this.disabled,readonly=this.readonly,label=this.label,required=this.required,helperText=this.helperText,error=this.error,dark=this.dark,appearance=this.appearance,labelText=required?label+" *":label,labelContent=readonly?""+labelText:(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("label",{htmlFor:this.for},labelText),id=(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.R)(this.for);return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class5={},_class5.disabled=disabled,_class5.readonly=readonly,_class5["with-helper"]=""!==helperText,_class5)},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"label",class:(_class6={},_class6["readonly-label"]=readonly,_class6["error-label"]=error&&!(readonly||disabled),_class6.dark=dark||"dark"===appearance,_class6)},labelContent),""!==helperText&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"caption",class:(_class7={},_class7.helpertext=!0,_class7["helpertext-normal"]=!disabled&&!readonly,_class7["helpertext-readonly"]=readonly,_class7)},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{id},helperText)))}}]),InputLabel}();InputLabel.style="ic-input-label{margin-bottom:var(--ic-space-xs)}ic-input-label.with-helper{margin-bottom:var(--ic-space-xxxs)}ic-input-label.readonly{color:var(--ic-color-tertiary-text)}ic-input-label .helpertext{margin-top:var(--ic-space-xxxs)}ic-input-label .helpertext-normal{color:var(--ic-color-secondary-text)}ic-input-label .helpertext-readonly{color:var(--ic-color-tertiary-text)}ic-input-label .readonly-label{color:var(--ic-color-secondary-text)}ic-input-label .error-label{color:var(--ic-status-error)}ic-input-label .dark{color:var(--ic-architectural-white)}";var icon=((_icon={})[_types_f21b86a9_js__WEBPACK_IMPORTED_MODULE_9__.e.Warning]=_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.T,_icon[_types_f21b86a9_js__WEBPACK_IMPORTED_MODULE_9__.e.Error]=_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.U,_icon[_types_f21b86a9_js__WEBPACK_IMPORTED_MODULE_9__.e.Success]=_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.Q,_icon),InputValidation=function(){function InputValidation(hostRef){_classCallCheck(this,InputValidation),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.ariaLiveMode="polite",this.for=void 0,this.fullWidth=!1,this.message=void 0,this.status=""}return _createClass(InputValidation,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.a)([{prop:this.message,propName:"message"}],"Input Validation")}},{key:"render",value:function render(){var _class8,_class9,displayIcon=""!==this.status?icon[this.status]:"",id=(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_10__.S)(this.for);return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class8={},_class8[this.status]=""!==this.status,_class8.fullwidth=this.fullWidth,_class8)},""!==displayIcon&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:(_class9={},_class9["status-icon"]=!0,_class9["icon-"+this.status]=!0,_class9),innerHTML:displayIcon}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"caption",class:"statustext"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{"aria-live":this.ariaLiveMode,id},this.message)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"validation-message-adornment"}))}},{key:"el",get:function get(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),InputValidation}();InputValidation.style="ic-input-validation{width:var(--input-width, 20rem);margin-top:var(--ic-space-xs);display:flex}ic-input-validation.fullwidth{width:100%}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-status-success)}ic-input-validation span.icon-error>svg{fill:var(--ic-status-error)}ic-input-validation span.icon-warning>svg{fill:var(--ic-status-warning)}ic-input-validation .statustext{flex-grow:1}"}}]);