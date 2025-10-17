// Koneksi mongoose lokal untuk latihan1
const mongoose = require('mongoose');

const DB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/latihan1_db';

mongoose.set('strictQuery', false);

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => {
  // Tangkap kesalahan koneksi awal supaya require tidak melempar uncaught
  console.error('Gagal konek ke MongoDB:', err && err.message ? err.message : err);
});

mongoose.connection.on('connected', () => console.log('Mongoose connected to', DB_URI));
mongoose.connection.on('error', err => console.error('Mongoose connection error:', err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

module.exports = mongoose;
