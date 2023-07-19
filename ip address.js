function separateWordsWithPoint(inputString) {
    const words = inputString.split('.');
    const integerList = words.map((str) => parseInt(str, 10));
    return integerList;
  }
function ipsBetween(start, end)
{ const outputArray1 = separateWordsWithPoint(start);
  const outputArray2 = separateWordsWithPoint(end);
 let s1=0;
  let c1=2**24;
 let s2=0;
  let c2=2**24;
  for (let i=0;i<outputArray1.length;i++)
  {s1=s1+outputArray1[i]*c1;
    c1=c1/(2**8);
    
  }
 for (let i=0;i<outputArray2.length;i++)
  {s2=s2+outputArray2[i]*c2;
    c2=c2/(2**8);
    
  }
 return s2-s1;
 
}
console.log(ipsBetween("10.0.0.0","10.0.0.50"));