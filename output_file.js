/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
var arrayInit = [
    1, 2, 23
];
var add = function (num) {
    return 1 + num;
};
arrayInit.map(function (item) {
    return item;
});
var age = 34;
var myName = 'Shibly Nomany';
var sentence = 'Hello , my name is ${ myName } . \n I will be ${age+ 1} after 9 years';
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
var x;
x = ['Testing', 101];
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
var AnimalKingdom = (function () {
    function AnimalKingdom() {
    }
    AnimalKingdom.prototype.move = function () {
        console.log("roaming the earth");
    };
    return AnimalKingdom;
}());
var px;
var py = { name: "Alice", location: "Seattle" };
var items = [1, 2, 3, 4, 5, 6];
items.forEach(function (item, index, array) { return console.log(item); });
var name_function = function (n) {
    console.log(n.name);
};
name_function({ name: 'Testing Data' });
var xx = function (a) { return 0; };
var yy = function (b, s) { return 0; };
yy = xx;
var myadd = function (x, y) {
    return (x + y);
};
console.log('Adding: ');
console.log(myadd(10, 20));
var testRestParameter = function (firstName, lastName) {
    var exName = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        exName[_i - 2] = arguments[_i];
    }
    var name = firstName + '-' + lastName + '-[';
    exName.forEach(function (item, index, array) { return name += ' ' + item; });
    name += ']';
    return name;
};
console.log(testRestParameter("Shibly", "Nomany", "MSC", "PSC", "GSC"));
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        console.log(typeof x);
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
console.log('Minified version');


/***/ })
/******/ ]);