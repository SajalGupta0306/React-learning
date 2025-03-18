import './App.css'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import RootComp from './components/RootComp'

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootComp />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
