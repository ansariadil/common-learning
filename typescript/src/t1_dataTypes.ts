console.log("Leaning data types in Typescript")
/*
* Each variables in ts are static typed, mean each variable
* must define what it must contain.
* ex. const variable: <type> = value
*
* if we provide invalid values it will throw an error
* */
console.log("===========================")

/* Primitive Types
* 1. number: all type of numbers including float, double
* 2. string
* 3. boolean: true | false
* */
let num1: number = 2.5;
let num2: number = 2.666678;
// let num3: number = "adil";
// give error for invalid type if emitOnError is true

let string1: string = "this is string";
let string2: string = 'this is string';
let string3: string = `this is string with string2: ${string2}`;

let bool: boolean = true;

console.log(num1, string3, bool);
console.log("===========================");

/* Any type -> AVOID
* 1. Use whenever you don’t want a particular value to cause typechecking errors.
* 2. Useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
*
* noImplicitAny in tsConfig
* When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
* You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
*
* Basically if you use this
* */
let obj: any = {x: 0};
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.bar = 100;
obj = "hello";
const n: number = obj;
// obj.foo(); //will provide an error
// obj();//will provide an error
console.log("===========================");

/* Array: act just like javascript array, sort of
* */
const numArr1: number[] = [1, 2, 3, 4];
const stringArray: string[] = ['a'];
const boolArray: boolean[] = [true, false];

// array of multiple types
const mixData: (number | string)[] = ["hi", 25];
console.log(mixData)
const mixData1: Array<number | string | boolean> = ["hi", 26, true];
console.log(mixData1)

//nested array
const nestedArray: number[][] = [[11, 2], [2, 3]]
console.log(nestedArray);

//multiple type nested array
// same way we have multiple types
const nestedMixArray: (string | number)[][] = [["hi"], [25]]
const nestedMixArray1: Array<Array<string | number>> = [["hi"], [25]]
console.log("===========================")

/*
* Tuple is an object type array sort of,
* contain fixed types, fixed type position and length.
* also, you cannot change the length
* */
const details: [string, number] = ["adil", 28];
console.log(details);
// const detailsError: [string, number] = ["adil", 28, 25]; // Error: Source has 3 element(s) but target allows only 2
console.log("===========================")

/* Enum:
* collection of related values either string, number or other
* keyword Enum
* PascalCase should be used for enums
* Default values are numbers staring from 0,
*   can be customised by giving value to first element and rest will follow
* */
enum RollNumbers {
    ONE = 5,
    TWO,
    THREE,
    FOUR,
    FIVE
}

console.log(RollNumbers)
console.log("Numeric value of THREE", RollNumbers.THREE)

const specificRollNumber: RollNumbers = RollNumbers.FIVE;
console.log("Numeric value of specificRollNumber", specificRollNumber)
const rollNumberArray: RollNumbers[] = [RollNumbers.FIVE, RollNumbers.TWO];
console.log("Array of Enum", rollNumberArray)

//Heterogeneous Enum
const enum Student {
    rollNumber = 1,
    name = "adil",
    major = "arts"
}

/* Void Type
* use the void type as the return type of functions that do not return a value
*benefits:
* Improve clarity of the code: you do not have to read the whole function body to see if it returns anything.
* Ensure type-safe: you will never assign the function with the void return type to a variable
*
* */
function log(message: string): void {
    console.log(message);
}

let useless: void = undefined;
// useless = 1; // error
// If the --strictNullChecks flag is not specified, you can assign the useless to null.
// useless = null; // OK if --strictNullChecks is not specified


/* Never Type
* The never type is a type that contains no values. Because of this,
* we cannot assign any value to a variable with a never type.
* Basically, The never type represents the return type of a function
* that always throws an error or a function that contains an indefinite loop.
* */
// function raiseError(message: string): never {
//     throw new Error(message);
// }
//
// let loop = function forever() {
//     while (true) {
//         console.log('Hello');
//     }
// }

/* Union Type
* A TypeScript union type allows you to store a value of one or several types in a variable.
* example=====> a: number | string
* */
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
// result = false; // a boolean value, not OK


function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

/* Type Aliases
* Type aliases allow you to create a new name for an existing type. The following shows the syntax of the type alias:
* */
type alphanumeric = string | number;
let input1: alphanumeric = 10;
let input2: alphanumeric = "10";

type StudentDetail = {
    name: string;
    rollNumber: string | number;
    percentile: string | number | undefined;
}
const student1: StudentDetail = {
    percentile: undefined,
    name: "adil",
    rollNumber: 10
}
console.log(student1)


type StudentDetailWithOptionalProperty = {
    name: string;
    rollNumber: string | number;
    percentile?: string;
}
const student2: StudentDetailWithOptionalProperty = {
    name: "adil",
    rollNumber: 10
}
console.log(student2)

/*nested types*/
type TeacherDetail = {
    name: string,
    students: Array<StudentDetail> | undefined
}
const teacher1: TeacherDetail = {
    name: "Teacher1",
    students: [student1]
}
console.log(teacher1)
const teacher2: TeacherDetail = {
    name: "Teacher2",
    students: undefined
}
console.log(teacher2)
const teacher3: TeacherDetail = {
    name: "Teacher3",
    students: []
}
console.log(teacher3)

/*indexable types*/
type Data = {
    [key: string]: any;
};
const someData: Data = {
    someBooleanKey: true,
    someStringKey: 'adil'
    // ...
}
console.log(someData)

type DataWithStrictField = {
    string?: string
    [key: string]: any;
};
const someData1: DataWithStrictField = {
    string: " adil",
    someBooleanKey: true,
    someStringKey: 'adil'
    // ...
}
console.log(someData1)

/*composing types*/
// Unions
type ProductCode = number | string
// Intersaction
type ApiGetUserResponse = StudentDetail & StudentDetailWithOptionalProperty;
// Template String types
type StringThatStartsWithGet = `get${string}`;
const myString: StringThatStartsWithGet = 'getAbc'; //String is Abc
// const myString: StringThatStartsWithGet = 'someback'; //error

/* Utility Types*/
// with Omit<type, field(s)> new type will be a new type excluding percentiles
type StudentDetailsWOPercentile = Omit<StudentDetail, 'percentile'>;
type StudentDetailsWOMultipleFields = Omit<StudentDetail, 'percentile' | 'rollNumber'>;

// with Pick<type, field(s)> new type will only contains those fields specified
type StudentDetailsWNamePercentile = Omit<StudentDetail, 'name' | 'percentile'>;

// Partial<Type> new type fields are optional
type optionalStudentDetails = Partial<StudentDetail>;
// Result
// type optionalStudentDetails = {
//     name?: string;
//     rollNumber?: string | number;
//     percentile?: string | number | undefined;
// }
