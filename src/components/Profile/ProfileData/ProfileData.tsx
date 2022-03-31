import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchChangeEmail,
  EmailChange,
  fetchChangeNumberPhone,
  NumberPhoneChange,
  fetchGetUser,
} from '../../../redux/actions/authAction'
import { IState } from '../../../redux/store'
import { validationService } from '../../../services/validation'
import { Input } from '../../Input/Input'
import { PopupMessage } from '../../PopupMessage/PopupMessage'
import cls from './ProfileData.module.css'

export const ProfileData = () => {
  const dispatch = useDispatch()
  const email = useSelector((state: IState) => state.authReducer.email)
  const userId = useSelector((state: IState) => state.authReducer.id)
  const [newEmail, setNewEmail] = useState('')
  const [newNumberPhone, setNewNumberPhone] = useState('')
  const [emailOk, setEmailOk] = useState(false)
  const [numberPhoneOk, setNumberPhoneOk] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    numberPhone: '',
  })
  const numberPhone = useSelector(
    (state: IState) => state.authReducer.numberPhone
  )

  useEffect(() => {
    dispatch(fetchGetUser(userId))
  }, [])

  useEffect(() => {
    dispatch(EmailChange(newEmail))
  }, [emailOk])

  useEffect(() => {
    dispatch(NumberPhoneChange(newNumberPhone))
  }, [numberPhoneOk])

  const onFocusEmail = useCallback((e) => {
    setEmailOk(false)
  }, [])

  const onFocusNUmberPhone = useCallback((e) => {
    setNumberPhoneOk(false)
  }, [])

  const onChangeEmail = useCallback((event) => {
    setNewEmail(() => event.target.value)
    const error = validationService.validateEmail(event.target.value)
    setErrors((errors) => ({ ...errors, email: error }))
  }, [])

  const onChangeNumberPhone = useCallback((event) => {
    setNewNumberPhone(event.target.value)
    const error = validationService.validateNumberPhone(event.target.value)
    setErrors((errors) => ({ ...errors, numberPhone: error }))
  }, [])

  const onKeyDownEmail = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        const valideEmail = validationService.validateEmail(newEmail)

        const errorsValidate = {
          ...errors,
          email: valideEmail,
        }

        setErrors(() => errorsValidate)

        const isValid = valideEmail === ''

        if (isValid) {
          dispatch(fetchChangeEmail(newEmail, userId))
          setEmailOk(true)
          setTimeout(() => {
            setEmailOk(false)
          }, 3000)
          return
        }
      }
    },
    [newEmail]
  )

  const onKeyDownNumberPhone = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        const valideNumberPhone =
          validationService.validateNumberPhone(newNumberPhone)

        const errorsValidate = {
          ...errors,
          numberPhone: valideNumberPhone,
        }

        setErrors(() => errorsValidate)

        const isValid = valideNumberPhone === ''

        if (isValid) {
          dispatch(fetchChangeNumberPhone(newNumberPhone, userId))
          setNumberPhoneOk(true)
          setTimeout(() => {
            setNumberPhoneOk(false)
          }, 3000)
          return
        }
      }
    },
    [newNumberPhone]
  )

  return (
    <div className={cls.profileData}>
      <h2 className={cls.title}>Личные данные</h2>
      <div className={cls.profileRedact}>
        <p>
          <span>Email:</span> {email}
        </p>
        <div className={cls.inputWrap}>
          <Input
            value={newEmail}
            onChange={onChangeEmail}
            placeholder={email}
            error={errors.email}
            onKeyDown={onKeyDownEmail}
            onFocus={onFocusEmail}
          />
          <PopupMessage
            text='Вы упешно сменили свой email'
            isShowMessage={emailOk}
          />
        </div>
      </div>
      <div className={cls.profileRedact}>
        <p>
          <span>Номер телефона:</span> {numberPhone}
        </p>
        <div className={cls.inputWrap}>
          <Input
            value={newNumberPhone}
            onChange={onChangeNumberPhone}
            placeholder={numberPhone}
            error={errors.numberPhone}
            onFocus={onFocusNUmberPhone}
            onKeyDown={onKeyDownNumberPhone}
          />
          <PopupMessage
            text='Вы упешно сменили свой номер телефона'
            isShowMessage={numberPhoneOk}
          />
        </div>
      </div>
    </div>
  )
}
