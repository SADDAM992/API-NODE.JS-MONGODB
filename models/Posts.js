const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true

    },
    salary: {
        type: Number,
        required: true


    },

    date: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);