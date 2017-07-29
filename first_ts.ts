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




