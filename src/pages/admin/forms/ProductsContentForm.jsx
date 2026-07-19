import AdminField from "../AdminField";
import ModuleFormActions from "../ModuleFormActions";
import { useModuleForm } from "../useModuleForm";

export default function ProductsContentForm() {
  const { data, setPath, save, reset, savedAt } = useModuleForm("products");

  return (
    <div className="space-y-6">
      <p className="text-sm text-brand-gray">
        Product images, galleries and spec tables are structural and stay in the codebase — only
        the marketing copy below is editable here.
      </p>

      {data.map((product, i) => (
        <div key={product.slug} className="rounded-xl border border-brand-dark/10 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gold">
            {product.slug}
          </p>
          <div className="space-y-3">
            <AdminField
              label="Name"
              value={product.name}
              onChange={(v) => setPath([i, "name"], v)}
            />
            <AdminField
              label="Tagline"
              value={product.tagline}
              onChange={(v) => setPath([i, "tagline"], v)}
            />
            <AdminField
              label="Description"
              rows={3}
              value={product.description}
              onChange={(v) => setPath([i, "description"], v)}
            />
          </div>
        </div>
      ))}

      <ModuleFormActions onSave={save} onReset={reset} savedAt={savedAt} />
    </div>
  );
}
