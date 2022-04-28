const { Link, Education, Project, Skill, User } = require("../model/model");

const educationController = {
    // ADD EDUCATION
    addEducation: async (req, res) => {
        try {
            const newEducation = new Education(req.body);
            const savedEducation = await newEducation.save();
            res.status(200).json(savedEducation);
        } catch(err) {
            res.status(500).json(err); 
        }
    }
};

module.exports = educationController