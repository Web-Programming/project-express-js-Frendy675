try {
  module.exports = require('../../../../toko-online/app_toko_online/routes/api/product');
} catch (e) {
  const express = require('express');
  const router = express.Router();
  router.get('/', (req, res) => res.json({ products: [] }));
  module.exports = router;
}
