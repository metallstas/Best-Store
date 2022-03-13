import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProductId } from "../../redux/actions/productCategoryAction"

export const CardItem = () => {
  const params: {id: string} = useParams()
  console.log(params.id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductId(params.id))
  }, [])
  return (
    <div style={{paddingTop: '100px'}}>HHHHHHHHHH</div>
  )
}