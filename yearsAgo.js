function yearsAgo(year){
    console.log(year)
  var todayDate = new Date();
  var yearsBack = todayDate.getFullYear();
  return  yearsBack - year;
  };