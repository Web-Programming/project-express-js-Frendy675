// var express = require("express");
// var router = express.Router();
// var products = require("../../data/products.json");


// router.get("/search", function (req, res, next) {
// 	const q = req.query.q?.toLowerCase() || ''; 
	
// 	// Filter produk berdasarkan nama (case-insensitive)
// 	let filteredProducts = products;
//     if (q) {
//         filteredProducts = products.filter(
//         (p) =>
//             p.name.toLowerCase().includes(q) ||
//             p.description.toLowerCase().includes(q)
//     );
//     }

//     console.log("Query:", q, "Jumlah hasil:", filteredProducts.length);
// 	res.render('index', { 
// 		title: q ? `Hasil Pencarian: ${q}` : 'Toko Online Sederhana',
// 		products: filteredProducts,
// 		query: q, //kirim kembali query pencarian ke view
// 	}); 
// });

// router.get("/:id", function(req, res, next){
//     const productId = parseInt(req.params.id); //Tangkap ID dari URL
//     const product = products.find(p => p.id === productId); //Cari produk by id

//     if(!product){ //jika produk tidak ditemukan
//         return res.status(404).send('Produk tidak ditemukan!');
//     }
//     res.render('product-detail',
//         {
//             title : product.name,
//             product : product
//         });
// });
// module.exports = router;

var express = require("express");
var router = express.Router();
var productController = require("../controllers/product");

router.get("/all", productController.index);
router.get("/:id", productController.detail);

module.exports = router;