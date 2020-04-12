const sinon = require('sinon');
const { expect } = require('chai');
const request = require('request-promise');
const todoService = require('./todo');

describe('services/todo.js', () => {
  let stubbed;

  afterEach(() => {
    stubbed.restore();
  });

  it('list should return correct response', async () => {
    const stub = [{
      id: 1
    }];

    stubbed = sinon.stub(request, 'get')
      .callsFake(() => Promise.resolve(stub));

    const todos = await todoService.list();

    expect(todos).to.deep.equal(stub);
  });

  it('get should return correct response', async () => {
    const stub = [{
      id: 1
    }];

    stubbed = sinon.stub(request, 'get')
      .callsFake(() => Promise.resolve(stub));

    const todos = await todoService.get(1);

    expect(todos).to.deep.equal(stub);
  });
});
