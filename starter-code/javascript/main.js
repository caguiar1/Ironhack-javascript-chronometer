let chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');




    

setInterval(printTime, 50);

function printTime() {

   
        if(btnLeft.className == "btn stop"){
        minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
        minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
        secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
        secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
        
    
        console.log("The time is: " + chronometer.twoDigitsNumber(chronometer.getMinutes())[0] +
        chronometer.twoDigitsNumber(chronometer.getMinutes())[1] + " : " + 
        chronometer.twoDigitsNumber(chronometer.getSeconds())[0] +
        chronometer.twoDigitsNumber(chronometer.getSeconds())[1]);

    }
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {
   

        document.getElementById("splits").innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())[0] +
            chronometer.twoDigitsNumber(chronometer.getMinutes())[1] + " : " + 
            chronometer.twoDigitsNumber(chronometer.getSeconds())[0] +
            chronometer.twoDigitsNumber(chronometer.getSeconds())[1]}</li>`;

        
}

function clearSplits() {

    let creature = document.getElementById('splits');
    
    while(creature.firstChild){
    creature.removeChild(creature.firstChild);
}


}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

    document.getElementById("splits").innerHTML = "";
    let digits = document.getElementsByClassName("number");
    Array.foreach()
    console.log(typeof(digits))
    digits.foreach((digit) =>{
        digit.innerHTML = "0";
    })
            console.log("Working")

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if(btnLeft.className == "btn start"){

        btnLeft.className = "btn stop";
        btnLeft.innerHTML = "STOP";
        btnRight.className = "btn split";
        btnRight.innerHTML = "SPLIT";
        chronometer.startClick();
        printTime();
        
        

    }
    else if(btnLeft.className == "btn stop"){

        btnLeft.className = "btn start";
        btnLeft.innerHTML = "START";
        btnRight.className = "btn reset";
        btnRight.innerHTML = "RESET";
        chronometer.stopClick();

    }
    

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if(btnLeft.className == "btn stop"){
        printSplit();
    }



});

btnRight.addEventListener('click', function () {

    if(btnRight.className == "btn reset"){

        clearSplits();
        setResetBtn();
    }

});


