import { useState } from 'react'
import { useSelector } from 'react-redux'
import { textCategory } from '../../redux/actions/categoriesAction'
import { IState } from '../../redux/store'
import cls from './HeaderMenu.module.css'
import { Submenu } from './Submenu/Submenu'

export const HeaderMenu = () => {
  const [idCategory, setIdCategory] = useState<string>('')
  const currentTheme = useSelector((state: IState) => state.themeReducer.currentTheme)
  const categories = useSelector(
    (state: IState) => state.categoriesReducer.categories
  )
  const isDark = useSelector((state: IState) => state.themeReducer.isDark)
  const classActive = !isDark ? `${cls.categoryActive}` : `${cls.categoryActiveDark}`

  return (
    <div style={{background: currentTheme.backgroundHeader}} className={cls.menu}>
      <div style={{background: currentTheme.backgroundHeader}} className={cls.container}>
        <div className={cls.categoriesWrap}>
          <ul>
            {categories.map((item) => {
              return (
                <li
                  key={item}
                  id={item}
                  className={
                    item === idCategory ||
                    (idCategory === '' && item === 'electronics')
                      ? `${cls.category} ${classActive}`
                      : `${cls.category}`
                  }
                  onMouseOver={(e) => {
                    setIdCategory(e.currentTarget.id)
                  }}
                >
                  {textCategory(item)}
                </li>
              )
            })}
          </ul>
        </div>
        <Submenu textCategory={idCategory}/>
      </div>
    </div>
  )
}
