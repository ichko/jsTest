# JS Unit testing
Simple JS testing library

## Example
```javascript
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
        for(var i = 0;i < 50000;i++)
            ; // Heavy work
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
```
