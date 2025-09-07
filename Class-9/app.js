// =============IF ELSE================
let a = 10;
let b = 10;

if (a === b) {
    console.log("True")
} else {
    console.log("false")
}
b = 20;
if (a === b) {
    console.log("True")
} else {
    console.log("false")
}

// ============================================================
// let fName = prompt("Enter Your Name");

// console.log(fName);

let age = prompt("Enter Your Age");
if( age >= 18){
    console.log(
        "You are eligible for voting"
    )
    alert("You Are Eligible for Voting")
}else{
    console.log("you are not eligible for voting");
    alert("You Are not Eligible for Voting");
}

let fee = prompt("Paid or Un Paid");
if( fee == "Paid"){
    console.log("Enter to class room");

}else{
    console.log("Get Out");
}

