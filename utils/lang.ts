import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  de: {
    name: 'Deutsch',
    iso: 'de',
    flag: '🇩🇪',
  },
  es: {
    name: 'Español',
    iso: 'es',
    flag: '🇪🇸',
  },
  ja: {
    name: '日本語',
    iso: 'ja',
    flag: '🇯🇵',
  },
  zh: {
    name: '中文',
    iso: 'zh',
    flag: '🇨🇳',
  },
  lv: {
    name: 'Latviešu',
    iso: 'lv',
    flag: '🇱🇻',
  },
  ee: {
    name: 'Eesti',
    iso: 'ee',
    flag: '🇪🇪',
  },
  lt: {
    name: 'Lietuvių',
    iso: 'lt',
    flag: '🇱🇹',
  },
}

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      return window ? window.navigator.language.substring(0, 2) : 'en'
    } catch (error) {
      return 'en'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init
  }
}
