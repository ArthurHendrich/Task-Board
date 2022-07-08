"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebaseConnections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/firebaseConnections */ \"(api)/./src/services/firebaseConnections.ts\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async session ({ session , token  }) {\n            try {\n                const lastDonate = await _services_firebaseConnections__WEBPACK_IMPORTED_MODULE_2__[\"default\"].firestore().collection(\"users\").doc(String(token.sub)).get().then((snapshot)=>{\n                    if (snapshot.exists) {\n                        return snapshot.data().lastDonate.toDate();\n                    } else {\n                        return null; // user is not a donater\n                    }\n                });\n                return {\n                    ...session,\n                    id: token.sub,\n                    vip: lastDonate ? true : false,\n                    lastDonate: lastDonate\n                };\n            } catch  {\n                console.log(\"N\\xe3o pegou o id\");\n                return {\n                    ...session,\n                    id: null,\n                    vip: false,\n                    lastDonate: null\n                };\n            }\n        },\n        async signIn ({ user , account , profile  }) {\n            const { email  } = user;\n            try {\n                return true;\n            } catch (err) {\n                console.log(\"Erro ao fazer login\", err);\n                return false;\n            }\n        }\n    },\n    secret: \"dasdadadadfhuafuha\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFFSztBQUU1RCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QkcsU0FBUyxFQUFFO1FBQ1RGLGlFQUFjLENBQUM7WUFDYkcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjtTQUNGLENBQUM7S0FDSDtJQUVEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxPQUFPLEVBQUMsRUFBQ0EsT0FBTyxHQUFFQyxLQUFLLEdBQUMsRUFBRTtZQUM5QixJQUFHO2dCQUNELE1BQU1DLFVBQVUsR0FBRyxNQUFNZCwrRUFBa0IsRUFBRSxDQUFDZ0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDTSxHQUFHLENBQUMsQ0FBQyxDQUN2RkMsR0FBRyxFQUFFLENBQ0xDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUs7b0JBQ2xCLElBQUdBLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO3dCQUNsQixPQUFPRCxRQUFRLENBQUNFLElBQUksRUFBRSxDQUFDVixVQUFVLENBQUNXLE1BQU0sRUFBRSxDQUFDO3FCQUM1QyxNQUFNO3dCQUNMLE9BQU8sSUFBSSxDQUFDLENBQUMsd0JBQXdCO3FCQUN0QztpQkFDRixDQUFDO2dCQUVGLE9BQU87b0JBQ0wsR0FBR2IsT0FBTztvQkFDVmMsRUFBRSxFQUFFYixLQUFLLENBQUNNLEdBQUc7b0JBQ2JRLEdBQUcsRUFBRWIsVUFBVSxHQUFHLElBQUksR0FBRyxLQUFLO29CQUM5QkEsVUFBVSxFQUFFQSxVQUFVO2lCQUN2QjthQUNGLENBQUMsT0FBTTtnQkFDTmMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQWdCLENBQUM7Z0JBQzdCLE9BQU87b0JBQ0wsR0FBR2pCLE9BQU87b0JBQ1ZjLEVBQUUsRUFBRSxJQUFJO29CQUNSQyxHQUFHLEVBQUUsS0FBSztvQkFDVmIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO2FBQ0Y7U0FDRjtRQUNELE1BQU1nQixNQUFNLEVBQUMsRUFBQ0MsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBQyxFQUFFO1lBQ3JDLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUdILElBQUk7WUFFcEIsSUFBRztnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNiLENBQUMsT0FBTUksR0FBRyxFQUFFO2dCQUNYUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sS0FBSzthQUNiO1NBQ0Y7S0FDRjtJQUNEQyxNQUFNLEVBQUVqQyxvQkFBOEI7Q0FFdkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZmlyZWJhc2VDb25uZWN0aW9uc1wiXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzY29wZTogJ3JlYWQ6dXNlcidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICBdLFxuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sIHRva2VufSkge1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBsYXN0RG9uYXRlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoU3RyaW5nKHRva2VuLnN1YikpXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICBpZihzbmFwc2hvdC5leGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzbmFwc2hvdC5kYXRhKCkubGFzdERvbmF0ZS50b0RhdGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIHVzZXIgaXMgbm90IGEgZG9uYXRlclxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNlc3Npb24sXG4gICAgICAgICAgaWQ6IHRva2VuLnN1YixcbiAgICAgICAgICB2aXA6IGxhc3REb25hdGUgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgbGFzdERvbmF0ZTogbGFzdERvbmF0ZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uc29sZS5sb2coJ07Do28gcGVnb3UgbyBpZCcpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICB2aXA6IGZhbHNlLFxuICAgICAgICAgIGxhc3REb25hdGU6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2lnbkluKHt1c2VyLCBhY2NvdW50LCBwcm9maWxlfSkge1xuICAgICAgY29uc3Qge2VtYWlsfSA9IHVzZXI7XG5cbiAgICAgIHRyeXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJybyBhbyBmYXplciBsb2dpbicsIGVycik7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRUNSRVQsXG5cbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJmaXJlYmFzZSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsImxhc3REb25hdGUiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiU3RyaW5nIiwic3ViIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiZXhpc3RzIiwiZGF0YSIsInRvRGF0ZSIsImlkIiwidmlwIiwiY29uc29sZSIsImxvZyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImVtYWlsIiwiZXJyIiwic2VjcmV0IiwiTkVYVF9QVUJMSUNfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/firebaseConnections.ts":
/*!*********************************************!*\
  !*** ./src/services/firebaseConnections.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet firebaseConfig = {\n    apiKey: \"AIzaSyC8eLKsjKly9qt4UPYAM0ljgVombUfZUsM\",\n    authDomain: \"boardapp-4fd5d.firebaseapp.com\",\n    projectId: \"boardapp-4fd5d\",\n    storageBucket: \"boardapp-4fd5d.appspot.com\",\n    messagingSenderId: \"120012020058\",\n    appId: \"1:120012020058:web:55c635535887431ce9bb63\",\n    measurementId: \"G-LSDSCBD8HT\"\n};\n// Initialize Firebase\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmlyZWJhc2VDb25uZWN0aW9ucy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQztBQUNSO0FBRTNCLElBQUlDLGNBQWMsR0FBRztJQUNuQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLGdDQUFnQztJQUM1Q0MsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQkMsYUFBYSxFQUFFLDRCQUE0QjtJQUMzQ0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztJQUNsREMsYUFBYSxFQUFFLGNBQWM7Q0FDOUI7QUFFRCxzQkFBc0I7QUFDdEIsSUFBSSxDQUFDUixpRUFBb0IsRUFBRTtJQUN6QkEsaUVBQXNCLENBQUNDLGNBQWMsQ0FBQztDQUN2QztBQUdELGlFQUFlRCxxREFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2ZpcmViYXNlQ29ubmVjdGlvbnMudHM/YzFiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXG5cbmxldCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUM4ZUxLc2pLbHk5cXQ0VVBZQU0wbGpnVm9tYlVmWlVzTVwiLFxuICBhdXRoRG9tYWluOiBcImJvYXJkYXBwLTRmZDVkLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiYm9hcmRhcHAtNGZkNWRcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJib2FyZGFwcC00ZmQ1ZC5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMjAwMTIwMjAwNThcIixcbiAgYXBwSWQ6IFwiMToxMjAwMTIwMjAwNTg6d2ViOjU1YzYzNTUzNTg4NzQzMWNlOWJiNjNcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUxTRFNDQkQ4SFRcIlxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlOyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/firebaseConnections.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();