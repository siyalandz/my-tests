describe('function years ago', function(){
it (' return how many years ago that was',function(){
assert.equal(yearsAgo('2000'), 19);
});
it (' return the difference when it happens years ago and now',function(){
    assert.equal(yearsAgo('1955'), 64);
    });
    it (' return number of years ago ',function(){
        assert.equal(yearsAgo('1993'), 26);
        });
});