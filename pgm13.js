arr=[10,11,12,3,2,4,100]
//ascending order
a=arr.sort((n1,n2)=>n1-n2)
console.log(a);
b=arr.sort((n1,n2)=>n2-n1)
console.log(b);

arr=[10,11,12,3,2,4]
//binary search
//w a p to check whether 2 is present or not
//1.SORT given array ascending order

//Algorithm
//get searchIem
//initialize lower index and upper index
//mid=low+up/2
//  -mid==searchitem
//      item found
//  -mid>searchitem
//      up=mid-1
//  -mid<searchitem
//      low=mid+1
//repeat the above code until the low and up value meets



//get searchIem
searchItem=9;
//initialize lower index and upper index
low=0
up=arr.length-1
isPresent=false
//sort the array
arr.sort((n1,n2)=>n1-n2)
console.log(arr);



while(low<=up)
{
    
    //mid=low+up/2
    mid=Math.floor((low+up)/2)

    if(arr[mid]==searchItem){
        isPresent=true
    
        break
    }
    else if(arr[mid]<searchItem){
        low=mid+1
    }
    else 
    {
        up=mid-1
    }
    

}console.log(isPresent?'present':'not present');
    
//using forloop

for(low=0;low<=up;low++)

{
    //mid=low+up/2
    mid=Math.floor((low+up)/2)

    if(arr[mid]==searchItem){
        isPresent=true
    
        break
    }
    else if(arr[mid]<searchItem){
        low=mid+1
    }
    else 
    {
        up=mid-1
    }
    

}console.log(isPresent?'present':'not present');