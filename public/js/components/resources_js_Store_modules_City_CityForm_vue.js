"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Store_modules_City_CityForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/City/CityForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/City/CityForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: [],
      form: new Form({
        title: '',
        preview_text: '',
        detail_text: '',
        img: '',
        country_id: false
      })
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('City', ['saveCity', 'refreshTable', 'statusData'])), {}, {
    checkForm: function checkForm(e) {
      this.errors.splice(0);
      if (!this.form.title) {
        this.errors.push('Title required.');
      }
      if (!this.form.preview_text) {
        this.errors.push('Preview text required.');
      }
      if (!this.form.detail_text) {
        this.errors.push('Detail text required.');
      }
      if (!this.form.img) {
        this.errors.push('Image required.');
      }
      if (this.errors.length) {
        return true;
      }
    },
    saveImg: function saveImg(e) {
      this.form.img = e.target.files[0];
    },
    submit: function submit() {
      var _this = this;
      if (this.checkForm()) {
        return false;
      } else {
        var data = new FormData();
        var payload = {};
        data.append('title', this.form.title);
        data.append('preview_text', this.form.preview_text);
        data.append('detail_text', this.form.detail_text);
        data.append('img', this.form.img);
        data.append('country_id', this.form.country_id);
        if (this.entry) {
          data.append('id', this.entry.id);
        }
        payload = data;
        payload.callback = function (data) {
          _this.refreshTable(true);
          _this.statusData(data.status);
        };
        this.saveCity(payload);
        this.form.reset();
      }
    }
  }),
  props: {
    entry: {
      required: false
    },
    countries: {
      required: false
    }
  },
  mounted: function mounted() {
    this.form = new Form({
      title: this.entry ? this.entry.title : null,
      preview_text: this.entry ? this.entry.preview_text : null,
      detail_text: this.entry ? this.entry.detail_text : null,
      resized_image: this.entry ? this.entry.resized_image : null,
      img: this.entry ? this.entry.img : null,
      country_id: this.entry ? this.entry.country_id : null
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/City/CityForm.vue?vue&type=template&id=9d286fe2&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/City/CityForm.vue?vue&type=template&id=9d286fe2& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-body card-block"
  }, [_c("form", [_vm.errors.length ? _c("p", [_c("b", [_vm._v("Please correct the following error(s):")]), _vm._v(" "), _c("ul", _vm._l(_vm.errors, function (error) {
    return _c("li", [_vm._v(_vm._s(error))]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.title,
      expression: "form.title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: "",
      id: "title",
      name: "title",
      placeholder: "Text"
    },
    domProps: {
      value: _vm.form.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "title", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-9"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.preview_text,
      expression: "form.preview_text"
    }],
    staticClass: "form-control html-editor",
    attrs: {
      name: "preview_text",
      id: "preview_text",
      rows: "9",
      placeholder: "Текст..."
    },
    domProps: {
      value: _vm.form.preview_text
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "preview_text", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-9"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.detail_text,
      expression: "form.detail_text"
    }],
    staticClass: "form-control html-editor",
    attrs: {
      name: "detail_text",
      id: "detail_text",
      rows: "9",
      placeholder: "Текст..."
    },
    domProps: {
      value: _vm.form.detail_text
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "detail_text", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-9"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.country_id,
      expression: "form.country_id"
    }],
    staticClass: "form-control-lg form-control",
    attrs: {
      name: "country_id",
      id: "selectLg"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "country_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.countries, function (country) {
    return _c("option", {
      domProps: {
        value: country.id,
        selected: country.id === _vm.form.country_id
      }
    }, [_vm._v("\n                        " + _vm._s(country.title) + "\n                    ")]);
  }), 0)])]), _vm._v(" "), _vm.form.resized_image ? _c("div", {
    staticClass: "row form-group"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-9"
  }, [_c("img", {
    attrs: {
      src: _vm.form.resized_image,
      alt: _vm.form.title
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-9"
  }, [_c("input", {
    staticClass: "form-control-file",
    attrs: {
      type: "file",
      id: "img",
      name: "img"
    },
    on: {
      change: _vm.saveImg
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("input", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      value: "Сохранить"
    },
    on: {
      click: _vm.submit
    }
  })])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col col-md-3"
  }, [_c("label", {
    staticClass: "form-control-label",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Название")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col col-md-3"
  }, [_c("label", {
    staticClass: "form-control-label",
    attrs: {
      "for": "textarea-input"
    }
  }, [_vm._v("Анонс")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col col-md-3"
  }, [_c("label", {
    staticClass: "form-control-label",
    attrs: {
      "for": "textarea-input"
    }
  }, [_vm._v("Детальный текст")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col col-md-3"
  }, [_c("label", {
    staticClass: "form-control-label",
    attrs: {
      "for": "selectLg"
    }
  }, [_vm._v("Страна")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col col-md-3"
  }, [_c("label", {
    staticClass: "form-control-label",
    attrs: {
      "for": "file-input"
    }
  }, [_vm._v("Текущее изображение")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col col-md-3"
  }, [_c("label", {
    staticClass: "form-control-label",
    attrs: {
      "for": "file-input"
    }
  }, [_vm._v("Изображение")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Store/modules/City/CityForm.vue":
/*!******************************************************!*\
  !*** ./resources/js/Store/modules/City/CityForm.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CityForm_vue_vue_type_template_id_9d286fe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CityForm.vue?vue&type=template&id=9d286fe2& */ "./resources/js/Store/modules/City/CityForm.vue?vue&type=template&id=9d286fe2&");
/* harmony import */ var _CityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CityForm.vue?vue&type=script&lang=js& */ "./resources/js/Store/modules/City/CityForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CityForm_vue_vue_type_template_id_9d286fe2___WEBPACK_IMPORTED_MODULE_0__.render,
  _CityForm_vue_vue_type_template_id_9d286fe2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Store/modules/City/CityForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Store/modules/City/CityForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Store/modules/City/CityForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CityForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/City/CityForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Store/modules/City/CityForm.vue?vue&type=template&id=9d286fe2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Store/modules/City/CityForm.vue?vue&type=template&id=9d286fe2& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CityForm_vue_vue_type_template_id_9d286fe2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CityForm_vue_vue_type_template_id_9d286fe2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CityForm_vue_vue_type_template_id_9d286fe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CityForm.vue?vue&type=template&id=9d286fe2& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/City/CityForm.vue?vue&type=template&id=9d286fe2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);