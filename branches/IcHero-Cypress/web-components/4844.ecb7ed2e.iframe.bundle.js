"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4844],{"./dist/esm/ic-empty-state.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_empty_state:()=>EmptyState});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_821dcdf2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-821dcdf2.js");__webpack_require__("./dist/esm/types-6f6b41a5.js");const EmptyState=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.aligned="left",this.body=void 0,this.bodyMaxLines=void 0,this.heading=void 0,this.imageSize="default",this.subheading=void 0}componentDidLoad(){!(0,_helpers_821dcdf2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")&&(0,_helpers_821dcdf2_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.heading,propName:"heading"}],"Empty State")}render(){const{aligned,body,bodyMaxLines,heading,imageSize,subheading}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`${aligned}`]:!0,[`image-${imageSize}`]:(0,_helpers_821dcdf2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")}},(0,_helpers_821dcdf2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"image"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4"},heading)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"subheading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small"},subheading)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{maxLines:bodyMaxLines},body))),(0,_helpers_821dcdf2_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"actions")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"action-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"actions"})))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};EmptyState.style=":host{gap:var(--ic-space-xs);padding:var(--ic-space-xs)}:host,.action-area{display:flex;flex-direction:column}.action-area{gap:var(--ic-space-md)}:host ::slotted(svg),:host ::slotted(img){border-radius:var(--ic-space-xxs)}:host(.right),:host(.right) .action-area{align-items:flex-end;text-align:right}:host(.center),:host(.center) .action-area{align-items:center;text-align:center}:host(.image-default) ::slotted(svg),:host(.image-default) ::slotted(img){height:calc(3 * var(--ic-space-lg)) !important;width:calc(3 * var(--ic-space-lg)) !important}:host(.image-small) ::slotted(svg),:host(.image-small) ::slotted(img){height:var(--ic-space-xxl) !important;width:var(--ic-space-xxl) !important}:host(.image-large) ::slotted(svg),:host(.image-large) ::slotted(img){height:calc(4 * var(--ic-space-xl)) !important;width:calc(4 * var(--ic-space-xl)) !important}"}}]);