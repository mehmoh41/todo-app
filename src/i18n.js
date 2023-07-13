import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  //   .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // lng: getCurrentLang(),
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          title: "Work management app",
          label: "Select another language!",
          about: "About",
          home: "Home",
          projects: "Projects",
          tasks: "Tasks",
          calender: "Calender",
          search: "Search",
        },
      },
      fa: {
        translation: {
          title: "برنامه ای برای منظم کردن کارها",
          label: "انتخاب زبان",
          about: "درباره ما",
          home: "صفحه اصلی",
          projects: "کارها",
          tasks: "برنامه ها",
          calender: "تقویم",
          search: "جستجو",
        },
      },
      ur: {
        translation: {
          title: "",
          label: "زبان انتخاب کریں ",
          about: "ھمارے بارے",
          home: "پھلا صفحہ",
          projects: "کامیں",
          tasks: "برنامیں",
          calender: "کلینڈر",
          search: "جستجو",
        },
      },
    },
  });

export default i18n;
