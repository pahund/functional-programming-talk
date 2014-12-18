/* global util */

(function () {
    "use strict";

    // Write a fromTo function that produces a generator that will produce values in a range.

    /* TODO */

    var index = fromTo(0, 3);

    util.log("index():", index()); // 0
    util.log("index():", index()); // 1
    util.log("index():", index()); // 2
    util.log("index():", index()); // undefined
}());
