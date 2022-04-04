import { Spinner } from '../Spinner/Spinner'
import cls from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={cls.loadingBlock}>
      <Spinner />
      <p>Loading...</p>
    </div>
  )
}
