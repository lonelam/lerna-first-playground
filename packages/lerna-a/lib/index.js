"use strict";
exports.__esModule = true;
exports.lernaA = void 0;
var lerna_b_1 = require("@laizn/lerna-b");
function lernaA(arg) {
    console.log('lerna -a output modified', arg);
    lerna_b_1.lernaB();
}
exports.lernaA = lernaA;
