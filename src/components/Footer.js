import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="text-lg text-center relative isolate px-6 py-24 lg:px-8">
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
          href="https://github.com/FilipMladenovski"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-square text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"
        >
          <FaGithub className="h-8 w-8" />
        </a>

        <a
          href="mailto:filip_chelsea@live.com"
          className="btn btn-outline btn-square text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
        >
          <FaEnvelope className="h-8 w-8" />
        </a>
      </div>
      <p className="mt-3">
        Created with ❤️ by <span className="font-bold">Filip Mladenovski</span>
      </p>
      <p>Copyright © 2024. All Rights Reserved</p>
    </div>
  );
}
