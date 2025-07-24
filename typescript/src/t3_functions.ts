/* Functions
* TypeScript functions are the building blocks of readable, maintainable, and reusable code.
* this is same is js except type annotation
* */
/*
Syntax
function name(parameter: type, parameter:type,...): returnType {
    // do something
}
OR
(parameter: type, parameter:type,...) => type
*/

// if a function has different branches that return different types, the TypeScript
// compiler may infer the union type or any type.
// Therefore, it is important to add type annotations to a function as much as possible.

function getProduct(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    // OR
    if (c) {
        return a * b * c;
    }
    return a * b;
}

function addWithDefaults(a: number = 0, b: number = 0): number {
    return a + b;
}

console.log("Aaa")
console.log("SUMMMMM ", addWithDefaults(undefined, 2))

// Rest Parameter
function opsWithRestParam(operation: string = "SUM", ...nums: number[]): number {
    switch (operation.trim().toUpperCase()) {
        case "SUM":
            return nums.reduce((a, b) => a + b, 0);
        case "PRODUCT":
            return nums.reduce((a, b) => a * b, 1);
        default:
            console.log("invalid Ops");
            return 0;
    }
}

console.log("Result with rest ops: ", opsWithRestParam("product", 1, 2, 3, 4, 5))
console.log("Result with rest ops: ", opsWithRestParam("sum", 1, 2, 3, 4, 5))


// Function overloading
export {}

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log("Overloading 1: ", add(1, 2))
console.log("Overloading 2: ", add("a", "b"))
console.log("Overloading 3: ", add("1", "2"));

// Consolidated above example
function addOverload(a: number | string = 0, b: number | string = 0): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
    return 0;
}

console.log("Overloading 4: ", addOverload(1, 2));
console.log("Overloading 5: ", addOverload("a", "b"));
console.log("Overloading 6: ", addOverload("1", "2"));
console.log("Overloading 7: ", addOverload());

// With class
class Counter {
    private current: number = 0;

    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let counter = new Counter();
console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
console.log(counter.count()); // return a number
