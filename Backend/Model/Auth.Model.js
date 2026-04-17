const { Schema, model } = require('mongoose')

const authSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    phone: {
        type: Number,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,

    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "employee"],
        default: "employee"
    }

}, {
    timestamps: true,
    timeseries: true
})
module.exports = model("Auth", authSchema)