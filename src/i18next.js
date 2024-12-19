import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(HttpApi)
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['uz', 'ru'],
		fallbackLng: 'uz',
		backend: {
			loadPath: '/locales/{{lng}}/translations.json',
		},
	});

export default i18n;
