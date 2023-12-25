// let size ='XL';
// if(size=== 'XL'){
//     console.log("Price of popcorn is Rs. 250");
// }
// else if (size==='L'){
//     console.log("Price of popcorn is Rs. 200");
// }
// else if(size==='M'){
//     console.log("Price of popcorn is Rs. 100");
// }
// else if (size==='S'){
//     console.log("Price of popcorn is Rs. 50");
// }
// else {
//     console.log("Choose a proper available size for your popcorn !");
// }

//let arr = ["Audi","bmw","xuv"];
// arr.push("Toyota");
// console.log(arr)
// console.log(arr.includes("audi"));
//arr.splice(0,1,"Ankan");   //start,deleteCount,item0,item1,..
//console.log(arr)

// let start = ['january','july','march','august'];
// console.log(`Before splice ${start}`);
// start.splice(0,2,'july','june');
// console.log(`After splice ${start}`);

// console.log(ans2)

// var ans2=102;

// for(let i =2;i<=10;i+=2){
//     console.log(i);
// }

// let favMovie = "Avtar";
// let i =0;
// while(i<5){
//     let userChoice = prompt("Guess my favourit movie : ");
//     if(userChoice === favMovie){
//         alert("you Guess it right");
//         break;
//     }
//     else {
//         alert("Try again !");
//         i++;
//     }
// }
// let marvel = [["Abc","aBc","abC"],["ABCD","ABCD1","ABCD2"]];
// for(let i =0 ;i<marvel.length;i++){
//     console.log(i);
//     for(let j =0;j< marvel[i].length;j++){
//         console.log(marvel[i][j]);
//     }
// }
// for (let hero of marvel){
//     console.log(hero);
//     for(let heros of hero){
//         console.log(heros)
//     }
// }
// const post ={
//     userName : "@Ankandas",
//     content:"This is my first post",
//     likes:10,
//     tags:["Js","coder","twitter","webDevelopment"],
//     null:null,
// };
// console.log(post[null])

const classDetails = [
    {
        name : "Ankan",
        grade : "A+",
        roll : 13
    },
    {
        name : "Aman",
        grade :"A",
        roll : 19
    },
    {
        name : "Sradha",
        grade : "AA",
        roll :12
    }
];

console.log(classDetails)
for(let obj of classDetails){
    console.log(obj.name ,obj.grade,obj.roll)

}