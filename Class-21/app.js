//! prototypes

function user(userName, age, skills) {
  this.username = userName;

  this.age = age;

  this.skills = skills;
}
const User1 = new user("Ali", 20, "developer");
const User2 = new user("sara", 19, "cooker");

user.prototype.increment = function () {
  this.age++;
  console.log(this.age);
};
user.prototype.printMe = function () {
  console.log(`Your age is ${this.age}`);
};

User2.printMe();
User2.increment();
// --------------------------------------------------------------------------------------------------------------

let myHeors = ["Ironman", "Spiderman", "Thor"];

let heroPower = {
  ironman: "Armor",
  spiderman: "Web",
  thor: "Hammer",
  getHeroPower: function () {
    console.log(
      `Ironman power is ${this.ironman} , Thor power is ${this.thor} & Spidy power is ${this.spiderman}.`
    );
  },
};
heroPower.getHeroPower();
Object.prototype.use = function () {
  console.log(` I am ${this.userName || "user"} from prototype`);
};
heroPower.use();
myHeors.use();
Array.prototype.details = function () {
  console.log(`I am details from Array's prototype`);
};
// myHeors.details();
// heroPower.details(); // this will be cheaked that all the elemnts like array , functions $ string etc end on Object!!


// inheritence 

  const User = {
    userName : 'Ali',
    age : 20
  } 

const Teacher = {
  makeVedio : true
}
const TeacherSupport = {
  isAvailible : false
}
const TASupport = {
  makeAssingment : 'JS Assingment',
  fullTime : true,
  __Proto__ : TeacherSupport
}

Teacher.__Proto__ = User

// Modern Syntax 
Object.setPrototypeOf(TeacherSupport , Teacher)

const UserName = 'Shayan    '
String.prototype.truelength = function (){
  // console.log(this);
  console.log(`True length is ${this.trim().length}`);
  
  
} 
UserName.truelength()

'  ALij    '.truelength()
'waseem   '.truelength()