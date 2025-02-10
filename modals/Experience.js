import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    usermail: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
    jobStartDate: {
      type: String,
      required: true,
    },
    jobEndDate: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);