import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        id: "ID",
        category_name: "Category Name",
        date: "Date",
        update: "Update",
        delete: "Delete",
        view: "View",
        create: "Create",
        todoinput: "TodoInput",
        todolist: "TodoList",
        all: "All",
        done: "Done",
        todo: "Todo",
        addnewTask: "Add new task",
        delete_done: "Delete done tasks",
        delete_all: "Delete all tasks",
        category_list: "Category List",
        category_create: "Category Create",
        category_update: "Category Update",
        category_delete: "Category Delete",
      },
    },
    tr: {
      translations: {
        id: "ID",
        category_name: "Kategori Adı",
        date: "Tarih",
        update: "Güncelle",
        delete: "Sil",
        view: "Göster",
        create: "Ekle",
        todoinput: "Görev ekle",
        todolist: "Görev listesi",
        all: "Hepsi",
        done: "Tamamlanmış",
        todo: "Yapılacaklar",
        addnewTask: "Yeni Görev ekle",
        delete_done: "Yapılan Görevleri sil",
        delete_all: "Tüm Görevleri sil",
        category_list: "Kategori List",
        category_create: "Kategori Ekle",
        category_update: "Kategori Güncelle",
        category_delete: "Kategori Sil",
      },
    },
  },
  fallbackLng: "tr", //fallbackLng: 'en', fall back function
  ns: ["translations"], //kelimeleri nerede alsın
  defaultNS: "translations",
  keySeparator: false,
  interpolation: { escapeValue: false, formatSeparator: "," },
  react: {
    wait: true,
  },
});
export default i18n;
