const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

const server = express();
const port = process.env.PORT || 8081;

server.use("/api/todo");

server.listen(port, () => {
  console.log(`Server Listening on port: http://localhost:${port}`);
});
