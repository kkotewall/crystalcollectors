//Variables

var criticalScore = "";
var userScore = "";
var compareScore = "";

var wins = "";
var losses = "";

var blueValue = "";
var greenValue = "";
var pinkValue = "";
var redValue = "";

var blueBtn = "";
var greenBtn = "";
var pinkBtn = "";
var redBtn = "";


//New game function
function startGame () {
	
	//Generate random goal number 19-120
	criticalScore = Math.floor(Math.random()*(120-19)+1);
	$("#criticalScore").html("<h2>" + criticalScore + "</h2>");

	//Generate random crystal score 1-12
 	blueValue = Math.floor(Math.random()*12+1);
 	greenValue = Math.floor(Math.random()*12+1);
 	pinkValue = Math.floor(Math.random()*12+1);
 	redValue = Math.floor(Math.random()*12+1);

	//Empty userScore
	userScore = 0;
	$("#userScore").html("<h2>" + userScore + "</h2>");


//Function to increase userScore by crystalValue
function newScore() {

	//BLUE
	$("#blueBtn").on("click", function() {
		//if user has not reached or exceeded criticalScore
		if (userScore < criticalScore) {
			userScore += blueValue;
			$("#userScore").html("<h2>" + userScore + "</h2>");
			//determine user status after receiving new score
			compareScore();
		}
	});

	//GREEN 
	$("#greenBtn").on("click", function() {
		//if user has not reached or exceeded criticalScore
		if (userScore < criticalScore) {
			userScore += greenValue;
			$("#userScore").html("<h2>" + userNumber + "</h2>");
			//determine user status after receiving new score
			compareScore();
		}
	});

		//PINK 
	$("#pinkBtn").on("click", function() {
		//if user has not reached or exceeded criticalScore
		if (userScore < criticalScore) {
			userScore += pinkValue;
			$("#userScore").html("<h2>" + userNumber + "</h2>");
			//determine user status after receiving new score
			compareScore();
		}
	});

		//RED 
	$("#redBtn").on("click", function() {
		//if user has not reached or exceeded criticalScore
		if (userScore < criticalScore) {
			userScore += redValue;
			$("#userScore").html("<h2>" + userNumber + "</h2>");
			//determine user status after receiving new score
			compareScore();
		}
	});
}

//Compare userScore & criticalScore
function compareScore(){
	//if userScore equals criticalScore
	if (userScore == criticalScore) {
		wins++;
		$(".win_counter").html(wins);
		resetGame();
	}

	//If userScore exceeds criticalScore
	else if (userNumber > targetNumber) {
 		losses++;
 		$(".loss_counter").html(losses);
 		resetGame();
	}
}

// Reset Game for continued play
function resetGame() {
	//Generate random goal number 19-120
	criticalScore = Math.floor(Math.random()*(120-19)+1);
	$("#criticalScore").html("<h2>" + criticalScore + "</h2>");

	//Generate random crystal score 1-12
 	blueValue = Math.floor(Math.random()*12+1);
 	greenValue = Math.floor(Math.random()*12+1);
 	pinkValue = Math.floor(Math.random()*12+1);
 	redValue = Math.floor(Math.random()*12+1);

	//Ready to accept new user clicks
 	newScore();
