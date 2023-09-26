import Image from "next/image";
import {
  Alagard,
  Bello,
  FairfaxItalic,
  Genty,
  Grotesk400,
  HelveticaRoman,
  IBMMono500,
  Mushy,
} from "../utils/fonts";

export default function Me() {
  return (
    <section className="">
      <div className="relative max-w-md mx-auto">
        <Image
          src="/assets/image/square_teal.png"
          width={200}
          height={100}
          alt="star"
          priority
          className="absolute w-9 top-36 left-8"
        />
        <Image
          src="/assets/image/star_teal.png"
          width={200}
          height={100}
          alt="star"
          priority
          className="absolute w-6 top-8 left-28"
        />
        <Image
          src="/assets/image/bubble_teal.png"
          width={200}
          height={100}
          alt="star"
          priority
          className="absolute w-6 top-12 right-28"
        />
        <Image
          src="/assets/image/dot_teal.png"
          width={200}
          height={100}
          alt="star"
          priority
          className="absolute w-4 top-64 right-20"
        />
      </div>
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
            className={`${IBMMono500.className} text-6xl -translate-y-28 -translate-x-3 relative select-none`}
          >
            <p className="absolute -translate-y-1 translate-x-0.5 text-white leading-none">
              <span className={Genty.className}>H</span>
              <span className={HelveticaRoman.className}>e</span>
              <span className={HelveticaRoman.className}>ry</span>
              <span className={Alagard.className}>a</span>
              <span className={Alagard.className}>n</span>{" "}
              <span className={HelveticaRoman.className}>D</span>
              <span className={HelveticaRoman.className}>j</span>
              <span className={FairfaxItalic.className}>a</span>
              <span className={Bello.className}>r</span>
              <span className={HelveticaRoman.className}>u</span>
              <span className={Alagard.className}>m</span>
              <span className={Grotesk400.className}>a</span>
            </p>
            <p className="absolute text-njblue-700 leading-none">
              <span className={Genty.className}>H</span>
              <span className={HelveticaRoman.className}>e</span>
              <span className={HelveticaRoman.className}>ry</span>
              <span className={Alagard.className}>a</span>
              <span className={Alagard.className}>n</span>{" "}
              <span className={HelveticaRoman.className}>D</span>
              <span className={HelveticaRoman.className}>j</span>
              <span className={FairfaxItalic.className}>a</span>
              <span className={Bello.className}>r</span>
              <span className={HelveticaRoman.className}>u</span>
              <span className={Alagard.className}>m</span>
              <span className={Grotesk400.className}>a</span>
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
