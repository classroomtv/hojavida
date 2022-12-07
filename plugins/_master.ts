
import translation_es from "./translation_es";
import translation_en from "./translation_en";

export default defineNuxtPlugin(() => {

    const translationArchive_es:any = translation_es();
    const translationArchive_en:any = translation_en();
    let userLang = 'en';

    const t = (key:any) => {
        if(userLang == 'es'){ return translationArchive_es[key];}
        if(userLang == 'en'){ return translationArchive_en[key];}
    }

    const changeLang = (setLang:any) => {
        userLang = setLang;
        console.log(userLang);
    }


    return {
        provide: {
            t,
        }
    }
  }) 