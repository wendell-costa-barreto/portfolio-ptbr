import CarouselDemo from "@/components/ui/VerticalSlider";
import {
  Cats,
  EldenRing,
  NexusDashboard,
  roboto,
  SolarSystem,
  VisitezLeQuebec,
} from "@/lib/utils";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <div className="w-[55%] h-[40vh] flex justify-center items-start flex-col ml-[7%] mt-[2vh] md:mt-[1%]">
        <h1 className={`${roboto.className} uppercase font-roboto text-7xl`}>
          Meus projetos
        </h1>
      </div>

      <div className="w-full flex justify-start items-center mt-[1%] flex-col gap-[3vh] mb-[2%]">
        <div className="w-full flex justify-start items-center mt-[1%] flex-col lg:flex-row">
          <div className="ml-[5%] w-[80%]">
            <CarouselDemo
              propArray={VisitezLeQuebec}
              title="Visitez Le Quebec"
              href="visitezlequebec"
            />
          </div>
          <div className="w-[80%] h-full  lg:mt-0">
            <CarouselDemo
              propArray={NexusDashboard}
              title="Nexus Dashboard"
              href="nexusdashboard"
            />
          </div>
        </div>

        <div className="w-full flex justify-start items-center mt-[1%] flex-col lg:flex-row">
          <div className="ml-[5%] w-[80%]  lg:mt-0">
            <CarouselDemo
              propArray={SolarSystem}
              title="3D Solar System"
              href="solarsystem"
            />
          </div>
          <div className="w-[80%] h-full  lg:mt-0">
            <CarouselDemo
              propArray={EldenRing}
              title="Elden Ring"
              href="eldenring"
            />
          </div>
        </div>

        <div className="w-full flex justify-start items-center mt-[2%] flex-col lg:flex-row">
          <div className="ml-[5%] w-[80%]  lg:mt-0">
            <Link href={"/projects/cats"}>
              <CarouselDemo propArray={Cats} title="Cat Races" href="cats" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
