const express = require("express");
const router = express.Router();

const data = require("../models/data");

router.get("/", (req, res) => {
  res.render("user", { users: data.userList, id: "" });
});

router.get("/:id", (req, res) => {
  res.render("user", { users: data.userList, id: req.params.id });
  console.log(req.params.id)
});

module.exports = router;


// exports.getMain = (req, res) => {
//   console.log("Get request to /");
//   res.send("Respond sent");
//   res.send({ id: 0, name: "Clarus" });
//   res.sendFile(path.join(__dirname, "about.html"));
//   res.render("main");
// };