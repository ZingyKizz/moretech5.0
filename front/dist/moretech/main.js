"use strict";
(self["webpackChunkmoretech"] = self["webpackChunkmoretech"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-web-apis/geolocation */ 2967);
/* harmony import */ var _office_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./office.service */ 3062);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular8-yandex-maps */ 2494);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chart */ 3530);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 2947);













function AppComponent_div_3_div_9_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043B\u0438\u0446");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_3_div_9_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_3_div_9_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_3_div_9_p_2_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const officeServ_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !officeServ_r8.is_legal_entity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", officeServ_r8.is_legal_entity);
  }
}
function AppComponent_div_3_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const openHour_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", openHour_r11.days, ": ", openHour_r11.hours, "");
  }
}
function AppComponent_div_3_div_24_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serv_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](serv_r14);
  }
}
function AppComponent_div_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_3_div_24_p_1_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const officeServ_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", officeServ_r12.titles);
  }
}
function AppComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_div_3_div_9_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p-chart", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_3_Template_img_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.getRoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_3_Template_img_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.dialogVisible = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "div")(16, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_div_3_p_18_Template, 2, 2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "div")(22, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0423\u0441\u043B\u0443\u0433\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AppComponent_div_3_div_24_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.selectedOffice.salePointName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.selectedOffice.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.selectedOffice.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.data)("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.selectedOffice.openHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.selectedOffice.services);
  }
}
function AppComponent_div_4_div_4_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 28);
  }
}
function AppComponent_div_4_div_4_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 29);
  }
}
function AppComponent_div_4_div_4_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
  }
}
function AppComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_div_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const branch_r19 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.chooseOffice2(branch_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_4_div_4_img_5_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_4_div_4_img_6_Template, 1, 0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_div_4_div_4_img_7_Template, 1, 0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", branch_r19.workload.service_time_prediction < 15.1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", branch_r19.workload.service_time_prediction > 15.1 && branch_r19.workload.service_time_prediction <= 20.1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", branch_r19.workload.service_time_prediction > 20.1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](branch_r19.salePointName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](branch_r19.address);
  }
}
function AppComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_p_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.suggest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-dropdown", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function AppComponent_div_4_Template_p_dropdown_onChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.changeDropdown());
    })("ngModelChange", function AppComponent_div_4_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.selectedService = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_4_div_4_Template, 13, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.services)("ngModel", ctx_r1.selectedService);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.offices);
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
function AppComponent_ya_placemark_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ya-placemark", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("balloonopen", function AppComponent_ya_placemark_8_Template_ya_placemark_balloonopen_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const off_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.chooseOffice(off_r30.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const off_r30 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("geometry", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, off_r30.geometry.lat, off_r30.geometry.lon))("options", ctx_r2.placemarkOptionsOpen);
  }
}
function AppComponent_ya_placemark_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ya-placemark", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("balloonopen", function AppComponent_ya_placemark_9_Template_ya_placemark_balloonopen_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);
      const off_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.chooseOffice(off_r33.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const off_r33 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("geometry", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, off_r33.geometry.lat, off_r33.geometry.lon))("options", ctx_r3.placemarkOptionsClose);
  }
}
function AppComponent_ya_control_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ya-control", 32);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parameters", ctx_r4.parameters);
  }
}
const _c1 = function () {
  return [];
};
const _c2 = function (a0) {
  return {
    controls: a0
  };
};
const _c3 = function () {
  return {
    width: "50vw"
  };
};
class AppComponent {
  constructor(geolocation$, officeService) {
    this.geolocation$ = geolocation$;
    this.officeService = officeService;
    this.title = 'moretech';
    this.sidebarVisible = false;
    this.roadVisible = false;
    this.sidebarAll = false;
    this.dialogVisible = false;
    this.value = "";
    this.selectedOffice = undefined;
    this.services = [{
      name: 'Все услуги',
      code: 'NY'
    }, {
      name: 'Переводы',
      code: 'NY'
    }, {
      name: 'Банковские карты',
      code: 'NY'
    }, {
      name: 'Ценные бумаги/инвестиции',
      code: 'NY'
    }, {
      name: 'Кредиты',
      code: 'NY'
    }, {
      name: 'Платежи',
      code: 'NY'
    }, {
      name: 'Открытие счета для юридического лица и регистрация бизнеса',
      code: 'NY'
    }, {
      name: 'Сейфы для юридических лиц',
      code: 'NY'
    }, {
      name: 'Обслуживание расчетного счета для юридических лиц',
      code: 'NY'
    }];
    this.selectedService = {
      name: 'Все услуги',
      code: 'NY'
    };
    this.placemarkOptionsOpen = {
      iconLayout: 'default#image',
      iconImageHref: '../assets/open_office.svg',
      iconImageSize: [32, 32],
      hasBalloon: true,
      openEmptyBalloon: true
    };
    this.placemarkOptionsClose = {
      iconLayout: 'default#image',
      iconImageHref: '../assets/close_office.svg',
      iconImageSize: [32, 32],
      hasBalloon: true,
      openEmptyBalloon: true
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 5,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: 'black',
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            color: "rgba(0, 0, 0, 0)"
          }
        },
        y: {
          ticks: {
            color: 'black'
          },
          grid: {
            display: false,
            color: "rgba(0, 0, 0, 0)"
          }
        }
      }
    };
  }
  ngOnInit() {
    this.geolocation$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(position => {
      this.coords = position.coords;
      console.log(position.coords);
    });
    this.officeService.getOffices().subscribe(o => {
      this.offices = o;
      console.log(this.offices);
      this.openOffices = this.offices.filter(function (elem) {
        if (elem.isOpen) {
          return true;
        } else {
          return false;
        }
      });
      this.closeOffices = this.offices.filter(function (elem) {
        if (!elem.isOpen) {
          return true;
        } else {
          return false;
        }
      });
    });
  }
  chooseOffice(id, event) {
    this.sidebarAll = false;
    event.target.balloon.close();
    this.officeService.getOffice(id).subscribe(office => {
      this.selectedOffice = office;
      this.sidebarVisible = true;
      this.data = {
        labels: this.selectedOffice.workload.workload.filter(function (x) {
          return x.dayofweek == 1;
        }).map(x => x.start_time_of_wait_hour),
        datasets: [{
          backgroundColor: "#3B83F1",
          borderColor: "#3B83F1",
          data: this.selectedOffice.workload.workload.filter(function (x) {
            return x.dayofweek == 1;
          }).map(x => x.service_time_prediction)
        }]
      };
    });
    this.roadVisible = false;
  }
  chooseOffice2(id) {
    this.sidebarAll = false;
    this.officeService.getOffice(id).subscribe(office => {
      this.selectedOffice = office;
      this.sidebarVisible = true;
      this.data = {
        labels: this.selectedOffice.workload.workload.filter(function (x) {
          return x.dayofweek == 1;
        }).map(x => x.start_time_of_wait_hour),
        datasets: [{
          backgroundColor: "#3B83F1",
          borderColor: "#3B83F1",
          data: this.selectedOffice.workload.workload.filter(function (x) {
            return x.dayofweek == 1;
          }).map(x => x.service_time_prediction)
        }]
      };
    });
    this.roadVisible = false;
  }
  getRoad() {
    this.parameters = {
      options: {
        allowSwitch: false,
        reverseGeocoding: true,
        types: {
          masstransit: true,
          pedestrian: true,
          taxi: true
        }
      },
      state: {
        type: 'masstransit',
        fromEnabled: false,
        from: `${this.coords.latitude}, ${this.coords.longitude}`,
        toEnabled: false,
        to: `${this.selectedOffice.lat}, ${this.selectedOffice.lon}`
      }
    };
    this.roadVisible = true;
    this.sidebarVisible = false;
  }
  openAll() {
    this.sidebarAll = true;
    this.sidebarVisible = true;
    console.log("open");
  }
  changeDropdown() {
    this.officeService.getOffices(this.selectedService.name).subscribe(o => {
      this.offices = o;
      console.log(this.offices);
      this.openOffices = this.offices.filter(function (elem) {
        if (elem.isOpen) {
          return true;
        } else {
          return false;
        }
      });
      this.closeOffices = this.offices.filter(function (elem) {
        if (!elem.isOpen) {
          return true;
        } else {
          return false;
        }
      });
    });
  }
  suggest() {
    this.officeService.suggest(this.value).subscribe(s => {
      this.selectedService = {
        name: s,
        code: 'NY'
      };
      this.changeDropdown();
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_3__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_office_service__WEBPACK_IMPORTED_MODULE_0__.OfficeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 16,
    vars: 23,
    consts: [[1, "all-button", 3, "click"], ["styleClass", "w-30rem", 3, "visible", "visibleChange"], ["class", "side-container", 4, "ngIf"], [1, "container"], [3, "center", "zoom", "state"], [3, "geometry"], [3, "geometry", "options", "balloonopen", 4, "ngFor", "ngForOf"], ["type", "RoutePanel", 3, "parameters", 4, "ngIf"], ["header", "\u0412\u044B \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u043E\u0444\u0438\u0441\u0430", 3, "visible", "visibleChange"], [2, "font-weight", "800"], [1, "side-container"], [1, "block-container"], ["src", "../assets/open_office.svg"], [1, "office-name"], [1, "office-info"], [4, "ngFor", "ngForOf"], ["type", "bar", 2, "height", "100px", 3, "data", "options"], ["src", "../assets/Button-2.svg", 2, "width", "100%", "margin", "5px 0", 3, "click"], ["src", "../assets/Button-3.svg", 2, "width", "100%", "margin", "5px 0", 3, "click"], ["class", "office-info", 4, "ngFor", "ngForOf"], ["class", "office-info", 4, "ngIf"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["label", "Go", 3, "click"], ["optionLabel", "name", 3, "options", "ngModel", "onChange", "ngModelChange"], [1, "block-container", 3, "click"], ["src", "../assets/Frame-2.svg", "style", "margin-left: 130px;", 4, "ngIf"], ["src", "../assets/Frame-3.svg", "style", "margin-left: 130px;", 4, "ngIf"], ["src", "../assets/Frame-4.svg", "style", "margin-left: 130px;", 4, "ngIf"], ["src", "../assets/Frame-2.svg", 2, "margin-left", "130px"], ["src", "../assets/Frame-3.svg", 2, "margin-left", "130px"], ["src", "../assets/Frame-4.svg", 2, "margin-left", "130px"], [3, "geometry", "options", "balloonopen"], ["type", "RoutePanel", 3, "parameters"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener() {
          return ctx.openAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0444\u0438\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_sidebar_visibleChange_2_listener($event) {
          return ctx.sidebarVisible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_3_Template, 25, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_4_Template, 5, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "ya-map", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ya-placemark", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_ya_placemark_8_Template, 1, 5, "ya-placemark", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_ya_placemark_9_Template, 1, 5, "ya-placemark", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppComponent_ya_control_10_Template, 1, 1, "ya-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-dialog", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_11_listener($event) {
          return ctx.dialogVisible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u0412\u0430\u0448 \u043A\u043E\u0434 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F: 4376 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u0434\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u0434 \u0438 \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u0432\u044B\u0437\u0432\u0430\u043D\u044B \u0432 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.sidebarVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sidebarAll && ctx.selectedOffice);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sidebarAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("center", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c0, ctx.coords.latitude, ctx.coords.longitude))("zoom", 13)("state", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("geometry", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c0, ctx.coords.latitude, ctx.coords.longitude));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.openOffices);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.closeOffices);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roadVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.dialogVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_5__.YaControlDirective, angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_5__.YaMapComponent, angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_5__.YaPlacemarkDirective, primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__.Sidebar, primeng_chart__WEBPACK_IMPORTED_MODULE_7__.UIChart, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button],
    styles: [".container[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n}\np[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\n.p-sidebar-left[_ngcontent-%COMP%] {\n    background: white;\n}\n\n.block-container[_ngcontent-%COMP%] {\n    display: flex;\n\n}\n.side-container[_ngcontent-%COMP%] {\n    display: block;\n    padding: 15px;\n}\n.office-name[_ngcontent-%COMP%] {\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 18px;\n    letter-spacing: 0px;\n    text-align: left;\n    margin: 5px 10px;\n}\n.office-info[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    letter-spacing: 0px;\n    text-align: left;\n    color: #58595B;\n    margin: 5px 10px;\n\n}\n\n.all-button[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50px;\n    background: #3B83F1;\n    z-index: 1000;\n    border: 1px;\n    border-radius: 5px;\n    color: white;\n    padding: 10px;\n    right: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbnAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnAtc2lkZWJhci1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmJsb2NrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcblxufVxuLnNpZGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLm9mZmljZS1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG59XG4ub2ZmaWNlLWluZm8ge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjNTg1OTVCO1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG5cbn1cblxuLmFsbC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogIzNCODNGMTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJvcmRlcjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICByaWdodDogNTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular8-yandex-maps */ 2494);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/chart */ 3530);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);














const mapConfig = {
  apikey: 'API_KEY',
  lang: 'en_US'
};
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_4__.AngularYandexMapsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__.SidebarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, primeng_chart__WEBPACK_IMPORTED_MODULE_8__.ChartModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_4__.AngularYandexMapsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__.SidebarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, primeng_chart__WEBPACK_IMPORTED_MODULE_8__.ChartModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule]
  });
})();

/***/ }),

/***/ 3062:
/*!***********************************!*\
  !*** ./src/app/office.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfficeService: () => (/* binding */ OfficeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class OfficeService {
  constructor(http) {
    this.http = http;
  }
  getOffices(service = "Все услуги") {
    if (service == "Все услуги") {
      return this.http.get("http://0.0.0.0:5000/getBranches/?lat=55.7133833&lon=37.6747228");
    } else {
      return this.http.get("http://0.0.0.0:5000/getBranches/?lat=55.7133833&lon=37.6747228&service_title=" + service);
    }
  }
  getOffice(id) {
    return this.http.get("http://0.0.0.0:5000/branchInfoById/?id=" + id);
  }
  suggest(text) {
    return this.http.get("http://0.0.0.0:5000/suggestService/?text=" + text);
  }
  static #_ = this.ɵfac = function OfficeService_Factory(t) {
    return new (t || OfficeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: OfficeService,
    factory: OfficeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map