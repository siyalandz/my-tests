describe('finditemsOver20',function(){
    it('should return all product that are higher than 20',function(){
    
    
    assert.deepEqual(findItemsOver([{name : 'banana', qty : 17},{name : 'pears', qty : 37}], 20), [{name : 'pears', qty : 37}]);
    });
    it('should return empty array for products less than 20',function(){
    
    
        assert.deepEqual(findItemsOver([{name : 'banana', qty : 10},{name : 'pears', qty : 10}], 20), []);
        });
    });
    