function randomNum () {
    var pcListNum = [];
        while (pcListNum.length < 5){
        var i = Math.floor(Math.random() * 100 + 1)
        if (pcListNum.includes(i) === false) {
            pcListNum.push(i)
        }
    }
    return pcListNum
} 
var randomNumbersPc = randomNum()

var time = 30

var timer = setInterval(function () {
    document.getElementById("numbers").innerHTML=("MEMORIZZA QUESTI NUMERI" + " " + randomNumbersPc)
    document.getElementById("time").innerHTML = "COUNTDOWN" + " " + time;
    time = (time - 1);

    if (time === - 1) {            
        clearInterval(timer);
        document.getElementById("numbers").style.display = 'none';
        document.getElementById("time").style.display = 'none';
    }

}, 1000);

var promptimer = 1
var promptime = setInterval(function() {
    var utentNumbers = []
    promptimer = (promptimer - 1);
    if (promptimer === 0) {
        clearInterval(promptimer);
        var askUtentNumbers = prompt("INSERISCI I NUMERI CHE TI RICORDI")
    } 
    if (utentNumbers.includes(askUtentNumbers) === false) {
        utentNumbers.push(askUtentNumbers)
    } 
     return utentNumbers
}, 33000);

if (utentNumbers.length === randomNumbersPc) {
    alert("COMPLIMENTI!!! HAI VINTO")
}