//main.js
//#5, FunctionExpressions

//normal function statement
function sayHi(){
    console.log("Hi");
}

sayHi();

//Function Expression
var sayBye = function(){
    console.log("Bye");
}//end sayBye

sayBye();

//call function
function callFunction(fn){
    fn();
}

callFunction(sayBye);



