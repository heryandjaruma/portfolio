import {
  Alagard,
  EBGaramond400,
  Gliker,
  Grotesk400,
  IBMMono500,
  Ninety,
  ToonyLineLine,
  Village,
} from "../app/utils/fonts";
import Image from "next/image";
import Me from "./sections/Me";
import MeLink from "./sections/MeLink";
import ToSection from "./sections/ToSection";
import ProjectTitle from "./sections/ProjectTitle";
import DaProject from "./sections/DaProject";

export default function Home() {
  return (
    <main className="">
      <Me />
      <div className="h-24 bg-neon-100">&nbsp;</div>
      <MeLink />
      <ToSection />
      <ProjectTitle />
      <div className="h-44 bg-neon-100" id="project">
        &nbsp;
      </div>
      <DaProject />
    </main>
  );
}
