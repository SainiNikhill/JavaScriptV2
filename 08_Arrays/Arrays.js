// Arrays are ordered list of values under a single variable name.

let array  = [10,20,30,40];

console.log(array);
// Array can store numbers ,strings,boolean,objects,other arrays,mixed types

let mixedArr = [10,{name:"nikhil"}, true, "lasan", [1,2,3]];
console.log(mixedArr);


// ********************************Creating aaray 
//  1. using square brackets []
let fruits = ["apple","banana","grapes"];
console.log(fruits);

// 2. using Array constructor
let veggies = new Array("carrot","ginger","onion","spinach");
console.log(veggies);


// *****************************Array methods 
let arr =  [1,2,3,4,5,6];

// 1. push()= add at the end
console.log("orignal array" + arr)
arr.push(7);
console.log("after push method" + arr);
console.log("\n");


// 2.pop()= remove from the end
console.log("orignal array" + arr);
arr.pop();
console.log("after pop method" + arr);
console.log("\n");


// 3.unshift() = add at the beginning
console.log("orignal array" + arr);
arr.unshift(0);
console.log(arr);
console.log("\n");


//  4.shift()= remove from beginning
console.log("orignal array" + arr);
arr.shift();
console.log("after shift method" + arr);
console.log("\n");

// 5. includes() = check if value is exists
console.log(arr.includes(3));
console.log("\n");


// 6. indexOf() = get index of value
console.log(arr.indexOf(4));
console.log("\n");


// 7. slice() = get a portion of aaray 
console.log("orignal array" + arr);
console.log(arr.slice(2,5)); // from index 2 to index 4
console.log(arr); 
console.log("\n");
 // splice doesnt modify the orignal  array 


// 8. splice() = add/remove elements(modifies orignal aaray)
console.log("orignal array" + arr);
arr.splice(2,2,20,30); // at index 2 remove 2 elememts and add 20,30
console.log(arr);
console.log("\n");




// 9. length = get the number of elememts in aaray
console.log(arr.length)


//  ********************** Looping through the arrays 

// for loop 
for (let i =0;i<arr.length;i++){
    console.log(arr[i])
}

// for..of loop
for (let value of arr){
    console.log(value)
}

// for each method
arr.forEach((value,index) =>{
    console.log(`index ${index}: value ${value}`)
})