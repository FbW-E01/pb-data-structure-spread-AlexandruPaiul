// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 
console.log("Task1, part 1: ") 
let euroCountries =["Austria","Belgium","Bulgaria","Croatia","Estonia"];
let asianCountries = ["Azerbaijan","Afganistan","Brunei","Egipt","Iran"];
// euroCountries.push(asianCountries);
// console.log(euroCountries)
euroCountries.push(...asianCountries);
console.log(euroCountries);
console.log("Task1, part2:");
const number1 = [1,2,3];
const number2 = [5,6,7];
// const number3 = number1.concat(number2);
const number3 =[...number1,...number2]
console.log(number3);


// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
console.log("Task2:")
let animal = ["Cat","Dog","Cow",];
const animalCopy = [...animal]
console.log(animalCopy)

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
console.log("Task3:");
const largestNumber = (n)=>{
    console.log(Math.max(...n))
};
let numbers =[45,98,35,456,356,1259];
largestNumber(numbers);
// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
console.log("Task4;")
const smallestNumber = n => Math.min(...n)
console.log(smallestNumber(numbers));

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.
console.log("Task5:");
const person = {name: "John"};
const job = {role: "Teacher"};
const personCopy = {...person};
console.log(personCopy);
const employee ={...person,...job};
console.log(employee);
employee.name = "Tom"
console.log(employee)


// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!