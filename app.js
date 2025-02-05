const express = require("express");
const app = express();
var cors = require("cors");
let route = require("./router/index");
let errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", route);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
