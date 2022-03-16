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

  if (action.type === ACTIONS.ERROR_LOGIN) {
    return {
      ...state,
      errorLogin: action.errorLogin,
    }
  }

  return state
}
