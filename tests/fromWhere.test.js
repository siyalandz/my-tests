describe('fromWhere',function(){
it('should take the string of CY and return Bellville',function(){
assert.equal(fromWhere("CY"),"Bellville");
});
it('should take the string of CJ and return Paarl',function(){
    assert.equal(fromWhere("CJ"),"Paarl");
    });
    it('should take the string of CA and return Cape Town',function(){
        assert.equal(fromWhere("CA"),"Cape Town");
        });
});