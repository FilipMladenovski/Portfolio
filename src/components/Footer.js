export default function Footer() {
  return (
    <div className="text-lg text-center relative isolate px-6 py-24 lg:px-8">
      <div className="mt-10 flex items-center justify-center gap-x-4">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/filip-mladenovski-abb242305/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-square text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.5 19H5.5V9h2v10.5zM6.5 7.5c-1.35 0-2.5-1.1-2.5-2.5S5.15 2.5 6.5 2.5s2.5 1.1 2.5 2.5-1.15 2.5-2.5 2.5zm13 11.5h-2v-5.5c0-1.39-.5-2.34-1.75-2.34-1.04 0-1.65.69-1.92 1.34-.1.24-.14.56-.14.89v5.61h-2v-6.5c0-1.2-.02-2.26-.07-3.12h1.9l.09.77c.55-.84 1.5-2.07 3.15-2.07 2.25 0 3.94 1.52 3.94 4.8v5.92z" />
          </svg>
        </a>

        {/* GitHub Button */}
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
        
        {/* Email Button */}
        <a
          href="mailto:filip_chelsea@live.com"
          className="btn btn-outline btn-square text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 13.29L20 7V5H4v2l8 6.29zM2 6v12h20V6H2zm0-2h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          </svg>
        </a>
      </div>
      <p className="mt-3">
        Created with ❤️ by <span className="font-bold">Filip Mladenovski</span>
      </p>
      <p>Copyright © 2024. All Rights Reserved</p>
    </div>
  );
}
