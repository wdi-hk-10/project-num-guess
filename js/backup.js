var fourFour =  [[1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1], // 0
                 [1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1], // 1
                 [1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1], // 2
                 [1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1], // 3
                 [1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1], // 4
                 [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1], // 5
                 [1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1], // 6
                 [1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1], // 7
                 [0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1], // 8
                 [1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1]];// 9

var threeSix = [[1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1]  //0
                [0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1], //1
                [2], //2
                [3], //3
                [4], //4
                [5], //5
                [6], //6
                [7], //7
                [8], //8
                [9]];//9

var threeFour = [[1,1,1,
                  1,0,1,
                  1,0,1,
                  1,1,1], // 0

                 [0,1,0,
                  1,1,0,
                  0,1,0,
                  1,1,1], // 1

                 [1,1,0,
                  0,0,1,
                  0,1,0,
                  1,1,1], // 2

                 [1,1,0,
                  0,1,1,
                  0,0,1,
                  1,1,0], // 3

                 [1,0,1,
                  1,1,1,
                  0,0,1,
                  0,0,1], // 4

                 [1,1,1,
                  1,1,0,
                  0,0,1,
                  1,1,0], // 5

                 [1,1,1,
                  1,0,0,
                  1,1,1,
                  1,1,1], // 6

                 [1,1,1,
                  0,0,1,
                  0,1,0,
                  0,1,0], // 7

                 [1,1,1,
                  0,1,0,
                  1,0,1,
                  0,1,0], // 8

                 [1,1,1,
                  1,1,1,
                  0,0,1,
                  1,1,1]];// 9

var threeFive = [[1,1,1,
                  1,0,1,
                  1,0,1,
                  1,0,1,
                  1,1,1] // 0


                 [0,1,0,
                  1,1,0,
                  0,1,0,
                  0,1,0,
                  1,1,1], // 1


                 [1,1,1,
                  0,0,1,
                  1,1,1,
                  1,0,0,
                  1,1,1], // 2

                 [1,1,1,
                  0,0,1,
                  1,1,1,
                  0,0,1,
                  1,1,1], // 3

                 [1,0,1,
                  1,0,1,
                  1,1,1,
                  0,0,1,
                  0,0,1], // 4

                 [1,1,1,
                  1,0,0,
                  1,1,1,
                  0,0,1,
                  1,1,1], // 5

                 [1,1,1,
                  1,0,0,
                  1,1,1,
                  1,0,1,
                  1,1,1], // 6

                 [1,1,1,
                  0,0,1,
                  0,1,0,
                  1,0,0,
                  1,0,0], // 7

                 [1,1,1,
                  1,0,1,
                  1,1,1,
                  1,0,1,
                  1,1,1], // 8

                 [1,1,1,
                  1,0,1,
                  1,1,1,
                  0,0,1,
                  1,1,1]];// 9


  // re-ARRAY-nger

  // Normal
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

// Mirror
[
  [3,2,1],
  [6,5,4],
  [9,8,7]
]

// Inverse
[
  [7,8,9],
  [4,5,6],
  [1,2,3]
]

// Inverse Mirror
[
  [9,8,7],
  [6,5,4],
  [3,2,1]
]

// Seven (Normal)
[1,1,1,
 0,0,1,
 0,1,0,
 1,0,0,
 1,0,0]

// Seven (Mirror)
[1,1,1,
 1,0,0,
 0,1,0,
 0,0,1,
 0,0,1]

// Seven (Inverse)
[1,0,0,
 1,0,0,
 0,1,0,
 0,0,1,
 1,1,1]

// Seven (Inverse Mirror)
[0,0,1,
 0,0,1,
 0,1,0,
 1,0,0,
 1,1,1]


  // STEP 1
  function bindStartButton () {
    $('#start-button').on("click", function(){
      // feat. depending on what input, show different screen
      targetScoreInput = $('#set-target-score').val() || DEFAULT_TARGET;
      $targetScoreElem.text(targetScoreInput);

      puzzleSize();

  });

  // STEP 1
  function puzzleSize () {
    $('#start-button').on("click", function(){
      // feat. depending on what input, show different screen
      targetScoreInput = $('#set-target-score').val() || DEFAULT_TARGET;
      $targetScoreElem.text(targetScoreInput);

      spriteSizeInput = $('#set-sprite-size').val() || "3x3";

      var spriteWidth = parseInt(spriteSizeInput[0]);
      var spriteHeight = parseInt(spriteSizeInput[2]);

      console.log(spriteSizeInput)
      if (spriteWidth === 3 && spriteHeight === 3)  {
        $('#instructions-screen').hide();
        $('#game-screen3x3').show();
        puzzles = threeThree;
      }
      else if (spriteWidth === 3 && spriteHeight === 4) {
        $('#instructions-screen').hide();
        $('#game-screen3x4').show();
        puzzles = threeFour;
      }
      else if (spriteWidth === 3 && spriteHeight === 5) {
        $('#instructions-screen').hide();
        $('#game-screen3x5').show();
        puzzles = threeFive;
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
