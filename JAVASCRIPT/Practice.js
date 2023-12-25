// let arr = [1,2,3,2,2,2,4,5,6,2,3,2];
// let num =2;
// console.log("Array is : ",arr,"Num is ",num);
// for (let i =0;i<arr.length;i++){
//     if(arr[i]===num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr)
let number1 = 287152;
let count =0;
let num = number1;
while(num >0){
    num=Math.floor(num/10);
    count++;
}
console.log(count)