const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        trim: true,
        required: [true, "email is required for creating the user!"],
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email!"]
    },
    name:{
        type: String,
        required: [true, "name is a required field!"]
    },
    password:{
        type: String,
        required: [true, "password is a required field!"],
        minlength: [8, "password should be atleast of 8 character!"],
        select: false
    }
}, { timestamps : true})

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        return next()
    }

    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    return next()
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel