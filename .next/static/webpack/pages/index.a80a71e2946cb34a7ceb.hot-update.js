webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengeContext, ChallengeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengeContext\", function() { return ChallengeContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengeProvider\", function() { return ChallengeProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/pedro/moveit2/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallengeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengeProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentExpirience = _useState2[0],\n      setCurrentExpirence = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n    new Audio('/notification.mp3').play;\n\n    if (Notification.permission === 'granted') {\n      new Notification('Novo desafio!', {\n        body: \"Valendo \".concat(challenge.amount, \"xp.\")\n      });\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    var amount = activeChallenge.amount;\n    var finalExperience = currentExpirience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentExpirence(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengeContext.Provider, {\n    value: {\n      level: level,\n      levelUp: levelUp,\n      currentExpirience: currentExpirience,\n      challengesCompleted: challengesCompleted,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel,\n      completeChallenge: completeChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengeProvider, \"u+p6YMxt7P6bjhhuHkzxKqWKvjE=\");\n\n_c = ChallengeProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengeProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBpcmllbmNlIiwic2V0Q3VycmVudEV4cGlyZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQXdCTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUdBLFNBQVNDLGlCQUFULE9BQWlFO0FBQUE7O0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQzs7QUFBQSxrQkFDMUNDLHNEQUFRLENBQUMsQ0FBRCxDQURrQztBQUFBLE1BQzdEQyxLQUQ2RDtBQUFBLE1BQ3REQyxRQURzRDs7QUFBQSxtQkFFbkJGLHNEQUFRLENBQUMsQ0FBRCxDQUZXO0FBQUEsTUFFN0RHLGlCQUY2RDtBQUFBLE1BRTFDQyxtQkFGMEM7O0FBQUEsbUJBR2RKLHNEQUFRLENBQUMsQ0FBRCxDQUhNO0FBQUEsTUFHN0RLLG1CQUg2RDtBQUFBLE1BR3hDQyxzQkFId0M7O0FBQUEsbUJBS3RCTixzREFBUSxDQUFDLElBQUQsQ0FMYztBQUFBLE1BSzdETyxlQUw2RDtBQUFBLE1BSzVDQyxrQkFMNEM7O0FBT3BFLE1BQU1DLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDVixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCO0FBRUFXLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnQkFBWSxDQUFDQyxpQkFBYjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsT0FBVCxHQUFtQjtBQUNmYixZQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDSDs7QUFFRCxXQUFTZSxpQkFBVCxHQUE2QjtBQUN6QixRQUFNQyxvQkFBb0IsR0FBR1AsSUFBSSxDQUFDUSxLQUFMLENBQVdSLElBQUksQ0FBQ1MsTUFBTCxLQUFnQkMsNkNBQVUsQ0FBQ0MsTUFBdEMsQ0FBN0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDZDQUFVLENBQUNILG9CQUFELENBQTVCO0FBRUFULHNCQUFrQixDQUFDYyxTQUFELENBQWxCO0FBRUEsUUFBSUMsS0FBSixDQUFVLG1CQUFWLEVBQStCQyxJQUEvQjs7QUFFQSxRQUFJWCxZQUFZLENBQUNZLFVBQWIsS0FBNEIsU0FBaEMsRUFBMkM7QUFDdkMsVUFBSVosWUFBSixDQUFpQixlQUFqQixFQUFrQztBQUM5QmEsWUFBSSxvQkFBYUosU0FBUyxDQUFDSyxNQUF2QjtBQUQwQixPQUFsQztBQUdIO0FBRUo7O0FBQ0QsV0FBU0MsY0FBVCxHQUEwQjtBQUN0QnBCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxXQUFTcUIsaUJBQVQsR0FBNkI7QUFDekIsUUFBSSxDQUFDdEIsZUFBTCxFQUFzQjtBQUNsQjtBQUNIOztBQUh3QixRQUlqQm9CLE1BSmlCLEdBSU5wQixlQUpNLENBSWpCb0IsTUFKaUI7QUFNekIsUUFBSUcsZUFBZSxHQUFHM0IsaUJBQWlCLEdBQUd3QixNQUExQzs7QUFFQSxRQUFJRyxlQUFlLElBQUlyQixxQkFBdkIsRUFBOEM7QUFDMUNxQixxQkFBZSxHQUFHQSxlQUFlLEdBQUdyQixxQkFBcEM7QUFDQU0sYUFBTztBQUNWOztBQUNEWCx1QkFBbUIsQ0FBQzBCLGVBQUQsQ0FBbkI7QUFDQXRCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYsMEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0g7O0FBRUQsc0JBQ0kscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFO0FBQzlCSixXQUFLLEVBQUxBLEtBRDhCO0FBQ3ZCYyxhQUFPLEVBQVBBLE9BRHVCO0FBQ2RaLHVCQUFpQixFQUFqQkEsaUJBRGM7QUFDS0UseUJBQW1CLEVBQW5CQSxtQkFETDtBQUMwQlcsdUJBQWlCLEVBQWpCQSxpQkFEMUI7QUFDNkNULHFCQUFlLEVBQWZBLGVBRDdDO0FBQzhEcUIsb0JBQWMsRUFBZEEsY0FEOUQ7QUFFOUJuQiwyQkFBcUIsRUFBckJBLHFCQUY4QjtBQUVQb0IsdUJBQWlCLEVBQWpCQTtBQUZPLEtBQWxDO0FBQUEsY0FJTTlCO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBL0RlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nXG5cbmludGVyZmFjZSBjaGFsbGVuZ2Uge1xuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgIGFtb3VudDogbnVtYmVyXG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xuICAgIGxldmVsOiBudW1iZXJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlclxuICAgIGN1cnJlbnRFeHBpcmllbmNlOiBudW1iZXJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkXG4gICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWRcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZFxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBjaGFsbGVuZ2Vcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZVByb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSlcblxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDaGFsbGVuZ2VQcm92aWRlclByb3BzKSB7XG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKVxuICAgIGNvbnN0IFtjdXJyZW50RXhwaXJpZW5jZSwgc2V0Q3VycmVudEV4cGlyZW5jZV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMilcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXG4gICAgfSwgW10pXG5cbiAgICBmdW5jdGlvbiBsZXZlbFVwKCkge1xuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdXG5cbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcblxuICAgICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheVxuXG4gICAgICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8hJywge1xuICAgICAgICAgICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cC5gXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xuICAgICAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZVxuXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwaXJpZW5jZSArIGFtb3VudFxuXG4gICAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWxcbiAgICAgICAgICAgIGxldmVsVXAoKVxuICAgICAgICB9XG4gICAgICAgIHNldEN1cnJlbnRFeHBpcmVuY2UoZmluYWxFeHBlcmllbmNlKVxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcbiAgICAgICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgbGV2ZWwsIGxldmVsVXAsIGN1cnJlbnRFeHBpcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkLCBzdGFydE5ld0NoYWxsZW5nZSwgYWN0aXZlQ2hhbGxlbmdlLCByZXNldENoYWxsZW5nZSxcbiAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCwgY29tcGxldGVDaGFsbGVuZ2VcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7IGNoaWxkcmVufVxuICAgICAgICA8L0NoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXI+XG5cblxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})