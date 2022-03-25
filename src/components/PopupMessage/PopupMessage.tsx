import cls from './PopupMessage.module.css'

interface IPopupMessage {
  isShowMessage: boolean
  text: string
}

export const PopupMessage = ({isShowMessage, text}: IPopupMessage) => {
  return (
    <span
      className={
        isShowMessage ? `${cls.changeEmail} ${cls.active}` : cls.changeEmail
      }
    >
      {text}
    </span>
  )
}
