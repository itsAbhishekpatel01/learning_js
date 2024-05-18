"use strict"; //treat all js code as newer version

// alert(3+2) we are using nodejs, not browser

/*
number => 2 to the power 53
bigInt
string => ""
boolean => true/false
null => stand alone value
undefined => when variable is not assigned when declared
*/

let num = 2
let name = "Abhishek"
let percentage = 2.3
let isPassed = true
let temperature = null
let random

console.table([num,name,percentage,isPassed,temperature,random])

console.log(typeof "Abhishek") //string
console.log(typeof undefined) //undefined
console.log(typeof null) //object

//Java is a dynamically typed language

//Data types
//Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol
// BigInt

//how to represent BigInt
//let bigNumber = 135034495732984120n


//how to represent Symbol
let id = Symbol('123')
let secondId = Symbol('123')
console.log(id===secondId); //false


//Reference types
// Arrays, Objects, Functions

const arr = ["Hello ", "I am " , 22];



