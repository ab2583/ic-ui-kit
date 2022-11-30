(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"./dist/esm/ic-tab-context.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ic_tab_context",(function(){return TabContext}));__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-1500de1f.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var TabContext=function(){function TabContext(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabContext),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.g)(this,hostRef),this.tabSelect=Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"tabSelect",7),this.linkTabs=function(){_this.tabs.forEach((function(tab,index){var tabId="ic-tab-"+index+"-context-"+_this.contextId,tabPanelId="ic-tab-panel-"+index+"-context-"+_this.contextId,shared="ic-tab--"+index+"-context-"+_this.contextId;tab.setAttribute("id",tabId),tab.tabId=shared,tab.tabPosition=index,tab.setAttribute("aria-controls",tabPanelId),tab.setAttribute("context-id",_this.contextId),_this.tabPanels[index].setAttribute("id",tabPanelId),_this.tabPanels[index].panelId=shared,_this.tabPanels[index].tabPosition=index,_this.tabPanels[index].setAttribute("aria-labelledby",tabId),_this.appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.a.Light&&(tab.appearance=_this.appearance,_this.tabPanels[index].appearance=_this.appearance)})),_this.appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_9__.a.Light&&(_this.tabGroup.appearance=_this.appearance)},this.getChildren=function(){_this.tabGroup=Array.from(_this.host.querySelectorAll("ic-tab-group")).find((function(tabGroup){return tabGroup.contextId===_this.contextId})),_this.tabs=Array.from(_this.tabGroup.querySelectorAll("ic-tab")).filter((function(tab){return tab.contextId===_this.contextId})),_this.enabledTabs=_this.getEnabledTabs(),_this.tabPanels=Array.from(_this.host.querySelectorAll("ic-tab-panel"))},this.attatchEventListeners=function(){"automatic"===_this.activationType?_this.tabGroup.addEventListener("keydown",(function(event){_this.handleKeyBoardNavAutomatic(event)})):_this.tabGroup.addEventListener("keydown",(function(event){_this.handleKeyBoardNavManual(event)}))},this.setControlledMode=function(){void 0!==_this.selectedTabIndex&&(_this.controlledMode=!0,_this.selectedTab=_this.selectedTabIndex)},this.setInitialTab=function(){if(_this.controlledMode)_this.selectedTab=_this.selectedTabIndex,_this.focusedTabIndex=_this.selectedTabIndex;else{var firstEnabledTabIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[0].tabId}));_this.selectedTab=firstEnabledTabIndex,_this.focusedTabIndex=firstEnabledTabIndex}},this.configureTabs=function(){_this.enabledTabs.forEach((function(tab){tab.selected=tab.tabPosition===_this.selectedTab})),_this.tabPanels.forEach((function(tabPanel){tabPanel.selectedTab=_this.tabs[_this.selectedTab].tabId}))},this.getEnabledTabs=function(){return Array.from(_this.tabs).filter((function(child){return!child.disabled}))},this.getIndexOfEnabledTab=function(allTabsIndex){return _this.enabledTabs.findIndex((function(tab){return tab.tabId===_this.tabs[allTabsIndex].tabId}))},this.keyboardSelectTab=function(enabledTabIndex){var newIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[enabledTabIndex].tabId}));_this.enabledTabs[enabledTabIndex].focus(),_this.controlledMode?_this.tabSelect.emit({tabIndex:newIndex}):_this.selectedTab=newIndex},this.keyboardFocusTab=function(enabledTabIndex){var newIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[enabledTabIndex].tabId}));_this.enabledTabs[enabledTabIndex].focus(),_this.focusedTabIndex=newIndex},this.handleKeyBoardNavAutomatic=function(event){var key=event.key,enabledTabIndex=_this.getIndexOfEnabledTab(_this.selectedTab),preventDefault=!0;switch(key){case"Home":_this.keyboardSelectTab(0);break;case"End":_this.keyboardSelectTab(_this.enabledTabs.length-1);break;case"ArrowRight":enabledTabIndex<_this.enabledTabs.length-1?_this.keyboardSelectTab(enabledTabIndex+1):_this.keyboardSelectTab(0);break;case"ArrowLeft":enabledTabIndex>0?_this.keyboardSelectTab(enabledTabIndex-1):_this.keyboardSelectTab(_this.enabledTabs.length-1);break;default:preventDefault=!1}preventDefault&&event.preventDefault()},this.handleKeyBoardNavManual=function(event){var key=event.key,enabledTabIndex=_this.getIndexOfEnabledTab(_this.focusedTabIndex),preventDefault=!0;switch(key){case"Home":_this.keyboardFocusTab(0);break;case"End":_this.keyboardFocusTab(_this.enabledTabs.length-1);break;case"ArrowRight":enabledTabIndex<_this.enabledTabs.length-1?_this.keyboardFocusTab(enabledTabIndex+1):_this.keyboardFocusTab(0);break;case"ArrowLeft":enabledTabIndex>0?_this.keyboardFocusTab(enabledTabIndex-1):_this.keyboardFocusTab(_this.enabledTabs.length-1);break;case"Enter":case" ":_this.keyboardSelectTab(_this.focusedTabIndex);break;default:preventDefault=!1}preventDefault&&event.preventDefault()},this.contextId="default",this.activationType="automatic",this.selectedTabIndex=void 0,this.appearance="dark",this.selectedTab=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabContext,[{key:"updateSelectedTab",value:function updateSelectedTab(newValue){this.selectedTab=newValue}},{key:"tabClickHandler",value:function tabClickHandler(event){void 0===this.selectedTabIndex&&event.detail.contextId===this.contextId&&(this.selectedTab=event.detail.position),this.tabSelect.emit({tabIndex:event.detail.position})}},{key:"componentDidLoad",value:function componentDidLoad(){this.setControlledMode(),this.getChildren(),this.linkTabs(),this.attatchEventListeners(),this.setInitialTab(),this.configureTabs()}},{key:"componentWillUpdate",value:function componentWillUpdate(){this.configureTabs()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this2=this;"manual"===this.activationType?this.tabGroup.removeEventListener("keydown",(function(event){return _this2.handleKeyBoardNavManual(event)})):this.tabGroup.removeEventListener("keydown",(function(event){return _this2.handleKeyBoardNavAutomatic(event)}))}},{key:"render",value:function render(){return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.e)("slot",null)}},{key:"host",get:function get(){return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.d)(this)}}],[{key:"watchers",get:function get(){return{selectedTabIndex:["updateSelectedTab"]}}}]),TabContext}()},"./dist/esm/types-dd515332.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,"a",(function(){return IcThemeForegroundEnum})),__webpack_require__.d(__webpack_exports__,"b",(function(){return IcInformationStatus})),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))}}]);