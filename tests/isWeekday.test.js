describe('function that finds out if its the day of the week', function(){
it('should return true if  its the day of the week',function(){
    assert.equal(isWeekday('Monday'), true);
}); 
it('should return true if  its the day of the week',function(){
    assert.equal(isWeekday('Friday'), true);
}); 
it('should return false if  its not the day of the week',function(){
    assert.equal(isWeekday('Sunday'), false);
}); 
});