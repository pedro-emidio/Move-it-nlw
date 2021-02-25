webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengeContext, ChallengeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengeContext\", function() { return ChallengeContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengeProvider\", function() { return ChallengeProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/pedro/moveit2/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallengeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengeProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentExpirience = _useState2[0],\n      setCurrentExpirence = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleted = _useState3[0],\n      setChallengeCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    var amount = activeChallenge.amount;\n    var finalExperience = currentExpirience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentExpirence(finalExperience);\n    setActiveChallenge(null);\n    setChallengeCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengeContext.Provider, {\n    value: {\n      level: level,\n      levelUp: levelUp,\n      currentExpirience: currentExpirience,\n      challengesCompleted: challengesCompleted,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel,\n      completeChallenge: completeChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengeProvider, \"xDPy4Et10fMZOblskfbavjyrAs8=\");\n\n_c = ChallengeProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengeProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBpcmllbmNlIiwic2V0Q3VycmVudEV4cGlyZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiYW1vdW50IiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUF3Qk8sSUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdEM7QUFHQSxTQUFTQyxpQkFBVCxPQUFpRTtBQUFBOztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7O0FBQUEsa0JBQzFDQyxzREFBUSxDQUFDLENBQUQsQ0FEa0M7QUFBQSxNQUM3REMsS0FENkQ7QUFBQSxNQUN0REMsUUFEc0Q7O0FBQUEsbUJBRW5CRixzREFBUSxDQUFDLENBQUQsQ0FGVztBQUFBLE1BRTdERyxpQkFGNkQ7QUFBQSxNQUUxQ0MsbUJBRjBDOztBQUFBLG1CQUdmSixzREFBUSxDQUFDLENBQUQsQ0FITztBQUFBLE1BRzdESyxtQkFINkQ7QUFBQSxNQUd4Q0MscUJBSHdDOztBQUFBLG1CQUt0Qk4sc0RBQVEsQ0FBQyxJQUFELENBTGM7QUFBQSxNQUs3RE8sZUFMNkQ7QUFBQSxNQUs1Q0Msa0JBTDRDOztBQU9wRSxNQUFNQyxxQkFBcUIsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQ1YsS0FBSyxHQUFHLENBQVQsSUFBYyxDQUF2QixFQUEwQixDQUExQixDQUE5Qjs7QUFFQSxXQUFTVyxPQUFULEdBQW1CO0FBQ2ZWLFlBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNIOztBQUVELFdBQVNZLGlCQUFULEdBQTZCO0FBQ3pCLFFBQU1DLG9CQUFvQixHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FBV0wsSUFBSSxDQUFDTSxNQUFMLEtBQWdCQyw2Q0FBVSxDQUFDQyxNQUF0QyxDQUE3QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0YsNkNBQVUsQ0FBQ0gsb0JBQUQsQ0FBNUI7QUFFQU4sc0JBQWtCLENBQUNXLFNBQUQsQ0FBbEI7QUFFSDs7QUFDRCxXQUFTQyxjQUFULEdBQTBCO0FBQ3RCWixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0g7O0FBRUQsV0FBU2EsaUJBQVQsR0FBNkI7QUFDekIsUUFBSSxDQUFDZCxlQUFMLEVBQXNCO0FBQ2xCO0FBQ0g7O0FBSHdCLFFBSWpCZSxNQUppQixHQUlOZixlQUpNLENBSWpCZSxNQUppQjtBQUt6QixRQUFJQyxlQUFlLEdBQUdwQixpQkFBaUIsR0FBR21CLE1BQTFDOztBQUVBLFFBQUlDLGVBQWUsSUFBSWQscUJBQXZCLEVBQThDO0FBQzFDYyxxQkFBZSxHQUFHQSxlQUFlLEdBQUdkLHFCQUFwQztBQUNBRyxhQUFPO0FBQ1Y7O0FBQ0RSLHVCQUFtQixDQUFDbUIsZUFBRCxDQUFuQjtBQUNBZixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FGLHlCQUFxQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUFyQjtBQUNIOztBQUVELHNCQUNJLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRTtBQUM5QkosV0FBSyxFQUFMQSxLQUQ4QjtBQUN2QlcsYUFBTyxFQUFQQSxPQUR1QjtBQUNkVCx1QkFBaUIsRUFBakJBLGlCQURjO0FBQ0tFLHlCQUFtQixFQUFuQkEsbUJBREw7QUFDMEJRLHVCQUFpQixFQUFqQkEsaUJBRDFCO0FBQzZDTixxQkFBZSxFQUFmQSxlQUQ3QztBQUM4RGEsb0JBQWMsRUFBZEEsY0FEOUQ7QUFFOUJYLDJCQUFxQixFQUFyQkEscUJBRjhCO0FBRVBZLHVCQUFpQixFQUFqQkE7QUFGTyxLQUFsQztBQUFBLGNBSU10QjtBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztHQWxEZUQsaUI7O0tBQUFBLGlCIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbidcblxuaW50ZXJmYWNlIGNoYWxsZW5nZSB7XG4gICAgdHlwZTogJ2JvZHknIHwgJ2V5ZSdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgYW1vdW50OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gICAgbGV2ZWw6IG51bWJlclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyXG4gICAgY3VycmVudEV4cGlyaWVuY2U6IG51bWJlclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWRcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZFxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkXG4gICAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWRcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IGNoYWxsZW5nZVxufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlUHJvdmlkZXJQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VQcm92aWRlcih7IGNoaWxkcmVuIH06IENoYWxsZW5nZVByb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgW2N1cnJlbnRFeHBpcmllbmNlLCBzZXRDdXJyZW50RXhwaXJlbmNlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZUNvbXBsZXRlZF0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpXG5cbiAgICBmdW5jdGlvbiBsZXZlbFVwKCkge1xuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdXG5cbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcblxuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XG4gICAgICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwaXJpZW5jZSArIGFtb3VudFxuXG4gICAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWxcbiAgICAgICAgICAgIGxldmVsVXAoKVxuICAgICAgICB9XG4gICAgICAgIHNldEN1cnJlbnRFeHBpcmVuY2UoZmluYWxFeHBlcmllbmNlKVxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcbiAgICAgICAgc2V0Q2hhbGxlbmdlQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDaGFsbGVuZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBsZXZlbCwgbGV2ZWxVcCwgY3VycmVudEV4cGlyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWQsIHN0YXJ0TmV3Q2hhbGxlbmdlLCBhY3RpdmVDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLCBjb21wbGV0ZUNoYWxsZW5nZVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHsgY2hpbGRyZW59XG4gICAgICAgIDwvQ2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlcj5cblxuXG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})