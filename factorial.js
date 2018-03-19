function factorial(){
var n = document.getElementByID("fact").values;

    var fact = function(n){
	if (n == 0 )
	{
		return 1;
	}
	else if(n == 0 || n == 1){
		return 1;
	}
	else
	{
		var s = fact(n-1);
		var finalResult = s * n;
		return finalResult;


	}
	
	alert(fact(n));

}
}