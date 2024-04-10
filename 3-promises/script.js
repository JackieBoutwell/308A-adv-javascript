//Asynchronous JavaScript
// Asynchronous will take time.
//ALWAYS A CALL BACK INVOLVED
console.log("One");

setTimeout(() => console.log("Two"), 0);// webAPI

console.log("Three");

//Promises
// API's use promises
// A Promise can only be in one of three states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//When the state of a promise changes to either fulfilled or rejected,
// it is considered to be "settled." Similarly, a "resolved" promise is one
// that has settled or matched to the eventual state of another promise, and
// further action upon it will have no effect.



// Chaining Promises
// promise is a way to handle Asynchronous code in JS
//it is like a try catch method.

// One of the key features of promises are their
// ability to be chained together via.then(), .catch(), and.finally().
//The then() method takes up to two arguments, the first being a callback
// function for if the promise is fulfilled, and the second being a callback
// function for if it is rejected.The catch() method runs when a promise is rejected.
// The finally() method runs when a promise is settled, allowing you to avoid duplicating
// logic in both the then() and catch () handlers.

// When the state of a promise changes to either fulfilled or rejected,
// it is considered to be "settled." Similarly, a "resolved" promise is one
// that has settled or matched to the eventual state of another promise,
//     and further action upon it will have no effect.

// Create a Promise that resolves after one second.
// Call the promise class
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Guess this worked!");
//     }, 1000);
// });

const myPromise = newPromise((resolve, reject) => {
    let result = Math.floor(Math.radndom() * 2)
    if (result === 1) {
        setTimeout(() => {
            resolve('Guess this worked')
        } ,1000)
        } else {
        setTimeout (() => {
    reject('it did not work')
}, 1000)
}
})


// myPromise.then((then i want a call back to run which would be x) => console.log(x));

// console.log(myPromise)

myPromise
    .then((x) => x + ' Againn')
    .then((x) => x + ' Third time!')
    .then((x) => console.log(x))
    .catch((err) => console.log('error: ', err))
    .then((x) => console.log(x))
    }


// Add some then() methods to handle additional tasks.
// myPromise
//     .then((x) => x + ' Again?')
//     .then((x) => x + ' Third time!')
//     .then((x) => x + ' Promises are cool.')
//     .catch((err) => {
//         console.error(err);
//     })


// Composition Tools
// Promise.all

// Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
//   // use result1, result2 and result3
// });


// The opposite of Promise.all is Promise.any,
//     which returns a single Promise that fulfills when any of the input's
//  promises fulfill, with the first fulfillment value.It only rejects if all of the
//  input promises reject, and throws an AggregateError containing
//  an array of rejection reasons.

// The final compositional tool, Promise.race, returns a single
// Promise that settles with the eventual state of the first input promise that settles.

// One of the most common reasons to create promises is to handle errors
// that are not handled by traditional asynchronous functions.As an example,
// let's look at the setTimeout() method:

//EXAMPLE
// setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);

// If the function saySomething() throws an error, nothing catches it.
// The best practice to handle these kinds of situations, when encountered,
//     is to wrap the low - level callback - accepting functions in a promise,
//         and then never call those functions directly again.

// For example, we could create a new function wait() that wraps setTimeout()
//     in a promise, and from then on we would use wait() instead of setTimeout():

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(10 * 1000)
//   .then(() => saySomething("10 seconds"))
//   .catch(failureCallback);

// Since setTimeout() doesn't really fail, we can leave out the reject
//  portion of the Promise constructor.However, if we needed to add a rejection case,
//  we could do so like this:

// const wait = (ms) => new Promise((resolve, reject) => {
//     try {
//         setTimeout(resolve, ms);
//     } catch (e) {
//         reject(e);
//     }
// });

// wait(10 * 1000)
//   .then(() => saySomething("10 seconds"))
//   .catch(failureCallback);


// what would the solution to this be?

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log("Cat"));

// Promise.resolve()
//   .then(() => console.log("Dog"))
//   .then(() => console.log("Cow"));

// console.log("Bird");

// Understanding that promises are microtasks,
//     and therefore have higher priority than other callbacks,
//     let's review the coding challenge once more, included below for convenience:

// Here's how this breaks down:

// console.log("Bird") is put onto the call stack, since it is synchronous code.
// console.log("Cat") is wrapped in a promise, so it goes on the microtask queue.
// console.log("Dog") and console.log("Cow") are part of a promise,
//so they go on the microtask queue.
// So it should log "Bird, Cat, Dog, Cow," right? Not quite.

// console.log("Cat") has a call to setTimeout() within its promise.
// While the promise portion gets put into the microtask queue,
//     it then calls setTimeout() which is put into the task queue.
// Since the microtask queue continues to empty, the action created by setTimeout()
// executes last in this case.
// The expected output is: "Bird, Dog, Cow, Cat." Test it for yourself!

// Async and Await

// async always returns a Promise.

// Two of the most important keywords in asynchronous JavaScript are async and await.

// async is used to declare an async function,
// which can contain zero or more await expressions.Async functions always return a promise,
// even if the return value is not explicitly defined as one.
// Any returns will always be wrapped in a Promise.resolve(), or Promise.reject()
// if an exception is thrown or uncaught within the function.

// For example, these two functions are identical in behavior:

// async function example() {
//     return "Hello";
// }

// function example2() {
//     return Promise.resolve("Hello");
// }

// you can either use.then.catch(this is faster) or async and wait with using APIs

// .then.catch

// doSomething()
//   .then((result) => doSomethingElse(result))
//   .then((newResult) => doThirdThing(newResult))
//   .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
//   .catch(failureCallback);

// async and Wait
// async function foo() {
//   try {
//     const result = await doSomething();
//     const newResult = await doSomethingElse(result);
//     const finalResult = await doThirdThing(newResult);
//     console.log(`Got the final result: ${finalResult}`);
//   } catch (error) {
//     failureCallback(error);
//   }
// }

//arrow function example
// const foo =async() => {}