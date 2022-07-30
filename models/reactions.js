const { Schema, model, Types } = require('mongoose');
const { schema } = require('./User');

// Schema to create reaction model
const reactionsSchema = new mongoose.Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        defautlt: Date.now,
        // get:
    }
})
const Reaction = model("Reaction", reactionsSchema)
module.exports = Reaction
