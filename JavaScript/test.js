var number = 600851475143; //600851475143
var numfactors = []; //array to hold the number's factors
var primes = [];  //array to hold the number's factors that are primes
/* for loop will check every number to see if they are divisable with the number*/
for (i = 1; i <= number; i++) {  
    if (i === numfactors[numfactors.length - 1]){ // makes sure no factors in array will be checked again
        break;  
    } else {
        if (number%i === 0) {
            numfactors.push(i);
            var a = number/i;  //every factor has a pair, this finds the other pair and cuts down run time
            numfactors.push(a);
        }  
    }
};
numfactors.sort(function(a,b){return a-b}); //sorts array numerically in assending order
/* for loopchecks for factors of the numfactors*/
for (a=0; a <= numfactors.length - 1; a++) {  
    var factor = numfactors[a];
    var Ffactors = [];
    for (i = 1; i <= factor; i++) {
        if(i === Ffactors[Ffactors.length - 1]){
            break;
        } else {
            if(factor%i === 0){
                Ffactors.push(i);
                var b = factor/i;
                Ffactors.push(b);
            }
        }
    }
    if (Ffactors.length <= 2) { //primes have only two factors, so only those numbers will be added to the primes array
        primes.push(factor);
    }
};
print(primes[primes.length -1] + " is the largest prime."); //last prime added is the largest prime
