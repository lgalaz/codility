(function() {
  'use strict';

  var solution = function(M){

    var value = M, reminder, sequence = [];

    while (value !== 0) {
      reminder = value % -2;
      value =  Math.floor(value / -2);

      if (reminder < 0) {
        reminder += 2;
        value += 1;
      }

      sequence.push(reminder);

    }

    return sequence;
  }

  //console.log(solution([1]));
  //console.log(solution(8));
  //console.log(solution(42));


}.call(this));
