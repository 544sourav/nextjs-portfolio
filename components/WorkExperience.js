'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MdOutlineWork } from "react-icons/md";
import "swiper/css";

const WorkExperience = ({ experience }) => {
  return (
    <div className="bg-secondaryBlack text-white p-6 rounded-[20px] border border-[#202020] shadow-lg ">
      <div className="flex flex-col items-center">
        <span className=" text-sm flex  gap-x-2 ">
          <MdOutlineWork size={18} className="text-purple-400" /> Worked As
        </span>
        <h2 className="text-xl font-semibold mt-1">Work Experience</h2>
      </div>

      {experience.length > 0 ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="mt-4"
        >
          {experience.map((exp) => (
            <SwiperSlide key={exp._id}>
              <div className="p-4 bg-transparent rounded-lg shadow-md">
                <h3 className="text-lg font-medium">{exp.jobTitle}</h3>
                <p className="text-gray-400">{exp.companyName}</p>
                <p className="text-gray-500 text-sm mt-1">{exp.jobLocation}</p>
                <p className="text-sm text-gray-300 mt-2">
                  {exp.jobStartDate} - {exp.jobEndDate}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {exp.jobDescription}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-500 mt-4">No work experience added yet.</p>
      )}
    </div>
  );
};

export default WorkExperience;
