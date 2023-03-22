const { json } = require("body-parser");
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
const createTodo = async (req, res) => {
  console.log("got post request");
  //   const { list } = req.body;
  const list = [{ "rent car": false }, { "buy present": false }];
  const readListsFile = fs.readFileSync(fsDbFolder + "/todos.json", "utf-8");
  const myLists = JSON.parse(readListsFile);
  const sorted = myLists.sort((a, b) => {
    if (parseInt(a.id) > parseInt(b.id)) return 1;
    if (parseInt(a.id) < parseInt(b.id)) return -1;
    if (parseInt(a.id) === parseInt(b.id)) return 0;
  });
  const new_id = parseInt(sorted[sorted.length - 1].id) + 1;
  myLists.push({ id: new_id.toString(), list: list });

  try {
    fs.writeFileSync(fsDbFolder + "/todos.json", JSON.stringify(myLists));
    res.status(201).json({ message: "list added" });
  } catch (error) {
    console.log("error", error);
  }
  return;
};

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
