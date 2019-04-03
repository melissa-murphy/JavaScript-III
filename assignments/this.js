/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit -- When a function is preceeded by '.', this points to the object on the left
* 2. Explicit -- For functions. Method or call is defined specifically. We can override 'this' within an object by using .call, .apply, .bind. `This` refers to the new context.
* 3. New -- `This` points to the new object created by `new`.
* 4. Window -- Global scope. `this` will be the window or console.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function favColor(color) {
    // console.log(this);
    return color;
}

favColor('purple');

// Principle 2

// code example for Implicit Binding
const isaac = {
    name: 'Isaac',
    age: 4,
    favFood: 'any dessert',
    intro: function() {
        // console.log(`Hello, this is ${this.name}. He is ${this.age} and his favorite food is ${this.favFood}`);
        return `Hello, this is ${this.name}. He is ${this.age} and his favorite food is ${this.favFood}.`;
    }
}
console.log(isaac.intro());

// Principle 3

// code example for New Binding
function intro(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        return `Hello, my name is ${name} and I am ${age} years old.`
    }
}

const melissa = new intro('Melissa', '39');
melissa.sayHi();
console.log(melissa.sayHi());


// Principle 4

// code example for Explicit Binding
const person = {
    name: 'JoJo'
}
const favAnimals = ['cats','dogs','monkeys'];

function favoriteAnimals(animal1, animal2, animal3) {
    return `Hi! My name is ${this.name} and ${favAnimals} are some of my favorite animals.`;
}

console.log(favoriteAnimals.apply(person, favAnimals));
// favAnimals coming back undefined