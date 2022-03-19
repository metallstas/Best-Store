import { SyntheticEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './CardProductMain.module.css'

interface ICardProductMain {
  id: string
  title: string
  image: string
  price: number
  category: string
  subcategory: string
}

export const CardProductMain = ({id, title, image, price, category, subcategory}: ICardProductMain) => {
  const navigate = useNavigate()
  
  const productCategory = category.split(' ').join('')
  const onClick = () => {
    window.scrollTo(0,0)
    navigate(`/${productCategory}/${subcategory}/${id}`)
  }

  return (
    <div onClick={onClick} className={cls.cardMain}>
      <div>
        <img src={image} alt='img' />
        <p className={cls.title}>{title}</p>
      </div>
      <p className={cls.price}>{price}$</p>
    </div>
  )
}
