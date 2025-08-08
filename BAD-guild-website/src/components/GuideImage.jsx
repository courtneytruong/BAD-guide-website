import { useState } from "react";

export default function GuideImage({ src, alt, caption }) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom state
  const toggleZoom = () => setIsZoomed((prev) => !prev);

  return (
    <>
      {/* Overlay backdrop when zoomed */}
      {isZoomed && (
        <div
          onClick={toggleZoom}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 cursor-zoom-out"
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing if image clicked
          />
        </div>
      )}

      {/* Image thumbnail */}
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
