var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/gallery",function(req, res, next){
  res.render("gallery");
})
router.get('/about', function(req, res, next) {
  res.render("about");
});
router.get('/contact', function(req, res, next) {
  res.render("contact");
});

module.exports = router;
