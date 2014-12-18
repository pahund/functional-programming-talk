/* global util */

(function () {
    "use strict";

    // Write a function liftg that will take a binary function and apply it to many invocations.

    function mul(a, b) {
        return a * b;
    }

    /* TODO */

    util.log("liftg(mul)():", liftg(mul)()); // undefined
    util.log("liftg(mul)(3)():", liftg(mul)(3)()); // 3
    util.log("liftg(mul)(3)(0)(4)():", liftg(mul)(3)(0)(4)()); // 0
    util.log("liftg(mul)(1)(2)(4)(8)():", liftg(mul)(1)(2)(4)(8)()); // 64
}());
