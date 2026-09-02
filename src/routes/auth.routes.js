const express = require("express")

const router = express.Router()

//POST --> api/auth/register
router.post("/register", authController.userRegisterController)

router.post("/login", authController.userLoginController)






module.exports = router