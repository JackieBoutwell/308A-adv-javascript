// We have already touched on some Object-Oriented Programming (OOP) concepts,
// but in this lesson we will dive into the details of the four key principles of OOP:

// Inheritance
// Encapsulation
// Abstraction
// Polymorphism

// const person = {
//   name: {
//     first: 'Elyan',
//     last: 'Kemble',
//   },
//   age: 32,
//   location: {
//     city: 'Garland',
//     state: 'Texas',
//     zip: 75040
//   },
//     occupation: 'Front-End Developer',
//     introduce() {
//         console.log(this)
//         console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//     }
//     introduce: function () {
//         console.log(this);
//   console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
// }
// }


// consosle.log(person);
// introduce();

// Neither of these approaches are efficient, which is why we need classes.


// CLASSES
// Classes (as well as their predecessor, constructor functions) are used to create objects.
// Think of classes as the blueprints used to create objects of a certain "type".

// const cat1 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Orange",
//   isAwake: true,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Meow...");
//   }
// }

// const cat2 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Black and White",
//   isAwake: false,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Meow...");
//   }
// }

// const dog1 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Gold",
//   isAwake: true,
//   isMoving: true,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Woof!");
//   }
// }

// const cow1 = {
//   eyes: 2,
//   legs: 4,
//   hair: "Brown",
//   isAwake: true,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Moo.");
//   }
// }

// This could get out of hand easily. imagine if we had to creat the whole farm.
// That is why classes save the day. these objects have the same properties and methods.
//Lets take these animals and put them into a function.

// Example
// class Animal { Code to define the class's properties and methods}
// Differ from a function classes are capitlized. and like this..
// function functionName () and a class looks like this class Animal{}


// Instantiating a Class
// Here's a bit more OOP vocabulary for you:

// instance: An object created by a class.
// instantiate: We instantiate a class to create an object.
// instantiation: The process of creating an object.
// In JS, we create objects using the new keyword when invoking (instantiating) the class:

//array example
//const arr = new Array(1,2,3);

// const v1 = new Animal(2, 4, true, false);

// The Constructor Method
// When a class is being instantiated,
// the special constructor method in the class will automatically be called:
// The constructor method code below would go above the Array.

class Animal {
    	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes,
    this.legs = legs,
    this.isAwake = isAwake,
    this.isMoving = isMoving,
    }
}

const cat1 = new Animal(2, 4, true, false);
console.log(cat1);

// This code can also be used for any animal.
// The purpose of the constructor method is to initialize the data properties of the new object being created
// (represented by this).

// If there are no properties to initialize,
//     the constructor method is optional
//     (a hidden default constructor is called).

// Object insantiation
// When we invoke the class prefaced with the new keyword, behind the scenes:
// JS creates a new object (empty) and assigns it to the this keyword.
// The constructor method is called with the arguments we provided when invoking the class.
// Remember, the constructor method is where we create / initialize properties on the new object assigned to this.
// After the constructor is finished executing, the class automatically returns the new object.
// Although the constructor method is special because it's called automatically, there's nothing special about how it's defined,
//  other methods are defined the same way.

// Defining Methods in a Class
// Prototype (instance) methods
// Static (class) methods

// const mathObj = new Obj =new Math()
// mathObj.random()
// Static is...Math.ramdon()


// taking the propery and reassigning it.
// Take the sleep property and reassign it to false.

// class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 		this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
// 	  // return is not needed because the new object is returned by default
// 	}
//  sleep() {
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
// }
//   speak(sound) {
//     console.log(sound);
//   }

// const cat1 = new Animal(2, 4, true, false);
// const cat2 = new Animal(2, 4, false, false);
// const dog1 = new Animal(2, 4, true, true);
// const cow1 = new Animal(2, 4, true, false);

// We are still missing one of our properties, fur / hair,
// and the convenience provided by our custom speak() methods.
// In order to address these issues, we need to talk about one of the four key OOP concepts: inheritance.

// Inheritance
// Inheritance is the ability to create classes based on other classes.
// With inheritance, we can define a parent class that has certain properties and methods,
// and child classes that will inherit all of these properties and methods from their parent.
// The major benefit to inheritance is that those child classes can then add their own specific properties and methods,
// or override the parent's.

// The extends keyword declares what parent a child inherits from.For instance,
// we could create a new Cat class based on our Animal class by saying class Cat extends Animal.
// This is a sneak peek into how we'll be moving forward with our example.

// Within the child class, you can access properties and methods of the parent by using the keyword super. We will demonstrate the use of this shortly.

// If you are familiar with OOP in other langauges,
// note that JavaScript is different from class-based languages like Java or Python in that its inheritance implementation is prototype - based.
// We will discuss prototypes later within the lesson.

// In JS, virtually every object inherits from the Object class and thus inherits its methods, such as toString:

// example:
// cat1.toString() // outputs something like '[object Object]'
// to see this string put it in a string.

// If we define a method that already exists in the object hierarchy, we "override" it.

// For example, we can override the Object's toString method by adding it to our Animal class:

// existing methods above
// toString() {
//   return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
// }

// Test it out by calling cat1.toString().

// Let's use these concepts of inheritance to expand upon our animals example by creating subclasses (child classes) for Cat, Dog, and Cow.
// There are some important things to take note of in the code below, which we will elaborate on after the code block.

// class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 		this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
// 	  // return is not needed because the new object is returned by default
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
// we pass arguments to the super(constructor of the parent class)
    // Animal constructor expects : eyes, legs awake (boolean)
//     super(2, 4, isAwake, isMoving);
// we give the Cat class its own unique property
// the super is the cat classes  constructor
// this is specific to the cat. this could also be a boolean.
//     this.fur = fur;
//   }
// a speak method using the super that refers to the Animal class.But we are using it to access the Animal class speak method.
// at the same time we are overriding the speak method of the Animal class.
//   speak() {
//call the speak instance method of the animal class.
// and pass it an argument sound.
    //     super.speak("Woof!");
//   }
// overriding the toString method of the Object class
//   toString() {
//call the toString method of the Animal class
    //and pass it an argument `(the animal type)
//     return super.toString("Dog");
//   }
// }

// creating an instance of the Cat class
// const cat3 = new Cat("orange", true, true);
// cat3.speak();


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

//We changed the toString() method of Animal to accept a parameter,
//but given it a default value for when we don't call it from our child classes.

// We use super() within the constructor to set properties more easily,
// and no longer need eyes or legs as parameters for our child class constructors
// because they are consistent across child classes.Calling super() within the constructor will automatically call the parent's constructor method, but it must be called before any other references to this.
// We use super.speak() within speak to avoid repetition. If we wanted to change how all animals speak,
// we could continue to do so within the Animal class. We do something similar with toSpeak().
// If you wanted to completely change the speak() or toString() methods in these children classes, you could.

//Now, if we wanted to instantiate our animals again, we could do the following:

//const cat1 = new Cat("Orange", true, false);
// const cat2 = new Cat("Black and White", false, false);
// const dog1 = new Dog("Gold", true, true);
// const cow1 = new Cow("Brown", true, false);

// console.log(cat1, cat2, dog1, cow1);

//Everything should work as originally intended!
//Test the code by calling some of the methods on each animal and logging changes
//in properties.

// cat1 speak();
// dog1 speak();
// cow1 speak();

// call the wake method of the inherited Animal class

// cat1 Wake();

// console.log(cat1.toString());
// console.log(dog1.toString());
// console.log(cow1.toString());


// Excersise 1
//Using this example as inspiration, create a Human class that extends Animal.

const person = {
  name: {
    first: 'Elyan',
    last: 'Kemble',
  },
  age: 32,
  location: {
    city: 'Garland',
    state: 'Texas',
    zip: 75040
  },
  occupation: 'Front-End Developer'
}

function introduce() {
  console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
}


//what i put to try this

class Human extends Animal {
    constructor(name, age, occupation, location) {
        super(2, 2, false, false) // eyes, legs, isAwake, isMoving
      this.name = name;
      this.age = age; //could be moved the Animal class
      this.occupation = occupation;
      this.location = location;
    }
   introduce() {
  console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
    }
}

//create a human object.
const person1 = new Human({ first: 'Elyan', last: 'Kemble' }, 32, "Front-End Developer", { city: 'Garland', state: 'Texas', zip: 75040 });

console.log(person1);
person1.introduce();