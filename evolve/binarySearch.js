

  var binarySearch = function(A, item) {
    var index = 0,
        start = 0,
        end = A.length-1,
        range = 0;

    if(A[end] === item) {
      return end;
    }    

    do{
      range = Math.floor((end - start)/2);
      index = start + range;
      if(A[index]>item) {
        end = index;
      } else if (A[index]<item) {
        start = index;
      }
    }while(A[index]!==item);

    return index;
  }

