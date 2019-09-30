function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default~main-details-details-module~main-main-module"],{/***/"./node_modules/@angular/cdk/esm2015/a11y.js":/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/a11y.js ***!
  \***************************************************/ /*! exports provided: ARIA_DESCRIBER_PROVIDER_FACTORY, MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LIVE_ANNOUNCER_PROVIDER_FACTORY, LiveAnnouncer, CdkAriaLive, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, FOCUS_MONITOR_PROVIDER_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */ /***/function node_modulesAngularCdkEsm2015A11yJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ARIA_DESCRIBER_PROVIDER_FACTORY",function(){return ARIA_DESCRIBER_PROVIDER_FACTORY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MESSAGES_CONTAINER_ID",function(){return MESSAGES_CONTAINER_ID});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CDK_DESCRIBEDBY_ID_PREFIX",function(){return CDK_DESCRIBEDBY_ID_PREFIX});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CDK_DESCRIBEDBY_HOST_ATTRIBUTE",function(){return CDK_DESCRIBEDBY_HOST_ATTRIBUTE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AriaDescriber",function(){return AriaDescriber});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ARIA_DESCRIBER_PROVIDER",function(){return ARIA_DESCRIBER_PROVIDER});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ActiveDescendantKeyManager",function(){return ActiveDescendantKeyManager});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FocusKeyManager",function(){return FocusKeyManager});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ListKeyManager",function(){return ListKeyManager});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FocusTrap",function(){return FocusTrap});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FocusTrapFactory",function(){return FocusTrapFactory});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CdkTrapFocus",function(){return CdkTrapFocus});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"InteractivityChecker",function(){return InteractivityChecker});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LIVE_ANNOUNCER_PROVIDER_FACTORY",function(){return LIVE_ANNOUNCER_PROVIDER_FACTORY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LiveAnnouncer",function(){return LiveAnnouncer});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CdkAriaLive",function(){return CdkAriaLive});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LIVE_ANNOUNCER_PROVIDER",function(){return LIVE_ANNOUNCER_PROVIDER});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY",function(){return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LIVE_ANNOUNCER_ELEMENT_TOKEN",function(){return LIVE_ANNOUNCER_ELEMENT_TOKEN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LIVE_ANNOUNCER_DEFAULT_OPTIONS",function(){return LIVE_ANNOUNCER_DEFAULT_OPTIONS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FOCUS_MONITOR_PROVIDER_FACTORY",function(){return FOCUS_MONITOR_PROVIDER_FACTORY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TOUCH_BUFFER_MS",function(){return TOUCH_BUFFER_MS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FocusMonitor",function(){return FocusMonitor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CdkMonitorFocus",function(){return CdkMonitorFocus});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FOCUS_MONITOR_PROVIDER",function(){return FOCUS_MONITOR_PROVIDER});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isFakeMousedownFromScreenReader",function(){return isFakeMousedownFromScreenReader});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"A11yModule",function(){return A11yModule});/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/cdk/keycodes */"./node_modules/@angular/cdk/esm2015/keycodes.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/* harmony import */var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @angular/cdk/platform */"./node_modules/@angular/cdk/esm2015/platform.js");/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! @angular/cdk/observers */"./node_modules/@angular/cdk/esm2015/observers.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * IDs are deliminated by an empty space, as per the spec.
 * @type {?}
 */var ID_DELIMINATOR=" ";/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */function addAriaReferencedId(el,attr,id){/** @type {?} */var ids=getAriaReferenceIds(el,attr);if(ids.some(/**
     * @param {?} existingId
     * @return {?}
     */function(existingId){return existingId.trim()==id.trim()})){return}ids.push(id.trim());el.setAttribute(attr,ids.join(ID_DELIMINATOR))}/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */function removeAriaReferencedId(el,attr,id){/** @type {?} */var ids=getAriaReferenceIds(el,attr);/** @type {?} */var filteredIds=ids.filter(/**
     * @param {?} val
     * @return {?}
     */function(val){return val!=id.trim()});if(filteredIds.length){el.setAttribute(attr,filteredIds.join(ID_DELIMINATOR))}else{el.removeAttribute(attr)}}/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */function getAriaReferenceIds(el,attr){// Get string array of all individual ids (whitespace deliminated) in the attribute value
return(el.getAttribute(attr)||"").match(/\S+/g)||[]}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * ID used for the body container where all messages are appended.
 * @type {?}
 */var MESSAGES_CONTAINER_ID="cdk-describedby-message-container";/**
 * ID prefix used for each created message element.
 * @type {?}
 */var CDK_DESCRIBEDBY_ID_PREFIX="cdk-describedby-message";/**
 * Attribute given to each host element that is described by a message element.
 * @type {?}
 */var CDK_DESCRIBEDBY_HOST_ATTRIBUTE="cdk-describedby-host";/**
 * Global incremental identifier for each registered message element.
 * @type {?}
 */var nextId=0;/**
 * Global map of all registered message elements that have been placed into the document.
 * @type {?}
 */var messageRegistry=new Map;/**
 * Container for all registered messages.
 * @type {?}
 */var messagesContainer=null;/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */var AriaDescriber=/*#__PURE__*/function(){/**
     * @param {?} _document
     */function AriaDescriber(_document){this._document=_document}/**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */var _proto=AriaDescriber.prototype;_proto.describe=function describe(hostElement,message){if(!this._canBeDescribed(hostElement,message)){return}if(typeof message!=="string"){// We need to ensure that the element has an ID.
this._setMessageId(message);messageRegistry.set(message,{messageElement:message,referenceCount:0})}else if(!messageRegistry.has(message)){this._createMessageElement(message)}if(!this._isElementDescribedByMessage(hostElement,message)){this._addMessageReference(hostElement,message)}}/**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */;_proto.removeDescription=function removeDescription(hostElement,message){if(!this._isElementNode(hostElement)){return}if(this._isElementDescribedByMessage(hostElement,message)){this._removeMessageReference(hostElement,message)}// If the message is a string, it means that it's one that we created for the
// consumer so we can remove it safely, otherwise we should leave it in place.
if(typeof message==="string"){/** @type {?} */var registeredMessage=messageRegistry.get(message);if(registeredMessage&&registeredMessage.referenceCount===0){this._deleteMessageElement(message)}}if(messagesContainer&&messagesContainer.childNodes.length===0){this._deleteMessagesContainer()}}/**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */;_proto.ngOnDestroy=function ngOnDestroy(){/** @type {?} */var describedElements=this._document.querySelectorAll("["+CDK_DESCRIBEDBY_HOST_ATTRIBUTE+"]");for(var i=0;i<describedElements.length;i++){this._removeCdkDescribedByReferenceIds(describedElements[i]);describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE)}if(messagesContainer){this._deleteMessagesContainer()}messageRegistry.clear()}/**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @private
     * @param {?} message
     * @return {?}
     */;_proto._createMessageElement=function _createMessageElement(message){/** @type {?} */var messageElement=this._document.createElement("div");this._setMessageId(messageElement);messageElement.textContent=message;this._createMessagesContainer();/** @type {?} */messagesContainer.appendChild(messageElement);messageRegistry.set(message,{messageElement:messageElement,referenceCount:0})}/**
     * Assigns a unique ID to an element, if it doesn't have one already.
     * @private
     * @param {?} element
     * @return {?}
     */;_proto._setMessageId=function _setMessageId(element){if(!element.id){element.id=CDK_DESCRIBEDBY_ID_PREFIX+"-"+nextId++}}/**
     * Deletes the message element from the global messages container.
     * @private
     * @param {?} message
     * @return {?}
     */;_proto._deleteMessageElement=function _deleteMessageElement(message){/** @type {?} */var registeredMessage=messageRegistry.get(message);/** @type {?} */var messageElement=registeredMessage&&registeredMessage.messageElement;if(messagesContainer&&messageElement){messagesContainer.removeChild(messageElement)}messageRegistry.delete(message)}/**
     * Creates the global container for all aria-describedby messages.
     * @private
     * @return {?}
     */;_proto._createMessagesContainer=function _createMessagesContainer(){if(!messagesContainer){/** @type {?} */var preExistingContainer=this._document.getElementById(MESSAGES_CONTAINER_ID);// When going from the server to the client, we may end up in a situation where there's
// already a container on the page, but we don't have a reference to it. Clear the
// old container so we don't get duplicates. Doing this, instead of emptying the previous
// container, should be slightly faster.
if(preExistingContainer){/** @type {?} */preExistingContainer.parentNode.removeChild(preExistingContainer)}messagesContainer=this._document.createElement("div");messagesContainer.id=MESSAGES_CONTAINER_ID;messagesContainer.setAttribute("aria-hidden","true");messagesContainer.style.display="none";this._document.body.appendChild(messagesContainer)}}/**
     * Deletes the global messages container.
     * @private
     * @return {?}
     */;_proto._deleteMessagesContainer=function _deleteMessagesContainer(){if(messagesContainer&&messagesContainer.parentNode){messagesContainer.parentNode.removeChild(messagesContainer);messagesContainer=null}}/**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @private
     * @param {?} element
     * @return {?}
     */;_proto._removeCdkDescribedByReferenceIds=function _removeCdkDescribedByReferenceIds(element){// Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
/** @type {?} */var originalReferenceIds=getAriaReferenceIds(element,"aria-describedby").filter(/**
         * @param {?} id
         * @return {?}
         */function(id){return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX)!=0});element.setAttribute("aria-describedby",originalReferenceIds.join(" "))}/**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */;_proto._addMessageReference=function _addMessageReference(element,message){/** @type {?} */var registeredMessage=/** @type {?} */messageRegistry.get(message);// Add the aria-describedby reference and set the
// describedby_host attribute to mark the element.
addAriaReferencedId(element,"aria-describedby",registeredMessage.messageElement.id);element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE,"");registeredMessage.referenceCount++}/**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */;_proto._removeMessageReference=function _removeMessageReference(element,message){/** @type {?} */var registeredMessage=/** @type {?} */messageRegistry.get(message);registeredMessage.referenceCount--;removeAriaReferencedId(element,"aria-describedby",registeredMessage.messageElement.id);element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE)}/**
     * Returns true if the element has been described by the provided message ID.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */;_proto._isElementDescribedByMessage=function _isElementDescribedByMessage(element,message){/** @type {?} */var referenceIds=getAriaReferenceIds(element,"aria-describedby");/** @type {?} */var registeredMessage=messageRegistry.get(message);/** @type {?} */var messageId=registeredMessage&&registeredMessage.messageElement.id;return!!messageId&&referenceIds.indexOf(messageId)!=-1}/**
     * Determines whether a message can be described on a particular element.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */;_proto._canBeDescribed=function _canBeDescribed(element,message){if(!this._isElementNode(element)){return false}if(message&&typeof message==="object"){// We'd have to make some assumptions about the description element's text, if the consumer
// passed in an element. Assume that if an element is passed in, the consumer has verified
// that it can be used as a description.
return true}/** @type {?} */var trimmedMessage=message==null?"":(""+message).trim();/** @type {?} */var ariaLabel=element.getAttribute("aria-label");// We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
// element, because screen readers will end up reading out the same text twice in a row.
return trimmedMessage?!ariaLabel||ariaLabel.trim()!==trimmedMessage:false}/**
     * Checks whether a node is an Element node.
     * @private
     * @param {?} element
     * @return {?}
     */;_proto._isElementNode=function _isElementNode(element){return element.nodeType===this._document.ELEMENT_NODE};return AriaDescriber}();AriaDescriber.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */AriaDescriber.ctorParameters=function(){return[{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]}]}]};/** @nocollapse */AriaDescriber.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function AriaDescriber_Factory(){return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))},token:AriaDescriber,providedIn:"root"});/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} _document
 * @return {?}
 */function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher,_document){return parentDispatcher||new AriaDescriber(_document)}/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */var ARIA_DESCRIBER_PROVIDER={// If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
provide:AriaDescriber,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"],new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"],AriaDescriber],/** @type {?} */_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]],useFactory:ARIA_DESCRIBER_PROVIDER_FACTORY};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */var ListKeyManager=/*#__PURE__*/function(){/**
     * @param {?} _items
     */function ListKeyManager(_items){var _this=this;this._items=_items;this._activeItemIndex=-1;this._activeItem=null;this._wrap=false;this._letterKeyStream=new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"];this._typeaheadSubscription=rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;this._vertical=true;this._allowedModifierKeys=[];/**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */this._skipPredicateFn=/**
         * @param {?} item
         * @return {?}
         */function(item){return item.disabled};// Buffer for the letters that the user has pressed when the typeahead option is turned on.
this._pressedLetters=[];/**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */this.tabOut=new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"];/**
         * Stream that emits whenever the active item of the list manager changes.
         */this.change=new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"];// We allow for the items to be an array because, in some cases, the consumer may
// not have access to a QueryList of the items they want to manage (e.g. when the
// items aren't being collected via `ViewChildren` or `ContentChildren`).
if(_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]){_items.changes.subscribe(/**
             * @param {?} newItems
             * @return {?}
             */function(newItems){if(_this._activeItem){/** @type {?} */var itemArray=newItems.toArray();/** @type {?} */var newIndex=itemArray.indexOf(_this._activeItem);if(newIndex>-1&&newIndex!==_this._activeItemIndex){_this._activeItemIndex=newIndex}}})}}/**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @template THIS
     * @this {THIS}
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {THIS}
     */var _proto2=ListKeyManager.prototype;_proto2.skipPredicate=function skipPredicate(predicate){/** @type {?} */this._skipPredicateFn=predicate;return(/** @type {?} */this)}/**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @template THIS
     * @this {THIS}
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {THIS}
     */;_proto2.withWrap=function withWrap(shouldWrap){if(shouldWrap===void 0){shouldWrap=true}/** @type {?} */this._wrap=shouldWrap;return(/** @type {?} */this)}/**
     * Configures whether the key manager should be able to move the selection vertically.
     * @template THIS
     * @this {THIS}
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {THIS}
     */;_proto2.withVerticalOrientation=function withVerticalOrientation(enabled){if(enabled===void 0){enabled=true}/** @type {?} */this._vertical=enabled;return(/** @type {?} */this)}/**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction in which the selection can be moved.
     * @return {THIS}
     */;_proto2.withHorizontalOrientation=function withHorizontalOrientation(direction){/** @type {?} */this._horizontal=direction;return(/** @type {?} */this)}/**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     * @template THIS
     * @this {THIS}
     * @param {?} keys
     * @return {THIS}
     */;_proto2.withAllowedModifierKeys=function withAllowedModifierKeys(keys){/** @type {?} */this._allowedModifierKeys=keys;return(/** @type {?} */this)}/**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @template THIS
     * @this {THIS}
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {THIS}
     */;_proto2.withTypeAhead=function withTypeAhead(debounceInterval){var _this2=this;if(debounceInterval===void 0){debounceInterval=200}if(/** @type {?} */this._items.length&&/** @type {?} */this._items.some(/**
         * @param {?} item
         * @return {?}
         */function(item){return typeof item.getLabel!=="function"})){throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.")}/** @type {?} */this._typeaheadSubscription.unsubscribe();// Debounce the presses of non-navigational keys, collect the ones that correspond to letters
// and convert those letters back into a string. Afterwards find the first item that starts
// with that string and select it.
/** @type {?} */this._typeaheadSubscription=/** @type {?} */this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(/**
         * @param {?} keyCode
         * @return {?}
         */function(keyCode){return(/** @type {?} */_this2._pressedLetters.push(keyCode))}),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(/**
         * @return {?}
         */function(){return(/** @type {?} */_this2._pressedLetters.length>0)}),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(/**
         * @return {?}
         */function(){return(/** @type {?} */_this2._pressedLetters.join(""))})).subscribe(/**
         * @param {?} inputString
         * @return {?}
         */function(inputString){/** @type {?} */var items=/** @type {?} */_this2._getItemsArray();// Start at 1 because we want to start searching at the item immediately
// following the current active item.
for(var i=1;i<items.length+1;i++){/** @type {?} */var index=(/** @type {?} */_this2._activeItemIndex+i)%items.length;/** @type {?} */var item=items[index];if(!/** @type {?} */_this2._skipPredicateFn(item)&&/** @type {?} */item.getLabel().toUpperCase().trim().indexOf(inputString)===0){/** @type {?} */_this2.setActiveItem(index);break}}/** @type {?} */_this2._pressedLetters=[]});return(/** @type {?} */this)}/**
     * @param {?} item
     * @return {?}
     */;_proto2.setActiveItem=function setActiveItem(item){/** @type {?} */var previousIndex=this._activeItemIndex;this.updateActiveItem(item);if(this._activeItemIndex!==previousIndex){this.change.next(this._activeItemIndex)}}/**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */;_proto2.onKeydown=function onKeydown(event){var _this3=this;/** @type {?} */var keyCode=event.keyCode;/** @type {?} */var modifiers=["altKey","ctrlKey","metaKey","shiftKey"];/** @type {?} */var isModifierAllowed=modifiers.every(/**
         * @param {?} modifier
         * @return {?}
         */function(modifier){return!event[modifier]||_this3._allowedModifierKeys.indexOf(modifier)>-1});switch(keyCode){case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:this.tabOut.next();return;case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:if(this._vertical&&isModifierAllowed){this.setNextItemActive();break}else{return}case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:if(this._vertical&&isModifierAllowed){this.setPreviousItemActive();break}else{return}case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:if(this._horizontal&&isModifierAllowed){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else{return}case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:if(this._horizontal&&isModifierAllowed){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else{return}default:if(isModifierAllowed||Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event,"shiftKey")){// Attempt to use the `event.key` which also maps it to the user's keyboard language,
// otherwise fall back to resolving alphanumeric characters via the keyCode.
if(event.key&&event.key.length===1){this._letterKeyStream.next(event.key.toLocaleUpperCase())}else if(keyCode>=_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"]&&keyCode<=_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"]||keyCode>=_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"]&&keyCode<=_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]){this._letterKeyStream.next(String.fromCharCode(keyCode))}}// Note that we return here, in order to avoid preventing
// the default action of non-navigational keys.
return;}this._pressedLetters=[];event.preventDefault()}/**
     * Index of the currently active item.
     * @return {?}
     */;/**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */_proto2.setFirstItemActive=function setFirstItemActive(){this._setActiveItemByIndex(0,1)}/**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */;_proto2.setLastItemActive=function setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}/**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */;_proto2.setNextItemActive=function setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}/**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */;_proto2.setPreviousItemActive=function setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}/**
     * @param {?} item
     * @return {?}
     */;_proto2.updateActiveItem=function updateActiveItem(item){/** @type {?} */var itemArray=this._getItemsArray();/** @type {?} */var index=typeof item==="number"?item:itemArray.indexOf(item);/** @type {?} */var activeItem=itemArray[index];// Explicitly check for `null` and `undefined` because other falsy values are valid.
this._activeItem=activeItem==null?null:activeItem;this._activeItemIndex=index}/**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@breaking-change 8.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */;_proto2.updateActiveItemIndex=function updateActiveItemIndex(index){this.updateActiveItem(index)}/**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @private
     * @param {?} delta
     * @return {?}
     */;_proto2._setActiveItemByDelta=function _setActiveItemByDelta(delta){this._wrap?this._setActiveInWrapMode(delta):this._setActiveInDefaultMode(delta)}/**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @private
     * @param {?} delta
     * @return {?}
     */;_proto2._setActiveInWrapMode=function _setActiveInWrapMode(delta){/** @type {?} */var items=this._getItemsArray();for(var i=1;i<=items.length;i++){/** @type {?} */var index=(this._activeItemIndex+delta*i+items.length)%items.length;/** @type {?} */var item=items[index];if(!this._skipPredicateFn(item)){this.setActiveItem(index);return}}}/**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @private
     * @param {?} delta
     * @return {?}
     */;_proto2._setActiveInDefaultMode=function _setActiveInDefaultMode(delta){this._setActiveItemByIndex(this._activeItemIndex+delta,delta)}/**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @private
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */;_proto2._setActiveItemByIndex=function _setActiveItemByIndex(index,fallbackDelta){/** @type {?} */var items=this._getItemsArray();if(!items[index]){return}while(this._skipPredicateFn(items[index])){index+=fallbackDelta;if(!items[index]){return}}this.setActiveItem(index)}/**
     * Returns the items as an array.
     * @private
     * @return {?}
     */;_proto2._getItemsArray=function _getItemsArray(){return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]?this._items.toArray():this._items};_createClass(ListKeyManager,[{key:"activeItemIndex",get:function get(){return this._activeItemIndex}/**
     * The active item.
     * @return {?}
     */},{key:"activeItem",get:function get(){return this._activeItem}}]);return ListKeyManager}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 */var ActiveDescendantKeyManager=/*#__PURE__*/function(_ListKeyManager){_inheritsLoose(ActiveDescendantKeyManager,_ListKeyManager);function ActiveDescendantKeyManager(){return _ListKeyManager.apply(this,arguments)||this}var _proto3=ActiveDescendantKeyManager.prototype;/**
     * @param {?} index
     * @return {?}
     */_proto3.setActiveItem=function setActiveItem(index){if(this.activeItem){this.activeItem.setInactiveStyles()}_ListKeyManager.prototype.setActiveItem.call(this,index);if(this.activeItem){this.activeItem.setActiveStyles()}};return ActiveDescendantKeyManager}(ListKeyManager);/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 */var FocusKeyManager=/*#__PURE__*/function(_ListKeyManager2){_inheritsLoose(FocusKeyManager,_ListKeyManager2);function FocusKeyManager(){var _this4;_this4=_ListKeyManager2.apply(this,arguments)||this;_this4._origin="program";return _this4}/**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {THIS}
     */var _proto4=FocusKeyManager.prototype;_proto4.setFocusOrigin=function setFocusOrigin(origin){/** @type {?} */this._origin=origin;return(/** @type {?} */this)}/**
     * @param {?} item
     * @return {?}
     */;_proto4.setActiveItem=function setActiveItem(item){_ListKeyManager2.prototype.setActiveItem.call(this,item);if(this.activeItem){this.activeItem.focus(this._origin)}};return FocusKeyManager}(ListKeyManager);/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */var InteractivityChecker=/*#__PURE__*/function(){/**
     * @param {?} _platform
     */function InteractivityChecker(_platform){this._platform=_platform}/**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */var _proto5=InteractivityChecker.prototype;_proto5.isDisabled=function isDisabled(element){// This does not capture some cases, such as a non-form control with a disabled attribute or
// a form control inside of a disabled form, but should capture the most common cases.
return element.hasAttribute("disabled")}/**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */;_proto5.isVisible=function isVisible(element){return hasGeometry(element)&&getComputedStyle(element).visibility==="visible"}/**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */;_proto5.isTabbable=function isTabbable(element){// Nothing is tabbable on the server 😎
if(!this._platform.isBrowser){return false}/** @type {?} */var frameElement=getFrameElement(getWindow(element));if(frameElement){/** @type {?} */var frameType=frameElement&&frameElement.nodeName.toLowerCase();// Frame elements inherit their tabindex onto all child elements.
if(getTabIndexValue(frameElement)===-1){return false}// Webkit and Blink consider anything inside of an <object> element as non-tabbable.
if((this._platform.BLINK||this._platform.WEBKIT)&&frameType==="object"){return false}// Webkit and Blink disable tabbing to an element inside of an invisible frame.
if((this._platform.BLINK||this._platform.WEBKIT)&&!this.isVisible(frameElement)){return false}}/** @type {?} */var nodeName=element.nodeName.toLowerCase();/** @type {?} */var tabIndexValue=getTabIndexValue(element);if(element.hasAttribute("contenteditable")){return tabIndexValue!==-1}if(nodeName==="iframe"){// The frames may be tabbable depending on content, but it's not possibly to reliably
// investigate the content of the frames.
return false}if(nodeName==="audio"){if(!element.hasAttribute("controls")){// By default an <audio> element without the controls enabled is not tabbable.
return false}else if(this._platform.BLINK){// In Blink <audio controls> elements are always tabbable.
return true}}if(nodeName==="video"){if(!element.hasAttribute("controls")&&this._platform.TRIDENT){// In Trident a <video> element without the controls enabled is not tabbable.
return false}else if(this._platform.BLINK||this._platform.FIREFOX){// In Chrome and Firefox <video controls> elements are always tabbable.
return true}}if(nodeName==="object"&&(this._platform.BLINK||this._platform.WEBKIT)){// In all Blink and WebKit based browsers <object> elements are never tabbable.
return false}// In iOS the browser only considers some specific elements as tabbable.
if(this._platform.WEBKIT&&this._platform.IOS&&!isPotentiallyTabbableIOS(element)){return false}return element.tabIndex>=0}/**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */;_proto5.isFocusable=function isFocusable(element){// Perform checks in order of left to most expensive.
// Again, naive approach that does not capture many edge cases and browser quirks.
return isPotentiallyFocusable(element)&&!this.isDisabled(element)&&this.isVisible(element)};return InteractivityChecker}();InteractivityChecker.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */InteractivityChecker.ctorParameters=function(){return[{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]}]};/** @nocollapse */InteractivityChecker.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function InteractivityChecker_Factory(){return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]))},token:InteractivityChecker,providedIn:"root"});/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 * @param {?} window
 * @return {?}
 */function getFrameElement(window){try{return(/** @type {?} */window.frameElement)}catch(_a){return null}}/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */function hasGeometry(element){// Use logic from jQuery to check for an invisible element.
// See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
return!!(element.offsetWidth||element.offsetHeight||typeof element.getClientRects==="function"&&element.getClientRects().length)}/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */function isNativeFormElement(element){/** @type {?} */var nodeName=element.nodeName.toLowerCase();return nodeName==="input"||nodeName==="select"||nodeName==="button"||nodeName==="textarea"}/**
 * Gets whether an element is an `<input type="hidden">`.
 * @param {?} element
 * @return {?}
 */function isHiddenInput(element){return isInputElement(element)&&element.type=="hidden"}/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */function isAnchorWithHref(element){return isAnchorElement(element)&&element.hasAttribute("href")}/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */function isInputElement(element){return element.nodeName.toLowerCase()=="input"}/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */function isAnchorElement(element){return element.nodeName.toLowerCase()=="a"}/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */function hasValidTabIndex(element){if(!element.hasAttribute("tabindex")||element.tabIndex===undefined){return false}/** @type {?} */var tabIndex=element.getAttribute("tabindex");// IE11 parses tabindex="" as the value "-32768"
if(tabIndex=="-32768"){return false}return!!(tabIndex&&!isNaN(parseInt(tabIndex,10)))}/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */function getTabIndexValue(element){if(!hasValidTabIndex(element)){return null}// See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
/** @type {?} */var tabIndex=parseInt(element.getAttribute("tabindex")||"",10);return isNaN(tabIndex)?-1:tabIndex}/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */function isPotentiallyTabbableIOS(element){/** @type {?} */var nodeName=element.nodeName.toLowerCase();/** @type {?} */var inputType=nodeName==="input"&&/** @type {?} */element.type;return inputType==="text"||inputType==="password"||nodeName==="select"||nodeName==="textarea"}/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */function isPotentiallyFocusable(element){// Inputs are potentially focusable *unless* they're type="hidden".
if(isHiddenInput(element)){return false}return isNativeFormElement(element)||isAnchorWithHref(element)||element.hasAttribute("contenteditable")||hasValidTabIndex(element)}/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */function getWindow(node){// ownerDocument is null if `node` itself *is* a document.
return node.ownerDocument&&node.ownerDocument.defaultView||window}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */var FocusTrap=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?=} deferAnchors
     */function FocusTrap(_element,_checker,_ngZone,_document,deferAnchors){var _this5=this;if(deferAnchors===void 0){deferAnchors=false}this._element=_element;this._checker=_checker;this._ngZone=_ngZone;this._document=_document;this._hasAttached=false;// Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
this.startAnchorListener=/**
         * @return {?}
         */function(){return _this5.focusLastTabbableElement()};this.endAnchorListener=/**
         * @return {?}
         */function(){return _this5.focusFirstTabbableElement()};this._enabled=true;if(!deferAnchors){this.attachAnchors()}}/**
     * Whether the focus trap is active.
     * @return {?}
     */var _proto6=FocusTrap.prototype;/**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */_proto6.destroy=function destroy(){/** @type {?} */var startAnchor=this._startAnchor;/** @type {?} */var endAnchor=this._endAnchor;if(startAnchor){startAnchor.removeEventListener("focus",this.startAnchorListener);if(startAnchor.parentNode){startAnchor.parentNode.removeChild(startAnchor)}}if(endAnchor){endAnchor.removeEventListener("focus",this.endAnchorListener);if(endAnchor.parentNode){endAnchor.parentNode.removeChild(endAnchor)}}this._startAnchor=this._endAnchor=null}/**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */;_proto6.attachAnchors=function attachAnchors(){var _this6=this;// If we're not on the browser, there can be no focus to trap.
if(this._hasAttached){return true}this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){if(!_this6._startAnchor){_this6._startAnchor=_this6._createAnchor();/** @type {?} */_this6._startAnchor.addEventListener("focus",_this6.startAnchorListener)}if(!_this6._endAnchor){_this6._endAnchor=_this6._createAnchor();/** @type {?} */_this6._endAnchor.addEventListener("focus",_this6.endAnchorListener)}});if(this._element.parentNode){this._element.parentNode.insertBefore(/** @type {?} */this._startAnchor,this._element);this._element.parentNode.insertBefore(/** @type {?} */this._endAnchor,this._element.nextSibling);this._hasAttached=true}return this._hasAttached}/**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */;_proto6.focusInitialElementWhenReady=function focusInitialElementWhenReady(){var _this7=this;return new Promise(/**
         * @param {?} resolve
         * @return {?}
         */function(resolve){_this7._executeOnStable(/**
             * @return {?}
             */function(){return resolve(_this7.focusInitialElement())})})}/**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */;_proto6.focusFirstTabbableElementWhenReady=function focusFirstTabbableElementWhenReady(){var _this8=this;return new Promise(/**
         * @param {?} resolve
         * @return {?}
         */function(resolve){_this8._executeOnStable(/**
             * @return {?}
             */function(){return resolve(_this8.focusFirstTabbableElement())})})}/**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */;_proto6.focusLastTabbableElementWhenReady=function focusLastTabbableElementWhenReady(){var _this9=this;return new Promise(/**
         * @param {?} resolve
         * @return {?}
         */function(resolve){_this9._executeOnStable(/**
             * @return {?}
             */function(){return resolve(_this9.focusLastTabbableElement())})})}/**
     * Get the specified boundary element of the trapped region.
     * @private
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */;_proto6._getRegionBoundary=function _getRegionBoundary(bound){// Contains the deprecated version of selector, for temporary backwards comparability.
/** @type {?} */var markers=/** @type {?} */this._element.querySelectorAll("[cdk-focus-region-"+bound+"], "+("[cdkFocusRegion"+bound+"], ")+("[cdk-focus-"+bound+"]"));for(var i=0;i<markers.length;i++){// @breaking-change 8.0.0
if(markers[i].hasAttribute("cdk-focus-"+bound)){console.warn("Found use of deprecated attribute 'cdk-focus-"+bound+"', "+("use 'cdkFocusRegion"+bound+"' instead. The deprecated ")+"attribute will be removed in 8.0.0.",markers[i])}else if(markers[i].hasAttribute("cdk-focus-region-"+bound)){console.warn("Found use of deprecated attribute 'cdk-focus-region-"+bound+"', "+("use 'cdkFocusRegion"+bound+"' instead. The deprecated attribute ")+"will be removed in 8.0.0.",markers[i])}}if(bound=="start"){return markers.length?markers[0]:this._getFirstTabbableElement(this._element)}return markers.length?markers[markers.length-1]:this._getLastTabbableElement(this._element)}/**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */;_proto6.focusInitialElement=function focusInitialElement(){// Contains the deprecated version of selector, for temporary backwards comparability.
/** @type {?} */var redirectToElement=/** @type {?} */this._element.querySelector("[cdk-focus-initial], "+"[cdkFocusInitial]");if(redirectToElement){// @breaking-change 8.0.0
if(redirectToElement.hasAttribute("cdk-focus-initial")){console.warn("Found use of deprecated attribute 'cdk-focus-initial', "+"use 'cdkFocusInitial' instead. The deprecated attribute "+"will be removed in 8.0.0",redirectToElement)}// Warn the consumer if the element they've pointed to
// isn't focusable, when not in production mode.
if(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()&&!this._checker.isFocusable(redirectToElement)){console.warn("Element matching '[cdkFocusInitial]' is not focusable.",redirectToElement)}redirectToElement.focus();return true}return this.focusFirstTabbableElement()}/**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */;_proto6.focusFirstTabbableElement=function focusFirstTabbableElement(){/** @type {?} */var redirectToElement=this._getRegionBoundary("start");if(redirectToElement){redirectToElement.focus()}return!!redirectToElement}/**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */;_proto6.focusLastTabbableElement=function focusLastTabbableElement(){/** @type {?} */var redirectToElement=this._getRegionBoundary("end");if(redirectToElement){redirectToElement.focus()}return!!redirectToElement}/**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */;_proto6.hasAttached=function hasAttached(){return this._hasAttached}/**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */;_proto6._getFirstTabbableElement=function _getFirstTabbableElement(root){if(this._checker.isFocusable(root)&&this._checker.isTabbable(root)){return root}// Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
// back to `childNodes` which includes text nodes, comments etc.
/** @type {?} */var children=root.children||root.childNodes;for(var i=0;i<children.length;i++){/** @type {?} */var tabbableChild=children[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(/** @type {?} */children[i]):null;if(tabbableChild){return tabbableChild}}return null}/**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */;_proto6._getLastTabbableElement=function _getLastTabbableElement(root){if(this._checker.isFocusable(root)&&this._checker.isTabbable(root)){return root}// Iterate in reverse DOM order.
/** @type {?} */var children=root.children||root.childNodes;for(var i=children.length-1;i>=0;i--){/** @type {?} */var tabbableChild=children[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(/** @type {?} */children[i]):null;if(tabbableChild){return tabbableChild}}return null}/**
     * Creates an anchor element.
     * @private
     * @return {?}
     */;_proto6._createAnchor=function _createAnchor(){/** @type {?} */var anchor=this._document.createElement("div");this._toggleAnchorTabIndex(this._enabled,anchor);anchor.classList.add("cdk-visually-hidden");anchor.classList.add("cdk-focus-trap-anchor");anchor.setAttribute("aria-hidden","true");return anchor}/**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @private
     * @param {?} isEnabled Whether the focus trap is enabled.
     * @param {?} anchor Anchor on which to toggle the tabindex.
     * @return {?}
     */;_proto6._toggleAnchorTabIndex=function _toggleAnchorTabIndex(isEnabled,anchor){// Remove the tabindex completely, rather than setting it to -1, because if the
// element has a tabindex, the user might still hit it when navigating with the arrow keys.
isEnabled?anchor.setAttribute("tabindex","0"):anchor.removeAttribute("tabindex")}/**
     * Executes a function when the zone is stable.
     * @private
     * @param {?} fn
     * @return {?}
     */;_proto6._executeOnStable=function _executeOnStable(fn){if(this._ngZone.isStable){fn()}else{this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn)}};_createClass(FocusTrap,[{key:"enabled",get:function get(){return this._enabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._enabled=value;if(this._startAnchor&&this._endAnchor){this._toggleAnchorTabIndex(value,this._startAnchor);this._toggleAnchorTabIndex(value,this._endAnchor)}}}]);return FocusTrap}();/**
 * Factory that allows easy instantiation of focus traps.
 */var FocusTrapFactory=/*#__PURE__*/function(){/**
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _document
     */function FocusTrapFactory(_checker,_ngZone,_document){this._checker=_checker;this._ngZone=_ngZone;this._document=_document}/**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */var _proto7=FocusTrapFactory.prototype;_proto7.create=function create(element,deferCaptureElements){if(deferCaptureElements===void 0){deferCaptureElements=false}return new FocusTrap(element,this._checker,this._ngZone,this._document,deferCaptureElements)};return FocusTrapFactory}();FocusTrapFactory.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */FocusTrapFactory.ctorParameters=function(){return[{type:InteractivityChecker},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]}]}]};/** @nocollapse */FocusTrapFactory.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function FocusTrapFactory_Factory(){return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(InteractivityChecker),Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]),Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))},token:FocusTrapFactory,providedIn:"root"});/**
 * Directive for trapping focus within a region.
 */var CdkTrapFocus=/*#__PURE__*/function(){/**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     * @param {?} _document
     */function CdkTrapFocus(_elementRef,_focusTrapFactory,_document){this._elementRef=_elementRef;this._focusTrapFactory=_focusTrapFactory;/**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */this._previouslyFocusedElement=null;this._document=_document;this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,true)}/**
     * Whether the focus trap is active.
     * @return {?}
     */var _proto8=CdkTrapFocus.prototype;/**
     * @return {?}
     */_proto8.ngOnDestroy=function ngOnDestroy(){this.focusTrap.destroy();// If we stored a previously focused element when using autoCapture, return focus to that
// element now that the trapped region is being destroyed.
if(this._previouslyFocusedElement){this._previouslyFocusedElement.focus();this._previouslyFocusedElement=null}}/**
     * @return {?}
     */;_proto8.ngAfterContentInit=function ngAfterContentInit(){this.focusTrap.attachAnchors();if(this.autoCapture){this._previouslyFocusedElement=/** @type {?} */this._document.activeElement;this.focusTrap.focusInitialElementWhenReady()}}/**
     * @return {?}
     */;_proto8.ngDoCheck=function ngDoCheck(){if(!this.focusTrap.hasAttached()){this.focusTrap.attachAnchors()}};_createClass(CdkTrapFocus,[{key:"enabled",get:function get(){return this.focusTrap.enabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this.focusTrap.enabled=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value)}/**
     * Whether the directive should automatially move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     * @return {?}
     */},{key:"autoCapture",get:function get(){return this._autoCapture}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._autoCapture=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value)}}]);return CdkTrapFocus}();CdkTrapFocus.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"[cdkTrapFocus]",exportAs:"cdkTrapFocus"}]}];/** @nocollapse */CdkTrapFocus.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:FocusTrapFactory},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]}]}]};CdkTrapFocus.propDecorators={enabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],args:["cdkTrapFocus"]}],autoCapture:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],args:["cdkTrapFocusAutoCapture"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var LIVE_ANNOUNCER_ELEMENT_TOKEN=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("liveAnnouncerElement",{providedIn:"root",factory:LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY});/**
 * \@docs-private
 * @return {?}
 */function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY(){return null}/**
 * Injection token that can be used to configure the default options for the LiveAnnouncer.
 * @type {?}
 */var LIVE_ANNOUNCER_DEFAULT_OPTIONS=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("LIVE_ANNOUNCER_DEFAULT_OPTIONS");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var LiveAnnouncer=/*#__PURE__*/function(){/**
     * @param {?} elementToken
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?=} _defaultOptions
     */function LiveAnnouncer(elementToken,_ngZone,_document,_defaultOptions){this._ngZone=_ngZone;this._defaultOptions=_defaultOptions;// We inject the live element and document as `any` because the constructor signature cannot
// reference browser globals (HTMLElement, Document) on non-browser environments, since having
// a class decorator causes TypeScript to preserve the constructor signature types.
this._document=_document;this._liveElement=elementToken||this._createLiveElement()}/**
     * @param {?} message
     * @param {...?} args
     * @return {?}
     */var _proto9=LiveAnnouncer.prototype;_proto9.announce=function announce(message){var _this10=this;/** @type {?} */var defaultOptions=this._defaultOptions;/** @type {?} */var politeness;/** @type {?} */var duration;for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key]}if(args.length===1&&typeof args[0]==="number"){duration=args[0]}else{politeness=args[0];duration=args[1]}this.clear();clearTimeout(this._previousTimeout);if(!politeness){politeness=defaultOptions&&defaultOptions.politeness?defaultOptions.politeness:"polite"}if(duration==null&&defaultOptions){duration=defaultOptions.duration}// TODO: ensure changing the politeness works on all environments we support.
this._liveElement.setAttribute("aria-live",politeness);// This 100ms timeout is necessary for some browser + screen-reader combinations:
// - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
// - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
//   second time without clearing and then using a non-zero delay.
// (using JAWS 17 at time of this writing).
return this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){return new Promise(/**
             * @param {?} resolve
             * @return {?}
             */function(resolve){clearTimeout(_this10._previousTimeout);_this10._previousTimeout=setTimeout(/**
                 * @return {?}
                 */function(){_this10._liveElement.textContent=message;resolve();if(typeof duration==="number"){_this10._previousTimeout=setTimeout(/**
                         * @return {?}
                         */function(){return _this10.clear()},duration)}},100)})})}/**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     * @return {?}
     */;_proto9.clear=function clear(){if(this._liveElement){this._liveElement.textContent=""}}/**
     * @return {?}
     */;_proto9.ngOnDestroy=function ngOnDestroy(){clearTimeout(this._previousTimeout);if(this._liveElement&&this._liveElement.parentNode){this._liveElement.parentNode.removeChild(this._liveElement);this._liveElement=/** @type {?} */null}}/**
     * @private
     * @return {?}
     */;_proto9._createLiveElement=function _createLiveElement(){/** @type {?} */var elementClass="cdk-live-announcer-element";/** @type {?} */var previousElements=this._document.getElementsByClassName(elementClass);/** @type {?} */var liveEl=this._document.createElement("div");// Remove any old containers. This can happen when coming in from a server-side-rendered page.
for(var i=0;i<previousElements.length;i++){/** @type {?} */previousElements[i].parentNode.removeChild(previousElements[i])}liveEl.classList.add(elementClass);liveEl.classList.add("cdk-visually-hidden");liveEl.setAttribute("aria-atomic","true");liveEl.setAttribute("aria-live","polite");this._document.body.appendChild(liveEl);return liveEl};return LiveAnnouncer}();LiveAnnouncer.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */LiveAnnouncer.ctorParameters=function(){return[{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[LIVE_ANNOUNCER_ELEMENT_TOKEN]}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[LIVE_ANNOUNCER_DEFAULT_OPTIONS]}]}]};/** @nocollapse */LiveAnnouncer.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function LiveAnnouncer_Factory(){return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN,8),Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]),Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]),Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS,8))},token:LiveAnnouncer,providedIn:"root"});/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */var CdkAriaLive=/*#__PURE__*/function(){/**
     * @param {?} _elementRef
     * @param {?} _liveAnnouncer
     * @param {?} _contentObserver
     * @param {?} _ngZone
     */function CdkAriaLive(_elementRef,_liveAnnouncer,_contentObserver,_ngZone){this._elementRef=_elementRef;this._liveAnnouncer=_liveAnnouncer;this._contentObserver=_contentObserver;this._ngZone=_ngZone;this._politeness="off"}/**
     * The aria-live politeness level to use when announcing messages.
     * @return {?}
     */var _proto10=CdkAriaLive.prototype;/**
     * @return {?}
     */_proto10.ngOnDestroy=function ngOnDestroy(){if(this._subscription){this._subscription.unsubscribe()}};_createClass(CdkAriaLive,[{key:"politeness",get:function get(){return this._politeness}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){var _this11=this;this._politeness=value==="polite"||value==="assertive"?value:"off";if(this._politeness==="off"){if(this._subscription){this._subscription.unsubscribe();this._subscription=null}}else if(!this._subscription){this._subscription=this._ngZone.runOutsideAngular(/**
             * @return {?}
             */function(){return _this11._contentObserver.observe(_this11._elementRef).subscribe(/**
                 * @return {?}
                 */function(){// Note that we use textContent here, rather than innerText, in order to avoid a reflow.
/** @type {?} */var elementText=_this11._elementRef.nativeElement.textContent;// The `MutationObserver` fires also for attribute
// changes which we don't want to announce.
if(elementText!==_this11._previousAnnouncedText){_this11._liveAnnouncer.announce(elementText,_this11._politeness);_this11._previousAnnouncedText=elementText}})})}}}]);return CdkAriaLive}();CdkAriaLive.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"[cdkAriaLive]",exportAs:"cdkAriaLive"}]}];/** @nocollapse */CdkAriaLive.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:LiveAnnouncer},{type:_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]}]};CdkAriaLive.propDecorators={politeness:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],args:["cdkAriaLive"]}]};/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentAnnouncer
 * @param {?} liveElement
 * @param {?} _document
 * @param {?} ngZone
 * @return {?}
 */function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentAnnouncer,liveElement,_document,ngZone){return parentAnnouncer||new LiveAnnouncer(liveElement,ngZone,_document)}/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */var LIVE_ANNOUNCER_PROVIDER={// If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
provide:LiveAnnouncer,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"],new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"],LiveAnnouncer],[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"],new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)],_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]],useFactory:LIVE_ANNOUNCER_PROVIDER_FACTORY};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
/** @type {?} */var TOUCH_BUFFER_MS=650;/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 * @type {?}
 */var captureEventListenerOptions=Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["normalizePassiveListenerOptions"])({passive:true,capture:true});/**
 * Monitors mouse and keyboard events to determine the cause of focus events.
 */var FocusMonitor=/*#__PURE__*/function(){/**
     * @param {?} _ngZone
     * @param {?} _platform
     */function FocusMonitor(_ngZone,_platform){var _this12=this;this._ngZone=_ngZone;this._platform=_platform;/**
         * The focus origin that the next focus event is a result of.
         */this._origin=null;/**
         * Whether the window has just been focused.
         */this._windowFocused=false;/**
         * Map of elements being monitored to their info.
         */this._elementInfo=new Map;/**
         * The number of elements currently being monitored.
         */this._monitoredElementCount=0;/**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */this._documentKeydownListener=/**
         * @return {?}
         */function(){// On keydown record the origin and clear any touch event that may be in progress.
_this12._lastTouchTarget=null;_this12._setOriginForCurrentEventQueue("keyboard")};/**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */this._documentMousedownListener=/**
         * @return {?}
         */function(){// On mousedown record the origin only if there is not touch
// target, since a mousedown can happen as a result of a touch event.
if(!_this12._lastTouchTarget){_this12._setOriginForCurrentEventQueue("mouse")}};/**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */this._documentTouchstartListener=/**
         * @param {?} event
         * @return {?}
         */function(event){// When the touchstart event fires the focus event is not yet in the event queue. This means
// we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
// see if a focus happens.
if(_this12._touchTimeoutId!=null){clearTimeout(_this12._touchTimeoutId)}_this12._lastTouchTarget=event.target;_this12._touchTimeoutId=setTimeout(/**
             * @return {?}
             */function(){return _this12._lastTouchTarget=null},TOUCH_BUFFER_MS)};/**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */this._windowFocusListener=/**
         * @return {?}
         */function(){// Make a note of when the window regains focus, so we can
// restore the origin info for the focused element.
_this12._windowFocused=true;_this12._windowFocusTimeoutId=setTimeout(/**
             * @return {?}
             */function(){return _this12._windowFocused=false})}}/**
     * @param {?} element
     * @param {?=} checkChildren
     * @return {?}
     */var _proto11=FocusMonitor.prototype;_proto11.monitor=function monitor(element,checkChildren){var _this13=this;if(checkChildren===void 0){checkChildren=false}// Do nothing if we're not on the browser platform.
if(!this._platform.isBrowser){return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)}/** @type {?} */var nativeElement=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);// Check if we're already monitoring this element.
if(this._elementInfo.has(nativeElement)){/** @type {?} */var cachedInfo=this._elementInfo.get(nativeElement);/** @type {?} */cachedInfo.checkChildren=checkChildren;return(/** @type {?} */cachedInfo.subject.asObservable())}// Create monitored element info.
/** @type {?} */var info={unlisten:/**
             * @return {?}
             */function unlisten(){},checkChildren:checkChildren,subject:new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]};this._elementInfo.set(nativeElement,info);this._incrementMonitoredElementCount();// Start listening. We need to listen in capture phase since focus events don't bubble.
/** @type {?} */var focusListener=/**
         * @param {?} event
         * @return {?}
         */function focusListener(event){return _this13._onFocus(event,nativeElement)};/** @type {?} */var blurListener=/**
         * @param {?} event
         * @return {?}
         */function blurListener(event){return _this13._onBlur(event,nativeElement)};this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){nativeElement.addEventListener("focus",focusListener,true);nativeElement.addEventListener("blur",blurListener,true)});// Create an unlisten function for later.
info.unlisten=/**
         * @return {?}
         */function(){nativeElement.removeEventListener("focus",focusListener,true);nativeElement.removeEventListener("blur",blurListener,true)};return info.subject.asObservable()}/**
     * @param {?} element
     * @return {?}
     */;_proto11.stopMonitoring=function stopMonitoring(element){/** @type {?} */var nativeElement=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);/** @type {?} */var elementInfo=this._elementInfo.get(nativeElement);if(elementInfo){elementInfo.unlisten();elementInfo.subject.complete();this._setClasses(nativeElement);this._elementInfo.delete(nativeElement);this._decrementMonitoredElementCount()}}/**
     * @param {?} element
     * @param {?} origin
     * @param {?=} options
     * @return {?}
     */;_proto11.focusVia=function focusVia(element,origin,options){/** @type {?} */var nativeElement=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);this._setOriginForCurrentEventQueue(origin);// `focus` isn't available on the server
if(typeof nativeElement.focus==="function"){// Cast the element to `any`, because the TS typings don't have the `options` parameter yet.
/** @type {?} */nativeElement.focus(options)}}/**
     * @return {?}
     */;_proto11.ngOnDestroy=function ngOnDestroy(){var _this14=this;this._elementInfo.forEach(/**
         * @param {?} _info
         * @param {?} element
         * @return {?}
         */function(_info,element){return _this14.stopMonitoring(element)})}/**
     * @private
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */;_proto11._toggleClass=function _toggleClass(element,className,shouldSet){if(shouldSet){element.classList.add(className)}else{element.classList.remove(className)}}/**
     * Sets the focus classes on the element based on the given focus origin.
     * @private
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */;_proto11._setClasses=function _setClasses(element,origin){/** @type {?} */var elementInfo=this._elementInfo.get(element);if(elementInfo){this._toggleClass(element,"cdk-focused",!!origin);this._toggleClass(element,"cdk-touch-focused",origin==="touch");this._toggleClass(element,"cdk-keyboard-focused",origin==="keyboard");this._toggleClass(element,"cdk-mouse-focused",origin==="mouse");this._toggleClass(element,"cdk-program-focused",origin==="program")}}/**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @private
     * @param {?} origin The origin to set.
     * @return {?}
     */;_proto11._setOriginForCurrentEventQueue=function _setOriginForCurrentEventQueue(origin){var _this15=this;this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){_this15._origin=origin;// Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
// tick after the interaction event fired. To ensure the focus origin is always correct,
// the focus origin will be determined at the beginning of the next tick.
_this15._originTimeoutId=setTimeout(/**
             * @return {?}
             */function(){return _this15._origin=null},1)})}/**
     * Checks whether the given focus event was caused by a touchstart event.
     * @private
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */;_proto11._wasCausedByTouch=function _wasCausedByTouch(event){// Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
// Consider the following dom structure:
//
// <div #parent tabindex="0" cdkFocusClasses>
//   <div #child (click)="#parent.focus()"></div>
// </div>
//
// If the user touches the #child element and the #parent is programmatically focused as a
// result, this code will still consider it to have been caused by the touch event and will
// apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
// relatively small edge-case that can be worked around by using
// focusVia(parentEl, 'program') to focus the parent element.
//
// If we decide that we absolutely must handle this case correctly, we can do so by listening
// for the first focus event after the touchstart, and then the first blur event after that
// focus event. When that blur event fires we know that whatever follows is not a result of the
// touchstart.
/** @type {?} */var focusTarget=event.target;return this._lastTouchTarget instanceof Node&&focusTarget instanceof Node&&(focusTarget===this._lastTouchTarget||focusTarget.contains(this._lastTouchTarget))}/**
     * Handles focus events on a registered element.
     * @private
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */;_proto11._onFocus=function _onFocus(event,element){// NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
// focus event affecting the monitored element. If we want to use the origin of the first event
// instead we should check for the cdk-focused class here and return if the element already has
// it. (This only matters for elements that have includesChildren = true).
// NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
// focus event affecting the monitored element. If we want to use the origin of the first event
// instead we should check for the cdk-focused class here and return if the element already has
// it. (This only matters for elements that have includesChildren = true).
// If we are not counting child-element-focus as focused, make sure that the event target is the
// monitored element itself.
/** @type {?} */var elementInfo=this._elementInfo.get(element);if(!elementInfo||!elementInfo.checkChildren&&element!==event.target){return}// If we couldn't detect a cause for the focus event, it's due to one of three reasons:
// 1) The window has just regained focus, in which case we want to restore the focused state of
//    the element from before the window blurred.
// 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
// 3) The element was programmatically focused, in which case we should mark the origin as
//    'program'.
/** @type {?} */var origin=this._origin;if(!origin){if(this._windowFocused&&this._lastFocusOrigin){origin=this._lastFocusOrigin}else if(this._wasCausedByTouch(event)){origin="touch"}else{origin="program"}}this._setClasses(element,origin);this._emitOrigin(elementInfo.subject,origin);this._lastFocusOrigin=origin}/**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */;_proto11._onBlur=function _onBlur(event,element){// If we are counting child-element-focus as focused, make sure that we aren't just blurring in
// order to focus another child of the monitored element.
/** @type {?} */var elementInfo=this._elementInfo.get(element);if(!elementInfo||elementInfo.checkChildren&&event.relatedTarget instanceof Node&&element.contains(event.relatedTarget)){return}this._setClasses(element);this._emitOrigin(elementInfo.subject,null)}/**
     * @private
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */;_proto11._emitOrigin=function _emitOrigin(subject,origin){this._ngZone.run(/**
         * @return {?}
         */function(){return subject.next(origin)})}/**
     * @private
     * @return {?}
     */;_proto11._incrementMonitoredElementCount=function _incrementMonitoredElementCount(){var _this16=this;// Register global listeners when first element is monitored.
if(++this._monitoredElementCount==1&&this._platform.isBrowser){// Note: we listen to events in the capture phase so we
// can detect them even if the user stops propagation.
this._ngZone.runOutsideAngular(/**
             * @return {?}
             */function(){document.addEventListener("keydown",_this16._documentKeydownListener,captureEventListenerOptions);document.addEventListener("mousedown",_this16._documentMousedownListener,captureEventListenerOptions);document.addEventListener("touchstart",_this16._documentTouchstartListener,captureEventListenerOptions);window.addEventListener("focus",_this16._windowFocusListener)})}}/**
     * @private
     * @return {?}
     */;_proto11._decrementMonitoredElementCount=function _decrementMonitoredElementCount(){// Unregister global listeners when last element is unmonitored.
if(! --this._monitoredElementCount){document.removeEventListener("keydown",this._documentKeydownListener,captureEventListenerOptions);document.removeEventListener("mousedown",this._documentMousedownListener,captureEventListenerOptions);document.removeEventListener("touchstart",this._documentTouchstartListener,captureEventListenerOptions);window.removeEventListener("focus",this._windowFocusListener);// Clear timeouts for all potentially pending timeouts to prevent the leaks.
clearTimeout(this._windowFocusTimeoutId);clearTimeout(this._touchTimeoutId);clearTimeout(this._originTimeoutId)}};return FocusMonitor}();FocusMonitor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */FocusMonitor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]}]};/** @nocollapse */FocusMonitor.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function FocusMonitor_Factory(){return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]),Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]))},token:FocusMonitor,providedIn:"root"});/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */var CdkMonitorFocus=/*#__PURE__*/function(){/**
     * @param {?} _elementRef
     * @param {?} _focusMonitor
     */function CdkMonitorFocus(_elementRef,_focusMonitor){var _this17=this;this._elementRef=_elementRef;this._focusMonitor=_focusMonitor;this.cdkFocusChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];this._monitorSubscription=this._focusMonitor.monitor(this._elementRef,this._elementRef.nativeElement.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(/**
         * @param {?} origin
         * @return {?}
         */function(origin){return _this17.cdkFocusChange.emit(origin)})}/**
     * @return {?}
     */var _proto12=CdkMonitorFocus.prototype;_proto12.ngOnDestroy=function ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);this._monitorSubscription.unsubscribe()};return CdkMonitorFocus}();CdkMonitorFocus.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]"}]}];/** @nocollapse */CdkMonitorFocus.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:FocusMonitor}]};CdkMonitorFocus.propDecorators={cdkFocusChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]}]};/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher,ngZone,platform){return parentDispatcher||new FocusMonitor(ngZone,platform)}/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */var FOCUS_MONITOR_PROVIDER={// If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
provide:FocusMonitor,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"],new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"],FocusMonitor],_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]],useFactory:FOCUS_MONITOR_PROVIDER_FACTORY};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */function isFakeMousedownFromScreenReader(event){return event.buttons===0}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var A11yModule=function A11yModule(){};A11yModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"],_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],declarations:[CdkAriaLive,CdkTrapFocus,CdkMonitorFocus],exports:[CdkAriaLive,CdkTrapFocus,CdkMonitorFocus]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=a11y.js.map
/***/},/***/"./node_modules/@angular/cdk/esm2015/bidi.js":/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/bidi.js ***!
  \***************************************************/ /*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */ /***/function node_modulesAngularCdkEsm2015BidiJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Directionality",function(){return Directionality});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DIR_DOCUMENT",function(){return DIR_DOCUMENT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Dir",function(){return Dir});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BidiModule",function(){return BidiModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return DIR_DOCUMENT_FACTORY});/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */var DIR_DOCUMENT=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("cdk-dir-doc",{providedIn:"root",factory:DIR_DOCUMENT_FACTORY});/**
 * \@docs-private
 * @return {?}
 */function DIR_DOCUMENT_FACTORY(){return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */var Directionality=/*#__PURE__*/function(){/**
     * @param {?=} _document
     */function Directionality(_document){/**
         * The current 'ltr' or 'rtl' value.
         */this.value="ltr";/**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */this.change=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];if(_document){// TODO: handle 'auto' value -
// We still need to account for dir="auto".
// It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
// but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
/** @type {?} */var bodyDir=_document.body?_document.body.dir:null;/** @type {?} */var htmlDir=_document.documentElement?_document.documentElement.dir:null;/** @type {?} */var value=bodyDir||htmlDir;this.value=value==="ltr"||value==="rtl"?value:"ltr"}}/**
     * @return {?}
     */var _proto13=Directionality.prototype;_proto13.ngOnDestroy=function ngOnDestroy(){this.change.complete()};return Directionality}();Directionality.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */Directionality.ctorParameters=function(){return[{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[DIR_DOCUMENT]}]}]};/** @nocollapse */Directionality.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function Directionality_Factory(){return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(DIR_DOCUMENT,8))},token:Directionality,providedIn:"root"});/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */var Dir=/*#__PURE__*/function(){function Dir(){/**
         * Normalized direction that accounts for invalid/unsupported values.
         */this._dir="ltr";/**
         * Whether the `value` has been set to its initial value.
         */this._isInitialized=false;/**
         * Event emitted when the direction changes.
         */this.change=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]}/**
     * \@docs-private
     * @return {?}
     */var _proto14=Dir.prototype;/**
     * Initialize once default value has been set.
     * @return {?}
     */_proto14.ngAfterContentInit=function ngAfterContentInit(){this._isInitialized=true}/**
     * @return {?}
     */;_proto14.ngOnDestroy=function ngOnDestroy(){this.change.complete()};_createClass(Dir,[{key:"dir",get:function get(){return this._dir}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){/** @type {?} */var old=this._dir;/** @type {?} */var normalizedValue=value?value.toLowerCase():value;this._rawDir=value;this._dir=normalizedValue==="ltr"||normalizedValue==="rtl"?normalizedValue:"ltr";if(old!==this._dir&&this._isInitialized){this.change.emit(this._dir)}}/**
     * Current layout direction of the element.
     * @return {?}
     */},{key:"value",get:function get(){return this.dir}}]);return Dir}();Dir.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"[dir]",providers:[{provide:Directionality,useExisting:Dir}],host:{"[attr.dir]":"_rawDir"},exportAs:"dir"}]}];Dir.propDecorators={change:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],args:["dirChange"]}],dir:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BidiModule=function BidiModule(){};BidiModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],args:[{exports:[Dir],declarations:[Dir]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=bidi.js.map
/***/},/***/"./node_modules/@angular/cdk/esm2015/cdk.js":/*!**************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/cdk.js ***!
  \**************************************************/ /*! exports provided: VERSION */ /***/function node_modulesAngularCdkEsm2015CdkJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"VERSION",function(){return VERSION});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Current version of the Angular Component Development Kit.
 * @type {?}
 */var VERSION=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]("8.2.1");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=cdk.js.map
/***/},/***/"./node_modules/@angular/cdk/esm2015/coercion.js":/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/coercion.js ***!
  \*******************************************************/ /*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */ /***/function node_modulesAngularCdkEsm2015CoercionJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"coerceBooleanProperty",function(){return coerceBooleanProperty});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"coerceNumberProperty",function(){return coerceNumberProperty});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"_isNumberValue",function(){return _isNumberValue});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"coerceArray",function(){return coerceArray});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"coerceCssPixelValue",function(){return coerceCssPixelValue});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"coerceElement",function(){return coerceElement});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */function coerceBooleanProperty(value){return value!=null&&""+value!=="false"}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */function coerceNumberProperty(value,fallbackValue){if(fallbackValue===void 0){fallbackValue=0}return _isNumberValue(value)?Number(value):fallbackValue}/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */function _isNumberValue(value){// parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
// and other non-number values as NaN, where Number just uses 0) but it considers the string
// '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
return!isNaN(parseFloat(/** @type {?} */value))&&!isNaN(Number(value))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */function coerceArray(value){return Array.isArray(value)?value:[value]}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */function coerceCssPixelValue(value){if(value==null){return""}return typeof value==="string"?value:value+"px"}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */function coerceElement(elementOrRef){return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]?elementOrRef.nativeElement:elementOrRef}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=coercion.js.map
/***/},/***/"./node_modules/@angular/cdk/esm2015/keycodes.js":/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/keycodes.js ***!
  \*******************************************************/ /*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META, hasModifierKey */ /***/function node_modulesAngularCdkEsm2015KeycodesJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAC_ENTER",function(){return MAC_ENTER});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BACKSPACE",function(){return BACKSPACE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TAB",function(){return TAB});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUM_CENTER",function(){return NUM_CENTER});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ENTER",function(){return ENTER});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SHIFT",function(){return SHIFT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CONTROL",function(){return CONTROL});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ALT",function(){return ALT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PAUSE",function(){return PAUSE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CAPS_LOCK",function(){return CAPS_LOCK});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ESCAPE",function(){return ESCAPE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SPACE",function(){return SPACE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PAGE_UP",function(){return PAGE_UP});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PAGE_DOWN",function(){return PAGE_DOWN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"END",function(){return END});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HOME",function(){return HOME});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LEFT_ARROW",function(){return LEFT_ARROW});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"UP_ARROW",function(){return UP_ARROW});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RIGHT_ARROW",function(){return RIGHT_ARROW});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DOWN_ARROW",function(){return DOWN_ARROW});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PLUS_SIGN",function(){return PLUS_SIGN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PRINT_SCREEN",function(){return PRINT_SCREEN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"INSERT",function(){return INSERT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DELETE",function(){return DELETE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ZERO",function(){return ZERO});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ONE",function(){return ONE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TWO",function(){return TWO});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"THREE",function(){return THREE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FOUR",function(){return FOUR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FIVE",function(){return FIVE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SIX",function(){return SIX});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SEVEN",function(){return SEVEN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"EIGHT",function(){return EIGHT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NINE",function(){return NINE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FF_SEMICOLON",function(){return FF_SEMICOLON});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FF_EQUALS",function(){return FF_EQUALS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"QUESTION_MARK",function(){return QUESTION_MARK});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AT_SIGN",function(){return AT_SIGN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"A",function(){return A});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"B",function(){return B});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"C",function(){return C});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"D",function(){return D});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"E",function(){return E});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F",function(){return F});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"G",function(){return G});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"H",function(){return H});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"I",function(){return I});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"J",function(){return J});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"K",function(){return K});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"L",function(){return L});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"M",function(){return M});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"N",function(){return N});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"O",function(){return O});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"P",function(){return P});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Q",function(){return Q});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"R",function(){return R});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"S",function(){return S});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"T",function(){return T});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"U",function(){return U});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"V",function(){return V});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"W",function(){return W});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"X",function(){return X});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Y",function(){return Y});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Z",function(){return Z});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"META",function(){return META});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAC_WK_CMD_LEFT",function(){return MAC_WK_CMD_LEFT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAC_WK_CMD_RIGHT",function(){return MAC_WK_CMD_RIGHT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CONTEXT_MENU",function(){return CONTEXT_MENU});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_ZERO",function(){return NUMPAD_ZERO});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_ONE",function(){return NUMPAD_ONE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_TWO",function(){return NUMPAD_TWO});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_THREE",function(){return NUMPAD_THREE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_FOUR",function(){return NUMPAD_FOUR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_FIVE",function(){return NUMPAD_FIVE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_SIX",function(){return NUMPAD_SIX});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_SEVEN",function(){return NUMPAD_SEVEN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_EIGHT",function(){return NUMPAD_EIGHT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_NINE",function(){return NUMPAD_NINE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_MULTIPLY",function(){return NUMPAD_MULTIPLY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_PLUS",function(){return NUMPAD_PLUS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_MINUS",function(){return NUMPAD_MINUS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_PERIOD",function(){return NUMPAD_PERIOD});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUMPAD_DIVIDE",function(){return NUMPAD_DIVIDE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F1",function(){return F1});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F2",function(){return F2});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F3",function(){return F3});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F4",function(){return F4});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F5",function(){return F5});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F6",function(){return F6});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F7",function(){return F7});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F8",function(){return F8});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F9",function(){return F9});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F10",function(){return F10});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F11",function(){return F11});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"F12",function(){return F12});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NUM_LOCK",function(){return NUM_LOCK});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SCROLL_LOCK",function(){return SCROLL_LOCK});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FIRST_MEDIA",function(){return FIRST_MEDIA});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FF_MINUS",function(){return FF_MINUS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MUTE",function(){return MUTE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"VOLUME_DOWN",function(){return VOLUME_DOWN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"VOLUME_UP",function(){return VOLUME_UP});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FF_MUTE",function(){return FF_MUTE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FF_VOLUME_DOWN",function(){return FF_VOLUME_DOWN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LAST_MEDIA",function(){return LAST_MEDIA});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FF_VOLUME_UP",function(){return FF_VOLUME_UP});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SEMICOLON",function(){return SEMICOLON});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"EQUALS",function(){return EQUALS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"COMMA",function(){return COMMA});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DASH",function(){return DASH});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SLASH",function(){return SLASH});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"APOSTROPHE",function(){return APOSTROPHE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TILDE",function(){return TILDE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"OPEN_SQUARE_BRACKET",function(){return OPEN_SQUARE_BRACKET});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BACKSLASH",function(){return BACKSLASH});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CLOSE_SQUARE_BRACKET",function(){return CLOSE_SQUARE_BRACKET});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SINGLE_QUOTE",function(){return SINGLE_QUOTE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAC_META",function(){return MAC_META});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"hasModifierKey",function(){return hasModifierKey});/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var MAC_ENTER=3;/** @type {?} */var BACKSPACE=8;/** @type {?} */var TAB=9;/** @type {?} */var NUM_CENTER=12;/** @type {?} */var ENTER=13;/** @type {?} */var SHIFT=16;/** @type {?} */var CONTROL=17;/** @type {?} */var ALT=18;/** @type {?} */var PAUSE=19;/** @type {?} */var CAPS_LOCK=20;/** @type {?} */var ESCAPE=27;/** @type {?} */var SPACE=32;/** @type {?} */var PAGE_UP=33;/** @type {?} */var PAGE_DOWN=34;/** @type {?} */var END=35;/** @type {?} */var HOME=36;/** @type {?} */var LEFT_ARROW=37;/** @type {?} */var UP_ARROW=38;/** @type {?} */var RIGHT_ARROW=39;/** @type {?} */var DOWN_ARROW=40;/** @type {?} */var PLUS_SIGN=43;/** @type {?} */var PRINT_SCREEN=44;/** @type {?} */var INSERT=45;/** @type {?} */var DELETE=46;/** @type {?} */var ZERO=48;/** @type {?} */var ONE=49;/** @type {?} */var TWO=50;/** @type {?} */var THREE=51;/** @type {?} */var FOUR=52;/** @type {?} */var FIVE=53;/** @type {?} */var SIX=54;/** @type {?} */var SEVEN=55;/** @type {?} */var EIGHT=56;/** @type {?} */var NINE=57;/** @type {?} */var FF_SEMICOLON=59;// Firefox (Gecko) fires this for semicolon instead of 186
/** @type {?} */var FF_EQUALS=61;// Firefox (Gecko) fires this for equals instead of 187
/** @type {?} */var QUESTION_MARK=63;/** @type {?} */var AT_SIGN=64;/** @type {?} */var A=65;/** @type {?} */var B=66;/** @type {?} */var C=67;/** @type {?} */var D=68;/** @type {?} */var E=69;/** @type {?} */var F=70;/** @type {?} */var G=71;/** @type {?} */var H=72;/** @type {?} */var I=73;/** @type {?} */var J=74;/** @type {?} */var K=75;/** @type {?} */var L=76;/** @type {?} */var M=77;/** @type {?} */var N=78;/** @type {?} */var O=79;/** @type {?} */var P=80;/** @type {?} */var Q=81;/** @type {?} */var R=82;/** @type {?} */var S=83;/** @type {?} */var T=84;/** @type {?} */var U=85;/** @type {?} */var V=86;/** @type {?} */var W=87;/** @type {?} */var X=88;/** @type {?} */var Y=89;/** @type {?} */var Z=90;/** @type {?} */var META=91;// WIN_KEY_LEFT
/** @type {?} */var MAC_WK_CMD_LEFT=91;/** @type {?} */var MAC_WK_CMD_RIGHT=93;/** @type {?} */var CONTEXT_MENU=93;/** @type {?} */var NUMPAD_ZERO=96;/** @type {?} */var NUMPAD_ONE=97;/** @type {?} */var NUMPAD_TWO=98;/** @type {?} */var NUMPAD_THREE=99;/** @type {?} */var NUMPAD_FOUR=100;/** @type {?} */var NUMPAD_FIVE=101;/** @type {?} */var NUMPAD_SIX=102;/** @type {?} */var NUMPAD_SEVEN=103;/** @type {?} */var NUMPAD_EIGHT=104;/** @type {?} */var NUMPAD_NINE=105;/** @type {?} */var NUMPAD_MULTIPLY=106;/** @type {?} */var NUMPAD_PLUS=107;/** @type {?} */var NUMPAD_MINUS=109;/** @type {?} */var NUMPAD_PERIOD=110;/** @type {?} */var NUMPAD_DIVIDE=111;/** @type {?} */var F1=112;/** @type {?} */var F2=113;/** @type {?} */var F3=114;/** @type {?} */var F4=115;/** @type {?} */var F5=116;/** @type {?} */var F6=117;/** @type {?} */var F7=118;/** @type {?} */var F8=119;/** @type {?} */var F9=120;/** @type {?} */var F10=121;/** @type {?} */var F11=122;/** @type {?} */var F12=123;/** @type {?} */var NUM_LOCK=144;/** @type {?} */var SCROLL_LOCK=145;/** @type {?} */var FIRST_MEDIA=166;/** @type {?} */var FF_MINUS=173;/** @type {?} */var MUTE=173;// Firefox (Gecko) fires 181 for MUTE
/** @type {?} */var VOLUME_DOWN=174;// Firefox (Gecko) fires 182 for VOLUME_DOWN
/** @type {?} */var VOLUME_UP=175;// Firefox (Gecko) fires 183 for VOLUME_UP
/** @type {?} */var FF_MUTE=181;/** @type {?} */var FF_VOLUME_DOWN=182;/** @type {?} */var LAST_MEDIA=183;/** @type {?} */var FF_VOLUME_UP=183;/** @type {?} */var SEMICOLON=186;// Firefox (Gecko) fires 59 for SEMICOLON
/** @type {?} */var EQUALS=187;// Firefox (Gecko) fires 61 for EQUALS
/** @type {?} */var COMMA=188;/** @type {?} */var DASH=189;// Firefox (Gecko) fires 173 for DASH/MINUS
/** @type {?} */var SLASH=191;/** @type {?} */var APOSTROPHE=192;/** @type {?} */var TILDE=192;/** @type {?} */var OPEN_SQUARE_BRACKET=219;/** @type {?} */var BACKSLASH=220;/** @type {?} */var CLOSE_SQUARE_BRACKET=221;/** @type {?} */var SINGLE_QUOTE=222;/** @type {?} */var MAC_META=224;/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Checks whether a modifier key is pressed.
 * @param {?} event Event to be checked.
 * @param {...?} modifiers
 * @return {?}
 */function hasModifierKey(event){for(var _len2=arguments.length,modifiers=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){modifiers[_key2-1]=arguments[_key2]}if(modifiers.length){return modifiers.some(/**
         * @param {?} modifier
         * @return {?}
         */function(modifier){return event[modifier]})}return event.altKey||event.shiftKey||event.ctrlKey||event.metaKey}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=keycodes.js.map
/***/},/***/"./node_modules/@angular/cdk/esm2015/observers.js":/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/observers.js ***!
  \********************************************************/ /*! exports provided: MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule */ /***/function node_modulesAngularCdkEsm2015ObserversJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MutationObserverFactory",function(){return MutationObserverFactory});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ContentObserver",function(){return ContentObserver});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CdkObserveContent",function(){return CdkObserveContent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ObserversModule",function(){return ObserversModule});/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */var MutationObserverFactory=/*#__PURE__*/function(){function MutationObserverFactory(){}var _proto15=MutationObserverFactory.prototype;/**
     * @param {?} callback
     * @return {?}
     */_proto15.create=function create(callback){return typeof MutationObserver==="undefined"?null:new MutationObserver(callback)};return MutationObserverFactory}();MutationObserverFactory.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */MutationObserverFactory.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function MutationObserverFactory_Factory(){return new MutationObserverFactory},token:MutationObserverFactory,providedIn:"root"});/**
 * An injectable service that allows watching elements for changes to their content.
 */var ContentObserver=/*#__PURE__*/function(){/**
     * @param {?} _mutationObserverFactory
     */function ContentObserver(_mutationObserverFactory){this._mutationObserverFactory=_mutationObserverFactory;/**
         * Keeps track of the existing MutationObservers so they can be reused.
         */this._observedElements=new Map}/**
     * @return {?}
     */var _proto16=ContentObserver.prototype;_proto16.ngOnDestroy=function ngOnDestroy(){var _this18=this;this._observedElements.forEach(/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */function(_,element){return _this18._cleanupObserver(element)})}/**
     * @param {?} elementOrRef
     * @return {?}
     */;_proto16.observe=function observe(elementOrRef){var _this19=this;/** @type {?} */var element=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](/**
         * @param {?} observer
         * @return {?}
         */function(observer){/** @type {?} */var stream=_this19._observeElement(element);/** @type {?} */var subscription=stream.subscribe(observer);return(/**
             * @return {?}
             */function(){subscription.unsubscribe();_this19._unobserveElement(element)})})}/**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */;_proto16._observeElement=function _observeElement(element){if(!this._observedElements.has(element)){/** @type {?} */var stream=new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"];/** @type {?} */var observer=this._mutationObserverFactory.create(/**
             * @param {?} mutations
             * @return {?}
             */function(mutations){return stream.next(mutations)});if(observer){observer.observe(element,{characterData:true,childList:true,subtree:true})}this._observedElements.set(element,{observer:observer,stream:stream,count:1})}else{/** @type {?} */this._observedElements.get(element).count++}return(/** @type {?} */this._observedElements.get(element).stream)}/**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */;_proto16._unobserveElement=function _unobserveElement(element){if(this._observedElements.has(element)){/** @type {?} */this._observedElements.get(element).count--;if(!/** @type {?} */this._observedElements.get(element).count){this._cleanupObserver(element)}}}/**
     * Clean up the underlying MutationObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */;_proto16._cleanupObserver=function _cleanupObserver(element){if(this._observedElements.has(element)){var _this$_observedElemen=/** @type {?} */this._observedElements.get(element),observer=_this$_observedElemen.observer,stream=_this$_observedElemen.stream;if(observer){observer.disconnect()}stream.complete();this._observedElements.delete(element)}};return ContentObserver}();ContentObserver.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */ContentObserver.ctorParameters=function(){return[{type:MutationObserverFactory}]};/** @nocollapse */ContentObserver.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function ContentObserver_Factory(){return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(MutationObserverFactory))},token:ContentObserver,providedIn:"root"});/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */var CdkObserveContent=/*#__PURE__*/function(){/**
     * @param {?} _contentObserver
     * @param {?} _elementRef
     * @param {?} _ngZone
     */function CdkObserveContent(_contentObserver,_elementRef,_ngZone){this._contentObserver=_contentObserver;this._elementRef=_elementRef;this._ngZone=_ngZone;/**
         * Event emitted for each change in the element's content.
         */this.event=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];this._disabled=false;this._currentSubscription=null}/**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     * @return {?}
     */var _proto17=CdkObserveContent.prototype;/**
     * @return {?}
     */_proto17.ngAfterContentInit=function ngAfterContentInit(){if(!this._currentSubscription&&!this.disabled){this._subscribe()}}/**
     * @return {?}
     */;_proto17.ngOnDestroy=function ngOnDestroy(){this._unsubscribe()}/**
     * @private
     * @return {?}
     */;_proto17._subscribe=function _subscribe(){var _this20=this;this._unsubscribe();/** @type {?} */var stream=this._contentObserver.observe(this._elementRef);// TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
// Consider brining it back inside the zone next time we're making breaking changes.
// Bringing it back inside can cause things like infinite change detection loops and changed
// after checked errors if people's code isn't handling it properly.
this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){_this20._currentSubscription=(_this20.debounce?stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this20.debounce)):stream).subscribe(_this20.event)})}/**
     * @private
     * @return {?}
     */;_proto17._unsubscribe=function _unsubscribe(){if(this._currentSubscription){this._currentSubscription.unsubscribe()}};_createClass(CdkObserveContent,[{key:"disabled",get:function get(){return this._disabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._disabled=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);this._disabled?this._unsubscribe():this._subscribe()}/**
     * Debounce interval for emitting the changes.
     * @return {?}
     */},{key:"debounce",get:function get(){return this._debounce}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._debounce=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);this._subscribe()}}]);return CdkObserveContent}();CdkObserveContent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"[cdkObserveContent]",exportAs:"cdkObserveContent"}]}];/** @nocollapse */CdkObserveContent.ctorParameters=function(){return[{type:ContentObserver},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]}]};CdkObserveContent.propDecorators={event:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],args:["cdkObserveContent"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],args:["cdkObserveContentDisabled"]}],debounce:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}]};var ObserversModule=function ObserversModule(){};ObserversModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],args:[{exports:[CdkObserveContent],declarations:[CdkObserveContent],providers:[MutationObserverFactory]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=observers.js.map
/***/},/***/"./node_modules/@angular/cdk/esm2015/platform.js":/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/platform.js ***!
  \*******************************************************/ /*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType, _supportsShadowDom */ /***/function node_modulesAngularCdkEsm2015PlatformJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Platform",function(){return Platform});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PlatformModule",function(){return PlatformModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getSupportedInputTypes",function(){return getSupportedInputTypes});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"supportsPassiveEventListeners",function(){return supportsPassiveEventListeners});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"normalizePassiveListenerOptions",function(){return normalizePassiveListenerOptions});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"supportsScrollBehavior",function(){return supportsScrollBehavior});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getRtlScrollAxisType",function(){return getRtlScrollAxisType});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RtlScrollAxisType",function(){return RtlScrollAxisType});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"_supportsShadowDom",function(){return _supportsShadowDom});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */var hasV8BreakIterator;// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try{hasV8BreakIterator=typeof Intl!=="undefined"&&/** @type {?} */Intl.v8BreakIterator}catch(_a){hasV8BreakIterator=false}/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */var Platform=/**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */function Platform(_platformId){this._platformId=_platformId;/**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */this.isBrowser=this._platformId?Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId):typeof document==="object"&&!!document;/**
         * Whether the current browser is Microsoft Edge.
         */this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);/**
         * Whether the current rendering engine is Microsoft Trident.
         */this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);/**
         * Whether the current rendering engine is Blink.
         */ // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
this.BLINK=this.isBrowser&&!!(/** @type {?} */window.chrome||hasV8BreakIterator)&&typeof CSS!=="undefined"&&!this.EDGE&&!this.TRIDENT;/**
         * Whether the current rendering engine is WebKit.
         */ // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
// ensure that Webkit runs standalone and is not used as another engine's base.
this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;/**
         * Whether the current platform is Apple iOS.
         */this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);/**
         * Whether the current browser is Firefox.
         */ // It's difficult to detect the plain Gecko engine, because most of the browsers identify
// them self as Gecko-like browsers and modify the userAgent's according to that.
// Since we only cover one explicit Firefox case, we can simply check for Firefox
// instead of having an unstable check for Gecko.
this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);/**
         * Whether the current platform is Android.
         */ // Trident on mobile adds the android platform to the userAgent to trick detections.
this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;/**
         * Whether the current browser is Safari.
         */ // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
// this and just place the Safari keyword in the userAgent. To be more safe about Safari every
// Safari browser should also use Webkit as its layout engine.
this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT};Platform.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */Platform.ctorParameters=function(){return[{type:Object,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]}]}]};/** @nocollapse */Platform.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275defineInjectable"])({factory:function Platform_Factory(){return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],8))},token:Platform,providedIn:"root"});/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var PlatformModule=function PlatformModule(){};PlatformModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */var supportedInputTypes;/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */var candidateInputTypes=[// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
"color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];/**
 * @return {?} The input types supported by this browser.
 */function getSupportedInputTypes(){// Result is cached.
if(supportedInputTypes){return supportedInputTypes}// We can't check if an input type is not supported until we're on the browser, so say that
// everything is supported when not on the browser. We don't use `Platform` here since it's
// just a helper function and can't inject it.
if(typeof document!=="object"||!document){supportedInputTypes=new Set(candidateInputTypes);return supportedInputTypes}/** @type {?} */var featureTestInput=document.createElement("input");supportedInputTypes=new Set(candidateInputTypes.filter(/**
     * @param {?} value
     * @return {?}
     */function(value){featureTestInput.setAttribute("type",value);return featureTestInput.type===value}));return supportedInputTypes}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */var supportsPassiveEvents;/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */function supportsPassiveEventListeners(){if(supportsPassiveEvents==null&&typeof window!=="undefined"){try{window.addEventListener("test",/** @type {?} */null,Object.defineProperty({},"passive",{get:/**
                 * @return {?}
                 */function get(){return supportsPassiveEvents=true}}))}finally{supportsPassiveEvents=supportsPassiveEvents||false}}return supportsPassiveEvents}/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */function normalizePassiveListenerOptions(options){return supportsPassiveEventListeners()?options:!!options.capture}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @enum {number} */var RtlScrollAxisType={/**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */NORMAL:0,/**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */NEGATED:1,/**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */INVERTED:2};RtlScrollAxisType[RtlScrollAxisType.NORMAL]="NORMAL";RtlScrollAxisType[RtlScrollAxisType.NEGATED]="NEGATED";RtlScrollAxisType[RtlScrollAxisType.INVERTED]="INVERTED";/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */var rtlScrollAxisType;/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */function supportsScrollBehavior(){return!!(typeof document=="object"&&"scrollBehavior"in/** @type {?} */document.documentElement.style)}/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */function getRtlScrollAxisType(){// We can't check unless we're on the browser. Just assume 'normal' if we're not.
if(typeof document!=="object"||!document){return RtlScrollAxisType.NORMAL}if(!rtlScrollAxisType){// Create a 1px wide scrolling container and a 2px wide content element.
/** @type {?} */var scrollContainer=document.createElement("div");/** @type {?} */var containerStyle=scrollContainer.style;scrollContainer.dir="rtl";containerStyle.height="1px";containerStyle.width="1px";containerStyle.overflow="auto";containerStyle.visibility="hidden";containerStyle.pointerEvents="none";containerStyle.position="absolute";/** @type {?} */var content=document.createElement("div");/** @type {?} */var contentStyle=content.style;contentStyle.width="2px";contentStyle.height="1px";scrollContainer.appendChild(content);document.body.appendChild(scrollContainer);rtlScrollAxisType=RtlScrollAxisType.NORMAL;// The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
// browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
// dealing with one of the other two types of browsers.
if(scrollContainer.scrollLeft===0){// In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
// INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
// setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
// return 0 when we read it again.
scrollContainer.scrollLeft=1;rtlScrollAxisType=scrollContainer.scrollLeft===0?RtlScrollAxisType.NEGATED:RtlScrollAxisType.INVERTED}/** @type {?} */scrollContainer.parentNode.removeChild(scrollContainer)}return rtlScrollAxisType}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var shadowDomIsSupported;/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */function _supportsShadowDom(){if(shadowDomIsSupported==null){/** @type {?} */var head=typeof document!=="undefined"?document.head:null;shadowDomIsSupported=!!(head&&(/** @type {?} */head.createShadowRoot||head.attachShadow))}return shadowDomIsSupported}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=platform.js.map
/***/},/***/"./node_modules/@angular/cdk/esm2015/text-field.js":/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/text-field.js ***!
  \*********************************************************/ /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */ /***/function node_modulesAngularCdkEsm2015TextFieldJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AutofillMonitor",function(){return AutofillMonitor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CdkAutofill",function(){return CdkAutofill});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CdkTextareaAutosize",function(){return CdkTextareaAutosize});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TextFieldModule",function(){return TextFieldModule});/* harmony import */var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/cdk/platform */"./node_modules/@angular/cdk/esm2015/platform.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Options to pass to the animationstart listener.
 * @type {?}
 */var listenerOptions=Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({passive:true});/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */var AutofillMonitor=/*#__PURE__*/function(){/**
     * @param {?} _platform
     * @param {?} _ngZone
     */function AutofillMonitor(_platform,_ngZone){this._platform=_platform;this._ngZone=_ngZone;this._monitoredElements=new Map}/**
     * @param {?} elementOrRef
     * @return {?}
     */var _proto18=AutofillMonitor.prototype;_proto18.monitor=function monitor(elementOrRef){var _this21=this;if(!this._platform.isBrowser){return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]}/** @type {?} */var element=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);/** @type {?} */var info=this._monitoredElements.get(element);if(info){return info.subject.asObservable()}/** @type {?} */var result=new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"];/** @type {?} */var cssClass="cdk-text-field-autofilled";/** @type {?} */var listener=/** @type {?} */ /**
         * @param {?} event
         * @return {?}
         */function listener(event){// Animation events fire on initial element render, we check for the presence of the autofill
// CSS class to make sure this is a real change in state, not just the initial render before
// we fire off events.
if(event.animationName==="cdk-text-field-autofill-start"&&!element.classList.contains(cssClass)){element.classList.add(cssClass);_this21._ngZone.run(/**
                 * @return {?}
                 */function(){return result.next({target:/** @type {?} */event.target,isAutofilled:true})})}else if(event.animationName==="cdk-text-field-autofill-end"&&element.classList.contains(cssClass)){element.classList.remove(cssClass);_this21._ngZone.run(/**
                 * @return {?}
                 */function(){return result.next({target:/** @type {?} */event.target,isAutofilled:false})})}};this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){element.addEventListener("animationstart",listener,listenerOptions);element.classList.add("cdk-text-field-autofill-monitored")});this._monitoredElements.set(element,{subject:result,unlisten:/**
             * @return {?}
             */function unlisten(){element.removeEventListener("animationstart",listener,listenerOptions)}});return result.asObservable()}/**
     * @param {?} elementOrRef
     * @return {?}
     */;_proto18.stopMonitoring=function stopMonitoring(elementOrRef){/** @type {?} */var element=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);/** @type {?} */var info=this._monitoredElements.get(element);if(info){info.unlisten();info.subject.complete();element.classList.remove("cdk-text-field-autofill-monitored");element.classList.remove("cdk-text-field-autofilled");this._monitoredElements.delete(element)}}/**
     * @return {?}
     */;_proto18.ngOnDestroy=function ngOnDestroy(){var _this22=this;this._monitoredElements.forEach(/**
         * @param {?} _info
         * @param {?} element
         * @return {?}
         */function(_info,element){return _this22.stopMonitoring(element)})};return AutofillMonitor}();AutofillMonitor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */AutofillMonitor.ctorParameters=function(){return[{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]}]};/** @nocollapse */AutofillMonitor.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjectable"])({factory:function AutofillMonitor_Factory(){return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]),Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]))},token:AutofillMonitor,providedIn:"root"});/**
 * A directive that can be used to monitor the autofill state of an input.
 */var CdkAutofill=/*#__PURE__*/function(){/**
     * @param {?} _elementRef
     * @param {?} _autofillMonitor
     */function CdkAutofill(_elementRef,_autofillMonitor){this._elementRef=_elementRef;this._autofillMonitor=_autofillMonitor;/**
         * Emits when the autofill state of the element changes.
         */this.cdkAutofill=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]}/**
     * @return {?}
     */var _proto19=CdkAutofill.prototype;_proto19.ngOnInit=function ngOnInit(){var _this23=this;this._autofillMonitor.monitor(this._elementRef).subscribe(/**
         * @param {?} event
         * @return {?}
         */function(event){return _this23.cdkAutofill.emit(event)})}/**
     * @return {?}
     */;_proto19.ngOnDestroy=function ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)};return CdkAutofill}();CdkAutofill.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"[cdkAutofill]"}]}];/** @nocollapse */CdkAutofill.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:AutofillMonitor}]};CdkAutofill.propDecorators={cdkAutofill:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Directive to automatically resize a textarea to fit its content.
 */var CdkTextareaAutosize=/*#__PURE__*/function(){/**
     * @param {?} _elementRef
     * @param {?} _platform
     * @param {?} _ngZone
     */function CdkTextareaAutosize(_elementRef,_platform,_ngZone){this._elementRef=_elementRef;this._platform=_platform;this._ngZone=_ngZone;this._destroyed=new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"];this._enabled=true;/**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */this._previousMinRows=-1;this._textareaElement=/** @type {?} */this._elementRef.nativeElement}/**
     * Minimum amount of rows in the textarea.
     * @return {?}
     */var _proto20=CdkTextareaAutosize.prototype;/**
     * Sets the minimum height of the textarea as determined by minRows.
     * @return {?}
     */_proto20._setMinHeight=function _setMinHeight(){/** @type {?} */var minHeight=this.minRows&&this._cachedLineHeight?this.minRows*this._cachedLineHeight+"px":null;if(minHeight){this._textareaElement.style.minHeight=minHeight}}/**
     * Sets the maximum height of the textarea as determined by maxRows.
     * @return {?}
     */;_proto20._setMaxHeight=function _setMaxHeight(){/** @type {?} */var maxHeight=this.maxRows&&this._cachedLineHeight?this.maxRows*this._cachedLineHeight+"px":null;if(maxHeight){this._textareaElement.style.maxHeight=maxHeight}}/**
     * @return {?}
     */;_proto20.ngAfterViewInit=function ngAfterViewInit(){var _this24=this;if(this._platform.isBrowser){// Remember the height which we started with in case autosizing is disabled
this._initialHeight=this._textareaElement.style.height;this.resizeToFitContent();this._ngZone.runOutsideAngular(/**
             * @return {?}
             */function(){Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window,"resize").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this24._destroyed)).subscribe(/**
                 * @return {?}
                 */function(){return _this24.resizeToFitContent(true)})})}}/**
     * @return {?}
     */;_proto20.ngOnDestroy=function ngOnDestroy(){this._destroyed.next();this._destroyed.complete()}/**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     * @private
     * @return {?}
     */;_proto20._cacheTextareaLineHeight=function _cacheTextareaLineHeight(){if(this._cachedLineHeight){return}// Use a clone element because we have to override some styles.
/** @type {?} */var textareaClone=/** @type {?} */this._textareaElement.cloneNode(false);textareaClone.rows=1;// Use `position: absolute` so that this doesn't cause a browser layout and use
// `visibility: hidden` so that nothing is rendered. Clear any other styles that
// would affect the height.
textareaClone.style.position="absolute";textareaClone.style.visibility="hidden";textareaClone.style.border="none";textareaClone.style.padding="0";textareaClone.style.height="";textareaClone.style.minHeight="";textareaClone.style.maxHeight="";// In Firefox it happens that textarea elements are always bigger than the specified amount
// of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
// As a workaround that removes the extra space for the scrollbar, we can just set overflow
// to hidden. This ensures that there is no invalid calculation of the line height.
// See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
textareaClone.style.overflow="hidden";/** @type {?} */this._textareaElement.parentNode.appendChild(textareaClone);this._cachedLineHeight=textareaClone.clientHeight;/** @type {?} */this._textareaElement.parentNode.removeChild(textareaClone);// Min and max heights have to be re-calculated if the cached line height changes
this._setMinHeight();this._setMaxHeight()}/**
     * @return {?}
     */;_proto20.ngDoCheck=function ngDoCheck(){if(this._platform.isBrowser){this.resizeToFitContent()}}/**
     * Resize the textarea to fit its content.
     * @param {?=} force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     * @return {?}
     */;_proto20.resizeToFitContent=function resizeToFitContent(force){var _this25=this;if(force===void 0){force=false}// If autosizing is disabled, just skip everything else
if(!this._enabled){return}this._cacheTextareaLineHeight();// If we haven't determined the line-height yet, we know we're still hidden and there's no point
// in checking the height of the textarea.
if(!this._cachedLineHeight){return}/** @type {?} */var textarea=/** @type {?} */this._elementRef.nativeElement;/** @type {?} */var value=textarea.value;// Only resize if the value or minRows have changed since these calculations can be expensive.
if(!force&&this._minRows===this._previousMinRows&&value===this._previousValue){return}/** @type {?} */var placeholderText=textarea.placeholder;// Reset the textarea height to auto in order to shrink back to its default size.
// Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
// Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
// value. To ensure that the scrollHeight is not bigger than the content, the placeholders
// need to be removed temporarily.
textarea.classList.add("cdk-textarea-autosize-measuring");textarea.placeholder="";// The cdk-textarea-autosize-measuring class includes a 2px padding to workaround an issue with
// Chrome, so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
/** @type {?} */var height=textarea.scrollHeight-4;// Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
textarea.style.height=height+"px";textarea.classList.remove("cdk-textarea-autosize-measuring");textarea.placeholder=placeholderText;this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){if(typeof requestAnimationFrame!=="undefined"){requestAnimationFrame(/**
                 * @return {?}
                 */function(){return _this25._scrollToCaretPosition(textarea)})}else{setTimeout(/**
                 * @return {?}
                 */function(){return _this25._scrollToCaretPosition(textarea)})}});this._previousValue=value;this._previousMinRows=this._minRows}/**
     * Resets the textarea to its original size
     * @return {?}
     */;_proto20.reset=function reset(){// Do not try to change the textarea, if the initialHeight has not been determined yet
// This might potentially remove styles when reset() is called before ngAfterViewInit
if(this._initialHeight===undefined){return}this._textareaElement.style.height=this._initialHeight}/**
     * @return {?}
     */;_proto20._noopInputHandler=function _noopInputHandler(){}// no-op handler that ensures we're running change detection on input events.
/**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     * @private
     * @param {?} textarea
     * @return {?}
     */;_proto20._scrollToCaretPosition=function _scrollToCaretPosition(textarea){var selectionStart=textarea.selectionStart,selectionEnd=textarea.selectionEnd;// IE will throw an "Unspecified error" if we try to set the selection range after the
// element has been removed from the DOM. Assert that the directive hasn't been destroyed
// between the time we requested the animation frame and when it was executed.
// Also note that we have to assert that the textarea is focused before we set the
// selection range. Setting the selection range on a non-focused textarea will cause
// it to receive focus on IE and Edge.
if(!this._destroyed.isStopped&&document.activeElement===textarea){textarea.setSelectionRange(selectionStart,selectionEnd)}};_createClass(CdkTextareaAutosize,[{key:"minRows",get:function get(){return this._minRows}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._minRows=value;this._setMinHeight()}/**
     * Maximum amount of rows in the textarea.
     * @return {?}
     */},{key:"maxRows",get:function get(){return this._maxRows}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._maxRows=value;this._setMaxHeight()}/**
     * Whether autosizing is enabled or not
     * @return {?}
     */},{key:"enabled",get:function get(){return this._enabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){value=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);// Only act if the actual value changed. This specifically helps to not run
// resizeToFitContent too early (i.e. before ngAfterViewInit)
if(this._enabled!==value){(this._enabled=value)?this.resizeToFitContent(true):this.reset()}}}]);return CdkTextareaAutosize}();CdkTextareaAutosize.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"textarea[cdkTextareaAutosize]",exportAs:"cdkTextareaAutosize",host:{"class":"cdk-textarea-autosize",// Textarea elements that have the directive applied should have a single row by default.
// Browsers normally show two rows by default and therefore this limits the minRows binding.
"rows":"1","(input)":"_noopInputHandler()"}}]}];/** @nocollapse */CdkTextareaAutosize.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]}]};CdkTextareaAutosize.propDecorators={minRows:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],args:["cdkAutosizeMinRows"]}],maxRows:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],args:["cdkAutosizeMaxRows"]}],enabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],args:["cdkTextareaAutosize"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TextFieldModule=function TextFieldModule(){};TextFieldModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],args:[{declarations:[CdkAutofill,CdkTextareaAutosize],imports:[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],exports:[CdkAutofill,CdkTextareaAutosize]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=text-field.js.map
/***/},/***/"./node_modules/@angular/common/fesm2015/http.js":/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.js ***!
  \*******************************************************/ /*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */ /***/function node_modulesAngularCommonFesm2015HttpJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_common_http_http_a",function(){return NoopInterceptor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_common_http_http_b",function(){return JsonpCallbackContext});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_common_http_http_c",function(){return jsonpCallbackContext});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_common_http_http_d",function(){return BrowserXhr});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_common_http_http_g",function(){return HttpXsrfCookieExtractor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_common_http_http_h",function(){return HttpXsrfInterceptor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_common_http_http_e",function(){return XSRF_COOKIE_NAME});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_common_http_http_f",function(){return XSRF_HEADER_NAME});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpBackend",function(){return HttpBackend});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpHandler",function(){return HttpHandler});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpClient",function(){return HttpClient});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpHeaders",function(){return HttpHeaders});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HTTP_INTERCEPTORS",function(){return HTTP_INTERCEPTORS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"JsonpClientBackend",function(){return JsonpClientBackend});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"JsonpInterceptor",function(){return JsonpInterceptor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpClientJsonpModule",function(){return HttpClientJsonpModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpClientModule",function(){return HttpClientModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpClientXsrfModule",function(){return HttpClientXsrfModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275HttpInterceptingHandler",function(){return HttpInterceptingHandler});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpParams",function(){return HttpParams});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpUrlEncodingCodec",function(){return HttpUrlEncodingCodec});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpRequest",function(){return HttpRequest});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpErrorResponse",function(){return HttpErrorResponse});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpEventType",function(){return HttpEventType});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpHeaderResponse",function(){return HttpHeaderResponse});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpResponse",function(){return HttpResponse});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpResponseBase",function(){return HttpResponseBase});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpXhrBackend",function(){return HttpXhrBackend});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"XhrFactory",function(){return XhrFactory});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"HttpXsrfTokenExtractor",function(){return HttpXsrfTokenExtractor});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @license Angular v8.2.8
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@publicApi
 * @abstract
 */var HttpHandler=function HttpHandler(){};if(false){}/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@publicApi
 * @abstract
 */var HttpBackend=function HttpBackend(){};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @record
 */function Update(){}if(false){}/**
 * Represents the header configuration options for an HTTP request.
 *
 * Instances should be assumed immutable with lazy parsing.
 *
 * \@publicApi
 */var HttpHeaders=/*#__PURE__*/function(){/**
     * Constructs a new HTTP header object with the given values.
     * @param {?=} headers
     */function HttpHeaders(headers){var _this26=this;/**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */this.normalizedNames=new Map;/**
         * Queued updates to be materialized the next initialization.
         */this.lazyUpdate=null;if(!headers){this.headers=new Map}else if(typeof headers==="string"){this.lazyInit=/**
             * @return {?}
             */function(){_this26.headers=new Map;headers.split("\n").forEach(/**
                 * @param {?} line
                 * @return {?}
                 */function(line){/** @type {?} */var index=line.indexOf(":");if(index>0){/** @type {?} */var name=line.slice(0,index);/** @type {?} */var key=name.toLowerCase();/** @type {?} */var value=line.slice(index+1).trim();_this26.maybeSetNormalizedName(name,key);if(_this26.headers.has(key)){/** @type {?} */_this26.headers.get(key).push(value)}else{_this26.headers.set(key,[value])}}})}}else{this.lazyInit=/**
             * @return {?}
             */function(){_this26.headers=new Map;Object.keys(headers).forEach(/**
                 * @param {?} name
                 * @return {?}
                 */function(name){/** @type {?} */var values=headers[name];/** @type {?} */var key=name.toLowerCase();if(typeof values==="string"){values=[values]}if(values.length>0){_this26.headers.set(key,values);_this26.maybeSetNormalizedName(name,key)}})}}}/**
     * Checks for existence of a header by a given name.
     *
     * @param {?} name The header name to check for existence.
     *
     * @return {?} Whether the header exits.
     */var _proto21=HttpHeaders.prototype;_proto21.has=function has(name){this.init();return this.headers.has(name.toLowerCase())}/**
     * Retrieves the first header value that matches a given name.
     *
     * @param {?} name The header name to retrieve.
     *
     * @return {?} A string if the header exists, null otherwise
     */;_proto21.get=function get(name){this.init();/** @type {?} */var values=this.headers.get(name.toLowerCase());return values&&values.length>0?values[0]:null}/**
     * Retrieves the names of the headers.
     *
     * @return {?} A list of header names.
     */;_proto21.keys=function keys(){this.init();return Array.from(this.normalizedNames.values())}/**
     * Retrieves a list of header values for a given header name.
     *
     * @param {?} name The header name from which to retrieve the values.
     *
     * @return {?} A string of values if the header exists, null otherwise.
     */;_proto21.getAll=function getAll(name){this.init();return this.headers.get(name.toLowerCase())||null}/**
     * Appends a new header value to the existing set of
     * header values.
     *
     * @param {?} name The header name for which to append the values.
     *
     * @param {?} value
     * @return {?} A clone of the HTTP header object with the value appended.
     */;_proto21.append=function append(name,value){return this.clone({name:name,value:value,op:"a"})}/**
     * Sets a header value for a given name. If the header name already exists,
     * its value is replaced with the given value.
     *
     * @param {?} name The header name.
     * @param {?} value The value to set or overide for a given name.
     *
     * @return {?} A clone of the HTTP header object with the newly set header value.
     */;_proto21.set=function set(name,value){return this.clone({name:name,value:value,op:"s"})}/**
     * Deletes all header values for a given name.
     *
     * @param {?} name The header name.
     * @param {?=} value The header values to delete for a given name.
     *
     * @return {?} A clone of the HTTP header object.
     */;_proto21.delete=function _delete(name,value){return this.clone({name:name,value:value,op:"d"})}/**
     * @private
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */;_proto21.maybeSetNormalizedName=function maybeSetNormalizedName(name,lcName){if(!this.normalizedNames.has(lcName)){this.normalizedNames.set(lcName,name)}}/**
     * @private
     * @return {?}
     */;_proto21.init=function init(){var _this27=this;if(!!this.lazyInit){if(this.lazyInit instanceof HttpHeaders){this.copyFrom(this.lazyInit)}else{this.lazyInit()}this.lazyInit=null;if(!!this.lazyUpdate){this.lazyUpdate.forEach(/**
                 * @param {?} update
                 * @return {?}
                 */function(update){return _this27.applyUpdate(update)});this.lazyUpdate=null}}}/**
     * @private
     * @param {?} other
     * @return {?}
     */;_proto21.copyFrom=function copyFrom(other){var _this28=this;other.init();Array.from(other.headers.keys()).forEach(/**
         * @param {?} key
         * @return {?}
         */function(key){_this28.headers.set(key,/** @type {?} */other.headers.get(key));_this28.normalizedNames.set(key,/** @type {?} */other.normalizedNames.get(key))})}/**
     * @private
     * @param {?} update
     * @return {?}
     */;_proto21.clone=function clone(update){/** @type {?} */var clone=new HttpHeaders;clone.lazyInit=!!this.lazyInit&&this.lazyInit instanceof HttpHeaders?this.lazyInit:this;clone.lazyUpdate=(this.lazyUpdate||[]).concat([update]);return clone}/**
     * @private
     * @param {?} update
     * @return {?}
     */;_proto21.applyUpdate=function applyUpdate(update){/** @type {?} */var key=update.name.toLowerCase();switch(update.op){case"a":case"s":/** @type {?} */var value=/** @type {?} */update.value;if(typeof value==="string"){value=[value]}if(value.length===0){return}this.maybeSetNormalizedName(update.name,key);/** @type {?} */var base=(update.op==="a"?this.headers.get(key):undefined)||[];base.push.apply(base,value);this.headers.set(key,base);break;case"d":/** @type {?} */var toDelete=/** @type {?} */update.value;if(!toDelete){this.headers.delete(key);this.normalizedNames.delete(key)}else{/** @type {?} */var existing=this.headers.get(key);if(!existing){return}existing=existing.filter(/**
                     * @param {?} value
                     * @return {?}
                     */function(value){return toDelete.indexOf(value)===-1});if(existing.length===0){this.headers.delete(key);this.normalizedNames.delete(key)}else{this.headers.set(key,existing)}}break;}}/**
     * \@internal
     * @param {?} fn
     * @return {?}
     */;_proto21.forEach=function forEach(fn){var _this29=this;this.init();Array.from(this.normalizedNames.keys()).forEach(/**
         * @param {?} key
         * @return {?}
         */function(key){return fn(/** @type {?} */_this29.normalizedNames.get(key),/** @type {?} */_this29.headers.get(key))})};return HttpHeaders}();if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * \@publicApi
 *
 * @record
 */function HttpParameterCodec(){}if(false){}/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * \@publicApi
 */var HttpUrlEncodingCodec=/*#__PURE__*/function(){function HttpUrlEncodingCodec(){}var _proto22=HttpUrlEncodingCodec.prototype;/**
     * Encodes a key name for a URL parameter or query-string.
     * @param {?} key The key name.
     * @return {?} The encoded key name.
     */_proto22.encodeKey=function encodeKey(key){return standardEncoding(key)}/**
     * Encodes the value of a URL parameter or query-string.
     * @param {?} value The value.
     * @return {?} The encoded value.
     */;_proto22.encodeValue=function encodeValue(value){return standardEncoding(value)}/**
     * Decodes an encoded URL parameter or query-string key.
     * @param {?} key The encoded key name.
     * @return {?} The decoded key name.
     */;_proto22.decodeKey=function decodeKey(key){return decodeURIComponent(key)}/**
     * Decodes an encoded URL parameter or query-string value.
     * @param {?} value The encoded value.
     * @return {?} The decoded value.
     */;_proto22.decodeValue=function decodeValue(value){return decodeURIComponent(value)};return HttpUrlEncodingCodec}();/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */function paramParser(rawParams,codec){/** @type {?} */var map=new Map;if(rawParams.length>0){/** @type {?} */var params=rawParams.split("&");params.forEach(/**
         * @param {?} param
         * @return {?}
         */function(param){/** @type {?} */var eqIdx=param.indexOf("=");var _ref=eqIdx==-1?[codec.decodeKey(param),""]:[codec.decodeKey(param.slice(0,eqIdx)),codec.decodeValue(param.slice(eqIdx+1))],key=_ref[0],val=_ref[1];/** @type {?} */var list=map.get(key)||[];list.push(val);map.set(key,list)})}return map}/**
 * @param {?} v
 * @return {?}
 */function standardEncoding(v){return encodeURIComponent(v).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}/**
 * @record
 */function Update$1(){}if(false){}/**
 * Options used to construct an `HttpParams` instance.
 *
 * \@publicApi
 * @record
 */function HttpParamsOptions(){}if(false){}/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * \@publicApi
 */var HttpParams=/*#__PURE__*/function(){/**
     * @param {?=} options
     */function HttpParams(options){var _this30=this;if(options===void 0){options=/** @type {?} */{}}this.updates=null;this.cloneFrom=null;this.encoder=options.encoder||new HttpUrlEncodingCodec;if(!!options.fromString){if(!!options.fromObject){throw new Error("Cannot specify both fromString and fromObject.")}this.map=paramParser(options.fromString,this.encoder)}else if(!!options.fromObject){this.map=new Map;Object.keys(options.fromObject).forEach(/**
             * @param {?} key
             * @return {?}
             */function(key){/** @type {?} */var value=/** @type {?} */options.fromObject[key];/** @type {?} */_this30.map.set(key,Array.isArray(value)?value:[value])})}else{this.map=null}}/**
     * Reports whether the body includes one or more values for a given parameter.
     * @param {?} param The parameter name.
     * @return {?} True if the parameter has one or more values,
     * false if it has no value or is not present.
     */var _proto23=HttpParams.prototype;_proto23.has=function has(param){this.init();return(/** @type {?} */this.map.has(param))}/**
     * Retrieves the first value for a parameter.
     * @param {?} param The parameter name.
     * @return {?} The first value of the given parameter,
     * or `null` if the parameter is not present.
     */;_proto23.get=function get(param){this.init();/** @type {?} */var res=/** @type {?} */this.map.get(param);return!!res?res[0]:null}/**
     * Retrieves all values for a  parameter.
     * @param {?} param The parameter name.
     * @return {?} All values in a string array,
     * or `null` if the parameter not present.
     */;_proto23.getAll=function getAll(param){this.init();return(/** @type {?} */this.map.get(param)||null)}/**
     * Retrieves all the parameters for this body.
     * @return {?} The parameter names in a string array.
     */;_proto23.keys=function keys(){this.init();return Array.from(/** @type {?} */this.map.keys())}/**
     * Appends a new value to existing values for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value to add.
     * @return {?} A new body with the appended value.
     */;_proto23.append=function append(param,value){return this.clone({param:param,value:value,op:"a"})}/**
     * Replaces the value for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value.
     * @return {?} A new body with the new value.
     */;_proto23.set=function set(param,value){return this.clone({param:param,value:value,op:"s"})}/**
     * Removes a given value or all values from a parameter.
     * @param {?} param The parameter name.
     * @param {?=} value The value to remove, if provided.
     * @return {?} A new body with the given value removed, or with all values
     * removed if no value is specified.
     */;_proto23.delete=function _delete(param,value){return this.clone({param:param,value:value,op:"d"})}/**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */;_proto23.toString=function toString(){var _this31=this;this.init();return this.keys().map(/**
         * @param {?} key
         * @return {?}
         */function(key){/** @type {?} */var eKey=_this31.encoder.encodeKey(key);return(/** @type {?} */ /** @type {?} */_this31.map.get(key).map(/**
             * @param {?} value
             * @return {?}
             */function(value){return eKey+"="+_this31.encoder.encodeValue(value)}).join("&"))}).join("&")}/**
     * @private
     * @param {?} update
     * @return {?}
     */;_proto23.clone=function clone(update){/** @type {?} */var clone=new HttpParams(/** @type {?} */{encoder:this.encoder});clone.cloneFrom=this.cloneFrom||this;clone.updates=(this.updates||[]).concat([update]);return clone}/**
     * @private
     * @return {?}
     */;_proto23.init=function init(){var _this32=this;if(this.map===null){this.map=new Map}if(this.cloneFrom!==null){this.cloneFrom.init();this.cloneFrom.keys().forEach(/**
             * @param {?} key
             * @return {?}
             */function(key){return(/** @type {?} */_this32.map.set(key,/** @type {?} */ /** @type {?} */ /** @type {?} */_this32.cloneFrom.map.get(key)))});/** @type {?} */this.updates.forEach(/**
             * @param {?} update
             * @return {?}
             */function(update){switch(update.op){case"a":case"s":/** @type {?} */var base=(update.op==="a"?/** @type {?} */_this32.map.get(update.param):undefined)||[];base.push(/** @type {?} */update.value);/** @type {?} */_this32.map.set(update.param,base);break;case"d":if(update.value!==undefined){/** @type {?} */var _base=/** @type {?} */_this32.map.get(update.param)||[];/** @type {?} */var idx=_base.indexOf(update.value);if(idx!==-1){_base.splice(idx,1)}if(_base.length>0){/** @type {?} */_this32.map.set(update.param,_base)}else{/** @type {?} */_this32.map.delete(update.param)}}else{/** @type {?} */_this32.map.delete(update.param);break}}});this.cloneFrom=this.updates=null}};return HttpParams}();if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Construction interface for `HttpRequest`s.
 *
 * All values are optional and will override default values if provided.
 * @record
 */function HttpRequestInit(){}if(false){}/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */function mightHaveBody(method){switch(method){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return false;default:return true;}}/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */function isArrayBuffer(value){return typeof ArrayBuffer!=="undefined"&&value instanceof ArrayBuffer}/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */function isBlob(value){return typeof Blob!=="undefined"&&value instanceof Blob}/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */function isFormData(value){return typeof FormData!=="undefined"&&value instanceof FormData}/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@publicApi
 * @template T
 */var HttpRequest=/*#__PURE__*/function(){/**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */function HttpRequest(method,url,third,fourth){this.url=url;/**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */this.body=null;/**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */this.reportProgress=false;/**
         * Whether this request should be sent with outgoing credentials (cookies).
         */this.withCredentials=false;/**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */this.responseType="json";this.method=method.toUpperCase();// Next, need to figure out which argument holds the HttpRequestInit
// options, if any.
/** @type {?} */var options;// Check whether a body argument is expected. The only valid way to omit
// the body argument is to use a known no-body method like GET.
if(mightHaveBody(this.method)||!!fourth){// Body is the third argument, options are the fourth.
this.body=third!==undefined?/** @type {?} */third:null;options=fourth}else{// No body required, options are the third argument. The body stays null.
options=/** @type {?} */third}// If options have been passed, interpret them.
if(options){// Normalize reportProgress and withCredentials.
this.reportProgress=!!options.reportProgress;this.withCredentials=!!options.withCredentials;// Override default response type of 'json' if one is provided.
if(!!options.responseType){this.responseType=options.responseType}// Override headers if they're provided.
if(!!options.headers){this.headers=options.headers}if(!!options.params){this.params=options.params}}// If no headers have been passed in, construct a new HttpHeaders instance.
if(!this.headers){this.headers=new HttpHeaders}// If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
if(!this.params){this.params=new HttpParams;this.urlWithParams=url}else{// Encode the parameters to a string in preparation for inclusion in the URL.
/** @type {?} */var params=this.params.toString();if(params.length===0){// No parameters, the visible URL is just the URL given at creation time.
this.urlWithParams=url}else{// Does the URL already have query parameters? Look for '?'.
/** @type {?} */var qIdx=url.indexOf("?");// There are 3 cases to handle:
// 1) No existing parameters -> append '?' followed by params.
// 2) '?' exists and is followed by existing query string ->
//    append '&' followed by params.
// 3) '?' exists at the end of the url -> append params directly.
// This basically amounts to determining the character, if any, with
// which to join the URL and parameters.
/** @type {?} */var sep=qIdx===-1?"?":qIdx<url.length-1?"&":"";this.urlWithParams=url+sep+params}}}/**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */var _proto24=HttpRequest.prototype;_proto24.serializeBody=function serializeBody(){// If no body is present, no need to serialize it.
if(this.body===null){return null}// Check whether the body is already in a serialized form. If so,
// it can just be returned directly.
if(isArrayBuffer(this.body)||isBlob(this.body)||isFormData(this.body)||typeof this.body==="string"){return this.body}// Check whether the body is an instance of HttpUrlEncodedParams.
if(this.body instanceof HttpParams){return this.body.toString()}// Check whether the body is an object or array, and serialize with JSON if so.
if(typeof this.body==="object"||typeof this.body==="boolean"||Array.isArray(this.body)){return JSON.stringify(this.body)}// Fall back on toString() for everything else.
return(/** @type {?} */this.body.toString())}/**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */;_proto24.detectContentTypeHeader=function detectContentTypeHeader(){// An empty body has no content type.
if(this.body===null){return null}// FormData bodies rely on the browser's content type assignment.
if(isFormData(this.body)){return null}// Blobs usually have their own content type. If it doesn't, then
// no type can be inferred.
if(isBlob(this.body)){return this.body.type||null}// Array buffers have unknown contents and thus no type can be inferred.
if(isArrayBuffer(this.body)){return null}// Technically, strings could be a form of JSON data, but it's safe enough
// to assume they're plain strings.
if(typeof this.body==="string"){return"text/plain"}// `HttpUrlEncodedParams` has its own content-type.
if(this.body instanceof HttpParams){return"application/x-www-form-urlencoded;charset=UTF-8"}// Arrays, objects, and numbers will be encoded as JSON.
if(typeof this.body==="object"||typeof this.body==="number"||Array.isArray(this.body)){return"application/json"}// No type could be inferred.
return null}/**
     * @param {?=} update
     * @return {?}
     */;_proto24.clone=function clone(update){if(update===void 0){update={}}// For method, url, and responseType, take the current value unless
// it is overridden in the update hash.
/** @type {?} */var method=update.method||this.method;/** @type {?} */var url=update.url||this.url;/** @type {?} */var responseType=update.responseType||this.responseType;// The body is somewhat special - a `null` value in update.body means
// whatever current body is present is being overridden with an empty
// body, whereas an `undefined` value in update.body implies no
// override.
/** @type {?} */var body=update.body!==undefined?update.body:this.body;// Carefully handle the boolean options to differentiate between
// `false` and `undefined` in the update args.
/** @type {?} */var withCredentials=update.withCredentials!==undefined?update.withCredentials:this.withCredentials;/** @type {?} */var reportProgress=update.reportProgress!==undefined?update.reportProgress:this.reportProgress;// Headers and params may be appended to if `setHeaders` or
// `setParams` are used.
/** @type {?} */var headers=update.headers||this.headers;/** @type {?} */var params=update.params||this.params;// Check whether the caller has asked to add headers.
if(update.setHeaders!==undefined){// Set every requested header.
headers=Object.keys(update.setHeaders).reduce(/**
                 * @param {?} headers
                 * @param {?} name
                 * @return {?}
                 */function(headers,name){return headers.set(name,/** @type {?} */update.setHeaders[name])},headers)}// Check whether the caller has asked to set params.
if(update.setParams){// Set every requested param.
params=Object.keys(update.setParams).reduce(/**
             * @param {?} params
             * @param {?} param
             * @return {?}
             */function(params,param){return params.set(param,/** @type {?} */update.setParams[param])},params)}// Finally, construct the new HttpRequest using the pieces from above.
return new HttpRequest(method,url,body,{params:params,headers:headers,reportProgress:reportProgress,responseType:responseType,withCredentials:withCredentials})};return HttpRequest}();if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @enum {number} */var HttpEventType={/**
     * The request was sent out over the wire.
     */Sent:0,/**
     * An upload progress event was received.
     */UploadProgress:1,/**
     * The response status code and headers were received.
     */ResponseHeader:2,/**
     * A download progress event was received.
     */DownloadProgress:3,/**
     * The full response including the body was received.
     */Response:4,/**
     * A custom event from an interceptor or a backend.
     */User:5};HttpEventType[HttpEventType.Sent]="Sent";HttpEventType[HttpEventType.UploadProgress]="UploadProgress";HttpEventType[HttpEventType.ResponseHeader]="ResponseHeader";HttpEventType[HttpEventType.DownloadProgress]="DownloadProgress";HttpEventType[HttpEventType.Response]="Response";HttpEventType[HttpEventType.User]="User";/**
 * Base interface for progress events.
 *
 * \@publicApi
 * @record
 */function HttpProgressEvent(){}if(false){}/**
 * A download progress event.
 *
 * \@publicApi
 * @record
 */function HttpDownloadProgressEvent(){}if(false){}/**
 * An upload progress event.
 *
 * \@publicApi
 * @record
 */function HttpUploadProgressEvent(){}if(false){}/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * \@publicApi
 * @record
 */function HttpSentEvent(){}if(false){}/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * \@publicApi
 * @record
 * @template T
 */function HttpUserEvent(){}if(false){}/**
 * An error that represents a failed attempt to JSON.parse text coming back
 * from the server.
 *
 * It bundles the Error object with the actual response body that failed to parse.
 *
 *
 * @record
 */function HttpJsonParseError(){}if(false){}/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@publicApi
 * @abstract
 */var HttpResponseBase=/**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */function HttpResponseBase(init,defaultStatus,defaultStatusText){if(defaultStatus===void 0){defaultStatus=200}if(defaultStatusText===void 0){defaultStatusText="OK"}// If the hash has values passed, use them to initialize the response.
// Otherwise use the default values.
this.headers=init.headers||new HttpHeaders;this.status=init.status!==undefined?init.status:defaultStatus;this.statusText=init.statusText||defaultStatusText;this.url=init.url||null;// Cache the ok value to avoid defining a getter.
this.ok=this.status>=200&&this.status<300};if(false){}/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@publicApi
 */var HttpHeaderResponse=/*#__PURE__*/function(_HttpResponseBase){_inheritsLoose(HttpHeaderResponse,_HttpResponseBase);/**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */function HttpHeaderResponse(init){var _this33;if(init===void 0){init={}}_this33=_HttpResponseBase.call(this,init)||this;_this33.type=HttpEventType.ResponseHeader;return _this33}/**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */var _proto25=HttpHeaderResponse.prototype;_proto25.clone=function clone(update){if(update===void 0){update={}}// Perform a straightforward initialization of the new HttpHeaderResponse,
// overriding the current parameters with new ones if given.
return new HttpHeaderResponse({headers:update.headers||this.headers,status:update.status!==undefined?update.status:this.status,statusText:update.statusText||this.statusText,url:update.url||this.url||undefined})};return HttpHeaderResponse}(HttpResponseBase);if(false){}/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@publicApi
 * @template T
 */var HttpResponse=/*#__PURE__*/function(_HttpResponseBase2){_inheritsLoose(HttpResponse,_HttpResponseBase2);/**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */function HttpResponse(init){var _this34;if(init===void 0){init={}}_this34=_HttpResponseBase2.call(this,init)||this;_this34.type=HttpEventType.Response;_this34.body=init.body!==undefined?init.body:null;return _this34}/**
     * @param {?=} update
     * @return {?}
     */var _proto26=HttpResponse.prototype;_proto26.clone=function clone(update){if(update===void 0){update={}}return new HttpResponse({body:update.body!==undefined?update.body:this.body,headers:update.headers||this.headers,status:update.status!==undefined?update.status:this.status,statusText:update.statusText||this.statusText,url:update.url||this.url||undefined})};return HttpResponse}(HttpResponseBase);if(false){}/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@publicApi
 */var HttpErrorResponse=/*#__PURE__*/function(_HttpResponseBase3){_inheritsLoose(HttpErrorResponse,_HttpResponseBase3);/**
     * @param {?} init
     */function HttpErrorResponse(init){var _this35;// Initialize with a default status of 0 / Unknown Error.
_this35=_HttpResponseBase3.call(this,init,0,"Unknown Error")||this;_this35.name="HttpErrorResponse";/**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */_this35.ok=false;// If the response was successful, then this was a parse error. Otherwise, it was
// a protocol-level failure of some sort. Either the request failed in transit
// or the server returned an unsuccessful status code.
if(_this35.status>=200&&_this35.status<300){_this35.message="Http failure during parsing for "+(init.url||"(unknown url)")}else{_this35.message="Http failure response for "+(init.url||"(unknown url)")+": "+init.status+" "+init.statusText}_this35.error=init.error||null;return _this35}return HttpErrorResponse}(HttpResponseBase);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */function addBody(options,body){return{body:body,headers:options.headers,observe:options.observe,params:options.params,reportProgress:options.reportProgress,responseType:options.responseType,withCredentials:options.withCredentials}}/**
 * Performs HTTP requests.
 *
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * \@usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * \@publicApi
 */var HttpClient=/*#__PURE__*/function(){/**
     * @param {?} handler
     */function HttpClient(handler){this.handler=handler}/**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */var _proto27=HttpClient.prototype;_proto27.request=function request(first,url,options){var _this36=this;if(options===void 0){options={}}/** @type {?} */var req;// First, check whether the primary argument is an instance of `HttpRequest`.
if(first instanceof HttpRequest){// It is. The other arguments must be undefined (per the signatures) and can be
// ignored.
req=/** @type {?} */first}else{// It's a string, so it represents a URL. Construct a request based on it,
// and incorporate the remaining arguments (assuming `GET` unless a method is
// provided.
// Figure out the headers.
/** @type {?} */var headers=undefined;if(options.headers instanceof HttpHeaders){headers=options.headers}else{headers=new HttpHeaders(options.headers)}// Sort out parameters.
/** @type {?} */var params=undefined;if(!!options.params){if(options.params instanceof HttpParams){params=options.params}else{params=new HttpParams(/** @type {?} */{fromObject:options.params})}}// Construct the request.
req=new HttpRequest(first,/** @type {?} */url,options.body!==undefined?options.body:null,{headers:headers,params:params,reportProgress:options.reportProgress,// By default, JSON is assumed to be returned for all calls.
responseType:options.responseType||"json",withCredentials:options.withCredentials})}// Start with an Observable.of() the initial request, and run the handler (which
// includes all interceptors) inside a concatMap(). This way, the handler runs
// inside an Observable chain, which causes interceptors to be re-run on every
// subscription (this also makes retries re-run the handler, including interceptors).
/** @type {?} */var events$=Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(/**
         * @param {?} req
         * @return {?}
         */function(req){return _this36.handler.handle(req)}));// If coming via the API signature which accepts a previously constructed HttpRequest,
// the only option is to get the event stream. Otherwise, return the event stream if
// that is what was requested.
if(first instanceof HttpRequest||options.observe==="events"){return events$}// The requested stream contains either the full response or the body. In either
// case, the first step is to filter the event stream to extract a stream of
// responses(s).
/** @type {?} */var res$=/** @type {?} */events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(/**
         * @param {?} event
         * @return {?}
         */function(event){return event instanceof HttpResponse}));// Decide which stream to return.
switch(options.observe||"body"){case"body":// The requested stream is the body. Map the response stream to the response
// body. This could be done more simply, but a misbehaving interceptor might
// transform the response body into a different format and ignore the requested
// responseType. Guard against this by validating that the response is of the
// requested type.
switch(req.responseType){case"arraybuffer":return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(/**
                         * @param {?} res
                         * @return {?}
                         */function(res){// Validate that the body is an ArrayBuffer.
if(res.body!==null&&!(res.body instanceof ArrayBuffer)){throw new Error("Response is not an ArrayBuffer.")}return res.body}));case"blob":return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(/**
                         * @param {?} res
                         * @return {?}
                         */function(res){// Validate that the body is a Blob.
if(res.body!==null&&!(res.body instanceof Blob)){throw new Error("Response is not a Blob.")}return res.body}));case"text":return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(/**
                         * @param {?} res
                         * @return {?}
                         */function(res){// Validate that the body is a string.
if(res.body!==null&&typeof res.body!=="string"){throw new Error("Response is not a string.")}return res.body}));case"json":default:// No validation needed for JSON responses, as they can be of any type.
return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(/**
                         * @param {?} res
                         * @return {?}
                         */function(res){return res.body}));}case"response":// The response stream was requested directly, so return it.
return res$;default:// Guard against new future observe types being added.
throw new Error("Unreachable: unhandled observe type "+options.observe+"}");}}/**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param {?} url     The endpoint URL.
     * @param {?=} options The HTTP options to send with the request.
     *
     * @return {?}
     */;_proto27.delete=function _delete(url,options){if(options===void 0){options={}}return this.request("DELETE",url,/** @type {?} */options)}/**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */;_proto27.get=function get(url,options){if(options===void 0){options={}}return this.request("GET",url,/** @type {?} */options)}/**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */;_proto27.head=function head(url,options){if(options===void 0){options={}}return this.request("HEAD",url,/** @type {?} */options)}/**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @template T
     * @param {?} url The resource URL.
     * @param {?} callbackParam The callback function name.
     *
     * @return {?}
     */;_proto27.jsonp=function jsonp(url,callbackParam){return this.request("JSONP",url,{params:new HttpParams().append(callbackParam,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}/**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */;_proto27.options=function options(url,_options){if(_options===void 0){_options={}}return this.request("OPTIONS",url,/** @type {?} */_options)}/**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */;_proto27.patch=function patch(url,body,options){if(options===void 0){options={}}return this.request("PATCH",url,addBody(options,body))}/**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */;_proto27.post=function post(url,body,options){if(options===void 0){options={}}return this.request("POST",url,addBody(options,body))}/**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */;_proto27.put=function put(url,body,options){if(options===void 0){options={}}return this.request("PUT",url,addBody(options,body))};return HttpClient}();HttpClient.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */HttpClient.ctorParameters=function(){return[{type:HttpHandler}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Intercepts and handles an `HttpRequest` or `HttpResponse`.
 *
 * Most interceptors transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 * An interceptor may transform the
 * response event stream as well, by applying additional RxJS operators on the stream
 * returned by `next.handle()`.
 *
 * More rarely, an interceptor may handle the request entirely,
 * and compose a new event stream instead of invoking `next.handle()`. This is an
 * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
 *
 * It is also rare but valid for an interceptor to return multiple responses on the
 * event stream for a single request.
 *
 * \@publicApi
 *
 * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
 *
 * \@usageNotes
 *
 * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
 * only in your `AppModule`, and add the interceptors to the root application injector .
 * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
 * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the interceptors
 * provided in the root module.
 *
 * @record
 */function HttpInterceptor(){}if(false){}/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */var HttpInterceptorHandler=/*#__PURE__*/function(){/**
     * @param {?} next
     * @param {?} interceptor
     */function HttpInterceptorHandler(next,interceptor){this.next=next;this.interceptor=interceptor}/**
     * @param {?} req
     * @return {?}
     */var _proto28=HttpInterceptorHandler.prototype;_proto28.handle=function handle(req){return this.interceptor.intercept(req,this.next)};return HttpInterceptorHandler}();if(false){}/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * \@publicApi
 * @type {?}
 */var HTTP_INTERCEPTORS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("HTTP_INTERCEPTORS");var NoopInterceptor=/*#__PURE__*/function(){function NoopInterceptor(){}var _proto29=NoopInterceptor.prototype;/**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */_proto29.intercept=function intercept(req,next){return next.handle(req)};return NoopInterceptor}();NoopInterceptor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
/** @type {?} */var nextRequestId=0;// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
/** @type {?} */var JSONP_ERR_NO_CALLBACK="JSONP injected script did not invoke callback.";// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
/** @type {?} */var JSONP_ERR_WRONG_METHOD="JSONP requests must use JSONP request method.";/** @type {?} */var JSONP_ERR_WRONG_RESPONSE_TYPE="JSONP requests must use Json response type.";/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 * @abstract
 */var JsonpCallbackContext=function JsonpCallbackContext(){};/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * \@publicApi
 */var JsonpClientBackend=/*#__PURE__*/function(){/**
     * @param {?} callbackMap
     * @param {?} document
     */function JsonpClientBackend(callbackMap,document){this.callbackMap=callbackMap;this.document=document}/**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @private
     * @return {?}
     */var _proto30=JsonpClientBackend.prototype;_proto30.nextCallback=function nextCallback(){return"ng_jsonp_callback_"+nextRequestId++}/**
     * Processes a JSONP request and returns an event stream of the results.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     *
     */;_proto30.handle=function handle(req){var _this37=this;// Firstly, check both the method and response type. If either doesn't match
// then the request was improperly routed here and cannot be handled.
if(req.method!=="JSONP"){throw new Error(JSONP_ERR_WRONG_METHOD)}else if(req.responseType!=="json"){throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE)}// Everything else happens inside the Observable boundary.
return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](/**
         * @param {?} observer
         * @return {?}
         */function(observer){// The first step to make a request is to generate the callback name, and replace the
// callback placeholder in the URL with the name. Care has to be taken here to ensure
// a trailing &, if matched, gets inserted back into the URL in the correct place.
/** @type {?} */var callback=_this37.nextCallback();/** @type {?} */var url=req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,"="+callback+"$1");// Construct the <script> tag and point it at the URL.
/** @type {?} */var node=_this37.document.createElement("script");node.src=url;// A JSONP request requires waiting for multiple callbacks. These variables
// are closed over and track state across those callbacks.
// The response object, if one has been received, or null otherwise.
/** @type {?} */var body=null;// Whether the response callback has been called.
/** @type {?} */var finished=false;// Whether the request has been cancelled (and thus any other callbacks)
// should be ignored.
/** @type {?} */var cancelled=false;// Set the response callback in this.callbackMap (which will be the window
// object in the browser. The script being loaded via the <script> tag will
// eventually call this callback.
_this37.callbackMap[callback]=/**
             * @param {?=} data
             * @return {?}
             */function(data){// Data has been received from the JSONP script. Firstly, delete this callback.
delete _this37.callbackMap[callback];// Next, make sure the request wasn't cancelled in the meantime.
if(cancelled){return}// Set state to indicate data was received.
body=data;finished=true};// cleanup() is a utility closure that removes the <script> from the page and
// the response callback from the window. This logic is used in both the
// success, error, and cancellation paths, so it's extracted out for convenience.
/** @type {?} */var cleanup=/**
             * @return {?}
             */function cleanup(){// Remove the <script> tag if it's still on the page.
if(node.parentNode){node.parentNode.removeChild(node)}// Remove the response callback from the callbackMap (window object in the
// browser).
delete _this37.callbackMap[callback]};// onLoad() is the success callback which runs after the response callback
// if the JSONP script loads successfully. The event itself is unimportant.
// If something went wrong, onLoad() may run without the response callback
// having been invoked.
/** @type {?} */var onLoad=/**
             * @param {?} event
             * @return {?}
             */function onLoad(event){// Do nothing if the request has been cancelled.
if(cancelled){return}// Cleanup the page.
cleanup();// Check whether the response callback has run.
if(!finished){// It hasn't, something went wrong with the request. Return an error via
// the Observable error path. All JSONP errors have status 0.
observer.error(new HttpErrorResponse({url:url,status:0,statusText:"JSONP Error",error:new Error(JSONP_ERR_NO_CALLBACK)}));return}// Success. body either contains the response body or null if none was
// returned.
observer.next(new HttpResponse({body:body,status:200,statusText:"OK",url:url}));// Complete the stream, the response is over.
observer.complete()};// onError() is the error callback, which runs if the script returned generates
// a Javascript error. It emits the error via the Observable error channel as
// a HttpErrorResponse.
/** @type {?} */var onError=/**
             * @param {?} error
             * @return {?}
             */function onError(error){// If the request was already cancelled, no need to emit anything.
if(cancelled){return}cleanup();// Wrap the error in a HttpErrorResponse.
observer.error(new HttpErrorResponse({error:error,status:0,statusText:"JSONP Error",url:url}))};// Subscribe to both the success (load) and error events on the <script> tag,
// and add it to the page.
node.addEventListener("load",onLoad);node.addEventListener("error",onError);_this37.document.body.appendChild(node);// The request has now been successfully sent.
observer.next({type:HttpEventType.Sent});// Cancellation handler.
return(/**
             * @return {?}
             */function(){// Track the cancellation so event listeners won't do anything even if already scheduled.
cancelled=true;// Remove the event listeners so they won't run if the events later fire.
node.removeEventListener("load",onLoad);node.removeEventListener("error",onError);// And finally, clean up the page.
cleanup()})})};return JsonpClientBackend}();JsonpClientBackend.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */JsonpClientBackend.ctorParameters=function(){return[{type:JsonpCallbackContext},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]}]}]};if(false){}/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * \@publicApi
 */var JsonpInterceptor=/*#__PURE__*/function(){/**
     * @param {?} jsonp
     */function JsonpInterceptor(jsonp){this.jsonp=jsonp}/**
     * Identifies and handles a given JSONP request.
     * @param {?} req The outgoing request object to handle.
     * @param {?} next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @return {?} An observable of the event stream.
     */var _proto31=JsonpInterceptor.prototype;_proto31.intercept=function intercept(req,next){if(req.method==="JSONP"){return this.jsonp.handle(/** @type {?} */req)}// Fall through for normal HTTP requests.
return next.handle(req)};return JsonpInterceptor}();JsonpInterceptor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */JsonpInterceptor.ctorParameters=function(){return[{type:JsonpClientBackend}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var XSSI_PREFIX=/^\)\]\}',?\n/;/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */function getResponseUrl(xhr){if("responseURL"in xhr&&xhr.responseURL){return xhr.responseURL}if(/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())){return xhr.getResponseHeader("X-Request-URL")}return null}/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@publicApi
 * @abstract
 */var XhrFactory=function XhrFactory(){};if(false){}/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */var BrowserXhr=/*#__PURE__*/function(){function BrowserXhr(){}/**
     * @return {?}
     */var _proto32=BrowserXhr.prototype;_proto32.build=function build(){return(/** @type {?} */new XMLHttpRequest)};return BrowserXhr}();BrowserXhr.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */BrowserXhr.ctorParameters=function(){return[]};/**
 * Tracks a response from the server that does not yet have a body.
 * @record
 */function PartialResponse(){}if(false){}/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * \@publicApi
 */var HttpXhrBackend=/*#__PURE__*/function(){/**
     * @param {?} xhrFactory
     */function HttpXhrBackend(xhrFactory){this.xhrFactory=xhrFactory}/**
     * Processes a request and returns a stream of response events.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     */var _proto33=HttpXhrBackend.prototype;_proto33.handle=function handle(req){var _this38=this;// Quick check to give a better error message when a user attempts to use
// HttpClient.jsonp() without installing the JsonpClientModule
if(req.method==="JSONP"){throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.")}// Everything happens on Observable subscription.
return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](/**
         * @param {?} observer
         * @return {?}
         */function(observer){// Start by setting up the XHR object with request method, URL, and withCredentials flag.
/** @type {?} */var xhr=_this38.xhrFactory.build();xhr.open(req.method,req.urlWithParams);if(!!req.withCredentials){xhr.withCredentials=true}// Add all the requested headers.
req.headers.forEach(/**
             * @param {?} name
             * @param {?} values
             * @return {?}
             */function(name,values){return xhr.setRequestHeader(name,values.join(","))});// Add an Accept header if one isn't present already.
if(!req.headers.has("Accept")){xhr.setRequestHeader("Accept","application/json, text/plain, */*")}// Auto-detect the Content-Type header if one isn't present already.
if(!req.headers.has("Content-Type")){/** @type {?} */var detectedType=req.detectContentTypeHeader();// Sometimes Content-Type detection fails.
if(detectedType!==null){xhr.setRequestHeader("Content-Type",detectedType)}}// Set the responseType if one was requested.
if(req.responseType){/** @type {?} */var responseType=req.responseType.toLowerCase();// JSON responses need to be processed as text. This is because if the server
// returns an XSSI-prefixed JSON response, the browser will fail to parse it,
// xhr.response will be null, and xhr.responseText cannot be accessed to
// retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
// is parsed by first requesting text and then applying JSON.parse.
xhr.responseType=/** @type {?} */responseType!=="json"?responseType:"text"}// Serialize the request body if one is present. If not, this will be set to null.
/** @type {?} */var reqBody=req.serializeBody();// If progress events are enabled, response headers will be delivered
// in two events - the HttpHeaderResponse event and the full HttpResponse
// event. However, since response headers don't change in between these
// two events, it doesn't make sense to parse them twice. So headerResponse
// caches the data extracted from the response whenever it's first parsed,
// to ensure parsing isn't duplicated.
/** @type {?} */var headerResponse=null;// partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
// state, and memoizes it into headerResponse.
/** @type {?} */var partialFromXhr=/**
             * @return {?}
             */function partialFromXhr(){if(headerResponse!==null){return headerResponse}// Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
/** @type {?} */var status=xhr.status===1223?204:xhr.status;/** @type {?} */var statusText=xhr.statusText||"OK";// Parse headers from XMLHttpRequest - this step is lazy.
/** @type {?} */var headers=new HttpHeaders(xhr.getAllResponseHeaders());// Read the response URL from the XMLHttpResponse instance and fall back on the
// request URL.
/** @type {?} */var url=getResponseUrl(xhr)||req.url;// Construct the HttpHeaderResponse and memoize it.
headerResponse=new HttpHeaderResponse({headers:headers,status:status,statusText:statusText,url:url});return headerResponse};// Next, a few closures are defined for the various events which XMLHttpRequest can
// emit. This allows them to be unregistered as event listeners later.
// First up is the load event, which represents a response being fully available.
/** @type {?} */var onLoad=/**
             * @return {?}
             */function onLoad(){// Read response state from the memoized partial data.
var _partialFromXhr=partialFromXhr(),headers=_partialFromXhr.headers,status=_partialFromXhr.status,statusText=_partialFromXhr.statusText,url=_partialFromXhr.url;// The body will be read out if present.
/** @type {?} */var body=null;if(status!==204){// Use XMLHttpRequest.response if set, responseText otherwise.
body=typeof xhr.response==="undefined"?xhr.responseText:xhr.response}// Normalize another potential bug (this one comes from CORS).
if(status===0){status=!!body?200:0}// ok determines whether the response will be transmitted on the event or
// error channel. Unsuccessful status codes (not 2xx) will always be errors,
// but a successful status code can still result in an error if the user
// asked for JSON data and the body cannot be parsed as such.
/** @type {?} */var ok=status>=200&&status<300;// Check whether the body needs to be parsed as JSON (in many cases the browser
// will have done that already).
if(req.responseType==="json"&&typeof body==="string"){// Save the original body, before attempting XSSI prefix stripping.
/** @type {?} */var originalBody=body;body=body.replace(XSSI_PREFIX,"");try{// Attempt the parse. If it fails, a parse error should be delivered to the user.
body=body!==""?JSON.parse(body):null}catch(error){// Since the JSON.parse failed, it's reasonable to assume this might not have been a
// JSON response. Restore the original body (including any XSSI prefix) to deliver
// a better error response.
body=originalBody;// If this was an error request to begin with, leave it as a string, it probably
// just isn't JSON. Otherwise, deliver the parsing error to the user.
if(ok){// Even though the response status was 2xx, this is still an error.
ok=false;// The parse error contains the text of the body that failed to parse.
body=/** @type {?} */{error:error,text:body}}}}if(ok){// A successful response is delivered on the event stream.
observer.next(new HttpResponse({body:body,headers:headers,status:status,statusText:statusText,url:url||undefined}));// The full body has been received and delivered, no further events
// are possible. This request is complete.
observer.complete()}else{// An unsuccessful request is delivered on the error channel.
observer.error(new HttpErrorResponse({// The error in this case is the response body (error from the server).
error:body,headers:headers,status:status,statusText:statusText,url:url||undefined}))}};// The onError callback is called when something goes wrong at the network level.
// Connection timeout, DNS error, offline, etc. These are actual errors, and are
// transmitted on the error channel.
/** @type {?} */var onError=/**
             * @param {?} error
             * @return {?}
             */function onError(error){var _partialFromXhr2=partialFromXhr(),url=_partialFromXhr2.url;/** @type {?} */var res=new HttpErrorResponse({error:error,status:xhr.status||0,statusText:xhr.statusText||"Unknown Error",url:url||undefined});observer.error(res)};// The sentHeaders flag tracks whether the HttpResponseHeaders event
// has been sent on the stream. This is necessary to track if progress
// is enabled since the event will be sent on only the first download
// progerss event.
/** @type {?} */var sentHeaders=false;// The download progress event handler, which is only registered if
// progress events are enabled.
/** @type {?} */var onDownProgress=/**
             * @param {?} event
             * @return {?}
             */function onDownProgress(event){// Send the HttpResponseHeaders event if it hasn't been sent already.
if(!sentHeaders){observer.next(partialFromXhr());sentHeaders=true}// Start building the download progress event to deliver on the response
// event stream.
/** @type {?} */var progressEvent={type:HttpEventType.DownloadProgress,loaded:event.loaded};// Set the total number of bytes in the event if it's available.
if(event.lengthComputable){progressEvent.total=event.total}// If the request was for text content and a partial response is
// available on XMLHttpRequest, include it in the progress event
// to allow for streaming reads.
if(req.responseType==="text"&&!!xhr.responseText){progressEvent.partialText=xhr.responseText}// Finally, fire the event.
observer.next(progressEvent)};// The upload progress event handler, which is only registered if
// progress events are enabled.
/** @type {?} */var onUpProgress=/**
             * @param {?} event
             * @return {?}
             */function onUpProgress(event){// Upload progress events are simpler. Begin building the progress
// event.
/** @type {?} */var progress={type:HttpEventType.UploadProgress,loaded:event.loaded};// If the total number of bytes being uploaded is available, include
// it.
if(event.lengthComputable){progress.total=event.total}// Send the event.
observer.next(progress)};// By default, register for load and error events.
xhr.addEventListener("load",onLoad);xhr.addEventListener("error",onError);// Progress events are only enabled if requested.
if(req.reportProgress){// Download progress is always enabled if requested.
xhr.addEventListener("progress",onDownProgress);// Upload progress depends on whether there is a body to upload.
if(reqBody!==null&&xhr.upload){xhr.upload.addEventListener("progress",onUpProgress)}}// Fire the request, and notify the event stream that it was fired.
xhr.send(/** @type {?} */reqBody);observer.next({type:HttpEventType.Sent});// This is the return from the Observable function, which is the
// request cancellation handler.
return(/**
             * @return {?}
             */function(){// On a cancellation, remove all registered event listeners.
xhr.removeEventListener("error",onError);xhr.removeEventListener("load",onLoad);if(req.reportProgress){xhr.removeEventListener("progress",onDownProgress);if(reqBody!==null&&xhr.upload){xhr.upload.removeEventListener("progress",onUpProgress)}}// Finally, abort the in-flight request.
xhr.abort()})})};return HttpXhrBackend}();HttpXhrBackend.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */HttpXhrBackend.ctorParameters=function(){return[{type:XhrFactory}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var XSRF_COOKIE_NAME=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("XSRF_COOKIE_NAME");/** @type {?} */var XSRF_HEADER_NAME=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("XSRF_HEADER_NAME");/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@publicApi
 * @abstract
 */var HttpXsrfTokenExtractor=function HttpXsrfTokenExtractor(){};if(false){}/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */var HttpXsrfCookieExtractor=/*#__PURE__*/function(){/**
     * @param {?} doc
     * @param {?} platform
     * @param {?} cookieName
     */function HttpXsrfCookieExtractor(doc,platform,cookieName){this.doc=doc;this.platform=platform;this.cookieName=cookieName;this.lastCookieString="";this.lastToken=null;/**
         * \@internal for testing
         */this.parseCount=0}/**
     * @return {?}
     */var _proto34=HttpXsrfCookieExtractor.prototype;_proto34.getToken=function getToken(){if(this.platform==="server"){return null}/** @type {?} */var cookieString=this.doc.cookie||"";if(cookieString!==this.lastCookieString){this.parseCount++;this.lastToken=Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["\u0275parseCookieValue"])(cookieString,this.cookieName);this.lastCookieString=cookieString}return this.lastToken};return HttpXsrfCookieExtractor}();HttpXsrfCookieExtractor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */HttpXsrfCookieExtractor.ctorParameters=function(){return[{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]}]},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]}]},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[XSRF_COOKIE_NAME]}]}]};if(false){}/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */var HttpXsrfInterceptor=/*#__PURE__*/function(){/**
     * @param {?} tokenService
     * @param {?} headerName
     */function HttpXsrfInterceptor(tokenService,headerName){this.tokenService=tokenService;this.headerName=headerName}/**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */var _proto35=HttpXsrfInterceptor.prototype;_proto35.intercept=function intercept(req,next){/** @type {?} */var lcUrl=req.url.toLowerCase();// Skip both non-mutating requests and absolute URLs.
// Non-mutating requests don't require a token, and absolute URLs require special handling
// anyway as the cookie set
// on our origin is not the same as the token expected by another origin.
if(req.method==="GET"||req.method==="HEAD"||lcUrl.startsWith("http://")||lcUrl.startsWith("https://")){return next.handle(req)}/** @type {?} */var token=this.tokenService.getToken();// Be careful not to overwrite an existing header of the same name.
if(token!==null&&!req.headers.has(this.headerName)){req=req.clone({headers:req.headers.set(this.headerName,token)})}return next.handle(req)};return HttpXsrfInterceptor}();HttpXsrfInterceptor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */HttpXsrfInterceptor.ctorParameters=function(){return[{type:HttpXsrfTokenExtractor},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[XSRF_HEADER_NAME]}]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */var HttpInterceptingHandler=/*#__PURE__*/function(){/**
     * @param {?} backend
     * @param {?} injector
     */function HttpInterceptingHandler(backend,injector){this.backend=backend;this.injector=injector;this.chain=null}/**
     * @param {?} req
     * @return {?}
     */var _proto36=HttpInterceptingHandler.prototype;_proto36.handle=function handle(req){if(this.chain===null){/** @type {?} */var interceptors=this.injector.get(HTTP_INTERCEPTORS,[]);this.chain=interceptors.reduceRight(/**
             * @param {?} next
             * @param {?} interceptor
             * @return {?}
             */function(next,interceptor){return new HttpInterceptorHandler(next,interceptor)},this.backend)}return this.chain.handle(req)};return HttpInterceptingHandler}();HttpInterceptingHandler.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */HttpInterceptingHandler.ctorParameters=function(){return[{type:HttpBackend},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]}]};if(false){}/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */function interceptingHandler(backend,interceptors){if(interceptors===void 0){interceptors=[]}if(!interceptors){return backend}return interceptors.reduceRight(/**
     * @param {?} next
     * @param {?} interceptor
     * @return {?}
     */function(next,interceptor){return new HttpInterceptorHandler(next,interceptor)},backend)}/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 * @return {?}
 */function jsonpCallbackContext(){if(typeof window==="object"){return window}return{}}/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * \@publicApi
 */var HttpClientXsrfModule=/*#__PURE__*/function(){function HttpClientXsrfModule(){}/**
     * Disable the default XSRF protection.
     * @return {?}
     */HttpClientXsrfModule.disable=function disable(){return{ngModule:HttpClientXsrfModule,providers:[{provide:HttpXsrfInterceptor,useClass:NoopInterceptor}]}}/**
     * Configure XSRF protection.
     * @param {?=} options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     * @return {?}
     */;HttpClientXsrfModule.withOptions=function withOptions(options){if(options===void 0){options={}}return{ngModule:HttpClientXsrfModule,providers:[options.cookieName?{provide:XSRF_COOKIE_NAME,useValue:options.cookieName}:[],options.headerName?{provide:XSRF_HEADER_NAME,useValue:options.headerName}:[]]}};return HttpClientXsrfModule}();HttpClientXsrfModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{providers:[HttpXsrfInterceptor,{provide:HTTP_INTERCEPTORS,useExisting:HttpXsrfInterceptor,multi:true},{provide:HttpXsrfTokenExtractor,useClass:HttpXsrfCookieExtractor},{provide:XSRF_COOKIE_NAME,useValue:"XSRF-TOKEN"},{provide:XSRF_HEADER_NAME,useValue:"X-XSRF-TOKEN"}]}]}];/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */var HttpClientModule=function HttpClientModule(){};HttpClientModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{/**
                 * Optional configuration for XSRF protection.
                 */imports:[HttpClientXsrfModule.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})],/**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */providers:[HttpClient,{provide:HttpHandler,useClass:HttpInterceptingHandler},HttpXhrBackend,{provide:HttpBackend,useExisting:HttpXhrBackend},BrowserXhr,{provide:XhrFactory,useExisting:BrowserXhr}]}]}];/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */var HttpClientJsonpModule=function HttpClientJsonpModule(){};HttpClientJsonpModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{providers:[JsonpClientBackend,{provide:JsonpCallbackContext,useFactory:jsonpCallbackContext},{provide:HTTP_INTERCEPTORS,useClass:JsonpInterceptor,multi:true}]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Generated bundle index. Do not edit.
 */ //# sourceMappingURL=http.js.map
/***/},/***/"./node_modules/@angular/forms/fesm2015/forms.js":/*!*******************************************************!*\
  !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
  \*******************************************************/ /*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */ /***/function node_modulesAngularFormsFesm2015FormsJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_d",function(){return ɵInternalFormsSharedModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275InternalFormsSharedModule",function(){return ɵInternalFormsSharedModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_c",function(){return REACTIVE_DRIVEN_DIRECTIVES});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_a",function(){return SHARED_FORM_DIRECTIVES});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_b",function(){return TEMPLATE_DRIVEN_DIRECTIVES});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_e",function(){return CHECKBOX_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_f",function(){return DEFAULT_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_g",function(){return AbstractControlStatus});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_h",function(){return ngControlStatusHost});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_i",function(){return formDirectiveProvider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_j",function(){return NG_FORM_SELECTOR_WARNING});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_k",function(){return formControlBinding});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_l",function(){return modelGroupProvider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_z",function(){return ɵNgNoValidate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275NgNoValidate",function(){return ɵNgNoValidate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_m",function(){return NUMBER_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_n",function(){return RADIO_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_o",function(){return RadioControlRegistry});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_p",function(){return RANGE_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_q",function(){return NG_MODEL_WITH_FORM_CONTROL_WARNING});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_r",function(){return formControlBinding$1});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_s",function(){return controlNameBinding});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_t",function(){return formDirectiveProvider$1});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_v",function(){return formArrayNameProvider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_u",function(){return formGroupNameProvider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_w",function(){return SELECT_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_y",function(){return ɵNgSelectMultipleOption});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275NgSelectMultipleOption",function(){return ɵNgSelectMultipleOption});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_x",function(){return SELECT_MULTIPLE_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_bb",function(){return CHECKBOX_REQUIRED_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_bc",function(){return EMAIL_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_be",function(){return MAX_LENGTH_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_bd",function(){return MIN_LENGTH_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_bf",function(){return PATTERN_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_ba",function(){return REQUIRED_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AbstractControlDirective",function(){return AbstractControlDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AbstractFormGroupDirective",function(){return AbstractFormGroupDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CheckboxControlValueAccessor",function(){return CheckboxControlValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ControlContainer",function(){return ControlContainer});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NG_VALUE_ACCESSOR",function(){return NG_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"COMPOSITION_BUFFER_MODE",function(){return COMPOSITION_BUFFER_MODE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DefaultValueAccessor",function(){return DefaultValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgControl",function(){return NgControl});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgControlStatus",function(){return NgControlStatus});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgControlStatusGroup",function(){return NgControlStatusGroup});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgForm",function(){return NgForm});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgFormSelectorWarning",function(){return NgFormSelectorWarning});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgModel",function(){return NgModel});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgModelGroup",function(){return NgModelGroup});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NumberValueAccessor",function(){return NumberValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RadioControlValueAccessor",function(){return RadioControlValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RangeValueAccessor",function(){return RangeValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormControlDirective",function(){return FormControlDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormControlName",function(){return FormControlName});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormGroupDirective",function(){return FormGroupDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormArrayName",function(){return FormArrayName});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormGroupName",function(){return FormGroupName});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgSelectOption",function(){return NgSelectOption});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SelectControlValueAccessor",function(){return SelectControlValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SelectMultipleControlValueAccessor",function(){return SelectMultipleControlValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CheckboxRequiredValidator",function(){return CheckboxRequiredValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"EmailValidator",function(){return EmailValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MaxLengthValidator",function(){return MaxLengthValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MinLengthValidator",function(){return MinLengthValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PatternValidator",function(){return PatternValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RequiredValidator",function(){return RequiredValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormBuilder",function(){return FormBuilder});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AbstractControl",function(){return AbstractControl});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormArray",function(){return FormArray});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormControl",function(){return FormControl});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormGroup",function(){return FormGroup});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NG_ASYNC_VALIDATORS",function(){return NG_ASYNC_VALIDATORS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NG_VALIDATORS",function(){return NG_VALIDATORS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Validators",function(){return Validators});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"VERSION",function(){return VERSION});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormsModule",function(){return FormsModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ReactiveFormsModule",function(){return ReactiveFormsModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/**
 * @license Angular v8.2.8
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * Defines an interface that acts as a bridge between the Angular forms API and a
 * native element in the DOM.
 *
 * Implement this interface to create a custom form control directive
 * that integrates with Angular forms.
 *
 * @see DefaultValueAccessor
 *
 * \@publicApi
 * @record
 */function ControlValueAccessor(){}if(false){}/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * \@publicApi
 * @type {?}
 */var NG_VALUE_ACCESSOR=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgValueAccessor");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var CHECKBOX_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return CheckboxControlValueAccessor}),multi:true};/**
 * \@description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * \@usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var CheckboxControlValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function CheckboxControlValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){}}/**
     * Sets the "checked" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */var _proto37=CheckboxControlValueAccessor.prototype;_proto37.writeValue=function writeValue(value){this._renderer.setProperty(this._elementRef.nativeElement,"checked",value)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto37.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto37.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto37.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)};return CheckboxControlValueAccessor}();CheckboxControlValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",host:{"(change)":"onChange($event.target.checked)","(blur)":"onTouched()"},providers:[CHECKBOX_VALUE_ACCESSOR]}]}];/** @nocollapse */CheckboxControlValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var DEFAULT_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return DefaultValueAccessor}),multi:true};/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */function _isAndroid(){/** @type {?} */var userAgent=Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["\u0275getDOM"])()?Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["\u0275getDOM"])().getUserAgent():"";return /android (\d+)/.test(userAgent.toLowerCase())}/**
 * \@description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * \@publicApi
 * @type {?}
 */var COMPOSITION_BUFFER_MODE=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("CompositionEventMode");/**
 * \@description
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var DefaultValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */function DefaultValueAccessor(_renderer,_elementRef,_compositionMode){this._renderer=_renderer;this._elementRef=_elementRef;this._compositionMode=_compositionMode;/**
         * \@description
         * The registered callback function called when an input event occurs on the input element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){};/**
         * Whether the user is creating a composition string (IME events).
         */this._composing=false;if(this._compositionMode==null){this._compositionMode=!_isAndroid()}}/**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */var _proto38=DefaultValueAccessor.prototype;_proto38.writeValue=function writeValue(value){/** @type {?} */var normalizedValue=value==null?"":value;this._renderer.setProperty(this._elementRef.nativeElement,"value",normalizedValue)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto38.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto38.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto38.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto38._handleInput=function _handleInput(value){if(!this._compositionMode||this._compositionMode&&!this._composing){this.onChange(value)}}/**
     * \@internal
     * @return {?}
     */;_proto38._compositionStart=function _compositionStart(){this._composing=true}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto38._compositionEnd=function _compositionEnd(value){this._composing=false;this._compositionMode&&this.onChange(value)};return DefaultValueAccessor}();DefaultValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",// TODO: vsavkin replace the above selector with the one below it once
// https://github.com/angular/angular/issues/3011 is implemented
// selector: '[ngModel],[formControl],[formControlName]',
host:{"(input)":"$any(this)._handleInput($event.target.value)","(blur)":"onTouched()","(compositionstart)":"$any(this)._compositionStart()","(compositionend)":"$any(this)._compositionEnd($event.target.value)"},providers:[DEFAULT_VALUE_ACCESSOR]}]}];/** @nocollapse */DefaultValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:Boolean,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[COMPOSITION_BUFFER_MODE]}]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * \@description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * \@publicApi
 * @abstract
 */var AbstractControlDirective=/*#__PURE__*/function(){function AbstractControlDirective(){}var _proto39=AbstractControlDirective.prototype;/**
     * \@description
     * Resets the control with the provided value if the control is present.
     * @param {?=} value
     * @return {?}
     */_proto39.reset=function reset(value){if(value===void 0){value=undefined}if(this.control)this.control.reset(value)}/**
     * \@description
     * Reports whether the control with the given path has the error specified.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */;_proto39.hasError=function hasError(errorCode,path){return this.control?this.control.hasError(errorCode,path):false}/**
     * \@description
     * Reports error data for the control with the given path.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} error data for that particular error. If the control or error is not present,
     * null is returned.
     */;_proto39.getError=function getError(errorCode,path){return this.control?this.control.getError(errorCode,path):null};_createClass(AbstractControlDirective,[{key:"value",/**
     * \@description
     * Reports the value of the control if it is present, otherwise null.
     * @return {?}
     */get:function get(){return this.control?this.control.value:null}/**
     * \@description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     * @return {?}
     */},{key:"valid",get:function get(){return this.control?this.control.valid:null}/**
     * \@description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     * @return {?}
     */},{key:"invalid",get:function get(){return this.control?this.control.invalid:null}/**
     * \@description
     * Reports whether a control is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     * @return {?}
     */},{key:"pending",get:function get(){return this.control?this.control.pending:null}/**
     * \@description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     * @return {?}
     */},{key:"disabled",get:function get(){return this.control?this.control.disabled:null}/**
     * \@description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     * @return {?}
     */},{key:"enabled",get:function get(){return this.control?this.control.enabled:null}/**
     * \@description
     * Reports the control's validation errors. If the control is not present, null is returned.
     * @return {?}
     */},{key:"errors",get:function get(){return this.control?this.control.errors:null}/**
     * \@description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     * @return {?}
     */},{key:"pristine",get:function get(){return this.control?this.control.pristine:null}/**
     * \@description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     * @return {?}
     */},{key:"dirty",get:function get(){return this.control?this.control.dirty:null}/**
     * \@description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     * @return {?}
     */},{key:"touched",get:function get(){return this.control?this.control.touched:null}/**
     * \@description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     * @return {?}
     */},{key:"status",get:function get(){return this.control?this.control.status:null}/**
     * \@description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     * @return {?}
     */},{key:"untouched",get:function get(){return this.control?this.control.untouched:null}/**
     * \@description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     * @return {?}
     */},{key:"statusChanges",get:function get(){return this.control?this.control.statusChanges:null}/**
     * \@description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     * @return {?}
     */},{key:"valueChanges",get:function get(){return this.control?this.control.valueChanges:null}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */},{key:"path",get:function get(){return null}}]);return AbstractControlDirective}();if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * \@publicApi
 * @abstract
 */var ControlContainer=/*#__PURE__*/function(_AbstractControlDirec){_inheritsLoose(ControlContainer,_AbstractControlDirec);function ControlContainer(){return _AbstractControlDirec.apply(this,arguments)||this}_createClass(ControlContainer,[{key:"formDirective",/**
     * \@description
     * The top-level form directive for the control.
     * @return {?}
     */get:function get(){return null}/**
     * \@description
     * The path to this group.
     * @return {?}
     */},{key:"path",get:function get(){return null}}]);return ControlContainer}(AbstractControlDirective);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function unimplemented(){throw new Error("unimplemented")}/**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */var NgControl=/*#__PURE__*/function(_AbstractControlDirec2){_inheritsLoose(NgControl,_AbstractControlDirec2);function NgControl(){var _this39;_this39=_AbstractControlDirec2.apply(this,arguments)||this;/**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */_this39._parent=null;/**
         * \@description
         * The name for the control
         */_this39.name=null;/**
         * \@description
         * The value accessor for the control
         */_this39.valueAccessor=null;/**
         * \@description
         * The uncomposed array of synchronous validators for the control
         *
         * \@internal
         */_this39._rawValidators=[];/**
         * \@description
         * The uncomposed array of async validators for the control
         *
         * \@internal
         */_this39._rawAsyncValidators=[];return _this39}/**
     * \@description
     * The registered synchronous validator function for the control
     *
     * @throws An exception that this method is not implemented
     * @return {?}
     */_createClass(NgControl,[{key:"validator",get:function get(){return(/** @type {?} */unimplemented())}/**
     * \@description
     * The registered async validator function for the control
     *
     * @throws An exception that this method is not implemented
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return(/** @type {?} */unimplemented())}}]);return NgControl}(AbstractControlDirective);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var AbstractControlStatus=/*#__PURE__*/function(){/**
     * @param {?} cd
     */function AbstractControlStatus(cd){this._cd=cd}/**
     * @return {?}
     */_createClass(AbstractControlStatus,[{key:"ngClassUntouched",get:function get(){return this._cd.control?this._cd.control.untouched:false}/**
     * @return {?}
     */},{key:"ngClassTouched",get:function get(){return this._cd.control?this._cd.control.touched:false}/**
     * @return {?}
     */},{key:"ngClassPristine",get:function get(){return this._cd.control?this._cd.control.pristine:false}/**
     * @return {?}
     */},{key:"ngClassDirty",get:function get(){return this._cd.control?this._cd.control.dirty:false}/**
     * @return {?}
     */},{key:"ngClassValid",get:function get(){return this._cd.control?this._cd.control.valid:false}/**
     * @return {?}
     */},{key:"ngClassInvalid",get:function get(){return this._cd.control?this._cd.control.invalid:false}/**
     * @return {?}
     */},{key:"ngClassPending",get:function get(){return this._cd.control?this._cd.control.pending:false}}]);return AbstractControlStatus}();if(false){}/** @type {?} */var ngControlStatusHost={"[class.ng-untouched]":"ngClassUntouched","[class.ng-touched]":"ngClassTouched","[class.ng-pristine]":"ngClassPristine","[class.ng-dirty]":"ngClassDirty","[class.ng-valid]":"ngClassValid","[class.ng-invalid]":"ngClassInvalid","[class.ng-pending]":"ngClassPending"};/**
 * \@description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * \@usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var NgControlStatus=/*#__PURE__*/function(_AbstractControlStatu){_inheritsLoose(NgControlStatus,_AbstractControlStatu);/**
     * @param {?} cd
     */function NgControlStatus(cd){return _AbstractControlStatu.call(this,cd)||this}return NgControlStatus}(AbstractControlStatus);NgControlStatus.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formControlName],[ngModel],[formControl]",host:ngControlStatusHost}]}];/** @nocollapse */NgControlStatus.ctorParameters=function(){return[{type:NgControl,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]}]}]};/**
 * \@description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @see `NgControlStatus`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var NgControlStatusGroup=/*#__PURE__*/function(_AbstractControlStatu2){_inheritsLoose(NgControlStatusGroup,_AbstractControlStatu2);/**
     * @param {?} cd
     */function NgControlStatusGroup(cd){return _AbstractControlStatu2.call(this,cd)||this}return NgControlStatusGroup}(AbstractControlStatus);NgControlStatusGroup.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",host:ngControlStatusHost}]}];/** @nocollapse */NgControlStatusGroup.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]}]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} value
 * @return {?}
 */function isEmptyInputValue(value){// we don't check for string here so it also works with arrays
return value==null||value.length===0}/**
 * \@description
 * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * \@usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * \@Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @type {?}
 */var NG_VALIDATORS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgValidators");/**
 * \@description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * \@publicApi
 * @type {?}
 */var NG_ASYNC_VALIDATORS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgAsyncValidators");/** @type {?} */var EMAIL_REGEXP=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;/**
 * \@description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * \@publicApi
 */var Validators=/*#__PURE__*/function(){function Validators(){}/**
     * \@description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * \@usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} min
     * @return {?} A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     */Validators.min=function min(_min){return(/**
         * @param {?} control
         * @return {?}
         */function(control){if(isEmptyInputValue(control.value)||isEmptyInputValue(_min)){return null;// don't validate empty values to allow optional controls
}/** @type {?} */var value=parseFloat(control.value);// Controls with NaN values after parsing should be treated as not having a
// minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
return!isNaN(value)&&value<_min?{"min":{"min":_min,"actual":control.value}}:null})}/**
     * \@description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * \@usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} max
     * @return {?} A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     */;Validators.max=function max(_max){return(/**
         * @param {?} control
         * @return {?}
         */function(control){if(isEmptyInputValue(control.value)||isEmptyInputValue(_max)){return null;// don't validate empty values to allow optional controls
}/** @type {?} */var value=parseFloat(control.value);// Controls with NaN values after parsing should be treated as not having a
// maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
return!isNaN(value)&&value>_max?{"max":{"max":_max,"actual":control.value}}:null})}/**
     * \@description
     * Validator that requires the control have a non-empty value.
     *
     * \@usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */;Validators.required=function required(control){return isEmptyInputValue(control.value)?{"required":true}:null}/**
     * \@description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * \@usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     */;Validators.requiredTrue=function requiredTrue(control){return control.value===true?null:{"required":true}}/**
     * \@description
     * Validator that requires the control's value pass an email validation test.
     *
     * \@usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad\@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */;Validators.email=function email(control){if(isEmptyInputValue(control.value)){return null;// don't validate empty values to allow optional controls
}return EMAIL_REGEXP.test(control.value)?null:{"email":true}}/**
     * \@description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} minLength
     * @return {?} A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     *
     */;Validators.minLength=function minLength(_minLength){return(/**
         * @param {?} control
         * @return {?}
         */function(control){if(isEmptyInputValue(control.value)){return null;// don't validate empty values to allow optional controls
}/** @type {?} */var length=control.value?control.value.length:0;return length<_minLength?{"minlength":{"requiredLength":_minLength,"actualLength":length}}:null})}/**
     * \@description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} maxLength
     * @return {?} A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     */;Validators.maxLength=function maxLength(_maxLength){return(/**
         * @param {?} control
         * @return {?}
         */function(control){/** @type {?} */var length=control.value?control.value.length:0;return length>_maxLength?{"maxlength":{"requiredLength":_maxLength,"actualLength":length}}:null})}/**
     * \@description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @return {?} A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     */;Validators.pattern=function pattern(_pattern){if(!_pattern)return Validators.nullValidator;/** @type {?} */var regex;/** @type {?} */var regexStr;if(typeof _pattern==="string"){regexStr="";if(_pattern.charAt(0)!=="^")regexStr+="^";regexStr+=_pattern;if(_pattern.charAt(_pattern.length-1)!=="$")regexStr+="$";regex=new RegExp(regexStr)}else{regexStr=_pattern.toString();regex=_pattern}return(/**
         * @param {?} control
         * @return {?}
         */function(control){if(isEmptyInputValue(control.value)){return null;// don't validate empty values to allow optional controls
}/** @type {?} */var value=control.value;return regex.test(value)?null:{"pattern":{"requiredPattern":regexStr,"actualValue":value}}})}/**
     * \@description
     * Validator that performs no operation.
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?}
     */;Validators.nullValidator=function nullValidator(control){return null}/**
     * @param {?} validators
     * @return {?}
     */;Validators.compose=function compose(validators){if(!validators)return null;/** @type {?} */var presentValidators=/** @type {?} */validators.filter(isPresent);if(presentValidators.length==0)return null;return(/**
         * @param {?} control
         * @return {?}
         */function(control){return _mergeErrors(_executeValidators(control,presentValidators))})}/**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} validators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     */;Validators.composeAsync=function composeAsync(validators){if(!validators)return null;/** @type {?} */var presentValidators=/** @type {?} */validators.filter(isPresent);if(presentValidators.length==0)return null;return(/**
         * @param {?} control
         * @return {?}
         */function(control){/** @type {?} */var observables=_executeAsyncValidators(control,presentValidators).map(toObservable);return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors))})};return Validators}();/**
 * @param {?} o
 * @return {?}
 */function isPresent(o){return o!=null}/**
 * @param {?} r
 * @return {?}
 */function toObservable(r){/** @type {?} */var obs=Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275isPromise"])(r)?Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r):r;if(!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275isObservable"])(obs)){throw new Error("Expected validator to return Promise or Observable.")}return obs}/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */function _executeValidators(control,validators){return validators.map(/**
     * @param {?} v
     * @return {?}
     */function(v){return v(control)})}/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */function _executeAsyncValidators(control,validators){return validators.map(/**
     * @param {?} v
     * @return {?}
     */function(v){return v(control)})}/**
 * @param {?} arrayOfErrors
 * @return {?}
 */function _mergeErrors(arrayOfErrors){/** @type {?} */var res=arrayOfErrors.reduce(/**
     * @param {?} res
     * @param {?} errors
     * @return {?}
     */function(res,errors){return errors!=null?Object.assign({},/** @type {?} */res,errors):/** @type {?} */res},{});return Object.keys(res).length===0?null:res}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @param {?} validator
 * @return {?}
 */function normalizeValidator(validator){if(/** @type {?} */validator.validate){return(/**
         * @param {?} c
         * @return {?}
         */function(c){return(/** @type {?} */validator.validate(c))})}else{return(/** @type {?} */validator)}}/**
 * @param {?} validator
 * @return {?}
 */function normalizeAsyncValidator(validator){if(/** @type {?} */validator.validate){return(/**
         * @param {?} c
         * @return {?}
         */function(c){return(/** @type {?} */validator.validate(c))})}else{return(/** @type {?} */validator)}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var NUMBER_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return NumberValueAccessor}),multi:true};/**
 * \@description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * \@usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var NumberValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function NumberValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){}}/**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */var _proto40=NumberValueAccessor.prototype;_proto40.writeValue=function writeValue(value){// The value needs to be normalized for IE9, otherwise it is set to 'null' when null
/** @type {?} */var normalizedValue=value==null?"":value;this._renderer.setProperty(this._elementRef.nativeElement,"value",normalizedValue)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto40.registerOnChange=function registerOnChange(fn){this.onChange=/**
         * @param {?} value
         * @return {?}
         */function(value){fn(value==""?null:parseFloat(value))}}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto40.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto40.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)};return NumberValueAccessor}();NumberValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",host:{"(change)":"onChange($event.target.value)","(input)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[NUMBER_VALUE_ACCESSOR]}]}];/** @nocollapse */NumberValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var RADIO_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return RadioControlValueAccessor}),multi:true};/**
 * \@description
 * Class used by Angular to track radio buttons. For internal use only.
 */var RadioControlRegistry=/*#__PURE__*/function(){function RadioControlRegistry(){this._accessors=[]}/**
     * \@description
     * Adds a control to the internal registry. For internal use only.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */var _proto41=RadioControlRegistry.prototype;_proto41.add=function add(control,accessor){this._accessors.push([control,accessor])}/**
     * \@description
     * Removes a control from the internal registry. For internal use only.
     * @param {?} accessor
     * @return {?}
     */;_proto41.remove=function remove(accessor){for(var i=this._accessors.length-1;i>=0;--i){if(this._accessors[i][1]===accessor){this._accessors.splice(i,1);return}}}/**
     * \@description
     * Selects a radio button. For internal use only.
     * @param {?} accessor
     * @return {?}
     */;_proto41.select=function select(accessor){var _this40=this;this._accessors.forEach(/**
         * @param {?} c
         * @return {?}
         */function(c){if(_this40._isSameGroup(c,accessor)&&c[1]!==accessor){c[1].fireUncheck(accessor.value)}})}/**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */;_proto41._isSameGroup=function _isSameGroup(controlPair,accessor){if(!controlPair[0].control)return false;return controlPair[0]._parent===accessor._control._parent&&controlPair[1].name===accessor.name};return RadioControlRegistry}();RadioControlRegistry.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];if(false){}/**
 * \@description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var RadioControlValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */function RadioControlValueAccessor(_renderer,_elementRef,_registry,_injector){this._renderer=_renderer;this._elementRef=_elementRef;this._registry=_registry;this._injector=_injector;/**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */this.onChange=/**
         * @return {?}
         */function(){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){}}/**
     * \@description
     * A lifecycle method called when the directive is initialized. For internal use only.
     * @return {?}
     */var _proto42=RadioControlValueAccessor.prototype;_proto42.ngOnInit=function ngOnInit(){this._control=this._injector.get(NgControl);this._checkName();this._registry.add(this._control,this)}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto42.ngOnDestroy=function ngOnDestroy(){this._registry.remove(this)}/**
     * \@description
     * Sets the "checked" property value on the radio input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */;_proto42.writeValue=function writeValue(value){this._state=value===this.value;this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto42.registerOnChange=function registerOnChange(fn){var _this41=this;this._fn=fn;this.onChange=/**
         * @return {?}
         */function(){fn(_this41.value);_this41._registry.select(_this41)}}/**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param {?} value
     * @return {?}
     */;_proto42.fireUncheck=function fireUncheck(value){this.writeValue(value)}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto42.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto42.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)}/**
     * @private
     * @return {?}
     */;_proto42._checkName=function _checkName(){if(this.name&&this.formControlName&&this.name!==this.formControlName){this._throwNameError()}if(!this.name&&this.formControlName)this.name=this.formControlName}/**
     * @private
     * @return {?}
     */;_proto42._throwNameError=function _throwNameError(){throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ")};return RadioControlValueAccessor}();RadioControlValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",host:{"(change)":"onChange()","(blur)":"onTouched()"},providers:[RADIO_VALUE_ACCESSOR]}]}];/** @nocollapse */RadioControlValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:RadioControlRegistry},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]}]};RadioControlValueAccessor.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formControlName:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var RANGE_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return RangeValueAccessor}),multi:true};/**
 * \@description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * \@usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var RangeValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function RangeValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){}}/**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */var _proto43=RangeValueAccessor.prototype;_proto43.writeValue=function writeValue(value){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(value))}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto43.registerOnChange=function registerOnChange(fn){this.onChange=/**
         * @param {?} value
         * @return {?}
         */function(value){fn(value==""?null:parseFloat(value))}}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto43.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the range input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto43.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)};return RangeValueAccessor}();RangeValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",host:{"(change)":"onChange($event.target.value)","(input)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[RANGE_VALUE_ACCESSOR]}]}];/** @nocollapse */RangeValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /** @type {?} */var FormErrorExamples={formControlName:"\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",formGroupName:"\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",formArrayName:"\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",ngModelGroup:"\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",ngModelWithFormGroup:"\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ReactiveErrors=/*#__PURE__*/function(){function ReactiveErrors(){}/**
     * @return {?}
     */ReactiveErrors.controlParentException=function controlParentException(){throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      "+FormErrorExamples.formControlName)}/**
     * @return {?}
     */;ReactiveErrors.ngModelGroupException=function ngModelGroupException(){throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        "+FormErrorExamples.formGroupName+"\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        "+FormErrorExamples.ngModelGroup)}/**
     * @return {?}
     */;ReactiveErrors.missingFormException=function missingFormException(){throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       "+FormErrorExamples.formControlName)}/**
     * @return {?}
     */;ReactiveErrors.groupParentException=function groupParentException(){throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      "+FormErrorExamples.formGroupName)}/**
     * @return {?}
     */;ReactiveErrors.arrayParentException=function arrayParentException(){throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        "+FormErrorExamples.formArrayName)}/**
     * @return {?}
     */;ReactiveErrors.disabledAttrWarning=function disabledAttrWarning(){console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")}/**
     * @param {?} directiveName
     * @return {?}
     */;ReactiveErrors.ngModelWarning=function ngModelWarning(directiveName){console.warn("\n    It looks like you're using ngModel on the same form field as "+directiveName+". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/"+(directiveName==="formControl"?"FormControlDirective":"FormControlName")+"#use-with-ngmodel\n    ")};return ReactiveErrors}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var SELECT_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return SelectControlValueAccessor}),multi:true};/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */function _buildValueString(id,value){if(id==null)return""+value;if(value&&typeof value==="object")value="Object";return(id+": "+value).slice(0,50)}/**
 * @param {?} valueString
 * @return {?}
 */function _extractId(valueString){return valueString.split(":")[0]}/**
 * \@description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var SelectControlValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function SelectControlValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@internal
         */this._optionMap=new Map;/**
         * \@internal
         */this._idCounter=0;/**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){};this._compareWith=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275looseIdentical"]}/**
     * \@description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     * @param {?} fn
     * @return {?}
     */var _proto44=SelectControlValueAccessor.prototype;/**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     *
     * @param {?} value The checked value
     * @return {?}
     */_proto44.writeValue=function writeValue(value){this.value=value;/** @type {?} */var id=this._getOptionId(value);if(id==null){this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1)}/** @type {?} */var valueString=_buildValueString(id,value);this._renderer.setProperty(this._elementRef.nativeElement,"value",valueString)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto44.registerOnChange=function registerOnChange(fn){var _this42=this;this.onChange=/**
         * @param {?} valueString
         * @return {?}
         */function(valueString){_this42.value=_this42._getOptionValue(valueString);fn(_this42.value)}}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto44.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the select input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto44.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)}/**
     * \@internal
     * @return {?}
     */;_proto44._registerOption=function _registerOption(){return(this._idCounter++).toString()}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto44._getOptionId=function _getOptionId(value){for(var _i=0,_Array$from=Array.from(this._optionMap.keys());_i<_Array$from.length;_i++){var id=_Array$from[_i];if(this._compareWith(this._optionMap.get(id),value))return id}return null}/**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */;_proto44._getOptionValue=function _getOptionValue(valueString){/** @type {?} */var id=_extractId(valueString);return this._optionMap.has(id)?this._optionMap.get(id):valueString};_createClass(SelectControlValueAccessor,[{key:"compareWith",set:function set(fn){if(typeof fn!=="function"){throw new Error("compareWith must be a function, but received "+JSON.stringify(fn))}this._compareWith=fn}}]);return SelectControlValueAccessor}();SelectControlValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",host:{"(change)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[SELECT_VALUE_ACCESSOR]}]}];/** @nocollapse */SelectControlValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};SelectControlValueAccessor.propDecorators={compareWith:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var NgSelectOption=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */function NgSelectOption(_element,_renderer,_select){this._element=_element;this._renderer=_renderer;this._select=_select;if(this._select)this.id=this._select._registerOption()}/**
     * \@description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     * @param {?} value
     * @return {?}
     */var _proto45=NgSelectOption.prototype;/**
     * \@internal
     * @param {?} value
     * @return {?}
     */_proto45._setElementValue=function _setElementValue(value){this._renderer.setProperty(this._element.nativeElement,"value",value)}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto45.ngOnDestroy=function ngOnDestroy(){if(this._select){this._select._optionMap.delete(this.id);this._select.writeValue(this._select.value)}};_createClass(NgSelectOption,[{key:"ngValue",set:function set(value){if(this._select==null)return;this._select._optionMap.set(this.id,value);this._setElementValue(_buildValueString(this.id,value));this._select.writeValue(this._select.value)}/**
     * \@description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     * @param {?} value
     * @return {?}
     */},{key:"value",set:function set(value){this._setElementValue(value);if(this._select)this._select.writeValue(this._select.value)}}]);return NgSelectOption}();NgSelectOption.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"option"}]}];/** @nocollapse */NgSelectOption.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:SelectControlValueAccessor,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]}]};NgSelectOption.propDecorators={ngValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngValue"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["value"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var SELECT_MULTIPLE_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return SelectMultipleControlValueAccessor}),multi:true};/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */function _buildValueString$1(id,value){if(id==null)return""+value;if(typeof value==="string")value="'"+value+"'";if(value&&typeof value==="object")value="Object";return(id+": "+value).slice(0,50)}/**
 * @param {?} valueString
 * @return {?}
 */function _extractId$1(valueString){return valueString.split(":")[0]}/**
 * Mock interface for HTML Options
 * @record
 */function HTMLOption(){}if(false){}/**
 * Mock interface for HTMLCollection
 * @abstract
 */var HTMLCollection=function HTMLCollection(){};if(false){}/**
 * \@description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * \@usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var SelectMultipleControlValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function SelectMultipleControlValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@internal
         */this._optionMap=new Map;/**
         * \@internal
         */this._idCounter=0;/**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){};this._compareWith=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275looseIdentical"]}/**
     * \@description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     * @param {?} fn
     * @return {?}
     */var _proto46=SelectMultipleControlValueAccessor.prototype;/**
     * \@description
     * Sets the "value" property on one or of more
     * of the select's options.
     *
     * @param {?} value The value
     * @return {?}
     */_proto46.writeValue=function writeValue(value){var _this43=this;this.value=value;/** @type {?} */var optionSelectedStateSetter;if(Array.isArray(value)){// convert values to ids
/** @type {?} */var ids=value.map(/**
             * @param {?} v
             * @return {?}
             */function(v){return _this43._getOptionId(v)});optionSelectedStateSetter=/**
             * @param {?} opt
             * @param {?} o
             * @return {?}
             */function optionSelectedStateSetter(opt,o){opt._setSelected(ids.indexOf(o.toString())>-1)}}else{optionSelectedStateSetter=/**
             * @param {?} opt
             * @param {?} o
             * @return {?}
             */function optionSelectedStateSetter(opt,o){opt._setSelected(false)}}this._optionMap.forEach(optionSelectedStateSetter)}/**
     * \@description
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto46.registerOnChange=function registerOnChange(fn){var _this44=this;this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){/** @type {?} */var selected=[];if(_.hasOwnProperty("selectedOptions")){/** @type {?} */var options=_.selectedOptions;for(var i=0;i<options.length;i++){/** @type {?} */var opt=options.item(i);/** @type {?} */var val=_this44._getOptionValue(opt.value);selected.push(val)}}// Degrade on IE
else{/** @type {?} */var _options2=/** @type {?} */_.options;for(var _i2=0;_i2<_options2.length;_i2++){/** @type {?} */var _opt=_options2.item(_i2);if(_opt.selected){/** @type {?} */var _val=_this44._getOptionValue(_opt.value);selected.push(_val)}}}_this44.value=selected;fn(selected)}}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto46.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the select input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto46.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto46._registerOption=function _registerOption(value){/** @type {?} */var id=(this._idCounter++).toString();this._optionMap.set(id,value);return id}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto46._getOptionId=function _getOptionId(value){for(var _i3=0,_Array$from2=Array.from(this._optionMap.keys());_i3<_Array$from2.length;_i3++){var id=_Array$from2[_i3];if(this._compareWith(/** @type {?} */this._optionMap.get(id)._value,value))return id}return null}/**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */;_proto46._getOptionValue=function _getOptionValue(valueString){/** @type {?} */var id=_extractId$1(valueString);return this._optionMap.has(id)?/** @type {?} */this._optionMap.get(id)._value:valueString};_createClass(SelectMultipleControlValueAccessor,[{key:"compareWith",set:function set(fn){if(typeof fn!=="function"){throw new Error("compareWith must be a function, but received "+JSON.stringify(fn))}this._compareWith=fn}}]);return SelectMultipleControlValueAccessor}();SelectMultipleControlValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",host:{"(change)":"onChange($event.target)","(blur)":"onTouched()"},providers:[SELECT_MULTIPLE_VALUE_ACCESSOR]}]}];/** @nocollapse */SelectMultipleControlValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};SelectMultipleControlValueAccessor.propDecorators={compareWith:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var ɵNgSelectMultipleOption=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */function ɵNgSelectMultipleOption(_element,_renderer,_select){this._element=_element;this._renderer=_renderer;this._select=_select;if(this._select){this.id=this._select._registerOption(this)}}/**
     * \@description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     * @param {?} value
     * @return {?}
     */var _proto47=ɵNgSelectMultipleOption.prototype;/**
     * \@internal
     * @param {?} value
     * @return {?}
     */_proto47._setElementValue=function _setElementValue(value){this._renderer.setProperty(this._element.nativeElement,"value",value)}/**
     * \@internal
     * @param {?} selected
     * @return {?}
     */;_proto47._setSelected=function _setSelected(selected){this._renderer.setProperty(this._element.nativeElement,"selected",selected)}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto47.ngOnDestroy=function ngOnDestroy(){if(this._select){this._select._optionMap.delete(this.id);this._select.writeValue(this._select.value)}};_createClass(ɵNgSelectMultipleOption,[{key:"ngValue",set:function set(value){if(this._select==null)return;this._value=value;this._setElementValue(_buildValueString$1(this.id,value));this._select.writeValue(this._select.value)}/**
     * \@description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     * @param {?} value
     * @return {?}
     */},{key:"value",set:function set(value){if(this._select){this._value=value;this._setElementValue(_buildValueString$1(this.id,value));this._select.writeValue(this._select.value)}else{this._setElementValue(value)}}}]);return ɵNgSelectMultipleOption}();ɵNgSelectMultipleOption.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"option"}]}];/** @nocollapse */ɵNgSelectMultipleOption.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:SelectMultipleControlValueAccessor,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]}]};ɵNgSelectMultipleOption.propDecorators={ngValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngValue"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["value"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */function controlPath(name,parent){return[].concat(/** @type {?} */parent.path,[name])}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpControl(control,dir){if(!control)_throwError(dir,"Cannot find control with");if(!dir.valueAccessor)_throwError(dir,"No value accessor for form control with");control.validator=Validators.compose([/** @type {?} */control.validator,dir.validator]);control.asyncValidator=Validators.composeAsync([/** @type {?} */control.asyncValidator,dir.asyncValidator]);/** @type {?} */dir.valueAccessor.writeValue(control.value);setUpViewChangePipeline(control,dir);setUpModelChangePipeline(control,dir);setUpBlurPipeline(control,dir);if(/** @type {?} */dir.valueAccessor.setDisabledState){control.registerOnDisabledChange(/**
         * @param {?} isDisabled
         * @return {?}
         */function(isDisabled){/** @type {?} */ /** @type {?} */dir.valueAccessor.setDisabledState(isDisabled)})}// re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
dir._rawValidators.forEach(/**
     * @param {?} validator
     * @return {?}
     */function(validator){if(/** @type {?} */validator.registerOnValidatorChange)/** @type {?} */ /** @type {?} */validator.registerOnValidatorChange(/**
             * @return {?}
             */function(){return control.updateValueAndValidity()})});dir._rawAsyncValidators.forEach(/**
     * @param {?} validator
     * @return {?}
     */function(validator){if(/** @type {?} */validator.registerOnValidatorChange)/** @type {?} */ /** @type {?} */validator.registerOnValidatorChange(/**
             * @return {?}
             */function(){return control.updateValueAndValidity()})})}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function cleanUpControl(control,dir){/** @type {?} */dir.valueAccessor.registerOnChange(/**
     * @return {?}
     */function(){return _noControlError(dir)});/** @type {?} */dir.valueAccessor.registerOnTouched(/**
     * @return {?}
     */function(){return _noControlError(dir)});dir._rawValidators.forEach(/**
     * @param {?} validator
     * @return {?}
     */function(validator){if(validator.registerOnValidatorChange){validator.registerOnValidatorChange(null)}});dir._rawAsyncValidators.forEach(/**
     * @param {?} validator
     * @return {?}
     */function(validator){if(validator.registerOnValidatorChange){validator.registerOnValidatorChange(null)}});if(control)control._clearChangeFns()}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpViewChangePipeline(control,dir){/** @type {?} */dir.valueAccessor.registerOnChange(/**
     * @param {?} newValue
     * @return {?}
     */function(newValue){control._pendingValue=newValue;control._pendingChange=true;control._pendingDirty=true;if(control.updateOn==="change")updateControl(control,dir)})}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpBlurPipeline(control,dir){/** @type {?} */dir.valueAccessor.registerOnTouched(/**
     * @return {?}
     */function(){control._pendingTouched=true;if(control.updateOn==="blur"&&control._pendingChange)updateControl(control,dir);if(control.updateOn!=="submit")control.markAsTouched()})}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function updateControl(control,dir){if(control._pendingDirty)control.markAsDirty();control.setValue(control._pendingValue,{emitModelToViewChange:false});dir.viewToModelUpdate(control._pendingValue);control._pendingChange=false}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpModelChangePipeline(control,dir){control.registerOnChange(/**
     * @param {?} newValue
     * @param {?} emitModelEvent
     * @return {?}
     */function(newValue,emitModelEvent){// control -> view
/** @type {?} */dir.valueAccessor.writeValue(newValue);// control -> ngModel
if(emitModelEvent)dir.viewToModelUpdate(newValue)})}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpFormContainer(control,dir){if(control==null)_throwError(dir,"Cannot find control with");control.validator=Validators.compose([control.validator,dir.validator]);control.asyncValidator=Validators.composeAsync([control.asyncValidator,dir.asyncValidator])}/**
 * @param {?} dir
 * @return {?}
 */function _noControlError(dir){return _throwError(dir,"There is no FormControl instance attached to form control element with")}/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */function _throwError(dir,message){/** @type {?} */var messageEnd;if(/** @type {?} */dir.path.length>1){messageEnd="path: '"+/** @type {?} */dir.path.join(" -> ")+"'"}else if(/** @type {?} */dir.path[0]){messageEnd="name: '"+dir.path+"'"}else{messageEnd="unspecified name attribute"}throw new Error(message+" "+messageEnd)}/**
 * @param {?} validators
 * @return {?}
 */function composeValidators(validators){return validators!=null?Validators.compose(validators.map(normalizeValidator)):null}/**
 * @param {?} validators
 * @return {?}
 */function composeAsyncValidators(validators){return validators!=null?Validators.composeAsync(validators.map(normalizeAsyncValidator)):null}/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */function isPropertyUpdated(changes,viewModel){if(!changes.hasOwnProperty("model"))return false;/** @type {?} */var change=changes["model"];if(change.isFirstChange())return true;return!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275looseIdentical"])(viewModel,change.currentValue)}/** @type {?} */var BUILTIN_ACCESSORS=[CheckboxControlValueAccessor,RangeValueAccessor,NumberValueAccessor,SelectControlValueAccessor,SelectMultipleControlValueAccessor,RadioControlValueAccessor];/**
 * @param {?} valueAccessor
 * @return {?}
 */function isBuiltInAccessor(valueAccessor){return BUILTIN_ACCESSORS.some(/**
     * @param {?} a
     * @return {?}
     */function(a){return valueAccessor.constructor===a})}/**
 * @param {?} form
 * @param {?} directives
 * @return {?}
 */function syncPendingControls(form,directives){form._syncPendingControls();directives.forEach(/**
     * @param {?} dir
     * @return {?}
     */function(dir){/** @type {?} */var control=/** @type {?} */dir.control;if(control.updateOn==="submit"&&control._pendingChange){dir.viewToModelUpdate(control._pendingValue);control._pendingChange=false}})}// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */function selectValueAccessor(dir,valueAccessors){if(!valueAccessors)return null;if(!Array.isArray(valueAccessors))_throwError(dir,"Value accessor was not provided as an array for form control with");/** @type {?} */var defaultAccessor=undefined;/** @type {?} */var builtinAccessor=undefined;/** @type {?} */var customAccessor=undefined;valueAccessors.forEach(/**
     * @param {?} v
     * @return {?}
     */function(v){if(v.constructor===DefaultValueAccessor){defaultAccessor=v}else if(isBuiltInAccessor(v)){if(builtinAccessor)_throwError(dir,"More than one built-in value accessor matches form control with");builtinAccessor=v}else{if(customAccessor)_throwError(dir,"More than one custom value accessor matches form control with");customAccessor=v}});if(customAccessor)return customAccessor;if(builtinAccessor)return builtinAccessor;if(defaultAccessor)return defaultAccessor;_throwError(dir,"No valid value accessor for form control with");return null}/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */function removeDir(list,el){/** @type {?} */var index=list.indexOf(el);if(index>-1)list.splice(index,1)}// TODO(kara): remove after deprecation period
/**
 * @param {?} name
 * @param {?} type
 * @param {?} instance
 * @param {?} warningConfig
 * @return {?}
 */function _ngModelWarning(name,type,instance,warningConfig){if(!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()||warningConfig==="never")return;if((warningConfig===null||warningConfig==="once")&&!type._ngModelWarningSentOnce||warningConfig==="always"&&!instance._ngModelWarningSent){ReactiveErrors.ngModelWarning(name);type._ngModelWarningSentOnce=true;instance._ngModelWarningSent=true}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 * @type {?}
 */var VALID="VALID";/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */var INVALID="INVALID";/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */var PENDING="PENDING";/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */var DISABLED="DISABLED";/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */function _find(control,path,delimiter){if(path==null)return null;if(!(path instanceof Array)){path=/** @type {?} */path.split(delimiter)}if(path instanceof Array&&path.length===0)return null;return(/** @type {?} */path.reduce(/**
     * @param {?} v
     * @param {?} name
     * @return {?}
     */function(v,name){if(v instanceof FormGroup){return v.controls.hasOwnProperty(/** @type {?} */name)?v.controls[name]:null}if(v instanceof FormArray){return v.at(/** @type {?} */name)||null}return null},control))}/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */function coerceToValidator(validatorOrOpts){/** @type {?} */var validator=/** @type {?} */isOptionsObj(validatorOrOpts)?/** @type {?} */validatorOrOpts.validators:validatorOrOpts;return Array.isArray(validator)?composeValidators(validator):validator||null}/**
 * @param {?=} asyncValidator
 * @param {?=} validatorOrOpts
 * @return {?}
 */function coerceToAsyncValidator(asyncValidator,validatorOrOpts){/** @type {?} */var origAsyncValidator=/** @type {?} */isOptionsObj(validatorOrOpts)?/** @type {?} */validatorOrOpts.asyncValidators:asyncValidator;return Array.isArray(origAsyncValidator)?composeAsyncValidators(origAsyncValidator):origAsyncValidator||null}/**
 * Interface for options provided to an `AbstractControl`.
 *
 * \@publicApi
 * @record
 */function AbstractControlOptions(){}if(false){}/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */function isOptionsObj(validatorOrOpts){return validatorOrOpts!=null&&!Array.isArray(validatorOrOpts)&&typeof validatorOrOpts==="object"}/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * \@publicApi
 * @abstract
 */var AbstractControl=/*#__PURE__*/function(){/**
     * Initialize the AbstractControl instance.
     *
     * @param {?} validator The function that determines the synchronous validity of this control.
     * @param {?} asyncValidator The function that determines the asynchronous validity of this
     * control.
     */function AbstractControl(validator,asyncValidator){this.validator=validator;this.asyncValidator=asyncValidator;/**
         * \@internal
         */this._onCollectionChange=/**
         * @return {?}
         */function(){};/**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */this.pristine=true;/**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */this.touched=false;/**
         * \@internal
         */this._onDisabledChange=[]}/**
     * The parent control.
     * @return {?}
     */var _proto48=AbstractControl.prototype;/**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param {?} newValidator
     * @return {?}
     */_proto48.setValidators=function setValidators(newValidator){this.validator=coerceToValidator(newValidator)}/**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param {?} newValidator
     * @return {?}
     */;_proto48.setAsyncValidators=function setAsyncValidators(newValidator){this.asyncValidator=coerceToAsyncValidator(newValidator)}/**
     * Empties out the sync validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */;_proto48.clearValidators=function clearValidators(){this.validator=null}/**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */;_proto48.clearAsyncValidators=function clearAsyncValidators(){this.asyncValidator=null}/**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */;_proto48.markAsTouched=function markAsTouched(opts){if(opts===void 0){opts={}}/** @type {?} */this.touched=true;if(this._parent&&!opts.onlySelf){this._parent.markAsTouched(opts)}}/**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     * @return {?}
     */;_proto48.markAllAsTouched=function markAllAsTouched(){this.markAsTouched({onlySelf:true});this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.markAllAsTouched()})}/**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */;_proto48.markAsUntouched=function markAsUntouched(opts){if(opts===void 0){opts={}}/** @type {?} */this.touched=false;this._pendingTouched=false;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.markAsUntouched({onlySelf:true})});if(this._parent&&!opts.onlySelf){this._parent._updateTouched(opts)}}/**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */;_proto48.markAsDirty=function markAsDirty(opts){if(opts===void 0){opts={}}/** @type {?} */this.pristine=false;if(this._parent&&!opts.onlySelf){this._parent.markAsDirty(opts)}}/**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
     *
     * @param {?=} opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * @return {?}
     */;_proto48.markAsPristine=function markAsPristine(opts){if(opts===void 0){opts={}}/** @type {?} */this.pristine=true;this._pendingDirty=false;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.markAsPristine({onlySelf:true})});if(this._parent&&!opts.onlySelf){this._parent._updatePristine(opts)}}/**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     * @return {?}
     */;_proto48.markAsPending=function markAsPending(opts){if(opts===void 0){opts={}}/** @type {?} */this.status=PENDING;if(opts.emitEvent!==false){/** @type {?} */this.statusChanges.emit(this.status)}if(this._parent&&!opts.onlySelf){this._parent.markAsPending(opts)}}/**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     * @return {?}
     */;_proto48.disable=function disable(opts){if(opts===void 0){opts={}}// If parent has been marked artificially dirty we don't want to re-calculate the
// parent's dirtiness based on the children.
/** @type {?} */var skipPristineCheck=this._parentMarkedDirty(opts.onlySelf);/** @type {?} */this.status=DISABLED;/** @type {?} */this.errors=null;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.disable(Object.assign({},opts,{onlySelf:true}))});this._updateValue();if(opts.emitEvent!==false){/** @type {?} */this.valueChanges.emit(this.value);/** @type {?} */this.statusChanges.emit(this.status)}this._updateAncestors(Object.assign({},opts,{skipPristineCheck:skipPristineCheck}));this._onDisabledChange.forEach(/**
         * @param {?} changeFn
         * @return {?}
         */function(changeFn){return changeFn(true)})}/**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     * @return {?}
     */;_proto48.enable=function enable(opts){if(opts===void 0){opts={}}// If parent has been marked artificially dirty we don't want to re-calculate the
// parent's dirtiness based on the children.
/** @type {?} */var skipPristineCheck=this._parentMarkedDirty(opts.onlySelf);/** @type {?} */this.status=VALID;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.enable(Object.assign({},opts,{onlySelf:true}))});this.updateValueAndValidity({onlySelf:true,emitEvent:opts.emitEvent});this._updateAncestors(Object.assign({},opts,{skipPristineCheck:skipPristineCheck}));this._onDisabledChange.forEach(/**
         * @param {?} changeFn
         * @return {?}
         */function(changeFn){return changeFn(false)})}/**
     * @private
     * @param {?} opts
     * @return {?}
     */;_proto48._updateAncestors=function _updateAncestors(opts){if(this._parent&&!opts.onlySelf){this._parent.updateValueAndValidity(opts);if(!opts.skipPristineCheck){this._parent._updatePristine()}this._parent._updateTouched()}}/**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */;_proto48.setParent=function setParent(parent){this._parent=parent}/**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param {?=} opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     * @return {?}
     */;_proto48.updateValueAndValidity=function updateValueAndValidity(opts){if(opts===void 0){opts={}}this._setInitialStatus();this._updateValue();if(this.enabled){this._cancelExistingSubscription();/** @type {?} */this.errors=this._runValidator();/** @type {?} */this.status=this._calculateStatus();if(this.status===VALID||this.status===PENDING){this._runAsyncValidator(opts.emitEvent)}}if(opts.emitEvent!==false){/** @type {?} */this.valueChanges.emit(this.value);/** @type {?} */this.statusChanges.emit(this.status)}if(this._parent&&!opts.onlySelf){this._parent.updateValueAndValidity(opts)}}/**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */;_proto48._updateTreeValidity=function _updateTreeValidity(opts){if(opts===void 0){opts={emitEvent:true}}this._forEachChild(/**
         * @param {?} ctrl
         * @return {?}
         */function(ctrl){return ctrl._updateTreeValidity(opts)});this.updateValueAndValidity({onlySelf:true,emitEvent:opts.emitEvent})}/**
     * @private
     * @return {?}
     */;_proto48._setInitialStatus=function _setInitialStatus(){/** @type {?} */this.status=this._allControlsDisabled()?DISABLED:VALID}/**
     * @private
     * @return {?}
     */;_proto48._runValidator=function _runValidator(){return this.validator?this.validator(this):null}/**
     * @private
     * @param {?=} emitEvent
     * @return {?}
     */;_proto48._runAsyncValidator=function _runAsyncValidator(emitEvent){var _this45=this;if(this.asyncValidator){/** @type {?} */this.status=PENDING;/** @type {?} */var obs=toObservable(this.asyncValidator(this));this._asyncValidationSubscription=obs.subscribe(/**
                 * @param {?} errors
                 * @return {?}
                 */function(errors){return _this45.setErrors(errors,{emitEvent:emitEvent})})}}/**
     * @private
     * @return {?}
     */;_proto48._cancelExistingSubscription=function _cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe()}}/**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */;_proto48.setErrors=function setErrors(errors,opts){if(opts===void 0){opts={}}/** @type {?} */this.errors=errors;this._updateControlsErrors(opts.emitEvent!==false)}/**
     * Retrieves a child control given the control's name or path.
     *
     * \@usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */;_proto48.get=function get(path){return _find(this,path,".")}/**
     * \@description
     * Reports error data for the control with the given path.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} error data for that particular error. If the control or error is not present,
     * null is returned.
     */;_proto48.getError=function getError(errorCode,path){/** @type {?} */var control=path?this.get(path):this;return control&&control.errors?control.errors[errorCode]:null}/**
     * \@description
     * Reports whether the control with the given path has the error specified.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */;_proto48.hasError=function hasError(errorCode,path){return!!this.getError(errorCode,path)}/**
     * Retrieves the top-level ancestor of this control.
     * @return {?}
     */;/**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */_proto48._updateControlsErrors=function _updateControlsErrors(emitEvent){/** @type {?} */this.status=this._calculateStatus();if(emitEvent){/** @type {?} */this.statusChanges.emit(this.status)}if(this._parent){this._parent._updateControlsErrors(emitEvent)}}/**
     * \@internal
     * @return {?}
     */;_proto48._initObservables=function _initObservables(){/** @type {?} */this.valueChanges=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/** @type {?} */this.statusChanges=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]}/**
     * @private
     * @return {?}
     */;_proto48._calculateStatus=function _calculateStatus(){if(this._allControlsDisabled())return DISABLED;if(this.errors)return INVALID;if(this._anyControlsHaveStatus(PENDING))return PENDING;if(this._anyControlsHaveStatus(INVALID))return INVALID;return VALID}/**
     * \@internal
     * @param {?} status
     * @return {?}
     */;_proto48._anyControlsHaveStatus=function _anyControlsHaveStatus(status){return this._anyControls(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.status===status})}/**
     * \@internal
     * @return {?}
     */;_proto48._anyControlsDirty=function _anyControlsDirty(){return this._anyControls(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.dirty})}/**
     * \@internal
     * @return {?}
     */;_proto48._anyControlsTouched=function _anyControlsTouched(){return this._anyControls(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.touched})}/**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */;_proto48._updatePristine=function _updatePristine(opts){if(opts===void 0){opts={}}/** @type {?} */this.pristine=!this._anyControlsDirty();if(this._parent&&!opts.onlySelf){this._parent._updatePristine(opts)}}/**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */;_proto48._updateTouched=function _updateTouched(opts){if(opts===void 0){opts={}}/** @type {?} */this.touched=this._anyControlsTouched();if(this._parent&&!opts.onlySelf){this._parent._updateTouched(opts)}}/**
     * \@internal
     * @param {?} formState
     * @return {?}
     */;_proto48._isBoxedValue=function _isBoxedValue(formState){return typeof formState==="object"&&formState!==null&&Object.keys(formState).length===2&&"value"in formState&&"disabled"in formState}/**
     * \@internal
     * @param {?} fn
     * @return {?}
     */;_proto48._registerOnCollectionChange=function _registerOnCollectionChange(fn){this._onCollectionChange=fn}/**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */;_proto48._setUpdateStrategy=function _setUpdateStrategy(opts){if(isOptionsObj(opts)&&/** @type {?} */opts.updateOn!=null){this._updateOn=/** @type {?} */ /** @type {?} */opts.updateOn}}/**
     * Check to see if parent has been marked artificially dirty.
     *
     * \@internal
     * @private
     * @param {?=} onlySelf
     * @return {?}
     */;_proto48._parentMarkedDirty=function _parentMarkedDirty(onlySelf){/** @type {?} */var parentDirty=this._parent&&this._parent.dirty;return!onlySelf&&parentDirty&&!this._parent._anyControlsDirty()};_createClass(AbstractControl,[{key:"parent",get:function get(){return this._parent}/**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has passed all of its validation tests,
     * false otherwise.
     */},{key:"valid",get:function get(){return this.status===VALID}/**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control has failed one or more of its validation checks,
     * false otherwise.
     */},{key:"invalid",get:function get(){return this.status===INVALID}/**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control is in the process of conducting a validation check,
     * false otherwise.
     */},{key:"pending",get:function get(){return this.status==PENDING}/**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control is disabled, false otherwise.
     */},{key:"disabled",get:function get(){return this.status===DISABLED}/**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     */},{key:"enabled",get:function get(){return this.status!==DISABLED}/**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */},{key:"dirty",get:function get(){return!this.pristine}/**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     * @return {?}
     */},{key:"untouched",get:function get(){return!this.touched}/**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     * @return {?}
     */},{key:"updateOn",get:function get(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}},{key:"root",get:function get(){/** @type {?} */var x=this;while(x._parent){x=x._parent}return x}}]);return AbstractControl}();if(false){}/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * \@publicApi
 */var FormControl=/*#__PURE__*/function(_AbstractControl){_inheritsLoose(FormControl,_AbstractControl);/**
     * Creates a new `FormControl` instance.
     *
     * @param {?=} formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */function FormControl(formState,validatorOrOpts,asyncValidator){var _this46;if(formState===void 0){formState=null}_this46=_AbstractControl.call(this,coerceToValidator(validatorOrOpts),coerceToAsyncValidator(asyncValidator,validatorOrOpts))||this;/**
         * \@internal
         */_this46._onChange=[];_this46._applyFormState(formState);_this46._setUpdateStrategy(validatorOrOpts);_this46.updateValueAndValidity({onlySelf:true,emitEvent:false});_this46._initObservables();return _this46}/**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     * @return {?}
     */var _proto49=FormControl.prototype;_proto49.setValue=function setValue(value,options){var _this47=this;if(options===void 0){options={}}/** @type {?} */this.value=this._pendingValue=value;if(this._onChange.length&&options.emitModelToViewChange!==false){this._onChange.forEach(/**
             * @param {?} changeFn
             * @return {?}
             */function(changeFn){return changeFn(_this47.value,options.emitViewToModelChange!==false)})}this.updateValueAndValidity(options)}/**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */;_proto49.patchValue=function patchValue(value,options){if(options===void 0){options={}}this.setValue(value,options)}/**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */;_proto49.reset=function reset(formState,options){if(formState===void 0){formState=null}if(options===void 0){options={}}this._applyFormState(formState);this.markAsPristine(options);this.markAsUntouched(options);this.setValue(this.value,options);this._pendingChange=false}/**
     * \@internal
     * @return {?}
     */;_proto49._updateValue=function _updateValue(){}/**
     * \@internal
     * @param {?} condition
     * @return {?}
     */;_proto49._anyControls=function _anyControls(condition){return false}/**
     * \@internal
     * @return {?}
     */;_proto49._allControlsDisabled=function _allControlsDisabled(){return this.disabled}/**
     * Register a listener for change events.
     *
     * @param {?} fn The method that is called when the value changes
     * @return {?}
     */;_proto49.registerOnChange=function registerOnChange(fn){this._onChange.push(fn)}/**
     * \@internal
     * @return {?}
     */;_proto49._clearChangeFns=function _clearChangeFns(){this._onChange=[];this._onDisabledChange=[];this._onCollectionChange=/**
         * @return {?}
         */function(){}}/**
     * Register a listener for disabled events.
     *
     * @param {?} fn The method that is called when the disabled status changes.
     * @return {?}
     */;_proto49.registerOnDisabledChange=function registerOnDisabledChange(fn){this._onDisabledChange.push(fn)}/**
     * \@internal
     * @param {?} cb
     * @return {?}
     */;_proto49._forEachChild=function _forEachChild(cb){}/**
     * \@internal
     * @return {?}
     */;_proto49._syncPendingControls=function _syncPendingControls(){if(this.updateOn==="submit"){if(this._pendingDirty)this.markAsDirty();if(this._pendingTouched)this.markAsTouched();if(this._pendingChange){this.setValue(this._pendingValue,{onlySelf:true,emitModelToViewChange:false});return true}}return false}/**
     * @private
     * @param {?} formState
     * @return {?}
     */;_proto49._applyFormState=function _applyFormState(formState){if(this._isBoxedValue(formState)){/** @type {?} */this.value=this._pendingValue=formState.value;formState.disabled?this.disable({onlySelf:true,emitEvent:false}):this.enable({onlySelf:true,emitEvent:false})}else{/** @type {?} */this.value=this._pendingValue=formState}};return FormControl}(AbstractControl);if(false){}/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * \@usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * \@publicApi
 */var FormGroup=/*#__PURE__*/function(_AbstractControl2){_inheritsLoose(FormGroup,_AbstractControl2);/**
     * Creates a new `FormGroup` instance.
     *
     * @param {?} controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */function FormGroup(controls,validatorOrOpts,asyncValidator){var _this48;_this48=_AbstractControl2.call(this,coerceToValidator(validatorOrOpts),coerceToAsyncValidator(asyncValidator,validatorOrOpts))||this;_this48.controls=controls;_this48._initObservables();_this48._setUpdateStrategy(validatorOrOpts);_this48._setUpControls();_this48.updateValueAndValidity({onlySelf:true,emitEvent:false});return _this48}/**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {\@link FormGroup#addControl addControl} instead.
     *
     * @param {?} name The control name to register in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */var _proto50=FormGroup.prototype;_proto50.registerControl=function registerControl(name,control){if(this.controls[name])return this.controls[name];this.controls[name]=control;control.setParent(this);control._registerOnCollectionChange(this._onCollectionChange);return control}/**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */;_proto50.addControl=function addControl(name,control){this.registerControl(name,control);this.updateValueAndValidity();this._onCollectionChange()}/**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */;_proto50.removeControl=function removeControl(name){if(this.controls[name])this.controls[name]._registerOnCollectionChange(/**
             * @return {?}
             */function(){});delete this.controls[name];this.updateValueAndValidity();this._onCollectionChange()}/**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */;_proto50.setControl=function setControl(name,control){if(this.controls[name])this.controls[name]._registerOnCollectionChange(/**
             * @return {?}
             */function(){});delete this.controls[name];if(control)this.registerControl(name,control);this.updateValueAndValidity();this._onCollectionChange()}/**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {\@link AbstractControl#get get} instead.
     *
     * @param {?} controlName The control name to check for existence in the collection
     *
     * @return {?} false for disabled controls, true otherwise.
     */;_proto50.contains=function contains(controlName){return this.controls.hasOwnProperty(controlName)&&this.controls[controlName].enabled}/**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * \@usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param {?} value The new value for the control that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * @return {?}
     */;_proto50.setValue=function setValue(value,options){var _this49=this;if(options===void 0){options={}}this._checkAllValuesPresent(value);Object.keys(value).forEach(/**
         * @param {?} name
         * @return {?}
         */function(name){_this49._throwIfControlMissing(name);_this49.controls[name].setValue(value[name],{onlySelf:true,emitEvent:options.emitEvent})});this.updateValueAndValidity(options)}/**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * \@usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param {?} value The object that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */;_proto50.patchValue=function patchValue(value,options){var _this50=this;if(options===void 0){options={}}Object.keys(value).forEach(/**
         * @param {?} name
         * @return {?}
         */function(name){if(_this50.controls[name]){_this50.controls[name].patchValue(value[name],{onlySelf:true,emitEvent:options.emitEvent})}});this.updateValueAndValidity(options)}/**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */;_proto50.reset=function reset(value,options){if(value===void 0){value={}}if(options===void 0){options={}}this._forEachChild(/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(control,name){control.reset(value[name],{onlySelf:true,emitEvent:options.emitEvent})});this._updatePristine(options);this._updateTouched(options);this.updateValueAndValidity(options)}/**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     * @return {?}
     */;_proto50.getRawValue=function getRawValue(){return this._reduceChildren({},/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(acc,control,name){acc[name]=control instanceof FormControl?control.value:/** @type {?} */control.getRawValue();return acc})}/**
     * \@internal
     * @return {?}
     */;_proto50._syncPendingControls=function _syncPendingControls(){/** @type {?} */var subtreeUpdated=this._reduceChildren(false,/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */function(updated,child){return child._syncPendingControls()?true:updated});if(subtreeUpdated)this.updateValueAndValidity({onlySelf:true});return subtreeUpdated}/**
     * \@internal
     * @param {?} name
     * @return {?}
     */;_proto50._throwIfControlMissing=function _throwIfControlMissing(name){if(!Object.keys(this.controls).length){throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ")}if(!this.controls[name]){throw new Error("Cannot find form control with name: "+name+".")}}/**
     * \@internal
     * @param {?} cb
     * @return {?}
     */;_proto50._forEachChild=function _forEachChild(cb){var _this51=this;Object.keys(this.controls).forEach(/**
         * @param {?} k
         * @return {?}
         */function(k){return cb(_this51.controls[k],k)})}/**
     * \@internal
     * @return {?}
     */;_proto50._setUpControls=function _setUpControls(){var _this52=this;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.setParent(_this52);control._registerOnCollectionChange(_this52._onCollectionChange)})}/**
     * \@internal
     * @return {?}
     */;_proto50._updateValue=function _updateValue(){/** @type {?} */this.value=this._reduceValue()}/**
     * \@internal
     * @param {?} condition
     * @return {?}
     */;_proto50._anyControls=function _anyControls(condition){var _this53=this;/** @type {?} */var res=false;this._forEachChild(/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(control,name){res=res||_this53.contains(name)&&condition(control)});return res}/**
     * \@internal
     * @return {?}
     */;_proto50._reduceValue=function _reduceValue(){var _this54=this;return this._reduceChildren({},/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(acc,control,name){if(control.enabled||_this54.disabled){acc[name]=control.value}return acc})}/**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */;_proto50._reduceChildren=function _reduceChildren(initValue,fn){/** @type {?} */var res=initValue;this._forEachChild(/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(control,name){res=fn(res,control,name)});return res}/**
     * \@internal
     * @return {?}
     */;_proto50._allControlsDisabled=function _allControlsDisabled(){for(var _i4=0,_Object$keys=Object.keys(this.controls);_i4<_Object$keys.length;_i4++){var controlName=_Object$keys[_i4];if(this.controls[controlName].enabled){return false}}return Object.keys(this.controls).length>0||this.disabled}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto50._checkAllValuesPresent=function _checkAllValuesPresent(value){this._forEachChild(/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(control,name){if(value[name]===undefined){throw new Error("Must supply a value for form control with name: '"+name+"'.")}})};return FormGroup}(AbstractControl);if(false){}/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * \@usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * \@publicApi
 */var FormArray=/*#__PURE__*/function(_AbstractControl3){_inheritsLoose(FormArray,_AbstractControl3);/**
     * Creates a new `FormArray` instance.
     *
     * @param {?} controls An array of child controls. Each child control is given an index
     * where it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */function FormArray(controls,validatorOrOpts,asyncValidator){var _this55;_this55=_AbstractControl3.call(this,coerceToValidator(validatorOrOpts),coerceToAsyncValidator(asyncValidator,validatorOrOpts))||this;_this55.controls=controls;_this55._initObservables();_this55._setUpdateStrategy(validatorOrOpts);_this55._setUpControls();_this55.updateValueAndValidity({onlySelf:true,emitEvent:false});return _this55}/**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to retrieve the control
     * @return {?}
     */var _proto51=FormArray.prototype;_proto51.at=function at(index){return this.controls[index]}/**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param {?} control Form control to be inserted
     * @return {?}
     */;_proto51.push=function push(control){this.controls.push(control);this._registerControl(control);this.updateValueAndValidity();this._onCollectionChange()}/**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to insert the control
     * @param {?} control Form control to be inserted
     * @return {?}
     */;_proto51.insert=function insert(index,control){this.controls.splice(index,0,control);this._registerControl(control);this.updateValueAndValidity()}/**
     * Remove the control at the given `index` in the array.
     *
     * @param {?} index Index in the array to remove the control
     * @return {?}
     */;_proto51.removeAt=function removeAt(index){if(this.controls[index])this.controls[index]._registerOnCollectionChange(/**
             * @return {?}
             */function(){});this.controls.splice(index,1);this.updateValueAndValidity()}/**
     * Replace an existing control.
     *
     * @param {?} index Index in the array to replace the control
     * @param {?} control The `AbstractControl` control to replace the existing control
     * @return {?}
     */;_proto51.setControl=function setControl(index,control){if(this.controls[index])this.controls[index]._registerOnCollectionChange(/**
             * @return {?}
             */function(){});this.controls.splice(index,1);if(control){this.controls.splice(index,0,control);this._registerControl(control)}this.updateValueAndValidity();this._onCollectionChange()}/**
     * Length of the control array.
     * @return {?}
     */;/**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * \@usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param {?} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */_proto51.setValue=function setValue(value,options){var _this56=this;if(options===void 0){options={}}this._checkAllValuesPresent(value);value.forEach(/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */function(newValue,index){_this56._throwIfControlMissing(index);_this56.at(index).setValue(newValue,{onlySelf:true,emitEvent:options.emitEvent})});this.updateValueAndValidity(options)}/**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * \@usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param {?} value Array of latest values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */;_proto51.patchValue=function patchValue(value,options){var _this57=this;if(options===void 0){options={}}value.forEach(/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */function(newValue,index){if(_this57.at(index)){_this57.at(index).patchValue(newValue,{onlySelf:true,emitEvent:options.emitEvent})}});this.updateValueAndValidity(options)}/**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * \@usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param {?=} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */;_proto51.reset=function reset(value,options){if(value===void 0){value=[]}if(options===void 0){options={}}this._forEachChild(/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */function(control,index){control.reset(value[index],{onlySelf:true,emitEvent:options.emitEvent})});this._updatePristine(options);this._updateTouched(options);this.updateValueAndValidity(options)}/**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     * @return {?}
     */;_proto51.getRawValue=function getRawValue(){return this.controls.map(/**
         * @param {?} control
         * @return {?}
         */function(control){return control instanceof FormControl?control.value:/** @type {?} */control.getRawValue()})}/**
     * Remove all controls in the `FormArray`.
     *
     * \@usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     * @return {?}
     */;_proto51.clear=function clear(){if(this.controls.length<1)return;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){return control._registerOnCollectionChange(/**
         * @return {?}
         */function(){})});this.controls.splice(0);this.updateValueAndValidity()}/**
     * \@internal
     * @return {?}
     */;_proto51._syncPendingControls=function _syncPendingControls(){/** @type {?} */var subtreeUpdated=this.controls.reduce(/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */function(updated,child){return child._syncPendingControls()?true:updated},false);if(subtreeUpdated)this.updateValueAndValidity({onlySelf:true});return subtreeUpdated}/**
     * \@internal
     * @param {?} index
     * @return {?}
     */;_proto51._throwIfControlMissing=function _throwIfControlMissing(index){if(!this.controls.length){throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ")}if(!this.at(index)){throw new Error("Cannot find form control at index "+index)}}/**
     * \@internal
     * @param {?} cb
     * @return {?}
     */;_proto51._forEachChild=function _forEachChild(cb){this.controls.forEach(/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */function(control,index){cb(control,index)})}/**
     * \@internal
     * @return {?}
     */;_proto51._updateValue=function _updateValue(){var _this58=this;/** @type {?} */this.value=this.controls.filter(/**
             * @param {?} control
             * @return {?}
             */function(control){return control.enabled||_this58.disabled}).map(/**
             * @param {?} control
             * @return {?}
             */function(control){return control.value})}/**
     * \@internal
     * @param {?} condition
     * @return {?}
     */;_proto51._anyControls=function _anyControls(condition){return this.controls.some(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.enabled&&condition(control)})}/**
     * \@internal
     * @return {?}
     */;_proto51._setUpControls=function _setUpControls(){var _this59=this;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){return _this59._registerControl(control)})}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto51._checkAllValuesPresent=function _checkAllValuesPresent(value){this._forEachChild(/**
         * @param {?} control
         * @param {?} i
         * @return {?}
         */function(control,i){if(value[i]===undefined){throw new Error("Must supply a value for form control at index: "+i+".")}})}/**
     * \@internal
     * @return {?}
     */;_proto51._allControlsDisabled=function _allControlsDisabled(){for(var _iterator=this.controls,_isArray=Array.isArray(_iterator),_i5=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref2;if(_isArray){if(_i5>=_iterator.length)break;_ref2=_iterator[_i5++]}else{_i5=_iterator.next();if(_i5.done)break;_ref2=_i5.value}var control=_ref2;if(control.enabled)return false}return this.controls.length>0||this.disabled}/**
     * @private
     * @param {?} control
     * @return {?}
     */;_proto51._registerControl=function _registerControl(control){control.setParent(this);control._registerOnCollectionChange(this._onCollectionChange)};_createClass(FormArray,[{key:"length",get:function get(){return this.controls.length}}]);return FormArray}(AbstractControl);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formDirectiveProvider={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return NgForm})};var ɵ0=/**
 * @return {?}
 */function ɵ0(){return Promise.resolve(null)};/** @type {?} */var resolvedPromise=ɵ0();/**
 * \@description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * \@usageNotes
 *
 * ### Migrating from deprecated ngForm selector
 *
 * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
 * in Angular v9.
 *
 * This has been deprecated to keep selectors consistent with other core Angular selectors,
 * as element selectors are typically written in kebab-case.
 *
 * Now deprecated:
 * ```html
 * <ngForm #myForm="ngForm">
 * ```
 *
 * After:
 * ```html
 * <ng-form #myForm="ngForm">
 * ```
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * \@ngModule FormsModule
 * \@publicApi
 */var NgForm=/*#__PURE__*/function(_ControlContainer){_inheritsLoose(NgForm,_ControlContainer);/**
     * @param {?} validators
     * @param {?} asyncValidators
     */function NgForm(validators,asyncValidators){var _this60;_this60=_ControlContainer.call(this)||this;/**
         * \@description
         * Returns whether the form submission has been triggered.
         */_this60.submitted=false;_this60._directives=[];/**
         * \@description
         * Event emitter for the "ngSubmit" event
         */_this60.ngSubmit=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];_this60.form=new FormGroup({},composeValidators(validators),composeAsyncValidators(asyncValidators));return _this60}/**
     * \@description
     * Lifecycle method called after the view is initialized. For internal use only.
     * @return {?}
     */var _proto52=NgForm.prototype;_proto52.ngAfterViewInit=function ngAfterViewInit(){this._setUpdateStrategy()}/**
     * \@description
     * The directive instance.
     * @return {?}
     */;/**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */_proto52.addControl=function addControl(dir){var _this61=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var container=_this61._findContainer(dir.path);/** @type {?} */dir.control=/** @type {?} */container.registerControl(dir.name,dir.control);setUpControl(dir.control,dir);dir.control.updateValueAndValidity({emitEvent:false});_this61._directives.push(dir)})}/**
     * \@description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */;_proto52.getControl=function getControl(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * \@description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */;_proto52.removeControl=function removeControl(dir){var _this62=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var container=_this62._findContainer(dir.path);if(container){container.removeControl(dir.name)}removeDir(_this62._directives,dir)})}/**
     * \@description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */;_proto52.addFormGroup=function addFormGroup(dir){var _this63=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var container=_this63._findContainer(dir.path);/** @type {?} */var group=new FormGroup({});setUpFormContainer(group,dir);container.registerControl(dir.name,group);group.updateValueAndValidity({emitEvent:false})})}/**
     * \@description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */;_proto52.removeFormGroup=function removeFormGroup(dir){var _this64=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var container=_this64._findContainer(dir.path);if(container){container.removeControl(dir.name)}})}/**
     * \@description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */;_proto52.getFormGroup=function getFormGroup(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param {?} dir The `NgControl` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */;_proto52.updateModel=function updateModel(dir,value){var _this65=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var ctrl=/** @type {?} */_this65.form.get(/** @type {?} */dir.path);ctrl.setValue(value)})}/**
     * \@description
     * Sets the value for this `FormGroup`.
     *
     * @param {?} value The new value
     * @return {?}
     */;_proto52.setValue=function setValue(value){this.control.setValue(value)}/**
     * \@description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param {?} $event The "submit" event object
     * @return {?}
     */;_proto52.onSubmit=function onSubmit($event){/** @type {?} */this.submitted=true;syncPendingControls(this.form,this._directives);this.ngSubmit.emit($event);return false}/**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */;_proto52.onReset=function onReset(){this.resetForm()}/**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */;_proto52.resetForm=function resetForm(value){if(value===void 0){value=undefined}this.form.reset(value);/** @type {?} */this.submitted=false}/**
     * @private
     * @return {?}
     */;_proto52._setUpdateStrategy=function _setUpdateStrategy(){if(this.options&&this.options.updateOn!=null){this.form._updateOn=this.options.updateOn}}/**
     * \@internal
     * @param {?} path
     * @return {?}
     */;_proto52._findContainer=function _findContainer(path){path.pop();return path.length?/** @type {?} */this.form.get(path):this.form};_createClass(NgForm,[{key:"formDirective",get:function get(){return this}/**
     * \@description
     * The internal `FormGroup` instance.
     * @return {?}
     */},{key:"control",get:function get(){return this.form}/**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     * @return {?}
     */},{key:"path",get:function get(){return[]}/**
     * \@description
     * Returns a map of the controls in this group.
     * @return {?}
     */},{key:"controls",get:function get(){return this.form.controls}}]);return NgForm}(ControlContainer);NgForm.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]",providers:[formDirectiveProvider],host:{"(submit)":"onSubmit($event)","(reset)":"onReset()"},outputs:["ngSubmit"],exportAs:"ngForm"}]}];/** @nocollapse */NgForm.ctorParameters=function(){return[{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};NgForm.propDecorators={options:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngFormOptions"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TemplateDrivenErrors=/*#__PURE__*/function(){function TemplateDrivenErrors(){}/**
     * @return {?}
     */TemplateDrivenErrors.modelParentException=function modelParentException(){throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      "+FormErrorExamples.formControlName+"\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      "+FormErrorExamples.ngModelWithFormGroup)}/**
     * @return {?}
     */;TemplateDrivenErrors.formGroupNameException=function formGroupNameException(){throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      "+FormErrorExamples.formGroupName+"\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      "+FormErrorExamples.ngModelGroup)}/**
     * @return {?}
     */;TemplateDrivenErrors.missingNameException=function missingNameException(){throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">")}/**
     * @return {?}
     */;TemplateDrivenErrors.modelGroupParentException=function modelGroupParentException(){throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      "+FormErrorExamples.formGroupName+"\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      "+FormErrorExamples.ngModelGroup)}/**
     * @return {?}
     */;TemplateDrivenErrors.ngFormWarning=function ngFormWarning(){console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ")};return TemplateDrivenErrors}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
 * @type {?}
 */var NG_FORM_SELECTOR_WARNING=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgFormSelectorWarning");/**
 * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
 *
 * @deprecated in Angular v6 and will be removed in Angular v9.
 * \@ngModule FormsModule
 * \@publicApi
 */var NgFormSelectorWarning=/**
     * @param {?} ngFormWarning
     */function NgFormSelectorWarning(ngFormWarning){if((!ngFormWarning||ngFormWarning==="once")&&!NgFormSelectorWarning._ngFormWarning||ngFormWarning==="always"){TemplateDrivenErrors.ngFormWarning();NgFormSelectorWarning._ngFormWarning=true}};/**
 * Static property used to track whether the deprecation warning for this selector has been sent.
 * Used to support warning config of "once".
 *
 * \@internal
 */NgFormSelectorWarning._ngFormWarning=false;NgFormSelectorWarning.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"ngForm"}]}];/** @nocollapse */NgFormSelectorWarning.ctorParameters=function(){return[{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_FORM_SELECTOR_WARNING]}]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * \@publicApi
 */var AbstractFormGroupDirective=/*#__PURE__*/function(_ControlContainer2){_inheritsLoose(AbstractFormGroupDirective,_ControlContainer2);function AbstractFormGroupDirective(){return _ControlContainer2.apply(this,arguments)||this}var _proto53=AbstractFormGroupDirective.prototype;/**
     * \@description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     * @return {?}
     */_proto53.ngOnInit=function ngOnInit(){this._checkParentType();/** @type {?} */this.formDirective.addFormGroup(this)}/**
     * \@description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     * @return {?}
     */;_proto53.ngOnDestroy=function ngOnDestroy(){if(this.formDirective){this.formDirective.removeFormGroup(this)}}/**
     * \@description
     * The `FormGroup` bound to this directive.
     * @return {?}
     */;/**
     * \@internal
     * @return {?}
     */_proto53._checkParentType=function _checkParentType(){};_createClass(AbstractFormGroupDirective,[{key:"control",get:function get(){return(/** @type {?} */this.formDirective.getFormGroup(this))}/**
     * \@description
     * The path to this group from the top-level directive.
     * @return {?}
     */},{key:"path",get:function get(){return controlPath(this.name,this._parent)}/**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */},{key:"formDirective",get:function get(){return this._parent?this._parent.formDirective:null}/**
     * \@description
     * The synchronous validators registered with this group.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._validators)}/**
     * \@description
     * The async validators registered with this group.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return composeAsyncValidators(this._asyncValidators)}}]);return AbstractFormGroupDirective}(ControlContainer);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var modelGroupProvider={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return NgModelGroup})};/**
 * \@description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * \@usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * \@ngModule FormsModule
 * \@publicApi
 */var NgModelGroup=/*#__PURE__*/function(_AbstractFormGroupDir){_inheritsLoose(NgModelGroup,_AbstractFormGroupDir);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */function NgModelGroup(parent,validators,asyncValidators){var _this66;_this66=_AbstractFormGroupDir.call(this)||this;_this66._parent=parent;_this66._validators=validators;_this66._asyncValidators=asyncValidators;return _this66}/**
     * \@internal
     * @return {?}
     */var _proto54=NgModelGroup.prototype;_proto54._checkParentType=function _checkParentType(){if(!(this._parent instanceof NgModelGroup)&&!(this._parent instanceof NgForm)){TemplateDrivenErrors.modelGroupParentException()}};return NgModelGroup}(AbstractFormGroupDirective);NgModelGroup.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[ngModelGroup]",providers:[modelGroupProvider],exportAs:"ngModelGroup"}]}];/** @nocollapse */NgModelGroup.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};NgModelGroup.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModelGroup"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formControlBinding={provide:NgControl,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return NgModel})};var ɵ0$1=/**
 * @return {?}
 */function ɵ0$1(){return Promise.resolve(null)};/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 * @type {?}
 */var resolvedPromise$1=ɵ0$1();/**
 * \@description
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
 * You then access the control using the directive's `control` property,
 * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
 * See a full list of properties directly available in `AbstractControlDirective`.
 *
 * @see `RadioControlValueAccessor`
 * @see `SelectControlValueAccessor`
 *
 * \@usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel name attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. The name attribute is used
 * within a custom form component, and the name `\@Input` property serves a different purpose.
 *
 * ```html
 * <form>
 *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-person-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * \@ngModule FormsModule
 * \@publicApi
 */var NgModel=/*#__PURE__*/function(_NgControl){_inheritsLoose(NgModel,_NgControl);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */function NgModel(parent,validators,asyncValidators,valueAccessors){var _this67;_this67=_NgControl.call(this)||this;_this67.control=new FormControl;/**
         * \@internal
         */_this67._registered=false;/**
         * \@description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */_this67.update=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];_this67._parent=parent;_this67._rawValidators=validators||[];_this67._rawAsyncValidators=asyncValidators||[];_this67.valueAccessor=selectValueAccessor(_assertThisInitialized(_this67),valueAccessors);return _this67}/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */var _proto55=NgModel.prototype;_proto55.ngOnChanges=function ngOnChanges(changes){this._checkForErrors();if(!this._registered)this._setUpControl();if("isDisabled"in changes){this._updateDisabled(changes)}if(isPropertyUpdated(changes,this.viewModel)){this._updateValue(this.model);this.viewModel=this.model}}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal
     * use only.
     * @return {?}
     */;_proto55.ngOnDestroy=function ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */;/**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value emitted by `ngModelChange`.
     * @return {?}
     */_proto55.viewToModelUpdate=function viewToModelUpdate(newValue){this.viewModel=newValue;this.update.emit(newValue)}/**
     * @private
     * @return {?}
     */;_proto55._setUpControl=function _setUpControl(){this._setUpdateStrategy();this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this);this._registered=true}/**
     * @private
     * @return {?}
     */;_proto55._setUpdateStrategy=function _setUpdateStrategy(){if(this.options&&this.options.updateOn!=null){this.control._updateOn=this.options.updateOn}}/**
     * @private
     * @return {?}
     */;_proto55._isStandalone=function _isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}/**
     * @private
     * @return {?}
     */;_proto55._setUpStandalone=function _setUpStandalone(){setUpControl(this.control,this);this.control.updateValueAndValidity({emitEvent:false})}/**
     * @private
     * @return {?}
     */;_proto55._checkForErrors=function _checkForErrors(){if(!this._isStandalone()){this._checkParentType()}this._checkName()}/**
     * @private
     * @return {?}
     */;_proto55._checkParentType=function _checkParentType(){if(!(this._parent instanceof NgModelGroup)&&this._parent instanceof AbstractFormGroupDirective){TemplateDrivenErrors.formGroupNameException()}else if(!(this._parent instanceof NgModelGroup)&&!(this._parent instanceof NgForm)){TemplateDrivenErrors.modelParentException()}}/**
     * @private
     * @return {?}
     */;_proto55._checkName=function _checkName(){if(this.options&&this.options.name)this.name=this.options.name;if(!this._isStandalone()&&!this.name){TemplateDrivenErrors.missingNameException()}}/**
     * @private
     * @param {?} value
     * @return {?}
     */;_proto55._updateValue=function _updateValue(value){var _this68=this;resolvedPromise$1.then(/**
         * @return {?}
         */function(){_this68.control.setValue(value,{emitViewToModelChange:false})})}/**
     * @private
     * @param {?} changes
     * @return {?}
     */;_proto55._updateDisabled=function _updateDisabled(changes){var _this69=this;/** @type {?} */var disabledValue=changes["isDisabled"].currentValue;/** @type {?} */var isDisabled=disabledValue===""||disabledValue&&disabledValue!=="false";resolvedPromise$1.then(/**
         * @return {?}
         */function(){if(isDisabled&&!_this69.control.disabled){_this69.control.disable()}else if(!isDisabled&&_this69.control.disabled){_this69.control.enable()}})};_createClass(NgModel,[{key:"path",get:function get(){return this._parent?controlPath(this.name,this._parent):[this.name]}/**
     * \@description
     * The top-level directive for this control if present, otherwise null.
     * @return {?}
     */},{key:"formDirective",get:function get(){return this._parent?this._parent.formDirective:null}/**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._rawValidators)}/**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return composeAsyncValidators(this._rawAsyncValidators)}}]);return NgModel}(NgControl);NgModel.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[ngModel]:not([formControlName]):not([formControl])",providers:[formControlBinding],exportAs:"ngModel"}]}];/** @nocollapse */NgModel.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALUE_ACCESSOR]}]}]};NgModel.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["disabled"]}],model:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModel"]}],options:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModelOptions"]}],update:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],args:["ngModelChange"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@publicApi
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 */var ɵNgNoValidate=function ɵNgNoValidate(){};ɵNgNoValidate.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"form:not([ngNoForm]):not([ngNativeValidate])",host:{"novalidate":""}}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 * @type {?}
 */var NG_MODEL_WITH_FORM_CONTROL_WARNING=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgModelWithFormControlWarning");/** @type {?} */var formControlBinding$1={provide:NgControl,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormControlDirective})};/**
 * \@description
 * * Syncs a standalone `FormControl` instance to a form control element.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Registering a single form control
 *
 * The following examples shows how to register a standalone control and set its value.
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <input [formControl]="control" [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <input [formControl]="control">
 * ```
 *
 * ```ts
 * this.control.setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormControlDirective=/*#__PURE__*/function(_NgControl2){_inheritsLoose(FormControlDirective,_NgControl2);/**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     * @param {?} _ngModelWarningConfig
     */function FormControlDirective(validators,asyncValidators,valueAccessors,_ngModelWarningConfig){var _this70;_this70=_NgControl2.call(this)||this;_this70._ngModelWarningConfig=_ngModelWarningConfig;/**
         * @deprecated as of v6
         */_this70.update=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * \@internal
         */_this70._ngModelWarningSent=false;_this70._rawValidators=validators||[];_this70._rawAsyncValidators=asyncValidators||[];_this70.valueAccessor=selectValueAccessor(_assertThisInitialized(_this70),valueAccessors);return _this70}/**
     * \@description
     * Triggers a warning that this input should not be used with reactive forms.
     * @param {?} isDisabled
     * @return {?}
     */var _proto56=FormControlDirective.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto56.ngOnChanges=function ngOnChanges(changes){if(this._isControlChanged(changes)){setUpControl(this.form,this);if(this.control.disabled&&/** @type {?} */this.valueAccessor.setDisabledState){/** @type {?} */ /** @type {?} */this.valueAccessor.setDisabledState(true)}this.form.updateValueAndValidity({emitEvent:false})}if(isPropertyUpdated(changes,this.viewModel)){_ngModelWarning("formControl",FormControlDirective,this,this._ngModelWarningConfig);this.form.setValue(this.model);this.viewModel=this.model}}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */;/**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value for the view model.
     * @return {?}
     */_proto56.viewToModelUpdate=function viewToModelUpdate(newValue){this.viewModel=newValue;this.update.emit(newValue)}/**
     * @private
     * @param {?} changes
     * @return {?}
     */;_proto56._isControlChanged=function _isControlChanged(changes){return changes.hasOwnProperty("form")};_createClass(FormControlDirective,[{key:"isDisabled",set:function set(isDisabled){ReactiveErrors.disabledAttrWarning()}},{key:"path",get:function get(){return[]}/**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._rawValidators)}/**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return composeAsyncValidators(this._rawAsyncValidators)}/**
     * \@description
     * The `FormControl` bound to this directive.
     * @return {?}
     */},{key:"control",get:function get(){return this.form}}]);return FormControlDirective}(NgControl);/**
 * \@description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlDirective. Used to support warning config of "once".
 *
 * \@internal
 */FormControlDirective._ngModelWarningSentOnce=false;FormControlDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formControl]",providers:[formControlBinding$1],exportAs:"ngForm"}]}];/** @nocollapse */FormControlDirective.ctorParameters=function(){return[{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALUE_ACCESSOR]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_MODEL_WITH_FORM_CONTROL_WARNING]}]}]};FormControlDirective.propDecorators={form:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formControl"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["disabled"]}],model:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModel"]}],update:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],args:["ngModelChange"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formDirectiveProvider$1={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormGroupDirective})};/**
 * \@description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormGroupDirective=/*#__PURE__*/function(_ControlContainer3){_inheritsLoose(FormGroupDirective,_ControlContainer3);/**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */function FormGroupDirective(_validators,_asyncValidators){var _this71;_this71=_ControlContainer3.call(this)||this;_this71._validators=_validators;_this71._asyncValidators=_asyncValidators;/**
         * \@description
         * Reports whether the form submission has been triggered.
         */_this71.submitted=false;/**
         * \@description
         * Tracks the list of added `FormControlName` instances
         */_this71.directives=[];/**
         * \@description
         * Tracks the `FormGroup` bound to this directive.
         */_this71.form=/** @type {?} */null;/**
         * \@description
         * Emits an event when the form submission has been triggered.
         */_this71.ngSubmit=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];return _this71}/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */var _proto57=FormGroupDirective.prototype;_proto57.ngOnChanges=function ngOnChanges(changes){this._checkFormPresent();if(changes.hasOwnProperty("form")){this._updateValidators();this._updateDomValue();this._updateRegistrations()}}/**
     * \@description
     * Returns this directive's instance.
     * @return {?}
     */;/**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */_proto57.addControl=function addControl(dir){/** @type {?} */var ctrl=this.form.get(dir.path);setUpControl(ctrl,dir);ctrl.updateValueAndValidity({emitEvent:false});this.directives.push(dir);return ctrl}/**
     * \@description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */;_proto57.getControl=function getControl(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * \@description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */;_proto57.removeControl=function removeControl(dir){removeDir(this.directives,dir)}/**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */;_proto57.addFormGroup=function addFormGroup(dir){/** @type {?} */var ctrl=this.form.get(dir.path);setUpFormContainer(ctrl,dir);ctrl.updateValueAndValidity({emitEvent:false})}/**
     * No-op method to remove the form group.
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */;_proto57.removeFormGroup=function removeFormGroup(dir){}/**
     * \@description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */;_proto57.getFormGroup=function getFormGroup(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */;_proto57.addFormArray=function addFormArray(dir){/** @type {?} */var ctrl=this.form.get(dir.path);setUpFormContainer(ctrl,dir);ctrl.updateValueAndValidity({emitEvent:false})}/**
     * No-op method to remove the form array.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */;_proto57.removeFormArray=function removeFormArray(dir){}/**
     * \@description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */;_proto57.getFormArray=function getFormArray(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */;_proto57.updateModel=function updateModel(dir,value){/** @type {?} */var ctrl=/** @type {?} */this.form.get(dir.path);ctrl.setValue(value)}/**
     * \@description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param {?} $event The "submit" event object
     * @return {?}
     */;_proto57.onSubmit=function onSubmit($event){/** @type {?} */this.submitted=true;syncPendingControls(this.form,this.directives);this.ngSubmit.emit($event);return false}/**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */;_proto57.onReset=function onReset(){this.resetForm()}/**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */;_proto57.resetForm=function resetForm(value){if(value===void 0){value=undefined}this.form.reset(value);/** @type {?} */this.submitted=false}/**
     * \@internal
     * @return {?}
     */;_proto57._updateDomValue=function _updateDomValue(){var _this72=this;this.directives.forEach(/**
         * @param {?} dir
         * @return {?}
         */function(dir){/** @type {?} */var newCtrl=_this72.form.get(dir.path);if(dir.control!==newCtrl){cleanUpControl(dir.control,dir);if(newCtrl)setUpControl(newCtrl,dir);/** @type {?} */dir.control=newCtrl}});this.form._updateTreeValidity({emitEvent:false})}/**
     * @private
     * @return {?}
     */;_proto57._updateRegistrations=function _updateRegistrations(){var _this73=this;this.form._registerOnCollectionChange(/**
         * @return {?}
         */function(){return _this73._updateDomValue()});if(this._oldForm)this._oldForm._registerOnCollectionChange(/**
             * @return {?}
             */function(){});this._oldForm=this.form}/**
     * @private
     * @return {?}
     */;_proto57._updateValidators=function _updateValidators(){/** @type {?} */var sync=composeValidators(this._validators);this.form.validator=Validators.compose([/** @type {?} */this.form.validator,/** @type {?} */sync]);/** @type {?} */var async=composeAsyncValidators(this._asyncValidators);this.form.asyncValidator=Validators.composeAsync([/** @type {?} */this.form.asyncValidator,/** @type {?} */async])}/**
     * @private
     * @return {?}
     */;_proto57._checkFormPresent=function _checkFormPresent(){if(!this.form){ReactiveErrors.missingFormException()}};_createClass(FormGroupDirective,[{key:"formDirective",get:function get(){return this}/**
     * \@description
     * Returns the `FormGroup` bound to this directive.
     * @return {?}
     */},{key:"control",get:function get(){return this.form}/**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     * @return {?}
     */},{key:"path",get:function get(){return[]}}]);return FormGroupDirective}(ControlContainer);FormGroupDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formGroup]",providers:[formDirectiveProvider$1],host:{"(submit)":"onSubmit($event)","(reset)":"onReset()"},exportAs:"ngForm"}]}];/** @nocollapse */FormGroupDirective.ctorParameters=function(){return[{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};FormGroupDirective.propDecorators={form:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formGroup"]}],ngSubmit:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formGroupNameProvider={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormGroupName})};/**
 * \@description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * \@usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {\@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {\@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormGroupName=/*#__PURE__*/function(_AbstractFormGroupDir2){_inheritsLoose(FormGroupName,_AbstractFormGroupDir2);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */function FormGroupName(parent,validators,asyncValidators){var _this74;_this74=_AbstractFormGroupDir2.call(this)||this;_this74._parent=parent;_this74._validators=validators;_this74._asyncValidators=asyncValidators;return _this74}/**
     * \@internal
     * @return {?}
     */var _proto58=FormGroupName.prototype;_proto58._checkParentType=function _checkParentType(){if(_hasInvalidParent(this._parent)){ReactiveErrors.groupParentException()}};return FormGroupName}(AbstractFormGroupDirective);FormGroupName.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formGroupName]",providers:[formGroupNameProvider]}]}];/** @nocollapse */FormGroupName.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};FormGroupName.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formGroupName"]}]};if(false){}/** @type {?} */var formArrayNameProvider={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormArrayName})};/**
 * \@description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormArrayName=/*#__PURE__*/function(_ControlContainer4){_inheritsLoose(FormArrayName,_ControlContainer4);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */function FormArrayName(parent,validators,asyncValidators){var _this75;_this75=_ControlContainer4.call(this)||this;_this75._parent=parent;_this75._validators=validators;_this75._asyncValidators=asyncValidators;return _this75}/**
     * \@description
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     *
     * @throws If the directive does not have a valid parent.
     * @return {?}
     */var _proto59=FormArrayName.prototype;_proto59.ngOnInit=function ngOnInit(){this._checkParentType();/** @type {?} */this.formDirective.addFormArray(this)}/**
     * \@description
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto59.ngOnDestroy=function ngOnDestroy(){if(this.formDirective){this.formDirective.removeFormArray(this)}}/**
     * \@description
     * The `FormArray` bound to this directive.
     * @return {?}
     */;/**
     * @private
     * @return {?}
     */_proto59._checkParentType=function _checkParentType(){if(_hasInvalidParent(this._parent)){ReactiveErrors.arrayParentException()}};_createClass(FormArrayName,[{key:"control",get:function get(){return(/** @type {?} */this.formDirective.getFormArray(this))}/**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */},{key:"formDirective",get:function get(){return this._parent?/** @type {?} */this._parent.formDirective:null}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */},{key:"path",get:function get(){return controlPath(this.name,this._parent)}/**
     * \@description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._validators)}/**
     * \@description
     * Async validator function composed of all the async validators registered with this directive.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return composeAsyncValidators(this._asyncValidators)}}]);return FormArrayName}(ControlContainer);FormArrayName.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formArrayName]",providers:[formArrayNameProvider]}]}];/** @nocollapse */FormArrayName.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};FormArrayName.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formArrayName"]}]};if(false){}/**
 * @param {?} parent
 * @return {?}
 */function _hasInvalidParent(parent){return!(parent instanceof FormGroupName)&&!(parent instanceof FormGroupDirective)&&!(parent instanceof FormArrayName)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var controlNameBinding={provide:NgControl,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormControlName})};/**
 * \@description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first" [(ngModel)]="value">
 * </form>
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first">
 * </form>
 * ```
 *
 * ```ts
 * this.form.get('first').setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormControlName=/*#__PURE__*/function(_NgControl3){_inheritsLoose(FormControlName,_NgControl3);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     * @param {?} _ngModelWarningConfig
     */function FormControlName(parent,validators,asyncValidators,valueAccessors,_ngModelWarningConfig){var _this76;_this76=_NgControl3.call(this)||this;_this76._ngModelWarningConfig=_ngModelWarningConfig;_this76._added=false;/**
         * @deprecated as of v6
         */_this76.update=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * \@internal
         */_this76._ngModelWarningSent=false;_this76._parent=parent;_this76._rawValidators=validators||[];_this76._rawAsyncValidators=asyncValidators||[];_this76.valueAccessor=selectValueAccessor(_assertThisInitialized(_this76),valueAccessors);return _this76}/**
     * \@description
     * Triggers a warning that this input should not be used with reactive forms.
     * @param {?} isDisabled
     * @return {?}
     */var _proto60=FormControlName.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto60.ngOnChanges=function ngOnChanges(changes){if(!this._added)this._setUpControl();if(isPropertyUpdated(changes,this.viewModel)){_ngModelWarning("formControlName",FormControlName,this,this._ngModelWarningConfig);this.viewModel=this.model;this.formDirective.updateModel(this,this.model)}}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto60.ngOnDestroy=function ngOnDestroy(){if(this.formDirective){this.formDirective.removeControl(this)}}/**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value for the view model.
     * @return {?}
     */;_proto60.viewToModelUpdate=function viewToModelUpdate(newValue){this.viewModel=newValue;this.update.emit(newValue)}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */;/**
     * @private
     * @return {?}
     */_proto60._checkParentType=function _checkParentType(){if(!(this._parent instanceof FormGroupName)&&this._parent instanceof AbstractFormGroupDirective){ReactiveErrors.ngModelGroupException()}else if(!(this._parent instanceof FormGroupName)&&!(this._parent instanceof FormGroupDirective)&&!(this._parent instanceof FormArrayName)){ReactiveErrors.controlParentException()}}/**
     * @private
     * @return {?}
     */;_proto60._setUpControl=function _setUpControl(){this._checkParentType();/** @type {?} */this.control=this.formDirective.addControl(this);if(this.control.disabled&&/** @type {?} */this.valueAccessor.setDisabledState){/** @type {?} */ /** @type {?} */this.valueAccessor.setDisabledState(true)}this._added=true};_createClass(FormControlName,[{key:"isDisabled",set:function set(isDisabled){ReactiveErrors.disabledAttrWarning()}},{key:"path",get:function get(){return controlPath(this.name,/** @type {?} */this._parent)}/**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */},{key:"formDirective",get:function get(){return this._parent?this._parent.formDirective:null}/**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._rawValidators)}/**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return(/** @type {?} */composeAsyncValidators(this._rawAsyncValidators))}}]);return FormControlName}(NgControl);/**
 * \@description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlName. Used to support warning config of "once".
 *
 * \@internal
 */FormControlName._ngModelWarningSentOnce=false;FormControlName.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formControlName]",providers:[controlNameBinding]}]}];/** @nocollapse */FormControlName.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALUE_ACCESSOR]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_MODEL_WITH_FORM_CONTROL_WARNING]}]}]};FormControlName.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formControlName"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["disabled"]}],model:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModel"]}],update:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],args:["ngModelChange"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * An interface implemented by classes that perform synchronous validation.
 *
 * \@usageNotes
 *
 * ### Provide a custom validator
 *
 * The following example implements the `Validator` interface to create a
 * validator directive with a custom error key.
 *
 * ```typescript
 * \@Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors|null {
 *     return {'custom': true};
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */function Validator(){}if(false){}/**
 * \@description
 * An interface implemented by classes that perform asynchronous validation.
 *
 * \@usageNotes
 *
 * ### Provide a custom async validator directive
 *
 * The following example implements the `AsyncValidator` interface to create an
 * async validator directive with a custom error key.
 *
 * ```typescript
 * import { of as observableOf } from 'rxjs';
 *
 * \@Directive({
 *   selector: '[customAsyncValidator]',
 *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
 * true}]
 * })
 * class CustomAsyncValidatorDirective implements AsyncValidator {
 *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
 *     return observableOf({'custom': true});
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */function AsyncValidator(){}if(false){}/**
 * \@description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var REQUIRED_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return RequiredValidator}),multi:true};/**
 * \@description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var CHECKBOX_REQUIRED_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return CheckboxRequiredValidator}),multi:true};/**
 * \@description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var RequiredValidator=/*#__PURE__*/function(){function RequiredValidator(){}var _proto61=RequiredValidator.prototype;/**
     * \@description
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */_proto61.validate=function validate(control){return this.required?Validators.required(control):null}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto61.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn};_createClass(RequiredValidator,[{key:"required",/**
     * \@description
     * Tracks changes to the required attribute bound to this directive.
     * @return {?}
     */get:function get(){return this._required}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._required=value!=null&&value!==false&&""+value!=="false";if(this._onChange)this._onChange()}}]);return RequiredValidator}();RequiredValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",providers:[REQUIRED_VALIDATOR],host:{"[attr.required]":"required ? \"\" : null"}}]}];RequiredValidator.propDecorators={required:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@publicApi
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 */var CheckboxRequiredValidator=/*#__PURE__*/function(_RequiredValidator){_inheritsLoose(CheckboxRequiredValidator,_RequiredValidator);function CheckboxRequiredValidator(){return _RequiredValidator.apply(this,arguments)||this}var _proto62=CheckboxRequiredValidator.prototype;/**
     * \@description
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */_proto62.validate=function validate(control){return this.required?Validators.requiredTrue(control):null};return CheckboxRequiredValidator}(RequiredValidator);CheckboxRequiredValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",providers:[CHECKBOX_REQUIRED_VALIDATOR],host:{"[attr.required]":"required ? \"\" : null"}}]}];/**
 * \@description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var EMAIL_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return EmailValidator}),multi:true};/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@publicApi
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 */var EmailValidator=/*#__PURE__*/function(){function EmailValidator(){}var _proto63=EmailValidator.prototype;/**
     * \@description
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */_proto63.validate=function validate(control){return this._enabled?Validators.email(control):null}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto63.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn};_createClass(EmailValidator,[{key:"email",/**
     * \@description
     * Tracks changes to the email attribute bound to this directive.
     * @param {?} value
     * @return {?}
     */set:function set(value){this._enabled=value===""||value===true||value==="true";if(this._onChange)this._onChange()}}]);return EmailValidator}();EmailValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[email][formControlName],[email][formControl],[email][ngModel]",providers:[EMAIL_VALIDATOR]}]}];EmailValidator.propDecorators={email:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * A function that receives a control and synchronously returns a map of
 * validation errors if present, otherwise null.
 *
 * \@publicApi
 * @record
 */function ValidatorFn(){}/**
 * \@description
 * A function that receives a control and returns a Promise or observable
 * that emits validation errors if present, otherwise null.
 *
 * \@publicApi
 * @record
 */function AsyncValidatorFn(){}/**
 * \@description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var MIN_LENGTH_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return MinLengthValidator}),multi:true};/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var MinLengthValidator=/*#__PURE__*/function(){function MinLengthValidator(){}var _proto64=MinLengthValidator.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto64.ngOnChanges=function ngOnChanges(changes){if("minlength"in changes){this._createValidator();if(this._onChange)this._onChange()}}/**
     * \@description
     * Method that validates whether the value meets a minimum length
     * requirement. Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */;_proto64.validate=function validate(control){return this.minlength==null?null:this._validator(control)}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto64.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn}/**
     * @private
     * @return {?}
     */;_proto64._createValidator=function _createValidator(){this._validator=Validators.minLength(parseInt(this.minlength,10))};return MinLengthValidator}();MinLengthValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",providers:[MIN_LENGTH_VALIDATOR],host:{"[attr.minlength]":"minlength ? minlength : null"}}]}];MinLengthValidator.propDecorators={minlength:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var MAX_LENGTH_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return MaxLengthValidator}),multi:true};/**
 * A directive that adds max length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var MaxLengthValidator=/*#__PURE__*/function(){function MaxLengthValidator(){}var _proto65=MaxLengthValidator.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto65.ngOnChanges=function ngOnChanges(changes){if("maxlength"in changes){this._createValidator();if(this._onChange)this._onChange()}}/**
     * \@description
     * Method that validates whether the value exceeds
     * the maximum length requirement.
     * @param {?} control
     * @return {?}
     */;_proto65.validate=function validate(control){return this.maxlength!=null?this._validator(control):null}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto65.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn}/**
     * @private
     * @return {?}
     */;_proto65._createValidator=function _createValidator(){this._validator=Validators.maxLength(parseInt(this.maxlength,10))};return MaxLengthValidator}();MaxLengthValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",providers:[MAX_LENGTH_VALIDATOR],host:{"[attr.maxlength]":"maxlength ? maxlength : null"}}]}];MaxLengthValidator.propDecorators={maxlength:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var PATTERN_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return PatternValidator}),multi:true};/**
 * \@description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var PatternValidator=/*#__PURE__*/function(){function PatternValidator(){}var _proto66=PatternValidator.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto66.ngOnChanges=function ngOnChanges(changes){if("pattern"in changes){this._createValidator();if(this._onChange)this._onChange()}}/**
     * \@description
     * Method that validates whether the value matches the
     * the pattern requirement.
     * @param {?} control
     * @return {?}
     */;_proto66.validate=function validate(control){return this._validator(control)}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto66.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn}/**
     * @private
     * @return {?}
     */;_proto66._createValidator=function _createValidator(){this._validator=Validators.pattern(this.pattern)};return PatternValidator}();PatternValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",providers:[PATTERN_VALIDATOR],host:{"[attr.pattern]":"pattern ? pattern : null"}}]}];PatternValidator.propDecorators={pattern:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var SHARED_FORM_DIRECTIVES=[ɵNgNoValidate,NgSelectOption,ɵNgSelectMultipleOption,DefaultValueAccessor,NumberValueAccessor,RangeValueAccessor,CheckboxControlValueAccessor,SelectControlValueAccessor,SelectMultipleControlValueAccessor,RadioControlValueAccessor,NgControlStatus,NgControlStatusGroup,RequiredValidator,MinLengthValidator,MaxLengthValidator,PatternValidator,CheckboxRequiredValidator,EmailValidator];/** @type {?} */var TEMPLATE_DRIVEN_DIRECTIVES=[NgModel,NgModelGroup,NgForm,NgFormSelectorWarning];/** @type {?} */var REACTIVE_DRIVEN_DIRECTIVES=[FormControlDirective,FormGroupDirective,FormControlName,FormGroupName,FormArrayName];/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */var ɵInternalFormsSharedModule=function ɵInternalFormsSharedModule(){};ɵInternalFormsSharedModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:SHARED_FORM_DIRECTIVES,exports:SHARED_FORM_DIRECTIVES}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} options
 * @return {?}
 */function isAbstractControlOptions(options){return(/** @type {?} */options.asyncValidators!==undefined||/** @type {?} */options.validators!==undefined||/** @type {?} */options.updateOn!==undefined)}/**
 * \@description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * \@publicApi
 */var FormBuilder=/*#__PURE__*/function(){function FormBuilder(){}var _proto67=FormBuilder.prototype;/**
     * \@description
     * Construct a new `FormGroup` instance.
     *
     * @param {?} controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} options Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     * @return {?}
     */_proto67.group=function group(controlsConfig,options){if(options===void 0){options=null}/** @type {?} */var controls=this._reduceControls(controlsConfig);/** @type {?} */var validators=null;/** @type {?} */var asyncValidators=null;/** @type {?} */var updateOn=undefined;if(options!=null){if(isAbstractControlOptions(options)){// `options` are `AbstractControlOptions`
validators=options.validators!=null?options.validators:null;asyncValidators=options.asyncValidators!=null?options.asyncValidators:null;updateOn=options.updateOn!=null?options.updateOn:undefined}else{// `options` are legacy form group options
validators=options["validator"]!=null?options["validator"]:null;asyncValidators=options["asyncValidator"]!=null?options["asyncValidator"]:null}}return new FormGroup(controls,{asyncValidators:asyncValidators,updateOn:updateOn,validators:validators})}/**
     * \@description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * \@usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     * @param {?} formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @return {?}
     */;_proto67.control=function control(formState,validatorOrOpts,asyncValidator){return new FormControl(formState,validatorOrOpts,asyncValidator)}/**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param {?} controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator
     * functions.
     * @return {?}
     */;_proto67.array=function array(controlsConfig,validatorOrOpts,asyncValidator){var _this77=this;/** @type {?} */var controls=controlsConfig.map(/**
         * @param {?} c
         * @return {?}
         */function(c){return _this77._createControl(c)});return new FormArray(controls,validatorOrOpts,asyncValidator)}/**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */;_proto67._reduceControls=function _reduceControls(controlsConfig){var _this78=this;/** @type {?} */var controls={};Object.keys(controlsConfig).forEach(/**
         * @param {?} controlName
         * @return {?}
         */function(controlName){controls[controlName]=_this78._createControl(controlsConfig[controlName])});return controls}/**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */;_proto67._createControl=function _createControl(controlConfig){if(controlConfig instanceof FormControl||controlConfig instanceof FormGroup||controlConfig instanceof FormArray){return controlConfig}else if(Array.isArray(controlConfig)){/** @type {?} */var value=controlConfig[0];/** @type {?} */var validator=controlConfig.length>1?controlConfig[1]:null;/** @type {?} */var asyncValidator=controlConfig.length>2?controlConfig[2]:null;return this.control(value,validator,asyncValidator)}else{return this.control(controlConfig)}};return FormBuilder}();FormBuilder.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@publicApi
 * @type {?}
 */var VERSION=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]("8.2.8");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Guide](/guide/forms)
 *
 * \@publicApi
 */var FormsModule=/*#__PURE__*/function(){function FormsModule(){}/**
     * \@description
     * Provides options for configuring the template-driven forms module.
     *
     * @param {?} opts An object of configuration options
     * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
     * `ngForm` selector is used.
     * @return {?}
     */FormsModule.withConfig=function withConfig(opts){return{ngModule:FormsModule,providers:[{provide:NG_FORM_SELECTOR_WARNING,useValue:opts.warnOnDeprecatedNgFormSelector}]}};return FormsModule}();FormsModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:TEMPLATE_DRIVEN_DIRECTIVES,providers:[RadioControlRegistry],exports:[ɵInternalFormsSharedModule,TEMPLATE_DRIVEN_DIRECTIVES]}]}];/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/reactive-forms)
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * \@publicApi
 */var ReactiveFormsModule=/*#__PURE__*/function(){function ReactiveFormsModule(){}/**
     * \@description
     * Provides options for configuring the reactive forms module.
     *
     * @param {?} opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     * @return {?}
     */ReactiveFormsModule.withConfig=function withConfig(opts){return{ngModule:ReactiveFormsModule,providers:[{provide:NG_MODEL_WITH_FORM_CONTROL_WARNING,useValue:opts.warnOnNgModelWithFormControl}]}};return ReactiveFormsModule}();ReactiveFormsModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:[REACTIVE_DRIVEN_DIRECTIVES],providers:[FormBuilder,RadioControlRegistry],exports:[ɵInternalFormsSharedModule,REACTIVE_DRIVEN_DIRECTIVES]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Generated bundle index. Do not edit.
 */ //# sourceMappingURL=forms.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/button.js":/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/button.js ***!
  \**********************************************************/ /*! exports provided: MatButtonModule, MatButton, MatAnchor */ /***/function node_modulesAngularMaterialEsm2015ButtonJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatButtonModule",function(){return MatButtonModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatButton",function(){return MatButton});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatAnchor",function(){return MatAnchor});/* harmony import */var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/cdk/a11y */"./node_modules/@angular/cdk/esm2015/a11y.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/material/core */"./node_modules/@angular/material/esm2015/core.js");/* harmony import */var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Default color palette for round buttons (mat-fab and mat-mini-fab)
 * @type {?}
 */var DEFAULT_ROUND_BUTTON_COLOR="accent";/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 * @type {?}
 */var BUTTON_HOST_ATTRIBUTES=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"];// Boilerplate for applying mixins to MatButton.
/**
 * \@docs-private
 */var MatButtonBase=/**
     * @param {?} _elementRef
     */function MatButtonBase(_elementRef){this._elementRef=_elementRef};/** @type {?} */var _MatButtonMixinBase=Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatButtonBase)));/**
 * Material design button.
 */var MatButton=/*#__PURE__*/function(_MatButtonMixinBase2){_inheritsLoose(MatButton,_MatButtonMixinBase2);/**
     * @param {?} elementRef
     * @param {?} _focusMonitor
     * @param {?} _animationMode
     */function MatButton(elementRef,_focusMonitor,_animationMode){var _this79;_this79=_MatButtonMixinBase2.call(this,elementRef)||this;_this79._focusMonitor=_focusMonitor;_this79._animationMode=_animationMode;/**
         * Whether the button is round.
         */_this79.isRoundButton=_this79._hasHostAttributes("mat-fab","mat-mini-fab");/**
         * Whether the button is icon button.
         */_this79.isIconButton=_this79._hasHostAttributes("mat-icon-button");// For each of the variant selectors that is present in the button's host
// attributes, add the correct corresponding class.
for(var _iterator2=BUTTON_HOST_ATTRIBUTES,_isArray2=Array.isArray(_iterator2),_i6=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref3;if(_isArray2){if(_i6>=_iterator2.length)break;_ref3=_iterator2[_i6++]}else{_i6=_iterator2.next();if(_i6.done)break;_ref3=_i6.value}var attr=_ref3;if(_this79._hasHostAttributes(attr)){/** @type {?} */_this79._getHostElement().classList.add(attr)}}// Add a class that applies to all buttons. This makes it easier to target if somebody
// wants to target all Material buttons. We do it here rather than `host` to ensure that
// the class is applied to derived classes.
elementRef.nativeElement.classList.add("mat-button-base");_this79._focusMonitor.monitor(_this79._elementRef,true);if(_this79.isRoundButton){_this79.color=DEFAULT_ROUND_BUTTON_COLOR}return _this79}/**
     * @return {?}
     */var _proto68=MatButton.prototype;_proto68.ngOnDestroy=function ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}/**
     * Focuses the button.
     * @param {?=} _origin
     * @param {?=} options
     * @return {?}
     */;_proto68.focus=function focus(_origin,options){// Note that we aren't using `_origin`, but we need to keep it because some internal consumers
// use `MatButton` in a `FocusKeyManager` and we need it to match `FocusableOption`.
this._getHostElement().focus(options)}/**
     * @return {?}
     */;_proto68._getHostElement=function _getHostElement(){return this._elementRef.nativeElement}/**
     * @return {?}
     */;_proto68._isRippleDisabled=function _isRippleDisabled(){return this.disableRipple||this.disabled}/**
     * Gets whether the button has one of the given attributes.
     * @param {...?} attributes
     * @return {?}
     */;_proto68._hasHostAttributes=function _hasHostAttributes(){var _this80=this;for(var _len3=arguments.length,attributes=new Array(_len3),_key3=0;_key3<_len3;_key3++){attributes[_key3]=arguments[_key3]}return attributes.some(/**
         * @param {?} attribute
         * @return {?}
         */function(attribute){return _this80._getHostElement().hasAttribute(attribute)})};return MatButton}(_MatButtonMixinBase);MatButton.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],args:[{selector:"button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",exportAs:"matButton",host:{"[attr.disabled]":"disabled || null","[class._mat-animation-noopable]":"_animationMode === \"NoopAnimations\""},template:"<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],inputs:["disabled","disableRipple","color"],encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush}]}];/** @nocollapse */MatButton.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]}]}]};MatButton.propDecorators={ripple:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],args:[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"],{static:false}]}]};/**
 * Material design anchor button.
 */var MatAnchor=/*#__PURE__*/function(_MatButton){_inheritsLoose(MatAnchor,_MatButton);/**
     * @param {?} focusMonitor
     * @param {?} elementRef
     * @param {?} animationMode
     */function MatAnchor(focusMonitor,elementRef,animationMode){return _MatButton.call(this,elementRef,focusMonitor,animationMode)||this}/**
     * @param {?} event
     * @return {?}
     */var _proto69=MatAnchor.prototype;_proto69._haltDisabledEvents=function _haltDisabledEvents(event){// A disabled button shouldn't apply any actions
if(this.disabled){event.preventDefault();event.stopImmediatePropagation()}};return MatAnchor}(MatButton);MatAnchor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],args:[{selector:"a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",exportAs:"matButton, matAnchor",host:{// Note that we ignore the user-specified tabindex when it's disabled for
// consistency with the `mat-button` applied on native buttons where even
// though they have an index, they're not tabbable.
"[attr.tabindex]":"disabled ? -1 : (tabIndex || 0)","[attr.disabled]":"disabled || null","[attr.aria-disabled]":"disabled.toString()","(click)":"_haltDisabledEvents($event)","[class._mat-animation-noopable]":"_animationMode === \"NoopAnimations\""},inputs:["disabled","disableRipple","color"],template:"<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush}]}];/** @nocollapse */MatAnchor.ctorParameters=function(){return[{type:_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]}]}]};MatAnchor.propDecorators={tabIndex:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatButtonModule=function MatButtonModule(){};MatButtonModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],exports:[MatButton,MatAnchor,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],declarations:[MatButton,MatAnchor]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=button.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/card.js":/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/card.js ***!
  \********************************************************/ /*! exports provided: MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCard, MatCardHeader, MatCardTitleGroup, MatCardModule */ /***/function node_modulesAngularMaterialEsm2015CardJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardContent",function(){return MatCardContent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardTitle",function(){return MatCardTitle});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardSubtitle",function(){return MatCardSubtitle});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardActions",function(){return MatCardActions});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardFooter",function(){return MatCardFooter});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardImage",function(){return MatCardImage});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardSmImage",function(){return MatCardSmImage});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardMdImage",function(){return MatCardMdImage});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardLgImage",function(){return MatCardLgImage});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardXlImage",function(){return MatCardXlImage});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardAvatar",function(){return MatCardAvatar});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCard",function(){return MatCard});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardHeader",function(){return MatCardHeader});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardTitleGroup",function(){return MatCardTitleGroup});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCardModule",function(){return MatCardModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");/* harmony import */var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/material/core */"./node_modules/@angular/material/esm2015/core.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Content of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */var MatCardContent=function MatCardContent(){};MatCardContent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-card-content",host:{"class":"mat-card-content"}}]}];/**
 * Title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */var MatCardTitle=function MatCardTitle(){};MatCardTitle.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-card-title, [mat-card-title], [matCardTitle]",host:{"class":"mat-card-title"}}]}];/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */var MatCardSubtitle=function MatCardSubtitle(){};MatCardSubtitle.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",host:{"class":"mat-card-subtitle"}}]}];/**
 * Action section of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */var MatCardActions=function MatCardActions(){/**
         * Position of the actions inside the card.
         */this.align="start"};MatCardActions.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-card-actions",exportAs:"matCardActions",host:{"class":"mat-card-actions","[class.mat-card-actions-align-end]":"align === \"end\""}}]}];MatCardActions.propDecorators={align:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * Footer of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */var MatCardFooter=function MatCardFooter(){};MatCardFooter.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-card-footer",host:{"class":"mat-card-footer"}}]}];/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */var MatCardImage=function MatCardImage(){};MatCardImage.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-card-image], [matCardImage]",host:{"class":"mat-card-image"}}]}];/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */var MatCardSmImage=function MatCardSmImage(){};MatCardSmImage.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-card-sm-image], [matCardImageSmall]",host:{"class":"mat-card-sm-image"}}]}];/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */var MatCardMdImage=function MatCardMdImage(){};MatCardMdImage.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-card-md-image], [matCardImageMedium]",host:{"class":"mat-card-md-image"}}]}];/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */var MatCardLgImage=function MatCardLgImage(){};MatCardLgImage.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-card-lg-image], [matCardImageLarge]",host:{"class":"mat-card-lg-image"}}]}];/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */var MatCardXlImage=function MatCardXlImage(){};MatCardXlImage.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-card-xl-image], [matCardImageXLarge]",host:{"class":"mat-card-xl-image"}}]}];/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */var MatCardAvatar=function MatCardAvatar(){};MatCardAvatar.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-card-avatar], [matCardAvatar]",host:{"class":"mat-card-avatar"}}]}];/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */var MatCard=// @breaking-change 9.0.0 `_animationMode` parameter to be made required.
/**
     * @param {?=} _animationMode
     */function MatCard(_animationMode){this._animationMode=_animationMode};MatCard.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-card",exportAs:"matCard",template:"<ng-content></ng-content><ng-content select=\"mat-card-footer\"></ng-content>",styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,host:{"class":"mat-card","[class._mat-animation-noopable]":"_animationMode === \"NoopAnimations\""}}]}];/** @nocollapse */MatCard.ctorParameters=function(){return[{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]}]}]};/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * \@docs-private
 */var MatCardHeader=function MatCardHeader(){};MatCardHeader.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-card-header",template:"<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content><div class=\"mat-card-header-text\"><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content></ng-content>",encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,host:{"class":"mat-card-header"}}]}];/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * \@docs-private
 */var MatCardTitleGroup=function MatCardTitleGroup(){};MatCardTitleGroup.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-card-title-group",template:"<div><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content select=\"img\"></ng-content><ng-content></ng-content>",encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,host:{"class":"mat-card-title-group"}}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatCardModule=function MatCardModule(){};MatCardModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],exports:[MatCard,MatCardHeader,MatCardTitleGroup,MatCardContent,MatCardTitle,MatCardSubtitle,MatCardActions,MatCardFooter,MatCardSmImage,MatCardMdImage,MatCardLgImage,MatCardImage,MatCardXlImage,MatCardAvatar,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],declarations:[MatCard,MatCardHeader,MatCardTitleGroup,MatCardContent,MatCardTitle,MatCardSubtitle,MatCardActions,MatCardFooter,MatCardSmImage,MatCardMdImage,MatCardLgImage,MatCardImage,MatCardXlImage,MatCardAvatar]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=card.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/core.js":/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/core.js ***!
  \********************************************************/ /*! exports provided: VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */ /***/function node_modulesAngularMaterialEsm2015CoreJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"VERSION",function(){return VERSION$1});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AnimationCurves",function(){return AnimationCurves});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AnimationDurations",function(){return AnimationDurations});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatCommonModule",function(){return MatCommonModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MATERIAL_SANITY_CHECKS",function(){return MATERIAL_SANITY_CHECKS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"mixinDisabled",function(){return mixinDisabled});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"mixinColor",function(){return mixinColor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"mixinDisableRipple",function(){return mixinDisableRipple});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"mixinTabIndex",function(){return mixinTabIndex});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"mixinErrorState",function(){return mixinErrorState});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"mixinInitialized",function(){return mixinInitialized});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NativeDateModule",function(){return NativeDateModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatNativeDateModule",function(){return MatNativeDateModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_DATE_LOCALE_FACTORY",function(){return MAT_DATE_LOCALE_FACTORY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_DATE_LOCALE",function(){return MAT_DATE_LOCALE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_DATE_LOCALE_PROVIDER",function(){return MAT_DATE_LOCALE_PROVIDER});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DateAdapter",function(){return DateAdapter});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_DATE_FORMATS",function(){return MAT_DATE_FORMATS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NativeDateAdapter",function(){return NativeDateAdapter});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_NATIVE_DATE_FORMATS",function(){return MAT_NATIVE_DATE_FORMATS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ShowOnDirtyErrorStateMatcher",function(){return ShowOnDirtyErrorStateMatcher});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ErrorStateMatcher",function(){return ErrorStateMatcher});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_HAMMER_OPTIONS",function(){return MAT_HAMMER_OPTIONS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"GestureConfig",function(){return GestureConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"setLines",function(){return setLines});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatLine",function(){return MatLine});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatLineSetter",function(){return MatLineSetter});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatLineModule",function(){return MatLineModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatOptionModule",function(){return MatOptionModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"_countGroupLabelsBeforeOption",function(){return _countGroupLabelsBeforeOption});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"_getOptionScrollPosition",function(){return _getOptionScrollPosition});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatOptionSelectionChange",function(){return MatOptionSelectionChange});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_OPTION_PARENT_COMPONENT",function(){return MAT_OPTION_PARENT_COMPONENT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatOption",function(){return MatOption});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatOptgroup",function(){return MatOptgroup});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_LABEL_GLOBAL_OPTIONS",function(){return MAT_LABEL_GLOBAL_OPTIONS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatRippleModule",function(){return MatRippleModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_RIPPLE_GLOBAL_OPTIONS",function(){return MAT_RIPPLE_GLOBAL_OPTIONS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatRipple",function(){return MatRipple});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RippleState",function(){return RippleState});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RippleRef",function(){return RippleRef});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"defaultRippleAnimationConfig",function(){return defaultRippleAnimationConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RippleRenderer",function(){return RippleRenderer});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatPseudoCheckboxModule",function(){return MatPseudoCheckboxModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatPseudoCheckbox",function(){return MatPseudoCheckbox});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"JAN",function(){return JAN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FEB",function(){return FEB});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAR",function(){return MAR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"APR",function(){return APR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAY",function(){return MAY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"JUN",function(){return JUN});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"JUL",function(){return JUL});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AUG",function(){return AUG});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SEP",function(){return SEP});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"OCT",function(){return OCT});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NOV",function(){return NOV});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DEC",function(){return DEC});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a1",function(){return MATERIAL_SANITY_CHECKS_FACTORY});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");/* harmony import */var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/cdk/bidi */"./node_modules/@angular/cdk/esm2015/bidi.js");/* harmony import */var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/cdk */"./node_modules/@angular/cdk/esm2015/cdk.js");/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @angular/cdk/platform */"./node_modules/@angular/cdk/esm2015/platform.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/* harmony import */var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! @angular/cdk/a11y */"./node_modules/@angular/cdk/esm2015/a11y.js");/* harmony import */var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");/* harmony import */var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! @angular/cdk/keycodes */"./node_modules/@angular/cdk/esm2015/keycodes.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Current version of Angular Material.
 * @type {?}
 */var VERSION$1=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]("8.2.1");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@docs-private
 */var AnimationCurves=function AnimationCurves(){};AnimationCurves.STANDARD_CURVE="cubic-bezier(0.4,0.0,0.2,1)";AnimationCurves.DECELERATION_CURVE="cubic-bezier(0.0,0.0,0.2,1)";AnimationCurves.ACCELERATION_CURVE="cubic-bezier(0.4,0.0,1,1)";AnimationCurves.SHARP_CURVE="cubic-bezier(0.4,0.0,0.6,1)";/**
 * \@docs-private
 */var AnimationDurations=function AnimationDurations(){};AnimationDurations.COMPLEX="375ms";AnimationDurations.ENTERING="225ms";AnimationDurations.EXITING="195ms";/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points
/** @type {?} */var VERSION$2=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]("8.2.1");/**
 * \@docs-private
 * @return {?}
 */function MATERIAL_SANITY_CHECKS_FACTORY(){return true}/**
 * Injection token that configures whether the Material sanity checks are enabled.
 * @type {?}
 */var MATERIAL_SANITY_CHECKS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("mat-sanity-checks",{providedIn:"root",factory:MATERIAL_SANITY_CHECKS_FACTORY});/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */var MatCommonModule=/*#__PURE__*/function(){/**
     * @param {?} _sanityChecksEnabled
     * @param {?=} _hammerLoader
     */function MatCommonModule(_sanityChecksEnabled,_hammerLoader){this._sanityChecksEnabled=_sanityChecksEnabled;this._hammerLoader=_hammerLoader;/**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */this._hasDoneGlobalChecks=false;/**
         * Whether we've already checked for HammerJs availability.
         */this._hasCheckedHammer=false;/**
         * Reference to the global `document` object.
         */this._document=typeof document==="object"&&document?document:null;/**
         * Reference to the global 'window' object.
         */this._window=typeof window==="object"&&window?window:null;if(this._areChecksEnabled()&&!this._hasDoneGlobalChecks){this._checkDoctypeIsDefined();this._checkThemeIsPresent();this._checkCdkVersionMatch();this._hasDoneGlobalChecks=true}}/**
     * Whether any sanity checks are enabled
     * @private
     * @return {?}
     */var _proto70=MatCommonModule.prototype;_proto70._areChecksEnabled=function _areChecksEnabled(){return this._sanityChecksEnabled&&Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()&&!this._isTestEnv()}/**
     * Whether the code is running in tests.
     * @private
     * @return {?}
     */;_proto70._isTestEnv=function _isTestEnv(){/** @type {?} */var window=/** @type {?} */this._window;return window&&(window.__karma__||window.jasmine)}/**
     * @private
     * @return {?}
     */;_proto70._checkDoctypeIsDefined=function _checkDoctypeIsDefined(){if(this._document&&!this._document.doctype){console.warn("Current document does not have a doctype. This may cause "+"some Angular Material components not to behave as expected.")}}/**
     * @private
     * @return {?}
     */;_proto70._checkThemeIsPresent=function _checkThemeIsPresent(){// We need to assert that the `body` is defined, because these checks run very early
// and the `body` won't be defined if the consumer put their scripts in the `head`.
if(!this._document||!this._document.body||typeof getComputedStyle!=="function"){return}/** @type {?} */var testElement=this._document.createElement("div");testElement.classList.add("mat-theme-loaded-marker");this._document.body.appendChild(testElement);/** @type {?} */var computedStyle=getComputedStyle(testElement);// In some situations the computed style of the test element can be null. For example in
// Firefox, the computed style is null if an application is running inside of a hidden iframe.
// See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
if(computedStyle&&computedStyle.display!=="none"){console.warn("Could not find Angular Material core theme. Most Material "+"components may not work as expected. For more info refer "+"to the theming guide: https://material.angular.io/guide/theming")}this._document.body.removeChild(testElement)}/**
     * Checks whether the material version matches the cdk version
     * @private
     * @return {?}
     */;_proto70._checkCdkVersionMatch=function _checkCdkVersionMatch(){if(VERSION$2.full!==_angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full){console.warn("The Angular Material version ("+VERSION$2.full+") does not match "+"the Angular CDK version ("+_angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full+").\n"+"Please ensure the versions of these two packages exactly match.")}}/**
     * Checks whether HammerJS is available.
     * @return {?}
     */;_proto70._checkHammerIsAvailable=function _checkHammerIsAvailable(){if(this._hasCheckedHammer||!this._window){return}if(this._areChecksEnabled()&&!/** @type {?} */this._window["Hammer"]&&!this._hammerLoader){console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly.")}this._hasCheckedHammer=true};return MatCommonModule}();MatCommonModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],exports:[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]}]}];/** @nocollapse */MatCommonModule.ctorParameters=function(){return[{type:Boolean,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[MATERIAL_SANITY_CHECKS]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"]]}]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Mixin to augment a directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */function mixinDisabled(base){return(/*#__PURE__*/function(_base2){_inheritsLoose(_class,_base2);/**
         * @param {...?} args
         */function _class(){var _this81;for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4]}_this81=_base2.call.apply(_base2,[this].concat(args))||this;_this81._disabled=false;return _this81}/**
         * @return {?}
         */_createClass(_class,[{key:"disabled",get:function get(){return this._disabled}/**
         * @param {?} value
         * @return {?}
         */,set:function set(value){this._disabled=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value)}}]);return _class}(base))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Mixin to augment a directive with a `color` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultColor
 * @return {?}
 */function mixinColor(base,defaultColor){return(/*#__PURE__*/function(_base3){_inheritsLoose(_class2,_base3);_createClass(_class2,[{key:"color",/**
         * @return {?}
         */get:function get(){return this._color}/**
         * @param {?} value
         * @return {?}
         */,set:function set(value){/** @type {?} */var colorPalette=value||defaultColor;if(colorPalette!==this._color){if(this._color){this._elementRef.nativeElement.classList.remove("mat-"+this._color)}if(colorPalette){this._elementRef.nativeElement.classList.add("mat-"+colorPalette)}this._color=colorPalette}}/**
         * @param {...?} args
         */}]);function _class2(){var _this82;for(var _len5=arguments.length,args=new Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5]}_this82=_base3.call.apply(_base3,[this].concat(args))||this;// Set the default color that can be specified from the mixin.
_this82.color=defaultColor;return _this82}return _class2}(base))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Mixin to augment a directive with a `disableRipple` property.
 * @template T
 * @param {?} base
 * @return {?}
 */function mixinDisableRipple(base){return(/*#__PURE__*/function(_base4){_inheritsLoose(_class3,_base4);/**
         * @param {...?} args
         */function _class3(){var _this83;for(var _len6=arguments.length,args=new Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6]}_this83=_base4.call.apply(_base4,[this].concat(args))||this;_this83._disableRipple=false;return _this83}/**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */_createClass(_class3,[{key:"disableRipple",get:function get(){return this._disableRipple}/**
         * @param {?} value
         * @return {?}
         */,set:function set(value){this._disableRipple=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value)}}]);return _class3}(base))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Mixin to augment a directive with a `tabIndex` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultTabIndex
 * @return {?}
 */function mixinTabIndex(base,defaultTabIndex){if(defaultTabIndex===void 0){defaultTabIndex=0}return(/*#__PURE__*/function(_base5){_inheritsLoose(_class4,_base5);/**
         * @param {...?} args
         */function _class4(){var _this84;for(var _len7=arguments.length,args=new Array(_len7),_key7=0;_key7<_len7;_key7++){args[_key7]=arguments[_key7]}_this84=_base5.call.apply(_base5,[this].concat(args))||this;_this84._tabIndex=defaultTabIndex;return _this84}/**
         * @return {?}
         */_createClass(_class4,[{key:"tabIndex",get:function get(){return this.disabled?-1:this._tabIndex}/**
         * @param {?} value
         * @return {?}
         */,set:function set(value){// If the specified tabIndex value is null or undefined, fall back to the default value.
this._tabIndex=value!=null?value:defaultTabIndex}}]);return _class4}(base))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 * @template T
 * @param {?} base
 * @return {?}
 */function mixinErrorState(base){return(/*#__PURE__*/function(_base6){_inheritsLoose(_class5,_base6);/**
         * @param {...?} args
         */function _class5(){var _this85;for(var _len8=arguments.length,args=new Array(_len8),_key8=0;_key8<_len8;_key8++){args[_key8]=arguments[_key8]}_this85=_base6.call.apply(_base6,[this].concat(args))||this;/**
             * Whether the component is in an error state.
             */_this85.errorState=false;/**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */_this85.stateChanges=new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"];return _this85}/**
         * @return {?}
         */var _proto71=_class5.prototype;_proto71.updateErrorState=function updateErrorState(){/** @type {?} */var oldState=this.errorState;/** @type {?} */var parent=this._parentFormGroup||this._parentForm;/** @type {?} */var matcher=this.errorStateMatcher||this._defaultErrorStateMatcher;/** @type {?} */var control=this.ngControl?/** @type {?} */this.ngControl.control:null;/** @type {?} */var newState=matcher.isErrorState(control,parent);if(newState!==oldState){this.errorState=newState;this.stateChanges.next()}};return _class5}(base))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
 * @template T
 * @param {?} base
 * @return {?}
 */function mixinInitialized(base){return(/*#__PURE__*/function(_base7){_inheritsLoose(_class6,_base7);/**
         * @param {...?} args
         */function _class6(){var _this86;for(var _len9=arguments.length,args=new Array(_len9),_key9=0;_key9<_len9;_key9++){args[_key9]=arguments[_key9]}_this86=_base7.call.apply(_base7,[this].concat(args))||this;/**
             * Whether this directive has been marked as initialized.
             */_this86._isInitialized=false;/**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */_this86._pendingSubscribers=[];/**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */_this86.initialized=new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](/**
             * @param {?} subscriber
             * @return {?}
             */function(subscriber){// If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
// when _markInitialized is called.
if(_this86._isInitialized){_this86._notifySubscriber(subscriber)}else{/** @type {?} */_this86._pendingSubscribers.push(subscriber)}});return _this86}/**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */var _proto72=_class6.prototype;_proto72._markInitialized=function _markInitialized(){if(this._isInitialized){throw Error("This directive has already been marked as initialized and "+"should not be called twice.")}this._isInitialized=true;/** @type {?} */this._pendingSubscribers.forEach(this._notifySubscriber);this._pendingSubscribers=null}/**
         * Emits and completes the subscriber stream (should only emit once).
         * @param {?} subscriber
         * @return {?}
         */;_proto72._notifySubscriber=function _notifySubscriber(subscriber){subscriber.next();subscriber.complete()};return _class6}(base))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * InjectionToken for datepicker that can be used to override default locale code.
 * @type {?}
 */var MAT_DATE_LOCALE=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("MAT_DATE_LOCALE",{providedIn:"root",factory:MAT_DATE_LOCALE_FACTORY});/**
 * \@docs-private
 * @return {?}
 */function MAT_DATE_LOCALE_FACTORY(){return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])}/**
 * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
 * If you are importing and providing this in your code you can simply remove it.
 * @deprecated
 * \@breaking-change 8.0.0
 * @type {?}
 */var MAT_DATE_LOCALE_PROVIDER={provide:MAT_DATE_LOCALE,useExisting:_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]};/**
 * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
 * @abstract
 * @template D
 */var DateAdapter=/*#__PURE__*/function(){function DateAdapter(){this._localeChanges=new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]}/**
     * A stream that emits when the locale changes.
     * @return {?}
     */var _proto73=DateAdapter.prototype;/**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value The value to be deserialized into a date object.
     * @return {?} The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */_proto73.deserialize=function deserialize(value){if(value==null||this.isDateInstance(value)&&this.isValid(value)){return value}return this.invalid()}/**
     * Sets the locale used for all dates.
     * @param {?} locale The new locale.
     * @return {?}
     */;_proto73.setLocale=function setLocale(locale){this.locale=locale;this._localeChanges.next()}/**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */;_proto73.compareDate=function compareDate(first,second){return this.getYear(first)-this.getYear(second)||this.getMonth(first)-this.getMonth(second)||this.getDate(first)-this.getDate(second)}/**
     * Checks if two dates are equal.
     * @param {?} first The first date to check.
     * @param {?} second The second date to check.
     * @return {?} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */;_proto73.sameDate=function sameDate(first,second){if(first&&second){/** @type {?} */var firstValid=this.isValid(first);/** @type {?} */var secondValid=this.isValid(second);if(firstValid&&secondValid){return!this.compareDate(first,second)}return firstValid==secondValid}return first==second}/**
     * Clamp the given date between min and max dates.
     * @param {?} date The date to clamp.
     * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
     * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
     * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */;_proto73.clampDate=function clampDate(date,min,max){if(min&&this.compareDate(date,min)<0){return min}if(max&&this.compareDate(date,max)>0){return max}return date};_createClass(DateAdapter,[{key:"localeChanges",get:function get(){return this._localeChanges}}]);return DateAdapter}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var MAT_DATE_FORMATS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("mat-date-formats");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // TODO(mmalerba): Remove when we no longer support safari 9.
/**
 * Whether the browser supports the Intl API.
 * @type {?}
 */var SUPPORTS_INTL_API;// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try{SUPPORTS_INTL_API=typeof Intl!="undefined"}catch(_a){SUPPORTS_INTL_API=false}/**
 * The default month names to use if Intl API is not available.
 * @type {?}
 */var DEFAULT_MONTH_NAMES={"long":["January","February","March","April","May","June","July","August","September","October","November","December"],"short":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"narrow":["J","F","M","A","M","J","J","A","S","O","N","D"]};var ɵ0=/**
 * @param {?} i
 * @return {?}
 */function ɵ0(i){return String(i+1)};/**
 * The default date names to use if Intl API is not available.
 * @type {?}
 */var DEFAULT_DATE_NAMES=range(31,ɵ0);/**
 * The default day of the week names to use if Intl API is not available.
 * @type {?}
 */var DEFAULT_DAY_OF_WEEK_NAMES={"long":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"short":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"narrow":["S","M","T","W","T","F","S"]};/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 * @type {?}
 */var ISO_8601_REGEX=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */function range(length,valueFunction){/** @type {?} */var valuesArray=Array(length);for(var i=0;i<length;i++){valuesArray[i]=valueFunction(i)}return valuesArray}/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */var NativeDateAdapter=/*#__PURE__*/function(_DateAdapter){_inheritsLoose(NativeDateAdapter,_DateAdapter);/**
     * @param {?} matDateLocale
     * @param {?} platform
     */function NativeDateAdapter(matDateLocale,platform){var _this87;_this87=_DateAdapter.call(this)||this;/**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */_this87.useUtcForDisplay=true;_DateAdapter.prototype.setLocale.call(_assertThisInitialized(_this87),matDateLocale);// IE does its own time zone correction, so we disable this on IE.
_this87.useUtcForDisplay=!platform.TRIDENT;_this87._clampDate=platform.TRIDENT||platform.EDGE;return _this87}/**
     * @param {?} date
     * @return {?}
     */var _proto74=NativeDateAdapter.prototype;_proto74.getYear=function getYear(date){return date.getFullYear()}/**
     * @param {?} date
     * @return {?}
     */;_proto74.getMonth=function getMonth(date){return date.getMonth()}/**
     * @param {?} date
     * @return {?}
     */;_proto74.getDate=function getDate(date){return date.getDate()}/**
     * @param {?} date
     * @return {?}
     */;_proto74.getDayOfWeek=function getDayOfWeek(date){return date.getDay()}/**
     * @param {?} style
     * @return {?}
     */;_proto74.getMonthNames=function getMonthNames(style){var _this88=this;if(SUPPORTS_INTL_API){/** @type {?} */var dtf=new Intl.DateTimeFormat(this.locale,{month:style,timeZone:"utc"});return range(12,/**
             * @param {?} i
             * @return {?}
             */function(i){return _this88._stripDirectionalityCharacters(_this88._format(dtf,new Date(2017,i,1)))})}return DEFAULT_MONTH_NAMES[style]}/**
     * @return {?}
     */;_proto74.getDateNames=function getDateNames(){var _this89=this;if(SUPPORTS_INTL_API){/** @type {?} */var dtf=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return range(31,/**
             * @param {?} i
             * @return {?}
             */function(i){return _this89._stripDirectionalityCharacters(_this89._format(dtf,new Date(2017,0,i+1)))})}return DEFAULT_DATE_NAMES}/**
     * @param {?} style
     * @return {?}
     */;_proto74.getDayOfWeekNames=function getDayOfWeekNames(style){var _this90=this;if(SUPPORTS_INTL_API){/** @type {?} */var dtf=new Intl.DateTimeFormat(this.locale,{weekday:style,timeZone:"utc"});return range(7,/**
             * @param {?} i
             * @return {?}
             */function(i){return _this90._stripDirectionalityCharacters(_this90._format(dtf,new Date(2017,0,i+1)))})}return DEFAULT_DAY_OF_WEEK_NAMES[style]}/**
     * @param {?} date
     * @return {?}
     */;_proto74.getYearName=function getYearName(date){if(SUPPORTS_INTL_API){/** @type {?} */var dtf=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._stripDirectionalityCharacters(this._format(dtf,date))}return String(this.getYear(date))}/**
     * @return {?}
     */;_proto74.getFirstDayOfWeek=function getFirstDayOfWeek(){// We can't tell using native JS Date what the first day of the week is, we default to Sunday.
return 0}/**
     * @param {?} date
     * @return {?}
     */;_proto74.getNumDaysInMonth=function getNumDaysInMonth(date){return this.getDate(this._createDateWithOverflow(this.getYear(date),this.getMonth(date)+1,0))}/**
     * @param {?} date
     * @return {?}
     */;_proto74.clone=function clone(date){return new Date(date.getTime())}/**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */;_proto74.createDate=function createDate(year,month,date){// Check for invalid month and date (except upper bound on date which we have to check after
// creating the Date).
if(month<0||month>11){throw Error("Invalid month index \""+month+"\". Month index has to be between 0 and 11.")}if(date<1){throw Error("Invalid date \""+date+"\". Date has to be greater than 0.")}/** @type {?} */var result=this._createDateWithOverflow(year,month,date);// Check that the date wasn't above the upper bound for the month, causing the month to overflow
if(result.getMonth()!=month){throw Error("Invalid date \""+date+"\" for month with index \""+month+"\".")}return result}/**
     * @return {?}
     */;_proto74.today=function today(){return new Date}/**
     * @param {?} value
     * @return {?}
     */;_proto74.parse=function parse(value){// We have no way using the native JS Date to set the parse format or locale, so we ignore these
// parameters.
if(typeof value=="number"){return new Date(value)}return value?new Date(Date.parse(value)):null}/**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */;_proto74.format=function format(date,displayFormat){if(!this.isValid(date)){throw Error("NativeDateAdapter: Cannot format invalid date.")}if(SUPPORTS_INTL_API){// On IE and Edge the i18n API will throw a hard error that can crash the entire app
// if we attempt to format a date whose year is less than 1 or greater than 9999.
if(this._clampDate&&(date.getFullYear()<1||date.getFullYear()>9999)){date=this.clone(date);date.setFullYear(Math.max(1,Math.min(9999,date.getFullYear())))}displayFormat=Object.assign({},displayFormat,{timeZone:"utc"});/** @type {?} */var dtf=new Intl.DateTimeFormat(this.locale,displayFormat);return this._stripDirectionalityCharacters(this._format(dtf,date))}return this._stripDirectionalityCharacters(date.toDateString())}/**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */;_proto74.addCalendarYears=function addCalendarYears(date,years){return this.addCalendarMonths(date,years*12)}/**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */;_proto74.addCalendarMonths=function addCalendarMonths(date,months){/** @type {?} */var newDate=this._createDateWithOverflow(this.getYear(date),this.getMonth(date)+months,this.getDate(date));// It's possible to wind up in the wrong month if the original month has more days than the new
// month. In this case we want to go to the last day of the desired month.
// Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
// guarantee this.
if(this.getMonth(newDate)!=((this.getMonth(date)+months)%12+12)%12){newDate=this._createDateWithOverflow(this.getYear(newDate),this.getMonth(newDate),0)}return newDate}/**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */;_proto74.addCalendarDays=function addCalendarDays(date,days){return this._createDateWithOverflow(this.getYear(date),this.getMonth(date),this.getDate(date)+days)}/**
     * @param {?} date
     * @return {?}
     */;_proto74.toIso8601=function toIso8601(date){return[date.getUTCFullYear(),this._2digit(date.getUTCMonth()+1),this._2digit(date.getUTCDate())].join("-")}/**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */;_proto74.deserialize=function deserialize(value){if(typeof value==="string"){if(!value){return null}// The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
// string is the right format first.
if(ISO_8601_REGEX.test(value)){/** @type {?} */var date=new Date(value);if(this.isValid(date)){return date}}}return _DateAdapter.prototype.deserialize.call(this,value)}/**
     * @param {?} obj
     * @return {?}
     */;_proto74.isDateInstance=function isDateInstance(obj){return obj instanceof Date}/**
     * @param {?} date
     * @return {?}
     */;_proto74.isValid=function isValid(date){return!isNaN(date.getTime())}/**
     * @return {?}
     */;_proto74.invalid=function invalid(){return new Date(NaN)}/**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */;_proto74._createDateWithOverflow=function _createDateWithOverflow(year,month,date){/** @type {?} */var result=new Date(year,month,date);// We need to correct for the fact that JS native Date treats years in range [0, 99] as
// abbreviations for 19xx.
if(year>=0&&year<100){result.setFullYear(this.getYear(result)-1900)}return result}/**
     * Pads a number to make it two digits.
     * @private
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */;_proto74._2digit=function _2digit(n){return("00"+n).slice(-2)}/**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */;_proto74._stripDirectionalityCharacters=function _stripDirectionalityCharacters(str){return str.replace(/[\u200e\u200f]/g,"")}/**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @private
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */;_proto74._format=function _format(dtf,date){/** @type {?} */var d=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()));return dtf.format(d)};return NativeDateAdapter}(DateAdapter);NativeDateAdapter.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */NativeDateAdapter.ctorParameters=function(){return[{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[MAT_DATE_LOCALE]}]},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var MAT_NATIVE_DATE_FORMATS={parse:{dateInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var NativeDateModule=function NativeDateModule(){};NativeDateModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],providers:[{provide:DateAdapter,useClass:NativeDateAdapter}]}]}];var ɵ0$1=MAT_NATIVE_DATE_FORMATS;var MatNativeDateModule=function MatNativeDateModule(){};MatNativeDateModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[NativeDateModule],providers:[{provide:MAT_DATE_FORMATS,useValue:ɵ0$1}]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Error state matcher that matches when a control is invalid and dirty.
 */var ShowOnDirtyErrorStateMatcher=/*#__PURE__*/function(){function ShowOnDirtyErrorStateMatcher(){}var _proto75=ShowOnDirtyErrorStateMatcher.prototype;/**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */_proto75.isErrorState=function isErrorState(control,form){return!!(control&&control.invalid&&(control.dirty||form&&form.submitted))};return ShowOnDirtyErrorStateMatcher}();ShowOnDirtyErrorStateMatcher.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * Provider that defines how form controls behave with regards to displaying error messages.
 */var ErrorStateMatcher=/*#__PURE__*/function(){function ErrorStateMatcher(){}var _proto76=ErrorStateMatcher.prototype;/**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */_proto76.isErrorState=function isErrorState(control,form){return!!(control&&control.invalid&&(control.touched||form&&form.submitted))};return ErrorStateMatcher}();ErrorStateMatcher.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */ErrorStateMatcher.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275defineInjectable"])({factory:function ErrorStateMatcher_Factory(){return new ErrorStateMatcher},token:ErrorStateMatcher,providedIn:"root"});/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 * @type {?}
 */var MAT_HAMMER_OPTIONS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("MAT_HAMMER_OPTIONS");/** @type {?} */var ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES=["longpress","slide","slidestart","slideend","slideright","slideleft"];var ɵ0$2=/**
 * @return {?}
 */function ɵ0$2(){},ɵ1=/**
 * @return {?}
 */function ɵ1(){};/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 * @type {?}
 */var noopHammerInstance={on:ɵ0$2,off:ɵ1};/**
 * Adjusts configuration of our gesture library, Hammer.
 */var GestureConfig=/*#__PURE__*/function(_angular_platform_bro){_inheritsLoose(GestureConfig,_angular_platform_bro);/**
     * @param {?=} _hammerOptions
     * @param {?=} commonModule
     */function GestureConfig(_hammerOptions,commonModule){var _this91;_this91=_angular_platform_bro.call(this)||this;_this91._hammerOptions=_hammerOptions;/**
         * List of new event names to add to the gesture support list
         */_this91.events=ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;if(commonModule){commonModule._checkHammerIsAvailable()}return _this91}/**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */var _proto77=GestureConfig.prototype;_proto77.buildHammer=function buildHammer(element){/** @type {?} */var hammer=typeof window!=="undefined"?/** @type {?} */window.Hammer:null;if(!hammer){// If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
// ensure that omitting HammerJS completely will not cause any errors while *also* supporting
// the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
// Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
// `this.events` to the set we support, instead of conditionally setting it to `[]` if
// `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
// undefined).
// @breaking-change 8.0.0
return noopHammerInstance}/** @type {?} */var mc=new hammer(element,this._hammerOptions||undefined);// Default Hammer Recognizers.
/** @type {?} */var pan=new hammer.Pan;/** @type {?} */var swipe=new hammer.Swipe;/** @type {?} */var press=new hammer.Press;// Notice that a HammerJS recognizer can only depend on one other recognizer once.
// Otherwise the previous `recognizeWith` will be dropped.
// TODO: Confirm threshold numbers with Material Design UX Team
/** @type {?} */var slide=this._createRecognizer(pan,{event:"slide",threshold:0},swipe);/** @type {?} */var longpress=this._createRecognizer(press,{event:"longpress",time:500});// Overwrite the default `pan` event to use the swipe event.
pan.recognizeWith(swipe);// Since the slide event threshold is set to zero, the slide recognizer can fire and
// accidentally reset the longpress recognizer. In order to make sure that the two
// recognizers can run simultaneously but don't affect each other, we allow the slide
// recognizer to recognize while a longpress is being processed.
// See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124
longpress.recognizeWith(slide);// Add customized gestures to Hammer manager
mc.add([swipe,press,pan,slide,longpress]);return(/** @type {?} */mc)}/**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @private
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */;_proto77._createRecognizer=function _createRecognizer(base,options){/** @type {?} */var recognizer=new/** @type {?} */base.constructor(options);for(var _len10=arguments.length,inheritances=new Array(_len10>2?_len10-2:0),_key10=2;_key10<_len10;_key10++){inheritances[_key10-2]=arguments[_key10]}inheritances.push(base);inheritances.forEach(/**
         * @param {?} item
         * @return {?}
         */function(item){return recognizer.recognizeWith(item)});return recognizer};return GestureConfig}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]);GestureConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */GestureConfig.ctorParameters=function(){return[{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[MAT_HAMMER_OPTIONS]}]},{type:MatCommonModule,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]}]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */var MatLine=function MatLine(){};MatLine.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-line], [matLine]",host:{"class":"mat-line"}}]}];/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @param {?} lines
 * @param {?} element
 * @return {?}
 */function setLines(lines,element){// Note: doesn't need to unsubscribe, because `changes`
// gets completed by Angular when the view is destroyed.
lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(lines)).subscribe(/**
     * @param {?} __0
     * @return {?}
     */function(_ref4){var length=_ref4.length;setClass(element,"mat-2-line",false);setClass(element,"mat-3-line",false);setClass(element,"mat-multi-line",false);if(length===2||length===3){setClass(element,"mat-"+length+"-line",true)}else if(length>3){setClass(element,"mat-multi-line",true)}})}/**
 * Adds or removes a class from an element.
 * @param {?} element
 * @param {?} className
 * @param {?} isAdd
 * @return {?}
 */function setClass(element,className,isAdd){/** @type {?} */var classList=element.nativeElement.classList;isAdd?classList.add(className):classList.remove(className)}/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @deprecated Use `setLines` instead.
 * \@breaking-change 8.0.0
 */var MatLineSetter=/**
     * @param {?} lines
     * @param {?} element
     */function MatLineSetter(lines,element){setLines(lines,element)};var MatLineModule=function MatLineModule(){};MatLineModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[MatCommonModule],exports:[MatLine,MatCommonModule],declarations:[MatLine]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @enum {number} */var RippleState={FADING_IN:0,VISIBLE:1,FADING_OUT:2,HIDDEN:3};RippleState[RippleState.FADING_IN]="FADING_IN";RippleState[RippleState.VISIBLE]="VISIBLE";RippleState[RippleState.FADING_OUT]="FADING_OUT";RippleState[RippleState.HIDDEN]="HIDDEN";/**
 * Reference to a previously launched ripple element.
 */var RippleRef=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} element
     * @param {?} config
     */function RippleRef(_renderer,element,config){this._renderer=_renderer;this.element=element;this.config=config;/**
         * Current state of the ripple.
         */this.state=RippleState.HIDDEN}/**
     * Fades out the ripple element.
     * @return {?}
     */var _proto78=RippleRef.prototype;_proto78.fadeOut=function fadeOut(){this._renderer.fadeOutRipple(this)};return RippleRef}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 * @type {?}
 */var defaultRippleAnimationConfig={enterDuration:450,exitDuration:400};/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 * @type {?}
 */var ignoreMouseEventsTimeout=800;/**
 * Options that apply to all the event listeners that are bound by the ripple renderer.
 * @type {?}
 */var passiveEventOptions=Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({passive:true});/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * \@docs-private
 */var RippleRenderer=/*#__PURE__*/function(){/**
     * @param {?} _target
     * @param {?} _ngZone
     * @param {?} elementOrElementRef
     * @param {?} platform
     */function RippleRenderer(_target,_ngZone,elementOrElementRef,platform){var _this92=this;this._target=_target;this._ngZone=_ngZone;/**
         * Whether the pointer is currently down or not.
         */this._isPointerDown=false;/**
         * Events to be registered on the trigger element.
         */this._triggerEvents=new Map;/**
         * Set of currently active ripple references.
         */this._activeRipples=new Set;/**
         * Function being called whenever the trigger is being pressed using mouse.
         */this._onMousedown=/**
         * @param {?} event
         * @return {?}
         */function(event){// Screen readers will fire fake mouse events for space/enter. Skip launching a
// ripple in this case for consistency with the non-screen-reader experience.
/** @type {?} */var isFakeMousedown=Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);/** @type {?} */var isSyntheticEvent=_this92._lastTouchStartEvent&&Date.now()<_this92._lastTouchStartEvent+ignoreMouseEventsTimeout;if(!_this92._target.rippleDisabled&&!isFakeMousedown&&!isSyntheticEvent){_this92._isPointerDown=true;_this92.fadeInRipple(event.clientX,event.clientY,_this92._target.rippleConfig)}};/**
         * Function being called whenever the trigger is being pressed using touch.
         */this._onTouchStart=/**
         * @param {?} event
         * @return {?}
         */function(event){if(!_this92._target.rippleDisabled){// Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
// events will launch a second ripple if we don't ignore mouse events for a specific
// time after a touchstart event.
_this92._lastTouchStartEvent=Date.now();_this92._isPointerDown=true;// Use `changedTouches` so we skip any touches where the user put
// their finger down, but used another finger to tap the element again.
/** @type {?} */var touches=event.changedTouches;for(var i=0;i<touches.length;i++){_this92.fadeInRipple(touches[i].clientX,touches[i].clientY,_this92._target.rippleConfig)}}};/**
         * Function being called whenever the trigger is being released.
         */this._onPointerUp=/**
         * @return {?}
         */function(){if(!_this92._isPointerDown){return}_this92._isPointerDown=false;// Fade-out all ripples that are visible and not persistent.
_this92._activeRipples.forEach(/**
             * @param {?} ripple
             * @return {?}
             */function(ripple){// By default, only ripples that are completely visible will fade out on pointer release.
// If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
/** @type {?} */var isVisible=ripple.state===RippleState.VISIBLE||ripple.config.terminateOnPointerUp&&ripple.state===RippleState.FADING_IN;if(!ripple.config.persistent&&isVisible){ripple.fadeOut()}})};// Only do anything if we're on the browser.
if(platform.isBrowser){this._containerElement=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);// Specify events which need to be registered on the trigger.
this._triggerEvents.set("mousedown",this._onMousedown).set("mouseup",this._onPointerUp).set("mouseleave",this._onPointerUp).set("touchstart",this._onTouchStart).set("touchend",this._onPointerUp).set("touchcancel",this._onPointerUp)}}/**
     * Fades in a ripple at the given coordinates.
     * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
     * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param {?=} config Extra ripple options.
     * @return {?}
     */var _proto79=RippleRenderer.prototype;_proto79.fadeInRipple=function fadeInRipple(x,y,config){var _this93=this;if(config===void 0){config={}}/** @type {?} */var containerRect=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect();/** @type {?} */var animationConfig=Object.assign({},defaultRippleAnimationConfig,config.animation);if(config.centered){x=containerRect.left+containerRect.width/2;y=containerRect.top+containerRect.height/2}/** @type {?} */var radius=config.radius||distanceToFurthestCorner(x,y,containerRect);/** @type {?} */var offsetX=x-containerRect.left;/** @type {?} */var offsetY=y-containerRect.top;/** @type {?} */var duration=animationConfig.enterDuration;/** @type {?} */var ripple=document.createElement("div");ripple.classList.add("mat-ripple-element");ripple.style.left=offsetX-radius+"px";ripple.style.top=offsetY-radius+"px";ripple.style.height=radius*2+"px";ripple.style.width=radius*2+"px";// If the color is not set, the default CSS color will be used.
ripple.style.backgroundColor=config.color||null;ripple.style.transitionDuration=duration+"ms";this._containerElement.appendChild(ripple);// By default the browser does not recalculate the styles of dynamically created
// ripple elements. This is critical because then the `scale` would not animate properly.
enforceStyleRecalculation(ripple);ripple.style.transform="scale(1)";// Exposed reference to the ripple that will be returned.
/** @type {?} */var rippleRef=new RippleRef(this,ripple,config);rippleRef.state=RippleState.FADING_IN;// Add the ripple reference to the list of all active ripples.
this._activeRipples.add(rippleRef);if(!config.persistent){this._mostRecentTransientRipple=rippleRef}// Wait for the ripple element to be completely faded in.
// Once it's faded in, the ripple can be hidden immediately if the mouse is released.
this._runTimeoutOutsideZone(/**
         * @return {?}
         */function(){/** @type {?} */var isMostRecentTransientRipple=rippleRef===_this93._mostRecentTransientRipple;rippleRef.state=RippleState.VISIBLE;// When the timer runs out while the user has kept their pointer down, we want to
// keep only the persistent ripples and the latest transient ripple. We do this,
// because we don't want stacked transient ripples to appear after their enter
// animation has finished.
if(!config.persistent&&(!isMostRecentTransientRipple||!_this93._isPointerDown)){rippleRef.fadeOut()}},duration);return rippleRef}/**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */;_proto79.fadeOutRipple=function fadeOutRipple(rippleRef){/** @type {?} */var wasActive=this._activeRipples.delete(rippleRef);if(rippleRef===this._mostRecentTransientRipple){this._mostRecentTransientRipple=null}// Clear out the cached bounding rect if we have no more ripples.
if(!this._activeRipples.size){this._containerRect=null}// For ripples that are not active anymore, don't re-run the fade-out animation.
if(!wasActive){return}/** @type {?} */var rippleEl=rippleRef.element;/** @type {?} */var animationConfig=Object.assign({},defaultRippleAnimationConfig,rippleRef.config.animation);rippleEl.style.transitionDuration=animationConfig.exitDuration+"ms";rippleEl.style.opacity="0";rippleRef.state=RippleState.FADING_OUT;// Once the ripple faded out, the ripple can be safely removed from the DOM.
this._runTimeoutOutsideZone(/**
         * @return {?}
         */function(){rippleRef.state=RippleState.HIDDEN;/** @type {?} */rippleEl.parentNode.removeChild(rippleEl)},animationConfig.exitDuration)}/**
     * Fades out all currently active ripples.
     * @return {?}
     */;_proto79.fadeOutAll=function fadeOutAll(){this._activeRipples.forEach(/**
         * @param {?} ripple
         * @return {?}
         */function(ripple){return ripple.fadeOut()})}/**
     * Sets up the trigger event listeners
     * @param {?} elementOrElementRef
     * @return {?}
     */;_proto79.setupTriggerEvents=function setupTriggerEvents(elementOrElementRef){var _this94=this;/** @type {?} */var element=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);if(!element||element===this._triggerElement){return}// Remove all previously registered event listeners from the trigger element.
this._removeTriggerEvents();this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){_this94._triggerEvents.forEach(/**
             * @param {?} fn
             * @param {?} type
             * @return {?}
             */function(fn,type){element.addEventListener(type,fn,passiveEventOptions)})});this._triggerElement=element}/**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @private
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */;_proto79._runTimeoutOutsideZone=function _runTimeoutOutsideZone(fn,delay){if(delay===void 0){delay=0}this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){return setTimeout(fn,delay)})}/**
     * Removes previously registered event listeners from the trigger element.
     * @return {?}
     */;_proto79._removeTriggerEvents=function _removeTriggerEvents(){var _this95=this;if(this._triggerElement){this._triggerEvents.forEach(/**
             * @param {?} fn
             * @param {?} type
             * @return {?}
             */function(fn,type){/** @type {?} */_this95._triggerElement.removeEventListener(type,fn,passiveEventOptions)})}};return RippleRenderer}();/**
 * Enforces a style recalculation of a DOM element by computing its styles.
 * @param {?} element
 * @return {?}
 */function enforceStyleRecalculation(element){// Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
// Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
// See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
window.getComputedStyle(element).getPropertyValue("opacity")}/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */function distanceToFurthestCorner(x,y,rect){/** @type {?} */var distX=Math.max(Math.abs(x-rect.left),Math.abs(x-rect.right));/** @type {?} */var distY=Math.max(Math.abs(y-rect.top),Math.abs(y-rect.bottom));return Math.sqrt(distX*distX+distY*distY)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Injection token that can be used to specify the global ripple options.
 * @type {?}
 */var MAT_RIPPLE_GLOBAL_OPTIONS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("mat-ripple-global-options");var MatRipple=/*#__PURE__*/function(){/**
     * @param {?} _elementRef
     * @param {?} ngZone
     * @param {?} platform
     * @param {?=} globalOptions
     * @param {?=} animationMode
     */function MatRipple(_elementRef,ngZone,platform,globalOptions,animationMode){this._elementRef=_elementRef;/**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */this.radius=0;this._disabled=false;/**
         * Whether ripple directive is initialized and the input bindings are set.
         */this._isInitialized=false;this._globalOptions=globalOptions||{};this._rippleRenderer=new RippleRenderer(this,ngZone,_elementRef,platform);if(animationMode==="NoopAnimations"){this._globalOptions.animation={enterDuration:0,exitDuration:0}}}/**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     * @return {?}
     */var _proto80=MatRipple.prototype;/**
     * @return {?}
     */_proto80.ngOnInit=function ngOnInit(){this._isInitialized=true;this._setupTriggerEventsIfEnabled()}/**
     * @return {?}
     */;_proto80.ngOnDestroy=function ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}/**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */;_proto80.fadeOutAll=function fadeOutAll(){this._rippleRenderer.fadeOutAll()}/**
     * Ripple configuration from the directive's input values.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */;/**
     * Sets up the trigger event listeners if ripples are enabled.
     * @private
     * @return {?}
     */_proto80._setupTriggerEventsIfEnabled=function _setupTriggerEventsIfEnabled(){if(!this.disabled&&this._isInitialized){this._rippleRenderer.setupTriggerEvents(this.trigger)}}/**
     * Launches a manual ripple at the specified coordinated or just by the ripple config.
     * @param {?} configOrX
     * @param {?=} y
     * @param {?=} config
     * @return {?}
     */;_proto80.launch=function launch(configOrX,y,config){if(y===void 0){y=0}if(typeof configOrX==="number"){return this._rippleRenderer.fadeInRipple(configOrX,y,Object.assign({},this.rippleConfig,config))}else{return this._rippleRenderer.fadeInRipple(0,0,Object.assign({},this.rippleConfig,configOrX))}};_createClass(MatRipple,[{key:"disabled",get:function get(){return this._disabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._disabled=value;this._setupTriggerEventsIfEnabled()}/**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     * @return {?}
     */},{key:"trigger",get:function get(){return this._trigger||this._elementRef.nativeElement}/**
     * @param {?} trigger
     * @return {?}
     */,set:function set(trigger){this._trigger=trigger;this._setupTriggerEventsIfEnabled()}},{key:"rippleConfig",get:function get(){return{centered:this.centered,radius:this.radius,color:this.color,animation:Object.assign({},this._globalOptions.animation,this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}/**
     * Whether ripples on pointer-down are disabled or not.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */},{key:"rippleDisabled",get:function get(){return this.disabled||!!this._globalOptions.disabled}}]);return MatRipple}();MatRipple.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-ripple], [matRipple]",exportAs:"matRipple",host:{"class":"mat-ripple","[class.mat-ripple-unbounded]":"unbounded"}}]}];/** @nocollapse */MatRipple.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[MAT_RIPPLE_GLOBAL_OPTIONS]}]},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]}]}]};MatRipple.propDecorators={color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["matRippleColor"]}],unbounded:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["matRippleUnbounded"]}],centered:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["matRippleCentered"]}],radius:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["matRippleRadius"]}],animation:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["matRippleAnimation"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["matRippleDisabled"]}],trigger:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["matRippleTrigger"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatRippleModule=function MatRippleModule(){};MatRippleModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[MatCommonModule,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],exports:[MatRipple,MatCommonModule],declarations:[MatRipple]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * \@docs-private
 */var MatPseudoCheckbox=/**
     * @param {?=} _animationMode
     */function MatPseudoCheckbox(_animationMode){this._animationMode=_animationMode;/**
         * Display state of the checkbox.
         */this.state="unchecked";/**
         * Whether the checkbox is disabled.
         */this.disabled=false};MatPseudoCheckbox.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,selector:"mat-pseudo-checkbox",styles:[".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],template:"",host:{"class":"mat-pseudo-checkbox","[class.mat-pseudo-checkbox-indeterminate]":"state === \"indeterminate\"","[class.mat-pseudo-checkbox-checked]":"state === \"checked\"","[class.mat-pseudo-checkbox-disabled]":"disabled","[class._mat-animation-noopable]":"_animationMode === \"NoopAnimations\""}}]}];/** @nocollapse */MatPseudoCheckbox.ctorParameters=function(){return[{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]}]}]};MatPseudoCheckbox.propDecorators={state:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatPseudoCheckboxModule=function MatPseudoCheckboxModule(){};MatPseudoCheckboxModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{exports:[MatPseudoCheckbox],declarations:[MatPseudoCheckbox]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // Boilerplate for applying mixins to MatOptgroup.
/**
 * \@docs-private
 */var MatOptgroupBase=function MatOptgroupBase(){};/** @type {?} */var _MatOptgroupMixinBase=mixinDisabled(MatOptgroupBase);// Counter for unique group ids.
/** @type {?} */var _uniqueOptgroupIdCounter=0;/**
 * Component that is used to group instances of `mat-option`.
 */var MatOptgroup=/*#__PURE__*/function(_MatOptgroupMixinBase2){_inheritsLoose(MatOptgroup,_MatOptgroupMixinBase2);function MatOptgroup(){var _this96;_this96=_MatOptgroupMixinBase2.apply(this,arguments)||this;/**
         * Unique id for the underlying label.
         */_this96._labelId="mat-optgroup-label-"+_uniqueOptgroupIdCounter++;return _this96}return MatOptgroup}(_MatOptgroupMixinBase);MatOptgroup.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-optgroup",exportAs:"matOptgroup",template:"<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}<ng-content></ng-content></label><ng-content select=\"mat-option, ng-container\"></ng-content>",encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,inputs:["disabled"],styles:[".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],host:{"class":"mat-optgroup","role":"group","[class.mat-optgroup-disabled]":"disabled","[attr.aria-disabled]":"disabled.toString()","[attr.aria-labelledby]":"_labelId"}}]}];MatOptgroup.propDecorators={label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 * @type {?}
 */var _uniqueIdCounter=0;/**
 * Event object emitted by MatOption when selected or deselected.
 */var MatOptionSelectionChange=/**
     * @param {?} source
     * @param {?=} isUserInput
     */function MatOptionSelectionChange(source,isUserInput){if(isUserInput===void 0){isUserInput=false}this.source=source;this.isUserInput=isUserInput};/**
 * Injection token used to provide the parent component to options.
 * @type {?}
 */var MAT_OPTION_PARENT_COMPONENT=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("MAT_OPTION_PARENT_COMPONENT");/**
 * Single option inside of a `<mat-select>` element.
 */var MatOption=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _parent
     * @param {?} group
     */function MatOption(_element,_changeDetectorRef,_parent,group){this._element=_element;this._changeDetectorRef=_changeDetectorRef;this._parent=_parent;this.group=group;this._selected=false;this._active=false;this._disabled=false;this._mostRecentViewValue="";/**
         * The unique ID of the option.
         */this.id="mat-option-"+_uniqueIdCounter++;/**
         * Event emitted when the option is selected or deselected.
         */ // tslint:disable-next-line:no-output-on-prefix
this.onSelectionChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * Emits when the state of the option changes and any parents have to be notified.
         */this._stateChanges=new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]}/**
     * Whether the wrapping component is in multiple selection mode.
     * @return {?}
     */var _proto81=MatOption.prototype;/**
     * Selects the option.
     * @return {?}
     */_proto81.select=function select(){if(!this._selected){this._selected=true;this._changeDetectorRef.markForCheck();this._emitSelectionChangeEvent()}}/**
     * Deselects the option.
     * @return {?}
     */;_proto81.deselect=function deselect(){if(this._selected){this._selected=false;this._changeDetectorRef.markForCheck();this._emitSelectionChangeEvent()}}/**
     * Sets focus onto this option.
     * @param {?=} _origin
     * @param {?=} options
     * @return {?}
     */;_proto81.focus=function focus(_origin,options){// Note that we aren't using `_origin`, but we need to keep it because some internal consumers
// use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
/** @type {?} */var element=this._getHostElement();if(typeof element.focus==="function"){element.focus(options)}}/**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */;_proto81.setActiveStyles=function setActiveStyles(){if(!this._active){this._active=true;this._changeDetectorRef.markForCheck()}}/**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */;_proto81.setInactiveStyles=function setInactiveStyles(){if(this._active){this._active=false;this._changeDetectorRef.markForCheck()}}/**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */;_proto81.getLabel=function getLabel(){return this.viewValue}/**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */;_proto81._handleKeydown=function _handleKeydown(event){if((event.keyCode===_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]||event.keyCode===_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"])&&!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)){this._selectViaInteraction();// Prevent the page from scrolling down and form submits.
event.preventDefault()}}/**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     * @return {?}
     */;_proto81._selectViaInteraction=function _selectViaInteraction(){if(!this.disabled){this._selected=this.multiple?!this._selected:true;this._changeDetectorRef.markForCheck();this._emitSelectionChangeEvent(true)}}/**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     * @return {?}
     */;_proto81._getAriaSelected=function _getAriaSelected(){return this.selected||(this.multiple?false:null)}/**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */;_proto81._getTabIndex=function _getTabIndex(){return this.disabled?"-1":"0"}/**
     * Gets the host DOM element.
     * @return {?}
     */;_proto81._getHostElement=function _getHostElement(){return this._element.nativeElement}/**
     * @return {?}
     */;_proto81.ngAfterViewChecked=function ngAfterViewChecked(){// Since parent components could be using the option's label to display the selected values
// (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
// we have to check for changes in the DOM ourselves and dispatch an event. These checks are
// relatively cheap, however we still limit them only to selected options in order to avoid
// hitting the DOM too often.
if(this._selected){/** @type {?} */var viewValue=this.viewValue;if(viewValue!==this._mostRecentViewValue){this._mostRecentViewValue=viewValue;this._stateChanges.next()}}}/**
     * @return {?}
     */;_proto81.ngOnDestroy=function ngOnDestroy(){this._stateChanges.complete()}/**
     * Emits the selection change event.
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */;_proto81._emitSelectionChangeEvent=function _emitSelectionChangeEvent(isUserInput){if(isUserInput===void 0){isUserInput=false}this.onSelectionChange.emit(new MatOptionSelectionChange(this,isUserInput))};_createClass(MatOption,[{key:"multiple",get:function get(){return this._parent&&this._parent.multiple}/**
     * Whether or not the option is currently selected.
     * @return {?}
     */},{key:"selected",get:function get(){return this._selected}/**
     * Whether the option is disabled.
     * @return {?}
     */},{key:"disabled",get:function get(){return this.group&&this.group.disabled||this._disabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._disabled=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value)}/**
     * Whether ripples for the option are disabled.
     * @return {?}
     */},{key:"disableRipple",get:function get(){return this._parent&&this._parent.disableRipple}/**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     * @return {?}
     */},{key:"active",get:function get(){return this._active}/**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     * @return {?}
     */},{key:"viewValue",get:function get(){// TODO(kara): Add input property alternative for node envs.
return(this._getHostElement().textContent||"").trim()}}]);return MatOption}();MatOption.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-option",exportAs:"matOption",host:{"role":"option","[attr.tabindex]":"_getTabIndex()","[class.mat-selected]":"selected","[class.mat-option-multiple]":"multiple","[class.mat-active]":"active","[id]":"id","[attr.aria-selected]":"_getAriaSelected()","[attr.aria-disabled]":"disabled.toString()","[class.mat-option-disabled]":"disabled","(click)":"_selectViaInteraction()","(keydown)":"_handleKeydown($event)","class":"mat-option"},styles:[".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],template:"<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush}]}];/** @nocollapse */MatOption.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[MAT_OPTION_PARENT_COMPONENT]}]},{type:MatOptgroup,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]}]}]};MatOption.propDecorators={value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onSelectionChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * Counts the amount of option group labels that precede the specified option.
 * \@docs-private
 * @param {?} optionIndex Index of the option at which to start counting.
 * @param {?} options Flat list of all of the options.
 * @param {?} optionGroups Flat list of all of the option groups.
 * @return {?}
 */function _countGroupLabelsBeforeOption(optionIndex,options,optionGroups){if(optionGroups.length){/** @type {?} */var optionsArray=options.toArray();/** @type {?} */var groups=optionGroups.toArray();/** @type {?} */var groupCounter=0;for(var i=0;i<optionIndex+1;i++){if(optionsArray[i].group&&optionsArray[i].group===groups[groupCounter]){groupCounter++}}return groupCounter}return 0}/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * \@docs-private
 * @param {?} optionIndex Index of the option to be scrolled into the view.
 * @param {?} optionHeight Height of the options.
 * @param {?} currentScrollPosition Current scroll position of the panel.
 * @param {?} panelHeight Height of the panel.
 * @return {?}
 */function _getOptionScrollPosition(optionIndex,optionHeight,currentScrollPosition,panelHeight){/** @type {?} */var optionOffset=optionIndex*optionHeight;if(optionOffset<currentScrollPosition){return optionOffset}if(optionOffset+optionHeight>currentScrollPosition+panelHeight){return Math.max(0,optionOffset-panelHeight+optionHeight)}return currentScrollPosition}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatOptionModule=function MatOptionModule(){};MatOptionModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[MatRippleModule,_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],MatPseudoCheckboxModule],exports:[MatOption,MatOptgroup],declarations:[MatOption,MatOptgroup]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * InjectionToken that can be used to specify the global label options.
 * @type {?}
 */var MAT_LABEL_GLOBAL_OPTIONS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("mat-label-global-options");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * When constructing a Date, the month is zero-based. This can be confusing, since people are
 * used to seeing them one-based. So we create these aliases to make writing the tests easier.
 * \@docs-private
 * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
 * @type {?}
 */var JAN=0;/** @type {?} */var FEB=1;/** @type {?} */var MAR=2;/** @type {?} */var APR=3;/** @type {?} */var MAY=4;/** @type {?} */var JUN=5;/** @type {?} */var JUL=6;/** @type {?} */var AUG=7;/** @type {?} */var SEP=8;/** @type {?} */var OCT=9;/** @type {?} */var NOV=10;/** @type {?} */var DEC=11;/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=core.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/divider.js":/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/divider.js ***!
  \***********************************************************/ /*! exports provided: MatDivider, MatDividerModule */ /***/function node_modulesAngularMaterialEsm2015DividerJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatDivider",function(){return MatDivider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatDividerModule",function(){return MatDividerModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/material/core */"./node_modules/@angular/material/esm2015/core.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatDivider=/*#__PURE__*/function(){function MatDivider(){this._vertical=false;this._inset=false}/**
     * Whether the divider is vertically aligned.
     * @return {?}
     */_createClass(MatDivider,[{key:"vertical",get:function get(){return this._vertical}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._vertical=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value)}/**
     * Whether the divider is an inset divider.
     * @return {?}
     */},{key:"inset",get:function get(){return this._inset}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._inset=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value)}}]);return MatDivider}();MatDivider.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-divider",host:{"role":"separator","[attr.aria-orientation]":"vertical ? \"vertical\" : \"horizontal\"","[class.mat-divider-vertical]":"vertical","[class.mat-divider-horizontal]":"!vertical","[class.mat-divider-inset]":"inset","class":"mat-divider"},template:"",styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush}]}];MatDivider.propDecorators={vertical:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],inset:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatDividerModule=function MatDividerModule(){};MatDividerModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],exports:[MatDivider,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],declarations:[MatDivider]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=divider.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/form-field.js":/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/form-field.js ***!
  \**************************************************************/ /*! exports provided: MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */ /***/function node_modulesAngularMaterialEsm2015FormFieldJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatFormFieldModule",function(){return MatFormFieldModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatError",function(){return MatError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_FORM_FIELD_DEFAULT_OPTIONS",function(){return MAT_FORM_FIELD_DEFAULT_OPTIONS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatFormField",function(){return MatFormField});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatFormFieldControl",function(){return MatFormFieldControl});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMatFormFieldPlaceholderConflictError",function(){return getMatFormFieldPlaceholderConflictError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMatFormFieldDuplicatedHintError",function(){return getMatFormFieldDuplicatedHintError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMatFormFieldMissingControlError",function(){return getMatFormFieldMissingControlError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatHint",function(){return MatHint});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatPlaceholder",function(){return MatPlaceholder});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatPrefix",function(){return MatPrefix});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatSuffix",function(){return MatSuffix});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatLabel",function(){return MatLabel});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"matFormFieldAnimations",function(){return matFormFieldAnimations});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_animations__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");/* harmony import */var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/cdk/bidi */"./node_modules/@angular/cdk/esm2015/bidi.js");/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/material/core */"./node_modules/@angular/material/esm2015/core.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/* harmony import */var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! @angular/cdk/platform */"./node_modules/@angular/cdk/esm2015/platform.js");/* harmony import */var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! @angular/cdk/observers */"./node_modules/@angular/cdk/esm2015/observers.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var nextUniqueId=0;/**
 * Single error message to be shown underneath the form field.
 */var MatError=function MatError(){this.id="mat-error-"+nextUniqueId++};MatError.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-error",host:{"class":"mat-error","role":"alert","[attr.id]":"id"}}]}];MatError.propDecorators={id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Animations used by the MatFormField.
 * \@docs-private
 * @type {?}
 */var matFormFieldAnimations={/**
     * Animation that transitions the form field's error and hint messages.
     */transitionMessages:Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("transitionMessages",[// TODO(mmalerba): Use angular animations for label animation as well.
Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("enter",Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({opacity:1,transform:"translateY(0%)"})),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => enter",[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({opacity:0,transform:"translateY(-100%)"}),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("300ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * An interface which allows a control to work inside of a `MatFormField`.
 * @abstract
 * @template T
 */var MatFormFieldControl=function MatFormFieldControl(){};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@docs-private
 * @return {?}
 */function getMatFormFieldPlaceholderConflictError(){return Error("Placeholder attribute and child element were both specified.")}/**
 * \@docs-private
 * @param {?} align
 * @return {?}
 */function getMatFormFieldDuplicatedHintError(align){return Error("A hint was already declared for 'align=\""+align+"\"'.")}/**
 * \@docs-private
 * @return {?}
 */function getMatFormFieldMissingControlError(){return Error("mat-form-field must contain a MatFormFieldControl.")}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var nextUniqueId$1=0;/**
 * Hint text to be shown underneath the form field control.
 */var MatHint=function MatHint(){/**
         * Whether to align the hint label at the start or end of the line.
         */this.align="start";/**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */this.id="mat-hint-"+nextUniqueId$1++};MatHint.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-hint",host:{"class":"mat-hint","[class.mat-right]":"align == \"end\"","[attr.id]":"id",// Remove align attribute to prevent it from interfering with layout.
"[attr.align]":"null"}}]}];MatHint.propDecorators={align:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * The floating label for a `mat-form-field`.
 */var MatLabel=function MatLabel(){};MatLabel.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-label"}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * \@breaking-change 8.0.0
 */var MatPlaceholder=function MatPlaceholder(){};MatPlaceholder.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-placeholder"}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Prefix to be placed in front of the form field.
 */var MatPrefix=function MatPrefix(){};MatPrefix.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[matPrefix]"}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Suffix to be placed at the end of the form field.
 */var MatSuffix=function MatSuffix(){};MatSuffix.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[matSuffix]"}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var nextUniqueId$2=0;/** @type {?} */var floatingLabelScale=0.75;/** @type {?} */var outlineGapPadding=5;/**
 * Boilerplate for applying mixins to MatFormField.
 * \@docs-private
 */var MatFormFieldBase=/**
     * @param {?} _elementRef
     */function MatFormFieldBase(_elementRef){this._elementRef=_elementRef};/**
 * Base class to which we're applying the form field mixins.
 * \@docs-private
 * @type {?}
 */var _MatFormFieldMixinBase=Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatFormFieldBase,"primary");/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 * @type {?}
 */var MAT_FORM_FIELD_DEFAULT_OPTIONS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("MAT_FORM_FIELD_DEFAULT_OPTIONS");/**
 * Container for form controls that applies Material Design styling and behavior.
 */var MatFormField=/*#__PURE__*/function(_MatFormFieldMixinBas){_inheritsLoose(MatFormField,_MatFormFieldMixinBas);/**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} labelOptions
     * @param {?} _dir
     * @param {?} _defaults
     * @param {?} _platform
     * @param {?} _ngZone
     * @param {?} _animationMode
     */function MatFormField(_elementRef,_changeDetectorRef,labelOptions,_dir,_defaults,_platform,_ngZone,_animationMode){var _this97;_this97=_MatFormFieldMixinBas.call(this,_elementRef)||this;_this97._elementRef=_elementRef;_this97._changeDetectorRef=_changeDetectorRef;_this97._dir=_dir;_this97._defaults=_defaults;_this97._platform=_platform;_this97._ngZone=_ngZone;/**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */_this97._outlineGapCalculationNeededImmediately=false;/**
         * Whether the outline gap needs to be calculated next time the zone has stabilized.
         */_this97._outlineGapCalculationNeededOnStable=false;_this97._destroyed=new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"];/**
         * Override for the logic that disables the label animation in certain cases.
         */_this97._showAlwaysAnimate=false;/**
         * State of the mat-hint and mat-error animations.
         */_this97._subscriptAnimationState="";_this97._hintLabel="";// Unique id for the hint label.
_this97._hintLabelId="mat-hint-"+nextUniqueId$2++;// Unique id for the internal form field label.
_this97._labelId="mat-form-field-label-"+nextUniqueId$2++;_this97._labelOptions=labelOptions?labelOptions:{};_this97.floatLabel=_this97._labelOptions.float||"auto";_this97._animationsEnabled=_animationMode!=="NoopAnimations";// Set the default through here so we invoke the setter on the first run.
_this97.appearance=_defaults&&_defaults.appearance?_defaults.appearance:"legacy";_this97._hideRequiredMarker=_defaults&&_defaults.hideRequiredMarker!=null?_defaults.hideRequiredMarker:false;return _this97}/**
     * The form-field appearance style.
     * @return {?}
     */var _proto82=MatFormField.prototype;/**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     * @return {?}
     */_proto82.getConnectedOverlayOrigin=function getConnectedOverlayOrigin(){return this._connectionContainerRef||this._elementRef}/**
     * @return {?}
     */;_proto82.ngAfterContentInit=function ngAfterContentInit(){var _this98=this;this._validateControlChild();/** @type {?} */var control=this._control;if(control.controlType){this._elementRef.nativeElement.classList.add("mat-form-field-type-"+control.controlType)}// Subscribe to changes in the child control state in order to update the form field UI.
control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(/** @type {?} */null)).subscribe(/**
         * @return {?}
         */function(){_this98._validatePlaceholders();_this98._syncDescribedByIds();_this98._changeDetectorRef.markForCheck()});// Run change detection if the value changes.
if(control.ngControl&&control.ngControl.valueChanges){control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(/**
             * @return {?}
             */function(){return _this98._changeDetectorRef.markForCheck()})}// Note that we have to run outside of the `NgZone` explicitly,
// in order to avoid throwing users into an infinite loop
// if `zone-patch-rxjs` is included.
this._ngZone.runOutsideAngular(/**
         * @return {?}
         */function(){_this98._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this98._destroyed)).subscribe(/**
             * @return {?}
             */function(){if(_this98._outlineGapCalculationNeededOnStable){_this98.updateOutlineGap()}})});// Run change detection and update the outline if the suffix or prefix changes.
Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(/**
         * @return {?}
         */function(){_this98._outlineGapCalculationNeededOnStable=true;_this98._changeDetectorRef.markForCheck()});// Re-validate when the number of hints changes.
this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(/**
         * @return {?}
         */function(){_this98._processHints();_this98._changeDetectorRef.markForCheck()});// Update the aria-described by when the number of errors changes.
this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(/**
         * @return {?}
         */function(){_this98._syncDescribedByIds();_this98._changeDetectorRef.markForCheck()});if(this._dir){this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(/**
             * @return {?}
             */function(){return _this98.updateOutlineGap()})}}/**
     * @return {?}
     */;_proto82.ngAfterContentChecked=function ngAfterContentChecked(){this._validateControlChild();if(this._outlineGapCalculationNeededImmediately){this.updateOutlineGap()}}/**
     * @return {?}
     */;_proto82.ngAfterViewInit=function ngAfterViewInit(){// Avoid animations on load.
this._subscriptAnimationState="enter";this._changeDetectorRef.detectChanges()}/**
     * @return {?}
     */;_proto82.ngOnDestroy=function ngOnDestroy(){this._destroyed.next();this._destroyed.complete()}/**
     * Determines whether a class from the NgControl should be forwarded to the host element.
     * @param {?} prop
     * @return {?}
     */;_proto82._shouldForward=function _shouldForward(prop){/** @type {?} */var ngControl=this._control?this._control.ngControl:null;return ngControl&&ngControl[prop]}/**
     * @return {?}
     */;_proto82._hasPlaceholder=function _hasPlaceholder(){return!!(this._control&&this._control.placeholder||this._placeholderChild)}/**
     * @return {?}
     */;_proto82._hasLabel=function _hasLabel(){return!!this._labelChild}/**
     * @return {?}
     */;_proto82._shouldLabelFloat=function _shouldLabelFloat(){return this._canLabelFloat&&(this._control.shouldLabelFloat||this._shouldAlwaysFloat)}/**
     * @return {?}
     */;_proto82._hideControlPlaceholder=function _hideControlPlaceholder(){// In the legacy appearance the placeholder is promoted to a label if no label is given.
return this.appearance==="legacy"&&!this._hasLabel()||this._hasLabel()&&!this._shouldLabelFloat()}/**
     * @return {?}
     */;_proto82._hasFloatingLabel=function _hasFloatingLabel(){// In the legacy appearance the placeholder is promoted to a label if no label is given.
return this._hasLabel()||this.appearance==="legacy"&&this._hasPlaceholder()}/**
     * Determines whether to display hints or errors.
     * @return {?}
     */;_proto82._getDisplayedMessages=function _getDisplayedMessages(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}/**
     * Animates the placeholder up and locks it in position.
     * @return {?}
     */;_proto82._animateAndLockLabel=function _animateAndLockLabel(){var _this99=this;if(this._hasFloatingLabel()&&this._canLabelFloat){// If animations are disabled, we shouldn't go in here,
// because the `transitionend` will never fire.
if(this._animationsEnabled){this._showAlwaysAnimate=true;Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this._label.nativeElement,"transitionend").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(/**
                 * @return {?}
                 */function(){_this99._showAlwaysAnimate=false})}this.floatLabel="always";this._changeDetectorRef.markForCheck()}}/**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     * @private
     * @return {?}
     */;_proto82._validatePlaceholders=function _validatePlaceholders(){if(this._control.placeholder&&this._placeholderChild){throw getMatFormFieldPlaceholderConflictError()}}/**
     * Does any extra processing that is required when handling the hints.
     * @private
     * @return {?}
     */;_proto82._processHints=function _processHints(){this._validateHints();this._syncDescribedByIds()}/**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     * @private
     * @return {?}
     */;_proto82._validateHints=function _validateHints(){var _this100=this;if(this._hintChildren){/** @type {?} */var startHint;/** @type {?} */var endHint;this._hintChildren.forEach(/**
             * @param {?} hint
             * @return {?}
             */function(hint){if(hint.align==="start"){if(startHint||_this100.hintLabel){throw getMatFormFieldDuplicatedHintError("start")}startHint=hint}else if(hint.align==="end"){if(endHint){throw getMatFormFieldDuplicatedHintError("end")}endHint=hint}})}}/**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     * @private
     * @return {?}
     */;_proto82._syncDescribedByIds=function _syncDescribedByIds(){if(this._control){/** @type {?} */var ids=[];if(this._getDisplayedMessages()==="hint"){/** @type {?} */var startHint=this._hintChildren?this._hintChildren.find(/**
                     * @param {?} hint
                     * @return {?}
                     */function(hint){return hint.align==="start"}):null;/** @type {?} */var endHint=this._hintChildren?this._hintChildren.find(/**
                     * @param {?} hint
                     * @return {?}
                     */function(hint){return hint.align==="end"}):null;if(startHint){ids.push(startHint.id)}else if(this._hintLabel){ids.push(this._hintLabelId)}if(endHint){ids.push(endHint.id)}}else if(this._errorChildren){ids=this._errorChildren.map(/**
                 * @param {?} error
                 * @return {?}
                 */function(error){return error.id})}this._control.setDescribedByIds(ids)}}/**
     * Throws an error if the form field's control is missing.
     * @protected
     * @return {?}
     */;_proto82._validateControlChild=function _validateControlChild(){if(!this._control){throw getMatFormFieldMissingControlError()}}/**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     * @return {?}
     */;_proto82.updateOutlineGap=function updateOutlineGap(){/** @type {?} */var labelEl=this._label?this._label.nativeElement:null;if(this.appearance!=="outline"||!labelEl||!labelEl.children.length||!labelEl.textContent.trim()){return}if(!this._platform.isBrowser){// getBoundingClientRect isn't available on the server.
return}// If the element is not present in the DOM, the outline gap will need to be calculated
// the next time it is checked and in the DOM.
if(!/** @type {?} */document.documentElement.contains(this._elementRef.nativeElement)){this._outlineGapCalculationNeededImmediately=true;return}/** @type {?} */var startWidth=0;/** @type {?} */var gapWidth=0;/** @type {?} */var container=this._connectionContainerRef.nativeElement;/** @type {?} */var startEls=container.querySelectorAll(".mat-form-field-outline-start");/** @type {?} */var gapEls=container.querySelectorAll(".mat-form-field-outline-gap");if(this._label&&this._label.nativeElement.children.length){/** @type {?} */var containerRect=container.getBoundingClientRect();// If the container's width and height are zero, it means that the element is
// invisible and we can't calculate the outline gap. Mark the element as needing
// to be checked the next time the zone stabilizes. We can't do this immediately
// on the next change detection, because even if the element becomes visible,
// the `ClientRect` won't be reclaculated immediately. We reset the
// `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.
if(containerRect.width===0&&containerRect.height===0){this._outlineGapCalculationNeededOnStable=true;this._outlineGapCalculationNeededImmediately=false;return}/** @type {?} */var containerStart=this._getStartEnd(containerRect);/** @type {?} */var labelStart=this._getStartEnd(labelEl.children[0].getBoundingClientRect());/** @type {?} */var labelWidth=0;for(var _iterator3=labelEl.children,_isArray3=Array.isArray(_iterator3),_i7=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref5;if(_isArray3){if(_i7>=_iterator3.length)break;_ref5=_iterator3[_i7++]}else{_i7=_iterator3.next();if(_i7.done)break;_ref5=_i7.value}var child=_ref5;labelWidth+=child.offsetWidth}startWidth=labelStart-containerStart-outlineGapPadding;gapWidth=labelWidth>0?labelWidth*floatingLabelScale+outlineGapPadding*2:0}for(var i=0;i<startEls.length;i++){startEls.item(i).style.width=startWidth+"px"}for(var _i8=0;_i8<gapEls.length;_i8++){gapEls.item(_i8).style.width=gapWidth+"px"}this._outlineGapCalculationNeededOnStable=this._outlineGapCalculationNeededImmediately=false}/**
     * Gets the start end of the rect considering the current directionality.
     * @private
     * @param {?} rect
     * @return {?}
     */;_proto82._getStartEnd=function _getStartEnd(rect){return this._dir&&this._dir.value==="rtl"?rect.right:rect.left};_createClass(MatFormField,[{key:"appearance",get:function get(){return this._appearance}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){/** @type {?} */var oldValue=this._appearance;this._appearance=value||this._defaults&&this._defaults.appearance||"legacy";if(this._appearance==="outline"&&oldValue!==value){this._outlineGapCalculationNeededOnStable=true}}/**
     * Whether the required marker should be hidden.
     * @return {?}
     */},{key:"hideRequiredMarker",get:function get(){return this._hideRequiredMarker}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._hideRequiredMarker=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value)}/**
     * Whether the floating label should always float or not.
     * @return {?}
     */},{key:"_shouldAlwaysFloat",get:function get(){return this.floatLabel==="always"&&!this._showAlwaysAnimate}/**
     * Whether the label can float or not.
     * @return {?}
     */},{key:"_canLabelFloat",get:function get(){return this.floatLabel!=="never"}/**
     * Text for the form field hint.
     * @return {?}
     */},{key:"hintLabel",get:function get(){return this._hintLabel}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._hintLabel=value;this._processHints()}/**
     * Whether the label should always float, never float or float as the user types.
     *
     * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
     * way to make the floating label emulate the behavior of a standard input placeholder. However
     * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
     * appearances the `never` option has been disabled in favor of just using the placeholder.
     * @return {?}
     */},{key:"floatLabel",get:function get(){return this.appearance!=="legacy"&&this._floatLabel==="never"?"auto":this._floatLabel}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){if(value!==this._floatLabel){this._floatLabel=value||this._labelOptions.float||"auto";this._changeDetectorRef.markForCheck()}}/**
     * @return {?}
     */},{key:"_control",get:function get(){// TODO(crisbeto): we need this hacky workaround in order to support both Ivy
// and ViewEngine. We should clean this up once Ivy is the default renderer.
return this._explicitFormFieldControl||this._controlNonStatic||this._controlStatic}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._explicitFormFieldControl=value}/**
     * @return {?}
     */},{key:"_labelChild",get:function get(){return this._labelChildNonStatic||this._labelChildStatic}}]);return MatFormField}(_MatFormFieldMixinBase);MatFormField.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-form-field",exportAs:"matFormField",template:"<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" (cdkObserveContent)=\"updateOutlineGap()\" [cdkObserveContentDisabled]=\"appearance != 'outline'\" [id]=\"_labelId\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content><span>{{_control.placeholder}}</span></ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",// MatInput is a directive and can't have styles, so we need to include its styles here
// in form-field-input.css. The MatInput styles are fairly minimal so it shouldn't be a
// big deal for people who aren't using MatInput.
styles:[".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],animations:[matFormFieldAnimations.transitionMessages],host:{"class":"mat-form-field","[class.mat-form-field-appearance-standard]":"appearance == \"standard\"","[class.mat-form-field-appearance-fill]":"appearance == \"fill\"","[class.mat-form-field-appearance-outline]":"appearance == \"outline\"","[class.mat-form-field-appearance-legacy]":"appearance == \"legacy\"","[class.mat-form-field-invalid]":"_control.errorState","[class.mat-form-field-can-float]":"_canLabelFloat","[class.mat-form-field-should-float]":"_shouldLabelFloat()","[class.mat-form-field-has-label]":"_hasFloatingLabel()","[class.mat-form-field-hide-placeholder]":"_hideControlPlaceholder()","[class.mat-form-field-disabled]":"_control.disabled","[class.mat-form-field-autofilled]":"_control.autofilled","[class.mat-focused]":"_control.focused","[class.mat-accent]":"color == \"accent\"","[class.mat-warn]":"color == \"warn\"","[class.ng-untouched]":"_shouldForward(\"untouched\")","[class.ng-touched]":"_shouldForward(\"touched\")","[class.ng-pristine]":"_shouldForward(\"pristine\")","[class.ng-dirty]":"_shouldForward(\"dirty\")","[class.ng-valid]":"_shouldForward(\"valid\")","[class.ng-invalid]":"_shouldForward(\"invalid\")","[class.ng-pending]":"_shouldForward(\"pending\")","[class._mat-animation-noopable]":"!_animationsEnabled"},inputs:["color"],encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush}]}];/** @nocollapse */MatFormField.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]]}]},{type:_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[MAT_FORM_FIELD_DEFAULT_OPTIONS]}]},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]}]}]};MatFormField.propDecorators={appearance:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],hideRequiredMarker:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],hintLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],floatLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],underlineRef:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],args:["underline",{static:false}]}],_connectionContainerRef:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],args:["connectionContainer",{static:true}]}],_inputContainerRef:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],args:["inputContainer",{static:false}]}],_label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],args:["label",{static:false}]}],_controlNonStatic:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],args:[MatFormFieldControl,{static:false}]}],_controlStatic:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],args:[MatFormFieldControl,{static:true}]}],_labelChildNonStatic:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],args:[MatLabel,{static:false}]}],_labelChildStatic:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],args:[MatLabel,{static:true}]}],_placeholderChild:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],args:[MatPlaceholder,{static:false}]}],_errorChildren:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],args:[MatError]}],_hintChildren:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],args:[MatHint]}],_prefixChildren:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],args:[MatPrefix]}],_suffixChildren:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],args:[MatSuffix]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatFormFieldModule=function MatFormFieldModule(){};MatFormFieldModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:[MatError,MatFormField,MatHint,MatLabel,MatPlaceholder,MatPrefix,MatSuffix],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"]],exports:[MatError,MatFormField,MatHint,MatLabel,MatPlaceholder,MatPrefix,MatSuffix]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=form-field.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/grid-list.js":/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/grid-list.js ***!
  \*************************************************************/ /*! exports provided: MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, ɵa8 */ /***/function node_modulesAngularMaterialEsm2015GridListJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatGridListModule",function(){return MatGridListModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatGridList",function(){return MatGridList});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatGridTile",function(){return MatGridTile});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatGridTileText",function(){return MatGridTileText});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatGridAvatarCssMatStyler",function(){return MatGridAvatarCssMatStyler});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatGridTileHeaderCssMatStyler",function(){return MatGridTileHeaderCssMatStyler});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatGridTileFooterCssMatStyler",function(){return MatGridTileFooterCssMatStyler});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a8",function(){return MAT_GRID_LIST});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/material/core */"./node_modules/@angular/material/esm2015/core.js");/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/cdk/bidi */"./node_modules/@angular/cdk/esm2015/bidi.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * \@docs-private
 * @type {?}
 */var MAT_GRID_LIST=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("MAT_GRID_LIST");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatGridTile=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?=} _gridList
     */function MatGridTile(_element,_gridList){this._element=_element;this._gridList=_gridList;this._rowspan=1;this._colspan=1}/**
     * Amount of rows that the grid tile takes up.
     * @return {?}
     */var _proto83=MatGridTile.prototype;/**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @param {?} property
     * @param {?} value
     * @return {?}
     */_proto83._setStyle=function _setStyle(property,value){/** @type {?} */this._element.nativeElement.style[property]=value};_createClass(MatGridTile,[{key:"rowspan",get:function get(){return this._rowspan}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._rowspan=Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value))}/**
     * Amount of columns that the grid tile takes up.
     * @return {?}
     */},{key:"colspan",get:function get(){return this._colspan}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._colspan=Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value))}}]);return MatGridTile}();MatGridTile.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-grid-tile",exportAs:"matGridTile",host:{"class":"mat-grid-tile"},template:"<figure class=\"mat-figure\"><ng-content></ng-content></figure>",styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush}]}];/** @nocollapse */MatGridTile.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[MAT_GRID_LIST]}]}]};MatGridTile.propDecorators={rowspan:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],colspan:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};var MatGridTileText=/*#__PURE__*/function(){/**
     * @param {?} _element
     */function MatGridTileText(_element){this._element=_element}/**
     * @return {?}
     */var _proto84=MatGridTileText.prototype;_proto84.ngAfterContentInit=function ngAfterContentInit(){Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines,this._element)};return MatGridTileText}();MatGridTileText.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-grid-tile-header, mat-grid-tile-footer",template:"<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content><div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div><ng-content></ng-content>",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None}]}];/** @nocollapse */MatGridTileText.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};MatGridTileText.propDecorators={_lines:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],args:[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"]]}]};/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */var MatGridAvatarCssMatStyler=function MatGridAvatarCssMatStyler(){};MatGridAvatarCssMatStyler.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[mat-grid-avatar], [matGridAvatar]",host:{"class":"mat-grid-avatar"}}]}];/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */var MatGridTileHeaderCssMatStyler=function MatGridTileHeaderCssMatStyler(){};MatGridTileHeaderCssMatStyler.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-grid-tile-header",host:{"class":"mat-grid-tile-header"}}]}];/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */var MatGridTileFooterCssMatStyler=function MatGridTileFooterCssMatStyler(){};MatGridTileFooterCssMatStyler.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"mat-grid-tile-footer",host:{"class":"mat-grid-tile-footer"}}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * \@docs-private
 */var TileCoordinator=/*#__PURE__*/function(){function TileCoordinator(){/**
         * Index at which the search for the next gap will start.
         */this.columnIndex=0;/**
         * The current row index.
         */this.rowIndex=0}/**
     * Gets the total number of rows occupied by tiles
     * @return {?}
     */var _proto85=TileCoordinator.prototype;/**
     * Updates the tile positions.
     * @param {?} numColumns Amount of columns in the grid.
     * @param {?} tiles
     * @return {?}
     */_proto85.update=function update(numColumns,tiles){var _this101=this;this.columnIndex=0;this.rowIndex=0;this.tracker=new Array(numColumns);this.tracker.fill(0,0,this.tracker.length);this.positions=tiles.map(/**
         * @param {?} tile
         * @return {?}
         */function(tile){return _this101._trackTile(tile)})}/**
     * Calculates the row and col position of a tile.
     * @private
     * @param {?} tile
     * @return {?}
     */;_proto85._trackTile=function _trackTile(tile){// Find a gap large enough for this tile.
/** @type {?} */var gapStartIndex=this._findMatchingGap(tile.colspan);// Place tile in the resulting gap.
this._markTilePosition(gapStartIndex,tile);// The next time we look for a gap, the search will start at columnIndex, which should be
// immediately after the tile that has just been placed.
this.columnIndex=gapStartIndex+tile.colspan;return new TilePosition(this.rowIndex,gapStartIndex)}/**
     * Finds the next available space large enough to fit the tile.
     * @private
     * @param {?} tileCols
     * @return {?}
     */;_proto85._findMatchingGap=function _findMatchingGap(tileCols){if(tileCols>this.tracker.length){throw Error("mat-grid-list: tile with colspan "+tileCols+" is wider than "+("grid with cols=\""+this.tracker.length+"\"."))}// Start index is inclusive, end index is exclusive.
/** @type {?} */var gapStartIndex=-1;/** @type {?} */var gapEndIndex=-1;// Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
do{// If we've reached the end of the row, go to the next row.
if(this.columnIndex+tileCols>this.tracker.length){this._nextRow();gapStartIndex=this.tracker.indexOf(0,this.columnIndex);gapEndIndex=this._findGapEndIndex(gapStartIndex);continue}gapStartIndex=this.tracker.indexOf(0,this.columnIndex);// If there are no more empty spaces in this row at all, move on to the next row.
if(gapStartIndex==-1){this._nextRow();gapStartIndex=this.tracker.indexOf(0,this.columnIndex);gapEndIndex=this._findGapEndIndex(gapStartIndex);continue}gapEndIndex=this._findGapEndIndex(gapStartIndex);// If a gap large enough isn't found, we want to start looking immediately after the current
// gap on the next iteration.
this.columnIndex=gapStartIndex+1;// Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
// exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
}while(gapEndIndex-gapStartIndex<tileCols||gapEndIndex==0);// If we still didn't manage to find a gap, ensure that the index is
// at least zero so the tile doesn't get pulled out of the grid.
return Math.max(gapStartIndex,0)}/**
     * Move "down" to the next row.
     * @private
     * @return {?}
     */;_proto85._nextRow=function _nextRow(){this.columnIndex=0;this.rowIndex++;// Decrement all spaces by one to reflect moving down one row.
for(var i=0;i<this.tracker.length;i++){this.tracker[i]=Math.max(0,this.tracker[i]-1)}}/**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     * @private
     * @param {?} gapStartIndex
     * @return {?}
     */;_proto85._findGapEndIndex=function _findGapEndIndex(gapStartIndex){for(var i=gapStartIndex+1;i<this.tracker.length;i++){if(this.tracker[i]!=0){return i}}// The gap ends with the end of the row.
return this.tracker.length}/**
     * Update the tile tracker to account for the given tile in the given space.
     * @private
     * @param {?} start
     * @param {?} tile
     * @return {?}
     */;_proto85._markTilePosition=function _markTilePosition(start,tile){for(var i=0;i<tile.colspan;i++){this.tracker[start+i]=tile.rowspan}};_createClass(TileCoordinator,[{key:"rowCount",get:function get(){return this.rowIndex+1}/**
     * Gets the total span of rows occupied by tiles.
     * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
     * @return {?}
     */},{key:"rowspan",get:function get(){/** @type {?} */var lastRowMax=Math.max.apply(Math,this.tracker);// if any of the tiles has a rowspan that pushes it beyond the total row count,
// add the difference to the rowcount
return lastRowMax>1?this.rowCount+lastRowMax-1:this.rowCount}}]);return TileCoordinator}();/**
 * Simple data structure for tile position (row, col).
 * \@docs-private
 */var TilePosition=/**
     * @param {?} row
     * @param {?} col
     */function TilePosition(row,col){this.row=row;this.col=col};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 * @type {?}
 */var cssCalcAllowedValue=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * \@docs-private
 * @abstract
 */var TileStyler=/*#__PURE__*/function(){function TileStyler(){this._rows=0;this._rowspan=0}/**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param {?} gutterSize Size of the grid's gutter.
     * @param {?} tracker Instance of the TileCoordinator.
     * @param {?} cols Amount of columns in the grid.
     * @param {?} direction Layout direction of the grid.
     * @return {?}
     */var _proto86=TileStyler.prototype;_proto86.init=function init(gutterSize,tracker,cols,direction){this._gutterSize=normalizeUnits(gutterSize);this._rows=tracker.rowCount;this._rowspan=tracker.rowspan;this._cols=cols;this._direction=direction}/**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */;_proto86.getBaseTileSize=function getBaseTileSize(sizePercent,gutterFraction){// Take the base size percent (as would be if evenly dividing the size between cells),
// and then subtracting the size of one gutter. However, since there are no gutters on the
// edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
// size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
// edge evenly among the cells).
return"("+sizePercent+"% - ("+this._gutterSize+" * "+gutterFraction+"))"}/**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} offset Number of tiles that have already been rendered in the row/column.
     * @return {?} Position of the tile as a CSS calc() expression.
     */;_proto86.getTilePosition=function getTilePosition(baseSize,offset){// The position comes the size of a 1x1 tile plus gutter for each previous tile in the
// row/column (offset).
return offset===0?"0":calc("("+baseSize+" + "+this._gutterSize+") * "+offset)}/**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} span The tile's rowspan or colspan.
     * @return {?} Size of the tile as a CSS calc() expression.
     */;_proto86.getTileSize=function getTileSize(baseSize,span){return"("+baseSize+" * "+span+") + ("+(span-1)+" * "+this._gutterSize+")"}/**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param {?} tile Tile to which to apply the styling.
     * @param {?} rowIndex Index of the tile's row.
     * @param {?} colIndex Index of the tile's column.
     * @return {?}
     */;_proto86.setStyle=function setStyle(tile,rowIndex,colIndex){// Percent of the available horizontal space that one column takes up.
/** @type {?} */var percentWidthPerTile=100/this._cols;// Fraction of the vertical gutter size that each column takes up.
// For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
/** @type {?} */var gutterWidthFractionPerTile=(this._cols-1)/this._cols;this.setColStyles(tile,colIndex,percentWidthPerTile,gutterWidthFractionPerTile);this.setRowStyles(tile,rowIndex,percentWidthPerTile,gutterWidthFractionPerTile)}/**
     * Sets the horizontal placement of the tile in the list.
     * @param {?} tile
     * @param {?} colIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */;_proto86.setColStyles=function setColStyles(tile,colIndex,percentWidth,gutterWidth){// Base horizontal size of a column.
/** @type {?} */var baseTileWidth=this.getBaseTileSize(percentWidth,gutterWidth);// The width and horizontal position of each tile is always calculated the same way, but the
// height and vertical position depends on the rowMode.
/** @type {?} */var side=this._direction==="rtl"?"right":"left";tile._setStyle(side,this.getTilePosition(baseTileWidth,colIndex));tile._setStyle("width",calc(this.getTileSize(baseTileWidth,tile.colspan)))}/**
     * Calculates the total size taken up by gutters across one axis of a list.
     * @return {?}
     */;_proto86.getGutterSpan=function getGutterSpan(){return this._gutterSize+" * ("+this._rowspan+" - 1)"}/**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param {?} tileHeight Height of the tile.
     * @return {?}
     */;_proto86.getTileSpan=function getTileSpan(tileHeight){return this._rowspan+" * "+this.getTileSize(tileHeight,1)}/**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * \@docs-private
     * @return {?}
     */;_proto86.getComputedHeight=function getComputedHeight(){return null};return TileStyler}();/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * \@docs-private
 */var FixedTileStyler=/*#__PURE__*/function(_TileStyler){_inheritsLoose(FixedTileStyler,_TileStyler);/**
     * @param {?} fixedRowHeight
     */function FixedTileStyler(fixedRowHeight){var _this102;_this102=_TileStyler.call(this)||this;_this102.fixedRowHeight=fixedRowHeight;return _this102}/**
     * @param {?} gutterSize
     * @param {?} tracker
     * @param {?} cols
     * @param {?} direction
     * @return {?}
     */var _proto87=FixedTileStyler.prototype;_proto87.init=function init(gutterSize,tracker,cols,direction){_TileStyler.prototype.init.call(this,gutterSize,tracker,cols,direction);this.fixedRowHeight=normalizeUnits(this.fixedRowHeight);if(!cssCalcAllowedValue.test(this.fixedRowHeight)){throw Error("Invalid value \""+this.fixedRowHeight+"\" set as rowHeight.")}}/**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */;_proto87.setRowStyles=function setRowStyles(tile,rowIndex){tile._setStyle("top",this.getTilePosition(this.fixedRowHeight,rowIndex));tile._setStyle("height",calc(this.getTileSize(this.fixedRowHeight,tile.rowspan)))}/**
     * @return {?}
     */;_proto87.getComputedHeight=function getComputedHeight(){return["height",calc(this.getTileSpan(this.fixedRowHeight)+" + "+this.getGutterSpan())]}/**
     * @param {?} list
     * @return {?}
     */;_proto87.reset=function reset(list){list._setListStyle(["height",null]);if(list._tiles){list._tiles.forEach(/**
             * @param {?} tile
             * @return {?}
             */function(tile){tile._setStyle("top",null);tile._setStyle("height",null)})}};return FixedTileStyler}(TileStyler);/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * \@docs-private
 */var RatioTileStyler=/*#__PURE__*/function(_TileStyler2){_inheritsLoose(RatioTileStyler,_TileStyler2);/**
     * @param {?} value
     */function RatioTileStyler(value){var _this103;_this103=_TileStyler2.call(this)||this;_this103._parseRatio(value);return _this103}/**
     * @param {?} tile
     * @param {?} rowIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */var _proto88=RatioTileStyler.prototype;_proto88.setRowStyles=function setRowStyles(tile,rowIndex,percentWidth,gutterWidth){/** @type {?} */var percentHeightPerTile=percentWidth/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(percentHeightPerTile,gutterWidth);// Use padding-top and margin-top to maintain the given aspect ratio, as
// a percentage-based value for these properties is applied versus the *width* of the
// containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
tile._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,rowIndex));tile._setStyle("paddingTop",calc(this.getTileSize(this.baseTileHeight,tile.rowspan)))}/**
     * @return {?}
     */;_proto88.getComputedHeight=function getComputedHeight(){return["paddingBottom",calc(this.getTileSpan(this.baseTileHeight)+" + "+this.getGutterSpan())]}/**
     * @param {?} list
     * @return {?}
     */;_proto88.reset=function reset(list){list._setListStyle(["paddingBottom",null]);list._tiles.forEach(/**
         * @param {?} tile
         * @return {?}
         */function(tile){tile._setStyle("marginTop",null);tile._setStyle("paddingTop",null)})}/**
     * @private
     * @param {?} value
     * @return {?}
     */;_proto88._parseRatio=function _parseRatio(value){/** @type {?} */var ratioParts=value.split(":");if(ratioParts.length!==2){throw Error("mat-grid-list: invalid ratio given for row-height: \""+value+"\"")}this.rowHeightRatio=parseFloat(ratioParts[0])/parseFloat(ratioParts[1])};return RatioTileStyler}(TileStyler);/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * \@docs-private
 */var FitTileStyler=/*#__PURE__*/function(_TileStyler3){_inheritsLoose(FitTileStyler,_TileStyler3);function FitTileStyler(){return _TileStyler3.apply(this,arguments)||this}var _proto89=FitTileStyler.prototype;/**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */_proto89.setRowStyles=function setRowStyles(tile,rowIndex){// Percent of the available vertical space that one row takes up.
/** @type {?} */var percentHeightPerTile=100/this._rowspan;// Fraction of the horizontal gutter size that each column takes up.
/** @type {?} */var gutterHeightPerTile=(this._rows-1)/this._rows;// Base vertical size of a column.
/** @type {?} */var baseTileHeight=this.getBaseTileSize(percentHeightPerTile,gutterHeightPerTile);tile._setStyle("top",this.getTilePosition(baseTileHeight,rowIndex));tile._setStyle("height",calc(this.getTileSize(baseTileHeight,tile.rowspan)))}/**
     * @param {?} list
     * @return {?}
     */;_proto89.reset=function reset(list){if(list._tiles){list._tiles.forEach(/**
             * @param {?} tile
             * @return {?}
             */function(tile){tile._setStyle("top",null);tile._setStyle("height",null)})}};return FitTileStyler}(TileStyler);/**
 * Wraps a CSS string in a calc function
 * @param {?} exp
 * @return {?}
 */function calc(exp){return"calc("+exp+")"}/**
 * Appends pixels to a CSS string if no units are given.
 * @param {?} value
 * @return {?}
 */function normalizeUnits(value){return value.match(/([A-Za-z%]+)$/)?value:value+"px"}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
/** @type {?} */var MAT_FIT_MODE="fit";var MatGridList=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?} _dir
     */function MatGridList(_element,_dir){this._element=_element;this._dir=_dir;/**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */this._gutter="1px"}/**
     * Amount of columns in the grid list.
     * @return {?}
     */var _proto90=MatGridList.prototype;/**
     * @return {?}
     */_proto90.ngOnInit=function ngOnInit(){this._checkCols();this._checkRowHeight()}/**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * @return {?}
     */;_proto90.ngAfterContentChecked=function ngAfterContentChecked(){this._layoutTiles()}/**
     * Throw a friendly error if cols property is missing
     * @private
     * @return {?}
     */;_proto90._checkCols=function _checkCols(){if(!this.cols){throw Error("mat-grid-list: must pass in number of columns. "+"Example: <mat-grid-list cols=\"3\">")}}/**
     * Default to equal width:height if rowHeight property is missing
     * @private
     * @return {?}
     */;_proto90._checkRowHeight=function _checkRowHeight(){if(!this._rowHeight){this._setTileStyler("1:1")}}/**
     * Creates correct Tile Styler subtype based on rowHeight passed in by user
     * @private
     * @param {?} rowHeight
     * @return {?}
     */;_proto90._setTileStyler=function _setTileStyler(rowHeight){if(this._tileStyler){this._tileStyler.reset(this)}if(rowHeight===MAT_FIT_MODE){this._tileStyler=new FitTileStyler}else if(rowHeight&&rowHeight.indexOf(":")>-1){this._tileStyler=new RatioTileStyler(rowHeight)}else{this._tileStyler=new FixedTileStyler(rowHeight)}}/**
     * Computes and applies the size and position for all children grid tiles.
     * @private
     * @return {?}
     */;_proto90._layoutTiles=function _layoutTiles(){var _this104=this;if(!this._tileCoordinator){this._tileCoordinator=new TileCoordinator}/** @type {?} */var tracker=this._tileCoordinator;/** @type {?} */var tiles=this._tiles.filter(/**
         * @param {?} tile
         * @return {?}
         */function(tile){return!tile._gridList||tile._gridList===_this104});/** @type {?} */var direction=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,tiles);this._tileStyler.init(this.gutterSize,tracker,this.cols,direction);tiles.forEach(/**
         * @param {?} tile
         * @param {?} index
         * @return {?}
         */function(tile,index){/** @type {?} */var pos=tracker.positions[index];_this104._tileStyler.setStyle(tile,pos.row,pos.col)});this._setListStyle(this._tileStyler.getComputedHeight())}/**
     * Sets style on the main grid-list element, given the style name and value.
     * @param {?} style
     * @return {?}
     */;_proto90._setListStyle=function _setListStyle(style){if(style){/** @type {?} */this._element.nativeElement.style[style[0]]=style[1]}};_createClass(MatGridList,[{key:"cols",get:function get(){return this._cols}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._cols=Math.max(1,Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)))}/**
     * Size of the grid list's gutter in pixels.
     * @return {?}
     */},{key:"gutterSize",get:function get(){return this._gutter}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._gutter=""+(value==null?"":value)}/**
     * Set internal representation of row height from the user-provided value.
     * @return {?}
     */},{key:"rowHeight",get:function get(){return this._rowHeight}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){/** @type {?} */var newValue=""+(value==null?"":value);if(newValue!==this._rowHeight){this._rowHeight=newValue;this._setTileStyler(this._rowHeight)}}}]);return MatGridList}();MatGridList.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"mat-grid-list",exportAs:"matGridList",template:"<div><ng-content></ng-content></div>",styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],host:{"class":"mat-grid-list"},providers:[{provide:MAT_GRID_LIST,useExisting:MatGridList}],changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None}]}];/** @nocollapse */MatGridList.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]}]}]};MatGridList.propDecorators={_tiles:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],args:[MatGridTile,{descendants:true}]}],cols:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],gutterSize:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],rowHeight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatGridListModule=function MatGridListModule(){};MatGridListModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],exports:[MatGridList,MatGridTile,MatGridTileText,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],MatGridTileHeaderCssMatStyler,MatGridTileFooterCssMatStyler,MatGridAvatarCssMatStyler],declarations:[MatGridList,MatGridTile,MatGridTileText,MatGridTileHeaderCssMatStyler,MatGridTileFooterCssMatStyler,MatGridAvatarCssMatStyler]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=grid-list.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/icon.js":/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/icon.js ***!
  \********************************************************/ /*! exports provided: MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER */ /***/function node_modulesAngularMaterialEsm2015IconJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatIconModule",function(){return MatIconModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_ICON_LOCATION_FACTORY",function(){return MAT_ICON_LOCATION_FACTORY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_ICON_LOCATION",function(){return MAT_ICON_LOCATION});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatIcon",function(){return MatIcon});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMatIconNameNotFoundError",function(){return getMatIconNameNotFoundError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMatIconNoHttpProviderError",function(){return getMatIconNoHttpProviderError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMatIconFailedToSanitizeUrlError",function(){return getMatIconFailedToSanitizeUrlError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMatIconFailedToSanitizeLiteralError",function(){return getMatIconFailedToSanitizeLiteralError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ICON_REGISTRY_PROVIDER_FACTORY",function(){return ICON_REGISTRY_PROVIDER_FACTORY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatIconRegistry",function(){return MatIconRegistry});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ICON_REGISTRY_PROVIDER",function(){return ICON_REGISTRY_PROVIDER});/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! @angular/material/core */"./node_modules/@angular/material/esm2015/core.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * \@docs-private
 * @param {?} iconName
 * @return {?}
 */function getMatIconNameNotFoundError(iconName){return Error("Unable to find icon with the name \""+iconName+"\"")}/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including \@angular/common/http.
 * \@docs-private
 * @return {?}
 */function getMatIconNoHttpProviderError(){return Error("Could not find HttpClient provider for use with Angular Material icons. "+"Please include the HttpClientModule from @angular/common/http in your "+"app imports.")}/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * \@docs-private
 * @param {?} url URL that was attempted to be sanitized.
 * @return {?}
 */function getMatIconFailedToSanitizeUrlError(url){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL "+("via Angular's DomSanitizer. Attempted URL was \""+url+"\"."))}/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * \@docs-private
 * @param {?} literal HTML that was attempted to be sanitized.
 * @return {?}
 */function getMatIconFailedToSanitizeLiteralError(literal){return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by "+("Angular's DomSanitizer. Attempted literal was \""+literal+"\"."))}/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * \@docs-private
 */var SvgIconConfig=/**
     * @param {?} data
     * @param {?=} options
     */function SvgIconConfig(data,options){this.options=options;// Note that we can't use `instanceof SVGElement` here,
// because it'll break during server-side rendering.
if(!!/** @type {?} */data.nodeName){this.svgElement=/** @type {?} */data}else{this.url=/** @type {?} */data}};/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */var MatIconRegistry=/*#__PURE__*/function(){/**
     * @param {?} _httpClient
     * @param {?} _sanitizer
     * @param {?} document
     * @param {?=} _errorHandler
     */function MatIconRegistry(_httpClient,_sanitizer,document,_errorHandler){this._httpClient=_httpClient;this._sanitizer=_sanitizer;this._errorHandler=_errorHandler;/**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */this._svgIconConfigs=new Map;/**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */this._iconSetConfigs=new Map;/**
         * Cache for icons loaded by direct URLs.
         */this._cachedIconsByUrl=new Map;/**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */this._inProgressUrlFetches=new Map;/**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */this._fontCssClassesByAlias=new Map;/**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */this._defaultFontSetClass="material-icons";this._document=document}/**
     * Registers an icon by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */var _proto91=MatIconRegistry.prototype;_proto91.addSvgIcon=function addSvgIcon(iconName,url,options){return(/** @type {?} */this.addSvgIconInNamespace("",iconName,url,options))}/**
     * Registers an icon using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @param {?=} options
     * @return {THIS}
     */;_proto91.addSvgIconLiteral=function addSvgIconLiteral(iconName,literal,options){return(/** @type {?} */this.addSvgIconLiteralInNamespace("",iconName,literal,options))}/**
     * Registers an icon by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */;_proto91.addSvgIconInNamespace=function addSvgIconInNamespace(namespace,iconName,url,options){return(/** @type {?} */this._addSvgIconConfig(namespace,iconName,new SvgIconConfig(url,options)))}/**
     * Registers an icon using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @param {?=} options
     * @return {THIS}
     */;_proto91.addSvgIconLiteralInNamespace=function addSvgIconLiteralInNamespace(namespace,iconName,literal,options){/** @type {?} */var sanitizedLiteral=/** @type {?} */this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML,literal);if(!sanitizedLiteral){throw getMatIconFailedToSanitizeLiteralError(literal)}/** @type {?} */var svgElement=/** @type {?} */this._createSvgElementForSingleIcon(sanitizedLiteral,options);return(/** @type {?} */this._addSvgIconConfig(namespace,iconName,new SvgIconConfig(svgElement,options)))}/**
     * Registers an icon set by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */;_proto91.addSvgIconSet=function addSvgIconSet(url,options){return(/** @type {?} */this.addSvgIconSetInNamespace("",url,options))}/**
     * Registers an icon set using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} literal SVG source of the icon set.
     * @param {?=} options
     * @return {THIS}
     */;_proto91.addSvgIconSetLiteral=function addSvgIconSetLiteral(literal,options){return(/** @type {?} */this.addSvgIconSetLiteralInNamespace("",literal,options))}/**
     * Registers an icon set by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */;_proto91.addSvgIconSetInNamespace=function addSvgIconSetInNamespace(namespace,url,options){return(/** @type {?} */this._addSvgIconSetConfig(namespace,new SvgIconConfig(url,options)))}/**
     * Registers an icon set using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} literal SVG source of the icon set.
     * @param {?=} options
     * @return {THIS}
     */;_proto91.addSvgIconSetLiteralInNamespace=function addSvgIconSetLiteralInNamespace(namespace,literal,options){/** @type {?} */var sanitizedLiteral=/** @type {?} */this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML,literal);if(!sanitizedLiteral){throw getMatIconFailedToSanitizeLiteralError(literal)}/** @type {?} */var svgElement=/** @type {?} */this._svgElementFromString(sanitizedLiteral);return(/** @type {?} */this._addSvgIconSetConfig(namespace,new SvgIconConfig(svgElement,options)))}/**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} alias Alias for the font.
     * @param {?=} className Class name override to be used instead of the alias.
     * @return {THIS}
     */;_proto91.registerFontClassAlias=function registerFontClassAlias(alias,className){if(className===void 0){className=alias}/** @type {?} */this._fontCssClassesByAlias.set(alias,className);return(/** @type {?} */this)}/**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     * @param {?} alias
     * @return {?}
     */;_proto91.classNameForFontAlias=function classNameForFontAlias(alias){return this._fontCssClassesByAlias.get(alias)||alias}/**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} className
     * @return {THIS}
     */;_proto91.setDefaultFontSetClass=function setDefaultFontSetClass(className){/** @type {?} */this._defaultFontSetClass=className;return(/** @type {?} */this)}/**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     * @return {?}
     */;_proto91.getDefaultFontSetClass=function getDefaultFontSetClass(){return this._defaultFontSetClass}/**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param {?} safeUrl URL from which to fetch the SVG icon.
     * @return {?}
     */;_proto91.getSvgIconFromUrl=function getSvgIconFromUrl(safeUrl){var _this105=this;/** @type {?} */var url=this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL,safeUrl);if(!url){throw getMatIconFailedToSanitizeUrlError(safeUrl)}/** @type {?} */var cachedIcon=this._cachedIconsByUrl.get(url);if(cachedIcon){return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon))}return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(/**
         * @param {?} svg
         * @return {?}
         */function(svg){return _this105._cachedIconsByUrl.set(/** @type {?} */url,svg)}),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(/**
         * @param {?} svg
         * @return {?}
         */function(svg){return cloneSvg(svg)}))}/**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param {?} name Name of the icon to be retrieved.
     * @param {?=} namespace Namespace in which to look for the icon.
     * @return {?}
     */;_proto91.getNamedSvgIcon=function getNamedSvgIcon(name,namespace){if(namespace===void 0){namespace=""}// Return (copy of) cached icon if possible.
/** @type {?} */var key=iconKey(namespace,name);/** @type {?} */var config=this._svgIconConfigs.get(key);if(config){return this._getSvgFromConfig(config)}// See if we have any icon sets registered for the namespace.
/** @type {?} */var iconSetConfigs=this._iconSetConfigs.get(namespace);if(iconSetConfigs){return this._getSvgFromIconSetConfigs(name,iconSetConfigs)}return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key))}/**
     * @return {?}
     */;_proto91.ngOnDestroy=function ngOnDestroy(){this._svgIconConfigs.clear();this._iconSetConfigs.clear();this._cachedIconsByUrl.clear()}/**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     * @private
     * @param {?} config
     * @return {?}
     */;_proto91._getSvgFromConfig=function _getSvgFromConfig(config){if(config.svgElement){// We already have the SVG element for this icon, return a copy.
return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement))}else{// Fetch the icon from the config's URL, cache it, and return a copy.
return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(/**
             * @param {?} svg
             * @return {?}
             */function(svg){return config.svgElement=svg}),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(/**
             * @param {?} svg
             * @return {?}
             */function(svg){return cloneSvg(svg)}))}}/**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     * @private
     * @param {?} name
     * @param {?} iconSetConfigs
     * @return {?}
     */;_proto91._getSvgFromIconSetConfigs=function _getSvgFromIconSetConfigs(name,iconSetConfigs){var _this106=this;// For all the icon set SVG elements we've fetched, see if any contain an icon with the
// requested name.
/** @type {?} */var namedIcon=this._extractIconWithNameFromAnySet(name,iconSetConfigs);if(namedIcon){// We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
// time anyway, there's probably not much advantage compared to just always extracting
// it from the icon set.
return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon)}// Not found in any cached icon sets. If there are icon sets with URLs that we haven't
// fetched, fetch them now and look for iconName in the results.
/** @type {?} */var iconSetFetchRequests=iconSetConfigs.filter(/**
         * @param {?} iconSetConfig
         * @return {?}
         */function(iconSetConfig){return!iconSetConfig.svgElement}).map(/**
         * @param {?} iconSetConfig
         * @return {?}
         */function(iconSetConfig){return _this106._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(/**
             * @param {?} err
             * @return {?}
             */function(err){/** @type {?} */var url=_this106._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL,iconSetConfig.url);// Swallow errors fetching individual URLs so the
// combined Observable won't necessarily fail.
/** @type {?} */var errorMessage="Loading icon set URL: "+url+" failed: "+err.message;// @breaking-change 9.0.0 _errorHandler parameter to be made required
if(_this106._errorHandler){_this106._errorHandler.handleError(new Error(errorMessage))}else{console.error(errorMessage)}return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)}))});// Fetch all the icon set URLs. When the requests complete, every IconSet should have a
// cached SVG element (unless the request failed), and we can check again for the icon.
return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(/**
         * @return {?}
         */function(){/** @type {?} */var foundIcon=_this106._extractIconWithNameFromAnySet(name,iconSetConfigs);if(!foundIcon){throw getMatIconNameNotFoundError(name)}return foundIcon}))}/**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconName
     * @param {?} iconSetConfigs
     * @return {?}
     */;_proto91._extractIconWithNameFromAnySet=function _extractIconWithNameFromAnySet(iconName,iconSetConfigs){// Iterate backwards, so icon sets added later have precedence.
for(var i=iconSetConfigs.length-1;i>=0;i--){/** @type {?} */var config=iconSetConfigs[i];if(config.svgElement){/** @type {?} */var foundIcon=this._extractSvgIconFromSet(config.svgElement,iconName,config.options);if(foundIcon){return foundIcon}}}return null}/**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */;_proto91._loadSvgIconFromConfig=function _loadSvgIconFromConfig(config){var _this107=this;return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(/**
         * @param {?} svgText
         * @return {?}
         */function(svgText){return _this107._createSvgElementForSingleIcon(svgText,config.options)}))}/**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */;_proto91._loadSvgIconSetFromConfig=function _loadSvgIconSetFromConfig(config){var _this108=this;// If the SVG for this icon set has already been parsed, do nothing.
if(config.svgElement){return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement)}return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(/**
         * @param {?} svgText
         * @return {?}
         */function(svgText){// It is possible that the icon set was parsed and cached by an earlier request, so parsing
// only needs to occur if the cache is yet unset.
if(!config.svgElement){config.svgElement=_this108._svgElementFromString(svgText)}return config.svgElement}))}/**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     * @private
     * @param {?} responseText
     * @param {?=} options
     * @return {?}
     */;_proto91._createSvgElementForSingleIcon=function _createSvgElementForSingleIcon(responseText,options){/** @type {?} */var svg=this._svgElementFromString(responseText);this._setSvgAttributes(svg,options);return svg}/**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconSet
     * @param {?} iconName
     * @param {?=} options
     * @return {?}
     */;_proto91._extractSvgIconFromSet=function _extractSvgIconFromSet(iconSet,iconName,options){// Use the `id="iconName"` syntax in order to escape special
// characters in the ID (versus using the #iconName syntax).
/** @type {?} */var iconSource=iconSet.querySelector("[id=\""+iconName+"\"]");if(!iconSource){return null}// Clone the element and remove the ID to prevent multiple elements from being added
// to the page with the same ID.
/** @type {?} */var iconElement=/** @type {?} */iconSource.cloneNode(true);iconElement.removeAttribute("id");// If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
// the content of a new <svg> node.
if(iconElement.nodeName.toLowerCase()==="svg"){return this._setSvgAttributes(/** @type {?} */iconElement,options)}// If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
// that the same could be achieved by referring to it via <use href="#id">, however the <use>
// tag is problematic on Firefox, because it needs to include the current page path.
if(iconElement.nodeName.toLowerCase()==="symbol"){return this._setSvgAttributes(this._toSvgElement(iconElement),options)}// createElement('SVG') doesn't work as expected; the DOM ends up with
// the correct nodes, but the SVG content doesn't render. Instead we
// have to create an empty SVG node using innerHTML and append its content.
// Elements created using DOMParser.parseFromString have the same problem.
// http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
/** @type {?} */var svg=this._svgElementFromString("<svg></svg>");// Clone the node so we don't remove it from the parent icon set element.
svg.appendChild(iconElement);return this._setSvgAttributes(svg,options)}/**
     * Creates a DOM element from the given SVG string.
     * @private
     * @param {?} str
     * @return {?}
     */;_proto91._svgElementFromString=function _svgElementFromString(str){/** @type {?} */var div=this._document.createElement("DIV");div.innerHTML=str;/** @type {?} */var svg=/** @type {?} */div.querySelector("svg");if(!svg){throw Error("<svg> tag not found")}return svg}/**
     * Converts an element into an SVG node by cloning all of its children.
     * @private
     * @param {?} element
     * @return {?}
     */;_proto91._toSvgElement=function _toSvgElement(element){/** @type {?} */var svg=this._svgElementFromString("<svg></svg>");/** @type {?} */var attributes=element.attributes;// Copy over all the attributes from the `symbol` to the new SVG, except the id.
for(var i=0;i<attributes.length;i++){var _attributes$i=attributes[i],name=_attributes$i.name,value=_attributes$i.value;if(name!=="id"){svg.setAttribute(name,value)}}for(var _i9=0;_i9<element.childNodes.length;_i9++){if(element.childNodes[_i9].nodeType===this._document.ELEMENT_NODE){svg.appendChild(element.childNodes[_i9].cloneNode(true))}}return svg}/**
     * Sets the default attributes for an SVG element to be used as an icon.
     * @private
     * @param {?} svg
     * @param {?=} options
     * @return {?}
     */;_proto91._setSvgAttributes=function _setSvgAttributes(svg,options){svg.setAttribute("fit","");svg.setAttribute("height","100%");svg.setAttribute("width","100%");svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");// Disable IE11 default behavior to make SVGs focusable.
if(options&&options.viewBox){svg.setAttribute("viewBox",options.viewBox)}return svg}/**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     * @private
     * @param {?} safeUrl
     * @return {?}
     */;_proto91._fetchUrl=function _fetchUrl(safeUrl){var _this109=this;if(!this._httpClient){throw getMatIconNoHttpProviderError()}if(safeUrl==null){throw Error("Cannot fetch icon from URL \""+safeUrl+"\".")}/** @type {?} */var url=this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL,safeUrl);if(!url){throw getMatIconFailedToSanitizeUrlError(safeUrl)}// Store in-progress fetches to avoid sending a duplicate request for a URL when there is
// already a request in progress for that URL. It's necessary to call share() on the
// Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
/** @type {?} */var inProgressFetch=this._inProgressUrlFetches.get(url);if(inProgressFetch){return inProgressFetch}// TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
// Observable. Figure out why and fix it.
/** @type {?} */var req=this._httpClient.get(url,{responseType:"text"}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(/**
         * @return {?}
         */function(){return _this109._inProgressUrlFetches.delete(url)}),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());this._inProgressUrlFetches.set(url,req);return req}/**
     * Registers an icon config by name in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} iconName Name under which to register the config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */;_proto91._addSvgIconConfig=function _addSvgIconConfig(namespace,iconName,config){/** @type {?} */this._svgIconConfigs.set(iconKey(namespace,iconName),config);return(/** @type {?} */this)}/**
     * Registers an icon set config in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */;_proto91._addSvgIconSetConfig=function _addSvgIconSetConfig(namespace,config){/** @type {?} */var configNamespace=/** @type {?} */this._iconSetConfigs.get(namespace);if(configNamespace){configNamespace.push(config)}else{/** @type {?} */this._iconSetConfigs.set(namespace,[config])}return(/** @type {?} */this)};return MatIconRegistry}();MatIconRegistry.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],args:[{providedIn:"root"}]}];/** @nocollapse */MatIconRegistry.ctorParameters=function(){return[{type:_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]}]},{type:_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]}]}]};/** @nocollapse */MatIconRegistry.ngInjectableDef=Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275defineInjectable"])({factory:function MatIconRegistry_Factory(){return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],8),Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]),Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],8),Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],8))},token:MatIconRegistry,providedIn:"root"});/**
 * \@docs-private
 * @param {?} parentRegistry
 * @param {?} httpClient
 * @param {?} sanitizer
 * @param {?=} document
 * @param {?=} errorHandler
 * @return {?}
 */function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry,httpClient,sanitizer,document,errorHandler){return parentRegistry||new MatIconRegistry(httpClient,sanitizer,document,errorHandler)}/**
 * \@docs-private
 * @type {?}
 */var ICON_REGISTRY_PROVIDER={// If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
provide:MatIconRegistry,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"],new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"],MatIconRegistry],[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"],_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"],_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]],[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"],/** @type {?} */_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]],useFactory:ICON_REGISTRY_PROVIDER_FACTORY};/**
 * Clones an SVGElement while preserving type information.
 * @param {?} svg
 * @return {?}
 */function cloneSvg(svg){return(/** @type {?} */svg.cloneNode(true))}/**
 * Returns the cache key to use for an icon namespace and name.
 * @param {?} namespace
 * @param {?} name
 * @return {?}
 */function iconKey(namespace,name){return namespace+":"+name}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // Boilerplate for applying mixins to MatIcon.
/**
 * \@docs-private
 */var MatIconBase=/**
     * @param {?} _elementRef
     */function MatIconBase(_elementRef){this._elementRef=_elementRef};/** @type {?} */var _MatIconMixinBase=Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatIconBase);/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * \@docs-private
 * @type {?}
 */var MAT_ICON_LOCATION=new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]("mat-icon-location",{providedIn:"root",factory:MAT_ICON_LOCATION_FACTORY});/**
 * \@docs-private
 * @return {?}
 */function MAT_ICON_LOCATION_FACTORY(){/** @type {?} */var _document=Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);/** @type {?} */var _location=_document?_document.location:null;return{// Note that this needs to be a function, rather than a property, because Angular
// will only resolve it once, but we want the current path on each call.
getPathname:/**
         * @return {?}
         */function getPathname(){return _location?_location.pathname+_location.search:""}}}/**
 * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
 * @type {?}
 */var funcIriAttributes=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"];var ɵ0=/**
 * @param {?} attr
 * @return {?}
 */function ɵ0(attr){return"["+attr+"]"};/**
 * Selector that can be used to find all elements that are using a `FuncIRI`.
 * @type {?}
 */var funcIriAttributeSelector=funcIriAttributes.map(ɵ0).join(", ");/**
 * Regex that can be used to extract the id out of a FuncIRI.
 * @type {?}
 */var funcIriPattern=/^url\(['"]?#(.*?)['"]?\)$/;/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */var MatIcon=/*#__PURE__*/function(_MatIconMixinBase2){_inheritsLoose(MatIcon,_MatIconMixinBase2);/**
     * @param {?} elementRef
     * @param {?} _iconRegistry
     * @param {?} ariaHidden
     * @param {?=} _location
     * @param {?=} _errorHandler
     */function MatIcon(elementRef,_iconRegistry,ariaHidden,_location,_errorHandler){var _this110;_this110=_MatIconMixinBase2.call(this,elementRef)||this;_this110._iconRegistry=_iconRegistry;_this110._location=_location;_this110._errorHandler=_errorHandler;_this110._inline=false;// If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
// the right thing to do for the majority of icon use-cases.
if(!ariaHidden){elementRef.nativeElement.setAttribute("aria-hidden","true")}return _this110}/**
     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
     * the element the icon is contained in.
     * @return {?}
     */var _proto92=MatIcon.prototype;/**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     * @private
     * @param {?} iconName
     * @return {?}
     */_proto92._splitIconName=function _splitIconName(iconName){if(!iconName){return["",""]}/** @type {?} */var parts=iconName.split(":");switch(parts.length){case 1:return["",parts[0]];// Use default namespace.
case 2:return(/** @type {?} */parts);default:throw Error("Invalid icon name: \""+iconName+"\"");}}/**
     * @param {?} changes
     * @return {?}
     */;_proto92.ngOnChanges=function ngOnChanges(changes){var _this111=this;// Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
/** @type {?} */var svgIconChanges=changes["svgIcon"];if(svgIconChanges){if(this.svgIcon){var _this$_splitIconName=this._splitIconName(this.svgIcon),namespace=_this$_splitIconName[0],iconName=_this$_splitIconName[1];this._iconRegistry.getNamedSvgIcon(iconName,namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(/**
                 * @param {?} svg
                 * @return {?}
                 */function(svg){return _this111._setSvgElement(svg)},/**
                 * @param {?} err
                 * @return {?}
                 */function(err){/** @type {?} */var errorMessage="Error retrieving icon "+namespace+":"+iconName+"! "+err.message;// @breaking-change 9.0.0 _errorHandler parameter to be made required.
if(_this111._errorHandler){_this111._errorHandler.handleError(new Error(errorMessage))}else{console.error(errorMessage)}})}else if(svgIconChanges.previousValue){this._clearSvgElement()}}if(this._usingFontIcon()){this._updateFontIconClasses()}}/**
     * @return {?}
     */;_proto92.ngOnInit=function ngOnInit(){// Update font classes because ngOnChanges won't be called if none of the inputs are present,
// e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
if(this._usingFontIcon()){this._updateFontIconClasses()}}/**
     * @return {?}
     */;_proto92.ngAfterViewChecked=function ngAfterViewChecked(){/** @type {?} */var cachedElements=this._elementsWithExternalReferences;if(cachedElements&&this._location&&cachedElements.size){/** @type {?} */var newPath=this._location.getPathname();// We need to check whether the URL has changed on each change detection since
// the browser doesn't have an API that will let us react on link clicks and
// we can't depend on the Angular router. The references need to be updated,
// because while most browsers don't care whether the URL is correct after
// the first render, Safari will break if the user navigates to a different
// page and the SVG isn't re-rendered.
if(newPath!==this._previousPath){this._previousPath=newPath;this._prependPathToReferences(newPath)}}}/**
     * @return {?}
     */;_proto92.ngOnDestroy=function ngOnDestroy(){if(this._elementsWithExternalReferences){this._elementsWithExternalReferences.clear()}}/**
     * @private
     * @return {?}
     */;_proto92._usingFontIcon=function _usingFontIcon(){return!this.svgIcon}/**
     * @private
     * @param {?} svg
     * @return {?}
     */;_proto92._setSvgElement=function _setSvgElement(svg){this._clearSvgElement();// Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
// See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
// Do this before inserting the element into the DOM, in order to avoid a style recalculation.
/** @type {?} */var styleTags=/** @type {?} */svg.querySelectorAll("style");for(var i=0;i<styleTags.length;i++){styleTags[i].textContent+=" "}// Note: we do this fix here, rather than the icon registry, because the
// references have to point to the URL at the time that the icon was created.
if(this._location){/** @type {?} */var path=this._location.getPathname();this._previousPath=path;this._cacheChildrenWithExternalReferences(svg);this._prependPathToReferences(path)}this._elementRef.nativeElement.appendChild(svg)}/**
     * @private
     * @return {?}
     */;_proto92._clearSvgElement=function _clearSvgElement(){/** @type {?} */var layoutElement=this._elementRef.nativeElement;/** @type {?} */var childCount=layoutElement.childNodes.length;if(this._elementsWithExternalReferences){this._elementsWithExternalReferences.clear()}// Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
// we can't use innerHTML, because IE will throw if the element has a data binding.
while(childCount--){/** @type {?} */var child=layoutElement.childNodes[childCount];// 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
// of any loose text nodes, as well as any SVG elements in order to remove any old icons.
if(child.nodeType!==1||child.nodeName.toLowerCase()==="svg"){layoutElement.removeChild(child)}}}/**
     * @private
     * @return {?}
     */;_proto92._updateFontIconClasses=function _updateFontIconClasses(){if(!this._usingFontIcon()){return}/** @type {?} */var elem=this._elementRef.nativeElement;/** @type {?} */var fontSetClass=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();if(fontSetClass!=this._previousFontSetClass){if(this._previousFontSetClass){elem.classList.remove(this._previousFontSetClass)}if(fontSetClass){elem.classList.add(fontSetClass)}this._previousFontSetClass=fontSetClass}if(this.fontIcon!=this._previousFontIconClass){if(this._previousFontIconClass){elem.classList.remove(this._previousFontIconClass)}if(this.fontIcon){elem.classList.add(this.fontIcon)}this._previousFontIconClass=this.fontIcon}}/**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     * @private
     * @param {?} value
     * @return {?}
     */;_proto92._cleanupFontValue=function _cleanupFontValue(value){return typeof value==="string"?value.trim().split(" ")[0]:value}/**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     * @private
     * @param {?} path
     * @return {?}
     */;_proto92._prependPathToReferences=function _prependPathToReferences(path){/** @type {?} */var elements=this._elementsWithExternalReferences;if(elements){elements.forEach(/**
             * @param {?} attrs
             * @param {?} element
             * @return {?}
             */function(attrs,element){attrs.forEach(/**
                 * @param {?} attr
                 * @return {?}
                 */function(attr){element.setAttribute(attr.name,"url('"+path+"#"+attr.value+"')")})})}}/**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     * @private
     * @param {?} element
     * @return {?}
     */;_proto92._cacheChildrenWithExternalReferences=function _cacheChildrenWithExternalReferences(element){/** @type {?} */var elementsWithFuncIri=element.querySelectorAll(funcIriAttributeSelector);/** @type {?} */var elements=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;var _loop=function _loop(i){funcIriAttributes.forEach(/**
             * @param {?} attr
             * @return {?}
             */function(attr){/** @type {?} */var elementWithReference=elementsWithFuncIri[i];/** @type {?} */var value=elementWithReference.getAttribute(attr);/** @type {?} */var match=value?value.match(funcIriPattern):null;if(match){/** @type {?} */var attributes=elements.get(elementWithReference);if(!attributes){attributes=[];elements.set(elementWithReference,attributes)}/** @type {?} */attributes.push({name:attr,value:match[1]})}})};for(var i=0;i<elementsWithFuncIri.length;i++){_loop(i)}};_createClass(MatIcon,[{key:"inline",get:function get(){return this._inline}/**
     * @param {?} inline
     * @return {?}
     */,set:function set(inline){this._inline=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(inline)}/**
     * Font set that the icon is a part of.
     * @return {?}
     */},{key:"fontSet",get:function get(){return this._fontSet}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._fontSet=this._cleanupFontValue(value)}/**
     * Name of an icon within a font set.
     * @return {?}
     */},{key:"fontIcon",get:function get(){return this._fontIcon}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._fontIcon=this._cleanupFontValue(value)}}]);return MatIcon}(_MatIconMixinBase);MatIcon.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],args:[{template:"<ng-content></ng-content>",selector:"mat-icon",exportAs:"matIcon",styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],inputs:["color"],host:{"role":"img","class":"mat-icon notranslate","[class.mat-icon-inline]":"inline","[class.mat-icon-no-color]":"color !== \"primary\" && color !== \"accent\" && color !== \"warn\""},encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush}]}];/** @nocollapse */MatIcon.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]},{type:MatIconRegistry},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],args:["aria-hidden"]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],args:[MAT_ICON_LOCATION]}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]}]}]};MatIcon.propDecorators={inline:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]}],svgIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]}],fontSet:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]}],fontIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatIconModule=function MatIconModule(){};MatIconModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],args:[{imports:[_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],exports:[MatIcon,_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],declarations:[MatIcon]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=icon.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/input.js":/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/input.js ***!
  \*********************************************************/ /*! exports provided: MatTextareaAutosize, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR */ /***/function node_modulesAngularMaterialEsm2015InputJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatTextareaAutosize",function(){return MatTextareaAutosize});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatInput",function(){return MatInput});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMatInputUnsupportedTypeError",function(){return getMatInputUnsupportedTypeError});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatInputModule",function(){return MatInputModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_INPUT_VALUE_ACCESSOR",function(){return MAT_INPUT_VALUE_ACCESSOR});/* harmony import */var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/cdk/text-field */"./node_modules/@angular/cdk/esm2015/text-field.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/cdk/platform */"./node_modules/@angular/cdk/esm2015/platform.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @angular/material/core */"./node_modules/@angular/material/esm2015/core.js");/* harmony import */var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @angular/material/form-field */"./node_modules/@angular/material/esm2015/form-field.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
 * \@breaking-change 8.0.0
 */var MatTextareaAutosize=/*#__PURE__*/function(_angular_cdk_text_fie){_inheritsLoose(MatTextareaAutosize,_angular_cdk_text_fie);function MatTextareaAutosize(){return _angular_cdk_text_fie.apply(this,arguments)||this}_createClass(MatTextareaAutosize,[{key:"matAutosizeMinRows",/**
     * @return {?}
     */get:function get(){return this.minRows}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this.minRows=value}/**
     * @return {?}
     */},{key:"matAutosizeMaxRows",get:function get(){return this.maxRows}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this.maxRows=value}/**
     * @return {?}
     */},{key:"matAutosize",get:function get(){return this.enabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this.enabled=value}/**
     * @return {?}
     */},{key:"matTextareaAutosize",get:function get(){return this.enabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this.enabled=value}}]);return MatTextareaAutosize}(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);MatTextareaAutosize.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"textarea[mat-autosize], textarea[matTextareaAutosize]",exportAs:"matTextareaAutosize",inputs:["cdkAutosizeMinRows","cdkAutosizeMaxRows"],host:{"class":"cdk-textarea-autosize mat-autosize",// Textarea elements that have the directive applied should have a single row by default.
// Browsers normally show two rows by default and therefore this limits the minRows binding.
"rows":"1","(input)":"_noopInputHandler()"}}]}];MatTextareaAutosize.propDecorators={matAutosizeMinRows:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],matAutosizeMaxRows:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],matAutosize:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],args:["mat-autosize"]}],matTextareaAutosize:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@docs-private
 * @param {?} type
 * @return {?}
 */function getMatInputUnsupportedTypeError(type){return Error("Input type \""+type+"\" isn't supported by matInput.")}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 * @type {?}
 */var MAT_INPUT_VALUE_ACCESSOR=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("MAT_INPUT_VALUE_ACCESSOR");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
/** @type {?} */var MAT_INPUT_INVALID_TYPES=["button","checkbox","file","hidden","image","radio","range","reset","submit"];/** @type {?} */var nextUniqueId=0;// Boilerplate for applying mixins to MatInput.
/**
 * \@docs-private
 */var MatInputBase=/**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */function MatInputBase(_defaultErrorStateMatcher,_parentForm,_parentFormGroup,ngControl){this._defaultErrorStateMatcher=_defaultErrorStateMatcher;this._parentForm=_parentForm;this._parentFormGroup=_parentFormGroup;this.ngControl=ngControl};/** @type {?} */var _MatInputMixinBase=Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);/**
 * Directive that allows a native input to work inside a `MatFormField`.
 */var MatInput=/*#__PURE__*/function(_MatInputMixinBase2){_inheritsLoose(MatInput,_MatInputMixinBase2);/**
     * @param {?} _elementRef
     * @param {?} _platform
     * @param {?} ngControl
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} _defaultErrorStateMatcher
     * @param {?} inputValueAccessor
     * @param {?} _autofillMonitor
     * @param {?} ngZone
     */function MatInput(_elementRef,_platform,ngControl,_parentForm,_parentFormGroup,_defaultErrorStateMatcher,inputValueAccessor,_autofillMonitor,ngZone){var _this112;_this112=_MatInputMixinBase2.call(this,_defaultErrorStateMatcher,_parentForm,_parentFormGroup,ngControl)||this;_this112._elementRef=_elementRef;_this112._platform=_platform;_this112.ngControl=ngControl;_this112._autofillMonitor=_autofillMonitor;_this112._uid="mat-input-"+nextUniqueId++;/**
         * Whether the component is being rendered on the server.
         */_this112._isServer=false;/**
         * Whether the component is a native html select.
         */_this112._isNativeSelect=false;/**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */_this112.focused=false;/**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */_this112.stateChanges=new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"];/**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */_this112.controlType="mat-input";/**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */_this112.autofilled=false;_this112._disabled=false;_this112._required=false;_this112._type="text";_this112._readonly=false;_this112._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(/**
         * @param {?} t
         * @return {?}
         */function(t){return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t)});/** @type {?} */var element=_this112._elementRef.nativeElement;// If no input value accessor was explicitly specified, use the element as the input value
// accessor.
_this112._inputValueAccessor=inputValueAccessor||element;_this112._previousNativeValue=_this112.value;// Force setter to be called in case id was not specified.
_this112.id=_this112.id;// On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
// key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
// exists on iOS, we only bother to install the listener on iOS.
if(_platform.IOS){ngZone.runOutsideAngular(/**
             * @return {?}
             */function(){_elementRef.nativeElement.addEventListener("keyup",/**
                 * @param {?} event
                 * @return {?}
                 */function(event){/** @type {?} */var el=/** @type {?} */event.target;if(!el.value&&!el.selectionStart&&!el.selectionEnd){// Note: Just setting `0, 0` doesn't fix the issue. Setting
// `1, 1` fixes it for the first time that you type text and
// then hold delete. Toggling to `1, 1` and then back to
// `0, 0` seems to completely fix it.
el.setSelectionRange(1,1);el.setSelectionRange(0,0)}})})}_this112._isServer=!_this112._platform.isBrowser;_this112._isNativeSelect=element.nodeName.toLowerCase()==="select";if(_this112._isNativeSelect){_this112.controlType=/** @type {?} */element.multiple?"mat-native-select-multiple":"mat-native-select"}return _this112}/**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */var _proto93=MatInput.prototype;/**
     * @return {?}
     */_proto93.ngOnInit=function ngOnInit(){var _this113=this;if(this._platform.isBrowser){this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(/**
             * @param {?} event
             * @return {?}
             */function(event){_this113.autofilled=event.isAutofilled;_this113.stateChanges.next()})}}/**
     * @return {?}
     */;_proto93.ngOnChanges=function ngOnChanges(){this.stateChanges.next()}/**
     * @return {?}
     */;_proto93.ngOnDestroy=function ngOnDestroy(){this.stateChanges.complete();if(this._platform.isBrowser){this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}}/**
     * @return {?}
     */;_proto93.ngDoCheck=function ngDoCheck(){if(this.ngControl){// We need to re-evaluate this on every change detection cycle, because there are some
// error triggers that we can't subscribe to (e.g. parent form submissions). This means
// that whatever logic is in here has to be super lean or we risk destroying the performance.
this.updateErrorState()}// We need to dirty-check the native element's value, because there are some cases where
// we won't be notified when it changes (e.g. the consumer isn't using forms or they're
// updating the value using `emitEvent: false`).
this._dirtyCheckNativeValue()}/**
     * Focuses the input.
     * @param {?=} options
     * @return {?}
     */;_proto93.focus=function focus(options){this._elementRef.nativeElement.focus(options)}/**
     * Callback for the cases where the focused state of the input changes.
     * @param {?} isFocused
     * @return {?}
     */;_proto93._focusChanged=function _focusChanged(isFocused){if(isFocused!==this.focused&&(!this.readonly||!isFocused)){this.focused=isFocused;this.stateChanges.next()}}/**
     * @return {?}
     */;_proto93._onInput=function _onInput(){}// This is a noop function and is used to let Angular know whenever the value changes.
// Angular will run a new change detection each time the `input` event has been dispatched.
// It's necessary that Angular recognizes the value change, because when floatingLabel
// is set to false and Angular forms aren't used, the placeholder won't recognize the
// value changes and will not disappear.
// Listening to the input event wouldn't be necessary when the input is using the
// FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
/**
     * Does some manual dirty checking on the native input `value` property.
     * @protected
     * @return {?}
     */;_proto93._dirtyCheckNativeValue=function _dirtyCheckNativeValue(){/** @type {?} */var newValue=this._elementRef.nativeElement.value;if(this._previousNativeValue!==newValue){this._previousNativeValue=newValue;this.stateChanges.next()}}/**
     * Make sure the input is a supported type.
     * @protected
     * @return {?}
     */;_proto93._validateType=function _validateType(){if(MAT_INPUT_INVALID_TYPES.indexOf(this._type)>-1){throw getMatInputUnsupportedTypeError(this._type)}}/**
     * Checks whether the input type is one of the types that are never empty.
     * @protected
     * @return {?}
     */;_proto93._isNeverEmpty=function _isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}/**
     * Checks whether the input is invalid based on the native validation.
     * @protected
     * @return {?}
     */;_proto93._isBadInput=function _isBadInput(){// The `validity` property won't be present on platform-server.
/** @type {?} */var validity=/** @type {?} */this._elementRef.nativeElement.validity;return validity&&validity.badInput}/**
     * Determines if the component host is a textarea.
     * @protected
     * @return {?}
     */;_proto93._isTextarea=function _isTextarea(){return this._elementRef.nativeElement.nodeName.toLowerCase()==="textarea"}/**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */;/**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */_proto93.setDescribedByIds=function setDescribedByIds(ids){this._ariaDescribedby=ids.join(" ")}/**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */;_proto93.onContainerClick=function onContainerClick(){// Do not re-focus the input element if the element is already focused. Otherwise it can happen
// that someone clicks on a time input and the cursor resets to the "hours" field while the
// "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
if(!this.focused){this.focus()}};_createClass(MatInput,[{key:"disabled",get:function get(){if(this.ngControl&&this.ngControl.disabled!==null){return this.ngControl.disabled}return this._disabled}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._disabled=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);// Browsers may not fire the blur event if the input is disabled too quickly.
// Reset from here to ensure that the element doesn't become stuck.
if(this.focused){this.focused=false;this.stateChanges.next()}}/**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */},{key:"id",get:function get(){return this._id}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._id=value||this._uid}/**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */},{key:"required",get:function get(){return this._required}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._required=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value)}/**
     * Input type of the element.
     * @return {?}
     */},{key:"type",get:function get(){return this._type}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._type=value||"text";this._validateType();// When using Angular inputs, developers are no longer able to set the properties on the native
// input element. To ensure that bindings for `type` work, we need to sync the setter
// with the native property. Textarea elements don't support the type property or attribute.
if(!this._isTextarea()&&Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)){/** @type {?} */this._elementRef.nativeElement.type=this._type}}/**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */},{key:"value",get:function get(){return this._inputValueAccessor.value}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){if(value!==this.value){this._inputValueAccessor.value=value;this.stateChanges.next()}}/**
     * Whether the element is readonly.
     * @return {?}
     */},{key:"readonly",get:function get(){return this._readonly}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._readonly=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value)}},{key:"empty",get:function get(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}/**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */},{key:"shouldLabelFloat",get:function get(){if(this._isNativeSelect){// For a single-selection `<select>`, the label should float when the selected option has
// a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
// overlapping the label with the options.
/** @type {?} */var selectElement=/** @type {?} */this._elementRef.nativeElement;/** @type {?} */var firstOption=selectElement.options[0];// On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
// -1 if the `value` is set to something, that isn't in the list of options, at a later point.
return this.focused||selectElement.multiple||!this.empty||!!(selectElement.selectedIndex>-1&&firstOption&&firstOption.label)}else{return this.focused||!this.empty}}}]);return MatInput}(_MatInputMixinBase);MatInput.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",exportAs:"matInput",host:{/**
                     * \@breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                     */"class":"mat-input-element mat-form-field-autofill-control","[class.mat-input-server]":"_isServer",// Native input properties that are overwritten by Angular inputs need to be synced with
// the native input element. Otherwise property bindings for those don't work.
"[attr.id]":"id","[attr.placeholder]":"placeholder","[disabled]":"disabled","[required]":"required","[attr.readonly]":"readonly && !_isNativeSelect || null","[attr.aria-describedby]":"_ariaDescribedby || null","[attr.aria-invalid]":"errorState","[attr.aria-required]":"required.toString()","(blur)":"_focusChanged(false)","(focus)":"_focusChanged(true)","(input)":"_onInput()"},providers:[{provide:_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],useExisting:MatInput}]}]}];/** @nocollapse */MatInput.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]},{type:_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]}]},{type:_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]}]},{type:_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]}]},{type:_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],args:[MAT_INPUT_VALUE_ACCESSOR]}]},{type:_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]}]};MatInput.propDecorators={disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],placeholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],required:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],errorStateMatcher:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],readonly:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatInputModule=function MatInputModule(){};MatInputModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],args:[{declarations:[MatInput,MatTextareaAutosize],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],exports:[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],// We re-export the `MatFormFieldModule` since `MatInput` will almost always
// be used together with `MatFormField`.
_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],MatInput,MatTextareaAutosize],providers:[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=input.js.map
/***/},/***/"./node_modules/@angular/material/esm2015/progress-spinner.js":/*!********************************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/progress-spinner.js ***!
  \********************************************************************/ /*! exports provided: MatProgressSpinner, MatSpinner, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinnerModule */ /***/function node_modulesAngularMaterialEsm2015ProgressSpinnerJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatProgressSpinner",function(){return MatProgressSpinner});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatSpinner",function(){return MatSpinner});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS",function(){return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY",function(){return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MatProgressSpinnerModule",function(){return MatProgressSpinnerModule});/* harmony import */var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/cdk/coercion */"./node_modules/@angular/cdk/esm2015/coercion.js");/* harmony import */var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/cdk/platform */"./node_modules/@angular/cdk/esm2015/platform.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/material/core */"./node_modules/@angular/material/esm2015/core.js");/* harmony import */var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Base reference size of the spinner.
 * \@docs-private
 * @type {?}
 */var BASE_SIZE=100;/**
 * Base reference stroke width of the spinner.
 * \@docs-private
 * @type {?}
 */var BASE_STROKE_WIDTH=10;// Boilerplate for applying mixins to MatProgressSpinner.
/**
 * \@docs-private
 */var MatProgressSpinnerBase=/**
     * @param {?} _elementRef
     */function MatProgressSpinnerBase(_elementRef){this._elementRef=_elementRef};/** @type {?} */var _MatProgressSpinnerMixinBase=Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatProgressSpinnerBase,"primary");/**
 * Injection token to be used to override the default options for `mat-progress-spinner`.
 * @type {?}
 */var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS=new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]("mat-progress-spinner-default-options",{providedIn:"root",factory:MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY});/**
 * \@docs-private
 * @return {?}
 */function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY(){return{diameter:BASE_SIZE}}// .0001 percentage difference is necessary in order to avoid unwanted animation frames
// for example because the animation duration is 4 seconds, .1% accounts to 4ms
// which are enough to see the flicker described in
// https://github.com/angular/components/issues/8984
/** @type {?} */var INDETERMINATE_ANIMATION_TEMPLATE="\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";/**
 * `<mat-progress-spinner>` component.
 */var MatProgressSpinner=/*#__PURE__*/function(_MatProgressSpinnerMi){_inheritsLoose(MatProgressSpinner,_MatProgressSpinnerMi);/**
     * @param {?} _elementRef
     * @param {?} platform
     * @param {?} _document
     * @param {?} animationMode
     * @param {?=} defaults
     */function MatProgressSpinner(_elementRef,platform,_document,animationMode,defaults){var _this114;_this114=_MatProgressSpinnerMi.call(this,_elementRef)||this;_this114._elementRef=_elementRef;_this114._document=_document;_this114._diameter=BASE_SIZE;_this114._value=0;_this114._fallbackAnimation=false;/**
         * Mode of the progress circle
         */_this114.mode="determinate";/** @type {?} */var trackedDiameters=MatProgressSpinner._diameters;// The base size is already inserted via the component's structural styles. We still
// need to track it so we don't end up adding the same styles again.
if(!trackedDiameters.has(_document.head)){trackedDiameters.set(_document.head,new Set([BASE_SIZE]))}_this114._fallbackAnimation=platform.EDGE||platform.TRIDENT;_this114._noopAnimations=animationMode==="NoopAnimations"&&!!defaults&&!defaults._forceAnimations;if(defaults){if(defaults.diameter){_this114.diameter=defaults.diameter}if(defaults.strokeWidth){_this114.strokeWidth=defaults.strokeWidth}}return _this114}/**
     * The diameter of the progress spinner (will set width and height of svg).
     * @return {?}
     */var _proto94=MatProgressSpinner.prototype;/**
     * @return {?}
     */_proto94.ngOnInit=function ngOnInit(){/** @type {?} */var element=this._elementRef.nativeElement;// Note that we need to look up the root node in ngOnInit, rather than the constructor, because
// Angular seems to create the element outside the shadow root and then moves it inside, if the
// node is inside an `ngIf` and a ShadowDom-encapsulated component.
this._styleRoot=_getShadowRoot(element,this._document)||this._document.head;this._attachStyleNode();// On IE and Edge, we can't animate the `stroke-dashoffset`
// reliably so we fall back to a non-spec animation.
/** @type {?} */var animationClass="mat-progress-spinner-indeterminate"+(this._fallbackAnimation?"-fallback":"")+"-animation";element.classList.add(animationClass)}/**
     * The radius of the spinner, adjusted for stroke width.
     * @return {?}
     */;/**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @private
     * @return {?}
     */_proto94._attachStyleNode=function _attachStyleNode(){/** @type {?} */var styleRoot=this._styleRoot;/** @type {?} */var currentDiameter=this._diameter;/** @type {?} */var diameters=MatProgressSpinner._diameters;/** @type {?} */var diametersForElement=diameters.get(styleRoot);if(!diametersForElement||!diametersForElement.has(currentDiameter)){/** @type {?} */var styleTag=this._document.createElement("style");styleTag.setAttribute("mat-spinner-animation",currentDiameter+"");styleTag.textContent=this._getAnimationText();styleRoot.appendChild(styleTag);if(!diametersForElement){diametersForElement=new Set;diameters.set(styleRoot,diametersForElement)}diametersForElement.add(currentDiameter)}}/**
     * Generates animation styles adjusted for the spinner's diameter.
     * @private
     * @return {?}
     */;_proto94._getAnimationText=function _getAnimationText(){return INDETERMINATE_ANIMATION_TEMPLATE// Animation should begin at 5% and end at 80%
.replace(/START_VALUE/g,""+0.95*this._strokeCircumference).replace(/END_VALUE/g,""+0.2*this._strokeCircumference).replace(/DIAMETER/g,""+this.diameter)};_createClass(MatProgressSpinner,[{key:"diameter",get:function get(){return this._diameter}/**
     * @param {?} size
     * @return {?}
     */,set:function set(size){this._diameter=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size);// If this is set before `ngOnInit`, the style root may not have been resolved yet.
if(!this._fallbackAnimation&&this._styleRoot){this._attachStyleNode()}}/**
     * Stroke width of the progress spinner.
     * @return {?}
     */},{key:"strokeWidth",get:function get(){return this._strokeWidth||this.diameter/10}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._strokeWidth=Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value)}/**
     * Value of the progress circle.
     * @return {?}
     */},{key:"value",get:function get(){return this.mode==="determinate"?this._value:0}/**
     * @param {?} newValue
     * @return {?}
     */,set:function set(newValue){this._value=Math.max(0,Math.min(100,Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(newValue)))}},{key:"_circleRadius",get:function get(){return(this.diameter-BASE_STROKE_WIDTH)/2}/**
     * The view box of the spinner's svg element.
     * @return {?}
     */},{key:"_viewBox",get:function get(){/** @type {?} */var viewBox=this._circleRadius*2+this.strokeWidth;return"0 0 "+viewBox+" "+viewBox}/**
     * The stroke circumference of the svg circle.
     * @return {?}
     */},{key:"_strokeCircumference",get:function get(){return 2*Math.PI*this._circleRadius}/**
     * The dash offset of the svg circle.
     * @return {?}
     */},{key:"_strokeDashOffset",get:function get(){if(this.mode==="determinate"){return this._strokeCircumference*(100-this._value)/100}// In fallback mode set the circle to 80% and rotate it with CSS.
if(this._fallbackAnimation&&this.mode==="indeterminate"){return this._strokeCircumference*0.2}return null}/**
     * Stroke width of the circle in percent.
     * @return {?}
     */},{key:"_circleStrokeWidth",get:function get(){return this.strokeWidth/this.diameter*100}}]);return MatProgressSpinner}(_MatProgressSpinnerMixinBase);/**
 * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
 * We need to keep track of which elements the diameters were attached to, because for
 * elements in the Shadow DOM the style tags are attached to the shadow root, rather
 * than the document head.
 */MatProgressSpinner._diameters=new WeakMap;MatProgressSpinner.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],args:[{selector:"mat-progress-spinner",exportAs:"matProgressSpinner",host:{"role":"progressbar","class":"mat-progress-spinner","[class._mat-animation-noopable]":"_noopAnimations","[style.width.px]":"diameter","[style.height.px]":"diameter","[attr.aria-valuemin]":"mode === \"determinate\" ? 0 : null","[attr.aria-valuemax]":"mode === \"determinate\" ? 100 : null","[attr.aria-valuenow]":"mode === \"determinate\" ? value : null","[attr.mode]":"mode"},inputs:["color"],template:"<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode === 'indeterminate'\"><circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle><circle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None}]}];/** @nocollapse */MatProgressSpinner.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]}]},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],args:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],args:[MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]}]}]};MatProgressSpinner.propDecorators={diameter:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]}],strokeWidth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]}],mode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]}]};/**
 * `<mat-spinner>` component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate `<mat-progress-spinner>` instance.
 */var MatSpinner=/*#__PURE__*/function(_MatProgressSpinner){_inheritsLoose(MatSpinner,_MatProgressSpinner);/**
     * @param {?} elementRef
     * @param {?} platform
     * @param {?} document
     * @param {?} animationMode
     * @param {?=} defaults
     */function MatSpinner(elementRef,platform,document,animationMode,defaults){var _this115;_this115=_MatProgressSpinner.call(this,elementRef,platform,document,animationMode,defaults)||this;_this115.mode="indeterminate";return _this115}return MatSpinner}(MatProgressSpinner);MatSpinner.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],args:[{selector:"mat-spinner",host:{"role":"progressbar","mode":"indeterminate","class":"mat-spinner mat-progress-spinner","[class._mat-animation-noopable]":"_noopAnimations","[style.width.px]":"diameter","[style.height.px]":"diameter"},inputs:["color"],template:"<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode === 'indeterminate'\"><circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle><circle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None}]}];/** @nocollapse */MatSpinner.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]},{type:_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],args:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]}]},{type:String,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],args:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],args:[MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]}]}]};/**
 * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
 * @param {?} element
 * @param {?} _document
 * @return {?}
 */function _getShadowRoot(element,_document){// TODO(crisbeto): see whether we should move this into the CDK
// feature detection utilities once #15616 gets merged in.
if(typeof window!=="undefined"){/** @type {?} */var head=_document.head;// Check whether the browser supports Shadow DOM.
if(head&&(/** @type {?} */head.createShadowRoot||head.attachShadow)){/** @type {?} */var rootNode=element.getRootNode?element.getRootNode():null;// We need to take the `ShadowRoot` off of `window`, because the built-in types are
// incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.
if(rootNode instanceof/** @type {?} */window.ShadowRoot){return rootNode}}}return null}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MatProgressSpinnerModule=function MatProgressSpinnerModule(){};MatProgressSpinnerModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],args:[{imports:[_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],exports:[MatProgressSpinner,MatSpinner,_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],declarations:[MatProgressSpinner,MatSpinner]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=progress-spinner.js.map
/***/},/***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/error/error.component.html":/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/error/error.component.html ***!
  \****************************************************************************************************/ /*! exports provided: default */ /***/function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsErrorErrorComponentHtml(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="<div class=\"error-container\">\n  <mat-icon class=\"sad-face-icon\">sentiment_dissatisfied_outline</mat-icon>\n  <p *ngIf=\"mainErrorMessage\" class=\"main-error-message\">{{mainErrorMessage}}</p>\n  <p *ngIf=\"secondaryErrorMessage\" class=\"secondary-error-message\">{{secondaryErrorMessage}}</p>\n</div>";/***/},/***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html":/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html ***!
  \********************************************************************************************************/ /*! exports provided: default */ /***/function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsLoadingLoadingComponentHtml(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="<mat-spinner [strokeWidth]=\"strokeWidth\" [diameter]=\"diameter\"></mat-spinner>";/***/},/***/"./src/app/material/material.module.ts":/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/ /*! exports provided: MaterialModule */ /***/function srcAppMaterialMaterialModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MaterialModule",function(){return MaterialModule});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/material/input */"./node_modules/@angular/material/esm2015/input.js");/* harmony import */var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/material/icon */"./node_modules/@angular/material/esm2015/icon.js");/* harmony import */var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @angular/material/button */"./node_modules/@angular/material/esm2015/button.js");/* harmony import */var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @angular/material/card */"./node_modules/@angular/material/esm2015/card.js");/* harmony import */var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! @angular/material/divider */"./node_modules/@angular/material/esm2015/divider.js");/* harmony import */var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! @angular/material/progress-spinner */"./node_modules/@angular/material/esm2015/progress-spinner.js");/* harmony import */var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! @angular/material/grid-list */"./node_modules/@angular/material/esm2015/grid-list.js");var MaterialModule=function MaterialModule(){};MaterialModule=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({declarations:[],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],exports:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],_angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],_angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]]})],MaterialModule);/***/},/***/"./src/app/shared/components/error/error.component.scss":/*!**************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.scss ***!
  \**************************************************************/ /*! exports provided: default */ /***/function srcAppSharedComponentsErrorErrorComponentScss(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]=".error-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.error-container p {\n  text-align: center;\n}\n.error-container .main-error-message {\n  font-size: 14px;\n}\n.error-container .secondary-error-message {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkb2ZhbG90aWNvL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGUtZnJvbnQtZW5kL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5tYWluLWVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5zZWNvbmRhcnktZXJyb3ItbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59IiwiLmVycm9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZXJyb3ItY29udGFpbmVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXJyb3ItY29udGFpbmVyIC5tYWluLWVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZXJyb3ItY29udGFpbmVyIC5zZWNvbmRhcnktZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";/***/},/***/"./src/app/shared/components/error/error.component.ts":/*!************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.ts ***!
  \************************************************************/ /*! exports provided: ErrorComponent */ /***/function srcAppSharedComponentsErrorErrorComponentTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ErrorComponent",function(){return ErrorComponent});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");var ErrorComponent=function ErrorComponent(){};tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()],ErrorComponent.prototype,"mainErrorMessage",void 0);tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()],ErrorComponent.prototype,"secondaryErrorMessage",void 0);ErrorComponent=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({selector:"app-error",template:tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/error/error.component.html")).default,styles:[tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */"./src/app/shared/components/error/error.component.scss")).default]})],ErrorComponent);/***/},/***/"./src/app/shared/components/loading/loading.component.scss":/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.scss ***!
  \******************************************************************/ /*! exports provided: default */ /***/function srcAppSharedComponentsLoadingLoadingComponentScss(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */";/***/},/***/"./src/app/shared/components/loading/loading.component.ts":/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/ /*! exports provided: LoadingComponent */ /***/function srcAppSharedComponentsLoadingLoadingComponentTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LoadingComponent",function(){return LoadingComponent});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");var LoadingComponent=function LoadingComponent(){this.strokeWidth=3;this.diameter=50};tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()],LoadingComponent.prototype,"strokeWidth",void 0);tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()],LoadingComponent.prototype,"diameter",void 0);LoadingComponent=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({selector:"app-loading",template:tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html")).default,styles:[tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.scss */"./src/app/shared/components/loading/loading.component.scss")).default]})],LoadingComponent);/***/},/***/"./src/app/shared/shared.module.ts":/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/ /*! exports provided: SharedModule */ /***/function srcAppSharedSharedModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SharedModule",function(){return SharedModule});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var src_app_shared_youtube_youtube_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! src/app/shared/youtube/youtube.service */"./src/app/shared/youtube/youtube.service.ts");/* harmony import */var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");/* harmony import */var _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./components/error/error.component */"./src/app/shared/components/error/error.component.ts");/* harmony import */var _material_material_module__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ../material/material.module */"./src/app/material/material.module.ts");/* harmony import */var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ./components/loading/loading.component */"./src/app/shared/components/loading/loading.component.ts");var SharedModule=function SharedModule(){};SharedModule=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({declarations:[_components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],providers:[src_app_shared_youtube_youtube_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"]],exports:[_components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]]})],SharedModule);/***/},/***/"./src/app/shared/youtube/youtube.service.ts":/*!***************************************************!*\
  !*** ./src/app/shared/youtube/youtube.service.ts ***!
  \***************************************************/ /*! exports provided: YoutubeService */ /***/function srcAppSharedYoutubeYoutubeServiceTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"YoutubeService",function(){return YoutubeService});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");var YoutubeService_1;var YoutubeService=YoutubeService_1=/*#__PURE__*/function(){function YoutubeService(http){this.http=http}var _proto95=YoutubeService.prototype;_proto95.getAll=function getAll(path,options){var _this116=this;return this.getUrls().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function(urls){var url=urls[""+YoutubeService_1.urlControl]+path;_this116.handleKeyParam(options);return _this116.http.get(url,options)}))};_proto95.get=function get(path,options){var _this117=this;return this.getUrls().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function(urls){var url=urls[""+YoutubeService_1.urlControl]+path;_this117.handleKeyParam(options);return _this117.http.get(url,options)}))};_proto95.getUrls=function getUrls(){return this.http.get("assets/json/url_config.json")};_proto95.handleKeyParam=function handleKeyParam(options){options.params["key"]=YoutubeService_1.youtubeApiKey};return YoutubeService}();YoutubeService.urlControl="youtube_api";YoutubeService.youtubeApiKey="AIzaSyBPrd8AEFidfN9V856He7mMEv5b3F5tT74";YoutubeService.ctorParameters=function(){return[{type:_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}]};YoutubeService=YoutubeService_1=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({providedIn:"root"})],YoutubeService);/***/}}]);//# sourceMappingURL=default~main-details-details-module~main-main-module-es2015.js.map
//# sourceMappingURL=default~main-details-details-module~main-main-module-es5.js.map