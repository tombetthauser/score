var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var scoreOne = document.querySelector("#scoreOne");
var scoreTwo = document.querySelector("#scoreTwo");
var numInput = document.querySelector("input");
var winScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 10;

p1Button.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winScore) {
			scoreOne.classList.add("winner");
			gameOver = true;
		}
		scoreOne.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winScore) {
			scoreTwo.classList.add("winner");
			gameOver = true;
		}
		scoreTwo.textContent = p2Score;
	}
});

reset.addEventListener("click", function(){
	resetGame();
});

numInput.addEventListener("change", function(){
	winScoreDisplay.textContent = this.value;
	winScore = Number(this.value);
	resetGame();
});

function resetGame(){
	p1Score = 0;
	p2Score = 0;
	scoreOne.textContent = p1Score;
	scoreTwo.textContent = p2Score;
	scoreOne.classList.remove("winner");
	scoreTwo.classList.remove("winner");
	gameOver = false;
}