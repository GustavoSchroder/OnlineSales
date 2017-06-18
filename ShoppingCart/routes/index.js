var express = require('express');
var router  = express.Router();
var Product = require('../models/product');
var Cart    = require('../models/cart');

/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    var productsChunk = [];
    var chunkSize = 3;
    for (var index = 0; index < docs.length; index += chunkSize) {
      productsChunk.push(docs.slice(index, index + chunkSize));
    }
    res.render('shop/index', { title: 'Lista de compras', products: productsChunk });
  });
});

/* GET add product form */
router.get('/add_product', function (req, res, next) {
  res.render('shop/add_product', { title: 'Add Product' });
});

/* GET add product */
router.post('/add_product', function (req, res, next) {
    var prod = 
    new Product({
        imagePath: req.body.imagem_produto,
        title: req.body.nome_produto,
        description: req.body.descricao_produto,
        price: req.body.valor_produto,
    });

    prod.save(function (err, result) {
        console.log(result);
        return res.redirect('/');
    });
});

router.get('/remove_product/:id', function (req, res, next) {
    var productId = req.params.id;
    Product.findByIdAndRemove(productId, function(err){
        res.redirect('/');
    });
});


/* GET add to cart */
router.get('/add-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if (err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});

/* GET add product */
router.get('/finish-cart', function (req, res, next) {
  req.session.cart = null;
  res.redirect('/');
});

module.exports = router;
