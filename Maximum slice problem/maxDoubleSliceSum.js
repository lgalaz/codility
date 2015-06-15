(function() {
  'use strict';

  var solution = function(A){

    var fromEnd = [], fromStart =[], max = 0, i;

    for (i = 1; i< 3; i++) {
      fromEnd[i-1] = 0;
      fromStart[A.length-i] = 0;
    }

    for (i = 1; i< A.length; i++ ) {
      fromEnd[i] = Math.max(0, fromEnd[i-1] + A[i]);
    }

    for (i = A.length-2; i>= 0; i-- ) {
      fromStart[i] = Math.max(0, fromStart[i+1] + A[i]);
    }

    for (i = 1; i < A.length-1; i++) {
      max = Math.max(max, fromStart[i+1] + fromEnd[i-1]);
    }

    return max;

  }

  console.log(solution([3,2,6,-1,4,5,-1,2]));


}.call(this));
