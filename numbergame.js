
function numberbetween1_100() 
{
    var randnum;
    randnum = Math.floor(Math.random() * 100) + 1;
    return randnum
}

var numberofattempts = 0;

function updateAttempts() {
    numberofattempts++;
    document.getElementById("attemptCounter").textContent = "Attempts: " + numberofattempts;
}
function handleGuess() {
    var guessnumber = document.getElementById("userinput").value;
   
  
    if (guessnumber == randomNumber) {
        document.getElementById("playermessage").textContent = "Congratulations! You guessed it!";
      
    } else if (guessnumber < randomNumber) {
        document.getElementById("playermessage").textContent = "Too low. Try again!";
    
    } else {
        document.getElementById("playermessage").textContent = "Too high. Try again!";
      
    }

    if (guessnumber == randomNumber) {

        playermessage.style.backgroundColor = "lightgreen";
       
       
    } 
    else if (guessnumber < randomNumber) {
     
        playermessage.style.backgroundColor = "orange";
     
    } 
    else {
       
        playermessage.style.backgroundColor = "gray";
       
    }

   

  
    updateAttempts();
    document.getElementById("resetbtn").style.display = "block";

    
    displayGuessHistory(guessnumber, document.getElementById("playermessage").textContent);
}


function displayGuessHistory(guess, feedback) {
    var records = document.getElementById("records");
    var items = document.createElement("li");
    items.textContent = "Guess: " + guess + ", Feedback: " + feedback;
    records.appendChild(items);
}

function resetbtn() {
    randomNumber = numberbetween1_100();
    document.getElementById("userinput").value = "";
    document.getElementById("attemptCounter").textContent = "";
    document.getElementById("playermessage").textContent = "";
    document.getElementById("records").textContent = "";
    numberofattempts = 0;

}









document.getElementById("submit").addEventListener("click", function () {
    handleGuess();
});

document.getElementById("resetbtn").addEventListener("click", function () {
    resetbtn();
});


var randomNumber = numberbetween1_100();



