// controllers/search.js
const products = require('../../data/products.json');

const search = (req, res) => {
  const q = req.query.q ? req.query.q.toLowerCase() : '';
  let filteredProducts = products;
  let searching = false;

  if (q !== '') {
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(q)
    );
    searching = true;
  }

  res.render('index', {
    title: 'Toko Online Sederhana',
    products: filteredProducts,
    query: q,
    searching: searching
  });
};

module.exports = { search };
