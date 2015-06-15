(function() {
  'use strict';

  var findBlocks = function(A){
    var peaks = [], found = [], blockSize, blockNr, foundCount;

    for (var i = 1; i < A.length-1 ; i++){
      if( (A[i] > A[i-1]) && ( A[i] > A[i+1] )){
        peaks.push(i);
      }
    }

    if(peaks.length === 0){
      return 0;
    }

    for (var size = peaks.length; size >= 0; size --) {

      if(A.length % size === 0){
        blockSize = Math.floor(A.length / size);
        found = [];
        for(var x = 0; x <= size; x++){
          found.push(false);
        }
        foundCount = 0;

        for(var p = 0; p < peaks.length; p++){
          blockNr = Math.floor(peaks[p]/blockSize)
          if(!found[blockNr]){
            found[blockNr] = true;
            foundCount++;
          }
        }

        if(foundCount === size){
          return size;
        }

      }

    }

    return 0;

  }

  findBlocks([1,2,3,4,3,4,1,2,3,4,6,2]);


}.call(this));
