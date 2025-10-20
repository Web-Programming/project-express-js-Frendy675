exports.adminOnly = (req, res, next) => {
    const isAdmin = req.body.isAdmin; //contoh : {"isAdmin" : true} 
    if (isAdmin === true) {
        console.log("Middleware: Akses Diberikan: User adalah admin.");
        next(); //lanjutkan
    } else {
        //403 Forbidden
        return res.status(403).json({ 
            success: false, 
            message: "Akses ditolak: Hanya admin yang dapat mengakses resource ini." 
        });
    }
};