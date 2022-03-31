import { ACTIONS } from '../constans'

export interface IHeaderReducer {
  isOpenMenu: boolean
  showSearch: boolean
  showLogin: boolean
  showRegistration: boolean
  isConfirmRegister: boolean
}

const defaultState: IHeaderReducer = {
  isOpenMenu: false,
  showSearch: false,
  showLogin: false,
  showRegistration: false,
  isConfirmRegister: false,
}

export const headerReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.OPEN_MENU) {
    return { ...state, isOpenMenu: !state.isOpenMenu }
  }

  if (action.type === ACTIONS.CLOSE_MENU) {
    return { ...state, isOpenMenu: false }
  }

  if (action.type === ACTIONS.SHOW_SEARCH) {
    return { ...state, showSearch: action.showSearch }
  }

  if (action.type === ACTIONS.SHOW_LOGIN) {
    return { ...state, showLogin: action.showLogin }
  }

  if (action.type === ACTIONS.SHOW_REGISTRATION) {
    return { ...state, showRegistration: action.showRegistration }
  }

  if (action.type === ACTIONS.CONFIRM_REGISTRATION) {
    return { ...state, isConfirmRegister: action.isConfirmRegister }
  }

  return state
}
