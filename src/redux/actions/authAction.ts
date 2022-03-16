import { Dispatch } from 'redux'
import { loginUser, registerUser } from '../../services/auth'
import { idGenerator } from '../../services/idGenerator'
import { ACTIONS } from '../constans'
import { confirmRegister, showLogin, showRegistration } from './headeAction'

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

export const registration = ({
  email,
  password,
  numberPhone,
}: IRegistration) => {
  return async (dispatch: Dispatch) => {
    try {
      const id = idGenerator()
      const result = await registerUser({ email, password, id, numberPhone })
      console.log(result)
      dispatch(registerSuccess(result))
      dispatch(confirmRegister(true))
      // setTimeout(() => {
        // dispatch(showLogin(false))
      // }, 2000)
    } catch (error: any) {
      console.log(error)
    }
  }
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await loginUser(email, password)
      console.log(result)
      if (result.length) {
        dispatch(errorLogin(''))
        dispatch(loginSuccess(result[0]))
        dispatch(showLogin(false))
        return
      }
      throw result
    } catch (error) {
      console.log(error)
      dispatch(errorLogin('Неверная почта или пароль'))
    }
  }
}
