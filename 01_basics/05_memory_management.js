//Two type memory allocated
// Stack and Heap

// Stack 
// It is allocated to primitive type variables, such as Integer, String, etc

let bestFriendName = "Prateek" //will be stored in stack
let anotherBestFriendName = bestFriendName 
// Here only a copy of values "Prateek" is given to anotherBestFriendName

console.log(bestFriendName);
console.log(anotherBestFriendName);

//changing the value in new variable
anotherBestFriendName = "Prateek Pandey"

console.log(bestFriendName);
console.log(anotherBestFriendName);

//Heap Memory Allocation
// This type of memory is allocated to non-primitive type variable
// And when assigned to another variable, reference is given

let student = {
    name: "Abhishek",
    id : "08",
}

let anotherStudent = student

console.table(student)
console.table(anotherStudent)

anotherStudent.name="Prateek"
anotherStudent.id="077"

console.table(student)
console.table(anotherStudent)

//You can see the value has been modified for student too when
// we have modified anotherStudent