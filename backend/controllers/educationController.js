const { Link, Education, Project, Skill, User } = require("../model/model");

const educationController = {
    // ADD EDUCATION
    addEducation: async (req, res) => {
        try {
            const newEducation = await Education.insertMany(req.body);
            const newestUser = await User.find().sort({ _id: -1 }).limit(1);
            const newestEducation = await Education.find().sort({ _id: -1 }).limit((req.body).length);
            await newestEducation.updateMany({}, { $set: { user: newestUser._id } });

            // await Education.updateMany({})
            for (let i = 1; i <= (req.body).length; i++) {
                await User.findByIdAndUpdate(newestUser._id, { $push: { educations: newEducation[i]._id } });
            }

            res.status(200).json(newEducation);
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