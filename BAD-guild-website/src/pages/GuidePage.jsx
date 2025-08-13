import { useParams } from "react-router-dom";
import guides from "../data/guides";
import BackToGuidesButton from "../components/BackToGuidesButton";

export default function GuidePage() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return <div>Guide not found!</div>;
  }

  const GuideComponent = guide.component;

  return (
    <div className="bg-neutral-50 rounded-2xl my-10 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto text-white">
      <div className="text-center bg-gradient-to-r from-red-900 via-red-900 to-black rounded-t-xl pb-2">
        {/* Header section */}
        <div className="flex flex-col items-center md:relative md:flex-row md:items-center md:justify-center">
          {/* Button */}
          <div className="mb-2 md:mb-0 md:absolute md:left-4 pt-2">
            <BackToGuidesButton />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text">
            {guide.title}
          </h1>
        </div>

        {/* Description + author */}
        <p className="text-lg md:text-2xl mt-2 font-bold">
          {guide.description}
        </p>
        <p className="font-bold">Written by: {guide.author}</p>
      </div>
      <div className="text-black ">
        <GuideComponent />
      </div>
    </div>
  );
}
