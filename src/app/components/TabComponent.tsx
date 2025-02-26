import Image from "next/image";
import { ChicagoBold, ChicagoLight } from "../utils/fonts";
import { Project } from "../data/projects";

interface TabComponentProps {
  index: number;
  isOpen: string;
  handleOpen: (s: string) => void;
  project: Project;
}

export default function TabComponent({
  index,
  isOpen,
  handleOpen,
  project,
}: TabComponentProps) {
  return (
    <div className="relative z-10">
      <div
        className={`absolute overflow-y-auto z-10 w-[200%] xl:w-fit xl:max-w-2xl 
            ${index % 2 === 0 ? "-left-0" : "-left-[100%] xl:-left-0"} 
            ${isOpen == project.id ? "block" : "hidden"}`}
      >
        <div
          className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
          id={project.id}
        >
          <div className="grid grid-cols-3 bg-gray-200">
            <button
              className="my-auto px-1"
              onClick={() => handleOpen(project.id)}
            >
              <Image
                src={`/assets/image/exit_retro.png`}
                width={300}
                height={300}
                alt="exit_btt"
                className="w-4"
              />
            </button>
            <p className="w-full text-center">{project.folderTitle}</p>
            <div></div>
            <div
              className={`col-span-3 p-1 bg-white ${ChicagoBold.className} grid grid-cols-3 text-sm col-start-1`}
            >
              <div>
                <p>Name:</p>
                <p>{project.name}</p>
              </div>
              <div>
                <p>Type:</p>
                <p>{project.type}</p>
              </div>
              <div>
                <p>Techstack:</p>
                <p>{project.techstack}</p>
              </div>
              <div className="col-span-3 mt-4">
                <p>Description:</p>
                <p>{project.description}</p>
              </div>
              <div className="col-span-3 mt-4">
                <p>Link:</p>

                {project.links.map((link, index) => (
                  <>
                    <a
                      key={index}
                      target="_blank"
                      href={link.url}
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {link.title}{" | "}
                    </a>
                  </>
                ))}
              </div>
              <div className="col-span-3 mt-4">
                <p>Gallery:</p>
                <div className="grid grid-cols-2 place-items-center gap-2">
                  {project.photoPaths.map((photo, index) => (
                    <Image
                      key={index}
                      src={photo}
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
