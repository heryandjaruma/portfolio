import Image from "next/image";
import { IBMMono500 } from "../utils/fonts";

export default function Me() {
  return (
    <section className="bg-neon-100">
      <div className="grid grid-cols-7">
        <div className="col-span-2">&nbsp;</div>
        <div className="col-span-5 bg-njblue-500">
          <Image
            src="/assets/image/me.png"
            alt="me pic"
            width={700}
            height={700}
            className="select-none pointer-events-none overflow-clip"
            priority
          />
        </div>
        <div></div>
        <div className="col-span-5">
          <div
            className={`${IBMMono500.className} text-6xl -translate-y-24 -translate-x-3 relative select-none`}
          >
            <p className="absolute -translate-y-1 translate-x-1 text-white leading-snug">
              Heryan Djaruma
            </p>
            <p className="absolute text-njblue-700 leading-snug">
              Heryan Djaruma
            </p>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="relative col-span-5 col-start-2 overflow-hidden">
          <div className="col-span-7 absolute -z-10 -translate-y-52 translate-x-36 overflow-hidden">
            <Image
              src={`/assets/image/blue_dots.svg`}
              alt="blue dots"
              width={1000}
              height={1000}
              className="select-none pointer-events-none overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
