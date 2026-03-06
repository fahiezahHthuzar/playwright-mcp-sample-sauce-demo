//synchronous = Execute line by line consecutively in a sequential manner
//              code that waits for an operation to complete

//asynchronous = Allows multiple operations to be performed concurrently without waiting
//               Doesn't block the execution flow and allows the program to continue
//               (I/O operations, network request, fetching data)
//               Handled with: callbacks, Promise, Async/Await

//asynchronous example 1 - output - task 2, task 3, task 4, then task 1
console.log("asynchronous example 1 : while waiting task 1, execute other codes ")
setTimeout(() => { console.log("task 1") }, 3000) // 

console.log("task 2")
console.log("task 3")
console.log("task 4")

//we can fix example 1 - handle with callback fun

let name = 0
let fun = () => 0

function func1(callback) {
    setTimeout(() => {
        console.log("handle with callback function");
        console.log("task 1");
        callback();
    }, 3000)

}
function func2() {
    console.log("task 2")
    console.log("task 3")
    console.log("task 4")
}

func1(func2)

console.log(
    `promise = An object that manages asynchronous operations.
              Wrap a Promise Object around {asynchronous code}
              "I promise to return a value"
              PENDING -> RESOLVE or REJECTED
              new Promise((resolve,reject) => {asynchronous code})`

)

function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk the dog");
        callback()
    }, 2500);
}
function cleanKitchen(callback) {

    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 1500);
}
function takeOutTrash(callback) {

    setTimeout(() => {
        console.log("You take out the trash")
        callback();
    }, 500);
}

// callback hell
//handle with callback
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("You finished all the chores!");
        })
    })
});

////writing with promise


function eatBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if (dogwalked) {
                resolve("You had breakfast");
            }else {
                reject("You Didn't have the breakfast");
            }
        }, 2500);
    });
}
function eatLunch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if (cleanedKitchen) { resolve("You had lunch"); }
            else { reject("You didn't have the lunch") }
        }, 1500);
    });
}
function eatDinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = false;
            if (trashOut) { resolve("You had Dinner") }
            else { reject("You didn't have the dinner") }
        }, 500);
    })
}

eatBreakfast()
    .then(value => { 
        console.log(value);
        return eatLunch()
    })
    .then(value => {
        console.log(value);
        return eatDinner() 
    })
    .then(value => {
        console.log(value);
        console.log("You had all 3 meals") 
    })
    .catch(error => console.error(error))



    async function haveBreakfast(){
        setTimeout(() => {
            console.log("done breakfast");
        },2500)
    }
    async function haveLunch(){
         setTimeout(() => {
            console.log("done lunch");
        },1500)
    }
    async function haveDinner(){
         setTimeout(() => {
            console.log("done lunch");
        },500)
    }

    await haveBreakfast();
    await haveLunch();
    await haveDinner();
