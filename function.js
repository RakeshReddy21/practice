for(i=1;i<=10;i++){
    x=i**2;
    console.log(x);
}

console.log("Sum of Number from 1 to 20 which are divisible by 3 ");


let sum=0;
for(i=1;i<=20;i++){
    if(i%3==0){
        sum=sum+i
        // console.log(sum);
    } 
}
console.log(sum);

console.log("Cube of the each number from 1 to 15 ");

for(i=1;i<=15;i++){
    x=i**3;
    console.log(x);
}

console.log("The numbers from 10 to 1 in reverse order");

let a=10;
do{
    console.log(a);
    a--;
}while(a>0)

console.log("The product of all numbers from 1 to 12");

let y=1;
let product=1;
do{
    // console.log(x);
    y++;
    product=product*y;
}while(y<12)
    console.log(product);

console.log("The numbers from 20 to 1 in reverse order returning alternate number");

let z=20;
do{
    console.log(z);
    z-=2;
}while(z>=1)
    
console.log("The numbers from 1 to 20 but skipping the numbers that divisible by 5");


let f=0;
// sum=0;
while(f<20){
    // console.log(f);
    f++;
    if(f%5!=0){
        console.log(f);
    }
}

console.log("The summ of all numbers from 1 to 30 that divisible by 4");

let p=1;
sum=0;
while(p<30){
    // console.log(p);
    p++;
    if(p%4==0){
        sum=sum+p;
    }
}
console.log(sum);

console.log("The numbers from 50 to 1 but returing only the numbers that divisible by 3");

let c=50;
while(c>1){
    // console.log(c);
    --c;
    if(c%3==0){
        console.log(c);
    }
}

// Functions

// var x=function(){
//     console.log("welcome")
//     return "hello";
// }
// console.log(x())

// const x=function(){

// }
// // //arrow function
// // const x=(x,y) => {let sum = x+y; console.log(sum)};

// // x(4,5);
// // x(5,60);

// const z=(x,y)=x => {console.log(x+y)};
// x(3,4)

// function sample2(x,y,z=3){
//     console.log(x,y,z);
// }
// sample2(4,5)

// function billing(item1, item2, gst=5){
//     let total=item1+item2;
//     let tax=((total/100)*gst);
//     let amt=total+tax;
//     console.log(amt);
// }
// billing(30,40)

// function fizz(x, y){
//     for(i=x;i<=y;i++){
//         if(i%2==0 && i%3==0){
//             console.log(i,"fizzbuzz");
//         }
//         else if(i%2==0){
//             console.log(i, "fizz");
//         }else if(i%3==0){
//             console.log(i,"buzz");
//         }
//         // console.log(i);
//     }
// }
// fizz(20,40)