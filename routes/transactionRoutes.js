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


router.route("/:id")
    .put((req, res)=>{
        const id = req.params.id;

        res.json({
            msg:`update transaction ${id}`
        })
    })

    .delete((req, res)=>{
        const id = req.params.id;

        res.json({
            msg:`delete transaction ${id}`
        })
    })

    .get((req,res)=>{
        const id=req.params.id;

        res.json({
            msg:`get transaction ${id}`
        })
    })

export default router;