/* global $ */

(function () {
    "use strict";

    $.fn.stickyBox = function (input) {
        // given a predicate function and an update interval (ms),
        // creates a function that accepts a callback function that is executed when
        // the predicate function returns true
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

        // given an update function, creates a function that returns false if the update function
        // returns a different value than before and true if the update function returns the same value
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

        // initialize jQuery plugin logic on each selected element, returning the element set
        return this.each(function () {
            var $element = $(this), // jquery element that the plugin instance is working on
                position, // the position of the element before the scrolling
                defaults, // default settings
                settings, // settings of this plugin instance
                init, // initialization functions
                get, // utility functions for getting stuff
                scrollPosChecker;

            // default plugin settings, can by overridden by passing options
            defaults = {
                // position check interval
                ms: 100,

                // this is the "payload" function that determines what happens when the user stops
                // scrolling; by default, it moves the element to the original position, relative to
                // the changed viewport; it can be overwritten by passing an onScrollStop option
                onScrollStop: function () {
                    $element.css("left", (position.x + get.scroll.x()) + "px");
                    $element.css("top", (position.y + get.scroll.y()) + "px");
                }
            };

            // initialization functions
            init = {
                settings: function () {
                    settings = $.extend(true, defaults, input);
                    return init;
                },
                position: function () {
                    position = get.element.pos();
                    return init;
                },
                checker: function () {
                    var xUpdater, yUpdater;

                    xUpdater = updater(get.scroll.x);
                    yUpdater = updater(get.scroll.y);

                    scrollPosChecker = periodicChecker(function () {
                        return xUpdater() &&  yUpdater();
                    }, settings.ms);
                }
            };

            // utility functions for getting stuff
            get = {
                scroll: {
                    x: function () {
                        return $(document).scrollLeft();
                    },
                    y: function () {
                        return $(document).scrollTop();
                    },
                    pos: function () {
                        return {
                            x: get.scroll.x(),
                            y: get.scroll.y()
                        };
                    }
                },
                element: {
                    x: function () {
                        return $element.position().left;
                    },
                    y: function () {
                        return $element.position().top;
                    },
                    pos: function () {
                        return {
                            x: get.element.x(),
                            y: get.element.y()
                        };
                    }
                }
            };

            // initialize plugin
            init.settings().position().checker();

            // start execution of plugin logic
            (function startf() {
                $(document).one("scroll", function () {
                    scrollPosChecker(function () {
                        settings.onScrollStop();
                        startf();
                    });
                });
            }());
        });
    };

    $(".stickyBox").stickyBox();
}());
