(function() {
  'use strict';

    var solution = function(a){
    var ceroed = [], length, index, current;

    length = a.length;

    if(length < 1){
      return 1;
    }

    for(var i = 0; i < length; i++){
      ceroed.push(0);
    }

    for(var j = 0; j < length; j++){
      current = a[j];
      if(current > length){
        continue;
      }

      ceroed[current-1] = 1;
    }

    index =  ceroed.indexOf(0);

    if(index === -1){
      return length + 1;
    }

    return index+1;

  }

  console.log(solution([1,2]) === 3);
  console.log(solution([2,3,1,5]) === 4);


}.call(this));
