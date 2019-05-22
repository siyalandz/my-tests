function countAllPaarl(registration){
        //console.log(registration)
        var n =registration.split(", ");
        var p = [];
        for(var i=0; i<n.length; i++){
        
        if(n[i].startsWith("CJ")){
        p.push(n[i]);
        }
         
        
        }
        return p.length;
      }