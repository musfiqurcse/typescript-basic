let firstNumber: string;
let someNumber: number;
let tOrF: boolean;
let someElements: Element;
let someObject: object;
let voidThing: void;
let anyoldthing: any;


// Type Checking
let arrayInit: Array<number> = [
    1, 2, 23
]

let add = (num: number) => {
    return 1 + num;
}

arrayInit.map((item): number => {
    // alert(add(item));
    return item;
})

let age: number = 34;
let myName: string = 'Shibly Nomany';
let sentence: string = 'Hello , my name is ${ myName } . \n I will be ${age+ 1} after 9 years';
// alert(sentence)
enum Color { Red, Green, Blue }
let c: Color = Color.Green
let colorName: string = Color[2]
console.log(c)
console.log(colorName)

/* 
Data type in Typescript
*/
//Tuple
let x: [string, number];
x = ['Testing', 101];

//void function example
function testing_void_function(): void {
    console.log('Void')
}


let test_value: any = "This is first String" ? false : 0
let stringLength: number = (test_value as string).length
console.log(typeof stringLength)

//Interface Issue
interface LabelledValue {
    label: string;
}
function printLabel(labelledobj: LabelledValue) {
    console.log(labelledobj.label)
}
let myObj = { size: 10, label: "Size 10 Object" }
printLabel(myObj)

//Optional Propertise in interface
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 10 }
    if (config.color) {
        newSquare.color = config.color
    }
    return newSquare
}

interface readonly_propertise {
    readonly first: string;
    readonly second: number;
}

let number: Array<number> = [1, 2, 3, 4, 5];
let check: ReadonlyArray<number> = number;

//Excess Propertise in interface
interface excess_propertise {
    color?: string;
    width: number;
    [propName: string]: any;
}
function color_propertise(attr: excess_propertise): { color: string } {
    let newField = { color: 'white' };
    if (attr.color) {
        newField.color = attr.color;
        console.log(attr);
    }
    return newField;
}
let propertise_list = { color: 'Test', item: 'testing', width: 101 };
let myField = color_propertise(propertise_list);

// Class uses in Typescript
interface ClockInterface {
    currentTime: Date;
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
interface ClockInterface01 {
    currentTime: Date;
    setTime(d: Date);
}
class Clock01 implements ClockInterface01 {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// Interface with Function
interface searchFunc01 {
    (firstString: string, secondString: string): boolean;
}

let mysearch: searchFunc01;
mysearch = function (firstString: string, secondString: string) {
    let result = firstString.search(secondString);
    return result > -1;
}

mysearch = function (initial: string, searchItem: string) {
    let result = initial.search(searchItem);
    return result > -1;
}

interface NumberDictonary {
    readonly [index: number]: string;
}
let myArray: NumberDictonary = ["Alice", "Bob"];


interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    //name: string;      // error, the type of 'name' is not a subtype of the indexer
}

class Greeter {
    greeting: string;
    protected item: number;
    private state: string;
    constructor(message: string) {
        this.state = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter('World');
// Inhereting Greeter and Update that Greeter
class HotelGreeting extends Greeter {
    constructor() {
        super("Rhio");
        this.item = 'test'.length;
    }
    testingMethod = () => {
        this.greeting = 'Testing'
    }
}
let instance = new HotelGreeting;

abstract class AnimalKingdom {
    abstract makesound(): void;
    move(): void {
        console.log("roaming the earth")
    }
}
interface NamedProperty {
    name: string;
}
let px: NamedProperty;
let py = { name: "Alice", location: "Seattle" };

let items = [1, 2, 3, 4, 5, 6];
items.forEach((item, index, array) => console.log(item));
let name_function = (n: NamedProperty) => {
    console.log(n.name)
}
name_function({ name: 'Testing Data' })

//Comparing Two Function
let xx = (a: number) => 0;
let yy = (b: number, s: string) => 0;
yy = xx;

let myadd: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number {
        return (x + y)
    }
console.log('Adding: ')
console.log(myadd(10, 20))

let testRestParameter: (firstName: string, lastName: string, ...exName: string[]) => string =
    function (firstName: string, lastName: string, ...exName: string[]): string {
        let name: string = firstName + '-' + lastName + '-[';
        exName.forEach((item, index, array) => name += ' ' + item)
        name += ']';
        return name;
    }

console.log(testRestParameter("Shibly", "Nomany", "MSC", "PSC", "GSC"))


let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        console.log(typeof x)
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
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
// alert("testing file")
// alert('testing')
console.log('Minified version')