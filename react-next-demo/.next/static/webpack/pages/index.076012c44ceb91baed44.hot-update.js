webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles.less */ "./styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\sourseCode\\webStudy\\reactStudy\\react-next-demo\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





 // 模块引入样式
// import css from "./index.module.css";



var Index = function Index() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); // router参数的接收

  console.log("router.query...................", router.query);

  var fn = function fn() {
    router.push({
      pathname: "/about",
      query: {
        abc: "123"
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-2279109989",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "./list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "jsx-2279109989",
        children: "list"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
      className: "jsx-2279109989"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: "./about",
        query: {
          name: "456"
        }
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "jsx-2279109989",
        children: "about"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
      className: "jsx-2279109989"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("./about");
      },
      className: "jsx-2279109989",
      children: "Router"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
      className: "jsx-2279109989"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: fn,
      className: "jsx-2279109989",
      children: "useRouter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      style: {
        color: "green"
      },
      className: "jsx-2279109989",
      children: " \u5185\u8054\u6837\u5F0F "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "jsx-2279109989",
      children: "jsx"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "jsx-2279109989" + " " + 'size',
      children: " index "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "980.jpg",
      className: "jsx-2279109989"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2279109989",
      children: "p.jsx-2279109989{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzb3Vyc2VDb2RlXFx3ZWJTdHVkeVxccmVhY3RTdHVkeVxccmVhY3QtbmV4dC1kZW1vXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNTLEFBR3dCLFdBQ2IiLCJmaWxlIjoiRDpcXHNvdXJzZUNvZGVcXHdlYlN0dWR5XFxyZWFjdFN0dWR5XFxyZWFjdC1uZXh0LWRlbW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8g5qih5Z2X5byV5YWl5qC35byPXHJcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgbGVzcyBmcm9tICcuLi9zdHlsZXMubGVzcyc7XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIHJvdXRlcuWPguaVsOeahOaOpeaUtlxyXG4gIGNvbnNvbGUubG9nKFwicm91dGVyLnF1ZXJ5Li4uLi4uLi4uLi4uLi4uLi4uLlwiLCByb3V0ZXIucXVlcnkpO1xyXG5cclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHsgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IGFiYzogXCIxMjNcIiB9IH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiLi9saXN0XCI+XHJcbiAgICAgICAgPGE+bGlzdDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIuL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwiNDU2XCIgfSB9fT5cclxuICAgICAgICA8YT5hYm91dDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgey8qIOesrOS4gOenjWpz57yW56iL6Lez6L2sICovfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiLi9hYm91dFwiKX0+Um91dGVyPC9idXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICB7Lyog56ys5LqM56eNanPnvJbnqIvot7PovawgKi99XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Zm59PnVzZVJvdXRlcjwvYnV0dG9uPlxyXG4gICAgICB7LyogPGgyIGNsYXNzTmFtZT17Y3NzLmNvbG9yfT4gSGVsbG8gV29ybGQgPC9oMj4gKi99XHJcbiAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PiDlhoXogZTmoLflvI8gPC9oMj5cclxuICAgICAgPHA+anN4PC9wPlxyXG4gICAgICB7LyogbGVzc+WSjGNzc+S4jeWPr+S7peWFseeUqCAqL31cclxuICAgICAgPGgyIGNsYXNzTmFtZT0nc2l6ZSc+IGluZGV4IDwvaDI+XHJcbiAgICAgIDxpbWcgc3JjPVwiOTgwLmpwZ1wiIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\sourseCode\\\\webStudy\\\\reactStudy\\\\react-next-demo\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(Index, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJmbiIsInB1c2giLCJwYXRobmFtZSIsImFiYyIsIm5hbWUiLCJSb3V0ZXIiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FEa0IsQ0FHbEI7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaLEVBQStDSCxNQUFNLENBQUNJLEtBQXREOztBQUVBLE1BQU1DLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQU07QUFDZkwsVUFBTSxDQUFDTSxJQUFQLENBQVk7QUFBRUMsY0FBUSxFQUFFLFFBQVo7QUFBc0JILFdBQUssRUFBRTtBQUFFSSxXQUFHLEVBQUU7QUFBUDtBQUE3QixLQUFaO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUU7QUFBRUQsZ0JBQVEsRUFBRSxTQUFaO0FBQXVCSCxhQUFLLEVBQUU7QUFBRUssY0FBSSxFQUFFO0FBQVI7QUFBOUIsT0FBWjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBVUU7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNQyxrREFBTSxDQUFDSixJQUFQLENBQVksU0FBWixDQUFOO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQWFFO0FBQVEsYUFBTyxFQUFFRCxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUFlRTtBQUFJLFdBQUssRUFBRTtBQUFFTSxhQUFLLEVBQUU7QUFBVCxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRixlQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGLGVBa0JFO0FBQUEsMENBQWMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixlQW1CRTtBQUFLLFNBQUcsRUFBQyxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBeENEOztHQUFNWixLO1VBQ1dFLHFEOzs7S0FEWEYsSztBQTBDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDc2MDEyYzQ0Y2ViOTFiYWVkNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8g5qih5Z2X5byV5YWl5qC35byPXHJcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgbGVzcyBmcm9tICcuLi9zdHlsZXMubGVzcyc7XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIHJvdXRlcuWPguaVsOeahOaOpeaUtlxyXG4gIGNvbnNvbGUubG9nKFwicm91dGVyLnF1ZXJ5Li4uLi4uLi4uLi4uLi4uLi4uLlwiLCByb3V0ZXIucXVlcnkpO1xyXG5cclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHsgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IGFiYzogXCIxMjNcIiB9IH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiLi9saXN0XCI+XHJcbiAgICAgICAgPGE+bGlzdDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIuL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwiNDU2XCIgfSB9fT5cclxuICAgICAgICA8YT5hYm91dDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgey8qIOesrOS4gOenjWpz57yW56iL6Lez6L2sICovfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiLi9hYm91dFwiKX0+Um91dGVyPC9idXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICB7Lyog56ys5LqM56eNanPnvJbnqIvot7PovawgKi99XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Zm59PnVzZVJvdXRlcjwvYnV0dG9uPlxyXG4gICAgICB7LyogPGgyIGNsYXNzTmFtZT17Y3NzLmNvbG9yfT4gSGVsbG8gV29ybGQgPC9oMj4gKi99XHJcbiAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PiDlhoXogZTmoLflvI8gPC9oMj5cclxuICAgICAgPHA+anN4PC9wPlxyXG4gICAgICB7LyogbGVzc+WSjGNzc+S4jeWPr+S7peWFseeUqCAqL31cclxuICAgICAgPGgyIGNsYXNzTmFtZT0nc2l6ZSc+IGluZGV4IDwvaDI+XHJcbiAgICAgIDxpbWcgc3JjPVwiOTgwLmpwZ1wiIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9