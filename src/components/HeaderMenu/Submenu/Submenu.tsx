import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { closeMenu } from '../../../redux/actions/headeAction'
import { fetchProductSubcategory } from '../../../redux/actions/productCategoryAction'
import { currenTextSubmenu } from '../../../redux/constans'
import { IState } from '../../../redux/store'
import cls from './Submenu.module.css'

interface ISubmenu {
  textCategory: string
}

export const Submenu = ({ textCategory }: ISubmenu) => {
  const dispatch = useDispatch()
  const subcategory = useSelector(
    (state: IState) => state.productsCategoryReducer.subcategory
  )
  const currentTheme = useSelector(
    (state: IState) => state.themeReducer.currentTheme
  )
  const isDark = useSelector((state: IState) => state.themeReducer.isDark)

  const onClickLink = () => {
    dispatch(closeMenu())
  }

  useEffect(() => {
    dispatch(fetchProductSubcategory(textCategory))
  }, [textCategory])

  return (
    <div
      style={{ background: isDark ? ' #5f5f5f' : '' }}
      className={cls.submenu}
    >
      <ul>
        {!textCategory ? (
          <div
            onClick={onClickLink}
            style={{ color: currentTheme.colorTextFooter }}
          >
            <NavLink to='/electronics/hdd'>Жесткие Диски</NavLink>
            <NavLink to='/electronics/ssd'>SSD</NavLink>
            <NavLink to='/electronics/tv'>Телевизоры</NavLink>
          </div>
        ) : null}
        {subcategory
          ? subcategory.map((text: string) => {
              return (
                <div
                  onClick={onClickLink}
                  style={{ color: currentTheme.colorTextFooter }}
                  key={text}
                >
                  <NavLink
                    key={text}
                    to={`/${textCategory.split(' ').join('')}/${text}`}
                  >
                    {currenTextSubmenu(text)}
                  </NavLink>
                </div>
              )
            })
          : null}
      </ul>
    </div>
  )
}
