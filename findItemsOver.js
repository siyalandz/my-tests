function findItemsOver(list,threshold){
        //console.log(threshold);
      var listOverThreshold=[];
        for (var i=0; i<list.length; i++){
        var thresholdList = list[i];
         // console.log(thresholdList)
        if(thresholdList.qty>threshold){
        listOverThreshold.push(thresholdList)
        }
        } 
      return listOverThreshold;
      }; 
      