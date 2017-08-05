let firstNumber: string;
let someNumber: number;
let tOrF: boolean;
let someElements: Element;
let someObject: object;
let voidThing: void;
let anyoldthing: any;


// Type Checking
let arrayInit: Array<number>=[
    1,2,23
]

let add=(num: number)=>{
    return 1+num;
}

arrayInit.map((item): number =>{
    // alert(add(item));
    return item;
})

let age: number=34;
let myName: string='Shibly Nomany';
let sentence: string='Hello , my name is ${ myName } . \n I will be ${age+ 1} after 9 years';
// alert(sentence)
enum Color {Red, Green, Blue}
let c: Color= Color.Green
let colorName: string=Color[2]
console.log(c)
console.log(colorName)

/* 
Data type in Typescript
*/
//Tuple
let x: [string, number];
x=['Testing',101];

//void function example
function testing_void_function(): void{
    console.log('Void')
}


let test_value: any ="This is first String"?false:0
let stringLength: number=(test_value as string).length
console.log(typeof stringLength)

//Interface Issue
interface LabelledValue{
    label: string;
}
function printLabel(labelledobj: LabelledValue){
    console.log(labelledobj.label)
}
let myObj={size: 10, label: "Size 10 Object"}
printLabel(myObj)

//Optional Propertise in interface
interface SquareConfig{
    color?: string;
    width?:number;
}
function createSquare(config: SquareConfig): {color: string; area: number}{
    let newSquare={color: "white", area: 10}
    if(config.color){
        newSquare.color=config.color
    }
    return newSquare
}

interface readonly_propertise{
    readonly first: string;
    readonly second: number;
}

let number: Array<number>=[1,2,3,4,5];
let check: ReadonlyArray<number>=number;

//Excess Propertise in interface
interface excess_propertise{
    color?: string;
    width: number;
    [propName: string]: any;
}
function color_propertise(attr: excess_propertise): {color: string}{
    let newField={color: 'white'};
    if(attr.color){
        newField.color=attr.color;
        console.log(attr);
    }
    return newField;
}
let propertise_list={color:'Test', item: 'testing',width:101};
let myField=color_propertise(propertise_list);

// Class uses in Typescript
interface ClockInterface{
    currentTime: Date;
}
class Clock implements ClockInterface{
    currentTime: Date;
    constructor(h: number, m: number){}
}
interface ClockInterface01{
    currentTime: Date;
    setTime(d: Date);
}
class Clock01 implements ClockInterface01{
    currentTime: Date;
    setTime(d: Date){
        this.currentTime=d;
    }
    constructor(h: number, m: number){}
}

// Interface with Function
interface searchFunc01{
    (firstString: string, secondString: string): boolean;
}

let mysearch: searchFunc01;
mysearch = function(firstString: string, secondString: string){
    let result=firstString.search(secondString);
    return result> -1;
}

mysearch = function(initial: string, searchItem: string){
    let result=initial.search(searchItem);
    return result > -1;
}

interface NumberDictonary{
    readonly [index: number]: string;
}
let myArray: NumberDictonary=["Alice","Bob"];


interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    //name: string;      // error, the type of 'name' is not a subtype of the indexer
}

class Greeter {
    greeting: string;
    protected item: number;
    private state: string;
    constructor(message: string){
        this.state=message;
    }
    greet(){
        return "Hello, "+this.greeting;
    }
}
let greeter=new Greeter('World');

class HotelGreeting extends Greeter{
    constructor(){
        super("Rhio");
        this.item='test'.length;
    }
}
