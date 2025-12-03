import React from 'react'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Connections from './components/Connections'
import Requests from './components/Requests'


function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body/>}>
            <Route index element={<Feed/>}/>
            <Route path='login' element={<Login/>} />
            <Route path = 'profile' element={<Profile/>}/>
            <Route path='connections' element={<Connections/>}/>
            <Route path='requests' element={<Requests/>}/>
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
