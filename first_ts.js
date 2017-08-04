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
