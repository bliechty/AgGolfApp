(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = "AgGolfApp";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _golf_game_golf_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./golf-game/golf-routing.module */ "./src/app/golf-game/golf-routing.module.ts");
/* harmony import */ var _golf_game_golf_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./golf-game/golf.module */ "./src/app/golf-game/golf.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _golf_game_golf_routing_module__WEBPACK_IMPORTED_MODULE_3__["GolfRoutingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _golf_game_golf_module__WEBPACK_IMPORTED_MODULE_4__["GolfModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _golf_game_golf_routing_module__WEBPACK_IMPORTED_MODULE_3__["GolfRoutingModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _golf_game_golf_module__WEBPACK_IMPORTED_MODULE_4__["GolfModule"],
        _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _golf_game_golf_routing_module__WEBPACK_IMPORTED_MODULE_3__["GolfRoutingModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _golf_game_golf_module__WEBPACK_IMPORTED_MODULE_4__["GolfModule"],
                    _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/golf-game/amount-of-users-selection/amount-of-users-selection.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/golf-game/amount-of-users-selection/amount-of-users-selection.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AmountOfUsersSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountOfUsersSelectionComponent", function() { return AmountOfUsersSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _golf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../golf.service */ "./src/app/golf-game/golf.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class AmountOfUsersSelectionComponent {
    constructor(router, golfService) {
        this.router = router;
        this.golfService = golfService;
    }
    ngOnInit() { }
    setAmountOfUsers(amount) {
        this.golfService.writeToUserInputByName('amountOfUsers', amount).then(_ => {
            this.router.navigateByUrl('/tee-selection');
        });
    }
}
AmountOfUsersSelectionComponent.ɵfac = function AmountOfUsersSelectionComponent_Factory(t) { return new (t || AmountOfUsersSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_golf_service__WEBPACK_IMPORTED_MODULE_2__["GolfService"])); };
AmountOfUsersSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AmountOfUsersSelectionComponent, selectors: [["app-amount-of-users-selection"]], decls: 15, vars: 0, consts: [["id", "flex"], ["id", "mat-card"], ["id", "mat-card-content"], ["mat-raised-button", "", 3, "click"]], template: function AmountOfUsersSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How many people will be playing?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmountOfUsersSelectionComponent_Template_button_click_6_listener() { return ctx.setAmountOfUsers(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmountOfUsersSelectionComponent_Template_button_click_8_listener() { return ctx.setAmountOfUsers(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmountOfUsersSelectionComponent_Template_button_click_11_listener() { return ctx.setAmountOfUsers(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmountOfUsersSelectionComponent_Template_button_click_13_listener() { return ctx.setAmountOfUsers(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["#flex[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 100px;\n}\n\n#mat-card[_ngcontent-%COMP%] {\n    width: 200px;\n    text-align: center;\n}\n\n#mat-card-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 30px;\n    margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZi1nYW1lL2Ftb3VudC1vZi11c2Vycy1zZWxlY3Rpb24vYW1vdW50LW9mLXVzZXJzLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2dvbGYtZ2FtZS9hbW91bnQtb2YtdXNlcnMtc2VsZWN0aW9uL2Ftb3VudC1vZi11c2Vycy1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbiNtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21hdC1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmountOfUsersSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-amount-of-users-selection",
                templateUrl: "./amount-of-users-selection.component.html",
                styleUrls: ["./amount-of-users-selection.component.css"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _golf_service__WEBPACK_IMPORTED_MODULE_2__["GolfService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/golf-game/course-selection/course-selection.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/golf-game/course-selection/course-selection.component.ts ***!
  \**************************************************************************/
/*! exports provided: CourseSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseSelectionComponent", function() { return CourseSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _golf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../golf.service */ "./src/app/golf-game/golf.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







function CourseSelectionComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseSelectionComponent_mat_card_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const course_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectCourse(course_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", course_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CourseSelectionComponent {
    constructor(golfService, router) {
        this.golfService = golfService;
        this.router = router;
    }
    ngOnInit() {
        this.getCourses();
    }
    getCourses() {
        this.course$ = this.golfService.getCoursesObservable();
    }
    selectCourse(id) {
        this.golfService.getCourseObservableById(id).subscribe(course => {
            this.golfService.writeToUserInputByName('selectedCourse', course).then(_ => {
                this.router.navigateByUrl('/amount-of-users');
            });
        });
    }
}
CourseSelectionComponent.ɵfac = function CourseSelectionComponent_Factory(t) { return new (t || CourseSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_golf_service__WEBPACK_IMPORTED_MODULE_1__["GolfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CourseSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseSelectionComponent, selectors: [["app-course-selection"]], decls: 3, vars: 3, consts: [["id", "flex"], ["id", "mat-card", 4, "ngFor", "ngForOf"], ["id", "mat-card"], ["id", "mat-card-content"], ["width", "200", 3, "src"], ["mat-raised-button", "", 3, "click"]], template: function CourseSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseSelectionComponent_mat_card_1_Template, 9, 2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.course$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["#mat-card[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 200px;\n    margin: 10px;\n}\n\n#mat-card-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n}\n\n#flex[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZi1nYW1lL2NvdXJzZS1zZWxlY3Rpb24vY291cnNlLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dvbGYtZ2FtZS9jb3Vyc2Utc2VsZWN0aW9uL2NvdXJzZS1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXQtY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbiNtYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2ZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-selection',
                templateUrl: './course-selection.component.html',
                styleUrls: ['./course-selection.component.css']
            }]
    }], function () { return [{ type: _golf_service__WEBPACK_IMPORTED_MODULE_1__["GolfService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/golf-game/golf-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/golf-game/golf-routing.module.ts ***!
  \**************************************************/
/*! exports provided: GolfRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfRoutingModule", function() { return GolfRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-selection/course-selection.component */ "./src/app/golf-game/course-selection/course-selection.component.ts");
/* harmony import */ var _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./amount-of-users-selection/amount-of-users-selection.component */ "./src/app/golf-game/amount-of-users-selection/amount-of-users-selection.component.ts");
/* harmony import */ var _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./golf-scorecard/golf-scorecard.component */ "./src/app/golf-game/golf-scorecard/golf-scorecard.component.ts");
/* harmony import */ var _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tee-selection/tee-selection.component */ "./src/app/golf-game/tee-selection/tee-selection.component.ts");








const routes = [
    { path: 'course-selection', component: _course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__["CourseSelectionComponent"] },
    { path: 'amount-of-users', component: _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__["AmountOfUsersSelectionComponent"] },
    { path: 'tee-selection', component: _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__["TeeSelectionComponent"] },
    { path: 'current-game', component: _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__["GolfScorecardComponent"] }
];
class GolfRoutingModule {
}
GolfRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GolfRoutingModule });
GolfRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GolfRoutingModule_Factory(t) { return new (t || GolfRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GolfRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolfRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/golf-game/golf-scorecard/golf-scorecard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/golf-game/golf-scorecard/golf-scorecard.component.ts ***!
  \**********************************************************************/
/*! exports provided: GolfScorecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfScorecardComponent", function() { return GolfScorecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



class GolfScorecardComponent {
    constructor() {
    }
    ngOnInit() { }
}
GolfScorecardComponent.ɵfac = function GolfScorecardComponent_Factory(t) { return new (t || GolfScorecardComponent)(); };
GolfScorecardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GolfScorecardComponent, selectors: [["app-golf-scorecard"]], decls: 2, vars: 0, template: function GolfScorecardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvbGYtZ2FtZS9nb2xmLXNjb3JlY2FyZC9nb2xmLXNjb3JlY2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolfScorecardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-golf-scorecard",
                templateUrl: "./golf-scorecard.component.html",
                styleUrls: ["./golf-scorecard.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/golf-game/golf.module.ts":
/*!******************************************!*\
  !*** ./src/app/golf-game/golf.module.ts ***!
  \******************************************/
/*! exports provided: GolfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfModule", function() { return GolfModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-selection/course-selection.component */ "./src/app/golf-game/course-selection/course-selection.component.ts");
/* harmony import */ var _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./amount-of-users-selection/amount-of-users-selection.component */ "./src/app/golf-game/amount-of-users-selection/amount-of-users-selection.component.ts");
/* harmony import */ var _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./golf-scorecard/golf-scorecard.component */ "./src/app/golf-game/golf-scorecard/golf-scorecard.component.ts");
/* harmony import */ var _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tee-selection/tee-selection.component */ "./src/app/golf-game/tee-selection/tee-selection.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");















class GolfModule {
}
GolfModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GolfModule });
GolfModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GolfModule_Factory(t) { return new (t || GolfModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GolfModule, { declarations: [_course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__["CourseSelectionComponent"],
        _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__["AmountOfUsersSelectionComponent"],
        _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__["GolfScorecardComponent"],
        _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__["TeeSelectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolfModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__["CourseSelectionComponent"],
                    _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__["AmountOfUsersSelectionComponent"],
                    _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__["GolfScorecardComponent"],
                    _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__["TeeSelectionComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/golf-game/golf.service.ts":
/*!*******************************************!*\
  !*** ./src/app/golf-game/golf.service.ts ***!
  \*******************************************/
/*! exports provided: GolfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfService", function() { return GolfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");





class GolfService {
    constructor(http, db) {
        this.http = http;
        this.db = db;
    }
    getCoursesObservable() {
        return this.http.get('https://golf-courses-api.herokuapp.com/courses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((obj) => {
            return obj.courses;
        }));
    }
    getCourseObservableById(id) {
        return this.http.get(`https://golf-courses-api.herokuapp.com/courses/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((obj) => {
            return obj.data;
        }));
    }
    getUserInputObservable() {
        return this.db.collection('user-input').doc('1JqzeoKuTBHew0tVfSCq').valueChanges();
    }
    writeToUserInputByName(key, value) {
        const userObj = {};
        userObj[key] = value;
        return this.db.collection('user-input').doc('1JqzeoKuTBHew0tVfSCq').update(userObj);
    }
}
GolfService.ɵfac = function GolfService_Factory(t) { return new (t || GolfService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
GolfService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GolfService, factory: GolfService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolfService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/golf-game/tee-selection/tee-selection.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/golf-game/tee-selection/tee-selection.component.ts ***!
  \********************************************************************/
/*! exports provided: TeeSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeeSelectionComponent", function() { return TeeSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _golf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../golf.service */ "./src/app/golf-game/golf.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");









function TeeSelectionComponent_div_0_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r7);
} }
function TeeSelectionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TeeSelectionComponent_div_0_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSelectChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeeSelectionComponent_div_0_mat_option_5_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeeSelectionComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.goToScorecard(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Generate Golf Scorecard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.teeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.valueNotSelected);
} }
class TeeSelectionComponent {
    constructor(router, golfService) {
        this.router = router;
        this.golfService = golfService;
        this.valueNotSelected = true;
        this.teeOptions = [];
    }
    ngOnInit() {
        this.golfService.getUserInputObservable().subscribe(data => {
            for (let teeBox of data.selectedCourse.holes[0].teeBoxes) {
                if (teeBox.teeType !== "auto change location") {
                    this.teeOptions.push(teeBox.teeType);
                }
            }
        });
    }
    onSelectChange() {
        if (this.valueNotSelected) {
            this.valueNotSelected = false;
        }
    }
    goToScorecard(value) {
        this.golfService.writeToUserInputByName('teeSelection', value).then(_ => {
            this.router.navigateByUrl('current-game');
        });
    }
}
TeeSelectionComponent.ɵfac = function TeeSelectionComponent_Factory(t) { return new (t || TeeSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_golf_service__WEBPACK_IMPORTED_MODULE_2__["GolfService"])); };
TeeSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeeSelectionComponent, selectors: [["app-tee-selection"]], decls: 1, vars: 1, consts: [["id", "tee-selection-container", 4, "ngIf"], ["id", "tee-selection-container"], ["id", "tee-selection"], ["placeholder", "Tee Selection", 3, "selectionChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "disabled", "click"], [3, "value"]], template: function TeeSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeeSelectionComponent_div_0_Template, 8, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teeOptions.length !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["#tee-selection-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n#tee-selection[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZi1nYW1lL3RlZS1zZWxlY3Rpb24vdGVlLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZ29sZi1nYW1lL3RlZS1zZWxlY3Rpb24vdGVlLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RlZS1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4jdGVlLXNlbGVjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeeSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tee-selection',
                templateUrl: './tee-selection.component.html',
                styleUrls: ['./tee-selection.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _golf_service__WEBPACK_IMPORTED_MODULE_2__["GolfService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() {
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [["id", "center"], ["id", "title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular Golf App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#center[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-top: 100px;\n}\n\n#title[_ngcontent-%COMP%] {\n    font-size: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuI3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class NavBarComponent {
    constructor() {
    }
    ngOnInit() { }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 9, vars: 0, consts: [["color", "primary"], ["id", "nav-bar-row"], ["id", "right"], ["mat-raised-button", "", "routerLink", "/"], ["mat-raised-button", "", "routerLink", "/course-selection"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AgGolfApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Course Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["#nav-bar-row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\nspan[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n#right[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdi1iYXItcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuc3BhbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAyMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav-bar",
                templateUrl: "./nav-bar.component.html",
                styleUrls: ["./nav-bar.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared/shared.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/shared/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]
            }]
    }], null, null); })();


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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAfy19N5CG2lmfyOixojbpmLZz3bC-JDrA",
        authDomain: "aggolfapp.firebaseapp.com",
        databaseURL: "https://aggolfapp.firebaseio.com",
        projectId: "aggolfapp",
        storageBucket: "aggolfapp.appspot.com",
        messagingSenderId: "308698350471",
        appId: "1:308698350471:web:6396241254e636d70dc922"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brady/Dev/AgGolfApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map