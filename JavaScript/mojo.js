/************************************************************************************************
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
************************************************************************************************/

var num1 = 1;
var num2 = 20;
var smallestnum = function(snum, lnum){
	
		var b = snum;
	for(i=1; i<=lnum; i++){
	    var b = b * i;
	    var product = b;
	};
	console.log(snum + " to " + lnum +": Product is " + product);
	var estimate = product;
	if (lnum > 8) {
		if (15 > lnum > 12) {
			var estimate = product / (lnum * 8);
		} else if (17 > lnum > 14){
			var estimate = product / (lnum * 64);
		} else if ( lnum === 17){
			var estimate = product / (lnum * 1024);
		}  else if ( lnum === 18){
			var estimate = product / (lnum * 4096);
		} else if ( lnum === 20){
			var estimate = product / (lnum * 2211840);
		}	else {
			var estimate = product / lnum;
		};
		
		var strestnum = estimate.toString();
		var two = strestnum.length - 1;
		var zero = strestnum.charAt(two)
		while (zero === "0") {
			var estimate = estimate / 10;
			var strestnum = estimate.toString();
			var two = strestnum.length - 1;
			var zero = strestnum.charAt(two);
			console.log(estimate);
		};
	};
	console.log("Estimate is " + estimate);
	
	var possibleans =[];
	for(i=estimate; i>0; i--){
	    var guess = i;
	    for(a=1; a<=lnum; a++){
	    	if(guess%a !== 0){
	            break;
	        };
	        if (a === lnum) {
	            possibleans.push(guess);
	            //console.log(guess);
	        };
	    };
	};
	console.log(possibleans[possibleans.length-1] + " is the lowest evenly divisble number");
};
smallestnum(num1, num2);
//for (b=2; b<=num2; b++){
//	var num3 = b;
//	smallestnum(num1, num3);
//};


