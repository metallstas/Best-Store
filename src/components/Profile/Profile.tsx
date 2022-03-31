import { useDispatch } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goOutProfile } from '../../redux/actions/authAction'
import { clearBasket } from '../../redux/actions/basketAction'
import { clearFavorites } from '../../redux/actions/favoritesAction'
import cls from './Profile.module.css'

export const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const clickToLogOut = () => {
    dispatch(clearBasket())
    dispatch(clearFavorites())
    dispatch(goOutProfile())
    navigate('/')
  }

  const isActiveLink = ({isActive}: any) => isActive ? cls.active : ''

  return (
    <div className={cls.container}>
      <div className={cls.navProfileWrapper}>
        <p className={cls.profileTitle}>Мои данные</p>
        <ul className={cls.navProfile}>
          <NavLink className={isActiveLink} to='myProfile'>Мои данные</NavLink>
          <NavLink className={isActiveLink} to='myDiscount'>Персональная скидка</NavLink>
          <p onClick={clickToLogOut}>Выйти</p>
        </ul>
      </div>
      <div className={cls.containerPage}>
        <Outlet />
      </div>
    </div>
  )
}
