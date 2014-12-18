/* global util */

(function () {
    "use strict";

    // creating an object with a factory function

    function person(name) {
        return {
            sayHello: function () {
                util.log("Hello, I'm " + name);
            }
        };
    }

    var patrick = person("Patrick");

    patrick.sayHello(); // "Hello, I'm Patrick"

}());
