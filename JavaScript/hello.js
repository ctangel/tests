var number = 600851475; //600851475143
var factors = [];
var primes = [];
for (i = 1; i <= number; i++) {
    if (number%i === 0) {
        factors.push(i);
    }  
}
for (a=0; a <= factors.length - 1; a++) {
    var factor = factors[a];
    var Ffactors = [];
    for (i = 1; i <= factor; i++) {
        if(factor%i === 0){
            Ffactors.push(i);
        }
    }
    if (Ffactors.length <= 2) {
        primes.push(factor);
    }
};
print(primes[primes.length -1] + " is the largest prime.");
/*print("The prime numbers are " + primes.join());


var bag = [5, 1, 8, 7];
for(i=0; i <= bag.length-1; i++){
    if(bag[i] === null){
        break;
    } else {
        print("**************************");
        var b = bag[i];
        var c = bag[i+1];
        print(b+" and "+c);
        if( (b || c) === NaN){
            break;
        } else {
            if(b<c){
                bag[i] = b;
                bag[i+1] = c;
            } else{
               bag[i] = c;
               bag[i+1] = b;
            };
        };
        //print(bag.join());
    };
};
*/





















