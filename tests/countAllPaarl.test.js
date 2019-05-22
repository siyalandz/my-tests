describe('function that counts all registration from paarl',function(){
    it('it should return true if registration from paarl',function(){
    assert.equal(countAllPaarl('CJ'), true)
 });
 it('it should return false if registration is not from paarl',function(){
    assert.equal(countAllPaarl('CA'), false)
 });
 it('it should return false if registration is not from paarl',function(){
    assert.equal(countAllPaarl('CY'), false)
 });
});