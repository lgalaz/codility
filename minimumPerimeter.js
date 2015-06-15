(function() {
  'use strict';

  var minimumPerimeter = function(N){
    var b, currentP, lowestP = 2000000002, divisors = [];

    for(var a = 1; a <= Math.sqrt(N); a++ ){

      if(N % a !== 0){
        continue;
      }

      b = N/a;

      currentP = 2 * (a+b);

      lowestP = (lowestP < currentP) ? lowestP : currentP;
    }

    return lowestP;

  }

  console.log(minimumPerimeter(982451653));
}.call(this));
