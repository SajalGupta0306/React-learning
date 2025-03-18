import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

function CardComp ({ data }) {
  const dispatch = useDispatch()

  const addToCart = product => {
    dispatch(add(product))
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}
    >
      {data?.map(product => (
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
                color: 'black',
                background: 'lightblue',
                borderRadius: '10px'
              }}
              variant='primary'
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  )
}

export default CardComp
