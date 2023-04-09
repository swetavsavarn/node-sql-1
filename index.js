const express=require('express')
const app=express()
const body=require('body-parser')
const dbController=require('./dbController')
const dbConnection=require('./util/dbConnection')
app.use(body.json())
app.get('/',async (req,res)=>{
    const {param}=req.body
    const result = await dbController.dbController(param)
   return res.status(200).json(result)
})
dbConnection().then(()=>{
    app.listen(3000)
    console.log('connected')
})