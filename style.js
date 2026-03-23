
// // Javascript

// // script

// // 1. jhkhkhkh
// // 2. jkbjkhb

// // line by code excution

// // single threat

// // sync

// // async


// // variable - 3 types

// // we can store data using container.

// // var     - global scope, function scope

// // let     - block scope 

// // const   - block scope



// //  Rules

// // var 


// var a = 20                      // declration   // intialiazation

//     a = 40                     // reuse         // reintia
    
// var a = 60                    // redeclration   // reIntia


// console.log(a)

// // let    - block scope 


// let b = 30      // dec    // intia

//     b = 50      // reuse  // reIntia

// // let b        // reDec not accept let

// console.log(b);


// // const - constant - block scope

// const c = 60  

//     //   c = 70  // not accept reuse , reIntia

// // const c = 60  // not accept reDec .

// console.log(c);


// // example


// // let a1 = 50

// // const b2 = a1 

// //       b2 = a1 + 10   // type error



// // let a3 = b2

// // let a3 = b2

// // console.log(a3);  // 50



// // printing Statement

// // 1. console.log()

// let a4 = 100

// console.log(a4);
// console.log(200);


// // 2. alert() - pop stracture 


// // alert("hello team, how are you!!!")


// // 3. confirm() - pop stracture

// // confirm("did you like programming!!!")

// // 4. prompt() - get info user side

// // prompt("what is your name: - ")

// // 5. document.writeln()

// // var a = 50
// // document.writeln(a)


// // i want to get user name and i want show to console in thanks giving ur name.

// // let name1 = prompt("what is your name")

// // console.log("thanks giving your name :- ", name1);


// // i will ask question like , had breakfast to user side i will expect user value. 

// // let userBreakfast = confirm("had breakfast ?")

// // console.log(userBreakfast);


// // i want to know user age and i want print that age in console.

// // let userAge = prompt("enter your age :- ")

// // console.log("user age :- ", userAge);


// // console methods 


// // 1. console.log()

// console.log(100);


// // 2. console.warn()

// console.warn(100)

// // 3. console.error()

// console.error(100)


// // 4. console.clear()

// console.clear()


// // DataTypes

// // 1. primitive DataType

// // 1. string - "123" 

// let name1 = "navi"

// console.log((name1));


// // 2. number - 123

// let num = 123

// console.log(typeof(num));


// // 3. boolean - true , false

// let isHave = false

// console.log(typeof(isHave));


// // 4. undefined

// let all ;

// console.log(all);


// // 5. null - 0 

// // let name2 = prompt()

// // console.log(name2);






// // 2. non primitive DataType 

// // 1. Array - indexing

// // syntex - []

// let fruit = ["giwi","apple","banana","orange","graphs","cherry","hjhjhj"]

// console.log("array");

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[3]);

// console.log(fruit[0]);
// console.log(fruit[fruit.length-1]);



// // 2. object - doted notation

// // syntex - {}


// let fruitDetials = {
//     redFruit    : ["apple","cherry"],
//     greenFruit  : ["giwi","graphs"] ,
//     yellowFruit : "banana",
//     notFruit    : "hjhjhj"
// }

// console.log(fruitDetials);

// console.log(fruitDetials.yellowFruit);
// console.log(fruitDetials.notFruit);
// console.log(fruitDetials.greenFruit[1]);
// console.log(fruitDetials.redFruit[0]);

// console.clear();



// // operators

// // 1. Arithmetic operator - methamatical 

// // addition       +

// // subraction     -

// // multiplication *

// // division       /

// // modulus        %

// // exponencial    **


// console.log(1 + 1);
// console.log(1 - 1);
// console.log(1 * 1);
// console.log(10 / 2);
// console.log(9 % 10);
// console.log(2 ** 3); // 2^3 = 2*2*2 = 8

// // Increament ++ = +1

// // --> 1. pre inc = ++var , 2. post inc = var++


// // Decreament -- = -1

// // --> 1. pre Dec = --Var , 2. post Dec = Var--



// // Example :- 

// let num1 = 2

// num1--

// console.log("num1 :- ", num1);



// let num3 = 2       // 

// let num4 = num3++  // 

// console.log("num3 : - ", num3);  // num3 :- 3
// console.log("num4 : - ", num4);  // num4 :- 2



// // if you search element first find in variable side , you can calculate that value side till the variable.

// let num2 = 2      // null

//     num2 = ++num2

//     console.log("num2 :- ", num2); // num2 : - 3



// // if you search element first find in value side , you can calculate that value side entaire.
// // final Example :- 


// let num5 = 3     // 

// let num6 = --num5 // --num5 = -1+3 =2

// let num7 = ++num6 // ++num6 = ++2 = 3


// console.log("num5 :- ",num5);  // 2 , 3  // num5 :- 2
// console.log("num6 :- ",num6);  // 2      // num6 :- 3
// console.log("num7 :- ",num7);  // 3      // num7 :- 3



    


// // 2. Assignment operator


// let number1 = 10
// let additionVal = 100

//     // number1 = number1 + additionVal 

//     number1 %= additionVal

//     console.log("number1 :- ",number1);
    

// // 3. Relational or comparision operator

// //  lessThen        <       (5<5)      false

// //  greaterThen     >       (15>5)     true

// // lessThenEq       <=      (5<=5)     true

// // greaterThenEq    >=      (15>=0.15)  true

// // loosyTypeEq      ==      (5 == "5") true

// // loosyNotEq       !=      (5 != "0.5") true

// // strictlyTypeEq   ===     (5 === 50)  false

// // strictlyNotEq    !==     (5 !== 5)  false


// // example


// console.log(5 === "5"); // false
// console.log(5 == "5");  // true
// console.log(5 !== "5"); // true
// console.log(5 >= 56);   // false 
// console.log(5 != 89);   // true
// console.log(5 >= 0.8);  // true



// // 4. logical operator

// // 1. AND operator   - &


// // true & true & true = true 

// // false & true & true = false



// // 2. OR operator    - ||

// // true || false || false = true 

// // false || false || false = false




// // 3. Not operator   - !

// // !(true) = false 

// // !(false) = true


// // Example :- 

// console.log(10===10 & 2>4 & 5=="5"); // false

// //  true & false & true = false

// console.log(10=="101" || 5>3 || 6<90); // true

// // false || true || true  = true


// console.log(!(5==="5")); // true

// // !(false) = true


// console.log(!(5==="51") & 8>=8 || 90>=90); // true

// // !(5==="51") = true & true = true  || true = true



// // 5 . Ternary operator

// // syntex 


// // condition ? "statement" : "statement" 


// // example :- 


// 5!==5 ? console.log("true") : console.log("false");


// console.clear();

// // concatination - (+)

// let n1 = "iron"
// let n2 = "man"

// console.log(n1 +" "+ n2);


// // Template String - ``

// let n3 = "spider"
// let n4 = "man"

// console.log(`${n3} ${n4}`);



// // ternary operator


// // condition ? "statement" : "statement";


// let pwd = 1

// pwd ? console.log("enter the home page") : console.log("your password is wrong");


// console.clear();


// // Type Conversion 

// // 1. implicit Type Conversion

// console.log(typeof("hello" + 1));

// // String - (string anything String)

// console.log(typeof("1" + "1"));
// console.log(typeof("1" + 1));
// console.log(typeof("1" + true));
// console.log(typeof("1" + undefined));
// console.log(typeof("1" + null));

// console.log(typeof("1" + [1,2]));
// console.log(typeof("1" + {k:1}));

// // number 

// console.log(typeof(1 + "1"));
// console.log(typeof(1 + 2));
// console.log(typeof(1 + true));
// console.log(typeof(1 + undefined)); // NaN = 0 --> number
// console.log(typeof(1 + null));

// console.log(typeof(1 + [1,2,3]));
// console.log(typeof(1 + {g:4}));

// // boolean 

// console.log(typeof(true + "1"));
// console.log(typeof(true + 2));
// console.log(typeof(true + true));
// console.log(typeof(true + undefined));
// console.log(typeof(true + null));

// console.log(typeof(true + [1,2,3]));
// console.log(typeof(true + {k:9}));

// console.clear();


// // 2. Explicit Type Conversion



// // Constractor

// // Number Constractor

// console.log(1 + Number("1"));


// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("abc"));
// console.log(Number(123));
// console.log(Number(-1));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));

// console.log(Number([123,45,56]));
// console.log(Number({k:9}));

// // Boolean 

// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("123"));
// console.log(Boolean("abc"));
// console.log(Boolean(123));
// console.log(Boolean(-1));
// console.log(Boolean(0));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// console.log(Boolean([1,2]));
// console.log(Boolean({l:1}));



// console.clear();


// // Flow Control Statement

// // 1. conditional statement

// // if statement

// //  if(condition){// statement}

// // condition true = allow

// // example :- 

// if(5=="5"){

//     console.log("hello");
    
// }

// // if - else statement

// // condition true = if inside allow , false = else inside allow

// // example

// if(0){
//     console.log("condition true");
    
// }else{
//     console.log("condition false");
    
// }


// // else if statement 


// // let hour = prompt("enter current time use time format : 24hrs")

// // if(hour >= 1 && hour <= 12){
// //     alert("Good morning");
    
// // }else if(hour >= 13 && hour <= 15){
// //     alert("Good Afternoon");
    
// // }else if(hour >= 16 && hour <= 18){
// //     alert("Good Evening");
    
// // }else{
// //     alert("Good Night");
    
// // }


// // nested if Statement

// // police selection creteria.. # age , # height , # weight

// // let namee = prompt("enter your name :-")
// // let age   = prompt("enter your age :-")
// // let height = prompt("enter your height :- (cm)")
// // let weight = prompt("enter your weight :- (kg)")


// // if(age >= 18){

// //     if(height >= 150){

// //         if(weight >= 50){
// //               alert(`${namee} , congradulation your selected!!!`);
              
// //         }else{
// //             alert(
// //               `${namee} your weight is :- ${weight} kg. basic creteria 50 kg.`
// //             );
// //         }

// //     }else{
// //         alert(
// //           `${namee} your height is :- ${height} cm. basic creteria 150 cm.`
// //         );
// //     }

// // }else{
// //     alert(`${namee} your age is :- ${age} old. basic creteria 18 age old.`);
    
// // }



// // Looping statement

// // for loop

// // for(intialization ; condition ; iteration ){

// //     // statement

// // }


// // example  :- 

// // 1 to 5


// for(let i = 1 ; i <= 5 ; i++){

//     console.log(i); // 1 2 3 4 5
    
// }

// // i = 1 ; 1 <= 5 = true ; 1++ = 2
// // i = 2 ; 2 <= 5 = true ; 2++ = 3
// // i = 3 ; 3 <= 5 = true ; 3++ = 4
// // i = 4 ; 4 <= 5 = true ; 4++ = 5
// // i = 5 ; 5 <= 5 = true ; 5++ = 6
// // i = 6 ; 6 <= 5 = false .


// for(let i = 1 ; i <= 3 ; i++){
//     for(let j=1; j <= 5 ; j++){
//         console.log(j);
        
// //     }
// // }

// // console.clear();


// // // while loop


// // // intialization 

// // // while(condition){
// // //     // statement 

// // //     iteration
// // // }


// // // let intial = Number(prompt("enter number :- "))

// // // while(intial){
// // //     console.log(intial);

// // //     intial--
    
// // // }



// // // do while loop 

// // // intialization 

// // // do {
// // //     // statement 
// // //     iteration
// // // }
// // // while(condition)


// // let in1 = 10

// // do{
// //     console.log(in1);
// //     in1--
    
// // }
// // while(in1>=30)





// // // for of loop - array ,string , function

// // let str = "javascript"
// // let array = ["apple","orange","banana"]

// // for(let a of str){

// //     console.log(a);
    
// // }


// // for(let b of array){
// //     console.log(b);
    
// // }



// // // for in loop - object

// // let object = {
// //     name1 : "ben",
// //     role : "developer",
// //     salary : 100000
// // }

// // for(let a in object){
// //     console.log(object[a]);
    
// // }

// // console.clear();


// // // 3. function 


// // // block of code

// // // reusable

// // // Easy to readable , clean

// // // Repeation code avoid 

// // // when you call that time only render


// // // syntex 


// // // function one(parameter){
// // //     // statement
// // //     // return
// // //     // yeild
// // // }


// // // one(arguments)


// // function one(){
// //     console.log("hello");

// //     console.log("hi");

// //     for(let i = 0 ; i<=6 ; i++){
// //         console.log(i)
// //     }

// //     if(1){
// //         console.log("true");
        
// //     }
    
    
// // }

// // one()




// // function two(a){
// //     console.log(a);
    
// // }

// // two("welcome")



// // function form(name,department,number,stay){

// //     console.log("name :-",name );
// //     console.log("department :-",department );
// //     console.log("Number :-",number );
// //     console.log("stay :-",stay );
    
// // }

// // form("kamal","ece",8878987663,"dayscholar")
// // form("praveen","cse",75765756465,"hostel")


// // function additional(name){

// //     return name

// // }

// // let returnVal = additional("ben")

// // console.log(returnVal);



// // function extra(a){

// //     console.log("extra :- ",returnVal);

// //     console.log(a);
    
    
// // }

// // extra(returnVal);



// // let obj = {
// //     name : "john",
// //     role : "developer"
// // }


// // function callOut(){

// //     console.log(obj.name);
// //     console.log(obj.role);
    
    
// // }

// // callOut()

// // console.clear();




// // // scope :- 

// // function scopeCheck(){
// //     if(true){
// //         var z1 = "global scope"
// //         let z2 = "block scope"
// //         const z3 = "block scope const"
// //         console.log(z2);
// //         console.log(z3);
// //     }
// //     console.log(z1);
    

    
// // }

// // scopeCheck()


// // // hoisting

// // console.log(y1);
// // var y1 = "global scope var"



// // let y2 = "block scope let"
// // console.log(y2);



// // const y3 = "block scope const"
// // console.log(y3);

// // // function Types :- 


// // // 1. named function

// // named("named function")
// // function named(parameter){

// //     console.log(parameter);
    
// // }


// // // 2. annonymous function

// // var annonymous = function(parameter){
    
// //     console.log(parameter);
    
// // }
// // annonymous("annoymous function")


// // // 3. arrow function

// // var arrow = (parameter)=>{
    
// //     console.log(parameter)
// // }

// // arrow("arrow function")


// // // how to set default parameter

// // function form1(name,department,disability = "no"){


// //     console.log("name :- ", name);
// //     console.log("department :- ",department);
// //     console.log("isDisability :- ",disability);
    
    
    
// // }

// // form1("john","ece","yes")
// // form1("ben","cse")


// // // IIFE - self invoke function

// // (function(parameter){

// //     statement 
// //     yield 
// //     return

// // })("argument")


// // (function(product,discount){
// //     alert(`now black day sale ongoing , ${product} now this product ongoing ${discount} % discounts have now....`)
// // })("tShirt",70)



// // Higherorder Function and Callback function

// function function1(){
//     console.log("higherorder function");
    
// }

// function function2(){
//     console.log("callback function");
    
// }

// function1(function2());







// // example

// function add(callback,a,b){ // callback = sub , a = 20 , b = 40
//     console.log(a+b); // 20 + 40 = 60

//     callback(20,20)  // sub(20,20)
    
    
// }

// function sub(num1,num2){ // n1 = 20 , n2 = 20
//     console.log(num1-num2);// 20-20 = 0
    
// }


// add(sub,20,40) 



// // currying format 


// function d1(a){
//     return function (b){
//         return function (c){
//             console.log(a + b + c);
            
//         }
//     }
// }

// d1(1)(2)(3)


// // generator function 


// function* cashback(){
//     yield "you will get 20rs"
//     yield "you will get 6rs"
//     yield "try again better luck next time"
//     yield "congradulation you will get 100rs"
// }

// let collectMoney = cashback()

// // console.log(collectMoney.next().value);
// // console.log(collectMoney.next().value);
// // console.log(collectMoney.next().value);
// // console.log(collectMoney.next().value);

// // for of 

// for(let a of collectMoney){

//     console.log(a);
    
// }



// // switch 


// // // switch(condition){
// // //     case value : statement :break
// // //     case value : statement :break
// // //     case value : statement :break
// // //     case value : statement :break
// // // }

// // let day = Number(prompt("enter day in number"))

// // switch(day){
// //     case 1 : alert("sunday") ;  break;
// //     case 2 : alert("monday") ;  break;
// //     case 3 : alert("tueday") ;  break;
// //     case 4 : alert("wedday") ;  break;
// //     case 5 : alert("thursday") ;  break;
// //     case 6 : alert("friday") ;  break;
// //     case 7 : alert("saturday") ;  break;

// //     default : alert("good day")
// // }


// console.clear();


// // DataStracture (ES6) --> Ecma script 6th edition -- 2015


// // spread operator 


// // array , object 


// // we can take clone and merge the value


// // array spread operator - [...]


// let array1 = [1,2,3,4]
// let array2 = [5,6,7,8]

// let newArray = [...array1,...array2,9,10]

// console.log(newArray);


// // object spread operator - {...}


// let obj1 = {
//     name1 : "ismail",
//     role  : "trainee",
//     salary: 30000
// }

// let obj2 = {
//     name11 : "ismail",
//     role2 : "developer",
//     salary3 : 50000
// }


// let storeInfoInLog = {...obj1,...obj2}

// console.log(storeInfoInLog);


// // Rest operator - (...)

// // function 

// // we can store multiple argument in single parameter

// function AvoidEmptyStorage(a,b,...c){

//     console.log(a+b+c[0]+c[1]);
//     console.log(c);
    
    

// }

// AvoidEmptyStorage(1,2,3,4,5,6,7,8)

// console.clear();


// Destracture


// array 

let arr1 = [1,2,3,4]

let a1 = arr1[0]
let a2 = arr1[1]
let a3 = arr1[2]
let a4 = arr1[3]

console.log(a4 + a1);


// deStracture Array 

let [b1,b2,b3,b4] = arr1

console.log(b1 + b4);


// nested Array 


let nested = [1,2,3,[4,5,[6,7,[8]]]]

let c1 = nested[0]
let c2 = nested[1]
let c3 = nested[2]
let c4 = nested[3][0]
let c5 = nested[3][1]
let c6 = nested[3][2][0]
let c7 = nested[3][2][1]
let c8 = nested[3][2][2][0]

console.log(c2);



let [d1,d2,d3,[d4,d5,[d6,d7,[d8]]]] = nested

console.log(d2);


// object 

let obj = {
    title : "batch 29",
    count : 35,
    description : "march 2"
}


let obj1 = obj.title
let obj2 = obj.count
let obj3 = obj.description

console.log(obj1,obj2,obj3);


// obj destracture 


let { description, title, count } = obj;

console.log(description, title, count);

console.clear();


// Array advance concept

let normalArray = [1,2,3,4,"hello",true,undefined,null,[1,2],{k:1}]

console.log(normalArray);
console.log(normalArray[0]);
console.log(normalArray[normalArray.length-1]);


// homogeneous

// hetrogeneous

// flexible

// array manipulation method :-

// add method - array inside if you add you can add multiple value

// remove method - array inside if you use remove method you can remove only one value.


let example = [1,2,3]

// push()    - array last value we can add

example.push(4,5,6,7,8)

// pop()     - array last value we can remove

example.pop()

// shift()   - array first value we can remove

example.shift()

// unshift() - array first value we can add

example.unshift(0,1)


console.log(example);


// splice(startingIndex,remove count,adding Value)

let newArr = [1,2,3,44,55,66,7,8,9]

newArr.splice(3,3)


console.log(newArr);



// Array merge method 


// concat()

let aa1 = [1,2,3,4]
let aa2 = [5,6,7,8] 


let newArr1 = aa1.concat(aa2)

console.log(newArr1);



//  slice() - startingIndex , EndingIndex + 1


let arr2 = [1,2,3,4000,5000,6000,7,8,9,10]

let sliceVal = arr2.slice(3,6)

console.log(sliceVal);



//  flat()


let nest = [1, 2, 3, [4, 5, [6]]];

let flatVal = nest.flat(Infinity);

console.log(flatVal);





//  fill()

let arr3 = [1,2,3,4] // 1 , "two" , 3 , 4

arr3.fill("two",1,2) // value , si , ei + 1

console.log(arr3);





//  includes() 

let arr4 = [1,2,40,60,11,4]

let includesVal = arr4.includes(20)

console.log(includesVal);


// sort()

let arr5 = [3,5,2,8,0,1,4]

let sortval = arr5.sort()

//  reverse()

console.log(sortval.reverse());

let arr6 = [2,44,55,6000,1,5,9]

let sort1 = arr6.sort()

console.log(sort1); // 4.4 < 5 --> true


//  indexOf()

let arr7 = [1,2,3,4,3,2,1]

let ind = arr7.indexOf(3,3) // value , fromIndex

console.log(ind);



//  lastIndexOf()

let arr8 = [1,2,3,4,5,4,3,2,1]

let last = arr8.lastIndexOf(3,5) // value , fromindex

console.log(last);




console.clear();


// Array higherorder methods

let games = ["kabadi","cricket","chess","carrom"]

// forEach()

let newForEach = games.forEach((currentElement,index,TotalArray)=>{
    return currentElement
   
})

console.log(newForEach);


// map()

let newMap = games.map((c,i,t)=>{
    return c
    
})

console.log(newMap);




// filter()

let employee = [
    {name1 : "a",salary : 100000},
    {name1 : "b",salary : 200000},
    {name1 : "c",salary : 300000},
    {name1 : "d",salary : 400000},
    {name1 : "e",salary : 500000},
    {name1 : "f",salary : 600000},
    {name1 : "g",salary : 700000}
]

let salaryDate = employee.filter((c,i,t)=>{
  return c.salary >= 500000
})

console.log(salaryDate);


// find()

let firstGotSalary = employee.find((c,i,t)=>{
return c.salary < 500000
})

console.log(firstGotSalary);


// reduce

employee = [
  { name1: "a", salary: 100000 },
  { name1: "b", salary: 200000 },
  { name1: "c", salary: 300000 },
  { name1: "d", salary: 400000 },
  { name1: "e", salary: 500000 },
  { name1: "f", salary: 600000 },
  { name1: "g", salary: 700000 },
];

let allSalary = employee.reduce((acc,c,i,t)=>{

    return acc + c.salary

    //     0  + 1  = 1
    //     1  + 2  = 3
    //     3  + 3  = 6
    //     6  + 4  = 10
    //     10 + 5  = 15
    //     15 + 6  = 21
    //     21 + 7  = 28
    // returb 28

  

},0) // 1 // 3 // 6 // 10 // 15 // 21 // 28

console.log(allSalary);



// some() - or 

let arr9 = [10,3,4,5,7]

let someVal = arr9.some((c,i,t)=>{

    return c % 2 == 0 

    // 10 % 2 == 0 true 
    // 3 % 2  == 0 false
    // 4 % 2 == 0 true

    // true || false || true || false || false = true

})

console.log(someVal);



// every() - and

let arr10 = [2,4,6,8]

let everyVal = arr10.every((c,i,t)=>{

    return c % 2 == 0 

})

console.log(everyVal);


// sort()

let arr11 = [232,545,4,6,45,2,56]

let sort11 = arr11.sort((a,b)=>{
  return b-a
})


console.log(sort11);


// convert arr to str

//  toString()

let arr12 = [1,2,3,4]

console.log(arr12.toString());

// join()

console.log(arr12.join("hello"));


















// // 4. date















