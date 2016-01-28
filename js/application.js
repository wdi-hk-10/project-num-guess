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

  var threeFive = [[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1],  //0
                   [0,1,0,1,1,0,0,1,0,0,1,0,1,1,1], //1
                   [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1], //2
                   [1,1,1,0,0,1,1,1,1,0,0,1,1,1,1], //3
                   [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1], //4
                   [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1], //5
                   [1,1,1,1,0,0,1,1,1,1,0,1,1,1,1], //6
                   [1,1,1,0,0,1,0,1,0,1,0,0,1,0,0], //7
                   [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1], //8
                   [1,1,1,1,0,1,1,1,1,0,0,1,1,1,1]];//9

  var fourFour =[[1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1] //0
                 [1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1], //1
                 [1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1], //2
                 [1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1], //3
                 [1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1], //4
                 [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1], //5
                 [1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1], //6
                 [1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1], //7
                 [0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1], //8
                 [1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1]];//9

  var soundIncorrect = new buzz.sound("sounds/incorrect-guess.mp3");

  var gridCounter = 0;
  var turnCounter = 0;
  var clicked = false;

  var targetScoreInput;
  var spriteSizeInput;
  var orientationInput;

  var answer;
  var numberInGrid;
  var puzzles;

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

      spriteSizeInput = $('#set-sprite-size').val() || "3x3";
      // SPRITE SIZE BUTTON
      // switch selected array
      // append to extend grid
      // amend .game-cell height & width 200x200 for 3x3, 150x150 for 3x4, 120x120 for 3x5
      var spriteWidth = parseInt(spriteSizeInput[0]);
      var spriteHeight = parseInt(spriteSizeInput[2]);
      //spriteSize()

      console.log(spriteSizeInput)
      if (spriteWidth === 3 && spriteHeight === 3)  {
        console.log("S3");  //remove when finished
        $('#instruct-screen').hide();
        $('#game-screen3x3').show();
        puzzles = threeThree;
      }
      else if (spriteWidth === 3 && spriteHeight === 4) {
        console.log("S4"); //remove when finished
        $('#instruct-screen').hide();
        $('#game-screen3x4').show();
        puzzles = threeFour;
      }
      else if (spriteWidth === 3 && spriteHeight === 5) {
        console.log("S5"); //remove when finished
        $('#instruct-screen').hide();
        $('#game-screen3x5').show();
        puzzles = threeFive;
      }
      else {
        console.log("You've broken numGuess!");
      }

      generateNumber();

      // ORIENTATION BUTTON
      // recalculate array
      orientationInput = $('#set-orientation').val() || "Normal";
      orientationChoice = orientationInput[0];
      console.log(orientationChoice);
      if (orientationChoice === "N") {
        console.log("O1");
      }
      else if (orientationChoice === "I") {
        numberInGrid = inverse(numberInGrid);
      }
      else if (orientationChoice === "M") {
        numberInGrid = mirror(numberInGrid);
      }
      else if (orientationChoice === "B") { // Both
        numberInGrid = inverseMirror(numberInGrid);
      }
      else {
        console.log("You've broken numGuess!");
      }

      //$('#instruct-screen').hide();
      //$('#game-screen').show();

      $('#options').hide();
      $('#play-box').show();

      highlightPlayer();
      selectCell();
    });
  }

  function inverse (array) {
    var inverseArr = [];
    for (var i = array.length - 1; i >= 0; i--) {
      var tmp = []
      for (var j = 0; j < array[i].length; j++){
        tmp.push(array[i][j]);
      }
      inverseArr.push(tmp);
    }
    return inverseArr;
  }

  function mirror (array) {
    var mirrorArr = [];
    for (var i = 0; i < array.length; i++) {
      var tmp = []
      for (var j = array[i].length - 1; 0 <= j ; j--){
        tmp.push(array[i][j]);
      }
      mirrorArr.push(tmp);
    }
    return mirrorArr;
  }

  function inverseMirror (array) {
    var inverseMirror = [];
    for (var i = array.length - 1; i >=0; i--) {
      inverseMirror.push(array[i]);
    }
    return inverseMirror;
  }

  function generateNumber () { // generates a random number from the chosen array
    answer = Math.floor(Math.random()*(10));
    numberInGrid = puzzles[answer]; // need to replace threeThree with a selectable array XXX
    console.log("gn", numberInGrid); // Logged many times when "coloring in the grid to reset".
  }

  function highlightPlayer () {
    if (turnCounter % 2 === 0) {
      $('#player-one-score').css("background-color","blue").css("border","white solid 2px");
      $('#player-two-score').css("background-color","red").css("border-color","red");
    }
    else {
      $('#player-one-score').css("background-color","red").css("border-color","red");
      $('#player-two-score').css("background-color","blue").css("border","white solid 2px");
    }
  }

  function selectCell () {

    $('#user-pass').show();
    $('#reset-cells').hide();

    $userGuessElem1.text("");
    $userGuessElem2.text("");

    $('.game-cell').on("click", function() {
      if (!clicked) { // when click is false
        var cellId = parseInt($(this).attr('id').substring(1));
        var pixel = numberInGrid[cellId];
        console.log('sc', numberInGrid)

        if(pixel === 1) {
          $('.c' + cellId).css("background-color","black");
        }
        else {
          $('.c' + cellId).css("background-color","white");
        }

        gridCounter = gridCounter + 1;
        clicked = true;
      }

      bindUserPass();
      bindUserGuess();
    });
  }

  // STEP 2A
  function bindUserPass () {
    $('#user-pass').off().on("click", function() {
      if (clicked) { // when click is true
        clicked = false;
        turnCounter = turnCounter + 1;
        highlightPlayer();
      }
    })
  }

  // STEP 2B
  function bindUserGuess () {
    $('#user-guess').off().on("change", function() {
      if (clicked) { // when click is true
        clicked = false;
        var userGuess = parseInt($(this).val());

        // calcuate score
        calculateScore(userGuess);

        turnCounter = turnCounter + 1;
        highlightPlayer();
        revealAnswer();
        resetGrid();

        if (pOneScore >= targetScoreInput) { // target is reached, end of game
          $userGuessElem1.text("Player One Wins"); // create modal
          $userGuessElem2.text("Thank you for playing numGuess");
        }
        else if (pTwoScore >= targetScoreInput) {
          $userGuessElem1.text("Player Two Wins");
          $userGuessElem2.text("Thank you for playing numGuess");
        }
        else {
          resetGrid(); // otherwise, generate another number
        }
      }
      $('.options-buttons li').removeClass('selected'); //stop the guess selector from sticking
    });
  }


  function calculateScore (userGuess) {
    var pointsAwarded = answer + (numberInGrid.length - gridCounter);
    console.log("cs", numberInGrid)
    if (userGuess === answer) {
      // soundCorrect.play()
      if (turnCounter % 2 === 0) {
        $userGuessElem1.text(userGuess + " is correct Player 1!");
        $userGuessElem2.text("You score " + pointsAwarded + " (" + answer + " + " + (numberInGrid.length - gridCounter) + ") point(s).");
        pOneScore = pOneScore + pointsAwarded;
        $pOneScoreElem.text(pOneScore);
      }
      else {
        $userGuessElem1.text(userGuess + " is correct Player 2!");
        $userGuessElem2.text("You score " + pointsAwarded + " (" + answer + " + " + (numberInGrid.length - gridCounter) + ") point(s).");
        pTwoScore = pTwoScore + pointsAwarded;
        $pTwoScoreElem.text(pTwoScore);
      }
    }
    else {
      soundIncorrect.play();
      if (turnCounter % 2 === 0) {
        $userGuessElem1.text(userGuess + " is wrong!  The correct answer is " + answer + ".");
        $userGuessElem2.text("Player 2 scores " + pointsAwarded + " (" + answer + " + " + (numberInGrid.length - gridCounter) + ") point(s).");
        pTwoScore = pTwoScore + pointsAwarded;
        $pTwoScoreElem.text(pTwoScore);

      }
      else {
        $userGuessElem1.text(userGuess + " is wrong!  The correct answer is " + answer + ".");
        $userGuessElem2.text("Player 1 scores " + pointsAwarded + " (" + answer + " + " + (numberInGrid.length - gridCounter) + ") point(s).");
        pOneScore = pOneScore + pointsAwarded;
        $pOneScoreElem.text(pOneScore);
      }
    }
  }

  function revealAnswer () {
    for(var i = 0; i < numberInGrid.length; i++) {
      if(numberInGrid[i] === 1) {
        $('.c'+ i).css("background-color","black");
      }
      else {
        $('.c'+ i).css("background-color","white");
      }
    }
  }

  function resetGrid () { // reset grid to background colour
    gridCounter = 0;
    $('#user-pass').hide();
    $('#reset-cells').show();

    $('#reset-cells').on("click", function () {
      for(var i = 0; i < numberInGrid.length; i++) {
        $('.game-cell').css("background-color","red");
        generateNumber();
        selectCell();
      }
    });
  }

// ADD SOUND
// ADD MUSIC - Audio tags in the body.  See info from Carmen.

  bindStartButton();  // start function
}); // do not remove