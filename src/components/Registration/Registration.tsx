import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registration } from '../../redux/actions/authAction'
import {
  confirmRegister,
  showRegistration,
} from '../../redux/actions/headeAction'
import { IState } from '../../redux/store'
import { validationService } from '../../services/validation'
import { Input } from '../Input/Input'
import { ConfirmRegister } from './ConfirmRegister/ConfirmRegister'
import cls from './Registration.module.css'

export const Registration = () => {
  const dispatch = useDispatch()
  const confirmReg = useSelector(
    (state: IState) => state.headerReducer.isConfirmRegister
  )
  const [email, setEmail] = useState('')
  const [numberPhone, setNumberPhhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({
    email: '',
    numberPhone: '',
    password: '',
    confirmPassword: '',
  })

  const onClick = () => {
    const errors = {
      email: validationService.validateEmail(email),
      numberPhone: validationService.validateNumberPhone(numberPhone),
      password: validationService.validatePassword(password),
      confirmPassword: validationService.validateRepeatedPassword(
        password,
        confirmPassword
      ),
    }
    setErrors(errors)

    const values = Object.values(errors)
    const isValid = values.every((value) => value === '')

    if (isValid) {
      dispatch(registration({ email, password, numberPhone }))
      dispatch(confirmRegister(true))
    }
  }

  const onChangeEmail = useCallback((value) => {
    setEmail(value)
    const error = validationService.validateEmail(value)
    setErrors((errors) => ({ ...errors, email: error }))
  }, [])

  const onChangenumberPhone = useCallback((value) => {
    setNumberPhhone(value)
    const error = validationService.validateNumberPhone(value)
    setErrors((errors) => ({ ...errors, numberPhone: error }))
  }, [])

  const onChangePassword = useCallback((value) => {
    setPassword(value)
    const error = validationService.validatePassword(value)
    setErrors((errors) => ({ ...errors, password: error }))
  }, [])

  const onChangeConfirmPassword = useCallback((value) => {
    setConfirmPassword(value)
  }, [])

  return (
    <>
      {confirmReg ? (
        <ConfirmRegister />
      ) : (
        <>
          <div className={cls.loginText}>
            <p>Зарегистрироваться</p>
          </div>
          <Input
            type='email'
            label='Электронная Почта'
            value={email}
            onChange={onChangeEmail}
            error={errors.email}
            placeholder={'email@email.com'}
          />
          <Input
            type='tel'
            label='Номер Телефона'
            value={numberPhone}
            onChange={onChangenumberPhone}
            error={errors.numberPhone}
            placeholder={'+375335885858'}
          />
          <Input
            type='password'
            label='Пароль'
            value={password}
            onChange={onChangePassword}
            error={errors.password}
          />
          <Input
            type='password'
            label='Повторите пароль'
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            error={errors.confirmPassword}
          />
          <p className={cls.backToLogin} onClick={() => dispatch(showRegistration(false))}>Войти</p>
          <button onClick={onClick}>Зарегистрироваться</button>
        </>
      )}
    </>
  )
}
