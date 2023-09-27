"use client";
import Image from "next/image";
import { Village } from "../utils/fonts";

export default function ToSection() {
  return (
    <div className="">
      <div
        className={`grid grid-cols-1 ${Village.className} text-8xl text-white mt-14 lg:mt-0 place-items-center lg:max-w-6xl mx-auto`}
      >
        <button
          className={`grid grid-cols-5 place-items-center bg-njblue-500 h-32 hover:text-neon-500 lg:border-2 border-white`}
          onClick={() => {
            document
              .getElementById("project")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className={`col-span-3`}>Project</div>
          <div className={`col-span-2 relative`}>
            <Image
              src={`/assets/image/mac_retro.svg`}
              alt="mac_retro"
              width={700}
              height={700}
              className="select-none pointer-events-none object-contain h-32 -translate-y-10"
            />
          </div>
        </button>

        <button
          className={`grid grid-cols-7 place-items-center mt-16 bg-njblue-500 h-32 hover:text-neon-500 lg:border-2 border-white`}
          onClick={() => {
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className={`col-span-2 relative`}>
            <Image
              src={`/assets/image/kachow_retro.svg`}
              alt="mac_retro"
              width={700}
              height={700}
              className="select-none pointer-events-none object-right -translate-y-8 h-32 translate-x-4"
            />
          </div>
          <div className={`col-span-5`}>Experience</div>
        </button>

        <button
          className={`grid grid-cols-5 place-items-center bg-njblue-500 h-32 mt-16 hover:text-neon-500 lg:border-2 border-white`}
          onClick={() => {
            document
              .getElementById("award")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className={`col-span-3`}>Award</div>
          <div className={`col-span-2 relative`}>
            <Image
              src={`/assets/image/trophy_retro.svg`}
              alt="mac_retro"
              width={700}
              height={700}
              className="select-none pointer-events-none object-contain h-32 -translate-y-10"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
