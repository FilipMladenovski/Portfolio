// src/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
