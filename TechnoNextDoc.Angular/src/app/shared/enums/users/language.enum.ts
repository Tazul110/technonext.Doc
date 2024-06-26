export enum Language{
    en,
    bn
}
export function getLanguageText(language: Language) {
    switch(language){
        case Language.en: {
            return 'English';
        }
        case Language.bn: {
            return "Bengali"
        }
    }
}

export enum LanguageLink {
    en = 'en',
    bn = 'bn'
}