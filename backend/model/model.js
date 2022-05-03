const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    careerObjective: {
        type: String
    },
    educations: {
        type: Array
    },
    projects: {
        type: Array
    },
    skills: {
        type: Array
    },
    links: {
        type: Array
    }
});
const User = mongoose.model("User", userSchema);
module.exports = {User}