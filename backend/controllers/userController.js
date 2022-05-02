const { User } = require("../model/model");

const userController = {

    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getUser: async (req, res) => {
        try {
            const newestUser = await User.find().sort({ _id: -1 });
            res.status(200).json(newestUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController;