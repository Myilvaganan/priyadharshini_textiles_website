import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useContent } from "../../context/ContentContext";
import { contentModules } from "../../data/content";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import HomeContentForm from "./forms/HomeContentForm";
import AboutContentForm from "./forms/AboutContentForm";
import ProductsContentForm from "./forms/ProductsContentForm";
import ContactContentForm from "./forms/ContactContentForm";

const moduleForms = {
  home: HomeContentForm,
  about: AboutContentForm,
  products: ProductsContentForm,
  contact: ContactContentForm,
};

export default function AdminDashboard() {
  const { logout } = useAuth();
  const { content } = useContent();
  const [activeModule, setActiveModule] = useState(contentModules[0].key);

  const ActiveForm = moduleForms[activeModule];

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "content.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-brand-offwhite">
      <header className="bg-brand-dark py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
          <Logo />
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-brand-gold-light"
            >
              View Site &rarr;
            </Link>
            <Button variant="secondary" className="!px-4 !py-2 text-xs" onClick={handleExport}>
              Export content.json
            </Button>
            <Button variant="primary" className="!px-4 !py-2 text-xs" onClick={logout}>
              Log Out
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="font-serif text-2xl font-bold text-brand-dark sm:text-3xl">
          Content Management
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-brand-gray">
          Select a module, edit its content and save — changes reflect immediately on the live
          site in this browser. To publish for all visitors, export{" "}
          <code className="rounded bg-brand-dark/5 px-1.5 py-0.5 text-xs">content.json</code> and
          replace <code className="rounded bg-brand-dark/5 px-1.5 py-0.5 text-xs">src/data/content.js</code>'s{" "}
          <code className="rounded bg-brand-dark/5 px-1.5 py-0.5 text-xs">defaultContent</code>{" "}
          export, then redeploy.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {contentModules.map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setActiveModule(m.key)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                activeModule === m.key
                  ? "bg-brand-gold text-brand-dark"
                  : "border border-brand-dark/20 text-brand-dark hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <ActiveForm key={activeModule} />
        </div>
      </div>
    </div>
  );
}
