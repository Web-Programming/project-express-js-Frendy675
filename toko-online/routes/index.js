var express = require('express');
var router = express.Router();
var products = require('../data/products.json');

const q = req.query.q ? req.query.q.toLowerCase() : '';

  let product = [
  {id:1,name:"Laptop Gaming", price: 15000000},
  {id:2,name:"Smartphone Pro Max", price: 22000000},
  {id:3,name:"Headset Bluetooth", price: 1500000},
  {id:4,name:"Kamera Mirrorless", price: 5000000},
  {id:5,name:"Smartwatch Series X", price: 1500000},
  ];

/* GET home page. */
 router.get('/', function (req, res, next) {
   res.render('index', {
     title: 'Toko Online Sederhana',
     products: products
   });
  });

router.get('/search', function(req, res, next) {

// Filter products berdasarkan 'q' (misal nama produk mengandung q)
  let filteredProducts;
  let searching = false;

  if (q === '') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(q)
    );
    searching = true;
  }

  // Kirim hasil filter ke view 'search-result'
  res.render('search-result', {
    title: 'Hasil Pencarian',
    products: filteredProducts,
    query: q,
    searching: searching
  });
});

module.exports = router;

