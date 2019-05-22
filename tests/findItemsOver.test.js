describe('finditemsOver',function(){
it('should return all product that are higher than the threshold',function(){


assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},{name : 'pears', qty : 37}], 20), [{name : 'pears', qty : 37}]);
});
it('should return  empty array for products that are lower than the threshold',function(){


    assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},{name : 'pears', qty : 37}], 20), [{name : 'pears', qty : 37}]);
    });
});