const mongoose = require('mongoose');
const { ObjectId } = mongoose;

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: {
        type: String,
        enum: ['Not started', "In progress", "Completed"]
    },
    clientId: {
        type: ObjectId,
        ref: 'Client'
    }
});

const Project_model = mongoose.model('Project', projectSchema);

module.exports = Project_model