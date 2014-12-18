/* global $, util */

(function () {
    "use strict";

    function periodicChecker(predf, ms) {
        return function checkf(callback) {
            window.setTimeout(function () {
                if (predf()) {
                    callback();
                    return;
                }
                checkf(callback);
            }, ms);
        };
    }

    function afterScrollStops(func) {
        var ms = 100, // interval to perform the scroll position check
            oldX = $(document).scrollLeft(),
            oldY = $(document).scrollTop(),
            scrollPosChecker;

        scrollPosChecker = periodicChecker(function () {
            var newX = $(document).scrollLeft(),
                newY = $(document).scrollTop(),
                stoppedScrolling = newX === oldX && newY === oldY;

            oldX = newX;
            oldY = newY;

            return stoppedScrolling;
        }, ms);

        (function startf() {
            $(document).one("scroll", function () {
                scrollPosChecker(function () {
                    func();
                    startf();
                });
            });
        }());
    }

    afterScrollStops(function () {
        util.light();
    });
}());
