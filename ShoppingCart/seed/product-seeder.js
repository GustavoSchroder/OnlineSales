var Product = require('../models/product');
var config  = require('../config');

var mongoose = require('mongoose');
mongoose.connect(config.database);

var products = [
    new Product({
        imagePath: 'http://www.ktfdistribuidora.com.br/assets/uploads/c4919189c8ce905e2cdf80878df0a1ce.jpg',
        title: 'Café Pelé',
        description: 'Café torado de ótima qualidade',
        price: 12,
    }),
    new Product({
        imagePath: 'http://4.bp.blogspot.com/-38nHitx9qx8/U4jlrP3rguI/AAAAAAABRmY/z2p7ZV_TmRI/s1600/nespresso+produ%25C3%25A7%25C3%25A3o.jpg',
        title: 'Café Nespresso',
        description: 'Café fino',
        price: 10,
    }),
    new Product({
        imagePath: 'https://www.aldi.pt/images/cafe_torrado_moido_big_2251.jpg',
        title: 'Café Markus',
        description: 'Café Português',
        price: 13,
    }),
    new Product({
        imagePath: 'http://i111.twenga.com/alimentos-bebidas/cafe-em-grao/cafe-expresso-torrado-em-tp_2612677364733837681f.jpg',
        title: 'Café Pilão',
        description: 'Café torado com o gosto de Minas Gerais',
        price: 8,
    }),
    new Product({
        imagePath: 'https://img.clasf.com.br/2017/03/20/Venda-de-caf-em-gros-torrado-e-modo-20170320024215.jpg',
        title: 'Café da Casa',
        description: 'Café torado natural',
        price: 3,
    }),
    new Product({
        imagePath: 'https://www.images-iherb.com/l/NCF-46631-4.jpg',
        title: 'Café Nescafe',
        description: 'Aroma Natural',
        price: 3,
    })
];

var done = 0;
for (var index = 0; index < products.length; index++) {
    products[index].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
