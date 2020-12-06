const express = require("express");
const path = require("path")

const MainRouter = require("./routes/MainRouter")
const UserRouter = require("./routes/UserRouter")
const RotaRouter = require("./routes/RotaRouter")

const port = process.env.port || 5000;
const app = express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));


app.use("/", MainRouter);
app.use("/userr", UserRouter);
app.use("/rota", RotaRouter);


app.listen(port, ()=> {
    console.log(`im listening on port: ${port}`)
});
