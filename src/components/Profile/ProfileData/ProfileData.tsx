import { useSelector } from "react-redux"
import { IState } from "../../../redux/store"
import cls from './ProfileData.module.css'

export const ProfileData = () => {
  const email = useSelector((state: IState) => state.authReducer.email)
  const numberPhone = useSelector((state: IState) => state.authReducer.numberPhone)
  return (
    <div className={cls.profileData}>
      <h2 className={cls.title}>Личные данные</h2>
      <p><span>Email:</span> {email}</p>
      <p><span>Номер телефона:</span> {numberPhone}</p>
    </div>
  )
}