'use client';
import ProjectDataCard from '@/components/ProjectDataCard';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'
import { MdWindow } from 'react-icons/md';

const Page = () => {
    const [projectsData, setProjectsData] = useState([]);
    const router = useRouter();
    // Fetch stored projects from sessionStorage
    useEffect(() => {
      const storedProjects = sessionStorage.getItem("projects");
      if (storedProjects) {
        setProjectsData(JSON.parse(storedProjects));
      }
    }, []);
  return (
    <div className="bg-secondaryBlack min-h-screen text-white m-6    rounded-[20px] border border-[#202020] shadow-lg ">
      <div className="flex flex-col items-center mt-6">
        <span className="text-sm flex gap-x-2">
          <MdWindow size={20} className="text-purple-400 " /> Projects
        </span>
        <h2 className="text-xl font-semibold mt-1">Work Gallery</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 sm:p-6 gap-6">
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => router.replace("/")}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Go To Home
          </button>
        </div>
        {projectsData?.length > 0 ? (
          projectsData.map((project) => (
            <ProjectDataCard project={project} key={project._id} />
          ))
        ) : (
          <p className="text-center text-white col-span-full">
            No projects available
          </p>
        )}
      </div>
    </div>
  );
}

export default Page

