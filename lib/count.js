//count.js
//#6, modules & require

let counter = function(arry){
    return `There are ${arry.length} elements.`
};//end counter

let adder   = function(a,b){
    return `The sum of the 2 numbers is :${a+b}`;
}//end adder

const pi = 3.1416;

module.exports.counter  = counter;
module.exports.adder    = adder;
module.exports.pi       = pi;



















