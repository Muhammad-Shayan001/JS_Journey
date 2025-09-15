//? Introducing Dates in JavaScript

const date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toJSON());
console.log(date.toISOString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toUTCString());


// --------------------------------------------------------------------------------
console.log(date);
console.log(date.getDate()); //! for current date
console.log(date.getHours()); //! for current hour
console.log(date.getDay()); //! for current day
console.log(date.getFullYear()); //! for current year
console.log(date.getTime()); //! for current time
console.log(date.getTimezoneOffset()); //! for current time zone


// ---------------------------------------------------------------------


const newdate = new Date(2000 , 2 , 20);

console.log(newdate.getDate());
console.log(newdate.getMonth());
console.log(newdate.toLocaleDateString());

const mounts = ['jan' , 'feb' , 'march' , 'april' , 'may' , 'june' , 'july' , 'august' , 'sep' , 'oct' , 'nov' , 'dec' ]

console.log(mounts[newdate.getMonth()])



