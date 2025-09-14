import CodingProfile from "@/components/CodingProfile";
import Contact from "@/components/ContactCard";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import OnlinePresence from "@/components/SocialCard";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";

async function getMyData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      } 
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    // console.log(response)
    const res = await response.json();
    return res.success ? res.profiles : null;
  } catch (error) {
    console.error("Error fetching my data:", error.message);
    return null;
  }
}

async function getCodolioData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CODOLIO_API_URL}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store", 
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const res = await response.json();
    return res.status?.success
      ? res.data?.platformProfiles?.platformProfiles
      : null;
  } catch (error) {
    console.error("Error fetching Codolio data:", error.message);
    return null;
  }
}


export default async function Home() {
  const profile = await getMyData();
  const codolio = await getCodolioData();
  console.log(profile);
  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-primaryBlack text-white text-2xl">
        <span class="loader"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen gap-5 flex flex-col lg:flex-row bg-primaryBlack text-white p-6">
      {/* Left side */}
      <div className="flex w-full lg:w-2/6 flex-col gap-2">
        <ProfileCard profile={profile} />
        <TechStack skills={profile.skills} />
        <WorkExperience experience={profile.experience} />
      </div>

      {/* Right side */}
      <div className="flex w-full flex-col gap-2">
        <ProjectCard projects={profile.project} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-2">
          {codolio && (
            <div className="md:w-1/3">
              <CodingProfile platformProfiles={codolio} />
            </div>
          )}
          <div className="md:w-3/12">
            <OnlinePresence social={profile.social} />
          </div>
          <div className="md:w-5/12 h-">
            <Contact email={profile.email} />
          </div>
        </div>
      </div>
    </div>
  );
}
