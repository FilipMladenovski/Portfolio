import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
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
                src="/portfolio/avatar.jpg"
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
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <p>
                    Full-Stack Developer: Bridging Frontend Innovation with
                    Backend Expertise
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/filip-mladenovski-abb242305/" // Replace with your LinkedIn profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-square text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-8 w-8"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 0a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 001.5 16h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0014.5 0h-13zM4.5 12.5h-2V6.5h2v6zm-1-7.1c-.653 0-1.1.39-1.1 1.05.1.663.462 1.05 1.14 1.05h.02c.652 0 1.1-.39 1.1-1.05-.03-.663-.462-1.05-1.14-1.05h-.02zm10.5 7.1h-2v-3.1c0-.769-.01-1.763-1.074-1.763-.527 0-.876.36-1.018.708-.052.125-.065.3-.065.477v3.677h-2V6.5h1.86v.82h.027c.262-.394.72-.96 1.441-.96 1.54 0 1.82 1.016 1.82 2.338v3.79z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/mladenovski.filip/" // Replace with your Instagram profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-square text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.1c3.48 0 3.892.013 5.266.076 1.355.062 2.342.319 3.18.655.868.346 1.594.777 2.274 1.458.68.68 1.112 1.406 1.458 2.274.336.838.593 1.825.655 3.18.063 1.374.076 1.786.076 5.266 0 3.48-.013 3.892-.076 5.266-.062 1.355-.319 2.342-.655 3.18-.346.868-.777 1.594-1.458 2.274-.68.68-1.406 1.112-2.274 1.458-.838.336-1.825.593-3.18.655-1.374.063-1.786.076-5.266.076-3.48 0-3.892-.013-5.266-.076-1.355-.062-2.342-.319-3.18-.655-.868-.346-1.594-.777-2.274-1.458-.68-.68-1.112-1.406-1.458-2.274-.336-.838-.593-1.825-.655-3.18C2.113 12 2.1 11.588 2.1 8.1c0-3.48.013-3.892.076-5.266.062-1.355.319-2.342.655-3.18.346-.868.777-1.594 1.458-2.274.68-.68 1.406-1.112 2.274-1.458.838-.336 1.825-.593 3.18-.655 1.374-.063 1.786-.076 5.266-.076zM12 0C8.746 0 8.333.01 6.92.089 5.496.168 4.36.438 3.53.646 2.712.841 2.03 1.552 1.344 2.23.674 3.202.45 4.502.452 8.047s-.226 4.845-.452 5.817c-.686.678-1.366 1.398-2.24 2.032-.712.528-1.48.874-2.244 1.055-.732.181-1.456.303-2.187.346-1.401.085-2.187.1-5.143.1 0-3.52.013-3.92.071-5.287.127-2.207.295-3.872.642-5.021.344-1.143.86-2.15 1.497-3.04.607-.852 1.313-1.547 2.138-2.11.7-.527 1.493-.911 2.29-1.141.782-.205 1.566-.314 2.336-.346 1.461-.063 1.977-.069 5.308-.069s3.847.006 5.308.069c.77.032 1.553.141 2.336.346.797.23 1.59.614 2.29 1.141.825.563 1.531 1.258 2.138 2.11.637.89 1.153 1.897 1.497 3.04.347 1.149.515 2.814.642 5.021.058 1.367.071 1.767.071 5.287zm-1.38 5.506a4.619 4.619 0 1 0 .001 9.238 4.619 4.619 0 0 0-.001-9.238zm.004 1.606a3.013 3.013 0 1 1-.001 6.026 3.013 3.013 0 0 1 .001-6.026zm4.788-1.581a1.5 1.5 0 1 0 .001 3.001 1.5 1.5 0 0 0-.001-3.001z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=1558255580" // Replace with your Facebook profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-square text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-8 w-8"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.7 6.9H4.2v1.8h2v7.5h2.7v-7.5h1.8l.4-2.4h-2.2V5c0-.6.3-1 1.1-1h1.2v-2.1H7.2c-2.1 0-3.3 1.2-3.3 3.2v1.7z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/FilipMladenovski" // Replace with your GitHub profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-square text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-8 w-8"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
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
