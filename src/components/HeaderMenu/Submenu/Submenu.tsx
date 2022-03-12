import { SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { textCategory } from '../../../redux/actions/categoriesAction'
import { closeMenu } from '../../../redux/actions/headeAction'
import cls from './Submenu.module.css'

interface ISubmenu {
  text: string
}

export const Submenu = ({ text }: ISubmenu) => {
  const dispatch = useDispatch()

  const onClickLink = (e: SyntheticEvent<HTMLUListElement>) => {
    if (e.currentTarget.lastChild?.nodeName === 'A') {
      dispatch(closeMenu())
    }
  }

  return (
    <div className={cls.submenu}>
      <ul onClick={onClickLink}>
        {text === '' ? (
          <>
            <NavLink to={`/${text}/hdd`} exact>
              Жесткие Диски
            </NavLink>
            <NavLink to={`/${text}/ssd`} exact>
              SSD
            </NavLink>
            <NavLink to={`/${text}/tv`} exact>
              Телевизоры
            </NavLink>
          </>
        ) : null}
        {textCategory(text) === 'Электроника' ? (
          <>
            <NavLink to={`/${text}/hdd`} exact>
              Жесткие Диски
            </NavLink>
            <NavLink to={`/${text}/ssd`} exact>
              SSD
            </NavLink>
            <NavLink to={`/${text}/tv`} exact>
              Телевизоры
            </NavLink>
          </>
        ) : null}
        {textCategory(text) === 'Украшения' ? (
          <>
            <NavLink to={`/${text}/rings`} exact>
              Кольца
            </NavLink>
            <NavLink to={`/${text}/bracelets`} exact>
              Браслеты
            </NavLink>
          </>
        ) : null}
        {textCategory(text) === 'Женская одежда' ? (
          <>
            <NavLink to={`/${text}/T-shirts`} exact>
              Майки
            </NavLink>
            <NavLink to={`/${text}/jackets`} exact>
              Куртки
            </NavLink>
          </>
        ) : null}
        {textCategory(text) === 'Мужская одежда' ? (
          <>
            <NavLink to={`/${text}/T-shirts`} exact>
              Майки
            </NavLink>
            <NavLink to={`/${text}/jackets`} exact>
              Куртки
            </NavLink>
            <NavLink to={`/${text}/bags`} exact>
              Сумки
            </NavLink>
          </>
        ) : null}
      </ul>
    </div>
  )
}
