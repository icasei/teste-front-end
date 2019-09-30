(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main-details-details-module"],{/***/"./node_modules/raw-loader/dist/cjs.js!./src/app/main/details/details.component.html":/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/details/details.component.html ***!
  \*******************************************************************************************/ /*! exports provided: default */ /***/function node_modulesRawLoaderDistCjsJsSrcAppMainDetailsDetailsComponentHtml(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="<div class=\"video-details-container\" *ngIf=\"videoDetails\">\n  <div class=\"header-row\">\n    <div class=\"arrow-back\">\n      <a [routerLink]=\"['/']\">\n        <mat-icon>arrow_back</mat-icon>\n      </a>\n    </div>\n    <h2 class=\"ellipsis\">{{ videoDetails?.snippet?.title }}</h2>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"content col-12\">\n        <img [src]=\"videoDetails?.snippet?.thumbnails?.maxres?.url\" alt=\"video thumbnail\" />\n\n        <div class=\"description-container\">\n          <div class=\"container-header\">\n            <h4 class=\"ellipsis\">{{ videoDetails?.snippet?.channelTitle }}</h4>\n\n            <div class=\"container-header-statistics\">\n              <div class=\"statistic-report\">\n                <mat-icon>thumb_up</mat-icon>\n                <p>{{ videoDetails?.statistics?.likeCount }}</p>\n              </div>\n\n              <div class=\"statistic-report\">\n                <mat-icon>thumb_down</mat-icon>\n                <p>{{ videoDetails?.statistics?.dislikeCount }}</p>\n              </div>\n\n              <div class=\"statistic-report\">\n                <mat-icon>remove_red_eye</mat-icon>\n                <p>{{ videoDetails?.statistics?.viewCount }}</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- <mat-divider></mat-divider> -->\n\n          <div class=\"container\">\n            <p style=\"overflow: auto\">\n              {{ videoDetails?.snippet?.description }}\n            </p>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"error-or-loading-container\" *ngIf=\"!videoDetails\">\n  <app-loading *ngIf=\"loading\"></app-loading>\n\n  <div *ngIf=\"error\">\n    <app-error class=\"error\" mainErrorMessage=\"Erro ao buscar video\" secondaryErrorMessage=\"Tente novamente mais tarde!\"></app-error>\n  </div>\n</div>";/***/},/***/"./src/app/main/details/details-routing.module.ts":/*!********************************************************!*\
  !*** ./src/app/main/details/details-routing.module.ts ***!
  \********************************************************/ /*! exports provided: DetailsRoutingModule */ /***/function srcAppMainDetailsDetailsRoutingModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DetailsRoutingModule",function(){return DetailsRoutingModule});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");/* harmony import */var src_app_main_details_details_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! src/app/main/details/details.component */"./src/app/main/details/details.component.ts");var routes=[{path:":videoId",component:src_app_main_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]}];var DetailsRoutingModule=function DetailsRoutingModule(){};DetailsRoutingModule=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({imports:[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],exports:[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]})],DetailsRoutingModule);/***/},/***/"./src/app/main/details/details.component.scss":/*!*****************************************************!*\
  !*** ./src/app/main/details/details.component.scss ***!
  \*****************************************************/ /*! exports provided: default */ /***/function srcAppMainDetailsDetailsComponentScss(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]=".video-details-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n}\n.video-details-container .header-row {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  display: flex;\n  background-color: #73bcf6;\n  height: 60px;\n  z-index: 999999;\n}\n.video-details-container .header-row h2 {\n  width: 80%;\n  font-weight: 500;\n  height: 60px;\n  line-height: 60px;\n  margin: 0px 10px;\n  flex: 9;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  color: #FFF;\n}\n.video-details-container .header-row .arrow-back {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  height: 60px;\n  line-height: 60px;\n}\n.video-details-container .header-row .arrow-back a {\n  height: 60px;\n  line-height: 54px;\n  font-size: 16px;\n  color: #FFF;\n  vertical-align: middle;\n}\n.video-details-container .header-row .arrow-back a .mat-icon {\n  vertical-align: middle;\n}\n.video-details-container .content {\n  margin: 80px 0px 0px;\n}\n.video-details-container .content img {\n  width: 100%;\n  height: auto;\n  border-radius: 0px;\n}\n.video-details-container .content .description-container {\n  display: flex;\n  flex-direction: column;\n}\n.video-details-container .content .description-container .container-header {\n  display: flex;\n  padding: 15px 0px 15px 15px;\n  background-color: #73bcf6;\n}\n.video-details-container .content .description-container .container-header h4 {\n  flex: 9;\n  color: #FFF;\n  font-size: 16px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  margin: 0px;\n}\n.video-details-container .content .description-container .container-header .container-header-statistics {\n  flex: 3;\n  display: flex;\n  justify-content: space-around;\n  color: #FFF;\n  font-size: 14px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n.video-details-container .content .description-container .container-header .container-header-statistics .mat-icon {\n  font-size: 20px;\n  line-height: 24px;\n}\n.video-details-container .content .description-container .container-header .container-header-statistics p {\n  margin: 0px 0px 0px 6px;\n}\n.video-details-container .content .description-container .container {\n  border: 1px solid #DDD;\n  border-top: 0px;\n}\n.video-details-container .content .description-container .container p {\n  padding: 20px 0px;\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 0px;\n}\n.error-or-loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.error {\n  max-width: 50%;\n}\n.ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.statistic-report {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.statistic-report p {\n  margin-left: 2px;\n}\n@media screen and (max-width: 650px) {\n  .statistic-report {\n    font-size: 10px;\n  }\n  .statistic-report mat-icon {\n    width: 20px;\n    height: 20px;\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 400px) {\n  h2 {\n    font-size: 12px;\n  }\n\n  .header-row {\n    height: 35px;\n  }\n\n  .content {\n    margin-top: 40px;\n  }\n\n  .container-header h4 {\n    flex: 5 !important;\n  }\n  .container-header .container-header-statistics {\n    flex: 5 !important;\n  }\n}\n@media screen and (min-width: 401px) and (max-width: 550px) {\n  h2 {\n    font-size: 14px;\n  }\n\n  .header-row {\n    height: 40px;\n  }\n\n  .content {\n    margin-top: 45px;\n  }\n}\n@media screen and (min-width: 551px) and (max-width: 720px) {\n  h2 {\n    font-size: 18px;\n  }\n\n  .header-row {\n    height: 50px;\n  }\n\n  .content {\n    margin-top: 60px;\n  }\n}\n@media screen and (min-width: 721px) and (max-width: 1280px) {\n  h2 {\n    font-size: 20px;\n  }\n\n  .header-row {\n    height: 55px;\n  }\n\n  .content {\n    margin-top: 65px;\n  }\n}\n@media screen and (min-width: 1281px) {\n  h2 {\n    font-size: 23px;\n  }\n\n  .header-row {\n    height: 65px;\n  }\n\n  .content {\n    margin-top: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkb2ZhbG90aWNvL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGUtZnJvbnQtZW5kL3NyYy9hcHAvbWFpbi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlb25hcmRvZmFsb3RpY28vRGVza3RvcC9Qcm9qZXRvcy90ZXN0ZS1mcm9udC1lbmQvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNERjtBREdFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRWZTO0VGZ0JULFlBQUE7RUFDQSxlQUFBO0FDREo7QURHSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0ROO0FESUk7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZOO0FESU07RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDRlI7QURJUTtFQUNFLHNCQUFBO0FDRlY7QURRRTtFQUNFLG9CQUFBO0FDTko7QURRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDUE47QURTTTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FDUFI7QURTUTtFQUNFLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUFY7QURVUTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNSVjtBRFVVO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDUlo7QURXVTtFQUNFLHVCQUFBO0FDVFo7QURjTTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ1pSO0FEY1E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDWlY7QURtQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNoQkY7QURtQkE7RUFDRSxjQUFBO0FDaEJGO0FEbUJBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNoQkY7QURpQkU7RUFDRSxnQkFBQTtBQ2ZKO0FEcUJBO0VBQ0U7SUFDRSxlQUFBO0VDbEJGO0VEbUJFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDakJKO0FBQ0Y7QURxQkE7RUFDRTtJQUNFLGVBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsWUFBQTtFQ25CRjs7RURzQkE7SUFDRSxnQkFBQTtFQ25CRjs7RUR1QkU7SUFDRSxrQkFBQTtFQ3BCSjtFRHNCRTtJQUNFLGtCQUFBO0VDcEJKO0FBQ0Y7QUR3QkE7RUFDRTtJQUNFLGVBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsWUFBQTtFQ3RCRjs7RUR5QkE7SUFDRSxnQkFBQTtFQ3RCRjtBQUNGO0FEeUJBO0VBQ0U7SUFDRSxlQUFBO0VDdkJGOztFRDBCQTtJQUNFLFlBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsZ0JBQUE7RUN2QkY7QUFDRjtBRDBCQTtFQUNFO0lBQ0UsZUFBQTtFQ3hCRjs7RUQwQkE7SUFDRSxZQUFBO0VDdkJGOztFRDBCQTtJQUNFLGdCQUFBO0VDdkJGO0FBQ0Y7QUQwQkE7RUFDRTtJQUNFLGVBQUE7RUN4QkY7O0VEMEJBO0lBQ0UsWUFBQTtFQ3ZCRjs7RUQwQkE7SUFDRSxnQkFBQTtFQ3ZCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi52aWRlby1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIC5oZWFkZXItcm93IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcblxuICAgIGgyIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgZmxleDogOTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuXG4gICAgLmFycm93LWJhY2sge1xuICAgICAgZmxleDogMTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIFxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogODBweCAwcHggMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5jb250YWluZXItaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMTVweCAwcHggMTVweCAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNiY2Y2O1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmbGV4OiA5O1xuICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWhlYWRlci1zdGF0aXN0aWNzIHtcbiAgICAgICAgICBmbGV4OiAzO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmVycm9yLW9yLWxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvciB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4uZWxsaXBzaXMge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN0YXRpc3RpYy1yZXBvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwIHtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICB9XG59XG5cbi8vIE1lZGlhc1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAuc3RhdGlzdGljLXJlcG9ydCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hdC1pY29uIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmhlYWRlci1yb3cge1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lci1oZWFkZXIge1xuICAgIGg0IHtcbiAgICAgIGZsZXg6IDUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci1oZWFkZXItc3RhdGlzdGljcyB7XG4gICAgICBmbGV4OiA1ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5oZWFkZXItcm93IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAuaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbiAgLmhlYWRlci1yb3cge1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICB9XG59IiwiLnZpZGVvLWRldGFpbHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4udmlkZW8tZGV0YWlscy1jb250YWluZXIgLmhlYWRlci1yb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3M2JjZjY7XG4gIGhlaWdodDogNjBweDtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLnZpZGVvLWRldGFpbHMtY29udGFpbmVyIC5oZWFkZXItcm93IGgyIHtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgZmxleDogOTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLnZpZGVvLWRldGFpbHMtY29udGFpbmVyIC5oZWFkZXItcm93IC5hcnJvdy1iYWNrIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cbi52aWRlby1kZXRhaWxzLWNvbnRhaW5lciAuaGVhZGVyLXJvdyAuYXJyb3ctYmFjayBhIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0ZGRjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi52aWRlby1kZXRhaWxzLWNvbnRhaW5lciAuaGVhZGVyLXJvdyAuYXJyb3ctYmFjayBhIC5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udmlkZW8tZGV0YWlscy1jb250YWluZXIgLmNvbnRlbnQge1xuICBtYXJnaW46IDgwcHggMHB4IDBweDtcbn1cbi52aWRlby1kZXRhaWxzLWNvbnRhaW5lciAuY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4udmlkZW8tZGV0YWlscy1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udmlkZW8tZGV0YWlscy1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYmNmNjtcbn1cbi52aWRlby1kZXRhaWxzLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5jb250YWluZXItaGVhZGVyIGg0IHtcbiAgZmxleDogOTtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDBweDtcbn1cbi52aWRlby1kZXRhaWxzLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5jb250YWluZXItaGVhZGVyIC5jb250YWluZXItaGVhZGVyLXN0YXRpc3RpY3Mge1xuICBmbGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnZpZGVvLWRldGFpbHMtY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1oZWFkZXIgLmNvbnRhaW5lci1oZWFkZXItc3RhdGlzdGljcyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLnZpZGVvLWRldGFpbHMtY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmNvbnRhaW5lci1oZWFkZXIgLmNvbnRhaW5lci1oZWFkZXItc3RhdGlzdGljcyBwIHtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA2cHg7XG59XG4udmlkZW8tZGV0YWlscy1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuLnZpZGVvLWRldGFpbHMtY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmNvbnRhaW5lciBwIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmVycm9yLW9yLWxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvciB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4uZWxsaXBzaXMge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN0YXRpc3RpYy1yZXBvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXRpc3RpYy1yZXBvcnQgcCB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5zdGF0aXN0aWMtcmVwb3J0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLnN0YXRpc3RpYy1yZXBvcnQgbWF0LWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxuICAuY29udGFpbmVyLWhlYWRlciBoNCB7XG4gICAgZmxleDogNSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXItaGVhZGVyIC5jb250YWluZXItaGVhZGVyLXN0YXRpc3RpY3Mge1xuICAgIGZsZXg6IDUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmhlYWRlci1yb3cge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAuaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODFweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICB9XG5cbiAgLmhlYWRlci1yb3cge1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICB9XG59IiwiJG1haW4tY29sb3I6ICM3M2JjZjY7XG4kc2VjdW5kYXJ5LWNvbG9yOiAjOTBjYWY5O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGxpZ2h0LWJsYWNrLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7Il19 */";/***/},/***/"./src/app/main/details/details.component.ts":/*!***************************************************!*\
  !*** ./src/app/main/details/details.component.ts ***!
  \***************************************************/ /*! exports provided: DetailsComponent */ /***/function srcAppMainDetailsDetailsComponentTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DetailsComponent",function(){return DetailsComponent});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var src_app_shared_youtube_youtube_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! src/app/shared/youtube/youtube.service */"./src/app/shared/youtube/youtube.service.ts");/* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");var DetailsComponent=/*#__PURE__*/function(){function DetailsComponent(activRoute,youtube){this.activRoute=activRoute;this.youtube=youtube;this.error=false;this.loading=false}var _proto=DetailsComponent.prototype;_proto.ngOnInit=function ngOnInit(){var _this=this;this.activeRouteSub=this.activRoute.params.subscribe(function(params){return _this.getVideoDetails(params.videoId)})};_proto.ngOnDestroy=function ngOnDestroy(){this.activeRouteSub.unsubscribe();this.youtubeSub.unsubscribe()};_proto.getVideoDetails=function getVideoDetails(videoId){var _this2=this;this.loading=true;this.youtubeSub=this.youtube.get("/videos",this.createRequestOptions(videoId)).subscribe(function(videoDetails){_this2.videoDetails=videoDetails.items[0];_this2.loading=false},function(error){console.error(error);_this2.error=true;_this2.loading=false})};_proto.createRequestOptions=function createRequestOptions(videoId){return{params:{part:"snippet, statistics",id:videoId}}};return DetailsComponent}();DetailsComponent.ctorParameters=function(){return[{type:_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]},{type:src_app_shared_youtube_youtube_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeService"]}]};DetailsComponent=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({selector:"app-details",template:tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/main/details/details.component.html")).default,styles:[tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.scss */"./src/app/main/details/details.component.scss")).default]})],DetailsComponent);/***/},/***/"./src/app/main/details/details.module.ts":/*!************************************************!*\
  !*** ./src/app/main/details/details.module.ts ***!
  \************************************************/ /*! exports provided: DetailsModule */ /***/function srcAppMainDetailsDetailsModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DetailsModule",function(){return DetailsModule});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! src/app/shared/shared.module */"./src/app/shared/shared.module.ts");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _details_routing_module__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./details-routing.module */"./src/app/main/details/details-routing.module.ts");/* harmony import */var src_app_main_details_details_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! src/app/main/details/details.component */"./src/app/main/details/details.component.ts");/* harmony import */var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! src/app/material/material.module */"./src/app/material/material.module.ts");var DetailsModule=function DetailsModule(){};DetailsModule=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({declarations:[src_app_main_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"]],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],_details_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetailsRoutingModule"],src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]]})],DetailsModule);/***/}}]);//# sourceMappingURL=main-details-details-module-es2015.js.map
//# sourceMappingURL=main-details-details-module-es5.js.map