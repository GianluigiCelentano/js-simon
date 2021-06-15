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

var time = 10
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

var promptimer = 1;
var score = 0;
setTimeout(function() {
    promptimer = (promptimer - 1);
    var utentNumbers = []
    if (promptimer === 0) {
     
        while (utentNumbers.length < 5) {
            var askUtentNumbers = parseInt(prompt("INSERISCI I NUMERI CHE TI RICORDI"))
            if (utentNumbers.includes(askUtentNumbers) === false) {
                utentNumbers.push(askUtentNumbers)
            }

        }
    } 
    for (var x = 0; x < utentNumbers.length; x++ ) {
        if(randomNumbersPc.includes(utentNumbers[x])) {
            score++;
        }
    }
    if(score > 0) {
        alert('Hai indovinato ' + score + ' numeri');
    } else {
        alert('Non hai indovinato nessun numero!');
    }
}, 13000);
