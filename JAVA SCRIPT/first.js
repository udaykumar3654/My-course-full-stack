// console type//
// console.log
//let a = 5;
//let b = 10;
//console.log(a + b); // Output: 15

// console.error
// console.error("This is an error message written by me");

// console.warn
// console.warn("This is a warning message written by me");

// window.alert
// window.alert("This is an alert message written by me");

// variable = conatianner of  data
// let =  block scope use ,only update
// let b = 20;
// b = 30; // update
// console.log(b); // Output: 30

// var= global scope use , redeclare, update.
// var a= 10;
// a = 50 // redeclare
// console.log(a); // Output: 50

// const = block scope use , no redeclare, no update.
// const c = 50;
// const c = 60; // redeclare error
// console.log(c); // Output: 50


// block scope 
// global scope 
if (true) {
    let x = 10; // block scope
    var y = 20; // global scope
    console.log(x); // Output: 10
}
console.log(y); // Output: 20
// console.log(x); // Error
