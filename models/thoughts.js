const { Schema, model } = require('mongoose');
const reactionsschema = require("./reactions")
// Schema to create thoughts model
const thoughtsSchema = new mongoose.Schema({
    thoughText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get:
    },
    userName:
    {
        type: String,
        required: true
        
    }, 
     reactions: [reactionsschema]
})
