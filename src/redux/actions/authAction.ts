import { Dispatch } from 'redux'
import { loginUser, registerUser } from '../../services/auth'
import { idGenerator } from '../../services/idGenerator'
import { ACTIONS } from '../constans'
import { confirmRegister, showLogin } from './headeAction'

interface IRegistration {
  email: string
  password: string
  id?: string
  numberPhone: string
}

const registerSuccess = (profile: IRegistration) => {
  return { type: ACTIONS.REGISTRATION_USER, ...profile }
}

const loginSuccess = (profile: IRegistration) => {
  return { type: ACTIONS.LOGIN, ...profile }
}

export const errorLogin = (error: string) => {
  return { type: ACTIONS.ERROR_LOGIN, errorLogin: error }
}

export const goOutProfile = () => {
  localStorage.removeItem('email')
  localStorage.removeItem('password')

  return { type: ACTIONS.GO_OUT_PROFILE}
}

export const registration = ({
  email,
  password,
  numberPhone,
}: IRegistration) => {
  return async (dispatch: Dispatch) => {
    try {
      const id = idGenerator()
      const result = await registerUser({ email, password, id, numberPhone })
      dispatch(registerSuccess(result))
      dispatch(confirmRegister(true))
    } catch (error: any) {
    }
  }
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await loginUser(email, password)
      if (result.length) {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        dispatch(errorLogin(''))
        dispatch(loginSuccess(result[0]))
        dispatch(showLogin(false))
        return
      }
      throw result
    } catch (error) {
      dispatch(errorLogin('Неверная почта или пароль'))
    }
  }
}

export const init = () => {
  return async (dispatch: Dispatch) => {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    if (email && password) {
      const result = await loginUser(email, password)
      dispatch(loginSuccess(result[0]))
    }
  }
}
