var events = require("events");
var util = require("util");
var _ = require("lodash");

var Greeter = function() {
    events.EventEmitter.call(this);
    console.log("I greet you");
};

util.inherits(Greeter, events.EventEmitter);

_.forEach(["hello", "moreHello", "mostHello"], function(n) {
    Greeter.prototype[n] = function() {
        this.emit(n)
    }
});

var butler = new Greeter();

_.forEach(["hello", "moreHello", "mostHello"], function(n) {
    butler.on(n, function () {
        console.log(n);
    });
});

_.forEach([butler.hello(), butler.moreHello(), butler.mostHello()]);      // FUNCTIONAL PROGRAMMING AWWWW YISS