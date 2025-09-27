const boxes = document.querySelectorAll('div')
// console.log(boxes);

boxes.forEach((items) => {
    // console.log(items);
    items.addEventListener('click' , (e) =>{
        // console.log(e);
        // console.log(e.tiltX);
        // console.log(e.tiltY);
        // console.log(e.AT_TARGET);
        // console.log(e.layerX);
        // console.log(e.layerY);
        // console.log(e.offsetX);
        // console.log(e.offsetY);
        if(e.altKey === true){
            console.log("press altkey");
            
            
        }
        if (e.ctrlKey === true) {
            
            console.log("press ctrlkey");
        }
        if(e.shiftKey === true){

            console.log("press shift");
        }
        
        const area = e.offsetX
        console.log(area)
        console.log(!isNaN(area))
        if (!isNaN(area)) {
            e.target.innerHTML ='<div class="box-0"><p>hello</p></div>'
            
        }else{
            console.log("not run")
        }
        // console.log(boxes.innerHTML = "")
        
        

        
        
    })
    
    
});