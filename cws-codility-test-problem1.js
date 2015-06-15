(function() {
  'use strict';

  var solution = function(a){
    var length = 0, index =0;
    while(a[index] != -1) {

      index = a[index];
      length = length +1;
    }
    
    length = length +1;
    return length;
  }




  console.log(solution([1,2,3,4,5,6,7,8,9,-1]));


}.call(this));