webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/useFetch.js":
/*!***************************!*\
  !*** ./utils/useFetch.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (url) {
  var isCurrent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      error = _useState3[0],
      setError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  var getStats = function getStats() {
    var data, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getStats$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

          case 6:
            data = _context.sent;
            if (isCurrent.current) setStats(data);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            setError(_context.t0);
            setStats(null);

          case 14:
            if (isCurrent.current) setLoading(false);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]], Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (url) getStats();
  }, [url, setStats]);
  return {
    stats: stats,
    loading: loading,
    error: error
  };
}); // export default function Example() {
//   const [data, dataSet] = useState(false);
//   async function fetchMyAPI() {
//     let response = await fetch("api/data");
//     response = await res.json();
//     dataSet(response);
//   }
//   useEffect(() => {
//     fetchMyAPI();
//   }, []);
//   return <div>{data}</div>;
// }

/***/ })

})
//# sourceMappingURL=index.js.fb9926454eb40656bb5a.hot-update.js.map