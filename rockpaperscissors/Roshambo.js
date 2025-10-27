//This function will run once a student clicks
// on an image of a symbol.
function chooseWinner(userChoice,compChoice) {

var rock = document.getElementById(rock);
var paper = document.getElementById(paper);
var scissors = document.getElementById(scissors);
// compChoice is parameter for testing purposes
if(compChoice === undefined)
{
    //select CompChoice if not passed in as argument.

    //select a random number 0, 1 or 2
	var rand = Math.floor(Math.random() * 3);
    //set the compChoice variable to string
    // rock paper or scissors (same strings as element's ids)
  if(rand==0)
     compChoice = "rock";
  else if (rand==1)
     compChoice = "paper";
  else
     compChoice = "scissors";
}

//This uses an alert to tell user what choices
//  were made
alert(`User Chose ${userChoice}`);
alert(`Computer Chose ${compChoice}`);

//TODO let's grab all three images using a css selector for imgs
var imgArray = document.querySelectorAll("img");

//loop through imgArray (counting loop) and hide all non choices.
for(let i=0;i< imgArray.length;i++) {
    //If userChoice is NOT same as Element's id
    if(userChoice   == imgArray[i].id);
        //Change display on current element to none like so
        // currentEL.style.display = "none";
        imgArray[i].style.display = "none";
    }

//Use if statements to decide winner for all choices
if(userChoice == 'rock' && compChoice == 'paper') {
	winner = 'computer';
} else if(userChoice == 'rock' && compChoice == 'scissors') {
    winner = 'user';
}

if(userChoice == 'paper' && compChoice == 'scissors') {
	winner = 'computer';
} else if(userChoice == 'paper' && compChoice == 'rock') {
    winner = 'user';
}

if(userChoice == 'scissors' && compChoice == 'rock') {
	winner = 'computer';
} else if(userChoice == 'scissors' && compChoice == 'paper') {
    winner = 'user';
}

if(userChoice == compChoice) {
    winner = 'tie'
}

//Display image
if(winner == 'user') {
    winnerImage = ""+userChoice+"";
}

if(winner == 'computer') {
    winnerImage = ""+compChoice+"";
}

//Display message
if(winner == 'user') {
    winner = "User has won!";
}

if(winner == 'computer') {
    winner = "Computer has won!";
}

if(winner == 'tie') {
    winner = "Tie game!";
}

//display winner in contents of div id="content"
content.innerHTML = "<p>"+winner+"</p>";
//select content Element
var contentElement = document.getElementById("content");
//set contents of that element to be winning image
contentElement.innerHTML += "<img id=\""+winnerImage+"\" src=\""+winnerImage+".png\" alt=\"Image of "+winnerImage+"\"/>";
}