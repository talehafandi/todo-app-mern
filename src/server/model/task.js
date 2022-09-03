const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Task must have name"]
    },
    status: {
        type: String,
        required: [true, "Task must have status"]
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: true
    }
    
})

const Task = mongoose.model("task", taskSchema)

module.exports = Task