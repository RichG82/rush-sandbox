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
exports["default"] = MyClass;
