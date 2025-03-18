import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  status: 'idle'
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // fetchProducts (state, action) {
    //   state.data = action.payload
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.data = action.payload
        state.status = 'loading'
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.data = action.payload
        state.status = 'error'
      })
  }
})

// using thunk middleware for calling api
export const getProducts = createAsyncThunk('products/get', async () => {
  const resp = await fetch('https://fakestoreapi.com/products')
  const data = await resp.json()
  return data
})

// export function getProducts () {
//   return async function getProductsThunk (dispatch, getState) {
//     const resp = await fetch('https://fakestoreapi.com/products')
//     const data = await resp.json()
//     dispatch(fetchProducts(data))
//   }
// }

// gives the list of reducers defined in the reducers function above
// export const { fetchProducts } = productSlice.actions
export default productSlice.reducer // gives back the state
