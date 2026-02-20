const crypto =require('crypto');
const { getData } = require('../app');

// Mocking entire import / dependency "crypto".
jest.mock("crypto");

test('Fetch Data',async ()=>{
    crypto.randomBytes.mockReturnValueOnce("bytes");
    const res=await getData();
    console.log(res);
    expect(res).toBe("bytes");
});