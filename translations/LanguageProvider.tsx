import { useEffect, useMemo, useState } from "react";
import type { LanguageCode, Translations } from "./types";
import { LanguageContext } from "./LanguageContext";
import en from "./en";
import de from "./de";
import es from "./es";
import fr from "./fr";
import it from "./it";
import id from "./id";
import ja from "./ja";
import ko from "./ko";
import nl from "./nl";
import pl from "./pl";
import pt from "./pt";
import ru from "./ru";
import sv from "./sv";
import zhHant from "./zh-Hant";

const translationsMap: Record<LanguageCode, Translations> = {
  en,
  de,
  es,
  fr,
  it,
  id,
  ja,
  ko,
  nl,
  pl,
  pt,
  ru,
  sv,
  "zh-Hant": zhHant,
};

const languageOrder: LanguageCode[] = [
  "id",
  "de",
  "en",
  "es",
  "fr",
  "it",
  "ja",
  "ko",
  "nl",
  "pl",
  "pt",
  "ru",
  "sv",
  "zh-Hant",
];

const STORAGE_KEY = "ac-language";

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [languageCode, setLanguageCode] = useState<LanguageCode>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as
      | LanguageCode
      | null;
    if (stored && translationsMap[stored]) {
      setLanguageCode(stored);
      return;
    }

    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("de")) setLanguageCode("de");
    else if (browserLang.startsWith("es")) setLanguageCode("es");
    else if (browserLang.startsWith("fr")) setLanguageCode("fr");
    else if (browserLang.startsWith("it")) setLanguageCode("it");
    else if (browserLang.startsWith("id")) setLanguageCode("id");
    else if (browserLang.startsWith("ja")) setLanguageCode("ja");
    else if (browserLang.startsWith("ko")) setLanguageCode("ko");
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, languageCode);
  }, [languageCode]);

  const value = useMemo(() => {
    const translations = translationsMap[languageCode] ?? en;
    const availableLanguages = languageOrder.map((code) => ({
      code,
      name: translationsMap[code]?.languageName ?? code,
    }));

    return {
      languageCode,
      translations,
      availableLanguages,
      setLanguage: setLanguageCode,
    };
  }, [languageCode]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { useLanguage } from "./LanguageContext";
