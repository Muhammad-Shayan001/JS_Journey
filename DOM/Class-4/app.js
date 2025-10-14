//? Lexical scoping


let outterName = "outer"

function displyName() {
    let userName ="Shayan"
    // console.log(innerName);
    console.log(outterName);
    
    
    function inner(){
        let inneName = "inner"

        console.log( "inner" ,userName);
        
    }
    inner()
}
displyName()
// console.log(userName); // this is outer so not defined


// -----------------------------------------------------------------------------------
//? clusure

function clusure(){
    let userName = "Ali"
    function innerClusure(){
        console.log(userName);
        
    }

    return innerClusure
}

const returnValue = clusure()
const myFun = function(){
    returnValue()
}
myFun()

// This is the clusure

//! immpliment 

// document.getElementById('Orange').onclick = function(){
//     document.body.style.backgroundColor = 'orange'
// }
// document.getElementById('Green').onclick = function(){
//     document.body.style.backgroundColor = 'green'
// }

const buttons = document.querySelectorAll('.btn')
console.log(buttons);

buttons.forEach((items) => {
    items.addEventListener('click' , (e) => {
        console.log(e.target.id);
        
        document.body.style.backgroundColor = e.target.id
        
    })
    
})

function clickHandler(color) {
    
    return function (){
        document.body.style.backgroundColor = `${color}`
    }
    
}
// document.getElementById('Orange').onclick = clickHandler('orange')
// document.getElementById('Green').onclick = clickHandler('green')


