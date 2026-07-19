import Button from "../../components/Button";

export default function ModuleFormActions({ onSave, onReset, savedAt }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-dark/10 pt-6">
      <Button type="button" variant="primary" onClick={onSave}>
        Save Changes
      </Button>
      <Button type="button" variant="secondary-dark" onClick={onReset}>
        Reset to Default
      </Button>
      {savedAt && (
        <span className="text-sm font-medium text-brand-green">
          Saved — visit the site to see it reflected.
        </span>
      )}
    </div>
  );
}
