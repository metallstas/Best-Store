import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchCategories, textCategory } from '../../redux/actions/categoriesAction'
import { IState } from '../../redux/store'
import { Spiner } from '../Spiner/Spiner'
import cls from './Categories.module.css'

export const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(
    (state: IState) => state.categoriesReducer.categories
  )
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  return (
    <div className={cls.categories}>
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
          <Spiner />
        )}
      </ul>
    </div>
  )
}
