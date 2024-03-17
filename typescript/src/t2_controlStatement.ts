/*
* Use the if statement to execute code based on a condition.
* Use the else branch if you want to execute code when the condition is false.
* It’s good practice to use the ternary operator ?: instead of a simple if…else statement.
* Use if else if...else statement to execute code based on multiple conditions.
* */

// if statement
const max = 100;
let counter = 0;

if (counter < max) {
    counter++;
}
console.log(counter); // 1

//if else statement
if (counter < max) {
    counter++;
} else {
    counter = 1;
}
console.log(counter);

// ?: statement
counter = counter < max ? counter++ : 1;
console.log(counter);

// if else if statement
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount
} else {
    discount = 15; // 15%
}
console.log(`You got ${discount}% discount. `)


/*
* Loops
* 1. For Loop
* 2. Enhanced For Loop
* 3. For in loop
* 4. While Loop
* 5. Do While loop
* 6. Switch
* 7. break
* 8. Continue
* */

/*For Syntax
for(initialization; condition; expression) {
    // statement
}
All three expressions in the for loop statement are optional.
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}
//
i = 0;
for (; i < 10;) {
    console.log(i);
    i++;
}
//
i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 10) break;
}

// For of vs in loop
let loopData: (string | number)[] = ['a', 'b', 25, 26];
for (let item of loopData) {
    console.log(item)
    console.log(`==============================`)
}
// destructuring of array
for (let [index, item] of loopData.entries()) {
    console.log(`item at index ${index}: ${item}`)
    console.log(`==============================`)
}

for (let item in loopData) {
    console.log(typeof item) // prints datatype of item
    console.log(item) // prints index
    console.log(typeof +item) // prints datatype as number
    console.log(`value at index ${item}: ${loopData[item]}`) // prints datatype as number
    console.log(`==============================`)
}
