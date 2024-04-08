// CallStack Example

function a() {
    console.log(2);
    c();
    console.log(6);
}

function b() {
    console.log(4);
}

function c() {
    console.log(3);
    b();
    console.log(5);
}

    console.log(1);
    a();
    console.log(7);
    

// Be aware that console.log is also added to the CallStack.

// CallStack order from bottom to top. not including the console.logs.
// a();
// c();
// b();
// b is done so it is removed from the call stack.
// Then go back to where we called b, c is then removed.
// Then go back to where we called c, a is then removed.