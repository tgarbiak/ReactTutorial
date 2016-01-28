"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var ReactDOM = _interopRequire(require("react-dom"));

var Router = require("react-router").Router;
var routes = require("./routes").routes;
var createBrowserHistory = _interopRequire(require("history/lib/createBrowserHistory"));

ReactDOM.render(React.createElement(Router, { routes: routes, history: createBrowserHistory() }), document.getElementById("app"));
