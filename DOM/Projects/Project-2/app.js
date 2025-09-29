const button = document.querySelectorAll('.btn')
console.log(button);
const operators = document.querySelectorAll('.operator')
// console.log(operators);
const screen = document.querySelector('.center-0')
button.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener('click' , (e) => {
        // console.log(e.target.id);
        const num1 = screen.innerHTML +=  e.target.id
        
        operators.forEach((operator) => {
            operator.addEventListener("click" , (e) => {



            })
        })
        
    })
})
