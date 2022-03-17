import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { errorLogin, login } from '../../redux/actions/authAction'
import { showLogin, showRegistration } from '../../redux/actions/headeAction'
import { IState } from '../../redux/store'
import { validationService } from '../../services/validation'
import { Input } from '../Input/Input'
import { Registration } from '../Registration/Registration'
import cls from './Login.module.css'

export const Login = () => {
  const dispatch = useDispatch()
  const showReg = useSelector(
    (state: IState) => state.headerReducer.showRegistration
  )
  const errorLoginText = useSelector(
    (state: IState) => state.authReducer.errorLogin
  )
  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    dispatch(showRegistration(false))
    dispatch(errorLogin(''))
  }, [])

  const onChangePassword = useCallback((value) => {
    setPassword(value)
  }, [])

  const onChangeEmail = useCallback((value) => {
    setEmail(value)
    const error = validationService.validateEmail(value)
    setErrors((errors) => ({ ...errors, email: error }))
  }, [])

  const onCLick = () => {
    const errors = {
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
    }

    setErrors(errors)
    const values = Object.values(errors)
    const isValid = values.every((value) => value === '')

    if (isValid) {
      dispatch(login(email, password))
    }
    if (isLoggedIn) {
      dispatch(showLogin(false))
    }
  }

  return (
    <>
      <div
        className={cls.background}
        onClick={() => dispatch(showLogin(false))}
      ></div>
      <div className={cls.login}>
        {showReg ? (
          <Registration />
        ) : (
          <>
            <div className={cls.loginText}>
              <p>Войти </p> или
              <p onClick={() => dispatch(showRegistration(true))}>
                Зарегистрироваться
              </p>
            </div>
            <Input
              type='email'
              label='Электронная Почта'
              value={email}
              onChange={onChangeEmail}
              placeholder={'email@email.com'}
              error={errors.email}
            />
            <Input
              type='password'
              label='Пароль'
              value={password}
              onChange={onChangePassword}
              error={errors.password}
            />
            {errorLoginText ? (
              <p style={{ color: 'red' }}>{errorLoginText}</p>
            ) : null}

            <button onClick={onCLick}>Войти</button>
          </>
        )}
      </div>
    </>
  )
}
