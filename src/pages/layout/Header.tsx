import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = () => {
    router.push("/");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 font-display font-semibold">
        <div className="absolute mx-auto w-full bg-white px-4 shadow-sm sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="">
              <button
                onClick={handleButtonClick}
                className="flex items-center justify-between"
              >
                <Image
                  src="/images/logo/LOGO.svg"
                  alt="my_logo"
                  className="pointer-events-none w-10"
                  width={100}
                  height={100}
                />
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/">
                  <p
                    className={`text-md rounded-md px-3 py-2 text-blue duration-200 hover:scale-95 hover:text-turq ${
                      router.pathname === "/" ? "text-indigo-700 " : ""
                    }`}
                  >
                    Home
                  </p>
                </Link>
                <Link href="/projects">
                  <p
                    className={`text-md rounded-md px-3 py-2 text-blue duration-200 hover:scale-95 hover:text-turq ${
                      router.pathname === "/projects" ? "text-indigo-700 " : ""
                    }`}
                  >
                    Projects
                  </p>
                </Link>
                <Link href="/experiences">
                  <p
                    className={`text-md rounded-md px-3 py-2 text-blue duration-200 hover:scale-95 hover:text-turq ${
                      router.pathname === "/experiences"
                        ? "text-indigo-700 "
                        : ""
                    }`}
                  >
                    Experiences
                  </p>
                </Link>
                <Link href="/awards">
                  <p
                    className={`text-md rounded-md px-3 py-2 text-blue duration-200 hover:scale-95 hover:text-turq ${
                      router.pathname === "/awards" ? "text-indigo-700 " : ""
                    }`}
                  >
                    Awards
                  </p>
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-white focus:bg-gray-100 focus:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6 text-blue"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <AnimatePresence>
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 sm:px-3">
                  <Link href="/">
                    <p
                      className={`rounded-md px-3 py-2 text-xl text-blue duration-200 hover:scale-95 hover:text-turq ${
                        router.pathname === "/" ? "text-indigo-700 " : ""
                      }`}
                    >
                      Home
                    </p>
                  </Link>
                  <Link href="/projects">
                    <p
                      className={`rounded-md px-3 py-2 text-xl text-blue duration-200 hover:scale-95 hover:text-turq ${
                        router.pathname === "/projects"
                          ? "text-indigo-700 "
                          : ""
                      }`}
                    >
                      Projects
                    </p>
                  </Link>
                  <Link href="/experiences">
                    <p
                      className={`rounded-md px-3 py-2 text-xl text-blue duration-200 hover:scale-95 hover:text-turq ${
                        router.pathname === "/experiences"
                          ? "text-indigo-700 "
                          : ""
                      }`}
                    >
                      Experiences
                    </p>
                  </Link>
                  <Link href="/awards">
                    <p
                      className={`rounded-md px-3 py-2 text-xl text-blue duration-200 hover:scale-95 hover:text-turq ${
                        router.pathname === "/awards" ? "text-indigo-700 " : ""
                      }`}
                    >
                      Awards
                    </p>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </nav>
    </>
  );
}
