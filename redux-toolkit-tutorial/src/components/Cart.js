import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

function Cart () {
  // state.cart refers to the cart keyword defined in the store.js file which holds the latest state
  const cartProducts = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const removeProduct = productId => {
    dispatch(remove(productId))
  }
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}
    >
      {cartProducts?.map(product => (
        <Card
          key={product.id}
          style={{
            width: '25rem',
            height: '18rem',
            border: '2px solid ',
            margin: '5px',
            padding: '5px 5px 10px 5px'
          }}
        >
          <Card.Img
            variant='top'
            src={product.image}
            style={{ width: '100px', height: '100px' }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              INR <strong>{product.price}</strong>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ padding: '15px' }}>
            <Button
              style={{
                height: '30px',
                color: 'white',
                background: 'red',
                borderRadius: '10px'
              }}
              variant='danger'
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  )
}

export default Cart
