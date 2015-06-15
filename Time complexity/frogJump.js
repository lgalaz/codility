(function() {
  'use strict';

  var solution = function(x, y, d){
    var jumps, reminder;
    jumps = Math.floor((y-x)/d);
    reminder = (y - x) % d;
    if( reminder > 0) {
      jumps++;
    }

    return jumps;
  }

  console.log(solution(10,85,30) === 3);


}.call(this));
