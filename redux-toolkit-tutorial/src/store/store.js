import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productSlice from './productSlice'
import tempSlice from './tempSlice'

// holds all the slices created
const store = configureStore({
  reducer: {
    // cart keyword holds the latest state defined in the cartSlice
    cart: cartSlice,
    products: productSlice,
    temp: tempSlice
  }
})

export default store
