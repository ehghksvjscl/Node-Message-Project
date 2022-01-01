const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    badge: {
        type: Number,
        default: 0
    },

    content: {
        type: String,
        minglength: 300
    },

    fromUserName: {
        type:String,
        maxlength:50
    },
}, { timestamps: true })

const Message = mongoose.model('Message', messageSchema);

module.exports = { Message }