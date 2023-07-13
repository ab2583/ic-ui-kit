"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4136],{"../web-components/dist/esm/ic-data-table.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_data_table:()=>DataTable});__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../web-components/dist/esm/index-3b144b17.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var DataTable=function(){function DataTable(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DataTable),(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.r)(this,hostRef),this.updateScrollOffset=function(){var tableRows=_this.el.shadowRoot.querySelector(".table-row-container");_this.scrollOffset=tableRows.scrollTop},this.sortRows=function(field){var sortButton=_this.el.shadowRoot.querySelector("#sort-button-"+field);if(""!==field){field!==_this.sortedRow&&(_this.sortedRow=field,_this.sortedRowOrder=_this.sortOptions.sortOrder[_this.sortOptions.sortOrder.indexOf("unsorted")]);var x=_this.sortOptions.sortOrder.indexOf(_this.sortedRowOrder);++x>_this.sortOptions.sortOrder.length-1&&(x=0),_this.sortedRowOrder=_this.sortOptions.sortOrder[x],sortButton.updateAriaLabel(_this.getSortButtonLabel(field))}},this.getSortButtonLabel=function(key){return _this.sortedRow===key&&"unsorted"===_this.sortOptions.sortOrder[(_this.sortOptions.sortOrder.indexOf(_this.sortedRowOrder)+1)%_this.sortOptions.sortOrder.length]?"Remove sort":_this.sortedRow===key&&"unsorted"!==_this.sortOptions.sortOrder[(_this.sortOptions.sortOrder.indexOf(_this.sortedRowOrder)+1)%_this.sortOptions.sortOrder.length]?"Sort "+_this.sortOptions.sortOrder[(_this.sortOptions.sortOrder.indexOf(_this.sortedRowOrder)+1)%_this.sortOptions.sortOrder.length]:"Sort "+_this.sortOptions.sortOrder[(_this.sortOptions.sortOrder.indexOf("unsorted")+1)%_this.sortOptions.sortOrder.length]},this.createColumnHeaders=function(){return _this.sortable?_this.columns.map((function(column){var _class,_class2;return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("th",{scope:"col",class:(_class={},_class["column-header"]=!0,_class["column-header-alignment-"+column.alignment]=void 0!==column.alignment,_class["table-density-"+_this.density]=!0,_class),colSpan:column.colspan},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:"column-header-inner-container"},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-typography",{variant:"subtitle-large"},column.title),(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-button",{variant:"icon",id:"sort-button-"+column.key,"aria-label":_this.getSortButtonLabel(column.key),onClick:function onClick(){return _this.sortRows(column.key)},innerHTML:_this.sortedRow===column.key&&"unsorted"!==_this.sortedRowOrder?"ascending"===_this.sortedRowOrder?'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-w2bhrx" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon" aria-label="fontSize medium" style="transform: rotate(-90deg);">\n    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>\n</svg>':'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-w2bhrx" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon" aria-label="fontSize medium" style="transform: rotate(90deg)">\n    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>\n</svg>':'<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-w2bhrx" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ImportExportIcon" aria-label="fontSize medium">\n    <path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>\n</svg>',class:(_class2={},_class2["sort-button"]=!0,_class2["sort-button-unsorted"]=_this.sortedRow!==column.key||"unsorted"===_this.sortedRowOrder,_class2)})))})):_this.columns.map((function(column){var _class3;return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("th",{scope:"col",class:(_class3={},_class3["column-header"]=!0,_class3["column-header-alignment-"+column.alignment]=void 0!==column.alignment,_class3["column-header-sticky"]=_this.stickyColumn,_class3["table-density-"+_this.density]=!0,_class3),colSpan:column.colspan},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-typography",{variant:"subtitle-large"},column.title))}))},this.getSortFunction=function(){switch(_this.sortedRowOrder){case"ascending":return function(a,b){return"object"==typeof a[_this.sortedRow]&&"object"!=typeof b[_this.sortedRow]?String(Object.values(a[_this.sortedRow])[0]).localeCompare(String(b[_this.sortedRow]),void 0,{numeric:!0,sensitivity:"base"}):"object"==typeof b[_this.sortedRow]&&"object"!=typeof a[_this.sortedRow]?String(a[_this.sortedRow]).localeCompare(String(Object.values(b[_this.sortedRow])[0]),void 0,{numeric:!0,sensitivity:"base"}):"object"==typeof a[_this.sortedRow]&&"object"==typeof b[_this.sortedRow]?String(Object.values(a[_this.sortedRow])[0]).localeCompare(String(Object.values(b[_this.sortedRow])[0]),void 0,{numeric:!0,sensitivity:"base"}):String(a[_this.sortedRow]).localeCompare(String(b[_this.sortedRow]),void 0,{numeric:!0,sensitivity:"base"})};case"descending":return function(a,b){return"object"==typeof b[_this.sortedRow]&&"object"!=typeof a[_this.sortedRow]?String(Object.values(b[_this.sortedRow])[0]).localeCompare(String(a[_this.sortedRow]),void 0,{numeric:!0,sensitivity:"base"}):"object"==typeof a[_this.sortedRow]&&"object"!=typeof b[_this.sortedRow]?String(b[_this.sortedRow]).localeCompare(String(Object.values(a[_this.sortedRow])[0]),void 0,{numeric:!0,sensitivity:"base"}):"object"==typeof a[_this.sortedRow]&&"object"==typeof b[_this.sortedRow]?String(Object.values(b[_this.sortedRow])[0]).localeCompare(String(Object.values(a[_this.sortedRow])[0]),void 0,{numeric:!0,sensitivity:"base"}):String(b[_this.sortedRow]).localeCompare(String(a[_this.sortedRow]),void 0,{numeric:!0,sensitivity:"base"})};default:return}},this.createRows=function(){var _a;return _this.showPagination?_this.data.slice(_this.fromRow,_this.toRow).sort(_this.sortable?_this.getSortFunction():void 0).map((function(row){var _class4;return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("tr",{class:(_class4={},_class4["table-row"]=!0,_class4["table-density-"+_this.density]=!0,_class4)},_this.createCells(row))})):null===(_a=_this.data)||void 0===_a?void 0:_a.slice().sort(_this.sortable?_this.getSortFunction():void 0).map((function(row){var _class5;return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("tr",{class:(_class5={},_class5["table-row"]=!0,_class5["table-density-"+_this.density]=!0,_class5)},_this.createCells(row))}))},this.createCells=function(row){var rowValues=Object.values(row),rowKeys=Object.keys(row);if(rowKeys.indexOf("header")>-1)var rowAlignment=Object.values(rowValues[rowKeys.indexOf("header")])[Object.keys(rowValues[rowKeys.indexOf("header")]).indexOf("cellAlignment")],rowEmphasis=Object.values(rowValues[rowKeys.indexOf("header")])[Object.keys(rowValues[rowKeys.indexOf("header")]).indexOf("emphasis")];return"header"===rowKeys[0]?rowValues.map((function(cell,index){var _class6,_class7,_class8,_a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o;return 0===index?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("th",{scope:"row",colSpan:Object.values(cell)[Object.keys(cell).indexOf("colspan")],class:(_class6={},_class6["row-header"]=!0,_class6["row-header-alignment-"+Object.values(cell)[Object.keys(cell).indexOf("alignment")]]=void 0!==Object.values(cell)[Object.keys(cell).indexOf("alignment")],_class6["row-header-sticky"]=_this.stickyRow,_class6)},Object.values(cell)[0]):"cellAlignment"!==rowKeys[index]&&"emphasis"!==rowKeys[index]?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("td",{innerHTML:"element"===(null===(_a=_this.columns[index])||void 0===_a?void 0:_a.dataType)?cell:null,class:(_class7={},_class7["table-cell"]=!0,_class7["data-type-"+(null===(_b=_this.columns[index])||void 0===_b?void 0:_b.dataType)]=!0,_class7["cell-alignment-"+((null===(_d=null===(_c=_this.columns[index])||void 0===_c?void 0:_c.cellAlignment)||void 0===_d?void 0:_d.horizontal)||("object"==typeof cell&&Object.keys(cell).includes("alignment")?Object.values(Object.values(cell)[Object.keys(cell).indexOf("alignment")])[Object.keys(Object.values(cell)[Object.keys(cell).indexOf("alignment")]).indexOf("horizontal")]:null))]=void 0!==(null===(_f=null===(_e=_this.columns[index])||void 0===_e?void 0:_e.cellAlignment)||void 0===_f?void 0:_f.horizontal)||("object"==typeof cell&&Object.keys(cell).includes("alignment")?void 0!==Object.values(Object.values(cell)[Object.keys(cell).indexOf("alignment")])[Object.keys(Object.values(cell)[Object.keys(cell).indexOf("alignment")]).indexOf("horizontal")]:null),_class7["cell-alignment-"+((null===(_h=null===(_g=_this.columns[index])||void 0===_g?void 0:_g.cellAlignment)||void 0===_h?void 0:_h.vertical)||rowAlignment||("object"==typeof cell&&Object.keys(cell).includes("alignment")?Object.values(Object.values(cell)[Object.keys(cell).indexOf("alignment")])[Object.keys(Object.values(cell)[Object.keys(cell).indexOf("alignment")]).indexOf("vertical")]:null))]=void 0!==(null===(_k=null===(_j=_this.columns[index])||void 0===_j?void 0:_j.cellAlignment)||void 0===_k?void 0:_k.vertical)||void 0!==rowAlignment||("object"==typeof cell&&Object.keys(cell).includes("alignment")?void 0!==Object.values(Object.values(cell)[Object.keys(cell).indexOf("alignment")])[Object.keys(Object.values(cell)[Object.keys(cell).indexOf("alignment")]).indexOf("vertical")]:null),_class7)},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-typography",{variant:"body",class:(_class8={},_class8["cell-emphasis-"+(("object"==typeof cell?Object.values(cell)[Object.keys(cell).indexOf("emphasis")]:null)||(null===(_l=_this.columns[index])||void 0===_l?void 0:_l.emphasis)||rowEmphasis)]=("object"==typeof cell?void 0!==Object.values(cell)[Object.keys(cell).indexOf("emphasis")]:null)||void 0!==(null===(_m=_this.columns[index])||void 0===_m?void 0:_m.emphasis)||void 0!==rowEmphasis,_class8)},"object"==typeof cell?Object.keys(cell).includes("href")?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-link",{href:Object.values(cell)[Object.keys(cell).indexOf("href")]},Object.values(cell)[0]):Object.values(cell)[0]:"element"!==(null===(_o=_this.columns[index])||void 0===_o?void 0:_o.dataType)?cell:null)):null})):Object.values(row).map((function(cell,index){var _class9,_class10,_a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o;return"cellAlignment"!==rowKeys[index]&&"emhpasis"!==rowKeys[index]?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("td",{innerHTML:"element"===(null===(_a=_this.columns[index])||void 0===_a?void 0:_a.dataType)?cell:null,class:(_class9={},_class9["table-cell"]=!0,_class9["data-type-"+(null===(_b=_this.columns[index])||void 0===_b?void 0:_b.dataType)]=!0,_class9["cell-alignment-"+((null===(_d=null===(_c=_this.columns[index])||void 0===_c?void 0:_c.cellAlignment)||void 0===_d?void 0:_d.horizontal)||("object"==typeof cell&&Object.keys(cell).includes("alignment")?Object.values(Object.values(cell)[Object.keys(cell).indexOf("alignment")])[Object.keys(Object.values(cell)[Object.keys(cell).indexOf("alignment")]).indexOf("horizontal")]:null))]=void 0!==(null===(_f=null===(_e=_this.columns[index])||void 0===_e?void 0:_e.cellAlignment)||void 0===_f?void 0:_f.horizontal)||("object"==typeof cell&&Object.keys(cell).includes("alignment")?void 0!==Object.values(Object.values(cell)[Object.keys(cell).indexOf("alignment")])[Object.keys(Object.values(cell)[Object.keys(cell).indexOf("alignment")]).indexOf("horizontal")]:null),_class9["cell-alignment-"+((null===(_h=null===(_g=_this.columns[index])||void 0===_g?void 0:_g.cellAlignment)||void 0===_h?void 0:_h.vertical)||rowAlignment||("object"==typeof cell&&Object.keys(cell).includes("alignment")?Object.values(Object.values(cell)[Object.keys(cell).indexOf("alignment")])[Object.keys(Object.values(cell)[Object.keys(cell).indexOf("alignment")]).indexOf("vertical")]:null))]=void 0!==(null===(_k=null===(_j=_this.columns[index])||void 0===_j?void 0:_j.cellAlignment)||void 0===_k?void 0:_k.vertical)||void 0!==rowAlignment||("object"==typeof cell&&Object.keys(cell).includes("alignment")?void 0!==Object.values(Object.values(cell)[Object.keys(cell).indexOf("alignment")])[Object.keys(Object.values(cell)[Object.keys(cell).indexOf("alignment")]).indexOf("vertical")]:null),_class9)},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("slot",{name:"object"==typeof cell?Object.values(cell)[Object.keys(cell).indexOf("slot")]:null},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-typography",{variant:"body",class:(_class10={},_class10["cell-emphasis-"+(("object"==typeof cell?Object.values(cell)[Object.keys(cell).indexOf("emphasis")]:null)||(null===(_l=_this.columns[index])||void 0===_l?void 0:_l.emphasis)||rowEmphasis)]=("object"==typeof cell?void 0!==Object.values(cell)[Object.keys(cell).indexOf("emphasis")]:null)||void 0!==(null===(_m=_this.columns[index])||void 0===_m?void 0:_m.emphasis)||void 0!==rowEmphasis,_class10)},"object"==typeof cell?Object.keys(cell).includes("href")?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-link",{href:Object.values(cell)[Object.keys(cell).indexOf("href")]},Object.values(cell)[0]):Object.values(cell)[0]:"element"!==(null===(_o=_this.columns[index])||void 0===_o?void 0:_o.dataType)?cell:null))):null}))},this.columns=void 0,this.data=void 0,this.caption=void 0,this.hideColumnHeaders=!1,this.density="default",this.stickyColumn=!1,this.stickyRow=!1,this.embedded=!1,this.showPagination=!1,this.sortable=!1,this.sortOptions={sortOrder:["unsorted","ascending","descending"],defaultColumn:""},this.paginationOptions={itemsPerPage:[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}]},this.scrollable=!1,this.fromRow=0,this.toRow=Number(this.paginationOptions.itemsPerPage[0].value),this.rowsPerPage=Number(this.paginationOptions.itemsPerPage[0].value),this.previousRowsPerPage=this.rowsPerPage,this.sortedRow=this.sortOptions.defaultColumn,this.sortedRowOrder=this.sortOptions.sortOrder[0],this.scrollOffset=0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DataTable,[{key:"handleItemsPerPageChange",value:function handleItemsPerPageChange(ev){this.previousRowsPerPage=this.rowsPerPage,this.rowsPerPage=ev.detail.value}},{key:"handlePageChange",value:function handlePageChange(ev){this.fromRow=(ev.detail.value-1)*this.rowsPerPage,this.toRow=this.fromRow+this.rowsPerPage;var tableRows=this.el.shadowRoot.querySelector(".table-row-container");this.previousRowsPerPage===this.rowsPerPage?tableRows.scrollTop=0:this.previousRowsPerPage<this.rowsPerPage?(tableRows.scrollTop=this.scrollOffset,this.previousRowsPerPage=this.rowsPerPage):this.previousRowsPerPage=this.rowsPerPage}},{key:"componentDidLoad",value:function componentDidLoad(){var tableRows=this.el.shadowRoot.querySelector("table"),tableContainer=this.el.shadowRoot.querySelector(".table-container");tableRows.clientHeight>tableContainer.clientHeight&&(this.scrollable=!0)}},{key:"render",value:function render(){var _class11,_class12,caption=this.caption,hideColumnHeaders=this.hideColumnHeaders,showPagination=this.showPagination,paginationOptions=this.paginationOptions;return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:"table-container"},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:(_class11={},_class11["table-row-container"]=!0,_class11.scrollable=this.scrollable,_class11),tabIndex:this.scrollable?0:null,onScroll:this.updateScrollOffset},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("table",null,(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("caption",{class:"table-caption"},caption),!1===hideColumnHeaders?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("thead",{class:(_class12={},_class12["column-header-sticky"]=this.stickyColumn,_class12["column-header-overlay"]=this.stickyColumn&&0!==this.scrollOffset,_class12)},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("tr",null,this.createColumnHeaders())):null,(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("tbody",null,this.createRows()))),showPagination?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:"pagination-container"},(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("ic-pagination-bar",{totalItems:this.data.length,paginationType:"data",showItemsPerPageControl:!0,showGoToPageControl:!0,itemsPerPageOptions:paginationOptions.itemsPerPage})):null,this.sortable?(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.h)("div",{class:"screen-reader-sort-text","aria-live":"polite"},"unsorted"!==this.sortedRowOrder||null===this.sortedRow?this.sortedRow+" sorted "+this.sortedRowOrder:"table unsorted"):null)}},{key:"el",get:function get(){return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_15__.g)(this)}}]),DataTable}();DataTable.style=':host{position:relative;display:block;height:100%;max-height:100%}.table-container{position:relative;height:calc(100% - 2px)}.table-row-container{position:relative;height:100%;overflow:auto;transition:var(--ic-easing-transition-fast)}.table-row-container{overflow-anchor:none}:host([show-pagination="true"]) .table-row-container{height:calc(100% - 57px)}table{table-layout:fixed;border-spacing:0;width:100%}.table-row-container:focus{outline:none;box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast);z-index:1}:host([embedded="true"]) .table-container{border:solid var(--ic-architectural-200) 1px}.column-header-sticky{position:sticky;top:0;z-index:1}.column-header-overlay{position:sticky;top:0;z-index:1;box-shadow:0 6px 8px -4px rgb(0 0 0 / 20%)}.row-header-sticky{position:sticky;left:0}.column-header,.table-row{box-sizing:border-box}.column-header-inner-container{display:flex;align-items:center}.sort-button{margin-left:auto}.sort-button:hover{background-color:var(--ic-action-dark-bg-hover)}.sort-button:active{background-color:var(--ic-action-dark-bg-active)}.sort-button svg{color:black}.sort-button-unsorted svg{color:var(--ic-color-tertiary-text)}.table-density-default{height:40px}.table-density-dense{height:32px}.table-density-spacious{height:48px}.column-header,.row-header{text-align:left;padding:8px;background-color:var(--ic-architectural-40);border-right:solid var(--ic-architectural-200) 1px;border-bottom:solid var(--ic-architectural-200) 1px}.column-header:last-child{border-right:none}.scrollable .column-header:last-child{border-right:solid var(--ic-architectural-200) 1px !important}:host([embedded="true"]) tr:last-child .table-cell,:host([embedded="true"]) tr:last-child .row-header{border-bottom:none}.column-header-alignment-left,.row-header-alignment-left{text-align:left}.column-header-alignment-right,.row-header-alignment-right{text-align:right}.column-header-alignment-center,.row-header-alignment-center{text-align:center}.table-row:nth-child(even){background-color:var(--ic-architectural-20)}.table-cell{padding:8px;border-bottom:solid var(--ic-architectural-100) 1px}.data-type-string{text-align:left;vertical-align:top}.data-type-number{text-align:right;vertical-align:top}.cell-alignment-left{text-align:left}.cell-alignment-right{text-align:right}.cell-alignment-center{text-align:center}.cell-alignment-top{vertical-align:top}.cell-alignment-middle{vertical-align:middle}.cell-alignment-bottom{vertical-align:bottom}.cell-emphasis-low{color:var(--ic-color-secondary-text)}.cell-emphasis-high{font-weight:700}.pagination-container{background-color:var(--ic-architectural-40);border-top:solid var(--ic-architectural-200) 1px}.screen-reader-sort-text,.table-caption{display:none}'}}]);