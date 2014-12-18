/* global util */

(function () {
    "use strict";

    // Write a function liftf that takes a binary function, and makes it callable with two invocations.

    function mul(a, b) {
        return a * b;
    }

    function add(a, b) {
        return a + b;
    }

    function liftf(binaryf) {
        return function (value1) {
            return function (value2) {
                return binaryf(value1, value2);
            };
        };
    }

    var addf = liftf(add);

    util.log("addf(3)(4):", addf(3)(4)); // 7
    util.log("liftf(mul)(5)(6):", liftf(mul)(5)(6)); // 30
}());
