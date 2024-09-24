import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "Car Dealership",
    href: "https://github.com/FilipMladenovski/car-dealership",
    target: "_blank",
    imageSrc: "/portfolios/car-dealership.png",
    used: "Angular, NestJS, Angular Material",
    description: "A website for buying and selling cars.",
  },
  {
    id: 2,
    name: "Trip Planner",
    href: "https://github.com/FilipMladenovski/REACTJS_Homework",
    target: "_blank",
    imageSrc:
      "/portfolios/trip-planner.png",
    used: "React and Typescript, TailwindCSS",
    description: "A website for planning a trip.",
  },
  {
    id: 3,
    name: "Star Wars",
    href: "https://github.com/FilipMladenovski/WORKSHOP/tree/main/Workshop%202",
    target: "_blank",
    imageSrc:
      "/portfolios/star-wars.png",

    used: "JavaScript, Bootstrap",
    description: "A website for movies and actors in Starwars.",
  },
  {
    id: 4,
    name: "Qintronics",
    href: "https://github.com/sedc-codecademy/sp2024-cp02-dsw-1",
    target: "_blank",
    imageSrc:
      "/portfolios/qintronics.png",
    used: "Javascript, HTML & CSS",
    description: "An online e-store webshop.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7 text-center">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-center sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a
                      href={project.href}
                      target={project.target}
                      rel="noopener noreferrer"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}