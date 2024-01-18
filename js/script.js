let hideAuto = document.getElementById("rumusKeliling");
hideAuto.hidden = true; 

const hide = () => { 
    document.getElementById("rumusLuas").hidden = false; 
    document.getElementById("rumusKeliling").hidden = true; 
}

const show = () => {  
    document.getElementById("rumusKeliling").hidden = false; 
    document.getElementById("rumusLuas").hidden = true; 
}