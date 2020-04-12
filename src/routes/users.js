const express = require('express');
const router = express.Router();
const userService = require('../services/user');
const todoService = require('../services/todo');
const todoFilter = require('../filters/todo');
const todoMapper = require('../mappers/todo');
const createError = require('http-errors');

router.get('/users', async (req, res, next) => {
  const userServiceRequest = userService.list();
  const todoServiceRequest = todoService.list();

  let resp;

  try {
    resp = await Promise.all([userServiceRequest, todoServiceRequest]);
  } catch (e) {
    res.send(createError(500));

    return;
  }

  const [
    users,
    todos
  ] = resp;

  const mapped = todoMapper(users, todoFilter(todos));

  res.json(mapped);
});

router.get('/users/:userId', async (req, res, next) => {
  const userId = req.params.userId;

  const userServiceRequest = userService.get(userId);
  const todoServiceRequest = todoService.get(userId);

  let resp;

  try {
    resp = await Promise.all([userServiceRequest, todoServiceRequest]);
  } catch (e) {
    res.send(createError(500));

    return;
  }

  const [
    user,
    todos
  ] = resp;

  user.todos = todoFilter(todos);

  res.json(user);
});

module.exports = router;
