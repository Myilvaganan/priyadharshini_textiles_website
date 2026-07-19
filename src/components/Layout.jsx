import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingActions from "./FloatingActions";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main key={pathname} className="flex-1 animate-page-in">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
