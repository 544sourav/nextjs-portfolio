import CodingProfile from "@/components/CodingProfile";
import Contact from "@/components/ContactCard";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import OnlinePresence from "@/components/SocialCard";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

async function getmydata() {
  let data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`);
  let res = await data.json();
  if(res.success){
    return res.profiles;
  }
  return null;
}
async function getCodolioData(){
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_CODOLIO_API_URL}`
  );
  let res = await data.json();
  if (res.status.success) {
    //console.log("res", res.data.platformProfiles.platformProfiles);
    return res.data.platformProfiles.platformProfiles;
  }
  return null;
}

export default async function Home() {
  let profile = await getmydata();
  let codolio = await getCodolioData();
 // console.log("profile", profile);
   if (!profile) {
     return (
       <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-primaryBlack text-white text-2xl">
         Server Busy
       </div>
     );
   }
  return (
   
    <div className=" min-h-screen  gap-5 flex flex-col lg:flex-row bg-primaryBlack text-white p-6">
      {/* leftside */}
      <div className="flex w-full lg:w-2/6 flex-col gap-2">
        {/* profile */}
        <div className=" max-h-fit">
          <ProfileCard profile={profile} />
        </div>
        {/* tech stack */}
        <div>
          <TechStack skills={profile.skills} />
        </div>
        {/* workexperience */}
        <div className="">
          <WorkExperience experience={profile.experience} />
        </div>
      </div>

      {/* rightside */}
      <div className="flex w-full flex-col gap-2">
        {/* work gallery */}
        <div className="  ">
          <ProjectCard projects={profile.project} />
        </div>
        {/* down section*/}
        <div className="flex flex-col md:flex-row gap-2">
          {/* coding profile */}
        
          {codolio && (
            <div className="md:w-1/3">
              <CodingProfile platformProfiles={codolio} />
            </div>
          )}
          
          {/* online presence */}
          <div className="md:w-3/12 ">
            <OnlinePresence social={profile.social} />
          </div>
          {/* contact section */}
          <div className="md:w-5/12 ">
            <Contact email = {profile.email} />
          </div>
        </div>
      </div>
    </div>
  );
}
