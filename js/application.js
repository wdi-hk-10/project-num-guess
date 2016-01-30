$(document).ready(function(){ // do not remove - insert all code in here!

  var size3x3 = [[1,1,1,1,0,1,1,1,1], //0
                 [1,1,0,0,1,0,1,1,1], //1
                 [1,1,0,0,1,0,0,1,1], //2
                 [1,1,1,0,1,1,1,1,1], //3
                 [1,0,1,1,1,1,0,0,1], //4
                 [0,1,1,0,1,0,1,1,0], //5
                 [1,0,0,1,1,1,1,1,1], //6
                 [1,1,1,0,0,1,0,0,1], //7
                 [0,1,1,1,1,1,1,1,1], //8
                 [1,1,1,1,1,1,0,0,1]];//9

  var size3x4 = [[1,1,1,1,0,1,1,0,1,1,1,1], //0
                 [0,1,0,1,1,0,0,1,0,1,1,1], //1
                 [1,1,0,0,0,1,0,1,0,1,1,1], //2
                 [1,1,0,0,1,1,0,0,1,1,1,0], //3
                 [1,0,1,1,1,1,0,0,1,0,0,1], //4
                 [1,1,1,1,1,0,0,0,1,1,1,0], //5
                 [1,1,1,1,0,0,1,1,1,1,1,1], //6
                 [1,1,1,0,0,1,0,1,0,0,1,0], //7
                 [1,1,1,0,1,0,1,0,1,0,1,0], //8
                 [1,1,1,1,1,1,0,0,1,1,1,1]];//9

  var size3x5 = [[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1], //0
                 [0,1,0,1,1,0,0,1,0,0,1,0,1,1,1], //1
                 [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1], //2
                 [1,1,1,0,0,1,1,1,1,0,0,1,1,1,1], //3
                 [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1], //4
                 [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1], //5
                 [1,1,1,1,0,0,1,1,1,1,0,1,1,1,1], //6
                 [1,1,1,0,0,1,0,1,0,1,0,0,1,0,0], //7
                 [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1], //8
                 [1,1,1,1,0,1,1,1,1,0,0,1,1,1,1]];//9

  var soundIncorrect = new buzz.sound("sounds/incorrect-guess.mp3");
  var soundCorrect = new buzz.sound("sounds/correct-guess.mp3");
  var soundButtonClick = new buzz.sound("sounds/button-click.mp3"); // add after fixing event listeners!

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

  var pOneScore = 0;
  var pTwoScore = 0;

  init(); // start code

  function init () {
    bindStartButton();
    bindUserPass();
    bindUserGuess();
    bindReset();
  }

  // STEP 1 (This function needs breaking down into smaller chunks)
  function bindStartButton () {
    $('#start-button').on("click", function(){
      // feat. depending on what input, show different screen
      targetScoreInput = $('#set-target-score').val() || DEFAULT_TARGET;
      $('#target-score').text(targetScoreInput);

      spriteSizeInput = $('#set-sprite-size').val() || "3x3";

      var spriteWidth = parseInt(spriteSizeInput[0]);
      var spriteHeight = parseInt(spriteSizeInput[2]);

      //console.log(spriteSizeInput)
      if (spriteWidth === 3 && spriteHeight === 3)  {
        $('#instructions-screen').hide();
        $('#game-screen3x3').show();
        puzzles = size3x3;
      }
      else if (spriteWidth === 3 && spriteHeight === 4) {
        $('#instructions-screen').hide();
        $('#game-screen3x4').show();
        puzzles = size3x4;
      }
      else if (spriteWidth === 3 && spriteHeight === 5) {
        $('#instructions-screen').hide();
        $('#game-screen3x5').show();
        puzzles = size3x5;
      }
      else {
        console.log("You've broken numGuess!");
      }

      // recalculate array
      generateNumber();

      // ORIENTATION BUTTON
      orientationInput = $('#set-orientation').val() || "normal";
      if (orientationInput === "normal") {
      }
      else if (orientationInput === "inverse") {
        numberInGrid = inverse(numberInGrid);
      }
      else if (orientationInput === "mirror") {
        numberInGrid = mirror(numberInGrid);
      }
      else if (orientationInput === "inverse-mirror") {
        numberInGrid = inverseMirror(numberInGrid);
      }
      else {
        console.log("You've broken numGuess!");
      }

      $('#options-screen').hide();
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

  // This function could be replaced by calling both the above functions
  function inverseMirror (array) {
    var inverseMirrorArray = [];
    for (var i = array.length - 1; i >=0; i--) {
      inverseMirrorArray.push(array[i]);
    }
    return inverseMirrorArray;
  }

  // Generates random number from the chosen array
  function generateNumber () {
    answer = Math.floor(Math.random()*(10));
    numberInGrid = puzzles[answer];
  }

  function highlightPlayer () {
    if (turnCounter % 2 === 0) {
      $('#player-one').css({'background-color':'blue', 'border':'white solid 2px'});
      $('#player-two').css({'background-color':'red', 'border-color':'red'});
    }
    else {
      $('#player-one').css({'background-color':'red', 'border-color':'red'});
      $('#player-two').css({'background-color':'blue', 'border':'white solid 2px'});
    }
  }

  function selectCell () {
    $('#pass-button').show();
    $('#reset-cells-button').hide();

    $('#results-text1').text("");
    $('#results-text2').text("");
    $('#results-text3').text("");


    $('.game-cell').on("click", function() {
      if (!clicked) { // when click is false
        var cellId = parseInt($(this).attr('id').substring(1));
        var pixel = numberInGrid[cellId];

        if(pixel === 1) {
          $('.c' + cellId).css('background-color', 'black');
        }
        else {
          $('.c' + cellId).css('background-color', 'white');
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
    $('#pass-button').off().on("click", function() {
      if (clicked) { // when click is true
        clicked = false;
        turnCounter = turnCounter + 1;
        highlightPlayer();
      }
    })
  }

  // STEP 2B
  function bindUserGuess () {
    $('.guess-buttons').off().on("click", function() {
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
          $('#results-text3').text("Player 1 wins.  Thank you for playing."); // create modal
          $('#restart-button').show();
          $('#reset-cells-button').hide();
          $('#pass-button').hide();
        }
        else if (pTwoScore >= targetScoreInput) {
          $('#results-text3').text("Player 2 wins. Thank you for playing.");
          $('#restart-button').show();
          $('#reset-cells-button').hide();
          $('#pass-button').hide();
        }
      }
    });
  }
  // This function needs fixing
  function bindReset () {
    $('#restart-button').on("click", function(){
      $('#restart-button').hide();
      $('#start-button').click();
      $('#reset-cells-button').click();
      pOneScore = 0; // fix
      pTwoScore = 0; // fix
      $('#player-one-score').text(pOneScore); // fix
      $('#player-two-score').text(pTwoScore); // fix
    });
  }

  // calculates score
  function calculateScore (userGuess) {
    var bonus = (numberInGrid.length - gridCounter);
    var pointsAwarded = answer + bonus;
    //console.log("cs", numberInGrid)
    if (userGuess === answer) {
      soundCorrect.play();
      $('#results-text1').text("The number " + userGuess + " is correct!");
      $('#results-text2').text("You score " + pointsAwarded + " (" + answer + " + " + bonus + ") point(s).");
    }
    else {
      soundIncorrect.play();
      $('#results-text1').text("Wrong!  The number is " + answer + ", not " + userGuess + ".");
      $('#results-text2').text("Your opponent scores " + pointsAwarded + " (" + answer + " + " + bonus + ") point(s).");
    }
    if (turnCounter % 2 === 0 && userGuess === answer || turnCounter % 2 !== 0 && userGuess !== answer)  {
      pOneScore = pOneScore + pointsAwarded;
      $('#player-one-score').text(pOneScore);
    }
    else {
      pTwoScore = pTwoScore + pointsAwarded;
      $('#player-two-score').text(pTwoScore);
    }
  }

  // removes remaining squares to show answer
  function revealAnswer () {
    for(var i = 0; i < numberInGrid.length; i++) {
      if(numberInGrid[i] === 1) {
        $('.c'+ i).css('background-color', 'black');
      }
      else {
        $('.c'+ i).css('background-color', 'white');
      }
    }
  }

  // reset grid to background colour
  function resetGrid () {
    gridCounter = 0;
    $('#pass-button').hide();
    $('#reset-cells-button').show();

    $('#reset-cells-button').off().on("click", function () {
      for(var i = 0; i < numberInGrid.length; i++) {
        $('.game-cell').css('background-color', 'red');
        generateNumber(); // ensure that correct orientation mode is selected
        selectCell();
      }
    });
  }


}); // do not remove