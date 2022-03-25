import { ACTIONS } from '../constans'

export const openMenu = () => {
  return { type: ACTIONS.OPEN_MENU }
}

export const closeMenu = () => {
  return { type: ACTIONS.CLOSE_MENU }
}

export const showSearch = (isShow: boolean) => {
  return { type: ACTIONS.SHOW_SEARCH, showSearch: isShow }
}

export const showLogin = (isShow: boolean) => {
  return { type: ACTIONS.SHOW_LOGIN, showLogin: isShow }
}

export const showRegistration = (isRegister: boolean) => {
  return { type: ACTIONS.SHOW_REGISTRATION, showRegistration: isRegister}
}

export const confirmRegister = (confirmRegister: boolean) => {
  return {type: ACTIONS.CONFIRM_REGISTRATION, isConfirmRegister: confirmRegister}
}
