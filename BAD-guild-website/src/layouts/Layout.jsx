import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-screen bg-neutral-900 text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
