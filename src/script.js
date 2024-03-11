
function randomDices(){
    return [Math.floor(Math.random()*6)+1, Math.floor(Math.random()*6)+1];
}

function changeDice(player, dice) {
    document.getElementById(`player-${player}-dice`).setAttribute('src', `./assets/images/dice${dice}.png`)
}


function reset() {
    document.getElementsByClassName("game-info")[0].innerHTML = "";
    document.getElementById("player-1").style.color = "#4ECCA3";
    document.getElementById("player-2").style.color = "#4ECCA3";
    document.getElementById("pwt3").style.color = "white";
    document.getElementById("pwt2").style.color = "white";
    document.getElementById("pwt1").style.color = "white";
    document.getElementById("p3w").style.color = "white";
    document.getElementById("p2w").style.color = "white";
    document.getElementById("p1w").style.color = "white";
}

function sayWinner(player1, player2) {
    if (player1 > player2) {
        document.getElementsByClassName("game-info")[0].innerHTML = "Player 1 won!";
        document.getElementById("player-1").style.color = "#ffcf40";
        updateStatistics("p1");
    } else if (player1 < player2) {
        document.getElementsByClassName("game-info")[0].innerHTML = "Player 2 won!";
        document.getElementById("player-2").style.color = "#ffcf40";
        updateStatistics("p2");
    } else {
        document.getElementsByClassName("game-info")[0].innerHTML = "Its a tie!";
        document.getElementById("player-2").style.color = "#ffcf40";
        document.getElementById("player-1").style.color = "#ffcf40";
        updateStatistics("tie");
    }
}

function updateStatistics(result) {
    if (result === "tie") {
        var currentNumber = parseInt(document.getElementById("p3w").innerHTML);
        document.getElementById("p3w").innerHTML = (currentNumber + 1);
        document.getElementById("pwt3").style.color = "#ffcf40";
        document.getElementById("p3w").style.color = "#ffcf40";
    } else if (result === "p2") {
        var currentNumber = parseInt(document.getElementById("p2w").innerHTML);
        document.getElementById("p2w").innerHTML = (currentNumber + 1);
        document.getElementById("pwt2").style.color = "#ffcf40";
        document.getElementById("p2w").style.color = "#ffcf40";
    } else {
        var currentNumber = parseInt(document.getElementById("p1w").innerHTML);
        document.getElementById("p1w").innerHTML = (currentNumber + 1);
        document.getElementById("pwt1").style.color = "#ffcf40";
        document.getElementById("p1w").style.color = "#ffcf40";
    }
}

function refreshMe() {
    reset();
    const dices = randomDices();
    changeDice("1", dices[0]); //change player 1 dice
    changeDice("2", dices[1]); //change player 2 dice
    sayWinner(dices[0], dices[1]);
}

document.getElementById("toRefresh").addEventListener("click", refreshMe);