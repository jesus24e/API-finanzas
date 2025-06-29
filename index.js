import express from 'express'
import { PORT } from './config.js'
import transactionRoutes from './routes/transactionRoutes.js'

const app = express()

app.get('/',(req,res)=>{
    res.send('hola mundo')
});
 
app.use("/transactions", transactionRoutes);

app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})