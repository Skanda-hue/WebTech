//express
const express = require("express");
const app = express();

//imports
const morgan = require("morgan");
var cors = require("cors");

//config
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://test1:test1@omenwebdev.cewdx.mongodb.net/accounts?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      // useFindAndModify: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connected good job."))
  .catch((e) => console.log(e));

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
// app.use(require("../routes/index.routes"));
app.use("/server/register", require("../routes/register.routes"));
app.use("/server/login", require("../routes/login.routes"));
app.use("/server/score", require("../routes/score.routes"));

//server
app.listen(3001, function () {
  console.log("Application listening on port 3001");
});
