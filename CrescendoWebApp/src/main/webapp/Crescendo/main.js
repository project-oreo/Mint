(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _components_general_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/home/home.component */ "./src/app/components/general/home/home.component.ts");
/* harmony import */ var _components_general_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/login/login.component */ "./src/app/components/general/login/login.component.ts");
/* harmony import */ var _components_general_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/general/reservation/reservation.component */ "./src/app/components/general/reservation/reservation.component.ts");
/* harmony import */ var _components_general_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/signup/signup.component */ "./src/app/components/general/signup/signup.component.ts");
/* harmony import */ var _components_promoter_promotersignup_promotersignup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/promoter/promotersignup/promotersignup.component */ "./src/app/components/promoter/promotersignup/promotersignup.component.ts");
/* harmony import */ var _components_promoter_promoterlogin_promoterlogin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/promoter/promoterlogin/promoterlogin.component */ "./src/app/components/promoter/promoterlogin/promoterlogin.component.ts");
/* harmony import */ var _components_band_bandsignup_bandsignup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/band/bandsignup/bandsignup.component */ "./src/app/components/band/bandsignup/bandsignup.component.ts");
/* harmony import */ var _components_band_bandlogin_bandlogin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/band/bandlogin/bandlogin.component */ "./src/app/components/band/bandlogin/bandlogin.component.ts");
/* harmony import */ var _components_band_bandhome_bandhome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/band/bandhome/bandhome.component */ "./src/app/components/band/bandhome/bandhome.component.ts");
/* harmony import */ var _components_band_bandprofile_bandprofile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/band/./bandprofile/bandprofile.component */ "./src/app/components/band/bandprofile/bandprofile.component.ts");
/* harmony import */ var _components_band_bandeditprofile_bandeditprofile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/band//bandeditprofile/bandeditprofile.component */ "./src/app/components/band/bandeditprofile/bandeditprofile.component.ts");
/* harmony import */ var _components_band_bandgigs_bandgigs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/band/bandgigs/bandgigs.component */ "./src/app/components/band/bandgigs/bandgigs.component.ts");
/* harmony import */ var _components_promoter_promoterhome_promoterhome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/promoter/promoterhome/promoterhome.component */ "./src/app/components/promoter/promoterhome/promoterhome.component.ts");
/* harmony import */ var _components_promoter_promotermanage_promotermanage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/promoter/promotermanage/promotermanage.component */ "./src/app/components/promoter/promotermanage/promotermanage.component.ts");
/* harmony import */ var _components_promoter_promoterendorse_promoterendorse_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/promoter/promoterendorse/promoterendorse.component */ "./src/app/components/promoter/promoterendorse/promoterendorse.component.ts");
/* harmony import */ var _components_promoter_promoterresolve_promoterresolve_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/promoter/promoterresolve/promoterresolve.component */ "./src/app/components/promoter/promoterresolve/promoterresolve.component.ts");
/* harmony import */ var _components_general_master_master_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/general/master/master.component */ "./src/app/components/general/master/master.component.ts");




















var routes = [
    { path: '',
        component: _components_general_master_master_component__WEBPACK_IMPORTED_MODULE_19__["MasterComponent"],
        children: [
            {
                path: '',
                component: _components_general_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            },
            {
                path: 'home',
                component: _components_general_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            },
            {
                path: 'reservation',
                component: _components_general_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_5__["ReservationComponent"]
            },
            {
                path: 'login',
                component: _components_general_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            },
            {
                path: 'promoterlogin',
                component: _components_promoter_promoterlogin_promoterlogin_component__WEBPACK_IMPORTED_MODULE_8__["PromoterloginComponent"]
            },
            {
                path: 'bandlogin',
                component: _components_band_bandlogin_bandlogin_component__WEBPACK_IMPORTED_MODULE_10__["BandloginComponent"]
            },
            {
                path: 'signup',
                component: _components_general_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            },
            {
                path: 'promotersignup',
                component: _components_promoter_promotersignup_promotersignup_component__WEBPACK_IMPORTED_MODULE_7__["PromotersignupComponent"]
            },
            {
                path: 'bandsignup',
                component: _components_band_bandsignup_bandsignup_component__WEBPACK_IMPORTED_MODULE_9__["BandsignupComponent"]
            },
        ]
    },
    {
        path: 'bandhome',
        component: _components_band_bandhome_bandhome_component__WEBPACK_IMPORTED_MODULE_11__["BandhomeComponent"],
        children: [
            {
                path: 'bandprofile',
                component: _components_band_bandprofile_bandprofile_component__WEBPACK_IMPORTED_MODULE_12__["BandprofileComponent"]
            },
            {
                path: 'bandeditprofile',
                component: _components_band_bandeditprofile_bandeditprofile_component__WEBPACK_IMPORTED_MODULE_13__["BandeditprofileComponent"]
            },
            {
                path: 'bandgigs',
                component: _components_band_bandgigs_bandgigs_component__WEBPACK_IMPORTED_MODULE_14__["BandgigsComponent"]
            },
            {
                path: '',
                component: _components_band_bandgigs_bandgigs_component__WEBPACK_IMPORTED_MODULE_14__["BandgigsComponent"]
            }
        ]
    },
    {
        path: 'promoterhome',
        component: _components_promoter_promoterhome_promoterhome_component__WEBPACK_IMPORTED_MODULE_15__["PromoterhomeComponent"],
        children: [
            {
                path: 'promotermanage',
                component: _components_promoter_promotermanage_promotermanage_component__WEBPACK_IMPORTED_MODULE_16__["PromotermanageComponent"]
            },
            {
                path: 'promoterendorse',
                component: _components_promoter_promoterendorse_promoterendorse_component__WEBPACK_IMPORTED_MODULE_17__["PromoterendorseComponent"]
            },
            {
                path: 'promoterresolve',
                component: _components_promoter_promoterresolve_promoterresolve_component__WEBPACK_IMPORTED_MODULE_18__["PromoterresolveComponent"]
            },
            {
                path: '',
                component: _components_promoter_promoterresolve_promoterresolve_component__WEBPACK_IMPORTED_MODULE_18__["PromoterresolveComponent"]
            }
        ]
    }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg\n{\n    background: rgb(0,0,0,0.8);\n    background-position: center;\n    width: 100%;\n    margin: 0;\n}\n.col\n{\n    padding:0;\n}\n.cred\n{\n    font-size: 7px;\n    padding: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7O0lBRUksU0FBUztBQUNiO0FBQ0E7O0lBRUksY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ1xue1xuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjgpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG4uY29sXG57XG4gICAgcGFkZGluZzowO1xufVxuLmNyZWRcbntcbiAgICBmb250LXNpemU6IDdweDtcbiAgICBwYWRkaW5nOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg cred\">\n    <div class=\"col\">\n            <router-outlet></router-outlet>\n    </div>\n   \n</div>    \n       \n"

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
        this.title = 'Crescendo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_general_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/general/home/home.component */ "./src/app/components/general/home/home.component.ts");
/* harmony import */ var _components_general_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/login/login.component */ "./src/app/components/general/login/login.component.ts");
/* harmony import */ var _components_general_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/reservation/reservation.component */ "./src/app/components/general/reservation/reservation.component.ts");
/* harmony import */ var _components_general_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/general/signup/signup.component */ "./src/app/components/general/signup/signup.component.ts");
/* harmony import */ var _components_promoter_promotersignup_promotersignup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/promoter/promotersignup/promotersignup.component */ "./src/app/components/promoter/promotersignup/promotersignup.component.ts");
/* harmony import */ var _components_promoter_promoterlogin_promoterlogin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/promoter/promoterlogin/promoterlogin.component */ "./src/app/components/promoter/promoterlogin/promoterlogin.component.ts");
/* harmony import */ var _components_band_bandsignup_bandsignup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/band/bandsignup/bandsignup.component */ "./src/app/components/band/bandsignup/bandsignup.component.ts");
/* harmony import */ var _components_band_bandlogin_bandlogin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/band/bandlogin/bandlogin.component */ "./src/app/components/band/bandlogin/bandlogin.component.ts");
/* harmony import */ var _components_band_bandhome_bandhome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/band/bandhome/bandhome.component */ "./src/app/components/band/bandhome/bandhome.component.ts");
/* harmony import */ var _components_band_bandprofile_bandprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/band/./bandprofile/bandprofile.component */ "./src/app/components/band/bandprofile/bandprofile.component.ts");
/* harmony import */ var _components_band_bandeditprofile_bandeditprofile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/band//bandeditprofile/bandeditprofile.component */ "./src/app/components/band/bandeditprofile/bandeditprofile.component.ts");
/* harmony import */ var _components_band_bandgigs_bandgigs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/band/bandgigs/bandgigs.component */ "./src/app/components/band/bandgigs/bandgigs.component.ts");
/* harmony import */ var _components_promoter_promoterhome_promoterhome_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/promoter/promoterhome/promoterhome.component */ "./src/app/components/promoter/promoterhome/promoterhome.component.ts");
/* harmony import */ var _components_promoter_promotermanage_promotermanage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/promoter/promotermanage/promotermanage.component */ "./src/app/components/promoter/promotermanage/promotermanage.component.ts");
/* harmony import */ var _components_promoter_promoterendorse_promoterendorse_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/promoter/promoterendorse/promoterendorse.component */ "./src/app/components/promoter/promoterendorse/promoterendorse.component.ts");
/* harmony import */ var _components_promoter_promoterresolve_promoterresolve_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/promoter/promoterresolve/promoterresolve.component */ "./src/app/components/promoter/promoterresolve/promoterresolve.component.ts");
/* harmony import */ var _components_general_master_master_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/general/master/master.component */ "./src/app/components/general/master/master.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_general_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_general_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_general_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_7__["ReservationComponent"],
                _components_general_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _components_promoter_promotersignup_promotersignup_component__WEBPACK_IMPORTED_MODULE_9__["PromotersignupComponent"],
                _components_promoter_promoterlogin_promoterlogin_component__WEBPACK_IMPORTED_MODULE_10__["PromoterloginComponent"],
                _components_band_bandsignup_bandsignup_component__WEBPACK_IMPORTED_MODULE_11__["BandsignupComponent"],
                _components_band_bandlogin_bandlogin_component__WEBPACK_IMPORTED_MODULE_12__["BandloginComponent"],
                _components_band_bandhome_bandhome_component__WEBPACK_IMPORTED_MODULE_13__["BandhomeComponent"],
                _components_band_bandprofile_bandprofile_component__WEBPACK_IMPORTED_MODULE_14__["BandprofileComponent"],
                _components_band_bandeditprofile_bandeditprofile_component__WEBPACK_IMPORTED_MODULE_15__["BandeditprofileComponent"],
                _components_band_bandgigs_bandgigs_component__WEBPACK_IMPORTED_MODULE_16__["BandgigsComponent"],
                _components_promoter_promoterhome_promoterhome_component__WEBPACK_IMPORTED_MODULE_17__["PromoterhomeComponent"],
                _components_promoter_promotermanage_promotermanage_component__WEBPACK_IMPORTED_MODULE_18__["PromotermanageComponent"],
                _components_promoter_promoterendorse_promoterendorse_component__WEBPACK_IMPORTED_MODULE_19__["PromoterendorseComponent"],
                _components_promoter_promoterresolve_promoterresolve_component__WEBPACK_IMPORTED_MODULE_20__["PromoterresolveComponent"],
                _components_general_master_master_component__WEBPACK_IMPORTED_MODULE_21__["MasterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/band/bandeditprofile/bandeditprofile.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/band/bandeditprofile/bandeditprofile.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC9iYW5kZWRpdHByb2ZpbGUvYmFuZGVkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/band/bandeditprofile/bandeditprofile.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/band/bandeditprofile/bandeditprofile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bandeditprofile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/band/bandeditprofile/bandeditprofile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/band/bandeditprofile/bandeditprofile.component.ts ***!
  \******************************************************************************/
/*! exports provided: BandeditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandeditprofileComponent", function() { return BandeditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BandeditprofileComponent = /** @class */ (function () {
    function BandeditprofileComponent() {
    }
    BandeditprofileComponent.prototype.ngOnInit = function () {
    };
    BandeditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bandeditprofile',
            template: __webpack_require__(/*! ./bandeditprofile.component.html */ "./src/app/components/band/bandeditprofile/bandeditprofile.component.html"),
            styles: [__webpack_require__(/*! ./bandeditprofile.component.css */ "./src/app/components/band/bandeditprofile/bandeditprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandeditprofileComponent);
    return BandeditprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/band/bandgigs/bandgigs.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/band/bandgigs/bandgigs.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC9iYW5kZ2lncy9iYW5kZ2lncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/band/bandgigs/bandgigs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/band/bandgigs/bandgigs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bandgigs works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/band/bandgigs/bandgigs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/band/bandgigs/bandgigs.component.ts ***!
  \****************************************************************/
/*! exports provided: BandgigsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandgigsComponent", function() { return BandgigsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BandgigsComponent = /** @class */ (function () {
    function BandgigsComponent() {
    }
    BandgigsComponent.prototype.ngOnInit = function () {
    };
    BandgigsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bandgigs',
            template: __webpack_require__(/*! ./bandgigs.component.html */ "./src/app/components/band/bandgigs/bandgigs.component.html"),
            styles: [__webpack_require__(/*! ./bandgigs.component.css */ "./src/app/components/band/bandgigs/bandgigs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandgigsComponent);
    return BandgigsComponent;
}());



/***/ }),

/***/ "./src/app/components/band/bandhome/bandhome.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/band/bandhome/bandhome.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC9iYW5kaG9tZS9iYW5kaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/band/bandhome/bandhome.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/band/bandhome/bandhome.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bandhome works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/band/bandhome/bandhome.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/band/bandhome/bandhome.component.ts ***!
  \****************************************************************/
/*! exports provided: BandhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandhomeComponent", function() { return BandhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BandhomeComponent = /** @class */ (function () {
    function BandhomeComponent() {
    }
    BandhomeComponent.prototype.ngOnInit = function () {
    };
    BandhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bandhome',
            template: __webpack_require__(/*! ./bandhome.component.html */ "./src/app/components/band/bandhome/bandhome.component.html"),
            styles: [__webpack_require__(/*! ./bandhome.component.css */ "./src/app/components/band/bandhome/bandhome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandhomeComponent);
    return BandhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/band/bandlogin/bandlogin.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/band/bandlogin/bandlogin.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#submit, .center\n{\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    align-items: center;\n    font-size: 7px;\n    text-align: center;\n    \n}\n#submit\n{\n    min-width: 80px;\n    max-width: 100px;\n}\n.city\n{\n    background-image: url('https://i.imgur.com/THHrxmn.jpg');\n    background-size: cover;\n    \n}\n#email, #password, .btn, label\n{\n    font-size: 7px;\n    max-width: 200px;\n    min-width:150px;\n\n}\n.box\n{\n    background-color: rgba(0,0,0,0.7);\n    margin-top: 20px;\n    padding: 10px;\n\n}\nlabel\n{\n    padding: 5px;\n    margin-bottom: 0;\n    color:white;\n}\n.btn{\n    padding:5px;\n}\n#formgroup,#loginform\n{\n    margin-top:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5kL2JhbmRsb2dpbi9iYW5kbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjs7QUFFdEI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksd0RBQXdEO0lBQ3hELHNCQUFzQjs7QUFFMUI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5CO0FBQ0E7O0lBRUksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjtBQUNBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5kL2JhbmRsb2dpbi9iYW5kbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWJtaXQsIC5jZW50ZXJcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cbiNzdWJtaXRcbntcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbi5jaXR5XG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2kuaW1ndXIuY29tL1RISHJ4bW4uanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBcbn1cbiNlbWFpbCwgI3Bhc3N3b3JkLCAuYnRuLCBsYWJlbFxue1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWluLXdpZHRoOjE1MHB4O1xuXG59XG4uYm94XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxufVxubGFiZWxcbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5idG57XG4gICAgcGFkZGluZzo1cHg7XG59XG4jZm9ybWdyb3VwLCNsb2dpbmZvcm1cbntcbiAgICBtYXJnaW4tdG9wOjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/band/bandlogin/bandlogin.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/band/bandlogin/bandlogin.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"col-12\">     \n    <nav class=\"nav nav-pills text-white\">\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Home</a>\n      <a class=\" text-sm-center nav-link text-white active bg-danger\" href=\"#\">Login</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Signup</a>\n    </nav>\n  </div>\n<div class=\"city d-flex justify-content-center\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"box\">\n          <a href=\"#\" class=\"btn btn-secondary btn-block active\" role=\"button\" aria-pressed=\"true\">Promoter</a>\n          <a href=\"#\" class=\"btn btn-primary btn-block active bg-danger\" role=\"button\" aria-pressed=\"true\">Band</a>\n          <form id =\"loginform\">\n              <div class=\"form-group\">\n                  <label for=\"EmailInput\">Email Address</label>\n                  <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"PasswordInput\">Password</label>\n                  <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\">\n              </div>\n          <div class=\"center\"><button type=\"submit\" class=\"btn btn-primary bg-danger\" id=\"submit\">Submit</button></div>\n              \n          </form>\n      </div>\n       \n    </div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/band/bandlogin/bandlogin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/band/bandlogin/bandlogin.component.ts ***!
  \******************************************************************/
/*! exports provided: BandloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandloginComponent", function() { return BandloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BandloginComponent = /** @class */ (function () {
    function BandloginComponent() {
    }
    BandloginComponent.prototype.ngOnInit = function () {
    };
    BandloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bandlogin',
            template: __webpack_require__(/*! ./bandlogin.component.html */ "./src/app/components/band/bandlogin/bandlogin.component.html"),
            styles: [__webpack_require__(/*! ./bandlogin.component.css */ "./src/app/components/band/bandlogin/bandlogin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandloginComponent);
    return BandloginComponent;
}());



/***/ }),

/***/ "./src/app/components/band/bandprofile/bandprofile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/band/bandprofile/bandprofile.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC9iYW5kcHJvZmlsZS9iYW5kcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/band/bandprofile/bandprofile.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/band/bandprofile/bandprofile.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bandprofile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/band/bandprofile/bandprofile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/band/bandprofile/bandprofile.component.ts ***!
  \**********************************************************************/
/*! exports provided: BandprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandprofileComponent", function() { return BandprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BandprofileComponent = /** @class */ (function () {
    function BandprofileComponent() {
    }
    BandprofileComponent.prototype.ngOnInit = function () {
    };
    BandprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bandprofile',
            template: __webpack_require__(/*! ./bandprofile.component.html */ "./src/app/components/band/bandprofile/bandprofile.component.html"),
            styles: [__webpack_require__(/*! ./bandprofile.component.css */ "./src/app/components/band/bandprofile/bandprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandprofileComponent);
    return BandprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/band/bandsignup/bandsignup.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/band/bandsignup/bandsignup.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#submit, .center\n{\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    align-items: center;\n    font-size: 7px;\n    text-align: center;\n    \n}\n#submit\n{\n    min-width: 80px;\n    max-width: 100px;\n}\n.city\n{\n    background-image: url('https://www.losgallardosleisure.es/events/eventimg/Eagles%206.jpg');\n    background-size: cover;\n    background-position: fixed;\n    \n}\n#email, #password, .btn, label, #confirmpassword, #name, #bio, #genre, #date, #promotion, #rate\n{\n    font-size: 7px;\n\n}\n.box\n{\n    background-color: rgba(0,0,0,0.7);\n    margin-top: 20px;\n    padding: 10px;\n\n}\nlabel\n{\n    padding: 5px;\n    margin-bottom: 0;\n    color:white;\n}\n.btn{\n    padding:5px;\n}\n#formgroup,#loginform\n{\n    margin-top:0;\n}\n#signup\n{\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5kL2JhbmRzaWdudXAvYmFuZHNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCOztBQUV0QjtBQUNBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSwwRkFBMEY7SUFDMUYsc0JBQXNCO0lBQ3RCLDBCQUEwQjs7QUFFOUI7QUFDQTs7SUFFSSxjQUFjOztBQUVsQjtBQUNBOztJQUVJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhbmQvYmFuZHNpZ251cC9iYW5kc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3VibWl0LCAuY2VudGVyXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG4jc3VibWl0XG57XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59XG4uY2l0eVxue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93d3cubG9zZ2FsbGFyZG9zbGVpc3VyZS5lcy9ldmVudHMvZXZlbnRpbWcvRWFnbGVzJTIwNi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGZpeGVkO1xuICAgIFxufVxuI2VtYWlsLCAjcGFzc3dvcmQsIC5idG4sIGxhYmVsLCAjY29uZmlybXBhc3N3b3JkLCAjbmFtZSwgI2JpbywgI2dlbnJlLCAjZGF0ZSwgI3Byb21vdGlvbiwgI3JhdGVcbntcbiAgICBmb250LXNpemU6IDdweDtcblxufVxuLmJveFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbn1cbmxhYmVsXG57XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6d2hpdGU7XG59XG4uYnRue1xuICAgIHBhZGRpbmc6NXB4O1xufVxuI2Zvcm1ncm91cCwjbG9naW5mb3JtXG57XG4gICAgbWFyZ2luLXRvcDowO1xufVxuI3NpZ251cFxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/band/bandsignup/bandsignup.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/band/bandsignup/bandsignup.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"col-12\">     \n    <nav class=\"nav nav-pills text-white\">\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Home</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Login</a>\n      <a class=\" text-sm-center nav-link text-white  active bg-danger\" href=\"#\">Signup</a>\n    </nav>\n  </div>\n<div class=\"city\">\n    <div class=\" d-flex justify-content-center\">\n      <div class=\"col-10\">\n        <div class=\"box\">\n          <img src=\"https://fontmeme.com/permalink/190516/65e3de42eabf38501f98d895c0698a34.png\" id=\"signup\">\n            <form id =\"bandregistrationform\">\n                <div class=\"form-group\">\n                    <label for=\"EmailInput\">Email Address</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"PasswordInput\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"PasswordInput\">Confirm Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"confirmpassword\" placeholder=\"Confirm Password\" name=\"confirmpassword\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"NameInput\">Band Name</label>\n                    <input type=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Band Name\" name=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"description\">Bio</label>\n                    <textarea class=\"form-control\" id=\"description\" rows=\"3\"  id =\"bio\" name=\"bio\"></textarea>\n                  </div>\n                <div class=\"form-group\">\n                    <label for=\"GenreInput\">Genre</label>\n                    <input type=\"text\" class=\"form-control\" id=\"genre\" placeholder=\"Genre\" name=\"genre\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"DebutInput\">Debut Date</label>\n                    <input type=\"date\" class=\"form-control\" id=\"date\" name=\"date\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"PromotionInput\">Promotion (Please upload a link to your masterpiece!)</label>\n                    <input type=\"url\" class=\"form-control\" id=\"promotion\" name=\"promotion\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"RateInput\">Hourly Rate</label>\n                    <input type=\"number\" class=\"form-control\" id=\"rate\" name=\"rate\" min=\"0.00\" max=\"10000000000.00\" step=\"0.01\">\n                </div>\n                \n            <div class=\"center\"><button type=\"submit\" class=\"btn btn-primary bg-danger\" id=\"submit\">Submit</button></div>\n                \n            </form>\n        </div>\n         \n      </div>\n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/components/band/bandsignup/bandsignup.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/band/bandsignup/bandsignup.component.ts ***!
  \********************************************************************/
/*! exports provided: BandsignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandsignupComponent", function() { return BandsignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BandsignupComponent = /** @class */ (function () {
    function BandsignupComponent() {
    }
    BandsignupComponent.prototype.ngOnInit = function () {
    };
    BandsignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bandsignup',
            template: __webpack_require__(/*! ./bandsignup.component.html */ "./src/app/components/band/bandsignup/bandsignup.component.html"),
            styles: [__webpack_require__(/*! ./bandsignup.component.css */ "./src/app/components/band/bandsignup/bandsignup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandsignupComponent);
    return BandsignupComponent;
}());



/***/ }),

/***/ "./src/app/components/general/home/home.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/general/home/home.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shrink\n{\n   \n    padding: 5px;\n    border-radius: 5px;\n}\n\n.col\n{\n    padding-bottom: 0;\n}\n\nvideo.fullscreen { \n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    z-index: -100;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7SUFHSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHdDQUFnQztZQUFoQyxnQ0FBZ0M7O0VBRWxDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNocmlua1xue1xuICAgXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbFxue1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxudmlkZW8uZnVsbHNjcmVlbiB7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IC0xMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/general/home/home.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/general/home/home.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"col-12\">     \n    <nav class=\"nav nav-pills text-white\">\n      <a class=\" text-sm-center nav-link text-white  active bg-danger\" href=\"#\">Home</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Login</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Signup</a>\n    </nav>\n  </div>\n        <div class =\"row\">\n            <div class =\"col\">\n              <div class =\"video\">\n                  <video id=\"video1\" width =\"100%\" height =\"100%\" src=\"assets\\y2mate.com - official_clip_from_la_la_land_john_legend_start_a_fire_M6Vfj1TjMvU_1080p.mp4\" autoplay loop=\"loop\"></video>\n              </div>\n            </div>\n        </div>\n        \n       "

/***/ }),

/***/ "./src/app/components/general/home/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/general/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.vid = document.getElementById('video1');
        this.vid.muted = true;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/general/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/general/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/general/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/general/login/login.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/general/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/general/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/general/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/general/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/general/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/general/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/general/master/master.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/general/master/master.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9tYXN0ZXIvbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/general/master/master.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/general/master/master.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/general/master/master.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/general/master/master.component.ts ***!
  \***************************************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/components/general/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.css */ "./src/app/components/general/master/master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/components/general/reservation/reservation.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/general/reservation/reservation.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/general/reservation/reservation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/general/reservation/reservation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reservation works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/general/reservation/reservation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/general/reservation/reservation.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationComponent", function() { return ReservationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReservationComponent = /** @class */ (function () {
    function ReservationComponent() {
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reservation',
            template: __webpack_require__(/*! ./reservation.component.html */ "./src/app/components/general/reservation/reservation.component.html"),
            styles: [__webpack_require__(/*! ./reservation.component.css */ "./src/app/components/general/reservation/reservation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReservationComponent);
    return ReservationComponent;
}());



/***/ }),

/***/ "./src/app/components/general/signup/signup.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/general/signup/signup.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo\n{\n    display: flex;\n    height: 100px;\n    width: 118px;\n    align-content: center;\n    justify-content: center;\n}\n.shrink\n{\n    text-align: center;\n    font-size: 7px;\n}\nh5{\n    font-size:0.5rem;\n}\n.signcard\n{\n    height: 200px;\n    width: 120px;\n    margin: 20px auto;\n    opacity: 0.8;\n}\n.center\n{\n    display: flex;\n    flex-grow: none;\n    justify-content: center;\n    margin: 0 auto;\n}\n.city\n{\n    background-image: url('https://i.imgur.com/THHrxmn.jpg');\n    background-size: cover;\n}\n.signcard:hover{\n    opacity:1;\n}\n.backdrop\n{\n    background: whitesmoke;\n    opacity: 0.9;\n    margin: 0;\n    padding: 0;\n    height: 200px;\n    width: 120px;\n}\n@media only screen and (max-width: 300px)\n{\n    .backdrop{\n        margin-left: 20%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksd0RBQXdEO0lBQ3hELHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7O0lBRUksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUk7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9cbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDExOHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaHJpbmtcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA3cHg7XG59XG5oNXtcbiAgICBmb250LXNpemU6MC41cmVtO1xufVxuLnNpZ25jYXJkXG57XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgb3BhY2l0eTogMC44O1xufVxuLmNlbnRlclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmNpdHlcbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaS5pbWd1ci5jb20vVEhIcnhtbi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnNpZ25jYXJkOmhvdmVye1xuICAgIG9wYWNpdHk6MTtcbn1cbi5iYWNrZHJvcFxue1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweClcbntcbiAgICAuYmFja2Ryb3B7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/general/signup/signup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/general/signup/signup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"col-12\">     \n    <nav class=\"nav nav-pills text-white\">\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Home</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Login</a>\n      <a class=\" text-sm-center nav-link text-white active bg-danger\" href=\"#\">Signup</a>\n    </nav>\n  </div>\n<div class=\"city d-flex justify-content-center\">\n    <div class=\"row\">\n        <div class =\"col\">\n          <div class=\"backdrop\">\n              <div class=\"card bg-dark text-white signcard\">\n                  <img class=\"card-img-top photo\" src=\"https://cdn.shopify.com/s/files/1/0965/5518/products/Drumtech-Roadie_grande_51dd7f7c-4cb1-4a6c-8986-c5c5092ad4d8.jpg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">Promoter Signup</h5>\n                    <p class=\"card-text\">Invite local bands to play on your gigs!</p>\n                  </div>\n                </div>\n          </div>\n            \n              \n      </div>\n      <div class=\"col\">\n          <div class=\"backdrop\">\n              <div class=\"card bg-dark text-white signcard\">\n                  <img class=\"card-img-top photo\" src=\"https://media0.giphy.com/media/xTiTnnnWvRXTeXx3wc/giphy.gif\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">Band Signup</h5>\n                    <p class=\"card-text\">Get your music out there and get noticed by gig promoters!</p>\n                  </div>\n                </div>\n          </div>\n      </div>\n    </div>\n</div>\n\n\n      \n     \n\n"

/***/ }),

/***/ "./src/app/components/general/signup/signup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/general/signup/signup.component.ts ***!
  \***************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/general/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/general/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/promoter/promoterendorse/promoterendorse.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/promoter/promoterendorse/promoterendorse.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#submit, .center\n{\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    align-items: center;\n    font-size: 7px;\n    text-align: center;\n    \n}\n#submit\n{\n    min-width: 80px;\n    max-width: 100px;\n}\n.city\n{\n    background-image: url('https://backgrounddownload.com/wp-content/uploads/2018/09/gig-background-2.jpg');\n    background-size: cover;\n    background-position: fixed;\n    \n}\n#name, #time, #location, #secure, #unsecure, #open, #closed, label, #capacity\n{\n    font-size: 7px;\n\n}\n.box\n{\n    background-color: rgba(0,0,0,0.7);\n    margin-top: 20px;\n    padding: 10px;\n\n}\nlabel\n{\n    padding: 5px;\n    margin-bottom: 0;\n    color:white;\n}\n.btn{\n    padding:5px;\n}\n#formgroup,#loginform\n{\n    margin-top:0;\n}\n#signup\n{\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rlci9wcm9tb3RlcmVuZG9yc2UvcHJvbW90ZXJlbmRvcnNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7O0FBRXRCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLHVHQUF1RztJQUN2RyxzQkFBc0I7SUFDdEIsMEJBQTBCOztBQUU5QjtBQUNBOztJQUVJLGNBQWM7O0FBRWxCO0FBQ0E7O0lBRUksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjtBQUNBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvbW90ZXIvcHJvbW90ZXJlbmRvcnNlL3Byb21vdGVyZW5kb3JzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N1Ym1pdCwgLmNlbnRlclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuI3N1Ym1pdFxue1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLmNpdHlcbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYmFja2dyb3VuZGRvd25sb2FkLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9naWctYmFja2dyb3VuZC0yLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogZml4ZWQ7XG4gICAgXG59XG4jbmFtZSwgI3RpbWUsICNsb2NhdGlvbiwgI3NlY3VyZSwgI3Vuc2VjdXJlLCAjb3BlbiwgI2Nsb3NlZCwgbGFiZWwsICNjYXBhY2l0eVxue1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuXG59XG4uYm94XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxufVxubGFiZWxcbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5idG57XG4gICAgcGFkZGluZzo1cHg7XG59XG4jZm9ybWdyb3VwLCNsb2dpbmZvcm1cbntcbiAgICBtYXJnaW4tdG9wOjA7XG59XG4jc2lnbnVwXG57XG4gICAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/promoter/promoterendorse/promoterendorse.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/promoter/promoterendorse/promoterendorse.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"city\">\n    <div class=\" d-flex justify-content-center\">\n      <div class=\"col-10\">\n        <div class=\"box\">\n          <img src=\"https://fontmeme.com/permalink/190516/b9aab5b6386c6ecd4349855ee9e1c7ab.png\" id=\"gig\">\n            <form id =\"gigregistrationform\">\n                <div class=\"form-group\">\n                    <label for=\"NameInput\">Gig Name</label>\n                    <input type=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Gig Name\" name=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"TimeInput\">Gig Date and Time</label>\n                    <input type=\"datetime-local\" class=\"form-control\" id=\"time\" name=\"time\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"LocationInput\">Location</label>\n                    <input type=\"text\" class=\"form-control\" id=\"location\" name=\"location\">\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"radio\" id=\"secure\" value=\"\" name=\"securityoptions\" checked>\n                    <label class=\"form-check-label\" for=\"secure\">With Security</label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"radio\" id=\"unsecure\" value=\"\" name=\"securityoptions\">\n                    <label class=\"form-check-label\" for=\"unsecure\">Without Security</label>\n                  </div>\n                  <br>\n                  \n                    <div class=\"form-group\">\n                        <label for=\"CapacityInput\">Capacity</label>\n                        <input type=\"number\" class=\"form-control\" id=\"capacity\" name=\"capacity\" min=\"0\" max=\"10000000000\" step=\"1\">\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" id=\"open\" value=\"\" name=\"availability\" checked>\n                        <label class=\"form-check-label\" for=\"open\">Open</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" id=\"closed\" value=\"\" name=\"availability\">\n                        <label class=\"form-check-label\" for=\"closed\">Closed</label>\n                      </div>\n                \n            <div class=\"center\"><button type=\"submit\" class=\"btn btn-primary bg-danger\" id=\"submit\">Submit</button></div>\n                \n            </form>\n        </div>\n         \n      </div>\n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/components/promoter/promoterendorse/promoterendorse.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/promoter/promoterendorse/promoterendorse.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PromoterendorseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoterendorseComponent", function() { return PromoterendorseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromoterendorseComponent = /** @class */ (function () {
    function PromoterendorseComponent() {
    }
    PromoterendorseComponent.prototype.ngOnInit = function () {
    };
    PromoterendorseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promoterendorse',
            template: __webpack_require__(/*! ./promoterendorse.component.html */ "./src/app/components/promoter/promoterendorse/promoterendorse.component.html"),
            styles: [__webpack_require__(/*! ./promoterendorse.component.css */ "./src/app/components/promoter/promoterendorse/promoterendorse.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromoterendorseComponent);
    return PromoterendorseComponent;
}());



/***/ }),

/***/ "./src/app/components/promoter/promoterhome/promoterhome.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/promoter/promoterhome/promoterhome.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvbW90ZXIvcHJvbW90ZXJob21lL3Byb21vdGVyaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/promoter/promoterhome/promoterhome.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/promoter/promoterhome/promoterhome.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"col-12\">     \n    <nav class=\"nav nav-pills text-white\">\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Home</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Endorse a Gig</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Manage a Gig</a>\n    </nav>\n  </div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/promoter/promoterhome/promoterhome.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/promoter/promoterhome/promoterhome.component.ts ***!
  \****************************************************************************/
/*! exports provided: PromoterhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoterhomeComponent", function() { return PromoterhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromoterhomeComponent = /** @class */ (function () {
    function PromoterhomeComponent() {
    }
    PromoterhomeComponent.prototype.ngOnInit = function () {
    };
    PromoterhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promoterhome',
            template: __webpack_require__(/*! ./promoterhome.component.html */ "./src/app/components/promoter/promoterhome/promoterhome.component.html"),
            styles: [__webpack_require__(/*! ./promoterhome.component.css */ "./src/app/components/promoter/promoterhome/promoterhome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromoterhomeComponent);
    return PromoterhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/promoter/promoterlogin/promoterlogin.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/promoter/promoterlogin/promoterlogin.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#submit, .center\n{\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    align-items: center;\n    font-size: 7px;\n    text-align: center;\n    \n}\n#submit\n{\n    min-width: 80px;\n    max-width: 100px;\n}\n.city\n{\n    background-image: url('https://i.ytimg.com/vi/hnqd4gh--9o/maxresdefault.jpg');\n    background-size: cover;\n    \n}\n#email, #password, .btn, label\n{\n    font-size: 7px;\n    max-width: 200px;\n    min-width:150px;\n\n}\n.box\n{\n    background-color: rgba(0,0,0,0.7);\n    margin-top: 20px;\n    padding: 10px;\n\n}\nlabel\n{\n    padding: 5px;\n    margin-bottom: 0;\n    color:white;\n}\n.btn{\n    padding:5px;\n}\n#formgroup,#loginform\n{\n    margin-top:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rlci9wcm9tb3RlcmxvZ2luL3Byb21vdGVybG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjs7QUFFdEI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksNkVBQTZFO0lBQzdFLHNCQUFzQjs7QUFFMUI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5CO0FBQ0E7O0lBRUksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjtBQUNBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rlci9wcm9tb3RlcmxvZ2luL3Byb21vdGVybG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWJtaXQsIC5jZW50ZXJcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cbiNzdWJtaXRcbntcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbi5jaXR5XG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2kueXRpbWcuY29tL3ZpL2hucWQ0Z2gtLTlvL21heHJlc2RlZmF1bHQuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBcbn1cbiNlbWFpbCwgI3Bhc3N3b3JkLCAuYnRuLCBsYWJlbFxue1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWluLXdpZHRoOjE1MHB4O1xuXG59XG4uYm94XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxufVxubGFiZWxcbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5idG57XG4gICAgcGFkZGluZzo1cHg7XG59XG4jZm9ybWdyb3VwLCNsb2dpbmZvcm1cbntcbiAgICBtYXJnaW4tdG9wOjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/promoter/promoterlogin/promoterlogin.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/promoter/promoterlogin/promoterlogin.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"col-12\">     \n    <nav class=\"nav nav-pills text-white\">\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Home</a>\n      <a class=\" text-sm-center nav-link text-white active bg-danger\" href=\"#\">Login</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Signup</a>\n    </nav>\n  </div>\n<div class=\"city d-flex justify-content-center\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"box\">\n          <a href=\"#\" class=\"btn btn-primary btn-block active bg-danger\" role=\"button\" aria-pressed=\"true\">Promoter</a>\n          <a href=\"#\" class=\"btn btn-secondary btn-block active\" role=\"button\" aria-pressed=\"true\">Band</a>\n          <form id =\"loginform\">\n              <div class=\"form-group\">\n                  <label for=\"EmailInput\">Email Address</label>\n                  <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"PasswordInput\">Password</label>\n                  <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\">\n              </div>\n          <div class=\"center\"><button type=\"submit\" class=\"btn btn-primary bg-danger\" id=\"submit\">Submit</button></div>\n              \n          </form>\n      </div>\n       \n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/promoter/promoterlogin/promoterlogin.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/promoter/promoterlogin/promoterlogin.component.ts ***!
  \******************************************************************************/
/*! exports provided: PromoterloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoterloginComponent", function() { return PromoterloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromoterloginComponent = /** @class */ (function () {
    function PromoterloginComponent() {
    }
    PromoterloginComponent.prototype.ngOnInit = function () {
    };
    PromoterloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promoterlogin',
            template: __webpack_require__(/*! ./promoterlogin.component.html */ "./src/app/components/promoter/promoterlogin/promoterlogin.component.html"),
            styles: [__webpack_require__(/*! ./promoterlogin.component.css */ "./src/app/components/promoter/promoterlogin/promoterlogin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromoterloginComponent);
    return PromoterloginComponent;
}());



/***/ }),

/***/ "./src/app/components/promoter/promotermanage/promotermanage.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/promoter/promotermanage/promotermanage.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#submit, .center\n{\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    align-items: center;\n    font-size: 7px;\n    text-align: center;\n    \n}\n#submit\n{\n    min-width: 80px;\n    max-width: 100px;\n    margin: 0 5px;\n}\n.city\n{\n    background-image: url('https://backgrounddownload.com/wp-content/uploads/2018/09/gig-background-2.jpg');\n    background-size: cover;\n    background-position: fixed;\n    \n}\n#name, #time, #location, #secure, #unsecure, #open, #closed, label, #capacity, #update, #cancel\n{\n    font-size: 7px;\n\n}\n.box\n{\n    background-color: rgba(0,0,0,0.7);\n    margin-top: 20px;\n    padding: 10px;\n\n}\nlabel\n{\n    padding: 5px;\n    margin-bottom: 0;\n    color:white;\n}\n.btn{\n    padding:5px;\n}\n#formgroup,#loginform\n{\n    margin-top:0;\n}\n#signup\n{\n    display: flex;\n}\n.button\n{\n    margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rlci9wcm9tb3Rlcm1hbmFnZS9wcm9tb3Rlcm1hbmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCOztBQUV0QjtBQUNBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLHVHQUF1RztJQUN2RyxzQkFBc0I7SUFDdEIsMEJBQTBCOztBQUU5QjtBQUNBOztJQUVJLGNBQWM7O0FBRWxCO0FBQ0E7O0lBRUksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjtBQUNBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUNBOztJQUVJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb21vdGVyL3Byb21vdGVybWFuYWdlL3Byb21vdGVybWFuYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3VibWl0LCAuY2VudGVyXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG4jc3VibWl0XG57XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cbi5jaXR5XG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2JhY2tncm91bmRkb3dubG9hZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDkvZ2lnLWJhY2tncm91bmQtMi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGZpeGVkO1xuICAgIFxufVxuI25hbWUsICN0aW1lLCAjbG9jYXRpb24sICNzZWN1cmUsICN1bnNlY3VyZSwgI29wZW4sICNjbG9zZWQsIGxhYmVsLCAjY2FwYWNpdHksICN1cGRhdGUsICNjYW5jZWxcbntcbiAgICBmb250LXNpemU6IDdweDtcblxufVxuLmJveFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbn1cbmxhYmVsXG57XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6d2hpdGU7XG59XG4uYnRue1xuICAgIHBhZGRpbmc6NXB4O1xufVxuI2Zvcm1ncm91cCwjbG9naW5mb3JtXG57XG4gICAgbWFyZ2luLXRvcDowO1xufVxuI3NpZ251cFxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9uXG57XG4gICAgbWFyZ2luOiAwIDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/promoter/promotermanage/promotermanage.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/promoter/promotermanage/promotermanage.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"city\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-10\">\n        <div class=\"box\">\n          <img src=\"https://fontmeme.com/permalink/190516/b9aab5b6386c6ecd4349855ee9e1c7ab.png\" id=\"gig\">\n            <form id =\"gigregistrationform\">\n                <div class=\"form-group\">\n                    <label for=\"NameInput\">Gig Name</label>\n                    <input type=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Gig Name\" name=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"TimeInput\">Gig Date and Time</label>\n                    <input type=\"datetime-local\" class=\"form-control\" id=\"time\" name=\"time\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"LocationInput\">Location</label>\n                    <input type=\"text\" class=\"form-control\" id=\"location\" name=\"location\">\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"radio\" id=\"secure\" value=\"\" name=\"securityoptions\" checked>\n                    <label class=\"form-check-label\" for=\"secure\">With Security</label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"radio\" id=\"unsecure\" value=\"\" name=\"securityoptions\">\n                    <label class=\"form-check-label\" for=\"unsecure\">Without Security</label>\n                  </div>\n                  <br>\n                  \n                    <div class=\"form-group\">\n                        <label for=\"CapacityInput\">Capacity</label>\n                        <input type=\"number\" class=\"form-control\" id=\"capacity\" name=\"capacity\" min=\"0\" max=\"10000000000\" step=\"1\">\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" id=\"open\" value=\"\" name=\"availability\" checked>\n                        <label class=\"form-check-label\" for=\"open\">Open</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" id=\"closed\" value=\"\" name=\"availability\">\n                        <label class=\"form-check-label\" for=\"closed\">Closed</label>\n                      </div>\n                <div class=\"d-flex justify-content-center\">\n                    <button type=\"submit\" class=\"btn btn-primary bg-danger button\" id=\"update\">Update</button>\n                    <button type=\"submit\" class=\"btn btn-primary bg-danger button\" id=\"cancel\">Cancel</button>\n                </div>\n           \n                \n            </form>\n        </div>\n         \n      </div>\n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/components/promoter/promotermanage/promotermanage.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/promoter/promotermanage/promotermanage.component.ts ***!
  \********************************************************************************/
/*! exports provided: PromotermanageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotermanageComponent", function() { return PromotermanageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromotermanageComponent = /** @class */ (function () {
    function PromotermanageComponent() {
    }
    PromotermanageComponent.prototype.ngOnInit = function () {
    };
    PromotermanageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotermanage',
            template: __webpack_require__(/*! ./promotermanage.component.html */ "./src/app/components/promoter/promotermanage/promotermanage.component.html"),
            styles: [__webpack_require__(/*! ./promotermanage.component.css */ "./src/app/components/promoter/promotermanage/promotermanage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromotermanageComponent);
    return PromotermanageComponent;
}());



/***/ }),

/***/ "./src/app/components/promoter/promoterresolve/promoterresolve.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/promoter/promoterresolve/promoterresolve.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvbW90ZXIvcHJvbW90ZXJyZXNvbHZlL3Byb21vdGVycmVzb2x2ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/promoter/promoterresolve/promoterresolve.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/promoter/promoterresolve/promoterresolve.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  promoterresolve works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/promoter/promoterresolve/promoterresolve.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/promoter/promoterresolve/promoterresolve.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PromoterresolveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoterresolveComponent", function() { return PromoterresolveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromoterresolveComponent = /** @class */ (function () {
    function PromoterresolveComponent() {
    }
    PromoterresolveComponent.prototype.ngOnInit = function () {
    };
    PromoterresolveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promoterresolve',
            template: __webpack_require__(/*! ./promoterresolve.component.html */ "./src/app/components/promoter/promoterresolve/promoterresolve.component.html"),
            styles: [__webpack_require__(/*! ./promoterresolve.component.css */ "./src/app/components/promoter/promoterresolve/promoterresolve.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromoterresolveComponent);
    return PromoterresolveComponent;
}());



/***/ }),

/***/ "./src/app/components/promoter/promotersignup/promotersignup.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/promoter/promotersignup/promotersignup.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#submit, .center\n{\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    align-items: center;\n    font-size: 7px;\n    text-align: center;\n    \n}\n#submit\n{\n    min-width: 80px;\n    max-width: 100px;\n}\n.city\n{\n    background-image: url('https://wallpaperaccess.com/full/106221.jpg');\n    background-size: cover;\n    background-position: fixed;\n    \n}\n#email, #password, .btn, label, #confirmpassword, #name, #website\n{\n    font-size: 7px;\n\n}\n.box\n{\n    background-color: rgba(0,0,0,0.7);\n    margin-top: 20px;\n    padding: 10px;\n\n}\nlabel\n{\n    padding: 5px;\n    margin-bottom: 0;\n    color:white;\n}\n.btn{\n    padding:5px;\n}\n#formgroup,#loginform\n{\n    margin-top:0;\n}\n#signup\n{\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rlci9wcm9tb3RlcnNpZ251cC9wcm9tb3RlcnNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCOztBQUV0QjtBQUNBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxvRUFBb0U7SUFDcEUsc0JBQXNCO0lBQ3RCLDBCQUEwQjs7QUFFOUI7QUFDQTs7SUFFSSxjQUFjOztBQUVsQjtBQUNBOztJQUVJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb21vdGVyL3Byb21vdGVyc2lnbnVwL3Byb21vdGVyc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3VibWl0LCAuY2VudGVyXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG4jc3VibWl0XG57XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59XG4uY2l0eVxue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTA2MjIxLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogZml4ZWQ7XG4gICAgXG59XG4jZW1haWwsICNwYXNzd29yZCwgLmJ0biwgbGFiZWwsICNjb25maXJtcGFzc3dvcmQsICNuYW1lLCAjd2Vic2l0ZVxue1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuXG59XG4uYm94XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxufVxubGFiZWxcbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5idG57XG4gICAgcGFkZGluZzo1cHg7XG59XG4jZm9ybWdyb3VwLCNsb2dpbmZvcm1cbntcbiAgICBtYXJnaW4tdG9wOjA7XG59XG4jc2lnbnVwXG57XG4gICAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/promoter/promotersignup/promotersignup.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/promoter/promotersignup/promotersignup.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"col-12\">     \n    <nav class=\"nav nav-pills text-white\">\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Home</a>\n      <a class=\" text-sm-center nav-link text-white\" href=\"#\">Login</a>\n      <a class=\" text-sm-center nav-link text-white  active bg-danger\" href=\"#\">Signup</a>\n    </nav>\n  </div>\n<div class=\"city\">\n    <div class=\" d-flex justify-content-center\">\n      <div class=\"col-10\">\n        <div class=\"box\">\n          <img src=\"https://fontmeme.com/permalink/190516/da27f0f25c019943e41a4780d5b1c7b2.png\" id=\"signup\">\n            <form id =\"promoterregistrationform\">\n                <div class=\"form-group\">\n                    <label for=\"EmailInput\">Email Address</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"PasswordInput\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"PasswordInput\">Confirm Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"confirmpassword\" placeholder=\"Confirm Password\" name=\"confirmpassword\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"NameInput\">Business Name</label>\n                    <input type=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Band Name\" name=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"WebsiteInput\">Website (Please provide a link to your business website)</label>\n                    <input type=\"url\" class=\"form-control\" id=\"website\" name=\"website\">\n                </div>\n            <div class=\"center\"><button type=\"submit\" class=\"btn btn-primary bg-danger\" id=\"submit\">Submit</button></div>\n                \n            </form>\n        </div>\n         \n      </div>\n    </div>\n  \n  </div>\n  \n"

/***/ }),

/***/ "./src/app/components/promoter/promotersignup/promotersignup.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/promoter/promotersignup/promotersignup.component.ts ***!
  \********************************************************************************/
/*! exports provided: PromotersignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotersignupComponent", function() { return PromotersignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromotersignupComponent = /** @class */ (function () {
    function PromotersignupComponent() {
    }
    PromotersignupComponent.prototype.ngOnInit = function () {
    };
    PromotersignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotersignup',
            template: __webpack_require__(/*! ./promotersignup.component.html */ "./src/app/components/promoter/promotersignup/promotersignup.component.html"),
            styles: [__webpack_require__(/*! ./promotersignup.component.css */ "./src/app/components/promoter/promotersignup/promotersignup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromotersignupComponent);
    return PromotersignupComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\revature\WorkSpace\Mint\Crescendo-Client-side\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map