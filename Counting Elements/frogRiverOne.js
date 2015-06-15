(function() {
  'use strict';

  var solution = function(x,a){
    var ceroed = [], count = 0, i;

    if (a.length === 0) {
      return -1;
    }

    for (i = 0; i < a.length; i++) {
      if (a[i] <= x) {

        if (typeof ceroed[a[i]-1] === 'undefined'){
          count++;
          ceroed[a[i]-1] = 1;
        }

        if (count === x) {
          return i;
        }
      }
    }

    return -1;
  }

  console.log(solution(5,[1,3,1,4,2,3,5,4]) === 6);
  console.log(solution(4,[4,1,3,1,4,2,5]) === 5);
  console.log(solution(1,[1]) === 0);
  console.log(solution(8,[2,1,3,4,3,1,2,4,1,1,5]) === -1);
  console.log(solution(2,[1]) === -1)

}.call(this));


