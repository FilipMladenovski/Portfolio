import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const navigation = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact Me", id: "contact" },
];

export default function Hero() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleToggle = (e) => {
    e.target.checked ? setTheme("dark") : setTheme("light");
  };
  return (
    <div>
      <header className="fixed bg-base-300 shadow-2xl shadow-neutral inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <p className="-m-1.5 p-1.5 font-semibold">My Portfolio</p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />

              <SunIcon className="swap-off fill-current w-6 h-6" />
              <MoonIcon className="swap-on fill-current w-6 h-6" />
            </label>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto backdrop-brightness-90 backdrop-blur-2xl bg-transparent px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={handleToggle}
                    checked={theme === "light" ? false : true}
                  />
                  <SunIcon className="swap-off fill-current w-6 h-6" />
                  <MoonIcon className="swap-on fill-current w-6 h-6" />
                </label>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-32"
            data-aos="zoom-in"
          >
            <div className="grid justify-center items-center">
              <img
                src="/portfolios/avatar.jpg"
                alt="Filip"
                className="w-72 rounded-full drop-shadow-2xl"
              />
            </div>
            <div className="grid justify-center items-center mt-3">
              <div className="text-center">
                <div className="text-2xl tracking-tight sm:text-3xl">
                  Hello, I'm
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Filip Mladenovski
                </h1>
                <p className="mt-6 text-2xl leading-8">
                  <TypeAnimation
                    sequence={["I'm a Full Stack Developer", 2000]}
                    speed={50}
                    repeat={Infinity}
                  />
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  <p>
                    Full-Stack Developer: Bridging Frontend Innovation with
                    Backend Expertise
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  <a
                    href="https://www.linkedin.com/in/filip-mladenovski-abb242305/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-square text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <FaLinkedin className="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.instagram.com/mladenovski.filip/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-square text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
                  >
                    <FaInstagram className="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=1558255580" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-square text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <FaFacebook className="h-8 w-8" />
                  </a>
                  <a
                    href="https://github.com/FilipMladenovski" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-square text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"
                  >
                    <FaGithub className="h-8 w-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
