// var x=5;
// var y=6;
// var z=10;
// console.log(x,y,z); //accessible outside of block or function

// {
//     console.log(x,y,z); //accessible inside of block
// }

// function demo(){
//     z=25;
//     console.log(x,y,z); //accessible inside of function.
// }
// demo()

// local declartion

// {
//     var x=5;
//     console.log(x)
// }

// console.log(x)

// var is having global scope
// let is not having global scope
//const is not having global scope, it has block scope


// function demo(){
//     var x=20;
//     console.log(x);
// }
// console.log(x); 
// demo()

// // in function var is not having global scope in function same for let and const

// // all var, let and const will have function scope

//         gs      bs      fs
// var     yes     no      yes
// let     no      yes     yes
// const   no      yes     yes


let sum=0;
function loops(x,y){
    for (let i = x; i < y; i++) {
        if(i%4==0){
            sum=sum+i
        }
    }
    console.log(sum);
}
loops(40,100);


function place(x){
    let fav_des = x;
    switch(fav_des){
        case "goa":console.log("my fav place is goa");
        break;
        case "banglore": console.log("my fav city is banglore");
        break;
        case "chennai": console.log("my fav place is chennai");
        break;
        case "hometown":console.log("my fav place is hometown");
        break
    }
}
place("goa")
place("hometown")

console.log("using ananyumous function");


let e=1;
let product=1;
var x=function loop(a){
    do{
        e++;
        product=product*e;
    }
    while(e<a);
    
    console.log(product);
    return ""
}
x(4);
let s=1;
// let q=0;

console.log("using arrow function");


const z=(o,l) => {for (s = o; s <= l; s++) {
    u = s ** 3;
    console.log(u);
  }};
z(1,5);