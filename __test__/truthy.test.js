test('Truthy Operators',()=>{
    const x="Shubham", y=null;
    expect(y).toBeNull();
    expect(x).not.toBeNull();

    const num1=5, num2=10;
    expect(num2).toBeGreaterThan(num1);
});