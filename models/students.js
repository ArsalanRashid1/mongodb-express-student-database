const mongoose = require("mongoose")
const validator=require("validator")
 const Schema=mongoose.Schema;

 const personSchema=new Schema({
    name:{type:String,required:true,minLength:3},
    age:Number,
    favouritefoods:[String],
    email:{
        type:String,
        required:true,
        unique:[true,"Email is already present"],
        validate(value){
            if(!validator.isEmail(value)) {
                console.error("invalid email")
            }
        }

    },
    phone:{
        type:Number,
        min:10,
     
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true

    }
 })
 const Person= new mongoose.model("Person",personSchema)

 module.exports=Person;