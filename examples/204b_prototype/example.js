/* global util */

(function () {
    "use strict";

    // If you use prototype, there is no easy way to organize your code this way
    // this code doesn't work because "this" context is lost in the functions

    function Person(name) {
        this.name = name;
    }

    Person.prototype.say = {
        hello: function () {
            util.log("Hello, I'm " + this.name);
        },
        helloReverse: function () {
            util.log("Hello, I'm " + this.util.reverse(this.name));
        }
    };

    Person.prototype.set = {
        name: function (newName) {
            this.name = newName;
        }
    };

    Person.prototype.util = {
        reverse: function (input) {
            return input.split("").reverse().join("");
        }
    };

    var patrick = new Person("Patrick");

    patrick.say.hello(); // "Hello, I'm undefined"
    try {
        patrick.say.helloReverse(); // throws error - reverse is undefined
    } catch (e) {
        util.log(e.toString());
    }
    patrick.set.name("Paula");
    patrick.say.hello(); // "Hello, I'm undefined"
}());
