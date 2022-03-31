import { ACTIONS } from "../constans"

export const changeTheme = () => {
  return {type: ACTIONS.CHANGE_IS_DARK}
}

export const initTheme = () => {
  return {type: ACTIONS.INIT_THEME}
}
