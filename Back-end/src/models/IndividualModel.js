const mongoose = require('../server/Mongodb');

const IndividualSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    }
})

const IndividualModel = mongoose.model('Individual', IndividualSchema);

module.exports = IndividualModel;
