'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectDataCard = ({project}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={project._id}
      className="relative rounded-xl overflow-hidden shadow-lg group"
    >
      {/* Project Image */}
      <Image
        src={project.projectImage}
        alt={project.projectName}
        width={500}
        height={56}
        className="w-full h-56 object-cover"
      />

      {/* Always Visible Black Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      {/* Violet Gradient (Appears on Hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-primaryVoilet via-primaryVoilet/70 to-transparent opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-20" />

      {/* Content (Always on Top) */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 z-30">
        <h3 className="text-lg font-semibold text-white">
          {project.projectName}
        </h3>
        <div className="flex items-center gap-4 mt-2">
          <a
            href={project.projectLiveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            <TbWorldWww size={20} />
          </a>
          <a
            href={project.projectCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            <FaGithub size={20} />
          </a>
        </div>
        <p className="text-sm text-white mt-2">
          <span className="font-semibold">Tech Stack: </span>
          {JSON.parse(project.projectTechnologies[0]).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default ProjectDataCard
