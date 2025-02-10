import { NextRequest,NextResponse } from "next/server";

import { connect } from "@/lib/mongodb";
import Experience from "@/modals/Experience";
import Profile from "@/modals/Profile";

export async function POST(request){
    const formData = await request.formData();
    const usermail = formData.get("usermail");
    const companyName = formData.get("companyName");
    const jobTitle = formData.get("jobTitle");
    const jobDescription = formData.get("jobDescription");
    const jobStartDate = formData.get("jobStartDate");
    const jobEndDate = formData.get("jobEndDate");
    const location = formData.get("location");
    if (
      !usermail ||
      !companyName ||
      !jobTitle ||
      !jobDescription ||
      !jobStartDate ||
      !jobEndDate ||
      !location
    ) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }
    try{
        await connect();
        const experience = new Experience({
          usermail,
          companyName,
          jobTitle,
          jobDescription,
          jobStartDate,
          jobEndDate,
          jobLocation:location,
        });
        const savedExperience = await experience.save();
        const updateprofile = await Profile.findOneAndUpdate({email:usermail},{$push:{experience:savedExperience._id}},{new:true});
        return NextResponse.json({ savedExperience, message: "Experience added successfully",success:true }, { status: 201 });
    }catch(error){
        console.error(error);
        return NextResponse.json({error: "Failed to create experience", details: error.message}, {status: 500});
    }
}