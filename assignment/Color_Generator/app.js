    const box = document.querySelector(".color-box"); 
let letter = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
function colorGenerator() {
    let color = '#';
    for (let i = 0; i < 6 ;  i++) {
        color  += letter[Math.floor(Math.random()*10 +1)]
        
    }
    // console.log(color);
    

    
    box.style.backgroundColor = color;
}
function play(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if (!key) alert("This is Not an Alphabatic Key")
    colorGenerator();
    
}
window.addEventListener("keydown", play);



