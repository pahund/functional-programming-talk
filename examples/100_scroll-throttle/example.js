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

    function updater(updatef) {
        var oldValue = updatef();
        return function () {
            var newValue = updatef();
            if (oldValue !== newValue) {
                oldValue = newValue;
                return false;
            }
            return true;
        };
    }

    function getScrollX() {
        return $(document).scrollTop();
    }

    function getScrollY() {
        return $(document).scrollLeft();
    }

    function afterScrollStops(func) {
        var ms = 100, // interval to perform the scroll position check
            scrollPosChecker,
            xUpdater = updater(getScrollX),
            yUpdater = updater(getScrollY);

        scrollPosChecker = periodicChecker(function () {
            return xUpdater() &&  yUpdater();
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
