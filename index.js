import express from 'express'
import { PORT } from './config.js'
import transactionRts from './routes/transactionRoutes.js'

const app = express()

app.get('/',(req,res)=>{
    res.send('hola mundo')
});
 
app.use("/transactions", transactionRts);

app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})