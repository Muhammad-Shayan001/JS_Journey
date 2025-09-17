///? SET TIME OUT


// console.log("Start");
// setTimeout(() => {
//     console.log("Inside setTimeout");

// }, 1000)
//! After 1sec the message will be printed

const arr = ['Pakistan' , 'india' , 'Bangladesh' , 'Iran' , 'phalastine']

console.log( 'outside from setTimeout' ,arr)
setTimeout(()=>{
    console.log('inside setTimeout' , arr);
}, 0)


console.log("End from outside");

//! Even though we have set 0 sec still it will be printed after the synchronous code is executed

//? because setTimeout is an asynchronous function and it will be executed after the synchronous code is executed

//? through Event Loop

