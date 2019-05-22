function mostProfitableDepartment(depList){
  var num = [];
  var total = '';
  for(var i= 0; i<depList.length; i++){
    var sales=depList[i].sales;
    var depart=depList[i].total;
    if(depList[i].sales > depList[i]){
      num=sales;
      total=depart;
    }
  }
  return total;
}



//
// console.log(total[0].department)
var list = [
{department: 'hardware', sales: 4500, day: 'Monday'},
{department: 'outdoor', sales: 1500, day: 'Monday'},
{department: 'carpentry', sales: 5500, day: 'Monday'},
{department: 'hardware', sales: 7500, day: 'Tuesday'},
{department: 'outdoor', sales: 2505, day: 'Tuesday'},
{department: 'carpentry', sales: 1540, day: 'Tuesday'},
{department: 'hardware', sales: 1500, day: 'Wednesday'},
{department: 'outdoor', sales: 8507, day: 'Wednesday'},
{department: 'carpentry', sales: 8009, day: 'Wednesday'},
{department: 'hardware', sales: 12000, day: 'Thursday'},
{department: 'outdoor', sales: 18007, day: 'Thursday'},
{department: 'carpentry', sales: 6109, day: 'Thursday'},
{department: 'hardware', sales: 7005, day: 'Friday'},
{department: 'outdoor', sales: 12006, day: 'Friday'},
{department: 'carpentry', sales: 16109, day: 'Friday'}
];

alert(mostProfitableDepartment(list))