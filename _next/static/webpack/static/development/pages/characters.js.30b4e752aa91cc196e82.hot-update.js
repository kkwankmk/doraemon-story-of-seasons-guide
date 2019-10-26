webpackHotUpdate("static/development/pages/characters.js",{

/***/ "./node_modules/antd/lib/_util/styleChecker.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/_util/styleChecker.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isFlexSupported = void 0;

var isStyleSupport = function isStyleSupport(styleName) {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }

  return false;
};

var isFlexSupported = isStyleSupport(['flex', 'webkitFlex', 'Flex', 'msFlex']);
exports.isFlexSupported = isFlexSupported;
var _default = isStyleSupport;
exports["default"] = _default;
//# sourceMappingURL=styleChecker.js.map


/***/ }),

/***/ "./node_modules/antd/lib/card/Grid.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/card/Grid.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Grid = function Grid(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        _props$hoverable = props.hoverable,
        hoverable = _props$hoverable === void 0 ? true : _props$hoverable,
        others = __rest(props, ["prefixCls", "className", "hoverable"]);

    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = (0, _classnames["default"])("".concat(prefixCls, "-grid"), className, _defineProperty({}, "".concat(prefixCls, "-grid-hoverable"), hoverable));
    return React.createElement("div", _extends({}, others, {
      className: classString
    }));
  });
};

var _default = Grid;
exports["default"] = _default;
//# sourceMappingURL=Grid.js.map


/***/ }),

/***/ "./node_modules/antd/lib/card/Meta.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/card/Meta.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Meta = function Meta(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = (0, _classnames["default"])("".concat(prefixCls, "-meta"), className);
    var avatarDom = avatar ? React.createElement("div", {
      className: "".concat(prefixCls, "-meta-avatar")
    }, avatar) : null;
    var titleDom = title ? React.createElement("div", {
      className: "".concat(prefixCls, "-meta-title")
    }, title) : null;
    var descriptionDom = description ? React.createElement("div", {
      className: "".concat(prefixCls, "-meta-description")
    }, description) : null;
    var MetaDetail = titleDom || descriptionDom ? React.createElement("div", {
      className: "".concat(prefixCls, "-meta-detail")
    }, titleDom, descriptionDom) : null;
    return React.createElement("div", _extends({}, others, {
      className: classString
    }), avatarDom, MetaDetail);
  });
};

var _default = Meta;
exports["default"] = _default;
//# sourceMappingURL=Meta.js.map


/***/ }),

/***/ "./node_modules/antd/lib/card/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/card/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _Grid = _interopRequireDefault(__webpack_require__(/*! ./Grid */ "./node_modules/antd/lib/card/Grid.js"));

var _Meta = _interopRequireDefault(__webpack_require__(/*! ./Meta */ "./node_modules/antd/lib/card/Meta.js"));

var _tabs = _interopRequireDefault(__webpack_require__(/*! ../tabs */ "./node_modules/antd/lib/tabs/index.js"));

var _row = _interopRequireDefault(__webpack_require__(/*! ../row */ "./node_modules/antd/lib/row/index.js"));

var _col = _interopRequireDefault(__webpack_require__(/*! ../col */ "./node_modules/antd/lib/col/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function getAction(actions) {
  var actionList = actions.map(function (action, index) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, React.createElement("span", null, action))
    );
  });
  return actionList;
}

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _this;

    _classCallCheck(this, Card);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));

    _this.onTabChange = function (key) {
      if (_this.props.onTabChange) {
        _this.props.onTabChange(key);
      }
    };

    _this.renderCard = function (_ref) {
      var _classNames, _extraProps;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          extra = _a.extra,
          _a$headStyle = _a.headStyle,
          headStyle = _a$headStyle === void 0 ? {} : _a$headStyle,
          _a$bodyStyle = _a.bodyStyle,
          bodyStyle = _a$bodyStyle === void 0 ? {} : _a$bodyStyle,
          title = _a.title,
          loading = _a.loading,
          _a$bordered = _a.bordered,
          bordered = _a$bordered === void 0 ? true : _a$bordered,
          _a$size = _a.size,
          size = _a$size === void 0 ? 'default' : _a$size,
          type = _a.type,
          cover = _a.cover,
          actions = _a.actions,
          tabList = _a.tabList,
          children = _a.children,
          activeTabKey = _a.activeTabKey,
          defaultActiveTabKey = _a.defaultActiveTabKey,
          tabBarExtraContent = _a.tabBarExtraContent,
          others = __rest(_a, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent"]);

      var prefixCls = getPrefixCls('card', customizePrefixCls);
      var classString = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classNames, "".concat(prefixCls, "-hoverable"), _this.getCompatibleHoverable()), _defineProperty(_classNames, "".concat(prefixCls, "-contain-grid"), _this.isContainGrid()), _defineProperty(_classNames, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), size !== 'default'), _defineProperty(_classNames, "".concat(prefixCls, "-type-").concat(type), !!type), _classNames));
      var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
        padding: 24
      } : undefined;
      var loadingBlock = React.createElement("div", {
        className: "".concat(prefixCls, "-loading-content"),
        style: loadingBlockStyle
      }, React.createElement(_row["default"], {
        gutter: 8
      }, React.createElement(_col["default"], {
        span: 22
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), React.createElement(_row["default"], {
        gutter: 8
      }, React.createElement(_col["default"], {
        span: 8
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), React.createElement(_col["default"], {
        span: 15
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), React.createElement(_row["default"], {
        gutter: 8
      }, React.createElement(_col["default"], {
        span: 6
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), React.createElement(_col["default"], {
        span: 18
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), React.createElement(_row["default"], {
        gutter: 8
      }, React.createElement(_col["default"], {
        span: 13
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), React.createElement(_col["default"], {
        span: 9
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), React.createElement(_row["default"], {
        gutter: 8
      }, React.createElement(_col["default"], {
        span: 4
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), React.createElement(_col["default"], {
        span: 3
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), React.createElement(_col["default"], {
        span: 16
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))));
      var hasActiveTabKey = activeTabKey !== undefined;
      var extraProps = (_extraProps = {}, _defineProperty(_extraProps, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), _defineProperty(_extraProps, "tabBarExtraContent", tabBarExtraContent), _extraProps);
      var head;
      var tabs = tabList && tabList.length ? React.createElement(_tabs["default"], _extends({}, extraProps, {
        className: "".concat(prefixCls, "-head-tabs"),
        size: "large",
        onChange: _this.onTabChange
      }), tabList.map(function (item) {
        return React.createElement(_tabs["default"].TabPane, {
          tab: item.tab,
          disabled: item.disabled,
          key: item.key
        });
      })) : null;

      if (title || extra || tabs) {
        head = React.createElement("div", {
          className: "".concat(prefixCls, "-head"),
          style: headStyle
        }, React.createElement("div", {
          className: "".concat(prefixCls, "-head-wrapper")
        }, title && React.createElement("div", {
          className: "".concat(prefixCls, "-head-title")
        }, title), extra && React.createElement("div", {
          className: "".concat(prefixCls, "-extra")
        }, extra)), tabs);
      }

      var coverDom = cover ? React.createElement("div", {
        className: "".concat(prefixCls, "-cover")
      }, cover) : null;
      var body = React.createElement("div", {
        className: "".concat(prefixCls, "-body"),
        style: bodyStyle
      }, loading ? loadingBlock : children);
      var actionDom = actions && actions.length ? React.createElement("ul", {
        className: "".concat(prefixCls, "-actions")
      }, getAction(actions)) : null;
      var divProps = (0, _omit["default"])(others, ['onTabChange', 'noHovering', 'hoverable']);
      return React.createElement("div", _extends({}, divProps, {
        className: classString
      }), head, coverDom, body, actionDom);
    };

    return _this;
  }

  _createClass(Card, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('noHovering' in this.props) {
        (0, _warning["default"])(!this.props.noHovering, 'Card', '`noHovering` is deprecated, you can remove it safely or use `hoverable` instead.');
        (0, _warning["default"])(!!this.props.noHovering, 'Card', '`noHovering={false}` is deprecated, use `hoverable` instead.');
      }
    } // For 2.x compatible

  }, {
    key: "getCompatibleHoverable",
    value: function getCompatibleHoverable() {
      var _this$props = this.props,
          noHovering = _this$props.noHovering,
          hoverable = _this$props.hoverable;

      if ('noHovering' in this.props) {
        return !noHovering || hoverable;
      }

      return !!hoverable;
    }
  }, {
    key: "isContainGrid",
    value: function isContainGrid() {
      var containGrid;
      React.Children.forEach(this.props.children, function (element) {
        if (element && element.type && element.type === _Grid["default"]) {
          containGrid = true;
        }
      });
      return containGrid;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderCard);
    }
  }]);

  return Card;
}(React.Component);

exports["default"] = Card;
Card.Grid = _Grid["default"];
Card.Meta = _Meta["default"];
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/card/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/card/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/card/style/index.less");

__webpack_require__(/*! ../../tabs/style */ "./node_modules/antd/lib/tabs/style/index.js");

__webpack_require__(/*! ../../row/style */ "./node_modules/antd/lib/row/style/index.js");

__webpack_require__(/*! ../../col/style */ "./node_modules/antd/lib/col/style/index.js");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/tabs/TabBar.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/tabs/TabBar.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ScrollableInkTabBar = _interopRequireDefault(__webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "./node_modules/rc-tabs/lib/ScrollableInkTabBar.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabBar, _React$Component);

  function TabBar() {
    _classCallCheck(this, TabBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabBar).apply(this, arguments));
  }

  _createClass(TabBar, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          tabBarStyle = _this$props.tabBarStyle,
          animated = _this$props.animated,
          renderTabBar = _this$props.renderTabBar,
          tabBarExtraContent = _this$props.tabBarExtraContent,
          tabPosition = _this$props.tabPosition,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          size = _this$props.size,
          type = _this$props.type;
      var inkBarAnimated = _typeof(animated) === 'object' ? animated.inkBar : animated;
      var isVertical = tabPosition === 'left' || tabPosition === 'right';
      var prevIconType = isVertical ? 'up' : 'left';
      var nextIconType = isVertical ? 'down' : 'right';
      var prevIcon = React.createElement("span", {
        className: "".concat(prefixCls, "-tab-prev-icon")
      }, React.createElement(_icon["default"], {
        type: prevIconType,
        className: "".concat(prefixCls, "-tab-prev-icon-target")
      }));
      var nextIcon = React.createElement("span", {
        className: "".concat(prefixCls, "-tab-next-icon")
      }, React.createElement(_icon["default"], {
        type: nextIconType,
        className: "".concat(prefixCls, "-tab-next-icon-target")
      })); // Additional className for style usage

      var cls = (0, _classnames["default"])("".concat(prefixCls, "-").concat(tabPosition, "-bar"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size, "-bar"), !!size), _defineProperty(_classNames, "".concat(prefixCls, "-card-bar"), type && type.indexOf('card') >= 0), _classNames), className);

      var renderProps = _extends(_extends({}, this.props), {
        children: null,
        inkBarAnimated: inkBarAnimated,
        extraContent: tabBarExtraContent,
        style: tabBarStyle,
        prevIcon: prevIcon,
        nextIcon: nextIcon,
        className: cls
      });

      var RenderTabBar;

      if (renderTabBar) {
        RenderTabBar = renderTabBar(renderProps, _ScrollableInkTabBar["default"]);
      } else {
        RenderTabBar = React.createElement(_ScrollableInkTabBar["default"], renderProps);
      }

      return React.cloneElement(RenderTabBar);
    }
  }]);

  return TabBar;
}(React.Component);

exports["default"] = TabBar;
TabBar.defaultProps = {
  animated: true,
  type: 'line'
};
//# sourceMappingURL=TabBar.js.map


/***/ }),

/***/ "./node_modules/antd/lib/tabs/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/tabs/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ReactDOM = _interopRequireWildcard(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _rcTabs = _interopRequireWildcard(__webpack_require__(/*! rc-tabs */ "./node_modules/rc-tabs/es/index.js"));

var _TabContent = _interopRequireDefault(__webpack_require__(/*! rc-tabs/lib/TabContent */ "./node_modules/rc-tabs/lib/TabContent.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _TabBar = _interopRequireDefault(__webpack_require__(/*! ./TabBar */ "./node_modules/antd/lib/tabs/TabBar.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

var _styleChecker = __webpack_require__(/*! ../_util/styleChecker */ "./node_modules/antd/lib/_util/styleChecker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));

    _this.removeTab = function (targetKey, e) {
      e.stopPropagation();

      if (!targetKey) {
        return;
      }

      var onEdit = _this.props.onEdit;

      if (onEdit) {
        onEdit(targetKey, 'remove');
      }
    };

    _this.handleChange = function (activeKey) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(activeKey);
      }
    };

    _this.createNewTab = function (targetKey) {
      var onEdit = _this.props.onEdit;

      if (onEdit) {
        onEdit(targetKey, 'add');
      }
    };

    _this.renderTabs = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          size = _this$props.size,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'line' : _this$props$type,
          tabPosition = _this$props.tabPosition,
          children = _this$props.children,
          _this$props$animated = _this$props.animated,
          animated = _this$props$animated === void 0 ? true : _this$props$animated,
          hideAdd = _this$props.hideAdd;
      var tabBarExtraContent = _this.props.tabBarExtraContent;
      var tabPaneAnimated = _typeof(animated) === 'object' ? animated.tabPane : animated; // card tabs should not have animation

      if (type !== 'line') {
        tabPaneAnimated = 'animated' in _this.props ? tabPaneAnimated : false;
      }

      (0, _warning["default"])(!(type.indexOf('card') >= 0 && (size === 'small' || size === 'large')), 'Tabs', "`type=card|editable-card` doesn't have small or large size, it's by design.");
      var prefixCls = getPrefixCls('tabs', customizePrefixCls);
      var cls = (0, _classnames["default"])(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), tabPosition === 'left' || tabPosition === 'right'), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _defineProperty(_classNames, "".concat(prefixCls, "-card"), type.indexOf('card') >= 0), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), true), _defineProperty(_classNames, "".concat(prefixCls, "-no-animation"), !tabPaneAnimated), _classNames)); // only card type tabs can be added and closed

      var childrenWithClose = [];

      if (type === 'editable-card') {
        childrenWithClose = [];
        React.Children.forEach(children, function (child, index) {
          if (!React.isValidElement(child)) return child;
          var closable = child.props.closable;
          closable = typeof closable === 'undefined' ? true : closable;
          var closeIcon = closable ? React.createElement(_icon["default"], {
            type: "close",
            className: "".concat(prefixCls, "-close-x"),
            onClick: function onClick(e) {
              return _this.removeTab(child.key, e);
            }
          }) : null;
          childrenWithClose.push(React.cloneElement(child, {
            tab: React.createElement("div", {
              className: closable ? undefined : "".concat(prefixCls, "-tab-unclosable")
            }, child.props.tab, closeIcon),
            key: child.key || index
          }));
        }); // Add new tab handler

        if (!hideAdd) {
          tabBarExtraContent = React.createElement("span", null, React.createElement(_icon["default"], {
            type: "plus",
            className: "".concat(prefixCls, "-new-tab"),
            onClick: _this.createNewTab
          }), tabBarExtraContent);
        }
      }

      tabBarExtraContent = tabBarExtraContent ? React.createElement("div", {
        className: "".concat(prefixCls, "-extra-content")
      }, tabBarExtraContent) : null;

      var tabBarProps = __rest(_this.props, []);

      var contentCls = (0, _classnames["default"])("".concat(prefixCls, "-").concat(tabPosition, "-content"), type.indexOf('card') >= 0 && "".concat(prefixCls, "-card-content"));
      return React.createElement(_rcTabs["default"], _extends({}, _this.props, {
        prefixCls: prefixCls,
        className: cls,
        tabBarPosition: tabPosition,
        renderTabBar: function renderTabBar() {
          return React.createElement(_TabBar["default"], _extends({}, (0, _omit["default"])(tabBarProps, ['className']), {
            tabBarExtraContent: tabBarExtraContent
          }));
        },
        renderTabContent: function renderTabContent() {
          return React.createElement(_TabContent["default"], {
            className: contentCls,
            animated: tabPaneAnimated,
            animatedWithMargin: true
          });
        },
        onChange: _this.handleChange
      }), childrenWithClose.length > 0 ? childrenWithClose : children);
    };

    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var NO_FLEX = ' no-flex';
      var tabNode = ReactDOM.findDOMNode(this);

      if (tabNode && !_styleChecker.isFlexSupported && tabNode.className.indexOf(NO_FLEX) === -1) {
        tabNode.className += NO_FLEX;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderTabs);
    }
  }]);

  return Tabs;
}(React.Component);

exports["default"] = Tabs;
Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
  hideAdd: false,
  tabPosition: 'top'
};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/tabs/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/tabs/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/tabs/style/index.less");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/rc-tabs/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-tabs/es/KeyCode.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40 // also NUM_SOUTH
});

/***/ }),

/***/ "./node_modules/rc-tabs/es/Sentinel.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tabs/es/Sentinel.js ***!
  \*********************************************/
/*! exports provided: SentinelProvider, SentinelConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentinelProvider", function() { return SentinelProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentinelConsumer", function() { return SentinelConsumer; });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var _ant_design_create_react_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/create-react-context */ "./node_modules/@ant-design/create-react-context/lib/index.js");
/* harmony import */ var _ant_design_create_react_context__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_create_react_context__WEBPACK_IMPORTED_MODULE_7__);




/* eslint-disable jsx-a11y/no-noninteractive-tabindex */





var SentinelContext = _ant_design_create_react_context__WEBPACK_IMPORTED_MODULE_7___default()({});
var SentinelProvider = SentinelContext.Provider;
var SentinelConsumer = SentinelContext.Consumer;

var sentinelStyle = { width: 0, height: 0, overflow: 'hidden', position: 'absolute' };

var Sentinel = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Sentinel, _React$Component);

  function Sentinel() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Sentinel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_ref = Sentinel.__proto__ || Object.getPrototypeOf(Sentinel)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (_ref2) {
      var target = _ref2.target,
          which = _ref2.which,
          shiftKey = _ref2.shiftKey;
      var _this$props = _this.props,
          nextElement = _this$props.nextElement,
          prevElement = _this$props.prevElement;

      if (which !== rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].TAB || document.activeElement !== target) return;

      // Tab next
      if (!shiftKey && nextElement) {
        nextElement.focus();
      }

      // Tab prev
      if (shiftKey && prevElement) {
        prevElement.focus();
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Sentinel, [{
    key: 'render',
    value: function render() {
      var setRef = this.props.setRef;


      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('div', {
        tabIndex: 0,
        ref: setRef,
        style: sentinelStyle,
        onKeyDown: this.onKeyDown,
        role: 'presentation'
      });
    }
  }]);

  return Sentinel;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Sentinel.propTypes = {
  setRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  prevElement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  nextElement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Sentinel);

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabContent.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tabs/es/TabContent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/es/utils.js");











var TabContent = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TabContent, _React$Component);

  function TabContent() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TabContent);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TabContent, [{
    key: 'getTabPanes',
    value: function getTabPanes() {
      var props = this.props;
      var activeKey = props.activeKey;
      var children = props.children;
      var newChildren = [];

      react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.forEach(children, function (child) {
        if (!child) {
          return;
        }
        var key = child.key;
        var active = activeKey === key;
        newChildren.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(child, {
          active: active,
          destroyInactiveTabPane: props.destroyInactiveTabPane,
          rootPrefixCls: props.prefixCls
        }));
      });

      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;
      var prefixCls = props.prefixCls,
          children = props.children,
          activeKey = props.activeKey,
          className = props.className,
          tabBarPosition = props.tabBarPosition,
          animated = props.animated,
          animatedWithMargin = props.animatedWithMargin;
      var style = props.style;

      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-content', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames), className);
      if (animated) {
        var activeIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getActiveIndex"])(children, activeKey);
        if (activeIndex !== -1) {
          var animatedStyle = animatedWithMargin ? Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getMarginStyle"])(activeIndex, tabBarPosition) : Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getTransformPropValue"])(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getTransformByIndex"])(activeIndex, tabBarPosition));
          style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, animatedStyle);
        } else {
          style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, {
            display: 'none'
          });
        }
      }
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'div',
        {
          className: classes,
          style: style
        },
        this.getTabPanes()
      );
    }
  }]);

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TabContent);


TabContent.propTypes = {
  animated: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  animatedWithMargin: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  tabBarPosition: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  destroyInactiveTabPane: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

TabContent.defaultProps = {
  animated: true
};

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPane.js":
/*!********************************************!*\
  !*** ./node_modules/rc-tabs/es/TabPane.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/es/utils.js");
/* harmony import */ var _Sentinel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Sentinel */ "./node_modules/rc-tabs/es/Sentinel.js");













var TabPane = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TabPane, _React$Component);

  function TabPane() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TabPane);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TabPane, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          id = _props.id,
          className = _props.className,
          destroyInactiveTabPane = _props.destroyInactiveTabPane,
          active = _props.active,
          forceRender = _props.forceRender,
          rootPrefixCls = _props.rootPrefixCls,
          style = _props.style,
          children = _props.children,
          placeholder = _props.placeholder,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_props, ['id', 'className', 'destroyInactiveTabPane', 'active', 'forceRender', 'rootPrefixCls', 'style', 'children', 'placeholder']);

      this._isActived = this._isActived || active;
      var prefixCls = rootPrefixCls + '-tabpane';
      var cls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-inactive', !active), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-active', active), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, className, className), _classnames));
      var isRender = destroyInactiveTabPane ? active : this._isActived;
      var shouldRender = isRender || forceRender;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _Sentinel__WEBPACK_IMPORTED_MODULE_11__["SentinelConsumer"],
        null,
        function (_ref) {
          var sentinelStart = _ref.sentinelStart,
              sentinelEnd = _ref.sentinelEnd,
              setPanelSentinelStart = _ref.setPanelSentinelStart,
              setPanelSentinelEnd = _ref.setPanelSentinelEnd;

          // Create sentinel
          var panelSentinelStart = void 0;
          var panelSentinelEnd = void 0;
          if (active && shouldRender) {
            panelSentinelStart = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sentinel__WEBPACK_IMPORTED_MODULE_11__["default"], {
              setRef: setPanelSentinelStart,
              prevElement: sentinelStart
            });
            panelSentinelEnd = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sentinel__WEBPACK_IMPORTED_MODULE_11__["default"], {
              setRef: setPanelSentinelEnd,
              nextElement: sentinelEnd
            });
          }

          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              style: style,
              role: 'tabpanel',
              'aria-hidden': active ? 'false' : 'true',
              className: cls,
              id: id
            }, Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getDataAttr"])(restProps)),
            panelSentinelStart,
            shouldRender ? children : placeholder,
            panelSentinelEnd
          );
        }
      );
    }
  }]);

  return TabPane;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TabPane);


TabPane.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  destroyInactiveTabPane: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  rootPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};

TabPane.defaultProps = {
  placeholder: null
};

/***/ }),

/***/ "./node_modules/rc-tabs/es/Tabs.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tabs/es/Tabs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KeyCode */ "./node_modules/rc-tabs/es/KeyCode.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TabPane */ "./node_modules/rc-tabs/es/TabPane.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/es/utils.js");
/* harmony import */ var _Sentinel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Sentinel */ "./node_modules/rc-tabs/es/Sentinel.js");

















function noop() {}

function getDefaultActiveKey(props) {
  var activeKey = void 0;
  react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.forEach(props.children, function (child) {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

function activeKeyIsValid(props, key) {
  var keys = react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(props.children, function (child) {
    return child && child.key;
  });
  return keys.indexOf(key) >= 0;
}

var Tabs = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Tabs, _React$Component);

  function Tabs(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Tabs);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _initialiseProps.call(_this);

    var activeKey = void 0;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }

    _this.state = {
      activeKey: activeKey
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Tabs, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroy = true;
      raf__WEBPACK_IMPORTED_MODULE_10___default.a.cancel(this.sentinelId);
    }

    // Sentinel for tab index

  }, {
    key: 'updateSentinelContext',
    value: function updateSentinelContext() {
      var _this2 = this;

      if (this.destroy) return;

      raf__WEBPACK_IMPORTED_MODULE_10___default.a.cancel(this.sentinelId);
      this.sentinelId = raf__WEBPACK_IMPORTED_MODULE_10___default()(function () {
        if (_this2.destroy) return;
        _this2.forceUpdate();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;

      var prefixCls = props.prefixCls,
          navWrapper = props.navWrapper,
          tabBarPosition = props.tabBarPosition,
          className = props.className,
          renderTabContent = props.renderTabContent,
          renderTabBar = props.renderTabBar,
          destroyInactiveTabPane = props.destroyInactiveTabPane,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(props, ['prefixCls', 'navWrapper', 'tabBarPosition', 'className', 'renderTabContent', 'renderTabBar', 'destroyInactiveTabPane']);

      var cls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-' + tabBarPosition, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, className, !!className), _classnames));

      this.tabBar = renderTabBar();

      var tabBar = react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(this.tabBar, {
        prefixCls: prefixCls,
        navWrapper: navWrapper,
        key: 'tabBar',
        onKeyDown: this.onNavKeyDown,
        tabBarPosition: tabBarPosition,
        onTabClick: this.onTabClick,
        panels: props.children,
        activeKey: this.state.activeKey
      });

      var tabContent = react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(renderTabContent(), {
        prefixCls: prefixCls,
        tabBarPosition: tabBarPosition,
        activeKey: this.state.activeKey,
        destroyInactiveTabPane: destroyInactiveTabPane,
        children: props.children,
        onChange: this.setActiveKey,
        key: 'tabContent'
      });

      var sentinelStart = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sentinel__WEBPACK_IMPORTED_MODULE_15__["default"], {
        key: 'sentinelStart',
        setRef: this.setSentinelStart,
        nextElement: this.panelSentinelStart
      });
      var sentinelEnd = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sentinel__WEBPACK_IMPORTED_MODULE_15__["default"], {
        key: 'sentinelEnd',
        setRef: this.setSentinelEnd,
        prevElement: this.panelSentinelEnd
      });

      var contents = [];
      if (tabBarPosition === 'bottom') {
        contents.push(sentinelStart, tabContent, sentinelEnd, tabBar);
      } else {
        contents.push(tabBar, sentinelStart, tabContent, sentinelEnd);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _Sentinel__WEBPACK_IMPORTED_MODULE_15__["SentinelProvider"],
        {
          value: {
            sentinelStart: this.sentinelStart,
            sentinelEnd: this.sentinelEnd,
            setPanelSentinelStart: this.setPanelSentinelStart,
            setPanelSentinelEnd: this.setPanelSentinelEnd
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            className: cls,
            style: props.style
          }, Object(_utils__WEBPACK_IMPORTED_MODULE_14__["getDataAttr"])(restProps), {
            onScroll: this.onScroll
          }),
          contents
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var newState = {};
      if ('activeKey' in props) {
        newState.activeKey = props.activeKey;
      } else if (!activeKeyIsValid(props, state.activeKey)) {
        newState.activeKey = getDefaultActiveKey(props);
      }
      if (Object.keys(newState).length > 0) {
        return newState;
      }
      return null;
    }
  }]);

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onTabClick = function (activeKey, e) {
    if (_this3.tabBar.props.onTabClick) {
      _this3.tabBar.props.onTabClick(activeKey, e);
    }
    _this3.setActiveKey(activeKey);
  };

  this.onNavKeyDown = function (e) {
    var eventKeyCode = e.keyCode;
    if (eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_12__["default"].RIGHT || eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_12__["default"].DOWN) {
      e.preventDefault();
      var nextKey = _this3.getNextActiveKey(true);
      _this3.onTabClick(nextKey);
    } else if (eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_12__["default"].LEFT || eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_12__["default"].UP) {
      e.preventDefault();
      var previousKey = _this3.getNextActiveKey(false);
      _this3.onTabClick(previousKey);
    }
  };

  this.onScroll = function (_ref) {
    var target = _ref.target,
        currentTarget = _ref.currentTarget;

    if (target === currentTarget && target.scrollLeft > 0) {
      target.scrollLeft = 0;
    }
  };

  this.setSentinelStart = function (node) {
    _this3.sentinelStart = node;
  };

  this.setSentinelEnd = function (node) {
    _this3.sentinelEnd = node;
  };

  this.setPanelSentinelStart = function (node) {
    if (node !== _this3.panelSentinelStart) {
      _this3.updateSentinelContext();
    }
    _this3.panelSentinelStart = node;
  };

  this.setPanelSentinelEnd = function (node) {
    if (node !== _this3.panelSentinelEnd) {
      _this3.updateSentinelContext();
    }
    _this3.panelSentinelEnd = node;
  };

  this.setActiveKey = function (activeKey) {
    if (_this3.state.activeKey !== activeKey) {
      if (!('activeKey' in _this3.props)) {
        _this3.setState({
          activeKey: activeKey
        });
      }
      _this3.props.onChange(activeKey);
    }
  };

  this.getNextActiveKey = function (next) {
    var activeKey = _this3.state.activeKey;
    var children = [];
    react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.forEach(_this3.props.children, function (c) {
      if (c && !c.props.disabled) {
        if (next) {
          children.push(c);
        } else {
          children.unshift(c);
        }
      }
    });
    var length = children.length;
    var ret = length && children[0].key;
    children.forEach(function (child, i) {
      if (child.key === activeKey) {
        if (i === length - 1) {
          ret = children[0].key;
        } else {
          ret = children[i + 1].key;
        }
      }
    });
    return ret;
  };
};

Tabs.propTypes = {
  destroyInactiveTabPane: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  renderTabBar: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  renderTabContent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  navWrapper: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  tabBarPosition: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  defaultActiveKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};

Tabs.defaultProps = {
  prefixCls: 'rc-tabs',
  destroyInactiveTabPane: false,
  onChange: noop,
  navWrapper: function navWrapper(arg) {
    return arg;
  },
  tabBarPosition: 'top',
  children: null,
  style: {}
};

Tabs.TabPane = _TabPane__WEBPACK_IMPORTED_MODULE_13__["default"];

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__["polyfill"])(Tabs);

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/rc-tabs/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tabs/es/index.js ***!
  \******************************************/
/*! exports provided: default, TabPane, TabContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/rc-tabs/es/Tabs.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPane */ "./node_modules/rc-tabs/es/TabPane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return _TabPane__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContent */ "./node_modules/rc-tabs/es/TabContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return _TabContent__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = (_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/rc-tabs/es/utils.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tabs/es/utils.js ***!
  \******************************************/
/*! exports provided: toArray, getActiveIndex, getActiveKey, setTransform, isTransform3dSupported, setTransition, getTransformPropValue, isVertical, getTransformByIndex, getMarginStyle, getStyle, setPxStyle, getDataAttr, getLeft, getTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveIndex", function() { return getActiveIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveKey", function() { return getActiveKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransform", function() { return setTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransform3dSupported", function() { return isTransform3dSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransition", function() { return setTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformPropValue", function() { return getTransformPropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVertical", function() { return isVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformByIndex", function() { return getTransformByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarginStyle", function() { return getMarginStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPxStyle", function() { return setPxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataAttr", function() { return getDataAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeft", function() { return getLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTop", function() { return getTop; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransform3dSupported(style) {
  return ('transform' in style || 'webkitTransform' in style || 'MozTransform' in style) && window.atob;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}

function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

function toNum(style, property) {
  return +style.getPropertyValue(property).replace('px', '');
}

function getTypeValue(start, current, end, tabNode, wrapperNode) {
  var total = getStyle(wrapperNode, 'padding-' + start);
  if (!tabNode || !tabNode.parentNode) {
    return total;
  }

  var childNodes = tabNode.parentNode.childNodes;

  Array.prototype.some.call(childNodes, function (node) {
    var style = window.getComputedStyle(node);

    if (node !== tabNode) {
      total += toNum(style, 'margin-' + start);
      total += node[current];
      total += toNum(style, 'margin-' + end);

      if (style.boxSizing === 'content-box') {
        total += toNum(style, 'border-' + start + '-width') + toNum(style, 'border-' + end + '-width');
      }
      return false;
    }

    // We need count current node margin
    // ref: https://github.com/react-component/tabs/pull/139#issuecomment-431005262
    total += toNum(style, 'margin-' + start);

    return true;
  });

  return total;
}

function getLeft(tabNode, wrapperNode) {
  return getTypeValue('left', 'offsetWidth', 'right', tabNode, wrapperNode);
}

function getTop(tabNode, wrapperNode) {
  return getTypeValue('top', 'offsetHeight', 'bottom', tabNode, wrapperNode);
}

/***/ }),

/***/ "./node_modules/rc-tabs/lib/InkTabBarNode.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-tabs/lib/InkTabBarNode.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _componentDidUpdate(component, init) {
  var _component$props = component.props,
      styles = _component$props.styles,
      panels = _component$props.panels,
      activeKey = _component$props.activeKey;

  var rootNode = component.props.getRef('root');
  var wrapNode = component.props.getRef('nav') || rootNode;
  var inkBarNode = component.props.getRef('inkBar');
  var activeTab = component.props.getRef('activeTab');
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.props.tabBarPosition;
  var activeIndex = (0, _utils.getActiveIndex)(panels, activeKey);
  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    var tabNode = activeTab;
    var transformSupported = (0, _utils.isTransform3dSupported)(inkBarNodeStyle);

    // Reset current style
    (0, _utils.setTransform)(inkBarNodeStyle, '');
    inkBarNodeStyle.width = '';
    inkBarNodeStyle.height = '';
    inkBarNodeStyle.left = '';
    inkBarNodeStyle.top = '';
    inkBarNodeStyle.bottom = '';
    inkBarNodeStyle.right = '';

    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = (0, _utils.getLeft)(tabNode, wrapNode);
      var width = tabNode.offsetWidth;

      // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
      // It means no css working, then ink bar should not have width until css is loaded
      // Fix https://github.com/ant-design/ant-design/issues/7564
      if (width === rootNode.offsetWidth) {
        width = 0;
      } else if (styles.inkBar && styles.inkBar.width !== undefined) {
        width = parseFloat(styles.inkBar.width, 10);
        if (width) {
          left += (tabNode.offsetWidth - width) / 2;
        }
      }

      // use 3d gpu to optimize render
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
      } else {
        inkBarNodeStyle.left = left + 'px';
      }
      inkBarNodeStyle.width = width + 'px';
    } else {
      var top = (0, _utils.getTop)(tabNode, wrapNode, true);
      var height = tabNode.offsetHeight;
      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);
        if (height) {
          top += (tabNode.offsetHeight - height) / 2;
        }
      }
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
        inkBarNodeStyle.top = '0';
      } else {
        inkBarNodeStyle.top = top + 'px';
      }
      inkBarNodeStyle.height = height + 'px';
    }
  }
  inkBarNodeStyle.display = activeIndex !== -1 ? 'block' : 'none';
}

var InkTabBarNode = function (_React$Component) {
  (0, _inherits3['default'])(InkTabBarNode, _React$Component);

  function InkTabBarNode() {
    (0, _classCallCheck3['default'])(this, InkTabBarNode);
    return (0, _possibleConstructorReturn3['default'])(this, (InkTabBarNode.__proto__ || Object.getPrototypeOf(InkTabBarNode)).apply(this, arguments));
  }

  (0, _createClass3['default'])(InkTabBarNode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // ref https://github.com/ant-design/ant-design/issues/8678
      // ref https://github.com/react-component/tabs/issues/135
      // InkTabBarNode need parent/root ref for calculating position
      // since parent componentDidMount triggered after child componentDidMount
      // we're doing a quick fix here to use setTimeout to calculate position
      // after parent/root component mounted
      this.timeout = setTimeout(function () {
        _componentDidUpdate(_this2, true);
      }, 0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _componentDidUpdate(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          styles = _props.styles,
          inkBarAnimated = _props.inkBarAnimated;

      var className = prefixCls + '-ink-bar';
      var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, className, true), (0, _defineProperty3['default'])(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
      return _react2['default'].createElement('div', {
        style: styles.inkBar,
        className: classes,
        key: 'inkBar',
        ref: this.props.saveRef('inkBar')
      });
    }
  }]);
  return InkTabBarNode;
}(_react2['default'].Component);

exports['default'] = InkTabBarNode;


InkTabBarNode.propTypes = {
  prefixCls: _propTypes2['default'].string,
  styles: _propTypes2['default'].object,
  inkBarAnimated: _propTypes2['default'].bool,
  saveRef: _propTypes2['default'].func
};

InkTabBarNode.defaultProps = {
  prefixCls: '',
  inkBarAnimated: true,
  styles: {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/SaveRef.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tabs/lib/SaveRef.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SaveRef = function (_React$Component) {
  (0, _inherits3['default'])(SaveRef, _React$Component);

  function SaveRef() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, SaveRef);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = SaveRef.__proto__ || Object.getPrototypeOf(SaveRef)).call.apply(_ref, [this].concat(args))), _this), _this.getRef = function (name) {
      return _this[name];
    }, _this.saveRef = function (name) {
      return function (node) {
        if (node) {
          _this[name] = node;
        }
      };
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(SaveRef, [{
    key: 'render',
    value: function render() {
      return this.props.children(this.saveRef, this.getRef);
    }
  }]);
  return SaveRef;
}(_react2['default'].Component);

exports['default'] = SaveRef;


SaveRef.propTypes = {
  children: _propTypes2['default'].func
};

SaveRef.defaultProps = {
  children: function children() {
    return null;
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/ScrollableInkTabBar.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-tabs/lib/ScrollableInkTabBar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InkTabBarNode = __webpack_require__(/*! ./InkTabBarNode */ "./node_modules/rc-tabs/lib/InkTabBarNode.js");

var _InkTabBarNode2 = _interopRequireDefault(_InkTabBarNode);

var _TabBarTabsNode = __webpack_require__(/*! ./TabBarTabsNode */ "./node_modules/rc-tabs/lib/TabBarTabsNode.js");

var _TabBarTabsNode2 = _interopRequireDefault(_TabBarTabsNode);

var _TabBarRootNode = __webpack_require__(/*! ./TabBarRootNode */ "./node_modules/rc-tabs/lib/TabBarRootNode.js");

var _TabBarRootNode2 = _interopRequireDefault(_TabBarRootNode);

var _ScrollableTabBarNode = __webpack_require__(/*! ./ScrollableTabBarNode */ "./node_modules/rc-tabs/lib/ScrollableTabBarNode.js");

var _ScrollableTabBarNode2 = _interopRequireDefault(_ScrollableTabBarNode);

var _SaveRef = __webpack_require__(/*! ./SaveRef */ "./node_modules/rc-tabs/lib/SaveRef.js");

var _SaveRef2 = _interopRequireDefault(_SaveRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ScrollableInkTabBar = function (_React$Component) {
  (0, _inherits3['default'])(ScrollableInkTabBar, _React$Component);

  function ScrollableInkTabBar() {
    (0, _classCallCheck3['default'])(this, ScrollableInkTabBar);
    return (0, _possibleConstructorReturn3['default'])(this, (ScrollableInkTabBar.__proto__ || Object.getPrototypeOf(ScrollableInkTabBar)).apply(this, arguments));
  }

  (0, _createClass3['default'])(ScrollableInkTabBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          renderTabBarNode = _props.children,
          restProps = (0, _objectWithoutProperties3['default'])(_props, ['children']);


      return _react2['default'].createElement(
        _SaveRef2['default'],
        null,
        function (saveRef, getRef) {
          return _react2['default'].createElement(
            _TabBarRootNode2['default'],
            (0, _extends3['default'])({ saveRef: saveRef }, restProps),
            _react2['default'].createElement(
              _ScrollableTabBarNode2['default'],
              (0, _extends3['default'])({ saveRef: saveRef, getRef: getRef }, restProps),
              _react2['default'].createElement(_TabBarTabsNode2['default'], (0, _extends3['default'])({ saveRef: saveRef, renderTabBarNode: renderTabBarNode }, restProps)),
              _react2['default'].createElement(_InkTabBarNode2['default'], (0, _extends3['default'])({ saveRef: saveRef, getRef: getRef }, restProps))
            )
          );
        }
      );
    }
  }]);
  return ScrollableInkTabBar;
}(_react2['default'].Component); /* eslint-disable react/prefer-stateless-function */


exports['default'] = ScrollableInkTabBar;


ScrollableInkTabBar.propTypes = {
  children: _propTypes2['default'].func
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/ScrollableTabBarNode.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-tabs/lib/ScrollableTabBarNode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames5 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames6 = _interopRequireDefault(_classnames5);

var _debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _resizeObserverPolyfill = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ScrollableTabBarNode = function (_React$Component) {
  (0, _inherits3['default'])(ScrollableTabBarNode, _React$Component);

  function ScrollableTabBarNode(props) {
    (0, _classCallCheck3['default'])(this, ScrollableTabBarNode);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (ScrollableTabBarNode.__proto__ || Object.getPrototypeOf(ScrollableTabBarNode)).call(this, props));

    _this.prevTransitionEnd = function (e) {
      if (e.propertyName !== 'opacity') {
        return;
      }
      var container = _this.props.getRef('container');
      _this.scrollToActiveTab({
        target: container,
        currentTarget: container
      });
    };

    _this.scrollToActiveTab = function (e) {
      var activeTab = _this.props.getRef('activeTab');
      var navWrap = _this.props.getRef('navWrap');
      if (e && e.target !== e.currentTarget || !activeTab) {
        return;
      }

      // when not scrollable or enter scrollable first time, don't emit scrolling
      var needToSroll = _this.isNextPrevShown() && _this.lastNextPrevShown;
      _this.lastNextPrevShown = _this.isNextPrevShown();
      if (!needToSroll) {
        return;
      }

      var activeTabWH = _this.getScrollWH(activeTab);
      var navWrapNodeWH = _this.getOffsetWH(navWrap);
      var offset = _this.offset;

      var wrapOffset = _this.getOffsetLT(navWrap);
      var activeTabOffset = _this.getOffsetLT(activeTab);
      if (wrapOffset > activeTabOffset) {
        offset += wrapOffset - activeTabOffset;
        _this.setOffset(offset);
      } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
        offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
        _this.setOffset(offset);
      }
    };

    _this.prev = function (e) {
      _this.props.onPrevClick(e);
      var navWrapNode = _this.props.getRef('navWrap');
      var navWrapNodeWH = _this.getOffsetWH(navWrapNode);
      var offset = _this.offset;

      _this.setOffset(offset + navWrapNodeWH);
    };

    _this.next = function (e) {
      _this.props.onNextClick(e);
      var navWrapNode = _this.props.getRef('navWrap');
      var navWrapNodeWH = _this.getOffsetWH(navWrapNode);
      var offset = _this.offset;

      _this.setOffset(offset - navWrapNodeWH);
    };

    _this.offset = 0;

    _this.state = {
      next: false,
      prev: false
    };
    return _this;
  }

  (0, _createClass3['default'])(ScrollableTabBarNode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.componentDidUpdate();
      this.debouncedResize = (0, _debounce2['default'])(function () {
        _this2.setNextPrev();
        _this2.scrollToActiveTab();
      }, 200);
      this.resizeObserver = new _resizeObserverPolyfill2['default'](this.debouncedResize);
      this.resizeObserver.observe(this.props.getRef('container'));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var props = this.props;
      if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
        this.setOffset(0);
        return;
      }
      var nextPrev = this.setNextPrev();
      // wait next, prev show hide
      /* eslint react/no-did-update-set-state:0 */
      if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
        this.setState({}, this.scrollToActiveTab);
      } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
        // can not use props.activeKey
        this.scrollToActiveTab();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      if (this.debouncedResize && this.debouncedResize.cancel) {
        this.debouncedResize.cancel();
      }
    }
  }, {
    key: 'setNextPrev',
    value: function setNextPrev() {
      var navNode = this.props.getRef('nav');
      var navTabsContainer = this.props.getRef('navTabsContainer');
      var navNodeWH = this.getScrollWH(navTabsContainer || navNode);
      // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
      // https://github.com/ant-design/ant-design/issues/13423
      var containerWH = this.getOffsetWH(this.props.getRef('container')) + 1;
      var navWrapNodeWH = this.getOffsetWH(this.props.getRef('navWrap'));
      var offset = this.offset;

      var minOffset = containerWH - navNodeWH;
      var _state = this.state,
          next = _state.next,
          prev = _state.prev;

      if (minOffset >= 0) {
        next = false;
        this.setOffset(0, false);
        offset = 0;
      } else if (minOffset < offset) {
        next = true;
      } else {
        next = false;
        // Fix https://github.com/ant-design/ant-design/issues/8861
        // Test with container offset which is stable
        // and set the offset of the nav wrap node
        var realOffset = navWrapNodeWH - navNodeWH;
        this.setOffset(realOffset, false);
        offset = realOffset;
      }

      if (offset < 0) {
        prev = true;
      } else {
        prev = false;
      }

      this.setNext(next);
      this.setPrev(prev);
      return {
        next: next,
        prev: prev
      };
    }
  }, {
    key: 'getOffsetWH',
    value: function getOffsetWH(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'offsetWidth';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'offsetHeight';
      }
      return node[prop];
    }
  }, {
    key: 'getScrollWH',
    value: function getScrollWH(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'scrollWidth';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'scrollHeight';
      }
      return node[prop];
    }
  }, {
    key: 'getOffsetLT',
    value: function getOffsetLT(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'left';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'top';
      }
      return node.getBoundingClientRect()[prop];
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var target = Math.min(0, offset);
      if (this.offset !== target) {
        this.offset = target;
        var navOffset = {};
        var tabBarPosition = this.props.tabBarPosition;
        var navStyle = this.props.getRef('nav').style;
        var transformSupported = (0, _utils.isTransform3dSupported)(navStyle);
        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          if (transformSupported) {
            navOffset = {
              value: 'translate3d(0,' + target + 'px,0)'
            };
          } else {
            navOffset = {
              name: 'top',
              value: target + 'px'
            };
          }
        } else if (transformSupported) {
          navOffset = {
            value: 'translate3d(' + target + 'px,0,0)'
          };
        } else {
          navOffset = {
            name: 'left',
            value: target + 'px'
          };
        }
        if (transformSupported) {
          (0, _utils.setTransform)(navStyle, navOffset.value);
        } else {
          navStyle[navOffset.name] = navOffset.value;
        }
        if (checkNextPrev) {
          this.setNextPrev();
        }
      }
    }
  }, {
    key: 'setPrev',
    value: function setPrev(v) {
      if (this.state.prev !== v) {
        this.setState({
          prev: v
        });
      }
    }
  }, {
    key: 'setNext',
    value: function setNext(v) {
      if (this.state.next !== v) {
        this.setState({
          next: v
        });
      }
    }
  }, {
    key: 'isNextPrevShown',
    value: function isNextPrevShown(state) {
      if (state) {
        return state.next || state.prev;
      }
      return this.state.next || this.state.prev;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames, _classnames2, _classnames3, _classnames4;

      var _state2 = this.state,
          next = _state2.next,
          prev = _state2.prev;
      var _props = this.props,
          prefixCls = _props.prefixCls,
          scrollAnimated = _props.scrollAnimated,
          navWrapper = _props.navWrapper,
          prevIcon = _props.prevIcon,
          nextIcon = _props.nextIcon;

      var showNextPrev = prev || next;

      var prevButton = _react2['default'].createElement(
        'span',
        {
          onClick: prev ? this.prev : null,
          unselectable: 'unselectable',
          className: (0, _classnames6['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-prev', 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-btn-disabled', !prev), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-arrow-show', showNextPrev), _classnames)),
          onTransitionEnd: this.prevTransitionEnd
        },
        prevIcon || _react2['default'].createElement('span', { className: prefixCls + '-tab-prev-icon' })
      );

      var nextButton = _react2['default'].createElement(
        'span',
        {
          onClick: next ? this.next : null,
          unselectable: 'unselectable',
          className: (0, _classnames6['default'])((_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-next', 1), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-btn-disabled', !next), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-arrow-show', showNextPrev), _classnames2))
        },
        nextIcon || _react2['default'].createElement('span', { className: prefixCls + '-tab-next-icon' })
      );

      var navClassName = prefixCls + '-nav';
      var navClasses = (0, _classnames6['default'])((_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, navClassName, true), (0, _defineProperty3['default'])(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));

      return _react2['default'].createElement(
        'div',
        {
          className: (0, _classnames6['default'])((_classnames4 = {}, (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container', 1), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
          key: 'container',
          ref: this.props.saveRef('container')
        },
        prevButton,
        nextButton,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-nav-wrap', ref: this.props.saveRef('navWrap') },
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-nav-scroll' },
            _react2['default'].createElement(
              'div',
              { className: navClasses, ref: this.props.saveRef('nav') },
              navWrapper(this.props.children)
            )
          )
        )
      );
    }
  }]);
  return ScrollableTabBarNode;
}(_react2['default'].Component);

exports['default'] = ScrollableTabBarNode;


ScrollableTabBarNode.propTypes = {
  activeKey: _propTypes2['default'].string,
  getRef: _propTypes2['default'].func.isRequired,
  saveRef: _propTypes2['default'].func.isRequired,
  tabBarPosition: _propTypes2['default'].oneOf(['left', 'right', 'top', 'bottom']),
  prefixCls: _propTypes2['default'].string,
  scrollAnimated: _propTypes2['default'].bool,
  onPrevClick: _propTypes2['default'].func,
  onNextClick: _propTypes2['default'].func,
  navWrapper: _propTypes2['default'].func,
  children: _propTypes2['default'].node,
  prevIcon: _propTypes2['default'].node,
  nextIcon: _propTypes2['default'].node
};

ScrollableTabBarNode.defaultProps = {
  tabBarPosition: 'left',
  prefixCls: '',
  scrollAnimated: true,
  onPrevClick: function onPrevClick() {},
  onNextClick: function onNextClick() {},
  navWrapper: function navWrapper(ele) {
    return ele;
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/TabBarRootNode.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-tabs/lib/TabBarRootNode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBarRootNode = function (_React$Component) {
  (0, _inherits3['default'])(TabBarRootNode, _React$Component);

  function TabBarRootNode() {
    (0, _classCallCheck3['default'])(this, TabBarRootNode);
    return (0, _possibleConstructorReturn3['default'])(this, (TabBarRootNode.__proto__ || Object.getPrototypeOf(TabBarRootNode)).apply(this, arguments));
  }

  (0, _createClass3['default'])(TabBarRootNode, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          onKeyDown = _props.onKeyDown,
          className = _props.className,
          extraContent = _props.extraContent,
          style = _props.style,
          tabBarPosition = _props.tabBarPosition,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3['default'])(_props, ['prefixCls', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition', 'children']);

      var cls = (0, _classnames3['default'])(prefixCls + '-bar', (0, _defineProperty3['default'])({}, className, !!className));
      var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
      var tabBarExtraContentStyle = topOrBottom ? { float: 'right' } : {};
      var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
      var newChildren = children;
      if (extraContent) {
        newChildren = [(0, _react.cloneElement)(extraContent, {
          key: 'extra',
          style: (0, _extends3['default'])({}, tabBarExtraContentStyle, extraContentStyle)
        }), (0, _react.cloneElement)(children, { key: 'content' })];
        newChildren = topOrBottom ? newChildren : newChildren.reverse();
      }
      return _react2['default'].createElement(
        'div',
        (0, _extends3['default'])({
          role: 'tablist',
          className: cls,
          tabIndex: '0',
          ref: this.props.saveRef('root'),
          onKeyDown: onKeyDown,
          style: style
        }, (0, _utils.getDataAttr)(restProps)),
        newChildren
      );
    }
  }]);
  return TabBarRootNode;
}(_react2['default'].Component);

exports['default'] = TabBarRootNode;


TabBarRootNode.propTypes = {
  prefixCls: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  tabBarPosition: _propTypes2['default'].oneOf(['left', 'right', 'top', 'bottom']),
  children: _propTypes2['default'].node,
  extraContent: _propTypes2['default'].node,
  onKeyDown: _propTypes2['default'].func,
  saveRef: _propTypes2['default'].func
};

TabBarRootNode.defaultProps = {
  prefixCls: '',
  className: '',
  style: {},
  tabBarPosition: 'top',
  extraContent: null,
  children: null,
  onKeyDown: function onKeyDown() {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/TabBarTabsNode.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-tabs/lib/TabBarTabsNode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBarTabsNode = function (_React$Component) {
  (0, _inherits3['default'])(TabBarTabsNode, _React$Component);

  function TabBarTabsNode() {
    (0, _classCallCheck3['default'])(this, TabBarTabsNode);
    return (0, _possibleConstructorReturn3['default'])(this, (TabBarTabsNode.__proto__ || Object.getPrototypeOf(TabBarTabsNode)).apply(this, arguments));
  }

  (0, _createClass3['default'])(TabBarTabsNode, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.panels,
          activeKey = _props.activeKey,
          prefixCls = _props.prefixCls,
          tabBarGutter = _props.tabBarGutter,
          saveRef = _props.saveRef,
          tabBarPosition = _props.tabBarPosition,
          renderTabBarNode = _props.renderTabBarNode;

      var rst = [];

      _react2['default'].Children.forEach(children, function (child, index) {
        if (!child) {
          return;
        }
        var key = child.key;
        var cls = activeKey === key ? prefixCls + '-tab-active' : '';
        cls += ' ' + prefixCls + '-tab';
        var events = {};
        if (child.props.disabled) {
          cls += ' ' + prefixCls + '-tab-disabled';
        } else {
          events = {
            onClick: _this2.props.onTabClick.bind(_this2, key)
          };
        }
        var ref = {};
        if (activeKey === key) {
          ref.ref = saveRef('activeTab');
        }

        var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;
        var style = (0, _defineProperty3['default'])({}, (0, _utils.isVertical)(tabBarPosition) ? 'marginBottom' : 'marginRight', gutter);
        (0, _warning2['default'])('tab' in child.props, 'There must be `tab` property on children of Tabs.');

        var node = _react2['default'].createElement(
          'div',
          (0, _extends3['default'])({
            role: 'tab',
            'aria-disabled': child.props.disabled ? 'true' : 'false',
            'aria-selected': activeKey === key ? 'true' : 'false'
          }, events, {
            className: cls,
            key: key,
            style: style
          }, ref),
          child.props.tab
        );

        if (renderTabBarNode) {
          node = renderTabBarNode(node);
        }

        rst.push(node);
      });

      return _react2['default'].createElement(
        'div',
        { ref: saveRef('navTabsContainer') },
        rst
      );
    }
  }]);
  return TabBarTabsNode;
}(_react2['default'].Component);

exports['default'] = TabBarTabsNode;


TabBarTabsNode.propTypes = {
  activeKey: _propTypes2['default'].string,
  panels: _propTypes2['default'].node,
  prefixCls: _propTypes2['default'].string,
  tabBarGutter: _propTypes2['default'].number,
  onTabClick: _propTypes2['default'].func,
  saveRef: _propTypes2['default'].func,
  renderTabBarNode: _propTypes2['default'].func,
  tabBarPosition: _propTypes2['default'].string
};

TabBarTabsNode.defaultProps = {
  panels: [],
  prefixCls: [],
  tabBarGutter: null,
  onTabClick: function onTabClick() {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/TabContent.js":
/*!************************************************!*\
  !*** ./node_modules/rc-tabs/lib/TabContent.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabContent = function (_React$Component) {
  (0, _inherits3['default'])(TabContent, _React$Component);

  function TabContent() {
    (0, _classCallCheck3['default'])(this, TabContent);
    return (0, _possibleConstructorReturn3['default'])(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).apply(this, arguments));
  }

  (0, _createClass3['default'])(TabContent, [{
    key: 'getTabPanes',
    value: function getTabPanes() {
      var props = this.props;
      var activeKey = props.activeKey;
      var children = props.children;
      var newChildren = [];

      _react2['default'].Children.forEach(children, function (child) {
        if (!child) {
          return;
        }
        var key = child.key;
        var active = activeKey === key;
        newChildren.push(_react2['default'].cloneElement(child, {
          active: active,
          destroyInactiveTabPane: props.destroyInactiveTabPane,
          rootPrefixCls: props.prefixCls
        }));
      });

      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;
      var prefixCls = props.prefixCls,
          children = props.children,
          activeKey = props.activeKey,
          className = props.className,
          tabBarPosition = props.tabBarPosition,
          animated = props.animated,
          animatedWithMargin = props.animatedWithMargin;
      var style = props.style;

      var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-content', true), (0, _defineProperty3['default'])(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames), className);
      if (animated) {
        var activeIndex = (0, _utils.getActiveIndex)(children, activeKey);
        if (activeIndex !== -1) {
          var animatedStyle = animatedWithMargin ? (0, _utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, _utils.getTransformPropValue)((0, _utils.getTransformByIndex)(activeIndex, tabBarPosition));
          style = (0, _extends3['default'])({}, style, animatedStyle);
        } else {
          style = (0, _extends3['default'])({}, style, {
            display: 'none'
          });
        }
      }
      return _react2['default'].createElement(
        'div',
        {
          className: classes,
          style: style
        },
        this.getTabPanes()
      );
    }
  }]);
  return TabContent;
}(_react2['default'].Component);

exports['default'] = TabContent;


TabContent.propTypes = {
  animated: _propTypes2['default'].bool,
  animatedWithMargin: _propTypes2['default'].bool,
  prefixCls: _propTypes2['default'].string,
  children: _propTypes2['default'].node,
  activeKey: _propTypes2['default'].string,
  style: _propTypes2['default'].any,
  tabBarPosition: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  destroyInactiveTabPane: _propTypes2['default'].bool
};

TabContent.defaultProps = {
  animated: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/utils.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-tabs/lib/utils.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.toArray = toArray;
exports.getActiveIndex = getActiveIndex;
exports.getActiveKey = getActiveKey;
exports.setTransform = setTransform;
exports.isTransform3dSupported = isTransform3dSupported;
exports.setTransition = setTransition;
exports.getTransformPropValue = getTransformPropValue;
exports.isVertical = isVertical;
exports.getTransformByIndex = getTransformByIndex;
exports.getMarginStyle = getMarginStyle;
exports.getStyle = getStyle;
exports.setPxStyle = setPxStyle;
exports.getDataAttr = getDataAttr;
exports.getLeft = getLeft;
exports.getTop = getTop;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  _react2['default'].Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransform3dSupported(style) {
  return ('transform' in style || 'webkitTransform' in style || 'MozTransform' in style) && window.atob;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}

function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return (0, _defineProperty3['default'])({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

function toNum(style, property) {
  return +style.getPropertyValue(property).replace('px', '');
}

function getTypeValue(start, current, end, tabNode, wrapperNode) {
  var total = getStyle(wrapperNode, 'padding-' + start);
  if (!tabNode || !tabNode.parentNode) {
    return total;
  }

  var childNodes = tabNode.parentNode.childNodes;

  Array.prototype.some.call(childNodes, function (node) {
    var style = window.getComputedStyle(node);

    if (node !== tabNode) {
      total += toNum(style, 'margin-' + start);
      total += node[current];
      total += toNum(style, 'margin-' + end);

      if (style.boxSizing === 'content-box') {
        total += toNum(style, 'border-' + start + '-width') + toNum(style, 'border-' + end + '-width');
      }
      return false;
    }

    // We need count current node margin
    // ref: https://github.com/react-component/tabs/pull/139#issuecomment-431005262
    total += toNum(style, 'margin-' + start);

    return true;
  });

  return total;
}

function getLeft(tabNode, wrapperNode) {
  return getTypeValue('left', 'offsetWidth', 'right', tabNode, wrapperNode);
}

function getTop(tabNode, wrapperNode) {
  return getTypeValue('top', 'offsetHeight', 'bottom', tabNode, wrapperNode);
}

/***/ }),

/***/ "./node_modules/rc-util/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/KeyCode.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST

  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST

  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST

  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST

  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH

  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST

  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT

  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization

  /**
   * DASH
   */
  DASH: 189,
  // needs localization

  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization

  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization

  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization

  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91

  /**
   * WIN_IME
   */
  WIN_IME: 229
};
/*
 whether text and modified key is entered at the same time.
 */

KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;

  if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  } // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.


  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;

    default:
      return true;
  }
};
/*
 whether character is entered.
 */


KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  } // Safari sends zero key code for non-latin characters.


  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;

    default:
      return false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (KeyCode);

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

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
    image: '/images/characters/noby.jpg',
    name: 'Harmon',
    description: 'Description'
  }, {
    image: '/images/characters/doraemon.jpg',
    name: 'Ravi',
    description: 'A blue cat-type robot from the twenty second century, Doraemon provides his friends with gadgets from the future.',
    item: 'Dorayaki / Sunflower'
  }, {
    image: '/images/characters/sue.jpg',
    name: 'Helen',
    description: 'Sue is a character in Doraemon: Story of Seasons.',
    item: 'Baked Sweet Potato / P. Daisy / Sweet Potato'
  }, {
    image: '/images/characters/big_g.jpg',
    name: 'Henson',
    description: 'Big G is a character in Doraemon: Story of Seasons.',
    item: 'Curry / Normal Wood'
  }, {
    image: '/images/characters/sneech.jpg',
    name: 'Cooper',
    description: 'Sneech is a character in Doraemon: Story of Seasons.',
    item: 'Truffled Egg / Marlin Steak / Melon / Diamond'
  }, {
    image: '/images/characters/ryam.jpg',
    name: 'Taurus',
    description: 'Mayor',
    item: 'Sashimi Boat / Daikon / Matsutake'
  }, {
    image: '/images/characters/vera.jpg',
    name: 'Aries',
    description: 'Vera is the Harvest Goddess in Doraemon Story of Seasons. You can first meet her on Spring 10 when walking from your farm to West Natura, which will trigger a cutscene with Grandma Ravi and Harmon inspiring Noby to look for the Goddess. Vera can normally be found at Big Tree Root which is accessible via a small path in Swoosh Falls. Like many of us, Vera is not much of a morning person.',
    item: 'Cabbage / Compote / Yogurt'
  }, {
    image: '/images/characters/vera.jpg',
    name: 'Rem',
    description: 'Vera is the Harvest Goddess in Doraemon Story of Seasons. You can first meet her on Spring 10 when walking from your farm to West Natura, which will trigger a cutscene with Grandma Ravi and Harmon inspiring Noby to look for the Goddess. Vera can normally be found at Big Tree Root which is accessible via a small path in Swoosh Falls. Like many of us, Vera is not much of a morning person.',
    item: 'Cabbage / Compote / Yogurt'
  }]
}, {
  group: 'East Natura Villagers',
  characters: [{
    image: '/images/characters/noby.jpg',
    name: 'Smitty',
    description: 'Description'
  }, {
    image: '/images/characters/doraemon.jpg',
    name: 'Blake',
    description: 'A blue cat-type robot from the twenty second century, Doraemon provides his friends with gadgets from the future.',
    item: 'Dorayaki / Sunflower'
  }, {
    image: '/images/characters/sue.jpg',
    name: 'Gennie',
    description: 'Sue is a character in Doraemon: Story of Seasons.',
    item: 'Baked Sweet Potato / P. Daisy / Sweet Potato'
  }, {
    image: '/images/characters/big_g.jpg',
    name: 'Mark',
    description: 'Big G is a character in Doraemon: Story of Seasons.',
    item: 'Curry / Normal Wood'
  }, {
    image: '/images/characters/sneech.jpg',
    name: 'Jemma',
    description: 'Sneech is a character in Doraemon: Story of Seasons.',
    item: 'Truffled Egg / Marlin Steak / Melon / Diamond'
  }, {
    image: '/images/characters/ryam.jpg',
    name: 'Regis',
    description: 'Mayor',
    item: 'Sashimi Boat / Daikon / Matsutake'
  }, {
    image: '/images/characters/vera.jpg',
    name: 'Serena',
    description: 'Vera is the Harvest Goddess in Doraemon Story of Seasons. You can first meet her on Spring 10 when walking from your farm to West Natura, which will trigger a cutscene with Grandma Ravi and Harmon inspiring Noby to look for the Goddess. Vera can normally be found at Big Tree Root which is accessible via a small path in Swoosh Falls. Like many of us, Vera is not much of a morning person.',
    item: 'Cabbage / Compote / Yogurt'
  }, {
    image: '/images/characters/vera.jpg',
    name: 'Cafet',
    description: 'Vera is the Harvest Goddess in Doraemon Story of Seasons. You can first meet her on Spring 10 when walking from your farm to West Natura, which will trigger a cutscene with Grandma Ravi and Harmon inspiring Noby to look for the Goddess. Vera can normally be found at Big Tree Root which is accessible via a small path in Swoosh Falls. Like many of us, Vera is not much of a morning person.',
    item: 'Cabbage / Compote / Yogurt'
  }, {
    image: '/images/characters/ryam.jpg',
    name: 'Eria',
    description: 'Mayor',
    item: 'Sashimi Boat / Daikon / Matsutake'
  }]
}, {
  group: 'Other Characters',
  characters: [{
    image: '/images/characters/noby.jpg',
    name: 'Pent',
    description: 'Description'
  }, {
    image: '/images/characters/doraemon.jpg',
    name: 'Sandy',
    description: 'A blue cat-type robot from the twenty second century, Doraemon provides his friends with gadgets from the future.',
    item: 'Dorayaki / Sunflower'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_core_components_pageContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_7___default.a, {
    bordered: false,
    defaultActiveKey: ['0'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, data.map(function (d, index) {
    return __jsx(Panel, {
      header: d.group,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      gutter: 16,
      type: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, d.characters.map(function (character) {
      return __jsx(StyledCol, {
        xs: 24,
        md: 12,
        key: character.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, __jsx(StyledCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx("img", {
        src: Object(_core_utils__WEBPACK_IMPORTED_MODULE_12__["getAssetPrefix"])(character.image),
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, __jsx(StyledName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, character.name), __jsx(StyledDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, character.description))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Gift: ", character.item || '-')));
    })));
  })));
});

/***/ })

})
//# sourceMappingURL=characters.js.30b4e752aa91cc196e82.hot-update.js.map