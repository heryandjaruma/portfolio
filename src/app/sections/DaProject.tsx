"use client";
import Image from "next/image";
import { useState } from "react";
import { ChicagoBold, ChicagoLight } from "../utils/fonts";

export default function DaProject() {
  const [isOpen, setIsOpen] = useState("");
  const handleOpen = (which: String) => {
    if (isOpen == which) {
      setIsOpen("");
    } else {
      setIsOpen(which.toString());
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-2 place-items-center xl:place-items-end">
        <button
          className="col-start-1 col-span-1 p-2 hover:scale-105 transition duration-100"
          onClick={() => handleOpen("banyoehirup")}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-2/5 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">BanyoeHirup.web</p>
        </button>

        {/* <button
          className="p-2 hover:scale-105 transition duration-100"
          onClick={() => handleOpen("hikost")}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-2/5 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Hikost.app</p>
        </button> */}
      </div>

      <div className="relative z-10">
        <div
          className={`absolute overflow-y-auto z-10 max-w-2xl md:left-20 lg:left-36 xl:left-64 ${
            isOpen == "banyoehirup" ? "block" : "hidden"
          }`}
        >
          <div
            className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
            id="kamifriend"
          >
            <div className="grid grid-cols-3 bg-gray-200">
              <button
                className="my-auto px-1"
                onClick={() => handleOpen("banyoehirup")}
              >
                <Image
                  src={`/assets/image/exit_retro.png`}
                  width={300}
                  height={300}
                  alt="exit_btt"
                  className="w-4"
                />
              </button>
              <p className="w-full text-center">BanyoeHirup.web</p>
              <div></div>
              <div
                className={`col-span-3 p-1 bg-white ${ChicagoBold.className} grid grid-cols-3 text-sm col-start-1`}
              >
                <div>
                  <p>Name:</p>
                  <p>BanyoeHirup</p>
                </div>
                <div>
                  <p>Type:</p>
                  <p>Web</p>
                </div>
                <div>
                  <p>Techstack:</p>
                  <p>NextJS, Figma, Vercel, PorkBun</p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Description:</p>
                  <p>
                    BanyoeHirup is an interactive web-based program targeting
                    middle schoolers to learn about Climate Change. This web app
                    was submitted to NASA Space Apps 2023 Challenge.
                  </p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Link:</p>
                  <a
                    target="_blank"
                    href="https://bjir.earth"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Live Web
                  </a>
                  {", "}
                  <a
                    target="_blank"
                    href="https://github.com/heryandjaruma/banyoehirup"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Github repo
                  </a>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Gallery:</p>
                  <div className="grid grid-cols-2 place-items-center gap-2">
                    <Image
                      src="/assets/image/bjir/bjir_1.png"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                    <Image
                      src="/assets/image/bjir/bjir_2.png"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 place-items-center xl:place-items-end">
        <button
          className="col-start-1 col-span-1 p-2 hover:scale-105 transition duration-100"
          onClick={() => handleOpen("kamifriend")}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-2/5 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Kamifriend.app</p>
        </button>

        <button
          className="p-2 hover:scale-105 transition duration-100"
          onClick={() => handleOpen("hikost")}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-2/5 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Hikost.app</p>
        </button>
      </div>

      <div className="relative z-10">
        <div
          className={`absolute overflow-y-auto z-10 max-w-2xl md:left-20 lg:left-36 xl:left-64 ${
            isOpen == "kamifriend" ? "block" : "hidden"
          }`}
        >
          <div
            className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
            id="kamifriend"
          >
            <div className="grid grid-cols-3 bg-gray-200">
              <button
                className="my-auto px-1"
                onClick={() => handleOpen("kamifriend")}
              >
                <Image
                  src={`/assets/image/exit_retro.png`}
                  width={300}
                  height={300}
                  alt="exit_btt"
                  className="w-4"
                />
              </button>
              <p className="w-full text-center">Kamifriend.app</p>
              <div></div>
              <div
                className={`col-span-3 p-1 bg-white ${ChicagoBold.className} grid grid-cols-3 text-sm col-start-1`}
              >
                <div>
                  <p>Name:</p>
                  <p>Kamifriend</p>
                </div>
                <div>
                  <p>Type:</p>
                  <p>Application</p>
                </div>
                <div>
                  <p>Techstack:</p>
                  <p>Android, Java, Firebase</p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Description:</p>
                  <p>
                    Kamifriend is an app that has won two competitions, both in
                    1st place. It is an app designed to assist Indonesian UMKM
                    in finding partnerships, gaining business insights, and
                    hiring freelancers to help grow their businesses.
                  </p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Link:</p>
                  <a
                    target="_blank"
                    href="https://github.com/joshuawenata/hackathon2022"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Github repo
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    href="https://youtu.be/UD4YgtE4WWU?si=lnsHkCgyv4YA7kHl"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Youtube video
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    href="https://binus.ac.id/bandung/2022/11/mahasiswa-binus-bandung-memenangkan-lomba-socs-hackathon-kategori-lomba-software-development-dan-artificial-intelligence/"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Binus website
                  </a>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Gallery:</p>
                  <div className="grid grid-cols-2 place-items-center gap-2">
                    <Image
                      src="/assets/image/kamifriend/1.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                    <Image
                      src="/assets/image/kamifriend/2.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div
          className={`absolute overflow-y-auto z-10 max-w-2xl md:right-0 ${
            isOpen == "hikost" ? "block" : "hidden"
          }`}
        >
          <div
            className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
            id="hikost"
          >
            <div className="grid grid-cols-3 bg-gray-200">
              <button
                className="my-auto px-1"
                onClick={() => handleOpen("hikost")}
              >
                <Image
                  src={`/assets/image/exit_retro.png`}
                  width={300}
                  height={300}
                  alt="exit_btt"
                  className="w-4"
                />
              </button>
              <p className="w-full text-center">Hikost.app</p>
              <div></div>
              <div
                className={`col-span-3 p-1 bg-white ${ChicagoBold.className} grid grid-cols-3 text-sm col-start-1`}
              >
                <div>
                  <p>Name:</p>
                  <p>Hikost</p>
                </div>
                <div>
                  <p>Type:</p>
                  <p>Application</p>
                </div>
                <div>
                  <p>Techstack:</p>
                  <p>Android, Java</p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Description:</p>
                  <p>
                    Hikost is the app every &apos;anak kos&apos; needs to keep
                    their money in check. When you splurge, this app gives you a
                    friendly scolding, just like your mom would, so you stay on
                    top of your budget.
                  </p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Link:</p>
                  <a
                    target="_blank"
                    href="https://github.com/joshuawenata/hikost"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Github repo
                  </a>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Gallery:</p>
                  <div className="grid grid-cols-2 place-items-center gap-2">
                    <Image
                      src="/assets/image/hikost/1.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                    <Image
                      src="/assets/image/hikost/2.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-2 place-items-center xl:place-items-end">
        <button
          className="col-start-1 col-span-1 p-2 hover:scale-105 transition duration-100"
          onClick={() => handleOpen("kampoengkoena")}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-2/5 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">KampoengKoena.prot</p>
        </button>
        <button
          className="p-2 hover:scale-105 transition duration-100"
          onClick={() => handleOpen("hitchhiker")}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-2/5 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Hitchhiker.web</p>
        </button>
      </div>

      <div className="relative z-10">
        <div
          className={`absolute overflow-y-auto z-10 max-w-2xl md:left-20 lg:left-36 xl:left-64 ${
            isOpen == "kampoengkoena" ? "block" : "hidden"
          }`}
        >
          <div
            className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
            id="kampoengkoena"
          >
            <div className="grid grid-cols-3 bg-gray-200">
              <button
                className="my-auto px-1"
                onClick={() => handleOpen("kampoengkoena")}
              >
                <Image
                  src={`/assets/image/exit_retro.png`}
                  width={300}
                  height={300}
                  alt="exit_btt"
                  className="w-4"
                />
              </button>
              <p className="w-full text-center">KampoengKoena.prot</p>
              <div></div>
              <div
                className={`col-span-3 p-1 bg-white ${ChicagoBold.className} grid grid-cols-3 text-sm col-start-1`}
              >
                <div>
                  <p>Name:</p>
                  <p>Kampoeng Koena</p>
                </div>
                <div>
                  <p>Type:</p>
                  <p>Prototype</p>
                </div>
                <div>
                  <p>Techstack:</p>
                  <p>Figma</p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Description:</p>
                  <p>
                    This prototype showcases Kampoeng Koena&apos;s unique
                    features and attractions as a newly founded tourism village
                    in Malang, East Java. It makes it easy for visitors to plan
                    their trip and learn about the village.
                  </p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Link:</p>
                  <a
                    target="_blank"
                    href="https://www.figma.com/proto/v6DPDEZjKhXPhPxoM63p1u/Prototype?node-id=8-21&starting-point-node-id=8%3A21&mode=design&t=ShmrRYntCTH4WtbE-1"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Figma prototype
                  </a>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Gallery:</p>
                  <div className="grid grid-cols-2 place-items-center gap-2">
                    <Image
                      src="/assets/image/kampoengkoena/1.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                    <Image
                      src="/assets/image/kampoengkoena/2.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div
          className={`absolute overflow-y-auto z-10 max-w-2xl md:right-0  ${
            isOpen == "hitchhiker" ? "block" : "hidden"
          }`}
        >
          <div
            className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
            id="hitchhiker"
          >
            <div className="grid grid-cols-3 bg-gray-200">
              <button
                className="my-auto px-1"
                onClick={() => handleOpen("hitchhiker")}
              >
                <Image
                  src={`/assets/image/exit_retro.png`}
                  width={300}
                  height={300}
                  alt="exit_btt"
                  className="w-4"
                />
              </button>
              <p className="w-full text-center">Hitchhiker.web</p>
              <div></div>
              <div
                className={`col-span-3 p-1 bg-white ${ChicagoBold.className} grid grid-cols-3 text-sm col-start-1`}
              >
                <div>
                  <p>Name:</p>
                  <p>Hitchhiker</p>
                </div>
                <div>
                  <p>Type:</p>
                  <p>Web</p>
                </div>
                <div>
                  <p>Techstack:</p>
                  <p>Laravel, PHP, Boostrap</p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Description:</p>
                  <p>
                    Hitchhiker is a PHP-based Learning Management System (LMS)
                    that utilizes middleware and login functionality from
                    Laravel. The project also uses Bootstrap 5 to design the
                    layout beautifully.
                  </p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Link:</p>
                  <a
                    target="_blank"
                    href="https://github.com/heryandjaruma/MidProject-BackendDevelopment-2021"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Github repo
                  </a>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Gallery:</p>
                  <div className="grid grid-cols-2 place-items-center gap-2">
                    <Image
                      src="/assets/image/hitchhiker/1.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                    <Image
                      src="/assets/image/hitchhiker/2.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="grid grid-cols-2 place-items-center xl:place-items-end">
        <button
          className="col-start-1 col-span-1 p-2 hover:scale-105 transition duration-100"
          onClick={() => handleOpen("portfolio")}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-2/5 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Portfolio.web</p>
        </button>
        <button
          className="p-2 hover:scale-105 transition duration-100"
          onClick={() => handleOpen("seldnet")}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-2/5 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">SeldnetDCASE.py</p>
        </button>
      </div>

      <div className="relative z-10">
        <div
          className={`absolute overflow-y-auto z-10 max-w-2xl md:left-20 lg:left-36 xl:left-64 ${
            isOpen == "portfolio" ? "block" : "hidden"
          }`}
        >
          <div
            className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
            id="portfolio"
          >
            <div className="grid grid-cols-3 bg-gray-200">
              <button
                className="my-auto px-1"
                onClick={() => handleOpen("portfolio")}
              >
                <Image
                  src={`/assets/image/exit_retro.png`}
                  width={300}
                  height={300}
                  alt="exit_btt"
                  className="w-4"
                />
              </button>
              <p className="w-full text-center">Portfolio.web</p>
              <div></div>
              <div
                className={`col-span-3 p-1 bg-white ${ChicagoBold.className} grid grid-cols-3 text-sm col-start-1`}
              >
                <div>
                  <p>Name:</p>
                  <p>Portfolio</p>
                </div>
                <div>
                  <p>Type:</p>
                  <p>Web</p>
                </div>
                <div>
                  <p>Techstack:</p>
                  <p>NextJs, Tailwind CSS</p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Description:</p>
                  <p>
                    This web portfolio showcases my work, drawing inspiration
                    from NewJeans&apos; music and style, as well as Apple&apos;s
                    retro design. I aim to create a beautifully chaotic look
                    with metallic/plastic accents and a blue-themed color
                    scheme, similar to designs in the K-pop industry.
                  </p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Link:</p>
                  <a
                    target="_blank"
                    href="https://github.com/heryandjaruma/portfolio-update"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Repo
                  </a>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Gallery:</p>
                  <div className="grid grid-cols-2 place-items-center gap-2">
                    <Image
                      src="/assets/image/portfolio/1.png"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                    <Image
                      src="/assets/image/portfolio/2.png"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div
          className={`absolute overflow-y-auto z-10 max-w-2xl md:right-0 ${
            isOpen == "seldnet" ? "block" : "hidden"
          }`}
        >
          <div
            className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
            id="seldnet"
          >
            <div className="grid grid-cols-3 bg-gray-200">
              <button
                className="my-auto px-1"
                onClick={() => handleOpen("seldnet")}
              >
                <Image
                  src={`/assets/image/exit_retro.png`}
                  width={300}
                  height={300}
                  alt="exit_btt"
                  className="w-4"
                />
              </button>
              <p className="w-full text-center">SeldnetDCASE.py</p>
              <div></div>
              <div
                className={`col-span-3 p-1 bg-white ${ChicagoBold.className} grid grid-cols-3 text-sm col-start-1`}
              >
                <div>
                  <p>Name:</p>
                  <p>Seldnet DCASE 2023</p>
                </div>
                <div>
                  <p>Type:</p>
                  <p>AI research project</p>
                </div>
                <div>
                  <p>Techstack:</p>
                  <p>Python, Nussl library</p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Description:</p>
                  <p>
                    This AI research project detects sound in 4-channel audio
                    and numpy arrays. My team and I achieved ~70% accuracy, an
                    improvement over our previous ~60%.
                  </p>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Link:</p>
                  <a
                    target="_blank"
                    href="https://github.com/heryandjaruma/tp-project"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Github repo
                  </a>
                </div>
                <div className="col-span-3 mt-4">
                  <p>Gallery:</p>
                  <div className="grid grid-cols-2 place-items-center gap-2">
                    <Image
                      src="/assets/image/seldnet/1.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                    <Image
                      src="/assets/image/seldnet/2.jpg"
                      width={700}
                      height={700}
                      alt="img"
                      className="object-cover border-2 h-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={`/assets/image/stripe_mac_retro_flip.png`}
        alt="stripe_mac"
        width={700}
        height={700}
        className="select-none pointer-events-none w-screen h-36 -translate-y-3 lg:h-48"
        priority
      />
    </div>
  );
}
