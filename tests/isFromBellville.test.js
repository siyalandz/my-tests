
describe('is from Bellville function',function(){
    it('should return true if the registration number is for bellville',function(){
        assert.equal(isFromBellville('CY123'), true);
})


it('should return false if the registration number is not from bellville',function(){
    assert.equal(isFromBellville('CA124'), false);
});

it('should return true if the registration number is from bellville',function(){
    assert.equal(isFromBellville('CY124'), true);
});
});
/*
var fruitlist = "apple, apple, apple, pear, banana" 

function fruitCounter(fruitlist, apple)

assert.equal(fruitCounter("apple, apple, apple, pear, banana", "apple"), 3); 

*/





















