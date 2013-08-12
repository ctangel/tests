var amount = prompt("How many numbers do you want?");
var list = [];
for(i = 1; i <= amount; i++) {
	var number = Math.floor(Math.random() * 100);
	list.push(number);
};
console.log(list.join());
document.write(list.join());
do {
 var swap = 0;
    for(a = 0; a <= list.length - 1; a++) {
    	var b = a + 1;
    	var num1 = list[a];
    	var num2 = list[b];
    	if(num1 >= num2) {
    		list.splice(a, 0, num2);
    		list.splice(b+1, 1);
    		swap = swap + 1;
    	} else {
    	   swap = swap - 1;
    	};
    };
} while(swap != -amount);

console.log(list.join());
document.write("<br/>" + list.join());