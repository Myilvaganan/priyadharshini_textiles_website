import AdminField from "../AdminField";
import ModuleFormActions from "../ModuleFormActions";
import { useModuleForm } from "../useModuleForm";

export default function HomeContentForm() {
  const { data, setPath, save, reset, savedAt } = useModuleForm("home");

  return (
    <div className="space-y-10">
      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Hero Carousel Slides</h3>
        <div className="mt-4 space-y-6">
          {data.hero.slides.map((slide, i) => (
            <div key={i} className="rounded-xl border border-brand-dark/10 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                Slide {i + 1}
              </p>
              <div className="space-y-4">
                <AdminField
                  label="Eyebrow"
                  value={slide.eyebrow}
                  onChange={(v) => setPath(["hero", "slides", i, "eyebrow"], v)}
                />
                <AdminField
                  label="Heading"
                  value={slide.heading}
                  onChange={(v) => setPath(["hero", "slides", i, "heading"], v)}
                />
                <AdminField
                  label="Quote"
                  rows={3}
                  value={slide.quote}
                  onChange={(v) => setPath(["hero", "slides", i, "quote"], v)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Stats Bar</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.stats.map((stat, i) => (
            <div key={i} className="rounded-xl border border-brand-dark/10 p-5">
              <div className="grid grid-cols-2 gap-3">
                <AdminField
                  label="Value"
                  type="number"
                  value={stat.value}
                  onChange={(v) => setPath(["stats", i, "value"], Number(v) || 0)}
                />
                <AdminField
                  label="Suffix"
                  value={stat.suffix}
                  onChange={(v) => setPath(["stats", i, "suffix"], v)}
                />
              </div>
              <div className="mt-3">
                <AdminField
                  label="Label"
                  value={stat.label}
                  onChange={(v) => setPath(["stats", i, "label"], v)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">About Teaser</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Heading"
            value={data.aboutTeaser.heading}
            onChange={(v) => setPath(["aboutTeaser", "heading"], v)}
          />
          <AdminField
            label="Body"
            rows={3}
            value={data.aboutTeaser.body}
            onChange={(v) => setPath(["aboutTeaser", "body"], v)}
          />
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Products Intro</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Heading"
            value={data.productsIntro.heading}
            onChange={(v) => setPath(["productsIntro", "heading"], v)}
          />
          <AdminField
            label="Body"
            rows={3}
            value={data.productsIntro.body}
            onChange={(v) => setPath(["productsIntro", "body"], v)}
          />
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Why Choose Us</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Heading"
            value={data.whyChooseUs.heading}
            onChange={(v) => setPath(["whyChooseUs", "heading"], v)}
          />
          <div className="space-y-4">
            {data.whyChooseUs.features.map((f, i) => (
              <div key={i} className="rounded-xl border border-brand-dark/10 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  Feature {i + 1}
                </p>
                <div className="space-y-3">
                  <AdminField
                    label="Title"
                    value={f.title}
                    onChange={(v) => setPath(["whyChooseUs", "features", i, "title"], v)}
                  />
                  <AdminField
                    label="Description"
                    rows={2}
                    value={f.description}
                    onChange={(v) => setPath(["whyChooseUs", "features", i, "description"], v)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Facility Carousel Intro</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Heading"
            value={data.facilityIntro.heading}
            onChange={(v) => setPath(["facilityIntro", "heading"], v)}
          />
          <AdminField
            label="Body"
            rows={3}
            value={data.facilityIntro.body}
            onChange={(v) => setPath(["facilityIntro", "body"], v)}
          />
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Infrastructure Teaser</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Heading"
            value={data.infrastructureTeaser.heading}
            onChange={(v) => setPath(["infrastructureTeaser", "heading"], v)}
          />
          <AdminField
            label="Body"
            rows={3}
            value={data.infrastructureTeaser.body}
            onChange={(v) => setPath(["infrastructureTeaser", "body"], v)}
          />
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Closing CTA</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Heading"
            value={data.cta.heading}
            onChange={(v) => setPath(["cta", "heading"], v)}
          />
          <AdminField
            label="Body"
            rows={2}
            value={data.cta.body}
            onChange={(v) => setPath(["cta", "body"], v)}
          />
        </div>
      </section>

      <ModuleFormActions onSave={save} onReset={reset} savedAt={savedAt} />
    </div>
  );
}
