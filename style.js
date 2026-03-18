
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
        
//     }
// }

// console.clear();


// // while loop


// // intialization 

// // while(condition){
// //     // statement 

// //     iteration
// // }


// // let intial = Number(prompt("enter number :- "))

// // while(intial){
// //     console.log(intial);

// //     intial--
    
// // }



// // do while loop 

// // intialization 

// // do {
// //     // statement 
// //     iteration
// // }
// // while(condition)


// let in1 = 10

// do{
//     console.log(in1);
//     in1--
    
// }
// while(in1>=30)





// // for of loop - array ,string , function

// let str = "javascript"
// let array = ["apple","orange","banana"]

// for(let a of str){

//     console.log(a);
    
// }


// for(let b of array){
//     console.log(b);
    
// }



// // for in loop - object

// let object = {
//     name1 : "ben",
//     role : "developer",
//     salary : 100000
// }

// for(let a in object){
//     console.log(object[a]);
    
// }

// console.clear();


// // 3. function 


// // block of code

// // reusable

// // Easy to readable , clean

// // Repeation code avoid 

// // when you call that time only render


// // syntex 


// // function one(parameter){
// //     // statement
// //     // return
// //     // yeild
// // }


// // one(arguments)


// function one(){
//     console.log("hello");

//     console.log("hi");

//     for(let i = 0 ; i<=6 ; i++){
//         console.log(i)
//     }

//     if(1){
//         console.log("true");
        
//     }
    
    
// }

// one()




// function two(a){
//     console.log(a);
    
// }

// two("welcome")



// function form(name,department,number,stay){

//     console.log("name :-",name );
//     console.log("department :-",department );
//     console.log("Number :-",number );
//     console.log("stay :-",stay );
    
// }

// form("kamal","ece",8878987663,"dayscholar")
// form("praveen","cse",75765756465,"hostel")


// function additional(name){

//     return name

// }

// let returnVal = additional("ben")

// console.log(returnVal);



// function extra(a){

//     console.log("extra :- ",returnVal);

//     console.log(a);
    
    
// }

// extra(returnVal);



// let obj = {
//     name : "john",
//     role : "developer"
// }


// function callOut(){

//     console.log(obj.name);
//     console.log(obj.role);
    
    
// }

// callOut()

// console.clear();




// // scope :- 

// function scopeCheck(){
//     if(true){
//         var z1 = "global scope"
//         let z2 = "block scope"
//         const z3 = "block scope const"
//         console.log(z2);
//         console.log(z3);
//     }
//     console.log(z1);
    

    
// }

// scopeCheck()


// // hoisting

// console.log(y1);
// var y1 = "global scope var"



// let y2 = "block scope let"
// console.log(y2);



// const y3 = "block scope const"
// console.log(y3);

// // function Types :- 


// // 1. named function

// named("named function")
// function named(parameter){

//     console.log(parameter);
    
// }


// // 2. annonymous function

// var annonymous = function(parameter){
    
//     console.log(parameter);
    
// }
// annonymous("annoymous function")


// // 3. arrow function

// var arrow = (parameter)=>{
    
//     console.log(parameter)
// }

// arrow("arrow function")


// // how to set default parameter

// function form1(name,department,disability = "no"){


//     console.log("name :- ", name);
//     console.log("department :- ",department);
//     console.log("isDisability :- ",disability);
    
    
    
// }

// form1("john","ece","yes")
// form1("ben","cse")


// // IIFE - self invoke function

// (function(parameter){

//     statement 
//     yield 
//     return

// })("argument")


// (function(product,discount){
//     alert(`now black day sale ongoing , ${product} now this product ongoing ${discount} % discounts have now....`)
// })("tShirt",70)



// Higherorder Function and Callback function

function function1(){
    console.log("higherorder function");
    
}

function function2(){
    console.log("callback function");
    
}

function1(function2());







// example

function add(callback,a,b){ // callback = sub , a = 20 , b = 40
    console.log(a+b); // 20 + 40 = 60

    callback(20,20)  // sub(20,20)
    
    
}

function sub(num1,num2){ // n1 = 20 , n2 = 20
    console.log(num1-num2);// 20-20 = 0
    
}


add(sub,20,40) 



// currying format 


function d1(a){
    return function (b){
        return function (c){
            console.log(a + b + c);
            
        }
    }
}

d1(1)(2)(3)


// generator function 


function* cashback(){
    yield "you will get 20rs"
    yield "you will get 6rs"
    yield "try again better luck next time"
    yield "congradulation you will get 100rs"
}

let collectMoney = cashback()

// console.log(collectMoney.next().value);
// console.log(collectMoney.next().value);
// console.log(collectMoney.next().value);
// console.log(collectMoney.next().value);

// for of 

for(let a of collectMoney){

    console.log(a);
    
}



// switch 


// // switch(condition){
// //     case value : statement :break
// //     case value : statement :break
// //     case value : statement :break
// //     case value : statement :break
// // }

// let day = Number(prompt("enter day in number"))

// switch(day){
//     case 1 : alert("sunday") ;  break;
//     case 2 : alert("monday") ;  break;
//     case 3 : alert("tueday") ;  break;
//     case 4 : alert("wedday") ;  break;
//     case 5 : alert("thursday") ;  break;
//     case 6 : alert("friday") ;  break;
//     case 7 : alert("saturday") ;  break;

//     default : alert("good day")
// }


console.clear();


// DataStracture (ES6) --> Ecma script 6th edition -- 2015


// spread operator 


// array , object 


// we can take clone and merge the value


// array spread operator - [...]


let array1 = [1,2,3,4]
let array2 = [5,6,7,8]

let newArray = [...array1,...array2,9,10]

console.log(newArray);


// object spread operator - {...}


let obj1 = {
    name1 : "ismail",
    role  : "trainee",
    salary: 30000
}

let obj2 = {
    name11 : "ismail",
    role2 : "developer",
    salary3 : 50000
}


let storeInfoInLog = {...obj1,...obj2}

console.log(storeInfoInLog);


// Rest operator - (...)

// function 

// we can store multiple argument in single parameter

function AvoidEmptyStorage(a,b,...c){

    console.log(a+b+c[0]+c[1]);
    console.log(c);
    
    

}

AvoidEmptyStorage(1,2,3,4,5,6,7,8)









// // 4. date















