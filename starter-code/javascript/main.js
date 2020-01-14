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
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
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
    document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    btnRight.className = 'btn reset';
    btnRight.innerHTML = "RESET";
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
    if (btnRight.className == 'btn split') {
        printSplit();
    }
    else if (btnRight.className !== 'btn split') {
        clearSplits();
        chronometer.resetClick();
        printMinutes();
        printSeconds();
    }
});

