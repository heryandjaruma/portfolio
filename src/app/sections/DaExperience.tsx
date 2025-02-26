import Image from "next/image";
import { Grotesk400, Grotesk700, Ubuntu } from "../utils/fonts";

export default function DaExperience() {
  return (
    <div className="bg-gradient-to-b to-njblue-200 from-gray-50 pb-14">
      <div className="relative w-full">
        <Image
          src="/assets/image/ring_blue.png"
          width={700}
          height={700}
          alt="ring_blue"
          className="absolute overflow-clip translate-y-60 select-none pointer-events-none w-full opacity-10"
        />
        <Image
          src="/assets/image/ring_blue.png"
          width={700}
          height={700}
          alt="ring_blue"
          className="absolute overflow-clip translate-y-96 select-none pointer-events-none w-full opacity-10"
        />
        <Image
          src="/assets/image/smoky_blue.png"
          width={700}
          height={700}
          alt="ring_blue"
          className="absolute overflow-clip translate-y-24 select-none pointer-events-none w-full opacity-25"
        />
        <Image
          src="/assets/image/smoky_blue.png"
          width={700}
          height={700}
          alt="ring_blue"
          className="absolute overflow-clip translate-y-72 select-none pointer-events-none w-full opacity-10"
        />
      </div>
      <div className=" text-white grid grid-cols-5 px-4">
        <Image
          src="/assets/image/experience_glow.png"
          width={1000}
          height={500}
          alt="experience_title"
          className="w-full -rotate-12 col-start-1 col-span-4 -translate-y-14 select-none pointer-events-none md:w-96 lg:translate-x-10 sm:w-2/3"
          priority
        />
      </div>
      <div className="gap-y-2 px-8 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 md:place-items-start lg:px-32">
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>Backend Developer Intern</p>
          <p className={`${Grotesk400.className} text-sm`}>Blibli, Jakarta</p>
          <p className={`${Ubuntu.className} text-sm`}>FEB 2024 - FEB 2025</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>Maintainer</p>
          <p className={`${Grotesk400.className} text-sm`}>AlgoHero, Remote HK</p>
          <p className={`${Ubuntu.className} text-sm`}>DEC 2023 - Now</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>Laboratory Assistant </p>
          <p className={`${Grotesk400.className} text-sm`}>Binus University</p>
          <p className={`${Ubuntu.className} text-sm`}>FEB 2022 - FEB 2023</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>Teaching Assistant </p>
          <p className={`${Grotesk400.className} text-sm`}>
            덕성여자대학교, Seoul
          </p>
          <p className={`${Ubuntu.className} text-sm`}>MAR 2023 - JUN 2023</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>Marketing Team Associate </p>
          <p className={`${Grotesk400.className} text-sm`}>
            Sejutacita Indonesia (Dealls.com)
          </p>
          <p className={`${Ubuntu.className} text-sm`}>APR 2021 - OCT 2021</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>President </p>
          <p className={`${Grotesk400.className} text-sm`}>
            SMAK 1 BPK Penabur, Bandung
          </p>
          <p className={`${Ubuntu.className} text-sm`}>SEP 2019 - AUG 2020</p>
        </div>
      </div>
    </div>
  );
}
