// Re-export router from top-level toko-online implementation if present
try {
  module.exports = require('../../../toko-online/app_toko_online/routes/index');
} catch (e) {
  const express = require('express');
  const router = express.Router();
  router.get('/', (req, res) => res.send('Index route (stub)'));
  module.exports = router;
}
