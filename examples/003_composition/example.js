/* global util */

(function () {
    "use strict";

    // Write a function composeb that takes two binary functions and returns a function that calls them both.

    function add(a, b) {
        return a + b;
    }

    function mul(a, b) {
        return a * b;
    }

    function composeb(binaryf1, binaryf2) {
        return function (a, b, c) {
            return binaryf2(binaryf1(a, b), c);
        };
    }

    util.log("composeb(add, mul)(2, 3, 7):", composeb(add, mul)(2, 3, 7)); // 35
}());
