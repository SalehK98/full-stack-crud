//@desc Get all todo lists
//@route GET /api/todo
//@access Public
const getTodos = (req, res) => {
  console.log("got get request");
  res.status(200).json({ message: "get a response" });
};

//@desc Create a todo list
//@route POST /api/todo
//@access Public
const createTodo = (req, res) => {
  console.log("got post request");
  res.status(201).json({ message: "post a response" });
};

//@desc Get a todo list
//@route GET /api/todo/:id
//@access Public
const getTodo = (req, res) => {
  console.log("got single get request");
  res.status(200).json({ message: "single get a response" });
};

//@desc Update a todo list
//@route PUT /api/todo/:id
//@access Public
const updateTodo = (req, res) => {
  console.log("got Put request");
  res.status(200).json({ message: "put a response" });
};

//@desc Delete a todo list
//@route DELETE /api/todo/:id
//@access Public
const deleteTodo = (req, res) => {
  console.log("got delete request");
  res.status(200).json({ message: "delete a response" });
};

module.exports = { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
