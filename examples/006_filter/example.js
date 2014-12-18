/* global util */

(function () {
    "use strict";

    // Write a filter function that takes a generator and a predicate and produces
    // a generator that produces only the values approved by the predicate.

    function fromTo(from, to) {
        var index = from;
        return function () {
            return index >= to ? undefined : index++;
        };
    }

    function filter(genf, predf) {
        return function () {
            var value;
            do {
                value = genf();
            } while (value !== undefined && !predf(value));
            return value;
        };
    }

    var fil = filter(fromTo(0, 5), function third(value) {
        return (value % 3) === 0;
    });

    util.log("fil(): ", fil()); // 0
    util.log("fil(): ", fil()); // 3
    util.log("fil(): ", fil()); // undefined
}());
