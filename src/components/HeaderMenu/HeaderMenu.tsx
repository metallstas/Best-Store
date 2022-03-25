import { useState } from 'react'
import { useSelector } from 'react-redux'
import { textCategory } from '../../redux/actions/categoriesAction'
import { IState } from '../../redux/store'
import cls from './HeaderMenu.module.css'
import { Submenu } from './Submenu/Submenu'

export const HeaderMenu = () => {
  const [idCategory, setIdCategory] = useState<string>('')

  const categories = useSelector(
    (state: IState) => state.categoriesReducer.categories
  )

  return (
    <div className={cls.menu}>
      <div className={cls.container}>
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
                      ? `${cls.category} ${cls.categoryActive}`
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
