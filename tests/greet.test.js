// describe("the greet function"),function greet(name){
//     console.log("Hello, " + name);
//     assert.equal("Hello, Siya",greet("Siya"));
//     return "Hello, " + "Siya";

// }  


describe('The greet function', function() {
    it('Should return "Hello, Siya" ', function() {
        assert.equal(greet('Siya'), 'Hello, Siya');
    })
    it('Should return "Hello, Siyanda" ', function() {
        assert.equal(greet('Siyanda'), 'Hello, Siyanda');
    })
    it('Should return "Hello, Namhla" ', function() {
        assert.equal(greet('Namhla'), 'Hello, Namhla');
    })
});
