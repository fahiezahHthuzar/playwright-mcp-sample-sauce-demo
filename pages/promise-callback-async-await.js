//synchronous = Execute line by line consecutively in a sequential manner
//              code that waits for an operation to complete

//asynchronous = Allows multiple operations to be performed concurrently without waiting
//               Doesn't block the execution flow and allows the program to continue
//               (I/O operations, network request, fetching data)
//               Handled with: callbacks, Promise, Async/Await

//asynchronous example 1 - output - task 2, task 3, task 4, then task 1
console.log("asynchronous example 1 : while waiting task 1, execute other codes ")
setTimeout(() => { console.log("task 1") }, 3000)

console.log("task 2")
console.log("task 3")
console.log("task 4")

//we can fix example 1 - handle with callback fun

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
        callback();
    }, 1500);
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
            if (dogwalked) { resolve("You had breakfast"); }
            else { reject("You Didn't have the breakfast"); }
        }, 1500);
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

eatBreakfast().then(value => {console.log(value); return eatLunch()})
         .then(value => {console.log(value); return eatDinner()})
         .then(value => {console.log(value); console.log("You had all 3 meals")})
         .catch(error => console.error(error))
        






/*
console.log("start")
const promisePract = new Promise((resolve, reject) => {

    setTimeout(() => {
        const result = true;
        if(result) resolve("task is done");
        else reject(new Error("task is not done"));

    }, 2000)

})

promisePract
.then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.error(err);
})
console.log("stop")

const myPromise = new Promise( (resolve, reject) =>{
    const randNum = Math.floor(Math.random() * 2);
    if(randNum === 0){
        resolve();
    }
    else{
        reject();
    }

});
myPromise
.then( () => console.log("Success"))
.catch(() => console.error("Something went wrong"));



//writing in async await function
const fetchPokemon = async () =>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);

    }catch(err){
        console.error(err)
    }
};
fetchPokemon();
*/






