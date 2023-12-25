let str = "     Ankan Das         ";
let newStr= str.trim();   //return new string
console.log(newStr);
console.log("In upper case ",newStr.toUpperCase());
console.log("In lower case ",newStr.toLowerCase());
console.log(newStr.indexOf("Ankan"));
console.log(newStr.indexOf("NULL"));   //if not found gives -1
// console.log("Empty Array index 1 :",emptyArray)
let emptyArray = [1,2];
// emptyArray.push(1);
// console.log(emptyArray, typeof(emptyArray))
emptyArray[10]="ANkan";
console.log(emptyArray);
