import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-screen bg-neutral-900 text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
