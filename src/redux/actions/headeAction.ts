import { ACTIONS } from "../constans"

export const openMenu = () => {
  return {type: ACTIONS.OPEN_MENU}
}

export const closeMenu = () => {
  return {type: ACTIONS.CLOSE_MENU}
}

export const showSearch = () => {
  return {type: ACTIONS.SHOW_SEARCH}
}
