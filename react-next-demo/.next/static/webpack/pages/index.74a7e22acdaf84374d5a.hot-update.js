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
      className: "jsx-2279109989" + " " + (_styles_less__WEBPACK_IMPORTED_MODULE_5___default.a.size || ""),
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
      children: "p.jsx-2279109989{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzb3Vyc2VDb2RlXFx3ZWJTdHVkeVxccmVhY3RTdHVkeVxccmVhY3QtbmV4dC1kZW1vXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNTLEFBR3dCLFdBQ2IiLCJmaWxlIjoiRDpcXHNvdXJzZUNvZGVcXHdlYlN0dWR5XFxyZWFjdFN0dWR5XFxyZWFjdC1uZXh0LWRlbW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8g5qih5Z2X5byV5YWl5qC35byPXHJcbi8vIGltcG9ydCBjc3MgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgbGVzcyBmcm9tICcuLi9zdHlsZXMubGVzcyc7XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIHJvdXRlcuWPguaVsOeahOaOpeaUtlxyXG4gIGNvbnNvbGUubG9nKFwicm91dGVyLnF1ZXJ5Li4uLi4uLi4uLi4uLi4uLi4uLlwiLCByb3V0ZXIucXVlcnkpO1xyXG5cclxuICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHsgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IGFiYzogXCIxMjNcIiB9IH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiLi9saXN0XCI+XHJcbiAgICAgICAgPGE+bGlzdDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIuL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwiNDU2XCIgfSB9fT5cclxuICAgICAgICA8YT5hYm91dDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgey8qIOesrOS4gOenjWpz57yW56iL6Lez6L2sICovfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiLi9hYm91dFwiKX0+Um91dGVyPC9idXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICB7Lyog56ys5LqM56eNanPnvJbnqIvot7PovawgKi99XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Zm59PnVzZVJvdXRlcjwvYnV0dG9uPlxyXG4gICAgICB7LyogPGgyIGNsYXNzTmFtZT17Y3NzLmNvbG9yfT4gSGVsbG8gV29ybGQgPC9oMj4gKi99XHJcbiAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PiDlhoXogZTmoLflvI8gPC9oMj5cclxuICAgICAgPHA+anN4PC9wPlxyXG4gICAgICB7LyogbGVzc+WSjGNzc+S4jeWPr+S7peWFseeUqCAqL31cclxuICAgICAgPGgyIGNsYXNzTmFtZT17bGVzcy5zaXplfT4gaW5kZXggPC9oMj5cclxuICAgICAgPGltZyBzcmM9XCI5ODAuanBnXCIgLz5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\sourseCode\\\\webStudy\\\\reactStudy\\\\react-next-demo\\\\pages\\\\index.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJmbiIsInB1c2giLCJwYXRobmFtZSIsImFiYyIsIm5hbWUiLCJSb3V0ZXIiLCJjb2xvciIsImxlc3MiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQURrQixDQUdsQjs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVosRUFBK0NILE1BQU0sQ0FBQ0ksS0FBdEQ7O0FBRUEsTUFBTUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBTTtBQUNmTCxVQUFNLENBQUNNLElBQVAsQ0FBWTtBQUFFQyxjQUFRLEVBQUUsUUFBWjtBQUFzQkgsV0FBSyxFQUFFO0FBQUVJLFdBQUcsRUFBRTtBQUFQO0FBQTdCLEtBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUE7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxRQUFYO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRTtBQUFFRCxnQkFBUSxFQUFFLFNBQVo7QUFBdUJILGFBQUssRUFBRTtBQUFFSyxjQUFJLEVBQUU7QUFBUjtBQUE5QixPQUFaO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFVRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGtEQUFNLENBQUNKLElBQVAsQ0FBWSxTQUFaLENBQU47QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBYUU7QUFBUSxhQUFPLEVBQUVELEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixlQWVFO0FBQUksV0FBSyxFQUFFO0FBQUVNLGFBQUssRUFBRTtBQUFULE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLGVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsZUFrQkU7QUFBQSwyQ0FBZUMsbURBQUksQ0FBQ0MsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsZUFtQkU7QUFBSyxTQUFHLEVBQUMsU0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXhDRDs7R0FBTWQsSztVQUNXRSxxRDs7O0tBRFhGLEs7QUEwQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0YTdlMjJhY2RhZjg0Mzc0ZDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIOaooeWdl+W8leWFpeagt+W8j1xyXG4vLyBpbXBvcnQgY3NzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGxlc3MgZnJvbSAnLi4vc3R5bGVzLmxlc3MnO1xyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyByb3V0ZXLlj4LmlbDnmoTmjqXmlLZcclxuICBjb25zb2xlLmxvZyhcInJvdXRlci5xdWVyeS4uLi4uLi4uLi4uLi4uLi4uLi5cIiwgcm91dGVyLnF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiBcIi9hYm91dFwiLCBxdWVyeTogeyBhYmM6IFwiMTIzXCIgfSB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpbmsgaHJlZj1cIi4vbGlzdFwiPlxyXG4gICAgICAgIDxhPmxpc3Q8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiLi9hYm91dFwiLCBxdWVyeTogeyBuYW1lOiBcIjQ1NlwiIH0gfX0+XHJcbiAgICAgICAgPGE+YWJvdXQ8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIHsvKiDnrKzkuIDnp41qc+e8lueoi+i3s+i9rCAqL31cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi4vYWJvdXRcIil9PlJvdXRlcjwvYnV0dG9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgey8qIOesrOS6jOenjWpz57yW56iL6Lez6L2sICovfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZufT51c2VSb3V0ZXI8L2J1dHRvbj5cclxuICAgICAgey8qIDxoMiBjbGFzc05hbWU9e2Nzcy5jb2xvcn0+IEhlbGxvIFdvcmxkIDwvaDI+ICovfVxyXG4gICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT4g5YaF6IGU5qC35byPIDwvaDI+XHJcbiAgICAgIDxwPmpzeDwvcD5cclxuICAgICAgey8qIGxlc3Plkoxjc3PkuI3lj6/ku6XlhbHnlKggKi99XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e2xlc3Muc2l6ZX0+IGluZGV4IDwvaDI+XHJcbiAgICAgIDxpbWcgc3JjPVwiOTgwLmpwZ1wiIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9