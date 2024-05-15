let name = "Abhishek"
let roll = 8

//We are using modern technique to print on console using ` ` symbols
// Any variable can be inserted using ${}
console.log(`Hello there, my name is ${name} and my roll number is ${roll}`);

//Another to declare string
const anotherName = new String('Aarush')

//here anotherName become the string object
// variour string method can be called by this object
// just write anotherName. and see the magic

// Now we can also use key-value pair indexing
console.log(anotherName[0]);    

//let's use some of the methods of String
console.log(anotherName.length);
console.log(anotherName.toUpperCase());
console.log(anotherName.includes("ru"));
//object.substring(starting index, ending_index+1)
console.log(anotherName.substring(1,2));
//when ending_index is not provided then it is considered last index+1
console.log(anotherName.substring(1));

//Here is use of trim() method
let newStringOne = "    Abhishek    "
console.log(newStringOne);
console.log(newStringOne.trim());

// Here is the use of slice() method
newStringOne = newStringOne.trim()
console.log(newStringOne.slice(0,3));
console.log(newStringOne.slice(1,3));
console.log(newStringOne.slice(1));

//Here is the use of replace() method
console.log(newStringOne.replace("shek", " ji"));

//Here is the use of split() method
let myString = "I_am_Smart"
//So here we are using '_' as a saperator
console.log(myString.split('_'));
