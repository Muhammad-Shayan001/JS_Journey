// ==========CALCULATOR==========
function CALCULATOR(num1 , oprator , num2){
    if(oprator === "*"){
        return num1 * num2
    }else if( oprator === "/"){
        return num1 / num2
    }else if( oprator === "+"){
        return num1 + num2
    }else if( oprator === "-"){
        return num1 - num2
    }else{return "Invalid Operator"}

    
}
let number1 = prompt("Enter Number");
let number2 = prompt("Enter Operator");
let number3 =prompt("Enter Number");

let result = CALCULATOR(  number1, number2 , number3)
alert("Result : " + result )



 