const userModel = require("../models/user.model")

// this is user register controller, it is for --> POST api/auth/register

async function userRegisterController(req,res){

    const { email, password, name} =req.body

    const isExist = await userModel.findOne({
        email : email
    })

    if (isExist){
        return res.status(422).json({
            message: "user already exist with this email!",
            status: "failed"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "3d"})

    res.cookie("token", token)

    res.status(201).json({
        user: {
            email: user.email,
            _id: user._id,
            name: user.name
        },
        token
    })

}

async function userLoginController(req, res){
    const { email, password} = req.body
    const user = await userModel.findOne({
        email
    })

    if(!user){
        return res.status(401).json({
            message : "email or password is invalid!"
        })
    }
    
    const isValidUser = await user.compare(password)

    if(!isValidUser){
        return res.status(401).json({
            message : " email or password is invalid!"
        })
    }

    
}


module.exports = {userRegisterController}