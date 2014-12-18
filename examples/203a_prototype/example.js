/* global util */

(function () {
    "use strict";

    // You cannot make prototype functions inaccessible

    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHello = function () {
        util.log("Hello, I'm " + this.name);
    };

    Person.prototype.sayHelloReverse = function () {
        util.log("Hello, I'm " + this._reverse(this.name));
    };

    Person.prototype._reverse = function (input) {
        return input.split("").reverse().join("");
    };

    var patrick = new Person("Patrick");

    patrick.sayHelloReverse(); // "Hello, I'm kcirtaP"

    util.log(patrick._reverse("Patrick")); // "kcirtaP" - this sucks
}());
