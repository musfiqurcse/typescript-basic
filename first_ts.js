var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var firstNumber;
var someNumber;
var tOrF;
var someElements;
var someObject;
var voidThing;
var anyoldthing;
// Type Checking
var arrayInit = [
    1, 2, 23
];
var add = function (num) {
    return 1 + num;
};
arrayInit.map(function (item) {
    // alert(add(item));
    return item;
});
var age = 34;
var myName = 'Shibly Nomany';
var sentence = 'Hello , my name is ${ myName } . \n I will be ${age+ 1} after 9 years';
// alert(sentence)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(c);
console.log(colorName);
/*
Data type in Typescript
*/
//Tuple
var x;
x = ['Testing', 101];
//void function example
function testing_void_function() {
    console.log('Void');
}
var test_value = "This is first String" ? false : 0;
var stringLength = test_value.length;
console.log(typeof stringLength);
function printLabel(labelledobj) {
    console.log(labelledobj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 10 };
    if (config.color) {
        newSquare.color = config.color;
    }
    return newSquare;
}
var number = [1, 2, 3, 4, 5];
var check = number;
function color_propertise(attr) {
    var newField = { color: 'white' };
    if (attr.color) {
        newField.color = attr.color;
        console.log(attr);
    }
    return newField;
}
var propertise_list = { color: 'Test', item: 'testing', width: 101 };
var myField = color_propertise(propertise_list);
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var Clock01 = (function () {
    function Clock01(h, m) {
    }
    Clock01.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock01;
}());
var mysearch;
mysearch = function (firstString, secondString) {
    var result = firstString.search(secondString);
    return result > -1;
};
mysearch = function (initial, searchItem) {
    var result = initial.search(searchItem);
    return result > -1;
};
var myArray = ["Alice", "Bob"];
var Greeter = (function () {
    function Greeter(message) {
        this.state = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('World');
// Inhereting Greeter and Update that Greeter
var HotelGreeting = (function (_super) {
    __extends(HotelGreeting, _super);
    function HotelGreeting() {
        var _this = _super.call(this, "Rhio") || this;
        _this.testingMethod = function () {
            _this.greeting = 'Testing';
        };
        _this.item = 'test'.length;
        return _this;
    }
    return HotelGreeting;
}(Greeter));
var instance = new HotelGreeting;
