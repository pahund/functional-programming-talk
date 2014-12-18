/* global util */

(function () {
    "use strict";

    // Write a function curry that takes a function and an argument, and returns a function that can take a second argument.

    function mul(a, b) {
        return a * b;
    }

    function add(a, b) {
        return a + b;
    }

    function curry(binaryf, value1) {
        return function (value2) {
            return binaryf(value1, value2);
        };
    }

    var add3 = curry(add, 3);

    util.log("add3(4):", add3(4)); // 7
    util.log("curry(mul, 5)(6):", curry(mul, 5)(6)); // 30
}());
