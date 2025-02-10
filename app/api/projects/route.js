import { NextRequest,NextResponse } from "next/server";

import { connect } from "@/lib/mongodb";
import Project from "@/modals/Projects";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import Profile from "@/modals/Profile";

export async function POST(request){
    const formData = await request.formData();
    const usermail = formData.get("usermail");
    const projectName = formData.get("projectName");
    const projectDescription = formData.get("projectDescription");
    const projectImage = formData.get("projectImage");
    const projectType = formData.get("projectType");
    const projectDuration = formData.get("projectDuration");
    const projectStartDate = formData.get("projectStartDate");
    const projectEndDate = formData.get("projectEndDate");
    const projectLiveLink = formData.get("projectLiveLink");
    const projectCodeLink = formData.get("projectCodeLink");
    const projectTechnologies = formData.getAll("projectTechnologies");
    if(!usermail || !projectName || !projectDescription || !projectImage || !projectType || !projectDuration || !projectStartDate || !projectEndDate || !projectLiveLink || !projectCodeLink || !projectTechnologies){
        return NextResponse.json({error: "All required fields must be provided"}, {status: 400});
    }
    try{
        await connect();
        if(!projectImage){
            return NextResponse.json({error: "Project Image is required"}, {status: 400});
        }
        let projectImageurl = "";
            if (projectImage) {
              const fileResult = await uploadImageToCloudinary(
                projectImage,
                "portfolio-images",
                80
              );
              projectImageurl = fileResult.secure_url;
            }
        const project = new Project({
          usermail,
          projectName,
          projectDescription,
          projectImage: projectImageurl,
          projectType,
          projectDuration,
          projectStartDate,
          projectEndDate,
          projectLiveLink,
          projectCodeLink,
          projectTechnologies,
        });
        const savedProject = await project.save();
        const UpdateProfile = await Profile.findOneAndUpdate({email:usermail},{$push:{project:savedProject._id}},{new:true});
        console.log("updateprofile", UpdateProfile);
        return NextResponse.json(savedProject, {status: 201});
    }catch(error){
        console.error(error);
        return NextResponse.json({error: "Failed to create project", details: error.message}, {status: 500});
    }
}