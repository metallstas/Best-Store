import { ACTIONS } from '../constans'

export interface IAuthReducer {
  email: string
  password: string
  id: string
  numberPhone: string
  isLoggedIn: boolean
  errorLogin: string
}

const defaultState: IAuthReducer = {
  email: '',
  password: '',
  numberPhone: '',
  id: '',
  isLoggedIn: false,
  errorLogin: '',
}

export const authReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.REGISTRATION_USER) {
    return {
      ...state,
      email: action.email,
      password: action.password,
      id: action.id,
      numberPhone: action.numberPhone,
    }
  }

  if (action.type === ACTIONS.CHANGE_EMAIL) {
    return {...state, email: action.newEmail}
  }

  if (action.type === ACTIONS.CHANGE_NUMBER_PHONE) {
    return {...state, numberPhone: action.newNumberPhone}
  }

  if (action.type === ACTIONS.LOGIN) {
    return {
      ...state,
      email: action.email,
      password: action.password,
      id: action.id,
      numberPhone: action.numberPhone,
      isLoggedIn: true,
    }
  }

  if (action.type === ACTIONS.GET_USER) {
    return {...state, ...action.user}
  }

  if (action.type === ACTIONS.ERROR_LOGIN) {
    return {
      ...state,
      errorLogin: action.errorLogin,
    }
  }

  if (action.type === ACTIONS.GO_OUT_PROFILE) {
    return {
      defaultState
    }
  }

  return state
}
