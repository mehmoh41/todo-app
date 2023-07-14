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
          headerTitle: "List Of Todos",
          todo: "To Do",
          inProgress: "In Progress",
          done: "Done",
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
          headerTitle: "لیست برنامه ها",
          todo: "انجام شود",
          inProgress: "در حال انجام",
          done: "تمام شده ها",
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
          headerTitle: "برناموں کے لیست",
          todo: "انجام دینا",
          inProgress: "انجام میں",
          done: "انجام دیا",
        },
      },
    },
  });

export default i18n;
