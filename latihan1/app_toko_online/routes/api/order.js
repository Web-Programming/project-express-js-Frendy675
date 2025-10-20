const express = require("express");
const router = express.Router();
const orderController = require("../../controllers/orderController");

router.post("/", orderController.create);
router.get("/", orderController.all);
router.get("/:id", orderController.detail);
router.put("/:id", orderController.update);

module.exports = router;
