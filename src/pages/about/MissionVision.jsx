import PageHeaderBanner from "../../components/PageHeaderBanner";
import IconFeature from "../../components/IconFeature";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";
import { IconLeaf, IconShieldCheck, IconUsers, IconGlobe } from "../../components/icons";

export default function MissionVision() {
  return (
    <div>
      <PageHeaderBanner
        title="Mission & Vision"
        breadcrumbItems={[{ label: "About Us", to: "/about" }, { label: "Mission & Vision" }]}
        image={images.narrowLoomMachine}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
          <Reveal className="rounded-xl bg-brand-offwhite p-10 shadow-sm">
            <p className="eyebrow">Our Mission</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-brand-dark">
              Manufacturing Excellence, Delivered Consistently
            </h2>
            <p className="mt-4 leading-relaxed text-brand-gray">
              To deliver consistent, high-quality tapes, lanyards and laces to global brands
              through integrated manufacturing, ethical practices and continuous investment
              in people and technology — building partnerships that last beyond a single
              order.
            </p>
          </Reveal>
          <Reveal delay={150} className="rounded-xl bg-brand-green p-10 text-white shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              Our Vision
            </p>
            <h2 className="mt-3 font-serif text-2xl font-bold">
              A Globally Trusted Tape Manufacturing Partner
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              To be recognized as one of the most trusted and sustainable tape
              manufacturers in the world, known for quality, transparency and long-term value
              for every partner we serve.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">What Guides Us</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark">Our Core Values</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <IconShieldCheck className="h-6 w-6" />,
                title: "Integrity",
                description: "Transparent dealings and honest quality reporting at every stage.",
              },
              {
                icon: <IconUsers className="h-6 w-6" />,
                title: "People First",
                description:
                  "Safe, fair workplaces and continuous skill development for our workforce.",
              },
              {
                icon: <IconLeaf className="h-6 w-6" />,
                title: "Sustainability",
                description: "Responsible sourcing and resource-efficient manufacturing practices.",
              },
              {
                icon: <IconGlobe className="h-6 w-6" />,
                title: "Global Reliability",
                description: "Consistent quality and on-time delivery across every export market.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 90}>
                <IconFeature align="center" icon={v.icon} title={v.title} description={v.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
