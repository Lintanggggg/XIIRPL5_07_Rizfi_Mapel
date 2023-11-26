const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_pelajaran: {
        type: String,
        required: [true, 'Silahkan isi nama mata pelajaran'], 
        unique: true
    },
    guru_pengampu: {
        type: String,
        required: true,
        unique: true,
    },
    jam_pelajaran: {
        type: String,
        required: true,
    },
    ruangan_kelas:{
        type: String,
        required: true,
    },
    deskripsi_mapel:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Mapels', UserSchema)