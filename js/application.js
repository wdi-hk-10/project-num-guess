$(document).ready(function(){ // do not remove - insert all code in here!

  var threeThree = [[1,1,1,1,0,1,1,1,1], //0
                    [1,1,0,0,1,0,1,1,1], //1
                    [1,1,0,0,1,0,0,1,1], //2
                    [1,1,1,0,1,1,1,1,1], //3
                    [1,0,1,1,1,1,0,0,1], //4
                    [0,1,1,0,1,0,1,1,0], //5
                    [1,0,0,1,1,1,1,1,1], //6
                    [1,1,1,0,0,1,0,0,1], //7
                    [0,1,1,1,1,1,1,1,1], //8
                    [1,1,1,1,1,1,0,0,1]];//9

  var threeThreeInverse = 0; // divide array by its "width" , then switch either end (odd) or both sides (even)
  var threeThreeReverse = 0; // divide array by its "height", then switch either end (odd) or both ends (even)
  // var threeThreeInverseReverse = threeThree.clone()...; //reverse entire string

  var threeFour = [[1,1,1,1,0,1,1,0,1,1,1,1], //0
                   [0,1,0,1,1,0,0,1,0,1,1,1], //1
                   [1,1,0,0,0,1,0,1,0,1,1,1], //2
                   [1,1,0,0,1,1,0,0,1,1,1,0], //3
                   [1,0,1,1,1,1,0,0,1,0,0,1], //4
                   [1,1,1,1,1,0,0,0,1,1,1,0], //5
                   [1,1,1,1,0,0,1,1,1,1,1,1], //6
                   [1,1,1,0,0,1,0,1,0,0,1,0], //7
                   [1,1,1,0,1,0,1,0,1,0,1,0], //8
                   [1,1,1,1,1,1,0,0,1,1,1,1]];//9

  var threeFourInverse = 0; // divide array by its "width", then switch either end (odd) or both sides (even)
  var threeFourReverse = 0; // divide array by its "height", then switch either end (odd) or both ends (even)
  // var threeFourInverseReverse = threeFour.clone()...; //reverse entire string

  var threeFive = [[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1]  //0
                   [0,1,0,1,1,0,0,1,0,0,1,0,1,1,1], //1
                   [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1], //2
                   [1,1,1,0,0,1,1,1,1,0,0,1,1,1,1], //3
                   [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1], //4
                   [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1], //5
                   [1,1,1,1,0,0,1,1,1,1,0,1,1,1,1], //6
                   [1,1,1,0,0,1,0,1,0,1,0,0,1,0,0], //7
                   [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1], //8
                   [1,1,1,1,0,1,1,1,1,0,0,1,1,1,1]];//9

  var threeFiveInverse = 0; // divide array by its "width", then switch either end (odd) or both sides (even)
  var threeFiveReverse = 0; // divide array by it's "height", then switch either end (odd) or both ends (even)
  // var threeFiveInverseReverse = threeFive.clone()...; //reverse entire string



  var gridCounter = 0;
  var turnCounter = 0;

  var targetScoreInput;
  var spriteSizeInput;
  var orientationInput;

  var answer;
  var numberInGrid;
  var arraySize;  //XXX

  var $targetScoreElem = $('#target-score').find('h2');
  var $userGuessElem1 = $('#results-text1').find('h3');
  var $userGuessElem2 = $('#results-text2').find('h3');

  var pOneScore = 0;
  var pTwoScore = 0;
  var $pOneScoreElem = $('#player-one-score').find('h2');
  var $pTwoScoreElem = $('#player-two-score').find('h2');


  // STEP 1
  function bindStartButton () {
    $('#start-button').on("click", function(){
      // feat. get input from dropdown
      // feat. depending on what input, show different screen
      targetScoreInput = $('#set-target-score').val() || 40;
      $targetScoreElem.text(targetScoreInput);

      spriteSizeInput = $('#set-sprite-size').val() || "3x4";
      // SPRITE SIZE BUTTON
      // switch selected array
      // append to extend grid
      // amend .game-cell height & width 200x200 for 3x3, 150x150 for 3x4, 120x120 for 3x5
      console.log("sprite" + spriteSizeInput);
      var spriteWidth = parseInt(spriteSizeInput[0]);
      console.log(spriteWidth + spriteWidth);
      //var spriteWidth =
      var spriteHeight = parseInt(spriteSizeInput[2]);
      console.log(spriteHeight + spriteHeight);
      //spriteSize()

      if (spriteHeight === 3) {
        $('#instruct-screen').hide();
        $('#game-screen3x3').show();
        arraySize = threeThree;
      }
      else if (spriteHeight === 4) {
        console.log("S4");
        $('#instruct-screen').hide();
        $('#game-screen3x4').show();
        arraySize = threeFour;
      }
      else {
        console.log("S5");
        $('#instruct-screen').hide();
        $('#game-screen3x5').show();
        arraySize = threeFive;
      }

      // ORIENTATION BUTTON
      // recalculate the array
      orientationInput = $('#set-orientation').val() || "Normal";
      orientationChoice = orientationInput[0];
      console.log(orientationChoice);
        if (orientationChoice === "N") {
          console.log("O1");
        }
        else if (orientationChoice === "I") {
          console.log("O2");
        }
        else if (orientationChoice === "M") {
          console.log("O3");
        }
        else { // Both
          console.log("O4");
        }

      //$('#instruct-screen').hide();
      //$('#game-screen').show();

      $('#options').hide();
      $('#play-box').show();

      generateNumber();
      highlightPlayer();
      selectCell();
    });
  }

  function generateNumber() { // generates a random number from the chosen array
    answer = Math.floor(Math.random()*(10));
    numberInGrid = arraySize[answer]; // need to replace threeThree with a selectable array XXX
    console.log(numberInGrid); // WHY IS THIS LINE BEING RUN 18 TIMES??!!
  }

  function highlightPlayer () {
    if (turnCounter % 2 === 0) {
      $('#player-one-score').css("background-color","blue");
      $('#player-two-score').css("background-color","red");
    }
    else {
      $('#player-one-score').css("background-color","red");
      $('#player-two-score').css("background-color","blue");
    }
  }

  function selectCell () {

    $('#user-pass').show();
    $('#reset-cells').hide();

    $('.game-cell').one('click', function() {
      var cellId = parseInt($(this).attr('id').substring(1));
      var pixel = numberInGrid[cellId];

      if(pixel === 1) {
        $('.c' + cellId).css("background-color","black");
      }
      else {
        $('.c' + cellId).css("background-color","white");
      }

      bindUserPass();
      bindUserGuess();
    });
  }

  // STEP 2A
  function bindUserPass () {
    $('#user-pass').off().on("click", function() {
      turnCounter = turnCounter + 1;
      //gridCounter = gridCounter + 1;
      highlightPlayer();
    })
  }

  // STEP 2B
  function bindUserGuess () {
    $('#user-guess').off().on("change", function() {
      var userGuess = parseInt($(this).val());
      // checks if user has guessed the number
      // console.log(typeof(userGuess)); // remove when finished
      // console.log(userGuess); // remove when finished
      // console.log(answer); // remove when finished
      // console.log(numberInGrid) // remove when finished
       gridCounter = gridCounter + 1;
       console.log("GC" + gridCounter);

      // calcuate score
      if (userGuess === answer) {
        if (turnCounter % 2 === 0) {
          $userGuessElem1.text(userGuess + " is correct Player 1!");
          $userGuessElem2.text("You score " + (answer + (numberInGrid.length - gridCounter)) + " point(s).");
          pOneScore = pOneScore + answer + (numberInGrid.length - gridCounter);
          $pOneScoreElem.text(pOneScore);

        }
        else {
          $userGuessElem1.text(userGuess + " is correct Player 2!");
          $userGuessElem2.text("You score " + (answer + (numberInGrid.length - gridCounter)) + " point(s).");
          pTwoScore = pTwoScore + answer + (numberInGrid.length - gridCounter);
          $pTwoScoreElem.text(pTwoScore);
        }
      }
      else {
        if (turnCounter % 2 === 0) {
          $userGuessElem1.text(userGuess + " is wrong!  The correct answer is " + answer + ".");
          $userGuessElem2.text("Player 2 scores " + (answer + (numberInGrid.length - gridCounter)) + " point(s).");
          pTwoScore = pTwoScore + answer + (numberInGrid.length - gridCounter);
          $pTwoScoreElem.text(pTwoScore);

        }
        else {
          $userGuessElem1.text(userGuess + " is wrong!  The correct answer is " + answer + ".");
          $userGuessElem2.text("Player 1 scores " + (answer + (numberInGrid.length - gridCounter)) + " point(s).");
          pOneScore = pOneScore + answer + (numberInGrid.length - gridCounter);
          $pOneScoreElem.text(pOneScore);
        }
      }

      turnCounter = turnCounter + 1;
      highlightPlayer();
      revealAnswer();
      resetGrid();

      if (pOneScore >= targetScoreInput) { // target is reached, end of game
        $userGuessElem1.text("Player One Wins");
        $userGuessElem2.text("Thank you for playing numGuess")
      }
      else if (pTwoScore >= targetScoreInput) {
        $userGuessElem1.text("Player Two Wins");
        $userGuessElem2.text("Thank you for playing numGuess")
      }
      else {
        resetGrid (); // otherwise, generate another number
      }
    });
  }

  function revealAnswer() {
    for(var i = 0; i < numberInGrid.length; i++) {
      if(numberInGrid[i] === 1) {
        $('#c'+ i).css("background-color","black");
      }
      else {
        $('#c'+ i).css("background-color","white");
      }
    }
  }

  function resetGrid () { // reset grid to orange
    gridCounter = 0;
    $('#user-pass').hide();
    $('#reset-cells').show();

    $('#reset-cells').on("click", function () {
      for(var i = 0; i < numberInGrid.length; i++) {
        $('.game-cell').css("background-color","orange");
        generateNumber();
        selectCell();
      }
    });
  }


// PREVENT SAME PLAYER FROM CLICKING MORE THABN ONE CELL - Denis will assist
// PREVENT PLAYER FROM CLICKING PASS MULTIPLE TIMES
// PEVENT THE PLAYER GUESSING AGAIN UNTIL RESEt

  bindStartButton()
}); // do not remove