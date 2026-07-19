import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AdminPage from "./pages/admin/AdminPage";
import Home from "./pages/Home";
import AboutOverview from "./pages/about/AboutOverview";
import OurStory from "./pages/about/OurStory";
import MissionVision from "./pages/about/MissionVision";
import Leadership from "./pages/about/Leadership";
import ProductsOverview from "./pages/products/ProductsOverview";
import ProductDetail from "./pages/products/ProductDetail";
import Infrastructure from "./pages/Infrastructure";
import QualityOverview from "./pages/quality/QualityOverview";
import Certifications from "./pages/quality/Certifications";
import Testing from "./pages/quality/Testing";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutOverview />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/mission-vision" element={<MissionVision />} />
        <Route path="/about/leadership" element={<Leadership />} />

        <Route path="/products" element={<ProductsOverview />} />
        <Route path="/products/:slug" element={<ProductDetail />} />

        <Route path="/infrastructure" element={<Infrastructure />} />

        <Route path="/quality" element={<QualityOverview />} />
        <Route path="/quality/certifications" element={<Certifications />} />
        <Route path="/quality/testing" element={<Testing />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
