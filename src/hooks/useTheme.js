import {useCallback, useEffect, useState} from "react";
import {getAutoTheme, msUntilNextThemeChange} from "../utils/sunTheme.js";

const STORAGE_KEY = "theme-preference";
const VALID_PREFERENCES = ["light", "dark", "auto"];

function readStoredPreference() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return VALID_PREFERENCES.includes(stored) ? stored : "auto";
  } catch {
    return "auto";
  }
}

function resolve(preference) {
  return preference === "auto" ? getAutoTheme() : preference;
}

function useTheme() {
  const [preference, setPreferenceState] = useState(readStoredPreference);
  const [resolvedTheme, setResolvedTheme] = useState(() => resolve(preference));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    setResolvedTheme(resolve(preference));

    if (preference !== "auto") return;

    let timeoutId;
    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        setResolvedTheme(getAutoTheme());
        scheduleNext();
      }, msUntilNextThemeChange());
    };
    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, [preference]);

  const setPreference = useCallback((value) => {
    if (!VALID_PREFERENCES.includes(value)) return;
    setPreferenceState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // private browsing / storage disabled: preference just won't persist
    }
  }, []);

  return {preference, resolvedTheme, setPreference};
}

export default useTheme;
