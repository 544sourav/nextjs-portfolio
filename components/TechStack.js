"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";
import { RiStackFill } from "react-icons/ri";


const TechStack = ({ skills }) => {
   const infiniteSkills = [...skills, ...skills,...skills];

   
  return (
    // <div className="bg-secondaryBlack text-white p-6 rounded-[20px] border border-[#202020] shadow-lg  mx-auto">
    //   <div className="flex flex-col items-center">
    //     <span className=" text-sm flex gap-x-2">
    //       <RiStackFill size={20} className="text-purple-400" /> My Stacks
    //     </span>
    //     <h2 className="text-xl font-semibold mt-1">Tech Arsenal</h2>
    //   </div>

    //   <div className="flex flex-wrap gap-4 mt-4">
    //     {skills.map((skill) => (
    //       <div
    //         key={skill._id}
    //         className="bg-[#1a1a1a] flex items-center gap-2 p-3 w-fit rounded-lg"
    //       >
    //         <Image
    //           src={skill.techImage}
    //           alt={skill.techName}
    //           width={600}
    //           height={600}
    //           className="w-8 h-8 rounded-md bg-terinaryGray p-1 "
    //         />
    //         <span className="text-sm">{skill.techName}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="bg-secondaryBlack text-white p-2 sm:p-6 rounded-[20px] border border-[#202020] shadow-lg  overflow-hidden w-full mx-auto">
      <div className="flex flex-col items-center ">
        <span className="text-sm flex gap-x-2">
          <RiStackFill size={20} className="text-purple-400" /> My Stacks
        </span>
        <h2 className="text-xl font-semibold mt-1">Tech Arsenal</h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden mt-4 space-y-3 my-1">
        <motion.div
          className="flex gap-4 min-w-[600%]"
          animate={{ x: ["0%", "-150%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {infiniteSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] flex items-center gap-2 p-3 pr-10 rounded-lg"
            >
              <Image
                src={skill.techImage}
                alt={skill.techName}
                width={600}
                height={600}
                className="w-8 h-8 rounded-md bg-terinaryGray p-1"
              />
              <span className="text-sm">{skill.techName}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4 min-w-[600%]"
          animate={{ x: ["-150%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {infiniteSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] flex items-center gap-2 p-3 pr-10 rounded-lg"
            >
              <Image
                src={skill.techImage}
                alt={skill.techName}
                width={600}
                height={600}
                className="w-8 h-8 rounded-md bg-terinaryGray p-1"
              />
              <span className="text-sm">{skill.techName}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
