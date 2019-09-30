(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/list/card/card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/list/card/card.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z0\">\n  <img mat-card-image [src]=\"videoSummarizedDetails.snippet.thumbnails.high.url\" alt=\"video thumbnail\"/>\n  \n  <mat-card-header>\n    <mat-card-title>{{ videoSummarizedDetails.snippet.title }}</mat-card-title>\n    <mat-card-subtitle><span class=\"badge badge-primary\">{{ videoSummarizedDetails.snippet.channelTitle }}</span></mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content>\n    <p>\n      {{\n        videoSummarizedDetails.snippet.description\n          ? videoSummarizedDetails.snippet.description\n          : 'video has no description'\n      }}\n    </p>\n  </mat-card-content>\n  \n  <mat-card-actions>\n    <button [routerLink]=\"['/details', videoSummarizedDetails.id.videoId]\" class=\"btn btn-link\">Ver Detalhes do Video</button>\n  </mat-card-actions>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/list/list.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/list/list.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-container row\">\n  <app-card *ngFor=\"let videoDetails of videoDetailsList\" [videoSummarizedDetails]=\"videoDetails\" class=\"col-sm-12 col-md-4 col-lg-4 col-xl-4\"></app-card>\n</div>\n\n<div class=\"button-container\" *ngIf=\"videoDetailsList?.length\">\n  <button mat-button (click)=\"seeMore()\" *ngIf=\"videoDetailsList\">ver mais <mat-icon>replay</mat-icon></button>\n</div>\n\n<!-- <div class=\"loader loader-progress\" *ngIf=\"loadingInProgress\">\n  <div class=\"loading\"></div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [style.justify-content]=\"getJustifyContent()\">\n  \n  <app-search (searchValue)=\"searchVideos($event)\" class=\"slidingIn\" [ngClass]=\"{ onTop: barOnTop, slidingOut: barOnTop }\"></app-search>\n  <app-loading *ngIf=\"loading\"></app-loading>\n  <app-list [hidden]=\"loading\" [videoDetailsList]=\"videoDetailsList\" (searchNextPage)=\"searchVideos(termToSearch)\" *ngIf=\"videoDetailsList?.length; else errorTemplate\"></app-list>\n  \n  <ng-template #errorTemplate>\n    <app-error class=\"error\" *ngIf=\"barOnTop && !loading\" mainErrorMessage=\"Não conseguimos encontrar nenhum vídeo com termo buscado\" secondaryErrorMessage=\"Utilize outras palavras-chave\" ></app-error>\n  </ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/search/search.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/search/search.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Procurar</mat-label>\n    <input matInput autocomplete=\"off\" formControlName=\"searchValue\" />\n    <mat-error *ngIf=\"searchForm.invalid\">Campo Obrigatório</mat-error>\n    \n    <button mat-button *ngIf=\"searchForm.value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearchValue()\" type=\"button\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <!-- <div class=\"submit-container\">\n    <button class=\"submit-button\" mat-raised-button color=\"primary\">\n      <mat-icon type=\"submit\">search</mat-icon>\n    </button>\n  </div> -->\n</form>");

/***/ }),

/***/ "./src/app/main/list/card/card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/list/card/card.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n  max-width: 450px;\n  height: auto;\n  padding: 0px;\n  margin: 0px;\n  box-shadow: 0px !important;\n  border: 1px solid #DDD;\n  border-radius: 0px;\n}\n.mat-card .mat-elevation-z {\n  box-shadow: 0px !important;\n}\n.mat-card:hover {\n  box-shadow: 0px;\n}\n.mat-card .mat-card-header {\n  display: flex;\n  flex-direction: row;\n  padding: 20px 0px;\n  background-color: #73bcf6;\n}\n.mat-card .mat-card-header .mat-card-title {\n  color: #FFF !important;\n  width: 100%;\n  padding: 0px 3%;\n  margin: 0px 0px 5px;\n  font-size: 16px;\n  line-height: 20px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  max-width: 47ch;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mat-card .mat-card-header .mat-card-subtitle {\n  font-size: 12px;\n  line-height: 16px;\n  color: #FFF !important;\n  width: 100%;\n  padding: 0px 3%;\n  margin: 0px;\n  font-family: \"Montserrat\", sans-serif;\n}\n.mat-card .mat-card-header .mat-card-subtitle .badge {\n  padding: 0.35em 0.4em 0.6em;\n  background-color: #90caf9;\n}\n.mat-card .mat-card-content {\n  margin: auto;\n  width: 94%;\n  padding: 20px 0%;\n  font-size: 14px;\n  height: 110px;\n}\n.mat-card .mat-card-content p {\n  height: auto;\n  overflow: hidden;\n}\n.mat-card .mat-card-actions {\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0 0;\n  margin: 10px 0px;\n  border-top: 1px solid #DDD;\n}\n.mat-card .mat-card-actions button {\n  color: #73bcf6;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 14px;\n}\n.mat-card .mat-card-actions button:hover {\n  color: #73bcf6;\n}\n.mat-card img {\n  margin: 0;\n  width: 100%;\n  height: auto;\n}\n@media screen and (max-width: 375px) {\n  .mat-card {\n    max-width: 100%;\n    height: auto;\n  }\n  .mat-card img {\n    width: 100%;\n    height: auto;\n  }\n  .mat-card .mat-card-header {\n    padding: 15px 0px;\n    background-color: #73bcf6;\n  }\n  .mat-card .mat-card-header .mat-card-title {\n    color: #FFF !important;\n    width: 100%;\n    padding: 0px 3%;\n    margin: 0px 0px 5px;\n    font-size: 16px;\n    line-height: 20px;\n    max-width: 36ch;\n  }\n  .mat-card .mat-card-header .mat-card-subtitle {\n    color: #FFF !important;\n    width: 100%;\n    padding: 0px 3%;\n    margin: 0px;\n  }\n  .mat-card .mat-card-content {\n    margin: auto;\n    width: 94%;\n    min-height: 125px;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkb2ZhbG90aWNvL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGUtZnJvbnQtZW5kL3NyYy9hcHAvbWFpbi9saXN0L2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9saXN0L2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9sZW9uYXJkb2ZhbG90aWNvL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGUtZnJvbnQtZW5kL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDREY7QURHRTtFQUNFLDBCQUFBO0FDREo7QURJRTtFQUNFLGVBQUE7QUNGSjtBREtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkV2QlM7QURvQmI7QURLSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSk47QURPSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUNMTjtBRE9NO0VBQ0UsMkJBQUE7RUFDQSx5QkVuRFU7QUQ4Q2xCO0FEVUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNSSjtBRFVJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDUk47QURZRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ1ZKO0FEWUk7RUFDRSxjRWhGTztFRmlGUCxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVk47QURZTTtFQUNFLGNFdkZLO0FENkViO0FEZUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNiSjtBRGtCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNmRjtFRGlCRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDZko7RURrQkU7SUFDRSxpQkFBQTtJQUNBLHlCRWhITztFRGdHWDtFRGtCSTtJQUNFLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNoQk47RURtQkk7SUFDRSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ2pCTjtFRHFCRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VDbkJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xpc3QvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4ubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgLm1hdC1lbGV2YXRpb24teiB7XG4gICAgYm94LXNoYWRvdzogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHg7XG4gIH1cblxuICAubWF0LWNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XG5cbiAgICAubWF0LWNhcmQtdGl0bGUge1xuICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMHB4IDMlO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgIG1heC13aWR0aDogNDdjaDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMHB4IDMlO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAuYmFkZ2Uge1xuICAgICAgICBwYWRkaW5nOiAuMzVlbSAuNGVtIC42MGVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdW5kYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDk0JTtcbiAgICBwYWRkaW5nOiAyMHB4IDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuXG4gICAgcCB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMCAwO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREQ7XG5cbiAgICBidXR0b24ge1xuICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAubWF0LWNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XG4gICAgICBcbiAgICAgIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcHggMyU7XG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzZjaDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweCAzJTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDk0JTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEyNXB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufSIsIi5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5tYXQtY2FyZCAubWF0LWVsZXZhdGlvbi16IHtcbiAgYm94LXNoYWRvdzogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHg7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNiY2Y2O1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAzJTtcbiAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXgtd2lkdGg6IDQ3Y2g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAzJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSAuYmFkZ2Uge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC40ZW0gMC42ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGNhZjk7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5NCU7XG4gIHBhZGRpbmc6IDIwcHggMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCBwIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwIDA7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREREO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gIGNvbG9yOiAjNzNiY2Y2O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtYWN0aW9ucyBidXR0b246aG92ZXIge1xuICBjb2xvcjogIzczYmNmNjtcbn1cbi5tYXQtY2FyZCBpbWcge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAubWF0LWNhcmQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3M2JjZjY7XG4gIH1cbiAgLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCAzJTtcbiAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDM2Y2g7XG4gIH1cbiAgLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCAzJTtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICAubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTQlO1xuICAgIG1pbi1oZWlnaHQ6IDEyNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufSIsIiRtYWluLWNvbG9yOiAjNzNiY2Y2O1xuJHNlY3VuZGFyeS1jb2xvcjogIzkwY2FmOTtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRsaWdodC1ibGFjay1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpOyJdfQ== */");

/***/ }),

/***/ "./src/app/main/list/card/card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/list/card/card.component.ts ***!
  \**************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "videoSummarizedDetails", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/list/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/main/list/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/main/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/list/list.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-container app-card {\n  margin: 1% 0px;\n}\n.list-container app-card:first-child {\n  display: none;\n}\n.button-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.button-container button {\n  color: #73bcf6;\n}\n@media screen and (max-width: 375px) {\n  app-card {\n    margin: 5% 0px !important;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkb2ZhbG90aWNvL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGUtZnJvbnQtZW5kL3NyYy9hcHAvbWFpbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlb25hcmRvZmFsb3RpY28vRGVza3RvcC9Qcm9qZXRvcy90ZXN0ZS1mcm9udC1lbmQvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsY0FBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0FDSEo7QURPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNKRjtBRE1FO0VBQ0UsY0VsQlM7QURjYjtBRFFBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLFdBQUE7RUNMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gIGFwcC1jYXJkIHtcbiAgICBtYXJnaW46IDElIDBweDtcbiAgfVxuXG4gIGFwcC1jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGJ1dHRvbiB7XG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIGFwcC1jYXJkIHtcbiAgICBtYXJnaW46IDUlIDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59IiwiLmxpc3QtY29udGFpbmVyIGFwcC1jYXJkIHtcbiAgbWFyZ2luOiAxJSAwcHg7XG59XG4ubGlzdC1jb250YWluZXIgYXBwLWNhcmQ6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XG4gIGNvbG9yOiAjNzNiY2Y2O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICBhcHAtY2FyZCB7XG4gICAgbWFyZ2luOiA1JSAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIiRtYWluLWNvbG9yOiAjNzNiY2Y2O1xuJHNlY3VuZGFyeS1jb2xvcjogIzkwY2FmOTtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRsaWdodC1ibGFjay1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpOyJdfQ== */");

/***/ }),

/***/ "./src/app/main/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() {
        this.searchNextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    seeMore() {
        this.searchNextPage.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListComponent.prototype, "videoDetailsList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListComponent.prototype, "searchNextPage", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/main/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/main/main.component */ "./src/app/main/main.component.ts");




const routes = [
    {
        path: '',
        component: src_app_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MainRoutingModule);



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100% !important;\n  max-width: 1280px !important;\n  height: 100%;\n}\n.container app-search {\n  width: 100%;\n  height: 80px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -40px;\n  margin-left: -50%;\n  z-index: 999999;\n  background-color: #FFF;\n}\n.container app-list {\n  width: 100%;\n  height: 86%;\n  margin-top: 200px;\n}\n.container .error {\n  max-width: 50%;\n}\n.onTop {\n  position: fixed !important;\n  top: 40px !important;\n}\n.image-container {\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.image-container .logo {\n  width: 60%;\n  height: auto;\n}\n.slidingOut {\n  -webkit-animation: 1s ease-out 0s 1 slideOut;\n          animation: 1s ease-out 0s 1 slideOut;\n}\n@-webkit-keyframes slideIn {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes slideIn {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes slideOut {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes slideOut {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@media screen and (max-width: 375px) {\n  app-list {\n    width: 100%;\n    height: 90% !important;\n    margin-top: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkb2ZhbG90aWNvL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGUtZnJvbnQtZW5kL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxjQUFBO0FDREo7QURLQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRkY7QURJRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDRko7QURVQTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7QUNQRjtBRFVBO0VBQ0U7SUFDRSw0QkFBQTtFQ1BGO0VEU0E7SUFDRSx3QkFBQTtFQ1BGO0FBQ0Y7QURDQTtFQUNFO0lBQ0UsNEJBQUE7RUNQRjtFRFNBO0lBQ0Usd0JBQUE7RUNQRjtBQUNGO0FEVUE7RUFDRTtJQUNFLDJCQUFBO0VDUkY7RURVQTtJQUNFLHdCQUFBO0VDUkY7QUFDRjtBREVBO0VBQ0U7SUFDRSwyQkFBQTtFQ1JGO0VEVUE7SUFDRSx3QkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7RUNURjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTI4MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcblxuICBhcHAtc2VhcmNoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwJTtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgfVxuXG4gIGFwcC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg2JTtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgfVxuXG4gIC5lcnJvciB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbn1cblxuLm9uVG9wIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5sb2dvIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4uc2xpZGluZ0luIHtcbiAgLy8gYW5pbWF0aW9uOiAxcyBlYXNlLWluIDBzIDEgc2xpZGVJbjtcbn1cblxuLnNsaWRpbmdPdXQge1xuICBhbmltYXRpb246IDFzIGVhc2Utb3V0IDBzIDEgc2xpZGVPdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgYXBwLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMjgwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciBhcHAtc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgbWFyZ2luLWxlZnQ6IC01MCU7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cbi5jb250YWluZXIgYXBwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NiU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuLmNvbnRhaW5lciAuZXJyb3Ige1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLm9uVG9wIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltYWdlLWNvbnRhaW5lciAubG9nbyB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNsaWRpbmdPdXQge1xuICBhbmltYXRpb246IDFzIGVhc2Utb3V0IDBzIDEgc2xpZGVPdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZU91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICBhcHAtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/cache.service */ "./src/app/shared/services/cache.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_youtube_youtube_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/youtube/youtube.service */ "./src/app/shared/youtube/youtube.service.ts");




let MainComponent = class MainComponent {
    constructor(youtube, youtubeCache) {
        this.youtube = youtube;
        this.youtubeCache = youtubeCache;
        this.barOnTop = false;
        this.loading = false;
    }
    ngOnInit() {
        const videoDetailsCache = this.youtubeCache.cache;
        if (videoDetailsCache) {
            this.videoDetailsList = videoDetailsCache.items;
            this.bookmark = videoDetailsCache.nextPageToken;
            this.termToSearch = videoDetailsCache.termToSearch;
            this.barOnTop = true;
        }
    }
    ngOnDestroy() {
        if (this.youtubeSubscription)
            this.youtubeSubscription.unsubscribe();
    }
    getJustifyContent() {
        let justify = 'center';
        if (this.barOnTop) {
            if (!this.loading) {
                if (!this.videoDetailsList || !this.videoDetailsList.length) {
                    justify = 'center';
                }
                else {
                    justify = 'flex-end';
                }
            }
        }
        else {
            justify = 'flex-start';
        }
        return justify;
    }
    searchVideos(termToSearch) {
        this.barOnTop = true;
        this.loading = true;
        if (this.termToSearch !== termToSearch) {
            this.handleNewRequest(termToSearch);
        }
        this.youtubeSubscription = this.youtube.getAll('/search', this.createRequestOptions())
            .subscribe(videoList => {
            this.handleNewVideoList(videoList);
        }, error => {
            console.error(error);
            this.loading = false;
        });
    }
    handleNewRequest(termToSearch) {
        this.termToSearch = termToSearch;
        this.videoDetailsList = undefined;
        this.bookmark = undefined;
        this.youtubeCache.clearCache();
    }
    handleNewVideoList(videoList) {
        this.addVideosToList(videoList.items);
        this.bookmark = videoList.nextPageToken;
        this.loading = false;
        this.setCache();
    }
    setCache() {
        this.youtubeCache.cache = {
            nextPageToken: this.bookmark,
            items: this.videoDetailsList,
            termToSearch: this.termToSearch
        };
    }
    addVideosToList(videos) {
        if (this.videoDetailsList)
            videos.map(video => this.videoDetailsList.push(video));
        else
            this.videoDetailsList = videos;
    }
    createRequestOptions() {
        const options = {
            params: {
                part: 'id,snippet',
                q: this.termToSearch,
                maxResults: '7'
            }
        };
        if (this.bookmark)
            options.params['pageToken'] = this.bookmark;
        return options;
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_shared_youtube_youtube_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"] },
    { type: src_app_shared_services_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_main_main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/main/main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var src_app_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var src_app_main_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/main/search/search.component */ "./src/app/main/search/search.component.ts");
/* harmony import */ var src_app_main_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/list/list.component */ "./src/app/main/list/list.component.ts");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_main_list_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/main/list/card/card.component */ "./src/app/main/list/card/card.component.ts");
/* harmony import */ var src_app_shared_services_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/cache.service */ "./src/app/shared/services/cache.service.ts");












let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
            src_app_main_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
            src_app_main_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
            src_app_main_list_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_main_main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            src_app_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        providers: [
            src_app_shared_services_cache_service__WEBPACK_IMPORTED_MODULE_11__["CacheService"]
        ]
    })
], MainModule);



/***/ }),

/***/ "./src/app/main/search/search.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/search/search.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  display: block;\n  height: 80px;\n  padding: 10px 15px;\n  width: 70%;\n  margin: 0px auto;\n}\nform mat-form-field {\n  width: 100%;\n}\nform mat-form-field ::ng-deep.mat-form-field-suffix {\n  align-items: center;\n  top: auto;\n}\n@media screen and (max-width: 375px) {\n  form {\n    display: block;\n    height: 80px;\n    padding: 10px 15px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkb2ZhbG90aWNvL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGUtZnJvbnQtZW5kL3NyYy9hcHAvbWFpbi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7QUNDSjtBRENJO0VBRUUsbUJBQUE7RUFDQSxTQUFBO0FDQU47QURLQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICBmb3JtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59IiwiZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbmZvcm0gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbmZvcm0gbWF0LWZvcm0tZmllbGQgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgZm9ybSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/search/search.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SearchComponent = class SearchComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.searchValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            searchValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    clearSearchValue() {
        this.searchForm.controls.searchValue.setValue('');
    }
    onSubmit() {
        if (this.searchForm.valid)
            this.outputValue(this.searchForm.controls.searchValue.value);
    }
    outputValue(value) {
        this.searchValue.emit(value);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchComponent.prototype, "searchValue", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/main/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/shared/services/cache.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/cache.service.ts ***!
  \**************************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CacheService = class CacheService {
    constructor() { }
    get cache() {
        return this._cache;
    }
    set cache(cache) {
        if (this._cache) {
            this._cache.nextPageToken = cache.nextPageToken;
            this._cache.items.concat(cache.items);
            this._cache.termToSearch = cache.termToSearch;
        }
        else {
            this._cache = cache;
        }
    }
    clearCache() {
        this._cache = undefined;
    }
};
CacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CacheService);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map