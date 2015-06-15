

  var printFibbonaci = function(n) {
  	var first = 0,
  		second = 1.
  		temp = 0;

  	for(var c=1;;c++) {
  		temp = second;
  		second = first + second;
  		first = temp;
  		if(isPrime(second)) {
			n--;
			if(n===0) {
				break;
			}
		}
  	}

  	return second;
  }

var isPrime = function (n) {
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
	if (n%2==0) return (n==2);
	if (n%3==0) return (n==3);
	var m=Math.sqrt(n);
	for (var i=5;i<=m;i+=6) {
		if (n%i==0)     return false;
		if (n%(i+2)==0) return false;
	}
	return true;
}

