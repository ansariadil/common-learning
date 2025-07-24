/*
* Generics allow us to write reusable, flexible, and
* extensible functions, classes, and data structures while maintaining strong typing.
* Syntax
* Copy
* const myVar = GenericType<SpecificType1, SpecificType2, ...>
*
* */

// * Array<T>
let numArray: Array<number>;

// * Promise<T>
const response: Promise<Response> = fetch("https://swapi.dev/api/");

// * Record<K,V>
type Result = {
    firstName: string;
    surname: string;
    score: number;
};
type ResultRecord1 = Record<string, Result>;
type ResultRecord2 = Record<"rodj" | "janes" | "fredp", Result>;


// Generic Functions
// Normal Function
function firstOrNull1(array: string[]): string | null {
    return array.length === 0 ? null : array[0];
}

function firstOrNull2(array: Array<number>): number | null {
    return array.length === 0 ? null : array[0];
}

// Generic Function
function GenericFirstOrNull1<T>(array: T[]): T | undefined {
    return array.length === 0 ? undefined : array[0];
}

function GenericFirstOrNull2<T>(array: Array<T>): T | undefined {
    return array.length === 0 ? undefined : array[0];
}

type CoverSingleType<T> = {
    front: T,
    back: T
}
const bookCover1: CoverSingleType<string> = {
    front: "front",
    back: "back"
}
//Generic Types Single Type
type CoverMultiType<T1, T2> = {// and so on
    front: T1,
    back: T2
}
const bookCover2: CoverMultiType<string, number> = {
    front: "front",
    back: 2
}
// Type interference does not element type safety
function getArrayLength<T>(arr: Array<T>): number {
    return arr.length;
}
let arrLength1 = getArrayLength([1])
let arrLength2 = getArrayLength<number>([1])
let arrLength3 = getArrayLength<string>(["1"])
