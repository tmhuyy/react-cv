const { Link, Education, Project, Skill, User } = require("../model/model");

const userController = {
    // ADD USER
    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // GET ALL USERS
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find().populate("educations");
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = userController;