const {Router}=require("express");
const getClima=require("../controllers/getByName")


const router=Router();

router.get("/name/:name",async(req,res)=>{
    const name=req.params.name;
    try{
        const resultadoName=await getClima(name); 
        res.status(200).json(resultadoName)
    } catch (error) {
        if (error.message.includes("Ingrese un nombre válido")) {
            res.status(400).json({ error: error.message });
        } else if (error.message.includes("API error")) {
            res.status(502).json({ error: error.message });
        } else if (error.message.includes("No se recibió respuesta del servidor de la API")) {
            res.status(503).json({ error: error.message });
        } else if (error.message.includes("Error en la respuesta de la API")) {
            res.status(502).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
});

module.exports = router;