const express=require("express");

require("./db/conn")
const Person=require("./models/students")
const studentRouter=require("./routers/student")

const app=express();
const port=process.env.PORT || 3000;

app.use(express.json())
//register router 
app.use(studentRouter)



app.listen(port,()=>{console.log(`app is listeninig at ${port}`)})