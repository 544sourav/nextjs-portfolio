import React from "react";
import Image from "next/image";
import { SiCodersrank } from "react-icons/si";


const CodingProfile = ({ platformProfiles }) => {
  
  const totalQuestions = platformProfiles.reduce(
    (acc, platform) =>
      acc + (platform.totalQuestionStats?.totalQuestionCounts || 0),
    0
  );

 
  const platformLinks = {
    leetcode: (handle) => `https://leetcode.com/${handle}/`,
    codechef: (handle) => `https://www.codechef.com/users/${handle}`,
    geeksforgeeks: (handle) =>
      `https://auth.geeksforgeeks.org/user/${handle}/practice/`,
    codeforces: (handle) => `https://codeforces.com/profile/${handle}`,
  };

  
  const platformIcons = {
    leetcode: "/leetcode.svg",
    codechef: "/icons8-codechef.svg",
    geeksforgeeks: "/icons8-geeksforgeeks.svg",
    codeforces: "/code-forces.svg",
  };

  
  const filteredProfiles = platformProfiles.filter(
    (platform) => platform.platform !== "hackerrank"
  );

return (
  <div className="mx-auto p-2 sm:p-6 text-white bg-secondaryBlack shadow-lg rounded-[20px] border border-[#202020]">
    <div className="flex flex-col items-center">
      <span className=" text-sm flex gap-x-2">
        <SiCodersrank size={20} className="text-purple-400" /> DSA
      </span>
      <h2 className="text-xl font-semibold mt-1">Coding Profile</h2>
    </div>

    <div className="bg-primaryGray p-4 rounded-lg mb-4 mt-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm font-semibold">Questions Solved</h1>
        <p className="text-4xl font-extrabold">{totalQuestions}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-4 bg-primaryGray p-4 rounded-lg ">
      {filteredProfiles.map((platform, index) => {
        const { platform: name, userStats } = platform;
        const maxRating = userStats?.maxRating ?? null;
        const handle = userStats?.handle;
        const profileLink = handle ? platformLinks[name]?.(handle) : "#";
        const iconSrc = platformIcons[name];

        return (
          <div
            key={index}
            className="bg-lightGray     rounded-full w-fit shadow  flex items-center"
          >
            <a
              href={profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              {/* Platform Icon */}
              {iconSrc && (
                <div className="bg-terinaryGray rounded-lg p-1">
                  <Image
                    src={iconSrc}
                    alt={`${name} logo`}
                    width={20}
                    height={20}
                  />
                </div>
              )}

              {/* Platform Info */}
              {maxRating && (
                <div className="mr-2">
                  <p>
                    <span className="font-medium">Max Rating: </span>
                    {maxRating}
                  </p>
                </div>
              )}
            </a>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default CodingProfile;
