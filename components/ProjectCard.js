"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MdWindow } from "react-icons/md";
import ProjectDataCard from "./ProjectDataCard";

const ProjectCard = ({ projects }) => {
    const router = useRouter();
    const clickHandler = () => {
       sessionStorage.setItem("projects", JSON.stringify(projects));
        router.replace("/projects");
    }

  return (
    <div className="bg-secondaryBlack  text-white p-8 rounded-[20px] border border-[#202020] shadow-lg  mx-auto">
      <div className="flex flex-col items-center">
        <span className="text-sm flex gap-x-2">
          <MdWindow size={20} className="text-purple-400 " /> Projects
        </span>
        <h2 className="text-xl font-semibold mt-1">Work Gallery</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        {projects.slice(0, 3).map((project) => (
          <ProjectDataCard project={project} key={project._id} />
        ))}
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => clickHandler()}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
