var express = require('express');
var router = express.Router();

/**Get events page */
router.get("/events", function(req, res, next){
  res.render('events', {title: "Events"});
});

module.exports = router;
