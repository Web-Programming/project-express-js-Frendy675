const Order = require("../models/orders");
const User = require("../models/users");

// CREATE - POST /api/orders
exports.create = async (req, res) => {
  try {
    const { userId, items, totalAmount, status } = req.body;

    // Validasi user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    const newOrder = new Order({ userId, items, totalAmount, status });
    await newOrder.save();

    res.status(201).json({ message: "Order berhasil dibuat", order: newOrder });
  } catch (err) {
    res.status(400).json({ message: "Gagal membuat order", error: err.message });
  }
};

// READ ALL - GET /api/orders
exports.all = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "username email");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data order", error: err.message });
  }
};

exports.detail = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate({
        path: "userId",
        select: "username email address isAdmin"
      });

    if (!order) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }

    // Menampilkan detail yang lebih informatif
    res.status(200).json({
      _id: order._id,
      user: order.userId,
      items: order.items.map(item => ({
        productName: item.productName,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.quantity * item.price
      })),
      totalAmount: order.totalAmount,
      status: order.status,
      createdAt: order.createdAt
    });
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil detail order", error: err.message });
  }
};

// UPDATE - PUT /api/orders/:id
exports.update = async (req, res) => {
  try {
    const updateData = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!order)
      return res.status(404).json({ message: "Order tidak ditemukan" });

    res.status(200).json({ message: "Order berhasil diperbarui", order });
  } catch (err) {
    res.status(400).json({ message: "Gagal memperbarui order", error: err.message });
  }
};
