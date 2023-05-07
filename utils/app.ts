import { ThemeManager } from './theme'
import { LanguageManager } from './lang'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup () {
  // declare app information
  const app: IApp = {
    name: 'ThickLine Apps',
    author: {
      name: 'thickline',
      link: 'https://github.com/thickline'
    }
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  return {
    app,
    themeManager,
    languageManager
  }
}
