import { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button after scrolling a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky bottom-4 flex justify-end py-2 px-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300"
        >
          <span className="flex items-center gap-x-2">
            <IoMdArrowRoundUp /> Back to Top
          </span>
        </button>
      )}
    </div>
  );
}
