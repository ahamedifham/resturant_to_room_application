var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('orders/index', { title: 'Place an order' });
});

module.exports = router;
