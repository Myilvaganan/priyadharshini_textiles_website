import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultContent } from "../data/content";

const STORAGE_KEY = "cms-content-overrides-v1";

const ContentContext = createContext(null);

function loadOverrides() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function ContentProvider({ children }) {
  const [overrides, setOverrides] = useState(loadOverrides);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  }, [overrides]);

  const updateModule = useCallback((moduleKey, data) => {
    setOverrides((prev) => ({ ...prev, [moduleKey]: data }));
  }, []);

  const resetModule = useCallback((moduleKey) => {
    setOverrides((prev) => {
      const next = { ...prev };
      delete next[moduleKey];
      return next;
    });
  }, []);

  const content = { ...defaultContent, ...overrides };
  const isOverridden = (moduleKey) => Object.prototype.hasOwnProperty.call(overrides, moduleKey);

  return (
    <ContentContext.Provider value={{ content, updateModule, resetModule, isOverridden }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within a ContentProvider");
  return ctx;
}
