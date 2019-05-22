describe('function describe how many from town',function(){
    it('should return number of registrations of Paarl',function(){
        assert.equal(countAllFromTown('CL 124,CL 567', "CL"), 2);
    });
    it('should return number of registrations of Cape town',function(){
        assert.equal(countAllFromTown('CA 124,CA 567,CA 245', "CA"), 3);
    });
});