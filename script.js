/*person clicks choice. 
then computer generates a random answer. 
then computer compares answers and provides feedback.
then computer is ready for new choice. */

window.onload = startup;

function startup() {
  var rock = document.getElementById("rock");
  rock.onclick = play;
  var paper = document.getElementById("paper");
  paper.onclick = play;
  var scissors = document.getElementById("scissors");
  scissors.onclick = play;
}

var thingArray = ["rock", "paper", "scissors"];
var choice = null;

function computerAnswer() {
	var compNum = Math.floor((Math.random()*3));
	compAns = thingArray[compNum];
}

function play() {
	choice = this.id;
	computerAnswer();
	if (compAns == choice) {
		alert("Tie!");
	}
	if (compAns == "rock" && choice == "paper") {
		alert("Computer chose rock, so you win!");
	}
	if (compAns == "rock" && choice == "scissors") {
		alert("Computer chose rock, so you lose!");
	}
	if (compAns == "paper" && choice == "scissors") {
		alert("Computer chose paper, so you win!");
	}
	if (compAns == "paper" && choice == "rock") {
		alert("Computer chose paper, so you lose!");
	}
	if (compAns == "scissors" && choice == "rock") {
		alert("Computer chose scissors, so you win!");
	}
	if (compAns == "scissors" && choice == "paper") {
		alert("Computer chose scissors, so you lose!");
	}
}


