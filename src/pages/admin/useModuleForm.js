import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { defaultContent } from "../../data/content";

export function useModuleForm(moduleKey) {
  const { content, updateModule, resetModule } = useContent();
  const [data, setData] = useState(() => structuredClone(content[moduleKey]));
  const [savedAt, setSavedAt] = useState(null);

  const setPath = (path, value) => {
    setData((prev) => {
      const next = structuredClone(prev);
      let obj = next;
      for (let i = 0; i < path.length - 1; i++) obj = obj[path[i]];
      obj[path[path.length - 1]] = value;
      return next;
    });
  };

  const save = () => {
    updateModule(moduleKey, data);
    setSavedAt(Date.now());
    setTimeout(() => setSavedAt(null), 2000);
  };

  const reset = () => {
    resetModule(moduleKey);
    setData(structuredClone(defaultContent[moduleKey]));
  };

  return { data, setPath, save, reset, savedAt };
}
