describe('most profitable department',function(){
    it('should return most profitable department',function(){
    var departments = [
        {'department': 'hardware', 'sales': 4500, 'day': 'Monday'},
        {'department': 'outdoor', 'sales': 1500, 'day': 'Monday'}
    ]

    assert.deepEqual(mostProfitableDepartment(departments),'hardware');
    });

    it('Should return false when an invalid input',function(){
        
    
        assert.equal(mostProfitableDepartment('departments'), false,);
        });
        it('should return the least profitable  department',function(){
            var departments = [
                {'department': 'hardware', 'sales': 4500, 'day': 'Monday'},
                {'department': 'outdoor', 'sales': 1500, 'day': 'Monday'}
            ]
            assert.deepEqual(mostProfitableDepartment(departments),'hardware');
        });
});

