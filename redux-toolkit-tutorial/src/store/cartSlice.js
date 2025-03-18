import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add (state, action) {
      state.push(action.payload)
    },

    remove (state, action) {
      return state.filter(product => product.id !== action.payload)
    }
  }
})

export const { add, remove } = cartSlice.actions // gives the list of reducers defined in the reducers function above
export default cartSlice.reducer // gives back the state
