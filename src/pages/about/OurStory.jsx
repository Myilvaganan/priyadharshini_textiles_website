import PageHeaderBanner from "../../components/PageHeaderBanner";
import StatCounter from "../../components/StatCounter";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";

const milestones = [
  { year: "1998", text: "Founded as a single weaving unit in Erode, Tamil Nadu." },
  { year: "2004", text: "Commissioned in-house spinning to integrate raw material supply." },
  { year: "2011", text: "Added dyeing & processing capability, expanding into finished fabric." },
  { year: "2017", text: "Launched made-up textiles division for bedding and home furnishing." },
  { year: "2023", text: "Crossed 40 export markets with ISO and Oeko-Tex certified operations." },
];

export default function OurStory() {
  return (
    <div>
      <PageHeaderBanner
        title="Our Story"
        breadcrumbItems={[{ label: "About Us", to: "/about" }, { label: "Our Story" }]}
        image={images.fabricRollsFactory}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Home &gt; About Us &gt; Our Story</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              From a Single Loom to an Integrated Textile Group
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray">
              Priyadharshini Textiles began in 1998 as a modest weaving unit with a handful
              of looms and a commitment to consistent quality. Over the following decades,
              that commitment shaped every decision — from investing in in-house spinning to
              building dedicated processing and made-up divisions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Today, we operate as a vertically integrated manufacturer serving apparel,
              home furnishing and technical textile brands across more than 40 countries,
              while staying rooted in the same values that started the company: reliability,
              craftsmanship and long-term partnership.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={images.weaverLoomCloseup}
              alt="Close-up of weaving loom in operation"
              className="h-96 w-full rounded-xl object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Our Journey</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark">Milestones</h2>
          </Reveal>
          <div className="mt-12 space-y-8 border-l-2 border-brand-gold/40 pl-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 80} y={16} className="relative">
                <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-brand-gold" />
                <p className="font-serif text-lg font-bold text-brand-dark">{m.year}</p>
                <p className="mt-1 text-brand-gray">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {[
            { value: 25, suffix: "+", label: "Years of Experience" },
            { value: 40, suffix: "+", label: "Export Countries" },
            { value: 3200, suffix: "+", label: "Employees" },
            { value: 5, suffix: "", label: "Manufacturing Units" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
