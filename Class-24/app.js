// console.log(Math.PI)
const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')
// console.log(descriptor);

const user = {
    name : "Shayan",
    age : 18,
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(user , "name"));
Object.defineProperties(user , "name", {
    writable : false,
    enumerable : false
    
})
// console.log(Object.getOwnPropertyDescriptor(user , "name"));

for (const [key , value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
    
    
}