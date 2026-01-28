const mathOperation=require('../calculator');

// setup and cleaning methods

// 2-> beforeEach(): will run every time when a new test() is executed
//     afterEach(): will run every time after a test() is executed


// 2-> beforeAll(): will run only once before the start of the tests
//     afterAll(): will run only once after the tests

describe('Calculator Tests',()=>{
    var val1=0, val2=0;
    beforeAll(()=>{
        console.log('beforeAll called');
    });

    afterAll(()=>{
        console.log('afterAll called');
    });

    beforeEach(()=>{
        console.log('beforeEach called');
        val1=1, val2=1;
    });

    afterEach(()=>{
        console.log('afterEach called');
    });

    test('Add',()=>{
        const sum=mathOperation.sum(val1,val2);
        expect(sum).toBe(2);
    }); 

    test('Diff',()=>{
        const diff=mathOperation.diff(val1,val2);
        expect(diff).toBe(0);
    }); 

});