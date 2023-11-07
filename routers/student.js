const express=require("express")
//we need to create router
const router=new express.Router()
const Person=require("../models/students")


router.post("/students",async(req,res)=>{ 
    console.log(req.body)
    
    try{
        const user=new Person(req.body)
        const createuser=await user.save()
        res.status(201).send(createuser)
    }catch(e){
        res.status(400).send(e)
    
    }
    })
    
    router.get("/students",async(req,res)=>{
    try{
    const findUsers=await Person.find()
    
    res.send(findUsers)
    }catch(e){
        res.send(e)
    }
    })
    
    
    router.get("/students/:id",async(req,res)=>{
        try{
        const {id}=req.params;
        const findById=await Person.findById(id)
        res.status(200).send(findById)
        }catch(e){
            res.status(500).send(e)
        }
    
    })
    
    router.get("/students/:name",async(req,res)=>{
        try{
            const {name}=req.params
            const findByName=await Person.findByName(name)
            res.send(findByName)
    
        }catch(e){
            res.status(401).send(e)
        }
    })
    
    
    router.patch("/students/:id",async(req,res)=>{
        try{
        const {id}=req.params;
        const Update=await Person.findByIdAndUpdate(id,req.body,{new:true})
        
        res.status(200).send(Update)
        }catch(e){
            res.status(404).send(e)
        }
    
    })
    
    router.delete('/students/:id',async(req,res)=>{
        try{
            const {id}=req.params
            const delete1=await Person.findByIdAndDelete(id)
            if(!id){
                res.status(400).send()
            }else{
                res.status(200).send(delete1)
            }
    
        }catch(e){
            res.status(500).send(e)
        }
    })
module.exports=router;