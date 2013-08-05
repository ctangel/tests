/************************************************************************************************
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
************************************************************************************************/

var finalnum = 14;
var product = 1;

var smallestnum = function(snum, lnum){
	var possibleans =[];
	for(i=1; i<=lnum; i++){
	    var snum = snum * i;
	};
	
	for(i=snum; i>0; i--){
		//print(i);
	    var guess = i;
	    for(a=1; a<=lnum; a++){
	    	if(guess%a !== 0){
	            break;
	        };
	        if (a === lnum) {
	            possibleans.push(guess);
	        };
	    };
	};
	console.log(possibleans[possibleans.length-1] + " is the lowest evenly divisble number by all of the numbers from 1 to " + lnum);
};

for (b=14; b<=finalnum; b++){
	var fnum = b;
	smallestnum(product, fnum);
};
//smallestnum(product, finalnum);

/*
for (a=1; a <= finalnum; a++) {  
    var Ffactors = [];
    for (i = 1; i <= a; i++) {
        if(i === Ffactors[Ffactors.length - 1]){
            break;
        } else {
            if(a%i === 0){
                Ffactors.push(i);
                var b = a/i;
                Ffactors.push(b);
            };
        };
    };
    if (Ffactors.length <= 2) { 
    	print(a);
        if (a === 2) {
        	product = product * 2 * 2 * 2;
        } else if ( a === 3 ) {
        	product = product * 3 * 3;
        } else {
        	product = product * a;
        };
    };
};
print(product + " is the lowest evenly divisble number by all of the numbers from 1 to " + finalnum);*/
