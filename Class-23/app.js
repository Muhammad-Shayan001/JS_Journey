class Clicked {
    constructor(){
        this.library = "React";
        this.server = "http:localhost:3000"

        document.querySelector('.button').addEventListener('click' , this.handeClick.bind(this))

    }
    handeClick(){
        console.log("Button Clicked");
        console.log(this.server);
        
        
    }

}
const app = new Clicked()
// ----------------------------------------------------------------------------------