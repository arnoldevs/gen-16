"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuesto = _interopRequireDefault(require("./Impuesto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var c1 = new _Cliente["default"]("Juan Pérez", new _Impuesto["default"](2020212, 1321));
console.log(c1.calcularImpuesto());