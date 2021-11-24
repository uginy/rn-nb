import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';

import en from './translations/en.json';
import he from './translations/he.json';

const locales = RNLocalize.getLocales();

export default i18n.init({
  debug: false,
  lng: locales[0].languageCode,
  fallbackLng: 'en',
  resources: {en, he},
});
