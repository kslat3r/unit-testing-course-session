const sinon = require('sinon');
const { expect } = require('chai');
const request = require('request-promise');
const userService = require('./user');

describe('services/user.js', () => {
  let stubbed;

  afterEach(() => {
    stubbed.restore();
  });

  it('list should return correct response', async () => {
    const stub = [
      {
        id: 1,
        name: 'Ed'
      },
      {
        id: 2,
        name: 'Lokesh'
      }
    ];

    stubbed = sinon.stub(request, 'get')
      .callsFake(() => Promise.resolve(stub));

    const users = await userService.list();

    expect(users).to.deep.equal(stub);
  });

  it('get should return correct response', async () => {
    const stub = {
      id: 1,
      name: 'Ed'
    };

    stubbed = sinon.stub(request, 'get')
      .callsFake(() => Promise.resolve(stub));

    const user = await userService.get(1);

    expect(user).to.deep.equal(stub);
  });
});
