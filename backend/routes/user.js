const express = require("express");
const router = express.Router()
const userControler = require("../controller/user.js");

router.get("/user/get",userControler.getUserDetails);
router.post("/user/save",userControler.saveUser);
router.put("/user/update", userControler.updateUser);
router.delete("/user/delete",userControler.deleteUser);

module.exports =router;