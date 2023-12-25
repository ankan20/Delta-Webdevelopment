// const roleDice =()=>{
//     let randNum = Math.floor(Math.random()*6)+1;
//     return randNum;
// }
// let diceNum = roleDice();
// console.log(diceNum)
// diceNum = roleDice();
// console.log(diceNum)

// function avarage (num1,num2,num3){
//     return (num1+num2+num3)/3;
// }
// console.log(avarage(1,2,3));
// console.log(avarage(10,20,30));

// function concatString(arr){
//     let ans ="";
//     for(let i =0;i<arr.length;i++){
//         ans+=arr[i];
//     }
//     return ans;
// }

// let arr =["My"," ","name ","is ","Ankan ","Das"];
// let ans = concatString(arr);
// console.log(ans);
// function arrElem(arr,num){
//     let ans=[];
//     arr.forEach(element => {
//        if(element > num ){
//         ans.push(element);
//        }
//     });
//     return ans;
// }
// let arr =[1,5,29,29,10,20,25,11,23,100];
// let ans = arrElem(arr,10);
// console.log(`Original array is ${arr} and output array is \n${ans}`);

// let str="abcdabcdefgggh";

// function uniqueChar(str){
//     let ans ="";
//     for(let i =0;i<str.length;i++){
//         let charAt = str[i];
//         if(ans.indexOf(charAt) == -1){
//             ans +=charAt;
//         }
//     }
//     return ans;
// }
// let ans = uniqueChar(str);
// console.log("Initial string is ",str);
// console.log("New string is ",ans);

// let country=["Australia","Germany","UnitedStatesofAmerica"];

// function longestString (country){
//     let ans="";
//     let count =0;
//     for(let i =0;i<country.length;i++){
//         if(count <country[i].length){
//             count=country[i].length;
//             ans = country[i];
//         }

//     }
//     return ans;
// }

// let ans = longestString(country);
// console.log(ans);

// let str = "bbbbbbbbnnmmm";

// function countVowels(str){
//     let vowel=['a','e','i','o','u','A','E','I','O','U'];
//     let count=0;
//     for(let i =0;i<str.length;i++){
//         for(let j =0;j<vowel.length;j++){
//             if(str[i]===vowel[j]){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// let ans = countVowels(str);
// console.log(ans);

// function randomNumber(start,end){
//     let randNum = Math.floor(Math.random()*(end-start))+start;
//     return randNum;
// }
// let ans = randomNumber(10,15);
// console.log(ans)

// This keyword
// let object = {
//     name:"Ankan",
//     age:23,
//     math:95,
//     eng:78,
//     phy:90,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy) /3
//         console.log("Avarage is ",avg);
//         console.log(this);
//     }
// }
// //object.getAvg()
// let func = (object)=>{
//     console.log(this)
// }
// func(object)

// let func = (n) => ( n * n);
// console.log(func(4))

// console.log("Hello");
// setTimeout(()=>{
//     console.log("It is in setTimeout");
// },4000);
// console.log("After setTimeout");
// let id = setInterval(() => {
//     console.log("Ankan");
// }, 2000);
// console.log(id)

// clearInterval(id)
// let squre = (n) => n * n;
// console.log(squre(4));

// let arrayAverage = (arr) =>{
//     let sum =0;
//     for(let i =0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return (sum/arr.length);
// }
// let arr = [10,20,30,40,50];
// console.log(arrayAverage(arr));

// let isEven = (n)=>(n%2===0)

// console.log(isEven(10))

// const object = {
//     message : 'Hello, World',
//     logMessage(){
//         console.log(this);
//     }
// };
// // setTimeout(object.logMessage,1000)
// object.logMessage()

let lengthh = 4;
function callback (){
    console.log(this.lengthh);
}
const object = {
    lengthh : 5,
    method(callback){
        callback();
        
    },
};
object.method(callback);
