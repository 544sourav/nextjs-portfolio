import mongoose from 'mongoose';

const SocialSchema = new mongoose.Schema({
    userMail:{  
        type:String,
        required:true,
    },
    github:{
        type:String,
        required:true,
    },
    linkedin:{
        type:String,
        required:true,
    },
    twitter:{
        type:String,
        required:true,
    },
    facebook:{
        type:String,
        required:true,
    },
    instagram:{
        type:String,
        required:true,
    },
    youtube:{
        type:String,
        required:true,
    },
    website:{
        type:String,
        required:true,
    },
},{timestamps:true}
)
export default mongoose.models.Social || mongoose.model("Social", SocialSchema);