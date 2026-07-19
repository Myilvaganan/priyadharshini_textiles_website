import PageHeaderBanner from "../../components/PageHeaderBanner";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";
import { useContent } from "../../context/ContentContext";
import { IconAward, IconUsers, IconGlobe } from "../../components/icons";

const sectionLinks = [
  { to: "/about/our-story", icon: <IconAward className="h-6 w-6" /> },
  { to: "/about/mission-vision", icon: <IconGlobe className="h-6 w-6" /> },
  { to: "/about/leadership", icon: <IconUsers className="h-6 w-6" /> },
];

export default function AboutOverview() {
  const { content } = useContent();
  const { overview } = content.about;

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
                {overview.heading}
              </h2>
              <p className="mt-5 leading-relaxed text-brand-gray">{overview.body}</p>
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
            {overview.sections.map((s, i) => (
              <Reveal key={sectionLinks[i].to} delay={i * 100}>
                <Card
                  icon={sectionLinks[i].icon}
                  title={s.title}
                  description={s.description}
                  to={sectionLinks[i].to}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
