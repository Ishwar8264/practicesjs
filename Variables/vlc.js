//  **************************** Variables Objects ******************************************


// Redefining and Re-declaring feature

// A variable declared using ‘var’ can be redefined and even re- declared anywhere throughout its scope.

// var x = 30;
// console.log(x); //prints 30
// x = "Hi"; //redefining or re-assigning (works without any error)
// console.log(x); //prints "Hi"

// var y = 10;
// console.log(y); //prints 10
// var y = "Hello"; //Re-declaring (works without any error)
// console.log(y) //Prints "Hello"


// ============================================================================================================

// *************************** LET *************************************

// A variable declared using ‘let’ can be redefined within its scope but cannot be re - declared within its scope.

// let x = 11;
// console.log(x); //prints 11
// x = "Razz"; //works without any error
// console.log(x); //prints "Razz"

// let y = 12;
// console.log(y); //prints 12
// let y = "Razz"; // error: Identifier y has already been declared

// let z = 13;
// if (true){
// let z = 3; //works without any error as scope is different.
// console.log(z) //prints "3"
// }
// console.log(z) //prints 13


// ================================================================================================================================

// ************ CONST ****************

// A variable declared using ‘const’ cannot be redefined or re-declared within its scope.

// const x = 10;
// console.log(x); //prints 10
// x = 11; // error: Assignment to constant variable.

// const y;
// y = 2; //error

// const z = 12;
// console.log(z) //prints 12
// const z = 13; // error: Identifier 'z' has already been declared

// Every const declaration must be initialized at the time of declaration.


// ============================================================================================================================


// *********************************** Hoisting *******************************************************

// Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.


//  console.log(x); // prints undefined
// var x = 100;
// console.log(x); //prints 100



// Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
// Variables declared using let are hoisted to the top of their scope but are not initialized with any value.
// Variables declared using const are hoisted to the top of their scope but are not initialized with any value.




// console.log(x); // prints undefined
// var x = 100;
// console.log(x); //prints 100

// console.log(y); //Reference error
// let y = 200;
// console.log(y); //prints 200

// console.log(z); //Reference error
// const z = 300;
// console.log(z); //prints 300

//  Examples

// sum(4,3); //first call

// function sum (){
//     add = a+b;
//     console.log(add);

// } //function declarations


// Hoisting do

// function sum (){ //move top declarations by browser
//     add = a+b;
//     console.log(add);
// }
// sum(4,6);//after call


// function Expressions hoisting not work


// sum(4,5); //Hoisting not works
// var sum = function (a,b){
//     add = a+b ;
//     console.log(add);
// }


// Arrow function

// sum (4,5); //ReferenceError , hoisting no work in arrow function

// const sum = (a,b) => {
//     add = a+b ;

//     console.log(add);
// }


//  variable hoisting
// var a = 10 ;
// console.log(a); // print 10
// var a = 20;


// var a ;
// console.log(a); //print undefined
// a = 10 ;


// var a;
// a=10;
// console.log(a);//print 10

// Exercise

// console.log("I am a "+ job);//undefined
// var job = "web Developer"
// console.log("I am a " + job); // i am a web developer


// function WhoIam(){
//     console.log("I am a "+ job);//undefined
//     var job = "web Developer";
//     console.log("I am a " + job); // i am a web developer
// }
// WhoIam();




// *****************************************SCOPE CHAIN *******************************************
// The Scope chain is used to resolve the value of variables names in JavaScript

// Scope chain in JavaScript is Lexically defined, which means that we can see what the scope chain will be by
// looking at the code

// At the top of the scope chain is the global scope, which is the window object in the browser.

// Lexical Scoping :- A function that is lexically within another function get access to the scope of the
// outer function.(Inner function can get access to their parent functions Variables But the Vice-Versa is not true. )

// var a = "Hello guys"

// function first (){
//     var b = " how r u"
//     // console.log(c); //parent child function access nhi kr skta but child parent function ko access kr skta h esi ko lexical scope bolte hai
//     second ();

//     function second(){
//         var c = " my name is razz"
//         console.log(a+b+c);
//         three();
//     }
// }

//     function three(){
//         var d = " he is not razz"
//         console.log(a+b+c+d);
//     } // reference error b is not defined parent function se bahar hai esiliye error through kr rha hai (har function ka khud ka scope hota dusre se lena dena nhi )
// first();





// **************************************USE STRICT ***************************************
// It's a new Feature of ECMAScript 5.

// The statement "use strict"; instruct the browser to use the Strict mode , which is a reduced and safer feature set of JavaScript.

// "use strict"
// function sum (a,b){
//      add = a+b ;
//     console.log(add);
// }
// sum(10,30);


// ***************************** What is this in JavaScript *************************************************

// The JavaScript this keyword refers to the Object it belongs to.

//***It has different depending on where it is used **:

//1: Alone, this refers to the global object.
// console.log(this);

// ========
//2: In a Regular Function, this refers to the global object.
// function sum(){
//    var add = 2 + 4 ;
//     console.log(add);
//     console.log(this);

// }//regular function matlab normal function
// sum();

// ===============

//3: In a method, this refers to the owner object. 
// const razz = {
//     name : "ishu razz",
//     qual : "Diploma",

//     sum : function() {
//         var add = 4 + 5 ;
//         console.log(add);
//         console.log(this.name);
//         console.log(this);

//     }
// }
// razz.sum();

//4: In a function, in strict mode, this is undefined 

// "use strict"

// function sum(){
//     var add = 4 +5 ;
//     console.log(add);
//     console.log(this);
// }
// sum();




//  Exercise
// const razz = {
//     name : "Ishwar razz",
//     qual : "Diploma",

//     sum : function() {
//         console.log(this.name);
//         var add = 3 + 4 ;
//         console.log(add);
//         console.log(this);

//         function child(){
//             var name = "ishu";
//             console.log(name);
//             console.log(this);
//         }
//         child();

//     }
// }
// razz.sum();




// ******************************** Types in JavaScript *************************************

// Data types in JavaScript :
// There are six data types given below 
// 1. Number,  2.String,  3. Boolean,  4.Undefined, 5.Null,  6.Symbol is called Primitive datatypes
// Examples 

// let a = 1;//number
// let b = "2";//string
// let c = true;//boolean
// let d ; //undefined
// let e = null;//object

// Object (non-primitive datatypes)

// const razz = {
//     name : "ishwar",
//     qualification : "diploma"
// }
//  razz.prof = "web developer";

//  console.log(razz);
//  console.log(razz.prof);
//  console.log(typeof({}));
//  console.log(typeof([]));
//  console.log(typeof(function() {}));



// const check = () =>{
//     console.log(checking);
// }
// check.fun = "i am also object";
// console.log(check.fun);

// In JavaScript every thing Object 



















// ==================================================================


// ***************************** Boolean Coercion(Dabab) **********************************


// Truthy values are those which will be converted(coerced) to true.Falsy values are those which will be converted to false.

// All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

// var x = 0 ;
// var y = 23;

// if (x) {

//     console.log(x)  // The code inside this block will not run since the value of x is 0(Falsy)  
// }


// if (y) {


//     console.log(y)  // The code inside this block will run since the value of y is 23 (Truthy)

// }   


// ===========================================================================================================

// ****************************Logical operators: *********************************************
// Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

// OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

// AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

// Example:

// var x = 220;
// var y = "Hello";
// var z = undefined;
        
// x || y    // Returns 220 since the first value is truthy
        
// x || z   // Returns 220 since the first value is truthy
        
// x && y    // Returns "Hello" since both the values are truthy
        
// y && z   // Returns undefined since the second value is falsy
        
// if( x && y ){ 
//   console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
// }   
        
// if( x || z ){
//   console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
// }



console.log(3+3);