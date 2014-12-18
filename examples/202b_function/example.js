/* global util */

(function () {
    "use strict";

    // clients using the person object cannot tamper with its inner workings

    function person(name) {
        return {
            sayHello: function () {
                util.log("Hello, I'm " + name);
            }
        };
    }

    var patrick = person("Patrick");

    patrick.sayHello(); // "Hello, I'm Patrick"

    patrick.name = "Paula";

    patrick.sayHello(); // still "Hello, I'm Patrick" - object is not tampered with
}());
