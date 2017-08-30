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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const coffee_1 = __webpack_require__(1);
let firstNumber;
let someNumber;
let tOrF;
let someElements;
let someObject;
let voidThing;
let anyoldthing;
let coffee = new coffee_1.CoffeeIngredients();
const $ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
class RealCoffee extends coffee_1.CoffeeIngredients {
    constructor() {
        super();
        $('body').css('background-color', 'red');
    }
}
let arrayInit = [
    1, 2, 23
];
let add = (num) => {
    return 1 + num;
};
arrayInit.map((item) => {
    return item;
});
let age = 34;
let myName = 'Shibly Nomany';
let sentence = 'Hello , my name is ${ myName } . \n I will be ${age+ 1} after 9 years';
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let colorName = Color[2];
console.log(c);
console.log(colorName);
let x;
x = ['Testing', 101];
function testing_void_function() {
    console.log('Void');
}
let test_value = "This is first String" ? false : 0;
let stringLength = test_value.length;
console.log(typeof stringLength);
function printLabel(labelledobj) {
    console.log(labelledobj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: "white", area: 10 };
    if (config.color) {
        newSquare.color = config.color;
    }
    return newSquare;
}
let number = [1, 2, 3, 4, 5];
let check = number;
function color_propertise(attr) {
    let newField = { color: 'white' };
    if (attr.color) {
        newField.color = attr.color;
        console.log(attr);
    }
    return newField;
}
let propertise_list = { color: 'Test', item: 'testing', width: 101 };
let myField = color_propertise(propertise_list);
class Clock {
    constructor(h, m) { }
}
class Clock01 {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) { }
}
let mysearch;
mysearch = function (firstString, secondString) {
    let result = firstString.search(secondString);
    return result > -1;
};
mysearch = function (initial, searchItem) {
    let result = initial.search(searchItem);
    return result > -1;
};
let myArray = ["Alice", "Bob"];
class Greeter {
    constructor(message) {
        this.state = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter('World');
class HotelGreeting extends Greeter {
    constructor() {
        super("Rhio");
        this.testingMethod = () => {
            this.greeting = 'Testing';
        };
        this.item = 'test'.length;
    }
}
let instance = new HotelGreeting;
class AnimalKingdom {
    move() {
        console.log("roaming the earth");
    }
}
let px;
let py = { name: "Alice", location: "Seattle" };
let items = [1, 2, 3, 4, 5, 6];
items.forEach((item, index, array) => console.log(item));
let name_function = (n) => {
    console.log(n.name);
};
name_function({ name: 'Testing Data' });
let xx = (a) => 0;
let yy = (b, s) => 0;
yy = xx;
let myadd = function (x, y) {
    return (x + y);
};
console.log('Adding: ');
console.log(myadd(10, 20));
let testRestParameter = function (firstName, lastName, ...exName) {
    let name = firstName + '-' + lastName + '-[';
    exName.forEach((item, index, array) => name += ' ' + item);
    name += ']';
    return name;
};
console.log(testRestParameter("Shibly", "Nomany", "MSC", "PSC", "GSC"));
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        console.log(typeof x);
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
console.log('Minified version');


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CoffeeIngredients {
    constructor() {
        console.log('Print Everythings===============');
    }
}
exports.CoffeeIngredients = CoffeeIngredients;


/***/ })
/******/ ]);