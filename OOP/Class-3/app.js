class User {
    constructor(email , passward){

        this.email = email
        this.passward = passward
    }
    get passward(){
       return this._passward
    }
    // If set getter so also set setter its required!
    set passward(value){
        // this.passward = passward

        //? This is not correct way to set the getter and setter 
        //! so
        this._passward = `${value}kjsh232@!~`
    }
    set email (email){
        this._email = email

    }
    get email () {
        return this._email.toUpperCase()
    }
}

const ali = new User("a@gmail.com" , 9162)
console.log(ali.passward);
