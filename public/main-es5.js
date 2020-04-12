function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-data/names.ts":
  /*!***********************************!*\
    !*** ./src/app/app-data/names.ts ***!
    \***********************************/

  /*! exports provided: names */

  /***/
  function srcAppAppDataNamesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "names", function () {
      return names;
    });

    var names = ["Sage O. Ruiz", "Sacha L. Briggs", "Stone C. Zimmerman", "Otto S. Arnold", "Evangeline B. Mccoy", "Dorothy O. Ellis", "Wang R. Zimmerman", "Xander R. Cunningham", "Kevin D. Sanders", "Marah G. Bright", "Stewart J. Alvarado", "Jesse C. Mckee", "Tanek Z. Delgado", "Doris S. Gallagher", "Melodie C. Howe", "Isaac S. Haney", "Guinevere F. Solomon", "Tara W. Hampton", "Zachary P. Perry", "Rafael V. Burnett", "Cassandra T. Ball", "Peter L. Cruz", "Merritt D. Mcclure", "Wynne S. Santiago", "Neil R. Mathews", "Ignacia B. Velez", "Samson P. Hess", "Nichole Z. Frederick", "Ifeoma E. Roman", "Lacy K. Ingram", "Orson K. Tran", "Lacota G. Adams", "Ezekiel G. Duffy", "Genevieve Z. Sims", "Colleen U. Sanders", "Amity J. Battle", "Chastity F. Church", "Katell F. Marshall", "Arden F. Parsons", "Alisa E. Gonzales", "Aristotle M. Clay", "Evelyn A. Ferguson", "Halee C. Long", "Heather F. Gordon", "Alice V. Middleton", "Kylynn S. Stout", "Devin C. Mann", "Montana R. Ayers", "Hammett X. Olsen", "Kaden V. Cain", "Cheryl K. Lester", "Nicholas E. Savage", "Dara Y. Garcia", "Todd L. Strong", "Ferdinand O. Aguirre", "Kyle X. Richards", "Kareem V. Mckinney", "Anika M. Greene", "Madonna A. Maynard", "Minerva S. Sellers", "Tatyana N. Mills", "September T. Caldwell", "Zenia X. Fisher", "Penelope L. Sweet", "Brielle R. Sexton", "Philip G. Small", "Anastasia G. Edwards", "Colorado U. Cantu", "Iola I. Monroe", "Nicholas T. Howard", "Kathleen K. Bradford", "Dominic S. Ortiz", "Phelan V. Barker", "Gloria R. Mitchell", "Bell W. Gibson", "Duncan E. Cook", "Raja O. Henson", "Quinn N. Chaney", "Lester N. Lang", "Cara Z. Fleming", "Alyssa Y. Mcdonald", "Tashya V. Harper", "Judith X. Head", "Eagan G. Bryan", "Louis Y. Perry", "Amos W. Mayer", "Louis Q. Gamble", "Kyla I. Beard", "Adara H. Miranda", "Raja E. Soto", "Hoyt U. Ochoa", "Xanthus Z. Poole", "Celeste J. Mccall", "Rama H. Hyde", "Levi Q. Foley", "Rhoda P. May", "Lacey A. Curry", "Bevis T. Durham", "Gabriel D. Nichols", "Guinevere J. Lowery"];
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "AgGolfApp";
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _golf_game_golf_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./golf-game/golf-routing.module */
    "./src/app/golf-game/golf-routing.module.ts");
    /* harmony import */


    var _golf_game_golf_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./golf-game/golf.module */
    "./src/app/golf-game/golf.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _golf_game_golf_routing_module__WEBPACK_IMPORTED_MODULE_3__["GolfRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _golf_game_golf_module__WEBPACK_IMPORTED_MODULE_4__["GolfModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _golf_game_golf_routing_module__WEBPACK_IMPORTED_MODULE_3__["GolfRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _golf_game_golf_module__WEBPACK_IMPORTED_MODULE_4__["GolfModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _golf_game_golf_routing_module__WEBPACK_IMPORTED_MODULE_3__["GolfRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _golf_game_golf_module__WEBPACK_IMPORTED_MODULE_4__["GolfModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/golf-game/amount-of-users-selection/amount-of-users-selection.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/golf-game/amount-of-users-selection/amount-of-users-selection.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: AmountOfUsersSelectionComponent */

  /***/
  function srcAppGolfGameAmountOfUsersSelectionAmountOfUsersSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmountOfUsersSelectionComponent", function () {
      return AmountOfUsersSelectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _golf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../golf.service */
    "./src/app/golf-game/golf.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AmountOfUsersSelectionComponent =
    /*#__PURE__*/
    function () {
      function AmountOfUsersSelectionComponent(router, golfService) {
        _classCallCheck(this, AmountOfUsersSelectionComponent);

        this.router = router;
        this.golfService = golfService;
      }

      _createClass(AmountOfUsersSelectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setAmountOfUsers",
        value: function setAmountOfUsers(amount) {
          var _this = this;

          this.golfService.writeToUserInputByName('amountOfUsers', amount).then(function (_) {
            var players = [];

            for (var i = 0; i < amount; i++) {
              players.push({
                name: "player".concat(i + 1),
                inScores: [],
                outScores: [],
                totalScores: []
              });
            }

            _this.golfService.writeToPlayerData(players).then(function (_) {
              _this.router.navigateByUrl('/tee-selection');
            });
          });
        }
      }]);

      return AmountOfUsersSelectionComponent;
    }();

    AmountOfUsersSelectionComponent.ɵfac = function AmountOfUsersSelectionComponent_Factory(t) {
      return new (t || AmountOfUsersSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_golf_service__WEBPACK_IMPORTED_MODULE_2__["GolfService"]));
    };

    AmountOfUsersSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AmountOfUsersSelectionComponent,
      selectors: [["app-amount-of-users-selection"]],
      decls: 15,
      vars: 0,
      consts: [["id", "flex"], ["id", "mat-card"], ["id", "mat-card-content"], ["mat-raised-button", "", 3, "click"]],
      template: function AmountOfUsersSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How many people will be playing?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmountOfUsersSelectionComponent_Template_button_click_6_listener() {
            return ctx.setAmountOfUsers(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmountOfUsersSelectionComponent_Template_button_click_8_listener() {
            return ctx.setAmountOfUsers(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmountOfUsersSelectionComponent_Template_button_click_11_listener() {
            return ctx.setAmountOfUsers(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmountOfUsersSelectionComponent_Template_button_click_13_listener() {
            return ctx.setAmountOfUsers(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: ["#flex[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 100px;\n}\n\n#mat-card[_ngcontent-%COMP%] {\n    width: 200px;\n    text-align: center;\n}\n\n#mat-card-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 30px;\n    margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZi1nYW1lL2Ftb3VudC1vZi11c2Vycy1zZWxlY3Rpb24vYW1vdW50LW9mLXVzZXJzLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2dvbGYtZ2FtZS9hbW91bnQtb2YtdXNlcnMtc2VsZWN0aW9uL2Ftb3VudC1vZi11c2Vycy1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbiNtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21hdC1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmountOfUsersSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-amount-of-users-selection",
          templateUrl: "./amount-of-users-selection.component.html",
          styleUrls: ["./amount-of-users-selection.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _golf_service__WEBPACK_IMPORTED_MODULE_2__["GolfService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/golf-game/course-selection/course-selection.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/golf-game/course-selection/course-selection.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CourseSelectionComponent */

  /***/
  function srcAppGolfGameCourseSelectionCourseSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseSelectionComponent", function () {
      return CourseSelectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _golf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../golf.service */
    "./src/app/golf-game/golf.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function CourseSelectionComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseSelectionComponent_mat_card_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var course_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.selectCourse(course_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Select ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var course_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", course_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CourseSelectionComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CourseSelectionComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseSelectionComponent_div_3_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.goToCurrentCourse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Load Game");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CourseSelectionComponent =
    /*#__PURE__*/
    function () {
      function CourseSelectionComponent(golfService, router) {
        _classCallCheck(this, CourseSelectionComponent);

        this.golfService = golfService;
        this.router = router;
        this.savedGame = false;
      }

      _createClass(CourseSelectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCourses();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getCoursesObservableSubscription.unsubscribe();
          this.getSavedGameObservableSubscription.unsubscribe();

          if (this.getCourseObservableByIdSubscription) {
            this.getCourseObservableByIdSubscription.unsubscribe();
          }
        }
      }, {
        key: "getCourses",
        value: function getCourses() {
          var _this2 = this;

          this.getCoursesObservableSubscription = this.golfService.getCoursesObservable().subscribe(function (courses) {
            _this2.courses = courses;
          });
          this.getSavedGameObservableSubscription = this.golfService.getSavedGameObservable().subscribe(function (savedGame) {
            if (savedGame) {
              _this2.savedGame = true;
            }
          });
        }
      }, {
        key: "selectCourse",
        value: function selectCourse(id) {
          var _this3 = this;

          this.getCourseObservableByIdSubscription = this.golfService.getCourseObservableById(id).subscribe(function (course) {
            _this3.golfService.writeToUserInputByName('selectedCourse', course).then(function (_) {
              _this3.golfService.writeSavedGame(false).then(function (_) {
                _this3.router.navigateByUrl('/amount-of-users');
              });
            });
          });
        }
      }, {
        key: "goToCurrentCourse",
        value: function goToCurrentCourse() {
          this.router.navigateByUrl('current-game');
        }
      }]);

      return CourseSelectionComponent;
    }();

    CourseSelectionComponent.ɵfac = function CourseSelectionComponent_Factory(t) {
      return new (t || CourseSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_golf_service__WEBPACK_IMPORTED_MODULE_1__["GolfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CourseSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseSelectionComponent,
      selectors: [["app-course-selection"]],
      decls: 4,
      vars: 3,
      consts: [["id", "flex"], ["id", "mat-card", 4, "ngFor", "ngForOf"], ["id", "flex-spinner", 4, "ngIf"], ["id", "load-game-container", 4, "ngIf"], ["id", "mat-card"], ["id", "mat-card-content"], ["width", "200", 3, "src"], ["mat-raised-button", "", 3, "click"], ["id", "flex-spinner"], ["id", "load-game-container"], ["id", "or"], ["mat-raised-button", "", "id", "load-game", 3, "click"]],
      template: function CourseSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseSelectionComponent_mat_card_1_Template, 9, 2, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CourseSelectionComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CourseSelectionComponent_div_3_Template, 5, 0, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.courses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.courses && ctx.savedGame);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]],
      styles: ["#mat-card[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 200px;\n    margin: 10px;\n}\n\n#mat-card-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n}\n\n#flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n#flex-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 80px;\n  justify-content: center;\n}\n\n#load-game-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n\n#or[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 80px;\n}\n\n#load-game[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZi1nYW1lL2NvdXJzZS1zZWxlY3Rpb24vY291cnNlLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2dvbGYtZ2FtZS9jb3Vyc2Utc2VsZWN0aW9uL2NvdXJzZS1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXQtY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbiNtYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jZmxleC1zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNsb2FkLWdhbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI29yIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4jbG9hZC1nYW1lIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-course-selection',
          templateUrl: './course-selection.component.html',
          styleUrls: ['./course-selection.component.css']
        }]
      }], function () {
        return [{
          type: _golf_service__WEBPACK_IMPORTED_MODULE_1__["GolfService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/golf-game/golf-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/golf-game/golf-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: GolfRoutingModule */

  /***/
  function srcAppGolfGameGolfRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GolfRoutingModule", function () {
      return GolfRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./course-selection/course-selection.component */
    "./src/app/golf-game/course-selection/course-selection.component.ts");
    /* harmony import */


    var _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./amount-of-users-selection/amount-of-users-selection.component */
    "./src/app/golf-game/amount-of-users-selection/amount-of-users-selection.component.ts");
    /* harmony import */


    var _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./golf-scorecard/golf-scorecard.component */
    "./src/app/golf-game/golf-scorecard/golf-scorecard.component.ts");
    /* harmony import */


    var _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tee-selection/tee-selection.component */
    "./src/app/golf-game/tee-selection/tee-selection.component.ts");

    var routes = [{
      path: 'course-selection',
      component: _course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__["CourseSelectionComponent"]
    }, {
      path: 'amount-of-users',
      component: _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__["AmountOfUsersSelectionComponent"]
    }, {
      path: 'tee-selection',
      component: _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__["TeeSelectionComponent"]
    }, {
      path: 'current-game',
      component: _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__["GolfScorecardComponent"]
    }];

    var GolfRoutingModule = function GolfRoutingModule() {
      _classCallCheck(this, GolfRoutingModule);
    };

    GolfRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GolfRoutingModule
    });
    GolfRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GolfRoutingModule_Factory(t) {
        return new (t || GolfRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GolfRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolfRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/golf-game/golf-scorecard/golf-scorecard.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/golf-game/golf-scorecard/golf-scorecard.component.ts ***!
    \**********************************************************************/

  /*! exports provided: GolfScorecardComponent */

  /***/
  function srcAppGolfGameGolfScorecardGolfScorecardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GolfScorecardComponent", function () {
      return GolfScorecardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _golf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../golf.service */
    "./src/app/golf-game/golf.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _pipes_duplicate_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/duplicate-name.pipe */
    "./src/app/pipes/duplicate-name.pipe.ts");

    var _c0 = ["form"];

    function GolfScorecardComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.selectedCourseName);
      }
    }

    function GolfScorecardComponent_div_2_input_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function GolfScorecardComponent_div_2_input_9_Template_input_blur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.loseFocus($event);
        })("keyup", function GolfScorecardComponent_div_2_input_9_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var i_r19 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.enterPlayerName($event, i_r19 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "duplicateName");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, ctx_r11.players[i_r19 - 1].name, ctx_r11.players, i_r19 - 1));
      }
    }

    function GolfScorecardComponent_div_2_div_16_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function GolfScorecardComponent_div_2_div_16_input_3_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var j_r25 = ctx.$implicit;

          var i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.enterScore($event, i_r23 - 1, j_r25 - 1);
        })("blur", function GolfScorecardComponent_div_2_div_16_input_3_Template_input_blur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r29.loseFocus($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r25 = ctx.$implicit;

        var i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "p", j_r25, "h", i_r23, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r24.players[j_r25 - 1].outScores[i_r23 - 1] === null ? "" : ctx_r24.players[j_r25 - 1].outScores[i_r23 - 1]);
      }
    }

    function GolfScorecardComponent_div_2_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GolfScorecardComponent_div_2_div_16_input_3_Template, 1, 3, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r23 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "col", i_r23, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.a3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.holesArray[i_r23 - 1].teeBoxes[0].par);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.holesArray[i_r23 - 1].teeBoxes[0].hcp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.holesArray[i_r23 - 1].teeBoxes[ctx_r12.teeSelection].yards);
      }
    }

    function GolfScorecardComponent_div_2_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r31 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "outscore", i_r31, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.getScores("out", ctx_r13.players[i_r31 - 1]) === 0 ? "" : ctx_r13.getScores("out", ctx_r13.players[i_r31 - 1]), " ");
      }
    }

    function GolfScorecardComponent_div_2_div_27_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function GolfScorecardComponent_div_2_div_27_input_3_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var j_r34 = ctx.$implicit;

          var i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.enterScore($event, i_r32 - 1, j_r34 - 1);
        })("blur", function GolfScorecardComponent_div_2_div_27_input_3_Template_input_blur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r38.loseFocus($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r34 = ctx.$implicit;

        var i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "p", j_r34, "h", i_r32, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r33.players[j_r34 - 1].inScores[i_r32 - ctx_r33.numberOfHoles / 2 - 1] === null ? "" : ctx_r33.players[j_r34 - 1].inScores[i_r32 - ctx_r33.numberOfHoles / 2 - 1]);
      }
    }

    function GolfScorecardComponent_div_2_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GolfScorecardComponent_div_2_div_27_input_3_Template, 1, 3, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r32 = ctx.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "col", i_r32, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.a3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.holesArray[i_r32 - 1].teeBoxes[0].par);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.holesArray[i_r32 - 1].teeBoxes[0].hcp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.holesArray[i_r32 - 1].teeBoxes[ctx_r14.teeSelection].yards);
      }
    }

    function GolfScorecardComponent_div_2_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r40 = ctx.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "inscore", i_r40, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.getScores("in", ctx_r15.players[i_r40 - 1]) === 0 ? "" : ctx_r15.getScores("in", ctx_r15.players[i_r40 - 1]), " ");
      }
    }

    function GolfScorecardComponent_div_2_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r41 = ctx.$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "totalscore", i_r41, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.getScores("total", ctx_r16.players[i_r41 - 1]) === 0 ? "" : ctx_r16.getScores("total", ctx_r16.players[i_r41 - 1]), " ");
      }
    }

    function GolfScorecardComponent_div_2_div_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.errorMessage, " ");
      }
    }

    function GolfScorecardComponent_div_2_div_56_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r43.playerResults[i_r42 - 1]);
      }
    }

    function GolfScorecardComponent_div_2_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GolfScorecardComponent_div_2_div_56_div_1_Template, 2, 1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r42 = ctx.$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.playerResults[i_r42 - 1]);
      }
    }

    function GolfScorecardComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hole");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GolfScorecardComponent_div_2_input_9_Template, 2, 5, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Par");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Handicap");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Yardage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GolfScorecardComponent_div_2_div_16_Template, 10, 6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GolfScorecardComponent_div_2_div_20_Template, 2, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GolfScorecardComponent_div_2_div_27_Template, 10, 6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GolfScorecardComponent_div_2_div_31_Template, 2, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, GolfScorecardComponent_div_2_div_41_Template, 2, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Errors (Shows on invalid input):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, GolfScorecardComponent_div_2_div_52_Template, 2, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Player Results (Shows when a player has put in all scores):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, GolfScorecardComponent_div_2_div_56_Template, 2, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Options:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GolfScorecardComponent_div_2_Template_button_click_61_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.saveCurrentGameInfo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Save Current Game Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Successfully saved game! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.a3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.a1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.a3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.parObj.outTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.hcpObj.outTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.yardsObj.outTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.a2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.a3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.parObj.inTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.hcpObj.inTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.yardsObj.inTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.a3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.parObj.total);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.hcpObj.total);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.yardsObj.total);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.a3);
      }
    }

    var GolfScorecardComponent =
    /*#__PURE__*/
    function () {
      function GolfScorecardComponent(golfService) {
        _classCallCheck(this, GolfScorecardComponent);

        this.golfService = golfService;
        this.a1 = [];
        this.a2 = [];
        this.a3 = [];
        this.parObj = {
          inTotal: 0,
          outTotal: 0,
          total: 0
        };
        this.hcpObj = {
          inTotal: 0,
          outTotal: 0,
          total: 0
        };
        this.yardsObj = {
          inTotal: 0,
          outTotal: 0,
          total: 0
        };
        this.error = false;
        this.playerResults = [];
      }

      _createClass(GolfScorecardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.getUserInputObservableSubscription = this.golfService.getUserInputObservable().subscribe(function (data) {
            _this4.selectedCourseName = data.selectedCourse.name;
            _this4.selectedCourse = data.selectedCourse;
            _this4.numberOfPlayers = data.amountOfUsers;
            _this4.teeSelection = data.teeSelection;
            _this4.numberOfHoles = data.selectedCourse.holeCount;
            _this4.holesArray = data.selectedCourse.holes;

            _this4.producePlaceholderArrays();

            _this4.produceOtherScorecardInfo();

            _this4.getPlayerDataSubscription = _this4.golfService.getPlayerData().subscribe(function (players) {
              _this4.players = _this4.sanitizeScores(players);
              $(document).ready(function () {
                var _iterator = _createForOfIteratorHelper(_this4.a3),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var i = _step.value;

                    _this4.isFinished(i - 1);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getUserInputObservableSubscription.unsubscribe();
          this.getPlayerDataSubscription.unsubscribe();
        }
      }, {
        key: "produceOtherScorecardInfo",
        value: function produceOtherScorecardInfo() {
          for (var i = 0; i < this.numberOfHoles; i++) {
            if (i < this.numberOfHoles / 2) {
              this.parObj.outTotal += this.holesArray[i].teeBoxes[0].par;
              this.hcpObj.outTotal += this.holesArray[i].teeBoxes[0].hcp;
              this.yardsObj.outTotal += this.holesArray[i].teeBoxes[0].yards;
            } else {
              this.parObj.inTotal += this.holesArray[i].teeBoxes[0].par;
              this.hcpObj.inTotal += this.holesArray[i].teeBoxes[0].hcp;
              this.yardsObj.inTotal += this.holesArray[i].teeBoxes[0].yards;
            }
          }

          this.parObj.total = this.parObj.outTotal + this.parObj.inTotal;
          this.hcpObj.total = this.hcpObj.outTotal + this.hcpObj.inTotal;
          this.yardsObj.total = this.yardsObj.outTotal + this.yardsObj.inTotal;
        }
      }, {
        key: "producePlaceholderArrays",
        value: function producePlaceholderArrays() {
          for (var i = 1; i <= this.numberOfHoles; i++) {
            if (i < this.numberOfHoles / 2 + 1) {
              this.a1.push(i);
            } else {
              this.a2.push(i);
            }
          }

          for (var _i = 1; _i <= this.numberOfPlayers; _i++) {
            this.a3.push(_i);
          }
        }
      }, {
        key: "loseFocus",
        value: function loseFocus($event) {
          $event.target.value = "";
          this.error = false;
          this.errorMessage = "";
        }
      }, {
        key: "enterScore",
        value: function enterScore($event, holeNum, playerIndex) {
          var player = this.players[playerIndex];
          this.error = false;
          this.errorMessage = "";

          if ($event.key === "Enter") {
            var numInput = Number($event.target.value);

            if (Number.isInteger(numInput) && numInput > 0) {
              this.updateScores(holeNum, numInput, player);
              $event.target.placeholder = numInput;
              $event.target.value = "";
              this.isFinished(playerIndex);
            } else {
              $event.target.value = "";
              this.error = true;
              this.errorMessage = "That is not a valid input";
            }
          }
        }
      }, {
        key: "updateScores",
        value: function updateScores(holeNum, score, player) {
          if (holeNum + 1 <= this.numberOfHoles / 2) {
            player.outScores[holeNum] = score;
          } else {
            player.inScores[holeNum - this.numberOfHoles / 2] = score;
          }

          player.totalScores[holeNum] = score;
        }
      }, {
        key: "sanitizeScores",
        value: function sanitizeScores(players) {
          var _iterator2 = _createForOfIteratorHelper(players),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var player = _step2.value;

              if (player.inScores.length === 0) {
                for (var i = 0; i < this.numberOfHoles / 2; i++) {
                  player.inScores[i] = null;
                }
              }

              if (player.outScores.length === 0) {
                for (var _i2 = 0; _i2 < this.numberOfHoles / 2; _i2++) {
                  player.outScores[_i2] = null;
                }
              }

              if (player.totalScores.length === 0) {
                for (var _i3 = 0; _i3 < this.numberOfHoles; _i3++) {
                  player.totalScores[_i3] = null;
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return players;
        }
      }, {
        key: "enterPlayerName",
        value: function enterPlayerName($event, playerIndex) {
          var value = $event.target.value;
          this.error = false;
          this.errorMessage = "";

          if ($event.key === "Enter") {
            if (value === "") {
              this.error = true;
              this.errorMessage = "Name cannot be empty";
            } else {
              this.players[playerIndex].name = value;
              $event.target.placeholder = value;
              this.isFinished(playerIndex);
            }

            $event.target.value = "";
          }
        }
      }, {
        key: "isFinished",
        value: function isFinished(playerIndex) {
          var player = this.players[playerIndex];
          var check = true;

          for (var i = 0; i < this.numberOfHoles; i++) {
            if (player.totalScores[i] === null) {
              check = false;
              break;
            }
          }

          if (player.totalScores.length === this.numberOfHoles && check) {
            var par = Number($("#parTotal").html());
            var totalScore = this.getScores("total", player);

            if (par === totalScore) {
              this.playerResults[playerIndex] = "".concat(player.name, "'s score is on par");
            } else if (totalScore > par) {
              this.playerResults[playerIndex] = "".concat(player.name, "'s score is ").concat(totalScore - par, " more than par");
            } else {
              this.playerResults[playerIndex] = "".concat(player.name, "'s score is ").concat(par - totalScore, " less than par");
            }
          }
        }
      }, {
        key: "getScores",
        value: function getScores(type, player) {
          if (type === "in") {
            return player.inScores.reduce(function (previous, current) {
              return previous + current;
            });
          } else if (type === "out") {
            return player.outScores.reduce(function (previous, current) {
              return previous + current;
            });
          } else if (type === "total") {
            return player.totalScores.reduce(function (previous, current) {
              return previous + current;
            });
          }
        }
      }, {
        key: "saveCurrentGameInfo",
        value: function saveCurrentGameInfo() {
          var _this5 = this;

          this.golfService.writeToPlayerData(this.players.map(function (player, i) {
            return Object.assign(Object.assign({}, player), {
              name: _this5.form.nativeElement.elements[i].placeholder
            });
          }), true).then(function (_) {
            $("#saved-game-user-feedback").css("display", "inline");
            setTimeout(function () {
              $("#saved-game-user-feedback").css("display", "none");
            }, 2000);
          });
        }
      }]);

      return GolfScorecardComponent;
    }();

    GolfScorecardComponent.ɵfac = function GolfScorecardComponent_Factory(t) {
      return new (t || GolfScorecardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_golf_service__WEBPACK_IMPORTED_MODULE_1__["GolfService"]));
    };

    GolfScorecardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GolfScorecardComponent,
      selectors: [["app-golf-scorecard"]],
      viewQuery: function GolfScorecardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
        }
      },
      decls: 3,
      vars: 2,
      consts: [["id", "mat-card-container"], ["id", "mat-card", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["id", "mat-card"], [1, "container"], [1, "score-card-container"], [1, "score-card"], [1, "holes"], ["id", "first-column"], [1, "firstColumn"], ["form", ""], ["type", "text", "class", "firstColumn playerName", 3, "placeholder", "blur", "keyup", 4, "ngFor", "ngForOf"], ["class", "col", 3, "id", 4, "ngFor", "ngForOf"], ["id", "out-score", 1, "scores"], [1, "score-boxes"], ["class", "score-boxes", 3, "id", 4, "ngFor", "ngForOf"], ["id", "in-score", 1, "scores"], ["id", "total-score", 1, "scores"], ["id", "parTotal", 1, "score-boxes"], [1, "info"], [1, "error-container"], ["class", "error", 4, "ngIf"], [1, "player-total-score-container"], [4, "ngFor", "ngForOf"], [1, "options"], ["mat-raised-button", "", 3, "click"], ["id", "saved-game-user-feedback"], ["type", "text", 1, "firstColumn", "playerName", 3, "placeholder", "blur", "keyup"], [1, "col", 3, "id"], [1, "boxes"], ["type", "text", "class", "boxes playerScore", 3, "id", "placeholder", "keyup", "blur", 4, "ngFor", "ngForOf"], ["type", "text", 1, "boxes", "playerScore", 3, "id", "placeholder", "keyup", "blur"], [1, "score-boxes", 3, "id"], [1, "error"], ["class", "player-total-score", 4, "ngIf"], [1, "player-total-score"]],
      template: function GolfScorecardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GolfScorecardComponent_mat_card_1_Template, 3, 1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GolfScorecardComponent_div_2_Template, 65, 17, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCourseName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.players);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      pipes: [_pipes_duplicate_name_pipe__WEBPACK_IMPORTED_MODULE_6__["DuplicateNamePipe"]],
      styles: ["*:not(span) {\n  font-size: 16px;\n}\n\n#mat-card {\n  width: 400px;\n  text-align: center;\n}\n\n#mat-card-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  padding: 5px 20px;\n  border-radius: 5px;\n  background-color: #c0c0c0;\n}\n\ninput[type=\"text\"]::-webkit-input-placeholder {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #000000;\n}\n\ninput[type=\"text\"]::-moz-placeholder {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #000000;\n}\n\ninput[type=\"text\"]::-ms-input-placeholder {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #000000;\n}\n\ninput[type=\"text\"]::placeholder {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  color: #000000;\n}\n\n.container {\n  width: 100%;\n  margin-top: 50px;\n}\n\n.container .info {\n  display: flex;\n  margin-top: 50px;\n}\n\n.container .info .error-container {\n  width: 33%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px 5px;\n  height: auto;\n}\n\n.container .info .error-container .error {\n  width: 300px;\n  height: 30px;\n  background-color: red;\n  outline: darkred 3px solid;\n  text-align: center;\n  line-height: 30px;\n  margin: 10px;\n}\n\n.container .info .player-total-score-container {\n  width: 33%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px 5px;\n  height: auto;\n}\n\n.container .info .options {\n  width: 33%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px 5px;\n  height: auto;\n}\n\n.container .info .player-total-score-container .player-total-score, #saved-game-user-feedback {\n  width: 300px;\n  height: 30px;\n  background-color: limegreen;\n  outline: green 3px solid;\n  text-align: center;\n  line-height: 30px;\n  margin: 10px;\n}\n\n.container .course-selection {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 45%;\n}\n\n.container .course-selection .course {\n  width: 180px;\n  height: 200px;\n  border: 1px solid #000000;\n  text-align: center;\n  border-radius: 5px;\n  background-color: #ffffff;\n  box-shadow: 10px 10px 31px -13px rgba(0, 0, 0, 0.75);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.container .course-selection .course .name {\n  margin: 5px 0;\n}\n\n.container .score-card-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.container .score-card-container * {\n  box-sizing: border-box;\n}\n\n.container .score-card-container .score-card {\n  border: 1px solid #000000;\n  width: auto;\n}\n\n.container .score-card-container .score-card .holes,\n.container .score-card-container .score-card .yardage,\n.container .score-card-container .score-card .handicap {\n  display: flex;\n  text-align: center;\n}\n\n.container .score-card-container .score-card .holes input[type=\"text\"],\n.container .score-card-container .score-card .yardage input[type=\"text\"] {\n  padding-top: 5px;\n}\n\n.container .score-card-container .score-card .holes #first-column,\n.container .score-card-container .score-card .yardage #first-column {\n  width: 200px;\n}\n\n.container .score-card-container .score-card .holes .firstColumn,\n.container .score-card-container .score-card .holes .score-boxes,\n.container .score-card-container .score-card .holes .boxes,\n.container .score-card-container .score-card .yardage .firstColumn,\n.container .score-card-container .score-card .yardage .score-boxes,\n.container .score-card-container .score-card .yardage .boxes {\n  height: 30px;\n  border: 1px solid #000000;\n  line-height: 30px;\n}\n\n.container .score-card-container .score-card .holes .firstColumn,\n.container .score-card-container .score-card .yardage .firstColumn {\n  width: 200px;\n}\n\n.container .score-card-container .score-card .holes .col,\n.container .score-card-container .score-card .holes .boxes,\n.container .score-card-container .score-card .yardage .col,\n.container .score-card-container .score-card .yardage .boxes {\n  width: 45px;\n}\n\n.container .score-card-container .score-card .holes .scores,\n.container .score-card-container .score-card .holes .score-boxes,\n.container .score-card-container .score-card .yardage .scores,\n.container .score-card-container .score-card .yardage .score-boxes {\n  width: 80px;\n}\n\n#saved-game-user-feedback {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZi1nYW1lL2dvbGYtc2NvcmVjYXJkL2dvbGYtc2NvcmVjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUpBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUpBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUpBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0RBQW9EO0VBQ3BELGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFDQTs7O0VBR0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsWUFBWTtBQUNkOztBQUNBOzs7Ozs7RUFNRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBQ0E7Ozs7RUFJRSxXQUFXO0FBQ2I7O0FBQ0E7Ozs7RUFJRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9nb2xmLWdhbWUvZ29sZi1zY29yZWNhcmQvZ29sZi1zY29yZWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIio6bm90KHNwYW4pIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jbWF0LWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21hdC1jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06OnBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uY29udGFpbmVyIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb250YWluZXIgLmluZm8gLmVycm9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMjBweCA1cHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb250YWluZXIgLmluZm8gLmVycm9yLWNvbnRhaW5lciAuZXJyb3Ige1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBvdXRsaW5lOiBkYXJrcmVkIDNweCBzb2xpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5mbyAucGxheWVyLXRvdGFsLXNjb3JlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMjBweCA1cHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb250YWluZXIgLmluZm8gLm9wdGlvbnMge1xuICB3aWR0aDogMzMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDIwcHggNXB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY29udGFpbmVyIC5pbmZvIC5wbGF5ZXItdG90YWwtc2NvcmUtY29udGFpbmVyIC5wbGF5ZXItdG90YWwtc2NvcmUsICNzYXZlZC1nYW1lLXVzZXItZmVlZGJhY2sge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xuICBvdXRsaW5lOiBncmVlbiAzcHggc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jb250YWluZXIgLmNvdXJzZS1zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDUlO1xufVxuLmNvbnRhaW5lciAuY291cnNlLXNlbGVjdGlvbiAuY291cnNlIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDMxcHggLTEzcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbnRhaW5lciAuY291cnNlLXNlbGVjdGlvbiAuY291cnNlIC5uYW1lIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5jb250YWluZXIgLnNjb3JlLWNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuc2NvcmUtY2FyZC1jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmNvbnRhaW5lciAuc2NvcmUtY2FyZC1jb250YWluZXIgLnNjb3JlLWNhcmQgLmhvbGVzLFxuLmNvbnRhaW5lciAuc2NvcmUtY2FyZC1jb250YWluZXIgLnNjb3JlLWNhcmQgLnlhcmRhZ2UsXG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAuaGFuZGljYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAuaG9sZXMgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAueWFyZGFnZSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAuaG9sZXMgI2ZpcnN0LWNvbHVtbixcbi5jb250YWluZXIgLnNjb3JlLWNhcmQtY29udGFpbmVyIC5zY29yZS1jYXJkIC55YXJkYWdlICNmaXJzdC1jb2x1bW4ge1xuICB3aWR0aDogMjAwcHg7XG59XG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAuaG9sZXMgLmZpcnN0Q29sdW1uLFxuLmNvbnRhaW5lciAuc2NvcmUtY2FyZC1jb250YWluZXIgLnNjb3JlLWNhcmQgLmhvbGVzIC5zY29yZS1ib3hlcyxcbi5jb250YWluZXIgLnNjb3JlLWNhcmQtY29udGFpbmVyIC5zY29yZS1jYXJkIC5ob2xlcyAuYm94ZXMsXG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAueWFyZGFnZSAuZmlyc3RDb2x1bW4sXG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAueWFyZGFnZSAuc2NvcmUtYm94ZXMsXG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAueWFyZGFnZSAuYm94ZXMge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmNvbnRhaW5lciAuc2NvcmUtY2FyZC1jb250YWluZXIgLnNjb3JlLWNhcmQgLmhvbGVzIC5maXJzdENvbHVtbixcbi5jb250YWluZXIgLnNjb3JlLWNhcmQtY29udGFpbmVyIC5zY29yZS1jYXJkIC55YXJkYWdlIC5maXJzdENvbHVtbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5jb250YWluZXIgLnNjb3JlLWNhcmQtY29udGFpbmVyIC5zY29yZS1jYXJkIC5ob2xlcyAuY29sLFxuLmNvbnRhaW5lciAuc2NvcmUtY2FyZC1jb250YWluZXIgLnNjb3JlLWNhcmQgLmhvbGVzIC5ib3hlcyxcbi5jb250YWluZXIgLnNjb3JlLWNhcmQtY29udGFpbmVyIC5zY29yZS1jYXJkIC55YXJkYWdlIC5jb2wsXG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAueWFyZGFnZSAuYm94ZXMge1xuICB3aWR0aDogNDVweDtcbn1cbi5jb250YWluZXIgLnNjb3JlLWNhcmQtY29udGFpbmVyIC5zY29yZS1jYXJkIC5ob2xlcyAuc2NvcmVzLFxuLmNvbnRhaW5lciAuc2NvcmUtY2FyZC1jb250YWluZXIgLnNjb3JlLWNhcmQgLmhvbGVzIC5zY29yZS1ib3hlcyxcbi5jb250YWluZXIgLnNjb3JlLWNhcmQtY29udGFpbmVyIC5zY29yZS1jYXJkIC55YXJkYWdlIC5zY29yZXMsXG4uY29udGFpbmVyIC5zY29yZS1jYXJkLWNvbnRhaW5lciAuc2NvcmUtY2FyZCAueWFyZGFnZSAuc2NvcmUtYm94ZXMge1xuICB3aWR0aDogODBweDtcbn1cbiNzYXZlZC1nYW1lLXVzZXItZmVlZGJhY2sge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolfScorecardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-golf-scorecard",
          templateUrl: "./golf-scorecard.component.html",
          styleUrls: ["./golf-scorecard.component.css"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _golf_service__WEBPACK_IMPORTED_MODULE_1__["GolfService"]
        }];
      }, {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['form']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/golf-game/golf.module.ts":
  /*!******************************************!*\
    !*** ./src/app/golf-game/golf.module.ts ***!
    \******************************************/

  /*! exports provided: GolfModule */

  /***/
  function srcAppGolfGameGolfModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GolfModule", function () {
      return GolfModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./course-selection/course-selection.component */
    "./src/app/golf-game/course-selection/course-selection.component.ts");
    /* harmony import */


    var _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./amount-of-users-selection/amount-of-users-selection.component */
    "./src/app/golf-game/amount-of-users-selection/amount-of-users-selection.component.ts");
    /* harmony import */


    var _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./golf-scorecard/golf-scorecard.component */
    "./src/app/golf-game/golf-scorecard/golf-scorecard.component.ts");
    /* harmony import */


    var _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tee-selection/tee-selection.component */
    "./src/app/golf-game/tee-selection/tee-selection.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _pipes_duplicate_name_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../pipes/duplicate-name.pipe */
    "./src/app/pipes/duplicate-name.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var GolfModule = function GolfModule() {
      _classCallCheck(this, GolfModule);
    };

    GolfModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GolfModule
    });
    GolfModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GolfModule_Factory(t) {
        return new (t || GolfModule)();
      },
      providers: [_pipes_duplicate_name_pipe__WEBPACK_IMPORTED_MODULE_15__["DuplicateNamePipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GolfModule, {
        declarations: [_course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__["CourseSelectionComponent"], _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__["AmountOfUsersSelectionComponent"], _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__["GolfScorecardComponent"], _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__["TeeSelectionComponent"], _pipes_duplicate_name_pipe__WEBPACK_IMPORTED_MODULE_15__["DuplicateNamePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolfModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_course_selection_course_selection_component__WEBPACK_IMPORTED_MODULE_2__["CourseSelectionComponent"], _amount_of_users_selection_amount_of_users_selection_component__WEBPACK_IMPORTED_MODULE_3__["AmountOfUsersSelectionComponent"], _golf_scorecard_golf_scorecard_component__WEBPACK_IMPORTED_MODULE_4__["GolfScorecardComponent"], _tee_selection_tee_selection_component__WEBPACK_IMPORTED_MODULE_5__["TeeSelectionComponent"], _pipes_duplicate_name_pipe__WEBPACK_IMPORTED_MODULE_15__["DuplicateNamePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]],
          providers: [_pipes_duplicate_name_pipe__WEBPACK_IMPORTED_MODULE_15__["DuplicateNamePipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/golf-game/golf.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/golf-game/golf.service.ts ***!
    \*******************************************/

  /*! exports provided: GolfService */

  /***/
  function srcAppGolfGameGolfServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GolfService", function () {
      return GolfService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var GolfService =
    /*#__PURE__*/
    function () {
      function GolfService(http, db) {
        _classCallCheck(this, GolfService);

        this.http = http;
        this.db = db;
      }

      _createClass(GolfService, [{
        key: "getCoursesObservable",
        value: function getCoursesObservable() {
          return this.http.get('https://golf-courses-api.herokuapp.com/courses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
            return obj.courses;
          }));
        }
      }, {
        key: "getCourseObservableById",
        value: function getCourseObservableById(id) {
          return this.http.get("https://golf-courses-api.herokuapp.com/courses/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
            return obj.data;
          }));
        }
      }, {
        key: "getUserInputObservable",
        value: function getUserInputObservable() {
          return this.db.collection('user-input').doc('1JqzeoKuTBHew0tVfSCq').valueChanges();
        }
      }, {
        key: "writeToUserInputByName",
        value: function writeToUserInputByName(key, value) {
          var userObj = {};
          userObj[key] = value;
          return this.db.collection('user-input').doc('1JqzeoKuTBHew0tVfSCq').update(userObj);
        }
      }, {
        key: "writeToPlayerData",
        value: function writeToPlayerData(players, savedGame) {
          if (savedGame) {
            return this.db.collection('players-data').doc('2DpTcsjam07ZyB3dm9tG').set({
              players: players,
              savedGame: savedGame
            });
          } else {
            return this.db.collection('players-data').doc('2DpTcsjam07ZyB3dm9tG').update({
              players: players
            });
          }
        }
      }, {
        key: "getPlayerData",
        value: function getPlayerData() {
          return this.db.collection('players-data').doc('2DpTcsjam07ZyB3dm9tG').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
            return obj.players;
          }));
        }
      }, {
        key: "getSavedGameObservable",
        value: function getSavedGameObservable() {
          return this.db.collection('players-data').doc('2DpTcsjam07ZyB3dm9tG').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
            return obj.savedGame;
          }));
        }
      }, {
        key: "writeSavedGame",
        value: function writeSavedGame(savedGame) {
          return this.db.collection('players-data').doc('2DpTcsjam07ZyB3dm9tG').update({
            savedGame: savedGame
          });
        }
      }]);

      return GolfService;
    }();

    GolfService.ɵfac = function GolfService_Factory(t) {
      return new (t || GolfService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
    };

    GolfService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GolfService,
      factory: GolfService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolfService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/golf-game/tee-selection/tee-selection.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/golf-game/tee-selection/tee-selection.component.ts ***!
    \********************************************************************/

  /*! exports provided: TeeSelectionComponent */

  /***/
  function srcAppGolfGameTeeSelectionTeeSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeeSelectionComponent", function () {
      return TeeSelectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _golf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../golf.service */
    "./src/app/golf-game/golf.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function TeeSelectionComponent_div_0_mat_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r50 = ctx.$implicit;
        var i_r51 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r50);
      }
    }

    function TeeSelectionComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What tee do you want?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TeeSelectionComponent_div_0_Template_mat_select_selectionChange_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.onSelectChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeeSelectionComponent_div_0_mat_option_8_Template, 2, 2, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeeSelectionComponent_div_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.goToScorecard(_r48.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Generate Golf Scorecard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r47.teeOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r47.valueNotSelected);
      }
    }

    var TeeSelectionComponent =
    /*#__PURE__*/
    function () {
      function TeeSelectionComponent(router, golfService) {
        _classCallCheck(this, TeeSelectionComponent);

        this.router = router;
        this.golfService = golfService;
        this.valueNotSelected = true;
      }

      _createClass(TeeSelectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.getUserInputObservableSubscription = this.golfService.getUserInputObservable().subscribe(function (data) {
            _this6.teeOptions = [];

            var _iterator3 = _createForOfIteratorHelper(data.selectedCourse.holes[0].teeBoxes),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var teeBox = _step3.value;

                if (teeBox.teeType !== "auto change location") {
                  _this6.teeOptions.push(teeBox.teeType);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getUserInputObservableSubscription.unsubscribe();
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange() {
          if (this.valueNotSelected) {
            this.valueNotSelected = false;
          }
        }
      }, {
        key: "goToScorecard",
        value: function goToScorecard(value) {
          var _this7 = this;

          this.golfService.writeToUserInputByName('teeSelection', value).then(function (_) {
            _this7.router.navigateByUrl('current-game');
          });
        }
      }]);

      return TeeSelectionComponent;
    }();

    TeeSelectionComponent.ɵfac = function TeeSelectionComponent_Factory(t) {
      return new (t || TeeSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_golf_service__WEBPACK_IMPORTED_MODULE_2__["GolfService"]));
    };

    TeeSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeeSelectionComponent,
      selectors: [["app-tee-selection"]],
      decls: 1,
      vars: 1,
      consts: [["id", "tee-selection-container", 4, "ngIf"], ["id", "tee-selection-container"], ["id", "tee-selection"], ["placeholder", "Tee Selection", 3, "selectionChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "disabled", "click"], [3, "value"]],
      template: function TeeSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeeSelectionComponent_div_0_Template, 11, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teeOptions && ctx.teeOptions.length !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      styles: ["#tee-selection-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin-top: 100px;\n}\n\n#tee-selection[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZi1nYW1lL3RlZS1zZWxlY3Rpb24vdGVlLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZ29sZi1nYW1lL3RlZS1zZWxlY3Rpb24vdGVlLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RlZS1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4jdGVlLXNlbGVjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeeSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tee-selection',
          templateUrl: './tee-selection.component.html',
          styleUrls: ['./tee-selection.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _golf_service__WEBPACK_IMPORTED_MODULE_2__["GolfService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 5,
      vars: 0,
      consts: [["id", "center"], ["id", "title"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular Golf App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#center[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-top: 100px;\n}\n\n#title[_ngcontent-%COMP%] {\n    font-size: 60px;\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuI3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-home",
          templateUrl: "./home.component.html",
          styleUrls: ["./home.component.css"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 9,
      vars: 0,
      consts: [["color", "primary"], ["id", "nav-bar-row"], ["id", "right"], ["mat-raised-button", "", "routerLink", "/"], ["mat-raised-button", "", "routerLink", "/course-selection"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["#nav-bar-row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\nspan[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n#right[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdi1iYXItcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuc3BhbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAyMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-nav-bar",
          templateUrl: "./nav-bar.component.html",
          styleUrls: ["./nav-bar.component.css"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/duplicate-name.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipes/duplicate-name.pipe.ts ***!
    \**********************************************/

  /*! exports provided: DuplicateNamePipe */

  /***/
  function srcAppPipesDuplicateNamePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DuplicateNamePipe", function () {
      return DuplicateNamePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_data_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app-data/names */
    "./src/app/app-data/names.ts");

    var DuplicateNamePipe =
    /*#__PURE__*/
    function () {
      function DuplicateNamePipe() {
        _classCallCheck(this, DuplicateNamePipe);
      }

      _createClass(DuplicateNamePipe, [{
        key: "transform",
        value: function transform(value, players, playerIndex) {
          var check = false;
          var name = value;
          var playerNames = players.map(function (player) {
            return player.name;
          });

          while (!check) {
            if (playerNames.some(function (n, i) {
              if (i !== playerIndex) {
                return name === n;
              } else {
                return false;
              }
            })) {
              name = _app_data_names__WEBPACK_IMPORTED_MODULE_1__["names"][Math.floor(Math.random() * 99)];
            } else {
              check = true;
            }
          }

          return name;
        }
      }]);

      return DuplicateNamePipe;
    }();

    DuplicateNamePipe.ɵfac = function DuplicateNamePipe_Factory(t) {
      return new (t || DuplicateNamePipe)();
    };

    DuplicateNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "duplicateName",
      type: DuplicateNamePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DuplicateNamePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'duplicateName'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/brady/Dev/AgGolfApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map