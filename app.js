const express = require("express");
const app = express();
var cors = require("cors");
let route = require("./router/index");
const port = 3000;
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", route);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
