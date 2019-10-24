webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/modules/home/cardMenu.js":
/*!**************************************!*\
  !*** ./src/modules/home/cardMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/carousel/style */ "./node_modules/antd/lib/carousel/style/index.js");
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/carousel */ "./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/utils */ "./src/modules/core/utils.js");









var _jsxFileName = "/Users/kkwankmk/Code/doraemon/src/modules/home/cardMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_8___default.a.Meta;
var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_6___default.a).withConfig({
  displayName: "cardMenu__Wrapper",
  componentId: "sc-244m8m-0"
})(["margin:25px 0;"]);
var StyledCarousel = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "cardMenu__StyledCarousel",
  componentId: "sc-244m8m-1"
})([".slick-dots.slick-dots-bottom{bottom:-20px;.slick-active{button{background:#d92139;}}button{background:#253f58;}}"]);
var data = [{
  title: 'Guides',
  image: '/images/cards/guides.jpg'
}, {
  title: 'Characters',
  image: '/images/cards/characters.jpg'
}, {
  title: 'Festivals',
  image: '/images/cards/festivals.jpg'
}, {
  title: 'Events',
  image: '/images/cards/events.jpg'
}];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(Wrapper, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(StyledCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), data.map(function (d) {
    return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: d.title,
      sm: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_8___default.a, {
      hoverable: true,
      cover: __jsx("img", {
        src: Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["getAssetPrefix"])(d.image),
        height: "150px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(Meta, {
      title: d.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.b4d427d4d606e508f543.hot-update.js.map