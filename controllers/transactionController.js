class TransactionController{
    constructor(){

    }

    create(req,res){
        res.json({msg:"add transactions"})
    }

    readAll(req,res){
        res.json({msg:"all transactions"})
    }

    read(req,res){
        const{ id }=req.params;

        res.json({msg:`get transaction ${id}`})
    }

    update(req,res){
        const { id } = req.params;

        res.json({msg:`update transaction ${id}`})
    }

    delete(req,res){
        const { id } = req.params;

        res.json({msg:`delete transaction ${id}`})
    }
}

export default new TransactionController();