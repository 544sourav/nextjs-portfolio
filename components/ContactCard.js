import React from "react";
import { IoMail } from "react-icons/io5";
import { PiStarFill } from "react-icons/pi";
import { FaGem } from "react-icons/fa";

const Contact = ({ email }) => {
  return (
    <div className=" mx-auto p-6 h-full bg-secondaryBlack text-white rounded-[20px] border border-[#202020] shadow-lg">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-lightGray rounded-full flex items-center justify-center">
          <span className="text-purple-400 mt-1">
            <FaGem size={30} />
          </span>
        </div>
        <h2 className="text-xl font-semibold mt-6">Let’s Work Together</h2>
        <p className="text-gray-400 text-sm mt-1">
          Let’s Make Magic Happen Together!
        </p>
      </div>

      {email && (
        <a
          href={`mailto:${email}`}
          className="mt-6 flex items-center gap-3  bg-lightGray p-3 rounded-lg hover:bg-primaryGray transition justify-center text-white"
        >
          <IoMail className="text-purple-400 text-xl" />
          <span className="text-sm">Email Me</span>
        </a>
      )}
    </div>
  );
};

export default Contact;
