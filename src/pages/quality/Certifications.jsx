import PageHeaderBanner from "../../components/PageHeaderBanner";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";
import { IconAward, IconShieldCheck, IconLeaf, IconGlobe } from "../../components/icons";

const certs = [
  {
    icon: <IconShieldCheck className="h-7 w-7" />,
    name: "ISO 9001:2015",
    description: "Quality management systems certification covering all manufacturing units.",
  },
  {
    icon: <IconLeaf className="h-7 w-7" />,
    name: "Oeko-Tex Standard 100",
    description: "Certifies fabrics are tested for harmful substances and safe for human use.",
  },
  {
    icon: <IconGlobe className="h-7 w-7" />,
    name: "GOTS Certified",
    description: "Global Organic Textile Standard compliance for organic cotton product lines.",
  },
  {
    icon: <IconAward className="h-7 w-7" />,
    name: "WRAP Certified",
    description: "Worldwide Responsible Accredited Production for ethical manufacturing practices.",
  },
];

export default function Certifications() {
  return (
    <div>
      <PageHeaderBanner
        title="Certifications"
        breadcrumbItems={[{ label: "Quality", to: "/quality" }, { label: "Certifications" }]}
        image={images.warehouseInterior}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Home &gt; Quality &gt; Certifications</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              Internationally Recognized Standards
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-gray">
              Our certifications reflect a company-wide commitment to safety, ethics and
              consistent quality across every manufacturing unit.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {certs.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 90}>
                <div className="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                    {c.icon}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-brand-dark">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
