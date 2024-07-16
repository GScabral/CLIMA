const {Router}=require("express")
const routesClima=require("../routes/routesClima")

const router=Router();


router.use("/clima",routesClima)



module.exports = router