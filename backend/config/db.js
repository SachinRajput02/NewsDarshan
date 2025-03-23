
import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sachinrajput:Sr321026@srcluster.quwib.mongodb.net/').then(()=>console.log("DB Connected"));
}









