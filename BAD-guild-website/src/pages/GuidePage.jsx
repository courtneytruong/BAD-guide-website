import { useParams } from "react-router-dom";
import guides from "../data/guides";

export default function GuidePage() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return <div>Guide not found!</div>;
  }

  const GuideComponent = guide.component;

  return (
    <div className="bg-neutral-50 rounded-2xl my-10 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto text-black">
      <div className="text-center mb-5">
        <h1 className="text-6xl text-shadow-lg/20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-600 to-black pb-3">
          {guide.title}
        </h1>
        <p className="text-2xl mt-2 font-bold">{guide.description}</p>
        <p className="font-bold">Written by: {guide.author}</p>
      </div>
      <div>
        <GuideComponent />
      </div>
    </div>
  );
}
