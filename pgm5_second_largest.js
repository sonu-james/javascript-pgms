a=300;
b=1000;
c=700;

if((a>=b) && (b>=c))
{
    console.log("second largest",b);
    console.log(a,b,c);
}
else if((b>=c) && (c>=a)){
    console.log("second largest",c);
    console.log(b,c,a);
}
else if((c>=a)&& (a>=b))
{
    console.log("second largest",a);
    console.log(c,a,b);
}
else{
    console.log("all are equal");
}