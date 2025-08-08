import { useState } from "react";

export default function GuideImage({ src, alt, caption }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed((prev) => !prev);

  return (
    <>
      {/* Zoom overlay */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 cursor-zoom-out"
          onClick={toggleZoom}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image or button
          >
            {/* Close button */}
            <button
              onClick={toggleZoom}
              aria-label="Close zoomed image"
              className="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-white z-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Zoomed image */}
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Thumbnail */}
      <figure className="my-4">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg shadow-md cursor-zoom-in"
          onClick={toggleZoom}
          loading="lazy"
        />
        {caption && (
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </>
  );
}
