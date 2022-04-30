const { Link, Education, Project, Skill, User } = require("../model/model");

const educationController = {
    // ADD EDUCATION
    addEducation: async (req, res) => {
        try {
            const newEducation = new Education(req.body);
            const newestUser = await User.find().sort({ _id: -1 }).limit(1);

            await User.findByIdAndUpdate(newestUser._id, { $push: { educations: savedEducation._id } });

            const savedEducation = await newEducation.save();

            res.status(200).json(savedEducation);
        } catch(err) {
            res.status(500).json(err); 
        }
    },
    // GET ALL EDUCATIONS
    getAllEducations: async (req, res) => {
        try {
            const educations = await Education.find().populate("user");
            res.status(200).json(educations);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = educationController