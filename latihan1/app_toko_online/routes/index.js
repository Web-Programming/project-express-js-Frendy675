try {
  module.exports = require('../../../toko-online/app_toko_online/routes/api/index');
} catch (e) {
  const express = require('express');
  const router = express.Router();
  router.get('/', (req, res) => res.send('Index route (stub)'));
  module.exports = router;
}
