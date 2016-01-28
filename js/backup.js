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

  var threeSixInverse = 0; // divide array by its "width", then switch either end (odd) or both sides (even)
  var threeFSixReverse = 0; // divide array by it's "height", then switch either end (odd) or both ends (even)
  // var threeSixInverseReverse = threeFive.clone()...; //reverse entire string

  //re-ARRAY-nger

//reverse an Reverse an array without modifying the original one
function reverse(a) {
  var temp = [];
    for (var i = a.length - 1; i >=0; i--) {
        temp.push(a[i]);
    }
    return temp;
}



var array = [1,2,3,4,5,6,7,8,9];

function reverseArray(array) {
  var reverseArray = [];
    for (var i = array.length - 1; i >=0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

var reversed = reverseArray(array);


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
                1,1,1]  //0


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
</div> <!-- row -->
          <div class="row">
            <button id="user-pass" class="btn btn-lg btn-default">PASS</button>
          </div> <!-- row -->
          <div class="row">
            <button id="reset-cells" class="btn btn-lg btn-default" style="display: none">RESET</button>
          </div> <!-- row -->

Normal
[
 [1,2,3],
 [4,5,6],
 [7,8,9]
]

Mirror
[
 [3,2,1],
 [6,5,4],
 [9,8,7]
]

Inverse
[
  [7,8,9],
  [4,5,6],
  [1,2,3]
]

Inverse Mirror
[
  [9,8,7],
  [6,5,4],
  [3,2,1]
]