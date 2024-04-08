// Encapsulation
// Encapsulation is the ability for an object to decide what information is shows
// to the outside world and what information it keeps to itself.
// It also encourages methods that specify how certain properties are accessed
// or modified.

//In order to implement encapsulation,
//we need public and private properties and methods
// In JavaScript, all object properties and methods are public by default,
// which means they can be accessed from outside of the object itself.As an example,
//     remember that we can directly access cat1.eyes from wherever we want.

// Private properties, on the other hand, cannot be accessed externally.
// In order to create a private property,
//     we must declare it using the # symbol at the top of the class definition
// (outside of the constructor). These declarations are called "hash names,"
// since they use the hash prefix #.In legacy code,
//     you may see private features created with underscores, _privateField,
// but these features will not behave as truly private.

// class Learner {
//   #grades = [];
//   #name = {
//     first: '',
//     last: '',
//   }
//   #age;

// 	constructor(firstName, lastName, age) {
// 		this.#name.first = firstName;
//     this.#name.last = lastName;
//     this.#age = age;
//     }
//     get name() {
//         return this.#name.first + '' + this.#name.last
//     }
//     get age() {
//          return this.#age
//     }
//     // change to a number if it was a string ("12")
//     // set grades(grade) {
//     //     grade = Number(grade)

//     //     //only accept grades between 0 and 100
//     //     if (grade >= 0 && grade <= 100) {
//     //   this.#grades.push(grade);
//     // }
//     // }

//      // learner1.addGrades(10, [20, 30, 40], 40, 60, 30, 40 ...)

//     addGrades(...grades) {
//         //rest parameter turns the arguments into an array of values
//         //grades -> [10, 30, 40, 60, 30, 40]
//         // use flat() method to turns two-dimensional array into one dimensional
//         grades = grades.flat();
        
//         //loop over the array of grades
//         grades.forEach((grade) => {
//         // convert it into a number in case it's a string ("12")
//             grade = Number(grade);
//             //check it is it between 1 and 100
//             if (grade >= 0 && grade <= 100) {
//       // push grade to private property (grades)
//         this.#grades.push(grade);
//       }
//     });
//   }

//     get grades() {
//                // turn array of grades into a string and return it
//         return this.#grades.join(', ')
//     }
// }

// const learner1 = new Learner('Leeroy', 'Jenkins', 18);

// // as long as we have getter methods we can acces private
// // properties like age and name with dot notation
// // console.log(learner1.name, learner1.age)
// console.log(learner1)

// //can only use assignment operater on a private property
// // if there is a setter method for it.
// //the value 20 will be represented by the parameter grade in the setter.
// //   learner1.grades = 20;
// //   learner1.grades = 30;
// //   learner1.grades = 40;
// // accepts unlimited arguments
// learner1.addGrades(20, 30, 40, 60, 10, 20, 30, 50)


// console.log(learner1.grades);
// // we havbe a getter method on 70 so this is no longer undefined. 20, 30, 40


//The private fields #grades, #name,
//and #age will not be accessible outside of the object itself.
//Attempting to access them will result in a SyntaxError.

// Let's provide controlled access using methods called getters and setters.
// Getters and setters do exactly what they sound like they do - get and set specific data.In order to create getters and setters,
// we use the get and set keywords.

//Encapsulation helps prevent bugs.

// When creating objects,
//  it's important to note that not every field needs a getter and/or a setter.
// If we did not need the ability to change a learner's name or age, for example,
// we could forgo those setters and simply create getters:

// Now, we can access the learner's name and age using learner1.name and learner1.age, but we cannot modify the values. Try it!

// Notice how we created get name()
// to return the concatenation of the first and last names ?
// This is just a very simple example of how we can control how data is accessed;
// we do not need to always return the raw values of our properties.

// Let's create a setter method for our #grades array.
//  We don't want to set the value of #grades directly; instead,
//  let's push values to the array as they are received.
//  We also know that we want grades to be numbers,
//     and that they should be between 0 and 100,
// so we can incorporate some data validation into our method!

// see line 41
//Add a method get grades() that returns the array of grades.
// take the grade parmeter and convert it to a number.

// see line 86
//Use learner1.grades = to add some grades to the learner.
//Notice that, since we made a custom setter method,
//the equals operator does not override the current #grades value,
//it adds to it.

//Test that your code works properly by logging learner1.grades.


// What if we had a long list of grades to add all at once ?
// We could create a loop that sets grades many times,
// and even turn it into a function so it could be reused,
// but wouldn't it be nice if our class included that functionality by default?

// Above on line 52
// we've removed our grades setter and created an addGrades() method since "addGrades"
// is more accurate and descriptive than.grades =.
// Take a moment to think about how this works,
// and if you would have approached it differently.As is often the case in programming,
// there are many correct answers.

// Through the power of encapsulation,
// we've created a method that allows us to modify the #grades array in a very controlled,
// very predictable manner.Without encapsulation, a user(or another programmer,
//     or your future self) could come in and say learner1.grades[42] = "hi",
//  and our program would fail.

// In the same manner, we can control other ways our data is accessed. For example,
// if you wanted to get the average of this learner's grades,
// you might assume you could just add all of the grades from our getter method together and divide by the length of the array.
// In this case, however, the instructor has decided that everyone's lowest grade will be dropped from their average!

//Here's how we might implement a method get average() to handle this:

//   get average() {
//     const arr = [...this.#grades];
//     arr.sort((a, b) => a - b).shift();

//     return arr.reduce((a, b) => a + b) / arr.length;
//   }

//A breakdown of how this works:

// Make a shallow copy of the #grades array and store it in arr.
// Use sort() to sort arr from lowest to highest value,
//and then shift() the lowest value off of the front of arr.

// Note that we must pass a callback function into sort() to override its default lexigraphical sorting behavior,
// otherwise 100 would come before 98 because "1" comes before "9" alphabetically.
// Use reduce() to add all of the elements of the array together,
//and divide the result by arr.length.
// Return the final value.

// Here's a look at what our Learner class looks like up to this point:

// class Learner {
//   #grades = [];
//   #name = {
//     first: "",
//     last: ""
//   };
//   #age;

//   constructor(firstName, lastName, age) {
//     this.#name.first = firstName;
//     this.#name.last = lastName;
//     this.#age = age;
//   }
//   get name() {
//     return this.#name.first + " " + this.#name.last;
//   }
//   get age() {
//     return this.#age;
//   }
//   addGrades(...grades) {
//     grades = grades.flat();
//     grades.forEach((grade) => {
//       grade = Number(grade);

//       if (grade >= 0 && grade <= 100) {
//         this.#grades.push(grade);
//       }
//     });
//   }
//   get grades() {
//     return this.#grades;
//   }
//   get average() {
//     //copy the array so that we can manipulate it with sort and shfit below
//     const arr = [...this.#grades];
//     //sort by lowest to highest and remove the loswet grade(with shift)
//     arr.sort((a, b) => a - b).shift();
//     //use reduce to add up all the grades and reduce them to a single value
//     //divide that by the length to get the average
//     return arr.reduce((a, b) => a + b) / arr.length;
//   }
// }

// const learner1 = new Learner('Leeroy', 'Jenkins', 18);
//  console.log(learner1.average)
// Test the class by doing the following:

// Instantiate a new Learner.
// Log the learner's name and age.
// Add the following grades using addGrades():

// [95, 87, 66], "98", "100", -60, 88, 89, [100, 76, 88], 105
// Log the current grades array and make sure it's what you expect.

// Remember that values less than 0 or greater than 100 should not be included.
// Calculate the average of these grades manually, keeping in mind that the lowest grade should be excluded from the calculation.
// Log the average returned from .average and compare the results with your calculations to ensure it is working properly.

// Aside: Planning Classes

//Before we continue to the remaining two core OOP concepts,
//Abstraction and Polymorphism,
// we'd like to acknowledge that creating large,
//complex classes with children and parents and getters and
//setters and all of these other things can be a daunting task.
//While you can continue to add to and modify classes as the need for
//additional properties and methods arise,
//planning ahead can save you a lot of time and headache.
//The pseudocode used to plan classes typically looks like this:

// class Instructor
//   properties
//     name
//     age
//     teaches
//   methods
//     grade(assignment)
//     introduce()

//Dont forget about commets and documentation.

//Abstraction

//Every time you've used an array method like forEach(),
// or called Math.random(),
//you've interacted with abstraction.

// Abstraction encapsulates the complexity of certain tasks,
// such that the user can accomplish tasks without worrying about
// how those tasks arebeing handled.
//In our examples above, the addGrades() and get average()
// methods are good examples of abstraction.If you were handed the Learner
// class, pre - packaged, and told that you could pass grades into addGrades()
// to store them, and get the average with .average,
// that's all you would need to know!
// Everything within those functions is abstracted away from your view,
//   so that you can focus on what you need to do with the results of those methods.

// There are two primary types of abstraction -- data abstraction and process abstraction.

//Data Abstraction
// simplest form of abstraction, in which the original data entity is hidden by an externally
// -facing data structure.As users, we don't need to know what the original entity looks lik
//  or how it behaves, because we only interact with the externally - facing entity
//  A simple example of this is our get name() method from the Learner class, which abstracts
//  the existance of the #name object and
// instead gives us a single string that includes both #name.first and #name.last:

//example
//get name() {
 //   return this.#name.first + " " + this.#name.last;
// }
 
//Process Abstraction
//deals with processes in the same way. The underlying implementation of certain processes
// are hidden, and we as users do not need to interact with those processes.addGrades()
// and get average() from the Learner class are examples of this(shown above).

//Abstraction is the hiding of the details of data and process implementation,
// whereas encapsulation describes how abstraction occurs within the program.

//Abstraction is a design-level concept,
// whereas encapsulation is an implementation - level concept.

//Polymorphism
//Polymorphism is the ability of a single thing to take on many forms
// (poly = many; morph = change form).
//  In the context of OOP and JavaScript,
//   this means the ability for one object to have multiple realizations
//   that each implement the same functionality,
//  but work in differrent ways.

//Remember our Animal class examples? Here they are again:

// class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 		this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
// 	}
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString(animal = 'Animal') {
//     return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//   }
// }

// class Cat extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Meow...");
//   }
//   toString() {
//     return super.toString("Cat");
//   }
// }

// class Dog extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Woof!");
//   }
//   toString() {
//     return super.toString("Dog");
//   }
// }

// class Cow extends Animal {
//   constructor(hair, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.hair = hair;
//   }
//   speak() {
//     super.speak("Moo.");
//   }
//   toString() {
//     return super.toString("Cow");
//   }
// }

// const cat1 = new Cat("Orange", true, false);
// const cat2 = new Cat("Black and White", false, false);
// const dog1 = new Dog("Gold", true, true);
// const cow1 = new Cow("Brown", true, false);

//We can call the same method, speak(), on each of the intances of these Animal objects,
// but it will behave differently.This is an example of polymorphism -
//common functionality with unique behavior.toString() is similarly polymorphic.
 
//This particular type of polymorphism is referred to as inheritance-based polymorphism,
//because the differences in behavior are defined by the child classes.

// The toString() method also demonstrates parameter - based polymorphism,
// because each string is different based on the parameters that were originally
// given to the constructor functions.

//These types of polymorphism are also known as static polymorphism,
//  because they are defined in the source code and happen before runtime.
//  Dynamic polymorphism, which happens at runtime,
//  is not typically seen in JavaScript because JS is not a strictly typed language.

//dynamic polymorphism
// Cat cat1 = new Cat("Orange", true, false);
// Animal cat2 = new Cat("Orange", true, false);
// Animal cat3 = new Animal(2, 4, true, false);

// In this example, we create an Animal object using the Cat constructor,
//   which is a child of Animal.In a language that supports this,
//     it would lead to some interesting runtime behavior.
// Our cat2 object would use the Cat properties and methods,
//   even though it uses an Animal reference.

// Another way to demonstrate this particular type of polymorphism is the instanceOf operator.
//  The instanceOf operator in JavaScript allows us to compare an object's origins with a
//  given class. It does this by looking at the object's prototype chain,
//  which we will discuss later.

// console.log(cat1 instanceOf Cat); // true
// console.log(cat1 instanceOf Animal); // true
// console.log(cat1 instanceOf Object); // true
// console.log(cat1 instanceOf Dog); // false

// One of the classic examples of polymorphism is a Shape class,
// and those classes that would inherit from it, like Circle, Square, and Triangle.

// Without polymorphism, we would create separate drawing functions for each child class.
//  Circle would have drawCircle(), Square would have drawSquare(),
//   and Triangle would have drawTriangle().Instead, we can just create a single polymorphic
// draw() function that behaves differently for each object.Therefore, we can call shape.draw(),
//   circle.draw(), square.draw(), and triangle.draw().



//Static Properties and Methods

//The Math.random() method, which we have mentioned before,
// does not require an instance of the Math class in order to be called.
// Similarly, the property Math.PI can be accessed without instantiation.

//These are called "static" properties and methods.

//Static methods are often used to create utility
// functions that perform actions that are independant of the state of an individual object.

//Static properties are useful for caches, fixed-configuration values, or
//other data that does not need to be replicated across each instance of the class's objects.

//What kind of static properties and methods could we add to our example classes?
// Remember, static features need to be independant of the state of individual objects.
//Looking at our Animal code, we already have a method like this: speak().

//Now, we can see what different types of animals
// say without having to create instances of their classes!

// Example.
//   Cow.speak();

//Animal.speak("Cluck cluck."); // => Cluck cluck.
// Cat.speak(); // => Meow...
// Dog.speak(); // => Woof!
// Cow.speak(); // => Moo.

// While this isn't the most practical application, as we've effectively just turned Animal.
//   speak() into console.log(),
//   it demonstrates the basic principle of creating a static method.

//  Let's look at a more practical example. Say that we wanted to get the average
//  of a set of grades without needing to instantiate a Learner object and assign all of
//   the grades to that specific learner.
// Let's create a Grades class with a single static method that will look very familiar:

// exaMPLE!

// class Grades {
//   static getAverage(...grades) {
//     const arr = [];

//     grades = grades.flat();
//     grades.forEach((grade) => {
//       grade = Number(grade);

//       if (grade >= 0 && grade <= 100) {
//         arr.push(grade);
//       }
//     });
    
//     arr.sort((a, b) => a - b).shift();

//     return arr.reduce((a, b) => a + b) / arr.length;
//   }
// }


// console.log(Grades.getAverage())

  // We could take this example one step further
//   - what if you continued to expand the Grades class such that it had its
//    own constructor, private array of grades, getters, and setters ?
//   We could then remove all of this logic from our Learner class and instead
//   instantiate a Grades object within the Learner class in order to hold and interact
// with that data.

// example:

// class Learner {
//   #grades;
//   #name = {
//     first: "",
//     last: ""
//   };
//   #age;

//   constructor(firstName, lastName, age) {
//     this.#name.first = firstName;
//     this.#name.last = lastName;
//     this.#age = age;

//     this.#grades = new Grades();
//   }
//   get name() {
//     return this.#name.first + " " + this.#name.last;
//   }
//   get age() {
//     return this.#age;
//   }
//   addGrades(...grades) {
//     this.#grades.addGrades(grades);
//   }
//   get grades() {
//     return this.#grades.grades;
//   }
//   get average() {
//     return this.#grades.average;
//   }
// }

// class Grades {
//   #grades = [];

//   constructor(initialGrades) {
//     if (initialGrades) {
//       this.addGrades(initialGrades);
//     }
//   }
//   static getAverage(...grades) {
//     const arr = [];
//     this.addToArray(arr, grades);
//     return this.avgArray(arr);
//   }
//   static addToArray(arr, grades) {
//     grades = grades.flat();
//     grades.forEach((grade) => {
//       grade = Number(grade);

//       if (grade >= 0 && grade <= 100) {
//         arr.push(grade);
//       }
//     });
//   }
//   static avgArray(gradeArray) {
//     const arr = [...gradeArray];
//     arr.sort((a, b) => a - b).shift();

//     return arr.reduce((a, b) => a + b) / arr.length;
//   }
//   addGrades(...grades) {
//     Grades.addToArray(this.#grades, grades.flat());
//   }
//   get grades() {
//     return this.#grades;
//   }
//   get average() {
//     return Grades.avgArray(this.#grades);
//   }
// }

//Object Prototypes
//Prototypes are the way in which JavaScript objects inherit features from one another,
//  and are directly linked to the OOP concept of inheritance.
//  If we go to the browser console and create a simple empty object literal,
// you will see that it contains many additional properties and methods that we did not create.

//All objects in JavaScript inherit from a prototype.
//By default, this prototype is the Object prototype.

//side note. wont be using Object prototypes as much.

//Object Factories
// we've been creating objects using class templates
//  and constructor functions, but there is one other option available: factories.
// Generally speaking, factories are wonderful for creating copies of simple objects, 
// but lose out on much of the flexibility of working with classes as complexity increases.