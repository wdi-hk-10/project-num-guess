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
  var boxes = $('.game-box');


  $('#start-button').on("click", function(){
    //console.log("Jules");
    $('#game-screen').show();
    $('#play-box').show();
    $('#instruct-screen').hide();
    $('#options').hide();
    // update target board

    // append extra rows to larger grids if applicable

    // reset player scores to zero

  });

  var numberInGrid;
  // generates a random number from the chosen array
  function revealNumber() {
    var random = Math.floor(Math.random()*(10));
    numberInGrid = threeThree[random]; // need to replace threeThree with a selectable array
    console.log(numberInGrid);
  }

  //test = [1,0,1,0,1,0,1,0,1]


  // turn the grid black or white
  revealNumber();
  $('.game-box').on('click', function() {
    var boxId = parseInt($(this).attr('id').substring(1));
    var sprite = numberInGrid[boxId];
    //console.log("boxId " + boxId);
    //console.log("testID " + test[boxId]);
      if(sprite === 1) {
        $('#c' + boxId).css("background-color","black");
      }
      else {
        $('#c' + boxId).css("background-color","white");
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