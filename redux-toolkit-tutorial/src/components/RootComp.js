import React from 'react'
import { Outlet } from 'react-router-dom'
import CollapsibleExample from './Navbar'
import { Provider } from 'react-redux'
import store from '../store/store'

function RootComp () {
  return (
    <Provider store={store}>
      <CollapsibleExample />
      <main>
        <Outlet />
      </main>
    </Provider>
  )
}

export default RootComp
