import Image from "next/image";
import { Village } from "../utils/fonts";

export default function ProjectTitle() {
  return (
    <div className="mt-10">
      <div className="relative flex">
        <div className="absolute">
          <Image
            src={`/assets/image/stripe_mac_retro.png`}
            alt="stripe_mac"
            width={700}
            height={700}
            className="select-none pointer-events-none w-screen h-36"
            priority
          />
        </div>
        <Image
          src={`/assets/image/star_plastic1.png`}
          width={500}
          height={500}
          alt="star"
          className="w-5 top-6 left-64 absolute select-none pointer-events-none"
        />
        <Image
          src={`/assets/image/star_plastic1.png`}
          width={500}
          height={500}
          alt="star"
          className="w-9 top-20 left-64 absolute rotate-3 select-none pointer-events-none"
        />
        <div className="absolute left-3 top-11 w-min">
          <p
            className={`${Village.className} text-7xl text-white rounded-sm -rotate-12 overflow py-2 overflow-hidden drop-shadow-[0_1.1px_1.1px_rgba(255,255,255,1)] bg-njblue-500 px-2`}
          >
            Project
          </p>
        </div>
        <Image
          src={`/assets/image/star_plastic1.png`}
          width={500}
          height={500}
          alt="star"
          className="w-9 top-32 left-10 absolute -rotate-2 select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
