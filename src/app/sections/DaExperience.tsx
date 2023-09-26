import Image from "next/image";
import { Grotesk400, Grotesk700, Ubuntu } from "../utils/fonts";

export default function DaExperience() {
  return (
    <div className="bg-gradient-to-b to-njblue-200 from-gray-50">
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
          className="w-full -rotate-12 col-start-1 col-span-4 -translate-y-14 select-none pointer-events-none"
          priority
        />
      </div>
      <div className="gap-y-2 px-8">
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>&gt; LABORATORY ASSISTANT </p>
          <p className={`${Grotesk400.className} text-sm`}>BINUS UNIVERSITY</p>
          <p className={`${Ubuntu.className} text-sm`}>FEB 2022 - FEB 2023</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>&gt; TEACHING ASSISTANT </p>
          <p className={`${Grotesk400.className} text-sm`}>덕성여자대학교</p>
          <p className={`${Ubuntu.className} text-sm`}>MAR 2023 - JUN 2023</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>&gt; TRAINER </p>
          <p className={`${Grotesk400.className} text-sm`}>
            HIMTI BINUS UNIVERSITY
          </p>
          <p className={`${Ubuntu.className} text-sm`}>SEP 2022</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>&gt; ACTIVIST </p>
          <p className={`${Grotesk400.className} text-sm`}>BNCC</p>
          <p className={`${Ubuntu.className} text-sm`}>NOV 2021 - MAY 2022</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>&gt; MARKETING TEAM ASSOCIATE </p>
          <p className={`${Grotesk400.className} text-sm`}>
            SEJUTACITA INDONESIA
          </p>
          <p className={`${Ubuntu.className} text-sm`}>APR 2021 - OCT 2021</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>&gt; PRESIDENT </p>
          <p className={`${Grotesk400.className} text-sm`}>
            SMAK 1 BPK PENABUR BANDUNG
          </p>
          <p className={`${Ubuntu.className} text-sm`}>SEP 2019 - AUG 2020</p>
        </div>
        <div className={`${Grotesk700.className} p-4 text-njblue-700`}>
          <p>&gt; STAFF </p>
          <p className={`${Grotesk400.className} text-sm`}>
            SMAK 1 BPK PENABUR BANDUNG
          </p>
          <p className={`${Ubuntu.className} text-sm`}>NOV 2018 - AUG 2019</p>
        </div>
      </div>
    </div>
  );
}
