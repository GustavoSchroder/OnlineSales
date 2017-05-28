var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    var productsChunk = [];
    var chunkSize = 3;
    for (var index = 0; index < docs.length; index += chunkSize) {
      productsChunk.push(docs.slice(index, index + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productsChunk });
  });
});

module.exports = router;
