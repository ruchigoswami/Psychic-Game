    // Creates an array that lists out all of the letters. ( a to z )
       var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
       var wins = 0;
       var losses = 0;
       var Guesses_left =10;
       var guessesSoFar = [];
       var gameOver=false;
       
    // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
       
      // Determines which key was pressed.
      var userGuess = event.key;
      console.log(userGuess);
      userGuess = userGuess.toLowerCase();
      // Randomly chooses a choice from the options array. This is the Computer's letter.
      var computerLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(computerLetter);
      guessesSoFar.push(userGuess);
      //pushes the userInput into the guessedSoFar array
    

     
      if(Guesses_left===0)
         {
          gameOver=true;
         }

        else if(Guesses_left > 0)
        {
    	   Guesses_left--;
         if(userGuess === computerLetter)
         {
           wins++;
         }
         else
         {
          losses++;
         }
      
         }
 
       var html =
          "<p ><span style='color:#dda0dd'>Wins: </span>" + wins + "</p>" +
          "<p><span style='color:#dda0dd'>Losses: </span>" + losses + "</p>" +
          "<p><span style='color:#dda0dd'>Gusses left: </span>" + Guesses_left + "</p>" +
          "<p><span style='color:#dda0dd'>Your gusses so far: </span>"+ guessesSoFar+" </p>";

      if(gameOver)
      {
        html ="<p><img src='assets/images/gameover.bmp' width='600' height='220'></p>" ;
      }                   
        // Set the inner HTML contents of the #game div to our html string
          document.querySelector("#game").innerHTML = html;
        
    };


