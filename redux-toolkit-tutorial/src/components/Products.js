import React, { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import CardComp from './Card'
import { getProducts } from '../store/productSlice'
import { getUIData } from '../store/tempSlice'
import { useDispatch, useSelector } from 'react-redux'

function Products () {
  const dispatch = useDispatch()
  const { data: productsData, status } = useSelector(state => state.products)
  const tempData = useSelector(state => state.temp)
  // const [products, setProducts] = useState([])

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getUIData())
    // fetch('https://fakestoreapi.com/products')
    //   .then(resp => resp.json())
    //   .then(data => setProducts(data))
  }, [])

  return (
    <>
      {console.log(tempData)}
      {status === 'loading' ? (
        <div>
          <Alert key='info' variant='info'>
            Loading...
          </Alert>
        </div>
      ) : (
        <>
          <h2>Product Dashboard</h2>
          <CardComp data={productsData} />
        </>
      )}
    </>
  )
}

export default Products
