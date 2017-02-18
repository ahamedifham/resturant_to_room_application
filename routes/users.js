var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  var vm= {
    title : 'Create an Account'
  };
  res.render('users/create',vm);
});

router.get('/view', function(req, res, next) {
  res.send('respond with a resource dd');
});

module.exports = router;
