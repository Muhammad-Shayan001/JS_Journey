function setUserName (userName){
    this.userName = userName
    console.log('called');
    
}
function createUser(userName , email , passward){
    setUserName.call(this ,userName)
    this.email = email
    this.passward = passward
}
const user = new createUser('Shayan' , 'shayan@gmail.com' ,12345)
const user0 = new createUser('Ali' , 'ali@gmail.com' ,1234523)
console.log(user);
console.log(user0)
