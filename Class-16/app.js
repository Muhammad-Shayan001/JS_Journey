const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task one");

    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("promise consume");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolve");
});
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      userName: "Ali",
      email: "ali@example.com",
    });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({
        userName: "ali",
        pas: 123,
      });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});
// const userName = promiseFour.then((response) => {
//     return response.userName
// })
//! this above statement is wrong the return value is not return in any variable it's return in other then

promiseFour
  .then((response) => {
    return response.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(`error : ${error}`);
  })
  .finally(() => {
    console.log("promise is either resolved or rejected");
  });
//? The finally statement is run all time nither promise is resolve nor reject
//! it's a kind of default


const promiseFive = new Promise((resolve , reject ) => {
    setTimeout(function () {
        const error = false
        if (!error) {
            resolve({userName : "javascript" , pas : 123})
            
        } else {
            reject("JS error")
            
        }
    },1000)
})

async function consumePromiseFive() {
   try {
     const response = await promiseFive
    console.log(response);
    
   } catch (error) {
    console.log(`error : ${error}`);
    
    
   }
    
}
consumePromiseFive()