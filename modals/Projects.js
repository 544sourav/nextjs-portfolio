import mongoose from "mongoose";


const ProjectSchema = new mongoose.Schema(
  {
    usermail: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    projectDescription: {
      type: String,
      required: true,
      trim: true,
    },
    projectImage: {
      type: String,
      required: true,
    },
    projectType: {
      type: String,
      required: true,
    },
    projectDuration: {
      type: String,
      required: true,
    },
    projectStartDate: {
      type: String,
      required: true,
    },
    projectEndDate: {
      type: String,
      required: true,
    },
    projectLiveLink: {
      type: String,
      required: true,
    },
    projectCodeLink: {
      type: String,
      required: true,
    },
    projectTechnologies: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Projects || mongoose.model("Projects", ProjectSchema);