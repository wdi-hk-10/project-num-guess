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

  var threeFive = [[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1], //0
                   [0,1,0,1,1,0,0,1,0,0,1,0,1,1,1], //1
                   [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1], //2
                   [1,1,1,0,0,1,1,1,1,0,0,1,1,1,1], //3
                   [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1], //4
                   [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1], //5
                   [1,1,1,1,0,0,1,1,1,1,0,1,1,1,1], //6
                   [1,1,1,0,0,1,0,1,0,1,0,0,1,0,0], //7
                   [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1], //8
                   [1,1,1,1,0,1,1,1,1,0,0,1,1,1,1]];//9

  var fourFour =[[1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1], //0
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
  var soundCorrect = new buzz.sound("sounds/correct-guess.mp3");

  var gridCounter = 0;
  var turnCounter = 0;
  var clicked = false;
  var DEFAULT_TARGET = 20;

  var targetScoreInput;
  var spriteSizeInput;
  var orientationInput;

  var answer;
  var numberInGrid;
  var puzzles;

  var $targetScoreElem = $('#target-score').find('h2');
  var $userGuessElem1 = $('#results-text1').find('h3');
  var $userGuessElem2 = $('#results-text2').find('h3');
  var $userGuessElem3 = $('#results-text3').find('h3');

  var pOneScore = 0;
  var pTwoScore = 0;
  var $pOneScoreElem = $('#player-one-score').find('h2');
  var $pTwoScoreElem = $('#player-two-score').find('h2');

  init(); // start code

  function init () {
    bindStartButton();
    bindUserPass();
    bindUserGuess();
    bindReset();
  }

  // STEP 1
  function bindStartButton () {
    $('#start-button').on("click", function(){
      // feat. depending on what input, show different screen
      targetScoreInput = $('#set-target-score').val() || DEFAULT_TARGET;
      $targetScoreElem.text(targetScoreInput);

      spriteSizeInput = $('#set-sprite-size').val() || "3x3";
      // switch selected array

      var spriteWidth = parseInt(spriteSizeInput[0]);
      var spriteHeight = parseInt(spriteSizeInput[2]);

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
      var orientationChoice = orientationInput[0]; // change to .val()
      console.log(orientationChoice);
      if (orientationChoice === "N") { // N = Normal
        numberInGrid = numberInGrid;
      }
      else if (orientationChoice === "I") {
        numberInGrid = inverse(numberInGrid);
      }
      else if (orientationChoice === "M") {
        numberInGrid = mirror(numberInGrid);
      }
      else if (orientationChoice === "B") { // B = Both
        numberInGrid = inverseMirror(numberInGrid);
      }
      else {
        console.log("You've broken numGuess!");
      }

      $('#options').hide();
      $('#play-box').show();

      highlightPlayer();
      selectCell();
    });
  }

  function toTwoDArr (array) {
    var twoDArr = [];
    var timesToRun = array.length / 3;
    var offset = 0;
    for (var i = 0; i < timesToRun; i++){
      var tmp = [array[i + offset], array[i + offset + 1], array[i + offset + 2]];
      twoDArr.push(tmp);
      offset += 2;
    }
    return twoDArr;
  }

  function toOneDArr (array) {
    var oneDArr = [];
    for (var i=0; i < array.length; i++){
      for (var j=0; j < array[i].length; j++){
        oneDArr.push(array[i][j]);
      }
    }
    return oneDArr;
  }

  function inverse (array) {
    var inverseArray = [];
    var twoDArr = toTwoDArr(array);
    for (var i = twoDArr.length - 1; i >= 0; i--) {
      var tmp = [];
      for (var j = 0; j < twoDArr[i].length; j++){
        tmp.push(twoDArr[i][j]);
      }
      inverseArray.push(tmp);
    }
    var oneDArr = toOneDArr(inverseArray);
    return oneDArr;
  }

  function mirror (array) {
    var mirrorArray = [];
    var twoDArr = toTwoDArr(array);
    for (var i = 0; i < twoDArr.length; i++) {
      var tmp = [];
      for (var j = twoDArr[i].length - 1; 0 <= j ; j--){
        tmp.push(twoDArr[i][j]);
      }
      mirrorArray.push(tmp);
    }
    var oneDArr = toOneDArr(mirrorArray);
    return oneDArr;
  }

  function inverseMirror (array) {
    var inverseMirrorArray = [];
    for (var i = array.length - 1; i >=0; i--) {
      inverseMirrorArray.push(array[i]);
    }
    return inverseMirrorArray;
  }

  function generateNumber () { // generates random number from the chosen array
    answer = Math.floor(Math.random()*(10));
    numberInGrid = puzzles[answer];
    //console.log("gn", numberInGrid); // will console log an array many times when "coloring in" the grid to reset.
  }

  function highlightPlayer () {
    if (turnCounter % 2 === 0) {
      $('#player-one-score').css('background-color','blue').css('border','white solid 2px');
      $('#player-two-score').css('background-color','red').css('border-color','red');
    }
    else {
      $('#player-one-score').css('background-color','red').css('border-color','red');
      $('#player-two-score').css('background-color','blue').css('border','white solid 2px');
    }
  }

  function selectCell () {
    $('#user-pass').show();
    $('#reset-cells-button').hide();

    $userGuessElem1.text("");
    $userGuessElem2.text("");
    $userGuessElem3.text("");


    $('.game-cell').on("click", function() {
      if (!clicked) { // when click is false
        var cellId = parseInt($(this).attr('id').substring(1));
        var pixel = numberInGrid[cellId];

        if(pixel === 1) {
          $('.c' + cellId).css("background-color","black");
        }
        else {
          $('.c' + cellId).css("background-color","white");
        }

        gridCounter = gridCounter + 1;
        clicked = true;
        // console.log(gridCounter);
        //if (gridCounter >= numberInGrid.length) {
        //$userGuessElem1.text("The number is " + answer +".");
        //}
      }
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
          $userGuessElem3.text("Player One wins.  Thank you for playing numGuess."); // create modal
          $('#restart-button').show();
          $('#reset-cells-button').hide();
          $('#user-pass').hide();
          $('#user-guess').val('').selectpicker('refresh');
        }
        else if (pTwoScore >= targetScoreInput) {
          $userGuessElem3.text("Player Two wins. Thank you for playing numGuess.");
          $('#restart-button').show();
          $('#reset-cells-button').hide();
          $('#user-pass').hide();
          $('#user-guess').val('').selectpicker('refresh');
        }
      }
      $('.options-buttons li').removeClass('selected'); //stop guess selector from sticking
    });
  }

  function bindReset () {
    $('#restart-button').on("click", function(){
      $('#restart-button').hide();
      $('#start-button').click();
      $('#reset-cells-button').click();
      pOneScore = 0; // fix
      pTwoScore = 0; // fix
      $pOneScoreElem.text(pOneScore); // fix
      $pTwoScoreElem.text(pTwoScore); // fix
    });
  }

  function calculateScore (userGuess) {
    var pointsAwarded = answer + (numberInGrid.length - gridCounter);
    //console.log("cs", numberInGrid)
    if (userGuess === answer) {
      soundCorrect.play();
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
    $('#reset-cells-button').show();

    $('#reset-cells-button').off().on("click", function () {
      for(var i = 0; i < numberInGrid.length; i++) {
        $('.game-cell').css("background-color","red");
        generateNumber(); // ensure that the correct orientation mode is selected
        selectCell();
        $('#user-guess').val('').selectpicker('refresh');
      }
    });
  }

// ensure orientation stays the same throughout game
// add text explaining what mode you're in
// if nobody guesses the game hangs
// use append to extend grid

}); // do not remove