// CALLSTACK

// Terms to know.

// CallStack - Image it is like a pancake we need to eat the top of the stack to get to the bottom.
// Callback Que- is like a line, LIFO and FIFO
// Example.

function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here

// 1. greeting()  Greeting goes first.
// 2. sayHi() is next. Greeting is waiting for sayhi to finish so it can go.
// 3. sayHi()n returns "Hi!" then gets removes from call stack.
// 4. greeting() then executes and then remove from the callstack.

// EventLoop
// JavaScript is a single - threaded programming language with only one call stack
// (and one "heap," which we won't go into detail about, but it deals with memory allocation).
// In programming, "threads" indicate how many concurrent tasks can be run simultaneously.
// This means that only one piece of code can run at a time in JavaScript,
// and the next piece of code will not execute until the previous is finished
// (it is "blocked" by the previous code).
// We call this "synchronous" behavior, and it tends to follow a very logical, linear execution pattern.

console.log("first");
setTimeout(() => {
    console.log("second");
}, 1000);
console.log("third");

// The way the stack, queue, and web APIs interact with one another is referred to as the JavaScript Event Loop.

// With the example above.
// The setTimeout()  goes to the call stack but then transfers it over to the Web API.
//  it will then be  removes from the call stack.... so it would be 1st 3rd then 2nd.
// once done the setTimeout will go from-callback-WebAPI-taskQue-then back to callBack.
//  even if you set the timer to zero it will be the same process.

// RECURSION
// recursive function javascript
//  this could be good for a count down.

// example 1.

// function test() {
//     test();
// }

// test();

// example 2.

// function countDown(10) {
//     console.log(9)
//     countDown*(num-1)
// }

// countDown(10)

//  we would need to add a condition so that this loop does not keep repeating.
// this is also known as a base case.

