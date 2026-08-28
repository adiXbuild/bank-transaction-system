const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("server is connected to DB!");
    })
    .catch(err =>{
        console.log("there was error connecting to DB!");
        console.log(err);
        process.exit(1);

    })
}


module.exports = connectDB