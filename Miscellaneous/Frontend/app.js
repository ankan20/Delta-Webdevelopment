// const std1 ={
//     name:"adam",
//     age:25,
//     marks:78,
//     getMarks :function (){
//         return this.marks;
//     }
// }

// const std2 ={
//     name:"serif",
//     age:15,
//     marks:88,
//     getMarks :function (){
//         return this.marks;
//     }
// }

// const std3 ={
//     name:"jupiter",
//     age:22,
//     marks:80,
//     getMarks :function (){
//         return this.marks;
//     }
// }

// let arr=[1,2,3,4];

// arr.sayHello =()=>{
//     console.log("Hello");
// }

//CONSTRUCTARE FYNCTION - DOES'NT RETURN ANY THING
// function Person(name,age){
//     // const person ={
//     //     name :name,
//     //     age :age,
//     //     talk(){
//     //         console.log(`My name is ${name}`);
//     //     }
//     // }
//     // return person;
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk=()=>{
//     console.log(`My name is ${this.name}`);
// }
// let p1=new Person("Ankan",20);
// let p2 =new  Person("Adam",22);
// p1.talk()

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi ,I am ${this.name}`);
    }
}



class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
    
}
let stu1= new Student("Ankan",20,89);
class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
   
}





