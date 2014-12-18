/* global util */

(function () {
"use strict";

    var roman,
        arabic,
        alpha;

    function nest() {
        var functions = arguments,
            findex = functions.length - 1,
            f = functions[findex];

        while (--findex >= 0) {
            f = functions[findex](f);
        }
        f();
    }

    function iterate() {
        var slice = Array.prototype.slice,
            items = [],
            i;

        for (i = 0; i < arguments.length; i++) {
            items = items.concat(arguments[i]);
        }

        return function (callback) {
            return function() {
                var prev = slice.apply(arguments),
                    i;
                for (i = 0; i < items.length; i++) {
                    if (typeof callback === "function") {
                        callback.apply(null, prev.concat(items[i]));
                    }
                }
            };
        };
    }

    roman = iterate("I", "II", "III"); // you can pass items as variable number of arguments
    arabic = iterate(["1.", "2.", "3."]); // you can also pass items as array
    alpha = iterate(["a)", "b)"], "c)", ["d)"]); // you can mix both methods of passing items

    nest(roman, arabic, alpha, util.log); // same result as: roman(arabic(alpha(log)))();
}());
