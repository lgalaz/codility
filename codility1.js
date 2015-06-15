(function() {
  'use strict';

  var solution = function(X,A){
    var equal = [], different = [], i;

    if (A.length < 1) {
      return -1
    }

    for (i = 0; i < A.length; i++ ) {
      equal[i] = (A[i] === X) ? 1 : 0;

      if(i>0){
        equal[i] = equal[i] + equal[i-1];
      }
    }

    for (i = A.length-1; i >= 0; i-- ) {
      different[i] = (A[i] !== X) ? 1 : 0;

      if(i<=A.length-2){
        different[i] = different[i] + different[i+1];
      }
    }

    for (i = 1; i < A.length; i++) {
      if(equal[i-1] === different[i]){
        return i;
      }
    }

    return -1;

  }

  console.log(solution(1, [1]) === -1);
  console.log(solution(5, [5,5,1,7,2,3,5]) === 4 );
  console.log(solution(5, [5,1]) === 1 );
  console.log(solution(5, [5,5,1]) === 1 );

}.call(this));
