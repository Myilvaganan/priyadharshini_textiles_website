import AdminField from "../AdminField";
import ModuleFormActions from "../ModuleFormActions";
import { useModuleForm } from "../useModuleForm";

export default function AboutContentForm() {
  const { data, setPath, save, reset, savedAt } = useModuleForm("about");
  const overview = data.overview;

  return (
    <div className="space-y-10">
      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">About Overview Intro</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Heading"
            value={overview.heading}
            onChange={(v) => setPath(["overview", "heading"], v)}
          />
          <AdminField
            label="Body"
            rows={4}
            value={overview.body}
            onChange={(v) => setPath(["overview", "body"], v)}
          />
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Section Cards</h3>
        <div className="mt-4 space-y-4">
          {overview.sections.map((s, i) => (
            <div key={i} className="rounded-xl border border-brand-dark/10 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                Card {i + 1}
              </p>
              <div className="space-y-3">
                <AdminField
                  label="Title"
                  value={s.title}
                  onChange={(v) => setPath(["overview", "sections", i, "title"], v)}
                />
                <AdminField
                  label="Description"
                  rows={2}
                  value={s.description}
                  onChange={(v) => setPath(["overview", "sections", i, "description"], v)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ModuleFormActions onSave={save} onReset={reset} savedAt={savedAt} />
    </div>
  );
}
