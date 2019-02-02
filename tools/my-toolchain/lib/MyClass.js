(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("Index TS File");
    var MyClass = /** @class */ (function () {
        function MyClass() {
            console.log("Constructor");
        }
        MyClass.prototype.run = function () {
            console.log("Run");
        };
        return MyClass;
    }());
    exports.default = MyClass;
});
//# sourceMappingURL=MyClass.js.map