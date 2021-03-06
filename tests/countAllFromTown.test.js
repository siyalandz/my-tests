describe('function describe how many from town',function(){
    it('should return number of registrations of Paarl',function(){
        assert.equal(countAllFromTown('CL 124,CL 567', "CL"), 2);
    });
    it('should return number of registrations of Cape town',function(){
        assert.equal(countAllFromTown('CA 124,CA 567,CL 345, CA 456,CA 341', "CA"), 4);
    });
    it('should return empty array if registrations from different towns',function(){
        assert.equal(countAllFromTown('GB 124,CY 567,MP 345, CJ 456,GB 341'), []);
    });

});