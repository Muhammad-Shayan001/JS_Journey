function setUserName (userName){
    this.userName = userName
    console.log('called');
    
}
function createUser(userName , email , passward){
    setUserName.call(this ,userName)
    this.email = email
    this.passward = passward
}
const user = new createUser('shayan' , 'shayan@gmail.com' ,12345)
console.log(user);
