/* global util */

(function () {
    "use strict";

    // you can easily specify private functions that are not accessible from the outside

    function person(name) {
        function reverse(input) {
            return input.split("").reverse().join("");
        }
        return {
            sayHello: function () {
                util.log("Hello, I'm " + name);
            },
            sayHelloReverse: function () {
                util.log("Hello, I'm " + reverse(name));
            }
        };
    }

    var patrick = person("Patrick");

    patrick.sayHelloReverse(); // "Hello, I'm kcirtaP"

    try {
        util.log(patrick.reverse("Patrick")); // throws error - reverse function is not accessible
    } catch (e) {
        util.log(e.toString());
    }
}());
