p=[10,11,12,20,30]
q=[11,20,25,30,33]
//11, 20 ,30
noCommonNo=false
for(i=0;i<p.length;i++){
    for(j=0;j<q.length;j++){
        if(p[i]==q[j])
        {
            noCommonNo=true
            console.log('Numbers are ',p[i]);
        }
    }
}
!noCommonNo && console.log("No Common number");

a=0;
b=0;
noCommonNo=false
while(a<p.length && b<q.length){
    if(p[a]==q[b])
    {
        noCommonNo=true
        console.log('Numbers are ',p[a]);
        a++
        b++
    }
    else if(p[a]>q[b])
    {
        a++
    }
    else{
        b++
    }
}

!noCommonNo && console.log("No Common number");