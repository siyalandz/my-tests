describe('counting the registration numbers in a string', function(){
    it('should return the number of registrations of Cape Town',function(){
        assert.equal(countRegNumber('CA 182736,CA 523519,CA 812328'), 3 );
    });
    it('should return the number of registrations of Gauteng',function(){
        assert.equal(countRegNumber('GP 182736,GP 523519,GP 812328,GP 194531'), 4 );
    });
    it('should return the number of registrations of Durban',function(){
        assert.equal(countRegNumber('ND 182736,CY 523519,ND 812328,ND 194531,ND 314256'), 5 );
    });

});