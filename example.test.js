const ex = require('./example');

describe('#example', () => {
  it('should add a and b and retrun the sum', () => {
    expect(ex.add(5, 5)).toBe(10);
  });

  it('should return the difference of a and b', () => {
    expect(ex.sub(5, 3)).toEqual(2);
  });

  it('should throw an error', () => {
    testSub = () =>{
      ex.sub(5, 'sofa')
    }
    expect(testSub).toThrow();
  });
});