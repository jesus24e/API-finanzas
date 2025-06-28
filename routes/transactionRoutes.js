import express from 'express'

const router = express.Router();

router.get("/", (req, res)=>{
    res.json({
        msg:"all transactions"
    })
})
router.post("/", (req, res)=>{
    res.json({
        msg:"add transactions"
    })
})
router.put("/", (req, res)=>{
    res.json({
        msg:"update transactions"
    })
})
router.delete("/", (req, res)=>{
    res.json({
        msg:"delete transactions"
    })
})

export default router;