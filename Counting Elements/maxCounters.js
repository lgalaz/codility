(function() {
  'use strict';

  var solution = function(N , A){
    var i, counters = [], max = 0, lastMax = 0;

    for (i = 0; i < N; i++) {
      counters[i] = 0;
    }

    for (i = 0; i < A.length; i++) {
      if (A[i] <= N){
        counters[A[i]-1] = (lastMax > counters[A[i]-1]) ? lastMax : counters[A[i]-1];
        counters[A[i]-1]++;
        max = (counters[A[i]-1] > max) ? counters[A[i]-1] : max;
      } else {
        lastMax = max;
      }
    }

    for (i = 0; i < N; i++) {
      counters[i] = (lastMax > counters[i]) ? lastMax : counters[i];
    }

    return counters;
  }

  console.log(solution(5,[3,4,4,6,1,4,4]) === [3,2,2,4,2]);
  //console.log(solution(2,[3]) === [0,0]);


}.call(this));


