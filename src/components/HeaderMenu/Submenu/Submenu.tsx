import { SyntheticEvent, useEffect } from 'react'
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

  const onClickLink = (e: SyntheticEvent<HTMLUListElement>) => {
    if (e.currentTarget.lastChild?.nodeName === 'A') {
      dispatch(closeMenu())
    }
  }

  useEffect(() => {
    dispatch(fetchProductSubcategory(textCategory))
  }, [textCategory])

  return (
    <div className={cls.submenu}>
      <ul onClick={onClickLink}>
        {!textCategory ? (
          <>
            <NavLink to='/electronics/hdd'>Жесткие Диски</NavLink>
            <NavLink to='/electronics/ssd'>SSD</NavLink>
            <NavLink to='/electronics/tv'>Телевизоры</NavLink>
          </>
        ) : null}
        {subcategory
          ? subcategory.map((text: string) => {
              return (
                <NavLink key={text} to={`/${textCategory}/${text}`}>
                  {currenTextSubmenu(text)}
                </NavLink>
              )
            })
          : null}
      </ul>
    </div>
  )
}
