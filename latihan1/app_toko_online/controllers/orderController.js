const Order = require('../models/order');

// Create - Buat order baru
const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    
    res.status(201).json({
      success: true,
      message: 'Order berhasil dibuat',
      data: savedOrder
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Gagal membuat order',
      error: error.message
    });
  }
};

// Read - Ambil semua orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    
    res.status(200).json({
      success: true,
      message: 'Berhasil mengambil semua order',
      data: orders,
      total: orders.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data order',
      error: error.message
    });
  }
};

// Read - Ambil satu order berdasarkan ID
const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order tidak ditemukan'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Berhasil mengambil order',
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil order',
      error: error.message
    });
  }
};

// Update - Update order berdasarkan ID
const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // new: true = return data baru, runValidators: validasi schema
    );
    
    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: 'Order tidak ditemukan'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Order berhasil diupdate',
      data: updatedOrder
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Gagal mengupdate order',
      error: error.message
    });
  }
};

// Delete - Hapus order berdasarkan ID
const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    
    if (!deletedOrder) {
      return res.status(404).json({
        success: false,
        message: 'Order tidak ditemukan'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Order berhasil dihapus',
      data: deletedOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Gagal menghapus order',
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder
};