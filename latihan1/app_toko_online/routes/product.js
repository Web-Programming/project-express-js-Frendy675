try {
  module.exports = require('../../../toko-online/app_toko_online/routes/product');
} catch (e) {
  const express = require('express');
  const router = express.Router();
  router.get('/', (req, res) => res.send('Product route (stub)'));
  module.exports = router;
}
