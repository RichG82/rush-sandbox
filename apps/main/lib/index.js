(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../controls/ui/dist/components/Header"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Header_1 = require("../../../controls/ui/dist/components/Header");
    var head = new Header_1.default();
    head.go();
});
//# sourceMappingURL=index.js.map