import Image from "next/image";
import { Village } from "../utils/fonts";

export default function ProjectTitle() {
  return (
    <div className="mt-10 border-t-2 border-dashed">
      <div className="relative flex">
        <div className="absolute">
          <Image
            src={`/assets/image/stripe_mac_retro.png`}
            alt="stripe_mac"
            width={700}
            height={700}
            className="select-none pointer-events-none w-screen h-36 xl:h-52"
            priority
          />
        </div>
        <Image
          src={`/assets/image/square_teal.png`}
          width={700}
          height={700}
          alt="bubble"
          priority
          className="w-5 absolute right-56 -bottom-10"
        />
        <Image
          src={`/assets/image/star_teal.png`}
          width={700}
          height={700}
          alt="bubble"
          priority
          className="w-6 absolute right-44 -bottom-32"
        />
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
          className="w-3 top-2 left-80 absolute select-none pointer-events-none rotate-3"
        />
        <Image
          src={`/assets/image/star_plastic1.png`}
          width={500}
          height={500}
          alt="star"
          className="w-9 top-20 left-64 absolute rotate-3 select-none pointer-events-none"
        />
        <div className="absolute left-3 top-11 w-min lg:top-44 lg:left-10">
          <p
            className={`${Village.className} text-7xl text-white -rotate-12 overflow py-2 overflow-hidden bg-njblue-500 px-2 xl:text-8xl lg:-translate-y-20`}
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
