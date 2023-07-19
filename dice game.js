
function countOccurrences(arr, element) {
    return arr.reduce((count, currentElement) => {
      return count + (currentElement === element ? 1 : 0);
    }, 0);
  }
  function score( dice ) {
    let score=0;
    
    let t=dice;
    for(let i=0;i<dice.length;i++)
      { 
        if(dice[i]==1)
          {score=score+(1000*(Math.floor(countOccurrences(dice,dice[i])/3)))+((countOccurrences(dice,dice[i])%3)*100);
          dice= dice.filter((element) => element !== dice[i]);
        i--;}
         else if(dice[i]==6)
          {score=score+(600*(Math.floor(countOccurrences(dice,dice[i])/3)));
          dice= dice.filter((element) => element !== dice[i]);
          i--;}
         else if(dice[i]==5)
          {score=score+(500*(Math.floor(countOccurrences(dice,dice[i])/3)))+((countOccurrences(dice,dice[i])%3)*50);
          dice= dice.filter((element) => element !== dice[i]);
          i--;}
         else if(dice[i]==4)
          {score=score+(400*(Math.floor(countOccurrences(dice,dice[i])/3)));
          dice= dice.filter((element) => element !== dice[i]);
          i--;}
         else if(dice[i]==3)
          {score=score+(300*(Math.floor(countOccurrences(dice,dice[i])/3)));
          dice= dice.filter((element) => element !== dice[i]);
          i--;}
         else if(dice[i]==2)
          {score=score+(200*(Math.floor(countOccurrences(dice,dice[i])/3)));
          dice= dice.filter((element) => element !== dice[i]);
          i--;}
        
         
          console.log(dice);
          
      }
   return score;
  }
  console.log(score( [ 2, 4, 4, 5, 4 ]))