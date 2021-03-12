export function getUserPreferredLanguage() {
  // let lang = window.navigator.languages?.[0] ?? window.navigator.language
  // if (lang !== 'th') {
  const lang = 'en'
  // }
  return lang
}

// https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

export const supportedLanguages = [
  { name: 'en', value: 'English' },
  { name: 'th', value: 'ภาษาไทย' },
  // { name: 'de', value: 'Deutsch' },
  // { name: 'fr', value: 'Français' },
  // { name: 'es', value: 'Español' },
  // { name: 'pt', value: 'Português' },
  // { name: 'zh-CN', value: '简体中文' },
  // { name: 'zh-TW', value: '繁體中文' },
]

export const supportedLanguagesMap: {
  [key: string]: Record<string, any>
} = supportedLanguages.reduce(
  (obj, input) => ({ ...obj, [input.name]: input.value }),
  {},
)
