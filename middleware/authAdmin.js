const UserModel = require("../models/userModel.js");

const authAdmin = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({_id: req.user.id})
        if(user.role !== 1){
            return res.status(400).json({msg: "Admin resources access denied."})
        }
        next()
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

module.exports = authAdmin