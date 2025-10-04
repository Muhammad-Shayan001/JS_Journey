class User {
    constructor(userName , email , passward){

        this.userName = userName;
        this.email = email;
        this.passward = passward;
    }
    onUpperCase(){
        return`${this.userName.toUpperCase()}`
    }

    encryptPassward(){
        
        
        return`${this.passward}andlh3`
    }

}
const User1 = new User('Shayan' , "shayan@gmail.com" , '12873')
console.log(User1.encryptPassward());
console.log(User1.onUpperCase());

