describe('function that counts the costs of total phone bill',function(){
it('it should take the string of total calls made',function(){
    assert.equal(totalPhoneBill("call, call"),"R5.50");
});
it('it should take the string of total sms sent',function(){
    assert.equal(totalPhoneBill("sms, sms, sms"),"R1.95");
});
it('it should take the string of total sms sent and calls made',function(){
    assert.equal(totalPhoneBill("sms, call"),"R3.40");
});
});