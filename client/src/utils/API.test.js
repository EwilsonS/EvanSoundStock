import API from './API';

describe('#getUsers', () => {
  it('should retireve all users from database', () => {
    const getAll = API.getUsers().json;

    expect(getAll.length).toBe(3)
  });
});