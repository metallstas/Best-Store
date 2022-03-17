import { useDispatch } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goOutProfile } from '../../redux/actions/authAction'
import cls from './Profile.module.css'

export const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const clickToLogOut = () => {
    dispatch(goOutProfile())
    navigate('/')
  }

  return (
    <div className={cls.container}>
      <div className={cls.navProfileWrapper}>
        <h1>Мои данные</h1>
        <ul className={cls.navProfile}>
          <NavLink to='myProfile'>Мои данные</NavLink>
          <NavLink to='myDiscount'>Моя скидка</NavLink>
          <p onClick={clickToLogOut}>Выйти</p>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
