var express = require("express");
var router = express.Router();

router.get("/login", function (req, res, next) {
    res.render("login", {title: "Login | Uganda Store"});
});

module.exports = router;