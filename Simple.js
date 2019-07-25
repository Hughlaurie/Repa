var startPos = prompt("Введите число - начало диапазона!");
var endPos = prompt("Введите число - конец диапазона!");
var count = 0; 
for (var i = endPos; i > 0; i--) 
{
	for (var j = startPos ; j <= endPos ; j++) 
	{
		if (i % j == 0) {count = count + 1};
	}
	var	check=count;
	count = 0;
	if (check == 2) alert(i);
}
//vue

//add dev bracxh