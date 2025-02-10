import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const socialLinks = {
  github: {
    icon: <FaGithub />,
    url: (handle) => `https://github.com/${handle}`,
  },
  linkedin: {
    icon: <FaLinkedin />,
    url: (handle) => `https://www.linkedin.com/in/${handle}`,
  },
  twitter: {
    icon: <FaTwitter />,
    url: (handle) => `https://twitter.com/${handle}`,
  },
  facebook: {
    icon: <FaFacebook />,
    url: (handle) => `https://facebook.com/${handle}`,
  },
  instagram: {
    icon: <FaInstagram />,
    url: (handle) => `https://instagram.com/${handle}`,
  },
  youtube: {
    icon: <FaYoutube />,
    url: (handle) => `https://youtube.com/${handle}`,
  },
  website: { icon: <FaGlobe />, url: (handle) => handle }, // Direct URL
};

const OnlinePresence = ({ social }) => {
  // Filter out empty handles
  const availableLinks = Object.entries(socialLinks).filter(([key]) =>
    social[key]?.trim()
  );

  return (
    <div className=" mx-auto p-6 bg-secondaryBlack h-full text-white rounded-[20px] border border-[#202020] shadow-lg">
      <div className="flex flex-col items-center">
        <span className=" text-sm flex gap-x-2">
          <MdRocketLaunch size={20} className="text-purple-400" /> Follow Me
        </span>
        <h2 className="text-xl font-semibold mt-1">Online Presence</h2>
      </div>

      {availableLinks.length > 0 ? (
        <div className="mt-4 flex flex-col gap-3">
          {availableLinks.map(([key, { icon, url }]) => (
            <a
              key={key}
              href={url(social[key])}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-secondaryGray p-2 rounded-lg hover:bg-primaryGray transition "
            >
              <span className="text-xl bg-terinaryGray p-2 rounded-lg text-white">
                {icon}
              </span>
              <span className="text-white text-base">{social[key]}</span>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm mt-4 text-center">
          No social profiles available
        </p>
      )}
    </div>
  );
};

export default OnlinePresence;
