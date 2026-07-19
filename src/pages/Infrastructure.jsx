import PageHeaderBanner from "../components/PageHeaderBanner";
import Card from "../components/Card";
import StatCounter from "../components/StatCounter";
import Reveal from "../components/Reveal";
import { images } from "../data/images";
import { IconSpindle, IconFactory, IconWarehouse, IconFlask, IconBolt, IconTruck } from "../components/icons";

const units = [
  {
    icon: <IconSpindle className="h-6 w-6" />,
    title: "Spinning Unit",
    description: "Automated ring & open-end spinning frames producing cotton and blended yarns.",
    image: images.threadSpoolsSelective,
  },
  {
    icon: <IconFactory className="h-6 w-6" />,
    title: "Weaving Shed",
    description: "Shuttleless air-jet and rapier looms running high-volume greige fabric production.",
    image: images.weavingLoomColorful,
  },
  {
    icon: <IconFlask className="h-6 w-6" />,
    title: "Dyeing & Processing",
    description: "Continuous and batch dyeing lines with in-house lab dip and shade matching.",
    image: images.threadsClose,
  },
  {
    icon: <IconWarehouse className="h-6 w-6" />,
    title: "Warehousing",
    description: "Climate-controlled storage with barcoded racking for finished goods and raw materials.",
    image: images.warehouseMetalShelves,
  },
];

export default function Infrastructure() {
  return (
    <div>
      <PageHeaderBanner
        title="Infrastructure"
        breadcrumbItems={[{ label: "Infrastructure" }]}
        image={images.warehouseSteel}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Home &gt; Infrastructure</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              Manufacturing Built for Scale and Precision
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-gray">
              A modern industrial campus with dedicated units for every stage of production —
              from raw yarn to finished, packed goods ready for export.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {units.map((u, i) => (
              <Reveal key={u.title} delay={(i % 4) * 100}>
                <Card image={u.image} icon={u.icon} title={u.title} description={u.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {[
            { value: 5, suffix: "", label: "Manufacturing Units" },
            { value: 45, suffix: "+", label: "Acres of Campus" },
            { value: 1200, suffix: "+", label: "Looms & Machines" },
            { value: 24, suffix: "/7", label: "Production Cycle" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.warehouseShelvingCart}
              alt="Warehouse racking and logistics"
              className="h-96 w-full rounded-xl object-cover shadow-lg"
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Logistics & Power</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark">
              Reliable Supply, End to End
            </h2>
            <p className="mt-5 leading-relaxed text-brand-gray">
              Captive power generation and backup infrastructure keep production running
              uninterrupted, while an in-house logistics fleet and bonded warehousing ensure
              on-time delivery across 40+ export markets.
            </p>
            <div className="mt-6 flex gap-8">
              <div className="flex items-center gap-3">
                <IconBolt className="h-6 w-6 text-brand-gold" />
                <span className="text-sm font-semibold text-brand-dark">Captive Power</span>
              </div>
              <div className="flex items-center gap-3">
                <IconTruck className="h-6 w-6 text-brand-gold" />
                <span className="text-sm font-semibold text-brand-dark">In-House Logistics</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
