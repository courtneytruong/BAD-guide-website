import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-neutral-900 text-white">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow">
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
