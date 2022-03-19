import { useSelector } from "react-redux"
import { IState } from "../../../redux/store"

export const ProfileData = () => {
  const email = useSelector((state: IState) => state.authReducer.email)
  const numberPhone = useSelector((state: IState) => state.authReducer.numberPhone)
  return (
    <div>
      <h2>Личные данные</h2>
      <p>Email: {email}</p>
      <p>Номер телефона: {numberPhone}</p>
    </div>
  )
}