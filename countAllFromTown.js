function countAllFromTown(numbers,location){
    console.log(numbers);
    console.log(location);
    var S = numbers.split(',');
    var L = [];
   for (var i=0; i< S.length; i++){
   if(S[i].startsWith(location) || S[i].startsWith(" "+location)){
   L.push(S[i]);
   } 
   }
   return(L.length); 
  }