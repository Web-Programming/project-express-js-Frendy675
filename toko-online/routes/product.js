var express = require("express");
var router = express.Router();
//var products = require("../../data/products.json");
var Product = require("../models/products");

router.get("/:id", function(req, res, next){
    const productId = parseInt(req.params.id); //Tangkap ID dari URL
    const product = products.find(p => p.id === productId); //Cari produk by id

    if(!product){ //jika produk tidak ditemukan
        return res.status(404).send('Produk tidak ditemukan!');
    }
    res.render('product-detail',
        {
            title : product.name,
            product : product
        }
    );
});
router.get("/all", async function(req, res, next){
    try{
        const prod = await Product.find(); // untuk mengambil semua data produk dari database/collection
        res.render('index', {
            title: 'Toko Online Sederhana - ini dari MongoDB',
            products: prod
        });
    }catch(err){
        res.status(500).send('Gagal memuat produk');
    }
});

router.get("/id", function(req, res, next){
});

module.exports = router;