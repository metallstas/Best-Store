import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSearch } from '../../redux/actions/headeAction'
import { setIdProduct } from '../../redux/actions/productCategoryAction'
import { IState } from '../../redux/store'
import { Basket } from '../Basket/Basket'
import { Loading } from '../Loading/Loading'
import cls from './CardProduct.module.css'

interface IProductCard {
  id: number
  title: string
  image: string
  price: number
  category: string
  subcategory: string
}

export const CardProduct = ({
  id,
  subcategory,
  title,
  image,
  price,
  category,
}: IProductCard) => {
  const productId = useSelector(
    (state: IState) => state.productsCategoryReducer.idProduct
  )
  const dispatch = useDispatch()

  const productCategory = category.split(' ').join('')

  const navigate = useNavigate()
  const getInfoProduct = (id: number) => {
    dispatch(showSearch(false))
    navigate(`/${productCategory}/${subcategory}/${id}`)
  }

  const onMouseOverCard = (id: number) => {
    dispatch(setIdProduct(id))
  }

  return (
    <div
      className={cls.product}
      onMouseOver={(e) => onMouseOverCard(+e.currentTarget.id)}
      id={id.toString()}
    >
      <div className={cls.productCard} onClick={() => getInfoProduct(id)}>
        {title ? <img src={image} alt='img' /> : <Loading />}
        <p className={cls.title}>{title}</p>
      </div>
      <div>
        <p className={cls.price}>{price}$</p>
        {id === productId ? (
          <div className={cls.clikedBlock}>
            <Basket id={id} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
