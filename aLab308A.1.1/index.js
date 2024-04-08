// let counter = 0;

// try {
//   const incrementCall = () => {
//     counter += 1;
//     incrementCall();
//   };
//   incrementCall();
// } catch (error) {
//   console.log('ERROR ', error, ' COUNTER ', counter);
// }

/**
 * Step One: write the recursive function.
 *
 * Here, we create a function that calculates
 * the factorial of a number, n. A factorial
 * is the product of all positive integers
 * less than or equal to the number, n.
 */
const factorial = (n) => {
  if (n === 0) return 1; // The base case, to stop recursion
  console.log('N ', n);

  return n * factorial(n - 1); // The recursive call
};

// const number = factorial(50000);
// console.log(number);

/**
 * If we were to call the above with a number as
 * high as, say, 50,000, it would result in a stack
 * overflow.
 */

/**
 * Step Two: modify the recursive function.
 *
 * In order to trampoline the function, we must
 * return another function instead of calling
 * the recursive function itself.
 *
 * This prevents the function from being added
 * directly to the call stack.
 */
const facto = (n, a = 1) => {
  if (n === 0) return a;
  console.log('NUMBER ', n);
  return () => {
    console.log('returned fucntion called');
    facto(n - 1, n * a);
  };
};

// const numberFacto = facto(2);
// console.log(numberFacto);

/**
 * Step Three: create a trampoline function.
 *
 * This function takes another function and a list
 * of arguments, and uses a linear loop rather than
 * traditional recursion to handle the function calls.
 *
 * This prevents the stack overflow, while still
 * maintaining the declarative approach provided by
 * recursive functions.
 */
const trampoline = (f, ...args) => {
  console.log('F ', f);
  console.log('ARGUMENTS ', ...args);
  let result = f(...args);
  if (typeof result !== 'function') console.log('NOT A FUNCTION');
  while (typeof result === 'function') {
    result = result();
  }
  return result;
};

/**
 * Now, we can call the factorial function with as high
 * a number as we would like (as long as we don't run into
 * other errors, like exceeding MAX_SAFE_INTEGER, or looping
 * too many times...).
 *
 * Unfortunately, both of these are the case here, but
 * the principle of trampolining holds!
 */
// console.log(trampoline(facto(10000), 4, 3, 2, 1));

const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, ['a', 'b', ['1a', '1b', '1c']]],
];

let array = [];

// Fill the array with 10,000 values
for (let i = 0; i < 4; i++) {
  // array.push(i);
  array[i] = [];
  for (let j = 0; j <= i; j++) {
    let innerArray = [];

    for (let k = 0; k <= j; k++) {
      let arrayK = [];
      for (let l = 0; l <= k; l++) {
        let arrayL = [1, 2, 3];
        arrayK.push(arrayL);
      }
      innerArray.push(arrayK);
    }
    array[i].push(innerArray);
  }
}
// console.log(array);

// console.log(nestedArray.flat().flat().flat());

const arrayFlattener = (nestedArray) => {
  const flattenedArray = nestedArray.flat();
  return arrayFlattener(flattenedArray);
};

var inorderTraversal = function* (arr) {
  arr = arr.flat(40);
  let i = 0,
    n = arr.length;
  while (i < n) {
    yield arr[i++];
  }
};

console.log(inorderTraversal(nestedArray));

// console.log(arrayFlattener(nestedArray));