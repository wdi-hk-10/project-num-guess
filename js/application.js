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

  var threeThreeMirror // divide the array by its width, then switch either end (odd) or both sides (even)
  var threeThreeInvert
  var threeThreeMirrorInvert //reverse the entire string

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
    $('#game-screen').show();
    $('#play-box').show();
    $('#instruct-screen').hide();
    $('#options').hide();
  });

  //randomly generates a random number from the chosen array
  function generateNum() {
    var bitNum = Math.floor(Math.random()*(10));
    var test = threeThree[bitNum]; // need to replace with a selectable array
  }

  test =  [1,1,1,1,0,0,1,0,0]

  // puts number in the grid
  function populate() {
    for(var i = 0; i < test.length; i++) {
      if(test[i] === 1) {
        $('#c'+i).css("background-color","black");
      }
      else {
        $('#c'+i).css("background-color","white");
      }
    }
  }
  populate();

//$('#c1').css("background-color","black");
//console.log($('.game-box'))
//var x = $(this).attr('id');
//console.log(x);








}); // do not remove