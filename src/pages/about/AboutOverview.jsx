import PageHeaderBanner from "../../components/PageHeaderBanner";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";
import { IconAward, IconUsers, IconGlobe } from "../../components/icons";

const sections = [
  {
    to: "/about/our-story",
    title: "Our Story",
    description: "How a single weaving unit grew into an integrated textile group.",
    icon: <IconAward className="h-6 w-6" />,
  },
  {
    to: "/about/mission-vision",
    title: "Mission & Vision",
    description: "The purpose and values that guide every decision we make.",
    icon: <IconGlobe className="h-6 w-6" />,
  },
  {
    to: "/about/leadership",
    title: "Leadership",
    description: "Meet the team leading our manufacturing and export operations.",
    icon: <IconUsers className="h-6 w-6" />,
  },
];

export default function AboutOverview() {
  return (
    <div>
      <PageHeaderBanner
        title="About Us"
        breadcrumbItems={[{ label: "About Us" }]}
        image={images.weavingLoomColorful}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Home &gt; About Us</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
                A Fully Integrated Textile Manufacturer
              </h2>
              <p className="mt-5 leading-relaxed text-brand-gray">
                Priyadharshini Textiles has grown from a single weaving unit into a
                vertically integrated group spanning spinning, weaving, processing and
                made-up textiles. For over 25 years, we've supplied consistent, certified
                quality fabric and yarn to apparel and home furnishing brands across the
                globe.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <img
                src={images.fabricRollsFactory}
                alt="Rolls of finished fabric in the factory"
                className="h-80 w-full rounded-xl object-cover shadow-lg"
              />
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {sections.map((s, i) => (
              <Reveal key={s.to} delay={i * 100}>
                <Card icon={s.icon} title={s.title} description={s.description} to={s.to} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
