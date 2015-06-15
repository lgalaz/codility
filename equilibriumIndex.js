(function() {
  'use strict';

  var solution = function(A){
    var fromLeft = [], fromRight =[], i;

    if((A.length) === 1){
      return 0;
    }

    fromLeft[0] = A[0];
    fromRight[0] = A[0];
    fromLeft[A.length-1] = A[A.length-1];
    fromRight[A.length-1] = A[A.length-1];


    for (i = 1; i< A.length-1; i++ ) {
      fromLeft[i] = fromLeft[i-1] + A[i];
    }

    for (i = A.length-2; i> 0; i-- ) {
      fromRight[i] = fromRight[i+1] + A[i];
    }

    if (0 === fromRight[1]) {
      return 0;
    }

    if (0 === fromLeft[A.length-2]) {
      return A.length-1;
    }

    for (i = 1; i <= A.length-2; i++) {
      if(fromRight[i+1] === fromLeft[i-1]){
        return i;
      }
    }

    return -1;
  }

  console.log(solution([1,2,-3,0]));
  //console.log(solution([0,0]));
  // console.log(solution([-1,-1,1]));
  //console.log(solution([1,2,1]));
  //console.log(solution([-1,3,-4,5,1,-6,2,1]));


}.call(this));
