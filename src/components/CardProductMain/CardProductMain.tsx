import { MouseEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  changeCountPlus,
  fetchPUTBasket,
} from '../../redux/actions/basketAction'
import { IState } from '../../redux/store'
import cls from './CardProductMain.module.css'

interface ICardProductMain {
  id: string
  title: string
  image: string
  price: number
  category: string
  subcategory: string
  count?: number
  isdelete?: boolean
}

export const CardProductMain = ({
  id,
  title,
  image,
  price,
  category,
  subcategory,
  count,
  isdelete = false,
}: ICardProductMain) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = useSelector((state: IState) => state.authReducer.id)
  const [countProduct, setCountProduct] = useState(1)

  const addCunterOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setCountProduct((prev) => {
      {
        dispatch(changeCountPlus(id, prev + 1))
        return prev + 1
      }
    })
  }

  const removeCunterOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setCountProduct((prev) => {
      if (prev > 1) {
        dispatch(changeCountPlus(id, prev - 1))
        return prev - 1
      }
      return prev
    })
  }

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
          {isdelete ? (
            <div className={cls.countBlock}>
              <button
                onClick={(e) => {
                  addCunterOnClick(e)
                }}
              >
                +
              </button>
              <button onClick={(e) => removeCunterOnClick(e)}>-</button>
              <p className={cls.countProduct}>{`${count}`}</p>
            </div>
          ) : null}
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
