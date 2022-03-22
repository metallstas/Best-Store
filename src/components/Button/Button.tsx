import cls from './Button.module.css'

interface IButton {
  text: string
  onClick?: () => void
}

export const Button = ({text, onClick}: IButton) => {
  return <button onClick={onClick} className={cls.button}>{text}</button>
}
