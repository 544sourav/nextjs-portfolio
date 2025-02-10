

import{NextRequest, NextResponse} from "next/server";
import {connect} from "@/lib/mongodb";
import Profile from "@/modals/Profile";

export async function PATCH(request) {
  const {mail, skillId } = await request.json();
  try {
    await connect();
    const updatedProfile = await Profile.findOneAndUpdate(
      { email: mail },
      { $set: { skills: skillId } },
      { new: true }
    );
    return NextResponse.json(updatedProfile, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update profile", details: error.message },
      { status: 500 }
    );
  }
}