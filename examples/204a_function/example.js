/* global util */

(function () {
    "use strict";

    // you can easily organize your internal and public functions in hierarchical objects
    // to get more structured code

    function person(name) {
        function reverse(input) {
            return input.split("").reverse().join("");
        }

        return {
            say: {
                hello: function () {
                    util.log("Hello, I'm " + name);
                },
                helloReverse: function () {
                    util.log("Hello, I'm " + reverse(name));
                }
            },
            set: {
                name: function (newName) {
                    name = newName;
                }
            }
        };
    }

    var patrick = person("Patrick");

    patrick.say.hello(); // "Hello, I'm Patrick"
    patrick.say.helloReverse(); // "Hello, I'm kcirtaP"
    patrick.set.name("Paula");
    patrick.say.hello(); // "Hello, I'm Paula"
}());
