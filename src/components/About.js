import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
const features = [
  {
    name: "Age:",
    description: "30 years old",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "filip_chelsea@live.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Skopje, North Macedonia",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                Aspiring Full-Stack Developer currently honing my skills at
                Qinshift Academy, where I am immersed in cutting-edge
                technologies and methodologies. My journey in software
                development is driven by a passion for creating seamless and
                efficient digital solutions. At Qinshift Academy, I have gained
                hands-on experience in both front-end and back-end development.
                My skill set includes proficiency in HTML, CSS, JavaScript, and
                frameworks like React and Angular for building dynamic user
                interfaces. On the server side, I am adept with Node.js,
                Express, and databases such as MongoDB and SQL. Key
                Achievements: Developed and deployed several web applications,
                showcasing my ability to design and implement responsive and
                user-friendly interfaces. Collaborated with peers on numerous
                projects, demonstrating strong teamwork and communication
                skills. Consistently met project deadlines, ensuring
                high-quality deliverables. In addition to technical skills, I am
                a problem solver at heart, always eager to tackle new challenges
                and learn from them. My education at Qinshift Academy has not
                only equipped me with the necessary technical expertise but also
                instilled a mindset of continuous learning and adaptability. I
                am excited about the future and the opportunity to contribute to
                innovative projects. Let's connect and explore how we can
                collaborate to bring creative solutions to life!
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ring-2 ring-base-300 rounded-xl shadow-xl mx-auto" 
            src="/portfolio/man.png"
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                  2015 – 2017 Skopje, North Macedonia Warehouse worker KAM
                  Market
                </p>
                <p className="mt-3 list-item list-inside">
                  2017 – CURRENT Skopje, North Macedonia Product manager Handy
                  Telecom (subsidiary of A1- Macedonia), Skopje
                </p>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                  2009 – 2012 Skopje, North Macedonia Electrical Technician for
                  Computer Technology and Automation SЕТUGS "Mihajlo Pupin" -
                  Skopje, Skopje
                </p>
                <p className="mt-3 list-item list-inside">
                  2012 – 2013 Skopje, North Macedonia Network Technologies
                  Faculty of Computer Science and Engineering (FINKI), Skopje
                </p>
                <p className="mt-3 list-item list-inside">
                  2023 – CURRENT S, North Macedonia Full-Stack Developer
                  Qinshift Academy, Skopje
                </p>
              </div>
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
