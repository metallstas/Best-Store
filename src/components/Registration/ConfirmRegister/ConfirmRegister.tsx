import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmRegister, showLogin, showRegistration } from '../../../redux/actions/headeAction'
import { IState } from '../../../redux/store'
import cls from './ConfirmRegister.module.css'

export const ConfirmRegister = () => {
  const dispatch = useDispatch()
  // const confirmReg = useSelector((state: IState) => state.headerReducer.isConfirmRegister)
  // useEffect(() => {
  //   if(confirmReg) {setTimeout(() => {
  //     dispatch(showLogin(false))
  //   }, 2000)}
  // }, [])

  return (
    <div className={cls.confirmRegister}>
      <h2>Поздравляем Вы успешно зарегистрированы!</h2>
      <button onClick={() => {dispatch(showRegistration(false))}}>Войти</button>
    </div>
  )
}
