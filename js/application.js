$(document).ready(function(){ // do not remove - insert all code in here!

  var threeThree = [[1,1,1,1,0,1,1,1,1],//0
                    [1,1,0,0,1,0,1,1,1], //1
                    [1,1,0,0,1,0,1,1,1], //2
                    [1,1,1,0,1,1,1,1,1], //3
                    [1,0,1,1,1,1,0,0,1], //4
                    [0,1,1,0,1,0,1,1,0], //5
                    [1,0,0,1,1,1,1,1,1], //6
                    [1,1,1,0,0,1,0,0,1], //7
                    [0,1,1,1,1,1,1,1,1], //8
                    [1,1,1,1,1,1,0,0,1]];//9

  var threeThreeInverse = 0; // divide the array by its width, then switch either end (odd) or both sides (even)
  var threeThreeReverse = 0;// divide the array by it's height, then switch either end (odd) or both ends (even)
  var threeThreeInverseReverse = threeThree.reverse(); //reverse entire string

  var threeFour = [[0,1,0,1,0,1,1,0,1,0,1,0],//0
                   [0,1,0,1,1,0,0,1,0,1,1,1], //1
                   [1,1,0,0,0,1,0,1,0,1,1,1], //2
                   [1,1,0,0,1,1,0,0,1,1,1,0], //3
                   [1,0,1,1,1,1,0,0,1,0,0,1], //4
                   [1,1,1,1,1,0,0,0,1,1,1,0], //5
                   [0,1,1,1,1,0,1,0,1,0,1,0], //6
                   [1,1,1,0,0,1,0,1,0,0,1,0], //7
                   [1,1,1,0,1,0,1,0,1,0,1,0], //8
                   [0,1,1,1,0,1,0,1,1,0,0,1]];//9

  var threeFourInverse = 0;// divide the array by its width, then switch either end (odd) or both sides (even)
  var threeFourReverse = 0; // divide the array by it's height, then switch either end (odd) or both ends (even)
  var threeFourInverseReverse = threeFour.reverse(); //reverse entire string

  var numberGridCounter = 0;
  var turnCounter = 0;

  var answer;
  var numberInGrid;

  var $targetScoreElem = $('#target-score').find('h3');

  // STEP 1
  function bindStartButton () {
    $('#start-button').on("click", function(){
      // feat. get input from dropdown
      // feat. depending on what input, show different screen
      var targetScoreInput = $('#set-target-score').val() || 50;
      $targetScoreElem.text(targetScoreInput);
      // var spriteSize

      $('#instruct-screen').hide();
      $('#game-screen').show();

      $('#options').hide();
      $('#play-box').show();

      generateNumber();
      highlightPlayer();
      selectCell();
    });
  }

  function generateNumber() { // generates a random number from the chosen array
    answer = Math.floor(Math.random()*(10));
    numberInGrid = threeThree[answer]; // need to replace threeThree with a selectable array
    console.log(numberInGrid);
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
    $('.game-cell').one('click', function() {
      var cellId = parseInt($(this).attr('id').substring(1));
      var pixel = numberInGrid[cellId];

      if(pixel === 1) {
        $('#c' + cellId).css("background-color","black");
      }
      else {
        $('#c' + cellId).css("background-color","white");
      }

      bindUserPass();
      bindUserGuess();
    });
  }

  // STEP 2A
  function bindUserPass () {
    $('#user-pass').off().on("click", function() {
      turnCounter = turnCounter + 1;
      highlightPlayer();
    })
  }

  // STEP 2B
  function bindUserGuess () {
    $('#user-guess').off().on("change", function() {
      var userGuess = parseInt($(this).val()); // checks if user has guessed the number
      // console.log(typeof(userGuess));
      // console.log(userGuess);
      // console.log(answer);
      // console.log(numberInGrid)

      // calcuate score
      if (userGuess === answer) {
        console.log("Correct! You get " + answer + " point(s).");
        // add points to user score
        // check which player's turn
        // add the answer to the player
        // if (turnCounter % 2 === 0)
      }
      else {
        console.log("Wrong!  The correct answer is " + answer + " so your opponent gets " + answer + " point(s).");
        // add points to opponent's score
        // check which player's turn
        // add the answer to the opponent
      }

      // switch turn
      turnCounter = turnCounter + 1;
      highlightPlayer();
      revealAnswer();
      resetGrid();

      // if target is reached, end of game
      // generateNumber(); // otherwise, generate another number
      // selectCell();
      // boxReset(); // reset game-box backgrounds to orange
      // selectCell(); NOT WORKING
    });
  }

  function revealAnswer() {  // this function isn't workig yet
    for(var i = 0; i < numberInGrid.length; i++) {
      if(numberInGrid[i] === 1) {
        $('#c'+ i).css("background-color","black");
      }
      else {
        $('#c'+ i).css("background-color","white");
      }
    }
  }

  function resetGrid () { // reset game box to orange
    // show the button
    // if player click on button
    // reset the cells
    $('#reset-cell-btn').on("click", function () {
      for(var i = 0; i < numberInGrid.length; i++) {
        $('.game-cell').css("background-color","orange");
        generateNumber();
        selectCell();
      }
    });
  }

  // SPRITE SIZE BUTTON
  // switch selected array
  // append to extend grid

  // ORIENTATION BUTTON
  // recalculate the array

  bindStartButton()
}); // do not remove