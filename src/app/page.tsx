import {
  Alagard,
  Bello,
  ChicagoLight,
  Cotton,
  EBGaramond400,
  FairfaxItalic,
  Genty,
  Gliker,
  Grotesk400,
  Grotesk700,
  HelveticaRoman,
  IBMMono500,
  Mushy,
  Ninety,
  SansFrans,
  SansFransBold,
  ToonyLineLine,
  Ubuntu,
  Victor,
  Village,
} from "../app/utils/fonts";
import Image from "next/image";
import Me from "./sections/Me";
import MeLink from "./sections/MeLink";
import ToSection from "./sections/ToSection";
import ProjectTitle from "./sections/ProjectTitle";
import DaProject from "./sections/DaProject";
import DaExperience from "./sections/DaExperience";
import DaAward from "./sections/DaAward";
import Intro from "./sections/Intro";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <div id="attention"></div>
      <Navbar />
      <main className="sm:container sm:mx-auto w-full overflow-x-hidden">
        <div className="grid lg:grid-cols-2 place-items-center">
          <Me />
          <div className="h-14 lg:hidden">&nbsp;</div>
          <Intro />
        </div>
        <div className="grid lg:grid-cols-2 lg:h-96 lg:mb-20 place-items-center grid-cols-1">
          <div className="w-full relative h-[38vw] lg:h-full -top-4">
            <div className="overflow-hidden">
              <Image
                src="/assets/image/ipod.png"
                width={800}
                height={800}
                alt="ipod"
                className="absolute w-[70vw] -z-20 opacity-70 select-none pointer-events-none lg:left-24 lg:-top-6 left-[14vw]"
              />
            </div>
          </div>
          <div className="xl:-translate-y-20 xl:-translate-x-36 lg:-translate-y-4 lg:-translate-x-24">
            <ToSection />
          </div>
        </div>
        <ProjectTitle />
        <div
          className="h-44 bg-gradient-to-t from-gray-50 to-white"
          id="project"
        >
          &nbsp;
        </div>
        <DaProject />
        <div className="" id="experience"></div>
        <DaExperience />
        <div className="" id="award"></div>
        <DaAward />
        <div
          className={`w-full text-center bg-njblue-500 p-4 text-white ${SansFrans.className} text-xs`}
        >
          <p>&copy; 2023 Ryan</p>
        </div>
      </main>
    </div>
  );
}
