
// Javascript

// script

// 1. jhkhkhkh
// 2. jkbjkhb

// line by code excution

// single threat

// sync

// async


// variable - 3 types

// we can store data using container.

// var     - global scope, function scope

// let     - block scope 

// const   - block scope



//  Rules

// var 


var a = 20                      // declration   // intialiazation

    a = 40                     // reuse         // reintia
    
var a = 60                    // redeclration   // reIntia


console.log(a)

// let    - block scope 


let b = 30      // dec    // intia

    b = 50      // reuse  // reIntia

// let b        // reDec not accept let

console.log(b);


// const - constant - block scope

const c = 60  

    //   c = 70  // not accept reuse , reIntia

// const c = 60  // not accept reDec .

console.log(c);


// example


// let a1 = 50

// const b2 = a1 

//       b2 = a1 + 10   // type error



// let a3 = b2

// let a3 = b2

// console.log(a3);  // 50



// printing Statement

// 1. console.log()

let a4 = 100

console.log(a4);
console.log(200);


// 2. alert() - pop stracture 


// alert("hello team, how are you!!!")


// 3. confirm() - pop stracture

// confirm("did you like programming!!!")

// 4. prompt() - get info user side

// prompt("what is your name: - ")

// 5. document.writeln()

// var a = 50
// document.writeln(a)


// i want to get user name and i want show to console in thanks giving ur name.

// let name1 = prompt("what is your name")

// console.log("thanks giving your name :- ", name1);


// i will ask question like , had breakfast to user side i will expect user value. 

// let userBreakfast = confirm("had breakfast ?")

// console.log(userBreakfast);


// i want to know user age and i want print that age in console.

// let userAge = prompt("enter your age :- ")

// console.log("user age :- ", userAge);


// console methods 


// 1. console.log()

console.log(100);


// 2. console.warn()

console.warn(100)

// 3. console.error()

console.error(100)


// 4. console.clear()

console.clear()


// DataTypes

// 1. primitive DataType

// 1. string - "123" 

let name1 = "navi"

console.log((name1));


// 2. number - 123

let num = 123

console.log(typeof(num));


// 3. boolean - true , false

let isHave = false

console.log(typeof(isHave));


// 4. undefined

let all ;

console.log(all);


// 5. null - 0 

// let name2 = prompt()

// console.log(name2);






// 2. non primitive DataType 

// 1. Array - indexing

// syntex - []

let fruit = ["giwi","apple","banana","orange","graphs","cherry","hjhjhj"]

console.log("array");

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[3]);

console.log(fruit[0]);
console.log(fruit[fruit.length-1]);



// 2. object - doted notation

// syntex - {}


let fruitDetials = {
    redFruit    : ["apple","cherry"],
    greenFruit  : ["giwi","graphs"] ,
    yellowFruit : "banana",
    notFruit    : "hjhjhj"
}

console.log(fruitDetials);

console.log(fruitDetials.yellowFruit);
console.log(fruitDetials.notFruit);
console.log(fruitDetials.greenFruit[1]);
console.log(fruitDetials.redFruit[0]);

console.clear();



// operators

// 1. Arithmetic operator - methamatical 

// addition       +

// subraction     -

// multiplication *

// division       /

// modulus        %

// exponencial    **


console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(10 / 2);
console.log(9 % 10);
console.log(2 ** 3); // 2^3 = 2*2*2 = 8

// Increament ++ = +1

// --> 1. pre inc = ++var , 2. post inc = var++


// Decreament -- = -1

// --> 1. pre Dec = --Var , 2. post Dec = Var--



// Example :- 

let num1 = 2

num1--

console.log("num1 :- ", num1);



let num3 = 2       // 

let num4 = num3++  // 

console.log("num3 : - ", num3);  // num3 :- 3
console.log("num4 : - ", num4);  // num4 :- 2



// if you search element first find in variable side , you can calculate that value side till the variable.

let num2 = 2      // null

    num2 = ++num2

    console.log("num2 :- ", num2); // num2 : - 3



// if you search element first find in value side , you can calculate that value side entaire.
// final Example :- 


let num5 = 3     // 

let num6 = --num5 // --num5 = -1+3 =2

let num7 = ++num6 // ++num6 = ++2 = 3


console.log("num5 :- ",num5);  // 2 , 3  // num5 :- 2
console.log("num6 :- ",num6);  // 2      // num6 :- 3
console.log("num7 :- ",num7);  // 3      // num7 :- 3



    


// 2. Assignment operator


let number1 = 10
let additionVal = 100

    // number1 = number1 + additionVal 

    number1 %= additionVal

    console.log("number1 :- ",number1);
    

// 3. Relational or comparision operator

//  lessThen        <       (5<5)      false

//  greaterThen     >       (15>5)     true

// lessThenEq       <=      (5<=5)     true

// greaterThenEq    >=      (15>=0.15)  true

// loosyTypeEq      ==      (5 == "5") true

// loosyNotEq       !=      (5 != "0.5") true

// strictlyTypeEq   ===     (5 === 50)  false

// strictlyNotEq    !==     (5 !== 5)  false


// example


console.log(5 === "5"); // false
console.log(5 == "5");  // true
console.log(5 !== "5"); // true
console.log(5 >= 56);   // false 
console.log(5 != 89);   // true
console.log(5 >= 0.8);  // true



// 4. logical operator

// 1. AND operator   - &


// true & true & true = true 

// false & true & true = false



// 2. OR operator    - ||

// true || false || false = true 

// false || false || false = false




// 3. Not operator   - !

// !(true) = false 

// !(false) = true


// Example :- 

console.log(10===10 & 2>4 & 5=="5"); // false

//  true & false & true = false

console.log(10=="101" || 5>3 || 6<90); // true

// false || true || true  = true


console.log(!(5==="5")); // true

// !(false) = true


console.log(!(5==="51") & 8>=8 || 90>=90); // true

// !(5==="51") = true & true = true  || true = true



// 5 . Ternary operator

// syntex 


// condition ? "statement" : "statement" 


// example :- 


5!==5 ? console.log("true") : console.log("false");


console.clear();

// concatination - (+)

let n1 = "iron"
let n2 = "man"

console.log(n1 +" "+ n2);


// Template String - ``

let n3 = "spider"
let n4 = "man"

console.log(`${n3} ${n4}`);



// ternary operator


// condition ? "statement" : "statement";


let pwd = 1

pwd ? console.log("enter the home page") : console.log("your password is wrong");

















// 3. function 

// 4. date















