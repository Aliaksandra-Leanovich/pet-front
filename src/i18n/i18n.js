import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsRU from "./ru/ru";

const resources = {
  ru: {
    translation: translationsRU,
  },
};
const DETECTION_OPTIONS = {
  order: ["navigator"],
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "ru",
    keySeparator: false,
    detection: DETECTION_OPTIONS,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
