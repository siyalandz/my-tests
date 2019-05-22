function totalPhoneBill(bills){
    console.log(bills)
      var sales = bills.split(', ');
      var calls = [];
      var sms = [];
      for(var i=0;i<sales.length; i++)
    if(sales[i].startsWith("c")){
      calls.push(sales[i]);
      }
    else if(sales[i].startsWith("s")){
      sms.push(sales[i]);
    }
      var tot = calls.length;
      var tot1 = sms.length;
      
      var totalSms = sms.length * 0.65;
      var totalCalls = calls.length * 2.75;
     
      var total = totalSms + totalCalls;
      return ( "R" + total.toFixed(2));
      }