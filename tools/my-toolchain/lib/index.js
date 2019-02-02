(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "./src/MyClass"], function (require, exports) {
    var MyClass_1 = require("./src/MyClass");
    var foo = new MyClass_1.default();
    foo.run();
});
//# sourceMappingURL=index.js.map