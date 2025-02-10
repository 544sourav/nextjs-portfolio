import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isavaliable: {
      type: Boolean,
      default: true,
    },
    speciality: [
      {
        type: String,
        required: true,
      },
    ],
    profileImage: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    resumeLink: {
      type: String,
      required: true,
    },
    social: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Social',
    },
    project: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects',
      },
    ],
    experience: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experience',
      },
    ],
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TechStack',
      },
    ],
  },
  { timestamps: true }
);


export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);