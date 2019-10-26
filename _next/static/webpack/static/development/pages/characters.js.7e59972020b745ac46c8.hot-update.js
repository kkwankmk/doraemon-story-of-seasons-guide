webpackHotUpdate("static/development/pages/characters.js",{

/***/ "./src/modules/character/index.js":
/*!****************************************!*\
  !*** ./src/modules/character/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_collapse_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/collapse/style */ "./node_modules/antd/lib/collapse/style/index.js");
/* harmony import */ var antd_lib_collapse_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/collapse */ "./node_modules/antd/lib/collapse/index.js");
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _core_components_pageContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/components/pageContent */ "./src/modules/core/components/pageContent/index.js");
/* harmony import */ var _core_components_pageTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/components/pageTitle */ "./src/modules/core/components/pageTitle/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/utils */ "./src/modules/core/utils.js");








var _jsxFileName = "/Users/kkwankmk/Code/doraemon/src/modules/character/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var Panel = antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7___default.a.Panel;
var StyledCol = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "character__StyledCol",
  componentId: "sc-17ebgbo-0"
})(["margin-bottom:8px;"]);
var StyledName = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "character__StyledName",
  componentId: "sc-17ebgbo-1"
})(["font-size:1.2rem;color:", ";margin-bottom:5px;"], function (props) {
  return props.theme.colors.primary3;
});
var StyledDescription = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "character__StyledDescription",
  componentId: "sc-17ebgbo-2"
})(["font-size:0.9rem;"]);
var StyledCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "character__StyledCard",
  componentId: "sc-17ebgbo-3"
})(["box-shadow:2px 2px 2px 0px rgba(0,0,0,0.1);-moz-box-shadow:2px 2px 2px 0px rgba(0,0,0,0.1);"]);
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  displayName: "character__StyledHeader",
  componentId: "sc-17ebgbo-4"
})(["color:", ";line-height:2rem;font-size:1.3rem;"], function (props) {
  return props.theme.colors.primary2;
});
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
}, {
  group: 'West Natura Villagers',
  characters: [{
    image: '/images/characters/harmon.jpg',
    name: 'Harmon',
    description: 'First Villager to Meet',
    item: 'Tempura / Potato / Sunflower / Fodder'
  }, {
    image: '/images/characters/ravi.jpg',
    name: 'Ravi',
    description: 'Grandmother of Harmon',
    item: 'Namasu / Fertilizer / Burdock'
  }, {
    image: '/images/characters/helen.jpg',
    name: 'Helen',
    description: 'Mother of Cooper. Cuckoo House Chicken Owner.',
    item: 'Walnut Bread / Strawberry / Goldfish / Egg'
  }, {
    image: '/images/characters/henson.jpg',
    name: 'Henson',
    description: 'Father of Cooper. Cuckoo House Chicken Owner.',
    item: 'Fritter / Gratin'
  }, {
    image: '/images/characters/cooper.jpg',
    name: 'Cooper',
    description: 'Son of Helen and Henson. Cuckoo House Chicken Owner',
    item: 'Mantis / Horned Atlas / Mayonnaise / Honeybee'
  }, {
    image: '/images/characters/taurus.jpg',
    name: 'Taurus',
    description: 'Grandfather of Rem. Gouter Mawk Livestock Owner',
    item: 'Plum / Milk'
  }, {
    image: '/images/characters/aries.jpg',
    name: 'Aries',
    description: 'Grandmother of Rem. Gouter Mawk Livestock Owner',
    item: 'Boiled Carp / Peas / Iris'
  }, {
    image: '/images/characters/rem.jpg',
    name: 'Rem',
    description: 'Granddaughter of Aries and Taurus. Gouter Mawk Livestock Owner',
    item: 'Pudding / Dandelion / Morning Glory'
  }]
}, {
  group: 'East Natura Villagers',
  characters: [{
    image: '/images/characters/smitty.jpg',
    name: 'Smitty',
    description: 'Father of Blake. Anvil - Blacksmith Owner',
    item: 'Lightly Roasted Bonito / Copper Ore'
  }, {
    image: '/images/characters/blake.jpg',
    name: 'Blake',
    description: 'Son of Smitty. Anvil - Blacksmith Owner',
    item: 'Ajillo / Iron Ore / Cucumber'
  }, {
    image: '/images/characters/gennie.jpg',
    name: 'Gennie',
    description: 'Mother of Jemma, Wife of Mark. Knick Knacks General Store Owner',
    item: 'Carpaccio / Wheat / Carnation'
  }, {
    image: '/images/characters/mark.jpg',
    name: 'Mark',
    description: 'Father of Jemma, Husband of Gennie. Knick Knacks General Store Owner',
    item: 'Gratin / Pot-au-feu / Cauliflower / Ant'
  }, {
    image: '/images/characters/jemma.jpg',
    name: 'Jemma',
    description: 'Daughter of Gennie and Mark. Knick Knacks General Store Owner',
    item: 'Apple Tart / Carrots / P. Daisy'
  }, {
    image: '/images/characters/regis.jpg',
    name: 'Regis',
    description: "Doctor of Town's Clinic",
    item: 'Stir-fry / Strange Food / Spices'
  }, {
    image: '/images/characters/serena.jpg',
    name: 'Serena',
    description: "Nurse of Town's Clinic",
    item: 'Terine / Shortcake / Shepherd’s purse / Aloe'
  }, {
    image: '/images/characters/cafet.jpg',
    name: 'Cafet',
    description: 'Chef Cook. Cafe Delish Owner',
    item: 'Sandwich / Bean Paste / Apple'
  }, {
    image: '/images/characters/eria.jpg',
    name: 'Eria',
    description: 'Wife of Cafet. Cafe Delish Owner',
    item: 'Spring Salad / Sauteed / Salad / Lily / Wheat Flour / Melon'
  }]
}, {
  group: 'Other Characters',
  characters: [{
    image: '/images/characters/pent.jpg',
    name: 'Pent',
    description: 'Carpenter Shop Owner',
    item: 'Udon / Royal Fern / Hard Wood'
  }, {
    image: '/images/characters/sandy.jpg',
    name: 'Sandy',
    description: 'Tackle Shop Owner',
    item: 'Marlin / Ground Bait / Firewood / Squid'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_core_components_pageContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7___default.a, {
    bordered: false,
    defaultActiveKey: ['2'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, data.map(function (d, index) {
    return __jsx(Panel, {
      header: __jsx(StyledHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, d.group),
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      gutter: 16,
      type: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, d.characters.map(function (character) {
      return __jsx(StyledCol, {
        xs: 24,
        md: 12,
        key: character.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, __jsx(StyledCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, __jsx("img", {
        src: Object(_core_utils__WEBPACK_IMPORTED_MODULE_12__["getAssetPrefix"])(character.image),
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, __jsx(StyledName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, character.name), __jsx(StyledDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, character.description))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Gift: ", character.item || '-')));
    })));
  })));
});

/***/ })

})
//# sourceMappingURL=characters.js.7e59972020b745ac46c8.hot-update.js.map