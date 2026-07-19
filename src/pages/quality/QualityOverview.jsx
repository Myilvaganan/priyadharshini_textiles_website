import PageHeaderBanner from "../../components/PageHeaderBanner";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";
import { IconAward, IconFlask } from "../../components/icons";

export default function QualityOverview() {
  return (
    <div>
      <PageHeaderBanner
        title="Quality"
        breadcrumbItems={[{ label: "Quality" }]}
        image={images.threadsClose}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Home &gt; Quality</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
                Quality Verified at Every Stage
              </h2>
              <p className="mt-5 leading-relaxed text-brand-gray">
                Every batch passes through in-house testing and internationally recognized
                certification standards — from raw fiber to finished, packed goods — so our
                partners can trust every shipment.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <img
                src={images.measuringTape}
                alt="Measuring tape used for quality inspection"
                className="h-80 w-full rounded-xl object-cover shadow-lg"
              />
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Reveal>
              <Card
                icon={<IconAward className="h-6 w-6" />}
                title="Certifications"
                description="ISO 9001, Oeko-Tex Standard 100 and GOTS certified processes across our facilities."
                to="/quality/certifications"
              />
            </Reveal>
            <Reveal delay={100}>
              <Card
                icon={<IconFlask className="h-6 w-6" />}
                title="Testing & Lab Facilities"
                description="In-house physical and chemical testing labs ensuring every lot meets specification."
                to="/quality/testing"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
