const request = require('request-promise');
const util = require('util');
const {
  USERS_API_URI,
  USER_API_URI
} = process.env;

module.exports = {
  list: () => request.get(USERS_API_URI, { json: true }),
  get: (userId) => request.get(util.format(USER_API_URI, userId), { json: true })
};
