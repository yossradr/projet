// //cakes and ingredients
// function cakes(recipe, available) {
//     const recipeKeys = Object.keys(recipe);
//     const availableKeys = Object.keys(available);
//     const resultIncludes = recipeKeys.every(element => availableKeys.includes(element));
  
//     if (!resultIncludes) {
//       return 0;
//     } else {
//       let l = [];
//       for (let i = 0; i < recipeKeys.length; i++) {
//         l.push(Math.floor(available[recipeKeys[i]] / recipe[recipeKeys[i]]));
//       }
      
//       //const nonZeroNumbers = l.filter(number => number !== 0);
//       const minNonZeroNumber = Math.min(...l);
//       return minNonZeroNumber;
//     }
//   }
  
//   console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 500, sugar: 100, eggs: 5, milk: 200}));
//   //eight(dividedBy(three()));
//   function zero(operation) {
//     if (operation) {
//       return operation(0);
//     }
//     return 0;
//   }
  
//   function one(operation) {
//     if (operation) {
//       return operation(1);
//     }
//     return 1;
//   }
  
//   function two(operation) {
//     if (operation) {
//       return operation(2);
//     }
//     return 2;
//   }
  
//   function three(operation) {
//     if (operation) {
//       return operation(3);
//     }
//     return 3;
//   }
  
//   function four(operation) {
//     if (operation) {
//       return operation(4);
//     }
//     return 4;
//   }
  
//   function five(operation) {
//     if (operation) {
//       return operation(5);
//     }
//     return 5;
//   }
  
//   function six(operation) {
//     if (operation) {
//       return operation(6);
//     }
//     return 6;
//   }
  
//   function seven(operation) {
//     if (operation) {
//       return operation(7);
//     }
//     return 7;
//   }
  
//   function eight(operation) {
//     if (operation) {
//       return operation(8);
//     }
//     return 8;
//   }
  
//   function nine(operation) {
//     if (operation) {
//       return operation(9);
//     }
//     return 9;
//   }
  
//   function plus(rightOperand) {
//     return function (leftOperand) {
//       return leftOperand + rightOperand;
//     };
//   }
  
//   function minus(rightOperand) {
//     return function (leftOperand) {
//       return leftOperand - rightOperand;
//     };
//   }
  
//   function times(rightOperand) {
//     return function (leftOperand) {
//       return leftOperand * rightOperand;
//     };
//   }
  
//   function dividedBy(rightOperand) {
//     return function (leftOperand) {
//       return Math.floor(leftOperand / rightOperand);
//     };
//   }
  
//   // Example usage:
//   const result = eight(dividedBy(three()));
//   console.log(result); // Output: 2
  
function isPrime(num) {
    trouve=true;
   if(num<=1)
     {return false;}
   else
   {if(num==3 || num==2){return true;}  
   else
     {
       for(let i=2;i<=Math.floor(num/2)&&trouve;i++)
         {
           if(num%i==0)
           {
                trouve=false;}
         }
     }
    return trouve;
  }}
  console.log(isPrime(Math.pow(2,30)));
  ///////////////prime
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    if (num <= 3) {
      return true;
    }
    
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  console.log(isPrime(215668898484984984984));
  