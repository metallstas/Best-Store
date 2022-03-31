import { useEffect, useState } from 'react'
import cls from './PopupMessage.module.css'

interface IPopupMessage {
  isShowMessage: boolean
  text: string
  isError?: boolean
}

export const PopupMessage = ({
  isShowMessage,
  text,
  isError = false,
}: IPopupMessage) => {
  const background = isError ? 'red' : 'green'

  return (
    <span
      style={{ background: background }}
      className={isShowMessage ? `${cls.message} ${cls.active}` : cls.message}
    >
      {text}
    </span>
  )
}
