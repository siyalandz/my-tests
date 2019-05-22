describe('most profitable department',function(){
    it('should return highest paid department',function(){
    assert.deepEqual(mostProfitableDepartment([
        {'department': 'hardware', 'sales': 4500, 'day': 'Monday'},
        {'department': 'outdoor', 'sales': 1500, 'day': 'Monday'}]),['outdoor']);
    });
});