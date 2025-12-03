// ==============================Else if===================
let age = prompt("Enter your age")
let gender = prompt("Entre your Gender" , "Male / Female").toLowerCase()


if(age <= 7 && gender == "male" ){
    alert("HELLO KID");
    


}else if(age <= 18 && gender =="male" ){
    alert("HELLO BOY");


}else if(age < 40 && gender == "male" ){
    alert("HELLO GUY");

}else if(age >=40 && gender == "male" ){
    alert("HELLO UNCLE")

}else if(age <= 7 && gender == "female" ){
    alert("HELLO KID");


}else if(age <= 18 && gender == "female" ){
    alert("HELLO GIRL");


}else if(age < 40  && gender == "female" ){
    alert("HELLO LADY");

}else if(age >=40 && gender == "female" ){
    alert("HELLO AUNTY")
}else{
    alert("This Is Not Valid")
}
