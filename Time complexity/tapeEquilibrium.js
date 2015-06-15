(function() {
  'use strict';

  var solution = function(a){
    var min, current, sumLeft, sumRight, candidate;

    sumRight = a.reduce(function(prev, cur) {
      return prev + cur;
    });

    sumLeft = a[0];

    sumRight -= sumLeft;

    min = Math.abs(sumLeft-sumRight);

    for(var i=1; i < a.length-1; i++){
        current = a[i];

        sumLeft += current;

        sumRight -= current;

        candidate = Math.abs(sumLeft-sumRight);

        min = (candidate < min) ? candidate : min;
    }

    return min;
  }

  console.log(solution([3,1,2,4,3]) === 1);


}.call(this));
