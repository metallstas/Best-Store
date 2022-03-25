import { useDispatch } from 'react-redux'
import { showRegistration } from '../../../redux/actions/headeAction'
import cls from './ConfirmRegister.module.css'

export const ConfirmRegister = () => {
  const dispatch = useDispatch()

  return (
    <div className={cls.confirmRegister}>
      <h2>Поздравляем Вы успешно зарегистрированы!</h2>
      <button onClick={() => {dispatch(showRegistration(false))}}>Войти</button>
    </div>
  )
}
