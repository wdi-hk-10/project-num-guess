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

  var threeThreeMirror = 0; // divide the array by its width, then switch either end (odd) or both sides (even)
  var threeThreeInvert = 0;// divide the array by it's height, then switch eiter end (odd) or both ends (even)
  var threeThreeMirrorInvert = 0; //reverse the entire string

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

  var threeFourMirror = 0;// divide the array by its width, then switch either end (odd) or both sides (even)
  var threeFourInvert = 0; // divide the array by it's height, then switch eiter end (odd) or both ends (even)
  var threeFourMirrorInvert = 0; //reverse the entire string

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

  var threeFiveMirror = 0; // divide the array by its width, then switch either end (odd) or both sides (even)
  var threeFiveInvert = 0; // divide the array by it's height, then switch eiter end (odd) or both ends (even)
  var threeFiveMirrorInvert = 0;//reverse the entire string

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


  //function setTargetScore() {
    $('#set-target-score').on("change", function() {
      var setTargetScore = $(this).val();
      console.log(setTargetScore);
      var targetScore = $('#target-score').find('h3').text(setTargetScore);
    });
  //}

  var numberInGrid;
  var answer;
  // generates a random number from the chosen array
  function revealNumber() {
    answer = Math.floor(Math.random()*(10));
    numberInGrid = threeThree[answer]; // need to replace threeThree with a selectable array
    console.log(numberInGrid);
  }

  //test = [1,0,1,0,1,0,1,0,1]


  // turn the grid black or white
  revealNumber();
  $('.game-box').on('click', function() {
    var boxId = parseInt($(this).attr('id').substring(1));
    var pixel = numberInGrid[boxId];
    //console.log("boxId " + boxId);
    //console.log("testID " + test[boxId]);
      if(pixel === 1) {
        $('#c' + boxId).css("background-color","black");
      }
      else {
        $('#c' + boxId).css("background-color","white");
      }
  });

  $('#user-guess').on("change", function() {
    //console.log($(this).val());
    var userGuess = parseInt($(this).val()); // checks if user has guessed the number
    console.log(typeof(userGuess));
    console.log(userGuess);
    console.log(answer);
    console.log(numberInGrid)
    if (userGuess === answer)
      console.log("well done");
    else {
      console.log("loser!");
    }
  });

  /* No longer using the function below
  function populate() {
    for(var i = 0; i < test.length; i++) {
      if(test[i] === 1) {
        $('#c'+i).css("background-color","black");
      }
      else {
        $('#c'+i).css("background-color","white");
      }
    }
  } */
  // populate();




}); // do not remove