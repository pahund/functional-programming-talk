/* global util */

(function () {
    "use strict";

    // creating an object "the traditional way", through a prototype

    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHello = function () {
        util.log("Hello, I'm " + this.name);
    };

    var patrick = new Person("Patrick");

    patrick.sayHello();

}());
