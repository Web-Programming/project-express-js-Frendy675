var express = require('express');
var router = express.Router();
var products = require('../../data/products.json'); // JSON dari file

// Data produk dummy tambahan (jika tidak ada di file JSON)
let product = [
  {id:1,name:"Laptop Gaming", price: 15000000},
  {id:2,name:"Smartphone Pro Max", price: 22000000},
  {id:3,name:"Headset Bluetooth", price: 1500000},
  {id:4,name:"Kamera Mirrorless", price: 5000000},
  {id:5,name:"Smartwatch Series X", price: 1500000},
];

// Gunakan salah satu sumber data saja (products dari JSON/file atau array di atas)
// Misalnya kita pakai array langsung:
products = product;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Toko Online Sederhana',
    products: products
  });
});

/* GET search page */
router.get('/search', function(req, res, next) {
  const q = req.query.q ? req.query.q.toLowerCase() : ''; // ✅ Pindah ke dalam handler
  let filteredProducts;
  let searching = true;

  if (q === '') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(q)
    );
    searching = true;
  }

//   res.render('search-result', {
//     title: 'Hasil Pencarian',
//     products: filteredProducts,
//     query: q,
//     searching: searching
//   });
// });
res.render('index', {
    title: 'Toko Online Sederhana',
    products: filteredProducts,
    query: q,
    searching: searching
  });
});

module.exports = router;
