var fourFour =   [[1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1], //0
                //[1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1], //1
                //[1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1], //2
                //[1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1], //3
                //[1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1], //4
                //[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1], //5
                //[1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1], //6
                //[1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1], //7
                //[0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1], //8
                //[1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1]];//9

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

  //re-ARRAY-nger

var threeFour=[[1,1,1,
                1,0,1,
                1,0,1,
                1,1,1], //0

               [0,1,0,
                1,1,0,
                0,1,0,
                1,1,1], //1

               [1,1,0,
                0,0,1,
                0,1,0,
                1,1,1], //2

               [1,1,0,
                0,1,1,
                0,0,1,
                1,1,0], //3

               [1,0,1,
                1,1,1,
                0,0,1,
                0,0,1], //4

               [1,1,1,
                1,1,0,
                0,0,1,
                1,1,0], //5

               [1,1,1,
                1,0,0,
                1,1,1,
                1,1,1], //6

               [1,1,1,
                0,0,1,
                0,1,0,
                0,1,0], //7

               [1,1,1,
                0,1,0,
                1,0,1,
                0,1,0], //8

               [1,1,1,
                1,1,1,
                0,0,1,
                1,1,1]];//9

var threeFive=[[1,1,1,
                1,0,1,
                1,0,1,
                1,0,1,
                1,1,1] //0


               [0,1,0,
                1,1,0,
                0,1,0,
                0,1,0,
                1,1,1], //1


               [1,1,1,
                0,0,1,
                1,1,1,
                1,0,0,
                1,1,1], //2

               [1,1,1,
                0,0,1,
                1,1,1,
                0,0,1,
                1,1,1], //3

               [1,0,1,
                1,0,1,
                1,1,1,
                0,0,1,
                0,0,1], //4

               [1,1,1,
                1,0,0,
                1,1,1,
                0,0,1,
                1,1,1], //5

               [1,1,1,
                1,0,0,
                1,1,1,
                1,0,1,
                1,1,1], //6

               [1,1,1,
                0,0,1,
                0,1,0,
                1,0,0,
                1,0,0], //7

               [1,1,1,
                1,0,1,
                1,1,1,
                1,0,1,
                1,1,1], //8

               [1,1,1,
                1,0,1,
                1,1,1,
                0,0,1,
                1,1,1]];//9


//Normal
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

//Mirror
[
  [3,2,1],
  [6,5,4],
  [9,8,7]
]

//Inverse
[
  [7,8,9],
  [4,5,6],
  [1,2,3]
]

//Inverse Mirror
[
  [9,8,7],
  [6,5,4],
  [3,2,1]
]

//Seven (Normal)
[1,1,1,
 0,0,1,
 0,1,0,
 1,0,0,
 1,0,0]

//Seven (Mirror)
[1,1,1,
 1,0,0,
 0,1,0,
 0,0,1,
 0,0,1]

//Seven (Inverse)
[1,0,0,
 1,0,0,
 0,1,0,
 0,0,1,
 1,1,1]

//Seven (Both)
[0,0,1,
 0,0,1,
 0,1,0,
 1,0,0,
 1,1,1]



       if (pOneScore >= targetScoreInput) { // target is reached, end of game
          $userGuessElem3.text("Player One wins.  Thank you for playing numGuess."); // create modal
          $('#restart-button').show();
          $('#reset-cells-button').hide();
          $('#pass-button').hide();
          $('#guess-button').val('').selectpicker('refresh');
        }
        else if (pTwoScore >= targetScoreInput) {
          $userGuessElem3.text("Player Two wins. Thank you for playing numGuess.");
          $('#restart-button').show();
          $('#reset-cells-button').hide();
          $('#pass-button').hide();
          $('#guess-button').val('').selectpicker('refresh');
        }
      }
      $('.options-buttons li').removeClass('selected'); //stop guess selector from sticking
    });
  }


function calculateScore (userGuess) {
    var bonus = (numberInGrid.length - gridCounter);
    var pointsAwarded = answer + bonus;
    //console.log("cs", numberInGrid)
    if (userGuess === answer) {
      soundCorrect.play();
      if (turnCounter % 2 === 0) {
        $userGuessElem1.text(userGuess + " is correct Player 1!");
        $userGuessElem2.text("You score " + pointsAwarded + " (" + answer + " + " + bonus + ") point(s).");
        pOneScore = pOneScore + pointsAwarded;
        $pOneScoreElem.text(pOneScore);
      }
      else {
        $userGuessElem1.text(userGuess + " is correct Player 2!");
        $userGuessElem2.text("You score " + pointsAwarded + " (" + answer + " + " + bonus + ") point(s).");
        pTwoScore = pTwoScore + pointsAwarded;
        $pTwoScoreElem.text(pTwoScore);
      }
    }
    else {
      soundIncorrect.play();
      if (turnCounter % 2 === 0) {
        $userGuessElem1.text(userGuess + " is wrong!  The correct answer is " + answer + ".");
        $userGuessElem2.text("Player 2 scores " + pointsAwarded + " (" + answer + " + " + bonus + ") point(s).");
        pTwoScore = pTwoScore + pointsAwarded;
        $pTwoScoreElem.text(pTwoScore);

      }
      else {
        $userGuessElem1.text(userGuess + " is wrong!  The correct answer is " + answer + ".");
        $userGuessElem2.text("Player 1 scores " + pointsAwarded + " (" + answer + " + " + bonus + ") point(s).");
        pOneScore = pOneScore + pointsAwarded;
        $pOneScoreElem.text(pOneScore);
      }
    }
  }