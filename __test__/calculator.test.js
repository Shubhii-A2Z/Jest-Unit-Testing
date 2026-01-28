const mathOperation=require('../calculator');

// describe(): Collection of similar tests

describe('Calculator Tests',()=>{
    test('Addition Test',()=>{
        const res=mathOperation.sum(1,2);
        // expect(): Actual/Received Output
        // toBe(): Expected Output
        expect(res).toBe(3);
        expect(res).not.toBe(1);
    }); 

    test('Subtraction Test',()=>{
        const res=mathOperation.diff(2,1);
        expect(res).toBe(1);
        expect(res).not.toBe(0);
    }); 
});