// app/api/profile/create/route.js
'use server'
import { NextRequest, NextResponse } from "next/server";
import { uploadImageToCloudinary } from "@/lib/cloudinary"; // Image upload function
import { connect } from "@/lib/mongodb";
import Profile from "@/modals/Profile";
import Experience from "@/modals/Experience"
import Social from "@/modals/Social";
import Projects from "@/modals/Projects";
import TechStack from "@/modals/TechStack";

export async function POST(request){
  const formData = await request.formData();
  const name = formData.get("name"); 
  const isavaliable = formData.get("isavaliable");
  const speciality = formData.getAll("speciality");
  const location = formData.get("location");
  const college = formData.get("college");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const resumeLink = formData.get("resumeLink");
  const profileImage = formData.get('profileImage') ;
  if(!name || !speciality || !location || !college || !email || !phone || !resumeLink){
    return NextResponse.json({error: "All required fields must be provided"}, {status: 400});
  }
  try{
    await connect();
    let profileImageUrl = "";
    if(profileImage){
      const fileResult = await uploadImageToCloudinary(profileImage, "portfolio-images", 80);
      profileImageUrl = fileResult.secure_url;
    }
    const profile = new Profile({
      name,
      isavaliable : isavaliable === "true" ? true : false,
      speciality,
      profileImage: profileImageUrl,
      location,
      college,
      email,
      phone,
      resumeLink,
    });
    const savedProfile = await profile.save();
    console.log("profileimage", profileImage);
    console.log("profileImageUrl", profileImageUrl);
    return NextResponse.json(
      savedProfile,
       {status: 201});
  }catch(error){
    console.error(error);
    return NextResponse.json({error: "Failed to create profile", details: error.message}, {status: 500});
  }
}

export async function GET() {
  try {
    await connect();
    
      const profiles = await Profile.findOne({email:process.env.ADMIN_EMAIL})
      .populate(["experience", "social", "project", "skills"]);
       if (!profiles) {
      return NextResponse.json({ error: "No profiles found" }, { status: 404 });
    }


    return NextResponse.json({ profiles, success: true ,message:"datafetched" }, { status: 200 });
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
