import { MouseEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchPUTBasket } from '../../redux/actions/basketAction'
import { IState } from '../../redux/store'
import cls from './CardProductMain.module.css'

interface ICardProductMain {
  id: string
  title: string
  image: string
  price: number
  category: string
  subcategory: string
  isdelete?: boolean
}

export const CardProductMain = ({
  id,
  title,
  image,
  price,
  category,
  subcategory,
  isdelete = false,
}: ICardProductMain) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = useSelector((state: IState) => state.authReducer.id)

  const productCategory = category.split(' ').join('')
  const onClick = () => {
    window.scrollTo(0, 0)
    navigate(`/${productCategory}/${subcategory}/${id}`)
  }

  const onClickDeleteProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(fetchPUTBasket(id, userId))
  }

  return (
    <>
      <div onClick={onClick} className={cls.cardMain}>
        <div className={cls.cardMainInfo}>
          <div>
            <img src={image} alt='img' />
            <p className={cls.title}>{title}</p>
          </div>
          <p className={cls.price}>{price}$</p>
        </div>
        {isdelete ? (
          <div>
            <button
              onClick={(e) => onClickDeleteProduct(e)}
              className={cls.delete}
            >
              X
            </button>
          </div>
        ) : null}
      </div>
    </>
  )
}
