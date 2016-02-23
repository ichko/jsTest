var testEnv = require("./testEnv.js");

var tests = testEnv.init()

    .addTest(function checkIfPythagoreWasRight(){
        this.assert.areEqual(5 * 5, 3 * 3 + 4 * 4);
    })
    
    .addTest(function simpleMath(){
        this.assert.isTrue(1 + 1 == 2);
    })
    
    .addTest(function chackIfFunction(){
        this.assert.isFunction(function(){});
    })
    
    .addTest(function longExecution(){
        for(var i = 0;i < 1000;i++)
            for(var j = i + 1;j < 5000;j++)
                this.assert.isFalse(i == j);
    })
    
    .addErrorTest(function errorTestFail(){
        this.assert.areEqual(1, 1);
    })
    
    .addErrorTest(function errorTestSuccess(){
        throw new Error('Something went wrong, and this is what we wanted');
    })
    
    .addTest(function anotherFailingTest(){
        throw new Error('This is not supposed to happen');
    })
    
    .runTests()
    .printResults();
