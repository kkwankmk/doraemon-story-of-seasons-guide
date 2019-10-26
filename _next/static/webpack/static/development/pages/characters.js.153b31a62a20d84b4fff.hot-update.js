webpackHotUpdate("static/development/pages/characters.js",{

/***/ "./src/modules/character/index.js":
/*!****************************************!*\
  !*** ./src/modules/character/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _core_components_pageContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/components/pageContent */ "./src/modules/core/components/pageContent/index.js");
/* harmony import */ var _core_components_pageTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/components/pageTitle */ "./src/modules/core/components/pageTitle/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/utils */ "./src/modules/core/utils.js");






var _jsxFileName = "/Users/kkwankmk/Code/doraemon/src/modules/character/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var StyledCol = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "character__StyledCol",
  componentId: "sc-17ebgbo-0"
})(["margin-bottom:8px;"]);
var StyledName = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "character__StyledName",
  componentId: "sc-17ebgbo-1"
})(["font-size:1.2rem;color:", ";margin-bottom:5px;"], function (props) {
  return props.theme.colors.primary3;
});
var StyledDescription = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "character__StyledDescription",
  componentId: "sc-17ebgbo-2"
})(["font-size:0.9rem;"]);
var data = [{
  group: 'Main Characters',
  characters: [{
    image: '/images/characters/noby.jpg',
    name: 'Noby',
    description: 'Description'
  }, {
    image: '/images/characters/doraemon.jpg',
    name: 'Doraemon',
    description: 'A blue cat-type robot from the twenty second century, Doraemon provides his friends with gadgets from the future.',
    item: 'Dorayaki / Sunflower'
  }, {
    image: '/images/characters/sue.jpg',
    name: 'Sue',
    description: 'Sue is a character in Doraemon: Story of Seasons.',
    item: 'Baked Sweet Potato / P. Daisy / Sweet Potato'
  }, {
    image: '/images/characters/big_g.jpg',
    name: 'Big G',
    description: 'Big G is a character in Doraemon: Story of Seasons.',
    item: 'Curry / Normal Wood'
  }, {
    image: '/images/characters/sneech.jpg',
    name: 'Sneech',
    description: 'Sneech is a character in Doraemon: Story of Seasons.',
    item: 'Truffled Egg / Marlin Steak / Melon / Diamond'
  }, {
    image: '/images/characters/ryam.jpg',
    name: 'Ryam',
    description: 'Mayor',
    item: 'Sashimi Boat / Daikon / Matsutake'
  }, {
    image: '/images/characters/vera.jpg',
    name: 'Vera',
    description: 'Vera is the Harvest Goddess in Doraemon Story of Seasons. You can first meet her on Spring 10 when walking from your farm to West Natura, which will trigger a cutscene with Grandma Ravi and Harmon inspiring Noby to look for the Goddess. Vera can normally be found at Big Tree Root which is accessible via a small path in Swoosh Falls. Like many of us, Vera is not much of a morning person.',
    item: 'Cabbage / Compote / Yogurt'
  }]
}]; // const data = [
//   {
//     image: '/images/characters/noby.jpg',
//     name: 'Noby',
//     description: 'Description'
//   },
//   {
//     image: '/images/characters/doraemon.jpg',
//     name: 'Doraemon',
//     description:
//       'A blue cat-type robot from the twenty second century, Doraemon provides his friends with gadgets from the future.',
//     item: 'Dorayaki / Sunflower'
//   },
//   {
//     image: '/images/characters/sue.jpg',
//     name: 'Sue',
//     description: 'Sue is a character in Doraemon: Story of Seasons.',
//     item: 'Baked Sweet Potato / P. Daisy / Sweet Potato'
//   },
//   {
//     image: '/images/characters/big_g.jpg',
//     name: 'Big G',
//     description: 'Big G is a character in Doraemon: Story of Seasons.',
//     item: 'Curry / Normal Wood'
//   },
//   {
//     image: '/images/characters/sneech.jpg',
//     name: 'Sneech',
//     description: 'Sneech is a character in Doraemon: Story of Seasons.',
//     item: 'Truffled Egg / Marlin Steak / Melon / Diamond'
//   },
//   {
//     image: '/images/characters/ryam.jpg',
//     name: 'Ryam',
//     description: 'Mayor',
//     item: 'Sashimi Boat / Daikon / Matsutake'
//   },
//   {
//     image: '/images/characters/vera.jpg',
//     name: 'Vera',
//     description:
//       'Vera is the Harvest Goddess in Doraemon Story of Seasons. You can first meet her on Spring 10 when walking from your farm to West Natura, which will trigger a cutscene with Grandma Ravi and Harmon inspiring Noby to look for the Goddess. Vera can normally be found at Big Tree Root which is accessible via a small path in Swoosh Falls. Like many of us, Vera is not much of a morning person.',
//     item: 'Cabbage / Compote / Yogurt'
//   }
// ];

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_core_components_pageContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, data.map(function (d) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_core_components_pageTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: d.group,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutter: 16,
      type: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, data.map(function (d) {
      return __jsx(StyledCol, {
        xs: 24,
        md: 12,
        key: d.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bordered: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("img", {
        src: Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["getAssetPrefix"])(d.image),
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(StyledName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, d.name), __jsx(StyledDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, d.description))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Gift: ", d.item || '-')));
    })));
  }), __jsx(_core_components_pageTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Main Characters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: 16,
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, data.map(function (d) {
    return __jsx(StyledCol, {
      xs: 24,
      md: 12,
      key: d.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      bordered: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutter: 16,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("img", {
      src: Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["getAssetPrefix"])(d.image),
      width: "100%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 16,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx(StyledName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, d.name), __jsx(StyledDescription, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, d.description))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Gift: ", d.item || '-')));
  })));
});

/***/ })

})
//# sourceMappingURL=characters.js.153b31a62a20d84b4fff.hot-update.js.map