/**
 * util
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 18/12/14
 */

/* global: $ */
(function () {
    "use strict";

    window.util = {

        log: function log() {
            var $body = $("body"),
                $doc = $(document),
                msg = "", i;

            for (i = 0; i < arguments.length; i++) {
                msg += (arguments[i] + (i === arguments.length - 1 ? "" : " "));
            }
            $body.find("p").last().removeClass("new");
            $body.append("<p class=\"new\">" + msg + "</p>");
            $doc.scrollTop($body.prop("scrollHeight"));
        },

        light: function light() {
            $(".light").show().delay(500).fadeOut(500);
        }
    };
}());
