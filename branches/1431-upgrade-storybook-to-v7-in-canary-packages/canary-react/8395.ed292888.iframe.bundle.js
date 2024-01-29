"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[8395],{"../web-components/dist/esm/ic-text-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_text_field:()=>TextField});var _index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-05003e1c.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-c597f246.js");let inputIds=0;const TextField=class{constructor(hostRef){(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.getValidationText=(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"getValidationText",7),this.icBlur=(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icBlur",7),this.icChange=(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icFocus=(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icFocus",7),this.icInput=(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInput",7),this.icKeydown=(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icKeydown",7),this.inheritedAttributes={},this.showLeftIcon=this.hasLeftIconSlot(),this.getMaxLengthExceeded=value=>{this.numChars=value.length,"number"===this.type&&(this.minValueUnattained=!!(value&&Number(value)<Number(this.min)),this.maxValueExceeded=Number(value)>Number(this.max)),this.maxLength>0&&(this.maxLengthExceeded=value.length>this.maxLength)},this.onInput=ev=>{this.value=ev.target.value,this.icInput.emit({value:this.value})},this.onBlur=ev=>{const value=ev.target.value;this.icBlur.emit({value})},this.onFocus=ev=>{const value=ev.target.value;this.icFocus.emit({value})},this.isTextArea=()=>this.rows>1,this.getInlineValidationText=()=>{this.getValidationText.emit({value:this.validationText})},this.hasStatus=status=>""!==status&&!this.disabled,this.showStatusText=status=>this.hasStatus(status)&&!(status==_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Success&&this.validationInline)&&!this.validationInlineInternal,this.handleFormReset=()=>{this.value=this.initialValue},this.numChars=0,this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1,this.ariaActiveDescendant=void 0,this.ariaAutocomplete=void 0,this.ariaExpanded=void 0,this.ariaOwns=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autoFocus=!1,this.disabled=!1,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.hiddenInput=!0,this.inputId="ic-text-field-input-"+inputIds++,this.inputmode="text",this.label=void 0,this.max=void 0,this.maxLength=0,this.min=void 0,this.name=this.inputId,this.placeholder="",this.readonly=!1,this.required=!1,this.resize=!1,this.role=void 0,this.rows=1,this.size="default",this.small=!1,this.spellcheck=!1,this.truncateValue=void 0,this.type="text",this.validationInline=!1,this.validationInlineInternal=!1,this.validationStatus="",this.validationText="",this.debounce=0,this.value="",this.initialValue=this.value}debounceChanged(){this.icChange=(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.M)(this.icChange,this.debounce)}watchValueHandler(newValue){this.inputEl&&this.inputEl.value!==newValue&&(this.inputEl.value=newValue),this.getMaxLengthExceeded(newValue),this.icChange.emit({value:newValue})}connectedCallback(){this.debounceChanged()}disconnectedCallback(){(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.m)(this.el,this.handleFormReset)}componentWillLoad(){this.value!==this.initialValue&&this.watchValueHandler(this.value),this.getMaxLengthExceeded(this.value),this.inheritedAttributes=(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.w)(this.el,[..._helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.x,"title"]),this.readonly&&(this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1),(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.l)(this.el,this.handleFormReset),(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.j)(this.disabled,this.el)}componentDidLoad(){(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.label,propName:"label"}],"Text Field"),this.validationInlineInternal&&this.getInlineValidationText()}handleKeyDown(ev){this.icKeydown.emit({event:ev})}async setFocus(){this.inputEl&&this.inputEl.focus()}hasLeftIconSlot(){return null!==this.el.querySelector('[slot="icon"]')}render(){const{inputId,name,label,required,size,small,placeholder,helperText,rows,resize,disabled,value,min,max,maxLength,numChars,readonly,maxLengthExceeded,minValueUnattained,maxValueExceeded,validationStatus,validationText,validationInline,validationInlineInternal,spellcheck,inputmode,fullWidth,truncateValue,hiddenInput}=this,disabledMode=!!readonly||disabled,placeholderText=disabled?"":placeholder,currentStatus=maxLengthExceeded||maxValueExceeded||minValueUnattained?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Error:validationStatus,currentValidationText=maxLengthExceeded?"Maximum length exceeded":maxValueExceeded?`Maximum value of ${max} exceeded`:minValueUnattained?`Minimum value of ${min} not met`:validationText,maxNumChars=readonly?0:maxLength,messageAriaLive=maxLengthExceeded||maxValueExceeded||minValueUnattained||0===maxLength&&currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Error?"assertive":"polite",showStatusText=this.showStatusText(currentStatus),multiline=this.isTextArea(),hiddenCharCountDescId=maxLength>0?inputId+"-charcount-desc":"",describedBy=(hiddenCharCountDescId+" "+(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.q)(inputId,""!==helperText,showStatusText)).trim();this.showLeftIcon&&!readonly&&disabledMode&&(this.showLeftIcon=!1);const invalid=currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Error?"true":"false",disabledText=disabledMode&&!readonly;return hiddenInput&&(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.n)(!0,this.el,name,value,disabledMode),(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{fullwidth:fullWidth}},(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-container",{readonly,disabled:disabledMode},!this.hideLabel&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{for:inputId,label,helperText,required,disabled:disabledText,readonly}),(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-component-container",{size:small?"small":size,validationStatus:currentStatus,multiLine:multiline,disabled:disabledMode,readonly,validationInline,fullWidth},this.showLeftIcon&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{readonly,"has-value":value.length>0},slot:"left-icon"},(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),!multiline&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",Object.assign({id:inputId,name,ref:el=>this.inputEl=el,type:this.type,min,max,value,class:{"no-left-pad":!this.showLeftIcon&&readonly,readonly,"truncate-value":truncateValue},placeholder:placeholderText,required,disabled:disabledMode,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode,role:this.role},this.inheritedAttributes)),multiline&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea",Object.assign({id:inputId,class:{"no-resize":!1===resize||readonly,"no-left-pad":!this.showLeftIcon&&readonly,readonly},name,ref:el=>this.inputEl=el,value,rows,required,disabled:disabledMode,placeholder:placeholderText,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode},this.inheritedAttributes)),(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"clear-button")&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"clear-button"}),(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"search-submit-button")&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"search-submit-button"})),(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"menu")&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"menu"}),(!(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.G)(validationStatus)||!(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_2__.G)(validationText)||maxNumChars>0||maxValueExceeded||minValueUnattained)&&!validationInlineInternal&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{status:!1===this.hasStatus(currentStatus)||currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_1__.a.Success&&validationInline||validationInlineInternal?"":currentStatus,message:showStatusText?currentValidationText:"",ariaLiveMode:messageAriaLive,for:inputId,fullWidth},!readonly&&maxNumChars>0&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{slot:"validation-message-adornment"},(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:{maxlengthtext:!0,error:maxLengthExceeded,disabled:disabledText}},(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-live":"polite",id:`${inputId}-charcount`,class:"charcount"},numChars,"/",maxNumChars),(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{hidden:!0,id:hiddenCharCountDescId},"Field can contain a maximum of ",maxNumChars," characters."))))))}get el(){return(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{debounce:["debounceChanged"],value:["watchValueHandler"]}}};TextField.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.fullwidth){width:100%}::-moz-placeholder{color:var(--ic-color-tertiary-text);opacity:1}::placeholder{color:var(--ic-color-tertiary-text);opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs)}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(--ic-architectural-200)}input.readonly,textarea.readonly{color:var(--ic-color-primary-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.maxlengthtext{color:var(--ic-color-secondary-text)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.charcount{margin-right:calc(-1 * var(--ic-space-xxxs))}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);