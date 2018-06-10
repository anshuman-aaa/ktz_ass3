//script
var x,y;
function factorial(x){
	if(x==0) return 1;
	else
		return x*factorial(x-1);
}

function hcf(x,y){
	if (x==0 || y==0) return 0;
	if (x==y) return x;
	if (x>y) return hcf(x-y,y);
	else return hcf(x,y-x);
}

function lcm(x,y){
	return (x*y)/hcf(x,y);
}

	
