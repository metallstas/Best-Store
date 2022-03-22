import cls from './NoProducts.module.css'

interface INoProducts {
  text: string
}

export const NoProducts = ({text}: INoProducts) => {
  return (
    <div className={cls.noProducts}>
      <img src='/images/noProducts.png' alt='No roducts' />
      <p>{text}</p>
    </div>
  )
}
