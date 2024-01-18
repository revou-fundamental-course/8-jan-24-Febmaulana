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

let display = document.getElementById("display");
const num = (val) => { 
    display.value += val 
    console.log(display.value);
}

const myFunction = (event) => { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9') 
    display.value += event.key;
}

const clr = () => { 
    display.value = "";
    console.log(display.value);
}

let countLuas = (sisi) => {
    let luas;

    if (typeof display.value !== "number") {
        let sisi = parseInt(display.value);
        console.log(sisi);
        luas = sisi*sisi;
    } else {
        return sisi;
    }
    document.getElementById("result1").innerHTML = `Luas = ${display.value} X ${display.value} <br>
    Luas = ${luas}`;
    console.log(luas);
}

let countKeliling = (sisi) => {
    let keliling;

    if (typeof display.value !== "number") {
        let sisi = parseInt(display.value);
        console.log(sisi);
        keliling = 4*sisi;
    } else {
        return sisi;
    }
    document.getElementById("result2").innerHTML = `Keliling = ${display.value} X ${display.value} <br>
    Keliling = ${keliling}`;
    console.log(keliling);
}