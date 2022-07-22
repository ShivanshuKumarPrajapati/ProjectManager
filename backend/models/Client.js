const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});


const Client_model = mongoose.model('Client', clientSchema);

module.exports = Client_model;