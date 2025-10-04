//? Object literal
// its a basic object

const user0 = {
    userName : "ali",
    loginCount : 0,
    signedIn : true,
    getUserDetails: function(){
        console.log("Got user details")
    }
}
// console.log(user0.userName);
// console.log(user0.getUserDetails());

// ===========================================================================================
//! uses of this 
// this keyword use to ask target on whole block like 

const user1 = {
    userName : "ali",
    loginCount : 0,
    signedIn : true,
    getUserDetails: function(){
        console.log(`user name : ${userName}`)
    }
}

// console.log(user1.getUserDetails());


// on above error comes therefor use this key  
// ----------------------------------------------------------------------------------------------


const user2 = {
    userName : "ali",
    loginCount : 0,
    signedIn : true,
    getUserDetails: function(){
console.log(`user name : ${this.userName}`);
    }
}
// console.log(user2.getUserDetails())

// =================================================================================

// ? Constructor Function

// const date = new Date()
// const promise = new Promise()

function User(userName , loginCount , isLoggedIn) {
    this.userName = userName,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this

    
}
const User1 = User("ali" , 1 , true)
const User2 = User("umar" , 2 , false)
console.log(User1);
console.log(User2);
// its overwrite User2 on User1 therefore add new keyword to create new instance like

const User3 = new User("ali" , 1 , true)
const User4 = new User("umar" , 2 , false)


console.log(User3);
console.log(User4);
// ================================================================