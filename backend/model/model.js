const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    details: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const linkSchema = new mongoose.Schema({
    name: {
        type: String
    },
    url: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    details: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const skillSchema = new mongoose.Schema({
    details: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

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
    },
    phoneNumber: {
        type: Number,
        min: 10,
    },
    careerObjective: {
        type: String,
    },
    links: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Link"
        }
    ],
    educations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Education"
        }
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    ],
    skills: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill"
    }
})

const Link = mongoose.model("Link", linkSchema);
const Education = mongoose.model("Education", educationSchema);
const Project = mongoose.model("Project", projectSchema);
const Skill = mongoose.model("Skill", skillSchema);
const User = mongoose.model("User", userSchema);
module.exports = {
    Link,
    Education,
    Project,
    Skill,
    User
};