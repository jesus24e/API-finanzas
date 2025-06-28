import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/',(req,res)=>{
    res.send('hola mundo')
});
 
app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})