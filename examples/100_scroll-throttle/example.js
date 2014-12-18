/* global $, util */

(function () {
    "use strict";

    function afterScrollStops(func) {
        var ms = 100, // interval to perform the scroll position check
            oldX = $(document).scrollLeft(),
            oldY = $(document).scrollTop();

        function startf() {
            $(document).one("scroll", function () {
                checkf();
            });
        }

        function checkf() {
            window.setTimeout(function () {
                var newX = $(document).scrollLeft(),
                    newY = $(document).scrollTop();

                if (newX === oldX && newY === oldY) {
                    func();
                    startf();
                    return;
                }

                oldX = newX;
                oldY = newY;
                checkf();
            }, ms);
        }

        startf();
    }

    afterScrollStops(function () {
        util.light();
    });
}());
