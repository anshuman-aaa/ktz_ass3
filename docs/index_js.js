function myinst()
{
	mywindow=window.open("aaa.html", "","width=500, height=500" )
	
	
}
function close(){
	window.close()
}
function my0(){
	document.forms["calc"]["display"].value+=0;
}
function my1(){
	document.forms["calc"]["display"].value+=1;
}
function my2(){
	document.forms["calc"]["display"].value+=2;
}
function my3(){
	document.forms["calc"]["display"].value+=3;
}
function my4(){
	document.forms["calc"]["display"].value+=4;
}
function my5(){
	document.forms["calc"]["display"].value+=5;
}
function my6(){
	document.forms["calc"]["display"].value+=6;
}
function my7(){
	document.forms["calc"]["display"].value+=7;
}
function my8(){
	document.forms["calc"]["display"].value+=8;
}
function my9(){
	document.forms["calc"]["display"].value+=9;
}
function myadd(){
	document.forms["calc"]["display"].value+="+";
}
function mycom(){
	document.forms["calc"]["display"].value+=",";
}
function mydot(){
	document.forms["calc"]["display"].value+=".";
}
function mysub(){
	document.forms["calc"]["display"].value+="-";
}
function mydiv(){
	document.forms["calc"]["display"].value+="/";
}
function mymult(){
	document.forms["calc"]["display"].value+="*";
}
function mysin(){
	document.forms["calc"]["display"].value=Math.sin(document.forms["calc"]["display"].value);
}
function myasin(){
	document.forms["calc"]["display"].value=Math.asin(document.forms["calc"]["display"].value);
}
function myacos(){
	document.forms["calc"]["display"].value=Math.acos(document.forms["calc"]["display"].value);
}
function myatan(){
	document.forms["calc"]["display"].value=Math.atan(document.forms["calc"]["display"].value);
}
function mytan(){
	document.forms["calc"]["display"].value=Math.tan(document.forms["calc"]["display"].value);
}
function mylog(){
	document.forms["calc"]["display"].value=Math.log(document.forms["calc"]["display"].value);
}
function mysqrt(){
	document.forms["calc"]["display"].value=Math.sqrt(document.forms["calc"]["display"].value);
}
function mysqr(){
	document.forms["calc"]["display"].value=Math.pow(document.forms["calc"]["display"].value,2);
}
var x,y;
function myfact(x){
	
	if(x==0) return 1;
	else
		return x*myfact(x-1);
}




	
function gcd(s)
		{
			var a = s.split(".");
			var b=a[0];
			var  c=a[1];
			if (b>c){
				var temp=b;
				b=c;
				c=temp;
			}
			for(temp=1;temp<=b;temp++){
				if (b%temp==0 && c%temp==0) 
					gcd=temp;
			}
			return gcd;
	/*		a = Math.abs(a);
  b = Math.abs(b);
  while(b) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;*/
  			 /*a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    
		}*/
		/*if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}*/
}
	
function lcm(s){
			var d = s.split("..");
			var b=d[0];
			var c=d[1];
			g = gcd(b+"."+c);
			return (b*c)/g;
		}
