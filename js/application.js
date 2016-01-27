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

  //var fourFour =[[1,1,1,1,1,1,0,1,1,0,1,1,1,1,1] //0
                //[1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1], //1
                //[1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1], //2
                //[1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1], //3
                //[1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1], //4
                //[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1], //5
                //[1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1], //6
                //[1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1], //7
                //[0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1], //8
                //[1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1]];//9

  var threeFive = [[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1] //0
                [0,1,0,1,1,0,0,1,0,0,1,0,1,1,1], //1
                [0,1,0,1,0,1,0,0,1,1,1,0,1,1,1], //2
                [1,1,0,0,0,1,0,1,0,0,0,1,1,1,0], //3
                [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1], //4
                [1,1,1,1,0,0,1,1,1,0,0,1,1,1,0], //5
                [0,1,1,1,0,0,1,1,0,1,0,1,0,1,0], //6
                [1,1,1,0,0,1,0,1,0,1,0,0,1,0,0], //7
                [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1], //8
                [0,1,0,1,0,1,0,1,1,0,0,1,1,1,0]];//9

  var threeFiveInverse = 0; // divide the array by its width, then switch either end (odd) or both sides (even)
  var threeFiveReverse = 0; // divide the array by it's height, then switch either end (odd) or both ends (even)
  var threeFiveInverseReverse = threeFive.reverse(); //reverse entire string

  var threeSix = [[0] //0
                [1], //1
                [2], //2
                [3], //3
                [4], //4
                [5], //5
                [6], //6
                [7], //7
                [8], //8
                [9]];//9

  var threeSixInverse = 0; // divide the array by its width, then switch either end (odd) or both sides (even
  var threeSixReverse = 0; // divide the array by it's height, then switch either end (odd) or both ends (even
  var threeSixInverseReverse = threeSix.reverse(); //reverse entire string

  var numberGridCounter = 0;
  var turnCounter = 0;



  $('#start-button').on("click", function(){
    //console.log("Jules");
    $('#game-screen').show();
    $('#play-box').show();
    $('#instruct-screen').hide();
    $('#options').hide();
    // reset player scores to zero

    // update target score
    //setTargetScore()
    // append extra rows to larger grids if applicable
  });


  // TARGET SCORE BUTTON
  // function setTargetScore() {
    $('#set-target-score').one("change", function() {
      var setTargetScore = $(this).val();
      console.log(setTargetScore);
      var targetScore = $('#target-score').find('h3').text(setTargetScore);
    });
  //}

  // SPRITE SIZE BUTTON
  // switch selected array
  // append to extend grid

  // ORIENTATION BUTTON
  // recalculate the array



  var numberInGrid;
  var answer;

  function generateNumber() { // generates a random number from the chosen array
    answer = Math.floor(Math.random()*(10));
    numberInGrid = threeThree[answer]; // need to replace threeThree with a selectable array
    console.log(numberInGrid);
  }

  //test = [1,0,1,0,1,0,1,0,1]

  var boxId;
  // turn the grid black or white
  function selectBoxes () {
    $('.game-box').one('click', function() {
      boxId = parseInt($(this).attr('id').substring(1));
      var pixel = numberInGrid[boxId];
      //console.log("boxId " + boxId);
      //console.log("testID " + test[boxId]);
        if(pixel === 1) {
          $('#c' + boxId).css("background-color","black");
        }
        else {
          $('#c' + boxId).css("background-color","white");
        }
      turnCounter = turnCounter + 1
      console.log("turn Counter: " + turnCounter);
    });
  }

  // GUESS BUTTON
  $('#user-guess').on("change", function() {
    //console.log($(this).val());
    var userGuess = parseInt($(this).val()); // checks if user has guessed the number
    console.log(typeof(userGuess));
    console.log(userGuess);
    console.log(answer);
    console.log(numberInGrid)
    if (userGuess === answer) {
      console.log("Correct! You get " + answer + " point(s).");
      // add points to user score
    }
    else {
      console.log("Wrong!  The correct answer is " + answer + " so your opponent gets " + answer + " point(s).");
      // add points to opponent's score
    }

    //revealNumber() // reveal number
    // check score against target
    // if target is reached, end of game
    generateNumber(); // otherwise, generate another number
    selectBoxes();
    boxReset(); // reset game-box backgrounds to orange
    // selectBoxes(); NOT WORKING
  });


  function boxReset () { // reset game box to orange
    for(var i = 0; i < numberInGrid.length; i++) {
      $('.game-box').css("background-color","orange");
    }
  }


  function revealNumber() {  // this function isn't workig yet
    console.log("Bum");
    for(var i = 0; i < numberInGrid.length; i++) {
      if(numberInGrid[boxId] === 1) {
        $('#c'+ boxId).css("background-color","black");
      }
      else {
        $('#c'+ boxId).css("background-color","white");
      }
    }
  }

  generateNumber(); // this function is called to start the code
  selectBoxes();
}); // do not remove