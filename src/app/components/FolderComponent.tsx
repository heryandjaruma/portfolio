import Image from "next/image";
import { Project } from "../data/projects";
import TabComponent from "./TabComponent";

interface FolderComponentProps {
  index: number;
  isOpen: string;
  handleOpen: (s: string) => void;
  toOpen: string;
  title: string;
  project: Project;
}

export default function FolderComponent({
  index,
  isOpen,
  handleOpen,
  toOpen,
  title,
  project,
}: FolderComponentProps) {
  return (
    <div className="w-full h-full">
      <button
        className="p-2 hover:scale-105 transition duration-100"
        onClick={() => handleOpen(toOpen)}
      >
        <Image
          src={`/assets/image/folder_retro.png`}
          width={500}
          height={500}
          alt="folder_retro"
          className="select-none pointer-events-none w-2/5 mx-auto"
          priority
        />
        <p className="break-all w-full text-center">{title}</p>
      </button>
      <TabComponent
        index={index}
        isOpen={isOpen}
        handleOpen={handleOpen}
        project={project}
      />
    </div>
  );
}
