window.onload = function() {
var right;
var wrong;
var time = 121;
var indervalID;

function runGame () {
intervalId = setInterval(decrement, 1000);
//wanted to append the questions div with all the questions so 
//I tried making an object array with the questions, name, id, 
//value, then using .html to fill the div after clicking start. 
//I was having a lot of trouble with that so I gave up and switched to 
//displaying all questions before clicking start, the only problem is
//that if the user chooses their answers and selects them before they click start  
//then does not re-select them the #s right & wrong will come up undefined.
}

function decrement() {
   	time--;
    // console.log(time);
    $("#timeLeft").html("<h2>" + time + "</h2>");
    setTimeout(timeUp, 1000 * 120);
    if (time === 0) {
    	time.cancel();
    }
     //I wanted to stop running the time decrement but I did not figure it out.
     //This impacts the function of the game, as for some reason, even though
     //I .html over it in both the timeUp & check functions, the variable 
     //time does continue to run into negative numbers & display them
}

function check () {
	right = 0;
	wrong = 0;
	var correctAnswer1 = document.getElementById("ans1-3");
	var correctAnswer2 = document.getElementById("ans2-1");
	var correctAnswer3 = document.getElementById("ans3-2");
	var correctAnswer4 = document.getElementById("ans4-4");
	var correctAnswer5 = document.getElementById("ans5-1");
	var correctAnswer6 = document.getElementById("ans6-2");
	if (correctAnswer1.checked === true) {
		right++
	} else {
		wrong++;
	}
	if (correctAnswer2.checked === true) {
		right++
	} else {
		wrong++;
	}
	if (correctAnswer3.checked === true) {
		right++
	} else {
		wrong++;
	}
	if (correctAnswer4.checked === true) {
		right++
	} else {
		wrong++;
	}
	if (correctAnswer5.checked === true) {
		right++
	} else {
		wrong++;
	}
	if (correctAnswer6.checked === true) {
		right++
	} else {
		wrong++;
	}
    $("#timeLeft").html("<h2>You finished early!</h2>");
    $("#questions").html("<h2> You got " + right + " right and " + wrong + " wrong! </h2>");
    // console.log(right);
    // console.log(wrong);
}

function timeUp() {
	$("#timeLeft").html("<h2>Time's Up!</h2>");
	check();
	$("#questions").html("<h2>Done! You got " + right + " right and " + wrong + " wrong!</h2>");
}

$("#start").on("click", runGame);
$("#submit").on("click", check);
};

