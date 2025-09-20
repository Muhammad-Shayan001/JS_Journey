function playGame(){
    
    let inputNumber =  prompt("Enter Your Number" );
    let generateNo = Math.random()
    let number = parseInt(generateNo * 10 +1)
    inputNumber = parseInt(inputNumber)

    if (isNaN(inputNumber) || inputNumber > 10 || inputNumber < 1){
        alert("This is an Invalid Number, Enter a Correct Number");
        playAgain();
        return;
    }

    if(inputNumber === number){
        alert(`Your Gess Is Correct , You Won your number ${userNumber} is match the number${number}`)}
        
        else{
            alert(`SORRY , You Gesses Wrong your number ${userNumber} is not match the number${number}`)
        }
        playAgain()
       
        
}
function playAgain(){
    let playAgainConform = confirm("If You Want To Play More , Press OK")
    if(playAgainConform == true){
        playGame()
    }else{
        alert("Thanks For Playing Game , Good By")
    }
}
playGame()