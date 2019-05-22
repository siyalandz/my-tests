describe('function that counts a price of a transport shift',function(){
it('it should return R20 in the morning shift', function(){
assert.equal(transportFee('morning'), 'R20');
});
it('it should return R10 in the afternoon shift', function(){
    assert.equal(transportFee('afternoon'), 'R10');
});
it('it should return free in the afternoon shift', function(){
    assert.equal(transportFee('night'), 'free');
});
});