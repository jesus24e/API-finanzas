import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required: true,
            unique: true,
            trim: true
        },

        nombre:{
            type:String,
            required: true,
            trim: true 
        },

        clave:{
            type:String,
            required: true
        }
        
    }
);

export default mongoose.model("users", usersSchema)