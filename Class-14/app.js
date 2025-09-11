// const arr = ["Ali" , "Sara" , "afham" , "arham" , "Ayesha", "Aliya", "Areeba", "Aamir", "Awais", "Asad"];
// arr.forEach((items) => console.log(items.toUpperCase()));

// const mixed = [true, 42, "Hello", null, "World", 3.14 , 0 , ["a"] ];
// mixed.forEach((items) => {
//     // console.log(typeof items);
//     if (typeof items === "string") {

//         console.log(`${items.toUpperCase(1)} is a type of String` );
//     }else if (typeof items === "number") {
//         console.log(`${items} is a type of Number`);
//     } else if (typeof items === "boolean") {
//         console.log(`${items} is a type of Boolean`);
//     } else if (items === null) {
//         console.log(`${items} is a type of Null`);
//     }else if (typeof items === "object"){
//         console.log(`${items} is a type of Object`);

//     }
//     else {
//         console.log(`Unknown type`);
//     }
// })

const countries = {
  Pakistan: ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"],
  India: ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"],
  USA: ["New York", "Los Angeles", "Chicago", "Houston", "San Francisco"],
  UK: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
};
const countriesName = [countries];
// console.log(countriesName);
countriesName.forEach(({ Pakistan } = items) => {
 return (
    Pakistan.forEach((city) => {
      console.log(`${city} is the city in Pakistan`);
    })
  );
});
console.log("--------------------------------------------------------------->");

countriesName.forEach(({ India } = items) => {
 return (
    India.forEach((city) => {
      console.log(`${city} is the city in India`);
    })
  );
});

console.log("--------------------------------------------------------------->");

countriesName.forEach(({ USA } = items) => {
 return (
    USA.forEach((city) => {
      console.log(`${city} is the city in USA`);
    })
  );
});

console.log("--------------------------------------------------------------->");

countriesName.forEach(({ UK } = items) => {
 return (
    UK.forEach((city) => {
      console.log(`${city} is the city in UK`);
    })
  );
});
