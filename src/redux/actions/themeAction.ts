import { Dispatch } from 'redux'
import { ACTIONS } from '../constans'

const changeTheme = () => {
  return { type: ACTIONS.CHANGE_IS_DARK }
}

const initTheme = (theme: boolean) => {
  return { type: ACTIONS.INIT_THEME, theme }
}

export const fetchChangeTheme = () => {
  return (dispatch: Dispatch) => {
    const isDark = localStorage.getItem('isDark')
    localStorage.setItem('isDark', `${isDark ? !JSON.parse(isDark) : !false}`)
    dispatch(changeTheme())
  }
}

export const fetchInitTheme = () => {
  return (dispatch: Dispatch) => {
    const isDark = localStorage.getItem('isDark')
    const theme = isDark ? JSON.parse(isDark) : false
    dispatch(initTheme(theme))
  }
}
