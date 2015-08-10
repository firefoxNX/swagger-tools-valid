var express = require('express');
var router = express.Router();

var users = require("./controllers/users.js");

router.get("/users", users.getAllUsers);
router.get("/users/:id", users.getOneUser);
router.post("/users/:id", users.createUser);
router.put("/users/:id", users.updateUser);
router.delete("/users/:id", users.deleteUser);

module.exports = router;
