// What will be the output of the following code snippet ?
// const number = 10;
// function multiplyByTwo(number) {
//     number = number * 2;
// }
// multiplyByTwo(number);
// console.log(number); // result 10

// Array Questions
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2, 'a', 'b');
// console.log(arr);





// bind () methods

// var person = {
//     name: "John",
//     age: 30,
//     greet: function (razz) {
//         console.log(razz + ", my name is " + this.name + " and I am " + this.age + " years old.");
//     }
// };

// var greetFunction = person.greet;
// greetFunction("Hello");

// var boundGreetFunction = person.greet.bind(person);
// boundGreetFunction("Hi");


// **********************************************************************************************

// Mutable: Mutable data can be modified or changed after it is created.Objects and arrays in JavaScript are examples of mutable data types.You can add, remove, or modify properties and elements of mutable objects or arrays.

// let person = { name: "John", age: 25 };
// person.age = 30; // Modifying the 'age' property
// console.log(person); // Output: { name: "John", age: 30 }


// let numbers = [1, 2, 3, 4];
// numbers[2] = 5; // Modifying the element at index 2
// console.log(numbers); // Output: [1, 2, 5, 4]



// Immutable: Immutable data cannot be changed once it is created.Primitive data types in JavaScript such as strings and numbers are immutable.Once assigned, their values cannot be altered.
// let message = "Hello";
// message = "Hi"; // Reassigning the variable
// console.log(message); // Output: "Hi"




// Mutable and Immutable in JavaScript example 


// // Mutable Example (Array)
// let mutableArray = [1, 2, 3];
// mutableArray.push(4);
// console.log(mutableArray);

// // Immutable Example (String)
// let immutableString = "Hello";
// let newString = immutableString.toUpperCase();
// console.log(newString);
// console.log(immutableString);

// // Immutable Example (Object)
// const immutableObject = { name: "John", age: 25 };
// const newObject = { ...immutableObject, age: 30 };
// console.log(newObject);
// console.log(immutableObject); 



// **************************************************************************************
// JavaScript object entries map example
// ***************************************************************************************


// const student = {
//     name: 'John',
//     age: 20,
//     grade: 'A',
//     subjects: ['Math', 'Science', 'History']
// };

// const transformedObject = Object.fromEntries(
//     Object.entries(student).map(([key, value]) => {
//         if (key === 'grade') {
//             return [key, value.toUpperCase()];
//         } else if (key === 'subjects') {
//             return [key, value.map(subject => subject.toUpperCase())];
//         }
//         return [key, value];
//     })
// );

// console.log(transformedObject);


