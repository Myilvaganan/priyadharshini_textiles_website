import PageHeaderBanner from "../../components/PageHeaderBanner";
import IconFeature from "../../components/IconFeature";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";
import { IconFlask, IconShieldCheck, IconClock, IconAward } from "../../components/icons";

const tests = [
  { title: "Tensile & Tear Strength", description: "Measures fabric durability under stress for apparel and industrial applications." },
  { title: "Colorfastness Testing", description: "Verifies resistance to washing, light and rubbing to meet buyer standards." },
  { title: "GSM & Count Verification", description: "Confirms fabric weight and yarn count against order specifications." },
  { title: "Shrinkage & Dimensional Stability", description: "Checks fabric behavior after washing and finishing processes." },
  { title: "Chemical Compliance", description: "Screens for restricted substances per Oeko-Tex and REACH standards." },
  { title: "Shade Matching", description: "Spectrophotometer-based lab dips ensure consistent color across bulk production." },
];

export default function Testing() {
  return (
    <div>
      <PageHeaderBanner
        title="Testing & Lab Facilities"
        breadcrumbItems={[{ label: "Quality", to: "/quality" }, { label: "Testing & Lab Facilities" }]}
        image={images.threadsClose}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <img
                src={images.womenSewingFactory2}
                alt="Lab testing facility"
                className="h-96 w-full rounded-xl object-cover shadow-lg"
              />
            </Reveal>
            <Reveal delay={150}>
              <p className="eyebrow">Home &gt; Quality &gt; Testing</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
                In-House Testing at Every Stage
              </h2>
              <p className="mt-5 leading-relaxed text-brand-gray">
                Our on-site laboratories run physical and chemical testing on raw materials,
                in-process goods and finished fabric — catching deviations before they reach
                a shipment, not after.
              </p>
              <div className="mt-6 flex gap-8">
                <div className="flex items-center gap-3">
                  <IconClock className="h-6 w-6 text-brand-gold" />
                  <span className="text-sm font-semibold text-brand-dark">100% Batch Testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconAward className="h-6 w-6 text-brand-gold" />
                  <span className="text-sm font-semibold text-brand-dark">Accredited Lab</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Lab Capabilities</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark">
              What We Test
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 100}>
                <IconFeature
                  icon={<IconFlask className="h-6 w-6" />}
                  title={t.title}
                  description={t.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
