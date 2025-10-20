const User = require("../models/users");

exports.createUser = async (req, res) => {
  try {
    const { username, email, password, address, isAdmin } = req.body;

    const newUser = new User({ username, email, password, address, isAdmin });
    await newUser.save();

    res.status(201).json({ message: "User berhasil dibuat", user: newUser });
  } catch (err) {
    res.status(400).json({ message: "Gagal membuat user", error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data user", error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "User tidak ditemukan" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data user", error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updateData = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true
    });

    if (!user)
      return res.status(404).json({ message: "User tidak ditemukan" });

    res.status(200).json({ message: "User berhasil diperbarui", user });
  } catch (err) {
    res.status(400).json({ message: "Gagal memperbarui user", error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(404).json({ message: "User tidak ditemukan" });

    res.status(200).json({ message: "User berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: "Gagal menghapus user", error: err.message });
  }
};
