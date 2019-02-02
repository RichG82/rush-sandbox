(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports"], function (require, exports) {
    console.log("Index TS File");
    var MyClass = (function () {
        function MyClass() {
            console.log("Constructor");
        }
        MyClass.prototype.run = function () {
            console.log("Run");
        };
        return MyClass;
    })();
    exports.default = MyClass;
});
//# sourceMappingURL=MyClass.js.map