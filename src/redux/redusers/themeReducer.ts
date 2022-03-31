import { ACTIONS } from '../constans'

interface ITheme {
  colorText: string
  background: string
  backgroundHeader: string
  backgroundFooter: string
  colorTextFooter: string
  colorTextError: string
}

export interface IThemeState {
  isDark: boolean
  currentTheme: ITheme
}

const themeLight = {
  colorText: '#000',
  background: '#fff',
  colorTextFooter: '#464646',
  backgroundHeader: '#f7f7f8',
  backgroundFooter: '#eff0f1',
  colorTextError: 'red',
}

const themeDark = {
  colorText: '#ccc',
  colorTextFooter: '#000',
  background: '#747474',
  backgroundHeader: '#404040',
  backgroundFooter: '#969696',
  colorTextError: '#fda2a2',
}

const defaultState: IThemeState = {
  isDark: false,
  currentTheme: themeLight,
}

export const themeReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.CHANGE_IS_DARK) {
    localStorage.setItem('isDark', `${!state.isDark}`)
    return {
      isDark: !state.isDark,
      currentTheme: !state.isDark ? themeDark : themeLight,
    }
  }

  if (action.type === ACTIONS.INIT_THEME) {
    const isDark = localStorage.getItem('isDark')
    const theme = isDark ? JSON.parse(isDark) : false

    return {
      isDark: theme,
      currentTheme: theme ? themeDark : themeLight,
    }
  }

  return state
}
