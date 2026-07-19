import AdminField from "../AdminField";
import ModuleFormActions from "../ModuleFormActions";
import { useModuleForm } from "../useModuleForm";

export default function ContactContentForm() {
  const { data, setPath, save, reset, savedAt } = useModuleForm("contact");

  return (
    <div className="space-y-10">
      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Enquiry Section Intro</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Heading"
            value={data.intro.heading}
            onChange={(v) => setPath(["intro", "heading"], v)}
          />
          <AdminField
            label="Body"
            rows={2}
            value={data.intro.body}
            onChange={(v) => setPath(["intro", "body"], v)}
          />
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Address</h3>
        <div className="mt-4">
          <AdminField
            label="Factory Address"
            rows={2}
            value={data.address}
            onChange={(v) => setPath(["address"], v)}
          />
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Phone Numbers</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.phones.map((phone, i) => (
            <AdminField
              key={i}
              label={`Phone ${i + 1}`}
              value={phone}
              onChange={(v) => setPath(["phones", i], v)}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Email Addresses</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.emails.map((email, i) => (
            <AdminField
              key={i}
              label={`Email ${i + 1}`}
              value={email}
              onChange={(v) => setPath(["emails", i], v)}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-serif text-lg font-bold text-brand-dark">Business Hours</h3>
        <div className="mt-4 space-y-4">
          <AdminField
            label="Weekdays"
            value={data.hours.weekdays}
            onChange={(v) => setPath(["hours", "weekdays"], v)}
          />
          <AdminField
            label="Sunday"
            value={data.hours.sunday}
            onChange={(v) => setPath(["hours", "sunday"], v)}
          />
        </div>
      </section>

      <ModuleFormActions onSave={save} onReset={reset} savedAt={savedAt} />
    </div>
  );
}
