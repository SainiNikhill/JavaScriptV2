// Palindrome check

let str = "hello";

let arr = str.split("");
let reverse = arr.reverse();
let reversedStr = reverse.join("")
if(str === reversedStr){
    console.log("palindrome");

}else {
    console.log("not a palindrome");
}