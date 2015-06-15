

  var printFibbonaci = function(n) {
  	var first = 0,
  		second = 1.
  		temp = 0;

  	if(n===1) {
  		return first;
  	}

  	if(n===2) {
  		return second;
  	}

  	for(var c=1;c<n;c++) {
  		temp = second;
  		second = first + second;
  		first = temp;
  	}

  	return second;
  }

