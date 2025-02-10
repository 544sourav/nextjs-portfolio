import mongoose from "mongoose";

const TechStackSchema = new mongoose.Schema({
    techName:{
        type:String,
        required:true,
        trim:true,
    },
    techImage:{
        type:String,
        required:true,
    },
    techType:{
        type:String,
        required:true,
    },
},{timestamps:true}
)
export default mongoose.models.TechStack || mongoose.model("TechStack", TechStackSchema);