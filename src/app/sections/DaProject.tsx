"use client";
import Image from "next/image";
import { useState } from "react";
import { ChicagoBold, ChicagoLight } from "../utils/fonts";

export default function DaProject() {
  const [isOpen1, setIsOpen1] = useState(false);
  const handleOpen1 = () => setIsOpen1(!isOpen1);
  const [isOpen2, setIsOpen2] = useState(false);
  const handleOpen2 = () => setIsOpen2(!isOpen2);
  const [isOpen3, setIsOpen3] = useState(false);
  const handleOpen3 = () => setIsOpen3(!isOpen3);
  const [isOpen4, setIsOpen4] = useState(false);
  const handleOpen4 = () => setIsOpen4(!isOpen4);
  const [isOpen5, setIsOpen5] = useState(false);
  const handleOpen5 = () => setIsOpen5(!isOpen5);
  const [isOpen6, setIsOpen6] = useState(false);
  const handleOpen6 = () => setIsOpen6(!isOpen6);

  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-2 place-items-center">
        <button
          className="col-start-1 col-span-1 p-2 hover:scale-105 transition duration-100"
          onClick={handleOpen1}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-1/3 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Kamifriend.app</p>
        </button>
        <button
          className="p-2 hover:scale-105 transition duration-100"
          onClick={handleOpen2}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-1/3 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Hikost.app</p>
        </button>
      </div>
      <div className={isOpen1 ? "visible" : "hidden"}>
        <div
          className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
          id="kamifriend"
        >
          <div className="grid grid-cols-3 bg-gray-200">
            <button className="my-auto px-1" onClick={handleOpen1}>
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
                  1st place. It is an app designed to assist Indonesian UMKM in
                  finding partnerships, gaining business insights, and hiring
                  freelancers to help grow their businesses.
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
      <div className={isOpen2 ? "visible" : "hidden"}>
        <div
          className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
          id="kamifriend"
        >
          <div className="grid grid-cols-3 bg-gray-200">
            <button className="my-auto px-1" onClick={handleOpen2}>
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

      {/* Second Section */}
      <div className="grid grid-cols-2 place-items-center">
        <button
          className="col-start-1 col-span-1 p-2 hover:scale-105 transition duration-100"
          onClick={handleOpen3}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-1/3 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">KampoengKoena.prot</p>
        </button>
        <button
          className="p-2 hover:scale-105 transition duration-100"
          onClick={handleOpen4}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-1/3 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Hitchhiker.web</p>
        </button>
      </div>
      <div className={isOpen3 ? "visible" : "hidden"}>
        <div
          className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
          id="kamifriend"
        >
          <div className="grid grid-cols-3 bg-gray-200">
            <button className="my-auto px-1" onClick={handleOpen3}>
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
                  This prototye showcases Kampoeng Koena&apos;s unique features
                  and attractions as newly founded tourism village in
                  Malang-East Java, making it easy for visitors to plan their
                  trip and learn about the village.
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
      <div className={isOpen4 ? "visible" : "hidden"}>
        <div
          className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
          id="kamifriend"
        >
          <div className="grid grid-cols-3 bg-gray-200">
            <button className="my-auto px-1" onClick={handleOpen4}>
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
                <p>Right cost in your kost.</p>
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

      {/* Third Section */}
      <div className="grid grid-cols-2 place-items-center">
        <button
          className="col-start-1 col-span-1 p-2 hover:scale-105 transition duration-100"
          onClick={handleOpen5}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-1/3 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">Portfolio.web</p>
        </button>
        <button
          className="p-2 hover:scale-105 transition duration-100"
          onClick={handleOpen6}
        >
          <Image
            src={`/assets/image/folder_retro.png`}
            width={500}
            height={500}
            alt="folder_retro"
            className="select-none pointer-events-none w-1/3 mx-auto"
            priority
          />
          <p className="break-all w-full text-center">SeldnetDCASE.py</p>
        </button>
      </div>
      <div className={isOpen5 ? "visible" : "hidden"}>
        <div
          className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
          id="kamifriend"
        >
          <div className="grid grid-cols-3 bg-gray-200">
            <button className="my-auto px-1" onClick={handleOpen5}>
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
                  This project is a meant to showcase my projects as well as
                  experience. The inspiration comes from NewJeans whose music
                  and style I love. My intention with the design is to make it
                  beautifully chaotic with metallic accent. My other inspiration
                  is also Apple&apos;s retro design.
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
      <div className={isOpen6 ? "visible" : "hidden"}>
        <div
          className="grid grid-cols-1 border-2 border-double border-gray-500 rounded-md m-1 shadow-lg"
          id="kamifriend"
        >
          <div className="grid grid-cols-3 bg-gray-200">
            <button className="my-auto px-1" onClick={handleOpen6}>
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
                <p>Is a sound detection project.</p>
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
      <Image
        src={`/assets/image/stripe_mac_retro_flip.png`}
        alt="stripe_mac"
        width={700}
        height={700}
        className="select-none pointer-events-none w-screen h-36 -translate-y-3"
        priority
      />
    </div>
  );
}
