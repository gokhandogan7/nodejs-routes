const express = require("express");
const port = process.env.port || 5000;

const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

const MainRouter = require('./routes/MainRouter')
app.get("/", MainRouter);

const UserRouter = require('./routes/UserRouter')
app.use("/user", UserRouter)


app.listen(5000, () => {
  console.log("listen 5000");
});
