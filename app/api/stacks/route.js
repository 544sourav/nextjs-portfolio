import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/lib/mongodb";
//import TechStack from "@/modals/TechStacks";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import TechStack from "@/modals/TechStack";

export async function POST(request){
    const formData = await request.formData();
    const techName = formData.get("techName");
    const techImage = formData.get("techImage");
    const techType = formData.get("techType");
    if(!techName || !techImage || !techType){
        return NextResponse.json({error: "All required fields must be provided"}, {status: 400});
    }
    try{
        await connect();
        if(!techImage){
            return NextResponse.json({error: "Tech Image is required"}, {status: 400});
        }
        let techImageUrl = "";
            if (techImage) {
              const fileResult = await uploadImageToCloudinary(
                techImage,
                "portfolio-images",
                80
              );
              techImageUrl = fileResult.secure_url;
            }
        const stack = new TechStack({
          techName,
          techImage: techImageUrl,
          techType,
        });
        const savedStack = await stack.save();
        return NextResponse.json(savedStack, {status: 201});
    }catch(error){
        console.error(error);
        return NextResponse.json({error: "Failed to create stack", details: error.message}, {status: 500});
    }
}
