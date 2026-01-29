import { createContext, useContext } from "react";
import type { LanguageCode, Translations } from "./types";

type LanguageContextValue = {
    languageCode: LanguageCode;
    translations: Translations;
    availableLanguages: { code: LanguageCode; name: string }[];
    setLanguage: (code: LanguageCode) => void;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined
);

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return ctx;
};
