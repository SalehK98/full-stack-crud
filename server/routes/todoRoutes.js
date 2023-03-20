const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) => {
    console.log("get all lists");
    res.end("get all lists");
  })
  .post("/", (req, res) => {
    console.log("post list");
    res.end("post a list");
  });

router
  .get("/:id", (req, res) => {
    console.log("get a list");
    res.end("get a list");
  })
  .put("/:id", (req, res) => {
    console.log("put a list");
    res.end("put a list");
  })
  .delete("/:id", (req, res) => {
    console.log("delete a list");
    res.end("delete a list");
  });

module.exports = router;
