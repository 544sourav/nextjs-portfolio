import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosDownload } from "react-icons/io";
const ProfileCard = ({profile}) => {
  return (
    <div className="bg-secondaryBlack text-white p-2 sm:p-6 rounded-[20px] border border-[#202020] w-full mx-auto">
      {/* Upper Part */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Profile Image */}
        <div className="relative ">
          <Image
            src={profile.profileImage}
            alt="profile image"
            width={1000}
            height={1000}
            className="w-24 h-24 rounded-md"
          />
        </div>

        {/* Profile Info */}
        <div className="flex  flex-col flex-1 w-full  sm:ml-4 mt-2 sm:mt-0 ">
          {/* Status & Resume */}
          <div className="flex justify-between  items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-primaryGray border-[0.5px] border-[#202020] px-3 py-1 text-sm">
              <span
                className={`w-3 h-3 rounded-full ${
                  profile.isavaliable ? "bg-primaryGreen" : "bg-red-500"
                }`}
              ></span>
              <p className="text-sm text-gray-400">Available To Work</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400 cursor-pointer">
              <p>Resume</p>
              <Link
                href={profile.resumeLink}
                className="w-10 h-10 flex items-center justify-center bg-terinaryGray rounded-lg"
              >
                <IoIosDownload size={25} />
              </Link>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-xl font-semibold mt-1 text-left">{profile.name}</h1>
          <p className="text-gray-400 text-sm">
            I&apos;m a <span className="text-primaryVoilet">Web Developer</span>
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="mt-4 bg-primaryGray p-4 rounded-[10px] flex flex-wrap gap-2 border-[0.8px] border-[#202020] ">
        <div className="flex  items-center gap-2 bg-secondaryGray px-3 py-1 rounded-full text-sm border-[0.5px] border-[#202020]">
          <FaLocationDot className="text-primaryVoilet" />
          <p className="break-all w-full">{profile.location}</p>
        </div>
        <div className="flex items-center gap-2 bg-secondaryGray px-3 py-1 rounded-full text-sm border-[0.5px] border-[#202020]">
          <FaGraduationCap className="text-primaryVoilet" />
          <p>{profile.college}</p>
        </div>
        <div className="flex items-center gap-2 bg-secondaryGray px-3 py-1 rounded-full text-sm border-[0.5px] border-[#202020]">
          <IoMail className="text-primaryVoilet" />
          <p className="break-all w-full">{profile.email}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex sm:flex-row flex-col gap-3">
        <Link
          href={`https://instagram.com/${profile.social.instagram}`}
          className="flex  justify-center items-center gap-2 w-full bg-lightGray p-3 rounded-xl text-sm text-gray-300 hover:bg-terinaryGray"
        >
          <RiInstagramFill size={20} className="text-primaryVoilet" />
          DM me (Instagram)
        </Link>
        <Link
          href={`https://wa.me/${profile.phone}`}
          className="flex   justify-center items-center gap-2 w-full bg-lightGray p-3 rounded-xl text-sm text-gray-300 hover:bg-terinaryGray"
        >
          <IoLogoWhatsapp size={20} className="text-primaryVoilet" />
          WhatsApp Me
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard