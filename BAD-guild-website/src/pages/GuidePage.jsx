import { useParams } from "react-router-dom";
import guides from "../data/guides";

export default function GuidePage() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return <div>Guide not found! 🫨</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{guide.title}</h1>
      <p className="mt-2 text-white">{guide.description}</p>
    </div>
  );
}
