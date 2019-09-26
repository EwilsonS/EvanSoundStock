const controller = require('./usersController');
const axios = require('axios');

describe('#usersController', () => {
  it('should return users by query', () => {
    expect(controller.findAll.length > 0).toBe(true);
  });

  it('should create a new user', () => {

  });
});

