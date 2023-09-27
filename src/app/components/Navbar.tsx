"use client";
import { useEffect, useState } from "react";
import {
  Alagard,
  Bello,
  FairfaxItalic,
  Genty,
  HelveticaRoman,
  Ubuntu,
} from "../utils/fonts";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-white backdrop-filter backdrop-blur-lg z-50 bg-opacity-75">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          {/* <span className="text-2xl text-gray-900 font-semibold">Logo</span> */}
          <div
            className={`flex space-x-4 text-njblue-700 transition-opacity duration-300 ${
              showNavbar ? "opacity-100" : "opacity-0"
            } ${HelveticaRoman.className}`}
          >
            <button
              onClick={() => {
                document
                  .getElementById("attention")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Attention!
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("project")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Project
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("award")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Award
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
