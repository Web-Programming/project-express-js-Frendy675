const mongoose = require('mongoose');

// buat schema produk
const productSchema = new mongoose.Schema({
    //id otomatis dari mongodb
    name: {
        type: String, 
        required: [true, "Nama produk harus diisi"],
        trim: true, // menghilangkan spasi di awal dan akhir
    },
    price: {
        type: Number, 
        required: [true, "Harga produk harus diisi"],
        min: [1000, "Harga produk minimal 1000"],
        //max: [100000000, "Harga produk maksimal 100000000"],
    },
    description: {
        type: String, 
        required: false,//menandakan kolom wajib diisi atau tidak 
    },
    stock: {
        type: Number, 
        default: 0,// memberikan nilai bawaan/default
    },
    createAt: {
        type: Date, 
        default: Date.now,
    }
});

// buat model dari schema
const Product = mongoose.model('Product', productSchema); 

module.exports = Product;
