const express = require("express")
const cookieParser = require("cookie-parser")
const authRouter = require("./routes/auth.routes")

const app = express();

app.use("/api/auth", authRouter)
app.use(cookieParser())


module.exports = app