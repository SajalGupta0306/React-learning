import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CollapsibleExample () {
  const cartProducts = useSelector(state => state.cart)
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container
          fluid
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '10px'
          }}
        >
          <Nav.Link to='/' as={Link}>
            My Dashboard
          </Nav.Link>
          <Nav.Link to='/cart' as={Link}>
            Cart - {cartProducts.length} Item/s
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  )
}

export default CollapsibleExample
