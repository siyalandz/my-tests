describe('checking the registration number',function(){
it('it should return false if the registration number is not from Gauteng',function(){
assert.equal(regCheck ('456MP',), false);
});

it('it should return false if the registration number is from mpumalanga',function(){
    assert.equal(regCheck ('123GP'), false);
    });
    it('it should return false if the registration number is not from Gauteng',function(){
        assert.equal(regCheck ('123ND'), false);
        });
});