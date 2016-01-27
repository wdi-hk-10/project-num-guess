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