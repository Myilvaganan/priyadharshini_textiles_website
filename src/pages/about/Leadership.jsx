import PageHeaderBanner from "../../components/PageHeaderBanner";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";

const leaders = [
  {
    name: "R. Priyadharshini",
    role: "Founder & Managing Director",
    image: images.smilingTextileWorker,
    bio: "Founded the company in 1998 and has led its growth into a vertically integrated textile group.",
  },
  {
    name: "S. Karthikeyan",
    role: "Director – Operations",
    image: images.factoryWorkerFacility,
    bio: "Oversees spinning, weaving and processing operations across all manufacturing units.",
  },
  {
    name: "M. Lakshmi",
    role: "Director – Quality & Compliance",
    image: images.femaleWorkersModern,
    bio: "Leads quality assurance, lab testing and certification programs across the group.",
  },
  {
    name: "A. Venkatesh",
    role: "Head of Exports",
    image: images.dedicatedWorkers,
    bio: "Manages international client relationships and logistics across 40+ export markets.",
  },
];

export default function Leadership() {
  return (
    <div>
      <PageHeaderBanner
        title="Leadership"
        breadcrumbItems={[{ label: "About Us", to: "/about" }, { label: "Leadership" }]}
        image={images.industrialWorkers}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Home &gt; About Us &gt; Leadership</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              The People Behind Priyadharshini
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-gray">
              A leadership team with decades of combined experience across textile
              manufacturing, quality assurance and global trade.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={(i % 4) * 100}>
                <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="block h-1 bg-brand-gold" />
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={l.image}
                      alt={l.name}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-brand-dark">{l.name}</h3>
                    <p className="mt-0.5 text-sm font-semibold uppercase tracking-wide text-brand-gold">
                      {l.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-gray">{l.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
