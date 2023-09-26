import {
  Alagard,
  Cotton,
  EBGaramond400,
  Gliker,
  Grotesk400,
  Grotesk700,
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

export default function Home() {
  return (
    <main className="">
      <Me />
      <div className="h-24">&nbsp;</div>
      <MeLink />
      <ToSection />
      <ProjectTitle />
      <div className="h-44 bg-gradient-to-t from-gray-50 to-white" id="project">
        &nbsp;
      </div>
      <DaProject />
      <div className="" id="experience"></div>
      <DaExperience />
      <div className="" id="award"></div>
      <DaAward />
    </main>
  );
}
