import cls from './Input.module.css'

interface IInput {
  type?: string
  onChange: (value: string) => void
  value: string
  label: string
  error?: string
  placeholder?: string
}

export const Input = ({
  type = 'text',
  onChange,
  value,
  label,
  error,
  placeholder,
}: IInput) => {
  return (
    <label>
      {label ? <p>{label}</p> : null}
      <input
        className={cls.input}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
      {error ? <p className={cls.error}>{error}</p> : null}
    </label>
  )
}
