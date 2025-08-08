export default function GuideImage({ src, alt, caption }) {
  return (
    <figure className="my-4">
      <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-md" />
      {caption && (
        <figcaption className="text-sm text-gray-500 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
