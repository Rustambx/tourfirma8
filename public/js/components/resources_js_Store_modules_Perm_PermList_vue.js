"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Store_modules_Perm_PermList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/Perm/PermList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/Perm/PermList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/modal/modal.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      entry: false,
      errors: [],
      form: new Form({
        name: '',
        description: '',
        role_id: [],
        roles: ''
      })
    };
  },
  components: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__.BModal
  },
  props: {
    roles: {
      required: false
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('Perm', ['shouldOpenModal', 'shouldRefreshTable', 'getPerms'])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('Perm', ['openModal', 'refreshTable', 'deletePerm', 'permAll'])), {}, {
    closeEditModal: function closeEditModal() {
      this.entry = null;
      this.$refs['perm_modal'].hide();
    },
    openEditModal: function openEditModal(row) {
      this.entry = row;
      this.$refs['perm_modal'].show();
    },
    submitDelete: function submitDelete(id) {
      this.deletePerm(id);
      this.refreshTable(true);
      this.permAll();
    },
    checkPermissions: function checkPermissions(role, permRole) {}
  }),
  watch: {
    shouldOpenModal: function shouldOpenModal() {
      if (this.shouldOpenModal === true) {
        this.$refs['perm_modal'].show();
        this.openModal(false);
      }
    },
    shouldRefreshTable: function shouldRefreshTable() {
      if (this.shouldRefreshTable === true) {
        this.refreshTable(false);
        this.$refs['perm_modal'].hide();
        this.permAll();
      }
    }
  },
  mounted: function mounted() {
    this.permAll();
    this.form = new Form({
      id: this.entry ? this.entry.id : null,
      name: this.entry ? this.entry.name : null,
      description: this.entry ? this.entry.description : null,
      role_id: this.entry ? this.entry.role_id : [],
      roles: this.entry ? this.entry.roles : null
    });
    console.log('this.form');
    console.log(this.form);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/Perm/PermList.vue?vue&type=template&id=624bfa09&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/Perm/PermList.vue?vue&type=template&id=624bfa09& ***!
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
  return _c("form", {
    attrs: {
      method: "post"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-striped table-bordered",
    attrs: {
      id: "bootstrap-data-table-export"
    }
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Привилегии")]), _vm._v(" "), _vm._l(_vm.roles, function (role) {
    return _c("th", [_vm._v(_vm._s(role.name))]);
  })], 2)]), _vm._v(" "), _c("tbody", _vm._l(_vm.getPerms.data, function (perm) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(perm.description))]), _vm._v(" "), _vm._l(_vm.roles, function (role) {
      return _c("td", [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.form.role_id,
          expression: "form.role_id"
        }],
        attrs: {
          type: "checkbox"
        },
        domProps: {
          checked: Array.isArray(_vm.form.role_id) ? _vm._i(_vm.form.role_id, null) > -1 : _vm.form.role_id
        },
        on: {
          change: function change($event) {
            var $$a = _vm.form.role_id,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && _vm.$set(_vm.form, "role_id", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(_vm.form, "role_id", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(_vm.form, "role_id", $$c);
            }
          }
        }
      })]);
    })], 2);
  }), 0)]), _vm._v(" "), _vm._m(0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-footer"
  }, [_c("input", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "submit",
      value: "Обновить"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/button/button-close.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/button/button-close.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BButtonClose: () => (/* binding */ BButtonClose),
/* harmony export */   props: () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_normalize_slot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/normalize-slot */ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  ariaLabel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Close'),
  content: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, '&times;'),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  textVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING)
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_BUTTON_CLOSE); // --- Main component ---
// @vue/component

var BButtonClose = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_BUTTON_CLOSE,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var componentData = {
      staticClass: 'close',
      class: _defineProperty({}, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(event) {
          // Ensure click on button HTML content is also disabled

          /* istanbul ignore if: bug in JSDOM still emits click on inner element */
          if (props.disabled && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_4__.isEvent)(event)) {
            (0,_utils_events__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
          }
        }
      }
    }; // Careful not to override the default slot with innerHTML

    if (!(0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_6__.hasNormalizedSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_7__.SLOT_NAME_DEFAULT, $scopedSlots, $slots)) {
      componentData.domProps = {
        innerHTML: props.content
      };
    }

    return h('button', (0,_vue__WEBPACK_IMPORTED_MODULE_8__.mergeData)(data, componentData), (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_6__.normalizeSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_7__.SLOT_NAME_DEFAULT, {}, $scopedSlots, $slots));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/button/button.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/button/button.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BButton: () => (/* binding */ BButton),
/* harmony export */   props: () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/key-codes */ "./node_modules/bootstrap-vue/esm/constants/key-codes.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/esm/utils/router.js");
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/esm/components/link/link.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // --- Props ---

var linkProps = (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.omit)(_link_link__WEBPACK_IMPORTED_MODULE_1__.props, ['event', 'routerTag']);
delete linkProps.href.default;
delete linkProps.to.default;
var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.sortKeys)(_objectSpread(_objectSpread({}, linkProps), {}, {
  block: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  pill: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  // Tri-state: `true`, `false` or `null`
  // => On, off, not a toggle
  pressed: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, null),
  size: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  squared: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'button'),
  type: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'button'),
  variant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'secondary')
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_BUTTON); // --- Helper methods ---
// Focus handler for toggle buttons
// Needs class of 'focus' when focused

var handleFocus = function handleFocus(event) {
  if (event.type === 'focusin') {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.addClass)(event.target, 'focus');
  } else if (event.type === 'focusout') {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.removeClass)(event.target, 'focus');
  }
}; // Is the requested button a link?
// If tag prop is set to `a`, we use a <b-link> to get proper disabled handling


var isLink = function isLink(props) {
  return (0,_utils_router__WEBPACK_IMPORTED_MODULE_6__.isLink)(props) || (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.isTag)(props.tag, 'a');
}; // Is the button to be a toggle button?


var isToggle = function isToggle(props) {
  return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isBoolean)(props.pressed);
}; // Is the button "really" a button?


var isButton = function isButton(props) {
  return !(isLink(props) || props.tag && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.isTag)(props.tag, 'button'));
}; // Is the requested tag not a button or link?


var isNonStandardTag = function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
}; // Compute required classes (non static classes)


var computeClass = function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || 'secondary'), (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), props.size), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, 'rounded-pill', props.pill), _defineProperty(_ref, 'rounded-0', props.squared && !props.pill), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
}; // Compute the link props to pass to b-link (if required)


var computeLinkProps = function computeLinkProps(props) {
  return isLink(props) ? (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.pluckProps)(linkProps, props) : {};
}; // Compute the attributes for a button


var computeAttrs = function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStandardTag = isNonStandardTag(props);
  var hashLink = link && props.href === '#';
  var role = data.attrs && data.attrs.role ? data.attrs.role : null;
  var tabindex = data.attrs ? data.attrs.tabindex : null;

  if (nonStandardTag || hashLink) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA
    // Don't bork any role provided in `data.attrs` when `isLink` or `isButton`
    // Except when link has `href` of `#`
    role: nonStandardTag || hashLink ? 'button' : role,
    // We set the `aria-disabled` state for non-standard tags
    'aria-disabled': nonStandardTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // `autocomplete="off"` is needed in toggle mode to prevent some browsers
    // from remembering the previous setting when using the back button
    autocomplete: toggle ? 'off' : null,
    // `tabindex` is used when the component is not a button
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a `tabindex="0"` to non buttons or non links
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
}; // --- Main component ---
// @vue/component


var BButton = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_8__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_BUTTON,
  functional: true,
  props: props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var nonStandardTag = isNonStandardTag(props);
    var hashLink = link && props.href === '#';
    var on = {
      keydown: function keydown(event) {
        // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
        // we add a keydown handlers for CODE_SPACE/CODE_ENTER

        /* istanbul ignore next */
        if (props.disabled || !(nonStandardTag || hashLink)) {
          return;
        }

        var keyCode = event.keyCode; // Add CODE_SPACE handler for `href="#"` and CODE_ENTER handler for non-standard tags

        if (keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__.CODE_SPACE || keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__.CODE_ENTER && nonStandardTag) {
          var target = event.currentTarget || event.target;
          (0,_utils_events__WEBPACK_IMPORTED_MODULE_10__.stopEvent)(event, {
            propagation: false
          });
          target.click();
        }
      },
      click: function click(event) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isEvent)(event)) {
          (0,_utils_events__WEBPACK_IMPORTED_MODULE_10__.stopEvent)(event);
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
          // `concat()` will normalize the value to an array without
          // double wrapping an array value in an array
          (0,_utils_array__WEBPACK_IMPORTED_MODULE_11__.concat)(listeners['update:pressed']).forEach(function (fn) {
            if ((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isFunction)(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? _link_link__WEBPACK_IMPORTED_MODULE_1__.BLink : props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_12__.mergeData)(_objectSpread(_objectSpread({}, data), {}, {
      props: undefined
    }), componentData), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/link/link.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/link/link.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLink: () => (/* binding */ BLink),
/* harmony export */   nuxtLinkProps: () => (/* binding */ nuxtLinkProps),
/* harmony export */   props: () => (/* binding */ props),
/* harmony export */   routerLinkProps: () => (/* binding */ routerLinkProps)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/esm/utils/router.js");
/* harmony import */ var _mixins_attrs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/attrs */ "./node_modules/bootstrap-vue/esm/mixins/attrs.js");
/* harmony import */ var _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js");
/* harmony import */ var _mixins_listeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/listeners */ "./node_modules/bootstrap-vue/esm/mixins/listeners.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // --- Constants ---

var ROOT_EVENT_NAME_CLICKED = (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK, 'clicked'); // --- Props ---
// `<router-link>` specific props

var routerLinkProps = {
  activeClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  append: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  event: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_STRING),
  exact: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  exactActiveClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  exactPath: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  exactPathActiveClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  replace: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  routerTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  to: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_OBJECT_STRING)
}; // `<nuxt-link>` specific props

var nuxtLinkProps = {
  noPrefetch: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  // Must be `null` to fall back to the value defined in the
  // `nuxt.config.js` configuration file for `router.prefetchLinks`
  // We convert `null` to `undefined`, so that Nuxt.js will use the
  // compiled default
  // Vue treats `undefined` as default of `false` for Boolean props,
  // so we must set it as `null` here to be a true tri-state prop
  prefetch: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, null)
}; // All `<b-link>` props

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.sortKeys)(_objectSpread(_objectSpread(_objectSpread({}, nuxtLinkProps), routerLinkProps), {}, {
  active: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  href: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  // Must be `null` if no value provided
  rel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, null),
  // To support 3rd party router links based on `<router-link>` (i.e. `g-link` for Gridsome)
  // Default is to auto choose between `<router-link>` and `<nuxt-link>`
  // Gridsome doesn't provide a mechanism to auto detect and has caveats
  // such as not supporting FQDN URLs or hash only URLs
  routerComponentName: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  target: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, '_self')
})), _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK); // --- Main component ---
// @vue/component

var BLink = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK,
  // Mixin order is important!
  mixins: [_mixins_attrs__WEBPACK_IMPORTED_MODULE_6__.attrsMixin, _mixins_listeners__WEBPACK_IMPORTED_MODULE_7__.listenersMixin, _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_8__.listenOnRootMixin, _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__.normalizeSlotMixin],
  inheritAttrs: false,
  props: props,
  computed: {
    computedTag: function computedTag() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          disabled = this.disabled,
          routerComponentName = this.routerComponentName;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeTag)({
        to: to,
        disabled: disabled,
        routerComponentName: routerComponentName
      }, this);
    },
    isRouterLink: function isRouterLink() {
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.isRouterLink)(this.computedTag);
    },
    computedRel: function computedRel() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var target = this.target,
          rel = this.rel;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeRel)({
        target: target,
        rel: rel
      });
    },
    computedHref: function computedHref() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          href = this.href;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeHref)({
        to: to,
        href: href
      }, this.computedTag);
    },
    computedProps: function computedProps() {
      var event = this.event,
          prefetch = this.prefetch,
          routerTag = this.routerTag;
      return this.isRouterLink ? _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.pluckProps)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.omit)(_objectSpread(_objectSpread({}, routerLinkProps), this.computedTag === 'nuxt-link' ? nuxtLinkProps : {}), ['event', 'prefetch', 'routerTag']), this)), event ? {
        event: event
      } : {}), (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isBoolean)(prefetch) ? {
        prefetch: prefetch
      } : {}), routerTag ? {
        tag: routerTag
      } : {}) : {};
    },
    computedAttrs: function computedAttrs() {
      var bvAttrs = this.bvAttrs,
          href = this.computedHref,
          rel = this.computedRel,
          disabled = this.disabled,
          target = this.target,
          routerTag = this.routerTag,
          isRouterLink = this.isRouterLink;
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, bvAttrs), href ? {
        href: href
      } : {}), isRouterLink && routerTag && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.isTag)(routerTag, 'a') ? {} : {
        rel: rel,
        target: target
      }), {}, {
        tabindex: disabled ? '-1' : (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isUndefined)(bvAttrs.tabindex) ? null : bvAttrs.tabindex,
        'aria-disabled': disabled ? 'true' : null
      });
    },
    computedListeners: function computedListeners() {
      return _objectSpread(_objectSpread({}, this.bvListeners), {}, {
        // We want to overwrite any click handler since our callback
        // will invoke the user supplied handler(s) if `!this.disabled`
        click: this.onClick
      });
    }
  },
  methods: {
    onClick: function onClick(event) {
      var _arguments = arguments;
      var eventIsEvent = (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isEvent)(event);
      var isRouterLink = this.isRouterLink;
      var suppliedHandler = this.bvListeners.click;

      if (eventIsEvent && this.disabled) {
        // Stop event from bubbling up
        // Kill the event loop attached to this specific `EventTarget`
        // Needed to prevent `vue-router` for doing its thing
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.stopEvent)(event, {
          immediatePropagation: true
        });
      } else {
        // Router links do not emit instance `click` events, so we
        // add in an `$emit('click', event)` on its Vue instance
        //
        // seems not to be required for Vue3 compat build

        /* istanbul ignore next: difficult to test, but we know it works */
        if (isRouterLink) {
          var _event$currentTarget$;

          (_event$currentTarget$ = event.currentTarget.__vue__) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_13__.EVENT_NAME_CLICK, event);
        } // Call the suppliedHandler(s), if any provided


        (0,_utils_array__WEBPACK_IMPORTED_MODULE_14__.concat)(suppliedHandler).filter(function (h) {
          return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isFunction)(h);
        }).forEach(function (handler) {
          handler.apply(void 0, _toConsumableArray(_arguments));
        }); // Emit the global `$root` click event

        this.emitOnRoot(ROOT_EVENT_NAME_CLICKED, event); // TODO: Remove deprecated 'clicked::link' event with next major release

        this.emitOnRoot('clicked::link', event);
      } // Stop scroll-to-top behavior or navigation on
      // regular links when href is just '#'


      if (eventIsEvent && !isRouterLink && this.computedHref === '#') {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.stopEvent)(event, {
          propagation: false
        });
      }
    },
    focus: function focus() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.attemptFocus)(this.$el);
    },
    blur: function blur() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.attemptBlur)(this.$el);
    }
  },
  render: function render(h) {
    var active = this.active,
        disabled = this.disabled;
    return h(this.computedTag, _defineProperty({
      class: {
        active: active,
        disabled: disabled
      },
      attrs: this.computedAttrs,
      props: this.computedProps
    }, this.isRouterLink ? 'nativeOn' : 'on', this.computedListeners), this.normalizeSlot());
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/modal/helpers/bv-modal-event.class.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/modal/helpers/bv-modal-event.class.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BvModalEvent: () => (/* binding */ BvModalEvent)
/* harmony export */ });
/* harmony import */ var _utils_bv_event_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/bv-event.class */ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BvModalEvent = /*#__PURE__*/function (_BvEvent) {
  _inherits(BvModalEvent, _BvEvent);

  var _super = _createSuper(BvModalEvent);

  function BvModalEvent(type) {
    var _this;

    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvModalEvent);

    _this = _super.call(this, type, eventInit); // Freeze our new props as readonly, but leave them enumerable

    (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.defineProperties)(_assertThisInitialized(_this), {
      trigger: (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)()
    });
    return _this;
  }

  _createClass(BvModalEvent, null, [{
    key: "Defaults",
    get: function get() {
      return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(BvModalEvent), "Defaults", this)), {}, {
        trigger: null
      });
    }
  }]);

  return BvModalEvent;
}(_utils_bv_event_class__WEBPACK_IMPORTED_MODULE_1__.BvEvent); // Named exports




/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/modal/helpers/modal-manager.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/modal/helpers/modal-manager.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modalManager: () => (/* binding */ modalManager)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/**
 * Private ModalManager helper
 * Handles controlling modal stacking zIndexes and body adjustments/classes
 */




 // --- Constants ---
// Default modal backdrop z-index

var DEFAULT_ZINDEX = 1040; // Selectors for padding/margin adjustments

var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
var SELECTOR_NAVBAR_TOGGLER = '.navbar-toggler'; // --- Main component ---
// @vue/component

var ModalManager = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  data: function data() {
    return {
      modals: [],
      baseZIndex: null,
      scrollbarWidth: null,
      isBodyOverflowing: false
    };
  },
  computed: {
    modalCount: function modalCount() {
      return this.modals.length;
    },
    modalsAreOpen: function modalsAreOpen() {
      return this.modalCount > 0;
    }
  },
  watch: {
    modalCount: function modalCount(newCount, oldCount) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER) {
        this.getScrollbarWidth();

        if (newCount > 0 && oldCount === 0) {
          // Transitioning to modal(s) open
          this.checkScrollbar();
          this.setScrollbar();
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(document.body, 'modal-open');
        } else if (newCount === 0 && oldCount > 0) {
          // Transitioning to modal(s) closed
          this.resetScrollbar();
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(document.body, 'modal-open');
        }

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(document.body, 'data-modal-open-count', String(newCount));
      }
    },
    modals: function modals(newValue) {
      var _this = this;

      this.checkScrollbar();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.requestAF)(function () {
        _this.updateModals(newValue || []);
      });
    }
  },
  methods: {
    // Public methods
    registerModal: function registerModal(modal) {
      // Register the modal if not already registered
      if (modal && this.modals.indexOf(modal) === -1) {
        this.modals.push(modal);
      }
    },
    unregisterModal: function unregisterModal(modal) {
      var index = this.modals.indexOf(modal);

      if (index > -1) {
        // Remove modal from modals array
        this.modals.splice(index, 1); // Reset the modal's data

        if (!modal._isBeingDestroyed && !modal._isDestroyed) {
          this.resetModal(modal);
        }
      }
    },
    getBaseZIndex: function getBaseZIndex() {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_3__.isNull)(this.baseZIndex)) {
        // Create a temporary `div.modal-backdrop` to get computed z-index
        var div = document.createElement('div');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(div, 'modal-backdrop');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(div, 'd-none');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(div, 'display', 'none');
        document.body.appendChild(div);
        this.baseZIndex = (0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toInteger)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(div).zIndex, DEFAULT_ZINDEX);
        document.body.removeChild(div);
      }

      return this.baseZIndex || DEFAULT_ZINDEX;
    },
    getScrollbarWidth: function getScrollbarWidth() {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_3__.isNull)(this.scrollbarWidth)) {
        // Create a temporary `div.measure-scrollbar` to get computed z-index
        var div = document.createElement('div');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(div, 'modal-scrollbar-measure');
        document.body.appendChild(div);
        this.scrollbarWidth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getBCR)(div).width - div.clientWidth;
        document.body.removeChild(div);
      }

      return this.scrollbarWidth || 0;
    },
    // Private methods
    updateModals: function updateModals(modals) {
      var _this2 = this;

      var baseZIndex = this.getBaseZIndex();
      var scrollbarWidth = this.getScrollbarWidth();
      modals.forEach(function (modal, index) {
        // We update data values on each modal
        modal.zIndex = baseZIndex + index;
        modal.scrollbarWidth = scrollbarWidth;
        modal.isTop = index === _this2.modals.length - 1;
        modal.isBodyOverflowing = _this2.isBodyOverflowing;
      });
    },
    resetModal: function resetModal(modal) {
      if (modal) {
        modal.zIndex = this.getBaseZIndex();
        modal.isTop = true;
        modal.isBodyOverflowing = false;
      }
    },
    checkScrollbar: function checkScrollbar() {
      // Determine if the body element is overflowing
      var _getBCR = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getBCR)(document.body),
          left = _getBCR.left,
          right = _getBCR.right;

      this.isBodyOverflowing = left + right < window.innerWidth;
    },
    setScrollbar: function setScrollbar() {
      var body = document.body; // Storage place to cache changes to margins and padding
      // Note: This assumes the following element types are not added to the
      // document after the modal has opened.

      body._paddingChangedForModal = body._paddingChangedForModal || [];
      body._marginChangedForModal = body._marginChangedForModal || [];

      if (this.isBodyOverflowing) {
        var scrollbarWidth = this.scrollbarWidth; // Adjust fixed content padding

        /* istanbul ignore next: difficult to test in JSDOM */

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectAll)(SELECTOR_FIXED_CONTENT).forEach(function (el) {
          var actualPadding = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'paddingRight') || '';
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(el, 'data-padding-right', actualPadding);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'paddingRight', "".concat((0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toFloat)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(el).paddingRight, 0) + scrollbarWidth, "px"));

          body._paddingChangedForModal.push(el);
        }); // Adjust sticky content margin

        /* istanbul ignore next: difficult to test in JSDOM */

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectAll)(SELECTOR_STICKY_CONTENT).forEach(function (el)
        /* istanbul ignore next */
        {
          var actualMargin = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'marginRight') || '';
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(el, 'data-margin-right', actualMargin);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'marginRight', "".concat((0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toFloat)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(el).marginRight, 0) - scrollbarWidth, "px"));

          body._marginChangedForModal.push(el);
        }); // Adjust <b-navbar-toggler> margin

        /* istanbul ignore next: difficult to test in JSDOM */

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectAll)(SELECTOR_NAVBAR_TOGGLER).forEach(function (el)
        /* istanbul ignore next */
        {
          var actualMargin = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'marginRight') || '';
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(el, 'data-margin-right', actualMargin);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'marginRight', "".concat((0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toFloat)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(el).marginRight, 0) + scrollbarWidth, "px"));

          body._marginChangedForModal.push(el);
        }); // Adjust body padding

        var actualPadding = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(body, 'paddingRight') || '';
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(body, 'data-padding-right', actualPadding);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(body, 'paddingRight', "".concat((0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toFloat)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(body).paddingRight, 0) + scrollbarWidth, "px"));
      }
    },
    resetScrollbar: function resetScrollbar() {
      var body = document.body;

      if (body._paddingChangedForModal) {
        // Restore fixed content padding
        body._paddingChangedForModal.forEach(function (el) {
          /* istanbul ignore next: difficult to test in JSDOM */
          if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.hasAttr)(el, 'data-padding-right')) {
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'paddingRight', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, 'data-padding-right') || '');
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(el, 'data-padding-right');
          }
        });
      }

      if (body._marginChangedForModal) {
        // Restore sticky content and navbar-toggler margin
        body._marginChangedForModal.forEach(function (el) {
          /* istanbul ignore next: difficult to test in JSDOM */
          if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.hasAttr)(el, 'data-margin-right')) {
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'marginRight', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, 'data-margin-right') || '');
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(el, 'data-margin-right');
          }
        });
      }

      body._paddingChangedForModal = null;
      body._marginChangedForModal = null; // Restore body padding

      if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.hasAttr)(body, 'data-padding-right')) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(body, 'paddingRight', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getAttr)(body, 'data-padding-right') || '');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(body, 'data-padding-right');
      }
    }
  }
}); // Create and export our modal manager instance

var modalManager = new ModalManager();

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/modal/modal.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/modal/modal.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BModal: () => (/* binding */ BModal),
/* harmony export */   props: () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_key_codes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../constants/key-codes */ "./node_modules/bootstrap-vue/esm/constants/key-codes.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/esm/utils/html.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/model */ "./node_modules/bootstrap-vue/esm/utils/model.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_observe_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/observe-dom */ "./node_modules/bootstrap-vue/esm/utils/observe-dom.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_attrs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../mixins/attrs */ "./node_modules/bootstrap-vue/esm/mixins/attrs.js");
/* harmony import */ var _mixins_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/esm/mixins/id.js");
/* harmony import */ var _mixins_listen_on_document__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../mixins/listen-on-document */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-document.js");
/* harmony import */ var _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js");
/* harmony import */ var _mixins_listen_on_window__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/listen-on-window */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-window.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
/* harmony import */ var _mixins_scoped_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../mixins/scoped-style */ "./node_modules/bootstrap-vue/esm/mixins/scoped-style.js");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../button/button */ "./node_modules/bootstrap-vue/esm/components/button/button.js");
/* harmony import */ var _button_button_close__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../button/button-close */ "./node_modules/bootstrap-vue/esm/components/button/button-close.js");
/* harmony import */ var _transition_bv_transition__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../transition/bv-transition */ "./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js");
/* harmony import */ var _transporter_transporter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../transporter/transporter */ "./node_modules/bootstrap-vue/esm/components/transporter/transporter.js");
/* harmony import */ var _helpers_bv_modal_event_class__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/bv-modal-event.class */ "./node_modules/bootstrap-vue/esm/components/modal/helpers/bv-modal-event.class.js");
/* harmony import */ var _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/modal-manager */ "./node_modules/bootstrap-vue/esm/components/modal/helpers/modal-manager.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































 // --- Constants ---

var _makeModelMixin = (0,_utils_model__WEBPACK_IMPORTED_MODULE_0__.makeModelMixin)('visible', {
  type: _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN,
  defaultValue: false,
  event: _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_CHANGE
}),
    modelMixin = _makeModelMixin.mixin,
    modelProps = _makeModelMixin.props,
    MODEL_PROP_NAME = _makeModelMixin.prop,
    MODEL_EVENT_NAME = _makeModelMixin.event;

var TRIGGER_BACKDROP = 'backdrop';
var TRIGGER_ESC = 'esc';
var TRIGGER_FORCE = 'FORCE';
var TRIGGER_TOGGLE = 'toggle';
var BUTTON_CANCEL = 'cancel'; // TODO: This should be renamed to 'close'

var BUTTON_CLOSE = 'headerclose';
var BUTTON_OK = 'ok';
var BUTTONS = [BUTTON_CANCEL, BUTTON_CLOSE, BUTTON_OK]; // `ObserveDom` config to detect changes in modal content
// so that we can adjust the modal padding if needed

var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['style', 'class']
}; // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.sortKeys)(_objectSpread(_objectSpread(_objectSpread({}, _mixins_id__WEBPACK_IMPORTED_MODULE_5__.props), modelProps), {}, {
  ariaLabel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  autoFocusButton: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, null,
  /* istanbul ignore next */
  function (value) {
    return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_6__.isUndefinedOrNull)(value) || (0,_utils_array__WEBPACK_IMPORTED_MODULE_7__.arrayIncludes)(BUTTONS, value);
  }),
  bodyBgVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  bodyClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  bodyTextVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  busy: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  buttonSize: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  cancelDisabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  cancelTitle: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Cancel'),
  cancelTitleHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  cancelVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'secondary'),
  centered: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  contentClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  dialogClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  footerBgVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  footerBorderVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  footerClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  footerTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'footer'),
  footerTextVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  headerBgVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  headerBorderVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  headerClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  headerCloseContent: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, '&times;'),
  headerCloseLabel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Close'),
  headerCloseVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  headerTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'header'),
  headerTextVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  // TODO: Rename to `noBackdrop` and deprecate `hideBackdrop`
  hideBackdrop: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noFooter` and deprecate `hideFooter`
  hideFooter: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noHeader` and deprecate `hideHeader`
  hideHeader: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noHeaderClose` and deprecate `hideHeaderClose`
  hideHeaderClose: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  ignoreEnforceFocusSelector: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_STRING),
  lazy: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  modalClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  noCloseOnBackdrop: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  noCloseOnEsc: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  noEnforceFocus: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  noFade: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  noStacking: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  okDisabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  okOnly: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  okTitle: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'OK'),
  okTitleHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  okVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'primary'),
  // HTML Element, CSS selector string or Vue component instance
  returnFocus: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)([_constants_safe_types__WEBPACK_IMPORTED_MODULE_8__.HTMLElement, _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_OBJECT, _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING]),
  scrollable: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  size: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'md'),
  static: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  title: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  titleClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  titleHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  titleSrOnly: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  titleTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'h5')
})), _constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL); // --- Main component ---
// @vue/component

var BModal = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_10__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL,
  mixins: [_mixins_attrs__WEBPACK_IMPORTED_MODULE_11__.attrsMixin, _mixins_id__WEBPACK_IMPORTED_MODULE_5__.idMixin, modelMixin, _mixins_listen_on_document__WEBPACK_IMPORTED_MODULE_12__.listenOnDocumentMixin, _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_13__.listenOnRootMixin, _mixins_listen_on_window__WEBPACK_IMPORTED_MODULE_14__.listenOnWindowMixin, _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_15__.normalizeSlotMixin, _mixins_scoped_style__WEBPACK_IMPORTED_MODULE_16__.scopedStyleMixin],
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      isHidden: true,
      // If modal should not be in document
      isVisible: false,
      // Controls modal visible state
      isTransitioning: false,
      // Used for style control
      isShow: false,
      // Used for style control
      isBlock: false,
      // Used for style control
      isOpening: false,
      // To signal that the modal is in the process of opening
      isClosing: false,
      // To signal that the modal is in the process of closing
      ignoreBackdropClick: false,
      // Used to signify if click out listener should ignore the click
      isModalOverflowing: false,
      // The following items are controlled by the modalManager instance
      scrollbarWidth: 0,
      zIndex: _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.getBaseZIndex(),
      isTop: true,
      isBodyOverflowing: false
    };
  },
  computed: {
    modalId: function modalId() {
      return this.safeId();
    },
    modalOuterId: function modalOuterId() {
      return this.safeId('__BV_modal_outer_');
    },
    modalHeaderId: function modalHeaderId() {
      return this.safeId('__BV_modal_header_');
    },
    modalBodyId: function modalBodyId() {
      return this.safeId('__BV_modal_body_');
    },
    modalTitleId: function modalTitleId() {
      return this.safeId('__BV_modal_title_');
    },
    modalContentId: function modalContentId() {
      return this.safeId('__BV_modal_content_');
    },
    modalFooterId: function modalFooterId() {
      return this.safeId('__BV_modal_footer_');
    },
    modalBackdropId: function modalBackdropId() {
      return this.safeId('__BV_modal_backdrop_');
    },
    modalClasses: function modalClasses() {
      return [{
        fade: !this.noFade,
        show: this.isShow
      }, this.modalClass];
    },
    modalStyles: function modalStyles() {
      var sbWidth = "".concat(this.scrollbarWidth, "px");
      return {
        paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? sbWidth : '',
        paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? sbWidth : '',
        // Needed to fix issue https://github.com/bootstrap-vue/bootstrap-vue/issues/3457
        // Even though we are using v-show, we must ensure 'none' is restored in the styles
        display: this.isBlock ? 'block' : 'none'
      };
    },
    dialogClasses: function dialogClasses() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, "modal-".concat(this.size), this.size), _defineProperty(_ref, 'modal-dialog-centered', this.centered), _defineProperty(_ref, 'modal-dialog-scrollable', this.scrollable), _ref), this.dialogClass];
    },
    headerClasses: function headerClasses() {
      var _ref2;

      return [(_ref2 = {}, _defineProperty(_ref2, "bg-".concat(this.headerBgVariant), this.headerBgVariant), _defineProperty(_ref2, "text-".concat(this.headerTextVariant), this.headerTextVariant), _defineProperty(_ref2, "border-".concat(this.headerBorderVariant), this.headerBorderVariant), _ref2), this.headerClass];
    },
    titleClasses: function titleClasses() {
      return [{
        'sr-only': this.titleSrOnly
      }, this.titleClass];
    },
    bodyClasses: function bodyClasses() {
      var _ref3;

      return [(_ref3 = {}, _defineProperty(_ref3, "bg-".concat(this.bodyBgVariant), this.bodyBgVariant), _defineProperty(_ref3, "text-".concat(this.bodyTextVariant), this.bodyTextVariant), _ref3), this.bodyClass];
    },
    footerClasses: function footerClasses() {
      var _ref4;

      return [(_ref4 = {}, _defineProperty(_ref4, "bg-".concat(this.footerBgVariant), this.footerBgVariant), _defineProperty(_ref4, "text-".concat(this.footerTextVariant), this.footerTextVariant), _defineProperty(_ref4, "border-".concat(this.footerBorderVariant), this.footerBorderVariant), _ref4), this.footerClass];
    },
    modalOuterStyle: function modalOuterStyle() {
      // Styles needed for proper stacking of modals
      return {
        position: 'absolute',
        zIndex: this.zIndex
      };
    },
    slotScope: function slotScope() {
      return {
        cancel: this.onCancel,
        close: this.onClose,
        hide: this.hide,
        ok: this.onOk,
        visible: this.isVisible
      };
    },
    computeIgnoreEnforceFocusSelector: function computeIgnoreEnforceFocusSelector() {
      // Normalize to an single selector with selectors separated by `,`
      return (0,_utils_array__WEBPACK_IMPORTED_MODULE_7__.concat)(this.ignoreEnforceFocusSelector).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_18__.identity).join(',').trim();
    },
    computedAttrs: function computedAttrs() {
      // If the parent has a scoped style attribute, and the modal
      // is portalled, add the scoped attribute to the modal wrapper
      var scopedStyleAttrs = !this.static ? this.scopedStyleAttrs : {};
      return _objectSpread(_objectSpread(_objectSpread({}, scopedStyleAttrs), this.bvAttrs), {}, {
        id: this.modalOuterId
      });
    },
    computedModalAttrs: function computedModalAttrs() {
      var isVisible = this.isVisible,
          ariaLabel = this.ariaLabel;
      return {
        id: this.modalId,
        role: 'dialog',
        'aria-hidden': isVisible ? null : 'true',
        'aria-modal': isVisible ? 'true' : null,
        'aria-label': ariaLabel,
        'aria-labelledby': this.hideHeader || ariaLabel || // TODO: Rename slot to `title` and deprecate `modal-title`
        !(this.hasNormalizedSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_TITLE) || this.titleHtml || this.title) ? null : this.modalTitleId,
        'aria-describedby': this.modalBodyId
      };
    }
  },
  watch: _defineProperty({}, MODEL_PROP_NAME, function (newValue, oldValue) {
    if (newValue !== oldValue) {
      this[newValue ? 'show' : 'hide']();
    }
  }),
  created: function created() {
    // Define non-reactive properties
    this.$_observer = null;
    this.$_returnFocus = this.returnFocus || null;
  },
  mounted: function mounted() {
    // Set initial z-index as queried from the DOM
    this.zIndex = _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.getBaseZIndex(); // Listen for events from others to either open or close ourselves
    // and listen to all modals to enable/disable enforce focus

    this.listenOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootActionEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOW), this.showHandler);
    this.listenOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootActionEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDE), this.hideHandler);
    this.listenOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootActionEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_TOGGLE), this.toggleHandler); // Listen for `bv:modal::show events`, and close ourselves if the
    // opening modal not us

    this.listenOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOW), this.modalListener); // Initially show modal?

    if (this[MODEL_PROP_NAME] === true) {
      this.$nextTick(this.show);
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Ensure everything is back to normal
    _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.unregisterModal(this);
    this.setObserver(false);

    if (this.isVisible) {
      this.isVisible = false;
      this.isShow = false;
      this.isTransitioning = false;
    }
  },
  methods: {
    setObserver: function setObserver() {
      var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$_observer && this.$_observer.disconnect();
      this.$_observer = null;

      if (on) {
        this.$_observer = (0,_utils_observe_dom__WEBPACK_IMPORTED_MODULE_21__.observeDom)(this.$refs.content, this.checkModalOverflow.bind(this), OBSERVER_CONFIG);
      }
    },
    // Private method to update the v-model
    updateModel: function updateModel(value) {
      if (value !== this[MODEL_PROP_NAME]) {
        this.$emit(MODEL_EVENT_NAME, value);
      }
    },
    // Private method to create a BvModalEvent object
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _helpers_bv_modal_event_class__WEBPACK_IMPORTED_MODULE_22__.BvModalEvent(type, _objectSpread(_objectSpread({
        // Default options
        cancelable: false,
        target: this.$refs.modal || this.$el || null,
        relatedTarget: null,
        trigger: null
      }, options), {}, {
        // Options that can't be overridden
        vueTarget: this,
        componentId: this.modalId
      }));
    },
    // Public method to show modal
    show: function show() {
      if (this.isVisible || this.isOpening) {
        // If already open, or in the process of opening, do nothing

        /* istanbul ignore next */
        return;
      }
      /* istanbul ignore next */


      if (this.isClosing) {
        // If we are in the process of closing, wait until hidden before re-opening

        /* istanbul ignore next */
        this.$once(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDDEN, this.show);
        /* istanbul ignore next */

        return;
      }

      this.isOpening = true; // Set the element to return focus to when closed

      this.$_returnFocus = this.$_returnFocus || this.getActiveElement();
      var showEvent = this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOW, {
        cancelable: true
      });
      this.emitEvent(showEvent); // Don't show if canceled

      if (showEvent.defaultPrevented || this.isVisible) {
        this.isOpening = false; // Ensure the v-model reflects the current state

        this.updateModel(false);
        return;
      } // Show the modal


      this.doShow();
    },
    // Public method to hide modal
    hide: function hide() {
      var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!this.isVisible || this.isClosing) {
        /* istanbul ignore next */
        return;
      }

      this.isClosing = true;
      var hideEvent = this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDE, {
        cancelable: trigger !== TRIGGER_FORCE,
        trigger: trigger || null
      }); // We emit specific event for one of the three built-in buttons

      if (trigger === BUTTON_OK) {
        this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_OK, hideEvent);
      } else if (trigger === BUTTON_CANCEL) {
        this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_CANCEL, hideEvent);
      } else if (trigger === BUTTON_CLOSE) {
        this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_CLOSE, hideEvent);
      }

      this.emitEvent(hideEvent); // Hide if not canceled

      if (hideEvent.defaultPrevented || !this.isVisible) {
        this.isClosing = false; // Ensure v-model reflects current state

        this.updateModel(true);
        return;
      } // Stop observing for content changes


      this.setObserver(false); // Trigger the hide transition

      this.isVisible = false; // Update the v-model

      this.updateModel(false);
    },
    // Public method to toggle modal visibility
    toggle: function toggle(triggerEl) {
      if (triggerEl) {
        this.$_returnFocus = triggerEl;
      }

      if (this.isVisible) {
        this.hide(TRIGGER_TOGGLE);
      } else {
        this.show();
      }
    },
    // Private method to get the current document active element
    getActiveElement: function getActiveElement() {
      // Returning focus to `document.body` may cause unwanted scrolls,
      // so we exclude setting focus on body
      var activeElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.getActiveElement)(_constants_env__WEBPACK_IMPORTED_MODULE_24__.IS_BROWSER ? [document.body] : []); // Preset the fallback return focus value if it is not set
      // `document.activeElement` should be the trigger element that was clicked or
      // in the case of using the v-model, which ever element has current focus
      // Will be overridden by some commands such as toggle, etc.
      // Note: On IE 11, `document.activeElement` may be `null`
      // So we test it for truthiness first
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/3206


      return activeElement && activeElement.focus ? activeElement : null;
    },
    // Private method to finish showing modal
    doShow: function doShow() {
      var _this = this;

      /* istanbul ignore next: commenting out for now until we can test stacking */
      if (_helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.modalsAreOpen && this.noStacking) {
        // If another modal(s) is already open, wait for it(them) to close
        this.listenOnRootOnce((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDDEN), this.doShow);
        return;
      }

      _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.registerModal(this); // Place modal in DOM

      this.isHidden = false;
      this.$nextTick(function () {
        // We do this in `$nextTick()` to ensure the modal is in DOM first
        // before we show it
        _this.isVisible = true;
        _this.isOpening = false; // Update the v-model

        _this.updateModel(true);

        _this.$nextTick(function () {
          // Observe changes in modal content and adjust if necessary
          // In a `$nextTick()` in case modal content is lazy
          _this.setObserver(true);
        });
      });
    },
    // Transition handlers
    onBeforeEnter: function onBeforeEnter() {
      this.isTransitioning = true;
      this.setResizeEvent(true);
    },
    onEnter: function onEnter() {
      var _this2 = this;

      this.isBlock = true; // We add the `show` class 1 frame later
      // `requestAF()` runs the callback before the next repaint, so we need
      // two calls to guarantee the next frame has been rendered

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.requestAF)(function () {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.requestAF)(function () {
          _this2.isShow = true;
        });
      });
    },
    onAfterEnter: function onAfterEnter() {
      var _this3 = this;

      this.checkModalOverflow();
      this.isTransitioning = false; // We use `requestAF()` to allow transition hooks to complete
      // before passing control over to the other handlers
      // This will allow users to not have to use `$nextTick()` or `requestAF()`
      // when trying to pre-focus an element

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.requestAF)(function () {
        _this3.emitEvent(_this3.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOWN));

        _this3.setEnforceFocus(true);

        _this3.$nextTick(function () {
          // Delayed in a `$nextTick()` to allow users time to pre-focus
          // an element if the wish
          _this3.focusFirst();
        });
      });
    },
    onBeforeLeave: function onBeforeLeave() {
      this.isTransitioning = true;
      this.setResizeEvent(false);
      this.setEnforceFocus(false);
    },
    onLeave: function onLeave() {
      // Remove the 'show' class
      this.isShow = false;
    },
    onAfterLeave: function onAfterLeave() {
      var _this4 = this;

      this.isBlock = false;
      this.isTransitioning = false;
      this.isModalOverflowing = false;
      this.isHidden = true;
      this.$nextTick(function () {
        _this4.isClosing = false;
        _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.unregisterModal(_this4);

        _this4.returnFocusTo(); // TODO: Need to find a way to pass the `trigger` property
        //       to the `hidden` event, not just only the `hide` event


        _this4.emitEvent(_this4.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDDEN));
      });
    },
    emitEvent: function emitEvent(bvEvent) {
      var type = bvEvent.type; // We emit on `$root` first in case a global listener wants to cancel
      // the event first before the instance emits its event

      this.emitOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, type), bvEvent, bvEvent.componentId);
      this.$emit(type, bvEvent);
    },
    // UI event handlers
    onDialogMousedown: function onDialogMousedown() {
      var _this5 = this;

      // Watch to see if the matching mouseup event occurs outside the dialog
      // And if it does, cancel the clickOut handler
      var modal = this.$refs.modal;

      var onceModalMouseup = function onceModalMouseup(event) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.eventOff)(modal, 'mouseup', onceModalMouseup, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_NO_CAPTURE);

        if (event.target === modal) {
          _this5.ignoreBackdropClick = true;
        }
      };

      (0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.eventOn)(modal, 'mouseup', onceModalMouseup, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_NO_CAPTURE);
    },
    onClickOut: function onClickOut(event) {
      if (this.ignoreBackdropClick) {
        // Click was initiated inside the modal content, but finished outside.
        // Set by the above onDialogMousedown handler
        this.ignoreBackdropClick = false;
        return;
      } // Do nothing if not visible, backdrop click disabled, or element
      // that generated click event is no longer in document body


      if (!this.isVisible || this.noCloseOnBackdrop || !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.contains)(document.body, event.target)) {
        return;
      } // If backdrop clicked, hide modal


      if (!(0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.contains)(this.$refs.content, event.target)) {
        this.hide(TRIGGER_BACKDROP);
      }
    },
    onOk: function onOk() {
      this.hide(BUTTON_OK);
    },
    onCancel: function onCancel() {
      this.hide(BUTTON_CANCEL);
    },
    onClose: function onClose() {
      this.hide(BUTTON_CLOSE);
    },
    onEsc: function onEsc(event) {
      // If ESC pressed, hide modal
      if (event.keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_25__.CODE_ESC && this.isVisible && !this.noCloseOnEsc) {
        this.hide(TRIGGER_ESC);
      }
    },
    // Document focusin listener
    focusHandler: function focusHandler(event) {
      // If focus leaves modal content, bring it back
      var content = this.$refs.content;
      var target = event.target;

      if (this.noEnforceFocus || !this.isTop || !this.isVisible || !content || document === target || (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.contains)(content, target) || this.computeIgnoreEnforceFocusSelector && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.closest)(this.computeIgnoreEnforceFocusSelector, target, true)) {
        return;
      }

      var tabables = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.getTabables)(this.$refs.content);
      var bottomTrap = this.$refs['bottom-trap'];
      var topTrap = this.$refs['top-trap'];

      if (bottomTrap && target === bottomTrap) {
        // If user pressed TAB out of modal into our bottom trab trap element
        // Find the first tabable element in the modal content and focus it
        if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(tabables[0])) {
          // Focus was successful
          return;
        }
      } else if (topTrap && target === topTrap) {
        // If user pressed CTRL-TAB out of modal and into our top tab trap element
        // Find the last tabable element in the modal content and focus it
        if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(tabables[tabables.length - 1])) {
          // Focus was successful
          return;
        }
      } // Otherwise focus the modal content container


      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(content, {
        preventScroll: true
      });
    },
    // Turn on/off focusin listener
    setEnforceFocus: function setEnforceFocus(on) {
      this.listenDocument(on, 'focusin', this.focusHandler);
    },
    // Resize listener
    setResizeEvent: function setResizeEvent(on) {
      this.listenWindow(on, 'resize', this.checkModalOverflow);
      this.listenWindow(on, 'orientationchange', this.checkModalOverflow);
    },
    // Root listener handlers
    showHandler: function showHandler(id, triggerEl) {
      if (id === this.modalId) {
        this.$_returnFocus = triggerEl || this.getActiveElement();
        this.show();
      }
    },
    hideHandler: function hideHandler(id) {
      if (id === this.modalId) {
        this.hide('event');
      }
    },
    toggleHandler: function toggleHandler(id, triggerEl) {
      if (id === this.modalId) {
        this.toggle(triggerEl);
      }
    },
    modalListener: function modalListener(bvEvent) {
      // If another modal opens, close this one if stacking not permitted
      if (this.noStacking && bvEvent.vueTarget !== this) {
        this.hide();
      }
    },
    // Focus control handlers
    focusFirst: function focusFirst() {
      var _this6 = this;

      // Don't try and focus if we are SSR
      if (_constants_env__WEBPACK_IMPORTED_MODULE_24__.IS_BROWSER) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.requestAF)(function () {
          var modal = _this6.$refs.modal;
          var content = _this6.$refs.content;

          var activeElement = _this6.getActiveElement(); // If the modal contains the activeElement, we don't do anything


          if (modal && content && !(activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.contains)(content, activeElement))) {
            var ok = _this6.$refs['ok-button'];
            var cancel = _this6.$refs['cancel-button'];
            var close = _this6.$refs['close-button']; // Focus the appropriate button or modal content wrapper

            var autoFocus = _this6.autoFocusButton;
            /* istanbul ignore next */

            var el = autoFocus === BUTTON_OK && ok ? ok.$el || ok : autoFocus === BUTTON_CANCEL && cancel ? cancel.$el || cancel : autoFocus === BUTTON_CLOSE && close ? close.$el || close : content; // Focus the element

            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(el);

            if (el === content) {
              // Make sure top of modal is showing (if longer than the viewport)
              _this6.$nextTick(function () {
                modal.scrollTop = 0;
              });
            }
          }
        });
      }
    },
    returnFocusTo: function returnFocusTo() {
      // Prefer `returnFocus` prop over event specified
      // `return_focus` value
      var el = this.returnFocus || this.$_returnFocus || null;
      this.$_returnFocus = null;
      this.$nextTick(function () {
        // Is el a string CSS selector?
        el = (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_6__.isString)(el) ? (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.select)(el) : el;

        if (el) {
          // Possibly could be a component reference
          el = el.$el || el;
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(el);
        }
      });
    },
    checkModalOverflow: function checkModalOverflow() {
      if (this.isVisible) {
        var modal = this.$refs.modal;
        this.isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;
      }
    },
    makeModal: function makeModal(h) {
      // Modal header
      var $header = h();

      if (!this.hideHeader) {
        // TODO: Rename slot to `header` and deprecate `modal-header`
        var $modalHeader = this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_HEADER, this.slotScope);

        if (!$modalHeader) {
          var $closeButton = h();

          if (!this.hideHeaderClose) {
            $closeButton = h(_button_button_close__WEBPACK_IMPORTED_MODULE_26__.BButtonClose, {
              props: {
                content: this.headerCloseContent,
                disabled: this.isTransitioning,
                ariaLabel: this.headerCloseLabel,
                textVariant: this.headerCloseVariant || this.headerTextVariant
              },
              on: {
                click: this.onClose
              },
              ref: 'close-button'
            }, // TODO: Rename slot to `header-close` and deprecate `modal-header-close`
            [this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_HEADER_CLOSE)]);
          }

          $modalHeader = [h(this.titleTag, {
            staticClass: 'modal-title',
            class: this.titleClasses,
            attrs: {
              id: this.modalTitleId
            },
            // TODO: Rename slot to `title` and deprecate `modal-title`
            domProps: this.hasNormalizedSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_TITLE) ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_27__.htmlOrText)(this.titleHtml, this.title)
          }, // TODO: Rename slot to `title` and deprecate `modal-title`
          this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_TITLE, this.slotScope)), $closeButton];
        }

        $header = h(this.headerTag, {
          staticClass: 'modal-header',
          class: this.headerClasses,
          attrs: {
            id: this.modalHeaderId
          },
          ref: 'header'
        }, [$modalHeader]);
      } // Modal body


      var $body = h('div', {
        staticClass: 'modal-body',
        class: this.bodyClasses,
        attrs: {
          id: this.modalBodyId
        },
        ref: 'body'
      }, this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_DEFAULT, this.slotScope)); // Modal footer

      var $footer = h();

      if (!this.hideFooter) {
        // TODO: Rename slot to `footer` and deprecate `modal-footer`
        var $modalFooter = this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_FOOTER, this.slotScope);

        if (!$modalFooter) {
          var $cancelButton = h();

          if (!this.okOnly) {
            $cancelButton = h(_button_button__WEBPACK_IMPORTED_MODULE_28__.BButton, {
              props: {
                variant: this.cancelVariant,
                size: this.buttonSize,
                disabled: this.cancelDisabled || this.busy || this.isTransitioning
              },
              // TODO: Rename slot to `cancel-button` and deprecate `modal-cancel`
              domProps: this.hasNormalizedSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_CANCEL) ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_27__.htmlOrText)(this.cancelTitleHtml, this.cancelTitle),
              on: {
                click: this.onCancel
              },
              ref: 'cancel-button'
            }, // TODO: Rename slot to `cancel-button` and deprecate `modal-cancel`
            this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_CANCEL));
          }

          var $okButton = h(_button_button__WEBPACK_IMPORTED_MODULE_28__.BButton, {
            props: {
              variant: this.okVariant,
              size: this.buttonSize,
              disabled: this.okDisabled || this.busy || this.isTransitioning
            },
            // TODO: Rename slot to `ok-button` and deprecate `modal-ok`
            domProps: this.hasNormalizedSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_OK) ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_27__.htmlOrText)(this.okTitleHtml, this.okTitle),
            on: {
              click: this.onOk
            },
            ref: 'ok-button'
          }, // TODO: Rename slot to `ok-button` and deprecate `modal-ok`
          this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_OK));
          $modalFooter = [$cancelButton, $okButton];
        }

        $footer = h(this.footerTag, {
          staticClass: 'modal-footer',
          class: this.footerClasses,
          attrs: {
            id: this.modalFooterId
          },
          ref: 'footer'
        }, [$modalFooter]);
      } // Assemble modal content


      var $modalContent = h('div', {
        staticClass: 'modal-content',
        class: this.contentClass,
        attrs: {
          id: this.modalContentId,
          tabindex: '-1'
        },
        ref: 'content'
      }, [$header, $body, $footer]); // Tab traps to prevent page from scrolling to next element in
      // tab index during enforce-focus tab cycle

      var $tabTrapTop = h();
      var $tabTrapBottom = h();

      if (this.isVisible && !this.noEnforceFocus) {
        $tabTrapTop = h('span', {
          attrs: {
            tabindex: '0'
          },
          ref: 'top-trap'
        });
        $tabTrapBottom = h('span', {
          attrs: {
            tabindex: '0'
          },
          ref: 'bottom-trap'
        });
      } // Modal dialog wrapper


      var $modalDialog = h('div', {
        staticClass: 'modal-dialog',
        class: this.dialogClasses,
        on: {
          mousedown: this.onDialogMousedown
        },
        ref: 'dialog'
      }, [$tabTrapTop, $modalContent, $tabTrapBottom]); // Modal

      var $modal = h('div', {
        staticClass: 'modal',
        class: this.modalClasses,
        style: this.modalStyles,
        attrs: this.computedModalAttrs,
        on: {
          keydown: this.onEsc,
          click: this.onClickOut
        },
        directives: [{
          name: 'show',
          value: this.isVisible
        }],
        ref: 'modal'
      }, [$modalDialog]); // Wrap modal in transition
      // Sadly, we can't use `BVTransition` here due to the differences in
      // transition durations for `.modal` and `.modal-dialog`
      // At least until https://github.com/vuejs/vue/issues/9986 is resolved

      $modal = h('transition', {
        props: {
          enterClass: '',
          enterToClass: '',
          enterActiveClass: '',
          leaveClass: '',
          leaveActiveClass: '',
          leaveToClass: ''
        },
        on: {
          beforeEnter: this.onBeforeEnter,
          enter: this.onEnter,
          afterEnter: this.onAfterEnter,
          beforeLeave: this.onBeforeLeave,
          leave: this.onLeave,
          afterLeave: this.onAfterLeave
        }
      }, [$modal]); // Modal backdrop

      var $backdrop = h();

      if (!this.hideBackdrop && this.isVisible) {
        $backdrop = h('div', {
          staticClass: 'modal-backdrop',
          attrs: {
            id: this.modalBackdropId
          }
        }, // TODO: Rename slot to `backdrop` and deprecate `modal-backdrop`
        this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_BACKDROP));
      }

      $backdrop = h(_transition_bv_transition__WEBPACK_IMPORTED_MODULE_29__.BVTransition, {
        props: {
          noFade: this.noFade
        }
      }, [$backdrop]); // Assemble modal and backdrop in an outer <div>

      return h('div', {
        style: this.modalOuterStyle,
        attrs: this.computedAttrs,
        key: "modal-outer-".concat(this[_vue__WEBPACK_IMPORTED_MODULE_10__.COMPONENT_UID_KEY])
      }, [$modal, $backdrop]);
    }
  },
  render: function render(h) {
    if (this.static) {
      return this.lazy && this.isHidden ? h() : this.makeModal(h);
    } else {
      return this.isHidden ? h() : h(_transporter_transporter__WEBPACK_IMPORTED_MODULE_30__.BVTransporter, [this.makeModal(h)]);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BVTransition: () => (/* binding */ BVTransition),
/* harmony export */   props: () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Generic Bootstrap v4 fade (no-fade) transition component
//
// Assumes that `show` class is not required when
// the transition has finished the enter transition
// (show and fade classes are only applied during transition)




 // --- Constants ---

var NO_FADE_PROPS = {
  name: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: 'show',
  leaveClass: 'show',
  leaveActiveClass: '',
  leaveToClass: ''
};

var FADE_PROPS = _objectSpread(_objectSpread({}, NO_FADE_PROPS), {}, {
  enterActiveClass: 'fade',
  leaveActiveClass: 'fade'
}); // --- Props ---


var props = {
  // Has no effect if `trans-props` provided
  appear: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // Can be overridden by user supplied `trans-props`
  mode: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  // Only applicable to the built in transition
  // Has no effect if `trans-props` provided
  noFade: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // For user supplied transitions (if needed)
  transProps: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_OBJECT)
}; // --- Main component ---
// @vue/component

var BVTransition = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_2__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_3__.NAME_TRANSITION,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;
    var transProps = props.transProps;

    if (!(0,_utils_inspect__WEBPACK_IMPORTED_MODULE_4__.isPlainObject)(transProps)) {
      transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;

      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps = _objectSpread(_objectSpread({}, transProps), {}, {
          appear: true,
          appearClass: transProps.enterClass,
          appearActiveClass: transProps.enterActiveClass,
          appearToClass: transProps.enterToClass
        });
      }
    }

    transProps = _objectSpread(_objectSpread({
      mode: props.mode
    }, transProps), {}, {
      // We always need `css` true
      css: true
    });

    var dataCopy = _objectSpread({}, data);

    delete dataCopy.props;
    return h('transition', // Any transition event listeners will get merged here
    (0,_vue__WEBPACK_IMPORTED_MODULE_5__.mergeData)(dataCopy, {
      props: transProps
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/transporter/transporter.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/transporter/transporter.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BVTransporter: () => (/* binding */ BVTransporter),
/* harmony export */   props: () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_create_new_child_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/create-new-child-component */ "./node_modules/bootstrap-vue/esm/utils/create-new-child-component.js");











 // --- Helper components ---
// BVTransporter/BVTransporterTarget:
//
// Single root node portaling of content, which retains parent/child hierarchy
// Unlike Portal-Vue where portaled content is no longer a descendent of its
// intended parent components
//
// Private components for use by Tooltips, Popovers and Modals
//
// Based on vue-simple-portal
// https://github.com/LinusBorg/vue-simple-portal
// Transporter target used by BVTransporter
// Supports only a single root element
// @vue/component

var BVTransporterTarget = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  // As an abstract component, it doesn't appear in the $parent chain of
  // components, which means the next parent of any component rendered inside
  // of this one will be the parent from which is was portal'd
  abstract: true,
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_TRANSPORTER_TARGET,
  props: {
    // Even though we only support a single root element,
    // VNodes are always passed as an array
    nodes: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_FUNCTION)
  },
  data: function data(vm) {
    return {
      updatedNodes: vm.nodes
    };
  },
  destroyed: function destroyed() {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.removeNode)(this.$el);
  },
  render: function render(h) {
    var updatedNodes = this.updatedNodes;
    var $nodes = (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_5__.isFunction)(updatedNodes) ? updatedNodes({}) : updatedNodes;
    $nodes = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)($nodes).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity);

    if ($nodes && $nodes.length > 0 && !$nodes[0].text) {
      return $nodes[0];
    }
    /* istanbul ignore next */


    return h();
  }
}); // --- Props ---

var props = {
  // String: CSS selector,
  // HTMLElement: Element reference
  // Mainly needed for tooltips/popovers inside modals
  container: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)([_constants_safe_types__WEBPACK_IMPORTED_MODULE_8__.HTMLElement, _constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING], 'body'),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  // This should be set to match the root element type
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'div')
}; // --- Main component ---
// @vue/component

var BVTransporterVue2 = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_TRANSPORTER,
  mixins: [_mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__.normalizeSlotMixin],
  props: props,
  watch: {
    disabled: {
      immediate: true,
      handler: function handler(disabled) {
        disabled ? this.unmountTarget() : this.$nextTick(this.mountTarget);
      }
    }
  },
  created: function created() {
    // Create private non-reactive props
    this.$_defaultFn = null;
    this.$_target = null;
  },
  beforeMount: function beforeMount() {
    this.mountTarget();
  },
  updated: function updated() {
    // We need to make sure that all children have completed updating
    // before rendering in the target
    // `vue-simple-portal` has the this in a `$nextTick()`,
    // while `portal-vue` doesn't
    // Just trying to see if the `$nextTick()` delay is required or not
    // Since all slots in Vue 2.6.x are always functions
    this.updateTarget();
  },
  beforeDestroy: function beforeDestroy() {
    this.unmountTarget();
    this.$_defaultFn = null;
  },
  methods: {
    // Get the element which the target should be appended to
    getContainer: function getContainer() {
      /* istanbul ignore else */
      if (_constants_env__WEBPACK_IMPORTED_MODULE_10__.IS_BROWSER) {
        var container = this.container;
        return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_5__.isString)(container) ? (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.select)(container) : container;
      } else {
        return null;
      }
    },
    // Mount the target
    mountTarget: function mountTarget() {
      if (!this.$_target) {
        var $container = this.getContainer();

        if ($container) {
          var $el = document.createElement('div');
          $container.appendChild($el);
          this.$_target = (0,_utils_create_new_child_component__WEBPACK_IMPORTED_MODULE_11__.createNewChildComponent)(this, BVTransporterTarget, {
            el: $el,
            propsData: {
              // Initial nodes to be rendered
              nodes: (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(this.normalizeSlot())
            }
          });
        }
      }
    },
    // Update the content of the target
    updateTarget: function updateTarget() {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_10__.IS_BROWSER && this.$_target) {
        var defaultFn = this.$scopedSlots.default;

        if (!this.disabled) {
          /* istanbul ignore else: only applicable in Vue 2.5.x */
          if (defaultFn && this.$_defaultFn !== defaultFn) {
            // We only update the target component if the scoped slot
            // function is a fresh one. The new slot syntax (since Vue 2.6)
            // can cache unchanged slot functions and we want to respect that here
            this.$_target.updatedNodes = defaultFn;
          } else if (!defaultFn) {
            // We also need to be back compatible with non-scoped default slot (i.e. 2.5.x)
            this.$_target.updatedNodes = this.$slots.default;
          }
        } // Update the scoped slot function cache


        this.$_defaultFn = defaultFn;
      }
    },
    // Unmount the target
    unmountTarget: function unmountTarget() {
      this.$_target && this.$_target.$destroy();
      this.$_target = null;
    }
  },
  render: function render(h) {
    // This component has no root element, so only a single VNode is allowed
    if (this.disabled) {
      var $nodes = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(this.normalizeSlot()).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity);

      if ($nodes.length > 0 && !$nodes[0].text) {
        return $nodes[0];
      }
    }

    return h();
  }
});
var BVTransporterVue3 = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_TRANSPORTER,
  mixins: [_mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__.normalizeSlotMixin],
  props: props,
  render: function render(h) {
    if (this.disabled) {
      var $nodes = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(this.normalizeSlot()).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity);

      if ($nodes.length > 0) {
        return $nodes[0];
      }
    }

    return h(_vue__WEBPACK_IMPORTED_MODULE_12__["default"].Teleport, {
      to: this.container
    }, this.normalizeSlot());
  }
});
var BVTransporter = _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? BVTransporterVue3 : BVTransporterVue2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/components.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/components.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAME_ALERT: () => (/* binding */ NAME_ALERT),
/* harmony export */   NAME_ASPECT: () => (/* binding */ NAME_ASPECT),
/* harmony export */   NAME_AVATAR: () => (/* binding */ NAME_AVATAR),
/* harmony export */   NAME_AVATAR_GROUP: () => (/* binding */ NAME_AVATAR_GROUP),
/* harmony export */   NAME_BADGE: () => (/* binding */ NAME_BADGE),
/* harmony export */   NAME_BREADCRUMB: () => (/* binding */ NAME_BREADCRUMB),
/* harmony export */   NAME_BREADCRUMB_ITEM: () => (/* binding */ NAME_BREADCRUMB_ITEM),
/* harmony export */   NAME_BREADCRUMB_LINK: () => (/* binding */ NAME_BREADCRUMB_LINK),
/* harmony export */   NAME_BUTTON: () => (/* binding */ NAME_BUTTON),
/* harmony export */   NAME_BUTTON_CLOSE: () => (/* binding */ NAME_BUTTON_CLOSE),
/* harmony export */   NAME_BUTTON_GROUP: () => (/* binding */ NAME_BUTTON_GROUP),
/* harmony export */   NAME_BUTTON_TOOLBAR: () => (/* binding */ NAME_BUTTON_TOOLBAR),
/* harmony export */   NAME_CALENDAR: () => (/* binding */ NAME_CALENDAR),
/* harmony export */   NAME_CARD: () => (/* binding */ NAME_CARD),
/* harmony export */   NAME_CARD_BODY: () => (/* binding */ NAME_CARD_BODY),
/* harmony export */   NAME_CARD_FOOTER: () => (/* binding */ NAME_CARD_FOOTER),
/* harmony export */   NAME_CARD_GROUP: () => (/* binding */ NAME_CARD_GROUP),
/* harmony export */   NAME_CARD_HEADER: () => (/* binding */ NAME_CARD_HEADER),
/* harmony export */   NAME_CARD_IMG: () => (/* binding */ NAME_CARD_IMG),
/* harmony export */   NAME_CARD_IMG_LAZY: () => (/* binding */ NAME_CARD_IMG_LAZY),
/* harmony export */   NAME_CARD_SUB_TITLE: () => (/* binding */ NAME_CARD_SUB_TITLE),
/* harmony export */   NAME_CARD_TEXT: () => (/* binding */ NAME_CARD_TEXT),
/* harmony export */   NAME_CARD_TITLE: () => (/* binding */ NAME_CARD_TITLE),
/* harmony export */   NAME_CAROUSEL: () => (/* binding */ NAME_CAROUSEL),
/* harmony export */   NAME_CAROUSEL_SLIDE: () => (/* binding */ NAME_CAROUSEL_SLIDE),
/* harmony export */   NAME_COL: () => (/* binding */ NAME_COL),
/* harmony export */   NAME_COLLAPSE: () => (/* binding */ NAME_COLLAPSE),
/* harmony export */   NAME_COLLAPSE_HELPER: () => (/* binding */ NAME_COLLAPSE_HELPER),
/* harmony export */   NAME_CONTAINER: () => (/* binding */ NAME_CONTAINER),
/* harmony export */   NAME_DROPDOWN: () => (/* binding */ NAME_DROPDOWN),
/* harmony export */   NAME_DROPDOWN_DIVIDER: () => (/* binding */ NAME_DROPDOWN_DIVIDER),
/* harmony export */   NAME_DROPDOWN_FORM: () => (/* binding */ NAME_DROPDOWN_FORM),
/* harmony export */   NAME_DROPDOWN_GROUP: () => (/* binding */ NAME_DROPDOWN_GROUP),
/* harmony export */   NAME_DROPDOWN_HEADER: () => (/* binding */ NAME_DROPDOWN_HEADER),
/* harmony export */   NAME_DROPDOWN_ITEM: () => (/* binding */ NAME_DROPDOWN_ITEM),
/* harmony export */   NAME_DROPDOWN_ITEM_BUTTON: () => (/* binding */ NAME_DROPDOWN_ITEM_BUTTON),
/* harmony export */   NAME_DROPDOWN_TEXT: () => (/* binding */ NAME_DROPDOWN_TEXT),
/* harmony export */   NAME_EMBED: () => (/* binding */ NAME_EMBED),
/* harmony export */   NAME_FORM: () => (/* binding */ NAME_FORM),
/* harmony export */   NAME_FORM_BUTTON_LABEL_CONTROL: () => (/* binding */ NAME_FORM_BUTTON_LABEL_CONTROL),
/* harmony export */   NAME_FORM_CHECKBOX: () => (/* binding */ NAME_FORM_CHECKBOX),
/* harmony export */   NAME_FORM_CHECKBOX_GROUP: () => (/* binding */ NAME_FORM_CHECKBOX_GROUP),
/* harmony export */   NAME_FORM_DATALIST: () => (/* binding */ NAME_FORM_DATALIST),
/* harmony export */   NAME_FORM_DATEPICKER: () => (/* binding */ NAME_FORM_DATEPICKER),
/* harmony export */   NAME_FORM_FILE: () => (/* binding */ NAME_FORM_FILE),
/* harmony export */   NAME_FORM_GROUP: () => (/* binding */ NAME_FORM_GROUP),
/* harmony export */   NAME_FORM_INPUT: () => (/* binding */ NAME_FORM_INPUT),
/* harmony export */   NAME_FORM_INVALID_FEEDBACK: () => (/* binding */ NAME_FORM_INVALID_FEEDBACK),
/* harmony export */   NAME_FORM_RADIO: () => (/* binding */ NAME_FORM_RADIO),
/* harmony export */   NAME_FORM_RADIO_GROUP: () => (/* binding */ NAME_FORM_RADIO_GROUP),
/* harmony export */   NAME_FORM_RATING: () => (/* binding */ NAME_FORM_RATING),
/* harmony export */   NAME_FORM_RATING_STAR: () => (/* binding */ NAME_FORM_RATING_STAR),
/* harmony export */   NAME_FORM_ROW: () => (/* binding */ NAME_FORM_ROW),
/* harmony export */   NAME_FORM_SELECT: () => (/* binding */ NAME_FORM_SELECT),
/* harmony export */   NAME_FORM_SELECT_OPTION: () => (/* binding */ NAME_FORM_SELECT_OPTION),
/* harmony export */   NAME_FORM_SELECT_OPTION_GROUP: () => (/* binding */ NAME_FORM_SELECT_OPTION_GROUP),
/* harmony export */   NAME_FORM_SPINBUTTON: () => (/* binding */ NAME_FORM_SPINBUTTON),
/* harmony export */   NAME_FORM_TAG: () => (/* binding */ NAME_FORM_TAG),
/* harmony export */   NAME_FORM_TAGS: () => (/* binding */ NAME_FORM_TAGS),
/* harmony export */   NAME_FORM_TEXT: () => (/* binding */ NAME_FORM_TEXT),
/* harmony export */   NAME_FORM_TEXTAREA: () => (/* binding */ NAME_FORM_TEXTAREA),
/* harmony export */   NAME_FORM_TIMEPICKER: () => (/* binding */ NAME_FORM_TIMEPICKER),
/* harmony export */   NAME_FORM_VALID_FEEDBACK: () => (/* binding */ NAME_FORM_VALID_FEEDBACK),
/* harmony export */   NAME_ICON: () => (/* binding */ NAME_ICON),
/* harmony export */   NAME_ICONSTACK: () => (/* binding */ NAME_ICONSTACK),
/* harmony export */   NAME_ICON_BASE: () => (/* binding */ NAME_ICON_BASE),
/* harmony export */   NAME_IMG: () => (/* binding */ NAME_IMG),
/* harmony export */   NAME_IMG_LAZY: () => (/* binding */ NAME_IMG_LAZY),
/* harmony export */   NAME_INPUT_GROUP: () => (/* binding */ NAME_INPUT_GROUP),
/* harmony export */   NAME_INPUT_GROUP_ADDON: () => (/* binding */ NAME_INPUT_GROUP_ADDON),
/* harmony export */   NAME_INPUT_GROUP_APPEND: () => (/* binding */ NAME_INPUT_GROUP_APPEND),
/* harmony export */   NAME_INPUT_GROUP_PREPEND: () => (/* binding */ NAME_INPUT_GROUP_PREPEND),
/* harmony export */   NAME_INPUT_GROUP_TEXT: () => (/* binding */ NAME_INPUT_GROUP_TEXT),
/* harmony export */   NAME_JUMBOTRON: () => (/* binding */ NAME_JUMBOTRON),
/* harmony export */   NAME_LINK: () => (/* binding */ NAME_LINK),
/* harmony export */   NAME_LIST_GROUP: () => (/* binding */ NAME_LIST_GROUP),
/* harmony export */   NAME_LIST_GROUP_ITEM: () => (/* binding */ NAME_LIST_GROUP_ITEM),
/* harmony export */   NAME_MEDIA: () => (/* binding */ NAME_MEDIA),
/* harmony export */   NAME_MEDIA_ASIDE: () => (/* binding */ NAME_MEDIA_ASIDE),
/* harmony export */   NAME_MEDIA_BODY: () => (/* binding */ NAME_MEDIA_BODY),
/* harmony export */   NAME_MODAL: () => (/* binding */ NAME_MODAL),
/* harmony export */   NAME_MSG_BOX: () => (/* binding */ NAME_MSG_BOX),
/* harmony export */   NAME_NAV: () => (/* binding */ NAME_NAV),
/* harmony export */   NAME_NAVBAR: () => (/* binding */ NAME_NAVBAR),
/* harmony export */   NAME_NAVBAR_BRAND: () => (/* binding */ NAME_NAVBAR_BRAND),
/* harmony export */   NAME_NAVBAR_NAV: () => (/* binding */ NAME_NAVBAR_NAV),
/* harmony export */   NAME_NAVBAR_TOGGLE: () => (/* binding */ NAME_NAVBAR_TOGGLE),
/* harmony export */   NAME_NAV_FORM: () => (/* binding */ NAME_NAV_FORM),
/* harmony export */   NAME_NAV_ITEM: () => (/* binding */ NAME_NAV_ITEM),
/* harmony export */   NAME_NAV_ITEM_DROPDOWN: () => (/* binding */ NAME_NAV_ITEM_DROPDOWN),
/* harmony export */   NAME_NAV_TEXT: () => (/* binding */ NAME_NAV_TEXT),
/* harmony export */   NAME_OVERLAY: () => (/* binding */ NAME_OVERLAY),
/* harmony export */   NAME_PAGINATION: () => (/* binding */ NAME_PAGINATION),
/* harmony export */   NAME_PAGINATION_NAV: () => (/* binding */ NAME_PAGINATION_NAV),
/* harmony export */   NAME_POPOVER: () => (/* binding */ NAME_POPOVER),
/* harmony export */   NAME_POPOVER_HELPER: () => (/* binding */ NAME_POPOVER_HELPER),
/* harmony export */   NAME_POPOVER_TEMPLATE: () => (/* binding */ NAME_POPOVER_TEMPLATE),
/* harmony export */   NAME_POPPER: () => (/* binding */ NAME_POPPER),
/* harmony export */   NAME_PROGRESS: () => (/* binding */ NAME_PROGRESS),
/* harmony export */   NAME_PROGRESS_BAR: () => (/* binding */ NAME_PROGRESS_BAR),
/* harmony export */   NAME_ROW: () => (/* binding */ NAME_ROW),
/* harmony export */   NAME_SIDEBAR: () => (/* binding */ NAME_SIDEBAR),
/* harmony export */   NAME_SKELETON: () => (/* binding */ NAME_SKELETON),
/* harmony export */   NAME_SKELETON_ICON: () => (/* binding */ NAME_SKELETON_ICON),
/* harmony export */   NAME_SKELETON_IMG: () => (/* binding */ NAME_SKELETON_IMG),
/* harmony export */   NAME_SKELETON_TABLE: () => (/* binding */ NAME_SKELETON_TABLE),
/* harmony export */   NAME_SKELETON_WRAPPER: () => (/* binding */ NAME_SKELETON_WRAPPER),
/* harmony export */   NAME_SPINNER: () => (/* binding */ NAME_SPINNER),
/* harmony export */   NAME_TAB: () => (/* binding */ NAME_TAB),
/* harmony export */   NAME_TABLE: () => (/* binding */ NAME_TABLE),
/* harmony export */   NAME_TABLE_CELL: () => (/* binding */ NAME_TABLE_CELL),
/* harmony export */   NAME_TABLE_LITE: () => (/* binding */ NAME_TABLE_LITE),
/* harmony export */   NAME_TABLE_SIMPLE: () => (/* binding */ NAME_TABLE_SIMPLE),
/* harmony export */   NAME_TABS: () => (/* binding */ NAME_TABS),
/* harmony export */   NAME_TAB_BUTTON_HELPER: () => (/* binding */ NAME_TAB_BUTTON_HELPER),
/* harmony export */   NAME_TBODY: () => (/* binding */ NAME_TBODY),
/* harmony export */   NAME_TFOOT: () => (/* binding */ NAME_TFOOT),
/* harmony export */   NAME_TH: () => (/* binding */ NAME_TH),
/* harmony export */   NAME_THEAD: () => (/* binding */ NAME_THEAD),
/* harmony export */   NAME_TIME: () => (/* binding */ NAME_TIME),
/* harmony export */   NAME_TOAST: () => (/* binding */ NAME_TOAST),
/* harmony export */   NAME_TOASTER: () => (/* binding */ NAME_TOASTER),
/* harmony export */   NAME_TOAST_POP: () => (/* binding */ NAME_TOAST_POP),
/* harmony export */   NAME_TOOLTIP: () => (/* binding */ NAME_TOOLTIP),
/* harmony export */   NAME_TOOLTIP_HELPER: () => (/* binding */ NAME_TOOLTIP_HELPER),
/* harmony export */   NAME_TOOLTIP_TEMPLATE: () => (/* binding */ NAME_TOOLTIP_TEMPLATE),
/* harmony export */   NAME_TR: () => (/* binding */ NAME_TR),
/* harmony export */   NAME_TRANSITION: () => (/* binding */ NAME_TRANSITION),
/* harmony export */   NAME_TRANSPORTER: () => (/* binding */ NAME_TRANSPORTER),
/* harmony export */   NAME_TRANSPORTER_TARGET: () => (/* binding */ NAME_TRANSPORTER_TARGET)
/* harmony export */ });
// Component names
var NAME_ALERT = 'BAlert';
var NAME_ASPECT = 'BAspect';
var NAME_AVATAR = 'BAvatar';
var NAME_AVATAR_GROUP = 'BAvatarGroup';
var NAME_BADGE = 'BBadge';
var NAME_BREADCRUMB = 'BBreadcrumb';
var NAME_BREADCRUMB_ITEM = 'BBreadcrumbItem';
var NAME_BREADCRUMB_LINK = 'BBreadcrumbLink';
var NAME_BUTTON = 'BButton';
var NAME_BUTTON_CLOSE = 'BButtonClose';
var NAME_BUTTON_GROUP = 'BButtonGroup';
var NAME_BUTTON_TOOLBAR = 'BButtonToolbar';
var NAME_CALENDAR = 'BCalendar';
var NAME_CARD = 'BCard';
var NAME_CARD_BODY = 'BCardBody';
var NAME_CARD_FOOTER = 'BCardFooter';
var NAME_CARD_GROUP = 'BCardGroup';
var NAME_CARD_HEADER = 'BCardHeader';
var NAME_CARD_IMG = 'BCardImg';
var NAME_CARD_IMG_LAZY = 'BCardImgLazy';
var NAME_CARD_SUB_TITLE = 'BCardSubTitle';
var NAME_CARD_TEXT = 'BCardText';
var NAME_CARD_TITLE = 'BCardTitle';
var NAME_CAROUSEL = 'BCarousel';
var NAME_CAROUSEL_SLIDE = 'BCarouselSlide';
var NAME_COL = 'BCol';
var NAME_COLLAPSE = 'BCollapse';
var NAME_CONTAINER = 'BContainer';
var NAME_DROPDOWN = 'BDropdown';
var NAME_DROPDOWN_DIVIDER = 'BDropdownDivider';
var NAME_DROPDOWN_FORM = 'BDropdownForm';
var NAME_DROPDOWN_GROUP = 'BDropdownGroup';
var NAME_DROPDOWN_HEADER = 'BDropdownHeader';
var NAME_DROPDOWN_ITEM = 'BDropdownItem';
var NAME_DROPDOWN_ITEM_BUTTON = 'BDropdownItemButton';
var NAME_DROPDOWN_TEXT = 'BDropdownText';
var NAME_EMBED = 'BEmbed';
var NAME_FORM = 'BForm';
var NAME_FORM_CHECKBOX = 'BFormCheckbox';
var NAME_FORM_CHECKBOX_GROUP = 'BFormCheckboxGroup';
var NAME_FORM_DATALIST = 'BFormDatalist';
var NAME_FORM_DATEPICKER = 'BFormDatepicker';
var NAME_FORM_FILE = 'BFormFile';
var NAME_FORM_GROUP = 'BFormGroup';
var NAME_FORM_INPUT = 'BFormInput';
var NAME_FORM_INVALID_FEEDBACK = 'BFormInvalidFeedback';
var NAME_FORM_RADIO = 'BFormRadio';
var NAME_FORM_RADIO_GROUP = 'BFormRadioGroup';
var NAME_FORM_RATING = 'BFormRating';
var NAME_FORM_ROW = 'BFormRow';
var NAME_FORM_SELECT = 'BFormSelect';
var NAME_FORM_SELECT_OPTION = 'BFormSelectOption';
var NAME_FORM_SELECT_OPTION_GROUP = 'BFormSelectOptionGroup';
var NAME_FORM_SPINBUTTON = 'BFormSpinbutton';
var NAME_FORM_TAG = 'BFormTag';
var NAME_FORM_TAGS = 'BFormTags';
var NAME_FORM_TEXT = 'BFormText';
var NAME_FORM_TEXTAREA = 'BFormTextarea';
var NAME_FORM_TIMEPICKER = 'BFormTimepicker';
var NAME_FORM_VALID_FEEDBACK = 'BFormValidFeedback';
var NAME_ICON = 'BIcon';
var NAME_ICONSTACK = 'BIconstack';
var NAME_ICON_BASE = 'BIconBase';
var NAME_IMG = 'BImg';
var NAME_IMG_LAZY = 'BImgLazy';
var NAME_INPUT_GROUP = 'BInputGroup';
var NAME_INPUT_GROUP_ADDON = 'BInputGroupAddon';
var NAME_INPUT_GROUP_APPEND = 'BInputGroupAppend';
var NAME_INPUT_GROUP_PREPEND = 'BInputGroupPrepend';
var NAME_INPUT_GROUP_TEXT = 'BInputGroupText';
var NAME_JUMBOTRON = 'BJumbotron';
var NAME_LINK = 'BLink';
var NAME_LIST_GROUP = 'BListGroup';
var NAME_LIST_GROUP_ITEM = 'BListGroupItem';
var NAME_MEDIA = 'BMedia';
var NAME_MEDIA_ASIDE = 'BMediaAside';
var NAME_MEDIA_BODY = 'BMediaBody';
var NAME_MODAL = 'BModal';
var NAME_MSG_BOX = 'BMsgBox';
var NAME_NAV = 'BNav';
var NAME_NAVBAR = 'BNavbar';
var NAME_NAVBAR_BRAND = 'BNavbarBrand';
var NAME_NAVBAR_NAV = 'BNavbarNav';
var NAME_NAVBAR_TOGGLE = 'BNavbarToggle';
var NAME_NAV_FORM = 'BNavForm';
var NAME_NAV_ITEM = 'BNavItem';
var NAME_NAV_ITEM_DROPDOWN = 'BNavItemDropdown';
var NAME_NAV_TEXT = 'BNavText';
var NAME_OVERLAY = 'BOverlay';
var NAME_PAGINATION = 'BPagination';
var NAME_PAGINATION_NAV = 'BPaginationNav';
var NAME_POPOVER = 'BPopover';
var NAME_PROGRESS = 'BProgress';
var NAME_PROGRESS_BAR = 'BProgressBar';
var NAME_ROW = 'BRow';
var NAME_SIDEBAR = 'BSidebar';
var NAME_SKELETON = 'BSkeleton';
var NAME_SKELETON_ICON = 'BSkeletonIcon';
var NAME_SKELETON_IMG = 'BSkeletonImg';
var NAME_SKELETON_TABLE = 'BSkeletonTable';
var NAME_SKELETON_WRAPPER = 'BSkeletonWrapper';
var NAME_SPINNER = 'BSpinner';
var NAME_TAB = 'BTab';
var NAME_TABLE = 'BTable';
var NAME_TABLE_CELL = 'BTableCell';
var NAME_TABLE_LITE = 'BTableLite';
var NAME_TABLE_SIMPLE = 'BTableSimple';
var NAME_TABS = 'BTabs';
var NAME_TBODY = 'BTbody';
var NAME_TFOOT = 'BTfoot';
var NAME_TH = 'BTh';
var NAME_THEAD = 'BThead';
var NAME_TIME = 'BTime';
var NAME_TOAST = 'BToast';
var NAME_TOASTER = 'BToaster';
var NAME_TOOLTIP = 'BTooltip';
var NAME_TR = 'BTr'; // Helper component names

var NAME_COLLAPSE_HELPER = 'BVCollapse';
var NAME_FORM_BUTTON_LABEL_CONTROL = 'BVFormBtnLabelControl';
var NAME_FORM_RATING_STAR = 'BVFormRatingStar';
var NAME_POPOVER_HELPER = 'BVPopover';
var NAME_POPOVER_TEMPLATE = 'BVPopoverTemplate';
var NAME_POPPER = 'BVPopper';
var NAME_TAB_BUTTON_HELPER = 'BVTabButton';
var NAME_TOAST_POP = 'BVToastPop';
var NAME_TOOLTIP_HELPER = 'BVTooltip';
var NAME_TOOLTIP_TEMPLATE = 'BVTooltipTemplate';
var NAME_TRANSITION = 'BVTransition';
var NAME_TRANSPORTER = 'BVTransporter';
var NAME_TRANSPORTER_TARGET = 'BVTransporterTarget';

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/config.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/config.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BREAKPOINT: () => (/* binding */ DEFAULT_BREAKPOINT),
/* harmony export */   NAME: () => (/* binding */ NAME),
/* harmony export */   PROP_NAME: () => (/* binding */ PROP_NAME)
/* harmony export */ });
var NAME = 'BvConfig';
var PROP_NAME = '$bvConfig';
var DEFAULT_BREAKPOINT = ['xs', 'sm', 'md', 'lg', 'xl'];

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/env.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/env.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   HAS_DOCUMENT_SUPPORT: () => (/* binding */ HAS_DOCUMENT_SUPPORT),
/* harmony export */   HAS_INTERACTION_OBSERVER_SUPPORT: () => (/* binding */ HAS_INTERACTION_OBSERVER_SUPPORT),
/* harmony export */   HAS_MUTATION_OBSERVER_SUPPORT: () => (/* binding */ HAS_MUTATION_OBSERVER_SUPPORT),
/* harmony export */   HAS_NAVIGATOR_SUPPORT: () => (/* binding */ HAS_NAVIGATOR_SUPPORT),
/* harmony export */   HAS_PASSIVE_EVENT_SUPPORT: () => (/* binding */ HAS_PASSIVE_EVENT_SUPPORT),
/* harmony export */   HAS_POINTER_EVENT_SUPPORT: () => (/* binding */ HAS_POINTER_EVENT_SUPPORT),
/* harmony export */   HAS_PROMISE_SUPPORT: () => (/* binding */ HAS_PROMISE_SUPPORT),
/* harmony export */   HAS_TOUCH_SUPPORT: () => (/* binding */ HAS_TOUCH_SUPPORT),
/* harmony export */   HAS_WINDOW_SUPPORT: () => (/* binding */ HAS_WINDOW_SUPPORT),
/* harmony export */   IS_BROWSER: () => (/* binding */ IS_BROWSER),
/* harmony export */   IS_IE: () => (/* binding */ IS_IE),
/* harmony export */   IS_JSDOM: () => (/* binding */ IS_JSDOM),
/* harmony export */   NAVIGATOR: () => (/* binding */ NAVIGATOR),
/* harmony export */   USER_AGENT: () => (/* binding */ USER_AGENT),
/* harmony export */   WINDOW: () => (/* binding */ WINDOW)
/* harmony export */ });
var HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
var HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';
var HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined';
var HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined';
/* istanbul ignore next: JSDOM always returns false */

var HAS_MUTATION_OBSERVER_SUPPORT = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
var IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT;
var WINDOW = HAS_WINDOW_SUPPORT ? window : {};
var DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};
var NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {};
var USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase();
var IS_JSDOM = USER_AGENT.indexOf('jsdom') > 0;
var IS_IE = /msie|trident/.test(USER_AGENT); // Determine if the browser supports the option passive for events

var HAS_PASSIVE_EVENT_SUPPORT = function () {
  var passiveEventSupported = false;

  if (IS_BROWSER) {
    try {
      var options = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      WINDOW.addEventListener('test', options, options);
      WINDOW.removeEventListener('test', options, options);
    } catch (_unused) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();
var HAS_TOUCH_SUPPORT = IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0);
var HAS_POINTER_EVENT_SUPPORT = IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent);
/* istanbul ignore next: JSDOM only checks for 'IntersectionObserver' */

var HAS_INTERACTION_OBSERVER_SUPPORT = IS_BROWSER && 'IntersectionObserver' in WINDOW && 'IntersectionObserverEntry' in WINDOW && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use `intersectionRatio > 0` instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/events.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/events.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_NAME_ACTIVATE_TAB: () => (/* binding */ EVENT_NAME_ACTIVATE_TAB),
/* harmony export */   EVENT_NAME_BLUR: () => (/* binding */ EVENT_NAME_BLUR),
/* harmony export */   EVENT_NAME_CANCEL: () => (/* binding */ EVENT_NAME_CANCEL),
/* harmony export */   EVENT_NAME_CHANGE: () => (/* binding */ EVENT_NAME_CHANGE),
/* harmony export */   EVENT_NAME_CHANGED: () => (/* binding */ EVENT_NAME_CHANGED),
/* harmony export */   EVENT_NAME_CLICK: () => (/* binding */ EVENT_NAME_CLICK),
/* harmony export */   EVENT_NAME_CLOSE: () => (/* binding */ EVENT_NAME_CLOSE),
/* harmony export */   EVENT_NAME_CONTEXT: () => (/* binding */ EVENT_NAME_CONTEXT),
/* harmony export */   EVENT_NAME_CONTEXT_CHANGED: () => (/* binding */ EVENT_NAME_CONTEXT_CHANGED),
/* harmony export */   EVENT_NAME_DESTROYED: () => (/* binding */ EVENT_NAME_DESTROYED),
/* harmony export */   EVENT_NAME_DISABLE: () => (/* binding */ EVENT_NAME_DISABLE),
/* harmony export */   EVENT_NAME_DISABLED: () => (/* binding */ EVENT_NAME_DISABLED),
/* harmony export */   EVENT_NAME_DISMISSED: () => (/* binding */ EVENT_NAME_DISMISSED),
/* harmony export */   EVENT_NAME_DISMISS_COUNT_DOWN: () => (/* binding */ EVENT_NAME_DISMISS_COUNT_DOWN),
/* harmony export */   EVENT_NAME_ENABLE: () => (/* binding */ EVENT_NAME_ENABLE),
/* harmony export */   EVENT_NAME_ENABLED: () => (/* binding */ EVENT_NAME_ENABLED),
/* harmony export */   EVENT_NAME_FILTERED: () => (/* binding */ EVENT_NAME_FILTERED),
/* harmony export */   EVENT_NAME_FIRST: () => (/* binding */ EVENT_NAME_FIRST),
/* harmony export */   EVENT_NAME_FOCUS: () => (/* binding */ EVENT_NAME_FOCUS),
/* harmony export */   EVENT_NAME_FOCUSIN: () => (/* binding */ EVENT_NAME_FOCUSIN),
/* harmony export */   EVENT_NAME_FOCUSOUT: () => (/* binding */ EVENT_NAME_FOCUSOUT),
/* harmony export */   EVENT_NAME_HEAD_CLICKED: () => (/* binding */ EVENT_NAME_HEAD_CLICKED),
/* harmony export */   EVENT_NAME_HIDDEN: () => (/* binding */ EVENT_NAME_HIDDEN),
/* harmony export */   EVENT_NAME_HIDE: () => (/* binding */ EVENT_NAME_HIDE),
/* harmony export */   EVENT_NAME_IMG_ERROR: () => (/* binding */ EVENT_NAME_IMG_ERROR),
/* harmony export */   EVENT_NAME_INPUT: () => (/* binding */ EVENT_NAME_INPUT),
/* harmony export */   EVENT_NAME_LAST: () => (/* binding */ EVENT_NAME_LAST),
/* harmony export */   EVENT_NAME_MOUSEENTER: () => (/* binding */ EVENT_NAME_MOUSEENTER),
/* harmony export */   EVENT_NAME_MOUSELEAVE: () => (/* binding */ EVENT_NAME_MOUSELEAVE),
/* harmony export */   EVENT_NAME_NEXT: () => (/* binding */ EVENT_NAME_NEXT),
/* harmony export */   EVENT_NAME_OK: () => (/* binding */ EVENT_NAME_OK),
/* harmony export */   EVENT_NAME_OPEN: () => (/* binding */ EVENT_NAME_OPEN),
/* harmony export */   EVENT_NAME_PAGE_CLICK: () => (/* binding */ EVENT_NAME_PAGE_CLICK),
/* harmony export */   EVENT_NAME_PAUSED: () => (/* binding */ EVENT_NAME_PAUSED),
/* harmony export */   EVENT_NAME_PREV: () => (/* binding */ EVENT_NAME_PREV),
/* harmony export */   EVENT_NAME_REFRESH: () => (/* binding */ EVENT_NAME_REFRESH),
/* harmony export */   EVENT_NAME_REFRESHED: () => (/* binding */ EVENT_NAME_REFRESHED),
/* harmony export */   EVENT_NAME_REMOVE: () => (/* binding */ EVENT_NAME_REMOVE),
/* harmony export */   EVENT_NAME_ROW_CLICKED: () => (/* binding */ EVENT_NAME_ROW_CLICKED),
/* harmony export */   EVENT_NAME_ROW_CONTEXTMENU: () => (/* binding */ EVENT_NAME_ROW_CONTEXTMENU),
/* harmony export */   EVENT_NAME_ROW_DBLCLICKED: () => (/* binding */ EVENT_NAME_ROW_DBLCLICKED),
/* harmony export */   EVENT_NAME_ROW_HOVERED: () => (/* binding */ EVENT_NAME_ROW_HOVERED),
/* harmony export */   EVENT_NAME_ROW_MIDDLE_CLICKED: () => (/* binding */ EVENT_NAME_ROW_MIDDLE_CLICKED),
/* harmony export */   EVENT_NAME_ROW_SELECTED: () => (/* binding */ EVENT_NAME_ROW_SELECTED),
/* harmony export */   EVENT_NAME_ROW_UNHOVERED: () => (/* binding */ EVENT_NAME_ROW_UNHOVERED),
/* harmony export */   EVENT_NAME_SELECTED: () => (/* binding */ EVENT_NAME_SELECTED),
/* harmony export */   EVENT_NAME_SHOW: () => (/* binding */ EVENT_NAME_SHOW),
/* harmony export */   EVENT_NAME_SHOWN: () => (/* binding */ EVENT_NAME_SHOWN),
/* harmony export */   EVENT_NAME_SLIDING_END: () => (/* binding */ EVENT_NAME_SLIDING_END),
/* harmony export */   EVENT_NAME_SLIDING_START: () => (/* binding */ EVENT_NAME_SLIDING_START),
/* harmony export */   EVENT_NAME_SORT_CHANGED: () => (/* binding */ EVENT_NAME_SORT_CHANGED),
/* harmony export */   EVENT_NAME_TAG_STATE: () => (/* binding */ EVENT_NAME_TAG_STATE),
/* harmony export */   EVENT_NAME_TOGGLE: () => (/* binding */ EVENT_NAME_TOGGLE),
/* harmony export */   EVENT_NAME_UNPAUSED: () => (/* binding */ EVENT_NAME_UNPAUSED),
/* harmony export */   EVENT_NAME_UPDATE: () => (/* binding */ EVENT_NAME_UPDATE),
/* harmony export */   EVENT_OPTIONS_NO_CAPTURE: () => (/* binding */ EVENT_OPTIONS_NO_CAPTURE),
/* harmony export */   EVENT_OPTIONS_PASSIVE: () => (/* binding */ EVENT_OPTIONS_PASSIVE),
/* harmony export */   HOOK_EVENT_NAME_BEFORE_DESTROY: () => (/* binding */ HOOK_EVENT_NAME_BEFORE_DESTROY),
/* harmony export */   HOOK_EVENT_NAME_DESTROYED: () => (/* binding */ HOOK_EVENT_NAME_DESTROYED),
/* harmony export */   MODEL_EVENT_NAME_PREFIX: () => (/* binding */ MODEL_EVENT_NAME_PREFIX),
/* harmony export */   ROOT_EVENT_NAME_PREFIX: () => (/* binding */ ROOT_EVENT_NAME_PREFIX),
/* harmony export */   ROOT_EVENT_NAME_SEPARATOR: () => (/* binding */ ROOT_EVENT_NAME_SEPARATOR)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");

var EVENT_NAME_ACTIVATE_TAB = 'activate-tab';
var EVENT_NAME_BLUR = 'blur';
var EVENT_NAME_CANCEL = 'cancel';
var EVENT_NAME_CHANGE = 'change';
var EVENT_NAME_CHANGED = 'changed';
var EVENT_NAME_CLICK = 'click';
var EVENT_NAME_CLOSE = 'close';
var EVENT_NAME_CONTEXT = 'context';
var EVENT_NAME_CONTEXT_CHANGED = 'context-changed';
var EVENT_NAME_DESTROYED = 'destroyed';
var EVENT_NAME_DISABLE = 'disable';
var EVENT_NAME_DISABLED = 'disabled';
var EVENT_NAME_DISMISSED = 'dismissed';
var EVENT_NAME_DISMISS_COUNT_DOWN = 'dismiss-count-down';
var EVENT_NAME_ENABLE = 'enable';
var EVENT_NAME_ENABLED = 'enabled';
var EVENT_NAME_FILTERED = 'filtered';
var EVENT_NAME_FIRST = 'first';
var EVENT_NAME_FOCUS = 'focus';
var EVENT_NAME_FOCUSIN = 'focusin';
var EVENT_NAME_FOCUSOUT = 'focusout';
var EVENT_NAME_HEAD_CLICKED = 'head-clicked';
var EVENT_NAME_HIDDEN = 'hidden';
var EVENT_NAME_HIDE = 'hide';
var EVENT_NAME_IMG_ERROR = 'img-error';
var EVENT_NAME_INPUT = 'input';
var EVENT_NAME_LAST = 'last';
var EVENT_NAME_MOUSEENTER = 'mouseenter';
var EVENT_NAME_MOUSELEAVE = 'mouseleave';
var EVENT_NAME_NEXT = 'next';
var EVENT_NAME_OK = 'ok';
var EVENT_NAME_OPEN = 'open';
var EVENT_NAME_PAGE_CLICK = 'page-click';
var EVENT_NAME_PAUSED = 'paused';
var EVENT_NAME_PREV = 'prev';
var EVENT_NAME_REFRESH = 'refresh';
var EVENT_NAME_REFRESHED = 'refreshed';
var EVENT_NAME_REMOVE = 'remove';
var EVENT_NAME_ROW_CLICKED = 'row-clicked';
var EVENT_NAME_ROW_CONTEXTMENU = 'row-contextmenu';
var EVENT_NAME_ROW_DBLCLICKED = 'row-dblclicked';
var EVENT_NAME_ROW_HOVERED = 'row-hovered';
var EVENT_NAME_ROW_MIDDLE_CLICKED = 'row-middle-clicked';
var EVENT_NAME_ROW_SELECTED = 'row-selected';
var EVENT_NAME_ROW_UNHOVERED = 'row-unhovered';
var EVENT_NAME_SELECTED = 'selected';
var EVENT_NAME_SHOW = 'show';
var EVENT_NAME_SHOWN = 'shown';
var EVENT_NAME_SLIDING_END = 'sliding-end';
var EVENT_NAME_SLIDING_START = 'sliding-start';
var EVENT_NAME_SORT_CHANGED = 'sort-changed';
var EVENT_NAME_TAG_STATE = 'tag-state';
var EVENT_NAME_TOGGLE = 'toggle';
var EVENT_NAME_UNPAUSED = 'unpaused';
var EVENT_NAME_UPDATE = 'update';
var HOOK_EVENT_NAME_BEFORE_DESTROY = _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? 'vnodeBeforeUnmount' : 'hook:beforeDestroy';
var HOOK_EVENT_NAME_DESTROYED = _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? 'vNodeUnmounted' : 'hook:destroyed';
var MODEL_EVENT_NAME_PREFIX = 'update:';
var ROOT_EVENT_NAME_PREFIX = 'bv';
var ROOT_EVENT_NAME_SEPARATOR = '::';
var EVENT_OPTIONS_PASSIVE = {
  passive: true
};
var EVENT_OPTIONS_NO_CAPTURE = {
  passive: true,
  capture: false
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/key-codes.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/key-codes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CODE_BACKSPACE: () => (/* binding */ CODE_BACKSPACE),
/* harmony export */   CODE_BREAK: () => (/* binding */ CODE_BREAK),
/* harmony export */   CODE_DELETE: () => (/* binding */ CODE_DELETE),
/* harmony export */   CODE_DOWN: () => (/* binding */ CODE_DOWN),
/* harmony export */   CODE_END: () => (/* binding */ CODE_END),
/* harmony export */   CODE_ENTER: () => (/* binding */ CODE_ENTER),
/* harmony export */   CODE_ESC: () => (/* binding */ CODE_ESC),
/* harmony export */   CODE_HOME: () => (/* binding */ CODE_HOME),
/* harmony export */   CODE_LEFT: () => (/* binding */ CODE_LEFT),
/* harmony export */   CODE_PAGEDOWN: () => (/* binding */ CODE_PAGEDOWN),
/* harmony export */   CODE_PAGEUP: () => (/* binding */ CODE_PAGEUP),
/* harmony export */   CODE_RIGHT: () => (/* binding */ CODE_RIGHT),
/* harmony export */   CODE_SPACE: () => (/* binding */ CODE_SPACE),
/* harmony export */   CODE_UP: () => (/* binding */ CODE_UP)
/* harmony export */ });
var CODE_BACKSPACE = 8;
var CODE_BREAK = 19;
var CODE_DELETE = 46;
var CODE_DOWN = 40;
var CODE_END = 35;
var CODE_ENTER = 13;
var CODE_ESC = 27;
var CODE_HOME = 36;
var CODE_LEFT = 37;
var CODE_PAGEDOWN = 34;
var CODE_PAGEUP = 33;
var CODE_RIGHT = 39;
var CODE_SPACE = 32;
var CODE_UP = 38;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/props.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/props.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROP_TYPE_ANY: () => (/* binding */ PROP_TYPE_ANY),
/* harmony export */   PROP_TYPE_ARRAY: () => (/* binding */ PROP_TYPE_ARRAY),
/* harmony export */   PROP_TYPE_ARRAY_FUNCTION: () => (/* binding */ PROP_TYPE_ARRAY_FUNCTION),
/* harmony export */   PROP_TYPE_ARRAY_OBJECT: () => (/* binding */ PROP_TYPE_ARRAY_OBJECT),
/* harmony export */   PROP_TYPE_ARRAY_OBJECT_STRING: () => (/* binding */ PROP_TYPE_ARRAY_OBJECT_STRING),
/* harmony export */   PROP_TYPE_ARRAY_STRING: () => (/* binding */ PROP_TYPE_ARRAY_STRING),
/* harmony export */   PROP_TYPE_BOOLEAN: () => (/* binding */ PROP_TYPE_BOOLEAN),
/* harmony export */   PROP_TYPE_BOOLEAN_NUMBER: () => (/* binding */ PROP_TYPE_BOOLEAN_NUMBER),
/* harmony export */   PROP_TYPE_BOOLEAN_NUMBER_STRING: () => (/* binding */ PROP_TYPE_BOOLEAN_NUMBER_STRING),
/* harmony export */   PROP_TYPE_BOOLEAN_STRING: () => (/* binding */ PROP_TYPE_BOOLEAN_STRING),
/* harmony export */   PROP_TYPE_DATE: () => (/* binding */ PROP_TYPE_DATE),
/* harmony export */   PROP_TYPE_DATE_STRING: () => (/* binding */ PROP_TYPE_DATE_STRING),
/* harmony export */   PROP_TYPE_FUNCTION: () => (/* binding */ PROP_TYPE_FUNCTION),
/* harmony export */   PROP_TYPE_FUNCTION_STRING: () => (/* binding */ PROP_TYPE_FUNCTION_STRING),
/* harmony export */   PROP_TYPE_NUMBER: () => (/* binding */ PROP_TYPE_NUMBER),
/* harmony export */   PROP_TYPE_NUMBER_OBJECT_STRING: () => (/* binding */ PROP_TYPE_NUMBER_OBJECT_STRING),
/* harmony export */   PROP_TYPE_NUMBER_STRING: () => (/* binding */ PROP_TYPE_NUMBER_STRING),
/* harmony export */   PROP_TYPE_OBJECT: () => (/* binding */ PROP_TYPE_OBJECT),
/* harmony export */   PROP_TYPE_OBJECT_FUNCTION: () => (/* binding */ PROP_TYPE_OBJECT_FUNCTION),
/* harmony export */   PROP_TYPE_OBJECT_STRING: () => (/* binding */ PROP_TYPE_OBJECT_STRING),
/* harmony export */   PROP_TYPE_REG_EXP: () => (/* binding */ PROP_TYPE_REG_EXP),
/* harmony export */   PROP_TYPE_STRING: () => (/* binding */ PROP_TYPE_STRING)
/* harmony export */ });
// General types
var PROP_TYPE_ANY = undefined;
var PROP_TYPE_ARRAY = Array;
var PROP_TYPE_BOOLEAN = Boolean;
var PROP_TYPE_DATE = Date;
var PROP_TYPE_FUNCTION = Function;
var PROP_TYPE_NUMBER = Number;
var PROP_TYPE_OBJECT = Object;
var PROP_TYPE_REG_EXP = RegExp;
var PROP_TYPE_STRING = String; // Multiple types

var PROP_TYPE_ARRAY_FUNCTION = [PROP_TYPE_ARRAY, PROP_TYPE_FUNCTION];
var PROP_TYPE_ARRAY_OBJECT = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT];
var PROP_TYPE_ARRAY_OBJECT_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_ARRAY_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_NUMBER = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER];
var PROP_TYPE_BOOLEAN_NUMBER_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_STRING];
var PROP_TYPE_DATE_STRING = [PROP_TYPE_DATE, PROP_TYPE_STRING];
var PROP_TYPE_FUNCTION_STRING = [PROP_TYPE_FUNCTION, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_OBJECT_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_OBJECT_FUNCTION = [PROP_TYPE_OBJECT, PROP_TYPE_FUNCTION];
var PROP_TYPE_OBJECT_STRING = [PROP_TYPE_OBJECT, PROP_TYPE_STRING];

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/regex.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/regex.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RX_ARRAY_NOTATION: () => (/* binding */ RX_ARRAY_NOTATION),
/* harmony export */   RX_ASPECT: () => (/* binding */ RX_ASPECT),
/* harmony export */   RX_ASPECT_SEPARATOR: () => (/* binding */ RX_ASPECT_SEPARATOR),
/* harmony export */   RX_BV_PREFIX: () => (/* binding */ RX_BV_PREFIX),
/* harmony export */   RX_COL_CLASS: () => (/* binding */ RX_COL_CLASS),
/* harmony export */   RX_DATE: () => (/* binding */ RX_DATE),
/* harmony export */   RX_DATE_SPLIT: () => (/* binding */ RX_DATE_SPLIT),
/* harmony export */   RX_DIGITS: () => (/* binding */ RX_DIGITS),
/* harmony export */   RX_ENCODED_COMMA: () => (/* binding */ RX_ENCODED_COMMA),
/* harmony export */   RX_ENCODE_REVERSE: () => (/* binding */ RX_ENCODE_REVERSE),
/* harmony export */   RX_EXTENSION: () => (/* binding */ RX_EXTENSION),
/* harmony export */   RX_HASH: () => (/* binding */ RX_HASH),
/* harmony export */   RX_HASH_ID: () => (/* binding */ RX_HASH_ID),
/* harmony export */   RX_HREF: () => (/* binding */ RX_HREF),
/* harmony export */   RX_HTML_TAGS: () => (/* binding */ RX_HTML_TAGS),
/* harmony export */   RX_HYPHENATE: () => (/* binding */ RX_HYPHENATE),
/* harmony export */   RX_ICON_PREFIX: () => (/* binding */ RX_ICON_PREFIX),
/* harmony export */   RX_LOWER_UPPER: () => (/* binding */ RX_LOWER_UPPER),
/* harmony export */   RX_NUMBER: () => (/* binding */ RX_NUMBER),
/* harmony export */   RX_PLUS: () => (/* binding */ RX_PLUS),
/* harmony export */   RX_QUERY_START: () => (/* binding */ RX_QUERY_START),
/* harmony export */   RX_REGEXP_REPLACE: () => (/* binding */ RX_REGEXP_REPLACE),
/* harmony export */   RX_SPACES: () => (/* binding */ RX_SPACES),
/* harmony export */   RX_SPACE_SPLIT: () => (/* binding */ RX_SPACE_SPLIT),
/* harmony export */   RX_STAR: () => (/* binding */ RX_STAR),
/* harmony export */   RX_START_SPACE_WORD: () => (/* binding */ RX_START_SPACE_WORD),
/* harmony export */   RX_STRIP_LOCALE_MODS: () => (/* binding */ RX_STRIP_LOCALE_MODS),
/* harmony export */   RX_TIME: () => (/* binding */ RX_TIME),
/* harmony export */   RX_TRIM_LEFT: () => (/* binding */ RX_TRIM_LEFT),
/* harmony export */   RX_TRIM_RIGHT: () => (/* binding */ RX_TRIM_RIGHT),
/* harmony export */   RX_UNDERSCORE: () => (/* binding */ RX_UNDERSCORE),
/* harmony export */   RX_UN_KEBAB: () => (/* binding */ RX_UN_KEBAB)
/* harmony export */ });
// --- General ---
var RX_ARRAY_NOTATION = /\[(\d+)]/g;
var RX_BV_PREFIX = /^(BV?)/;
var RX_DIGITS = /^\d+$/;
var RX_EXTENSION = /^\..+/;
var RX_HASH = /^#/;
var RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
var RX_HTML_TAGS = /(<([^>]+)>)/gi;
var RX_HYPHENATE = /\B([A-Z])/g;
var RX_LOWER_UPPER = /([a-z])([A-Z])/g;
var RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
var RX_PLUS = /\+/g;
var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_SPACES = /[\s\uFEFF\xA0]+/g;
var RX_SPACE_SPLIT = /\s+/;
var RX_STAR = /\/\*$/;
var RX_START_SPACE_WORD = /(\s|^)(\w)/g;
var RX_TRIM_LEFT = /^\s+/;
var RX_TRIM_RIGHT = /\s+$/;
var RX_UNDERSCORE = /_/g;
var RX_UN_KEBAB = /-(\w)/g; // --- Date ---
// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'

var RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; // Used to split off the date parts of the YYYY-MM-DD string

var RX_DATE_SPLIT = /-|\s|T/; // Time string RegEx (optional seconds)

var RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/; // --- URL ---
// HREFs must end with a hash followed by at least one non-hash character

var RX_HREF = /^.*(#[^#]+)$/;
var RX_ENCODED_COMMA = /%2C/g;
var RX_ENCODE_REVERSE = /[!'()*]/g;
var RX_QUERY_START = /^(\?|#|&)/; // --- Aspect ---

var RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
var RX_ASPECT_SEPARATOR = /[/:]/; // --- Grid ---

var RX_COL_CLASS = /^col-/; // --- Icon ---

var RX_ICON_PREFIX = /^BIcon/; // --- Locale ---

var RX_STRIP_LOCALE_MODS = /-u-.+/;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/safe-types.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/safe-types.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   HTMLElement: () => (/* binding */ HTMLElement),
/* harmony export */   SVGElement: () => (/* binding */ SVGElement)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/* istanbul ignore next */

var Element = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.Element : /*#__PURE__*/function (_Object) {
  _inherits(Element, _Object);

  var _super = _createSuper(Element);

  function Element() {
    _classCallCheck(this, Element);

    return _super.apply(this, arguments);
  }

  return Element;
}( /*#__PURE__*/_wrapNativeSuper(Object));
/* istanbul ignore next */

var HTMLElement = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.HTMLElement : /*#__PURE__*/function (_Element) {
  _inherits(HTMLElement, _Element);

  var _super2 = _createSuper(HTMLElement);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _super2.apply(this, arguments);
  }

  return HTMLElement;
}(Element);
/* istanbul ignore next */

var SVGElement = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.SVGElement : /*#__PURE__*/function (_Element2) {
  _inherits(SVGElement, _Element2);

  var _super3 = _createSuper(SVGElement);

  function SVGElement() {
    _classCallCheck(this, SVGElement);

    return _super3.apply(this, arguments);
  }

  return SVGElement;
}(Element);
/* istanbul ignore next */

var File = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.File : /*#__PURE__*/function (_Object2) {
  _inherits(File, _Object2);

  var _super4 = _createSuper(File);

  function File() {
    _classCallCheck(this, File);

    return _super4.apply(this, arguments);
  }

  return File;
}( /*#__PURE__*/_wrapNativeSuper(Object));

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/slots.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/slots.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SLOT_NAME_ADD_BUTTON_TEXT: () => (/* binding */ SLOT_NAME_ADD_BUTTON_TEXT),
/* harmony export */   SLOT_NAME_APPEND: () => (/* binding */ SLOT_NAME_APPEND),
/* harmony export */   SLOT_NAME_ASIDE: () => (/* binding */ SLOT_NAME_ASIDE),
/* harmony export */   SLOT_NAME_BADGE: () => (/* binding */ SLOT_NAME_BADGE),
/* harmony export */   SLOT_NAME_BOTTOM_ROW: () => (/* binding */ SLOT_NAME_BOTTOM_ROW),
/* harmony export */   SLOT_NAME_BUTTON_CONTENT: () => (/* binding */ SLOT_NAME_BUTTON_CONTENT),
/* harmony export */   SLOT_NAME_CUSTOM_FOOT: () => (/* binding */ SLOT_NAME_CUSTOM_FOOT),
/* harmony export */   SLOT_NAME_DECREMENT: () => (/* binding */ SLOT_NAME_DECREMENT),
/* harmony export */   SLOT_NAME_DEFAULT: () => (/* binding */ SLOT_NAME_DEFAULT),
/* harmony export */   SLOT_NAME_DESCRIPTION: () => (/* binding */ SLOT_NAME_DESCRIPTION),
/* harmony export */   SLOT_NAME_DISMISS: () => (/* binding */ SLOT_NAME_DISMISS),
/* harmony export */   SLOT_NAME_DROP_PLACEHOLDER: () => (/* binding */ SLOT_NAME_DROP_PLACEHOLDER),
/* harmony export */   SLOT_NAME_ELLIPSIS_TEXT: () => (/* binding */ SLOT_NAME_ELLIPSIS_TEXT),
/* harmony export */   SLOT_NAME_EMPTY: () => (/* binding */ SLOT_NAME_EMPTY),
/* harmony export */   SLOT_NAME_EMPTYFILTERED: () => (/* binding */ SLOT_NAME_EMPTYFILTERED),
/* harmony export */   SLOT_NAME_FILE_NAME: () => (/* binding */ SLOT_NAME_FILE_NAME),
/* harmony export */   SLOT_NAME_FIRST: () => (/* binding */ SLOT_NAME_FIRST),
/* harmony export */   SLOT_NAME_FIRST_TEXT: () => (/* binding */ SLOT_NAME_FIRST_TEXT),
/* harmony export */   SLOT_NAME_FOOTER: () => (/* binding */ SLOT_NAME_FOOTER),
/* harmony export */   SLOT_NAME_HEADER: () => (/* binding */ SLOT_NAME_HEADER),
/* harmony export */   SLOT_NAME_HEADER_CLOSE: () => (/* binding */ SLOT_NAME_HEADER_CLOSE),
/* harmony export */   SLOT_NAME_ICON_CLEAR: () => (/* binding */ SLOT_NAME_ICON_CLEAR),
/* harmony export */   SLOT_NAME_ICON_EMPTY: () => (/* binding */ SLOT_NAME_ICON_EMPTY),
/* harmony export */   SLOT_NAME_ICON_FULL: () => (/* binding */ SLOT_NAME_ICON_FULL),
/* harmony export */   SLOT_NAME_ICON_HALF: () => (/* binding */ SLOT_NAME_ICON_HALF),
/* harmony export */   SLOT_NAME_IMG: () => (/* binding */ SLOT_NAME_IMG),
/* harmony export */   SLOT_NAME_INCREMENT: () => (/* binding */ SLOT_NAME_INCREMENT),
/* harmony export */   SLOT_NAME_INVALID_FEEDBACK: () => (/* binding */ SLOT_NAME_INVALID_FEEDBACK),
/* harmony export */   SLOT_NAME_LABEL: () => (/* binding */ SLOT_NAME_LABEL),
/* harmony export */   SLOT_NAME_LAST_TEXT: () => (/* binding */ SLOT_NAME_LAST_TEXT),
/* harmony export */   SLOT_NAME_LEAD: () => (/* binding */ SLOT_NAME_LEAD),
/* harmony export */   SLOT_NAME_LOADING: () => (/* binding */ SLOT_NAME_LOADING),
/* harmony export */   SLOT_NAME_MODAL_BACKDROP: () => (/* binding */ SLOT_NAME_MODAL_BACKDROP),
/* harmony export */   SLOT_NAME_MODAL_CANCEL: () => (/* binding */ SLOT_NAME_MODAL_CANCEL),
/* harmony export */   SLOT_NAME_MODAL_FOOTER: () => (/* binding */ SLOT_NAME_MODAL_FOOTER),
/* harmony export */   SLOT_NAME_MODAL_HEADER: () => (/* binding */ SLOT_NAME_MODAL_HEADER),
/* harmony export */   SLOT_NAME_MODAL_HEADER_CLOSE: () => (/* binding */ SLOT_NAME_MODAL_HEADER_CLOSE),
/* harmony export */   SLOT_NAME_MODAL_OK: () => (/* binding */ SLOT_NAME_MODAL_OK),
/* harmony export */   SLOT_NAME_MODAL_TITLE: () => (/* binding */ SLOT_NAME_MODAL_TITLE),
/* harmony export */   SLOT_NAME_NAV_NEXT_DECADE: () => (/* binding */ SLOT_NAME_NAV_NEXT_DECADE),
/* harmony export */   SLOT_NAME_NAV_NEXT_MONTH: () => (/* binding */ SLOT_NAME_NAV_NEXT_MONTH),
/* harmony export */   SLOT_NAME_NAV_NEXT_YEAR: () => (/* binding */ SLOT_NAME_NAV_NEXT_YEAR),
/* harmony export */   SLOT_NAME_NAV_PEV_DECADE: () => (/* binding */ SLOT_NAME_NAV_PEV_DECADE),
/* harmony export */   SLOT_NAME_NAV_PEV_MONTH: () => (/* binding */ SLOT_NAME_NAV_PEV_MONTH),
/* harmony export */   SLOT_NAME_NAV_PEV_YEAR: () => (/* binding */ SLOT_NAME_NAV_PEV_YEAR),
/* harmony export */   SLOT_NAME_NAV_THIS_MONTH: () => (/* binding */ SLOT_NAME_NAV_THIS_MONTH),
/* harmony export */   SLOT_NAME_NEXT_TEXT: () => (/* binding */ SLOT_NAME_NEXT_TEXT),
/* harmony export */   SLOT_NAME_OVERLAY: () => (/* binding */ SLOT_NAME_OVERLAY),
/* harmony export */   SLOT_NAME_PAGE: () => (/* binding */ SLOT_NAME_PAGE),
/* harmony export */   SLOT_NAME_PLACEHOLDER: () => (/* binding */ SLOT_NAME_PLACEHOLDER),
/* harmony export */   SLOT_NAME_PREPEND: () => (/* binding */ SLOT_NAME_PREPEND),
/* harmony export */   SLOT_NAME_PREV_TEXT: () => (/* binding */ SLOT_NAME_PREV_TEXT),
/* harmony export */   SLOT_NAME_ROW_DETAILS: () => (/* binding */ SLOT_NAME_ROW_DETAILS),
/* harmony export */   SLOT_NAME_TABLE_BUSY: () => (/* binding */ SLOT_NAME_TABLE_BUSY),
/* harmony export */   SLOT_NAME_TABLE_CAPTION: () => (/* binding */ SLOT_NAME_TABLE_CAPTION),
/* harmony export */   SLOT_NAME_TABLE_COLGROUP: () => (/* binding */ SLOT_NAME_TABLE_COLGROUP),
/* harmony export */   SLOT_NAME_TABS_END: () => (/* binding */ SLOT_NAME_TABS_END),
/* harmony export */   SLOT_NAME_TABS_START: () => (/* binding */ SLOT_NAME_TABS_START),
/* harmony export */   SLOT_NAME_TEXT: () => (/* binding */ SLOT_NAME_TEXT),
/* harmony export */   SLOT_NAME_THEAD_TOP: () => (/* binding */ SLOT_NAME_THEAD_TOP),
/* harmony export */   SLOT_NAME_TITLE: () => (/* binding */ SLOT_NAME_TITLE),
/* harmony export */   SLOT_NAME_TOAST_TITLE: () => (/* binding */ SLOT_NAME_TOAST_TITLE),
/* harmony export */   SLOT_NAME_TOP_ROW: () => (/* binding */ SLOT_NAME_TOP_ROW),
/* harmony export */   SLOT_NAME_VALID_FEEDBACK: () => (/* binding */ SLOT_NAME_VALID_FEEDBACK)
/* harmony export */ });
var SLOT_NAME_ADD_BUTTON_TEXT = 'add-button-text';
var SLOT_NAME_APPEND = 'append';
var SLOT_NAME_ASIDE = 'aside';
var SLOT_NAME_BADGE = 'badge';
var SLOT_NAME_BOTTOM_ROW = 'bottom-row';
var SLOT_NAME_BUTTON_CONTENT = 'button-content';
var SLOT_NAME_CUSTOM_FOOT = 'custom-foot';
var SLOT_NAME_DECREMENT = 'decrement';
var SLOT_NAME_DEFAULT = 'default';
var SLOT_NAME_DESCRIPTION = 'description';
var SLOT_NAME_DISMISS = 'dismiss';
var SLOT_NAME_DROP_PLACEHOLDER = 'drop-placeholder';
var SLOT_NAME_ELLIPSIS_TEXT = 'ellipsis-text';
var SLOT_NAME_EMPTY = 'empty';
var SLOT_NAME_EMPTYFILTERED = 'emptyfiltered';
var SLOT_NAME_FILE_NAME = 'file-name';
var SLOT_NAME_FIRST = 'first';
var SLOT_NAME_FIRST_TEXT = 'first-text';
var SLOT_NAME_FOOTER = 'footer';
var SLOT_NAME_HEADER = 'header';
var SLOT_NAME_HEADER_CLOSE = 'header-close';
var SLOT_NAME_ICON_CLEAR = 'icon-clear';
var SLOT_NAME_ICON_EMPTY = 'icon-empty';
var SLOT_NAME_ICON_FULL = 'icon-full';
var SLOT_NAME_ICON_HALF = 'icon-half';
var SLOT_NAME_IMG = 'img';
var SLOT_NAME_INCREMENT = 'increment';
var SLOT_NAME_INVALID_FEEDBACK = 'invalid-feedback';
var SLOT_NAME_LABEL = 'label';
var SLOT_NAME_LAST_TEXT = 'last-text';
var SLOT_NAME_LEAD = 'lead';
var SLOT_NAME_LOADING = 'loading';
var SLOT_NAME_MODAL_BACKDROP = 'modal-backdrop';
var SLOT_NAME_MODAL_CANCEL = 'modal-cancel';
var SLOT_NAME_MODAL_FOOTER = 'modal-footer';
var SLOT_NAME_MODAL_HEADER = 'modal-header';
var SLOT_NAME_MODAL_HEADER_CLOSE = 'modal-header-close';
var SLOT_NAME_MODAL_OK = 'modal-ok';
var SLOT_NAME_MODAL_TITLE = 'modal-title';
var SLOT_NAME_NAV_NEXT_DECADE = 'nav-next-decade';
var SLOT_NAME_NAV_NEXT_MONTH = 'nav-next-month';
var SLOT_NAME_NAV_NEXT_YEAR = 'nav-next-year';
var SLOT_NAME_NAV_PEV_DECADE = 'nav-prev-decade';
var SLOT_NAME_NAV_PEV_MONTH = 'nav-prev-month';
var SLOT_NAME_NAV_PEV_YEAR = 'nav-prev-year';
var SLOT_NAME_NAV_THIS_MONTH = 'nav-this-month';
var SLOT_NAME_NEXT_TEXT = 'next-text';
var SLOT_NAME_OVERLAY = 'overlay';
var SLOT_NAME_PAGE = 'page';
var SLOT_NAME_PLACEHOLDER = 'placeholder';
var SLOT_NAME_PREPEND = 'prepend';
var SLOT_NAME_PREV_TEXT = 'prev-text';
var SLOT_NAME_ROW_DETAILS = 'row-details';
var SLOT_NAME_TABLE_BUSY = 'table-busy';
var SLOT_NAME_TABLE_CAPTION = 'table-caption';
var SLOT_NAME_TABLE_COLGROUP = 'table-colgroup';
var SLOT_NAME_TABS_END = 'tabs-end';
var SLOT_NAME_TABS_START = 'tabs-start';
var SLOT_NAME_TEXT = 'text';
var SLOT_NAME_THEAD_TOP = 'thead-top';
var SLOT_NAME_TITLE = 'title';
var SLOT_NAME_TOAST_TITLE = 'toast-title';
var SLOT_NAME_TOP_ROW = 'top-row';
var SLOT_NAME_VALID_FEEDBACK = 'valid-feedback';

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/attrs.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/attrs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attrsMixin: () => (/* binding */ attrsMixin)
/* harmony export */ });
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cache */ "./node_modules/bootstrap-vue/esm/utils/cache.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var attrsMixinVue2 = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_0__.makePropCacheMixin)('$attrs', 'bvAttrs');
var attrsMixinVue3 = (0,_vue__WEBPACK_IMPORTED_MODULE_1__.extend)({
  computed: {
    bvAttrs: function bvAttrs() {
      var bvAttrs = _objectSpread({}, this.$attrs);

      Object.keys(bvAttrs).forEach(function (key) {
        if (bvAttrs[key] === undefined) {
          delete bvAttrs[key];
        }
      });
      return bvAttrs;
    }
  }
});
var attrsMixin = _vue__WEBPACK_IMPORTED_MODULE_1__.isVue3 ? attrsMixinVue3 : attrsMixinVue2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/id.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/id.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   idMixin: () => (/* binding */ idMixin),
/* harmony export */   props: () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
// SSR safe client-side ID attribute generation
// ID's can only be generated client-side, after mount
// `this._uid` is not synched between server and client


 // --- Props ---

var props = {
  id: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING)
}; // --- Mixin ---
// @vue/component

var idMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_2__.extend)({
  props: props,
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID
      // Reacts to changes in both `.id` and `.localId_` and regenerates a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method
      // but benefits from Vue's computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // `mounted()` only occurs client-side
    this.$nextTick(function () {
      // Update DOM with auto-generated ID after mount
      // to prevent SSR hydration errors
      _this.localId_ = "__BVID__".concat(_this[_vue__WEBPACK_IMPORTED_MODULE_2__.COMPONENT_UID_KEY]);
    });
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listen-on-document.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listen-on-document.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenOnDocumentMixin: () => (/* binding */ listenOnDocumentMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");





 // --- Constants ---

var PROP = '$_documentListeners'; // --- Mixin ---
// @vue/component

var listenOnDocumentMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  created: function created() {
    // Define non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of callbacks
    this[PROP] = {};
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    // Unregister all registered listeners
    (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.keys)(this[PROP] || {}).forEach(function (event) {
      _this[PROP][event].forEach(function (callback) {
        _this.listenOffDocument(event, callback);
      });
    });
    this[PROP] = null;
  },
  methods: {
    registerDocumentListener: function registerDocumentListener(event, callback) {
      if (this[PROP]) {
        this[PROP][event] = this[PROP][event] || [];

        if (!(0,_utils_array__WEBPACK_IMPORTED_MODULE_2__.arrayIncludes)(this[PROP][event], callback)) {
          this[PROP][event].push(callback);
        }
      }
    },
    unregisterDocumentListener: function unregisterDocumentListener(event, callback) {
      if (this[PROP] && this[PROP][event]) {
        this[PROP][event] = this[PROP][event].filter(function (cb) {
          return cb !== callback;
        });
      }
    },
    listenDocument: function listenDocument(on, event, callback) {
      on ? this.listenOnDocument(event, callback) : this.listenOffDocument(event, callback);
    },
    listenOnDocument: function listenOnDocument(event, callback) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_3__.IS_BROWSER) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_4__.eventOn)(document, event, callback, _constants_events__WEBPACK_IMPORTED_MODULE_5__.EVENT_OPTIONS_NO_CAPTURE);
        this.registerDocumentListener(event, callback);
      }
    },
    listenOffDocument: function listenOffDocument(event, callback) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_3__.IS_BROWSER) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_4__.eventOff)(document, event, callback, _constants_events__WEBPACK_IMPORTED_MODULE_5__.EVENT_OPTIONS_NO_CAPTURE);
      }

      this.unregisterDocumentListener(event, callback);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenOnRootMixin: () => (/* binding */ listenOnRootMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_get_event_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-event-root */ "./node_modules/bootstrap-vue/esm/utils/get-event-root.js");



 // --- Constants ---

var PROP = '$_rootListeners'; // --- Mixin ---
// @vue/component

var listenOnRootMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  computed: {
    bvEventRoot: function bvEventRoot() {
      return (0,_utils_get_event_root__WEBPACK_IMPORTED_MODULE_1__.getEventRoot)(this);
    }
  },
  created: function created() {
    // Define non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of callbacks
    this[PROP] = {};
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    // Unregister all registered listeners
    (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.keys)(this[PROP] || {}).forEach(function (event) {
      _this[PROP][event].forEach(function (callback) {
        _this.listenOffRoot(event, callback);
      });
    });
    this[PROP] = null;
  },
  methods: {
    registerRootListener: function registerRootListener(event, callback) {
      if (this[PROP]) {
        this[PROP][event] = this[PROP][event] || [];

        if (!(0,_utils_array__WEBPACK_IMPORTED_MODULE_3__.arrayIncludes)(this[PROP][event], callback)) {
          this[PROP][event].push(callback);
        }
      }
    },
    unregisterRootListener: function unregisterRootListener(event, callback) {
      if (this[PROP] && this[PROP][event]) {
        this[PROP][event] = this[PROP][event].filter(function (cb) {
          return cb !== callback;
        });
      }
    },

    /**
     * Safely register event listeners on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on `$root` and is destroyed,
     * this orphans a callback because the node is gone, but the `$root`
     * does not clear the callback
     *
     * When registering a `$root` listener, it also registers the listener
     * to be removed in the component's `beforeDestroy()` hook
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      if (this.bvEventRoot) {
        this.bvEventRoot.$on(event, callback);
        this.registerRootListener(event, callback);
      }
    },

    /**
     * Safely register a `$once()` event listener on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on `$root` and is destroyed,
     * this orphans a callback because the node is gone, but the `$root`
     * does not clear the callback
     *
     * When registering a `$root` listener, it also registers the listener
     * to be removed in the component's `beforeDestroy()` hook
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRootOnce: function listenOnRootOnce(event, callback) {
      var _this2 = this;

      if (this.bvEventRoot) {
        var _callback = function _callback() {
          _this2.unregisterRootListener(_callback); // eslint-disable-next-line node/no-callback-literal


          callback.apply(void 0, arguments);
        };

        this.bvEventRoot.$once(event, _callback);
        this.registerRootListener(event, _callback);
      }
    },

    /**
     * Safely unregister event listeners from the root Vue node
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOffRoot: function listenOffRoot(event, callback) {
      this.unregisterRootListener(event, callback);

      if (this.bvEventRoot) {
        this.bvEventRoot.$off(event, callback);
      }
    },

    /**
     * Convenience method for calling `vm.$emit()` on `$root`
     *
     * @param {string} event
     * @param {*} args
     */
    emitOnRoot: function emitOnRoot(event) {
      if (this.bvEventRoot) {
        var _this$bvEventRoot;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_this$bvEventRoot = this.bvEventRoot).$emit.apply(_this$bvEventRoot, [event].concat(args));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listen-on-window.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listen-on-window.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenOnWindowMixin: () => (/* binding */ listenOnWindowMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");





 // --- Constants ---

var PROP = '$_windowListeners'; // --- Mixin ---
// @vue/component

var listenOnWindowMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  created: function created() {
    // Define non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of callbacks
    this[PROP] = {};
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    // Unregister all registered listeners
    (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.keys)(this[PROP] || {}).forEach(function (event) {
      _this[PROP][event].forEach(function (callback) {
        _this.listenOffWindow(event, callback);
      });
    });
    this[PROP] = null;
  },
  methods: {
    registerWindowListener: function registerWindowListener(event, callback) {
      if (this[PROP]) {
        this[PROP][event] = this[PROP][event] || [];

        if (!(0,_utils_array__WEBPACK_IMPORTED_MODULE_2__.arrayIncludes)(this[PROP][event], callback)) {
          this[PROP][event].push(callback);
        }
      }
    },
    unregisterWindowListener: function unregisterWindowListener(event, callback) {
      if (this[PROP] && this[PROP][event]) {
        this[PROP][event] = this[PROP][event].filter(function (cb) {
          return cb !== callback;
        });
      }
    },
    listenWindow: function listenWindow(on, event, callback) {
      on ? this.listenOnWindow(event, callback) : this.listenOffWindow(event, callback);
    },
    listenOnWindow: function listenOnWindow(event, callback) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_3__.IS_BROWSER) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_4__.eventOn)(window, event, callback, _constants_events__WEBPACK_IMPORTED_MODULE_5__.EVENT_OPTIONS_NO_CAPTURE);
        this.registerWindowListener(event, callback);
      }
    },
    listenOffWindow: function listenOffWindow(event, callback) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_3__.IS_BROWSER) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_4__.eventOff)(window, event, callback, _constants_events__WEBPACK_IMPORTED_MODULE_5__.EVENT_OPTIONS_NO_CAPTURE);
      }

      this.unregisterWindowListener(event, callback);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listeners.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listeners.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenersMixin: () => (/* binding */ listenersMixin)
/* harmony export */ });
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cache */ "./node_modules/bootstrap-vue/esm/utils/cache.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var listenersMixinVue2 = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_0__.makePropCacheMixin)('$listeners', 'bvListeners');
var listenersMixinVue3 = (0,_vue__WEBPACK_IMPORTED_MODULE_1__.extend)({
  data: function data() {
    return {
      bvListeners: {}
    };
  },
  created: function created() {
    this.bvListeners = _objectSpread({}, this.$listeners);
  },
  beforeUpdate: function beforeUpdate() {
    this.bvListeners = _objectSpread({}, this.$listeners);
  }
});
var listenersMixin = _vue__WEBPACK_IMPORTED_MODULE_1__.isVue3 ? listenersMixinVue3 : listenersMixinVue2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeSlotMixin: () => (/* binding */ normalizeSlotMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/normalize-slot */ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");



 // @vue/component

var normalizeSlotMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  methods: {
    // Returns `true` if the either a `$scopedSlot` or `$slot` exists with the specified name
    // `name` can be a string name or an array of names
    hasNormalizedSlot: function hasNormalizedSlot() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_slots__WEBPACK_IMPORTED_MODULE_1__.SLOT_NAME_DEFAULT;
      var scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$scopedSlots;
      var slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$slots;
      return (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__.hasNormalizedSlot)(name, scopedSlots, slots);
    },
    // Returns an array of rendered VNodes if slot found, otherwise `undefined`
    // `name` can be a string name or an array of names
    normalizeSlot: function normalizeSlot() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_slots__WEBPACK_IMPORTED_MODULE_1__.SLOT_NAME_DEFAULT;
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$scopedSlots;
      var slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.$slots;

      var vNodes = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__.normalizeSlot)(name, scope, scopedSlots, slots);

      return vNodes ? (0,_utils_array__WEBPACK_IMPORTED_MODULE_3__.concat)(vNodes) : vNodes;
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/scoped-style.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/scoped-style.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scopedStyleMixin: () => (/* binding */ scopedStyleMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _mixins_use_parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/use-parent */ "./node_modules/bootstrap-vue/esm/mixins/use-parent.js");
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // @vue/component

var scopedStyleMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  mixins: [_mixins_use_parent__WEBPACK_IMPORTED_MODULE_1__.useParentMixin],
  computed: {
    scopedStyleAttrs: function scopedStyleAttrs() {
      var scopeId = (0,_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_2__.getScopeId)(this.bvParent);
      return scopeId ? _defineProperty({}, scopeId, '') : {};
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/use-parent.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/use-parent.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useParentMixin: () => (/* binding */ useParentMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
 // --- Mixin ---
// @vue/component

var useParentMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  computed: {
    bvParent: function bvParent() {
      return this.$parent || this.$root === this && this.$options.bvParent;
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/array.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/array.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayIncludes: () => (/* binding */ arrayIncludes),
/* harmony export */   concat: () => (/* binding */ concat),
/* harmony export */   createArray: () => (/* binding */ createArray),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   flattenDeep: () => (/* binding */ flattenDeep),
/* harmony export */   from: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
 // --- Static ---

var from = function from() {
  return Array.from.apply(Array, arguments);
}; // --- Instance ---

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
}; // --- Utilities ---

var createArray = function createArray(length, fillFn) {
  var mapFn = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isFunction)(fillFn) ? fillFn : function () {
    return fillFn;
  };
  return Array.apply(null, {
    length: length
  }).map(mapFn);
};
var flatten = function flatten(array) {
  return array.reduce(function (result, item) {
    return concat(result, item);
  }, []);
};
var flattenDeep = function flattenDeep(array) {
  return array.reduce(function (result, item) {
    return concat(result, Array.isArray(item) ? flattenDeep(item) : item);
  }, []);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/bv-event.class.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BvEvent: () => (/* binding */ BvEvent)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    (0,_object__WEBPACK_IMPORTED_MODULE_0__.assign)(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    (0,_object__WEBPACK_IMPORTED_MODULE_0__.defineProperties)(this, {
      type: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      cancelable: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      nativeEvent: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      target: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      relatedTarget: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      vueTarget: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      componentId: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    (0,_object__WEBPACK_IMPORTED_MODULE_0__.defineProperty)(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}();

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/cache.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/cache.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makePropCacheMixin: () => (/* binding */ makePropCacheMixin),
/* harmony export */   makePropWatcher: () => (/* binding */ makePropWatcher)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _loose_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var isEmpty = function isEmpty(value) {
  return !value || (0,_object__WEBPACK_IMPORTED_MODULE_0__.keys)(value).length === 0;
};

var makePropWatcher = function makePropWatcher(propName) {
  return {
    handler: function handler(newValue, oldValue) {
      if ((0,_loose_equal__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(newValue, oldValue)) {
        return;
      }

      if (isEmpty(newValue) || isEmpty(oldValue)) {
        this[propName] = (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(newValue);
        return;
      }

      for (var key in oldValue) {
        if (!(0,_object__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(newValue, key)) {
          this.$delete(this.$data[propName], key);
        }
      }

      for (var _key in newValue) {
        this.$set(this.$data[propName], _key, newValue[_key]);
      }
    }
  };
};
var makePropCacheMixin = function makePropCacheMixin(propName, proxyPropName) {
  return (0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
    data: function data() {
      return _defineProperty({}, proxyPropName, (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(this[propName]));
    },
    watch: _defineProperty({}, propName, makePropWatcher(proxyPropName))
  });
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/clone-deep.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneDeep: () => (/* binding */ cloneDeep)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(obj)) {
    return (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(obj).reduce(function (result, key) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/config.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBreakpoints: () => (/* binding */ getBreakpoints),
/* harmony export */   getBreakpointsCached: () => (/* binding */ getBreakpointsCached),
/* harmony export */   getBreakpointsDown: () => (/* binding */ getBreakpointsDown),
/* harmony export */   getBreakpointsDownCached: () => (/* binding */ getBreakpointsDownCached),
/* harmony export */   getBreakpointsUp: () => (/* binding */ getBreakpointsUp),
/* harmony export */   getBreakpointsUpCached: () => (/* binding */ getBreakpointsUpCached),
/* harmony export */   getComponentConfig: () => (/* binding */ getComponentConfig),
/* harmony export */   getConfig: () => (/* binding */ getConfig),
/* harmony export */   getConfigValue: () => (/* binding */ getConfigValue)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ "./node_modules/bootstrap-vue/esm/constants/config.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memoize */ "./node_modules/bootstrap-vue/esm/utils/memoize.js");



 // --- Constants ---

var VueProto = _vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype; // --- Getter methods ---
// All methods return a deep clone (immutable) copy of the config value,
// to prevent mutation of the user config object
// Get the current config

var getConfig = function getConfig() {
  var bvConfig = VueProto[_constants_config__WEBPACK_IMPORTED_MODULE_1__.PROP_NAME];
  return bvConfig ? bvConfig.getConfig() : {};
}; // Method to grab a config value based on a dotted/array notation key

var getConfigValue = function getConfigValue(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var bvConfig = VueProto[_constants_config__WEBPACK_IMPORTED_MODULE_1__.PROP_NAME];
  return bvConfig ? bvConfig.getConfigValue(key, defaultValue) : (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(defaultValue);
}; // Method to grab a config value for a particular component

var getComponentConfig = function getComponentConfig(key) {
  var propKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  // Return the particular config value for key if specified,
  // otherwise we return the full config (or an empty object if not found)
  return propKey ? getConfigValue("".concat(key, ".").concat(propKey), defaultValue) : getConfigValue(key, {});
}; // Get all breakpoint names

var getBreakpoints = function getBreakpoints() {
  return getConfigValue('breakpoints', _constants_config__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_BREAKPOINT);
}; // Private method for caching breakpoint names

var _getBreakpointsCached = (0,_memoize__WEBPACK_IMPORTED_MODULE_3__.memoize)(function () {
  return getBreakpoints();
}); // Get all breakpoint names (cached)


var getBreakpointsCached = function getBreakpointsCached() {
  return (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(_getBreakpointsCached());
}; // Get breakpoints with the smallest breakpoint set as ''
// Useful for components that create breakpoint specific props

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Get breakpoints with the smallest breakpoint set as '' (cached)
// Useful for components that create breakpoint specific props

var getBreakpointsUpCached = (0,_memoize__WEBPACK_IMPORTED_MODULE_3__.memoize)(function () {
  var breakpoints = getBreakpointsCached();
  breakpoints[0] = '';
  return breakpoints;
}); // Get breakpoints with the largest breakpoint set as ''

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Get breakpoints with the largest breakpoint set as '' (cached)
// Useful for components that create breakpoint specific props

/* istanbul ignore next: we don't use this method anywhere, yet */

var getBreakpointsDownCached = function getBreakpointsDownCached() {
  var breakpoints = getBreakpointsCached();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/create-new-child-component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/create-new-child-component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewChildComponent: () => (/* binding */ createNewChildComponent)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createNewChildComponent = function createNewChildComponent(parent, Component) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var bvEventRoot = parent.$root ? parent.$root.$options.bvEventRoot || parent.$root : null;
  return new Component(_objectSpread(_objectSpread({}, config), {}, {
    parent: parent,
    bvParent: parent,
    bvEventRoot: bvEventRoot
  }));
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/dom.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/dom.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutationObs: () => (/* binding */ MutationObs),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   attemptBlur: () => (/* binding */ attemptBlur),
/* harmony export */   attemptFocus: () => (/* binding */ attemptFocus),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   closestEl: () => (/* binding */ closestEl),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   getActiveElement: () => (/* binding */ getActiveElement),
/* harmony export */   getAttr: () => (/* binding */ getAttr),
/* harmony export */   getBCR: () => (/* binding */ getBCR),
/* harmony export */   getById: () => (/* binding */ getById),
/* harmony export */   getCS: () => (/* binding */ getCS),
/* harmony export */   getSel: () => (/* binding */ getSel),
/* harmony export */   getStyle: () => (/* binding */ getStyle),
/* harmony export */   getTabables: () => (/* binding */ getTabables),
/* harmony export */   hasAttr: () => (/* binding */ hasAttr),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   isActiveElement: () => (/* binding */ isActiveElement),
/* harmony export */   isDisabled: () => (/* binding */ isDisabled),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isTag: () => (/* binding */ isTag),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   matches: () => (/* binding */ matches),
/* harmony export */   matchesEl: () => (/* binding */ matchesEl),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   reflow: () => (/* binding */ reflow),
/* harmony export */   removeAttr: () => (/* binding */ removeAttr),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   removeNode: () => (/* binding */ removeNode),
/* harmony export */   removeStyle: () => (/* binding */ removeStyle),
/* harmony export */   requestAF: () => (/* binding */ requestAF),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   setAttr: () => (/* binding */ setAttr),
/* harmony export */   setStyle: () => (/* binding */ setStyle)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");





 // --- Constants ---

var ELEMENT_PROTO = _constants_safe_types__WEBPACK_IMPORTED_MODULE_0__.Element.prototype;
var TABABLE_SELECTOR = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]'].map(function (s) {
  return "".concat(s, ":not(:disabled):not([disabled])");
}).join(', '); // --- Normalization utils ---
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

/* istanbul ignore next */

var matchesEl = ELEMENT_PROTO.matches || ELEMENT_PROTO.msMatchesSelector || ELEMENT_PROTO.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/* istanbul ignore next */

var closestEl = ELEMENT_PROTO.closest || function (sel) {
  var el = this;

  do {
    // Use our "patched" matches function
    if (matches(el, sel)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (!(0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isNull)(el) && el.nodeType === Node.ELEMENT_NODE);

  return null;
}; // `requestAnimationFrame()` convenience method

/* istanbul ignore next: JSDOM always returns the first option */

var requestAF = (_constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.requestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.webkitRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.mozRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.msRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini

/* istanbul ignore next */
function (cb) {
  return setTimeout(cb, 16);
}).bind(_constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW);
var MutationObs = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.MutationObserver || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.WebKitMutationObserver || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.MozMutationObserver || null; // --- Utils ---
// Remove a node from DOM

var removeNode = function removeNode(el) {
  return el && el.parentNode && el.parentNode.removeChild(el);
}; // Determine if an element is an HTML element

var isElement = function isElement(el) {
  return !!(el && el.nodeType === Node.ELEMENT_NODE);
}; // Get the currently active HTML element

var getActiveElement = function getActiveElement() {
  var excludes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var activeElement = _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.activeElement;
  return activeElement && !excludes.some(function (el) {
    return el === activeElement;
  }) ? activeElement : null;
}; // Returns `true` if a tag's name equals `name`

var isTag = function isTag(tag, name) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_3__.toString)(tag).toLowerCase() === (0,_string__WEBPACK_IMPORTED_MODULE_3__.toString)(name).toLowerCase();
}; // Determine if an HTML element is the currently active element

var isActiveElement = function isActiveElement(el) {
  return isElement(el) && el === getActiveElement();
}; // Determine if an HTML element is visible - Faster than CSS check

var isVisible = function isVisible(el) {
  if (!isElement(el) || !el.parentNode || !contains(_constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.body, el)) {
    // Note this can fail for shadow dom elements since they
    // are not a direct descendant of document.body
    return false;
  }

  if (getStyle(el, 'display') === 'none') {
    // We do this check to help with vue-test-utils when using v-show

    /* istanbul ignore next */
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests


  var bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasAttr(el, 'disabled') || hasClass(el, 'disabled');
}; // Cause/wait-for an element to reflow its content (adjusting its height/width)

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found

var selectAll = function selectAll(selector, root) {
  return (0,_array__WEBPACK_IMPORTED_MODULE_4__.from)((isElement(root) ? root : _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT).querySelectorAll(selector));
}; // Select a single element, returns `null` if not found

var select = function select(selector, root) {
  return (isElement(root) ? root : _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT).querySelector(selector) || null;
}; // Determine if an element matches a selector

var matches = function matches(el, selector) {
  return isElement(el) ? matchesEl.call(el, selector) : false;
}; // Finds closest element matching selector. Returns `null` if not found

var closest = function closest(selector, root) {
  var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isElement(root)) {
    return null;
  }

  var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey

  return includeRoot ? el : el === root ? null : el;
}; // Returns true if the parent element contains the child element

var contains = function contains(parent, child) {
  return parent && (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isFunction)(parent.contains) ? parent.contains(child) : false;
}; // Get an element given an ID

var getById = function getById(id) {
  return _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element

var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
}; // Remove an attribute from an element

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element
// Returns `null` if not found

var getAttr = function getAttr(el, attr) {
  return attr && isElement(el) ? el.getAttribute(attr) : null;
}; // Determine if an attribute exists on an element
// Returns `true` or `false`, or `null` if element not found

var hasAttr = function hasAttr(el, attr) {
  return attr && isElement(el) ? el.hasAttribute(attr) : null;
}; // Set an style property on an element

var setStyle = function setStyle(el, prop, value) {
  if (prop && isElement(el)) {
    el.style[prop] = value;
  }
}; // Remove an style property from an element

var removeStyle = function removeStyle(el, prop) {
  if (prop && isElement(el)) {
    el.style[prop] = '';
  }
}; // Get an style property value from an element
// Returns `null` if not found

var getStyle = function getStyle(el, prop) {
  return prop && isElement(el) ? el.style[prop] || null : null;
}; // Return the Bounding Client Rect of an element
// Returns `null` if not an element

/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */

var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element

/* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */

var getCS = function getCS(el) {
  var getComputedStyle = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getComputedStyle;
  return getComputedStyle && isElement(el) ? getComputedStyle(el) : {};
}; // Returns a `Selection` object representing the range of text selected
// Returns `null` if no window support is given

/* istanbul ignore next: getSelection() doesn't work in JSDOM */

var getSel = function getSel() {
  var getSelection = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getSelection;
  return getSelection ? _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getSelection() : null;
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to its offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = getCS(offsetParent);
      parentOffset.top += (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(offsetParentStyles.borderTopWidth, 0);
      parentOffset.left += (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(offsetParentStyles.borderLeftWidth, 0);
    }
  }

  return {
    top: _offset.top - parentOffset.top - (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(elStyles.marginTop, 0),
    left: _offset.left - parentOffset.left - (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(elStyles.marginLeft, 0)
  };
}; // Find all tabable elements in the given element
// Assumes users have not used `tabindex` > `0` on elements

var getTabables = function getTabables() {
  var rootEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return selectAll(TABABLE_SELECTOR, rootEl).filter(isVisible).filter(function (el) {
    return el.tabIndex > -1 && !el.disabled;
  });
}; // Attempt to focus an element, and return `true` if successful

var attemptFocus = function attemptFocus(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    el.focus(options);
  } catch (_unused) {}

  return isActiveElement(el);
}; // Attempt to blur an element, and return `true` if successful

var attemptBlur = function attemptBlur(el) {
  try {
    el.blur();
  } catch (_unused2) {}

  return !isActiveElement(el);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/env.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/env.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnv: () => (/* binding */ getEnv),
/* harmony export */   getNoWarn: () => (/* binding */ getNoWarn)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
/**
 * Utilities to get information about the current environment
 */
var getEnv = function getEnv(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var env = typeof process !== 'undefined' && process ? process.env || {} : {};

  if (!key) {
    /* istanbul ignore next */
    return env;
  }

  return env[key] || fallback;
};
var getNoWarn = function getNoWarn() {
  return getEnv('BOOTSTRAP_VUE_NO_WARN') || getEnv('NODE_ENV') === 'production';
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/events.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/events.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOff: () => (/* binding */ eventOff),
/* harmony export */   eventOn: () => (/* binding */ eventOn),
/* harmony export */   eventOnOff: () => (/* binding */ eventOnOff),
/* harmony export */   getRootActionEventName: () => (/* binding */ getRootActionEventName),
/* harmony export */   getRootEventName: () => (/* binding */ getRootEventName),
/* harmony export */   parseEventOptions: () => (/* binding */ parseEventOptions),
/* harmony export */   stopEvent: () => (/* binding */ stopEvent)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");




 // --- Utils ---
// Normalize event options based on support of passive option
// Exported only for testing purposes

var parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_0__.HAS_PASSIVE_EVENT_SUPPORT) {
    return (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isObject)(options) ? options : {
      capture: !!options || false
    };
  } else {
    // Need to translate to actual Boolean value
    return !!((0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isObject)(options) ? options.capture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, eventName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(eventName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element

var eventOff = function eventOff(el, eventName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(eventName, handler, parseEventOptions(options));
  }
}; // Utility method to add/remove a event listener based on first argument (boolean)
// It passes all other arguments to the `eventOn()` or `eventOff` method

var eventOnOff = function eventOnOff(on) {
  var method = on ? eventOn : eventOff;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  method.apply(void 0, args);
}; // Utility method to prevent the default event handling and propagation

var stopEvent = function stopEvent(event) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault,
      _ref$propagation = _ref.propagation,
      propagation = _ref$propagation === void 0 ? true : _ref$propagation,
      _ref$immediatePropaga = _ref.immediatePropagation,
      immediatePropagation = _ref$immediatePropaga === void 0 ? false : _ref$immediatePropaga;

  if (preventDefault) {
    event.preventDefault();
  }

  if (propagation) {
    event.stopPropagation();
  }

  if (immediatePropagation) {
    event.stopImmediatePropagation();
  }
}; // Helper method to convert a component/directive name to a base event name
// `getBaseEventName('BNavigationItem')` => 'navigation-item'
// `getBaseEventName('BVToggle')` => 'toggle'

var getBaseEventName = function getBaseEventName(value) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(value.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_3__.RX_BV_PREFIX, ''));
}; // Get a root event name by component/directive and event name
// `getBaseEventName('BModal', 'show')` => 'bv::modal::show'


var getRootEventName = function getRootEventName(name, eventName) {
  return [_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_PREFIX, getBaseEventName(name), eventName].join(_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_SEPARATOR);
}; // Get a root action event name by component/directive and action name
// `getRootActionEventName('BModal', 'show')` => 'bv::show::modal'

var getRootActionEventName = function getRootActionEventName(name, actionName) {
  return [_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_PREFIX, actionName, getBaseEventName(name)].join(_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_SEPARATOR);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/get-event-root.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/get-event-root.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEventRoot: () => (/* binding */ getEventRoot)
/* harmony export */ });
var getEventRoot = function getEventRoot(vm) {
  return vm.$root.$options.bvEventRoot || vm.$root;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/get-scope-id.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScopeId: () => (/* binding */ getScopeId)
/* harmony export */ });
// This method returns a component's scoped style attribute name: `data-v-xxxxxxx`
// The `_scopeId` options property is added by vue-loader when using scoped styles
// and will be `undefined` if no scoped styles are in use
var getScopeId = function getScopeId(vm) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return vm ? vm.$options._scopeId || defaultValue : defaultValue;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/html.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/html.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlOrText: () => (/* binding */ htmlOrText),
/* harmony export */   stripTags: () => (/* binding */ stripTags)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
 // Removes anything that looks like an HTML tag from the supplied string

var stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_HTML_TAGS, '');
}; // Generate a `domProps` object for either `innerHTML`, `textContent` or an empty object

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/identity.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/identity.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
var identity = function identity(x) {
  return x;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/inspect.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/inspect.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isEmptyString: () => (/* binding */ isEmptyString),
/* harmony export */   isEvent: () => (/* binding */ isEvent),
/* harmony export */   isFile: () => (/* binding */ isFile),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isNumeric: () => (/* binding */ isNumeric),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   isUndefinedOrNull: () => (/* binding */ isUndefinedOrNull),
/* harmony export */   isUndefinedOrNullOrEmpty: () => (/* binding */ isUndefinedOrNullOrEmpty),
/* harmony export */   toRawType: () => (/* binding */ toRawType),
/* harmony export */   toRawTypeLC: () => (/* binding */ toRawTypeLC),
/* harmony export */   toType: () => (/* binding */ toType)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


 // --- Convenience inspection utilities ---

var toType = function toType(value) {
  return _typeof(value);
};
var toRawType = function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
};
var toRawTypeLC = function toRawTypeLC(value) {
  return toRawType(value).toLowerCase();
};
var isUndefined = function isUndefined(value) {
  return value === undefined;
};
var isNull = function isNull(value) {
  return value === null;
};
var isEmptyString = function isEmptyString(value) {
  return value === '';
};
var isUndefinedOrNull = function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
};
var isUndefinedOrNullOrEmpty = function isUndefinedOrNullOrEmpty(value) {
  return isUndefinedOrNull(value) || isEmptyString(value);
};
var isFunction = function isFunction(value) {
  return toType(value) === 'function';
};
var isBoolean = function isBoolean(value) {
  return toType(value) === 'boolean';
};
var isString = function isString(value) {
  return toType(value) === 'string';
};
var isNumber = function isNumber(value) {
  return toType(value) === 'number';
};
var isNumeric = function isNumeric(value) {
  return _constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_NUMBER.test(String(value));
};
var isPrimitive = function isPrimitive(value) {
  return isBoolean(value) || isString(value) || isNumber(value);
};
var isArray = function isArray(value) {
  return Array.isArray(value);
}; // Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}; // Strict object type check
// Only returns true for plain JavaScript objects

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
var isDate = function isDate(value) {
  return value instanceof Date;
};
var isEvent = function isEvent(value) {
  return value instanceof Event;
};
var isFile = function isFile(value) {
  return value instanceof _constants_safe_types__WEBPACK_IMPORTED_MODULE_1__.File;
};
var isRegExp = function isRegExp(value) {
  return toRawType(value) === 'RegExp';
};
var isPromise = function isPromise(value) {
  return !isUndefinedOrNull(value) && isFunction(value.then) && isFunction(value.catch);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/loose-equal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   looseEqual: () => (/* binding */ looseEqual)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");

 // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isDate)(a);
  var bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isDate)(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(a);
  bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(a);
  bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(a).length;
    var bKeysCount = (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = (0,_object__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(a, key);
      var bHasKey = (0,_object__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(b, key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/memoize.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/memoize.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoize: () => (/* binding */ memoize)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");

var memoize = function memoize(fn) {
  var cache = (0,_object__WEBPACK_IMPORTED_MODULE_0__.create)(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/model.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/model.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeModelMixin: () => (/* binding */ makeModelMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var makeModelMixin = function makeModelMixin(prop) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? _constants_props__WEBPACK_IMPORTED_MODULE_0__.PROP_TYPE_ANY : _ref$type,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? undefined : _ref$defaultValue,
      _ref$validator = _ref.validator,
      validator = _ref$validator === void 0 ? undefined : _ref$validator,
      _ref$event = _ref.event,
      event = _ref$event === void 0 ? _constants_events__WEBPACK_IMPORTED_MODULE_1__.EVENT_NAME_INPUT : _ref$event;

  var props = _defineProperty({}, prop, (0,_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(type, defaultValue, validator)); // @vue/component


  var mixin = (0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
    model: {
      prop: prop,
      event: event
    },
    props: props
  });
  return {
    mixin: mixin,
    props: props,
    prop: prop,
    event: event
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/normalize-slot.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasNormalizedSlot: () => (/* binding */ hasNormalizedSlot),
/* harmony export */   normalizeSlot: () => (/* binding */ normalizeSlot)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");


 // Note for functional components:
// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot exists
 *
 * @param {String, Array} name or name[]
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var hasNormalizedSlot = function hasNormalizedSlot(names) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Ensure names is an array
  names = (0,_array__WEBPACK_IMPORTED_MODULE_0__.concat)(names).filter(_identity__WEBPACK_IMPORTED_MODULE_1__.identity); // Returns true if the either a $scopedSlot or $slot exists with the specified name

  return names.some(function (name) {
    return $scopedSlots[name] || $slots[name];
  });
};
/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var normalizeSlot = function normalizeSlot(names) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Ensure names is an array
  names = (0,_array__WEBPACK_IMPORTED_MODULE_0__.concat)(names).filter(_identity__WEBPACK_IMPORTED_MODULE_1__.identity);
  var slot;

  for (var i = 0; i < names.length && !slot; i++) {
    var name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  } // Note: in Vue 2.6.x, all named slots are also scoped slots


  return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(slot) ? slot(scope) : slot;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/number.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/number.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toFixed: () => (/* binding */ toFixed),
/* harmony export */   toFloat: () => (/* binding */ toFloat),
/* harmony export */   toInteger: () => (/* binding */ toInteger)
/* harmony export */ });
// Number utilities
// Converts a value (string, number, etc.) to an integer number
// Assumes radix base 10
var toInteger = function toInteger(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
}; // Converts a value (string, number, etc.) to a number

var toFloat = function toFloat(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var float = parseFloat(value);
  return isNaN(float) ? defaultValue : float;
}; // Converts a value (string, number, etc.) to a string
// representation with `precision` digits after the decimal
// Returns the string 'NaN' if the value cannot be converted

var toFixed = function toFixed(val, precision) {
  return toFloat(val).toFixed(toInteger(precision, 0));
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/object.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   defineProperties: () => (/* binding */ defineProperties),
/* harmony export */   defineProperty: () => (/* binding */ defineProperty),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   getOwnPropertyDescriptor: () => (/* binding */ getOwnPropertyDescriptor),
/* harmony export */   getOwnPropertyNames: () => (/* binding */ getOwnPropertyNames),
/* harmony export */   getOwnPropertySymbols: () => (/* binding */ getOwnPropertySymbols),
/* harmony export */   getPrototypeOf: () => (/* binding */ getPrototypeOf),
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isFrozen: () => (/* binding */ isFrozen),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   mergeDeep: () => (/* binding */ mergeDeep),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   readonlyDescriptor: () => (/* binding */ readonlyDescriptor),
/* harmony export */   sortKeys: () => (/* binding */ sortKeys),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // --- Static ---

var assign = function assign() {
  return Object.assign.apply(Object, arguments);
};
var create = function create(proto, optionalProps) {
  return Object.create(proto, optionalProps);
};
var defineProperties = function defineProperties(obj, props) {
  return Object.defineProperties(obj, props);
};
var defineProperty = function defineProperty(obj, prop, descriptor) {
  return Object.defineProperty(obj, prop, descriptor);
};
var freeze = function freeze(obj) {
  return Object.freeze(obj);
};
var getOwnPropertyNames = function getOwnPropertyNames(obj) {
  return Object.getOwnPropertyNames(obj);
};
var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(obj, prop) {
  return Object.getOwnPropertyDescriptor(obj, prop);
};
var getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  return Object.getOwnPropertySymbols(obj);
};
var getPrototypeOf = function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
};
var is = function is(value1, value2) {
  return Object.is(value1, value2);
};
var isFrozen = function isFrozen(obj) {
  return Object.isFrozen(obj);
};
var keys = function keys(obj) {
  return Object.keys(obj);
}; // --- "Instance" ---

var hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
var toString = function toString(obj) {
  return Object.prototype.toString.call(obj);
}; // --- Utilities ---
// Shallow copy an object

var clone = function clone(obj) {
  return _objectSpread({}, obj);
}; // Return a shallow copy of object with the specified properties only
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var pick = function pick(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) !== -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Return a shallow copy of object with the specified properties omitted
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var omit = function omit(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Merges two object deeply together
// See: https://gist.github.com/Salakar/1d7137de9cb8b704e48a

var mergeDeep = function mergeDeep(target, source) {
  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(target) && (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(source)) {
    keys(source).forEach(function (key) {
      if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(source[key])) {
        if (!target[key] || !(0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(target[key])) {
          target[key] = source[key];
        }

        mergeDeep(target[key], source[key]);
      } else {
        assign(target, _defineProperty({}, key, source[key]));
      }
    });
  }

  return target;
}; // Returns a shallow copy of the object with keys in sorted order

var sortKeys = function sortKeys(obj) {
  return keys(obj).sort().reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Convenience method to create a read-only descriptor

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/observe-dom.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/observe-dom.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeDom: () => (/* binding */ observeDom)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warn */ "./node_modules/bootstrap-vue/esm/utils/warn.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [options={childList: true, subtree: true}] observe options
 * @see https://stackoverflow.com/questions/3219758
 */

var observeDom = function observeDom(el, callback, options)
/* istanbul ignore next: difficult to test in JSDOM */
{
  // Handle cases where we might be passed a Vue instance
  el = el ? el.$el || el : null; // Early exit when we have no element

  /* istanbul ignore next: difficult to test in JSDOM */

  if (!(0,_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(el)) {
    return null;
  } // Exit and throw a warning when `MutationObserver` isn't available


  if ((0,_warn__WEBPACK_IMPORTED_MODULE_1__.warnNoMutationObserverSupport)('observeDom')) {
    return null;
  } // Define a new observer


  var obs = new _dom__WEBPACK_IMPORTED_MODULE_0__.MutationObs(function (mutations) {
    var changed = false; // A mutation can contain several change records, so we loop
    // through them to see what has changed
    // We break out of the loop early if any "significant" change
    // has been detected

    for (var i = 0; i < mutations.length && !changed; i++) {
      // The mutation record
      var mutation = mutations[i]; // Mutation type

      var type = mutation.type; // DOM node (could be any DOM node type - HTMLElement, Text, comment, etc.)

      var target = mutation.target; // Detect whether a change happened based on type and target

      if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
        // We ignore nodes that are not TEXT (i.e. comments, etc.)
        // as they don't change layout
        changed = true;
      } else if (type === 'attributes') {
        changed = true;
      } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
        // This includes HTMLElement and text nodes being
        // added/removed/re-arranged
        changed = true;
      }
    } // We only call the callback if a change that could affect
    // layout/size truly happened


    if (changed) {
      callback();
    }
  }); // Have the observer observe foo for changes in children, etc

  obs.observe(el, _objectSpread({
    childList: true,
    subtree: true
  }, options)); // We return a reference to the observer so that `obs.disconnect()`
  // can be called if necessary
  // To reduce overhead when the root element is hidden

  return obs;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/props.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/props.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyProps: () => (/* binding */ copyProps),
/* harmony export */   hasPropFunction: () => (/* binding */ hasPropFunction),
/* harmony export */   makeProp: () => (/* binding */ makeProp),
/* harmony export */   makePropConfigurable: () => (/* binding */ makePropConfigurable),
/* harmony export */   makePropsConfigurable: () => (/* binding */ makePropsConfigurable),
/* harmony export */   pluckProps: () => (/* binding */ pluckProps),
/* harmony export */   prefixPropName: () => (/* binding */ prefixPropName),
/* harmony export */   suffixPropName: () => (/* binding */ suffixPropName),
/* harmony export */   unprefixPropName: () => (/* binding */ unprefixPropName)
/* harmony export */ });
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Prefix a property

var prefixPropName = function prefixPropName(prefix, value) {
  return prefix + (0,_string__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(value);
}; // Remove a prefix from a property

var unprefixPropName = function unprefixPropName(prefix, value) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_0__.lowerFirst)(value.replace(prefix, ''));
}; // Suffix can be a falsey value so nothing is appended to string
// (helps when looping over props & some shouldn't change)
// Use data last parameters to allow for currying

var suffixPropName = function suffixPropName(suffix, value) {
  return value + (suffix ? (0,_string__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(suffix) : '');
}; // Generates a prop object

var makeProp = function makeProp() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ANY;
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var requiredOrValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var validator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var required = requiredOrValidator === true;
  validator = required ? validator : requiredOrValidator;
  return _objectSpread(_objectSpread(_objectSpread({}, type ? {
    type: type
  } : {}), required ? {
    required: required
  } : (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value) ? {} : {
    default: (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isObject)(value) ? function () {
      return value;
    } : value
  }), (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(validator) ? {} : {
    validator: validator
  });
}; // Copies props from one array/object to a new array/object
// Prop values are also cloned as new references to prevent possible
// mutation of original prop object values
// Optionally accepts a function to transform the prop name

var copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity__WEBPACK_IMPORTED_MODULE_3__.identity;

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(props)) {
    return props.map(transformFn);
  }

  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    if ((0,_object__WEBPACK_IMPORTED_MODULE_4__.hasOwnProperty)(props, prop)) {
      // If the prop value is an object, do a shallow clone
      // to prevent potential mutations to the original object
      copied[transformFn(prop)] = (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isObject)(props[prop]) ? (0,_object__WEBPACK_IMPORTED_MODULE_4__.clone)(props[prop]) : props[prop];
    }
  }

  return copied;
}; // Given an array of properties or an object of property keys,
// plucks all the values off the target object, returning a new object
// that has props that reference the original prop values

var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity__WEBPACK_IMPORTED_MODULE_3__.identity;
  return ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(keysToPluck) ? keysToPluck.slice() : (0,_object__WEBPACK_IMPORTED_MODULE_4__.keys)(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
}; // Make a prop object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var makePropConfigurable = function makePropConfigurable(prop, key, componentKey) {
  return _objectSpread(_objectSpread({}, (0,_clone_deep__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(prop)), {}, {
    default: function bvConfigurablePropDefault() {
      var value = (0,_config__WEBPACK_IMPORTED_MODULE_6__.getComponentConfig)(componentKey, key, prop.default);
      return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(value) ? value() : value;
    }
  });
}; // Make a props object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var makePropsConfigurable = function makePropsConfigurable(props, componentKey) {
  return (0,_object__WEBPACK_IMPORTED_MODULE_4__.keys)(props).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, makePropConfigurable(props[key], key, componentKey)));
  }, {});
}; // Get function name we use in `makePropConfigurable()`
// for the prop default value override to compare
// against in `hasPropFunction()`

var configurablePropDefaultFnName = makePropConfigurable({}, '', '').default.name; // Detect wether the given value is currently a function
// and isn't the props default function

var hasPropFunction = function hasPropFunction(fn) {
  return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(fn) && fn.name && fn.name !== configurablePropDefaultFnName;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/router.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/router.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeHref: () => (/* binding */ computeHref),
/* harmony export */   computeRel: () => (/* binding */ computeRel),
/* harmony export */   computeTag: () => (/* binding */ computeTag),
/* harmony export */   isLink: () => (/* binding */ isLink),
/* harmony export */   isRouterLink: () => (/* binding */ isRouterLink),
/* harmony export */   parseQuery: () => (/* binding */ parseQuery),
/* harmony export */   stringifyQueryObj: () => (/* binding */ stringifyQueryObj)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe-vue-instance */ "./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");






var ANCHOR_TAG = 'a'; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent((0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(str)).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_ENCODE_REVERSE, encodeReserveReplacer).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_ENCODED_COMMA, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!(0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(obj)) {
    return '';
  }

  var query = (0,_object__WEBPACK_IMPORTED_MODULE_3__.keys)(obj).map(function (key) {
    var value = obj[key];

    if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value)) {
      return '';
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(value)) {
      return encode(key);
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
      return value.reduce(function (results, value2) {
        if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(value2)) {
          results.push(encode(key));
        } else if (!(0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value2)) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(value2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(value);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};
var parseQuery = function parseQuery(query) {
  var parsed = {};
  query = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(query).trim().replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_QUERY_START, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_PLUS, ' ').split('=');
    var key = decode(parts.shift());
    var value = parts.length > 0 ? decode(parts.join('=')) : null;

    if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(parsed[key])) {
      parsed[key] = value;
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(parsed[key])) {
      parsed[key].push(value);
    } else {
      parsed[key] = [parsed[key], value];
    }
  });
  return parsed;
};
var isLink = function isLink(props) {
  return !!(props.href || props.to);
};
var isRouterLink = function isRouterLink(tag) {
  return !!(tag && !(0,_dom__WEBPACK_IMPORTED_MODULE_4__.isTag)(tag, 'a'));
};
var computeTag = function computeTag(_ref, thisOrParent) {
  var to = _ref.to,
      disabled = _ref.disabled,
      routerComponentName = _ref.routerComponentName;
  var hasRouter = !!(0,_safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__.safeVueInstance)(thisOrParent).$router;
  var hasNuxt = !!(0,_safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__.safeVueInstance)(thisOrParent).$nuxt;

  if (!hasRouter || hasRouter && (disabled || !to)) {
    return ANCHOR_TAG;
  } // TODO:
  //   Check registered components for existence of user supplied router link component name
  //   We would need to check PascalCase, kebab-case, and camelCase versions of name:
  //   const name = routerComponentName
  //   const names = [name, PascalCase(name), KebabCase(name), CamelCase(name)]
  //   exists = names.some(name => !!thisOrParent.$options.components[name])
  //   And may want to cache the result for performance or we just let the render fail
  //   if the component is not registered


  return routerComponentName || (hasNuxt ? 'nuxt-link' : 'router-link');
};
var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  return target === '_blank' && (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(rel) ? 'noopener' : rel || null;
};
var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // Return `href` when explicitly provided
  if (href) {
    return href;
  } // We've checked for `$router` in `computeTag()`, so `isRouterLink()` indicates a live router
  // When deferring to Vue Router's `<router-link>`, don't use the `href` attribute at all
  // We return `null`, and then remove `href` from the attributes passed to `<router-link>`


  if (isRouterLink(tag)) {
    return null;
  } // Fallback to `to` prop (if `to` is a string)


  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isString)(to)) {
    return to || toFallback;
  } // Fallback to `to.path' + `to.query` + `to.hash` prop (if `to` is an object)


  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(to) && (to.path || to.query || to.hash)) {
    var path = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(to.path);
    var query = stringifyQueryObj(to.query);
    var hash = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(to.hash);
    hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
    return "".concat(path).concat(query).concat(hash) || toFallback;
  } // If nothing is provided return the fallback


  return fallback;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeVueInstance: () => (/* binding */ safeVueInstance)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");

function safeVueInstance(target) {
  if (!_vue__WEBPACK_IMPORTED_MODULE_0__.isVue3) {
    return target;
  }

  return new Proxy(target, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : undefined;
    }
  });
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/string.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/string.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeRegExp: () => (/* binding */ escapeRegExp),
/* harmony export */   kebabCase: () => (/* binding */ kebabCase),
/* harmony export */   lowerCase: () => (/* binding */ lowerCase),
/* harmony export */   lowerFirst: () => (/* binding */ lowerFirst),
/* harmony export */   pascalCase: () => (/* binding */ pascalCase),
/* harmony export */   startCase: () => (/* binding */ startCase),
/* harmony export */   toString: () => (/* binding */ toString),
/* harmony export */   trim: () => (/* binding */ trim),
/* harmony export */   trimLeft: () => (/* binding */ trimLeft),
/* harmony export */   trimRight: () => (/* binding */ trimRight),
/* harmony export */   upperCase: () => (/* binding */ upperCase),
/* harmony export */   upperFirst: () => (/* binding */ upperFirst)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
// String utilities

 // --- Utilities ---
// Converts PascalCase or camelCase to kebab-case

var kebabCase = function kebabCase(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_HYPHENATE, '-$1').toLowerCase();
}; // Converts a kebab-case or camelCase string to PascalCase

var pascalCase = function pascalCase(str) {
  str = kebabCase(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_UN_KEBAB, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Converts a string, including strings in camelCase or snake_case, into Start Case
// It keeps original single quote and hyphen in the word
// https://github.com/UrbanCompass/to-start-case

var startCase = function startCase(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_UNDERSCORE, ' ').replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_LOWER_UPPER, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_START_SPACE_WORD, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}; // Lowercases the first letter of a string and returns a new string

var lowerFirst = function lowerFirst(str) {
  str = (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isString)(str) ? str.trim() : String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
}; // Uppercases the first letter of a string and returns a new string

var upperFirst = function upperFirst(str) {
  str = (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isString)(str) ? str.trim() : String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Escape characters to be used in building a regular expression

var escapeRegExp = function escapeRegExp(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_REGEXP_REPLACE, '\\$&');
}; // Convert a value to a string that can be rendered
// `undefined`/`null` will be converted to `''`
// Plain objects and arrays will be JSON stringified

var toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isUndefinedOrNull)(val) ? '' : (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isArray)(val) || (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
}; // Remove leading white space from a string

var trimLeft = function trimLeft(str) {
  return toString(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_TRIM_LEFT, '');
}; // Remove Trailing white space from a string

var trimRight = function trimRight(str) {
  return toString(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_TRIM_RIGHT, '');
}; // Remove leading and trailing white space from a string

var trim = function trim(str) {
  return toString(str).trim();
}; // Lower case a string

var lowerCase = function lowerCase(str) {
  return toString(str).toLowerCase();
}; // Upper case a string

var upperCase = function upperCase(str) {
  return toString(str).toUpperCase();
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/warn.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/warn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warn: () => (/* binding */ warn),
/* harmony export */   warnNoMutationObserverSupport: () => (/* binding */ warnNoMutationObserverSupport),
/* harmony export */   warnNoPromiseSupport: () => (/* binding */ warnNoPromiseSupport),
/* harmony export */   warnNotClient: () => (/* binding */ warnNotClient)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/esm/utils/env.js");


/**
 * Log a warning message to the console with BootstrapVue formatting
 * @param {string} message
 */

var warn = function warn(message)
/* istanbul ignore next */
{
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!(0,_env__WEBPACK_IMPORTED_MODULE_0__.getNoWarn)()) {
    console.warn("[BootstrapVue warn]: ".concat(source ? "".concat(source, " - ") : '').concat(message));
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNotClient = function warnNotClient(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER) {
    return false;
  } else {
    warn("".concat(source, ": Can not be called during SSR."));
    return true;
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNoPromiseSupport = function warnNoPromiseSupport(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.HAS_PROMISE_SUPPORT) {
    return false;
  } else {
    warn("".concat(source, ": Requires Promise support."));
    return true;
  }
};
/**
 * Warn when no MutationObserver support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNoMutationObserverSupport = function warnNoMutationObserverSupport(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.HAS_MUTATION_OBSERVER_SUPPORT) {
    return false;
  } else {
    warn("".concat(source, ": Requires MutationObserver support."));
    return true;
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/vue.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/vue.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPONENT_UID_KEY: () => (/* binding */ COMPONENT_UID_KEY),
/* harmony export */   REF_FOR_KEY: () => (/* binding */ REF_FOR_KEY),
/* harmony export */   Vue: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   isVue3: () => (/* binding */ isVue3),
/* harmony export */   mergeData: () => (/* reexport safe */ vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__.mergeData),
/* harmony export */   nextTick: () => (/* binding */ nextTick)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


 // --- Constants ---

var COMPONENT_UID_KEY = '_uid';
var isVue3 = vue__WEBPACK_IMPORTED_MODULE_1__["default"].version.startsWith('3');
var REF_FOR_KEY = isVue3 ? 'ref_for' : 'refInFor';
var ALLOWED_FIELDS_IN_DATA = ['class', 'staticClass', 'style', 'attrs', 'props', 'domProps', 'on', 'nativeOn', 'directives', 'scopedSlots', 'slot', 'key', 'ref', 'refInFor'];
var extend = vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend.bind(vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

if (isVue3) {
  var originalExtend = vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend;
  var KNOWN_COMPONENTS = ['router-link', 'transition', 'transition-group'];
  var originalVModelDynamicCreated = vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.created;
  var originalVModelDynamicBeforeUpdate = vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.beforeUpdate; // See https://github.com/vuejs/vue-next/pull/4121 for details

  vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.created = function (el, binding, vnode) {
    originalVModelDynamicCreated.call(this, el, binding, vnode);

    if (!el._assign) {
      el._assign = function () {};
    }
  };

  vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.beforeUpdate = function (el, binding, vnode) {
    originalVModelDynamicBeforeUpdate.call(this, el, binding, vnode);

    if (!el._assign) {
      el._assign = function () {};
    }
  };

  extend = function patchedBootstrapVueExtend(definition) {
    if (_typeof(definition) === 'object' && definition.render && !definition.__alreadyPatched) {
      var originalRender = definition.render;
      definition.__alreadyPatched = true;

      definition.render = function (h) {
        var patchedH = function patchedH(tag, dataObjOrChildren, rawSlots) {
          var slots = rawSlots === undefined ? [] : [Array.isArray(rawSlots) ? rawSlots.filter(Boolean) : rawSlots];
          var isTag = typeof tag === 'string' && !KNOWN_COMPONENTS.includes(tag);
          var isSecondArgumentDataObject = dataObjOrChildren && _typeof(dataObjOrChildren) === 'object' && !Array.isArray(dataObjOrChildren);

          if (!isSecondArgumentDataObject) {
            return h.apply(void 0, [tag, dataObjOrChildren].concat(slots));
          }

          var attrs = dataObjOrChildren.attrs,
              props = dataObjOrChildren.props,
              restData = _objectWithoutProperties(dataObjOrChildren, ["attrs", "props"]);

          var normalizedData = _objectSpread(_objectSpread({}, restData), {}, {
            attrs: attrs,
            props: isTag ? {} : props
          });

          if (tag === 'router-link' && !normalizedData.slots && !normalizedData.scopedSlots) {
            // terrible workaround to fix router-link rendering with compat vue-router
            normalizedData.scopedSlots = {
              $hasNormal: function $hasNormal() {}
            };
          }

          return h.apply(void 0, [tag, normalizedData].concat(slots));
        };

        if (definition.functional) {
          var _ctx$children, _ctx$children$default;

          var ctx = arguments[1];

          var patchedCtx = _objectSpread({}, ctx);

          patchedCtx.data = {
            attrs: _objectSpread({}, ctx.data.attrs || {}),
            props: _objectSpread({}, ctx.data.props || {})
          };
          Object.keys(ctx.data || {}).forEach(function (key) {
            if (ALLOWED_FIELDS_IN_DATA.includes(key)) {
              patchedCtx.data[key] = ctx.data[key];
            } else if (key in ctx.props) {
              patchedCtx.data.props[key] = ctx.data[key];
            } else if (!key.startsWith('on')) {
              patchedCtx.data.attrs[key] = ctx.data[key];
            }
          });
          var IGNORED_CHILDREN_KEYS = ['_ctx'];
          var children = ((_ctx$children = ctx.children) === null || _ctx$children === void 0 ? void 0 : (_ctx$children$default = _ctx$children.default) === null || _ctx$children$default === void 0 ? void 0 : _ctx$children$default.call(_ctx$children)) || ctx.children;

          if (children && Object.keys(patchedCtx.children).filter(function (k) {
            return !IGNORED_CHILDREN_KEYS.includes(k);
          }).length === 0) {
            delete patchedCtx.children;
          } else {
            patchedCtx.children = children;
          }

          patchedCtx.data.on = ctx.listeners;
          return originalRender.call(this, patchedH, patchedCtx);
        }

        return originalRender.call(this, patchedH);
      };
    }

    return originalExtend.call(this, definition);
  }.bind(vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

var nextTick = vue__WEBPACK_IMPORTED_MODULE_1__["default"].nextTick;


/***/ }),

/***/ "./node_modules/vue-functional-data-merge/dist/lib.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-functional-data-merge/dist/lib.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeData: () => (/* binding */ a)
/* harmony export */ });
var e=function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l)}return a}function a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y))}arguments[c].style=i}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t])}return a}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ "./resources/js/Store/modules/Perm/PermList.vue":
/*!******************************************************!*\
  !*** ./resources/js/Store/modules/Perm/PermList.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PermList_vue_vue_type_template_id_624bfa09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermList.vue?vue&type=template&id=624bfa09& */ "./resources/js/Store/modules/Perm/PermList.vue?vue&type=template&id=624bfa09&");
/* harmony import */ var _PermList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermList.vue?vue&type=script&lang=js& */ "./resources/js/Store/modules/Perm/PermList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermList_vue_vue_type_template_id_624bfa09___WEBPACK_IMPORTED_MODULE_0__.render,
  _PermList_vue_vue_type_template_id_624bfa09___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Store/modules/Perm/PermList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Store/modules/Perm/PermList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Store/modules/Perm/PermList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/Perm/PermList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Store/modules/Perm/PermList.vue?vue&type=template&id=624bfa09&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Store/modules/Perm/PermList.vue?vue&type=template&id=624bfa09& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermList_vue_vue_type_template_id_624bfa09___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermList_vue_vue_type_template_id_624bfa09___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermList_vue_vue_type_template_id_624bfa09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermList.vue?vue&type=template&id=624bfa09& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Store/modules/Perm/PermList.vue?vue&type=template&id=624bfa09&");


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