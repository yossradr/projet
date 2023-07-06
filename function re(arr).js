function re(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]=="NORTH"&&arr[i+1]==="SOUTH")
      {
         const index = i; // Index of the element to be removed
         const count = 2; // Number of elements to be removed
         arr.splice(index, count);
        
         
      }
     if(arr[i]=="SOUTH"&&arr[i+1]==="NORTH")
      {
        const index = i; // Index of the element to be removed
         const count = 2; // Number of elements to be removed
         arr.splice(index, count);
      }
     if(arr[i]=="EAST"&&arr[i+1]==="WEST")
      {
         const index = i; // Index of the element to be removed
         const count = 2; // Number of elements to be removed
         arr.splice(index, count); 
      }
     if(arr[i]=="WEST"&&arr[i+1]==="EAST")
      {
        const index = i; // Index of the element to be removed
         const count = 2; // Number of elements to be removed
         arr.splice(index, count);;
      }
    }
}
function dirReduc(arr)
{
  let initialArray = JSON.stringify(arr);
  let reducedArray = re(arr);

  while (JSON.stringify(arr) !== initialArray) {
    initialArray = JSON.stringify(arr);
    re(arr);
  }
    
 return arr; 
}
let arr=["SOUTH","SOUTH","EAST","WEST"]
dirReduc(arr);
console.log(arr);