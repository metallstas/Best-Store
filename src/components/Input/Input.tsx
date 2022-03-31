import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../redux/store'
import cls from './Input.module.css'

interface IInput {
  type?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  value: string
  label?: string
  error?: string
  placeholder?: string
}

export const Input = ({
  type = 'text',
  onChange,
  onKeyDown = () => {},
  onFocus = () => {},
  value,
  label,
  error,
  placeholder,
}: IInput) => {
  const currentTheme = useSelector((state: IState) => state.themeReducer.currentTheme)

  return (
    <label>
      {label ? <p>{label}</p> : null}
      <input
        className={cls.input}
        type={type}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        onFocus={(e) => onFocus(e)}
        value={value}
        placeholder={placeholder}
      />
      {error ? <p style={{color: currentTheme.colorTextError}} className={cls.error}>{error}</p> : null}
    </label>
  )
}
