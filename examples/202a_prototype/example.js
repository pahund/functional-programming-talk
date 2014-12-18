/* global util */

(function () {
    "use strict";

    // With objects created through prototypes, all properties are exposed and can be changed

    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHello = function () {
        util.log("Hello, I'm " + this.name);
    };

    var patrick = new Person("Patrick");

    patrick.sayHello(); // Patrick

    patrick.name = "Paula";

    patrick.sayHello(); // Paula - this sucks!
}());
