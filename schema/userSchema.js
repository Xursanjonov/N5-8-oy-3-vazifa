import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    gander: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
})

export const User = mongoose.model('newproject-users', userSchema)