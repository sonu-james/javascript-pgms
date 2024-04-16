arr=[10,11,12,3,2,4]
//w a p to check whether 2 is present or not
searchItem=2;
isPresent=false
for(i of arr){
    if(i==searchItem)
    {
        isPresent=true
        // console.log(searchItem," is present");
        break;
    }
    
    
}
    console.log(isPresent?'present':'notpresent');


    //input arr[4,5,6]
    //output arr[11,10,9]

    //sum=4+5+6=15
    //15-4=11
    //15-5=10
    //15-6=9

    arr=[4,5,6]
    sum=0;
    for(let i of arr ){
       sum=sum+i;
       
    }
    output =[]
    for(let i of arr){
    output.push(sum-i)
    }
    console.log(output);
    
    //arr=[10,20,30,20,30,40,50,60,10]
    //w a p to find the duplicate number from the given array =10,20,30
    b=[]
    a=[10,20,30,20,10,30,40,50,60,10]
    for(i=0;i<=a.length;i++){
       for(j=i+1;j<=a.length;j++)
       {
        if(a[i] == a[j]){
            //variable initialisation
            isDuplicate=true
            //checking whether the number is there in output array
            for(k=0;k<=b.length-1;k++)
            {
                if(a[i]==b[k]){
                    isDuplicate=true
                    break
                }
            }
            
        }       
       }
          
    }
    !isDuplicate?console.log(b):console.log('no duplication');;
   