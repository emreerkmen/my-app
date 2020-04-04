(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<!-- The content below is only a placeholder and can be replaced.\r\n<div style=\"text-align:center\">\r\n  <h2>\r\n    <app-customer [city]=\"city\"></app-customer>\r\n  </h2>\r\n</div> -->\r\n\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/city.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/city.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  city works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{city}}</h1>\r\n<ul>\r\n  <li *ngFor=\"let customer of customers\" (click)=\"selectCustomer(customer)\">\r\n    <div *ngIf=\"customer.age>10\">{{customer.firstName}}  {{customer.lastName}}</div>\r\n  </li>\r\n</ul>\r\n\r\n<strong *ngIf=\"selectedCustomer; else elseBlock\">{{selectedCustomer.firstName}} seçtiniz.</strong><!--selctedCustomer başlatıldı ise çalıştır.-->\r\n\r\n\r\n<ng-template #elseBlock >Henüz birisini seçmediniz.</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer\" id=\"app-footer\">\n    <div class=\"icons\">\n        <img class=\"angular-icon left\" src=\"assets/img/angular-large.svg\" title=\"Home\">\n        <img class=\"angular-icon mid\" src=\"assets/img/angular-large.svg\" title=\"Home\">\n        <img class=\"angular-icon right\" src=\"assets/img/angular-large.svg\" title=\"Home\">\n    </div>\n    <div class=\"div-footer\" id=\"div-footer\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark\" style=\"background-color: #70ACB1;\">\r\n  <!--navbar navbar-expand-lg navbar-dark bg-primary-->\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img class=\"logo img-fluid\" src=\"assets/img/dog.svg\" width=\"40\" height=\"40\" alt=\"\">\r\n    POOKIE</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/posts']\">Post <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/resume']\">Resume</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown \">\r\n        <!--TODO-Dropdowdaki yazılar beyaz yapılacak-->\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Blog\r\n        </a>\r\n        <div class=\"dropdown-menu animate slideIn\" aria-labelledby=\"navbarDropdown\" style=\"background-color: #70ACB1;\">\r\n          <a class=\"dropdown-item\" href=\"#\">Angular</a>\r\n          <a class=\"dropdown-item\" href=\"#\">React</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Vue</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">.Net</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Asp.Net Core</a>\r\n        </div>\r\n      </li>\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\r\n      </li> -->\r\n    </ul>\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item \">\r\n        <a class=\"icon\" href=\"https://twitter.com/obirSadeceemre?lang=tr\" target=\"_blank\">\r\n          <img src=\"assets/img/twitter.svg\" width=\"37\" height=\"37\" alt=\"\">\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"icon\" href=\"https://github.com/emreerkmen?tab=repositories\" target=\"_blank\">\r\n          <img src=\"assets/img/github.svg\" width=\"40\" height=\"40\" alt=\"\">\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post/post.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post/post.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\r\n  <!--{{today | date :'fullDate'}}-->\r\n  <div class=\"my-3 p-3 bg-white rounded shadow-sm\">\r\n    <h6 class=\"border-bottom border-gray pb-2 mb-0\">Recent updates</h6>\r\n    <strong *ngFor=\"let user of users\">\r\n      <span routerLink=\"/posts/{{user.id}}\" class=\"badge badge-info\">{{user.name}}</span>\r\n    </strong>\r\n\r\n    <input class=\"form-control mr-sm-2\" [(ngModel)]=\"filterText\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n\r\n    <div *ngFor=\"let post of posts | postFilter:filterText\" class=\"media text-muted pt-3\">\r\n      <!-- <svg class=\"bd-placeholder-img mr-2 rounded\" width=\"32\" height=\"32\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 32x32\">\r\n        <title>Placeholder</title>\r\n        <rect fill=\"#007bff\" width=\"100%\" height=\"100%\" /><text fill=\"#007bff\" dy=\".3em\" x=\"50%\" y=\"50%\">32x32</text>\r\n      </svg> -->\r\n      \r\n      <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\"> \r\n        <strong class=\"d-block text-gray-dark\">@{{post.title | uppercase}}</strong>\r\n        {{post.body}}\r\n      </p>\r\n      <span (click)=\"addToFavorites(post)\" class=\"badge badge-success\">Favorite</span>\r\n    </div>\r\n    <small class=\"d-block text-right mt-3\">\r\n      <a href=\"#\">All updates</a>\r\n    </small>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume/resume.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume/resume.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<div class=\"container top-info\">\n  <div class=\"row\">\n    <div class=\"col top-info text-center \">\n      <div class=\"shadow p-3 mb-5 bg-white rounded\">\n        <h5>\n          <span class=\"badge badge-secondary\" style=\"float:left\"><i\n              class=\"fa fa-envelope\"></i></span>emre.erkmen@hotmail.com\n        </h5>\n        <h5>\n          <span class=\"badge badge-secondary\" style=\"float:left\"><i class=\"fa fa-phone\"></i></span>0534 392 0715\n        </h5>\n        <h5>\n          <span class=\"badge badge-secondary\" style=\"float:left\"><i class=\"fa fa-calendar\"></i></span>25/04/1994\n        </h5>\n      </div>\n    </div>\n    <div class=\"col-2 text-center top-info img\">\n      <img class=\"img-fluid\" src=\"assets/img/profil_pic.jpg\" width=\"100\" height=\"180\" alt=\"\" />\n    </div>\n    <div class=\"col top-info text-center \">\n      <div class=\"shadow p-3 mb-5 bg-white rounded\">\n        <h5>\n          emre.erkmen2<span class=\"badge badge-secondary\" style=\"float:right\"><i class=\"fa fa-skype\"></i></span>\n        </h5>\n        <h5>\n          github.com/emreerkmen<span class=\"badge badge-secondary\" style=\"float:right\"><i\n              class=\"fa fa-github-square\"></i></span>\n        </h5>\n        <h5>\n          İstanbul<span class=\"badge badge-secondary\" style=\"float:right\"><i class=\"fa fa-map-marker\"></i></span>\n        </h5>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"container blog shadow\">\n\n  <div class=\"row\">\n    <div class=\"col mt-5 one\">\n      <div *ngFor=\"let resume of resumes;index as i\">\n        <div class=\"card mb-3\">\n          <div class=\"card-body\">\n            <a class=\"card-title\" data-toggle=\"collapse\" href=\"#collapseExample{{i}}\" role=\"button\"\n              aria-expanded=\"false\" aria-controls=\"collapseExample\">\n              <h5 class=\"card-title\">{{resume.summaryTitle}}</h5>\n            </a>\n            <p class=\"card-text\">{{resume.summaryDefination}}</p>\n            <div class=\"collapse\" id=\"collapseExample{{i}}\">\n              <div class=\"card card-body\">\n                <p>{{resume.collapseDefination}}</p>\n              </div>\n            </div>\n            <!-- <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> -->\n<!--</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>-->\n\n<div class=\"container blog shadow\">\n  <div class=\"row\">\n    <div class=\"col mt-5 one\">\n      <div *ngFor=\"let resumeDetail of resumeDetails; index as i\">\n        <div class=\"card mb-3\">\n          <div class=\"card-body\">\n            <a class=\"card-title\" data-toggle=\"collapse\" href=\"#collapseExample{{ i }}\" role=\"button\"\n              aria-expanded=\"false\" aria-controls=\"collapseExample\">\n              <div>\n                <h5 class=\"card-title\">\n                  {{ resumeDetail.title }} | {{ resumeDetail.companyName }}\n                    <h5 class=\"card-date\" style=\"float: right\">\n                      ({{ resumeDetail.startDate | date }})-({{\n                  resumeDetail.endDate | date\n                }})\n                    </h5>\n                </h5>\n              </div>\n            </a>\n            <p class=\"card-text\">\n              <!--{{resume.summaryDefination}}-->\n            </p>\n            <div class=\"collapse show\" id=\"collapseExample{{ i }}\">\n              <div class=\"card card-body\">\n                <p>{{ resumeDetail.description }}</p>\n              </div>\n            </div>\n            <!-- <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-11\"></div>\n    <div class=\"col-1\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeLanguage()\">\n        {{ language }}\n      </button>\n    </div>\n  </div>\n</div>-->\n\n<!--<div class=\"container-title-main\">\n  <div class=\"div-topwave\">\n    <svg class=\"topwave\"  viewBox=\"0 0 294 73\">\n      <path id=\"topwave\"  opacity=\"0.15\"\n        d=\"M0.495151 0L0.382996 35.0629C0.382996 35.0629 58.1024 103.623 117.141 35.0629C176.179 -33.4976 293.265 72.5 293.265 72.5L293.497 0H0.495151Z\" />\n    </svg>\n  </div>\n\n  <h6 class=\"title\">TITLE</h6>\n  <div class=\"div-bottomwaves\">\n\n    <svg class=\"front-bottom-waves\" viewBox=\"0 -40 293 460\">\n\n      <path class=\"back\" id=\"back\" transform=\"translate(0,-40)\" \n        d=\"M0 0C0 0 27.1706 65.5507 57.2342 108.942C76.3561 120.611 99.6285 126.038 126.058 115.285C160.331 14.4708 293 40.6254 293 40.6254V517H0V0Z\" />\n      <path class=\"front\" id=\"front\" d=\"M0 0C0 0 59 122 146.5 61C234 0 293 0 293 0V474H0V0Z\" />\n    </svg>\n    <svg viewBox=\"0 600 293 517\">\n\n    </svg>\n  </div>\n</div>-->\n\n<!---->"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");







var routes = [
    { path: "posts", component: _post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"] },
    { path: "", redirectTo: "posts", pathMatch: "full" },
    { path: "customers", component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"] },
    { path: "posts/:userid", component: _post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"] },
    { path: "city", component: _city_city_component__WEBPACK_IMPORTED_MODULE_5__["CityComponent"] },
    { path: "resume", component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'First Angular App';
        this.city = "Ankara";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _post_post_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/post-filter.pipe */ "./src/app/post/post-filter.pipe.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__["CustomerComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                _post_post_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["PostFilterPipe"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_12__["CityComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_services_alertify_service__WEBPACK_IMPORTED_MODULE_10__["AlertifyService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/city/city.component.scss":
/*!******************************************!*\
  !*** ./src/app/city/city.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpdHkvY2l0eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/city/city.component.ts":
/*!****************************************!*\
  !*** ./src/app/city/city.component.ts ***!
  \****************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CityComponent = /** @class */ (function () {
    function CityComponent() {
    }
    CityComponent.prototype.ngOnInit = function () {
    };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/index.js!./src/app/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.scss */ "./src/app/city/city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.scss":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
        this.customers = [];
        this.city = "İstanbul";
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.customers = [
            { id: 1, firstName: 'Adam', lastName: 'SIMITH', age: 10 },
            { id: 2, firstName: 'Alex', lastName: 'SIMITH', age: 20 },
            { id: 3, firstName: 'Jon', lastName: 'SIMITH', age: 30 },
        ];
    };
    CustomerComponent.prototype.selectCustomer = function (customer) {
        alert(customer.firstName + " selected.");
        this.selectedCustomer = customer;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CustomerComponent.prototype, "city", void 0);
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/customer/customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}()); /**/



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer {\n  position: relative;\n  background-color: #DCA98A;\n  bottom: 0px;\n  top: 419px;\n  right: 0;\n  left: 0;\n  height: 100px;\n}\n\n.div-footer {\n  position: absolute;\n  background-color: #70ACB1;\n  top: 0px;\n  height: 100px;\n  transition: 1s cubic-bezier(0.25, 0, 0, 1);\n  width: 100%;\n}\n\n.app-footer:hover .div-footer {\n  height: 10px;\n}\n\n.icons {\n  position: relative;\n  margin: auto;\n  border: 3px solid blue;\n  width: 266px;\n}\n\n.angular-icon {\n  position: relative;\n  display: block;\n  margin: 0px 0px 0px 0px;\n  border: 1px solid red;\n  height: 90px;\n  width: 70px;\n  float: left;\n}\n\n.mid {\n  margin: 0px 25px 0px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcZW1yZWVcXERlc2t0b3BcXFdvcmtTcGFjZVxcbXktYXBwL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUVBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1mb290ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRENBOThBO1xyXG4gIC8vYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICBib3R0b206IDBweDtcclxuICB0b3A6IDQxOXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmRpdi1mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBBQ0IxO1xyXG4gIC8vYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICB0b3A6IDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHRyYW5zaXRpb246MXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAsIDAsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXBwLWZvb3Rlcjpob3ZlciAuZGl2LWZvb3RlcntcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XHJcbiAgd2lkdGg6IDI2NnB4O1xyXG59XHJcblxyXG4uYW5ndWxhci1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGhlaWdodDogOTBweDtcclxuICB3aWR0aDogIDcwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5taWQge1xyXG4gIG1hcmdpbjogMHB4IDI1cHggMHB4IDI1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLmFwcC1mb290ZXI6aG92ZXIgLmRpdi1mb290ZXJ7XHJcbi8vICAgYW5pbWF0aW9uOiBvcGVuLWZvb3Rlci1zdmcgMXM7XHJcbi8vICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbi8vICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuLy8gICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbi8vICAgLy90cmFuc2l0aW9uOjFzIGN1YmljLWJlemllcigwLjI1LCAwLCAwLCAxKTtcclxuLy8gICB0cmFuc2l0aW9uOiBoZWlnaHQgMXM7XHJcbi8vIH1cclxuXHJcbi8vIEBrZXlmcmFtZXMgb3Blbi1mb290ZXItc3Zne1xyXG4vLyAgICAgZnJvbXtcclxuXHJcbi8vICAgICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICB0b3tcclxuXHJcbi8vICAgICAgIGhlaWdodDogMTBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCIuYXBwLWZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDQTk4QTtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogNDE5cHg7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwQUNCMTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRyYW5zaXRpb246IDFzIGN1YmljLWJlemllcigwLjI1LCAwLCAwLCAxKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcHAtZm9vdGVyOmhvdmVyIC5kaXYtZm9vdGVyIHtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4uaWNvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcbiAgd2lkdGg6IDI2NnB4O1xufVxuXG4uYW5ndWxhci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogNzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5taWQge1xuICBtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding: 0 16px 0 0;\n}\n\n.navbar-brand {\n  position: relative;\n  margin-top: -21px;\n  top: 10px;\n  height: 40px;\n  right: -20px;\n}\n\n.navbar-nav {\n  position: relative;\n  margin-top: 7px;\n  margin-left: 20px;\n}\n\n.icon {\n  position: relative;\n  margin-right: 15px;\n}\n\n.dropdown-item {\n  color: #ffffff;\n}\n\n@media (min-width: 992px) {\n  .animate {\n    animation-duration: 0.3s;\n    -webkit-animation-duration: 0.3s;\n    animation-fill-mode: both;\n    -webkit-animation-fill-mode: both;\n  }\n}\n\n@keyframes slideIn {\n  0% {\n    -webkit-transform: translateY(-1rem);\n            transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0rem);\n            transform: translateY(0rem);\n    opacity: 1;\n  }\n  0% {\n    -webkit-transform: translateY(-1rem);\n            transform: translateY(-1rem);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes slideIn {\n  0% {\n    -webkit-transform: transform;\n    -webkit-opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0);\n    -webkit-opacity: 1;\n  }\n  0% {\n    -webkit-transform: translateY(1rem);\n    -webkit-opacity: 0;\n  }\n}\n\n.slideIn {\n  -webkit-animation-name: slideIn;\n  animation-name: slideIn;\n}\n\n.dropdown-menu a:hover {\n  background: #87ecb1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcZW1yZWVcXERlc2t0b3BcXFdvcmtTcGFjZVxcbXktYXBwL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDRSx3QkFBQTtJQUNBLGdDQUFBO0lBQ0EseUJBQUE7SUFDQSxpQ0FBQTtFQ0NKO0FBQ0Y7O0FERUU7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxVQUFBO0VDQUo7RURFRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDQUo7RURFRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxVQUFBO0VDQUo7QUFDRjs7QURHRTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxrQkFBQTtFQ0RKO0VER0U7SUFDRSxnQ0FBQTtJQUNBLGtCQUFBO0VDREo7RURHRTtJQUNFLG1DQUFBO0lBQ0Esa0JBQUE7RUNESjtBQUNGOztBRElFO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtFO0VBQ0UsOEJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweCAwIDA7XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjFweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxufVxyXG5cclxuLm5hdmJhci1uYXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24taXRlbXtcclxuICAgIGNvbG9yOiAjZmZmZmZmIDsgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmFuaW1hdGUge1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHJlbSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zZm9ybTtcclxuICAgICAgLXdlYmtpdC1vcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAtd2Via2l0LW9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFyZW0pO1xyXG4gICAgICAtd2Via2l0LW9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZUluIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51IGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODdlY2IxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAiLCIubmF2YmFyIHtcbiAgcGFkZGluZzogMCAxNnB4IDAgMDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLTIxcHg7XG4gIHRvcDogMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICByaWdodDogLTIwcHg7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmFuaW1hdGUge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAtd2Via2l0LW9wYWNpdHk6IDE7XG4gIH1cbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFyZW0pO1xuICAgIC13ZWJraXQtb3BhY2l0eTogMDtcbiAgfVxufVxuLnNsaWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcbn1cblxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4N2VjYjEgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/post/post-filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/post/post-filter.pipe.ts ***!
  \******************************************/
/*! exports provided: PostFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFilterPipe", function() { return PostFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostFilterPipe = /** @class */ (function () {
    function PostFilterPipe() {
    }
    PostFilterPipe.prototype.transform = function (value, filterText) {
        if (!filterText) {
            return value;
        }
        else {
            return value.filter(function (p) { return p.title.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1; });
        }
    };
    PostFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'postFilter'
        })
    ], PostFilterPipe);
    return PostFilterPipe;
}());



/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  overflow-x: hidden;\n  /* Prevent scroll on narrow devices */\n}\n\nbody {\n  padding-top: 56px;\n}\n\n@media (max-width: 991.98px) {\n  .offcanvas-collapse {\n    position: fixed;\n    top: 56px;\n    /* Height of navbar */\n    bottom: 0;\n    left: 100%;\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    overflow-y: auto;\n    visibility: hidden;\n    background-color: #343a40;\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.3s;\n    transition-property: left, visibility;\n  }\n\n  .offcanvas-collapse.open {\n    left: 0;\n    visibility: visible;\n  }\n}\n\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller .nav {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  color: rgba(255, 255, 255, 0.75);\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-underline .nav-link {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n\n.nav-underline .nav-link:hover {\n  color: #007bff;\n}\n\n.nav-underline .active {\n  font-weight: 500;\n  color: #343a40;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.bg-purple {\n  background-color: #6f42c1;\n}\n\n.lh-100 {\n  line-height: 1;\n}\n\n.lh-125 {\n  line-height: 1.25;\n}\n\n.lh-150 {\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9DOlxcVXNlcnNcXGVtcmVlXFxEZXNrdG9wXFxXb3JrU3BhY2VcXG15LWFwcC9zcmNcXGFwcFxccG9zdFxccG9zdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFBO0VBQW9CLHFDQUFBO0FDRXRCOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFBVyxxQkFBQTtJQUNYLFNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSx1Q0FBQTtJQUNBLHlCQUFBO0lBQ0EscUNBQUE7RUNHRjs7RUREQTtJQUNFLE9BQUE7SUFDQSxtQkFBQTtFQ0lGO0FBQ0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUVFLGFBQUE7RUFFQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNHRjs7QURBQTtFQUFpQiwrQkFBQTtBQ0lqQjs7QURGQTtFQUFhLHlCQUFBO0FDTWI7O0FESkE7RUFBVSxjQUFBO0FDUVY7O0FEUEE7RUFBVSxpQkFBQTtBQ1dWOztBRFZBO0VBQVUsZ0JBQUE7QUNjViIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogUHJldmVudCBzY3JvbGwgb24gbmFycm93IGRldmljZXMgKi9cclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDU2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gIC5vZmZjYW52YXMtY29sbGFwc2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1NnB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCB2aXNpYmlsaXR5O1xyXG4gIH1cclxuICAub2ZmY2FudmFzLWNvbGxhcHNlLm9wZW4ge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LXNjcm9sbGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2LXNjcm9sbGVyIC5uYXYge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuLm5hdi11bmRlcmxpbmUgLm5hdi1saW5rIHtcclxuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4ubmF2LXVuZGVybGluZSAuYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4udGV4dC13aGl0ZS01MCB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTsgfVxyXG5cclxuLmJnLXB1cnBsZSB7IGJhY2tncm91bmQtY29sb3I6ICM2ZjQyYzE7IH1cclxuXHJcbi5saC0xMDAgeyBsaW5lLWhlaWdodDogMTsgfVxyXG4ubGgtMTI1IHsgbGluZS1oZWlnaHQ6IDEuMjU7IH1cclxuLmxoLTE1MCB7IGxpbmUtaGVpZ2h0OiAxLjU7IH0iLCJodG1sLFxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLyogUHJldmVudCBzY3JvbGwgb24gbmFycm93IGRldmljZXMgKi9cbn1cblxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiA1NnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLm9mZmNhbnZhcy1jb2xsYXBzZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTZweDtcbiAgICAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCB2aXNpYmlsaXR5O1xuICB9XG5cbiAgLm9mZmNhbnZhcy1jb2xsYXBzZS5vcGVuIHtcbiAgICBsZWZ0OiAwO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cbi5uYXYtc2Nyb2xsZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMi43NXJlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubmF2LXNjcm9sbGVyIC5uYXYge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLm5hdi11bmRlcmxpbmUgLm5hdi1saW5rIHtcbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLm5hdi11bmRlcmxpbmUgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5uYXYtdW5kZXJsaW5lIC5hY3RpdmUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLnRleHQtd2hpdGUtNTAge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uYmctcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTtcbn1cblxuLmxoLTEwMCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubGgtMTI1IHtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5cbi5saC0xNTAge1xuICBsaW5lLWhlaWdodDogMS41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post.service */ "./src/app/post/post.service.ts");





var PostComponent = /** @class */ (function () {
    function PostComponent(activatedRoute, alertifyService, postService) {
        this.activatedRoute = activatedRoute;
        this.alertifyService = alertifyService;
        this.postService = postService;
        this.path = "https://jsonplaceholder.typicode.com/";
        this.today = new Date(2019, 2, 21);
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUsers();
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            console.log(params["userid"]);
            _this.getPosts(params["userid"]);
        });
    };
    PostComponent.prototype.getPosts = function (userid) {
        var _this = this;
        this.postService.getPosts(userid).subscribe(function (data) {
            _this.posts = data;
        });
    };
    PostComponent.prototype.getUsers = function () {
        var _this = this;
        this.postService.getUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    PostComponent.prototype.addToFavorites = function (post) {
        this.alertifyService.success("Adding succes" + post.title);
    };
    PostComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }
    ]; };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/index.js!./src/app/post/post.component.html"),
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]] //post service buraya eklediğimiz için bu component her çalıştığında bu service örneği belleğe atılıcak. Buna local service deniyor. 
            ,
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/post/post.service.ts":
/*!**************************************!*\
  !*** ./src/app/post/post.service.ts ***!
  \**************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.path = "https://jsonplaceholder.typicode.com/";
    }
    PostService.prototype.getPosts = function (userid) {
        if (userid) {
            return this.http.get(this.path + "posts?userId=" + userid);
        }
        else {
            return this.http.get(this.path + "posts");
        }
        ;
    };
    PostService.prototype.getUsers = function () {
        return this.http.get(this.path + "users");
    };
    PostService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog {\n  background-color: #ffffff;\n  border-radius: 0.25rem;\n}\n\n.top-info {\n  background-color: #ffffff;\n  height: 100px;\n}\n\nimg {\n  border: 1px solid #000000;\n  border-radius: 0px 0px 20px 20px;\n  padding: 5px;\n  background-color: #ddd;\n}\n\nimg:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n\n.img {\n  padding: 0% !important;\n}\n\n.summary {\n  color: black;\n}\n\na.card-title {\n  color: #444;\n}\n\n.container-title-main {\n  position: relative;\n  width: 294.5px;\n  height: 601px;\n  left: 100px;\n  background-color: #ffffff;\n  border: 1px solid #000000;\n}\n\n.title {\n  position: relative;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 57px;\n  line-height: 67px;\n  margin: 0 0 0 0;\n  /* Blue 2 */\n  color: #2d9cdb;\n}\n\n#front {\n  fill: #2d9cdb;\n}\n\n#back {\n  fill: #56ccf2;\n  visibility: collapse;\n}\n\n.front-bottom-waves:hover .back {\n  -webkit-animation: createshadow 1s;\n          animation: createshadow 1s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes createshadow {\n  from {\n    fill: #ffffff;\n  }\n  to {\n    fill: #56ccf2;\n    visibility: visible;\n  }\n}\n\n@keyframes createshadow {\n  from {\n    fill: #ffffff;\n  }\n  to {\n    fill: #56ccf2;\n    visibility: visible;\n  }\n}\n\n#topwave {\n  fill: #56CCF2;\n  -webkit-transform: translate(10, 10);\n          transform: translate(10, 10);\n}\n\nh5.card-date {\n  background-color: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL0M6XFxVc2Vyc1xcZW1yZWVcXERlc2t0b3BcXFdvcmtTcGFjZVxcbXktYXBwL3NyY1xcYXBwXFxyZXN1bWVcXHJlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBRUEsYUFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsOENBQUE7QUNGRjs7QURLQTtFQUNFLHNCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURNQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ0hGOztBRE1BO0VBQ0U7SUFDRSxhQUFBO0VDSEY7RURLQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtFQ0hGO0FBQ0Y7O0FESkE7RUFDRTtJQUNFLGFBQUE7RUNIRjtFREtBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDSkY7O0FET0E7RUFDRSxtQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR2YXJpYWJsZTogMTtcclxuXHJcbi5ibG9nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi50b3AtaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAvL2JvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBwYWRkaW5nOiAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VtbWFyeSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5hLmNhcmQtdGl0bGUge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXRpdGxlLW1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjk0LjVweDtcclxuICBoZWlnaHQ6IDYwMXB4O1xyXG4gIGxlZnQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDU3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgbWFyZ2luOiAwIDAgMCAwO1xyXG5cclxuICAvKiBCbHVlIDIgKi9cclxuICBjb2xvcjogIzJkOWNkYjtcclxufVxyXG5cclxuI2Zyb250IHtcclxuICBmaWxsOiAjMmQ5Y2RiO1xyXG59XHJcblxyXG4jYmFjayB7XHJcbiAgZmlsbDogIzU2Y2NmMjtcclxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmZyb250LWJvdHRvbS13YXZlczpob3ZlciAgLmJhY2sge1xyXG4gIGFuaW1hdGlvbjogY3JlYXRlc2hhZG93IDFzO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNyZWF0ZXNoYWRvdyB7XHJcbiAgZnJvbSB7XHJcbiAgICBmaWxsOiAjZmZmZmZmO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBmaWxsOiAjNTZjY2YyO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbiN0b3B3YXZlIHtcclxuICBmaWxsOiAjNTZDQ0YyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwLDEwKTtcclxufVxyXG5cclxuaDUuY2FyZC1kYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlKCRjb2xvcjogIzAwMDAwMCk7XHJcbn0iLCIuYmxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi50b3AtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbmltZzpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMTQwLCAxODYsIDAuNSk7XG59XG5cbi5pbWcge1xuICBwYWRkaW5nOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uc3VtbWFyeSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYS5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5jb250YWluZXItdGl0bGUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI5NC41cHg7XG4gIGhlaWdodDogNjAxcHg7XG4gIGxlZnQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA1N3B4O1xuICBsaW5lLWhlaWdodDogNjdweDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICAvKiBCbHVlIDIgKi9cbiAgY29sb3I6ICMyZDljZGI7XG59XG5cbiNmcm9udCB7XG4gIGZpbGw6ICMyZDljZGI7XG59XG5cbiNiYWNrIHtcbiAgZmlsbDogIzU2Y2NmMjtcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XG59XG5cbi5mcm9udC1ib3R0b20td2F2ZXM6aG92ZXIgLmJhY2sge1xuICBhbmltYXRpb246IGNyZWF0ZXNoYWRvdyAxcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGNyZWF0ZXNoYWRvdyB7XG4gIGZyb20ge1xuICAgIGZpbGw6ICNmZmZmZmY7XG4gIH1cbiAgdG8ge1xuICAgIGZpbGw6ICM1NmNjZjI7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuI3RvcHdhdmUge1xuICBmaWxsOiAjNTZDQ0YyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCwgMTApO1xufVxuXG5oNS5jYXJkLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_resume_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/resume.service */ "./src/app/services/resume.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



 //TODO Bu ne için kullanılıyorud?
/*********************/
//Observable timer örneği
// const source = timer(1000, 2000);
// const subscribe = source.subscribe(data => console.log(data + ". saniye"));
// setTimeout(() => { subscribe.unsubscribe(); }, 10000);
/*********************/
/*********************/
//basit bir obsrvable örneği
// const myObservable = of('apple', 'orange', 'grappe');//bir observable tanımlıyoruz.
// const myObserver = {//bir de observer tanımlıyoruz. Aslında gözlemci ve gözlemcinin ne yapacağı tanımlanıyor
//   next: (x: string) => console.log('Observer got a next value: ' + x),
//   error: (err: string) => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };
// const subscribeMy = myObservable.subscribe(myObserver);
/*********************/
/*********************/
//Observable with Constructor
// function sequenceSubscriber(observer) {
//   observer.next('Apple');
//   observer.next('Orange');
//   observer.next('Grappe');
//   observer.complete();
//   return { unsubscribe() { } };
// }
// const sequence = new Observable(sequenceSubscriber)/*.pipe(tap (p => console.log("fetched fruits.")))*/;
// sequence.subscribe({
//   next(msg) { console.log(msg); },
//   complete() { console.log('Finished sequence'); }
// });
/*********************/
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(activatedRoute, resumeService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.resumeService = resumeService;
        this.titleObserver = {
            //bir de observer tanımlıyoruz. Aslında gözlemci ve gözlemcinin ne yapacağı tanımlanıyor
            next: function (data) { return (_this.titles = data); },
            error: function (err) { return console.error("Observer got an error: " + err); },
            complete: function () { return console.log("Title fetch tamamlandı."); }
        };
    }
    ResumeComponent.prototype.ngOnInit = function () {
        this.setAll();
        // this.activatedRoute.params.subscribe(params => {//TODO Bu ne içindi acaba?
        //   console.log("emre");
        //   this.getTitle(null);
        // })
        //this.changeLanguage();
    };
    ResumeComponent.prototype.getTitle = function (titleId) {
        this.resumeService.getTitles$(titleId).subscribe(this.titleObserver);
    };
    ResumeComponent.prototype.updateTitle = function (title) {
        this.resumeService.updateTitle$(title).subscribe(this.titleObserver);
    };
    ResumeComponent.prototype.createTitle = function (title) {
        this.resumeService.createTitle$(title).subscribe(this.titleObserver);
    };
    ResumeComponent.prototype.deleteTitle = function (title) {
        this.resumeService.deleteTitle$(title).subscribe(this.titleObserver);
    };
    ResumeComponent.prototype.getCompanies = function (companyId) {
        var _this = this;
        this.resumeService.getCompanies$(companyId).subscribe(function (data) {
            (_this.companies = data),
                function (err) {
                    console.log(err);
                };
        });
    };
    ResumeComponent.prototype.getDesc = function (descId) {
        var _this = this;
        this.resumeService.getDescs$(descId).subscribe(function (data) {
            (_this.descs = data),
                function (err) {
                    console.log(err);
                };
        });
    };
    ResumeComponent.prototype.getresumeDetail = function () {
        var _this = this;
        this.resumeService.getResumeDetail$().subscribe(function (data) {
            (_this.resumeDetails = data),
                function (err) {
                    console.log(err);
                };
        });
    };
    ResumeComponent.prototype.setAll = function () {
        console.log("setAll() başladı");
        this.getTitle(null);
        this.getCompanies(null);
        this.getDesc(null);
        this.getresumeDetail();
        // this.resumeDetails = this.resumeDetails.sort((obj1,obj2) => {
        //   if(obj1.startDate>obj2.startDate){
        //     return 1;
        //   }
        //   if(obj1.startDate<obj2.startDate){
        //     return -1
        //   }
        //   return 0;
        // });
    };
    ResumeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_resume_service__WEBPACK_IMPORTED_MODULE_2__["ResumeService"] }
    ]; };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-resume",
            template: __webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume/resume.component.html"),
            providers: [_services_resume_service__WEBPACK_IMPORTED_MODULE_2__["ResumeService"]] //local service yaptık
            ,
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_resume_service__WEBPACK_IMPORTED_MODULE_2__["ResumeService"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.success(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/resume.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/resume.service.ts ***!
  \********************************************/
/*! exports provided: ResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeService", function() { return ResumeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



 //TODOObservable lar tam olarak anlaşılacak. Biraz anlaşıldı gibi, böyle devam Emre.


// Note that the RxJS library is huge. Instead of importing the entire RxJS library using import * as
// Rx from 'rxjs/Rx', it’s recommended to only import the pieces you require. This will substantially
// reduce the size of your resulting code bundle to a minimum.
var ResumeService = /** @class */ (function () {
    // constructor(private http: HttpClient) {
    //     this.myAppUrl = environment.appUrl;
    //     this.myApiUrl = 'api/BlogPosts/';
    // }
    function ResumeService(http) {
        this.http = http;
        // myAppUrl: string;
        // myApiUrl: string;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json; charset=utf-8"
            })
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appUrl; //environment default olarak dev modunda çalışır."ng serve --environment prod" ile environment.prod  çalışır
    }
    ResumeService.prototype.getTitles$ = function (titleId) {
        if (titleId) {
            return this.http
                .get(this.apiUrl + "titles/" + titleId) //TODO "posts?userId="  gibi bir soru işareti kullanılmış sorgulama için. Dotnet core api'ı bu hale getirebilrsin. avantajlarına bak
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (title) { return console.log("A title fetched:"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
        else {
            return this.http.get(this.apiUrl + "titles").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (title) { return console.log("Titles fetched."); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
    };
    ResumeService.prototype.createTitle$ = function (title) {
        if (title) {
            return this.http
                .post(this.apiUrl + "titles", JSON.stringify(title), this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (title) { return console.log(title.title + " isimli title kaydedildi."); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
    };
    ResumeService.prototype.updateTitle$ = function (title) {
        if (title) {
            return this.http.put(this.apiUrl + "titles/", title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (title) { return console.log(title.title + " isimli title güncellendi."); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
    };
    ResumeService.prototype.deleteTitle$ = function (title) {
        if (title) {
            return this.http
                .delete(this.apiUrl + "titles/" + title.titleId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (title) { return console.log(title.title + " isimli title silindi."); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
    };
    //Güzel bir örnek--https://www.sitepoint.com/angular-rxjs-create-api-service-rest-backend/
    /*public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
      }*/
    ResumeService.prototype.getCompanies$ = function (companyId) {
        if (companyId) {
            return this.http
                .get(this.apiUrl + "companies/" + companyId) //TODO "posts?userId="  gibi bir soru işareti kullanılmış sorgulama için. Dotnet core api'ı bu hale getirebilrsin. avantajlarına bak
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) { return console.log("A Company fetched:"); }));
        }
        else {
            return this.http.get(this.apiUrl + "companies").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) { return console.log("Componies fetched."); }));
        }
    };
    ResumeService.prototype.getDescs$ = function (descId) {
        if (descId) {
            return this.http
                .get(this.apiUrl + "descs/" + descId) //TODO "posts?userId="  gibi bir soru işareti kullanılmış sorgulama için. Dotnet core api'ı bu hale getirebilrsin. avantajlarına bak
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) { return console.log("A Description fetched:"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
        else {
            return this.http.get(this.apiUrl + "descs").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) { return console.log("Descriptions fetched."); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
    };
    ResumeService.prototype.getResumeDetail$ = function () {
        return this.http.get(this.apiUrl + "resumes/getdetail").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.sort(function (obj1, obj2) {
            if (obj1.startDate < obj2.startDate) {
                return 1;
            }
            if (obj1.startDate > obj2.startDate) {
                return -1;
            }
            return 0;
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) { return console.log("Resume detail fetched."); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ResumeService.prototype.errorHandler = function (error) {
        var errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ResumeService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ResumeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ResumeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResumeService);
    return ResumeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    appUrl: 'https://localhost:44306/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\emree\Desktop\WorkSpace\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map