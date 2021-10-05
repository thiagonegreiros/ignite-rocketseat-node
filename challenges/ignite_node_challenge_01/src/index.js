const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  if (!user) {
    return response.status(400).json({ error: 'User not found.' });
  }

  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const findUser = users.find(user => user.username === username);

  let user = {}

  if (!findUser) {
    
    user = {
      id: uuidv4(),
      name,
      username,
      todos: [],
    }

  } else {
    return response.status(400).json({ error: 'User already exists.' });
  }

  users.push(user);

  response.status(201).json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { username } = request.headers;

  const { title, deadline } = request.body;

  const user = users.find(user => user.username === username);

  const todo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  user.todos.push(todo);

  return response.status(201).json(todo);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { username } = request.headers;

  const { id } = request.params;

  const { title, deadline } = request.body;

  const user = users.find(user => user.username === username);

  const todoIndex = user.todos.findIndex(todo => todo.id === id);

  if (todoIndex < 0) {
    return response.status(404).json({ error: 'Todo not found.' });
  }

  const todo = {
    id,
    title,
    deadline: new Date(deadline),
    done: false,
  };

  user.todos[todoIndex] = todo;

  return response.json(todo);
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { username } = request.headers;

  const { id } = request.params;

  const user = users.find(user => user.username === username);

  const todoIndex = user.todos.findIndex(todo => todo.id === id);

  if (todoIndex < 0) {
    return response.status(404).json({ error: 'Todo not found.' });
  }

  user.todos[todoIndex].done = true;

  return response.json(user.todos[todoIndex]);
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { username } = request.headers;

  const { id } = request.params;

  const user = users.find(user => user.username === username);

  const todoIndex = user.todos.findIndex(todo => todo.id === id);

  if (todoIndex < 0) {
    return response.status(404).json({ error: 'Todo not found.' });
  }

  user.todos.splice(todoIndex, 1);

  return response.status(204).send();
});

module.exports = app;