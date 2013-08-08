/*************************************************************************************************
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
**************************************************************************************************/
var num1 = 100;
var num2 = 100;
var palindromes =[];
for (i=num1; i<1001; i++){
    for(a=num2; a<1001; a++){
        var multiple = a * i;
        var reversenum = [];
        var forwardnum = [];
        var stringnum = multiple.toString(); //turns a number into string
        for (b=0; b<=stringnum.length-1; b++){ //splits number into individual charaters
            var c = stringnum.charAt(b);
            forwardnum.push(c);
        };
        for (b=stringnum.length-1; b >= 0;  b--) { //splits number into individual charaters but in reverse
            var c = stringnum.charAt(b);
            reversenum.push(c);
        };
        if (forwardnum.join() === reversenum.join()){ // if forward and reverse are equal, we have a palidrom
            palindromes.push(multiple);
        };
      
    };
};
palindromes.sort(function(a,b){return a-b});
print(palindromes[palindromes.length - 1] + "  is the largest palindrome of two three digit numbers.")
