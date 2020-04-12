const request = require('request-promise');
const util = require('util');
const {
  TODOS_API_URI,
  TODOS_USER_API_URI
} = process.env;

module.exports = {
  list: () => request.get(TODOS_API_URI, { json: true }),
  get: (userId) => request.get(util.format(TODOS_USER_API_URI, userId), { json: true })
};
