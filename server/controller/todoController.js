const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");

const fsDbFolder = path.join(__dirname, "../../db/fs");

//@desc Get all todo lists
//@route GET /api/todo
//@access Public
const getTodos = asyncHandler((req, res) => {
  console.log("got a get request");
  const lists = fs.createReadStream(fsDbFolder + "/todos.json", "utf-8");
  lists.pipe(res.status(200));
  //   res.status(200).send(lists);
});

//@desc Create a todo list
//@route POST /api/todo
//@access Public
const createTodo = asyncHandler((req, res) => {
  console.log("got post request");
  //   const { list } = req.body;
  const chunks = [];
  const listsReadStream = fs.createReadStream(
    fsDbFolder + "/todos.json",
    "utf-8"
  );
  listsReadStream.on("data", (chunk) => {
    chunks.push(chunk);
  });
  listsReadStream.on("end", () => {
    console.log("chunks", chunks[0]);
  });
  const listsWriteStream = fs.createReadStream(
    fsDbFolder + "/todos.json",
    "utf-8"
  );
  //   listsReadStream.pipe(listsWriteStream)
  const transformed = listsReadStream.pipe(TransformStream);

  res.status(201).json({ message: "post a response" });
});

//@desc Get a todo list
//@route GET /api/todo/:id
//@access Public
const getTodo = asyncHandler((req, res) => {
  console.log("got single get request");
  res.status(200).json({ message: "single get a response" });
});

//@desc Update a todo list
//@route PUT /api/todo/:id
//@access Public
const updateTodo = asyncHandler((req, res) => {
  console.log("got Put request");
  res.status(200).json({ message: "put a response" });
});

//@desc Delete a todo list
//@route DELETE /api/todo/:id
//@access Public
const deleteTodo = asyncHandler((req, res) => {
  console.log("got delete request");
  res.status(200).json({ message: "delete a response" });
});

module.exports = { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
