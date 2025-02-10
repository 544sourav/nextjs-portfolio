

import {NextRequest,NextResponse} from "next/server";

import { connect } from "@/lib/mongodb";
import Social from "@/modals/Social";
import Profile from "@/modals/Profile";

export async function POST(request){
    const formData = await request.formData();
    const userMail = formData.get("userMail");
    const github = formData.get("github");
    const linkedin = formData.get("linkedin");
    const twitter = formData.get("twitter");
    const facebook = formData.get("facebook");
    const instagram = formData.get("instagram");
    const youtube = formData.get("youtube");
    const website = formData.get("website");
    if( !github && !linkedin && !twitter && !facebook && !instagram && !youtube && !website){
        return NextResponse.json({error: "All required fields must be provided"}, {status: 400});
    }
    try{
        await connect();
        const oldSocial = await Social.findOne({userMail:userMail?userMail:process.env.ADMIN_EMAIL});
        if(oldSocial){
            const updatedSocial = await Social.findOneAndUpdate({userMail:userMail?userMail:process.env.ADMIN_EMAIL},{
                github  : github ? github:oldSocial.github,
                linkedin : linkedin ? linkedin:oldSocial.linkedin,
                twitter: twitter ? twitter:oldSocial.twitter,
                facebook :  facebook ? facebook:oldSocial.facebook,
                instagram:  instagram ? instagram:oldSocial.instagram,
                youtube: youtube ? youtube:oldSocial.youtube,
                website: website ? website:oldSocial.website,
            },{new:true});
            return NextResponse.json(updatedSocial, {status: 201});
        }
        const social = new Social({
            userMail : userMail?userMail:process.env.ADMIN_EMAIL,
            github  : github ? github:" ",
            linkedin : linkedin ? linkedin:" ",
            twitter: twitter ? twitter:" ",
            facebook :  facebook ? facebook:" ",
            instagram:  instagram ? instagram:" ",
            youtube: youtube ? youtube:" ",
            website: website ? website:" ",
        });
        const savedSocial = await social.save();
        const updateProfile = await Profile.findOneAndUpdate({email:userMail?userMail:process.env.ADMIN_EMAIL},{$set:{social:savedSocial._id}},{new:true});
        console.log("updateProfile", updateProfile);
        return NextResponse.json(savedSocial, {status: 201});
    }catch(error){
        console.error(error);
        return NextResponse.json({error: "Failed to create social", details: error.message}, {status: 500});
    }
}