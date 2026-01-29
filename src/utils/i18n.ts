// i18n.ts
import { I18n } from 'i18n-js';
import { I18nManager } from 'react-native';

const i18n = new I18n({
  en: require('../locales/en.json'),
  ur: require('../locales/ur.json'),
});

i18n.locale = 'en';
i18n.enableFallback = true;

export const applyLanguage = (lang: 'en' | 'ur') => {
  i18n.locale = lang;

  const isRTL = lang === 'ur';
  I18nManager.allowRTL(isRTL);
  I18nManager.forceRTL(isRTL);
};

export default i18n;
