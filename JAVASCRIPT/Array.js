// forEach , map ,filter ,some ,every , reduce all are higher order functions and take call back as input
// let arr = [1,2,3,4,5];

// arr.forEach((elem)=>{
//     console.log(elem)
// });
// let arr = [{
//     name : "Ankan",
//     marks : 95
// },{
//     name : "Aman",
//     marks : 92
// },{
//     name : "Anu",
//     marks : 96
// }];

// arr.forEach((elem)=>{
//     console.log(`Name is ${elem.name} and marks is ${elem.marks}`);
// })
// let arr = [1,2,3,4,5];

// let double = arr.map((elem)=>{
//     return elem *2;
// })
// console.log(double)

// let number = [10,20,30,40,50,3];

// let ans = number.reduce((acc,elem)=>{
//     return elem/2 + acc;
// })
// console.log(ans)

// let max = number.reduce((res,elem)=>{
//     if(elem > res ){
//         return elem;
//     }
//     else {
//         return res;
//     }
// })
// console.log(max)

// let ans = number.every((el)=>{
//     return el % 10 ==0;
// })
// console.log(ans)

// function max(...args){
//     let ans = args.reduce((max,el)=>{
//         if(el > max){
//             return el;
//         }
//         else {
//             return max;
//         }
//     })
//     return ans;
// }

// let ans = max(1,4,290,24,12,7,89,10,76);
// console.log(ans);

// let names  = ["tony","bruce" , "peter","Ankan"];
// let [winner,runnersUp,third] = names;
// console.log(winner,runnersUp,third)
// const student = {
//     name :"Ankan",
//     age:14,
//     class:9,
//     subjects:["Hindi","Bengali","Geography"],
//     username:"Ankan@12",
//     password :"abcd",
// }

// let {username,password} = student;
// console.log(username,password)

// let arr = [1,2,3,4,5,6];
// let square = arr.map((el)=>el*el);
// let sum = arr.reduce((sum,el)=>sum+el);
// console.log(sum,square)
// let newArray = arr.map((el)=>el+5)
// console.log(newArray)
// function fun(obj1,obj2){
//     let obj ={...obj1,...obj2};
//     return obj;
// }
// console.log(fun(student,{city:"Kolkata",cuntry:""}))