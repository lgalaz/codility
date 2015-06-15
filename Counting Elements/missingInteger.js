
(function() {
  'use strict';

  var solution = function(A){
    var i, ceroed = [] ;

    for (i = 0; i <= A.length; i++) {
      ceroed[i] = 0;
    }

    for (i = 0; i < A.length; i++) {
      if (A[i] > 0 && A[i] <= A.length) {
        ceroed[A[i] - 1] = 1;
      }
    }

    i = (ceroed.indexOf(0) !== -1) ? ceroed.indexOf(0) + 1 : A.length+1;

    return i;
  }

  //console.log(solution([1,3,6,4,1,2]) === 5);
  console.log(solution([1]) === 2);
  //console.log(solution([3]) === 1);
  //console.log(solution([-22]) === 1);


}.call(this));


