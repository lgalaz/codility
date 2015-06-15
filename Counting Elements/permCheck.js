(function() {
  'use strict';

  var solution = function(a){
    var ceroed = [], index, i, isPerm;

    if(a.length === 0){
      return 0;
    }

    for(i = 0; i < a.length; i++){
      ceroed[i] = 0;
    }

    for(i = 0; i < a.length; i++){
      if(a[i] <= a.length) {
        ceroed[a[i] - 1] = 1;
      }
    }

    index = ceroed.indexOf(0);

    isPerm = (index !== -1) ? 0 : 1;

    return isPerm;
  }

  console.log(solution([4,1,3,2]) === 1);
  console.log(solution([4,1,3]) === 0);
  console.log(solution([1]) === 1);
  console.log(solution([2]) === 0 );

}.call(this));

