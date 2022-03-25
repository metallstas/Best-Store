import { Spiner } from '../Spiner/Spiner'
import cls from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={cls.loadingBlock}>
      <Spiner />
      <p>Loading...</p>
    </div>
  )
}
