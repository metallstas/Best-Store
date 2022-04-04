import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchCategories, textCategory } from '../../redux/actions/categoriesAction'
import { IState } from '../../redux/store'
import { Spinner } from '../Spinner/Spinner'
import cls from './Categories.module.css'

export const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(
    (state: IState) => state.categoriesReducer.categories
  )
  const currentTheme = useSelector((state: IState) => state.themeReducer.currentTheme)
  const isDark = useSelector((state: IState) => state.themeReducer.isDark)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <div style={{background: isDark ? currentTheme.backgroundFooter : '#fff'}} className={cls.categories}>
      <ul>
        {categories.length ? (
          categories.map((item) => {
            const link = item.split(' ').join('')
            return (
              <NavLink to={`${link}`} key={link}>
                {textCategory(item)}
              </NavLink>
            )
          })
        ) : (
          <Spinner />
        )}
      </ul>
    </div>
  )
}
