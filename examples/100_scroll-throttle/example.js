/* global $, util */

(function () {
    "use strict";

    function checkf(predf, callback, ms) {
        window.setTimeout(function () {
            if (predf()) {
                callback();
                return;
            }
            checkf(predf, callback, ms);
        }, ms);
    }

    function afterScrollStops(func) {
        var ms = 100, // interval to perform the scroll position check
            oldX = $(document).scrollLeft(),
            oldY = $(document).scrollTop();

        function startf() {
            $(document).one("scroll", function () {
                checkf(function () {
                    var newX = $(document).scrollLeft(),
                        newY = $(document).scrollTop(),
                        stoppedScrolling = newX === oldX && newY === oldY;

                    oldX = newX;
                    oldY = newY;

                    return stoppedScrolling;
                }, function () {
                    func();
                    startf();
                }, ms);
            });
        }

        startf();
    }

    afterScrollStops(function () {
        util.light();
    });
}());
