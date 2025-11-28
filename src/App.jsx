import React from 'react'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'


function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body/>}>
            <Route path='/' element={<Feed/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path = '/profile' element={<Profile/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
      {/* <NavBar/>
      <h1 className='text-3xl font-bold'>Hello</h1> */}
    </Provider>
    </>
  )
}

export default App
