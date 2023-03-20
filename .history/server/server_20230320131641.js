const { urlencoded } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
// const errorHandler = require("./middleware/errorHandler.js");

const app = express();
const port = process.env.PORT || 8000;

// app.use(express.urlencoded());
// app.use(bodyParser.json());
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
