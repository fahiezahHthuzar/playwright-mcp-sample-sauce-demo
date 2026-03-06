//Array example and operations

// push() - add end, unshift() - add first
// pop() - remove end, shift() - remove first ** to assign in variable

const fruits = ["apple", "banana", "cherry", "date"];

//access elements by index
console.log(fruits[0]); // apple
console.log(fruits[2]); // cheery

//push() - add element to the end of the array
fruits.push("elderberry");
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]

//pop() - remove last element from array
const lastFruit = fruits.pop(); //** rem to assign */
console.log("from pop() " + lastFruit);
console.log(fruits);

//unshift() - add element to the beginning of the array
fruits.unshift("fig");
console.log(fruits);

//shift() - remove the first element from the array
const firstFruit = fruits.shift();
console.log(fruits)

//indexOf() - find the index of an element
const index = fruits.indexOf("banana")
console.log("banana index " + index)

//splice() - remove an element by index
const deletedFruits = fruits.splice(0,2);
console.log("deleted fruits : "+deletedFruits);
console.log(fruits);

//iterate operation
fruits.forEach( (fruit, index) => {
    console.log(`${index}: ${fruit}`);
})